#!/usr/bin/env node
/**
 * gravitee-api-auth.mjs
 *
 * Provider: Gravitee.io API Management (APIM), self-hosted / BYO-deploy.
 * What it does: Creates (or reuses) an Application via the Gravitee Management API,
 *   subscribes it to an API plan, and prints the resulting API key — the Gravitee
 *   equivalent of SoundCloud's client_id/client_secret. With --api you get a full
 *   create-app -> subscribe -> read-key flow; without it, it just creates/reuses the app.
 *
 * Auth model: BUCKET (b). Gravitee's Management API authenticates with a Personal
 *   Access Token (PAT). You generate the PAT once in the APIM Console
 *   (your user profile -> Tokens -> "Generate a personal token") and paste it via
 *   an env var. No browser dance is needed because the Management API is a first-class
 *   admin API. (Gravitee Access Management *also* does true RFC 7591 Dynamic Client
 *   Registration at {AM_GATEWAY}/{domain}/oidc/register — a separate product; see the
 *   blog post that ships with this script.)
 *
 * Env vars (required):
 *   GRAVITEE_BASE_URL  Base URL of your Management API, e.g. https://apim.example.com
 *                      (the script appends /management/... itself)
 *   GRAVITEE_TOKEN     Personal Access Token (PAT). Sent as: Authorization: Bearer <token>
 * Env vars (optional):
 *   GRAVITEE_ENV       Environment id (default "DEFAULT")
 *   GRAVITEE_ORG       Organization id (default "DEFAULT")
 *
 * Node 18+ (uses global fetch). Node stdlib only — no npm install.
 *
 * Docs:
 *   https://documentation.gravitee.io/apim/how-to-guides/use-case-tutorials/create-applications-and-subscriptions-using-the-management-api
 *   https://documentation.gravitee.io/apim/getting-started/use-case-tutorials/create-and-publish-an-api-using-the-management-api
 *   https://docs.gravitee.io/am/current/am_userguide_dynamic_client_registration.html  (AM DCR)
 */
import { parseArgs } from "node:util";
import process from "node:process";

function env(name, fallback) {
  const v = process.env[name];
  return v === undefined || v === "" ? fallback : v;
}

const BASE_URL = env("GRAVITEE_BASE_URL");
const TOKEN = env("GRAVITEE_TOKEN");
const ENVIRONMENT = env("GRAVITEE_ENV", "DEFAULT");
const ORGANIZATION = env("GRAVITEE_ORG", "DEFAULT");

function usage() {
  return `Usage: gravitee-api-auth [options]

  Creates (or reuses) a Gravitee Application via the Management API and, when an
  API is given, subscribes to one of its plans and prints the API key.

Options:
  --name           Required. Application name.
  --description    Optional. Application description.
  --api            Optional. API id to subscribe to. If omitted, the app is just
                   created/reused and its id is printed.
  --plan           Optional. Plan id to subscribe to. If omitted with --api, the
                   first API-key plan found on the API is used.
  -h, --help

Environment:
  GRAVITEE_BASE_URL  Required. e.g. https://apim.example.com
  GRAVITEE_TOKEN     Required. Personal Access Token (Console -> profile -> Tokens).
  GRAVITEE_ENV       Optional. Environment id (default DEFAULT).
  GRAVITEE_ORG       Optional. Organization id (default DEFAULT).

Example:
  GRAVITEE_BASE_URL=https://apim.example.com GRAVITEE_TOKEN=xxxxx \\
    node gravitee-api-auth.mjs --name "My Agent" --api 4984c004-... 
`;
}

function fail(msg) {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

// --- Management API helper -------------------------------------------------
// Auth is a Personal Access Token sent as a bearer token.
async function gv(path, { method = "GET", body } = {}) {
  const url = `${BASE_URL.replace(/\/+$/, "")}${path}`;
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${TOKEN}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  return { res, json, text };
}

const mgmtV1 = (p) =>
  `/management/organizations/${ORGANIZATION}/environments/${ENVIRONMENT}${p}`;
const mgmtV2 = (p) =>
  `/management/v2/organizations/${ORGANIZATION}/environments/${ENVIRONMENT}${p}`;

// --- Application: create or reuse ------------------------------------------
async function findExistingApplication(name) {
  // mAPI v1 lists the caller's applications. Filter by exact name.
  const { res, json } = await gv(mgmtV1("/applications"));
  if (!res.ok) return null;
  const list = Array.isArray(json) ? json : json?.data || [];
  return list.find((a) => a?.name === name) || null;
}

async function createOrReuseApplication({ name, description }) {
  // App creation uses mAPI v1.
  const { res, json, text } = await gv(mgmtV1("/applications"), {
    method: "POST",
    body: { name, description: description ?? "" },
  });
  if (res.status === 201 || res.status === 200) {
    return { app: json, existing: false };
  }
  // Some deployments reject a duplicate name; fall back to lookup-and-reuse.
  if (res.status === 400 || res.status === 409) {
    const existing = await findExistingApplication(name);
    if (existing) return { app: existing, existing: true };
  }
  throw new Error(
    `Create application (POST ${mgmtV1("/applications")}) failed: ${res.status} ${text}`
  );
}

// --- Subscription + API key ------------------------------------------------
async function pickApiKeyPlan(apiId, planArg) {
  if (planArg) return planArg;
  // NOTE: verify — plan listing shape varies across APIM versions; this path is
  // the documented v2 plans listing. If your version differs, pass --plan explicitly.
  const { res, json } = await gv(mgmtV2(`/apis/${apiId}/plans`));
  if (!res.ok) {
    throw new Error(
      `List plans (GET ${mgmtV2(`/apis/${apiId}/plans`)}) failed: ${res.status}. ` +
        `Pass --plan <planId> explicitly.`
    );
  }
  const plans = Array.isArray(json) ? json : json?.data || [];
  const keyPlan =
    plans.find((p) => (p?.security?.type || p?.security) === "API_KEY") ||
    plans.find((p) => /api[_-]?key/i.test(p?.security?.type || p?.security || "")) ||
    plans[0];
  if (!keyPlan?.id) {
    throw new Error("No subscribable plan found on the API. Pass --plan <planId>.");
  }
  return keyPlan.id;
}

async function subscribeAndGetKey({ apiId, applicationId, planId }) {
  const subPath = mgmtV2(`/apis/${apiId}/subscriptions`);
  const { res, json, text } = await gv(subPath, {
    method: "POST",
    body: { applicationId, planId },
  });
  if (res.status !== 201 && res.status !== 200) {
    throw new Error(`Create subscription (POST ${subPath}) failed: ${res.status} ${text}`);
  }
  const subscriptionId = json?.id || json?.data?.id;
  if (!subscriptionId) throw new Error("Subscription created but no id returned.");

  // Retrieve the autogenerated API key. Key lives at data[0].key.
  const keyPath = mgmtV2(`/apis/${apiId}/subscriptions/${subscriptionId}/api-keys`);
  const { res: kRes, json: kJson, text: kText } = await gv(keyPath);
  if (!kRes.ok) {
    throw new Error(`Read API keys (GET ${keyPath}) failed: ${kRes.status} ${kText}`);
  }
  const keys = Array.isArray(kJson) ? kJson : kJson?.data || [];
  const apiKey = keys[0]?.key;
  if (!apiKey) throw new Error("Subscription has no API key yet (it may be pending approval).");
  return { subscriptionId, apiKey };
}

// --- Output ----------------------------------------------------------------
function printResult({ app, existing, apiId, planId, subscriptionId, apiKey }) {
  const out = {
    application_id: app?.id,
    application_name: app?.name,
    application_client_id: app?.settings?.app?.client_id || app?.settings?.oauth?.client_id,
  };
  if (apiId) {
    out.api_id = apiId;
    out.plan_id = planId;
    out.subscription_id = subscriptionId;
    out.api_key = apiKey;
  }
  const lines = [];
  // Gravitee's "client_id" lives only on OAuth/DCR app types; the api_key is the
  // SoundCloud-equivalent credential for an API-key plan.
  if (out.application_client_id) lines.push(`client_id=${out.application_client_id}`);
  if (out.api_key) lines.push(`api_key=${out.api_key}`);
  lines.push("", JSON.stringify(out, null, 2), "");
  if (existing) console.error("Reused an existing application with the same name.");
  process.stdout.write(lines.join("\n"));
}

// --- Main ------------------------------------------------------------------
async function main() {
  const { values } = parseArgs({
    options: {
      name: { type: "string" },
      description: { type: "string" },
      api: { type: "string" },
      plan: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: false,
  });

  if (values.help) {
    console.log(usage());
    process.exit(0);
  }
  if (!BASE_URL) fail("GRAVITEE_BASE_URL is required (e.g. https://apim.example.com).");
  if (!TOKEN) fail("GRAVITEE_TOKEN is required (Personal Access Token).");
  if (!values.name) fail("--name is required.");

  const { app, existing } = await createOrReuseApplication({
    name: values.name,
    description: values.description,
  });
  if (!app?.id) fail("Application created but no id was returned.");

  if (!values.api) {
    printResult({ app, existing });
    return;
  }

  const planId = await pickApiKeyPlan(values.api, values.plan);
  const { subscriptionId, apiKey } = await subscribeAndGetKey({
    apiId: values.api,
    applicationId: app.id,
    planId,
  });
  printResult({ app, existing, apiId: values.api, planId, subscriptionId, apiKey });
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

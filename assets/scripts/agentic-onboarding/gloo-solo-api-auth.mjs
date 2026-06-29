#!/usr/bin/env node
/**
 * gloo-solo-api-auth — self-service credentials against a Gloo Platform Portal (Solo.io).
 *
 * What it does:
 *   Talks to the Gloo Portal Server REST API ("portal-server") to (1) find the API
 *   products and usage plans you can see, (2) ensure you are subscribed/eligible for a
 *   usage plan, and (3) create an API key scoped to that usage plan — then prints it.
 *   The created key value is returned EXACTLY ONCE by Gloo (the `apiKey` field), so this
 *   tool surfaces it to stdout and reminds you it cannot be re-read later.
 *
 * Auth model (bucket b/c — NOT RFC 7591 Dynamic Client Registration):
 *   Gloo is Kubernetes/Envoy-native. The Portal is something your PLATFORM TEAM must stand
 *   up (PortalConfig + ext-auth + an OIDC IdP). There is no public "register an app" DCR
 *   endpoint. As an app developer/agent you authenticate to the Portal Server with a bearer
 *   ACCESS TOKEN from the portal's IdP (OIDC). Automated clients get that token via the
 *   OAuth2 client-credentials flow from their IdP; humans copy it out of a portal session.
 *   This script reads that already-obtained token from GLOO_TOKEN and does the rest.
 *
 * Env vars:
 *   GLOO_PORTAL_URL  Base URL of the Portal Server REST API, e.g.
 *                    https://portal.example.com/v1  (some installs mount it at
 *                    https://portal.example.com/portal-server/v1). Include the /v1.
 *   GLOO_TOKEN       Bearer access token (OIDC) for the portal user / service identity.
 *                    Sent as `Authorization: Bearer <token>`.
 *
 * Doc links:
 *   - Portal Server REST API reference (endpoints + schemas):
 *       https://docs.solo.io/gloo-mesh-gateway/latest/reference/api/portal/
 *   - Portal Server OpenAPI:
 *       https://raw.githubusercontent.com/solo-io/gloo-mesh-use-cases/main/gloo-gateway/portal/openapi.yaml
 *   - Backend portal config (base path, /v1/me, /v1/apis, /v1/usage-plans, /v1/api-keys):
 *       https://docs.solo.io/gloo-mesh-gateway/latest/portal/guides/backend-portal/
 *   - Frontend API-key management (self-service keys per usage plan):
 *       https://docs.solo.io/gateway/main/portal/guides/frontend-portal/credential-management/apikey/
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const ENV_PORTAL_URL = "GLOO_PORTAL_URL";
const ENV_TOKEN = "GLOO_TOKEN";

// --- argument parsing -------------------------------------------------------

const {
  values: { plan: planArg, name: nameArg, api: apiArg, list: listArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    plan: { type: "string" },
    name: { type: "string" },
    api: { type: "string" },
    list: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: gloo-solo-api-auth [options]

  Self-service an API key against a Gloo Platform Portal (Solo.io).
  Reads your portal access token from $${ENV_TOKEN} and the Portal Server base URL
  from $${ENV_PORTAL_URL} (must include /v1), then creates a key for a usage plan.

  Because Gloo has no Dynamic Client Registration, the "app" concept here is a usage
  plan you subscribe to. There is no client_secret; the credential is an API key.

Options:
  --plan <name>      Usage plan to scope the API key to (required unless --list).
  --name <name>      A label for the new API key (default: a generated name).
  --api <id|title>   Optional: filter discovery to a single API product (substring match).
  --list             List the API products and usage plans you can see, then exit.
  -h, --help

Environment:
  ${ENV_PORTAL_URL}  Portal Server REST base URL incl. /v1 (e.g. https://portal.example.com/v1)
  ${ENV_TOKEN}       OIDC bearer access token for the portal user / service identity.

Examples:
  ${ENV_PORTAL_URL}=https://portal.example.com/v1 ${ENV_TOKEN}=eyJ... node gloo-solo-api-auth.mjs --list
  ${ENV_PORTAL_URL}=https://portal.example.com/v1 ${ENV_TOKEN}=eyJ... node gloo-solo-api-auth.mjs --plan gold --name my-agent
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

const portalBase = (process.env[ENV_PORTAL_URL] || "").replace(/\/+$/, "");
const token = process.env[ENV_TOKEN];

if (!portalBase) {
  console.error(`Missing $${ENV_PORTAL_URL}. Set it to your Portal Server REST base URL including /v1,`);
  console.error(`e.g. export ${ENV_PORTAL_URL}="https://portal.example.com/v1"`);
  process.exit(1);
}
if (!token) {
  console.error(`Missing $${ENV_TOKEN}. Set it to an OIDC bearer access token for the portal.`);
  console.error(`Automated clients can obtain one via the OAuth2 client-credentials flow from the portal's IdP.`);
  process.exit(1);
}
if (!/\/v1$/.test(portalBase) && !/\/v1\/portal-server$/.test(portalBase)) {
  // Not fatal — installs vary — but the API is versioned, so warn loudly.
  console.error(`Warning: $${ENV_PORTAL_URL} ("${portalBase}") does not end in /v1.`);
  console.error(`The Gloo Portal Server API is mounted under /v1 (or /portal-server/v1). Continuing anyway.`);
}

// --- low-level request helper ----------------------------------------------

function url(path) {
  return `${portalBase}${path}`;
}

async function portalRequest({ path, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  let res;
  try {
    res = await fetch(url(path), {
      method,
      headers,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
  } catch (e) {
    throw new Error(`Network error calling ${method} ${url(path)}: ${e.message}`);
  }
  const text = await res.text();
  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `${method} ${path} was rejected (${res.status}). Your $${ENV_TOKEN} is missing, expired, or ` +
        `lacks portal access. Confirm the token's audience matches the Portal Server and that the ` +
        `platform team has granted you a usage plan.\n${text}`
    );
  }
  if (res.status === 404) {
    throw new Error(
      `${method} ${path} returned 404. Check that $${ENV_PORTAL_URL} points at the Portal Server ` +
        `REST API (with /v1) — not the developer-portal web UI or the Envoy data-plane.\n${text}`
    );
  }
  if (!res.ok) {
    throw new Error(`${method} ${path} failed: ${res.status} ${text}`);
  }
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// --- portal operations ------------------------------------------------------

// GET /v1/apis  -> array of API products you can see.
async function listApis() {
  const data = await portalRequest({ path: "/apis" });
  return Array.isArray(data) ? data : data?.apis ?? data?.items ?? [];
}

// GET /v1/usage-plans -> array of usage plans (name, apiIds, policies...).
async function listUsagePlans() {
  const data = await portalRequest({ path: "/usage-plans" });
  return Array.isArray(data) ? data : data?.usagePlans ?? data?.items ?? [];
}

// GET /v1/api-keys -> array of UsagePlanKeys { usagePlan, apiKeys: [{ id, name, metadata }] }.
// NOTE: list responses do NOT include the secret `apiKey` value; only POST returns it.
async function listApiKeys() {
  const data = await portalRequest({ path: "/api-keys" });
  return Array.isArray(data) ? data : data?.usagePlanKeys ?? data?.items ?? [];
}

// POST /v1/api-keys  body: { usagePlan, apiKeyName }  -> { id, name, apiKey, metadata }.
async function createApiKey({ usagePlan, apiKeyName }) {
  return portalRequest({
    path: "/api-keys",
    method: "POST",
    body: { usagePlan, apiKeyName },
  });
}

function apiTitle(api) {
  return api?.title ?? api?.apiId ?? api?.id ?? "(untitled)";
}

function planName(plan) {
  return plan?.name ?? plan?.usagePlan ?? plan?.id ?? "(unnamed)";
}

function findExistingKey(usagePlanKeys, usagePlan, apiKeyName) {
  for (const group of usagePlanKeys) {
    if ((group?.usagePlan ?? group?.name) !== usagePlan) continue;
    const keys = group?.apiKeys ?? group?.keys ?? [];
    const match = keys.find((k) => (k?.name ?? k?.apiKeyName) === apiKeyName);
    if (match) return match;
  }
  return null;
}

function printApiKeyResult({ usagePlan, key, existing }) {
  // Mirror the SoundCloud script's `key=value` stdout, adapted to Gloo's credential shape.
  const value = key?.apiKey;
  if (value) {
    process.stdout.write(`api_key=${value}\n`);
  } else if (existing) {
    process.stdout.write(`api_key=<not shown — Gloo returns the key value only at creation>\n`);
  }
  const out = {
    usage_plan: usagePlan,
    api_key_id: key?.id ?? null,
    api_key_name: key?.name ?? key?.apiKeyName ?? null,
    api_key: value ?? null,
    metadata: key?.metadata ?? undefined,
  };
  process.stdout.write("\n" + JSON.stringify(out, null, 2) + "\n");
  if (value) {
    process.stderr.write(
      "\nStore this api_key now. Gloo returns the secret value only once, at creation time;\n" +
        "it cannot be retrieved again — only rotated by creating a new key.\n"
    );
  }
}

// --- main -------------------------------------------------------------------

async function main() {
  // --list: discovery only.
  if (listArg) {
    const [apis, plans] = await Promise.all([listApis(), listUsagePlans()]);
    const apiList = apiArg
      ? apis.filter((a) => apiTitle(a).toLowerCase().includes(apiArg.toLowerCase()))
      : apis;
    console.log("API products you can see:");
    if (apiList.length === 0) console.log("  (none — ask your platform team to publish APIs / grant you access)");
    for (const a of apiList) console.log(`  - ${apiTitle(a)}${a?.description ? `  — ${a.description}` : ""}`);
    console.log("\nUsage plans you can subscribe to:");
    if (plans.length === 0) console.log("  (none — the portal exposes plans only after the operator defines them)");
    for (const p of plans) {
      const ids = p?.apiIds ?? p?.apis ?? [];
      console.log(`  - ${planName(p)}${ids.length ? `  (apis: ${ids.join(", ")})` : ""}`);
    }
    return;
  }

  const usagePlan = planArg;
  if (!usagePlan) {
    console.error("Missing --plan <usage-plan-name>. Run with --list to see the plans available to you.");
    process.exit(1);
  }

  // Validate the plan exists / is visible to this identity before trying to mint a key.
  const plans = await listUsagePlans();
  if (plans.length && !plans.some((p) => planName(p) === usagePlan)) {
    console.error(
      `Usage plan "${usagePlan}" is not in the plans you can see. Available: ` +
        `${plans.map(planName).join(", ") || "(none)"}.`
    );
    console.error(
      "In Gloo, plan visibility/subscription is controlled by the platform team via PortalConfig\n" +
        "and ext-auth. If you expected this plan, you may not be subscribed yet."
    );
    process.exit(1);
  }

  const apiKeyName = nameArg || `agentic-onboarding-${Date.now()}`;

  // Handle the "already have a key with this name" case before creating a duplicate.
  const existingGroups = await listApiKeys();
  const existing = findExistingKey(existingGroups, usagePlan, apiKeyName);
  if (existing) {
    console.error(
      `An API key named "${apiKeyName}" already exists under usage plan "${usagePlan}".\n` +
        `Gloo will not re-reveal its secret value. Pass a different --name to mint a new key.`
    );
    printApiKeyResult({ usagePlan, key: existing, existing: true });
    return;
  }

  const created = await createApiKey({ usagePlan, apiKeyName });
  if (!created || !created.apiKey) {
    throw new Error(
      `Create API key (POST /api-keys) returned no apiKey value.\nResponse: ${JSON.stringify(created)}`
    );
  }
  printApiKeyResult({ usagePlan, key: created, existing: false });
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

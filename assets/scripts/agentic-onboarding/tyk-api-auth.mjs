#!/usr/bin/env node
/**
 * tyk-api-auth.mjs
 *
 * Provider:   Tyk (API Management) — Tyk Dashboard API
 * What it does:
 *   Creates (or fetches, if one already exists) an OAuth client under an existing
 *   API on your Tyk Dashboard, then prints client_id / client_secret to stdout —
 *   mirroring the SoundCloud `sc-api-auth.mjs` ergonomics.
 *
 * Auth model:  BUCKET (b). Tyk has no public self-serve browser OAuth onboarding
 *   for minting your own gateway client. Instead you paste a privileged Dashboard
 *   secret. Every Dashboard API request carries `Authorization: <secret>`. The
 *   secret is the "Tyk Dashboard API Access Credentials" on your Dashboard profile.
 *
 * Prerequisites (the honest manual gaps):
 *   - A Tyk Dashboard you can reach (self-managed or Tyk Cloud control plane URL).
 *   - An existing API on that Dashboard configured for OAuth 2.0 (its api_id).
 *   - An access Policy id to bind the new client to (--policy / TYK_POLICY_ID).
 *
 * Env vars:
 *   TYK_DASHBOARD_URL     Base URL of the Dashboard, e.g. https://admin.cloud.tyk.io
 *   TYK_DASHBOARD_SECRET  Your Dashboard API Access Credentials secret
 *   TYK_API_ID            The api_id the OAuth client is created under
 *   TYK_POLICY_ID         (optional) policy id to bind; can also pass --policy
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   https://tyk.io/docs/tyk-dashboard-api/
 *   https://tyk.io/docs/5.3/tyk-apis/tyk-dashboard-api/oauth-key-management/
 *   https://tyk.io/docs/5.6/tyk-apis/tyk-dashboard-api/manage-key-requests/
 */
import { parseArgs } from "node:util";
import process from "node:process";

const OAUTH_CLIENTS_PATH = (apiId) => `/api/apis/oauth/${encodeURIComponent(apiId)}`;
const OAUTH_CLIENT_PATH = (apiId, clientId) =>
  `/api/apis/oauth/${encodeURIComponent(apiId)}/${encodeURIComponent(clientId)}`;

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) {
    throw new Error(
      `Missing required environment variable ${name}. ` +
        `Set it before running, e.g. export ${name}=...`
    );
  }
  return v.trim();
}

function trimTrailingSlash(url) {
  return url.replace(/\/+$/, "");
}

/**
 * Tyk Dashboard API uses `Authorization: <secret>` (the raw secret, no scheme word).
 */
async function dashboardRequest({ baseUrl, secret, path, method = "GET", body }) {
  const url = `${trimTrailingSlash(baseUrl)}${path}`;
  const headers = {
    accept: "application/json",
    authorization: secret,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  return { res, text, url };
}

function parseJsonSafe(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** GET the OAuth clients already registered under this API. */
async function listOAuthClients({ baseUrl, secret, apiId }) {
  const { res, text, url } = await dashboardRequest({
    baseUrl,
    secret,
    path: OAUTH_CLIENTS_PATH(apiId),
  });
  if (!res.ok) {
    throw new Error(
      `List OAuth clients (GET ${url}) failed: ${res.status} ${text || "(no body)"}`
    );
  }
  const data = parseJsonSafe(text);
  // Tyk returns either a bare array of clients or { clients: [...] } depending on version.
  // NOTE: verify exact envelope against your Dashboard version.
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.clients)) return data.clients;
  if (Array.isArray(data?.oauth_clients)) return data.oauth_clients;
  return [];
}

/** POST a new OAuth client under this API. Returns client_id / secret. */
async function createOAuthClient({ baseUrl, secret, apiId, policyId, redirectUri, description }) {
  const body = {
    redirect_uri: redirectUri ?? "",
    policy_id: policyId ?? "",
  };
  // `meta_data` / `description` are accepted on newer Dashboards; harmless if ignored.
  if (description) body.meta_data = { description };

  const { res, text, url } = await dashboardRequest({
    baseUrl,
    secret,
    path: OAUTH_CLIENTS_PATH(apiId),
    method: "POST",
    body,
  });

  if (res.ok) {
    const data = parseJsonSafe(text) ?? {};
    return { client: data, existing: false };
  }

  // Surface auth/permission problems clearly.
  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `Not authorized (HTTP ${res.status}) creating OAuth client at ${url}. ` +
        `Check TYK_DASHBOARD_SECRET and that your user can manage this API.\n${text}`
    );
  }
  if (res.status === 404) {
    throw new Error(
      `API not found (HTTP 404) at ${url}. ` +
        `Check TYK_API_ID (${apiId}) and that the API has OAuth 2.0 enabled.`
    );
  }
  throw new Error(`Create OAuth client (POST ${url}) failed: ${res.status} ${text || "(no body)"}`);
}

function normalizeClient(c) {
  // Tyk OAuth client objects use `secret` for the client secret.
  return {
    client_id: c.client_id ?? c.clientId ?? c.ClientID,
    client_secret: c.secret ?? c.client_secret ?? c.Secret,
    redirect_uri: c.redirect_uri ?? c.RedirectURI,
    policy_id: c.policy_id ?? c.PolicyID,
    description: c.meta_data?.description ?? c.description,
  };
}

function publicFields(creds) {
  const out = {};
  for (const k of ["client_id", "client_secret", "redirect_uri", "policy_id", "description"]) {
    if (creds[k] !== undefined && creds[k] !== null && creds[k] !== "") out[k] = creds[k];
  }
  return out;
}

function formatCredentialOutput(creds) {
  const pub = publicFields(creds);
  const lines = [`client_id=${pub.client_id ?? ""}`];
  if (pub.client_secret) lines.push(`client_secret=${pub.client_secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

async function createOrFetchClient(opts) {
  // If the caller asked to reuse an existing client, look first.
  if (opts.reuseExisting) {
    const clients = await listOAuthClients(opts);
    const withId = clients.map(normalizeClient).find((c) => c.client_id);
    if (withId) {
      return {
        credentials: withId,
        existing: true,
        notice:
          "Reusing an existing OAuth client under this API. " +
          "Note: Tyk does not return the original secret on listing; " +
          "secret may be omitted. Pass --new to mint a fresh client.",
      };
    }
  }
  const { client } = await createOAuthClient(opts);
  return { credentials: normalizeClient(client), existing: false };
}

function help() {
  console.log(`Usage: tyk-api-auth [options]

  Creates an OAuth client under an existing API on your Tyk Dashboard and prints
  client_id / client_secret. Tyk is a "management API + secret" provider: there is
  no public browser-based self-serve onboarding, so this reads your Dashboard
  secret from the environment.

Required environment:
  TYK_DASHBOARD_URL     Dashboard base URL, e.g. https://admin.cloud.tyk.io
  TYK_DASHBOARD_SECRET  Your Dashboard API Access Credentials (from your profile)
  TYK_API_ID            The api_id to create the OAuth client under

Optional:
  TYK_POLICY_ID         Policy id to bind the client to (or use --policy)

Options:
  --policy <id>         Policy id to bind (overrides TYK_POLICY_ID)
  --redirect <uri>      OAuth redirect_uri for the client (default: "")
  --description <text>  Stored on the client meta_data
  --reuse               Reuse an existing client under this API if one exists
  -h, --help

Docs: https://tyk.io/docs/5.3/tyk-apis/tyk-dashboard-api/oauth-key-management/
`);
}

async function main() {
  const { values } = parseArgs({
    options: {
      policy: { type: "string" },
      redirect: { type: "string" },
      description: { type: "string" },
      reuse: { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: false,
  });

  if (values.help) {
    help();
    process.exit(0);
  }

  const baseUrl = requireEnv("TYK_DASHBOARD_URL");
  const secret = requireEnv("TYK_DASHBOARD_SECRET");
  const apiId = requireEnv("TYK_API_ID");
  const policyId = values.policy ?? process.env.TYK_POLICY_ID ?? "";

  if (!policyId) {
    console.error(
      "Warning: no policy id supplied (--policy or TYK_POLICY_ID). " +
        "Tyk OAuth clients are normally bound to an access policy; " +
        "the Dashboard may reject the request without one."
    );
  }

  const result = await createOrFetchClient({
    baseUrl,
    secret,
    apiId,
    policyId,
    redirectUri: values.redirect,
    description: values.description,
    reuseExisting: Boolean(values.reuse),
  });

  if (result.existing && result.notice) console.error(result.notice);
  if (!result.credentials?.client_id) {
    throw new Error("No client_id returned by the Tyk Dashboard.");
  }
  process.stdout.write(formatCredentialOutput(result.credentials));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

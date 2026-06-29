#!/usr/bin/env node
/**
 * wso2-api-auth.mjs
 *
 * Provider:  WSO2 API Manager (self-hosted) — Choreo is the SaaS evolution of the same lineage.
 * What it does:
 *   Reproduces the SoundCloud "programmatic onboarding" pattern for WSO2 API Manager.
 *   WSO2 supports RFC 7591 Dynamic Client Registration, so the whole thing is scriptable:
 *     1. DCR: POST /client-registration/v0.17/register  (HTTP Basic w/ username:password)
 *            -> returns clientId/clientSecret for *this CLI's* REST API client.
 *     2. Token: POST /oauth2/token (grant_type=password, Basic clientId:clientSecret,
 *            scope "apim:subscribe apim:app_manage") -> access_token.
 *     3. Create app: POST /api/am/devportal/v3/applications -> applicationId.
 *            (If an app with the same name already exists, fetch + reuse it.)
 *     4. Generate keys: POST /api/am/devportal/v3/applications/{id}/generate-keys
 *            -> consumerKey / consumerSecret  (printed as client_id / client_secret).
 *
 * Auth model:
 *   Unlike SoundCloud there is NO browser OAuth here — WSO2 API Manager is software you run,
 *   so you bootstrap with the credentials you already have (DCR basic auth), or a pre-minted
 *   token. That is more honest for a gateway you operate yourself.
 *
 * Env vars:
 *   WSO2_BASE_URL    Base URL of the deployment, e.g. https://localhost:9443  (required)
 *   WSO2_USERNAME    Username for DCR basic auth + password grant (required unless WSO2_TOKEN)
 *   WSO2_PASSWORD    Password for the above (required unless WSO2_TOKEN)
 *   WSO2_TOKEN       Optional pre-obtained DevPortal access token; skips DCR + token steps.
 *   WSO2_DCR_VERSION Optional DCR path version (default "v0.17").   // NOTE: verify per install.
 *   WSO2_INSECURE_TLS Set to "1" to accept self-signed certs (common on default installs).
 *
 * Node 18+ stdlib only. No npm install.
 *
 * Docs:
 *   https://apim.docs.wso2.com/en/latest/develop/product-apis/
 *   https://apim.docs.wso2.com/en/4.3.0/consume/manage-application/generate-keys/generate-api-keys/
 *   https://apim.docs.wso2.com/en/latest/consume/manage-application/
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DEVPORTAL_BASE = "/api/am/devportal/v3";
const TOKEN_PATH = "/oauth2/token";
const REQUIRED_SCOPES = "apim:subscribe apim:app_manage";
const DEFAULT_THROTTLING_POLICY = "Unlimited";
const DEFAULT_KEY_TYPE = "PRODUCTION";
const DEFAULT_GRANT_TYPES = ["client_credentials", "password", "refresh_token"];

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function joinUrl(base, path) {
  return new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
}

function basicAuth(user, pass) {
  return "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
}

async function readJson(res) {
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = null;
  }
  return { text, json };
}

/**
 * Step 1 — Dynamic Client Registration.
 * Mints a REST-API OAuth client using the operator's own username/password (HTTP Basic).
 */
async function dcrRegister({ baseUrl, username, password, dcrVersion, clientName }) {
  const url = joinUrl(baseUrl, `/client-registration/${dcrVersion}/register`);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: basicAuth(username, password),
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      callbackUrl: "http://localhost",
      clientName,
      owner: username,
      grantType: "password refresh_token",
      saasApp: true,
    }),
  });
  const { text, json } = await readJson(res);
  // WSO2 returns 200 on create AND when the DCR client already exists for that name.
  if (!res.ok || !json?.clientId) {
    throw new Error(`DCR register (POST ${url}) failed: ${res.status} ${text}`);
  }
  return { clientId: json.clientId, clientSecret: json.clientSecret };
}

/**
 * Step 2 — Password-grant token for the DevPortal REST API.
 */
async function getAccessToken({ baseUrl, clientId, clientSecret, username, password }) {
  const url = joinUrl(baseUrl, TOKEN_PATH);
  const body = new URLSearchParams({
    grant_type: "password",
    username,
    password,
    scope: REQUIRED_SCOPES,
  });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: basicAuth(clientId, clientSecret),
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: body.toString(),
  });
  const { text, json } = await readJson(res);
  if (!res.ok || !json?.access_token) {
    throw new Error(`Token (POST ${url}) failed: ${res.status} ${text}`);
  }
  return json.access_token;
}

function devportalHeaders(token, withBody) {
  const h = { authorization: `Bearer ${token}`, accept: "application/json" };
  if (withBody) h["content-type"] = "application/json";
  return h;
}

/**
 * Look up an existing DevPortal application by exact name (app names are unique per user).
 */
async function findApplicationByName({ baseUrl, token, name }) {
  const url = joinUrl(baseUrl, `${DEVPORTAL_BASE}/applications?query=${encodeURIComponent(name)}`);
  const res = await fetch(url, { headers: devportalHeaders(token, false) });
  const { text, json } = await readJson(res);
  if (!res.ok) {
    throw new Error(`List applications (GET ${url}) failed: ${res.status} ${text}`);
  }
  const list = json?.list ?? [];
  return list.find((a) => a?.name === name) ?? null;
}

/**
 * Step 3 — Create the DevPortal application (or return the existing one).
 */
async function createOrFetchApplication({ baseUrl, token, name, description, throttlingPolicy }) {
  const url = joinUrl(baseUrl, `${DEVPORTAL_BASE}/applications`);
  const res = await fetch(url, {
    method: "POST",
    headers: devportalHeaders(token, true),
    body: JSON.stringify({ name, description, throttlingPolicy }),
  });
  const { text, json } = await readJson(res);

  if (res.status === 201 && json?.applicationId) {
    return { app: json, existing: false };
  }
  // 409 Conflict — application name already taken; reuse it.
  if (res.status === 409) {
    const existing = await findApplicationByName({ baseUrl, token, name });
    if (!existing) {
      throw new Error(`Application "${name}" exists but could not be retrieved.`);
    }
    return { app: existing, existing: true };
  }
  throw new Error(`Create application (POST ${url}) failed: ${res.status} ${text}`);
}

/**
 * Return existing PRODUCTION keys for an app if they are already generated.
 */
async function existingKeys({ baseUrl, token, applicationId, keyType }) {
  const url = joinUrl(baseUrl, `${DEVPORTAL_BASE}/applications/${applicationId}/keys`);
  const res = await fetch(url, { headers: devportalHeaders(token, false) });
  if (!res.ok) return null;
  const { json } = await readJson(res);
  const match = (json?.list ?? []).find(
    (k) => k?.keyType === keyType && k?.consumerKey
  );
  return match ?? null;
}

/**
 * Step 4 — Generate consumer key/secret for the application.
 */
async function generateKeys({ baseUrl, token, applicationId, keyType, website }) {
  const url = joinUrl(baseUrl, `${DEVPORTAL_BASE}/applications/${applicationId}/generate-keys`);
  const res = await fetch(url, {
    method: "POST",
    headers: devportalHeaders(token, true),
    body: JSON.stringify({
      keyType,
      keyManager: "Resident Key Manager",
      grantTypesToBeSupported: DEFAULT_GRANT_TYPES,
      callbackUrl: website || "http://localhost",
      validityTime: 3600,
      additionalProperties: {},
    }),
  });
  const { text, json } = await readJson(res);

  if (res.ok && json?.consumerKey) {
    return json;
  }
  // 409 — keys already exist for this key type; read them back.
  if (res.status === 409) {
    const keys = await existingKeys({ baseUrl, token, applicationId, keyType });
    if (keys) return { ...keys, _existing: true };
  }
  throw new Error(`Generate keys (POST ${url}) failed: ${res.status} ${text}`);
}

function formatCredentialOutput(creds) {
  const lines = [`client_id=${creds.client_id}`];
  if (creds.client_secret) lines.push(`client_secret=${creds.client_secret}`);
  lines.push("", JSON.stringify(creds, null, 2), "");
  return lines.join("\n");
}

// ---- CLI ----------------------------------------------------------------

const {
  values: { name: nameArg, description: descArg, website: siteArg, "key-type": keyTypeArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    "key-type": { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  fail(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
}

if (helpArg) {
  console.log(`Usage: wso2-api-auth [options]

  Registers a Developer Portal application on a WSO2 API Manager deployment via the
  documented DCR + DevPortal REST chain, then prints the consumer key/secret as
  client_id / client_secret.

  Flow: DCR register -> password-grant token -> create application -> generate-keys.

Options:
  --name            Required. DevPortal application name.
  --description     Optional. Application description.
  --website         Optional. Callback/website URL for the generated keys.
  --key-type        Optional. PRODUCTION (default) or SANDBOX.
  -h, --help

Environment:
  WSO2_BASE_URL      Required, e.g. https://localhost:9443
  WSO2_USERNAME      Required unless WSO2_TOKEN is set (DCR basic auth + password grant).
  WSO2_PASSWORD      Required unless WSO2_TOKEN is set.
  WSO2_TOKEN         Optional pre-obtained DevPortal access token (skips DCR + token).
  WSO2_DCR_VERSION   Optional DCR path version (default v0.17).
  WSO2_INSECURE_TLS  Set to 1 to accept self-signed certs (common on default installs).
`);
  process.exit(0);
}

const appName = nameArg;
if (!appName) {
  fail('Missing required argument: --name\nExample: node wso2-api-auth.mjs --name "Agent Integration" --description "Internal agent app"');
}

const baseUrl = process.env.WSO2_BASE_URL;
if (!baseUrl) fail("Missing WSO2_BASE_URL (e.g. https://localhost:9443).");

const username = process.env.WSO2_USERNAME;
const password = process.env.WSO2_PASSWORD;
const presetToken = process.env.WSO2_TOKEN;
const dcrVersion = process.env.WSO2_DCR_VERSION || "v0.17"; // NOTE: verify per install.
const keyType = keyTypeArg || DEFAULT_KEY_TYPE;

if (!presetToken && (!username || !password)) {
  fail("Set WSO2_USERNAME + WSO2_PASSWORD, or provide a pre-obtained WSO2_TOKEN.");
}

// Self-signed certs are common on default WSO2 installs; opt-in only.
if (process.env.WSO2_INSECURE_TLS === "1") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.error("WARNING: TLS certificate verification disabled (WSO2_INSECURE_TLS=1).");
}

(async () => {
  try {
    let token = presetToken;
    if (!token) {
      const dcrClientName = `wso2-api-auth-cli-${username}`;
      const { clientId, clientSecret } = await dcrRegister({
        baseUrl,
        username,
        password,
        dcrVersion,
        clientName: dcrClientName,
      });
      token = await getAccessToken({ baseUrl, clientId, clientSecret, username, password });
    }

    const { app, existing } = await createOrFetchApplication({
      baseUrl,
      token,
      name: appName,
      description: descArg || "",
      throttlingPolicy: DEFAULT_THROTTLING_POLICY,
    });
    if (existing) {
      console.error(`Application "${appName}" already exists; reusing it.`);
    }

    const keys = await generateKeys({
      baseUrl,
      token,
      applicationId: app.applicationId,
      keyType,
      website: siteArg,
    });
    if (keys._existing) {
      console.error(`${keyType} keys already existed for this application; returning them.`);
    }

    process.stdout.write(
      formatCredentialOutput({
        client_id: keys.consumerKey,
        client_secret: keys.consumerSecret,
        application_id: app.applicationId,
        application_name: app.name,
        key_type: keyType,
        key_manager: keys.keyManager,
        supported_grant_types: keys.supportedGrantTypes,
      })
    );
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

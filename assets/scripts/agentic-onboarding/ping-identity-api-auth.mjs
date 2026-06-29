#!/usr/bin/env node
/**
 * ping-identity-api-auth.mjs
 *
 * Provider: Ping Identity (PingOne / PingFederate)
 * What it does: Programmatically registers an OAuth/OIDC application and prints
 *   its client_id and client_secret to stdout — the Ping equivalent of the
 *   SoundCloud `sc-api-auth.mjs` pattern, in a single Node 18+ stdlib-only file.
 *
 * Auth model: bucket (b) — a Management API + a machine credential.
 *   PRIMARY (PingOne, default): exchange a pre-provisioned "worker" application's
 *     client_id/client_secret for a Bearer token via client_credentials, then
 *     POST the Management API to create the app and GET its secret back.
 *   ALTERNATIVE (PingFederate, --pf): RFC 7591 Dynamic Client Registration to
 *     POST /as/clients.oauth2 — standards-based, no token if the server allows
 *     anonymous DCR, or with --pf-initial-token when an initial access token is
 *     required.
 *
 * There is no public "browser login that mints a fresh public app" flow on Ping
 * the way SoundCloud has one, so this script skips the browser and reads a
 * machine credential from the environment.
 *
 * Env vars (PingOne path):
 *   PINGONE_ENV_ID               required — your environment UUID
 *   PINGONE_WORKER_CLIENT_ID     required — worker app client_id
 *   PINGONE_WORKER_CLIENT_SECRET required — worker app client_secret
 *   PINGONE_REGION_DOMAIN        optional — api domain, default api.pingone.com
 *                                (api.pingone.eu | api.pingone.ca | api.pingone.asia)
 *   PINGONE_TOKEN                optional — a pre-minted Bearer token; if set,
 *                                the worker client_credentials step is skipped.
 *
 * Env vars (PingFederate path, --pf):
 *   PF_BASE_URL                  required — e.g. https://sso.example.com:9031
 *   PF_INITIAL_TOKEN             optional — initial access token if DCR requires one
 *
 * Docs:
 *   PingOne token:   https://developer.pingidentity.com/pingone-api/getting-started/create-a-test-environment/step-1-get-access-token.html
 *   PingOne apps:    https://apidocs.pingidentity.com/pingone/main/v1/api/
 *   PingOne secret:  https://docs.pingidentity.com/pingone/applications/p1_view_client_secret_application.html
 *   PingOne domains: https://docs.pingidentity.com/pingone/developer_tools/p1_ip_address_domain_reference.html
 *   PingFederate DCR (RFC 7591): https://docs.pingidentity.com/pingfederate/13.0/developers_reference_guide/pf_dynamic_registra_endpoint.html
 *
 * Node.js stdlib only. No npm install.
 */
import { parseArgs } from "node:util";
import process from "node:process";

/** Map a PingOne api.* domain to its matching auth.* domain for the token call. */
function authDomainFor(apiDomain) {
  // api.pingone.com -> auth.pingone.com, api.pingone.eu -> auth.pingone.eu, etc.
  return apiDomain.replace(/^api\./, "auth.");
}

function fail(message, code = 1) {
  console.error(`Error: ${message}`);
  process.exit(code);
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) {
    fail(`Missing required environment variable ${name}.`);
  }
  return v.trim();
}

async function readJsonOrText(res) {
  const text = await res.text();
  try {
    return { json: JSON.parse(text), text };
  } catch {
    return { json: null, text };
  }
}

/* ----------------------------- PingOne (default) ----------------------------- */

async function pingoneWorkerToken({ authDomain, envId, clientId, clientSecret }) {
  const tokenUrl = `https://${authDomain}/${envId}/as/token`;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      authorization: `Basic ${basic}`,
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }).toString(),
  });
  const { json, text } = await readJsonOrText(res);
  if (!res.ok || !json?.access_token) {
    throw new Error(
      `Worker token request (POST ${tokenUrl}) failed: ${res.status} ${text}\n` +
        "Check PINGONE_WORKER_CLIENT_ID/SECRET, PINGONE_ENV_ID and the region domain."
    );
  }
  return json.access_token;
}

function pingoneAppBody({ name, description, website, redirectUri }) {
  // A confidential, web-app OIDC client with the authorization_code grant.
  // tokenEndpointAuthMethod CLIENT_SECRET_BASIC -> PingOne issues a client_secret
  // we can read back from the /secret endpoint. Adjust `type`/grants for SPAs/native.
  const body = {
    enabled: true,
    name,
    description: description || undefined,
    type: "WEB_APP",
    protocol: "OPENID_CONNECT",
    grantTypes: ["AUTHORIZATION_CODE"],
    responseTypes: ["CODE"],
    tokenEndpointAuthMethod: "CLIENT_SECRET_BASIC",
    redirectUris: redirectUri ? [redirectUri] : undefined,
  };
  if (website) body.homePageUrl = website;
  // Strip undefined keys so we don't send nulls PingOne will reject.
  return Object.fromEntries(Object.entries(body).filter(([, v]) => v !== undefined));
}

async function pingoneListAppByName({ apiBase, envId, token, name }) {
  // SCIM-style filter so we can detect an already-registered app of this name.
  const url =
    `${apiBase}/v1/environments/${envId}/applications` +
    `?filter=${encodeURIComponent(`name eq "${name}"`)}`;
  const res = await fetch(url, {
    headers: { authorization: `Bearer ${token}`, accept: "application/json" },
  });
  const { json, text } = await readJsonOrText(res);
  if (!res.ok) {
    throw new Error(`List applications (GET ${url}) failed: ${res.status} ${text}`);
  }
  const apps = json?._embedded?.applications ?? [];
  return apps.find((a) => a?.name === name) ?? null;
}

async function pingoneCreateApp({ apiBase, envId, token, appBody }) {
  const url = `${apiBase}/v1/environments/${envId}/applications`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(appBody),
  });
  const { json, text } = await readJsonOrText(res);
  if (res.status === 201 || res.status === 200) {
    return { app: json, existing: false };
  }
  // PingOne returns 400 UNIQUENESS_VIOLATION when a same-named app already exists.
  if (res.status === 400 && /UNIQUENESS_VIOLATION|already/i.test(text)) {
    const existing = await pingoneListAppByName({ apiBase, envId, token, name: appBody.name });
    if (existing) return { app: existing, existing: true };
  }
  throw new Error(`Create application (POST ${url}) failed: ${res.status} ${text}`);
}

async function pingoneReadSecret({ apiBase, envId, token, appId }) {
  const url = `${apiBase}/v1/environments/${envId}/applications/${appId}/secret`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      // NOTE: verify — Ping's vendor media type is
      // application/vnd.pingidentity.secret.read+json; plain application/json
      // is accepted in practice. We send the vendor type and fall back below.
      accept: "application/vnd.pingidentity.secret.read+json, application/json",
    },
  });
  const { json, text } = await readJsonOrText(res);
  if (res.status === 404) return null; // public clients (e.g. SPA) have no secret
  if (!res.ok) {
    throw new Error(`Read application secret (GET ${url}) failed: ${res.status} ${text}`);
  }
  return json?.secret ?? null;
}

async function runPingOne({ name, description, website, redirectUri }) {
  const envId = requireEnv("PINGONE_ENV_ID");
  const apiDomain = (process.env.PINGONE_REGION_DOMAIN || "api.pingone.com").trim();
  const apiBase = `https://${apiDomain}`;

  let token = process.env.PINGONE_TOKEN?.trim();
  if (!token) {
    const clientId = requireEnv("PINGONE_WORKER_CLIENT_ID");
    const clientSecret = requireEnv("PINGONE_WORKER_CLIENT_SECRET");
    token = await pingoneWorkerToken({
      authDomain: authDomainFor(apiDomain),
      envId,
      clientId,
      clientSecret,
    });
  }

  const appBody = pingoneAppBody({ name, description, website, redirectUri });
  const { app, existing } = await pingoneCreateApp({ apiBase, envId, token, appBody });
  if (!app?.id) throw new Error("Application response did not include an id.");

  const secret = await pingoneReadSecret({ apiBase, envId, token, appId: app.id });

  return {
    existing,
    credentials: {
      client_id: app.id, // PingOne's OIDC client_id is the application id
      client_secret: secret || undefined,
      name: app.name,
      description: app.description,
      website: app.homePageUrl,
      environment_id: envId,
      redirect_uri: Array.isArray(app.redirectUris) ? app.redirectUris[0] : undefined,
    },
  };
}

/* --------------------------- PingFederate (--pf) ---------------------------- */

async function runPingFederate({ name, description, website, redirectUri }) {
  const base = requireEnv("PF_BASE_URL").replace(/\/+$/, "");
  const url = `${base}/as/clients.oauth2`;
  const initialToken = process.env.PF_INITIAL_TOKEN?.trim();

  // RFC 7591 client metadata.
  const body = {
    client_name: name,
    redirect_uris: redirectUri ? [redirectUri] : undefined,
    grant_types: ["authorization_code"],
    response_types: ["code"],
    token_endpoint_auth_method: "client_secret_basic",
    scope: "openid",
  };
  if (website) body.client_uri = website;
  if (description) body.software_id = description; // PF has no native description field
  const payload = Object.fromEntries(Object.entries(body).filter(([, v]) => v !== undefined));

  const headers = { "content-type": "application/json", accept: "application/json" };
  if (initialToken) headers.authorization = `Bearer ${initialToken}`;

  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
  const { json, text } = await readJsonOrText(res);
  if (res.status !== 201 && res.status !== 200) {
    throw new Error(
      `DCR (POST ${url}) failed: ${res.status} ${text}\n` +
        "If this is 401/403, the server likely requires an initial access token " +
        "(set PF_INITIAL_TOKEN) or DCR is not enabled in OAuth Settings → Client Settings."
    );
  }
  if (!json?.client_id) throw new Error(`DCR response missing client_id: ${text}`);

  return {
    existing: false,
    credentials: {
      client_id: json.client_id,
      client_secret: json.client_secret || undefined,
      name: json.client_name || name,
      website: json.client_uri,
      registration_client_uri: json.registration_client_uri,
      registration_access_token: json.registration_access_token,
    },
  };
}

/* --------------------------------- output ----------------------------------- */

function formatCredentialOutput(credentials) {
  const fields = Object.fromEntries(
    Object.entries(credentials).filter(([, v]) => v !== undefined && v !== null)
  );
  const lines = [`client_id=${fields.client_id}`];
  if (fields.client_secret) lines.push(`client_secret=${fields.client_secret}`);
  lines.push("", JSON.stringify(fields, null, 2), "");
  return lines.join("\n");
}

/* ---------------------------------- main ------------------------------------ */

const {
  values: { name: nameArg, description: descArg, website: siteArg, redirect: redirectArg, pf: pfArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    redirect: { type: "string" },
    pf: { type: "boolean", default: false },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: ping-identity-api-auth [options]

  Registers an OAuth/OIDC application on Ping Identity and prints client_id and
  client_secret. Default target is PingOne (Management API). Use --pf for the
  PingFederate RFC 7591 Dynamic Client Registration endpoint instead.

Options:
  --name           Required. Application name.
  --description    Optional. Application description.
  --website        Optional. Home page / client_uri.
  --redirect       Optional. One redirect URI for the OIDC client.
  --pf             Use PingFederate DCR (POST /as/clients.oauth2) instead of PingOne.
  -h, --help

PingOne env vars:
  PINGONE_ENV_ID, PINGONE_WORKER_CLIENT_ID, PINGONE_WORKER_CLIENT_SECRET
  PINGONE_REGION_DOMAIN (default api.pingone.com), or PINGONE_TOKEN to skip the
  worker token exchange.

PingFederate env vars (--pf):
  PF_BASE_URL (e.g. https://sso.example.com:9031), PF_INITIAL_TOKEN (if required).
`);
  process.exit(0);
}

if (positionals.length > 0) {
  fail(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
}

if (!nameArg) {
  fail('Missing required argument: --name. Example: --name "My Agent App"');
}

const run = pfArg ? runPingFederate : runPingOne;

run({ name: nameArg, description: descArg, website: siteArg, redirectUri: redirectArg })
  .then((result) => {
    if (result.existing) {
      console.error("An application with this name already exists; returning its credentials.");
    }
    process.stdout.write(formatCredentialOutput(result.credentials));
    process.exit(0);
  })
  .catch((e) => {
    fail(e?.message || String(e));
  });

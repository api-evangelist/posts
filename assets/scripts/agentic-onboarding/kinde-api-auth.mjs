#!/usr/bin/env node
/**
 * kinde-api-auth.mjs
 *
 * Provider: Kinde (https://kinde.com) — auth, access management, and billing platform.
 *
 * What it does:
 *   Creates a new Kinde application (client) via the Kinde Management API and prints its
 *   client_id / client_secret. If an application with the same --name already exists, it
 *   looks it up and returns the existing credentials instead.
 *
 * Auth model (Hypothesis bucket B — Management API + M2M token):
 *   Kinde does NOT offer RFC 7591 Dynamic Client Registration, so there is no browser
 *   OAuth dance here. Instead you create ONE machine-to-machine (M2M) application in the
 *   Kinde dashboard, authorize it for the Kinde Management API with the scopes below, and
 *   feed its credentials to this script via env vars. The script then:
 *     1. POST {KINDE_DOMAIN}/oauth2/token  (grant_type=client_credentials,
 *        audience={KINDE_DOMAIN}/api)  -> management access token
 *        NOTE: the audience is ".../api", NOT ".../api/v1".
 *     2. POST {KINDE_DOMAIN}/api/v1/applications  (Authorization: Bearer <token>)
 *        body { name, type } -> { application: { id, client_id, client_secret } }
 *   Required M2M scopes: create:applications, read:applications.
 *
 * Env vars (choose ONE auth path):
 *   Path A — mint a token from M2M credentials:
 *     KINDE_DOMAIN              e.g. https://your-subdomain.kinde.com  (or just your-subdomain)
 *     KINDE_M2M_CLIENT_ID       client_id of your M2M app
 *     KINDE_M2M_CLIENT_SECRET   client_secret of your M2M app
 *   Path B — paste a pre-obtained management token:
 *     KINDE_DOMAIN              (still required, to build the /api/v1 base URL)
 *     KINDE_TOKEN               a valid management API bearer token
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   https://docs.kinde.com/developer-tools/kinde-api/access-token-for-api/
 *   https://docs.kinde.com/developer-tools/kinde-api/connect-to-kinde-api/
 *   https://docs.kinde.com/kinde-apis/management/  (Applications endpoints)
 *   https://docs.kinde.com/build/applications/about-applications/  (type values)
 */
import { parseArgs } from "node:util";
import process from "node:process";

const APP_TYPES = new Set(["reg", "spa", "m2m", "device"]);
const DEFAULT_TYPE = "m2m";

/** Normalize a subdomain or full URL into a clean origin like https://acme.kinde.com */
function normalizeDomain(raw) {
  if (!raw) return null;
  let v = raw.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(v)) {
    // Allow passing just the subdomain ("acme") or "acme.kinde.com".
    v = v.includes(".") ? `https://${v}` : `https://${v}.kinde.com`;
  }
  try {
    return new URL(v).origin;
  } catch {
    return null;
  }
}

function bail(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

/** Step 1: client_credentials -> management access token. */
async function mintManagementToken({ domain, clientId, clientSecret }) {
  const tokenUrl = `${domain}/oauth2/token`;
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    // The management API audience is "/api" (NOT "/api/v1").
    audience: `${domain}/api`,
  });
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `Token request (POST ${tokenUrl}) failed: ${res.status} ${text}\n` +
        "Check KINDE_M2M_CLIENT_ID / KINDE_M2M_CLIENT_SECRET, and that the M2M app is\n" +
        "authorized for the Kinde Management API with create:applications + read:applications."
    );
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Token endpoint returned non-JSON: ${text}`);
  }
  if (!json.access_token) {
    throw new Error(`No access_token in token response: ${text}`);
  }
  return json.access_token;
}

/** Thin wrapper for Management API calls (Authorization: Bearer <token>). */
async function kindeApi({ apiBase, token, path, method = "GET", body }) {
  const url = `${apiBase}${path}`;
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, url, text: await res.text() };
}

/** Step 2a: create a new application. Returns { id, client_id, client_secret }. */
async function createApplication({ apiBase, token, name, type }) {
  const { res, url, text } = await kindeApi({
    apiBase,
    token,
    path: "/api/v1/applications",
    method: "POST",
    body: { name, type },
  });
  if (!res.ok) {
    throw new Error(`Create application (POST ${url}) failed: ${res.status} ${text}`);
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Create application returned non-JSON: ${text}`);
  }
  const app = json.application;
  if (!app?.client_id) {
    throw new Error(`Create application response missing application.client_id: ${text}`);
  }
  return app; // { id, client_id, client_secret }
}

/**
 * Find an existing application by exact name (paginated).
 * NOTE: list items only contain { id, name, type } — no secret — so the caller must
 * follow up with getApplication() to recover client_secret.
 */
async function findApplicationByName({ apiBase, token, name }) {
  let nextToken;
  do {
    const qs = new URLSearchParams({ page_size: "100", sort: "name_asc" });
    if (nextToken) qs.set("next_token", nextToken);
    const { res, url, text } = await kindeApi({
      apiBase,
      token,
      path: `/api/v1/applications?${qs.toString()}`,
    });
    if (!res.ok) {
      throw new Error(`List applications (GET ${url}) failed: ${res.status} ${text}`);
    }
    const json = JSON.parse(text);
    const match = (json.applications ?? []).find((a) => a?.name === name);
    if (match?.id) return match.id;
    nextToken = json.next_token || undefined;
  } while (nextToken);
  return null;
}

/** Step 2b: fetch full application (incl. client_secret) by id. */
async function getApplication({ apiBase, token, id }) {
  const { res, url, text } = await kindeApi({
    apiBase,
    token,
    path: `/api/v1/applications/${encodeURIComponent(id)}`,
  });
  if (!res.ok) {
    throw new Error(`Get application (GET ${url}) failed: ${res.status} ${text}`);
  }
  const app = JSON.parse(text).application;
  if (!app?.client_id) {
    throw new Error(`Get application response missing application.client_id: ${text}`);
  }
  return app;
}

function formatCredentialOutput(app, { name, type }) {
  const out = {
    id: app.id,
    name: app.name ?? name,
    type: app.type ?? type,
    client_id: app.client_id,
    client_secret: app.client_secret,
  };
  for (const k of Object.keys(out)) {
    if (out[k] === undefined || out[k] === null) delete out[k];
  }
  const lines = [`client_id=${out.client_id}`];
  if (out.client_secret) lines.push(`client_secret=${out.client_secret}`);
  lines.push("", JSON.stringify(out, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, type: typeArg, reuse: reuseArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    type: { type: "string" },
    reuse: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: kinde-api-auth [options]

  Creates a Kinde application via the Management API and prints client_id /
  client_secret. With --reuse, an existing application of the same --name is
  returned instead of creating a duplicate.

Options:
  --name         Required. The application's name.
  --type         Application type: reg | spa | m2m | device  (default: ${DEFAULT_TYPE})
  --reuse        If an app with this --name already exists, return it instead of creating.
  -h, --help

Environment (Path A — mint a token from M2M credentials):
  KINDE_DOMAIN              https://your-subdomain.kinde.com  (or just "your-subdomain")
  KINDE_M2M_CLIENT_ID       client_id of a Management-API-authorized M2M app
  KINDE_M2M_CLIENT_SECRET   its client_secret

Environment (Path B — paste a pre-obtained management token):
  KINDE_DOMAIN              (still required)
  KINDE_TOKEN               a valid Kinde Management API bearer token

  The M2M app must be authorized for the Kinde Management API with at least
  create:applications and read:applications.

  With npm, pass a double dash before flags:  npm start -- --name "My App"
`);
  process.exit(0);
}

if (positionals.length > 0) {
  bail(
    `Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}\n` +
      'If you used npm, put a double dash before the options, e.g.:\n' +
      '  npm start -- --name "My App" --type m2m'
  );
}

const name = nameArg;
const type = typeArg ?? DEFAULT_TYPE;
if (!name) bail('Missing required argument: --name\nExample: node kinde-api-auth.mjs --name "My Agent App" --type m2m');
if (!APP_TYPES.has(type)) {
  bail(`Invalid --type "${type}". Must be one of: ${[...APP_TYPES].join(", ")}`);
}

const domain = normalizeDomain(process.env.KINDE_DOMAIN);
if (!domain) {
  bail(
    "Missing or invalid KINDE_DOMAIN. Set it to your Kinde domain, e.g.\n" +
      "  export KINDE_DOMAIN=https://your-subdomain.kinde.com"
  );
}
const apiBase = domain; // Management endpoints live under {domain}/api/v1

async function resolveToken() {
  if (process.env.KINDE_TOKEN) return process.env.KINDE_TOKEN.trim();
  const clientId = process.env.KINDE_M2M_CLIENT_ID;
  const clientSecret = process.env.KINDE_M2M_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    bail(
      "No credentials found. Provide EITHER:\n" +
        "  - KINDE_M2M_CLIENT_ID and KINDE_M2M_CLIENT_SECRET  (script mints the token), or\n" +
        "  - KINDE_TOKEN                                       (a management bearer token)"
    );
  }
  return mintManagementToken({ domain, clientId, clientSecret });
}

try {
  const token = await resolveToken();

  if (reuseArg) {
    const existingId = await findApplicationByName({ apiBase, token, name });
    if (existingId) {
      const app = await getApplication({ apiBase, token, id: existingId });
      console.error(`Application named "${name}" already exists; returning existing credentials.`);
      process.stdout.write(formatCredentialOutput(app, { name, type }));
      process.exit(0);
    }
  }

  // NOTE: Kinde does not appear to reject duplicate application names at create time, so
  // "already registered" handling here is an explicit --reuse name lookup rather than a
  // reaction to a specific API error code. Verify against your tenant's behavior.
  const created = await createApplication({ apiBase, token, name, type });
  process.stdout.write(formatCredentialOutput(created, { name, type }));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}

#!/usr/bin/env node
/**
 * stytch-api-auth.mjs
 * -----------------------------------------------------------------------------
 * Provider:    Stytch (Connected Apps — OAuth/OIDC for your own users + agents)
 *
 * What it does:
 *   Registers an OAuth client ("Connected App") in your Stytch project and
 *   prints client_id / client_secret to stdout. Two modes:
 *
 *     1. --admin (default)  Bucket (b): use your Stytch *project* credentials
 *        (project_id + secret, HTTP Basic) to call the Management endpoint
 *        POST /v1/connected_apps/clients. This is the full, supported create
 *        path and returns a client_secret exactly once.
 *
 *     2. --dcr              Bucket (a): RFC 7591 Dynamic Client Registration.
 *        An *unauthenticated* POST /v1/oauth2/register that a client/agent can
 *        call at runtime with no project credentials. Great for the agentic
 *        story, but third_party_public clients get no secret.
 *
 * Auth model:
 *   Admin mode  -> HTTP Basic: Authorization: Basic base64(project_id:secret)
 *   DCR mode    -> none (public endpoint), project id lives in the URL path
 *
 * Env vars:
 *   STYTCH_PROJECT_ID   Your Stytch project id (project-test-... / project-live-...)
 *   STYTCH_SECRET       Your Stytch project secret (secret-test-... / secret-live-...)
 *   STYTCH_ENV          "test" (default) or "live"
 *
 * Docs:
 *   B2B create:  https://stytch.com/docs/b2b/api/connected-apps-create
 *   Consumer:    https://stytch.com/docs/api/connected-apps-create
 *   DCR:         https://stytch.com/docs/b2b/api/connected-app-dynamic-client-registration
 *   MCP/DCR:     https://stytch.com/blog/mcp-oauth-dynamic-client-registration/
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 * -----------------------------------------------------------------------------
 */
import { parseArgs } from "node:util";
import process from "node:process";

const ENV_BASE = {
  test: "https://test.stytch.com",
  live: "https://api.stytch.com",
};

const CREATE_PATH = "/v1/connected_apps/clients";
// DCR is a public endpoint; the legacy/public form carries the project id in
// the path so we can reach it without a configured custom auth domain.
// NOTE: verify against your project's custom authentication domain; the
// canonical form is https://${projectDomain}/v1/oauth2/register.
const dcrPath = (projectId) => `/v1/public/${projectId}/oauth2/register`;

function basicAuth(projectId, secret) {
  return "Basic " + Buffer.from(`${projectId}:${secret}`).toString("base64");
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return v;
}

function parseStytchError(text) {
  try {
    const j = JSON.parse(text);
    return j.error_message || j.error_type || j.error || null;
  } catch {
    return null;
  }
}

async function stytchRequest({ url, method = "GET", headers = {}, body }) {
  const res = await fetch(url, {
    method,
    headers: {
      accept: "application/json",
      ...(body !== undefined ? { "content-type": "application/json" } : {}),
      ...headers,
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, text: await res.text() };
}

/**
 * Bucket (b): Management create. Authenticated with project_id:secret.
 * POST /v1/connected_apps/clients  ->  201 with connected_app { client_id, client_secret, ... }
 */
async function createConnectedApp({ base, projectId, secret, clientType, name, description, website }) {
  const url = new URL(CREATE_PATH, base).toString();
  const body = {
    client_type: clientType,
    ...(name ? { client_name: name } : {}),
    ...(description ? { client_description: description } : {}),
    ...(website ? { redirect_urls: [website] } : {}),
  };
  const { res, text } = await stytchRequest({
    url,
    method: "POST",
    headers: { authorization: basicAuth(projectId, secret) },
    body,
  });
  if (res.status === 200 || res.status === 201) {
    const app = JSON.parse(text).connected_app ?? JSON.parse(text);
    return { credentials: appCredentials(app), existing: false };
  }
  // Stytch does not dedupe Management-created confidential clients, so there is
  // no "already exists" short-circuit here; surface the structured error.
  const msg = parseStytchError(text) || text;
  throw new Error(`Create connected app (POST ${url}) failed: ${res.status} ${msg}`);
}

/**
 * Bucket (a): RFC 7591 Dynamic Client Registration. Unauthenticated.
 * POST /v1/public/${projectId}/oauth2/register  -> client_id (+ secret if confidential).
 * third_party_public + token_endpoint_auth_method:"none" dedupes by metadata.
 */
async function registerViaDcr({ base, projectId, name, website, authMethod }) {
  const url = new URL(dcrPath(projectId), base).toString();
  const body = {
    redirect_uris: website ? [website] : [],
    ...(name ? { client_name: name } : {}),
    token_endpoint_auth_method: authMethod, // "none" (public) | "client_secret_basic" (confidential)
  };
  const { res, text } = await stytchRequest({ url, method: "POST", body });
  if (res.status === 200 || res.status === 201) {
    return { credentials: appCredentials(JSON.parse(text)), existing: false };
  }
  const msg = parseStytchError(text) || text;
  throw new Error(`DCR register (POST ${url}) failed: ${res.status} ${msg}`);
}

function appCredentials(app) {
  return {
    client_id: app.client_id,
    client_secret: app.client_secret, // present only for confidential clients, once
    name: app.client_name,
    client_type: app.client_type,
    redirect_uris: app.redirect_uris ?? app.redirect_urls,
    token_endpoint_auth_method: app.token_endpoint_auth_method,
  };
}

function formatCredentialOutput(c) {
  const fields = {};
  for (const k of Object.keys(c)) {
    if (c[k] !== undefined && c[k] !== null && !(Array.isArray(c[k]) && c[k].length === 0)) {
      fields[k] = c[k];
    }
  }
  const lines = [`client_id=${fields.client_id ?? ""}`];
  if (fields.client_secret) lines.push(`client_secret=${fields.client_secret}`);
  lines.push("", JSON.stringify(fields, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, website: siteArg, type: typeArg, dcr: dcrArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    type: { type: "string" }, // client_type / token_endpoint_auth_method shorthand
    dcr: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: stytch-api-auth [options]

  Registers an OAuth client ("Connected App") in your Stytch project and prints
  client_id / client_secret.

Modes:
  (default)  Management create: HTTP Basic with STYTCH_PROJECT_ID:STYTCH_SECRET
             POST /v1/connected_apps/clients
  --dcr      RFC 7591 Dynamic Client Registration (no project creds needed)
             POST /v1/public/<project_id>/oauth2/register

Options:
  --name           Human-readable client name
  --description     Client description (Management mode only)
  --website         A redirect/callback URL (added to redirect_urls)
  --type            Management: first_party | first_party_public | third_party | third_party_public
                    (default: third_party). DCR: public | confidential (default: confidential)
  --dcr             Use the public Dynamic Client Registration endpoint
  -h, --help

Env:
  STYTCH_PROJECT_ID   required   STYTCH_SECRET   required (Management mode)
  STYTCH_ENV          "test" (default) | "live"

Note: a confidential client_secret is shown EXACTLY ONCE. Save it now.
`);
  process.exit(0);
}

const stytchEnv = (process.env.STYTCH_ENV || "test").toLowerCase();
const base = ENV_BASE[stytchEnv];
if (!base) {
  console.error(`STYTCH_ENV must be "test" or "live" (got: ${process.env.STYTCH_ENV}).`);
  process.exit(1);
}

const projectId = requireEnv("STYTCH_PROJECT_ID");

(async () => {
  try {
    let result;
    if (dcrArg) {
      const authMethod = typeArg === "public" ? "none" : "client_secret_basic";
      result = await registerViaDcr({ base, projectId, name: nameArg, website: siteArg, authMethod });
    } else {
      const secret = requireEnv("STYTCH_SECRET");
      const clientType = typeArg || "third_party";
      result = await createConnectedApp({
        base,
        projectId,
        secret,
        clientType,
        name: nameArg,
        description: descArg,
        website: siteArg,
      });
    }
    if (!result?.credentials?.client_id) {
      throw new Error("No client_id was returned by Stytch.");
    }
    if (!result.credentials.client_secret) {
      console.error(
        "Note: no client_secret returned (public client). Use PKCE; there is no secret to store."
      );
    }
    process.stdout.write(formatCredentialOutput(result.credentials));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

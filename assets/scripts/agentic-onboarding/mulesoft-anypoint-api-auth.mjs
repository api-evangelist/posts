#!/usr/bin/env node
/**
 * mulesoft-anypoint-api-auth — register an Anypoint Platform client application
 * and print its clientId / clientSecret.
 *
 * What it does:
 *   1. Mints a bearer token from a MuleSoft *Connected App* using the
 *      client_credentials grant (no browser, no user password).
 *   2. POSTs the API Platform applications endpoint to create a client
 *      application, which returns a clientId + clientSecret.
 *   3. Handles the "already registered" case by listing your applications and
 *      returning the existing one that matches --name.
 *
 * Auth model (bucket b): Management/Admin API + pasted machine credentials.
 *   Unlike the SoundCloud reference, Anypoint has no PKCE browser-OAuth + DCR
 *   path for self-serve app registration. You first create a Connected App in
 *   Access Management (UI) with the "Application Creator" scope, then paste its
 *   client_id/client_secret here as env vars. This CLI automates everything
 *   after that one manual step.
 *
 * Env vars:
 *   ANYPOINT_CLIENT_ID      Connected App client_id (used to mint the token)
 *   ANYPOINT_CLIENT_SECRET  Connected App client_secret
 *   ANYPOINT_ORG_ID         Business group / organization id that owns the apps
 *   ANYPOINT_BASE_URL       Optional. Defaults to https://anypoint.mulesoft.com
 *                           (use https://eu1.anypoint.mulesoft.com for the EU control plane)
 *   ANYPOINT_API_VERSION_ID Optional. API instance id to also create a contract against.
 *
 * Docs:
 *   - Connected App bearer token (client_credentials):
 *     https://docs.mulesoft.com/access-management/connected-app-bearer-token-example
 *   - Token endpoint: https://anypoint.mulesoft.com/accounts/api/v2/oauth2/token
 *   - Create client app (API Platform API):
 *     https://docs.mulesoft.com/api-manager/latest/manage-client-apps-connected-apps-concept
 *   - API Platform API portal:
 *     https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/.../api-platform-api/
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DEFAULT_BASE_URL = "https://anypoint.mulesoft.com";

function baseUrl() {
  return (process.env.ANYPOINT_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, "");
}

function tokenUrl() {
  return `${baseUrl()}/accounts/api/v2/oauth2/token`;
}

function applicationsUrl(orgId, apiVersionId) {
  const u = new URL(`${baseUrl()}/apiplatform/repository/v2/organizations/${orgId}/applications`);
  if (apiVersionId) u.searchParams.set("apiVersionId", apiVersionId);
  return u.toString();
}

/**
 * Mint a bearer token from a Connected App via client_credentials.
 * @see https://docs.mulesoft.com/access-management/connected-app-bearer-token-example
 */
async function getConnectedAppToken({ clientId, clientSecret }) {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });
  const url = tokenUrl();
  const res = await fetch(url, {
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
      `Token request (POST ${url}) failed: ${res.status} ${text}\n` +
        "Check ANYPOINT_CLIENT_ID / ANYPOINT_CLIENT_SECRET and that the Connected App " +
        "has the 'Application Creator' scope on the right organization."
    );
  }
  const json = JSON.parse(text);
  if (!json.access_token) {
    throw new Error(`No access_token in token response: ${text}`);
  }
  return json.access_token;
}

async function anypointRequest({ accessToken, url, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${accessToken}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, text: await res.text() };
}

/**
 * The applications collection endpoint returns a paged object. The exact
 * envelope varies by control-plane version; we defensively pull the array out
 * of `.applications`, `.data`, or a bare array.
 * NOTE: verify the list response envelope for your org against the API Platform API portal.
 */
function applicationsFromList(parsed) {
  if (Array.isArray(parsed)) return parsed;
  if (Array.isArray(parsed?.applications)) return parsed.applications;
  if (Array.isArray(parsed?.data)) return parsed.data;
  return [];
}

async function findExistingApplication({ accessToken, orgId, name }) {
  // GET the same applications path (no apiVersionId) to enumerate the org's apps.
  const url = applicationsUrl(orgId);
  const { res, text } = await anypointRequest({ accessToken, url });
  if (!res.ok) {
    // Listing is best-effort; if it fails we simply can't dedupe.
    return null;
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    return null;
  }
  const apps = applicationsFromList(parsed);
  return apps.find((a) => a?.name === name && a?.clientId) || null;
}

function credentialsFromApp(app) {
  return {
    client_id: app.clientId,
    client_secret: app.clientSecret,
    application_id: app.id,
    name: app.name,
    description: app.description,
    website: app.url,
    redirect_uri: Array.isArray(app.redirectUri) ? app.redirectUri : app.redirectUri ? [app.redirectUri] : undefined,
  };
}

function publicCredentialFields(credentials) {
  const fields = {};
  for (const key of [
    "client_id",
    "client_secret",
    "application_id",
    "name",
    "description",
    "website",
    "redirect_uri",
  ]) {
    if (credentials[key] !== undefined && credentials[key] !== null) {
      fields[key] = credentials[key];
    }
  }
  return fields;
}

function formatCredentialOutput(credentials) {
  const pub = publicCredentialFields(credentials);
  const lines = [`client_id=${pub.client_id}`];
  if (pub.client_secret) lines.push(`client_secret=${pub.client_secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

async function createOrFetchApplication({ accessToken, orgId, apiVersionId, name, description, website }) {
  const url = applicationsUrl(orgId, apiVersionId);
  const payload = {
    name,
    description,
    url: website,
    redirectUri: website ? [website] : [],
  };
  const { res, text } = await anypointRequest({
    accessToken,
    url,
    method: "POST",
    body: payload,
  });

  if (res.status === 200 || res.status === 201) {
    return { credentials: credentialsFromApp(JSON.parse(text)), existing: false };
  }

  // A name collision typically comes back 409 (or a 400 mentioning "already").
  if (res.status === 409 || (res.status === 400 && /already|exist/i.test(text))) {
    const existing = await findExistingApplication({ accessToken, orgId, name });
    if (existing) {
      return {
        credentials: credentialsFromApp(existing),
        existing: true,
        notice: `An application named "${name}" already exists; returning its credentials.`,
      };
    }
    throw new Error(
      `An application named "${name}" appears to exist but could not be read back ` +
        `(POST ${url} returned ${res.status}). Response: ${text}`
    );
  }

  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `Create app (POST ${url}) was rejected: ${res.status} ${text}\n` +
        "The Connected App likely lacks the 'Application Creator' scope, or " +
        "ANYPOINT_ORG_ID is not an org this app can manage."
    );
  }

  throw new Error(`Create app (POST ${url}) failed: ${res.status} ${text}`);
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required environment variable: ${name}`);
    console.error(
      "Set ANYPOINT_CLIENT_ID, ANYPOINT_CLIENT_SECRET (your Connected App), and ANYPOINT_ORG_ID."
    );
    process.exit(1);
  }
  return v;
}

const {
  values: { name: nameArg, description: descArg, website: siteArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
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
  console.log(`Usage: mulesoft-anypoint-api-auth [options]

  Mints a bearer token from your Anypoint Connected App (client_credentials),
  then calls the API Platform applications endpoint to create a client
  application and prints its clientId and clientSecret. Re-running with the same
  --name returns the existing application's credentials.

Options:
  --name            Required. Application name.
  --description     Optional. Application description.
  --website         Optional. Application URL (also used as the redirect URI).
  -h, --help

Environment:
  ANYPOINT_CLIENT_ID       Connected App client_id (mints the bearer token)
  ANYPOINT_CLIENT_SECRET   Connected App client_secret
  ANYPOINT_ORG_ID          Organization / business group id that owns the app
  ANYPOINT_BASE_URL        Optional control-plane base (default https://anypoint.mulesoft.com)
  ANYPOINT_API_VERSION_ID  Optional API instance id to bind a contract to

  Create the Connected App once in Access Management with the
  "Application Creator" scope, then export its credentials as the env vars above.
`);
  process.exit(0);
}

const appName = nameArg;
if (!appName) {
  console.error("Missing required argument: --name");
  console.error('Example: node mulesoft-anypoint-api-auth.mjs --name "My Agent App" --description "Agent integration" --website "https://example.com"');
  process.exit(1);
}

const clientId = requireEnv("ANYPOINT_CLIENT_ID");
const clientSecret = requireEnv("ANYPOINT_CLIENT_SECRET");
const orgId = requireEnv("ANYPOINT_ORG_ID");
const apiVersionId = process.env.ANYPOINT_API_VERSION_ID || undefined;

(async () => {
  try {
    const accessToken = await getConnectedAppToken({ clientId, clientSecret });
    const result = await createOrFetchApplication({
      accessToken,
      orgId,
      apiVersionId,
      name: appName,
      description: descArg ?? "",
      website: siteArg,
    });
    if (result.existing && result.notice) {
      console.error(result.notice);
    }
    process.stdout.write(formatCredentialOutput(result.credentials));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

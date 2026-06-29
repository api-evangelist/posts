#!/usr/bin/env node
/**
 * microsoft-entra-api-auth.mjs
 *
 * Provider:  Microsoft Entra ID (formerly Azure Active Directory)
 * What it does:
 *   Registers an Entra application via Microsoft Graph, mints a client secret, and
 *   (optionally) creates the matching service principal, then prints
 *   client_id / client_secret to stdout. Faithful-in-spirit port of the SoundCloud
 *   `sc-api-auth.mjs` programmatic-onboarding CLI.
 *
 * Bucket (b): management/admin API + a bearer token the user supplies via env var.
 *   There is NO RFC 7591 Dynamic Client Registration and NO browser-OAuth self-serve
 *   app-creation flow on Entra. You must already hold a Microsoft Graph access token
 *   with rights to register apps. This tool automates the create -> addPassword ->
 *   servicePrincipal chain; it cannot bootstrap your first credential from nothing.
 *
 * Auth model:
 *   Authorization: Bearer <Microsoft Graph access token>
 *   Required permission: Application.ReadWrite.OwnedBy (least privileged) or
 *   Application.ReadWrite.All. The Application Developer role (or a member user) works
 *   for delegated tokens.
 *
 * Env vars:
 *   GRAPH_ACCESS_TOKEN   Required. A Microsoft Graph bearer token.
 *                        Interactive: az account get-access-token \
 *                          --resource https://graph.microsoft.com \
 *                          --query accessToken -o tsv
 *                        Non-interactive: client_credentials grant against
 *                          https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
 *                          with scope=https://graph.microsoft.com/.default
 *
 * Node.js stdlib only (Node 18+). No npm dependencies.
 *
 * Docs:
 *   https://learn.microsoft.com/en-us/graph/api/application-post-applications?view=graph-rest-1.0
 *   https://learn.microsoft.com/en-us/graph/api/application-addpassword?view=graph-rest-1.0
 *   https://learn.microsoft.com/en-us/graph/api/serviceprincipal-post-serviceprincipals?view=graph-rest-1.0
 */
import { parseArgs } from "node:util";
import process from "node:process";

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";
const APPLICATIONS_URL = `${GRAPH_BASE}/applications`;
const SERVICE_PRINCIPALS_URL = `${GRAPH_BASE}/servicePrincipals`;

/**
 * Every Graph call uses `Authorization: Bearer <token>`.
 */
async function graphRequest({ token, url, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) {
    headers["content-type"] = "application/json";
  }
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, text: await res.text() };
}

function parseGraphError(text) {
  try {
    const err = JSON.parse(text)?.error;
    if (!err) return null;
    return { code: err.code, message: err.message };
  } catch {
    return null;
  }
}

function graphErrorMessage(text, fallback) {
  const err = parseGraphError(text);
  if (err?.message) return err.code ? `${err.code}: ${err.message}` : err.message;
  return fallback;
}

/**
 * Best-effort lookup of an existing application by exact display name.
 * Entra permits multiple apps with the same displayName, so this is a heuristic
 * match (first hit wins), not a hard uniqueness guarantee.
 */
async function findApplicationByName({ token, name }) {
  const url = `${APPLICATIONS_URL}?$filter=${encodeURIComponent(
    `displayName eq '${name.replace(/'/g, "''")}'`
  )}&$select=id,appId,displayName&$top=1`;
  const { res, text } = await graphRequest({ token, url });
  if (!res.ok) {
    throw new Error(
      `List applications (GET ${APPLICATIONS_URL}) failed: ${res.status} ${graphErrorMessage(
        text,
        text
      )}`
    );
  }
  const value = JSON.parse(text)?.value;
  return Array.isArray(value) && value.length > 0 ? value[0] : null;
}

async function createApplication({ token, name, website, redirectUri, signInAudience }) {
  const body = { displayName: name };
  if (signInAudience) body.signInAudience = signInAudience;
  const web = {};
  if (website) web.homePageUrl = website;
  if (redirectUri) web.redirectUris = [redirectUri];
  if (Object.keys(web).length > 0) body.web = web;

  const { res, text } = await graphRequest({
    token,
    url: APPLICATIONS_URL,
    method: "POST",
    body,
  });
  if (res.status !== 201) {
    if (res.status === 401) {
      throw new Error(
        `Create application failed: 401 Unauthorized. Is GRAPH_ACCESS_TOKEN valid and ` +
          `for resource https://graph.microsoft.com? ${graphErrorMessage(text, "")}`.trim()
      );
    }
    if (res.status === 403) {
      throw new Error(
        `Create application failed: 403 Forbidden. Your token needs ` +
          `Application.ReadWrite.OwnedBy or Application.ReadWrite.All (or the ` +
          `Application Developer role). ${graphErrorMessage(text, "")}`.trim()
      );
    }
    throw new Error(
      `Create application (POST ${APPLICATIONS_URL}) failed: ${res.status} ${graphErrorMessage(
        text,
        text
      )}`
    );
  }
  return JSON.parse(text); // contains id (Object ID) and appId (Client ID)
}

/**
 * Mint a client secret. secretText is returned ONCE and can never be retrieved again.
 */
async function addPassword({ token, applicationObjectId, displayName }) {
  const url = `${APPLICATIONS_URL}/${encodeURIComponent(applicationObjectId)}/addPassword`;
  const { res, text } = await graphRequest({
    token,
    url,
    method: "POST",
    body: { passwordCredential: { displayName } },
  });
  if (!res.ok) {
    throw new Error(
      `Add password (POST .../addPassword) failed: ${res.status} ${graphErrorMessage(text, text)}`
    );
  }
  return JSON.parse(text); // contains secretText, keyId, hint, endDateTime
}

/**
 * Create the matching service principal (enterprise app entry) for the appId.
 * Returns null if one already exists (Graph returns 409 / "already exists").
 */
async function createServicePrincipal({ token, appId }) {
  const { res, text } = await graphRequest({
    token,
    url: SERVICE_PRINCIPALS_URL,
    method: "POST",
    body: { appId },
  });
  if (res.status === 201) {
    return JSON.parse(text);
  }
  if (res.status === 409) {
    return null; // already provisioned
  }
  const err = parseGraphError(text);
  if (err?.message && /exist/i.test(err.message)) {
    return null;
  }
  throw new Error(
    `Create service principal (POST ${SERVICE_PRINCIPALS_URL}) failed: ${res.status} ` +
      graphErrorMessage(text, text)
  );
}

function formatCredentialOutput(credentials) {
  const lines = [`client_id=${credentials.client_id}`];
  if (credentials.client_secret) {
    lines.push(`client_secret=${credentials.client_secret}`);
  }
  lines.push("", JSON.stringify(credentials, null, 2), "");
  return lines.join("\n");
}

const {
  values: {
    name: nameArg,
    website: siteArg,
    "redirect-uri": redirectArg,
    "sign-in-audience": audienceArg,
    "no-service-principal": noSpArg,
    help: helpArg,
  },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    website: { type: "string" },
    "redirect-uri": { type: "string" },
    "sign-in-audience": { type: "string" },
    "no-service-principal": { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(
    `Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`
  );
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: microsoft-entra-api-auth --name "My App" [options]

  Registers a Microsoft Entra ID application via Microsoft Graph, mints a client
  secret, and (by default) creates its service principal. Prints client_id and
  client_secret to stdout.

Options:
  --name                 Required. displayName for the new app registration.
  --website              Optional. Sets web.homePageUrl.
  --redirect-uri         Optional. Adds a web redirect URI.
  --sign-in-audience     Optional. e.g. AzureADMyOrg, AzureADMultipleOrgs,
                         AzureADandPersonalMicrosoftAccount. Defaults to tenant default.
  --no-service-principal Optional. Skip creating the service principal.
  -h, --help

Auth:
  Set GRAPH_ACCESS_TOKEN to a Microsoft Graph bearer token, e.g.:
    export GRAPH_ACCESS_TOKEN="$(az account get-access-token \\
      --resource https://graph.microsoft.com --query accessToken -o tsv)"
  Token needs Application.ReadWrite.OwnedBy (or .All), or the Application Developer role.

  NOTE: Entra has no Dynamic Client Registration and no browser self-serve app
  creation, so unlike the SoundCloud flow there is no PKCE login step here — you must
  already hold a Graph token. The client_secret is shown ONCE and is unrecoverable.
`);
  process.exit(0);
}

const token = process.env.GRAPH_ACCESS_TOKEN;
if (!token) {
  console.error(
    "Missing GRAPH_ACCESS_TOKEN. Get one with:\n" +
      "  export GRAPH_ACCESS_TOKEN=\"$(az account get-access-token " +
      "--resource https://graph.microsoft.com --query accessToken -o tsv)\""
  );
  process.exit(1);
}

const appName = nameArg;
if (!appName) {
  console.error("Missing required argument: --name");
  console.error('Example: node microsoft-entra-api-auth.mjs --name "My First API App" --website "https://example.com"');
  process.exit(1);
}

try {
  let app = await findApplicationByName({ token, name: appName });
  let existing = false;

  if (app) {
    existing = true;
    console.error(
      `An application named "${appName}" already exists (appId=${app.appId}). ` +
        "Reusing it and minting a fresh client secret."
    );
  } else {
    app = await createApplication({
      token,
      name: appName,
      website: siteArg,
      redirectUri: redirectArg,
      signInAudience: audienceArg,
    });
  }

  const password = await addPassword({
    token,
    applicationObjectId: app.id,
    displayName: `${appName} secret`,
  });

  let servicePrincipalId;
  if (!noSpArg) {
    try {
      const sp = await createServicePrincipal({ token, appId: app.appId });
      if (sp) servicePrincipalId = sp.id;
    } catch (e) {
      // Non-fatal: the app + secret are already usable for many flows.
      console.error(`Warning: could not create service principal: ${e.message}`);
    }
  }

  const credentials = {
    client_id: app.appId,
    client_secret: password.secretText,
    object_id: app.id,
    name: app.displayName ?? appName,
    secret_key_id: password.keyId,
    secret_expires: password.endDateTime,
    ...(servicePrincipalId ? { service_principal_id: servicePrincipalId } : {}),
  };

  if (existing) {
    console.error("Note: reused an existing application registration.");
  }
  process.stdout.write(formatCredentialOutput(credentials));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}

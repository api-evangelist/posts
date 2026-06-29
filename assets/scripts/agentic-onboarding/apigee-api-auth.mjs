#!/usr/bin/env node
/**
 * apigee-api-auth.mjs
 *
 * Provider: Google Cloud Apigee (Apigee X / hybrid management API)
 * What it does: Creates an Apigee Developer and a Developer App via the
 *   management API, then prints the app's consumerKey / consumerSecret
 *   (Apigee's equivalent of client_id / client_secret).
 *
 * Auth model: Google OAuth2 *bearer token* (NOT a static PAT). Apigee X
 *   authenticates the management API with a short-lived Google access token.
 *   Interactively:   export GOOGLE_ACCESS_TOKEN="$(gcloud auth print-access-token)"
 *   In automation:   mint a token from a service account that holds the
 *                    Apigee Developer Admin / Organization Admin role.
 *
 * Env vars:
 *   GOOGLE_ACCESS_TOKEN  (required)  Google OAuth2 access token (Bearer).
 *   APIGEE_ORG           (required)  Your Apigee organization name.
 *
 * Node.js 18+ stdlib only. No npm install.
 *
 * Docs:
 *   https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.developers/create
 *   https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.developers.apps/create
 *   https://docs.cloud.google.com/apigee/docs/api-platform/security/api-keys
 *
 * Apigee Edge (legacy) note: classic Edge uses host
 *   https://api.enterprise.apigee.com/v1 with Basic/OAuth-password auth from
 *   login.apigee.com. This script targets Apigee X (apigee.googleapis.com).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const APIGEE_HOST = "https://apigee.googleapis.com";

function base(org) {
  return `${APIGEE_HOST}/v1/organizations/${encodeURIComponent(org)}`;
}
function developersUrl(org) {
  return `${base(org)}/developers`;
}
function appsUrl(org, devEmail) {
  return `${base(org)}/developers/${encodeURIComponent(devEmail)}/apps`;
}
function appUrl(org, devEmail, appName) {
  return `${appsUrl(org, devEmail)}/${encodeURIComponent(appName)}`;
}

/** All management calls use Authorization: Bearer <google-access-token>. */
async function apigeeRequest({ token, url, method = "GET", body }) {
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
  return { res, text: await res.text() };
}

function parseJsonSafe(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function apiErrorMessage(text, fallback) {
  const j = parseJsonSafe(text);
  return j?.error?.message || j?.message || fallback;
}

/**
 * Ensure the developer exists. Apigee returns 409 if the email already exists,
 * which we treat as success (idempotent).
 */
async function ensureDeveloper({ token, org, email, firstName, lastName, userName }) {
  const { res, text } = await apigeeRequest({
    token,
    url: developersUrl(org),
    method: "POST",
    body: { email, firstName, lastName, userName },
  });
  if (res.status === 200 || res.status === 201) {
    return { created: true };
  }
  // 409 Conflict => developer already registered. Good enough.
  if (res.status === 409) {
    return { created: false };
  }
  throw new Error(
    `Create developer (POST ${developersUrl(org)}) failed: ${res.status} ${apiErrorMessage(
      text,
      text
    )}`
  );
}

function credentialFromApp(app) {
  // Apigee returns a `credentials` array; the consumerKey/consumerSecret live there.
  const cred = Array.isArray(app?.credentials)
    ? app.credentials.find((c) => c?.consumerKey)
    : null;
  if (!cred) {
    throw new Error("No consumerKey/consumerSecret found on the developer app.");
  }
  return {
    consumer_key: cred.consumerKey,
    consumer_secret: cred.consumerSecret,
    name: app.name,
    developer_email: app.developerId ? undefined : undefined, // kept minimal
    api_products: (cred.apiProducts || []).map((p) => p.apiproduct).filter(Boolean),
    status: cred.status,
    expires_at: cred.expiresAt,
    callback_url: app.callbackUrl,
  };
}

async function fetchExistingApp({ token, org, email, appName }) {
  const { res, text } = await apigeeRequest({ token, url: appUrl(org, email, appName) });
  if (!res.ok) {
    throw new Error(
      `Read app (GET ${appUrl(org, email, appName)}) failed: ${res.status} ${apiErrorMessage(
        text,
        text
      )}`
    );
  }
  const app = parseJsonSafe(text);
  if (!app) throw new Error("Could not parse existing app response.");
  return app;
}

async function createOrFetchApp({ token, org, email, appName, apiProducts, keyExpiresIn, website }) {
  const body = { name: appName };
  if (apiProducts.length) body.apiProducts = apiProducts;
  if (keyExpiresIn !== undefined) body.keyExpiresIn = keyExpiresIn;
  if (website) body.callbackUrl = website;

  const { res, text } = await apigeeRequest({
    token,
    url: appsUrl(org, email),
    method: "POST",
    body,
  });

  if (res.status === 200 || res.status === 201) {
    return { app: parseJsonSafe(text), existing: false };
  }

  // App name already taken for this developer -> read it back.
  // NOTE: verify the exact status/wording on your org; Apigee returns 409 for
  // "developer app ... already exists".
  if (res.status === 409) {
    const app = await fetchExistingApp({ token, org, email, appName });
    return {
      app,
      existing: true,
      notice: `A developer app named "${appName}" already exists for ${email}; returning its credentials.`,
    };
  }

  throw new Error(
    `Create app (POST ${appsUrl(org, email)}) failed: ${res.status} ${apiErrorMessage(
      text,
      text
    )}`
  );
}

function formatCredentialOutput(cred) {
  // Mirror the SoundCloud script: print client_id=/client_secret= then JSON.
  // For Apigee, client_id == consumerKey and client_secret == consumerSecret.
  const lines = [
    `client_id=${cred.consumer_key}`,
    `client_secret=${cred.consumer_secret}`,
    "",
    JSON.stringify(
      Object.fromEntries(Object.entries(cred).filter(([, v]) => v !== undefined && v !== null)),
      null,
      2
    ),
    "",
  ];
  return lines.join("\n");
}

const {
  values: {
    name: nameArg,
    "developer-email": devEmailArg,
    "first-name": firstNameArg,
    "last-name": lastNameArg,
    "api-product": apiProductArg,
    website: websiteArg,
    "key-expires-in": keyExpiresInArg,
    help: helpArg,
  },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    "developer-email": { type: "string" },
    "first-name": { type: "string" },
    "last-name": { type: "string" },
    "api-product": { type: "string", multiple: true },
    website: { type: "string" },
    "key-expires-in": { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: apigee-api-auth [options]

  Creates an Apigee Developer and a Developer App via the Apigee X management
  API (apigee.googleapis.com), then prints the app's consumerKey and
  consumerSecret (Apigee's client_id / client_secret equivalents).

Required env vars:
  GOOGLE_ACCESS_TOKEN   Google OAuth2 bearer token.
                        e.g. export GOOGLE_ACCESS_TOKEN="$(gcloud auth print-access-token)"
  APIGEE_ORG            Your Apigee organization name.

Options:
  --name              Required. Developer app name.
  --developer-email   Required. Developer email (created if it does not exist).
  --first-name        Required. Developer first name.
  --last-name         Required. Developer last name.
  --api-product       Optional, repeatable. API product to attach to the app.
  --website           Optional. Becomes the app callbackUrl.
  --key-expires-in    Optional. Key lifetime in ms (-1 = never expire).
  -h, --help

  This is bucket (b): a management API gated by Google Cloud IAM. There is no
  browser OAuth self-registration; you bring a token for an org you administer.
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

const token = process.env.GOOGLE_ACCESS_TOKEN;
const org = process.env.APIGEE_ORG;

if (!token) {
  console.error('Missing GOOGLE_ACCESS_TOKEN. Try: export GOOGLE_ACCESS_TOKEN="$(gcloud auth print-access-token)"');
  process.exit(1);
}
if (!org) {
  console.error("Missing APIGEE_ORG. Try: export APIGEE_ORG=your-apigee-org");
  process.exit(1);
}

const appName = nameArg;
const devEmail = devEmailArg;
const firstName = firstNameArg;
const lastName = lastNameArg;

if (!appName || !devEmail || !firstName || !lastName) {
  console.error("Missing required arguments: --name, --developer-email, --first-name, --last-name");
  console.error(
    'Example: node apigee-api-auth.mjs --name "My Agent App" --developer-email "agent@example.com" --first-name "Ada" --last-name "Lovelace" --api-product "default"'
  );
  process.exit(1);
}

const apiProducts = apiProductArg ?? [];
const keyExpiresIn =
  keyExpiresInArg !== undefined ? Number.parseInt(keyExpiresInArg, 10) : undefined;
if (keyExpiresInArg !== undefined && Number.isNaN(keyExpiresIn)) {
  console.error("--key-expires-in must be an integer number of milliseconds (or -1).");
  process.exit(1);
}

(async () => {
  try {
    const dev = await ensureDeveloper({
      token,
      org,
      email: devEmail,
      firstName,
      lastName,
      userName: devEmail,
    });
    if (!dev.created) {
      console.error(`Developer ${devEmail} already exists; reusing it.`);
    }

    const { app, existing, notice } = await createOrFetchApp({
      token,
      org,
      email: devEmail,
      appName,
      apiProducts,
      keyExpiresIn,
      website: websiteArg,
    });

    if (existing && notice) console.error(notice);

    const cred = credentialFromApp(app);
    process.stdout.write(formatCredentialOutput(cred));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

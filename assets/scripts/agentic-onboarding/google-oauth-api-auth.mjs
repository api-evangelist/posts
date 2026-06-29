#!/usr/bin/env node
/**
 * google-oauth-api-auth.mjs
 *
 * Provider:   Google (Google Cloud / Google APIs OAuth)
 * What it does:
 *   The SoundCloud companion to this series opens a browser, runs PKCE OAuth, and
 *   POSTs an app-registration endpoint to mint client_id/client_secret. Google has
 *   NO equivalent: OAuth 2.0 client IDs (the client_id / client_secret pair) are
 *   created by hand in the Google Cloud Console under APIs & Services > Credentials.
 *   There is no public API to create an OAuth client or read back its client_secret.
 *
 *   But the credential an AGENT actually runs on is not an OAuth client — it is a
 *   SERVICE ACCOUNT and its private key, and THAT path is fully programmatic. So this
 *   CLI does the honest, automatable version of "onboarding":
 *     1. Creates a service account in your project (IAM API).
 *     2. Mints a user-managed key for it and prints the private key JSON — the
 *        machine credential your agent loads as GOOGLE_APPLICATION_CREDENTIALS.
 *   It also handles the "already have this service account" case by reusing it.
 *
 * Auth model:
 *   Authorization: Bearer <access_token>. Get a token from the gcloud CLI:
 *     gcloud auth print-access-token
 *   The acting identity needs iam.serviceAccounts.create and
 *   iam.serviceAccountKeys.create (e.g. roles/iam.serviceAccountAdmin +
 *   roles/iam.serviceAccountKeyAdmin, or Owner) on the project.
 *
 * Env vars:
 *   GOOGLE_ACCESS_TOKEN   Required. OAuth access token for the IAM API.
 *                         Typically: GOOGLE_ACCESS_TOKEN=$(gcloud auth print-access-token)
 *   GOOGLE_PROJECT_ID     Required. The Google Cloud project the SA lives in.
 *
 * Doc links:
 *   IAM REST overview ....... https://cloud.google.com/iam/docs/reference/rest
 *   Create service account .. https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/create
 *   Create key .............. https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/create
 *   Get service account ..... https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/get
 *   Service-account keys .... https://cloud.google.com/iam/docs/keys-create-delete
 *   OAuth clients (console) . https://developers.google.com/identity/protocols/oauth2  (client IDs are console-only)
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const IAM_API_BASE = "https://iam.googleapis.com/v1";

/** Friendly messages for the IAM API error statuses we expect to hit. */
const IAM_ERROR_MESSAGES = {
  UNAUTHENTICATED:
    "Your GOOGLE_ACCESS_TOKEN is missing, expired, or invalid. Refresh it: gcloud auth print-access-token",
  PERMISSION_DENIED:
    "Your identity lacks IAM permission on this project. You need iam.serviceAccounts.create and " +
    "iam.serviceAccountKeys.create (roles/iam.serviceAccountAdmin + roles/iam.serviceAccountKeyAdmin).",
  FAILED_PRECONDITION:
    "Request rejected. The IAM API may be disabled, or an org policy blocks user-managed key creation " +
    "(constraints/iam.disableServiceAccountKeyCreation).",
  RESOURCE_EXHAUSTED: "Quota exceeded (a service account allows at most 10 user-managed keys).",
};

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function iamErrorMessage(parsed, fallback) {
  const err = parsed?.error;
  if (!err) return fallback;
  if (err.status && IAM_ERROR_MESSAGES[err.status]) return IAM_ERROR_MESSAGES[err.status];
  return err.message || fallback;
}

/**
 * The IAM API authenticates with a bearer access token and speaks JSON.
 */
async function iamRequest({ accessToken, url, method = "GET", body }) {
  const headers = { authorization: `Bearer ${accessToken}` };
  let payload;
  if (body !== undefined) {
    headers["content-type"] = "application/json";
    payload = JSON.stringify(body);
  }
  const res = await fetch(url, { method, headers, ...(payload !== undefined ? { body: payload } : {}) });
  const text = await res.text();
  return { res, text, json: safeJson(text) };
}

function serviceAccountUrl(projectId, accountId) {
  // The email is {accountId}@{projectId}.iam.gserviceaccount.com; either email or uniqueId works as the id.
  const email = `${accountId}@${projectId}.iam.gserviceaccount.com`;
  return `${IAM_API_BASE}/projects/${projectId}/serviceAccounts/${encodeURIComponent(email)}`;
}

async function getServiceAccount({ accessToken, projectId, accountId }) {
  const { res, text, json } = await iamRequest({
    accessToken,
    url: serviceAccountUrl(projectId, accountId),
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Get service account failed: ${res.status} ${iamErrorMessage(json, text)}`);
  }
  return json;
}

/**
 * POST /v1/projects/{PROJECT_ID}/serviceAccounts
 * Body: { accountId, serviceAccount: { displayName, description } }
 * Returns a ServiceAccount: { name, email, uniqueId, projectId, displayName, ... }
 */
async function createServiceAccount({ accessToken, projectId, accountId, displayName, description }) {
  const serviceAccount = {};
  if (displayName) serviceAccount.displayName = displayName;
  if (description) serviceAccount.description = description;
  const url = `${IAM_API_BASE}/projects/${projectId}/serviceAccounts`;
  const { res, text, json } = await iamRequest({
    accessToken,
    url,
    method: "POST",
    body: { accountId, serviceAccount },
  });

  if (res.status === 200 || res.status === 201) {
    return { account: json, existing: false };
  }

  // ALREADY_EXISTS (409): reuse it.
  if (res.status === 409) {
    const existing = await getServiceAccount({ accessToken, projectId, accountId });
    if (existing) {
      return {
        account: existing,
        existing: true,
        notice: `Service account ${existing.email} already exists; reusing it and minting a new key.`,
      };
    }
  }

  throw new Error(`Create service account (POST ${url}) failed: ${res.status} ${iamErrorMessage(json, text)}`);
}

/**
 * POST /v1/projects/{PROJECT_ID}/serviceAccounts/{EMAIL}/keys
 * Body: { privateKeyType: "TYPE_GOOGLE_CREDENTIALS_FILE", keyAlgorithm: "KEY_ALG_RSA_2048" }
 * Returns a ServiceAccountKey whose privateKeyData is the base64-encoded JSON key file
 * (Google keeps only the public half). This is the one-and-only chance to read the key.
 */
async function createServiceAccountKey({ accessToken, projectId, email }) {
  const url = `${IAM_API_BASE}/projects/${projectId}/serviceAccounts/${encodeURIComponent(email)}/keys`;
  const { res, text, json } = await iamRequest({
    accessToken,
    url,
    method: "POST",
    body: { privateKeyType: "TYPE_GOOGLE_CREDENTIALS_FILE", keyAlgorithm: "KEY_ALG_RSA_2048" },
  });
  if (!res.ok) {
    throw new Error(`Create key (POST ${url}) failed: ${res.status} ${iamErrorMessage(json, text)}`);
  }
  return json;
}

function decodeKeyJson(key) {
  if (!key?.privateKeyData) return null;
  try {
    return JSON.parse(Buffer.from(key.privateKeyData, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

/**
 * The SoundCloud script prints client_id=/client_secret=. The closest honest
 * mapping for a Google service account is the SA email (the "who") and the key's
 * client_id from the credential JSON, followed by the full private-key JSON.
 */
function formatCredentialOutput({ account, key }) {
  const keyJson = decodeKeyJson(key);
  const fields = {
    service_account_email: account.email ?? null,
    unique_id: account.uniqueId ?? null,
    project_id: account.projectId ?? null,
    key_name: key?.name ?? null,
    client_id: keyJson?.client_id ?? null,
  };
  const lines = [];
  if (fields.client_id) lines.push(`client_id=${fields.client_id}`);
  lines.push(`service_account_email=${fields.service_account_email}`);
  lines.push("", JSON.stringify(fields, null, 2), "");

  if (keyJson) {
    lines.push("# --- service account key JSON (this is the credential; store it safely) ---");
    lines.push(JSON.stringify(keyJson, null, 2));
    lines.push("");
    lines.push("Load it for your agent:");
    lines.push("  GOOGLE_APPLICATION_CREDENTIALS=/path/to/this.json");
  } else {
    lines.push("# NOTE: could not decode privateKeyData; raw key resource follows:");
    lines.push(JSON.stringify(key, null, 2));
  }
  lines.push("");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, "account-id": accountIdArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    "account-id": { type: "string" },
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
  console.log(`Usage: google-oauth-api-auth [options]

  Creates a Google Cloud service account and mints a private key for it via the IAM
  REST API, then prints the key JSON. This is the programmatic, agent-appropriate
  credential. Note: Google OAuth 2.0 *client IDs* (client_id/client_secret) are
  created by hand in the Cloud Console and have no public creation API — service
  accounts are the scriptable path.

Options:
  --account-id      The SA id (6-30 chars, [a-z][-a-z0-9]*). Becomes
                    {account-id}@{project}.iam.gserviceaccount.com. Default: agent-runner
  --name            Display name for the service account.
  --description     Description for the service account.
  -h, --help

Environment:
  GOOGLE_ACCESS_TOKEN   Required. e.g. GOOGLE_ACCESS_TOKEN=$(gcloud auth print-access-token)
  GOOGLE_PROJECT_ID     Required. Your Google Cloud project id.

Docs: https://cloud.google.com/iam/docs/keys-create-delete
`);
  process.exit(0);
}

const accessToken = process.env.GOOGLE_ACCESS_TOKEN;
const projectId = process.env.GOOGLE_PROJECT_ID;

if (!accessToken) {
  console.error("Missing GOOGLE_ACCESS_TOKEN. Get one from the gcloud CLI:");
  console.error("  GOOGLE_ACCESS_TOKEN=$(gcloud auth print-access-token)");
  process.exit(1);
}
if (!projectId) {
  console.error("Missing GOOGLE_PROJECT_ID. Set it to your Google Cloud project id, e.g.:");
  console.error("  GOOGLE_PROJECT_ID=my-project-123");
  process.exit(1);
}

const accountId = accountIdArg ?? "agent-runner";
if (!/^[a-z]([-a-z0-9]{4,28}[a-z0-9])$/.test(accountId)) {
  console.error("--account-id must be 6-30 chars: start with a letter, then lowercase letters, digits, or hyphens.");
  process.exit(1);
}

(async () => {
  try {
    console.error(`Creating service account "${accountId}" in project ${projectId} …`);
    const { account, existing, notice } = await createServiceAccount({
      accessToken,
      projectId,
      accountId,
      displayName: nameArg,
      description: descArg,
    });
    if (existing && notice) console.error(notice);

    console.error(`Minting a key for ${account.email} …`);
    const key = await createServiceAccountKey({ accessToken, projectId, email: account.email });

    process.stdout.write(formatCredentialOutput({ account, key }));
    console.error(
      "Reminder: OAuth client_id/client_secret pairs are NOT created here — those remain " +
        "Console-only at APIs & Services > Credentials."
    );
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

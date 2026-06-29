---
published: true
layout: post
title: Google Makes the Machine Credential Scriptable and the OAuth Client Console-Only
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/google-oauth-console-only-service-accounts-scriptable.png
date: 2026-09-08
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Google
  - Agents
  - AI
---

I keep coming back to the same wall. Everyone is all in on AI, every roadmap has an
agent on it, and yet the first thing most platforms ask my agent to do is open a
browser, click through a wizard, and prove it is a human being. That contradiction is
the whole reason I started this series. So when I sat down with Google, I expected
another lecture about why I have to do it by hand. What I found instead was more
interesting, and more honest, than a flat no.

Here is the thing nobody says plainly. Google has two completely different front doors,
and they treat automation in opposite ways. If you want an OAuth 2.0 client ID — the
classic `client_id` and `client_secret` pair that this whole series chases — you go to
the Cloud Console, into APIs & Services, and you click. There is no public API to
create an OAuth client and read back its secret. None. The SoundCloud ideal I keep
holding up, where you [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/)
yourself and walk away with credentials, simply does not exist for OAuth clients on
Google. That is a manual door, full stop, and I will not pretend otherwise.

But the credential an agent actually runs on is not an OAuth client. It is a service
account. And service accounts are fully, beautifully programmatic. The IAM REST API
will let me `POST` a brand new service account into a project, then `POST` again to mint
a private key, and that key comes back as a real downloadable JSON credential file. No
browser. No wizard. No human checkbox. That is the credential you hand an agent and
walk away. So the gap is not where you would expect it. The human-facing OAuth client is
the manual one, and the machine-facing identity is the one you can script end to end.

The mechanics are clean. You create the account with a `POST` to
`https://iam.googleapis.com/v1/projects/{PROJECT_ID}/serviceAccounts`, passing an
`accountId` and an optional display name and description. Google hands back the
account's email and a stable unique id. Then you mint the key with a `POST` to
`.../serviceAccounts/{EMAIL}/keys`, and the response field `privateKeyData` is the
base64-encoded JSON credential file. Google keeps only the public half. You get exactly
one chance to read the private half, which is the right security posture even if it
makes me a little nervous every time. Auth on both calls is a plain bearer token, and
the easiest way to get one is `gcloud auth print-access-token`. That is the one place
the gcloud CLI quietly does the human part for you.

So this installment's script does the honest, automatable version of onboarding. It
reads `GOOGLE_ACCESS_TOKEN` and `GOOGLE_PROJECT_ID` from the environment, creates the
service account, mints the key, and prints the credential JSON to stdout — the same
spirit as the SoundCloud tool, just pointed at the credential Google will actually let
you mint. It handles the already-exists case by reusing the account, and it tells you
plainly that the OAuth client door is still Console-only.

```javascript
#!/usr/bin/env node
/**
 * google-oauth-api-auth.mjs
 *
 * Provider:   Google (Google Cloud / Google APIs OAuth)
 * What it does:
 *   Google has NO public API to create an OAuth 2.0 client ID or read back its
 *   client_secret — those are created by hand in the Cloud Console. But a SERVICE
 *   ACCOUNT and its key (the credential an agent actually runs on) are fully
 *   programmatic. This CLI creates a service account and mints a key via the IAM
 *   REST API, then prints the private key JSON.
 *
 * Auth model:
 *   Authorization: Bearer <access_token>, e.g. gcloud auth print-access-token.
 *   Needs roles/iam.serviceAccountAdmin + roles/iam.serviceAccountKeyAdmin.
 *
 * Env vars:
 *   GOOGLE_ACCESS_TOKEN   Required. GOOGLE_ACCESS_TOKEN=$(gcloud auth print-access-token)
 *   GOOGLE_PROJECT_ID     Required. Your Google Cloud project id.
 *
 * Doc links:
 *   Create service account .. https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/create
 *   Create key .............. https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/create
 *   Keys overview ........... https://cloud.google.com/iam/docs/keys-create-delete
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const IAM_API_BASE = "https://iam.googleapis.com/v1";

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
  REST API, then prints the key JSON. Note: Google OAuth 2.0 *client IDs*
  (client_id/client_secret) are created by hand in the Cloud Console and have no
  public creation API — service accounts are the scriptable path.

Options:
  --account-id      The SA id (6-30 chars). Becomes
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
```

The script is committed in the repo at
`/assets/scripts/agentic-onboarding/google-oauth-api-auth.mjs`.

I will be honest about where this leaves me. The bearer token still comes from a human
running gcloud, and an org policy can switch off key creation entirely, which is a
defensible security stance but another wall to bang my head against. And the downloaded
JSON key is a long-lived secret sitting on disk, which is exactly the kind of credential
Google itself keeps nudging you away from in favor of workload identity federation. So
this is not the pristine SoundCloud dream. It is the achievable version, and I will take
what I can get.

Here is the hill I will happily die on. If Google is serious about the agentic moment,
the OAuth client door should be scriptable too. Let me `POST` an OAuth client into a
project with declared redirect URIs and scopes, hand me back the credentials once, and
let me rotate them through the API. The service account path already proves Google can
do programmatic credential issuance well. They just have not pointed it at the front
door agents are most likely to knock on. Until then, mint a service account, hand your
agent the key, and stop clicking.

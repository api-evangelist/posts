---
published: true
layout: post
title: What Programmatic Onboarding Looks Like When the Door Is the Cloud Console — Apigee
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apigee-and-programmatic-api-onboarding.png
date: 2026-07-02
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Apigee
  - Agents
  - AI
---

I keep coming back to the same wall. Every company I talk to is "all in on AI," wiring up agents that are supposed to go discover an API, register themselves, and get to work. And then I go look at how you actually get credentials from those same companies, and it is a console, a form, a human, and a wait. The onboarding does not scale. That is the contradiction of this whole agentic moment, and I will happily keep banging my head against it until somebody fixes it.

A while back I wrote about how SoundCloud showed me what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like: one little script, no dependencies, opens a browser, you log in, it registers an app, and it prints your `client_id` and `client_secret`. That is the bar. So I have been walking that script around to the big gateway and management platforms to see how close their reality gets. This week it is Google Cloud Apigee.

Here is the honest read. Apigee falls squarely into the management-API bucket. There is a real, well-documented API for creating a developer and a developer app, and the app creation call hands you back exactly the credential you came for. To create the developer you `POST https://apigee.googleapis.com/v1/organizations/{org}/developers` with an email, first name, last name, and username. To create the app you `POST .../developers/{email}/apps` with a name and an optional list of API products. The response carries a `credentials` array, and inside it is your `consumerKey` and `consumerSecret` — Apigee's words for `client_id` and `client_secret`. That part is genuinely good. The resource model is clean, the endpoints are stable, and you can drive the whole developer-and-app lifecycle without ever touching the UI.

So what is missing? The front door. There is no browser-based self-registration here, no OAuth login flow where an agent shows up cold and walks out with keys, and no RFC 7591 dynamic client registration. The thing that makes the SoundCloud flow magic — *you, a stranger, can self-serve* — does not exist. Apigee's management API is gated behind Google Cloud IAM. You authenticate with a Google OAuth2 bearer token, the kind you mint with `gcloud auth print-access-token` or from a service account that already holds the Apigee Developer Admin role on an org you already administer. In other words, you have to already be inside the house to register anyone. That is fine for a platform team automating its own onboarding. It is not the open, agent-meets-API moment I keep arguing for.

One more wrinkle worth naming, because people trip on it. There are two Apigees. Legacy **Apigee Edge** lives at `https://api.enterprise.apigee.com/v1` and authenticates with Basic auth or password-grant OAuth tokens from `login.apigee.com`. The current product, **Apigee X** (and hybrid), lives at `https://apigee.googleapis.com` and uses Google access tokens. The resource paths are nearly identical — same developers, same apps — so the only things that really change are the host and how you get your token. My script targets Apigee X, because that is where Google is investing and where new work should go.

I wrote the script the way I always do for this bucket: no browser, read the token from an env var, do the work, print the credential. You export `GOOGLE_ACCESS_TOKEN` and `APIGEE_ORG`, point it at a developer and an app name, and it creates the developer (shrugging off a 409 if they already exist), creates the app, and prints `client_id=` and `client_secret=` mapped straight onto the consumer key and secret. If the app already exists it reads it back instead of failing. Same spirit as SoundCloud, just honest about where the door actually is. It is committed in the repo at `/assets/scripts/agentic-onboarding/apigee-api-auth.mjs`.

```javascript
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
```

So what should Apigee do to fully meet the moment? Honestly, the plumbing is already there. The developer-and-app model is exactly the right shape. What is missing is a sanctioned, scoped, self-serve path on top of it — a way for an agent or an outside developer to authenticate and provision a constrained app without a human admin pre-granting them IAM on the org. Dynamic client registration would be the cleanest answer; a delegated, narrowly-scoped onboarding token would be a pragmatic one. Until then, I will take what I can get: a clean management API I can script against, run from my own org, and walk away with a working key. That is more than a lot of platforms give me. It is just not yet the open door the agentic moment actually needs.

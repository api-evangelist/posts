---
published: true
layout: post
title: Akamai Can Mint Its Own Credentials, If You Already Have One
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/akamai-can-mint-its-own-credentials.png
date: 2026-08-11
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Akamai
  - Agents
  - AI
---

I keep coming back to the same wall. Every company wants me to believe they are all in on AI, that agents are the future, that machines will be doing the integration work soon. And then I go to actually onboard, and the front door is built for a human with a browser, a corporate login, and a free afternoon. The contradiction never gets old. You cannot tell me an agent is going to consume your platform and then make the very first step a thing only a person clicking through a console can do.

I have been working through what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like, using a little SoundCloud script as my north star. One file, no dependencies, you run it, a browser pops open, you authorize, and it prints a `client_id` and `client_secret` to your terminal. That is the whole dream. A new identity, minted on demand, in seconds. Akamai is an interesting case because it gets you halfway there in a way most of the cloud giants do not, and then leaves the other half exactly where you would expect.

Here is the honest mapping. Akamai has no SoundCloud-style browser registration. There is no "log in, click create app, get a secret" flow for the open web. What Akamai has instead is the Identity and Access Management API, and EdgeGrid request signing. This puts it squarely in the management-API bucket: you authenticate every call by signing it with an existing credential, and the API itself can create the next credential for you. That existing credential is the catch. It does not come from a self-serve flow. It comes from your Akamai Control Center account, where a human with the right role sets up that first API client and downloads a `.edgerc` file. Until that exists, there is nothing to automate. It is the same cold-start problem AWS has with IAM. You cannot bootstrap the very first key from nothing.

But once you have that first credential, things actually open up. The IAM API will let you `POST /identity-management/v3/api-clients` to create a brand-new API client, and `POST /identity-management/v3/api-clients/self/credentials` to mint a fresh credential for the client you are currently authenticating as. A credential in Akamai's world is a quad: a `clientToken`, a `clientSecret`, an `accessToken`, and the `host`. Those four values are what go into a `.edgerc` block, and those are what sign every future request. So the analog to SoundCloud's `client_id`/`client_secret` is real and reachable here, you just have to pay the bootstrap tax up front.

The signing is the part I want to give Akamai a little credit for, because it is clean. EdgeGrid is EG1-HMAC-SHA256. You derive a signing key by taking an HMAC-SHA256 of a timestamp, keyed by your client secret, and base64-encoding it. Then you build a tab-separated string of the method, scheme, host, path, a content hash of the body, and the authorization header minus the signature, and you HMAC that with the signing key. It is the same HMAC-chaining shape as AWS SigV4, simpler in a few ways, and entirely doable in Node's standard library. No SDK required. I wrote the whole signer in a handful of functions.

There is one wart worth naming. If you try to create an API client and attach a credential in the same call with `createCredential:true`, Akamai's own issue tracker notes the response has historically left out the `clientSecret`. And the secret is shown exactly once. So if you ask for it the lazy way, you can end up with a client you cannot actually authenticate as. That is why my script defaults to the dedicated `self/credentials` endpoint, which does return the secret, and warns you loudly if it sees a client come back without one. I marked the spots I could not verify against a live tenant with `// NOTE: verify`, because the response field schemas were not fully nailed down in the docs and I would rather you know that than trust me blindly.

Here is the script. Node 18+, standard library only, no npm install, EdgeGrid signing built in. It reads your existing credential from `AKAMAI_HOST`, `AKAMAI_CLIENT_TOKEN`, `AKAMAI_CLIENT_SECRET`, and `AKAMAI_ACCESS_TOKEN`, mints a new credential, and prints it.

```javascript
#!/usr/bin/env node
/**
 * akamai-api-auth.mjs
 *
 * Provider:   Akamai (Identity and Access Management API v3 + EdgeGrid auth)
 * What it does:
 *   Akamai has NO SoundCloud-style "open a browser, log in, get a client_id/secret" flow.
 *   The closest automatable thing is the IAM API, which can MINT a brand-new API client and
 *   its credential for you:
 *     1) POST /identity-management/v3/api-clients            -> create a new API client
 *        (with createCredential:true to attach a credential in the same call), OR
 *     2) POST /identity-management/v3/api-clients/self/credentials
 *        -> mint a fresh credential for the CURRENT (self) API client.
 *   The credential is what Akamai calls clientToken / clientSecret / accessToken -- the four
 *   values (with host) that go in a .edgerc and are used to EdgeGrid-sign every later request.
 *
 * Auth model:
 *   Akamai EdgeGrid (EG1-HMAC-SHA256) request signing, NOT OAuth and NOT a bearer PAT. You
 *   sign each request with an EXISTING credential (a "bootstrap" client you already have, the
 *   one in your .edgerc). There is no self-serve issuance of that first credential -- it comes
 *   from your Akamai Control Center account. So this script does what AWS's does in spirit:
 *   it uses YOUR existing credentials to programmatically create the NEXT set, and prints them.
 *   No browser, no OAuth, no PKCE -- Akamai does not offer those for control-plane access.
 *
 * Env vars (required -- these are your EXISTING/bootstrap EdgeGrid credential, i.e. .edgerc):
 *   AKAMAI_HOST            e.g. akab-xxxxxxxx.luna.akamaiapis.net   (no scheme)
 *   AKAMAI_CLIENT_TOKEN    client_token from your .edgerc
 *   AKAMAI_CLIENT_SECRET   client_secret from your .edgerc
 *   AKAMAI_ACCESS_TOKEN    access_token from your .edgerc
 *
 * Docs:
 *   EdgeGrid signing:    https://techdocs.akamai.com/developer/docs/edgegrid
 *   IAM API v3:          https://techdocs.akamai.com/iam-api/reference/api
 *   Create an API client https://techdocs.akamai.com/iam-api/reference/post-api-clients
 *   Create your cred:    https://techdocs.akamai.com/iam-api/reference/post-self-credentials
 *   Create a credential: https://techdocs.akamai.com/iam-api/reference/post-client-credentials
 *
 * Heads up: when you create an API client with createCredential:true, Akamai's own docs/issue
 * tracker note the contextual credential response has historically OMITTED the clientSecret
 * (akamai/akamai-apis issue #13). The clientSecret is only ever shown once, at creation, from
 * the dedicated credential endpoints. So by default this script uses --self to mint a credential
 * for the current client via .../self/credentials, which DOES return the secret. Use --new-client
 * to create a separate client instead.
 *
 * Node.js 18+ stdlib only (no edgegrid npm package, no dependencies).
 */
import crypto from "node:crypto";
import { parseArgs } from "node:util";
import process from "node:process";

const IAM_BASE = "/identity-management/v3";
const SELF_CREDENTIALS_PATH = `${IAM_BASE}/api-clients/self/credentials`;
const API_CLIENTS_PATH = `${IAM_BASE}/api-clients`;
const AUTH_SCHEME = "EG1-HMAC-SHA256";

// -------------------------------------------------------------------------------------------
// EdgeGrid (EG1-HMAC-SHA256) request signing.
// Spec: https://techdocs.akamai.com/developer/docs/edgegrid
// The data-to-sign is tab-separated; the signing key is HMAC-SHA256(timestamp) keyed by the
// client secret; the final signature is HMAC-SHA256(data-to-sign) keyed by that signing key.
// Both HMACs are base64-encoded. This is the same HMAC-chaining idea as AWS SigV4's derived
// signing key, just with a single timestamp step instead of date/region/service.
// -------------------------------------------------------------------------------------------

function base64Hmac(key, data) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest("base64");
}

function base64Sha256(data) {
  return crypto.createHash("sha256").update(data, "utf8").digest("base64");
}

/** EdgeGrid timestamp: yyyyMMddTHH:mm:ss+0000 (UTC). */
function edgeGridTimestamp(now = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return (
    `${now.getUTCFullYear()}${p(now.getUTCMonth() + 1)}${p(now.getUTCDate())}` +
    `T${p(now.getUTCHours())}:${p(now.getUTCMinutes())}:${p(now.getUTCSeconds())}+0000`
  );
}

function newNonce() {
  return crypto.randomUUID();
}

/**
 * Content hash for the data-to-sign. EdgeGrid only hashes the body for POST/PUT and base64s
 * the SHA-256 digest of the (raw) request body. GET/DELETE contribute an empty content hash.
 * NOTE: verify -- Akamai caps the hashed body length (default 131072 bytes / maxBody); IAM
 * payloads here are tiny so we never hit it, but a generic signer should honor maxBody.
 */
function contentHash(method, body) {
  if ((method === "POST" || method === "PUT") && body) {
    return base64Sha256(body);
  }
  return "";
}

/**
 * Build the "data to sign" string.
 * Order (tab-separated):
 *   method \t scheme \t host \t relativeUrl \t canonicalizedHeaders \t contentHash \t authHeader
 * where authHeader is the Authorization value WITHOUT the signature= portion, e.g.
 *   EG1-HMAC-SHA256 client_token=..;access_token=..;timestamp=..;nonce=..;
 * NOTE: verify -- we sign no extra request headers (canonicalizedHeaders empty), which is the
 * common case for the IAM API. If you add signed headers you must canonicalize them per spec
 * (lowercase name, single-space-collapsed trimmed value, name:value, tab-joined).
 */
function dataToSign({ method, scheme, host, relativeUrl, authHeaderNoSig, body }) {
  return [
    method,
    scheme,
    host,
    relativeUrl,
    "", // canonicalizedHeaders -- none signed for these calls
    contentHash(method, body),
    authHeaderNoSig,
  ].join("\t");
}

/**
 * Sign and send an EdgeGrid request against the IAM API. Returns { res, text, url }.
 */
async function edgeGridRequest({ creds, method, path, body }) {
  const host = creds.host; // no scheme
  const scheme = "https";
  const url = `${scheme}://${host}${path}`;
  const payload = body ? JSON.stringify(body) : "";
  const timestamp = edgeGridTimestamp();
  const nonce = newNonce();

  // Authorization value up to (but not including) the signature.
  const authHeaderNoSig =
    `${AUTH_SCHEME} ` +
    `client_token=${creds.clientToken};` +
    `access_token=${creds.accessToken};` +
    `timestamp=${timestamp};` +
    `nonce=${nonce};`;

  // signingKey = base64( HMAC-SHA256( timestamp )  keyed by client_secret )
  const signingKey = base64Hmac(creds.clientSecret, timestamp);

  const toSign = dataToSign({
    method,
    scheme,
    host,
    relativeUrl: path,
    authHeaderNoSig,
    body: payload,
  });

  // signature = base64( HMAC-SHA256( dataToSign ) keyed by signingKey )
  const signature = base64Hmac(signingKey, toSign);
  const authorization = `${authHeaderNoSig}signature=${signature}`;

  const headers = {
    authorization,
    accept: "application/json",
  };
  if (payload) headers["content-type"] = "application/json";

  const res = await fetch(url, {
    method,
    headers,
    ...(payload ? { body: payload } : {}),
  });
  return { res, text: await res.text(), url };
}

function parseAkamaiError(text) {
  try {
    const j = JSON.parse(text);
    // IAM API returns RFC 7807 problem+json (title/detail) or an errors[] array.
    if (j.detail || j.title) return [j.title, j.detail].filter(Boolean).join(": ");
    if (Array.isArray(j.errors) && j.errors.length) {
      return j.errors.map((e) => e.detail || e.title || JSON.stringify(e)).join("; ");
    }
    return j.message || null;
  } catch {
    return null;
  }
}

/**
 * Mint a credential for the CURRENT (self) API client. This is the path that actually returns
 * the clientSecret. Akamai issues an active credential that expires ~2 years out by default.
 * Docs: https://techdocs.akamai.com/iam-api/reference/post-self-credentials
 */
async function createSelfCredential(creds) {
  // The self credentials endpoint takes no required body. Akamai mints the credential for the
  // client whose token signs the request.
  // NOTE: verify -- some accounts require an empty JSON object; we send none, which the docs
  // describe as valid. If you get a 4xx complaining about the body, send `{}`.
  const { res, text, url } = await edgeGridRequest({
    creds,
    method: "POST",
    path: SELF_CREDENTIALS_PATH,
  });
  if (res.status === 201 || res.status === 200) {
    return { credential: JSON.parse(text), existing: false };
  }
  throw new Error(
    `Create self credential (POST ${url}) failed: ${res.status} ${parseAkamaiError(text) || text}`
  );
}

/**
 * Create a brand-new API client (a separate identity) with a credential attached.
 * Docs: https://techdocs.akamai.com/iam-api/reference/post-api-clients
 * NOTE: verify -- the contextual credential in this response has historically omitted the
 * clientSecret (akamai/akamai-apis issue #13). If `clientSecret` is absent you must mint a
 * credential separately. The required shape (authorizedUsers, apiAccess, groupAccess) varies
 * by account; the example below grants all current API access and inherits group access from
 * the calling user -- adjust to your least-privilege needs.
 */
async function createApiClient(creds, { name, description, username }) {
  const body = {
    clientName: name,
    clientDescription: description || "",
    authorizedUsers: [username],
    // CLIENT = a service identity whose credentials you manage programmatically.
    clientType: "CLIENT",
    notificationEmails: [],
    // Grant access to all APIs the authorizing user can grant. Tighten this in production.
    apiAccess: { allAccessibleApis: true },
    // Inherit the cloning user's group access. Tighten this in production.
    groupAccess: { cloneAuthorizedUserGroups: true },
    // Try to attach a credential in the same call (secret may be omitted -- see note above).
    createCredential: true,
  };
  const { res, text, url } = await edgeGridRequest({
    creds,
    method: "POST",
    path: API_CLIENTS_PATH,
    body,
  });
  if (res.status === 201) {
    return { client: JSON.parse(text), existing: false };
  }
  throw new Error(
    `Create API client (POST ${url}) failed: ${res.status} ${parseAkamaiError(text) || text}`
  );
}

/** Pull the credential object out of a created-client payload, whatever shape it arrives in. */
function credentialFromClient(client) {
  if (Array.isArray(client?.credentials) && client.credentials.length) {
    return client.credentials[0];
  }
  if (client?.credential) return client.credential;
  return null;
}

function formatOutput({ credential, client, mode }) {
  // Akamai's analog of client_id/client_secret is the EdgeGrid quad:
  //   clientToken / clientSecret / accessToken (+ host, which is your AKAMAI_HOST).
  const out = {
    credential_id: credential?.credentialId ?? credential?.credentialID,
    client_token: credential?.clientToken,
    client_secret: credential?.clientSecret, // only shown once, at creation
    access_token: credential?.accessToken,
    host: process.env.AKAMAI_HOST,
    status: credential?.status,
    expires_on: credential?.expiresOn,
  };
  if (client) {
    out.client_id = client.clientId ?? client.clientID;
    out.client_name = client.clientName;
  }

  const lines = [];
  // Mirror the SoundCloud script: id first, secret second.
  if (out.client_token) lines.push(`client_token=${out.client_token}`);
  if (out.client_secret) lines.push(`client_secret=${out.client_secret}`);
  if (out.access_token) lines.push(`access_token=${out.access_token}`);
  lines.push("", JSON.stringify(out, null, 2), "");

  if (mode === "new-client" && !out.client_secret) {
    lines.unshift(
      "Note: the new client was created but its response did not include a clientSecret " +
        "(a known Akamai gap). Re-run a credential creation against that client to obtain the " +
        "secret -- it is only shown once.\n"
    );
  } else {
    lines.unshift(
      "Save these now. Akamai shows the clientSecret exactly once. Drop them into a .edgerc " +
        "block (host/client_token/client_secret/access_token) to EdgeGrid-sign future calls.\n"
    );
  }
  return lines.join("\n");
}

// -------------------------------------------------------------------------------------------
// CLI
// -------------------------------------------------------------------------------------------

const {
  values: { name: nameArg, description: descArg, username: userArg, "new-client": newClient, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    username: { type: "string" },
    "new-client": { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: akamai-api-auth [options]

  Akamai has no browser-based app registration. Using your EXISTING EdgeGrid credential
  (your .edgerc, supplied via env vars), this mints a fresh API credential through the IAM
  API and prints the clientToken / clientSecret / accessToken -- the values you drop into a
  new .edgerc block. No npm, no aws/edgegrid SDK; EdgeGrid EG1-HMAC-SHA256 signing is built in.

Modes:
  (default)        Mint a credential for the CURRENT API client via
                   POST /identity-management/v3/api-clients/self/credentials  (returns the secret)
  --new-client     Instead create a SEPARATE API client via
                   POST /identity-management/v3/api-clients  (requires --name and --username;
                   note: the contextual secret may be omitted by Akamai -- see script header)

Options:
  --name           Client name (required with --new-client).
  --description    Optional client description.
  --username       Authorizing Control Center username (required with --new-client).
  --new-client     Create a new client instead of a self credential.
  -h, --help

Required environment variables (your existing/bootstrap .edgerc credential):
  AKAMAI_HOST, AKAMAI_CLIENT_TOKEN, AKAMAI_CLIENT_SECRET, AKAMAI_ACCESS_TOKEN

Docs:
  https://techdocs.akamai.com/developer/docs/edgegrid
  https://techdocs.akamai.com/iam-api/reference/post-self-credentials
  https://techdocs.akamai.com/iam-api/reference/post-api-clients
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.join(" ")}`);
  process.exit(1);
}

const host = process.env.AKAMAI_HOST;
const clientToken = process.env.AKAMAI_CLIENT_TOKEN;
const clientSecret = process.env.AKAMAI_CLIENT_SECRET;
const accessToken = process.env.AKAMAI_ACCESS_TOKEN;

const missing = [];
if (!host) missing.push("AKAMAI_HOST");
if (!clientToken) missing.push("AKAMAI_CLIENT_TOKEN");
if (!clientSecret) missing.push("AKAMAI_CLIENT_SECRET");
if (!accessToken) missing.push("AKAMAI_ACCESS_TOKEN");
if (missing.length) {
  console.error(`Missing required environment variable(s): ${missing.join(", ")}`);
  console.error(
    "Akamai issues no self-serve first credential. Supply your existing .edgerc values: " +
      "host, client_token, client_secret, access_token."
  );
  process.exit(1);
}

// Strip any scheme a user might have pasted into AKAMAI_HOST.
const cleanHost = host.replace(/^https?:\/\//, "").replace(/\/+$/, "");
const creds = { host: cleanHost, clientToken, clientSecret, accessToken };

if (newClient && (!nameArg || !userArg)) {
  console.error("--new-client requires both --name and --username.");
  console.error(
    'Example: node akamai-api-auth.mjs --new-client --name "agent-client" --username "jdoe"'
  );
  process.exit(1);
}

try {
  if (newClient) {
    const { client } = await createApiClient(creds, {
      name: nameArg,
      description: descArg || "",
      username: userArg,
    });
    const credential = credentialFromClient(client);
    process.stdout.write(formatOutput({ credential, client, mode: "new-client" }));
  } else {
    const { credential } = await createSelfCredential(creds);
    process.stdout.write(formatOutput({ credential, client: null, mode: "self" }));
  }
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}
```

The script is committed in the repo at `/assets/scripts/agentic-onboarding/akamai-api-auth.mjs`. Run it with your `.edgerc` values in the four environment variables and it prints the next credential to standard out.

So what would it take for Akamai to fully meet the moment? The infrastructure is genuinely there. The IAM API can already create clients and mint credentials, and the EdgeGrid signing is sane and self-contained. What is missing is the on-ramp. There is no way for a brand-new developer, or a brand-new agent, to get that very first credential without a human in the Control Center. SoundCloud solved this with a browser flow that hands you a working secret in under a minute. Akamai is enterprise, I get it, the trust requirements are real, and I will take a well-designed management API over nothing. But if you are going to keep telling me agents are the future, give them a door they can actually walk through on their own. Right now the machine still has to ask a person for the keys before it can make any of its own. That is the half that is still missing, and it is the half that matters most.

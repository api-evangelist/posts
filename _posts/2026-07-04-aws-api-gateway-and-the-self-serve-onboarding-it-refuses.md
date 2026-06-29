---
published: true
layout: post
title: AWS API Gateway and the Self-Serve Onboarding It Refuses to Offer
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/aws-api-gateway-and-the-self-serve-onboarding-it-refuses.png
date: 2026-07-04
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - AWS API Gateway
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that machines will soon be doing the integration work humans used to do by hand. And then I go to actually wire something up and I am asked to log into a console, click through five screens, and prove I am a human being before I can get a single credential. The contradiction is exhausting, and nowhere is it more honest about itself than with AWS API Gateway.

I have been reproducing a small script across the major providers. The reference is my SoundCloud version, which shows what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like: one file, no dependencies, open a browser for OAuth, register an application, and print a `client_id` and `client_secret` to stdout. A developer or an agent runs it and walks away with working credentials. That is the bar. AWS does not clear it, and I want to be straight about why.

Here is a hill I will happily die on: AWS API Gateway has no public, self-serve application registration. There is no OAuth dance you can run against AWS to walk away with a fresh client. There is no `POST /register` that a stranger, human or machine, can call to bootstrap their own access. Access to an API Gateway API comes from one of three places, and all three are gated by the AWS account that owns or authorizes the API. You can hand a consumer an **API key** attached to a **usage plan**. You can require them to sign their own requests with **IAM SigV4** using credentials they already hold. Or you can stand up a **Cognito user pool** and issue them an app client. None of that is self-serve in the SoundCloud sense. The credentials always originate from inside the account.

So for this provider, I stopped pretending the SoundCloud ideal was reachable and built the part that actually is. The script mints the one thing a script can mint with existing AWS credentials: an API key, and then attaches it to a usage plan so it is not dead on arrival. It calls `CreateApiKey` (`POST /apikeys`) and then `CreateUsagePlanKey` (`POST /usageplans/{id}/keys`) on the API Gateway control plane. There is no browser, no PKCE, no callback server, because AWS offers none of that for control-plane access. What it offers instead is SigV4, so the script signs every request by hand with Node's standard library crypto. No `aws-sdk`, no npm install. You read `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `USAGE_PLAN_ID` from the environment, and it does the rest.

I will be honest, implementing SigV4 in pure Node stdlib is the kind of thing that makes you appreciate why the SDK exists. The canonical request, the credential scope, the HMAC signing-key chain, the exact lowercase-and-sorted header rules, all of it has to be perfect or AWS rejects you with a signature mismatch and no useful hint. I have left `// NOTE` comments where the implementation is fiddly and where I would smoke-test against a real account before trusting it in production. But it works, and it proves the point: even the automatable slice of AWS onboarding is more ceremony than an entire OAuth flow on a saner platform.

What this script cannot do is the thing that matters most for the agentic moment. An agent cannot show up cold and get access. It has to already hold IAM credentials, and it has to already know a usage plan ID that some human set up in advance. That is the gap. AWS has built the most powerful API infrastructure on the planet and wrapped it in an onboarding model that assumes a human operator with a console open. The script is committed in the repo at `/assets/scripts/agentic-onboarding/aws-api-gateway-api-auth.mjs` if you want to run it, and it will get you a key. It will not get an agent off the ground on its own.

```javascript
#!/usr/bin/env node
/**
 * aws-api-gateway-api-auth.mjs
 *
 * Provider:   AWS API Gateway (REST APIs)
 * What it does:
 *   AWS has NO public, SoundCloud-style "register an app, get a client_id/secret" flow.
 *   The closest automatable thing for granting a *consumer* access is:
 *     1) CreateApiKey         -> POST /apikeys
 *     2) CreateUsagePlanKey   -> POST /usageplans/{USAGE_PLAN_ID}/keys   (attach key to plan)
 *   The resulting API key value is what a downstream caller sends as the `x-amz-api-key`
 *   header to your deployed API (only if the method has apiKeyRequired = true).
 *
 * Auth model:
 *   AWS SigV4 (AWS4-HMAC-SHA256) signed with the CALLER'S OWN IAM credentials. There is no
 *   self-serve credential issuance: the credentials come from the AWS account that owns the
 *   API. This script does NOT open a browser and does NOT do OAuth/PKCE -- AWS does not offer
 *   that for control-plane access. It mints an API key + usage-plan key, the only piece of the
 *   SoundCloud ideal that is reachable here.
 *
 * Env vars (required unless noted):
 *   AWS_ACCESS_KEY_ID       IAM access key id
 *   AWS_SECRET_ACCESS_KEY   IAM secret access key
 *   AWS_SESSION_TOKEN       (optional) STS session token for temporary credentials
 *   AWS_REGION              e.g. us-east-1
 *   USAGE_PLAN_ID           the API Gateway usage plan id to attach the new key to
 *
 * Docs:
 *   https://docs.aws.amazon.com/apigateway/latest/api/API_CreateApiKey.html
 *   https://docs.aws.amazon.com/apigateway/latest/api/API_CreateUsagePlanKey.html
 *   https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html
 *   https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html
 *
 * Node.js 18+ stdlib only (no aws-sdk, no npm dependencies).
 */
import crypto from "node:crypto";
import { parseArgs } from "node:util";
import process from "node:process";

const SERVICE = "apigateway";
const ALGORITHM = "AWS4-HMAC-SHA256";
// SHA256 of the empty string -- payload hash for an empty body.
const EMPTY_SHA256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

function hex(buf) {
  return Buffer.from(buf).toString("hex");
}

function sha256Hex(data) {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function hmac(key, data) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest();
}

/**
 * RFC 3986 URI-encode every byte. AWS requires its own encoder because platform
 * encoders disagree on which characters are "unreserved". For control-plane paths the
 * segments here are simple, but we keep a correct implementation anyway.
 * NOTE: verify against your platform if you ever sign paths with reserved characters.
 */
function awsUriEncode(str, encodeSlash = true) {
  let out = "";
  for (const ch of Buffer.from(str, "utf8")) {
    const c = String.fromCharCode(ch);
    if (
      (c >= "A" && c <= "Z") ||
      (c >= "a" && c <= "z") ||
      (c >= "0" && c <= "9") ||
      c === "-" || c === "_" || c === "." || c === "~"
    ) {
      out += c;
    } else if (c === "/") {
      out += encodeSlash ? "%2F" : "/";
    } else {
      out += "%" + ch.toString(16).toUpperCase().padStart(2, "0");
    }
  }
  return out;
}

function amzDateStamps(now = new Date()) {
  // 20130524T000000Z and 20130524
  const iso = now.toISOString().replace(/[:-]/g, "").replace(/\.\d{3}/, "");
  const amzDate = iso; // YYYYMMDDTHHMMSSZ
  const dateStamp = amzDate.slice(0, 8); // YYYYMMDD
  return { amzDate, dateStamp };
}

function deriveSigningKey(secretKey, dateStamp, region, service) {
  const kDate = hmac("AWS4" + secretKey, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, "aws4_request");
}

/**
 * Build a SigV4-signed fetch against the apigateway control plane and return { res, text }.
 * Signs the path (no query strings are used by these two calls).
 */
async function signedApiGatewayRequest({
  method,
  path,
  body,
  accessKeyId,
  secretAccessKey,
  sessionToken,
  region,
}) {
  const host = `${SERVICE}.${region}.amazonaws.com`;
  const url = `https://${host}${path}`;
  const payload = body ? JSON.stringify(body) : "";
  const payloadHash = payload ? sha256Hex(payload) : EMPTY_SHA256;
  const { amzDate, dateStamp } = amzDateStamps();

  // --- Canonical headers. Must be lowercase, trimmed, and sorted by name. ---
  // We always sign host, x-amz-content-sha256, x-amz-date; content-type when there's a body;
  // and x-amz-security-token when using temporary STS credentials.
  // NOTE: verify the signed-header set against a live call -- apigateway accepts this set,
  // but if you add headers you MUST add them to both canonicalHeaders and signedHeaders.
  const headerMap = {
    host,
    "x-amz-content-sha256": payloadHash,
    "x-amz-date": amzDate,
  };
  if (payload) headerMap["content-type"] = "application/json";
  if (sessionToken) headerMap["x-amz-security-token"] = sessionToken;

  const sortedNames = Object.keys(headerMap).sort();
  const canonicalHeaders =
    sortedNames.map((n) => `${n}:${String(headerMap[n]).trim()}`).join("\n") + "\n";
  const signedHeaders = sortedNames.join(";");

  // CanonicalURI: URI-encoded path, but do NOT encode the path separators.
  const canonicalUri = path
    .split("/")
    .map((seg) => awsUriEncode(seg, false))
    .join("/");

  const canonicalRequest = [
    method,
    canonicalUri,
    "", // CanonicalQueryString -- empty for these calls (still needs its newline)
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/${SERVICE}/aws4_request`;
  const stringToSign = [
    ALGORITHM,
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join("\n");

  const signingKey = deriveSigningKey(secretAccessKey, dateStamp, region, SERVICE);
  const signature = hex(hmac(signingKey, stringToSign));

  const authorization =
    `${ALGORITHM} ` +
    `Credential=${accessKeyId}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, ` +
    `Signature=${signature}`;

  const fetchHeaders = {
    "x-amz-date": amzDate,
    "x-amz-content-sha256": payloadHash,
    authorization,
  };
  if (payload) fetchHeaders["content-type"] = "application/json";
  if (sessionToken) fetchHeaders["x-amz-security-token"] = sessionToken;

  const res = await fetch(url, {
    method,
    headers: fetchHeaders,
    ...(payload ? { body: payload } : {}),
  });
  return { res, text: await res.text(), url };
}

function parseAwsError(text) {
  try {
    const j = JSON.parse(text);
    return j.message || j.Message || j.__type || null;
  } catch {
    return null;
  }
}

async function createApiKey(ctx, { name, description }) {
  const { res, text, url } = await signedApiGatewayRequest({
    ...ctx,
    method: "POST",
    path: "/apikeys",
    body: { name, description, enabled: true },
  });
  if (res.status === 201) return { key: JSON.parse(text), existing: false };
  if (res.status === 409) {
    // ConflictException -- a key with this name already exists.
    const existing = await findApiKeyByName(ctx, name);
    if (existing) return { key: existing, existing: true };
  }
  throw new Error(
    `CreateApiKey (POST ${url}) failed: ${res.status} ${parseAwsError(text) || text}`
  );
}

/**
 * GET /apikeys?nameQuery=<name>&includeValues=true to recover an already-created key.
 * NOTE: verify -- includeValues must be true to read the key value back; the name filter is
 * a prefix match, so we match exactly on `name`.
 */
async function findApiKeyByName(ctx, name) {
  const q = `nameQuery=${awsUriEncode(name, false)}&includeValues=true`;
  return await getApiKeysFiltered(ctx, q, name);
}

async function getApiKeysFiltered(ctx, rawQuery, exactName) {
  // Build a signed GET that includes a canonical query string.
  const host = `${SERVICE}.${ctx.region}.amazonaws.com`;
  const { amzDate, dateStamp } = amzDateStamps();
  const payloadHash = EMPTY_SHA256;

  // Canonical query string: sort by key after encoding.
  const pairs = rawQuery.split("&").map((kv) => {
    const [k, v = ""] = kv.split("=");
    return [awsUriEncode(decodeURIComponent(k), false), awsUriEncode(decodeURIComponent(v), false)];
  });
  pairs.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const canonicalQuery = pairs.map(([k, v]) => `${k}=${v}`).join("&");

  const headerMap = {
    host,
    "x-amz-content-sha256": payloadHash,
    "x-amz-date": amzDate,
  };
  if (ctx.sessionToken) headerMap["x-amz-security-token"] = ctx.sessionToken;
  const sortedNames = Object.keys(headerMap).sort();
  const canonicalHeaders =
    sortedNames.map((n) => `${n}:${String(headerMap[n]).trim()}`).join("\n") + "\n";
  const signedHeaders = sortedNames.join(";");

  const canonicalRequest = [
    "GET",
    "/apikeys",
    canonicalQuery,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const credentialScope = `${dateStamp}/${ctx.region}/${SERVICE}/aws4_request`;
  const stringToSign = [
    ALGORITHM,
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join("\n");
  const signingKey = deriveSigningKey(ctx.secretAccessKey, dateStamp, ctx.region, SERVICE);
  const signature = hex(hmac(signingKey, stringToSign));
  const authorization =
    `${ALGORITHM} Credential=${ctx.accessKeyId}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const headers = {
    "x-amz-date": amzDate,
    "x-amz-content-sha256": payloadHash,
    authorization,
  };
  if (ctx.sessionToken) headers["x-amz-security-token"] = ctx.sessionToken;

  const res = await fetch(`https://${host}/apikeys?${canonicalQuery}`, { method: "GET", headers });
  const text = await res.text();
  if (!res.ok) return null;
  try {
    const items = JSON.parse(text).item || [];
    return items.find((k) => k.name === exactName) || null;
  } catch {
    return null;
  }
}

async function attachKeyToUsagePlan(ctx, { usagePlanId, keyId }) {
  const { res, text, url } = await signedApiGatewayRequest({
    ...ctx,
    method: "POST",
    path: `/usageplans/${awsUriEncode(usagePlanId, false)}/keys`,
    body: { keyId, keyType: "API_KEY" },
  });
  if (res.status === 201) return { link: JSON.parse(text), existing: false };
  if (res.status === 409) {
    // Already attached to this plan -- treat as success.
    return { link: { id: keyId, type: "API_KEY" }, existing: true };
  }
  throw new Error(
    `CreateUsagePlanKey (POST ${url}) failed: ${res.status} ${parseAwsError(text) || text}`
  );
}

function formatOutput({ key, usagePlanId, existing }) {
  // AWS gives no client_id/client_secret. The closest analog: api_key_id + api_key value.
  const out = {
    api_key_id: key.id,
    api_key_value: key.value, // the secret the downstream caller sends as x-amz-api-key
    name: key.name,
    description: key.description,
    usage_plan_id: usagePlanId,
  };
  const lines = [];
  // Print in the same shape as the SoundCloud script (id first, secret second).
  lines.push(`api_key_id=${out.api_key_id}`);
  if (out.api_key_value) lines.push(`api_key_value=${out.api_key_value}`);
  lines.push("", JSON.stringify(out, null, 2), "");
  if (existing) lines.unshift("Note: reused an existing API key with this name.\n");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: aws-api-gateway-api-auth [options]

  AWS API Gateway has no public app-registration / OAuth flow. This mints the only
  automatable consumer credential: an API key attached to a usage plan, using your own
  IAM credentials and SigV4 signing (no aws-sdk).

Options:
  --name           Required. Name for the new API key.
  --description    Optional. Description for the API key.
  -h, --help

Required environment variables:
  AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, USAGE_PLAN_ID
  AWS_SESSION_TOKEN  (only when using temporary STS credentials)

Docs: https://docs.aws.amazon.com/apigateway/latest/api/API_CreateApiKey.html
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.join(" ")}`);
  process.exit(1);
}

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const sessionToken = process.env.AWS_SESSION_TOKEN || undefined;
const region = process.env.AWS_REGION;
const usagePlanId = process.env.USAGE_PLAN_ID;

const missing = [];
if (!accessKeyId) missing.push("AWS_ACCESS_KEY_ID");
if (!secretAccessKey) missing.push("AWS_SECRET_ACCESS_KEY");
if (!region) missing.push("AWS_REGION");
if (!usagePlanId) missing.push("USAGE_PLAN_ID");
if (missing.length) {
  console.error(`Missing required environment variable(s): ${missing.join(", ")}`);
  console.error("AWS issues no self-serve credentials; you must supply your own IAM creds.");
  process.exit(1);
}

if (!nameArg) {
  console.error("Missing required argument: --name");
  console.error('Example: node aws-api-gateway-api-auth.mjs --name "agent-key" --description "Key for my agent"');
  process.exit(1);
}

const ctx = { accessKeyId, secretAccessKey, sessionToken, region };

try {
  const { key, existing } = await createApiKey(ctx, {
    name: nameArg,
    description: descArg || "",
  });
  if (!key?.id) throw new Error("CreateApiKey returned no key id.");

  await attachKeyToUsagePlan(ctx, { usagePlanId, keyId: key.id });

  process.stdout.write(formatOutput({ key, usagePlanId, existing }));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}
```

That is the honest version. AWS is the farthest provider from the SoundCloud ideal in this whole series, and the reason is not technical, it is philosophical. AWS treats every credential as something an account owner provisions inside a trust boundary, never something a consumer requests from outside it. That made sense in a world of human operators and long-lived integrations. It makes a lot less sense in a world where the integrator is an agent that materialized five seconds ago and needs to be useful in the next five. If AWS wants to mean it when they say they are ready for agents, they should give us a real registration endpoint, scoped and revocable, that an authorized agent can call to onboard itself. Until then, I'll take what I can get, which is a signed API key and a usage plan, and I'll keep banging my head against this particular wall.

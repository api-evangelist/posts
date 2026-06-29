---
published: true
layout: post
title: Okta Has the Endpoint for Programmatic Onboarding, It Just Hides the Door
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/okta-has-the-endpoint-hides-the-door.png
date: 2026-07-24
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Okta
  - Agents
  - AI
---

I keep coming back to the same wall. Every company is telling me they are all in on AI, that agents are the future, that software will soon provision and operate itself. And then I go to actually get credentials so a machine can talk to their platform, and I am clicking through a console, ticking a checkbox to prove I am not a robot, and copying a secret out of a web form by hand. The contradiction is exhausting. You cannot both insist the agentic moment is here and design your onboarding so that only a human with a mouse can complete it.

So I have been working through the major identity and gateway providers one at a time, rebuilding the same little tool I built for SoundCloud, the one that shows what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like: a single file, no dependencies, run it, get your `client_id` and `client_secret` on stdout. This week it is Okta's turn, and Okta is an interesting one, because it is an identity company. If anyone should have a clean machine path to credentials, it is the people who sell credentials as a product.

Here is the good news. Okta actually has the endpoint. It supports OAuth 2.0 Dynamic Client Registration, RFC 7591, the real standard. You POST a JSON document describing your application to `https://your-org.okta.com/oauth2/v1/clients`, and Okta hands you back a `client_id` and a `client_secret` in the response. No browser, no console, no copy-paste. The client you register shows up in the Admin Console as a normal app, and changes made in either place stay in sync. That is genuinely the right design, and I want to be fair and say so plainly. The door exists.

The catch is that this is what I have been calling a bucket (b) provider. It is not the full SoundCloud ideal, where an end user logs in through their own browser and the tool registers an app on their behalf with PKCE. Okta's registration endpoint is an admin operation. To call it you need an Okta API token, the `SSWS` kind, or an OAuth 2.0 access token carrying the `okta.clients.manage` scope. Both go on the `Authorization` header. There is no end-user consent flow here. You, the administrator, have to already hold a privileged token before you can bootstrap anything. So the human is still in the loop, just earlier — they paste a token into an environment variable instead of clicking through a form.

I will take what I can get, because once you have that token the rest is clean. My script reads `OKTA_ORG_URL` and `OKTA_API_TOKEN`, builds a sane confidential web-client registration, and POSTs it. If the token looks like a JWT it sends it as a `Bearer` token, otherwise it sends `SSWS`, so the same tool works for an API token or a scoped access token without you thinking about it. The response comes back with the credentials and I print them the same way I print every provider in this series.

There is one honest wrinkle worth calling out, and it is not Okta being difficult, it is the standard working as designed. The `client_secret` is only ever returned once, in the create response. The list endpoint, `GET /oauth2/v1/clients`, will show you your clients but it will not show you their secrets. So the "you already have an app" path that was so tidy on SoundCloud cannot be tidy here. If a client with your name already exists, the best my tool can do is hand you the `client_id` back and tell you the secret is gone — rotate it in the console or via the API if you need it. That is correct behavior. It is just a reminder that secrets are not retrievable, only re-issuable.

Here is the full script. One file, Node 18 and up, standard library only. It is committed in the repo at `/assets/scripts/agentic-onboarding/okta-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * okta-api-auth.mjs
 *
 * Provider: Okta (Workforce / Customer Identity org)
 * What it does: Registers an OAuth 2.0 / OIDC client application in your Okta org
 *   via Okta's Dynamic Client Registration endpoint, then prints client_id /
 *   client_secret to stdout. Handles the already-registered case by looking up an
 *   existing client with the same name. Node 18+ stdlib only (no npm install).
 *
 * Auth model: Bucket (b) — Management/Admin API + a token you paste via env var.
 *   Unlike the SoundCloud reference there is NO end-user browser OAuth here: Okta's
 *   DCR endpoint is an admin operation, so you authenticate with an Okta API token
 *   (SSWS) or an OAuth2 access token carrying the okta.clients.manage scope. Both
 *   are sent on the Authorization header.
 *
 * Env vars:
 *   OKTA_ORG_URL    Required. Your org base URL, e.g. https://dev-123.okta.com
 *   OKTA_API_TOKEN  Required. An Okta API token (SSWS). If it looks like a JWT
 *                   (contains two dots), it is sent as `Bearer <token>` instead,
 *                   so an okta.clients.manage access token also works.
 *
 * Endpoints:
 *   POST {OKTA_ORG_URL}/oauth2/v1/clients      create a client (returns secret)
 *   GET  {OKTA_ORG_URL}/oauth2/v1/clients?q=   list clients (startsWith on name)
 *
 * Docs:
 *   https://developer.okta.com/docs/reference/api/oauth-clients
 *   https://developer.okta.com/docs/api/openapi/okta-oauth/oauth/tag/Client/
 *   https://developer.okta.com/docs/guides/implement-oauth-for-okta-serviceapp/main/
 *
 * NOTE: The client_secret is only ever returned in the CREATE response (RFC 7591
 *   behavior). The list/GET endpoints do not return secrets, so for an existing
 *   client this tool prints the client_id and tells you the secret isn't
 *   retrievable — rotate it in the Admin Console or via the client API if needed.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DEFAULT_REDIRECT_URI = "http://127.0.0.1:8765/callback";

const CREATE_CLIENT_ERROR_MESSAGES = {
  invalid_client_metadata: "Okta rejected the client metadata (check redirect_uris, grant_types, response_types).",
  invalid_redirect_uri: "One of the redirect URIs is not allowed.",
  access_denied: "Your token is not allowed to register clients. It needs okta.clients.manage (or a Super Admin SSWS token).",
};

function tokenIsJwt(token) {
  // A JWT access token has exactly two dots separating three base64url segments.
  return token.split(".").length === 3;
}

function authHeader(token) {
  return tokenIsJwt(token) ? `Bearer ${token}` : `SSWS ${token}`;
}

function clientsUrl(orgUrl) {
  return new URL("/oauth2/v1/clients", orgUrl).toString();
}

async function oktaRequest({ orgUrl, token, path = "/oauth2/v1/clients", search, method = "GET", body }) {
  const url = new URL(path, orgUrl);
  if (search) {
    for (const [k, v] of Object.entries(search)) url.searchParams.set(k, v);
  }
  const headers = {
    accept: "application/json",
    authorization: authHeader(token),
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, url: url.toString(), text: await res.text() };
}

function parseStructuredApiError(text) {
  try {
    const json = JSON.parse(text);
    // DCR errors: { error, error_description }. Management errors: { errorCode, errorSummary }.
    if (json.error || json.error_description) {
      return { code: json.error, message: json.error_description };
    }
    if (json.errorCode || json.errorSummary) {
      return { code: json.errorCode, message: json.errorSummary };
    }
    return null;
  } catch {
    return null;
  }
}

function createClientUserMessage(apiError) {
  if (!apiError) return "Client registration failed.";
  if (apiError.code && CREATE_CLIENT_ERROR_MESSAGES[apiError.code]) {
    return CREATE_CLIENT_ERROR_MESSAGES[apiError.code];
  }
  return apiError.message || apiError.code || "Client registration failed.";
}

async function findExistingClientByName({ orgUrl, token, name }) {
  // q does a startsWith match on client_name; we still require an exact match.
  const { res, url, text } = await oktaRequest({
    orgUrl,
    token,
    method: "GET",
    search: { q: name, limit: "200" },
  });
  if (!res.ok) {
    throw new Error(`List clients (GET ${url}) failed: ${res.status} ${text}`);
  }
  const list = JSON.parse(text);
  if (!Array.isArray(list)) return null;
  return list.find((c) => c.client_name === name) || null;
}

function buildClientMetadata({ name, website, redirectUris }) {
  // application_type "web" => confidential client with a secret + client_secret_basic.
  return {
    client_name: name,
    application_type: "web",
    redirect_uris: redirectUris,
    response_types: ["code"],
    grant_types: ["authorization_code", "refresh_token"],
    token_endpoint_auth_method: "client_secret_basic",
    ...(website ? { client_uri: website } : {}),
  };
}

async function createClient({ orgUrl, token, metadata }) {
  const { res, url, text } = await oktaRequest({
    orgUrl,
    token,
    method: "POST",
    body: metadata,
  });
  if (res.status === 201 || res.status === 200) {
    return JSON.parse(text);
  }
  const apiError = parseStructuredApiError(text);
  if (res.status === 401 || res.status === 403) {
    throw new Error(createClientUserMessage(apiError) + ` (HTTP ${res.status})`);
  }
  throw new Error(`Create client (POST ${url}) failed: ${res.status} ${createClientUserMessage(apiError)} :: ${text}`);
}

function formatCredentialOutput(client, { existingNoSecret } = {}) {
  const fields = {};
  for (const key of [
    "client_id",
    "client_secret",
    "client_name",
    "client_uri",
    "application_type",
    "redirect_uris",
    "grant_types",
    "token_endpoint_auth_method",
    "client_id_issued_at",
    "client_secret_expires_at",
  ]) {
    if (client[key] !== undefined && client[key] !== null) fields[key] = client[key];
  }
  const lines = [`client_id=${fields.client_id}`];
  if (fields.client_secret) {
    lines.push(`client_secret=${fields.client_secret}`);
  } else if (existingNoSecret) {
    lines.push("client_secret=<not retrievable — only returned at creation; rotate in Admin Console if needed>");
  }
  lines.push("", JSON.stringify(fields, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, website: siteArg, redirect: redirectArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    website: { type: "string" },
    redirect: { type: "string", multiple: true },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: okta-api-auth [options]

  Registers an OAuth 2.0 / OIDC client in your Okta org via Dynamic Client
  Registration (POST /oauth2/v1/clients) and prints client_id / client_secret.
  If a client with the same name already exists, prints its client_id (the
  secret is not retrievable after creation).

Options:
  --name <string>       Required. client_name for the registered client.
  --website <url>       Optional. client_uri for the client.
  --redirect <url>      Optional, repeatable. redirect_uris.
                        Defaults to ${DEFAULT_REDIRECT_URI}
  -h, --help

Environment:
  OKTA_ORG_URL          Required. e.g. https://dev-123.okta.com
  OKTA_API_TOKEN        Required. Okta API token (SSWS), or an OAuth2 access
                        token with the okta.clients.manage scope (sent as Bearer).

Example:
  OKTA_ORG_URL=https://dev-123.okta.com OKTA_API_TOKEN=00abc... \\
    node okta-api-auth.mjs --name "My Agent App" --website "https://example.com"
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

const orgUrl = process.env.OKTA_ORG_URL;
const token = process.env.OKTA_API_TOKEN;
if (!orgUrl || !token) {
  console.error("Missing required environment: OKTA_ORG_URL and OKTA_API_TOKEN");
  console.error("  OKTA_ORG_URL    e.g. https://dev-123.okta.com");
  console.error("  OKTA_API_TOKEN  an Okta API token (SSWS) or okta.clients.manage access token");
  process.exit(1);
}

const name = nameArg;
if (!name) {
  console.error("Missing required argument: --name");
  console.error('Example: node okta-api-auth.mjs --name "My Agent App" --website "https://example.com"');
  process.exit(1);
}

const redirectUris = redirectArg && redirectArg.length > 0 ? redirectArg : [DEFAULT_REDIRECT_URI];

(async () => {
  try {
    const metadata = buildClientMetadata({ name, website: siteArg, redirectUris });
    let created;
    try {
      created = await createClient({ orgUrl, token, metadata });
    } catch (e) {
      // If the name collides, Okta still creates a new client (names aren't unique),
      // so a true "already exists" 409 is uncommon — but if creation is blocked we
      // fall back to looking up a same-named client and reporting what we can.
      const existing = await findExistingClientByName({ orgUrl, token, name }).catch(() => null);
      if (existing) {
        console.error(`A client named "${name}" already exists; printing its client_id.`);
        console.error(`(Original create error: ${e.message})`);
        process.stdout.write(formatCredentialOutput(existing, { existingNoSecret: true }));
        process.exit(0);
      }
      throw e;
    }
    process.stdout.write(formatCredentialOutput(created));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();
```

So where does this leave Okta against the moment? Honestly, closer than most. They have done the hard part, which is exposing a standards-based registration endpoint that a machine can call and that stays in sync with the console. That alone puts them ahead of a lot of vendors I have looked at, who have no machine path at all. What is missing is the front of the funnel. There is no self-serve, end-user, browser-consent way to bootstrap that first privileged token — you still need an admin to mint an SSWS token or a scoped service app by hand before any of this can run. If Okta wants to fully meet the agentic moment, that is the gap to close: a consented, time-boxed, narrowly-scoped path for an agent to obtain its own `okta.clients.manage` grant without a human pasting a god-token. They are an identity company. This is exactly the problem they are supposed to be the best in the world at solving. The endpoint is there. Now build the door an agent can actually walk through.

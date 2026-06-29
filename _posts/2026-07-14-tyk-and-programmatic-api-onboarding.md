---
published: true
layout: post
title: What Programmatic Onboarding Looks Like When the Gateway Is Tyk
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/tyk-and-programmatic-api-onboarding.png
date: 2026-07-14
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Tyk
  - Agents
  - AI
---

I keep coming back to the same wall. Every company I talk to is "all in on AI," ready for an agentic future where software provisions its own access and gets to work. And then I go to actually get credentials, and I am clicking through a dashboard, hunting for a settings page, and copying a secret into a text file by hand. The story we tell and the onboarding we ship do not match. So I have been working my way through the API gateway and management vendors, rebuilding the same little single-file CLI for each one to see how close their reality gets to the ideal I described when I wrote about [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/). This week it is Tyk.

The reference I keep holding everyone up against is the SoundCloud script: one Node file, no npm install, opens a browser, you log in, it registers an application, and it prints your `client_id` and `client_secret` to your terminal. No human hand-holding, no dashboard archaeology. That is the bar. It is not a high bar. It is just rare.

Tyk does not clear it, and I want to be fair about why. Tyk is a gateway and a management plane, not a public developer platform handing out keys to strangers. So there is no "log in with your browser and mint yourself a client" flow, and frankly there shouldn't be one wide open to the world. What Tyk gives you instead is the Tyk Dashboard API, and that is bucket (b): a management API gated by a secret you paste in. You grab the "Tyk Dashboard API Access Credentials" off your profile page in the Dashboard UI, and every request to the Dashboard API carries it in an `Authorization` header — just the raw secret, no `Bearer`, no OAuth dance. You can read the auth model in the [Dashboard API docs](https://tyk.io/docs/tyk-dashboard-api/).

Once you are holding that secret, the piece that actually maps to SoundCloud's `client_id`/`client_secret` is OAuth client creation. You `POST /api/apis/oauth/{api-id}` with a small JSON body — a `redirect_uri` and a `policy_id` — and Tyk hands you back a `client_id` and a `secret`. That is documented cleanly in the [OAuth key management reference](https://tyk.io/docs/5.3/tyk-apis/tyk-dashboard-api/oauth-key-management/). You can `GET` the same path to list the clients already registered under that API, which is what lets me handle the "I already did this" case the way the SoundCloud script does, and `DELETE` one by id. It is a real, scriptable provisioning surface, and I'll take what I can get.

Here is the honest catch, and it is a meaningful one. OAuth clients in Tyk only exist *under an API*, bound to an access *policy*. So before my script can do anything, somebody — a human, in the Dashboard — has to have already created an API with OAuth enabled and an access policy to bind the client to. The script automates the last mile. It does not automate the road. That is the gap between Tyk and the SoundCloud ideal: the ideal assumes a developer or an agent arrives cold and leaves with credentials, and Tyk assumes you are already an operator standing inside a configured cluster. Different audience, different promise. There is also the classic Developer Portal, with `/api/portal/developers` and `/api/portal/requests` for registering developers and approving key requests, and the newer Enterprise Developer Portal with its own provider-and-credential model — but those are about *your* developers onboarding to *your* APIs, not about you onboarding to Tyk. Worth knowing they exist; I left them as labeled notes rather than guessing their exact shapes.

So I retrofitted the CLI to Tyk's reality. It reads `TYK_DASHBOARD_URL`, `TYK_DASHBOARD_SECRET`, and `TYK_API_ID` from the environment, skips the browser entirely because there is nothing to log into, creates an OAuth client under the API you point it at, and prints `client_id=` and `client_secret=` just like the original. It handles the already-registered case, tells you plainly when you forgot a policy id, and is explicit in its comments about the manual prerequisites it cannot do for you. Same spirit, one file, no dependencies. The full script is committed in the repo at `/assets/scripts/agentic-onboarding/tyk-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * tyk-api-auth.mjs
 *
 * Provider:   Tyk (API Management) — Tyk Dashboard API
 * What it does:
 *   Creates (or fetches, if one already exists) an OAuth client under an existing
 *   API on your Tyk Dashboard, then prints client_id / client_secret to stdout —
 *   mirroring the SoundCloud `sc-api-auth.mjs` ergonomics.
 *
 * Auth model:  BUCKET (b). Tyk has no public self-serve browser OAuth onboarding
 *   for minting your own gateway client. Instead you paste a privileged Dashboard
 *   secret. Every Dashboard API request carries `Authorization: <secret>`. The
 *   secret is the "Tyk Dashboard API Access Credentials" on your Dashboard profile.
 *
 * Prerequisites (the honest manual gaps):
 *   - A Tyk Dashboard you can reach (self-managed or Tyk Cloud control plane URL).
 *   - An existing API on that Dashboard configured for OAuth 2.0 (its api_id).
 *   - An access Policy id to bind the new client to (--policy / TYK_POLICY_ID).
 *
 * Env vars:
 *   TYK_DASHBOARD_URL     Base URL of the Dashboard, e.g. https://admin.cloud.tyk.io
 *   TYK_DASHBOARD_SECRET  Your Dashboard API Access Credentials secret
 *   TYK_API_ID            The api_id the OAuth client is created under
 *   TYK_POLICY_ID         (optional) policy id to bind; can also pass --policy
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   https://tyk.io/docs/tyk-dashboard-api/
 *   https://tyk.io/docs/5.3/tyk-apis/tyk-dashboard-api/oauth-key-management/
 *   https://tyk.io/docs/5.6/tyk-apis/tyk-dashboard-api/manage-key-requests/
 */
import { parseArgs } from "node:util";
import process from "node:process";

const OAUTH_CLIENTS_PATH = (apiId) => `/api/apis/oauth/${encodeURIComponent(apiId)}`;
const OAUTH_CLIENT_PATH = (apiId, clientId) =>
  `/api/apis/oauth/${encodeURIComponent(apiId)}/${encodeURIComponent(clientId)}`;

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) {
    throw new Error(
      `Missing required environment variable ${name}. ` +
        `Set it before running, e.g. export ${name}=...`
    );
  }
  return v.trim();
}

function trimTrailingSlash(url) {
  return url.replace(/\/+$/, "");
}

/**
 * Tyk Dashboard API uses `Authorization: <secret>` (the raw secret, no scheme word).
 */
async function dashboardRequest({ baseUrl, secret, path, method = "GET", body }) {
  const url = `${trimTrailingSlash(baseUrl)}${path}`;
  const headers = {
    accept: "application/json",
    authorization: secret,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  return { res, text, url };
}

function parseJsonSafe(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** GET the OAuth clients already registered under this API. */
async function listOAuthClients({ baseUrl, secret, apiId }) {
  const { res, text, url } = await dashboardRequest({
    baseUrl,
    secret,
    path: OAUTH_CLIENTS_PATH(apiId),
  });
  if (!res.ok) {
    throw new Error(
      `List OAuth clients (GET ${url}) failed: ${res.status} ${text || "(no body)"}`
    );
  }
  const data = parseJsonSafe(text);
  // Tyk returns either a bare array of clients or { clients: [...] } depending on version.
  // NOTE: verify exact envelope against your Dashboard version.
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.clients)) return data.clients;
  if (Array.isArray(data?.oauth_clients)) return data.oauth_clients;
  return [];
}

/** POST a new OAuth client under this API. Returns client_id / secret. */
async function createOAuthClient({ baseUrl, secret, apiId, policyId, redirectUri, description }) {
  const body = {
    redirect_uri: redirectUri ?? "",
    policy_id: policyId ?? "",
  };
  // `meta_data` / `description` are accepted on newer Dashboards; harmless if ignored.
  if (description) body.meta_data = { description };

  const { res, text, url } = await dashboardRequest({
    baseUrl,
    secret,
    path: OAUTH_CLIENTS_PATH(apiId),
    method: "POST",
    body,
  });

  if (res.ok) {
    const data = parseJsonSafe(text) ?? {};
    return { client: data, existing: false };
  }

  // Surface auth/permission problems clearly.
  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `Not authorized (HTTP ${res.status}) creating OAuth client at ${url}. ` +
        `Check TYK_DASHBOARD_SECRET and that your user can manage this API.\n${text}`
    );
  }
  if (res.status === 404) {
    throw new Error(
      `API not found (HTTP 404) at ${url}. ` +
        `Check TYK_API_ID (${apiId}) and that the API has OAuth 2.0 enabled.`
    );
  }
  throw new Error(`Create OAuth client (POST ${url}) failed: ${res.status} ${text || "(no body)"}`);
}

function normalizeClient(c) {
  // Tyk OAuth client objects use `secret` for the client secret.
  return {
    client_id: c.client_id ?? c.clientId ?? c.ClientID,
    client_secret: c.secret ?? c.client_secret ?? c.Secret,
    redirect_uri: c.redirect_uri ?? c.RedirectURI,
    policy_id: c.policy_id ?? c.PolicyID,
    description: c.meta_data?.description ?? c.description,
  };
}

function publicFields(creds) {
  const out = {};
  for (const k of ["client_id", "client_secret", "redirect_uri", "policy_id", "description"]) {
    if (creds[k] !== undefined && creds[k] !== null && creds[k] !== "") out[k] = creds[k];
  }
  return out;
}

function formatCredentialOutput(creds) {
  const pub = publicFields(creds);
  const lines = [`client_id=${pub.client_id ?? ""}`];
  if (pub.client_secret) lines.push(`client_secret=${pub.client_secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

async function createOrFetchClient(opts) {
  // If the caller asked to reuse an existing client, look first.
  if (opts.reuseExisting) {
    const clients = await listOAuthClients(opts);
    const withId = clients.map(normalizeClient).find((c) => c.client_id);
    if (withId) {
      return {
        credentials: withId,
        existing: true,
        notice:
          "Reusing an existing OAuth client under this API. " +
          "Note: Tyk does not return the original secret on listing; " +
          "secret may be omitted. Pass --new to mint a fresh client.",
      };
    }
  }
  const { client } = await createOAuthClient(opts);
  return { credentials: normalizeClient(client), existing: false };
}

function help() {
  console.log(`Usage: tyk-api-auth [options]

  Creates an OAuth client under an existing API on your Tyk Dashboard and prints
  client_id / client_secret. Tyk is a "management API + secret" provider: there is
  no public browser-based self-serve onboarding, so this reads your Dashboard
  secret from the environment.

Required environment:
  TYK_DASHBOARD_URL     Dashboard base URL, e.g. https://admin.cloud.tyk.io
  TYK_DASHBOARD_SECRET  Your Dashboard API Access Credentials (from your profile)
  TYK_API_ID            The api_id to create the OAuth client under

Optional:
  TYK_POLICY_ID         Policy id to bind the client to (or use --policy)

Options:
  --policy <id>         Policy id to bind (overrides TYK_POLICY_ID)
  --redirect <uri>      OAuth redirect_uri for the client (default: "")
  --description <text>  Stored on the client meta_data
  --reuse               Reuse an existing client under this API if one exists
  -h, --help

Docs: https://tyk.io/docs/5.3/tyk-apis/tyk-dashboard-api/oauth-key-management/
`);
}

async function main() {
  const { values } = parseArgs({
    options: {
      policy: { type: "string" },
      redirect: { type: "string" },
      description: { type: "string" },
      reuse: { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: false,
  });

  if (values.help) {
    help();
    process.exit(0);
  }

  const baseUrl = requireEnv("TYK_DASHBOARD_URL");
  const secret = requireEnv("TYK_DASHBOARD_SECRET");
  const apiId = requireEnv("TYK_API_ID");
  const policyId = values.policy ?? process.env.TYK_POLICY_ID ?? "";

  if (!policyId) {
    console.error(
      "Warning: no policy id supplied (--policy or TYK_POLICY_ID). " +
        "Tyk OAuth clients are normally bound to an access policy; " +
        "the Dashboard may reject the request without one."
    );
  }

  const result = await createOrFetchClient({
    baseUrl,
    secret,
    apiId,
    policyId,
    redirectUri: values.redirect,
    description: values.description,
    reuseExisting: Boolean(values.reuse),
  });

  if (result.existing && result.notice) console.error(result.notice);
  if (!result.credentials?.client_id) {
    throw new Error("No client_id returned by the Tyk Dashboard.");
  }
  process.stdout.write(formatCredentialOutput(result.credentials));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});
```

What would it take for Tyk to fully meet the agentic moment? Honestly, not that much, and most of it is about closing the gap I described. Make the API, the policy, and the client a single provisioning call so a script doesn't need three things to exist by hand first. Return a stable, documented response envelope so I don't have to guess whether secrets come back as `secret` or `Secret`. And give the Enterprise Developer Portal a clean, self-serve credential request that an agent can drive end to end, the way SoundCloud lets a stranger walk up and leave with a key. Tyk is an operator's tool and it earns that. But the agentic moment is going to be full of software that needs to provision its own access against a gateway, and the vendors who make that one call instead of one dashboard session are the ones who win the next decade. I'll keep banging my head against this wall until more of them do.

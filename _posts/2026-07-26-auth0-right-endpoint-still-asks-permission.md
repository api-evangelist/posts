---
published: true
layout: post
title: Auth0 Has the Right Endpoint and Still Makes You Ask Permission
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/auth0-right-endpoint-still-asks-permission.png
date: 2026-07-26
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Auth0
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that machines will be first-class consumers of their software. And then to get a set of credentials I have to log into a dashboard, click through a wizard, name my application by hand, and copy a secret out of a web form into a clipboard. That is not an agentic future. That is a human doing data entry on behalf of a machine. I wrote about what good looks like when I covered [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/), and I have been quietly grading every identity provider against it since. This week it is Auth0's turn, and Auth0 is an interesting case because it is an identity company. If anyone should make registering a client a single clean API call, it is the people whose entire business is registering clients.

Here is the good news. Auth0 actually has the right endpoint. It supports Dynamic Client Registration, the RFC 7591 standard, at `POST /oidc/register` on your tenant. You send a `client_name` and an array of `redirect_uris`, and you get back a `client_id`, a `client_secret`, and a `client_secret_expires_at`. The docs even say the magic words: "No token is needed for this request." That is the SoundCloud ideal sitting right there in the catalog. A machine can mint its own credentials against a standard endpoint with no human in the loop. I want to stand up and applaud.

And then I read the next paragraph. Dynamic Client Registration is disabled for every tenant by default. To turn it on you need at minimum a Professional or Enterprise plan, you flip a flag in the dashboard or via a `PATCH /api/v2/tenants/settings` call, and you have to pre-configure default permissions for third-party apps or the dynamically registered clients cannot actually reach any of your APIs. There is also a strict mode that puts an initial access token back in front of the "no token needed" endpoint. So the standards-compliant, open, agent-friendly front door exists, but it ships locked, behind a paywall, with a checklist of prerequisites. I will be honest, this is the most frustrating kind of "almost." The thing I want is built and tested and documented, and the default posture is still "ask permission first."

So what is actually reachable for most people on most tenants? The Management API. You can call `POST /api/v2/clients` with a `name` and an `app_type` and get back a real `client_id` and `client_secret` with a 201. The catch is the auth model. That endpoint needs a Management API access token carrying the `create:clients` scope, and to get one you stand up a machine-to-machine application and exchange its credentials at `POST /oauth/token` with `grant_type=client_credentials` and `audience` set to `https://YOUR_TENANT/api/v2/`. In other words, you need a client in order to create clients. It is bucket (b) wearing a bucket (a) costume. It works, it is honest, and it scales fine for a platform onboarding its own tenants, but it is not the zero-setup browser-and-go experience.

So I wrote the script to meet both realities. By default it takes the Management API path, because that is what works on a fresh tenant today. You give it `AUTH0_DOMAIN` and either a pre-minted `AUTH0_MGMT_TOKEN` or an `AUTH0_M2M_CLIENT_ID` and `AUTH0_M2M_CLIENT_SECRET`, and it mints the token, creates the client, and prints `client_id=` and `client_secret=` to stdout. If you already have an application by that name and the create comes back as a conflict, it does a search and hands you back the existing credentials instead of failing. And if your tenant is one of the lucky ones with DCR turned on, you pass `--dcr` and it hits `POST /oidc/register` directly, with an optional token for strict mode. One file, Node 18 and the standard library, no npm install. The full thing is below and it is committed in the repo at `/assets/scripts/agentic-onboarding/auth0-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * auth0-api-auth.mjs
 *
 * Provider: Auth0 (by Okta)
 * What it does: Programmatically registers an Auth0 application (client) and prints
 *   its client_id / client_secret to stdout. Two paths, auto-selected:
 *     1. Dynamic Client Registration (RFC 7591): POST /oidc/register
 *        - No token required, BUT must be explicitly enabled on the tenant
 *          (Dashboard > Settings > Advanced > "Dynamic Client Registration",
 *          or PATCH /api/v2/tenants/settings with flags.enable_dynamic_client_registration=true).
 *          Requires Professional/Enterprise plan. Often token-gated in "strict" mode.
 *     2. Management API: POST /api/v2/clients (default path)
 *        - Auth: a Management API access token. Either paste one (AUTH0_MGMT_TOKEN),
 *          or mint one via client_credentials against POST /oauth/token with
 *          audience https://{AUTH0_DOMAIN}/api/v2/ using an existing M2M app
 *          (AUTH0_M2M_CLIENT_ID / AUTH0_M2M_CLIENT_SECRET). Needs scope create:clients
 *          (and read:clients for the already-registered lookup).
 *
 * Auth model: bucket (a) Dynamic Client Registration, with a Management-API fallback
 *   (bucket b) because DCR is off by default and gated by plan.
 *
 * Env vars:
 *   AUTH0_DOMAIN              required, e.g. your-tenant.us.auth0.com (no scheme)
 *   AUTH0_MGMT_TOKEN          a pre-minted Management API access token (optional)
 *   AUTH0_M2M_CLIENT_ID       M2M app client id, used to mint a mgmt token (optional)
 *   AUTH0_M2M_CLIENT_SECRET   M2M app client secret (optional)
 *
 * Node.js stdlib only (no npm dependencies). Node 18+ (global fetch).
 *
 * Docs:
 *   DCR endpoint:      https://auth0.com/docs/api/authentication/dynamic-application-client-registration/dynamic-application-registration
 *   Enable DCR:        https://auth0.com/docs/get-started/applications/dynamic-client-registration
 *   Create client:     https://auth0.com/docs/api/management/v2/clients/post-clients
 *   Mgmt API token:    https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-production
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DEFAULT_CALLBACK = "https://example.com/callback";

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

function base(domain) {
  return `https://${domain.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
}

/** Mint a short-lived Management API access token via client_credentials. */
async function mintMgmtToken({ domain, clientId, clientSecret }) {
  const url = `${base(domain)}/oauth/token`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      audience: `${base(domain)}/api/v2/`,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `Minting Management API token (POST ${url}) failed: ${res.status} ${text}\n` +
        "Check that the M2M app is authorized for the Management API with scope create:clients (and read:clients)."
    );
  }
  const json = JSON.parse(text);
  if (!json.access_token) throw new Error("No access_token in /oauth/token response.");
  return json.access_token;
}

/** Dynamic Client Registration (RFC 7591). No token unless the tenant runs strict DCR. */
async function dcrRegister({ domain, name, website, callbacks, token }) {
  const url = `${base(domain)}/oidc/register`;
  const headers = { "content-type": "application/json", accept: "application/json" };
  // NOTE: strict-mode tenants require an initial access token; open tenants take none.
  if (token) headers.authorization = `Bearer ${token}`;
  const body = {
    client_name: name,
    redirect_uris: callbacks,
    grant_types: ["authorization_code", "refresh_token"],
    token_endpoint_auth_method: "client_secret_post",
    ...(website ? { client_uri: website } : {}),
  };
  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const text = await res.text();
  // 201 per RFC 7591; Auth0 has been observed to return 200/201.
  if (res.status === 200 || res.status === 201) {
    const j = JSON.parse(text);
    return {
      client_id: j.client_id,
      client_secret: j.client_secret,
      name: j.client_name ?? name,
      website,
      callbacks: j.redirect_uris ?? callbacks,
      _via: "Dynamic Client Registration (POST /oidc/register)",
    };
  }
  const err = new Error(`DCR (POST ${url}) failed: ${res.status} ${text}`);
  err._status = res.status;
  throw err;
}

async function mgmtRequest({ domain, token, path, method = "GET", body }) {
  const url = `${base(domain)}/api/v2${path}`;
  const headers = { authorization: `Bearer ${token}`, accept: "application/json" };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { url, res, text: await res.text() };
}

/** Look up an existing client by name (the "already registered" case). */
async function findExistingClient({ domain, token, name }) {
  const q = encodeURIComponent(`name:"${name.replace(/"/g, '\\"')}"`);
  const { res, text } = await mgmtRequest({
    domain,
    token,
    path: `/clients?q=${q}&search_engine=v3&fields=client_id,name,client_secret,callbacks&include_fields=true`,
  });
  if (!res.ok) return null;
  try {
    const arr = JSON.parse(text);
    const list = Array.isArray(arr) ? arr : arr.clients ?? [];
    const hit = list.find((c) => c && c.name === name && c.client_id);
    if (!hit) return null;
    return {
      client_id: hit.client_id,
      client_secret: hit.client_secret,
      name: hit.name,
      callbacks: hit.callbacks,
      _via: "Management API (existing client, GET /api/v2/clients)",
    };
  } catch {
    return null;
  }
}

/** Management API: POST /api/v2/clients (default path). */
async function mgmtCreateClient({ domain, token, name, description, website, callbacks }) {
  const { url, res, text } = await mgmtRequest({
    domain,
    token,
    path: "/clients",
    method: "POST",
    body: {
      name,
      app_type: "regular_web",
      ...(description ? { description: description.slice(0, 140) } : {}),
      callbacks,
      ...(website ? { client_metadata: { website } } : {}),
      grant_types: ["authorization_code", "refresh_token"],
      token_endpoint_auth_method: "client_secret_post",
    },
  });

  if (res.status === 201) {
    const j = JSON.parse(text);
    return {
      credentials: {
        client_id: j.client_id,
        client_secret: j.client_secret,
        name: j.name ?? name,
        website,
        callbacks: j.callbacks ?? callbacks,
        _via: "Management API (POST /api/v2/clients)",
      },
      existing: false,
    };
  }

  // A name clash typically surfaces as 409; fall back to a lookup.
  if (res.status === 409) {
    const existing = await findExistingClient({ domain, token, name });
    if (existing) {
      return {
        credentials: existing,
        existing: true,
        notice: `An application named "${name}" already exists; returning it.`,
      };
    }
  }

  throw new Error(`Create client (POST ${url}) failed: ${res.status} ${text}`);
}

function formatCredentialOutput(c) {
  const pub = {};
  for (const k of ["client_id", "client_secret", "name", "website", "callbacks", "_via"]) {
    if (c[k] !== undefined && c[k] !== null) pub[k] = c[k];
  }
  const lines = [`client_id=${pub.client_id}`];
  if (pub.client_secret) lines.push(`client_secret=${pub.client_secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, website: siteArg, callback: cbArg, dcr: dcrArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    callback: { type: "string" },
    dcr: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  die(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
}

if (helpArg) {
  console.log(`Usage: auth0-api-auth [options]

  Registers an Auth0 application (client) and prints client_id / client_secret.

  Default path is the Management API (POST /api/v2/clients), which works on every
  tenant once you give it a token. Pass --dcr to use Dynamic Client Registration
  (POST /oidc/register) instead, which must be ENABLED on your tenant first.

Options:
  --name           Required. Application name.
  --description    Optional. Free text (truncated to 140 chars for the Mgmt API).
  --website        Optional. Your app's website URL.
  --callback       Optional. Allowed callback / redirect URI (default ${DEFAULT_CALLBACK}).
  --dcr            Use Dynamic Client Registration (POST /oidc/register) instead of the Mgmt API.
  -h, --help

Environment:
  AUTH0_DOMAIN              Required. e.g. your-tenant.us.auth0.com
  AUTH0_MGMT_TOKEN          A Management API access token (skips minting).
  AUTH0_M2M_CLIENT_ID       M2M client id used to mint a Mgmt token via client_credentials.
  AUTH0_M2M_CLIENT_SECRET   M2M client secret.

  For the Management API path you need a token with scope create:clients (and
  read:clients for the already-registered lookup). DCR must be enabled on the tenant
  (Professional/Enterprise plan) and may run in strict mode requiring a token.
`);
  process.exit(0);
}

const domain = process.env.AUTH0_DOMAIN;
if (!domain) die("Missing AUTH0_DOMAIN (e.g. your-tenant.us.auth0.com).");
if (!nameArg) die('Missing required --name. Example: --name "My Agent App"');

const callbacks = [cbArg || DEFAULT_CALLBACK];

async function getMgmtToken() {
  if (process.env.AUTH0_MGMT_TOKEN) return process.env.AUTH0_MGMT_TOKEN;
  const id = process.env.AUTH0_M2M_CLIENT_ID;
  const secret = process.env.AUTH0_M2M_CLIENT_SECRET;
  if (id && secret) {
    return mintMgmtToken({ domain, clientId: id, clientSecret: secret });
  }
  return null;
}

async function main() {
  if (dcrArg) {
    // DCR path: token is optional (only strict-mode tenants need one).
    const token = process.env.AUTH0_MGMT_TOKEN || null;
    try {
      const credentials = await dcrRegister({
        domain,
        name: nameArg,
        website: siteArg,
        callbacks,
        token,
      });
      process.stdout.write(formatCredentialOutput(credentials));
      return;
    } catch (e) {
      if (e._status === 401 || e._status === 403) {
        die(
          `${e.message}\n\nDynamic Client Registration is disabled or restricted on this tenant.\n` +
            "Enable it (Dashboard > Settings > Advanced) or drop --dcr to use the Management API path."
        );
      }
      throw e;
    }
  }

  // Default: Management API path.
  const token = await getMgmtToken();
  if (!token) {
    die(
      "No Management API credentials found.\n" +
        "Set AUTH0_MGMT_TOKEN, or AUTH0_M2M_CLIENT_ID + AUTH0_M2M_CLIENT_SECRET to mint one.\n" +
        "Alternatively, if your tenant has Dynamic Client Registration enabled, pass --dcr."
    );
  }
  const { credentials, existing, notice } = await mgmtCreateClient({
    domain,
    token,
    name: nameArg,
    description: descArg,
    website: siteArg,
    callbacks,
  });
  if (existing && notice) console.error(notice);
  process.stdout.write(formatCredentialOutput(credentials));
}

main().catch((e) => {
  die(`Error: ${e?.message || e}`);
});
```

Here is the hill I will happily die on. An identity company, of all the companies, should make its own front door agent-ready by default. Auth0 has done the hard part. The DCR endpoint is real, it is standards-compliant, and it returns exactly the credentials a machine needs. So flip the defaults. Let a new tenant on any plan stand up clients through `/oidc/register` with sensible rate limits and a clear scoping model, instead of treating self-service client registration as an enterprise upsell behind a feature flag. Until then I will take what I can get, which is the Management API path and a small script that hides the token dance. But "we built the right thing and turned it off" is a strange place for an identity leader to plant its flag in the agentic moment.

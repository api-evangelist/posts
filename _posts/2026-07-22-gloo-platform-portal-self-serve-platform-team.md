---
published: true
layout: post
title: Gloo Platform Portal Has the Endpoints, but Self-Serve Lives or Dies on the Platform Team
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/gloo-platform-portal-self-serve-platform-team.png
date: 2026-07-22
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Gloo
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that machines will be first-class consumers of their APIs. Then they hand me an onboarding flow that assumes a human with a mouse, a verified email, and an afternoon to spare. Onboarding does not scale, and the agentic moment is going to break itself against that contradiction over and over until somebody fixes the front door.

So I keep doing this exercise. I take the SoundCloud script I wrote a while back, the one that proves [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) can be a single file with no dependencies that logs you in, registers an app, and prints your credentials, and I point it at the next vendor to see how close their reality gets to that ideal. This time it is Gloo, the Solo.io gateway built on Kubernetes and Envoy. And Gloo is an interesting case, because the answer is genuinely "it depends, and not on you."

Here is the honest shape of it. Gloo Platform Portal ships a real REST API, the portal-server, mounted under `/v1`. It has the endpoints you would want. `GET /v1/apis` lists the API products you can see. `GET /v1/usage-plans` lists the plans. `GET /v1/api-keys` lists the keys you hold, and `POST /v1/api-keys` mints a new one. You hand it `{ usagePlan, apiKeyName }` and it hands you back an `APIKey` object with an `id`, a `name`, and the secret `apiKey` value. That is good. That is most of the machinery the agentic moment actually needs.

But there is no Dynamic Client Registration here. There is no `POST /clients` where you register an app and walk away with a `client_id` and `client_secret`. The "app" concept in the SoundCloud sense does not exist. What you do instead is subscribe to a usage plan and mint an API key scoped to it. The credential is an API key, not a client secret, and Gloo is blunt about a detail I respect them for documenting clearly: the `apiKey` value comes back exactly once, at creation, and is never readable again. List the keys later and you get the metadata, never the secret. That is the right security posture, and my script leans into it, printing the value the moment it appears and warning you on stderr that this is your only chance.

The auth model is where the honesty has to get loud. To call the portal-server, you need a bearer access token from the portal's OIDC identity provider. The published OpenAPI still describes a cookie-based `id_token` from the browser-for-frontend days, but Solo.io has since turned the portal-server into a proper OAuth2 resource server, so an automated client can grab an access token through the client-credentials flow from the IdP and call the API with `Authorization: Bearer`. That is the path an agent would take, and it is the path my script assumes. It reads the already-obtained token from `GLOO_TOKEN` and the base URL from `GLOO_PORTAL_URL`, then does discovery, validation, the already-exists check, and the key creation.

Notice what the script does not do, though. There is no browser dance, no PKCE, no local callback server like the SoundCloud version. I could not put one there honestly, because the thing that would make a browser flow possible, a hosted developer portal with a sign-up button and self-serve subscriptions, is not something Gloo gives you out of the box. It is something your platform team stands up. The PortalConfig, the ext-auth policy, the IdP wiring, the decision about which usage plans are even visible to which identities, all of that is operator work on a Kubernetes cluster. Gloo is infrastructure for building a developer portal, not a developer portal you sign up for. So when I say "self-serve," I have to immediately add: self-serve for whom your platform team decided gets to serve themselves.

That is not a knock on the engineering. The endpoints are clean, the credential lifecycle is sane, and the move to OAuth2 resource-server semantics is exactly what you want for agents. I will take what I can get, and this is a lot. But it means the gap between Gloo and the SoundCloud ideal is not a missing endpoint. It is a missing default. If Solo.io wants to meet the agentic moment, the lift is to ship a turnkey portal where a developer or an agent can land, authenticate, subscribe to a plan, and walk out with a key without a human operator having pre-blessed every step. The plumbing is already there. Somebody just has to turn it on for everyone, not for the lucky few whose platform team got around to it.

The script is committed in the repo at `/assets/scripts/agentic-onboarding/gloo-solo-api-auth.mjs`. Point it at a portal your team has stood up, give it a token and a plan, and it will get you a key. That it works at all is the good news. That it only works after a platform team did the real work is the part Gloo still has to solve.

```javascript
#!/usr/bin/env node
/**
 * gloo-solo-api-auth — self-service credentials against a Gloo Platform Portal (Solo.io).
 *
 * What it does:
 *   Talks to the Gloo Portal Server REST API ("portal-server") to (1) find the API
 *   products and usage plans you can see, (2) ensure you are subscribed/eligible for a
 *   usage plan, and (3) create an API key scoped to that usage plan — then prints it.
 *   The created key value is returned EXACTLY ONCE by Gloo (the `apiKey` field), so this
 *   tool surfaces it to stdout and reminds you it cannot be re-read later.
 *
 * Auth model (bucket b/c — NOT RFC 7591 Dynamic Client Registration):
 *   Gloo is Kubernetes/Envoy-native. The Portal is something your PLATFORM TEAM must stand
 *   up (PortalConfig + ext-auth + an OIDC IdP). There is no public "register an app" DCR
 *   endpoint. As an app developer/agent you authenticate to the Portal Server with a bearer
 *   ACCESS TOKEN from the portal's IdP (OIDC). Automated clients get that token via the
 *   OAuth2 client-credentials flow from their IdP; humans copy it out of a portal session.
 *   This script reads that already-obtained token from GLOO_TOKEN and does the rest.
 *
 * Env vars:
 *   GLOO_PORTAL_URL  Base URL of the Portal Server REST API, e.g.
 *                    https://portal.example.com/v1  (some installs mount it at
 *                    https://portal.example.com/portal-server/v1). Include the /v1.
 *   GLOO_TOKEN       Bearer access token (OIDC) for the portal user / service identity.
 *                    Sent as `Authorization: Bearer <token>`.
 *
 * Doc links:
 *   - Portal Server REST API reference (endpoints + schemas):
 *       https://docs.solo.io/gloo-mesh-gateway/latest/reference/api/portal/
 *   - Portal Server OpenAPI:
 *       https://raw.githubusercontent.com/solo-io/gloo-mesh-use-cases/main/gloo-gateway/portal/openapi.yaml
 *   - Backend portal config (base path, /v1/me, /v1/apis, /v1/usage-plans, /v1/api-keys):
 *       https://docs.solo.io/gloo-mesh-gateway/latest/portal/guides/backend-portal/
 *   - Frontend API-key management (self-service keys per usage plan):
 *       https://docs.solo.io/gateway/main/portal/guides/frontend-portal/credential-management/apikey/
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const ENV_PORTAL_URL = "GLOO_PORTAL_URL";
const ENV_TOKEN = "GLOO_TOKEN";

// --- argument parsing -------------------------------------------------------

const {
  values: { plan: planArg, name: nameArg, api: apiArg, list: listArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    plan: { type: "string" },
    name: { type: "string" },
    api: { type: "string" },
    list: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: gloo-solo-api-auth [options]

  Self-service an API key against a Gloo Platform Portal (Solo.io).
  Reads your portal access token from $${ENV_TOKEN} and the Portal Server base URL
  from $${ENV_PORTAL_URL} (must include /v1), then creates a key for a usage plan.

  Because Gloo has no Dynamic Client Registration, the "app" concept here is a usage
  plan you subscribe to. There is no client_secret; the credential is an API key.

Options:
  --plan <name>      Usage plan to scope the API key to (required unless --list).
  --name <name>      A label for the new API key (default: a generated name).
  --api <id|title>   Optional: filter discovery to a single API product (substring match).
  --list             List the API products and usage plans you can see, then exit.
  -h, --help

Environment:
  ${ENV_PORTAL_URL}  Portal Server REST base URL incl. /v1 (e.g. https://portal.example.com/v1)
  ${ENV_TOKEN}       OIDC bearer access token for the portal user / service identity.

Examples:
  ${ENV_PORTAL_URL}=https://portal.example.com/v1 ${ENV_TOKEN}=eyJ... node gloo-solo-api-auth.mjs --list
  ${ENV_PORTAL_URL}=https://portal.example.com/v1 ${ENV_TOKEN}=eyJ... node gloo-solo-api-auth.mjs --plan gold --name my-agent
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

const portalBase = (process.env[ENV_PORTAL_URL] || "").replace(/\/+$/, "");
const token = process.env[ENV_TOKEN];

if (!portalBase) {
  console.error(`Missing $${ENV_PORTAL_URL}. Set it to your Portal Server REST base URL including /v1,`);
  console.error(`e.g. export ${ENV_PORTAL_URL}="https://portal.example.com/v1"`);
  process.exit(1);
}
if (!token) {
  console.error(`Missing $${ENV_TOKEN}. Set it to an OIDC bearer access token for the portal.`);
  console.error(`Automated clients can obtain one via the OAuth2 client-credentials flow from the portal's IdP.`);
  process.exit(1);
}
if (!/\/v1$/.test(portalBase) && !/\/v1\/portal-server$/.test(portalBase)) {
  // Not fatal — installs vary — but the API is versioned, so warn loudly.
  console.error(`Warning: $${ENV_PORTAL_URL} ("${portalBase}") does not end in /v1.`);
  console.error(`The Gloo Portal Server API is mounted under /v1 (or /portal-server/v1). Continuing anyway.`);
}

// --- low-level request helper ----------------------------------------------

function url(path) {
  return `${portalBase}${path}`;
}

async function portalRequest({ path, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  let res;
  try {
    res = await fetch(url(path), {
      method,
      headers,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
  } catch (e) {
    throw new Error(`Network error calling ${method} ${url(path)}: ${e.message}`);
  }
  const text = await res.text();
  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `${method} ${path} was rejected (${res.status}). Your $${ENV_TOKEN} is missing, expired, or ` +
        `lacks portal access. Confirm the token's audience matches the Portal Server and that the ` +
        `platform team has granted you a usage plan.\n${text}`
    );
  }
  if (res.status === 404) {
    throw new Error(
      `${method} ${path} returned 404. Check that $${ENV_PORTAL_URL} points at the Portal Server ` +
        `REST API (with /v1) — not the developer-portal web UI or the Envoy data-plane.\n${text}`
    );
  }
  if (!res.ok) {
    throw new Error(`${method} ${path} failed: ${res.status} ${text}`);
  }
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// --- portal operations ------------------------------------------------------

// GET /v1/apis  -> array of API products you can see.
async function listApis() {
  const data = await portalRequest({ path: "/apis" });
  return Array.isArray(data) ? data : data?.apis ?? data?.items ?? [];
}

// GET /v1/usage-plans -> array of usage plans (name, apiIds, policies...).
async function listUsagePlans() {
  const data = await portalRequest({ path: "/usage-plans" });
  return Array.isArray(data) ? data : data?.usagePlans ?? data?.items ?? [];
}

// GET /v1/api-keys -> array of UsagePlanKeys { usagePlan, apiKeys: [{ id, name, metadata }] }.
// NOTE: list responses do NOT include the secret `apiKey` value; only POST returns it.
async function listApiKeys() {
  const data = await portalRequest({ path: "/api-keys" });
  return Array.isArray(data) ? data : data?.usagePlanKeys ?? data?.items ?? [];
}

// POST /v1/api-keys  body: { usagePlan, apiKeyName }  -> { id, name, apiKey, metadata }.
async function createApiKey({ usagePlan, apiKeyName }) {
  return portalRequest({
    path: "/api-keys",
    method: "POST",
    body: { usagePlan, apiKeyName },
  });
}

function apiTitle(api) {
  return api?.title ?? api?.apiId ?? api?.id ?? "(untitled)";
}

function planName(plan) {
  return plan?.name ?? plan?.usagePlan ?? plan?.id ?? "(unnamed)";
}

function findExistingKey(usagePlanKeys, usagePlan, apiKeyName) {
  for (const group of usagePlanKeys) {
    if ((group?.usagePlan ?? group?.name) !== usagePlan) continue;
    const keys = group?.apiKeys ?? group?.keys ?? [];
    const match = keys.find((k) => (k?.name ?? k?.apiKeyName) === apiKeyName);
    if (match) return match;
  }
  return null;
}

function printApiKeyResult({ usagePlan, key, existing }) {
  // Mirror the SoundCloud script's `key=value` stdout, adapted to Gloo's credential shape.
  const value = key?.apiKey;
  if (value) {
    process.stdout.write(`api_key=${value}\n`);
  } else if (existing) {
    process.stdout.write(`api_key=<not shown — Gloo returns the key value only at creation>\n`);
  }
  const out = {
    usage_plan: usagePlan,
    api_key_id: key?.id ?? null,
    api_key_name: key?.name ?? key?.apiKeyName ?? null,
    api_key: value ?? null,
    metadata: key?.metadata ?? undefined,
  };
  process.stdout.write("\n" + JSON.stringify(out, null, 2) + "\n");
  if (value) {
    process.stderr.write(
      "\nStore this api_key now. Gloo returns the secret value only once, at creation time;\n" +
        "it cannot be retrieved again — only rotated by creating a new key.\n"
    );
  }
}

// --- main -------------------------------------------------------------------

async function main() {
  // --list: discovery only.
  if (listArg) {
    const [apis, plans] = await Promise.all([listApis(), listUsagePlans()]);
    const apiList = apiArg
      ? apis.filter((a) => apiTitle(a).toLowerCase().includes(apiArg.toLowerCase()))
      : apis;
    console.log("API products you can see:");
    if (apiList.length === 0) console.log("  (none — ask your platform team to publish APIs / grant you access)");
    for (const a of apiList) console.log(`  - ${apiTitle(a)}${a?.description ? `  — ${a.description}` : ""}`);
    console.log("\nUsage plans you can subscribe to:");
    if (plans.length === 0) console.log("  (none — the portal exposes plans only after the operator defines them)");
    for (const p of plans) {
      const ids = p?.apiIds ?? p?.apis ?? [];
      console.log(`  - ${planName(p)}${ids.length ? `  (apis: ${ids.join(", ")})` : ""}`);
    }
    return;
  }

  const usagePlan = planArg;
  if (!usagePlan) {
    console.error("Missing --plan <usage-plan-name>. Run with --list to see the plans available to you.");
    process.exit(1);
  }

  // Validate the plan exists / is visible to this identity before trying to mint a key.
  const plans = await listUsagePlans();
  if (plans.length && !plans.some((p) => planName(p) === usagePlan)) {
    console.error(
      `Usage plan "${usagePlan}" is not in the plans you can see. Available: ` +
        `${plans.map(planName).join(", ") || "(none)"}.`
    );
    console.error(
      "In Gloo, plan visibility/subscription is controlled by the platform team via PortalConfig\n" +
        "and ext-auth. If you expected this plan, you may not be subscribed yet."
    );
    process.exit(1);
  }

  const apiKeyName = nameArg || `agentic-onboarding-${Date.now()}`;

  // Handle the "already have a key with this name" case before creating a duplicate.
  const existingGroups = await listApiKeys();
  const existing = findExistingKey(existingGroups, usagePlan, apiKeyName);
  if (existing) {
    console.error(
      `An API key named "${apiKeyName}" already exists under usage plan "${usagePlan}".\n` +
        `Gloo will not re-reveal its secret value. Pass a different --name to mint a new key.`
    );
    printApiKeyResult({ usagePlan, key: existing, existing: true });
    return;
  }

  const created = await createApiKey({ usagePlan, apiKeyName });
  if (!created || !created.apiKey) {
    throw new Error(
      `Create API key (POST /api-keys) returned no apiKey value.\nResponse: ${JSON.stringify(created)}`
    );
  }
  printApiKeyResult({ usagePlan, key: created, existing: false });
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});
```


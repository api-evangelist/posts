---
published: true
layout: post
title: Kinde Has the Plumbing for Programmatic Onboarding, It Just Skips the Front Door
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/kinde-plumbing-skips-front-door.png
date: 2026-08-07
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Kinde
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that software is going to provision and call software without a human in the loop. Then I go to sign up for their API and the first thing they ask me to do is prove I am a human. Click the boxes. Find the traffic lights. Confirm your email. Wait for someone to flip a switch on your account. The whole industry is sprinting toward an agentic future while keeping the front door bolted shut, and I have spent enough years banging my head against this wall to be a little weary about it.

That is why I keep dragging providers back to the SoundCloud example. A single zero-dependency script that opens a browser, logs you in, registers an application, and hands you a `client_id` and `client_secret` on stdout. That is what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should feel like. No portal spelunking, no copy-paste, no waiting. I want to point this lens at the identity and access vendors next, because if anyone should make credential issuance a first-class API, it is the companies whose entire business is credentials. So this week it is Kinde's turn.

Here is the honest read. Kinde is a bucket-B provider: it has a real, well-documented Management API, and it absolutely can create applications and mint credentials over HTTP. What it does not have is the self-serve OAuth front door from the SoundCloud ideal. There is no RFC 7591 dynamic client registration, no "log in with your Kinde account and register a new client" flow that a brand-new developer or a cold agent can walk up to. Before anything programmatic happens, a human has to go into the Kinde dashboard, create a machine-to-machine application by hand, and authorize it for the Management API. So the chicken-and-egg problem is alive and well: you need a credential to make a credential.

Once you are past that one manual step, though, Kinde is genuinely good, and I will take what I can get. You take that M2M app's `client_id` and `client_secret`, POST them to `https://{your_subdomain}.kinde.com/oauth2/token` with `grant_type=client_credentials`, and the one detail that will trip you up every single time is the audience. It is `https://{your_subdomain}.kinde.com/api` — not `/api/v1`. I lost more minutes than I want to admit to that. That call hands back a management access token, and from there you are in business: `POST /api/v1/applications` with a JSON body of `{ "name": "...", "type": "m2m" }` and a `Bearer` token, and Kinde creates the client and returns the `id`, `client_id`, and `client_secret` right there in the create response. No second round trip to fetch the secret, which is more than I can say for a lot of platforms. The type can be `reg`, `spa`, `m2m`, or `device`, which covers the realistic shapes an agent might need to stand up.

The already-registered case is where you have to do a little more work, and it is worth knowing why. Kinde does not seem to reject duplicate application names, so there is no tidy "you already have one" error to catch. And the list endpoint, `GET /api/v1/applications`, only returns `id`, `name`, and `type` for each app — no secret. So to recover credentials for an existing application you list, match by name, then `GET /api/v1/applications/{id}`, which does return the secret. I wired all of that into the script so the `--reuse` flag does the right thing instead of quietly spawning a pile of duplicate clients.

That script is below, and it is committed in the repo at `/assets/scripts/agentic-onboarding/kinde-api-auth.mjs`. Same spirit as the SoundCloud original: one file, Node 18+ stdlib only, no `npm install`. The one difference forced by Kinde's model is that there is no browser to open — you feed it `KINDE_DOMAIN`, `KINDE_M2M_CLIENT_ID`, and `KINDE_M2M_CLIENT_SECRET` and it mints the management token for you, or you hand it a `KINDE_TOKEN` you already have. It prints `client_id=` / `client_secret=` to stdout exactly like the others.

```javascript
#!/usr/bin/env node
/**
 * kinde-api-auth.mjs
 *
 * Provider: Kinde (https://kinde.com) — auth, access management, and billing platform.
 *
 * What it does:
 *   Creates a new Kinde application (client) via the Kinde Management API and prints its
 *   client_id / client_secret. If an application with the same --name already exists, it
 *   looks it up and returns the existing credentials instead.
 *
 * Auth model (Hypothesis bucket B — Management API + M2M token):
 *   Kinde does NOT offer RFC 7591 Dynamic Client Registration, so there is no browser
 *   OAuth dance here. Instead you create ONE machine-to-machine (M2M) application in the
 *   Kinde dashboard, authorize it for the Kinde Management API with the scopes below, and
 *   feed its credentials to this script via env vars. The script then:
 *     1. POST {KINDE_DOMAIN}/oauth2/token  (grant_type=client_credentials,
 *        audience={KINDE_DOMAIN}/api)  -> management access token
 *        NOTE: the audience is ".../api", NOT ".../api/v1".
 *     2. POST {KINDE_DOMAIN}/api/v1/applications  (Authorization: Bearer <token>)
 *        body { name, type } -> { application: { id, client_id, client_secret } }
 *   Required M2M scopes: create:applications, read:applications.
 *
 * Env vars (choose ONE auth path):
 *   Path A — mint a token from M2M credentials:
 *     KINDE_DOMAIN              e.g. https://your-subdomain.kinde.com  (or just your-subdomain)
 *     KINDE_M2M_CLIENT_ID       client_id of your M2M app
 *     KINDE_M2M_CLIENT_SECRET   client_secret of your M2M app
 *   Path B — paste a pre-obtained management token:
 *     KINDE_DOMAIN              (still required, to build the /api/v1 base URL)
 *     KINDE_TOKEN               a valid management API bearer token
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   https://docs.kinde.com/developer-tools/kinde-api/access-token-for-api/
 *   https://docs.kinde.com/developer-tools/kinde-api/connect-to-kinde-api/
 *   https://docs.kinde.com/kinde-apis/management/  (Applications endpoints)
 *   https://docs.kinde.com/build/applications/about-applications/  (type values)
 */
import { parseArgs } from "node:util";
import process from "node:process";

const APP_TYPES = new Set(["reg", "spa", "m2m", "device"]);
const DEFAULT_TYPE = "m2m";

/** Normalize a subdomain or full URL into a clean origin like https://acme.kinde.com */
function normalizeDomain(raw) {
  if (!raw) return null;
  let v = raw.trim().replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(v)) {
    // Allow passing just the subdomain ("acme") or "acme.kinde.com".
    v = v.includes(".") ? `https://${v}` : `https://${v}.kinde.com`;
  }
  try {
    return new URL(v).origin;
  } catch {
    return null;
  }
}

function bail(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

/** Step 1: client_credentials -> management access token. */
async function mintManagementToken({ domain, clientId, clientSecret }) {
  const tokenUrl = `${domain}/oauth2/token`;
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    // The management API audience is "/api" (NOT "/api/v1").
    audience: `${domain}/api`,
  });
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `Token request (POST ${tokenUrl}) failed: ${res.status} ${text}\n` +
        "Check KINDE_M2M_CLIENT_ID / KINDE_M2M_CLIENT_SECRET, and that the M2M app is\n" +
        "authorized for the Kinde Management API with create:applications + read:applications."
    );
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Token endpoint returned non-JSON: ${text}`);
  }
  if (!json.access_token) {
    throw new Error(`No access_token in token response: ${text}`);
  }
  return json.access_token;
}

/** Thin wrapper for Management API calls (Authorization: Bearer <token>). */
async function kindeApi({ apiBase, token, path, method = "GET", body }) {
  const url = `${apiBase}${path}`;
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
  return { res, url, text: await res.text() };
}

/** Step 2a: create a new application. Returns { id, client_id, client_secret }. */
async function createApplication({ apiBase, token, name, type }) {
  const { res, url, text } = await kindeApi({
    apiBase,
    token,
    path: "/api/v1/applications",
    method: "POST",
    body: { name, type },
  });
  if (!res.ok) {
    throw new Error(`Create application (POST ${url}) failed: ${res.status} ${text}`);
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Create application returned non-JSON: ${text}`);
  }
  const app = json.application;
  if (!app?.client_id) {
    throw new Error(`Create application response missing application.client_id: ${text}`);
  }
  return app; // { id, client_id, client_secret }
}

/**
 * Find an existing application by exact name (paginated).
 * NOTE: list items only contain { id, name, type } — no secret — so the caller must
 * follow up with getApplication() to recover client_secret.
 */
async function findApplicationByName({ apiBase, token, name }) {
  let nextToken;
  do {
    const qs = new URLSearchParams({ page_size: "100", sort: "name_asc" });
    if (nextToken) qs.set("next_token", nextToken);
    const { res, url, text } = await kindeApi({
      apiBase,
      token,
      path: `/api/v1/applications?${qs.toString()}`,
    });
    if (!res.ok) {
      throw new Error(`List applications (GET ${url}) failed: ${res.status} ${text}`);
    }
    const json = JSON.parse(text);
    const match = (json.applications ?? []).find((a) => a?.name === name);
    if (match?.id) return match.id;
    nextToken = json.next_token || undefined;
  } while (nextToken);
  return null;
}

/** Step 2b: fetch full application (incl. client_secret) by id. */
async function getApplication({ apiBase, token, id }) {
  const { res, url, text } = await kindeApi({
    apiBase,
    token,
    path: `/api/v1/applications/${encodeURIComponent(id)}`,
  });
  if (!res.ok) {
    throw new Error(`Get application (GET ${url}) failed: ${res.status} ${text}`);
  }
  const app = JSON.parse(text).application;
  if (!app?.client_id) {
    throw new Error(`Get application response missing application.client_id: ${text}`);
  }
  return app;
}

function formatCredentialOutput(app, { name, type }) {
  const out = {
    id: app.id,
    name: app.name ?? name,
    type: app.type ?? type,
    client_id: app.client_id,
    client_secret: app.client_secret,
  };
  for (const k of Object.keys(out)) {
    if (out[k] === undefined || out[k] === null) delete out[k];
  }
  const lines = [`client_id=${out.client_id}`];
  if (out.client_secret) lines.push(`client_secret=${out.client_secret}`);
  lines.push("", JSON.stringify(out, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, type: typeArg, reuse: reuseArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    type: { type: "string" },
    reuse: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: kinde-api-auth [options]

  Creates a Kinde application via the Management API and prints client_id /
  client_secret. With --reuse, an existing application of the same --name is
  returned instead of creating a duplicate.

Options:
  --name         Required. The application's name.
  --type         Application type: reg | spa | m2m | device  (default: ${DEFAULT_TYPE})
  --reuse        If an app with this --name already exists, return it instead of creating.
  -h, --help

Environment (Path A — mint a token from M2M credentials):
  KINDE_DOMAIN              https://your-subdomain.kinde.com  (or just "your-subdomain")
  KINDE_M2M_CLIENT_ID       client_id of a Management-API-authorized M2M app
  KINDE_M2M_CLIENT_SECRET   its client_secret

Environment (Path B — paste a pre-obtained management token):
  KINDE_DOMAIN              (still required)
  KINDE_TOKEN               a valid Kinde Management API bearer token

  The M2M app must be authorized for the Kinde Management API with at least
  create:applications and read:applications.

  With npm, pass a double dash before flags:  npm start -- --name "My App"
`);
  process.exit(0);
}

if (positionals.length > 0) {
  bail(
    `Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}\n` +
      'If you used npm, put a double dash before the options, e.g.:\n' +
      '  npm start -- --name "My App" --type m2m'
  );
}

const name = nameArg;
const type = typeArg ?? DEFAULT_TYPE;
if (!name) bail('Missing required argument: --name\nExample: node kinde-api-auth.mjs --name "My Agent App" --type m2m');
if (!APP_TYPES.has(type)) {
  bail(`Invalid --type "${type}". Must be one of: ${[...APP_TYPES].join(", ")}`);
}

const domain = normalizeDomain(process.env.KINDE_DOMAIN);
if (!domain) {
  bail(
    "Missing or invalid KINDE_DOMAIN. Set it to your Kinde domain, e.g.\n" +
      "  export KINDE_DOMAIN=https://your-subdomain.kinde.com"
  );
}
const apiBase = domain; // Management endpoints live under {domain}/api/v1

async function resolveToken() {
  if (process.env.KINDE_TOKEN) return process.env.KINDE_TOKEN.trim();
  const clientId = process.env.KINDE_M2M_CLIENT_ID;
  const clientSecret = process.env.KINDE_M2M_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    bail(
      "No credentials found. Provide EITHER:\n" +
        "  - KINDE_M2M_CLIENT_ID and KINDE_M2M_CLIENT_SECRET  (script mints the token), or\n" +
        "  - KINDE_TOKEN                                       (a management bearer token)"
    );
  }
  return mintManagementToken({ domain, clientId, clientSecret });
}

try {
  const token = await resolveToken();

  if (reuseArg) {
    const existingId = await findApplicationByName({ apiBase, token, name });
    if (existingId) {
      const app = await getApplication({ apiBase, token, id: existingId });
      console.error(`Application named "${name}" already exists; returning existing credentials.`);
      process.stdout.write(formatCredentialOutput(app, { name, type }));
      process.exit(0);
    }
  }

  // NOTE: Kinde does not appear to reject duplicate application names at create time, so
  // "already registered" handling here is an explicit --reuse name lookup rather than a
  // reaction to a specific API error code. Verify against your tenant's behavior.
  const created = await createApplication({ apiBase, token, name, type });
  process.stdout.write(formatCredentialOutput(created, { name, type }));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}
```

So where does that leave Kinde against the moment? The plumbing is all there. The Management API is clean, the responses hand back the secret without a runaround, and the data model maps cleanly onto what an agent needs to provision. The gap is the front door. As long as bootstrapping requires a human to hand-create the first M2M app in a dashboard, no agent can onboard to Kinde cold, and that is the exact contradiction I started with. If Kinde wants to fully meet the agentic moment, it should offer a constrained, self-serve registration path — a way for a brand-new caller to obtain a tightly scoped, rate-limited management credential without a human clicking through a console first. Give me that, and the script above stops being a workaround for a manual step and becomes the whole story.

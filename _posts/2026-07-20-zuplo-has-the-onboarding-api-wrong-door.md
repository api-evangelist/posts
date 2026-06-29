---
published: true
layout: post
title: Zuplo Has the Onboarding API, It Just Points It at the Wrong Door
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/zuplo-has-the-onboarding-api-wrong-door.png
date: 2026-07-20
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Zuplo
  - Agents
  - AI
---

I keep coming back to the same wall. Every API company I talk to says they are all in on AI, all in on agents, all in on the future where software talks to software without a human babysitting it. And then to actually get a credential I have to log into a dashboard, click through a wizard, name an application, and copy a secret out of a modal with my own two hands. That is the contradiction of this moment, and I am tired of pretending it isn't one.

So I have been working through the major gateway and management vendors one at a time, rebuilding the little [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) script SoundCloud showed me was possible, and asking each one: can a developer, or an agent, go from nothing to a working credential without a human clicking anything? Zuplo was the one I was most optimistic about. They are loud about being developer-first, and they sell API key management as a core feature. I figured this would be the easy one.

I'll be honest, it was both better and more frustrating than I expected.

Here is what Zuplo gets right, and it is a lot. They have a real, documented onboarding API. The model is clean: a **bucket** holds **consumers**, and a consumer holds one or more **API keys**. There is a single endpoint that does exactly what I want — `POST https://dev.zuplo.com/v1/accounts/{account}/key-buckets/{bucket}/consumers?with-api-key=true`. You send a name, an optional description, some tags and metadata, and Zuplo hands you back a consumer object with the key value right there in the response. One call. Create the identity and mint the credential in the same breath. That is the shape of the thing I have been banging my head against this wall asking everyone else for, and Zuplo just has it sitting there in the docs.

It gets even better on the operator side. With their Zudoku-powered developer portal and monetization turned on, Zuplo will create the consumer and the key automatically when your end user logs in — there is a tidy Auth0 action in their docs that calls the very same endpoint from inside the login flow, and the monetization layer wires plans, metering, and Stripe checkout on top so a consumer can sign up, pick a tier, and walk away with a working key and a subscription. That is genuinely close to the SoundCloud ideal. That is self-service onboarding that scales.

So why am I not throwing a parade?

Because all of that magic is something Zuplo helps *you* build for *your* consumers. It is not how *you* onboard to Zuplo. To call that beautiful consumer endpoint, you need a Developer API key, and you get that exactly one way: you log into the Zuplo Portal, dig into account settings, find the "Zuplo API Keys" section, and copy a long-lived admin token by hand. There is no OAuth handshake. There is no browser dance that bootstraps the first credential. The thing that unlocks fully programmatic onboarding is itself gated behind a manual, point-and-click step. The front door to the automated system is a door you have to open with your hands.

This is the bucket-(b) story, and Zuplo is a strong example of it. The automation is real and the API is excellent, but it assumes you already pasted in a privileged token. So my script reads that token from `ZUPLO_TOKEN`, takes the bucket and account from `ZUPLO_BUCKET` and `ZUPLO_ACCOUNT`, and does the rest the way I wish every vendor did it: create the consumer, ask for the key inline, and because Zuplo doesn't document a clean conflict response when a name already exists, it lists the bucket first and hands back the existing consumer's key instead of failing. Same ergonomics as the SoundCloud version — it prints a `client_id` (the consumer) and a `client_secret` (the key) and the JSON, handles the already-registered case, and never asks you to touch a dashboard once the token is in your environment. It honors `ZUPLO_API_URL` too, so if you've built your own consumer route into a gateway project you can point it there instead of `dev.zuplo.com`.

The script is committed in the repo at `/assets/scripts/agentic-onboarding/zuplo-api-auth.mjs`. Node 18 and up, standard library only, no install.

```javascript
#!/usr/bin/env node
/**
 * zuplo-api-auth.mjs
 *
 * Provider:   Zuplo (API gateway / management; API Key Service)
 * What it does:
 *   Creates (or fetches) a Zuplo API Key *consumer* in a bucket and issues an
 *   API key for it, then prints the credential to stdout. This is Zuplo's
 *   programmatic onboarding surface: the Developer API.
 *
 * Auth model (bucket "b"):
 *   No browser OAuth. You paste a long-lived Zuplo Developer API key (Bearer
 *   token) generated by hand in the Zuplo Portal (account settings ->
 *   "Zuplo API Keys"). That token is account-scoped admin access, NOT a
 *   per-consumer credential.
 *
 * Object model:  Bucket -> Consumer -> API Key(s)
 *
 * Env vars:
 *   ZUPLO_TOKEN    (required)  Zuplo Developer API key, sent as `Bearer <token>`.
 *   ZUPLO_BUCKET   (required)  The API key bucket name (Portal -> Settings ->
 *                              Project Information).
 *   ZUPLO_ACCOUNT  (required)  Your Zuplo account name (Portal -> Settings).
 *   ZUPLO_API_URL  (optional)  Base URL for the consumer API. Defaults to
 *                              https://dev.zuplo.com . Override to point at a
 *                              project's own gateway consumer route if you built one.
 *                              // NOTE: project-local /v1/consumers routes are
 *                              // operator-defined; the documented surface is dev.zuplo.com.
 *
 * Docs:
 *   https://zuplo.com/docs/articles/api-key-api
 *   https://zuplo.com/docs/api/api-keys-consumers
 *   https://zuplo.com/docs/api/api-keys-keys
 *
 * Node 18+ stdlib only (global fetch, node:util). No npm install.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DEFAULT_BASE = "https://dev.zuplo.com";

// Zuplo requires consumer names to match ^[a-z0-9-]{1,128}$
const NAME_PATTERN = /^[a-z0-9-]{1,128}$/;

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 128) || "agent-consumer";
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) {
    console.error(`Missing required environment variable: ${name}`);
    console.error("See -h for the list of required variables.");
    process.exit(1);
  }
  return v.trim();
}

function consumersUrl(base, account, bucket) {
  return new URL(
    `/v1/accounts/${encodeURIComponent(account)}/key-buckets/${encodeURIComponent(bucket)}/consumers`,
    base,
  );
}

async function zuploRequest({ token, url, method = "GET", body }) {
  const headers = { accept: "application/json", authorization: `Bearer ${token}` };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  return { res, text };
}

/** GET the named consumer (if it exists), with key values visible. */
async function findConsumerByName({ token, base, account, bucket, name }) {
  const url = consumersUrl(base, account, bucket);
  url.searchParams.set("limit", "1000");
  url.searchParams.set("offset", "0");
  url.searchParams.set("include-api-keys", "true");
  url.searchParams.set("key-format", "visible");
  const { res, text } = await zuploRequest({ token, url });
  if (!res.ok) {
    throw new Error(`List consumers (GET ${url.pathname}) failed: ${res.status} ${text}`);
  }
  let page;
  try {
    page = JSON.parse(text);
  } catch {
    throw new Error(`Could not parse consumer list response: ${text.slice(0, 300)}`);
  }
  const rows = page?.data ?? page?.consumers ?? [];
  return rows.find((c) => c?.name === name) ?? null;
}

/** POST a new consumer and ask Zuplo to mint a key alongside it. */
async function createConsumer({ token, base, account, bucket, name, description, tags, metadata }) {
  const url = consumersUrl(base, account, bucket);
  url.searchParams.set("with-api-key", "true");
  const body = { name };
  if (description) body.description = description;
  if (tags && Object.keys(tags).length) body.tags = tags;
  if (metadata && Object.keys(metadata).length) body.metadata = metadata;

  const { res, text } = await zuploRequest({ token, url, method: "POST", body });

  if (res.ok) {
    return { consumer: JSON.parse(text), existing: false };
  }
  // No documented 409 on duplicate; treat conflict-ish statuses as "already there".
  if (res.status === 409 || res.status === 422 || res.status === 400) {
    const existing = await findConsumerByName({ token, base, account, bucket, name });
    if (existing) {
      return {
        consumer: existing,
        existing: true,
        notice: `A consumer named "${name}" already exists; returning its current key(s).`,
      };
    }
  }
  throw new Error(`Create consumer (POST ${url.pathname}) failed: ${res.status} ${text}`);
}

function firstKey(consumer) {
  const keys = consumer?.apiKeys ?? [];
  // Prefer a key that still has a visible value.
  const withValue = keys.find((k) => k?.key);
  return withValue ?? keys[0] ?? null;
}

function formatOutput({ consumer, name }) {
  const key = firstKey(consumer);
  const fields = {
    consumer: consumer?.name ?? name,
    bucket: consumer?.bucketName,
    api_key: key?.key ?? null,
    key_id: key?.id,
    expires_on: key?.expiresOn ?? null,
  };
  for (const k of Object.keys(fields)) {
    if (fields[k] === undefined || fields[k] === null) delete fields[k];
  }
  const lines = [];
  if (fields.api_key) {
    // Mirror the SoundCloud script's `client_id=`/`client_secret=` stdout shape.
    lines.push(`client_id=${fields.consumer}`);
    lines.push(`client_secret=${fields.api_key}`);
  } else {
    lines.push(`client_id=${fields.consumer}`);
    lines.push("# No key value was returned (it may be masked, or the consumer");
    lines.push("# pre-existed without a visible key). Issue one in the Zuplo Portal,");
    lines.push("# or re-run after deleting the consumer.");
  }
  lines.push("", JSON.stringify(fields, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, website: siteArg, help: helpArg },
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: false,
});

if (helpArg) {
  console.log(`Usage: zuplo-api-auth [options]

  Creates (or fetches) a Zuplo API Key consumer in a bucket and issues an API
  key, then prints client_id (the consumer name) and client_secret (the key).

  This talks to the Zuplo Developer API. There is NO browser OAuth: you paste a
  Developer API key as a Bearer token via ZUPLO_TOKEN. That token is generated
  by hand in the Zuplo Portal (account settings -> "Zuplo API Keys").

Options:
  --name          Consumer name. Coerced to ^[a-z0-9-]{1,128}$. Default: derived
                  from --description, else "agent-consumer".
  --description   Stored on the consumer (and seeds the name if --name omitted).
  --website       Stored as a tag (website=<url>) for later querying.
  -h, --help

Required environment variables:
  ZUPLO_TOKEN     Zuplo Developer API key (sent as Bearer token).
  ZUPLO_BUCKET    API key bucket name (Portal -> Settings -> Project Information).
  ZUPLO_ACCOUNT   Zuplo account name (Portal -> Settings).

Optional:
  ZUPLO_API_URL   Base URL. Default https://dev.zuplo.com

Example:
  ZUPLO_TOKEN=zpka_... ZUPLO_ACCOUNT=acme ZUPLO_BUCKET=acme-main \\
    node zuplo-api-auth.mjs --name "agent-001" --description "Agent integration"
`);
  process.exit(0);
}

const token = requireEnv("ZUPLO_TOKEN");
const bucket = requireEnv("ZUPLO_BUCKET");
const account = requireEnv("ZUPLO_ACCOUNT");
const base = (process.env.ZUPLO_API_URL && process.env.ZUPLO_API_URL.trim()) || DEFAULT_BASE;

let name = nameArg ? slugify(nameArg) : slugify(descArg || "agent-consumer");
if (!NAME_PATTERN.test(name)) {
  console.error(`Could not derive a valid consumer name (need ${NAME_PATTERN}). Pass --name.`);
  process.exit(1);
}

const tags = {};
if (siteArg) tags.website = siteArg;

(async () => {
  try {
    const { consumer, existing, notice } = await createConsumer({
      token,
      base,
      account,
      bucket,
      name,
      description: descArg,
      tags,
      metadata: {},
    });
    if (existing && notice) console.error(notice);
    process.stdout.write(formatOutput({ consumer, name }));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();
```


What Zuplo should do to fully meet the moment is honestly not far off, because they have done the hard ninety percent already. Give me a way to bootstrap that first Developer API key through a real OAuth flow — a scoped, browser-based grant the way SoundCloud does it — so the very first credential in the chain isn't a copy-and-paste from a settings screen. Zuplo built the engine for programmatic onboarding and then made me start it with a hand crank. Close that last gap and they would have the cleanest agent-onboarding story of anyone I've looked at. Until then I'll take what I can get, paste my token, and let the script do the rest.

---
published: true
layout: post
title: Zoom Gets the Headless Half of Programmatic Onboarding Right
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/zoom-server-to-server-oauth-is-headless.png
date: 2026-08-31
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Zoom
  - Agents
  - AI
---

I keep coming back to the same wall. Every company is "all in on AI" right now, every roadmap has an agent on it, every keynote promises autonomous software that goes off and does the work for you. And then you go to actually wire one of these agents up to their API and the first thing they ask you to do is open a browser, log in as a human, click around a dashboard, and prove you are a person. That contradiction is the whole reason I started writing this series, where I take the SoundCloud script that does [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) the right way and try to reproduce it for one provider after another.

Zoom is an interesting one because it lands in a middle place. It does not give me the full SoundCloud dream, but it gets the part that actually matters for agents more right than most.

Here is the honest shape of it. The SoundCloud ideal is a single file you run that opens a browser, you authenticate once, it registers an application for you, and it prints `client_id` and `client_secret` to your terminal. No dashboard. Zoom cannot do the first part. There is no API to register a Zoom app. You create a "Server-to-Server OAuth" app by hand in the Zoom App Marketplace, you click through the setup, and that screen shows you three values: an account ID, a client ID, and a client secret. That step is web-UI only. I will not pretend otherwise. If you want an app, you go to the dashboard, full stop.

But here is why I will take what I can get with Zoom. Once you have those three values, everything else is genuinely headless. No browser. No human in the loop. No "click to approve." You POST to `https://zoom.us/oauth/token` with `grant_type=account_credentials` and your `account_id` in the query string, and you put your client ID and secret in an HTTP Basic auth header. That is the entire dance. Zoom hands you back an access token that is good for an hour, with a `scope` and an `api_url`, and no refresh token because you just mint a new one when this one expires. Then you call `GET https://api.zoom.us/v2/users/me` with a bearer token and you are confirmed, talking to the account, ready to work.

That is the part agents actually need. An agent does not want to render a login page. An agent wants to read three secrets out of its environment and start making calls. Server-to-Server OAuth is exactly that — machine credentials, machine token, machine API call. It is the difference between an integration that needs a person babysitting it and one that runs unattended at three in the morning. Zoom built the right primitive here. They just gated the very first step behind a human.

So my script for Zoom is honest about which half it automates. It is bucket (b) in my mental taxonomy: a management-style app plus machine credentials you paste in via environment variables. It reads `ZOOM_ACCOUNT_ID`, `ZOOM_CLIENT_ID`, and `ZOOM_CLIENT_SECRET`, mints the token, verifies it against `/v2/users/me`, and prints your `client_id` and the access token to stdout — the same spirit as the SoundCloud tool, just without the browser arc that Zoom does not offer. It has `-h`, a `--json` mode for piping into other tools, and clear error hints when the credentials are wrong. No npm install, Node stdlib only. It is committed in the repo at `/assets/scripts/agentic-onboarding/zoom-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * zoom-api-auth.mjs — Zoom Server-to-Server OAuth.
 * Mints a headless access token (no browser) and verifies with GET /v2/users/me.
 *
 * Auth model: bucket (b) — you create the app ONCE in the Zoom App Marketplace
 * dashboard (web UI only), which gives you account_id + client_id + client_secret.
 * From then on it is scriptable:
 *   POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=...
 *   Authorization: Basic base64(client_id:client_secret)
 *   -> { access_token, token_type, expires_in: 3600, scope, api_url }   (no refresh token)
 *
 * Env vars (all required):
 *   ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET
 *
 * Node 18+ stdlib only (global fetch). Docs:
 *   https://developers.zoom.us/docs/internal-apps/s2s-oauth/
 *   https://developers.zoom.us/docs/internal-apps/create/
 */
import { parseArgs } from "node:util";
import process from "node:process";

const ZOOM_TOKEN_URL = "https://zoom.us/oauth/token";
const ZOOM_API_BASE = "https://api.zoom.us";
const USERS_ME_PATH = "/v2/users/me";

function helpText() {
  return `Usage: zoom-api-auth [options]

  Mints a Zoom Server-to-Server OAuth access token from your app credentials
  (no browser, no user interaction) and verifies it with GET /v2/users/me.

  Reads these environment variables:
    ZOOM_ACCOUNT_ID      numeric account id  (App credentials screen)
    ZOOM_CLIENT_ID       client id           (App credentials screen)
    ZOOM_CLIENT_SECRET   client secret       (App credentials screen)

  You must first create a "Server-to-Server OAuth" app in the Zoom App
  Marketplace dashboard (web UI only). That screen shows the three values above.

Options:
  --json        Print the full token + identity JSON only (machine-friendly).
  --no-verify   Skip the GET /v2/users/me confirmation call.
  -h, --help

Output: prints client_id= and the access token, then the verified identity.
`;
}

function basicAuthHeader(clientId, clientSecret) {
  const raw = `${clientId}:${clientSecret}`;
  return `Basic ${Buffer.from(raw, "utf8").toString("base64")}`;
}

function readEnvCredentials() {
  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;
  const missing = [];
  if (!accountId) missing.push("ZOOM_ACCOUNT_ID");
  if (!clientId) missing.push("ZOOM_CLIENT_ID");
  if (!clientSecret) missing.push("ZOOM_CLIENT_SECRET");
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(", ")}.\n` +
        "Create a Server-to-Server OAuth app at https://marketplace.zoom.us/develop/create\n" +
        "and copy account_id, client_id and client_secret from the App credentials screen."
    );
  }
  return { accountId, clientId, clientSecret };
}

/**
 * Server-to-Server OAuth token mint.
 * POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=...
 * with HTTP Basic client_id:client_secret. No body, no user interaction.
 */
async function mintAccessToken({ accountId, clientId, clientSecret }) {
  const url = new URL(ZOOM_TOKEN_URL);
  url.searchParams.set("grant_type", "account_credentials");
  url.searchParams.set("account_id", accountId);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      authorization: basicAuthHeader(clientId, clientSecret),
      accept: "application/json",
      // Zoom expects the form content-type even though the params are in the query string.
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  const text = await res.text();
  if (!res.ok) {
    let hint = "";
    try {
      const parsed = JSON.parse(text);
      const reason = parsed.reason || parsed.error || parsed.message;
      if (reason) hint = ` — ${reason}`;
      if (parsed.error === "invalid_client") {
        hint += " (check ZOOM_CLIENT_ID / ZOOM_CLIENT_SECRET)";
      }
      if (parsed.reason && /account/i.test(parsed.reason)) {
        hint += " (check ZOOM_ACCOUNT_ID)";
      }
    } catch {
      /* leave raw text */
    }
    throw new Error(
      `Token mint (POST ${ZOOM_TOKEN_URL}) failed: ${res.status}${hint}\n${text}`
    );
  }
  const token = JSON.parse(text);
  if (!token.access_token) {
    throw new Error(`No access_token in token response: ${text}`);
  }
  return token;
}

/**
 * Confirm the token by calling the cluster's /v2/users/me.
 * Zoom returns api_url in the token response; fall back to api.zoom.us.
 */
async function verifyToken({ accessToken, apiUrl }) {
  const base = apiUrl || ZOOM_API_BASE;
  const endpoint = new URL(USERS_ME_PATH, base).toString();
  const res = await fetch(endpoint, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Verify (GET ${endpoint}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

function publicTokenFields(token) {
  const fields = {};
  for (const key of ["token_type", "expires_in", "scope", "api_url"]) {
    if (token[key] !== undefined && token[key] !== null) fields[key] = token[key];
  }
  return fields;
}

function publicIdentityFields(me) {
  if (!me) return undefined;
  const fields = {};
  for (const key of ["id", "account_id", "email", "first_name", "last_name", "type"]) {
    if (me[key] !== undefined && me[key] !== null) fields[key] = me[key];
  }
  return fields;
}

function formatOutput({ clientId, token, me }) {
  const lines = [`client_id=${clientId}`, `access_token=${token.access_token}`, ""];
  const payload = {
    client_id: clientId,
    access_token: token.access_token,
    ...publicTokenFields(token),
  };
  const identity = publicIdentityFields(me);
  if (identity) payload.identity = identity;
  lines.push(JSON.stringify(payload, null, 2), "");
  return lines.join("\n");
}

async function main() {
  const {
    values: { json: jsonArg, "no-verify": noVerifyArg, help: helpArg },
    positionals,
  } = parseArgs({
    options: {
      json: { type: "boolean" },
      "no-verify": { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: true,
  });

  if (helpArg) {
    console.log(helpText());
    return;
  }
  if (positionals.length > 0) {
    console.error(
      `Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`
    );
    console.error("This tool takes no positional arguments; configuration is via env vars. See --help.");
    process.exitCode = 1;
    return;
  }

  const creds = readEnvCredentials();
  const token = await mintAccessToken(creds);

  let me;
  if (!noVerifyArg) {
    me = await verifyToken({ accessToken: token.access_token, apiUrl: token.api_url });
  }

  if (jsonArg) {
    const payload = {
      client_id: creds.clientId,
      access_token: token.access_token,
      ...publicTokenFields(token),
    };
    const identity = publicIdentityFields(me);
    if (identity) payload.identity = identity;
    process.stdout.write(JSON.stringify(payload, null, 2) + "\n");
    return;
  }

  if (me?.email) {
    console.error(`Verified as ${me.email} (account ${me.account_id ?? creds.accountId}).`);
  }
  process.stdout.write(formatOutput({ clientId: creds.clientId, token, me }));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exitCode = 1;
});
```

So what should Zoom do to fully meet the moment? The token flow is already excellent and I want to be clear about that — it is exactly the headless machine-to-machine grant agents need, and a lot of providers in this series do not even have that. The one missing piece is the front door. Give me an API to register a Server-to-Server OAuth app, even a scoped one that only an account admin can call, and the whole arc becomes scriptable end to end. Then an agent could provision its own credentials, mint its own token, and start working without a single human clicking through a marketplace. Right now you have built the engine and left the ignition behind a login screen. I will happily run the half you automated. I would much rather run all of it.

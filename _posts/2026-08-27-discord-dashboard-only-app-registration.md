---
published: true
layout: post
title: What Programmatic Onboarding Looks Like When Discord Won't Let You Register an App
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/discord-dashboard-only-app-registration.png
date: 2026-08-27
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Discord
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that software should be self-driving now. And then I go to get a credential so a piece of software can actually do something, and I am dropped into a web dashboard, asked to click through three tabs, and quietly reminded to prove I am a human being. The contradiction never gets old to me. You want autonomous agents, but you want a person sitting at a browser to set them up.

I have been retrofitting the SoundCloud onboarding script for one provider after another, because SoundCloud got something right that almost nobody else does: it showed what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like. One file, no dependencies, opens a browser for OAuth, registers your application, and prints `client_id=` and `client_secret=` to your terminal. The whole thing is the thing. Register and walk away with working credentials. That is the ideal I measure everyone against now.

So let's talk about Discord. I'll be honest with you up front, because the brief here is honesty: Discord does not meet that ideal, and it is not close. There is no public API to create a Discord application. None. You cannot POST anything to mint a `client_id`, a `client_secret`, or a bot token. The only way to bring an application into existence is to log into the Developer Portal at discord.com/developers/applications, click "New Application," name it, and then dig the Client ID and Client Secret out of the OAuth2 tab by hand. Registration is dashboard-only, full stop. If you came here hoping I found a secret endpoint that does it, I did not, and I would rather tell you that than pretend.

This is the third bucket I keep running into. Some providers give you real dynamic client registration, where a program can register itself. Some give you a management API and a personal access token so at least a script can do the work. And then there are the ones like Discord, where the front door is a human-shaped hole and the machine path simply does not exist. I'll take what I can get with these, but I want to be clear about where the gap is.

Here is what I can automate, and it is not nothing. Once you have manually created the application and copied your two secrets, Discord supports the OAuth2 client_credentials grant. That is the app-only flow, no user, no browser, no consent screen. You send your `client_id` and `client_secret` as HTTP Basic auth to `POST https://discord.com/api/oauth2/token` with `grant_type=client_credentials`, and Discord hands you back a short-lived Bearer token. Then you can call `GET https://discord.com/api/oauth2/@me` to confirm exactly which application that token belongs to, and `GET https://discord.com/api/oauth2/applications/@me` to read the full application object back. So while a machine cannot create the app, a machine can absolutely prove the credentials are real and pull the identity behind them. That is the seam I built the script around.

So my Discord version of the SoundCloud tool does not pretend to register anything. It reads `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` from your environment, runs the client_credentials grant, verifies the token, reads back the application, and prints your credentials plus the access token to stdout. It is the honest version: it automates the half of the story Discord will let you automate, and it says plainly that you did the registration with your own hands first.

```javascript
#!/usr/bin/env node
/**
 * discord-api-auth.mjs
 *
 * Provider:    Discord
 * What it does: Proves a Discord application's credentials work by running the
 *              OAuth2 *client_credentials* grant (app-only bearer token), then
 *              reads back the application identity. Prints client_id / client_secret
 *              and the resulting access token + application object.
 *
 * Honest scope: Discord does NOT expose a public API to *create* an application or
 *              mint client_id / client_secret / bot token. Applications are created
 *              by hand in the Developer Portal:
 *                  https://discord.com/developers/applications
 *              So this script automates the part that *can* be automated: it takes the
 *              credentials you already minted in the dashboard and exercises them.
 *
 * Auth model:  OAuth2 client_credentials grant. HTTP Basic auth with
 *              (client_id, client_secret). No browser, no user, no PKCE — this is the
 *              app-only path. The returned token is a short-lived Bearer token.
 *
 * Env vars:    DISCORD_CLIENT_ID      (required) — from the Developer Portal
 *              DISCORD_CLIENT_SECRET  (required) — from the Developer Portal
 *
 * Doc links:
 *   - OAuth2 (client_credentials):
 *       https://docs.discord.com/developers/topics/oauth2#client-credentials-grant
 *   - Token endpoint:        POST https://discord.com/api/oauth2/token
 *   - Current authorization: GET  https://discord.com/api/oauth2/@me
 *   - Current application:   GET  https://discord.com/api/oauth2/applications/@me
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const DISCORD_API = "https://discord.com/api";
const TOKEN_URL = `${DISCORD_API}/oauth2/token`;
const AUTH_INFO_URL = `${DISCORD_API}/oauth2/@me`;
const APPLICATION_URL = `${DISCORD_API}/oauth2/applications/@me`;

// Default scopes for an app-only token. `identify` + `applications.commands.update`
// are broadly granted to client_credentials tokens; override with --scope if needed.
const DEFAULT_SCOPE = "identify";

const USER_AGENT = "discord-api-auth (https://apievangelist.com, 1.0)";

function basicAuthHeader(clientId, clientSecret) {
  const raw = `${clientId}:${clientSecret}`;
  return `Basic ${Buffer.from(raw, "utf8").toString("base64")}`;
}

/**
 * Run the OAuth2 client_credentials grant.
 * Basic auth with the client_id/client_secret; form-urlencoded body.
 * The token endpoint rejects JSON bodies.
 */
async function clientCredentialsGrant({ clientId, clientSecret, scope }) {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope,
  });
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      authorization: basicAuthHeader(clientId, clientSecret),
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json",
      "user-agent": USER_AGENT,
    },
    body: body.toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(formatTokenError(res.status, text));
  }
  return JSON.parse(text);
}

function formatTokenError(status, text) {
  let detail = text;
  try {
    const json = JSON.parse(text);
    // Discord returns { error, error_description } on the token endpoint.
    if (json.error_description || json.error) {
      detail = json.error_description || json.error;
    }
  } catch {
    /* keep raw text */
  }
  if (status === 401) {
    return (
      `Token request (POST ${TOKEN_URL}) failed: 401 Unauthorized.\n` +
      "Your DISCORD_CLIENT_ID / DISCORD_CLIENT_SECRET were rejected. " +
      "Confirm both values from https://discord.com/developers/applications " +
      "(OAuth2 tab), and that the secret has not been reset.\n" +
      `Details: ${detail}`
    );
  }
  return `Token request (POST ${TOKEN_URL}) failed: ${status} ${detail}`;
}

/** GET an endpoint with the app-only Bearer token. */
async function getWithBearer(url, accessToken) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${accessToken}`,
      accept: "application/json",
      "user-agent": USER_AGENT,
    },
  });
  const text = await res.text();
  return { res, text };
}

async function fetchAuthorizationInfo(accessToken) {
  const { res, text } = await getWithBearer(AUTH_INFO_URL, accessToken);
  if (!res.ok) {
    throw new Error(`Authorization info (GET ${AUTH_INFO_URL}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

async function fetchApplication(accessToken) {
  // NOTE: /oauth2/applications/@me returns the application object for the token's app.
  // With some scope configurations Discord may answer 401/403 here; we degrade
  // gracefully and fall back to the application embedded in /oauth2/@me.
  const { res, text } = await getWithBearer(APPLICATION_URL, accessToken);
  if (!res.ok) {
    return { ok: false, status: res.status, text };
  }
  return { ok: true, application: JSON.parse(text) };
}

function pick(obj, keys) {
  const out = {};
  for (const k of keys) {
    if (obj && obj[k] !== undefined && obj[k] !== null) out[k] = obj[k];
  }
  return out;
}

function formatOutput({ clientId, clientSecret, token, authInfo, application }) {
  const app =
    application || authInfo?.application || {};
  const identity = pick(app, ["id", "name", "description", "bot_public", "verify_key"]);
  // The bot/owner objects are partial user objects; surface just the names.
  if (app.bot?.username) identity.bot = app.bot.username;
  if (app.owner?.username) identity.owner = app.owner.username;

  const summary = {
    client_id: clientId,
    client_secret: clientSecret,
    token_type: token.token_type,
    access_token: token.access_token,
    expires_in: token.expires_in,
    scope: token.scope,
    application: identity,
  };

  const lines = [
    `client_id=${clientId}`,
    `client_secret=${clientSecret}`,
    "",
    `access_token=${token.access_token}`,
    `token_type=${token.token_type}`,
    `expires_in=${token.expires_in}`,
    `scope=${token.scope}`,
    "",
    JSON.stringify(summary, null, 2),
    "",
  ];
  return lines.join("\n");
}

const {
  values: { scope: scopeArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    scope: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: discord-api-auth [options]

  Runs the Discord OAuth2 client_credentials grant to prove your application's
  credentials work, then reads the application identity. Prints client_id,
  client_secret, the app-only access token, and the application object.

  Discord applications cannot be created via API — make one first in the
  Developer Portal (https://discord.com/developers/applications), then copy the
  Client ID and Client Secret from the OAuth2 tab.

Environment:
  DISCORD_CLIENT_ID       Required. Application client id.
  DISCORD_CLIENT_SECRET   Required. Application client secret.

Options:
  --scope    Space-separated OAuth2 scopes (default: "${DEFAULT_SCOPE}")
  -h, --help

Endpoints used:
  POST ${TOKEN_URL}            (client_credentials grant)
  GET  ${AUTH_INFO_URL}             (current authorization)
  GET  ${APPLICATION_URL}   (current application)
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  console.error('If you used npm, put a double dash before the options, e.g.: npm start -- --scope "identify connections"');
  process.exit(1);
}

const clientId = process.env.DISCORD_CLIENT_ID;
const clientSecret = process.env.DISCORD_CLIENT_SECRET;
const scope = scopeArg || DEFAULT_SCOPE;

if (!clientId || !clientSecret) {
  console.error("Missing credentials. Set both DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET.");
  console.error("Get them from https://discord.com/developers/applications (OAuth2 tab).");
  console.error('Example:\n  DISCORD_CLIENT_ID=... DISCORD_CLIENT_SECRET=... node discord-api-auth.mjs --scope "identify connections"');
  process.exit(1);
}

(async () => {
  try {
    const token = await clientCredentialsGrant({ clientId, clientSecret, scope });
    if (!token.access_token) {
      throw new Error("No access_token in token response.");
    }

    // /oauth2/@me always works with a valid bearer token and echoes the application.
    const authInfo = await fetchAuthorizationInfo(token.access_token);

    // Best-effort richer application object; falls back to authInfo.application.
    const appResult = await fetchApplication(token.access_token);
    if (!appResult.ok) {
      console.error(
        `Notice: GET ${APPLICATION_URL} returned ${appResult.status}; ` +
          "using the application object from /oauth2/@me instead."
      );
    }

    process.stdout.write(
      formatOutput({
        clientId,
        clientSecret,
        token,
        authInfo,
        application: appResult.ok ? appResult.application : null,
      })
    );
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();
```

The script is committed in the repo at `/assets/scripts/agentic-onboarding/discord-api-auth.mjs` if you want to run it against your own application.

Here is the hill I will happily die on for Discord. The OAuth2 plumbing is genuinely good. Form-urlencoded token endpoint, clean client_credentials grant, an `/oauth2/@me` introspection endpoint that tells you exactly what your token is. The machinery for an agent to authenticate and identify itself is right there and it works. What is missing is the one step before all of that: letting software create the application in the first place. As long as that lives only behind a portal with a human at the keyboard, Discord is telling agents they are welcome to drive, just as soon as a person finishes parking the car for them. If Discord wants to actually meet the agentic moment, the answer is obvious. Give me an authenticated endpoint that creates an application and returns the credentials, the same way it already hands me a token. The rest of the road is already paved.

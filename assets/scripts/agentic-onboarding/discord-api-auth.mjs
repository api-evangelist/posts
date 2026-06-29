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

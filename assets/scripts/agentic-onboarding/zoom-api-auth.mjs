#!/usr/bin/env node
/**
 * zoom-api-auth.mjs
 *
 * Provider: Zoom (Server-to-Server OAuth).
 *
 * What it does:
 *   Mints a short-lived Zoom access token with NO browser and NO user interaction,
 *   then calls GET /v2/users/me to confirm the credentials work and prints the
 *   account/user identity plus the token. This is the genuinely headless half of
 *   the SoundCloud ideal — perfect for agents and CI.
 *
 * Auth model: bucket (b) — Management/Admin app + machine credentials.
 *   You create a "Server-to-Server OAuth" app ONCE in the Zoom App Marketplace
 *   dashboard (this step is web-UI only — Zoom has no API to register the app).
 *   The dashboard hands you account_id + client_id + client_secret. From then on
 *   everything is scriptable:
 *     POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=...
 *     Authorization: Basic base64(client_id:client_secret)
 *   -> { access_token, token_type, expires_in: 3600, scope, api_url }
 *   There is no refresh token; you just mint a new one each hour.
 *
 * Env vars (all required):
 *   ZOOM_ACCOUNT_ID     numeric account id from the App credentials screen
 *   ZOOM_CLIENT_ID      client id from the App credentials screen
 *   ZOOM_CLIENT_SECRET  client secret from the App credentials screen
 *
 * Node 18+ stdlib only (global fetch). No npm install.
 *
 * Docs:
 *   https://developers.zoom.us/docs/internal-apps/s2s-oauth/   (token flow)
 *   https://developers.zoom.us/docs/internal-apps/create/      (dashboard app creation)
 *   https://developers.zoom.us/docs/api/                       (REST API)
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

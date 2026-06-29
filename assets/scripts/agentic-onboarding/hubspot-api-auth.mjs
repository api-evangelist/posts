#!/usr/bin/env node
/**
 * hubspot-api-auth.mjs
 *
 * Provider:   HubSpot
 * What it does:
 *   HubSpot has NO public API to *create* an application. Public apps are created
 *   in the Developer Account UI (Apps -> Create app); private apps are created in
 *   the HubSpot portal (Settings -> Integrations -> Private Apps). This CLI automates
 *   the parts that ARE scriptable:
 *     1) OAuth (public app): opens the browser to the HubSpot authorize page, catches
 *        the redirect on a local callback, and exchanges the auth code for an
 *        access_token + refresh_token at POST https://api.hubapi.com/oauth/v1/token.
 *     2) Private app: takes an existing pat-... token from the env and verifies it.
 *   In both cases it prints the resulting credentials and verifies the token.
 *
 * Auth model:
 *   Confidential-client OAuth 2.0 authorization-code grant (client_id + client_secret,
 *   server-side; HubSpot does NOT support PKCE) -- OR -- a private-app access token
 *   (pat-na1-... / pat-eu1-...) used as a Bearer token. There is no Dynamic Client
 *   Registration and no app-creation endpoint; that step stays in the dashboard.
 *
 * Env vars:
 *   HUBSPOT_CLIENT_ID       Public app client_id (from your Developer Account app).
 *   HUBSPOT_CLIENT_SECRET   Public app client_secret (same app).
 *   HUBSPOT_TOKEN           Optional. A private-app token (pat-...). If set, the OAuth
 *                           flow is skipped and this token is verified instead.
 *
 * Node.js stdlib only (Node 18+). No npm install.
 *
 * Docs:
 *   https://developers.hubspot.com/docs/apps/legacy-apps/authentication/working-with-oauth
 *   https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/guide
 *   https://developers.hubspot.com/docs/apps/legacy-apps/private-apps/overview
 */
import { spawn } from "node:child_process";
import http from "node:http";
import crypto from "node:crypto";
import { parseArgs } from "node:util";
import process from "node:process";

const HUBSPOT_AUTHORIZE = "https://app.hubspot.com/oauth/authorize";
const HUBSPOT_TOKEN = "https://api.hubapi.com/oauth/v1/token";
const HUBSPOT_TOKEN_INFO = "https://api.hubapi.com/oauth/v1/access-tokens"; // + /{token}
// NOTE: verify -- account-info is used to validate private-app (pat-) tokens, which the
// access-tokens/{token} endpoint is not documented to accept.
const HUBSPOT_ACCOUNT_INFO = "https://api.hubapi.com/account-info/v3/details";

const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";

// Minimal default scope. `oauth` is implied; override with --scope for real apps.
const DEFAULT_SCOPE = "oauth";

function base64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "");
}

function callbackPathVariants(callbackPath) {
  const p = callbackPath;
  if (p === "/") return [p];
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  const noSlash = p.replace(/\/+$/, "") || "/";
  if (p === withSlash) return [noSlash, p];
  return [noSlash, withSlash];
}

function parseRequestQuery(req) {
  const u = new URL(req.url ?? "/", `http://${req.headers.host ?? "127.0.0.1"}`);
  return Object.fromEntries(u.searchParams.entries());
}

function parseRequestPathname(req) {
  const u = new URL(req.url ?? "/", `http://${req.headers.host ?? "127.0.0.1"}`);
  return u.pathname || "/";
}

function sendHtml(res, status, body) {
  if (res.writableEnded) return;
  res.writeHead(status, { "content-type": "text/html; charset=utf-8" });
  res.end(body);
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function doneDoc() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>HubSpot</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Done</h1><p>You can close this tab and return to the terminal.</p></body></html>`;
}

function errorDoc(msg) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Error</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Authorization error</h1><p>${escapeHtml(msg)}</p></body></html>`;
}

function openBrowser(url) {
  let command;
  let args;
  if (process.platform === "darwin") {
    command = "open";
    args = [url];
  } else if (process.platform === "win32") {
    command = "cmd";
    args = ["/c", "start", "", url];
  } else {
    command = "xdg-open";
    args = [url];
  }
  const child = spawn(command, args, { detached: true, stdio: "ignore" });
  child.unref();
}

async function tokenExchange({ clientId, clientSecret, code, redirectUri }) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code,
  });
  const res = await fetch(HUBSPOT_TOKEN, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${HUBSPOT_TOKEN}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

/** Verify an OAuth access token; returns { user, hub_id, hub_domain, scopes, app_id, ... }. */
async function getOAuthTokenInfo(accessToken) {
  const url = `${HUBSPOT_TOKEN_INFO}/${encodeURIComponent(accessToken)}`;
  const res = await fetch(url, { headers: { accept: "application/json" } });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token info (GET ${HUBSPOT_TOKEN_INFO}/{token}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

/** Verify any Bearer token (PAT or OAuth) by reading the account it belongs to. */
async function getAccountInfo(bearerToken) {
  const res = await fetch(HUBSPOT_ACCOUNT_INFO, {
    headers: { accept: "application/json", authorization: `Bearer ${bearerToken}` },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Account info (GET ${HUBSPOT_ACCOUNT_INFO}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

function printCredentials(obj) {
  if (obj.access_token) console.log(`access_token=${obj.access_token}`);
  if (obj.refresh_token) console.log(`refresh_token=${obj.refresh_token}`);
  if (obj.client_id) console.log(`client_id=${obj.client_id}`);
  if (obj.client_secret) console.log(`client_secret=${obj.client_secret}`);
  console.log("");
  console.log(JSON.stringify(obj, null, 2));
  console.log("");
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
  console.log(`Usage: hubspot-api-auth [options]

  HubSpot has no public API to create an application. Create the app first in the
  dashboard, then use this tool for the scriptable parts: the OAuth code->token
  exchange, or verifying a private-app (pat-) token.

  Public-app OAuth (default):
    Set HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET from your Developer Account app,
    and register ${BUNDLED_REDIRECT_URI} as a redirect URL on that app. This opens the
    browser, catches the callback, and prints access_token + refresh_token.

  Private-app token:
    Set HUBSPOT_TOKEN to a pat-... token (Settings -> Integrations -> Private Apps).
    The OAuth flow is skipped and the token is verified instead.

Options:
  --scope     Space-separated OAuth scopes for the public-app flow (default: "${DEFAULT_SCOPE}").
              Must be a subset of the scopes configured on the app.
  -h, --help

Env:
  HUBSPOT_CLIENT_ID      Public app client_id
  HUBSPOT_CLIENT_SECRET  Public app client_secret
  HUBSPOT_TOKEN          Optional private-app token (pat-...). If set, skips OAuth.
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

// -------- Private-app path: verify a pat- token and exit. --------
const patToken = process.env.HUBSPOT_TOKEN;
if (patToken) {
  try {
    const account = await getAccountInfo(patToken);
    console.error("Verified private-app token via account-info.");
    printCredentials({
      token_type: "private_app",
      access_token: patToken,
      portal_id: account.portalId,
      account_type: account.accountType,
      time_zone: account.timeZone,
      ui_domain: account.uiDomain,
    });
    process.exit(0);
  } catch (e) {
    console.error("Error verifying HUBSPOT_TOKEN:", e?.message || e);
    process.exit(1);
  }
}

// -------- Public-app OAuth path. --------
const clientId = process.env.HUBSPOT_CLIENT_ID;
const clientSecret = process.env.HUBSPOT_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error(
    "Missing HUBSPOT_CLIENT_ID / HUBSPOT_CLIENT_SECRET.\n" +
      "Create a public app in your HubSpot Developer Account (Apps -> Create app),\n" +
      `register ${BUNDLED_REDIRECT_URI} as a redirect URL, then export client_id/secret.\n` +
      "Or set HUBSPOT_TOKEN to a private-app (pat-) token to skip OAuth."
  );
  process.exit(1);
}

const scope = scopeArg || DEFAULT_SCOPE;
const state = base64url(crypto.randomBytes(24));
const callbackPaths = new Set(callbackPathVariants(CALLBACK_PATH));

let server;
let callbackHandled = false;

const p = new Promise((resolve, reject) => {
  const finish = (err, result) => {
    if (callbackHandled) return;
    callbackHandled = true;
    if (err) reject(err);
    else resolve(result);
  };

  const handleOAuthCallback = async (req, res) => {
    try {
      const query = parseRequestQuery(req);
      const { code, state: st, error, error_description: ed } = query;
      if (error) {
        sendHtml(res, 400, errorDoc(String(ed || error)));
        finish(new Error(String(ed || error)));
        return;
      }
      if (typeof code !== "string" || !code) {
        sendHtml(res, 400, errorDoc("Missing code in callback."));
        finish(new Error("Missing authorization code."));
        return;
      }
      if (st !== state) {
        sendHtml(res, 400, errorDoc("Invalid state parameter (CSRF)."));
        finish(new Error("State mismatch."));
        return;
      }
      const tokens = await tokenExchange({
        clientId,
        clientSecret,
        code,
        redirectUri: BUNDLED_REDIRECT_URI,
      });
      if (!tokens.access_token) {
        finish(new Error("No access_token in token response."));
        return;
      }
      let info = null;
      try {
        info = await getOAuthTokenInfo(tokens.access_token);
      } catch {
        /* verification is best-effort; tokens are still valid */
      }
      sendHtml(res, 200, doneDoc());
      finish(null, { tokens, info });
    } catch (e) {
      sendHtml(res, 500, errorDoc(e.message));
      finish(e);
    }
  };

  server = http.createServer((req, res) => {
    const pathname = parseRequestPathname(req);
    if (!callbackPaths.has(pathname)) {
      sendHtml(res, 404, errorDoc("Not found."));
      return;
    }
    if (req.method !== "GET") {
      sendHtml(res, 405, errorDoc("Method not allowed."));
      return;
    }
    void handleOAuthCallback(req, res);
  });

  server.listen(CALLBACK_PORT, CALLBACK_HOST, () => {
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: BUNDLED_REDIRECT_URI,
      scope,
      state,
    });
    const authUrl = `${HUBSPOT_AUTHORIZE}?${params.toString()}`;
    console.log("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
    const idle = setTimeout(() => {
      console.error("Timed out waiting for HubSpot callback (10 minutes).");
      server?.close();
      process.exit(1);
    }, 10 * 60 * 1000);
    p.then(
      (result) => {
        clearTimeout(idle);
        const { tokens, info } = result;
        const out = {
          token_type: "oauth",
          client_id: clientId,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_in: tokens.expires_in,
        };
        if (info) {
          out.hub_id = info.hub_id;
          out.hub_domain = info.hub_domain;
          out.user = info.user;
          out.scopes = info.scopes;
          out.app_id = info.app_id;
        }
        printCredentials(out);
        server?.close();
        process.exit(0);
      },
      (e) => {
        clearTimeout(idle);
        console.error("Error:", e?.message || e);
        server?.close();
        process.exit(1);
      }
    );
    try {
      openBrowser(authUrl);
    } catch {
      /* user can paste URL */
    }
  });

  server.on("error", (e) => {
    console.error("Could not start local server:", e.message);
    process.exit(1);
  });
});

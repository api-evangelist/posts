#!/usr/bin/env node
/**
 * notion-api-auth.mjs
 *
 * Provider:   Notion (https://developers.notion.com)
 * What it does:
 *   Notion has NO public API to create an integration or mint its token — you
 *   click to create one in the dashboard (https://www.notion.so/my-integrations).
 *   So this is a meta-case (bucket b): you paste a token, this tool VERIFIES it
 *   and prints the identity/workspace it is bound to. If you also pass public
 *   integration client credentials, it can run the OAuth code->token exchange
 *   and print the resulting workspace access token (client_id/client_secret
 *   themselves still come from the dashboard).
 *
 * Auth model:
 *   - Internal integration secret (static): Authorization: Bearer ntn_... / secret_...
 *   - Public integration: OAuth 2.0 (authorize in browser, then POST /v1/oauth/token
 *     with HTTP Basic client_id:client_secret to exchange the code).
 *   - EVERY request requires the Notion-Version header.
 *
 * Env vars:
 *   NOTION_TOKEN            Internal integration secret (ntn_... or secret_...). Default mode.
 *   NOTION_VERSION          Notion-Version header value. Default 2022-06-28.
 *   NOTION_CLIENT_ID        Public integration client id (OAuth mode).
 *   NOTION_CLIENT_SECRET    Public integration client secret (OAuth mode).
 *
 * Doc links:
 *   Authorization:   https://developers.notion.com/docs/authorization
 *   GET /users/me:   https://developers.notion.com/reference/get-self
 *   OAuth token:     https://developers.notion.com/reference/create-a-token
 *   Versioning:      https://developers.notion.com/reference/versioning
 *   Create an integration (dashboard, manual):
 *                    https://developers.notion.com/docs/create-a-notion-integration
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const NOTION_API = "https://api.notion.com";
const USERS_ME_URL = new URL("/v1/users/me", NOTION_API).toString();
const OAUTH_AUTHORIZE = new URL("/v1/oauth/authorize", NOTION_API).toString();
const OAUTH_TOKEN = new URL("/v1/oauth/token", NOTION_API).toString();
const DEFAULT_NOTION_VERSION = "2022-06-28";

// Fixed local callback used for the public-integration OAuth flow.
// Register this exact URL as a redirect URI on your integration in the dashboard.
const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";

const DASHBOARD_URL = "https://www.notion.so/my-integrations";

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
<html><head><meta charset="utf-8"><title>Notion</title>
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

/** Every Notion request needs the Notion-Version header. Bearer for both internal + OAuth tokens. */
async function notionRequest({ token, endpoint, method = "GET", notionVersion }) {
  const res = await fetch(endpoint, {
    method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      "Notion-Version": notionVersion,
    },
  });
  return { res, text: await res.text() };
}

async function verifyIdentity({ token, notionVersion }) {
  const { res, text } = await notionRequest({ token, endpoint: USERS_ME_URL, notionVersion });
  if (res.status === 401) {
    throw new Error(
      `Token rejected by GET ${USERS_ME_URL} (401). The secret is wrong, revoked, or not an integration token.\n` +
        `Create or copy one in the dashboard: ${DASHBOARD_URL}`
    );
  }
  if (res.status === 400 && /notion[-_ ]?version/i.test(text)) {
    throw new Error(
      `GET ${USERS_ME_URL} rejected the Notion-Version header "${notionVersion}". ` +
        `Set NOTION_VERSION to a supported value (default ${DEFAULT_NOTION_VERSION}).`
    );
  }
  if (!res.ok) {
    throw new Error(`Identity check (GET ${USERS_ME_URL}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

/** Public-integration OAuth: exchange the authorization code for a workspace access token. */
async function oauthTokenExchange({ clientId, clientSecret, code, redirectUri }) {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch(OAUTH_TOKEN, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Basic ${basic}`,
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${OAUTH_TOKEN}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

function formatIdentityOutput(me) {
  const bot = me?.bot ?? {};
  const owner = bot.owner ?? {};
  const ownerKind = owner.type === "user" ? "user" : owner.workspace ? "workspace" : (owner.type || "unknown");
  const fields = {
    object: me?.object,
    id: me?.id,
    name: me?.name ?? null,
    type: me?.type,
    workspace_name: bot.workspace_name ?? null,
    workspace_id: bot.workspace_id ?? null,
    owner: ownerKind,
  };
  const lines = [
    `bot_id=${fields.id ?? ""}`,
    `workspace_name=${fields.workspace_name ?? ""}`,
    `workspace_id=${fields.workspace_id ?? ""}`,
    "",
    JSON.stringify(fields, null, 2),
    "",
  ];
  return lines.join("\n");
}

function formatTokenOutput(tok) {
  const fields = {
    access_token: tok.access_token,
    token_type: tok.token_type,
    bot_id: tok.bot_id,
    workspace_id: tok.workspace_id,
    workspace_name: tok.workspace_name,
    workspace_icon: tok.workspace_icon,
    owner: tok.owner,
    duplicated_template_id: tok.duplicated_template_id,
  };
  for (const k of Object.keys(fields)) if (fields[k] === undefined) delete fields[k];
  const lines = [
    `access_token=${tok.access_token ?? ""}`,
    `bot_id=${tok.bot_id ?? ""}`,
    `workspace_id=${tok.workspace_id ?? ""}`,
    "",
    JSON.stringify(fields, null, 2),
    "",
  ];
  return lines.join("\n");
}

const {
  values: { oauth: oauthFlag, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    oauth: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: notion-api-auth [--oauth]

  Notion does NOT expose an API to create an integration or mint its token.
  You create the integration by hand in the dashboard (${DASHBOARD_URL}),
  then this tool verifies/uses the credential.

Default (internal integration secret):
  Reads NOTION_TOKEN, calls GET ${USERS_ME_URL}, and prints the bot identity
  and workspace it is bound to.

--oauth (public integration):
  Opens the Notion authorization page, receives the redirect on a local server
  (${BUNDLED_REDIRECT_URI}), then POSTs ${OAUTH_TOKEN}
  with Basic client_id:client_secret to exchange the code and prints the
  resulting workspace access token.

Environment:
  NOTION_TOKEN           Internal integration secret (ntn_... or secret_...).   [default mode]
  NOTION_VERSION         Notion-Version header. Default ${DEFAULT_NOTION_VERSION}.
  NOTION_CLIENT_ID       Public integration client id.        [--oauth mode]
  NOTION_CLIENT_SECRET   Public integration client secret.    [--oauth mode]

Docs: https://developers.notion.com/docs/authorization
`);
  process.exit(0);
}

const notionVersion = process.env.NOTION_VERSION || DEFAULT_NOTION_VERSION;

async function runInternalMode() {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.error(
      "Missing NOTION_TOKEN. Notion has no API to create an integration — create one in the dashboard\n" +
        `and copy its secret (ntn_... / secret_...):\n  ${DASHBOARD_URL}\n` +
        'Then: NOTION_TOKEN="ntn_..." node notion-api-auth.mjs'
    );
    process.exit(1);
  }
  const me = await verifyIdentity({ token, notionVersion });
  if (me?.type !== "bot") {
    console.error(
      "Warning: this token resolves to a person, not a bot/integration. " +
        "Use an integration secret from " + DASHBOARD_URL + "."
    );
  }
  process.stdout.write(formatIdentityOutput(me));
}

async function runOAuthMode() {
  const clientId = process.env.NOTION_CLIENT_ID;
  const clientSecret = process.env.NOTION_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    console.error(
      "--oauth needs NOTION_CLIENT_ID and NOTION_CLIENT_SECRET (from your PUBLIC integration in the dashboard).\n" +
        `These are minted by Notion, not by this script: ${DASHBOARD_URL}\n` +
        `Also register the redirect URI ${BUNDLED_REDIRECT_URI} on that integration.`
    );
    process.exit(1);
  }

  const state = base64url(crypto.randomBytes(24));
  const callbackPaths = new Set(callbackPathVariants(CALLBACK_PATH));
  let server;
  let handled = false;

  const result = await new Promise((resolve, reject) => {
    const finish = (err, value) => {
      if (handled) return;
      handled = true;
      if (err) reject(err);
      else resolve(value);
    };

    const handleCallback = async (req, res) => {
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
        const tokens = await oauthTokenExchange({
          clientId,
          clientSecret,
          code,
          redirectUri: BUNDLED_REDIRECT_URI,
        });
        if (!tokens.access_token) {
          sendHtml(res, 500, errorDoc("No access_token in token response."));
          finish(new Error("No access_token in token response."));
          return;
        }
        sendHtml(res, 200, doneDoc());
        finish(null, tokens);
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
      void handleCallback(req, res);
    });

    server.on("error", (e) => finish(new Error(`Could not start local server: ${e.message}`)));

    server.listen(CALLBACK_PORT, CALLBACK_HOST, () => {
      const params = new URLSearchParams({
        client_id: clientId,
        response_type: "code",
        owner: "user",
        redirect_uri: BUNDLED_REDIRECT_URI,
        state,
      });
      const authUrl = `${OAUTH_AUTHORIZE}?${params.toString()}`;
      console.error("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
      setTimeout(() => finish(new Error("Timed out waiting for Notion callback (10 minutes).")), 10 * 60 * 1000);
      try {
        openBrowser(authUrl);
      } catch {
        /* user can paste the URL */
      }
    });
  });

  server?.close();
  process.stdout.write(formatTokenOutput(result));
}

(oauthFlag ? runOAuthMode() : runInternalMode()).catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

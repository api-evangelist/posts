#!/usr/bin/env node
/**
 * atlassian-api-auth.mjs
 *
 * Provider: Atlassian (Jira / Confluence Cloud), OAuth 2.0 (3LO).
 * What it does: runs the Atlassian OAuth 2.0 authorization-code flow in your
 *   browser against a fixed local callback, exchanges the code for an access
 *   token, then lists the Atlassian sites (cloudids) the token can reach via
 *   /oauth/token/accessible-resources. Prints client_id + the token + resources.
 *
 * Auth model: confidential OAuth 2.0 client. You create the app MANUALLY in the
 *   Atlassian Developer Console (there is no API to create an app / mint a
 *   client_id). The console gives you a client_id and client_secret; this CLI
 *   automates everything after that.
 *
 * Before you run:
 *   1. https://developer.atlassian.com/  -> profile -> Developer console
 *      -> Create -> OAuth 2.0 integration.
 *   2. Permissions: add Jira and/or Confluence scopes you need.
 *   3. Authorization: set the callback URL to EXACTLY:
 *        http://127.0.0.1:8765/callback
 *   4. Settings: copy the Client ID and Secret into your environment.
 *
 * Env vars (required):
 *   ATLASSIAN_CLIENT_ID       - app Client ID from the Developer Console
 *   ATLASSIAN_CLIENT_SECRET   - app Secret from the Developer Console
 *
 * Node 18+ stdlib only (no npm dependencies).
 *
 * Docs:
 *   https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/
 *   https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/
 *   API tokens (Basic-auth alternative, also manual):
 *   https://id.atlassian.com/manage-profile/security/api-tokens
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const ATLASSIAN_AUTHORIZE = "https://auth.atlassian.com/authorize";
const ATLASSIAN_TOKEN = "https://auth.atlassian.com/oauth/token";
const ACCESSIBLE_RESOURCES = "https://api.atlassian.com/oauth/token/accessible-resources";
const AUDIENCE = "api.atlassian.com";

const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";

// offline_access gives you a refresh_token. The read:* scopes are harmless
// defaults so accessible-resources returns at least one site; override with --scope.
const DEFAULT_SCOPE = "read:jira-user read:me offline_access";

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

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function parseUrlEncodedBody(body) {
  if (!body) return {};
  return Object.fromEntries(new URLSearchParams(body).entries());
}

function readOAuthCallbackParams({ query, body }) {
  return {
    code: query.code ?? body.code,
    state: query.state ?? body.state,
    error: query.error ?? body.error,
    error_description: query.error_description ?? body.error_description,
  };
}

function sendHtml(res, status, body) {
  if (res.writableEnded) return;
  res.writeHead(status, { "content-type": "text/html; charset=utf-8" });
  res.end(body);
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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

/**
 * Confidential-client token exchange. Atlassian expects a JSON body here.
 */
async function tokenExchange({ clientId, clientSecret, code, redirectUri }) {
  const res = await fetch(ATLASSIAN_TOKEN, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${ATLASSIAN_TOKEN}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

/**
 * The closest thing Atlassian gives you to "your registered resources": the
 * sites this token can reach. The `id` of each is the cloudid you put in
 * https://api.atlassian.com/ex/jira/{cloudid}/...
 */
async function getAccessibleResources({ accessToken }) {
  const res = await fetch(ACCESSIBLE_RESOURCES, {
    headers: { accept: "application/json", authorization: `Bearer ${accessToken}` },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Accessible resources (GET ${ACCESSIBLE_RESOURCES}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

function formatOutput({ clientId, tokens, resources, scope }) {
  const lines = [];
  // No client_secret is ever minted here (you supplied it), so we echo client_id
  // and the access token, matching the spirit of "print the credentials".
  lines.push(`client_id=${clientId}`);
  lines.push(`access_token=${tokens.access_token}`);
  if (tokens.refresh_token) lines.push(`refresh_token=${tokens.refresh_token}`);
  lines.push("");
  const payload = {
    client_id: clientId,
    token_type: tokens.token_type,
    expires_in: tokens.expires_in,
    scope: tokens.scope || scope,
    access_token: tokens.access_token,
    ...(tokens.refresh_token ? { refresh_token: tokens.refresh_token } : {}),
    accessible_resources: (resources || []).map((r) => ({
      cloudid: r.id,
      name: r.name,
      url: r.url,
      scopes: r.scopes,
    })),
  };
  lines.push(JSON.stringify(payload, null, 2), "");
  if (!resources || resources.length === 0) {
    lines.push(
      "(No accessible resources yet. Either the granted scopes don't map to a",
      " product site, or you have not added this app to an Atlassian site. The",
      " token is still valid; add product scopes and re-run.)",
      ""
    );
  }
  return lines.join("\n");
}

function mainDoc() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Atlassian</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Done</h1><p>You can close this tab and return to the terminal.</p></body></html>`;
}

function errorDoc(msg) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Error</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Authorization error</h1><p>${escapeHtml(msg)}</p></body></html>`;
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

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: atlassian-api-auth [options]

  Runs the Atlassian OAuth 2.0 (3LO) authorization-code flow in your browser
  against a fixed local callback (${BUNDLED_REDIRECT_URI}), exchanges the code
  for an access token, then lists the sites (cloudids) the token can reach and
  prints everything.

  Atlassian has NO API to create an OAuth app. Create it once in the Developer
  Console, then this CLI automates the rest.

Setup (one time):
  1. https://developer.atlassian.com/  -> profile -> Developer console
     -> Create -> OAuth 2.0 integration.
  2. Permissions: add the Jira/Confluence scopes you need.
  3. Authorization: set the callback URL to ${BUNDLED_REDIRECT_URI}
  4. Settings: copy the Client ID and Secret.

Env vars (required):
  ATLASSIAN_CLIENT_ID
  ATLASSIAN_CLIENT_SECRET

Options:
  --scope    Space-separated OAuth scopes. Default: "${DEFAULT_SCOPE}"
  -h, --help

Docs: https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/
`);
  process.exit(0);
}

const clientId = process.env.ATLASSIAN_CLIENT_ID;
const clientSecret = process.env.ATLASSIAN_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error("Missing ATLASSIAN_CLIENT_ID and/or ATLASSIAN_CLIENT_SECRET in the environment.");
  console.error("Create the app in the Developer Console first:");
  console.error("  https://developer.atlassian.com/  -> Developer console -> Create -> OAuth 2.0 integration");
  console.error("Then: export ATLASSIAN_CLIENT_ID=... ATLASSIAN_CLIENT_SECRET=...");
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
      const rawBody = req.method === "POST" ? await readRequestBody(req) : "";
      const body = parseUrlEncodedBody(rawBody);
      const { code, state: st, error, error_description: ed } = readOAuthCallbackParams({ query, body });
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
        finish(new Error("No access_token in token response"));
        return;
      }
      let resources = [];
      try {
        resources = await getAccessibleResources({ accessToken: tokens.access_token });
      } catch (e) {
        // Non-fatal: the token is good even if resource enumeration fails.
        console.error("Warning:", e.message);
      }
      sendHtml(res, 200, mainDoc());
      finish(null, { tokens, resources });
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
    if (req.method !== "GET" && req.method !== "POST") {
      sendHtml(res, 405, errorDoc("Method not allowed."));
      return;
    }
    void handleOAuthCallback(req, res);
  });

  server.listen(CALLBACK_PORT, CALLBACK_HOST, () => {
    const params = new URLSearchParams({
      audience: AUDIENCE,
      client_id: clientId,
      scope,
      redirect_uri: BUNDLED_REDIRECT_URI,
      state,
      response_type: "code",
      prompt: "consent",
    });
    const authUrl = `${ATLASSIAN_AUTHORIZE}?${params.toString()}`;
    console.log("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
    const idle = setTimeout(
      () => {
        console.error("Timed out waiting for Atlassian callback (10 minutes).");
        server?.close();
        process.exit(1);
      },
      10 * 60 * 1000
    );
    p.then(
      (result) => {
        clearTimeout(idle);
        process.stdout.write(
          formatOutput({ clientId, tokens: result.tokens, resources: result.resources, scope })
        );
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
    if (e.code === "EADDRINUSE") {
      console.error(`Local callback port ${CALLBACK_PORT} is already in use. Free it and re-run.`);
    } else {
      console.error("Could not start local server:", e.message);
    }
    process.exit(1);
  });
});

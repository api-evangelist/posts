#!/usr/bin/env node
/**
 * salesforce-api-auth.mjs
 *
 * Provider: Salesforce
 *
 * What it does:
 *   Runs the Salesforce OAuth 2.0 web server flow (authorization code + PKCE) against an
 *   EXISTING connected app. It opens a browser to login.salesforce.com, receives the redirect
 *   on a fixed local callback (http://127.0.0.1:8765/callback), exchanges the code at the token
 *   endpoint, and prints the org access_token + instance_url (and refresh_token if granted).
 *
 *   Then, as a convenience, it queries the Tooling API to echo back the consumer key
 *   (client_id) of the connected app you authorized with. (Salesforce does NOT return the
 *   consumer SECRET over the API for security reasons — it can only be revealed/rotated in
 *   Setup or via the Connect REST "credentials" endpoint by an admin. See NOTE below.)
 *
 * Auth model:
 *   OAuth 2.0 web server flow (RFC 6749 authorization_code) with PKCE (RFC 7636).
 *   - authorize: {SF_LOGIN_URL}/services/oauth2/authorize
 *   - token:     {SF_LOGIN_URL}/services/oauth2/token
 *   Unlike SoundCloud, you must supply the connected app's consumer key/secret yourself —
 *   Salesforce has no public, anonymous "create me an app" endpoint reachable before you
 *   already hold an org session.
 *
 * Env vars:
 *   SF_CLIENT_ID      Required. Connected app consumer key (client_id).
 *   SF_CLIENT_SECRET  Optional. Connected app consumer secret. Required unless your connected
 *                     app is configured for PKCE-only / "secret not required for web server flow".
 *   SF_LOGIN_URL      Optional. Defaults to https://login.salesforce.com
 *                     Use https://test.salesforce.com for sandboxes, or your My Domain URL.
 *
 * Doc links:
 *   - OAuth 2.0 Web Server Flow:
 *     https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_web_server_flow.htm&type=5
 *   - PKCE with web server flow: https://dailysfdc.com/web-server-flow-with-pkce/
 *   - ConnectedApp Metadata type (the programmatic create-an-app path):
 *     https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_connectedapp.htm
 *
 * ---------------------------------------------------------------------------------------------
 * THE FULL "CREATE AN APP" PATH (documented, not implemented here — it's heavyweight):
 *
 *   Salesforce IS one of the few SaaS platforms with a real create-an-app API. A connected app
 *   is the metadata type `ConnectedApp` (file suffix `.connectedApp`). You can create one by:
 *
 *   1. Metadata API deploy (SOAP/zip): build a package with a `connectedApps/<Name>.connectedApp`
 *      file containing <ConnectedApp> + <oauthConfig> (callbackUrl, scopes, consumerKey...) and
 *      POST it to the Metadata API deploy() endpoint with an admin access token. Salesforce
 *      generates the consumerKey/consumerSecret on create.
 *      Type ref: https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_connectedapp.htm
 *
 *   2. Tooling API: POST to
 *        {instance_url}/services/data/vXX.0/tooling/sobjects/ConnectedApplication
 *      (or use the MetadataContainer/ContainerAsyncRequest deploy pattern). Same result.
 *
 *   Both require: (a) you already authenticated to the org (which is exactly what THIS script
 *   gets you — an access_token + instance_url), and (b) "Customize Application" / "Modify
 *   Metadata" permissions. The newly created app's consumerSecret can then be revealed via the
 *   Connect REST API:
 *        GET {instance_url}/services/data/vXX.0/connect/oauth/connected-app/<appId>/credentials
 *   (admin-only). So the END-TO-END create-and-print-secret loop is achievable, but it needs a
 *   multipart Metadata deploy or a privileged Tooling sObject insert — too much for one stdlib
 *   file to do robustly across orgs. So this CLI nails the reachable, repeatable half: the
 *   browser OAuth handshake that yields a usable org token, which is the gate to everything else.
 * ---------------------------------------------------------------------------------------------
 *
 * Node.js stdlib only (no npm dependencies). Node 18+ (uses global fetch / parseArgs).
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const SF_LOGIN_URL = (process.env.SF_LOGIN_URL || "https://login.salesforce.com").replace(/\/+$/, "");
const SF_AUTHORIZE = `${SF_LOGIN_URL}/services/oauth2/authorize`;
const SF_TOKEN = `${SF_LOGIN_URL}/services/oauth2/token`;

const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";

const API_VERSION = "60.0";

function base64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "");
}

function newPkcePair() {
  const codeVerifier = base64url(crypto.randomBytes(32));
  const codeChallenge = base64url(crypto.createHash("sha256").update(codeVerifier).digest());
  return { codeVerifier, codeChallenge };
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

async function tokenExchange({ clientId, clientSecret, code, codeVerifier, redirectUri }) {
  const params = {
    grant_type: "authorization_code",
    client_id: clientId,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
    code,
  };
  // Salesforce requires client_secret for the web server flow unless the connected app is set
  // to not require a secret (PKCE-only). Include it when present.
  if (clientSecret) params.client_secret = clientSecret;
  const body = new URLSearchParams(params);
  const res = await fetch(SF_TOKEN, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${SF_TOKEN}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

/**
 * Echo back the connected app's consumer key via the Tooling API as a sanity check.
 * Returns the client_id we already have on success; null (with a soft warning) on failure,
 * since this is a nice-to-have, not the point of the script.
 *
 * NOTE: verify — querying ConnectedApplication via Tooling exposes only metadata, NOT the
 * consumerSecret. Salesforce never returns the secret over the standard data/Tooling API.
 */
async function echoConnectedAppKey({ accessToken, instanceUrl, clientId }) {
  try {
    const soql = encodeURIComponent("SELECT Id, Name FROM ConnectedApplication LIMIT 25");
    const url = `${instanceUrl}/services/data/v${API_VERSION}/tooling/query/?q=${soql}`;
    const res = await fetch(url, {
      headers: { authorization: `Bearer ${accessToken}`, accept: "application/json" },
    });
    if (!res.ok) return { client_id: clientId, verified: false };
    const data = await res.json();
    const count = Array.isArray(data.records) ? data.records.length : 0;
    return { client_id: clientId, verified: count > 0, app_count: count };
  } catch {
    return { client_id: clientId, verified: false };
  }
}

function formatCredentialOutput({ clientId, tokens, keyInfo }) {
  const out = {
    client_id: clientId,
    instance_url: tokens.instance_url,
    access_token: tokens.access_token,
    token_type: tokens.token_type,
    id: tokens.id,
    scope: tokens.scope,
  };
  if (tokens.refresh_token) out.refresh_token = tokens.refresh_token;
  const lines = [`client_id=${clientId}`];
  if (tokens.instance_url) lines.push(`instance_url=${tokens.instance_url}`);
  if (tokens.access_token) lines.push(`access_token=${tokens.access_token}`);
  if (tokens.refresh_token) lines.push(`refresh_token=${tokens.refresh_token}`);
  if (keyInfo && keyInfo.verified === false) {
    lines.push("# note: could not confirm ConnectedApplication via Tooling API (permissions?)");
  }
  lines.push("", JSON.stringify(out, null, 2), "");
  return lines.join("\n");
}

function mainDoc() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Salesforce</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Done</h1><p>You can close this tab and return to the terminal.</p></body></html>`;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
  console.log(`Usage: salesforce-api-auth [options]

  Runs the Salesforce OAuth 2.0 web server flow (authorization code + PKCE) against an
  existing connected app. Opens a browser to ${SF_LOGIN_URL}, receives the redirect on a
  local server, exchanges the code, and prints access_token + instance_url.

Options:
  --scope     Optional. Space-separated OAuth scopes (default: "api refresh_token").
  -h, --help

Environment:
  SF_CLIENT_ID      Required. Connected app consumer key (client_id).
  SF_CLIENT_SECRET  Optional. Connected app consumer secret (required unless PKCE-only app).
  SF_LOGIN_URL      Optional. Default https://login.salesforce.com
                    (use https://test.salesforce.com for sandboxes, or your My Domain URL).

  The connected app's OAuth callback URL must include: ${BUNDLED_REDIRECT_URI}

  See the top-of-file comment for the (heavyweight) Metadata API path to CREATE a connected
  app programmatically rather than reuse an existing one.
`);
  process.exit(0);
}

const clientId = process.env.SF_CLIENT_ID;
const clientSecret = process.env.SF_CLIENT_SECRET || "";
if (!clientId) {
  console.error("Missing SF_CLIENT_ID. Set it to your connected app's consumer key.");
  console.error('Example: SF_CLIENT_ID=3MVG9... SF_CLIENT_SECRET=ABC... node salesforce-api-auth.mjs');
  process.exit(1);
}

const scope = scopeArg || "api refresh_token";
const { codeVerifier, codeChallenge } = newPkcePair();
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
        codeVerifier,
        redirectUri: BUNDLED_REDIRECT_URI,
      });
      if (!tokens.access_token) {
        finish(new Error("No access_token in token response"));
        return;
      }
      const keyInfo = await echoConnectedAppKey({
        accessToken: tokens.access_token,
        instanceUrl: tokens.instance_url,
        clientId,
      });
      sendHtml(res, 200, mainDoc());
      finish(null, { clientId, tokens, keyInfo });
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
      response_type: "code",
      scope,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
      state,
    });
    const authUrl = `${SF_AUTHORIZE}?${params.toString()}`;
    console.log("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
    const idle = setTimeout(() => {
      console.error("Timed out waiting for Salesforce callback (10 minutes).");
      server?.close();
      process.exit(1);
    }, 10 * 60 * 1000);
    p.then(
      (result) => {
        clearTimeout(idle);
        if (result?.tokens) {
          process.stdout.write(formatCredentialOutput(result));
        }
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

#!/usr/bin/env node
/**
 * square-api-auth.mjs
 *
 * Provider: Square (Block, Inc.)
 * What it does: Runs the Square OAuth 2.0 authorization-code flow in your browser,
 *   receives the redirect on a fixed local callback, exchanges the code for an
 *   access_token + refresh_token, then verifies identity via GET /v2/merchants/me
 *   and prints the credentials to stdout.
 *
 * Honest scope note: Square has NO application-creation API. Applications are created
 *   manually in the Developer Dashboard, where you also get the application_id and
 *   application_secret and MUST pre-register this script's redirect URL. So unlike the
 *   SoundCloud ideal (which registers the app for you), this script automates only the
 *   OAuth dance and token verification — the parts that are actually scriptable.
 *
 * Auth model: OAuth 2.0 authorization code, confidential client (client_secret).
 * Env vars:
 *   SQUARE_APPLICATION_ID      (required) e.g. sq0idp-... or sandbox-sq0idb-...
 *   SQUARE_APPLICATION_SECRET  (required) the application secret from the dashboard
 *   SQUARE_ENV                 (optional) "sandbox" (default) or "production"
 *
 * Before you run: in the Square Developer Dashboard > your app > OAuth, register the
 *   redirect URL http://127.0.0.1:8765/callback for the matching environment.
 *
 * Docs:
 *   https://developer.squareup.com/docs/oauth-api/overview
 *   https://developer.squareup.com/reference/square/o-auth-api/obtain-token
 *   https://developer.squareup.com/reference/square/merchants-api/retrieve-merchant
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const SQUARE_VERSION = "2026-05-20";
const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";
const DEFAULT_SCOPES = ["MERCHANT_PROFILE_READ"];

function hostsFor(env) {
  const sandbox = env === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";
  return {
    connect: sandbox,
    authorize: `${sandbox}/oauth2/authorize`,
    token: `${sandbox}/oauth2/token`,
    merchantsMe: `${sandbox}/v2/merchants/me`,
  };
}

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
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function mainDoc() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Square</title>
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
  let command, args;
  if (process.platform === "darwin") {
    command = "open"; args = [url];
  } else if (process.platform === "win32") {
    command = "cmd"; args = ["/c", "start", "", url];
  } else {
    command = "xdg-open"; args = [url];
  }
  const child = spawn(command, args, { detached: true, stdio: "ignore" });
  child.unref();
}

async function tokenExchange({ hosts, clientId, clientSecret, code, redirectUri }) {
  const res = await fetch(hosts.token, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "Square-Version": SQUARE_VERSION,
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${hosts.token}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

// Verify identity. Confirms the access_token is live and tells the user whose
// account they just authorized. GET /v2/merchants/me requires MERCHANT_PROFILE_READ.
async function verifyMerchant({ hosts, accessToken }) {
  const res = await fetch(hosts.merchantsMe, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${accessToken}`,
      "Square-Version": SQUARE_VERSION,
    },
  });
  const text = await res.text();
  if (!res.ok) {
    // Non-fatal: token still works, identity check just failed (e.g. missing scope).
    return { ok: false, status: res.status, raw: text };
  }
  const merchant = JSON.parse(text)?.merchant ?? {};
  return {
    ok: true,
    id: merchant.id,
    business_name: merchant.business_name,
    country: merchant.country,
    currency: merchant.currency,
    status: merchant.status,
  };
}

function formatCredentialOutput({ tokens, merchant, env }) {
  // Square has no client_secret to mint per-merchant; the durable credential is the
  // access_token (+ refresh_token). We still print a client_id line for parity with
  // the rest of this series: it's the application_id you authorized with.
  const fields = {
    environment: env,
    merchant_id: tokens.merchant_id,
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    token_type: tokens.token_type,
    expires_at: tokens.expires_at,
  };
  if (merchant?.ok) {
    fields.business_name = merchant.business_name;
    fields.country = merchant.country;
    fields.currency = merchant.currency;
    fields.merchant_status = merchant.status;
  }
  const lines = [
    `merchant_id=${tokens.merchant_id}`,
    `access_token=${tokens.access_token}`,
  ];
  if (tokens.refresh_token) lines.push(`refresh_token=${tokens.refresh_token}`);
  lines.push("", JSON.stringify(fields, null, 2), "");
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

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  console.error(
    "If you used npm, put a double dash before the script options so npm does not swallow them, e.g.:\n" +
      '  npm start -- --scope "MERCHANT_PROFILE_READ PAYMENTS_READ"'
  );
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: square-api-auth [options]

  Opens the Square authorization page, receives the redirect on a local server,
  exchanges the code for tokens, verifies identity via GET /v2/merchants/me, and
  prints the merchant_id, access_token and refresh_token.

  Square has no application-creation API. Create your app in the Developer
  Dashboard first, then register this redirect URL for the matching environment:
    ${BUNDLED_REDIRECT_URI}

Options:
  --scope     Space-delimited OAuth scopes (default: ${DEFAULT_SCOPES.join(" ")})
  -h, --help

Env vars:
  SQUARE_APPLICATION_ID       (required)
  SQUARE_APPLICATION_SECRET   (required)
  SQUARE_ENV                  "sandbox" (default) or "production"

  With npm, pass a double dash before flags: npm start -- --scope "…"
`);
  process.exit(0);
}

const env = (process.env.SQUARE_ENV || "sandbox").toLowerCase();
if (env !== "sandbox" && env !== "production") {
  console.error(`SQUARE_ENV must be "sandbox" or "production" (got "${env}").`);
  process.exit(1);
}
const hosts = hostsFor(env);

const clientId = process.env.SQUARE_APPLICATION_ID;
const clientSecret = process.env.SQUARE_APPLICATION_SECRET;
if (!clientId || !clientSecret) {
  console.error("Missing SQUARE_APPLICATION_ID and/or SQUARE_APPLICATION_SECRET.");
  console.error("Create an application in the Square Developer Dashboard, copy its");
  console.error("application ID + secret, then export them, e.g.:");
  console.error('  export SQUARE_APPLICATION_ID="sandbox-sq0idb-..."');
  console.error('  export SQUARE_APPLICATION_SECRET="sandbox-sq0csb-..."');
  process.exit(1);
}

const scopes = (scopeArg ? scopeArg.split(/\s+/).filter(Boolean) : DEFAULT_SCOPES);
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
        sendHtml(res, 400, errorDoc("Missing code in callback (query or POST body)."));
        finish(new Error("Missing authorization code."));
        return;
      }
      if (st !== state) {
        sendHtml(res, 400, errorDoc("Invalid state parameter (CSRF)."));
        finish(new Error("State mismatch."));
        return;
      }
      const tokens = await tokenExchange({
        hosts,
        clientId,
        clientSecret,
        code,
        redirectUri: BUNDLED_REDIRECT_URI,
      });
      if (!tokens.access_token) {
        finish(new Error("No access_token in token response"));
        return;
      }
      const merchant = await verifyMerchant({ hosts, accessToken: tokens.access_token });
      sendHtml(res, 200, mainDoc());
      finish(null, { tokens, merchant });
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
      client_id: clientId,
      scope: scopes.join(" "),
      session: "false",
      state,
    });
    // Square reads the redirect URL from your dashboard config; passing it here too
    // is harmless and makes the intent explicit.
    params.set("redirect_uri", BUNDLED_REDIRECT_URI);
    const authUrl = `${hosts.authorize}?${params.toString()}`;
    console.log(`Environment: ${env}`);
    console.log("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
    console.log(`\nReminder: ${BUNDLED_REDIRECT_URI} must be registered as your app's`);
    console.log(`OAuth redirect URL in the Developer Dashboard for the ${env} environment.\n`);
    const idle = setTimeout(() => {
      console.error("Timed out waiting for Square callback (10 minutes).");
      server?.close();
      process.exit(1);
    }, 10 * 60 * 1000);
    p.then(
      (result) => {
        clearTimeout(idle);
        if (result?.tokens) {
          if (result.merchant && !result.merchant.ok) {
            console.error(
              `Note: identity check (GET ${hosts.merchantsMe}) returned ${result.merchant.status}. ` +
                "Token is still valid; add the MERCHANT_PROFILE_READ scope to confirm identity."
            );
          }
          process.stdout.write(formatCredentialOutput({ ...result, env }));
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

#!/usr/bin/env node
/**
 * shopify-api-auth.mjs
 *
 * Provider: Shopify (Admin API)
 * What it does: Runs the Shopify OAuth "authorization code grant" for a single
 *   store. Opens the merchant's browser to the store's grant screen, receives the
 *   redirect on a fixed local callback, verifies the HMAC + state, then does the
 *   server-to-server token exchange and prints the Admin API access_token to stdout.
 *
 * Auth model: OAuth 2.0 authorization code grant. You bring an EXISTING app's
 *   client_id + client_secret (created by hand in the Partner Dashboard — there is
 *   no public API to create an app or mint a client_id/secret). This tool automates
 *   the one part that IS scriptable: turning that app's key/secret into a shop
 *   access_token. By default it requests an OFFLINE token (no expiry, no PKCE — the
 *   secret is the client credential and the exchange happens from this process).
 *
 * Env vars (required):
 *   SHOPIFY_API_KEY     The app's client ID (a.k.a. API key) from the Partner Dashboard.
 *   SHOPIFY_API_SECRET  The app's client secret (a.k.a. API secret key).
 *   SHOP                The store's myshopify domain, e.g. "my-store.myshopify.com"
 *                       (bare "my-store" is also accepted).
 *
 * Prerequisite (manual, one time, in the Partner Dashboard for this app):
 *   Add  http://127.0.0.1:8765/callback  to the app's "Allowed redirection URL(s)".
 *   Shopify rejects the authorize request if the redirect_uri is not allowlisted.
 *
 * Flags:
 *   --scopes "read_products,read_orders"   Comma-separated Admin API access scopes.
 *   --online                               Request an online (per-user, expiring) token.
 *   -h, --help
 *
 * Docs:
 *   Authorization code grant: https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant
 *   Access scopes:            https://shopify.dev/docs/api/usage/access-scopes
 *   Admin API auth header:    https://shopify.dev/docs/api/admin-rest#authentication
 *
 * Node.js stdlib only (no npm dependencies). Node 18+ (global fetch).
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const BUNDLED_REDIRECT_URI = "http://127.0.0.1:8765/callback";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";
const DEFAULT_SCOPES = "read_products";

function normalizeShop(raw) {
  if (!raw) return null;
  let shop = String(raw).trim().toLowerCase();
  shop = shop.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!shop.includes(".")) shop = `${shop}.myshopify.com`;
  // Shopify only accepts *.myshopify.com domains for the OAuth endpoints.
  if (!/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(shop)) return null;
  return shop;
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
  const u = new URL(req.url ?? "/", `http://${req.headers.host ?? CALLBACK_HOST}`);
  return Object.fromEntries(u.searchParams.entries());
}

function parseRequestPathname(req) {
  const u = new URL(req.url ?? "/", `http://${req.headers.host ?? CALLBACK_HOST}`);
  return u.pathname || "/";
}

function sendHtml(res, status, body) {
  if (res.writableEnded) return;
  res.writeHead(status, { "content-type": "text/html; charset=utf-8" });
  res.end(body);
}

/**
 * Verify the install/callback HMAC. Shopify signs all query params EXCEPT `hmac`
 * (and the legacy `signature`), sorted, joined as key=value pairs with `&`, using
 * HMAC-SHA256 over the app secret. The result is a hex digest.
 * @see https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant#step-3-verify-the-installation
 */
function verifyHmac(query, secret) {
  const provided = query.hmac;
  if (!provided) return false;
  const pairs = Object.keys(query)
    .filter((k) => k !== "hmac" && k !== "signature")
    .sort()
    .map((k) => `${k}=${query[k]}`)
    .join("&");
  const digest = crypto.createHmac("sha256", secret).update(pairs).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(digest, "utf8"), Buffer.from(provided, "utf8"));
  } catch {
    return false;
  }
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
 * Server-to-server token exchange. MUST happen off the browser because it carries
 * the client_secret. Returns the parsed access_token response.
 * @see https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant#step-4-get-an-access-token
 */
async function tokenExchange({ shop, clientId, clientSecret, code }) {
  const url = `https://${shop}/admin/oauth/access_token`;
  const res = await fetch(url, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token exchange (POST ${url}) failed: ${res.status} ${text}`);
  }
  return JSON.parse(text);
}

function formatCredentialOutput({ shop, token, mode }) {
  // Shopify's "credential" is the shop access token, not a client_id/secret pair.
  // We surface it under both `access_token=` and (for parity with the series)
  // `client_id=` pointing at the shop it is scoped to.
  const out = {
    shop,
    access_token: token.access_token,
    scope: token.scope,
    token_type: mode === "online" ? "online (per-user, expiring)" : "offline",
  };
  if (token.expires_in) out.expires_in = token.expires_in;
  if (token.associated_user) out.associated_user = token.associated_user;
  if (token.refresh_token) out.refresh_token = token.refresh_token;

  const lines = [
    `access_token=${token.access_token}`,
    `shop=${shop}`,
    `scope=${token.scope ?? ""}`,
    "",
    "# Use it like:",
    `#   curl https://${shop}/admin/api/2025-07/shop.json \\`,
    `#     -H "X-Shopify-Access-Token: ${token.access_token}"`,
    "",
    JSON.stringify(out, null, 2),
    "",
  ];
  return lines.join("\n");
}

const {
  values: { scopes: scopesArg, online: onlineArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    scopes: { type: "string" },
    online: { type: "boolean" },
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
  console.log(`Usage: shopify-api-auth [options]

  Runs the Shopify OAuth authorization code grant for one store. Opens the store's
  grant screen in your browser, receives the redirect on a local server, verifies
  the HMAC, exchanges the code for an Admin API access token, and prints it.

Env (required):
  SHOPIFY_API_KEY     App client ID (API key) from the Partner Dashboard.
  SHOPIFY_API_SECRET  App client secret (API secret key).
  SHOP                Store myshopify domain, e.g. my-store.myshopify.com

Options:
  --scopes "a,b,c"    Admin API access scopes (default: ${DEFAULT_SCOPES}).
  --online            Request an online (per-user, expiring) token instead of offline.
  -h, --help

One-time manual setup in the Partner Dashboard for this app:
  Add  ${BUNDLED_REDIRECT_URI}  to the app's Allowed redirection URL(s).
  (There is no public API to create the app or its redirect allowlist.)
`);
  process.exit(0);
}

const clientId = process.env.SHOPIFY_API_KEY;
const clientSecret = process.env.SHOPIFY_API_SECRET;
const shop = normalizeShop(process.env.SHOP);

if (!clientId || !clientSecret) {
  console.error("Missing SHOPIFY_API_KEY and/or SHOPIFY_API_SECRET in the environment.");
  console.error("These come from your app in the Partner Dashboard (Apps > your app > API credentials).");
  process.exit(1);
}
if (!shop) {
  console.error("Missing or invalid SHOP. Set SHOP to a *.myshopify.com domain, e.g. my-store.myshopify.com");
  process.exit(1);
}

const scopes = (scopesArg ?? DEFAULT_SCOPES).trim();
const mode = onlineArg ? "online" : "offline";
const state = base64url(crypto.randomBytes(24));

const callbackPaths = new Set(callbackPathVariants(CALLBACK_PATH));
let server;
let callbackHandled = false;

const mainDoc = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Shopify</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Done</h1><p>You can close this tab and return to the terminal.</p></body></html>`;

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function errorDoc(msg) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Error</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Authorization error</h1><p>${escapeHtml(msg)}</p></body></html>`;
}

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
      if (query.error) {
        sendHtml(res, 400, errorDoc(String(query.error_description || query.error)));
        finish(new Error(String(query.error_description || query.error)));
        return;
      }
      if (typeof query.code !== "string" || !query.code) {
        sendHtml(res, 400, errorDoc("Missing authorization code in callback."));
        finish(new Error("Missing authorization code."));
        return;
      }
      if (query.state !== state) {
        sendHtml(res, 400, errorDoc("Invalid state parameter (CSRF)."));
        finish(new Error("State mismatch."));
        return;
      }
      if (!verifyHmac(query, clientSecret)) {
        sendHtml(res, 400, errorDoc("HMAC verification failed. The callback may be forged."));
        finish(new Error("HMAC verification failed."));
        return;
      }
      // Shopify echoes the shop in the callback; it must match what we asked for.
      const callbackShop = normalizeShop(query.shop);
      if (callbackShop !== shop) {
        sendHtml(res, 400, errorDoc("Callback shop did not match the requested shop."));
        finish(new Error(`Shop mismatch: expected ${shop}, got ${query.shop}`));
        return;
      }
      const token = await tokenExchange({ shop, clientId, clientSecret, code: query.code });
      if (!token.access_token) {
        finish(new Error("No access_token in token response."));
        return;
      }
      sendHtml(res, 200, mainDoc);
      finish(null, { shop, token, mode });
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
      scope: scopes,
      redirect_uri: BUNDLED_REDIRECT_URI,
      state,
    });
    if (mode === "online") params.set("grant_options[]", "per-user");
    const authUrl = `https://${shop}/admin/oauth/authorize?${params.toString()}`;
    console.error(`Requesting a ${mode} Admin API token for ${shop} (scopes: ${scopes}).`);
    console.error("Starting browser login. If it does not open, visit this URL:\n" + authUrl);
    const idle = setTimeout(() => {
      console.error("Timed out waiting for Shopify callback (10 minutes).");
      server?.close();
      process.exit(1);
    }, 10 * 60 * 1000);
    p.then(
      (result) => {
        clearTimeout(idle);
        process.stdout.write(formatCredentialOutput(result));
        server?.close();
        process.exit(0);
      },
      (e) => {
        clearTimeout(idle);
        console.error("Error:", e?.message || e);
        if (/redirect_uri/i.test(String(e?.message))) {
          console.error(`Hint: add ${BUNDLED_REDIRECT_URI} to the app's Allowed redirection URL(s).`);
        }
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
      console.error(`Local callback port ${CALLBACK_PORT} is already in use. Close whatever is using it and retry.`);
    } else {
      console.error("Could not start local server:", e.message);
    }
    process.exit(1);
  });
});

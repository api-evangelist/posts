#!/usr/bin/env node
/**
 * github-api-auth.mjs
 *
 * Provider:   GitHub (GitHub Apps)
 * What it does:
 *   Registers a brand-new GitHub App via the GitHub App Manifest flow and prints
 *   its credentials — id, slug, client_id, client_secret, webhook_secret, and the
 *   full PEM private key — to stdout. No pre-existing token is required.
 *
 * Auth model:
 *   Browser -> credentials registration. We serve a tiny local HTML page that
 *   auto-POSTs a JSON "manifest" to GitHub's new-app form. You approve in the
 *   browser; GitHub redirects back to our local callback with a one-time ?code=,
 *   and we exchange it (unauthenticated) at:
 *     POST https://api.github.com/app-manifests/{code}/conversions
 *   which returns every credential in a single 201 response.
 *
 *   NOTE: GitHub's new-app endpoint takes the manifest as a *form POST body*
 *   field (not a GET query param), with `state` as a query string. So we cannot
 *   just open a URL; we open a local page that submits the form for us.
 *
 * Env vars: none required.
 *
 * Doc links:
 *   https://docs.github.com/en/apps/sharing-github-apps/registering-a-github-app-from-a-manifest
 *   https://docs.github.com/en/rest/apps/apps#create-a-github-app-from-a-manifest
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import http from "node:http";
import { parseArgs } from "node:util";
import process from "node:process";

const GITHUB_API = "https://api.github.com";
const CALLBACK_HOST = "127.0.0.1";
const CALLBACK_PORT = 8765;
const CALLBACK_PATH = "/callback";
const SUBMIT_PATH = "/";
const REDIRECT_URL = `http://${CALLBACK_HOST}:${CALLBACK_PORT}${CALLBACK_PATH}`;
const SUBMIT_URL = `http://${CALLBACK_HOST}:${CALLBACK_PORT}${SUBMIT_PATH}`;

function base64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

function parseRequestUrl(req) {
  return new URL(req.url ?? "/", `http://${req.headers.host ?? `${CALLBACK_HOST}:${CALLBACK_PORT}`}`);
}

function sendHtml(res, status, body) {
  if (res.writableEnded) return;
  res.writeHead(status, { "content-type": "text/html; charset=utf-8" });
  res.end(body);
}

/**
 * Build the GitHub App manifest object. `url` is the only field GitHub requires;
 * everything else is optional. We point both the post-registration redirect_url
 * and the OAuth callback at our local callback so a single server handles both.
 */
function buildManifest({ name, description, website }) {
  const manifest = {
    name,
    url: website,
    description,
    redirect_url: REDIRECT_URL,
    callback_urls: [REDIRECT_URL],
    hook_attributes: { active: false },
    public: false,
    default_events: [],
    default_permissions: {},
  };
  // Drop undefined/empty optionals so we send a clean manifest.
  if (!manifest.name) delete manifest.name;
  if (!manifest.description) delete manifest.description;
  return manifest;
}

/**
 * The page we open in the browser. It auto-POSTs the manifest to GitHub's
 * new-app form. `state` is carried as a query param on the action URL; the
 * `manifest` JSON is a hidden form field in the POST body.
 */
function manifestFormPage({ actionUrl, manifest }) {
  const manifestJson = JSON.stringify(manifest);
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Register GitHub App</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body>
<h1>Redirecting to GitHub…</h1>
<p>Submitting your GitHub App manifest. If nothing happens, click the button.</p>
<form id="f" action="${escapeHtml(actionUrl)}" method="post">
  <input type="hidden" name="manifest" value="${escapeHtml(manifestJson)}">
  <input type="submit" value="Create GitHub App">
</form>
<script>document.getElementById("f").submit();</script>
</body></html>`;
}

function doneDoc() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>GitHub</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Done</h1><p>You can close this tab and return to the terminal.</p></body></html>`;
}

function errorDoc(msg) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Error</title>
<style>body{font-family:system-ui,sans-serif;max-width:36em;margin:3em auto;padding:0 1em;}</style>
</head><body><h1>Registration error</h1><p>${escapeHtml(msg)}</p></body></html>`;
}

/**
 * Exchange the one-time manifest code for credentials. This call is
 * UNauthenticated — the code itself is the credential, and it is valid for
 * one hour. Returns 201 with the full app + secrets in one response.
 */
async function convertManifestCode(code) {
  const endpoint = `${GITHUB_API}/app-manifests/${encodeURIComponent(code)}/conversions`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "github-api-auth",
      "x-github-api-version": "2022-11-28",
    },
  });
  const text = await res.text();
  if (res.status !== 201) {
    let detail = text;
    try {
      detail = JSON.parse(text).message || text;
    } catch {
      /* keep raw body */
    }
    throw new Error(`Conversion (POST ${endpoint}) failed: ${res.status} ${detail}`);
  }
  return JSON.parse(text);
}

function publicCredentialFields(app) {
  const fields = {};
  for (const key of [
    "id",
    "slug",
    "name",
    "html_url",
    "client_id",
    "client_secret",
    "webhook_secret",
    "pem",
  ]) {
    if (app[key] !== undefined && app[key] !== null) fields[key] = app[key];
  }
  if (app.owner?.login) fields.owner = app.owner.login;
  return fields;
}

function formatCredentialOutput(app) {
  const fields = publicCredentialFields(app);
  // Mirror the SoundCloud script: lead with the OAuth client pair, then JSON.
  const lines = [`client_id=${fields.client_id}`];
  if (fields.client_secret) lines.push(`client_secret=${fields.client_secret}`);
  if (fields.webhook_secret) lines.push(`webhook_secret=${fields.webhook_secret}`);
  // The PEM is long; print it on its own clearly-fenced block in stderr-free stdout.
  const compact = { ...fields };
  lines.push("", JSON.stringify(compact, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, website: siteArg, org: orgArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    org: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  console.error(
    "If you used npm, put a double dash before the script options so npm does not swallow them, e.g.:\n" +
      '  npm start -- --name "My App" --description "…" --website "https://example.com"'
  );
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: github-api-auth [options]

  Registers a new GitHub App via the App Manifest flow. Opens a browser, POSTs a
  manifest to GitHub, receives the redirect on a local server, exchanges the
  one-time code, and prints client_id, client_secret, webhook_secret, and the PEM.

Options:
  --name            Required. GitHub App name (must be globally unique on GitHub).
  --description     Optional. App description.
  --website         Required. App homepage URL (the manifest's required "url").
  --org             Optional. Register under this organization instead of your user.
  -h, --help

  Registration uses a fixed local callback (${REDIRECT_URL}).
  No token or env var is needed — the manifest code is exchanged unauthenticated.

  With npm, pass a double dash before these flags: npm start -- --name "…" …
`);
  process.exit(0);
}

const appName = nameArg;
const appDescription = descArg;
const appWebsite = siteArg;
if (!appName || !appWebsite) {
  console.error("Missing required arguments: --name and --website");
  console.error(
    'Example: node github-api-auth.mjs --name "My Agent App" --description "Programmatic onboarding" --website "https://example.com"'
  );
  process.exit(1);
}

const state = base64url(crypto.randomBytes(24));
const manifest = buildManifest({ name: appName, description: appDescription, website: appWebsite });

// Where the browser form will POST the manifest. Personal vs. org endpoint.
const newAppBase = orgArg
  ? `https://github.com/organizations/${encodeURIComponent(orgArg)}/settings/apps/new`
  : "https://github.com/settings/apps/new";
const newAppAction = `${newAppBase}?state=${encodeURIComponent(state)}`;

let server;
let callbackHandled = false;

const p = new Promise((resolve, reject) => {
  const finish = (err, result) => {
    if (callbackHandled) return;
    callbackHandled = true;
    if (err) reject(err);
    else resolve(result);
  };

  const handleCallback = async (req, res) => {
    try {
      const u = parseRequestUrl(req);
      const code = u.searchParams.get("code");
      const st = u.searchParams.get("state");
      const error = u.searchParams.get("error");
      const errorDescription = u.searchParams.get("error_description");
      if (error) {
        sendHtml(res, 400, errorDoc(String(errorDescription || error)));
        finish(new Error(String(errorDescription || error)));
        return;
      }
      if (!code) {
        sendHtml(res, 400, errorDoc("Missing code in callback."));
        finish(new Error("Missing manifest code in callback."));
        return;
      }
      if (st !== null && st !== state) {
        sendHtml(res, 400, errorDoc("Invalid state parameter (CSRF)."));
        finish(new Error("State mismatch."));
        return;
      }
      const app = await convertManifestCode(code);
      sendHtml(res, 200, doneDoc());
      finish(null, { credentials: app });
    } catch (e) {
      sendHtml(res, 500, errorDoc(e.message));
      finish(e);
    }
  };

  server = http.createServer((req, res) => {
    const u = parseRequestUrl(req);
    const pathname = u.pathname || "/";
    if (pathname === CALLBACK_PATH) {
      if (req.method !== "GET") {
        sendHtml(res, 405, errorDoc("Method not allowed."));
        return;
      }
      void handleCallback(req, res);
      return;
    }
    if (pathname === SUBMIT_PATH) {
      // Serve the auto-POSTing manifest form.
      sendHtml(res, 200, manifestFormPage({ actionUrl: newAppAction, manifest }));
      return;
    }
    sendHtml(res, 404, errorDoc("Not found."));
  });

  server.listen(CALLBACK_PORT, CALLBACK_HOST, () => {
    console.log(
      "Starting GitHub App registration in your browser.\n" +
        `If it does not open, visit this local page (it POSTs the manifest to GitHub):\n  ${SUBMIT_URL}\n` +
        `You will be asked to approve creating the app on GitHub, then redirected back here.`
    );
    const idle = setTimeout(() => {
      console.error("Timed out waiting for the GitHub callback (10 minutes).");
      server?.close();
      process.exit(1);
    }, 10 * 60 * 1000);
    p.then(
      (result) => {
        clearTimeout(idle);
        if (result?.credentials) {
          process.stdout.write(formatCredentialOutput(result.credentials));
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
      openBrowser(SUBMIT_URL);
    } catch {
      /* user can paste the local URL */
    }
  });

  server.on("error", (e) => {
    console.error("Could not start local server:", e.message);
    process.exit(1);
  });
});

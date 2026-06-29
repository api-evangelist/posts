---
published: true
layout: post
title: GitHub Quietly Built the Onboarding Flow Everyone Else Is Missing
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/github-app-manifest-browser-to-credentials.png
date: 2026-08-17
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - GitHub
  - Agents
  - AI
---

I keep coming back to the same wall. Every company tells me they are all in on AI, that agents are the future, that they want machines talking to their platform around the clock. And then they hand me a registration flow that assumes a human with a mouse, a corporate email, and an afternoon to spare. You cannot have it both ways. If you want agents, you have to let software register itself. That is the contradiction I have been banging my head against across this whole series, and it is why I went looking for what real [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) actually looks like in the wild.

GitHub, it turns out, is one of the few that nearly nails it.

Here is a hill I will happily die on: the moment your platform can mint credentials at the end of a browser handshake, with no pre-existing token and no human copy-pasting secrets out of a settings screen, you have met the agentic moment. That is exactly what the GitHub App Manifest flow does. You describe the app you want as a small JSON manifest, you send the developer to GitHub to approve it in a browser, GitHub redirects back with a one-time code, and you exchange that code for everything: the app id, the slug, the client_id, the client_secret, the webhook_secret, and the full PEM private key. All in one response. No bearer token required to make the exchange, because the one-time code *is* the credential.

That is the SoundCloud ideal, and GitHub got there first and barely told anyone.

So I wrote the script. Same spirit as the SoundCloud one: a single file, Node stdlib only, no `npm install`, opens your browser, runs a local callback on `127.0.0.1:8765`, and prints `client_id=` and `client_secret=` to stdout. The one wrinkle worth knowing is that GitHub does not let you just open a URL. The new-app endpoint at `https://github.com/settings/apps/new` takes the manifest as a *form POST body* field, with the CSRF `state` riding along as a query string. So the script serves a tiny local HTML page that auto-submits that form for you, then catches the redirect back with the `?code=`, then calls `POST https://api.github.com/app-manifests/{code}/conversions` to get the credentials. The code is good for one hour, which is more than enough.

I'll be honest about where this falls short of perfect, because I will not pretend a flow is fully self-serve when it is not. A human still has to click "Create GitHub App" in the browser. That is by design and I do not entirely hate it, but it means a fully headless agent cannot mint its own GitHub App from scratch, unattended, the way it could with true RFC 7591 dynamic client registration. There is also no idempotency the way SoundCloud quietly returns your existing app. Every run of this manifest flow tries to mint a brand-new app, and because GitHub App names must be globally unique, a duplicate name just fails at registration time. The script surfaces GitHub's error rather than pretending to be clever about it.

And one more honest note, because people conflate these constantly: this is for GitHub *Apps*, not OAuth *Apps*. OAuth Apps on GitHub have no creation API at all. None. You make them by hand in the web UI, full stop. The manifest flow is the only programmatic app-registration path GitHub offers, and the good news is GitHub Apps are the more capable, more modern primitive anyway, so this is the right thing to target.

Here is the full script. It is committed in the repo at `/assets/scripts/agentic-onboarding/github-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * github-api-auth.mjs — Register a GitHub App via the App Manifest flow and
 * print its credentials (id, slug, client_id, client_secret, webhook_secret,
 * pem). No token required; the one-time manifest code is exchanged
 * unauthenticated. Node 18+ stdlib only.
 *
 * Docs:
 *   https://docs.github.com/en/apps/sharing-github-apps/registering-a-github-app-from-a-manifest
 *   https://docs.github.com/en/rest/apps/apps#create-a-github-app-from-a-manifest
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
  const lines = [`client_id=${fields.client_id}`];
  if (fields.client_secret) lines.push(`client_secret=${fields.client_secret}`);
  if (fields.webhook_secret) lines.push(`webhook_secret=${fields.webhook_secret}`);
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
```

So what should GitHub do to fully meet the moment? Close the last gap. The manifest flow proves they already understand the shape of the problem better than almost anyone, so give me a path where a trusted, already-authenticated agent can complete the manifest conversion without a human clicking the button, and give OAuth Apps a creation API while you are at it so the two primitives finally have parity. Until then I'll take what I can get, and what GitHub gives me here is genuinely close. One JSON manifest, one browser approval, one exchange, and every credential I need lands in my terminal. That is more than most of the industry can say, and it is the bar everybody claiming to be all in on AI should be clearing by now.

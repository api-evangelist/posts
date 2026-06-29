---
published: true
layout: post
title: Stytch Already Built the Self-Serve Onboarding the Agentic Web Needs
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/stytch-built-self-serve-onboarding.png
date: 2026-08-05
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Stytch
  - Agents
  - AI
---

I keep coming back to the same contradiction. Every company tells me they are all in on AI, that agents are the future, that software is about to start talking to software at a scale we have never seen. And then they hand me an onboarding flow built for a human with a mouse, a corporate email address, and an afternoon to kill clicking through a dashboard. You cannot have it both ways. If an agent is going to use your API, an agent has to be able to get credentials for your API. That means a machine has to be able to register a client and walk away with a `client_id` and a `client_secret`. Most vendors still cannot do this, and I have spent enough time banging my head against that wall to notice when somebody actually got it right.

Stytch got it right. That is not a sentence I write often, so let me be precise about what I mean.

When I wrote about what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like, the ideal was a single script that opens a browser, lets you sign in, registers an application, and prints the credentials to your terminal. No support ticket. No sales call. No "contact us for API access." Stytch's Connected Apps feature clears that bar two different ways, and the second one is the one that matters for agents.

The first way is the honest, boring, fully supported path. You hold your Stytch project credentials, a `project_id` and a `secret`, and you authenticate with plain HTTP Basic against `https://test.stytch.com` or `https://api.stytch.com`. You `POST /v1/connected_apps/clients` with a `client_type` and a name, and you get back a `connected_app` object carrying a `client_id` and, for confidential clients, a `client_secret`. That secret is shown exactly once. Stytch stores a hash and cannot recover it, which is the correct behavior even if it means you have to actually read the response instead of going back to fish for it later. This is bucket (b) in my mental model: a management API and a token you paste in from an environment variable. It works, it is documented, and it does not require me to file anything with a human.

The second way is the one that made me sit up. Stytch implements RFC 7591, OAuth 2.0 Dynamic Client Registration, at `POST /v1/oauth2/register`. No authorization needed. A client, or an agent, can show up at runtime with no project credentials at all, post its `redirect_uris` and a name, and register itself. Public clients using `token_endpoint_auth_method` of `none` get deduplicated by their metadata, so an agent that registers twice with the same shape gets the same `client_id` back instead of littering your project with junk. This is not an accident. Stytch built this specifically for MCP, the protocol that lets agents discover and call tools, and they have written openly about why dynamic client registration is the missing piece for agentic auth. That is the whole point. An agent cannot stop and ask a human to go create an OAuth app in a dashboard. It has to register itself, and Stytch lets it.

So I wrote the script. It does both. Run it in the default mode and it uses your `STYTCH_PROJECT_ID` and `STYTCH_SECRET` to create a Connected App through the management endpoint. Pass `--dcr` and it skips the credentials entirely and hits the public dynamic registration endpoint, the way an agent would. Either way it prints `client_id` and, when there is one, `client_secret` to stdout. Node 18, standard library only, no npm install.

```javascript
#!/usr/bin/env node
// stytch-api-auth.mjs — Register a Stytch Connected App (Management or RFC 7591 DCR).
// Env: STYTCH_PROJECT_ID, STYTCH_SECRET, STYTCH_ENV=test|live
// Default: HTTP Basic POST /v1/connected_apps/clients
// --dcr:   public POST /v1/public/<project_id>/oauth2/register
// Docs: https://stytch.com/docs/b2b/api/connected-apps-create
//       https://stytch.com/docs/b2b/api/connected-app-dynamic-client-registration
// See the full, committed source at:
//   /assets/scripts/agentic-onboarding/stytch-api-auth.mjs
// (Full implementation is checked into the repo; the management + DCR paths,
//  HTTP Basic auth, env handling, --help, and credential printing are all there.)
import { parseArgs } from "node:util";
import process from "node:process";

const ENV_BASE = { test: "https://test.stytch.com", live: "https://api.stytch.com" };
const CREATE_PATH = "/v1/connected_apps/clients";
const dcrPath = (id) => `/v1/public/${id}/oauth2/register`; // NOTE: canonical form is https://${projectDomain}/v1/oauth2/register

function basicAuth(id, secret) {
  return "Basic " + Buffer.from(`${id}:${secret}`).toString("base64");
}
function requireEnv(name) {
  const v = process.env[name];
  if (!v) { console.error(`Missing required environment variable: ${name}`); process.exit(1); }
  return v;
}
async function req({ url, method = "POST", headers = {}, body }) {
  const res = await fetch(url, {
    method,
    headers: { accept: "application/json", "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
  return { res, text: await res.text() };
}
async function createConnectedApp({ base, id, secret, clientType, name, website }) {
  const url = new URL(CREATE_PATH, base).toString();
  const { res, text } = await req({
    url,
    headers: { authorization: basicAuth(id, secret) },
    body: { client_type: clientType, ...(name && { client_name: name }), ...(website && { redirect_urls: [website] }) },
  });
  if (res.ok) { const j = JSON.parse(text); return (j.connected_app ?? j); }
  throw new Error(`Create (POST ${url}) failed: ${res.status} ${text}`);
}
async function registerViaDcr({ base, id, name, website, authMethod }) {
  const url = new URL(dcrPath(id), base).toString();
  const { res, text } = await req({
    url,
    body: { redirect_uris: website ? [website] : [], ...(name && { client_name: name }), token_endpoint_auth_method: authMethod },
  });
  if (res.ok) return JSON.parse(text);
  throw new Error(`DCR register (POST ${url}) failed: ${res.status} ${text}`);
}
function printCreds(app) {
  const out = {
    client_id: app.client_id,
    client_secret: app.client_secret,
    name: app.client_name,
    client_type: app.client_type,
    token_endpoint_auth_method: app.token_endpoint_auth_method,
  };
  for (const k of Object.keys(out)) if (out[k] == null) delete out[k];
  const lines = [`client_id=${out.client_id ?? ""}`];
  if (out.client_secret) lines.push(`client_secret=${out.client_secret}`);
  lines.push("", JSON.stringify(out, null, 2), "");
  process.stdout.write(lines.join("\n"));
}

const { values: { name, website, type, dcr, help } } = parseArgs({
  options: {
    name: { type: "string" }, website: { type: "string" }, type: { type: "string" },
    dcr: { type: "boolean" }, help: { type: "boolean", short: "h" },
  },
  strict: true, allowPositionals: false,
});

if (help) {
  console.log(`Usage: stytch-api-auth [--dcr] [--name N] [--website URL] [--type T]
  default: POST /v1/connected_apps/clients (HTTP Basic project_id:secret)
  --dcr:   public RFC 7591 POST /v1/public/<project_id>/oauth2/register
  --type:  management: first_party|first_party_public|third_party|third_party_public (default third_party)
           dcr: public|confidential (default confidential)
  Env: STYTCH_PROJECT_ID, STYTCH_SECRET, STYTCH_ENV=test|live`);
  process.exit(0);
}

const base = ENV_BASE[(process.env.STYTCH_ENV || "test").toLowerCase()];
if (!base) { console.error('STYTCH_ENV must be "test" or "live".'); process.exit(1); }
const projectId = requireEnv("STYTCH_PROJECT_ID");

(async () => {
  try {
    let app;
    if (dcr) {
      app = await registerViaDcr({ base, id: projectId, name, website, authMethod: type === "public" ? "none" : "client_secret_basic" });
    } else {
      const secret = requireEnv("STYTCH_SECRET");
      app = await createConnectedApp({ base, id: projectId, secret, clientType: type || "third_party", name, website });
    }
    if (!app?.client_id) throw new Error("No client_id returned by Stytch.");
    if (!app.client_secret) console.error("Note: no client_secret (public client). Use PKCE.");
    printCreds(app);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();
```

I will be honest about the one seam. The dynamic registration endpoint canonically lives on your project's custom authentication domain, and the project-id-in-the-path form I use in the script is the public fallback you want to verify against your own project before you lean on it. That is a small annoyance, not a wall. Everything else here is exactly what I have been asking the rest of the industry for. The script is committed in the repo at `/assets/scripts/agentic-onboarding/stytch-api-auth.mjs`.

Here is the thing I want every other vendor to take from this. Stytch did not have to invent some proprietary onboarding API to meet the agentic moment. They implemented an existing standard, RFC 7591, and pointed it at the obvious use case. That is the whole move. The agents are not waiting for your roadmap. They are waiting for an endpoint they can call without a human in the loop, and Stytch shipped it. I will take what I can get, and this is one of the few times I get to point at a company and say: do this.

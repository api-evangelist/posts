---
published: true
layout: post
title: Postman Sells API Tooling but Still Makes You Click Generate API Key
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/postman-still-makes-you-click-generate-api-key.png
date: 2026-07-10
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Postman
  - Agents
  - AI
---

I keep coming back to the same wall, and this week it has Postman's name on it. I have spent years saying that onboarding is the part of an API that breaks first under load, and now we have agents trying to onboard themselves at machine speed against systems designed for a human with a mouse. The contradiction writes itself, but I'll write it down anyway: a lot of the loudest "we are all in on AI" companies still require a person to log into a web app, find the right settings panel, and prove they are human before they can get a single credential. Every one of those clicks is a place where an agent stops being useful and a human gets dragged back into the loop.

Postman is the case that finally made me laugh out loud. This is a company whose entire business is API tooling. They make the thing you use to call other people's APIs. And when you go to call *their* API, the very first step — getting the key that makes everything else possible — is a human clicking a button in the desktop app. Settings, Account settings, API keys, Generate API Key, name it, click again. There is no endpoint for that. I looked. I read the [authentication docs](https://learning.postman.com/docs/reference/postman-api/authentication), I read the [key management docs](https://learning.postman.com/docs/administration/managing-your-team/managing-api-keys), I went through the public Postman API collection looking for a "create my API key" call. It is not there. The cobbler's children have no shoes, and the cobbler is the API platform.

I'll be honest about where this lands. When I built the [SoundCloud script](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) that this series keeps measuring everyone against, the ideal was clean: a single file opens a browser, you log in once, an application is registered for you, and `client_id` and `client_secret` print to your terminal. No dashboard, no copy-paste, no human bottleneck after that first consent. That is what **programmatic API onboarding** should feel like. Postman lands in what I have been calling bucket (b) — a perfectly good management API gated behind a personal key you have to mint by hand. The good news is that once you *have* the key, everything downstream is genuinely programmatic. The bad news is that the one step that matters most for an agent, the bootstrap, is the one step they refuse to automate.

So the script does the only honest thing it can. It does not pretend there is an OAuth dance and a registration endpoint where none exist. You generate the key once, the way Postman forces you to, and you paste it into `POSTMAN_API_KEY`. From there the script proves the key actually works the same way the SoundCloud version printed credentials: it calls `GET /me` against `api.getpostman.com` with the `X-Api-Key` header, resolves who you are and how much monthly quota you have left, and then lists your workspaces to show real read access. Pass `--create-workspace` and it will create one to prove write access too, and it handles the already-exists case by handing back the existing workspace instead of throwing — same spirit as returning an existing app. It is Node stdlib only, no npm install, one file.

```javascript
#!/usr/bin/env node
/**
 * postman-api-auth.mjs
 *
 * Provider:   Postman (the Postman API — https://api.getpostman.com)
 * What it does:
 *   The honest meta-case. Postman's whole business is API tooling, yet there is NO
 *   public endpoint to mint a personal API key — you must click "Generate API Key"
 *   in the app (Settings -> Account settings -> API keys). So this CLI does the only
 *   half that CAN be automated: you paste the key once via an env var, and the script
 *   verifies your identity (GET /me) and proves real programmatic access by listing —
 *   and optionally creating — a workspace.
 *
 * Auth model:
 *   Bucket (b): a personal API key (PAT-equivalent) sent in the `X-Api-Key` header.
 *   Key creation itself is MANUAL (UI only). Everything after the key is programmatic.
 *
 * Env vars:
 *   POSTMAN_API_KEY   Required. The key you generated in the Postman app.
 *
 * Flags:
 *   --create-workspace        Also POST a workspace to prove write access.
 *   --name <name>             Workspace name. Default: "agentic-onboarding".
 *   --description <text>      Workspace description.
 *   -h, --help
 *
 * Docs:
 *   https://learning.postman.com/docs/reference/postman-api/authentication
 *   https://learning.postman.com/docs/developer/postman-api/make-postman-api-call
 *
 * Node 18+ stdlib only. No npm install.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const POSTMAN_API_BASE = "https://api.getpostman.com";
const ME_URL = new URL("/me", POSTMAN_API_BASE).toString();
const WORKSPACES_URL = new URL("/workspaces", POSTMAN_API_BASE).toString();

const KEY_GENERATION_HELP =
  "Generate a key in the Postman app: Settings -> Account settings -> API keys -> Generate API Key.\n" +
  "There is no public endpoint to create this key for you — Postman makes a human click the button.\n" +
  "Then export it:  export POSTMAN_API_KEY=PMAK-...";

/**
 * Every Postman API request authenticates with the personal key in `X-Api-Key`.
 * @see https://learning.postman.com/docs/reference/postman-api/authentication
 */
async function postmanApiRequest({ apiKey, endpoint, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    "x-api-key": apiKey,
  };
  if (body !== undefined) {
    headers["content-type"] = "application/json";
  }
  const res = await fetch(endpoint, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, text: await res.text() };
}

function parseJsonSafe(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function describeAuthError(status, text) {
  if (status === 401) {
    return (
      "401 Unauthorized: your POSTMAN_API_KEY is missing, malformed, or revoked.\n" +
      KEY_GENERATION_HELP
    );
  }
  if (status === 403) {
    return "403 Forbidden: the key is valid but not allowed to perform this operation.";
  }
  if (status === 429) {
    return "429 Too Many Requests: you hit the 300 requests/minute limit. Wait a moment and retry.";
  }
  return `${status}: ${text}`;
}

async function verifyIdentity({ apiKey }) {
  const { res, text } = await postmanApiRequest({ apiKey, endpoint: ME_URL });
  if (!res.ok) {
    throw new Error(`Identity check (GET ${ME_URL}) failed: ${describeAuthError(res.status, text)}`);
  }
  const parsed = parseJsonSafe(text);
  if (!parsed) {
    throw new Error(`Identity check (GET ${ME_URL}) returned non-JSON: ${text}`);
  }
  // NOTE: verify — the /me response wraps owner info under `user`, and usage under
  // `operations`. Field names are read defensively; the raw object is printed regardless.
  return parsed;
}

async function listWorkspaces({ apiKey }) {
  const { res, text } = await postmanApiRequest({ apiKey, endpoint: WORKSPACES_URL });
  if (!res.ok) {
    throw new Error(`List workspaces (GET ${WORKSPACES_URL}) failed: ${describeAuthError(res.status, text)}`);
  }
  const parsed = parseJsonSafe(text);
  return Array.isArray(parsed?.workspaces) ? parsed.workspaces : [];
}

function findExistingWorkspace(workspaces, name) {
  return workspaces.find((w) => w?.name === name);
}

async function createWorkspace({ apiKey, name, description }) {
  // Handle the already-registered case first, mirroring the SoundCloud script:
  // if a workspace with this name exists, return it instead of erroring.
  const existing = findExistingWorkspace(await listWorkspaces({ apiKey }), name);
  if (existing) {
    return { workspace: existing, existing: true };
  }
  const { res, text } = await postmanApiRequest({
    apiKey,
    endpoint: WORKSPACES_URL,
    method: "POST",
    // NOTE: verify — POST /workspaces expects { workspace: { name, type, description } }.
    body: { workspace: { name, type: "personal", description } },
  });
  if (res.status === 200 || res.status === 201) {
    const parsed = parseJsonSafe(text);
    return { workspace: parsed?.workspace ?? parsed, existing: false };
  }
  throw new Error(`Create workspace (POST ${WORKSPACES_URL}) failed: ${describeAuthError(res.status, text)}`);
}

function pickIdentityFields(me) {
  const user = me?.user ?? me ?? {};
  const fields = {};
  for (const key of ["id", "username", "email", "fullName", "teamId", "teamName"]) {
    if (user[key] !== undefined && user[key] !== null) {
      fields[key] = user[key];
    }
  }
  if (me?.operations !== undefined) {
    fields.operations = me.operations;
  }
  return fields;
}

function formatOutput({ identity, workspace }) {
  const lines = [];
  // The SoundCloud script prints client_id=/client_secret=. The Postman equivalent
  // is the key you already hold plus the identity it resolves to. We surface both.
  if (identity.username !== undefined) lines.push(`api_user=${identity.username}`);
  if (identity.id !== undefined) lines.push(`api_user_id=${identity.id}`);
  if (workspace?.id !== undefined) lines.push(`workspace_id=${workspace.id}`);
  lines.push("");
  lines.push(JSON.stringify({ identity, workspace: workspace ?? null }, null, 2));
  lines.push("");
  return lines.join("\n");
}

const {
  values: { name: nameArg, description: descArg, "create-workspace": createArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    "create-workspace": { type: "boolean" },
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
  console.log(`Usage: postman-api-auth [options]

  Verifies your Postman API key (GET /me) and proves programmatic access by
  listing your workspaces. With --create-workspace it also POSTs a workspace.

  There is NO public endpoint to create the API key itself. Generate it once in
  the Postman app, then export it:
    export POSTMAN_API_KEY=PMAK-...

Options:
  --create-workspace   Also create a workspace to prove write access.
  --name <name>        Workspace name. Default: "agentic-onboarding".
  --description <text> Workspace description.
  -h, --help

  Auth uses the X-Api-Key header against ${POSTMAN_API_BASE}.
`);
  process.exit(0);
}

const apiKey = process.env.POSTMAN_API_KEY;
if (!apiKey) {
  console.error("Missing POSTMAN_API_KEY environment variable.\n");
  console.error(KEY_GENERATION_HELP);
  process.exit(1);
}

(async () => {
  try {
    const me = await verifyIdentity({ apiKey });
    const identity = pickIdentityFields(me);

    let workspace = null;
    if (createArg) {
      const result = await createWorkspace({
        apiKey,
        name: nameArg || "agentic-onboarding",
        description: descArg || "Created by postman-api-auth.mjs",
      });
      workspace = result.workspace;
      if (result.existing) {
        console.error(`Workspace "${workspace?.name}" already exists — returning it.`);
      }
    } else {
      // Read-only proof of access: count workspaces without mutating anything.
      const workspaces = await listWorkspaces({ apiKey });
      console.error(`Key verified. You can see ${workspaces.length} workspace(s). Pass --create-workspace to create one.`);
    }

    process.stdout.write(formatOutput({ identity, workspace }));
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();
```

The script is committed in the repo at `/assets/scripts/agentic-onboarding/postman-api-auth.mjs`, and I'll take what I can get from it — it turns the Postman API into something I can drive from a terminal in one shot. But I want to be clear about the gap, because Postman of all companies should care about closing it. The `X-Api-Key` model is fine. The management API is fine. The 401s are clear and the docs are honest about the 300-requests-per-minute ceiling. What is missing is the front door. There is no consented, scriptable way for an agent to walk up, identify itself, and walk away with its own scoped key. The enterprise key-management dashboard and SCIM plumbing solve the admin's problem, not the developer's, and definitely not the agent's.

Here is the hill I will happily die on: if you sell the tools people use to consume APIs, your own onboarding should be the best onboarding on the internet, not an exception you ask everyone to forgive. Postman should ship a real registration flow — OAuth consent, a scoped key minted at the end, the whole SoundCloud-shaped experience — so that the first interaction a developer or an agent has with the Postman API is the Postman API, not a settings screen. Until then, the meta-case stands. The API company makes you click the button by hand, and I keep banging my head against the same wall, one provider at a time.

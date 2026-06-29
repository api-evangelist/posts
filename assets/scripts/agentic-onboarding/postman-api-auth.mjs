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
 *   and optionally creating — a workspace. It prints the credential it used and the
 *   identity it resolved, mirroring the SoundCloud script's client_id/secret output.
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
 *   --name <name>             Workspace name (with --create-workspace). Default: "agentic-onboarding".
 *   --description <text>      Workspace description (with --create-workspace).
 *   -h, --help
 *
 * Docs:
 *   https://learning.postman.com/docs/reference/postman-api/authentication
 *   https://learning.postman.com/docs/developer/postman-api/make-postman-api-call
 *   https://www.postman.com/postman/postman-public-workspace/collection/i2uqzpp/postman-api
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

---
published: true
layout: post
title: Cloudflare Hands You a Token, but Only If You Click Through the Dashboard First
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/cloudflare-token-but-click-dashboard-first.png
date: 2026-08-09
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Cloudflare
  - Agents
  - AI
---

I keep coming back to the same wall. Every company on earth is telling me they are all in on AI, that agents are the future, that software will provision and operate itself. And then I go to actually onboard one of those agents to their API, and the very first thing they ask me to do is open a browser, log in as a human, and click a button. The contradiction never stops being funny to me, and it never stops being a problem.

So I have been working my way through the major gateway and identity providers, rebuilding the little SoundCloud script that does the whole thing in one file — open a browser, do PKCE OAuth, register an app, print `client_id` and `client_secret` to stdout. That script is my yardstick for what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should feel like. This week it is Cloudflare's turn, and Cloudflare is interesting because it sits right in the middle of the agentic story — it is the gateway in front of a huge slice of the web, and with API Shield it is the thing deciding whether an API consumer gets through at all.

Here is the honest mapping. Cloudflare has no Dynamic Client Registration. There is no `POST /register`, no RFC 7591, no OAuth dance you can script to mint a brand-new application identity from nothing. What Cloudflare does have is a clean management API for *tokens*, and an API token is the closest analog they offer to "register an app and get credentials." You call `POST /user/tokens` (or `POST /accounts/{account_id}/tokens`), you hand it a `name` and a `policies` array of permission groups plus resources, and it hands you back a `result.value` — the token string, shown exactly once. Everything authenticates with a plain `Authorization: Bearer` header. As management APIs go, it is well-designed and pleasant to call.

The catch is the bootstrap. To create a token via the API, you have to already hold a token, and that very first token is dashboard-minted. You go to My Profile, API Tokens, Create Token, and you click. There is no public self-serve path that gets you from "I have a Cloudflare account" to "I have a credential" without a human in a browser. So this lands squarely in what I have started calling bucket (b): a real management API gated behind a personal access token you paste in by hand. It is not the SoundCloud ideal, but it is a long way from the cloud providers who give you nothing scriptable at all. I'll take what I can get.

That shape changes what my script can honestly do. There is no browser flow to mirror, so I dropped the PKCE callback server entirely — it would be theater. Instead the CLI reads `CLOUDFLARE_API_TOKEN` and an optional `CLOUDFLARE_ACCOUNT_ID` from the environment, verifies the bootstrap token is live with `GET /user/tokens/verify`, looks up a permission group by name through `GET /user/tokens/permission_groups`, and then mints a fresh, narrowly-scoped child token. It handles the already-registered case the way the SoundCloud one does: if a token with the same name already exists, it tells you, because Cloudflare will never reprint an existing token's secret. The script is committed in the repo at `/assets/scripts/agentic-onboarding/cloudflare-api-auth.mjs`, Node 18+, no npm install:

```javascript
#!/usr/bin/env node
/**
 * cloudflare-api-auth.mjs
 *
 * Provider: Cloudflare (API / API Shield context)
 * What it does: Mints a SCOPED Cloudflare API Token via the management API — the
 *   closest thing Cloudflare has to "register an app and get credentials." It is the
 *   bucket-(b) shape: you paste a bootstrap API Token (dashboard-minted) via an env
 *   var, and this CLI creates a fresh, narrowly-scoped child token and prints its
 *   value ONCE. There is no RFC 7591 Dynamic Client Registration and no self-serve
 *   OAuth/PKCE app registration at Cloudflare, so there is no browser dance here.
 *
 * Auth model: Bearer API Token on every call (Authorization: Bearer <token>).
 *   The bootstrap token must itself hold "API Tokens Write" (User) permission so it
 *   can create other tokens.
 *
 * Env vars:
 *   CLOUDFLARE_API_TOKEN   (required) bootstrap token, dashboard-minted:
 *                          My Profile > API Tokens > Create Token. Needs the
 *                          "Create Additional Tokens" / API Tokens Write permission.
 *   CLOUDFLARE_ACCOUNT_ID  (optional) if set, an ACCOUNT-owned token is created at
 *                          POST /accounts/{id}/tokens; otherwise a USER token at
 *                          POST /user/tokens.
 *
 * Doc links:
 *   Create user token:  https://developers.cloudflare.com/api/resources/user/subresources/tokens/methods/create/
 *   Create acct token:  https://developers.cloudflare.com/api/resources/accounts/subresources/tokens/methods/create/
 *   Verify token:       https://developers.cloudflare.com/api/resources/user/subresources/tokens/methods/verify/
 *   Permission groups:  https://developers.cloudflare.com/api/resources/user/subresources/tokens/subresources/permission_groups/methods/list/
 *   API Shield mTLS:    https://developers.cloudflare.com/api/resources/client_certificates/methods/create/
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const API_BASE = "https://api.cloudflare.com/client/v4";

const HELP = `Usage: cloudflare-api-auth [options]

  Creates a scoped Cloudflare API Token using a bootstrap token you already hold,
  and prints the new token value (shown ONCE by Cloudflare). This is the closest
  Cloudflare analog to "register an app + get credentials" — bucket (b): a
  management API plus a personal access token. There is no Dynamic Client
  Registration and no browser OAuth here.

Env:
  CLOUDFLARE_API_TOKEN    Required. Bootstrap token (dashboard-minted) with the
                          "API Tokens Write" permission so it can mint tokens.
  CLOUDFLARE_ACCOUNT_ID   Optional. If set, creates an account-owned token at
                          POST /accounts/{id}/tokens instead of POST /user/tokens.

Options:
  --name           Required. Name for the new token (also used to detect duplicates).
  --permission     Permission group to grant, matched by name (default:
                   "DNS Read"). Use --list-permissions to browse available groups.
  --effect         "allow" or "deny" for the policy (default: allow).
  --expires-on     Optional. RFC3339 expiry, e.g. 2026-12-31T23:59:59Z
  --list-permissions   Print available permission groups and exit.
  -h, --help

Examples:
  CLOUDFLARE_API_TOKEN=cfut_xxx node cloudflare-api-auth.mjs --name "agent-dns-reader"
  CLOUDFLARE_API_TOKEN=cfut_xxx node cloudflare-api-auth.mjs --list-permissions
`;

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

/** Cloudflare wraps everything in { success, errors, messages, result }. */
function unwrap(json, what, status) {
  if (json && json.success === true) return json.result;
  const errs = Array.isArray(json?.errors) && json.errors.length
    ? json.errors.map((e) => `${e.code ?? "?"}: ${e.message ?? e}`).join("; ")
    : `HTTP ${status}`;
  throw new Error(`${what} failed: ${errs}`);
}

async function cf(path, { method = "GET", token, body } = {}) {
  const headers = { authorization: `Bearer ${token}`, accept: "application/json" };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  let json;
  const text = await res.text();
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`${method} ${path} returned non-JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }
  return { res, json };
}

/** Preflight: confirm the bootstrap token actually works before we try to mint. */
async function verifyToken(token) {
  const { res, json } = await cf("/user/tokens/verify", { token });
  const result = unwrap(json, "Token verify (GET /user/tokens/verify)", res.status);
  if (result?.status && result.status !== "active") {
    throw new Error(`Bootstrap token is "${result.status}", not active. Mint a fresh one in the dashboard.`);
  }
  return result;
}

async function listPermissionGroups(token) {
  // NOTE: verify — this list is large; we fetch the default page. The endpoint
  // supports ?name= / ?scope= filters if you want to narrow server-side.
  const { res, json } = await cf("/user/tokens/permission_groups", { token });
  return unwrap(json, "List permission groups (GET /user/tokens/permission_groups)", res.status);
}

function findPermissionGroup(groups, wanted) {
  const target = wanted.trim().toLowerCase();
  const exact = groups.find((g) => (g.name ?? "").toLowerCase() === target);
  if (exact) return exact;
  const partial = groups.filter((g) => (g.name ?? "").toLowerCase().includes(target));
  if (partial.length === 1) return partial[0];
  if (partial.length > 1) {
    throw new Error(
      `Permission "${wanted}" is ambiguous. Matches:\n  ` +
        partial.map((g) => g.name).join("\n  ") +
        `\nRe-run with an exact --permission name.`
    );
  }
  throw new Error(`No permission group matched "${wanted}". Run --list-permissions to see options.`);
}

/**
 * Best-effort duplicate detection for USER tokens. Cloudflare never returns a
 * token's secret value from a list call (only on create), so if a same-named
 * token already exists we surface its id and tell the user we cannot reprint it.
 * NOTE: verify — account-scoped token listing is not clearly documented; this
 * dup-check only runs for user tokens.
 */
async function findExistingUserToken(token, name) {
  const { res, json } = await cf("/user/tokens", { token });
  if (!json?.success) return null; // listing unavailable on this token; skip dup-check
  const list = Array.isArray(json.result) ? json.result : [];
  return list.find((t) => t?.name === name) ?? null;
}

function buildPolicy({ effect, permissionGroup, accountId }) {
  // Resources scope: account-level if we have an account id, else all accounts
  // the token's owner controls. This is intentionally broad-but-honest; tighten
  // `resources` per your needs (e.g. a single zone id) before relying on it.
  const resources = accountId
    ? { [`com.cloudflare.api.account.${accountId}`]: "*" }
    : { "com.cloudflare.api.account.*": "*" };
  return [
    {
      effect,
      permission_groups: [{ id: permissionGroup.id, name: permissionGroup.name }],
      resources,
    },
  ];
}

function formatTokenOutput({ result, accountId, permissionName }) {
  // Cloudflare's credential is a single bearer token string in result.value.
  // We mirror the SoundCloud script's `client_id=` / `client_secret=` ergonomics
  // by emitting the token under both an explicit label and a JSON blob.
  const pub = {
    id: result.id,
    name: result.name,
    value: result.value,
    status: result.status,
    expires_on: result.expires_on ?? null,
    scope: accountId ? `account:${accountId}` : "user",
    permission: permissionName,
  };
  const lines = [];
  // The token value IS the secret; there is no separate id/secret pair.
  lines.push(`api_token=${result.value ?? "(not returned)"}`);
  lines.push(`token_id=${result.id}`);
  lines.push("");
  lines.push("# Use it as:  Authorization: Bearer <api_token>");
  lines.push("# Cloudflare shows the value ONCE. Store it now.");
  lines.push("");
  lines.push(JSON.stringify(pub, null, 2));
  lines.push("");
  return lines.join("\n");
}

async function main() {
  let parsed;
  try {
    parsed = parseArgs({
      options: {
        name: { type: "string" },
        permission: { type: "string" },
        effect: { type: "string" },
        "expires-on": { type: "string" },
        "list-permissions": { type: "boolean" },
        help: { type: "boolean", short: "h" },
      },
      strict: true,
      allowPositionals: false,
    });
  } catch (e) {
    die(`${e.message}\n\n${HELP}`);
  }

  const { name, permission, effect, "expires-on": expiresOn, "list-permissions": listPerms, help } =
    parsed.values;

  if (help) {
    console.log(HELP);
    process.exit(0);
  }

  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    die(
      "Missing CLOUDFLARE_API_TOKEN.\n" +
        "Mint a bootstrap token in the dashboard (My Profile > API Tokens > Create Token)\n" +
        'with the "API Tokens Write" permission, then export it:\n' +
        "  export CLOUDFLARE_API_TOKEN=cfut_...\n"
    );
  }
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || "";

  // Preflight: prove the bootstrap token is live before doing anything destructive.
  await verifyToken(token);

  const groups = await listPermissionGroups(token);

  if (listPerms) {
    const sorted = [...groups].sort((a, b) =>
      (a.category ?? "").localeCompare(b.category ?? "") || (a.name ?? "").localeCompare(b.name ?? "")
    );
    for (const g of sorted) {
      console.log(`${(g.category ?? "-").padEnd(28)} ${g.name}`);
    }
    console.log(`\n${sorted.length} permission groups.`);
    process.exit(0);
  }

  if (!name) {
    die("Missing required --name.\n\n" + HELP);
  }

  const policyEffect = effect ?? "allow";
  if (policyEffect !== "allow" && policyEffect !== "deny") {
    die(`--effect must be "allow" or "deny", got "${policyEffect}".`);
  }

  // Handle the "already registered" case the way the SoundCloud script does:
  // if a token with this name exists, report it instead of creating a duplicate.
  if (!accountId) {
    const existing = await findExistingUserToken(token, name);
    if (existing) {
      console.error(
        `A token named "${name}" already exists (id=${existing.id}, status=${existing.status}).\n` +
          "Cloudflare will not reprint an existing token's secret. Either reuse it, roll it,\n" +
          "or pick a new --name."
      );
      process.stdout.write(
        JSON.stringify({ id: existing.id, name: existing.name, status: existing.status }, null, 2) + "\n"
      );
      process.exit(0);
    }
  }

  const permName = permission ?? "DNS Read";
  const permissionGroup = findPermissionGroup(groups, permName);

  const body = {
    name,
    policies: buildPolicy({ effect: policyEffect, permissionGroup, accountId }),
    ...(expiresOn ? { expires_on: expiresOn } : {}),
  };

  const path = accountId ? `/accounts/${accountId}/tokens` : "/user/tokens";
  const { res, json } = await cf(path, { method: "POST", token, body });
  const result = unwrap(json, `Create token (POST ${path})`, res.status);

  process.stdout.write(formatTokenOutput({ result, accountId, permissionName: permissionGroup.name }));
}

main().catch((e) => {
  die(`Error: ${e?.message || e}`);
});
```

There is a second credential story here worth naming, because Cloudflare wears two hats. The token above is the *management* credential — it is how you operate Cloudflare. But when Cloudflare is the gateway in front of *your* API and API Shield is enforcing mTLS, the credential an API consumer presents is a client certificate, minted with `POST /zones/{zone_id}/client_certificates` from a CSR. That is the consumer-side analog of getting credentials, and it is genuinely scriptable once you can sign a CSR. I like that it exists. It is also a reminder that "onboarding" means different things depending on which side of the gateway you are standing on.

So where does Cloudflare actually land? The management API is good. The token model is granular and scoped in a way I wish more providers copied. But the front door is still a human clicking through a dashboard, and that is the part that does not survive contact with an agent that is supposed to provision itself at three in the morning. If Cloudflare wants to fully meet the moment they keep telling me we are living in, the move is obvious: a real Dynamic Client Registration or device-grant flow that gets an agent from zero to a first, tightly-scoped token without a browser ever opening. Until then I'll keep pasting my bootstrap token into an env var and letting the script do the rest, because that is still better than most of the field. It just is not the future anyone is selling me.

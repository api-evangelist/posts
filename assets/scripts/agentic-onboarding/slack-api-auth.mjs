#!/usr/bin/env node
/**
 * slack-api-auth.mjs
 *
 * Provider: Slack
 * What it does: Programmatically creates (or updates) a Slack app via the App
 *   Manifest API and prints its credentials (client_id, client_secret,
 *   signing_secret, verification_token) to stdout. No browser, no npm.
 *
 * Auth model (bucket b): Management/Admin API + a pasted token. Slack does NOT
 *   offer browser-OAuth-then-register here. Instead a human generates an "App
 *   Configuration Token" once, on the app settings page, and the CLI uses it.
 *     - Config access token:  xoxe.xoxp-...   (expires 12h)
 *     - Config refresh token: xoxe-...        (used to mint a fresh access token)
 *   This script reads the access token from SLACK_CONFIG_TOKEN. If you also set
 *   SLACK_CONFIG_REFRESH_TOKEN, the script will first call tooling.tokens.rotate
 *   to get a fresh access token (handy when your pasted token has gone stale),
 *   and it prints the new tokens so you can update your env.
 *
 * Env vars:
 *   SLACK_CONFIG_TOKEN          required. App configuration access token (xoxe.xoxp-...).
 *   SLACK_CONFIG_REFRESH_TOKEN  optional. App config refresh token (xoxe-...). If set,
 *                               the script rotates first and uses the resulting token.
 *
 * Get the bootstrap tokens once (human, in a browser):
 *   https://api.slack.com/apps  ->  "Your App Configuration Tokens"  ->  Generate Token
 *   The token is unique to a user + workspace (not to an app), so one token can
 *   create/configure many apps in that workspace.
 *
 * Endpoints used:
 *   POST https://slack.com/api/tooling.tokens.rotate   (refresh_token)
 *   POST https://slack.com/api/apps.manifest.create    (token, manifest)
 *   POST https://slack.com/api/apps.manifest.update     (token, app_id, manifest)
 *
 * Docs:
 *   https://docs.slack.dev/reference/methods/apps.manifest.create/
 *   https://docs.slack.dev/reference/methods/tooling.tokens.rotate/
 *   https://docs.slack.dev/app-manifests/configuring-apps-with-app-manifests/
 *   https://docs.slack.dev/reference/app-manifest
 *
 * Node.js 18+ stdlib only (global fetch, node:util parseArgs). No npm install.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const SLACK_API = "https://slack.com/api";
const TOKEN_ROTATE_URL = `${SLACK_API}/tooling.tokens.rotate`;
const MANIFEST_CREATE_URL = `${SLACK_API}/apps.manifest.create`;
const MANIFEST_UPDATE_URL = `${SLACK_API}/apps.manifest.update`;

/** Human-friendly text for the Slack error codes we are most likely to hit. */
const ERROR_MESSAGES = {
  not_authed: "No config token was supplied or it was empty.",
  invalid_auth: "The config token is invalid. Generate a fresh one at https://api.slack.com/apps.",
  token_expired:
    "The config token has expired (they last 12h). Set SLACK_CONFIG_REFRESH_TOKEN to auto-rotate, or generate a new token.",
  token_revoked: "The config token has been revoked. Generate a new one at https://api.slack.com/apps.",
  invalid_manifest: "Slack rejected the manifest. Check display_information.name and required fields.",
  invalid_app: "Slack could not create the app from this manifest.",
  failed_creating_app: "Slack failed to create the app. Try again, or check your workspace app limits.",
  access_denied: "This config token is not allowed to perform this action.",
  managed_app_limit_reached: "Your workspace has reached its app limit.",
  ratelimited: "Slack is rate limiting these requests. Wait a moment and retry.",
};

function userMessageForError(code) {
  return ERROR_MESSAGES[code] || `Slack API error: ${code}`;
}

/**
 * Slack Web API methods always return HTTP 200 with an { ok: boolean } envelope.
 * Treat ok:false as the real error. Config-token methods accept either
 * x-www-form-urlencoded or application/json; we use form encoding.
 */
async function slackApi(url, params) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params).toString(),
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`POST ${url} returned non-JSON (${res.status}): ${text.slice(0, 300)}`);
  }
  if (!json.ok) {
    throw new Error(userMessageForError(json.error || "unknown_error"));
  }
  return json;
}

/**
 * Exchange a refresh token for a fresh config access token. Returns the new
 * token plus a new refresh token (Slack rotates both). No auth header needed.
 * @see https://docs.slack.dev/reference/methods/tooling.tokens.rotate/
 */
async function rotateConfigToken(refreshToken) {
  const json = await slackApi(TOKEN_ROTATE_URL, { refresh_token: refreshToken });
  return {
    token: json.token,
    refresh_token: json.refresh_token,
    team_id: json.team_id,
    user_id: json.user_id,
    exp: json.exp,
  };
}

/**
 * Build a minimal valid Slack app manifest. Only display_information.name is
 * strictly required to create an app; we add a couple of harmless extras.
 * @see https://docs.slack.dev/reference/app-manifest
 */
function buildManifest({ name, description, website }) {
  const manifest = {
    display_information: { name },
    settings: { org_deploy_enabled: false, socket_mode_enabled: false },
  };
  if (description) {
    // Slack caps long_description; keep this short and let users edit later.
    manifest.display_information.description = description.slice(0, 140);
  }
  if (website) {
    manifest.settings.allowed_ip_address_ranges = undefined; // no-op placeholder
    manifest.oauth_config = {
      redirect_urls: [website],
    };
  }
  return manifest;
}

/**
 * Create a new app from a manifest. Returns app_id + the credentials object.
 * @see https://docs.slack.dev/reference/methods/apps.manifest.create/
 */
async function createApp({ token, manifest, teamId }) {
  const params = { token, manifest: JSON.stringify(manifest) };
  if (teamId) params.team_id = teamId;
  const json = await slackApi(MANIFEST_CREATE_URL, params);
  return {
    app_id: json.app_id,
    credentials: json.credentials || {},
    oauth_authorize_url: json.oauth_authorize_url,
  };
}

/**
 * Update an existing app's manifest (the "already have an app" path). Slack does
 * NOT return secrets from update, so credentials are not reprinted here; the
 * client_secret/signing_secret are only revealed at create time and on the app's
 * Basic Information page thereafter.
 * @see https://docs.slack.dev/reference/methods/apps.manifest.update/
 */
async function updateApp({ token, appId, manifest }) {
  const json = await slackApi(MANIFEST_UPDATE_URL, {
    token,
    app_id: appId,
    manifest: JSON.stringify(manifest),
  });
  return { app_id: appId, permissions_updated: json.permissions_updated };
}

function formatCredentialOutput({ app_id, credentials, oauth_authorize_url }) {
  const c = credentials || {};
  const lines = [];
  if (c.client_id) lines.push(`client_id=${c.client_id}`);
  if (c.client_secret) lines.push(`client_secret=${c.client_secret}`);
  if (c.signing_secret) lines.push(`signing_secret=${c.signing_secret}`);
  if (c.verification_token) lines.push(`verification_token=${c.verification_token}`);
  const out = {
    app_id,
    client_id: c.client_id,
    client_secret: c.client_secret,
    signing_secret: c.signing_secret,
    verification_token: c.verification_token,
    oauth_authorize_url,
  };
  for (const k of Object.keys(out)) if (out[k] === undefined) delete out[k];
  lines.push("", JSON.stringify(out, null, 2), "");
  return lines.join("\n");
}

const HELP = `Usage: slack-api-auth [options]

  Creates a Slack app from an app manifest and prints its credentials
  (client_id, client_secret, signing_secret, verification_token).

  Slack has no browser-OAuth-then-register flow for this. You generate an App
  Configuration Token once at https://api.slack.com/apps ("Your App
  Configuration Tokens" -> Generate Token), then paste it via env var.

Options:
  --name         Required. App display name (display_information.name).
  --description  Optional. Short description (<=140 chars).
  --website      Optional. Added as an OAuth redirect URL.
  --update <id>  Optional. Update an existing app (App ID, e.g. A0123ABCD)
                 instead of creating a new one. Secrets are NOT re-printed.
  --team <id>    Optional. team_id, only needed with an org-level config token.
  -h, --help

Env vars:
  SLACK_CONFIG_TOKEN          Required. Config access token (xoxe.xoxp-...).
  SLACK_CONFIG_REFRESH_TOKEN  Optional. Refresh token (xoxe-...). If set, the
                              script rotates first and uses the fresh token,
                              then prints the new token pair to stderr.

Example:
  export SLACK_CONFIG_TOKEN="xoxe.xoxp-..."
  node slack-api-auth.mjs --name "My First Slack App" --description "Internal bot"
`;

async function main() {
  const {
    values: { name, description, website, update: updateId, team: teamId, help },
    positionals,
  } = parseArgs({
    options: {
      name: { type: "string" },
      description: { type: "string" },
      website: { type: "string" },
      update: { type: "string" },
      team: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: true,
  });

  if (help) {
    console.log(HELP);
    process.exit(0);
  }
  if (positionals.length > 0) {
    console.error(`Unexpected extra argument(s): ${positionals.join(" ")}`);
    console.error("If you used npm, put a double dash before the flags: npm start -- --name \"…\"");
    process.exit(1);
  }
  if (!name) {
    console.error("Missing required argument: --name");
    console.error('Example: node slack-api-auth.mjs --name "My First Slack App"');
    process.exit(1);
  }

  let token = process.env.SLACK_CONFIG_TOKEN;
  const refreshToken = process.env.SLACK_CONFIG_REFRESH_TOKEN;

  if (!token && !refreshToken) {
    console.error(
      "Set SLACK_CONFIG_TOKEN (and optionally SLACK_CONFIG_REFRESH_TOKEN).\n" +
        "Generate one at https://api.slack.com/apps -> Your App Configuration Tokens."
    );
    process.exit(1);
  }

  // If a refresh token is present, rotate first so we always use a live token.
  if (refreshToken) {
    try {
      const rotated = await rotateConfigToken(refreshToken);
      token = rotated.token;
      console.error("Rotated config token. Update your environment with the new values:");
      console.error(`  SLACK_CONFIG_TOKEN=${rotated.token}`);
      console.error(`  SLACK_CONFIG_REFRESH_TOKEN=${rotated.refresh_token}`);
    } catch (e) {
      if (!token) throw e; // can't proceed with no usable token
      console.error(`Token rotation failed (${e.message}); falling back to SLACK_CONFIG_TOKEN.`);
    }
  }

  const manifest = buildManifest({ name, description, website });

  if (updateId) {
    await updateApp({ token, appId: updateId, manifest });
    console.error(
      `Updated app ${updateId}. Slack does not return secrets on update; view them at\n` +
        `  https://api.slack.com/apps/${updateId}/general (Basic Information).`
    );
    process.stdout.write(JSON.stringify({ app_id: updateId, updated: true }, null, 2) + "\n");
    return;
  }

  const result = await createApp({ token, manifest, teamId });
  process.stdout.write(formatCredentialOutput(result));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

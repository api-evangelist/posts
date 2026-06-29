#!/usr/bin/env node
/**
 * twilio-api-auth.mjs
 *
 * Provider: Twilio
 * What it does: Creates a new Twilio API Key (the recommended scoped, long-lived
 *   credential) via the Account Management REST API and prints its SID + secret to
 *   stdout. The secret is shown ONLY at creation time, so capture it now. Optionally
 *   provisions an isolated subaccount first (--subaccount) so the key belongs to a
 *   fresh tenant rather than your main account.
 *
 * Auth model: Bucket (b) — management API + a token the user supplies via env vars.
 *   HTTP Basic, username = Account SID, password = Auth Token. There is no PKCE
 *   browser flow here: Twilio's bootstrap Account SID + Auth Token come from the
 *   Console (dashboard), and everything after that is real, scriptable REST.
 *
 * Env vars (required):
 *   TWILIO_ACCOUNT_SID   Your Account SID (starts with "AC..."), from the Console.
 *   TWILIO_AUTH_TOKEN    Your Auth Token, from the Console.
 *
 * Node.js 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   API Key resource: https://www.twilio.com/docs/iam/keys/api-key-resource
 *   Subaccounts:      https://www.twilio.com/docs/iam/api/subaccounts
 */
import { parseArgs } from "node:util";
import process from "node:process";

const TWILIO_API_BASE = "https://api.twilio.com";

function keysUrl(accountSid) {
  return `${TWILIO_API_BASE}/2010-04-01/Accounts/${encodeURIComponent(accountSid)}/Keys.json`;
}
function accountsUrl() {
  return `${TWILIO_API_BASE}/2010-04-01/Accounts.json`;
}

function basicAuthHeader(accountSid, authToken) {
  return "Basic " + Buffer.from(`${accountSid}:${authToken}`).toString("base64");
}

function parseTwilioError(text) {
  try {
    const j = JSON.parse(text);
    if (j && (j.message || j.code)) {
      return { code: j.code, message: j.message, more_info: j.more_info };
    }
  } catch {
    /* not JSON */
  }
  return null;
}

function describeError(prefix, status, text) {
  const e = parseTwilioError(text);
  if (e) {
    const bits = [`${prefix} failed: ${status}`, e.message];
    if (e.code) bits.push(`(Twilio error ${e.code})`);
    if (e.more_info) bits.push(e.more_info);
    return bits.filter(Boolean).join(" ");
  }
  return `${prefix} failed: ${status} ${text}`;
}

/**
 * Twilio's 2010-04-01 API takes application/x-www-form-urlencoded bodies and
 * authenticates with HTTP Basic (Account SID : Auth Token).
 */
async function twilioPostForm({ url, accountSid, authToken, form }) {
  const body = new URLSearchParams(form);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: basicAuthHeader(accountSid, authToken),
      "content-type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  return { res, text: await res.text() };
}

async function twilioGet({ url, accountSid, authToken }) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: basicAuthHeader(accountSid, authToken),
    },
  });
  return { res, text: await res.text() };
}

/** POST /2010-04-01/Accounts.json — create an isolated subaccount. */
async function createSubaccount({ accountSid, authToken, friendlyName }) {
  const form = {};
  if (friendlyName) form.FriendlyName = friendlyName;
  const { res, text } = await twilioPostForm({
    url: accountsUrl(),
    accountSid,
    authToken,
    form,
  });
  if (res.status !== 201 && res.status !== 200) {
    throw new Error(describeError(`Create subaccount (POST ${accountsUrl()})`, res.status, text));
  }
  const acct = JSON.parse(text);
  if (!acct.sid || !acct.auth_token) {
    throw new Error("Subaccount response did not include sid + auth_token.");
  }
  return { sid: acct.sid, authToken: acct.auth_token, friendlyName: acct.friendly_name };
}

/** GET Keys.json — list existing keys (secrets are NEVER returned here). */
async function findExistingKey({ accountSid, authToken, friendlyName }) {
  const url = keysUrl(accountSid);
  const { res, text } = await twilioGet({ url, accountSid, authToken });
  if (!res.ok) {
    throw new Error(describeError(`List keys (GET ${url})`, res.status, text));
  }
  const page = JSON.parse(text);
  const keys = Array.isArray(page.keys) ? page.keys : [];
  if (!friendlyName) return null;
  return keys.find((k) => k.friendly_name === friendlyName) || null;
}

/** POST Keys.json — create a new API Key. The secret comes back exactly once. */
async function createApiKey({ accountSid, authToken, friendlyName }) {
  const url = keysUrl(accountSid);
  const form = {};
  if (friendlyName) form.FriendlyName = friendlyName;
  const { res, text } = await twilioPostForm({ url, accountSid, authToken, form });
  if (res.status !== 201 && res.status !== 200) {
    throw new Error(describeError(`Create API Key (POST ${url})`, res.status, text));
  }
  const key = JSON.parse(text);
  if (!key.sid || !key.secret) {
    throw new Error("API Key response did not include sid + secret (the secret is only returned on creation).");
  }
  return {
    sid: key.sid,
    secret: key.secret,
    friendly_name: key.friendly_name,
    date_created: key.date_created,
  };
}

function publicCredentialFields(cred) {
  const out = {};
  for (const k of ["account_sid", "sid", "secret", "friendly_name", "date_created", "subaccount_sid"]) {
    if (cred[k] !== undefined && cred[k] !== null) out[k] = cred[k];
  }
  return out;
}

function formatCredentialOutput(cred) {
  const pub = publicCredentialFields(cred);
  const lines = [`sid=${pub.sid}`];
  if (pub.secret) lines.push(`secret=${pub.secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, subaccount: subArg, "subaccount-name": subNameArg, force: forceArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    subaccount: { type: "boolean" },
    "subaccount-name": { type: "string" },
    force: { type: "boolean" },
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
  console.log(`Usage: twilio-api-auth [options]

  Creates a Twilio API Key (SID + secret) using the Account Management REST API
  and prints them to stdout. The secret is shown ONLY once, at creation time.

Options:
  --name <text>             Friendly name for the new API Key (recommended).
  --subaccount              Create a fresh subaccount first, then mint the key in it.
  --subaccount-name <text>  Friendly name for the new subaccount (with --subaccount).
  --force                   Create a new key even if one with --name already exists.
  -h, --help

Environment:
  TWILIO_ACCOUNT_SID   Required. Account SID from the Twilio Console (starts "AC...").
  TWILIO_AUTH_TOKEN    Required. Auth Token from the Twilio Console.

  Bootstrap note: the Account SID + Auth Token themselves still come from the
  Console dashboard. Everything after that is automated here.
`);
  process.exit(0);
}

const bootstrapAccountSid = process.env.TWILIO_ACCOUNT_SID;
const bootstrapAuthToken = process.env.TWILIO_AUTH_TOKEN;

if (!bootstrapAccountSid || !bootstrapAuthToken) {
  console.error("Missing required environment variables: TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN");
  console.error("Get both from the Twilio Console: https://console.twilio.com/");
  console.error('Example:\n  TWILIO_ACCOUNT_SID=AC... TWILIO_AUTH_TOKEN=... node twilio-api-auth.mjs --name "My Agent Key"');
  process.exit(1);
}

const keyName = nameArg || "agentic-onboarding";

(async () => {
  try {
    // Decide which account the key lives in: the main account, or a fresh subaccount.
    let targetAccountSid = bootstrapAccountSid;
    let targetAuthToken = bootstrapAuthToken;
    let subaccountSid;

    if (subArg) {
      const sub = await createSubaccount({
        accountSid: bootstrapAccountSid,
        authToken: bootstrapAuthToken,
        friendlyName: subNameArg || keyName,
      });
      // New subaccounts authenticate with their OWN SID + auth_token.
      targetAccountSid = sub.sid;
      targetAuthToken = sub.authToken;
      subaccountSid = sub.sid;
      console.error(`Created subaccount ${sub.sid} (${sub.friendlyName || "no name"}).`);
    }

    // Honest "already registered" handling: keys are listable by friendly name,
    // but the secret is NOT retrievable after creation. Surface the match and stop
    // unless --force, because we cannot reprint the secret of an existing key.
    if (!forceArg) {
      const existing = await findExistingKey({
        accountSid: targetAccountSid,
        authToken: targetAuthToken,
        friendlyName: keyName,
      });
      if (existing) {
        console.error(
          `An API Key named "${keyName}" already exists (sid=${existing.sid}).\n` +
            "Twilio does not return the secret of an existing key, so it cannot be reprinted.\n" +
            "Re-run with --force to mint a new key (and a new secret)."
        );
        process.exit(2);
      }
    }

    const key = await createApiKey({
      accountSid: targetAccountSid,
      authToken: targetAuthToken,
      friendlyName: keyName,
    });

    process.stdout.write(
      formatCredentialOutput({
        account_sid: targetAccountSid,
        ...(subaccountSid ? { subaccount_sid: subaccountSid } : {}),
        sid: key.sid,
        secret: key.secret,
        friendly_name: key.friendly_name,
        date_created: key.date_created,
      })
    );
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

---
published: true
layout: post
title: Twilio Is What Programmatic Onboarding Looks Like When a Company Means It
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/twilio-programmatic-onboarding-means-it.png
date: 2026-08-15
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Twilio
  - Agents
  - AI
---

I have spent this whole series banging my head against the same wall. Company after company tells me they are all in on AI, all in on agents, all in on automation, and then they hand me an onboarding flow that assumes a human with a mouse, a marketing email I have to confirm, and a dashboard I have to click through to get a single credential. The contradiction never gets old to me. You cannot claim the agentic moment and then gate the front door behind a form that only a person can fill out. So it is a genuine relief to get to Twilio, because Twilio is one of the few providers in this series where I can actually do most of the thing.

Let me be honest about what bucket this is. This is not the SoundCloud ideal. There is no PKCE browser dance, no Dynamic Client Registration endpoint, no OAuth flow that takes me from zero to credentials with one login. This is bucket (b): a real management API plus a token you supply. But it is a good version of bucket (b), and the difference matters. Once I have my Account SID and my Auth Token, I can mint credentials with plain REST, and I can keep minting them, scope them, and isolate them, all from a script. That is the part most vendors never get to.

Here is the endpoint that makes me happy. You POST to `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Keys.json`, you authenticate with HTTP Basic using your Account SID as the username and your Auth Token as the password, you optionally pass a `FriendlyName`, and Twilio hands you back a JSON object with a `sid` and a `secret`. That secret is the Twilio analog of the `client_secret` I keep chasing, and it is shown to you exactly once. Store it now or lose it forever. The docs say it plainly: you will not be able to retrieve it again. That is the right design. The credential is real, it is scoped, it is the recommended long-lived thing to hand an agent, and creating it is a single authenticated HTTP call.

It gets better. You can POST to `/2010-04-01/Accounts.json` to create a whole subaccount first, with its own SID and its own auth token, and then mint a key inside that isolated tenant. So a script can provision a fresh, walled-off identity for a new integration and never touch the main account. That is the kind of primitive I want for agents. Give the agent its own subaccount, give it a scoped key, and if it misbehaves you revoke one key in one tenant and the blast radius stops there.

I retrofit the SoundCloud pattern onto this in the obvious way. There is no browser leg because there is nothing to log into interactively, so the script reads `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` from the environment and goes straight to the management API. It prints `sid=` and `secret=` to stdout just like the original prints `client_id=` and `client_secret=`. It handles the already-registered case the only honest way you can with Twilio: it lists your keys, and if one already carries the friendly name you asked for, it tells you it exists and refuses to pretend it can reprint a secret that Twilio will never return. You re-run with `--force` if you want a fresh key and a fresh secret. And with `--subaccount` it provisions the isolated tenant first. This is [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) that mostly delivers.

```javascript
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
```

The script is committed in the repo at `/assets/scripts/agentic-onboarding/twilio-api-auth.mjs` so you can run it yourself.

So what is left? The honest gap is the bootstrap. That very first Account SID and Auth Token still come from the Console, from a human logging into a dashboard, and there is no fully self-serve path that gets an agent its first credential from a cold start. I will take what I can get, and what Twilio gives me is more than almost anyone else in this series. But here is the hill I will happily die on: the last mile is the first mile. If Twilio wants to own the agentic moment the way its API tells me it could, it should let me bootstrap that first scoped credential without a person ever touching a browser, the way SoundCloud lets me. Give me a constrained, consented, programmatic path to the very first token, and the rest of this story is already written. Twilio is closer than nearly everyone. It should finish the walk.

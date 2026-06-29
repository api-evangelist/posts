---
published: true
layout: post
title: PayPal Lets You Mint a Token, But Not Register the App
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/paypal-client-credentials-dashboard-app.png
date: 2026-09-06
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - PayPal
  - Agents
  - AI
---

I keep coming back to the same wall. A company tells me, loudly, that it is all in on AI, that agents are the future, that everything is autonomous now, and then it asks me to log into a dashboard, click a button labeled "Create App," and copy two strings into my clipboard by hand. That contradiction is the whole story of API onboarding right now, and PayPal is a clean example of it. Not because PayPal is bad at this. Because PayPal is so good at the part it has automated that it makes the missing part impossible to ignore.

Let me be honest about where PayPal sits. When SoundCloud showed what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like, the ideal was a single script: open a browser, sign in, register an application, and print a fresh `client_id` and `client_secret` to stdout. No human in the loop after the consent screen. PayPal does not reach that bar, and I do not want to pretend it does. There is no public PayPal API to create a REST app or read back its secret. You go to developer.paypal.com, open Apps and Credentials, click Create App, and copy the client ID and secret yourself. That step is dashboard-only. A human, a mouse, a clipboard. The agentic dream stops at the door.

So this one is a meta-case. The registration is manual and I cannot script it away. But here is the thing I will happily take what I can get on: once you have those two strings, PayPal's actual auth is about as clean and scriptable as it gets. You `POST` to `/v1/oauth2/token` with HTTP Basic auth carrying your `client_id:secret`, a content type of `application/x-www-form-urlencoded`, and a body of exactly `grant_type=client_credentials`. Live is `https://api-m.paypal.com`, sandbox is `https://api-m.sandbox.paypal.com`. Back comes an `access_token`, a `token_type` of `Bearer`, an `expires_in`, and the `scope` and `app_id` the token carries. That is a token mint I can put in a script and never touch again. When it expires, I call the same endpoint and get another one. No browser, no callback server, no PKCE dance, because there is no user to consent on behalf of. It is server to server, and it is honest about being server to server.

That is the line I want to draw for anyone reading this who is responsible for a developer program. The boundary between "human required" and "automatable" is not where most companies think it is. PayPal has automated the recurring, high-frequency operation perfectly, the token mint, and left the one-time, low-frequency operation, app creation, stranded in a dashboard. I understand why. App creation touches account identity, business verification, risk, money. Nobody wants an agent spinning up a thousand PayPal apps unsupervised. Fair. But "we cannot let an anonymous agent do this" is a reason to gate registration behind real authorization, not a reason to make registration impossible to script for the legitimate developer who has already logged in and proven who they are.

So I wrote the script for the half PayPal does let me have, and I made it refuse to pretend about the half it does not. It reads `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, and `PAYPAL_ENV` from the environment, mints the token, and prints the credentials and token details to stdout the same way the SoundCloud script does. If you run it with no credentials, it does not throw a stack trace at you, it tells you plainly that PayPal has no API to create an app and points you at the dashboard to do the manual part first. There is a `--probe` flag that makes one authenticated call so you can confirm the Bearer token is actually live, because a token mint that returns 200 but produces a dead token is its own special kind of misery. One file, Node stdlib only, no `npm install`. It is committed in the repo at `/assets/scripts/agentic-onboarding/paypal-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * paypal-api-auth.mjs
 *
 * Provider:   PayPal (REST)
 * What it does:
 *   Mints a PayPal OAuth 2.0 access token from a REST app's client_id + secret
 *   using the client_credentials grant, and prints the credentials + token to stdout.
 *
 * Honest scope (bucket "c"): PayPal has NO public API to create a REST app or read
 *   back a client_id/secret. App registration is manual, in the Developer Dashboard
 *   (https://developer.paypal.com -> Apps & Credentials -> Create App). The only
 *   programmatic, self-serve step is the token mint below. This script automates that
 *   step and is explicit about the manual gap.
 *
 * Auth model:
 *   POST {base}/v1/oauth2/token
 *     Authorization: Basic base64(client_id:client_secret)
 *     Content-Type:  application/x-www-form-urlencoded
 *     body:          grant_type=client_credentials
 *   base = https://api-m.paypal.com (live) | https://api-m.sandbox.paypal.com (sandbox)
 *
 * Env vars (no flags carry secrets):
 *   PAYPAL_CLIENT_ID       required  - REST app client ID from the Dashboard
 *   PAYPAL_CLIENT_SECRET   required  - REST app secret from the Dashboard
 *   PAYPAL_ENV             optional  - "sandbox" (default) or "live"
 *
 * Flags:
 *   --env <sandbox|live>   override PAYPAL_ENV
 *   --probe                make one authenticated call to confirm the token is live
 *   --json                 print only the raw token JSON
 *   -h, --help
 *
 * Node 18+ stdlib only (global fetch). No npm dependencies.
 *
 * Docs:
 *   https://developer.paypal.com/api/rest/authentication/
 *   https://developer.paypal.com/api/rest/   (Get client ID and client secret)
 */
import { parseArgs } from "node:util";
import process from "node:process";

const BASES = {
  sandbox: "https://api-m.sandbox.paypal.com",
  live: "https://api-m.paypal.com",
};

function usage() {
  return `Usage: paypal-api-auth [options]

  Mints a PayPal OAuth 2.0 access token using the client_credentials grant and
  prints the credentials and token to stdout.

  NOTE: PayPal has no public API to create a REST app. Create one manually first:
    https://developer.paypal.com -> Apps & Credentials -> Create App
  then copy the client ID and secret into the environment variables below.

Environment:
  PAYPAL_CLIENT_ID       Required. REST app client ID.
  PAYPAL_CLIENT_SECRET   Required. REST app secret.
  PAYPAL_ENV             Optional. "sandbox" (default) or "live".

Options:
  --env <sandbox|live>   Override PAYPAL_ENV.
  --probe                Make one authenticated call to confirm the token works.
  --json                 Print only the raw token JSON.
  -h, --help

Example:
  PAYPAL_CLIENT_ID=... PAYPAL_CLIENT_SECRET=... PAYPAL_ENV=sandbox \\
    node paypal-api-auth.mjs --probe
`;
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function basicAuthHeader(clientId, clientSecret) {
  return "Basic " + Buffer.from(`${clientId}:${clientSecret}`, "utf8").toString("base64");
}

async function mintAccessToken({ base, clientId, clientSecret }) {
  const endpoint = `${base}/v1/oauth2/token`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: basicAuthHeader(clientId, clientSecret),
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }).toString(),
  });
  const text = await res.text();
  if (!res.ok) {
    // PayPal returns {"error":"invalid_client","error_description":"..."} on bad creds.
    let detail = text;
    try {
      const parsed = JSON.parse(text);
      detail = parsed.error_description || parsed.error || text;
    } catch {
      /* keep raw text */
    }
    if (res.status === 401) {
      throw new Error(
        `Token mint (POST ${endpoint}) returned 401: ${detail}\n` +
          "  Check that PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET match the selected env " +
          "(sandbox credentials do not work against live, and vice versa)."
      );
    }
    throw new Error(`Token mint (POST ${endpoint}) failed: ${res.status} ${detail}`);
  }
  return JSON.parse(text);
}

/**
 * Confirm the Bearer token is live by making one cheap authenticated call.
 * NOTE: verify — exact endpoint availability depends on the app's granted scopes.
 * The catalog/products list endpoint is broadly available to client_credentials apps.
 */
async function probeToken({ base, accessToken }) {
  const endpoint = `${base}/v1/catalogs/products?page_size=1`;
  const res = await fetch(endpoint, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  });
  const text = await res.text();
  if (res.ok) {
    return { ok: true, endpoint, status: res.status };
  }
  // A 403 still proves the token authenticated (it just lacks a scope); only
  // 401 means the token itself is not valid.
  if (res.status === 403) {
    return {
      ok: true,
      endpoint,
      status: res.status,
      note: "token authenticated (403 = valid token, this app lacks that product scope)",
    };
  }
  return { ok: false, endpoint, status: res.status, body: text };
}

function formatOutput({ env, base, clientId, token }) {
  const lines = [];
  // Mirror the SoundCloud script's stdout contract as closely as PayPal allows.
  lines.push(`client_id=${clientId}`);
  lines.push("client_secret=(provided via PAYPAL_CLIENT_SECRET; not echoed)");
  lines.push(`access_token=${token.access_token}`);
  lines.push("");
  lines.push(
    JSON.stringify(
      {
        env,
        base,
        client_id: clientId,
        token_type: token.token_type,
        expires_in: token.expires_in,
        scope: token.scope,
        app_id: token.app_id,
      },
      null,
      2
    )
  );
  lines.push("");
  return lines.join("\n");
}

async function main() {
  let parsed;
  try {
    parsed = parseArgs({
      options: {
        env: { type: "string" },
        probe: { type: "boolean" },
        json: { type: "boolean" },
        help: { type: "boolean", short: "h" },
      },
      strict: true,
      allowPositionals: true,
    });
  } catch (e) {
    fail(e.message);
  }

  const { values, positionals } = parsed;

  if (values.help) {
    console.log(usage());
    process.exit(0);
  }

  if (positionals.length > 0) {
    fail(`Unexpected argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  }

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    fail(
      "Missing PAYPAL_CLIENT_ID and/or PAYPAL_CLIENT_SECRET.\n" +
        "  PayPal has no API to create a REST app. Create one in the Dashboard first:\n" +
        "    https://developer.paypal.com -> Apps & Credentials -> Create App\n" +
        "  then export the client ID and secret as environment variables."
    );
  }

  const env = (values.env || process.env.PAYPAL_ENV || "sandbox").toLowerCase();
  const base = BASES[env];
  if (!base) {
    fail(`Unknown env "${env}". Use "sandbox" or "live".`);
  }

  let token;
  try {
    token = await mintAccessToken({ base, clientId, clientSecret });
  } catch (e) {
    fail(e.message);
  }
  if (!token.access_token) {
    fail("Token response did not contain an access_token.");
  }

  if (values.json) {
    process.stdout.write(JSON.stringify(token, null, 2) + "\n");
  } else {
    process.stdout.write(formatOutput({ env, base, clientId, token }));
  }

  if (values.probe) {
    let result;
    try {
      result = await probeToken({ base, accessToken: token.access_token });
    } catch (e) {
      console.error(`Probe call failed to run: ${e.message}`);
      process.exit(0);
    }
    if (result.ok) {
      console.error(
        `Verified: GET ${result.endpoint} -> ${result.status}` +
          (result.note ? ` (${result.note})` : "")
      );
    } else {
      console.error(
        `Probe warning: GET ${result.endpoint} -> ${result.status}. ` +
          "The token minted but this verification call did not succeed:\n" +
          result.body
      );
    }
  }
}

main().catch((e) => fail(e?.message || String(e)));
```

If PayPal wants to fully meet the agentic moment, the fix is not exotic. Give me an authenticated way to create a REST app for an account I have already proven I own, scoped and rate-limited and risk-checked however you need, and let me read back the credentials once over a secure channel. Dynamic Client Registration exists for exactly this. Until then I will keep doing the dashboard click, keep the secret in an environment variable, and let the script handle the part PayPal already does right. I will take the clean token mint. I just wish I did not have to use a mouse to get there.

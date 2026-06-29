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

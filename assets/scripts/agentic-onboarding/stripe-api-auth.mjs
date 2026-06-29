#!/usr/bin/env node
/**
 * stripe-api-auth.mjs
 *
 * Provider:   Stripe (https://stripe.com)
 * What it does:
 *   The SoundCloud companion to this series opens a browser, runs PKCE OAuth, and
 *   POSTs an app-registration endpoint to mint client_id/client_secret. Stripe has
 *   no equivalent: there is NO public endpoint to mint your own secret/restricted
 *   API key. Keys are created in the Dashboard (or rotated via key rollover). So
 *   this CLI does the honest, automatable version:
 *     1. Verifies the secret key you already pasted via env (GET /v1/account) and
 *        prints WHO you are (the one programmatic "identity" step Stripe gives you).
 *     2. Optionally walks the ONE real programmatic onboarding path Stripe does
 *        offer: POST /v1/accounts creates a Stripe Connect connected account that
 *        can transact (after the account completes onboarding). You then mint that
 *        account's restricted key in the Dashboard.
 *
 * Auth model:
 *   HTTP Basic auth (secret key as username, empty password) OR
 *   Authorization: Bearer <sk_...>. This CLI uses Bearer.
 *   Key formats: sk_test_… / sk_live_… (unrestricted) or rk_live_… (restricted).
 *
 * Env vars:
 *   STRIPE_SECRET_KEY   Required. Your sk_… (or rk_…) secret key. Created in the
 *                       Stripe Dashboard — there is no API to create it.
 *
 * Doc links:
 *   Auth ............... https://docs.stripe.com/api/authentication
 *   API keys ........... https://docs.stripe.com/keys
 *   Retrieve account ... https://docs.stripe.com/api/accounts/retrieve  (GET /v1/account)
 *   Create account ..... https://docs.stripe.com/api/accounts/create    (POST /v1/accounts)
 *   Connect ............ https://docs.stripe.com/connect
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 */
import { parseArgs } from "node:util";
import process from "node:process";

const STRIPE_API_BASE = "https://api.stripe.com/v1";
const ACCOUNT_URL = `${STRIPE_API_BASE}/account`;
const ACCOUNTS_URL = `${STRIPE_API_BASE}/accounts`;

/** Friendly messages for the Stripe error `type` / `code` values we expect to hit. */
const STRIPE_ERROR_MESSAGES = {
  api_key_expired: "Your STRIPE_SECRET_KEY is expired. Roll a new one in the Dashboard.",
  invalid_api_key:
    "STRIPE_SECRET_KEY is not a valid key. Copy it from https://dashboard.stripe.com/apikeys (or test mode).",
  account_invalid:
    "This key cannot perform that action. A restricted key (rk_…) may lack the needed permission.",
};

function stripeErrorMessage(parsed, fallback) {
  const err = parsed?.error;
  if (!err) return fallback;
  if (err.code && STRIPE_ERROR_MESSAGES[err.code]) return STRIPE_ERROR_MESSAGES[err.code];
  if (err.type && STRIPE_ERROR_MESSAGES[err.type]) return STRIPE_ERROR_MESSAGES[err.type];
  return err.message || fallback;
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Stripe authenticates with the secret key. We use a Bearer header; Basic auth
 * (key as username, empty password) is equivalent. Bodies are form-encoded, and
 * Stripe's "object[key]=value" bracket convention encodes nested params.
 */
async function stripeRequest({ secretKey, url, method = "GET", form }) {
  const headers = { authorization: `Bearer ${secretKey}` };
  let body;
  if (form !== undefined) {
    headers["content-type"] = "application/x-www-form-urlencoded";
    body = form.toString();
  }
  const res = await fetch(url, { method, headers, ...(body !== undefined ? { body } : {}) });
  const text = await res.text();
  return { res, text, json: safeJson(text) };
}

async function retrieveAccount({ secretKey }) {
  const { res, text, json } = await stripeRequest({ secretKey, url: ACCOUNT_URL });
  if (!res.ok) {
    throw new Error(
      `Identity check (GET ${ACCOUNT_URL}) failed: ${res.status} ${stripeErrorMessage(json, text)}`
    );
  }
  return json;
}

/**
 * The one programmatic onboarding path Stripe exposes: create a Connect
 * connected account. This account can transact once it finishes onboarding.
 * You mint ITS restricted API key later, in the Dashboard.
 */
async function createConnectedAccount({ secretKey, type, country, email }) {
  const form = new URLSearchParams({ type, country });
  if (email) form.set("email", email);
  const { res, text, json } = await stripeRequest({
    secretKey,
    url: ACCOUNTS_URL,
    method: "POST",
    form,
  });
  if (!res.ok) {
    throw new Error(
      `Create account (POST ${ACCOUNTS_URL}) failed: ${res.status} ${stripeErrorMessage(json, text)}`
    );
  }
  return json;
}

function formatAccountIdentity(account) {
  const fields = {
    account_id: account.id,
    email: account.email ?? null,
    country: account.country ?? null,
    business_name: account.business_profile?.name ?? account.settings?.dashboard?.display_name ?? null,
    charges_enabled: account.charges_enabled ?? null,
    payouts_enabled: account.payouts_enabled ?? null,
    livemode: account.livemode ?? null,
  };
  const lines = [`account_id=${fields.account_id}`];
  if (fields.email) lines.push(`email=${fields.email}`);
  lines.push("", JSON.stringify(fields, null, 2), "");
  return lines.join("\n");
}

function formatConnectedAccount(account) {
  const fields = {
    account_id: account.id,
    type: account.type ?? null,
    country: account.country ?? null,
    email: account.email ?? null,
    charges_enabled: account.charges_enabled ?? false,
    payouts_enabled: account.payouts_enabled ?? false,
    details_submitted: account.details_submitted ?? false,
  };
  const lines = [`account_id=${fields.account_id}`];
  lines.push("", JSON.stringify(fields, null, 2), "");
  lines.push(
    "Next steps (these are NOT available via the API):",
    `  1. Onboard this account so it can transact:`,
    `       https://dashboard.stripe.com/connect/accounts/${fields.account_id}`,
    `  2. Mint a restricted API key for it in the Dashboard:`,
    `       https://dashboard.stripe.com/apikeys`,
    ""
  );
  return lines.join("\n");
}

const {
  values: {
    "create-account": createAccountArg,
    type: typeArg,
    country: countryArg,
    email: emailArg,
    help: helpArg,
  },
  positionals,
} = parseArgs({
  options: {
    "create-account": { type: "boolean" },
    type: { type: "string" },
    country: { type: "string" },
    email: { type: "string" },
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
  console.log(`Usage: stripe-api-auth [options]

  Verifies your Stripe secret key against GET /v1/account and prints who you are.
  Stripe has NO public endpoint to mint your own secret/restricted API key — those
  are created in the Dashboard. The one programmatic onboarding path Stripe offers
  is Stripe Connect: --create-account creates a connected account (POST /v1/accounts)
  that can transact after onboarding.

Options:
  --create-account   Create a Stripe Connect connected account (POST /v1/accounts).
  --type             Connect account type: express | standard | custom (default: express).
  --country          ISO 3166-1 alpha-2 country for the new account (default: US).
  --email            Optional email for the new connected account.
  -h, --help

Environment:
  STRIPE_SECRET_KEY  Required. Your sk_… (or rk_…) secret key from the Dashboard.

Docs: https://docs.stripe.com/keys  |  https://docs.stripe.com/connect
`);
  process.exit(0);
}

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  console.error("Missing STRIPE_SECRET_KEY. Stripe has no API to create this key — copy it from");
  console.error("  https://dashboard.stripe.com/apikeys");
  console.error('Then: STRIPE_SECRET_KEY=sk_test_… node stripe-api-auth.mjs');
  process.exit(1);
}
if (!/^(sk|rk)_/.test(secretKey)) {
  console.error("STRIPE_SECRET_KEY should start with sk_ (secret) or rk_ (restricted).");
  process.exit(1);
}

(async () => {
  try {
    const account = await retrieveAccount({ secretKey });
    console.error(`Authenticated as Stripe account ${account.id}${account.livemode ? " (live)" : " (test)"}.`);
    process.stdout.write(formatAccountIdentity(account));

    if (createAccountArg) {
      const type = typeArg ?? "express";
      const country = countryArg ?? "US";
      console.error(`Creating a ${type} Connect account in ${country} …`);
      const connected = await createConnectedAccount({ secretKey, type, country, email: emailArg });
      process.stdout.write("\n" + formatConnectedAccount(connected));
    } else {
      console.error(
        "Tip: pass --create-account to walk Stripe's one programmatic onboarding path (Stripe Connect)."
      );
    }
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

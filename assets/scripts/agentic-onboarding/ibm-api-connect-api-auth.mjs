#!/usr/bin/env node
/**
 * ibm-api-connect-api-auth.mjs
 *
 * Provider:  IBM API Connect — Developer Portal "consumer" REST API (consumer-api).
 *
 * What it does:
 *   Creates (or finds) an application inside a consumer organization in an API
 *   Connect catalog and prints the resulting client_id / client_secret. Optionally
 *   subscribes that app to a published product plan with --product / --plan.
 *
 * Auth model (bucket b/c — Management/Admin API + a token you bring yourself):
 *   API Connect's consumer-api is a real REST API, but it is NOT a generic OAuth/DCR
 *   front door like SoundCloud's. Every call is scoped to one provider org + catalog
 *   and authenticated with a bearer token minted by THAT catalog's portal OIDC
 *   identity provider. There is no global, vendor-wide sign-in. So this tool does the
 *   honest thing: you bring the bearer token (APIC_TOKEN) and we automate the rest.
 *
 *   How a real user gets APIC_TOKEN (pick one):
 *     1. Portal password grant (most common for scripting). You first need a
 *        "consumer toolkit" app's client_id/client_secret for the catalog, then:
 *          POST {APIC_PORTAL_URL}/consumer-api/token
 *          { "grant_type":"password", "username":..., "password":...,
 *            "realm":"consumer:{porg}:{catalog}/{catalog}-idp",
 *            "client_id":..., "client_secret":... }
 *        The access_token from that response is your APIC_TOKEN.
 *        Pass --bootstrap-token-username/--password (+ APIC_TOKEN_CLIENT_ID /
 *        APIC_TOKEN_CLIENT_SECRET in env) and this script will mint it for you.
 *     2. Copy a live bearer token out of the Developer Portal browser session
 *        (DevTools → Network → Authorization: Bearer ...). Fine for a quick run.
 *
 * Env vars:
 *   APIC_PORTAL_URL          Required. Consumer-api base, e.g.
 *                            https://api.<region>.apiconnect.ibmcloud.com  (SaaS) or
 *                            https://consumer.<your-portal-host>            (self-managed).
 *                            We call {APIC_PORTAL_URL}/consumer-api/...
 *   APIC_CONSUMER_ORG        Required. Consumer org name (or id) that owns the app.
 *   APIC_CATALOG             Required. Catalog name (e.g. "sandbox", "production").
 *   APIC_PROVIDER_ORG        Required. Provider org name that owns the catalog.
 *                            (Provider org + catalog form the X-IBM-Consumer-Context.)
 *   APIC_TOKEN               Bearer token (see above). Required unless you pass
 *                            --bootstrap-token-username/--password.
 *   APIC_TOKEN_CLIENT_ID     Only for --bootstrap-token-*: the toolkit app client_id.
 *   APIC_TOKEN_CLIENT_SECRET Only for --bootstrap-token-*: the toolkit app secret.
 *
 * Node.js 18+ stdlib only. No npm install.
 *
 * Docs:
 *   https://cloud.ibm.com/apidocs/apiconnect/apic-consumer-api
 *   https://www.ibm.com/docs/en/api-connect/saas?topic=portal-calling-api
 *   https://community.ibm.com/community/user/integration/blogs/nick-cawood/2023/02/23/api-connect-v10-rest-api-calls-consumer-api-genera
 *   https://www.ibm.com/docs/en/api-connect/cloud/10.0.x_saas?topic=reference-api-connect-rest-apis
 */
import { parseArgs } from "node:util";
import process from "node:process";

const CONSUMER_API_PREFIX = "/consumer-api";

function die(msg) {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) die(`Missing required env var ${name}.`);
  return v.trim();
}

function trimTrailingSlash(s) {
  return s.replace(/\/+$/, "");
}

/** Provider org + catalog scope for every consumer-api call. */
function consumerContext({ providerOrg, catalog }) {
  return `${providerOrg}.${catalog}`;
}

/**
 * One consumer-api request. All calls carry the bearer token AND the
 * X-IBM-Consumer-Context header (provider org . catalog) — without that header
 * the gateway cannot route the request to the right catalog and returns 404/401.
 */
async function consumerApiRequest({ baseUrl, token, context, path, method = "GET", body }) {
  const url = `${trimTrailingSlash(baseUrl)}${CONSUMER_API_PREFIX}${path}`;
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
    "x-ibm-consumer-context": context,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  return { res, text, url };
}

function parseJsonOrNull(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Optional: mint a bearer token via the portal password grant so a fully
 * non-interactive run is possible when you have a consumer "toolkit" app.
 * Mirrors the documented POST /consumer-api/token call.
 */
async function bootstrapToken({ baseUrl, context, providerOrg, catalog, username, password, clientId, clientSecret }) {
  const url = `${trimTrailingSlash(baseUrl)}${CONSUMER_API_PREFIX}/token`;
  const realm = `consumer:${providerOrg}:${catalog}/${catalog}-idp`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-ibm-consumer-context": context,
    },
    body: JSON.stringify({
      grant_type: "password",
      username,
      password,
      realm,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token (POST ${url}) failed: ${res.status} ${text}`);
  }
  const json = parseJsonOrNull(text);
  if (!json?.access_token) {
    throw new Error(`Token response had no access_token: ${text}`);
  }
  return json.access_token;
}

async function listApps({ baseUrl, token, context, org }) {
  const { res, text, url } = await consumerApiRequest({
    baseUrl,
    token,
    context,
    path: `/orgs/${encodeURIComponent(org)}/apps`,
  });
  if (!res.ok) {
    throw new Error(`List apps (GET ${url}) failed: ${res.status} ${text}`);
  }
  const json = parseJsonOrNull(text) ?? {};
  // The consumer-api returns a collection under `results` (paged) in v10.
  return Array.isArray(json.results) ? json.results : Array.isArray(json) ? json : [];
}

function findAppByName(apps, name) {
  return apps.find((a) => a?.name === name || a?.title === name);
}

/**
 * Pull client_id / client_secret out of an app object. On creation the
 * consumer-api returns an `app_credentials` array (id, client_id, client_secret).
 * The secret is only ever returned at creation time.
 * // NOTE: verify the exact credential container name against your catalog's
 * // consumer-api version; older builds nest it under `credentials`.
 */
function credentialsFromApp(app) {
  const cred =
    (Array.isArray(app?.app_credentials) && app.app_credentials[0]) ||
    (Array.isArray(app?.credentials) && app.credentials[0]) ||
    app ||
    {};
  return {
    name: app?.name,
    title: app?.title,
    client_id: cred.client_id ?? app?.client_id,
    client_secret: cred.client_secret ?? app?.client_secret,
    app_url: app?.url,
  };
}

async function createApp({ baseUrl, token, context, org, name, title, summary, redirect }) {
  const body = {
    type: "app",
    name,
    title: title || name,
    ...(summary ? { summary } : {}),
    ...(redirect ? { redirect_endpoints: [redirect] } : {}),
  };
  const { res, text, url } = await consumerApiRequest({
    baseUrl,
    token,
    context,
    path: `/orgs/${encodeURIComponent(org)}/apps`,
    method: "POST",
    body,
  });

  if (res.status === 201 || res.status === 200) {
    return { app: parseJsonOrNull(text) ?? {}, existing: false };
  }

  // Name already taken in this consumer org → look it up and reuse it.
  if (res.status === 409 || /already exists|duplicate|name.*taken/i.test(text)) {
    const apps = await listApps({ baseUrl, token, context, org });
    const found = findAppByName(apps, name);
    if (found) return { app: found, existing: true };
  }

  if (res.status === 401 || res.status === 403) {
    throw new Error(
      `Create app (POST ${url}) was rejected: ${res.status}. ` +
        `Your APIC_TOKEN is missing, expired, or scoped to a different catalog. ${text}`
    );
  }
  throw new Error(`Create app (POST ${url}) failed: ${res.status} ${text}`);
}

async function subscribe({ baseUrl, token, context, org, appName, productPath, plan }) {
  const apps = await listApps({ baseUrl, token, context, org });
  const app = findAppByName(apps, appName);
  if (!app?.id) throw new Error(`Could not resolve app id for "${appName}" to subscribe.`);
  // Specify the plan name + the product, but not both an id AND a name/version.
  const body = { product: productPath, plan };
  const { res, text, url } = await consumerApiRequest({
    baseUrl,
    token,
    context,
    path: `/orgs/${encodeURIComponent(org)}/apps/${encodeURIComponent(app.id)}/subscriptions`,
    method: "POST",
    body,
  });
  if (res.status !== 201 && res.status !== 200) {
    throw new Error(`Subscribe (POST ${url}) failed: ${res.status} ${text}`);
  }
  return parseJsonOrNull(text) ?? {};
}

function formatCredentialOutput(c) {
  const pub = {};
  for (const k of ["name", "title", "client_id", "client_secret", "app_url"]) {
    if (c[k] !== undefined && c[k] !== null) pub[k] = c[k];
  }
  const lines = [];
  if (pub.client_id) lines.push(`client_id=${pub.client_id}`);
  if (pub.client_secret) lines.push(`client_secret=${pub.client_secret}`);
  lines.push("", JSON.stringify(pub, null, 2), "");
  return lines.join("\n");
}

const HELP = `Usage: ibm-api-connect-api-auth [options]

  Creates (or finds) an application in an IBM API Connect consumer organization
  via the Developer Portal consumer-api, then prints client_id / client_secret.

Required env:
  APIC_PORTAL_URL      Consumer-api base, e.g. https://api.<region>.apiconnect.ibmcloud.com
  APIC_CONSUMER_ORG    Consumer org that owns the app
  APIC_CATALOG         Catalog name (e.g. sandbox)
  APIC_PROVIDER_ORG    Provider org that owns the catalog
  APIC_TOKEN           Bearer token (portal OIDC). See header comment for how to get it.
                       Not needed if you pass --bootstrap-token-username/--password.

Options:
  --name <s>                 Required. Application name.
  --title <s>                Display title (defaults to --name).
  --description <s>          App summary.
  --website <s>              Redirect endpoint URL (redirect_endpoints[0]).
  --product <s>              Optional. Product path/url to subscribe to.
  --plan <s>                 Optional. Plan name to subscribe to (with --product).
  --bootstrap-token-username <s>
  --bootstrap-token-password <s>
                             Optional. Mint APIC_TOKEN via POST /consumer-api/token
                             (needs APIC_TOKEN_CLIENT_ID / APIC_TOKEN_CLIENT_SECRET).
  -h, --help

  Note: API Connect has no vendor-wide OAuth sign-in. Every call is scoped to one
  provider org + catalog via the X-IBM-Consumer-Context header and a per-catalog
  portal token. That is why this tool asks you to bring (or bootstrap) a token.
`;

let parsed;
try {
  parsed = parseArgs({
    options: {
      name: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      website: { type: "string" },
      product: { type: "string" },
      plan: { type: "string" },
      "bootstrap-token-username": { type: "string" },
      "bootstrap-token-password": { type: "string" },
      help: { type: "boolean", short: "h" },
    },
    strict: true,
    allowPositionals: true,
  });
} catch (e) {
  die(e.message);
}

const { values, positionals } = parsed;

if (positionals.length > 0) {
  die(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
}

if (values.help) {
  console.log(HELP);
  process.exit(0);
}

const name = values.name;
if (!name) die("Missing required argument: --name");
if (values.product && !values.plan) die("--product also needs --plan.");
if (values.plan && !values.product) die("--plan also needs --product.");

const baseUrl = requireEnv("APIC_PORTAL_URL");
const consumerOrg = requireEnv("APIC_CONSUMER_ORG");
const catalog = requireEnv("APIC_CATALOG");
const providerOrg = requireEnv("APIC_PROVIDER_ORG");
const context = consumerContext({ providerOrg, catalog });

async function resolveToken() {
  const u = values["bootstrap-token-username"];
  const pw = values["bootstrap-token-password"];
  if (u || pw) {
    if (!u || !pw) die("Both --bootstrap-token-username and --bootstrap-token-password are required.");
    const clientId = requireEnv("APIC_TOKEN_CLIENT_ID");
    const clientSecret = requireEnv("APIC_TOKEN_CLIENT_SECRET");
    console.error("Minting a portal token via POST /consumer-api/token ...");
    return bootstrapToken({
      baseUrl,
      context,
      providerOrg,
      catalog,
      username: u,
      password: pw,
      clientId,
      clientSecret,
    });
  }
  return requireEnv("APIC_TOKEN");
}

async function main() {
  const token = await resolveToken();

  const { app, existing } = await createApp({
    baseUrl,
    token,
    context,
    org: consumerOrg,
    name,
    title: values.title,
    summary: values.description,
    redirect: values.website,
  });

  if (existing) {
    console.error(
      `An application named "${name}" already exists in consumer org "${consumerOrg}". ` +
        "Reusing it. Note: the client_secret is only returned at creation time, so it may be blank below — " +
        "rotate the credential in the portal if you need a fresh secret."
    );
  }

  const creds = credentialsFromApp(app);
  if (!creds.client_id) {
    throw new Error(`No client_id found on the app response. Raw: ${JSON.stringify(app)}`);
  }

  if (values.product && values.plan) {
    console.error(`Subscribing "${name}" to plan "${values.plan}" of product "${values.product}" ...`);
    await subscribe({
      baseUrl,
      token,
      context,
      org: consumerOrg,
      appName: name,
      productPath: values.product,
      plan: values.plan,
    });
    console.error("Subscription created.");
  }

  process.stdout.write(formatCredentialOutput(creds));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

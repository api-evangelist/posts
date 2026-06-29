#!/usr/bin/env node
/**
 * kong-konnect-api-auth.mjs
 *
 * Provider: Kong Konnect (Kong's API management platform).
 *
 * What it does:
 *   Registers a Dev Portal *application* against a published API on a Kong
 *   Konnect Dev Portal, then prints the resulting credentials. Depending on the
 *   API's auth strategy you get either a Key-Auth API key, or an OIDC/DCR
 *   client_id + client_secret. Handles the "I already have this application"
 *   case by reading the existing one back. No npm install.
 *
 * Auth model (bucket b: management/admin API + pasted token):
 *   Kong Konnect is NOT SoundCloud. There is no public, bundled, browser-OAuth
 *   app that hands an anonymous agent a client_id. There are two token-gated
 *   planes and you paste a token via an env var:
 *
 *     1. Konnect platform/admin API  -> https://global.api.konghq.com/v3
 *        and per-geo control planes   -> https://{us|eu|au|me|in|sg}.api.konghq.com/v3
 *        Auth: Personal Access Token, prefix `kpat_`, as `Authorization: Bearer kpat_...`.
 *        Used here (with --list) to enumerate a portal's applications as an admin.
 *
 *     2. Dev Portal developer API    -> https://<portal-host>/api  (the portal's
 *        own host, e.g. *.portal.konghq.com or your custom domain). This is the
 *        plane that actually mints developer credentials. A developer logs in and
 *        receives a `portalaccesstoken`; this script lets you paste that token
 *        directly so the agent path stays headless.
 *
 * Env vars:
 *   KONNECT_TOKEN        Konnect Personal Access Token (kpat_...). Used for the
 *                        admin --list path against global/regional .api.konghq.com.
 *   KONNECT_REGION       Geo for the admin API: us|eu|au|me|in|sg (default: us).
 *   KONNECT_PORTAL_URL   Base URL of your Dev Portal, e.g.
 *                        https://my-portal.us.portal.konghq.com  (required to register).
 *   KONNECT_PORTAL_TOKEN portalaccesstoken from a logged-in developer session.
 *                        If absent, this tool will try KONNECT_PORTAL_EMAIL +
 *                        KONNECT_PORTAL_PASSWORD to log in for you.
 *   KONNECT_PORTAL_EMAIL / KONNECT_PORTAL_PASSWORD  Optional basic developer login.
 *
 * Docs:
 *   https://developer.konghq.com/konnect-api/
 *   https://developer.konghq.com/konnect-platform/authentication/
 *   https://developer.konghq.com/konnect-platform/geos/
 *   https://developer.konghq.com/dev-portal/self-service/
 *   https://developer.konghq.com/dev-portal/application-registration/
 *   https://developer.konghq.com/dev-portal/auth-strategies/
 *
 * Node.js 18+ stdlib only (global fetch). No dependencies.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const GLOBAL_API = "https://global.api.konghq.com";
const REGION_HOSTS = {
  us: "https://us.api.konghq.com",
  eu: "https://eu.api.konghq.com",
  au: "https://au.api.konghq.com",
  me: "https://me.api.konghq.com",
  in: "https://in.api.konghq.com",
  sg: "https://sg.api.konghq.com",
};

function regionApi(region) {
  // NOTE: verify exact per-geo host spelling for your org; global handles
  // identity/user/PAT resources, control planes are per-geo.
  return REGION_HOSTS[region] || GLOBAL_API;
}

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

async function jsonFetch(url, { method = "GET", token, cookie, body } = {}) {
  const headers = { accept: "application/json" };
  if (token) headers["authorization"] = `Bearer ${token}`;
  if (cookie) headers["cookie"] = cookie;
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  return { res, data, text };
}

/* ---------------------------------------------------------------- admin path */

/**
 * Admin: list a portal's developer applications via the Konnect platform API.
 * Auth is a personal access token (kpat_...). This CANNOT create an application
 * on a developer's behalf or read a developer's secret -- applications are owned
 * by developers in the Dev Portal. It is here to inspect / confirm.
 *   GET https://<region>.api.konghq.com/v3/portals/{portalId}/applications
 */
async function adminListApplications({ region, token, portalId }) {
  const base = regionApi(region);
  const url = `${base}/v3/portals/${encodeURIComponent(portalId)}/applications`;
  const { res, data, text } = await jsonFetch(url, { token });
  if (!res.ok) {
    throw new Error(`List apps (GET ${url}) failed: ${res.status} ${text}`);
  }
  return data?.data ?? data?.applications ?? data ?? [];
}

/* ------------------------------------------------------------ developer path */

/**
 * Optional: log a developer in to obtain a portalaccesstoken when one was not
 * pasted. The Dev Portal developer API lives under <portalUrl>/api.
 *   POST <portalUrl>/api/v3/developer/authenticate/basic   { username, password }
 * NOTE: verify the path/version for your portal -- some portals expose /api/v2.
 */
async function developerLogin({ portalUrl, email, password }) {
  const url = `${portalUrl.replace(/\/+$/, "")}/api/v3/developer/authenticate/basic`;
  const { res, data, text } = await jsonFetch(url, {
    method: "POST",
    body: { username: email, password },
  });
  if (!res.ok) {
    throw new Error(`Developer login (POST ${url}) failed: ${res.status} ${text}`);
  }
  // The portal sets a `portalaccesstoken` cookie and/or returns a token body.
  const setCookie = res.headers.get("set-cookie") || "";
  const match = /portalaccesstoken=([^;]+)/i.exec(setCookie);
  const fromCookie = match ? match[1] : null;
  const fromBody = data?.portalaccesstoken ?? data?.access_token ?? data?.token ?? null;
  const token = fromBody || fromCookie;
  if (!token) {
    throw new Error("Login succeeded but no portalaccesstoken was returned.");
  }
  return token;
}

function portalAuth(portalToken) {
  // The portal accepts the developer token either as a bearer or as the
  // portalaccesstoken cookie. We send both to be safe.
  return { token: portalToken, cookie: `portalaccesstoken=${portalToken}` };
}

/**
 * Find an existing developer application by name, or null.
 *   GET <portalUrl>/api/v3/applications
 * NOTE: verify path (/api/v3/applications vs /api/v3/developer/applications).
 */
async function findApplicationByName({ portalUrl, portalToken, name }) {
  const url = `${portalUrl.replace(/\/+$/, "")}/api/v3/applications`;
  const { res, data, text } = await jsonFetch(url, portalAuth(portalToken));
  if (!res.ok) {
    throw new Error(`List applications (GET ${url}) failed: ${res.status} ${text}`);
  }
  const list = data?.data ?? data?.applications ?? (Array.isArray(data) ? data : []);
  return list.find((a) => a?.name === name) || null;
}

/**
 * Create a developer application.
 *   POST <portalUrl>/api/v3/applications
 *   body: { name, description, redirect_uri?, auth_strategy_id? }
 * NOTE: verify body fields; auth_strategy_id is required when a portal exposes
 * more than one strategy.
 */
async function createApplication({ portalUrl, portalToken, name, description, redirectUri, authStrategyId }) {
  const url = `${portalUrl.replace(/\/+$/, "")}/api/v3/applications`;
  const body = { name, description };
  if (redirectUri) body.redirect_uri = redirectUri;
  if (authStrategyId) body.auth_strategy_id = authStrategyId;
  const { res, data, text } = await jsonFetch(url, { method: "POST", ...portalAuth(portalToken), body });
  if (res.status === 409) {
    // already exists -> read it back
    const existing = await findApplicationByName({ portalUrl, portalToken, name });
    if (existing) return { application: existing, existing: true };
    throw new Error(`Application "${name}" already exists but could not be read back.`);
  }
  if (!res.ok) {
    throw new Error(`Create application (POST ${url}) failed: ${res.status} ${text}`);
  }
  return { application: data, existing: false };
}

/**
 * Register an application against a published API (product) and/or generate
 * credentials. For Key-Auth strategies a key is generated; for OIDC/DCR the
 * client_id/client_secret were minted at create time.
 *   POST <portalUrl>/api/v3/applications/{applicationId}/credentials
 * NOTE: verify the registration vs. credential sub-resources for your portal;
 * some portals split "register against API" and "generate credential".
 */
async function generateCredential({ portalUrl, portalToken, applicationId, displayName }) {
  const url = `${portalUrl.replace(/\/+$/, "")}/api/v3/applications/${encodeURIComponent(applicationId)}/credentials`;
  const { res, data, text } = await jsonFetch(url, {
    method: "POST",
    ...portalAuth(portalToken),
    body: { display_name: displayName || "agentic-onboarding" },
  });
  if (!res.ok) {
    // Many OIDC apps already carry client_id/client_secret on the application
    // and have no separate credential resource; that is not a hard error.
    return { credential: null, notice: `No key generated (status ${res.status}); using app-level credentials.` };
  }
  return { credential: data };
}

/* -------------------------------------------------------------- output shape */

function shapeCredentials(application, credential) {
  const out = {
    application_id: application?.id ?? application?.application_id,
    name: application?.name,
    description: application?.description,
  };
  // OIDC / DCR style
  if (application?.client_id || application?.credentials?.client_id) {
    out.client_id = application.client_id ?? application.credentials.client_id;
    out.client_secret = application.client_secret ?? application.credentials?.client_secret;
  }
  // Key-Auth style
  const key = credential?.key ?? credential?.api_key ?? credential?.value;
  if (key) out.api_key = key;
  if (credential?.id) out.credential_id = credential.id;
  return out;
}

function formatOutput(creds) {
  const lines = [];
  if (creds.client_id) lines.push(`client_id=${creds.client_id}`);
  if (creds.client_secret) lines.push(`client_secret=${creds.client_secret}`);
  if (creds.api_key) lines.push(`api_key=${creds.api_key}`);
  lines.push("", JSON.stringify(creds, null, 2), "");
  return lines.join("\n");
}

/* ----------------------------------------------------------------------- cli */

const {
  values: {
    name: nameArg,
    description: descArg,
    website: siteArg,
    portal: portalIdArg,
    "auth-strategy": authStrategyArg,
    list: listArg,
    help: helpArg,
  },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    description: { type: "string" },
    website: { type: "string" },
    portal: { type: "string" }, // portalId (admin --list) or unused for dev path
    "auth-strategy": { type: "string" },
    list: { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  die(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
}

if (helpArg) {
  console.log(`Usage: kong-konnect-api-auth [options]

  Registers a Dev Portal application on a Kong Konnect Dev Portal and prints the
  resulting credentials (Key-Auth api_key, or OIDC client_id/client_secret).

  Kong Konnect uses pasted tokens, not a bundled browser-OAuth app, so set the
  relevant env vars below rather than logging in through a popup.

Options:
  --name           Required (register). Application name.
  --description    Optional. Application description.
  --website        Optional. Application redirect/website URL.
  --auth-strategy  Optional. auth_strategy_id when the portal exposes >1 strategy.
  --portal <id>    Portal id. Required with --list (admin path).
  --list           Admin: list a portal's applications via the platform API
                   using KONNECT_TOKEN (kpat_...). Does not mint secrets.
  -h, --help

Env vars:
  KONNECT_TOKEN          Personal Access Token (kpat_...) for the admin --list path.
  KONNECT_REGION         us|eu|au|me|in|sg for the admin API (default us).
  KONNECT_PORTAL_URL     Dev Portal base URL, e.g. https://p.us.portal.konghq.com
  KONNECT_PORTAL_TOKEN   portalaccesstoken from a logged-in developer session.
  KONNECT_PORTAL_EMAIL / KONNECT_PORTAL_PASSWORD   Optional basic dev login.

Docs: https://developer.konghq.com/dev-portal/self-service/
`);
  process.exit(0);
}

const region = (process.env.KONNECT_REGION || "us").toLowerCase();

async function main() {
  // -------- admin --list path (PAT) --------
  if (listArg) {
    const token = process.env.KONNECT_TOKEN;
    if (!token) die("Set KONNECT_TOKEN to a Konnect personal access token (kpat_...).");
    if (!token.startsWith("kpat_")) {
      console.error("Warning: KONNECT_TOKEN does not start with kpat_ (personal tokens are kpat_; spat_ is a system-account token).");
    }
    if (!portalIdArg) die("--list requires --portal <portalId>.");
    const apps = await adminListApplications({ region, token, portalId: portalIdArg });
    process.stdout.write(JSON.stringify(apps, null, 2) + "\n");
    return;
  }

  // -------- developer registration path (portalaccesstoken) --------
  const portalUrl = process.env.KONNECT_PORTAL_URL;
  if (!portalUrl) die("Set KONNECT_PORTAL_URL to your Dev Portal base URL.");
  if (!nameArg) die("Missing required --name (the application name).");

  let portalToken = process.env.KONNECT_PORTAL_TOKEN;
  if (!portalToken) {
    const email = process.env.KONNECT_PORTAL_EMAIL;
    const password = process.env.KONNECT_PORTAL_PASSWORD;
    if (!email || !password) {
      die(
        "No KONNECT_PORTAL_TOKEN, and KONNECT_PORTAL_EMAIL / KONNECT_PORTAL_PASSWORD are not both set.\n" +
          "Paste a portalaccesstoken from a logged-in developer session, or provide developer credentials."
      );
    }
    console.error("Logging in to the Dev Portal as a developer...");
    portalToken = await developerLogin({ portalUrl, email, password });
  }

  const { application, existing } = await createApplication({
    portalUrl,
    portalToken,
    name: nameArg,
    description: descArg || "",
    redirectUri: siteArg,
    authStrategyId: authStrategyArg,
  });
  if (existing) {
    console.error(`Application "${nameArg}" already exists; returning it.`);
  }

  const appId = application?.id ?? application?.application_id;
  let credential = null;
  if (appId) {
    const gen = await generateCredential({
      portalUrl,
      portalToken,
      applicationId: appId,
      displayName: nameArg,
    });
    if (gen.notice) console.error(gen.notice);
    credential = gen.credential;
  }

  const creds = shapeCredentials(application, credential);
  if (!creds.client_id && !creds.api_key) {
    console.error(
      "No client_id or api_key was returned. This usually means the API uses an " +
        "OIDC strategy whose secret is shown once in the UI, or registration must be " +
        "approved by a portal admin first."
    );
  }
  process.stdout.write(formatOutput(creds));
}

main().catch((e) => {
  console.error("Error:", e?.message || e);
  process.exit(1);
});

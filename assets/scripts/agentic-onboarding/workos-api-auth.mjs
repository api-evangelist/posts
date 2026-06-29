#!/usr/bin/env node
/**
 * workos-api-auth.mjs
 *
 * Provider:   WorkOS (https://workos.com)
 * What:       Verifies a WorkOS secret API key, then creates an Organization
 *             via the WorkOS Management API and prints its id + handle.
 * Auth model: Bucket (b) — Management/Admin API + a secret API key.
 *             The WorkOS *platform* API key (sk_...) is minted in the
 *             Dashboard (API Keys) and pasted via env var. There is NO public
 *             endpoint to programmatically create this root key — that part is
 *             the dashboard-only meta-case. Everything after is scriptable.
 * Env vars:   WORKOS_API_KEY   Required. Secret key, prefixed sk_ (test or prod).
 * Endpoints:  Base https://api.workos.com
 *             GET  /organizations            (used to verify the key works)
 *             POST /organizations            (create an Organization)
 *             GET  /organizations/{id}       (read back / confirm)
 * Docs:       https://workos.com/docs/reference/organization
 *             https://workos.com/docs/authkit/api-keys
 * Node:       18+ (global fetch, node: stdlib only — no npm install).
 *
 * NOTE: WorkOS has DCR-adjacent features that are NOT what this script targets:
 *   - API Keys for YOUR customers: POST /organizations/{id}/api_keys
 *   - M2M apps (client_credentials) under Connect.
 * Both issue credentials to your end-users; neither self-registers a client
 * against WorkOS itself, so they don't replace the dashboard-minted root key.
 */
import { parseArgs } from "node:util";
import process from "node:process";

const WORKOS_API_BASE = "https://api.workos.com";
const ORGANIZATIONS_URL = new URL("/organizations", WORKOS_API_BASE).toString();

const API_ERROR_HINTS = {
  401: "The WorkOS API key was rejected. Check WORKOS_API_KEY — it must be a secret key prefixed sk_ from Dashboard > API Keys.",
  403: "The API key is valid but not allowed to perform this action. Check the key's environment (test vs production) and permissions.",
  422: "WorkOS rejected the request body. An Organization requires a non-empty name; domains, if given, must be well-formed.",
  429: "Rate limited by WorkOS. Wait a moment and retry.",
};

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function parseStructuredApiError(text) {
  try {
    const body = JSON.parse(text);
    // WorkOS returns { message, code, errors: [{ field, code }] } shapes.
    const detail =
      body.message ||
      body.error_description ||
      body.error ||
      (Array.isArray(body.errors) && body.errors.length
        ? body.errors.map((e) => `${e.field ?? ""} ${e.code ?? e.message ?? ""}`.trim()).join("; ")
        : null);
    return { message: detail, raw: body };
  } catch {
    return { message: null, raw: null };
  }
}

function apiErrorMessage(status, text) {
  const parsed = parseStructuredApiError(text);
  const hint = API_ERROR_HINTS[status];
  const detail = parsed.message || text || "(no response body)";
  return hint ? `${hint}\n  WorkOS said: ${detail}` : `HTTP ${status}: ${detail}`;
}

/**
 * WorkOS authenticates every request with `Authorization: Bearer sk_...`.
 * The secret key is created in the Dashboard; it is not mintable via the API.
 */
async function workosRequest({ apiKey, endpoint, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${apiKey}`,
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

/**
 * There is no /me for a platform key, so we verify identity by listing one
 * organization. A 200 proves the sk_ key is valid and tells us the key works
 * in its environment (test vs production is encoded by the dashboard env).
 */
async function verifyApiKey({ apiKey }) {
  const url = new URL(ORGANIZATIONS_URL);
  url.searchParams.set("limit", "1");
  const { res, text } = await workosRequest({ apiKey, endpoint: url.toString() });
  if (!res.ok) {
    throw new Error(apiErrorMessage(res.status, text));
  }
  let page;
  try {
    page = JSON.parse(text);
  } catch {
    throw new Error("Could not parse the verification response from WorkOS.");
  }
  const env = apiKey.startsWith("sk_test_") ? "test" : apiKey.startsWith("sk_live_") ? "production" : "unknown";
  return { ok: true, environment: env, listEndpoint: page?.list_metadata !== undefined };
}

function domainDataFromArg(domainArg) {
  if (!domainArg) return undefined;
  // WorkOS expects [{ domain, state }]; "verified" trusts the domain as-is.
  return domainArg
    .split(",")
    .map((d) => d.trim())
    .filter(Boolean)
    .map((domain) => ({ domain, state: "verified" }));
}

async function findExistingOrganizationByName({ apiKey, name }) {
  const url = new URL(ORGANIZATIONS_URL);
  url.searchParams.set("search", name);
  url.searchParams.set("limit", "100");
  const { res, text } = await workosRequest({ apiKey, endpoint: url.toString() });
  if (!res.ok) return null; // search is best-effort; creation still attempts below
  try {
    const page = JSON.parse(text);
    const list = Array.isArray(page?.data) ? page.data : [];
    return list.find((org) => org?.name === name) ?? null;
  } catch {
    return null;
  }
}

async function getOrganization({ apiKey, id }) {
  const endpoint = new URL(`/organizations/${encodeURIComponent(id)}`, WORKOS_API_BASE).toString();
  const { res, text } = await workosRequest({ apiKey, endpoint });
  if (!res.ok) throw new Error(apiErrorMessage(res.status, text));
  return JSON.parse(text);
}

async function createOrFetchOrganization({ apiKey, name, domainArg, externalId }) {
  // Handle the already-registered case the way the SoundCloud script does:
  // look first, and return the existing record instead of erroring out.
  const existing = await findExistingOrganizationByName({ apiKey, name });
  if (existing) {
    return { organization: existing, existing: true };
  }

  const body = { name };
  const domain_data = domainDataFromArg(domainArg);
  if (domain_data && domain_data.length) body.domain_data = domain_data;
  if (externalId) body.external_id = externalId;

  const { res, text } = await workosRequest({
    apiKey,
    endpoint: ORGANIZATIONS_URL,
    method: "POST",
    body,
  });

  if (res.status === 201 || res.status === 200) {
    return { organization: JSON.parse(text), existing: false };
  }

  // WorkOS returns 409/422 if an org with the same external_id already exists.
  if (res.status === 409) {
    const again = await findExistingOrganizationByName({ apiKey, name });
    if (again) return { organization: again, existing: true };
  }

  throw new Error(apiErrorMessage(res.status, text));
}

function publicOrgFields(org) {
  const fields = {};
  for (const key of ["id", "name", "object", "external_id", "created_at", "updated_at"]) {
    if (org[key] !== undefined && org[key] !== null) fields[key] = org[key];
  }
  if (Array.isArray(org.domains) && org.domains.length) {
    fields.domains = org.domains.map((d) => (typeof d === "string" ? d : d.domain)).filter(Boolean);
  }
  return fields;
}

function formatOrgOutput(org, environment) {
  const f = publicOrgFields(org);
  const lines = [];
  lines.push(`organization_id=${f.id}`);
  if (f.name) lines.push(`name=${f.name}`);
  if (environment) lines.push(`environment=${environment}`);
  lines.push("", JSON.stringify(f, null, 2), "");
  return lines.join("\n");
}

const {
  values: { name: nameArg, domain: domainArg, "external-id": externalIdArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    domain: { type: "string" },
    "external-id": { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  console.error(
    "If you used npm, put a double dash before the script options so npm does not swallow them, e.g.:\n" +
      '  npm start -- --name "Acme, Inc."'
  );
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: workos-api-auth --name "<Organization Name>" [options]

  Verifies your WorkOS secret API key, then creates an Organization via
  POST /organizations and prints its id. If an Organization with the same
  name already exists, it is returned instead of erroring.

  Unlike the SoundCloud flow, there is NO browser OAuth step: WorkOS's secret
  API key is minted in the Dashboard (API Keys) and read from the environment.

Options:
  --name          Required. Organization name for POST /organizations.
  --domain        Optional. Comma-separated verified domains (e.g. acme.com,acme.io).
  --external-id   Optional. Your own stable id for this Organization.
  -h, --help

Environment:
  WORKOS_API_KEY  Required. Secret key prefixed sk_ from Dashboard > API Keys.

  With npm, pass a double dash before these flags: npm start -- --name "…"
`);
  process.exit(0);
}

const apiKey = process.env.WORKOS_API_KEY;
if (!apiKey) {
  fail("WORKOS_API_KEY is not set. Create a secret key in Dashboard > API Keys and export it:\n  export WORKOS_API_KEY=sk_test_...");
}
if (!/^sk_/.test(apiKey)) {
  fail("WORKOS_API_KEY does not look like a WorkOS secret key (it should start with sk_).");
}

const name = nameArg;
if (!name) {
  console.error("Missing required argument: --name");
  console.error('Example: node workos-api-auth.mjs --name "Acme, Inc." --domain acme.com');
  process.exit(1);
}

(async () => {
  try {
    const id = await verifyApiKey({ apiKey });
    console.error(`API key verified (environment: ${id.environment}).`);

    const result = await createOrFetchOrganization({
      apiKey,
      name,
      domainArg,
      externalId: externalIdArg,
    });

    if (result.existing) {
      console.error(`An Organization named "${name}" already exists; returning it.`);
    } else {
      console.error(`Created Organization "${name}".`);
    }

    // Read back through GET /organizations/{id} so the printed record is canonical.
    let org = result.organization;
    if (org?.id) {
      try {
        org = await getOrganization({ apiKey, id: org.id });
      } catch {
        /* keep the create/search response if the read-back fails */
      }
    }

    process.stdout.write(formatOrgOutput(org, id.environment));
    process.exit(0);
  } catch (e) {
    fail(e?.message || String(e));
  }
})();

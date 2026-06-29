#!/usr/bin/env node
/**
 * azure-apim-api-auth.mjs
 *
 * Provider: Azure API Management (APIM)
 * What it does: Creates (or fetches) an APIM *subscription* tied to a *product* and prints
 *               the subscription's primary/secondary keys — the closest APIM equivalent of an
 *               "application credential". Optionally provisions the owning user first.
 *
 * Auth model (bucket "c" — cloud IAM, no public self-serve DCR):
 *   All calls hit the Azure Resource Manager (ARM) management plane and require an
 *   Azure AD bearer token for resource https://management.azure.com/. There is no
 *   browser-OAuth-in-this-script path a third party can run; you must already be an
 *   authenticated Azure RBAC principal (API Management Service Contributor or write access).
 *   Get a token out-of-band, e.g.:
 *       az account get-access-token --resource https://management.azure.com --query accessToken -o tsv
 *
 * The APIM "app" is a SUBSCRIPTION, not an OAuth client_id/secret. The key is sent at runtime
 * as the `Ocp-Apim-Subscription-Key` header. Keys are NOT returned on PUT/GET; you must POST
 * /listSecrets to read them.
 *
 * Env vars (required):
 *   AZURE_ACCESS_TOKEN     ARM bearer token (https://management.azure.com/ audience)
 *   AZURE_SUBSCRIPTION_ID  Azure subscription (UUID) that owns the APIM service
 *   APIM_RESOURCE_GROUP    Resource group of the APIM service
 *   APIM_SERVICE_NAME      Name of the APIM service instance
 *   APIM_PRODUCT_ID        Product id to subscribe to (e.g. "starter", "unlimited")
 *
 * Node.js 18+ stdlib only (no npm dependencies).
 *
 * Docs:
 *   Subscription_CreateOrUpdate: https://learn.microsoft.com/en-us/rest/api/apimanagement/subscription/create-or-update
 *   Subscription_ListSecrets:    https://learn.microsoft.com/en-us/rest/api/apimanagement/subscription/list-secrets
 *   User_CreateOrUpdate:         https://learn.microsoft.com/en-us/rest/api/apimanagement/user/create-or-update
 *   Subscriptions overview:      https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-create-subscriptions
 */
import crypto from "node:crypto";
import { parseArgs } from "node:util";
import process from "node:process";

const ARM = "https://management.azure.com";
const API_VERSION = "2024-05-01";

function requireEnv(name) {
  const v = process.env[name];
  if (!v || !v.trim()) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return v.trim();
}

function servicePath({ subscriptionId, resourceGroup, serviceName }) {
  return (
    `/subscriptions/${subscriptionId}` +
    `/resourceGroups/${resourceGroup}` +
    `/providers/Microsoft.ApiManagement/service/${serviceName}`
  );
}

/** All ARM calls share the same bearer-token auth header. */
async function armRequest({ token, method, path, query = {}, body }) {
  const url = new URL(ARM + path);
  url.searchParams.set("api-version", API_VERSION);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(url.toString(), {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  return { res, text, url: url.toString() };
}

function parseArmError(text) {
  try {
    const e = JSON.parse(text)?.error;
    if (!e) return null;
    return { code: e.code, message: e.message };
  } catch {
    return null;
  }
}

function fail(label, { res, text, url }) {
  const e = parseArmError(text);
  const detail = e ? `${e.code}: ${e.message}` : text;
  throw new Error(`${label} (${res.status} ${url}) failed: ${detail}`);
}

/** Optionally create the owning user (idempotent PUT). Returns the /users/{id} ownerId path. */
async function ensureUser({ token, sp, userId, email, firstName, lastName }) {
  const { res, text, url } = await armRequest({
    token,
    method: "PUT",
    path: `${sp}/users/${encodeURIComponent(userId)}`,
    body: {
      properties: { email, firstName, lastName, confirmation: "signup" },
    },
  });
  if (res.status === 200 || res.status === 201) {
    return `/users/${userId}`;
  }
  fail("Create user", { res, text, url });
}

/** PUT the subscription. 201 = newly created, 200 = already subscribed. */
async function createOrFetchSubscription({ token, sp, sid, displayName, scope, ownerId }) {
  const properties = { displayName, scope, state: "active" };
  if (ownerId) properties.ownerId = ownerId;
  const { res, text, url } = await armRequest({
    token,
    method: "PUT",
    path: `${sp}/subscriptions/${encodeURIComponent(sid)}`,
    body: { properties },
  });
  if (res.status === 201) return { existing: false };
  if (res.status === 200) return { existing: true };
  fail("Create subscription", { res, text, url });
}

/** Keys are blank on PUT/GET — read them via POST /listSecrets. */
async function listSecrets({ token, sp, sid }) {
  const { res, text, url } = await armRequest({
    token,
    method: "POST",
    path: `${sp}/subscriptions/${encodeURIComponent(sid)}/listSecrets`,
  });
  if (!res.ok) fail("List secrets", { res, text, url });
  return JSON.parse(text);
}

function formatCredentialOutput({ sid, displayName, productId, keys, ownerId }) {
  // APIM has no client_id/client_secret. The runtime credential is the subscription key,
  // sent as the Ocp-Apim-Subscription-Key header. We map it onto the series' shape so the
  // output is greppable, while staying honest about what it actually is.
  const credentials = {
    subscription_id: sid,
    display_name: displayName,
    product_id: productId,
    primary_key: keys.primaryKey,
    secondary_key: keys.secondaryKey,
    runtime_header: "Ocp-Apim-Subscription-Key",
  };
  if (ownerId) credentials.owner_id = ownerId;
  const lines = [
    `client_id=${sid}`,
    `client_secret=${keys.primaryKey}`,
    "",
    JSON.stringify(credentials, null, 2),
    "",
  ];
  return lines.join("\n");
}

const {
  values: { name: nameArg, sid: sidArg, owner: ownerArg, email: emailArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    sid: { type: "string" },
    owner: { type: "string" },
    email: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: azure-apim-api-auth [options]

  Creates (or fetches) an Azure API Management *subscription* to a product and prints its
  primary/secondary keys. The APIM "application" is a subscription; the runtime credential is
  the subscription key (Ocp-Apim-Subscription-Key header), NOT an OAuth client_id/secret.

  This is bucket (c): there is no third-party self-serve registration. You must already be an
  authenticated Azure RBAC principal. Provide an ARM bearer token via AZURE_ACCESS_TOKEN, e.g.:
    export AZURE_ACCESS_TOKEN=$(az account get-access-token \\
      --resource https://management.azure.com --query accessToken -o tsv)

Options:
  --name      Subscription display name (default: derived).
  --sid       Subscription entity id / resource name (default: a random "cli-<hex>").
  --owner     Optional APIM user id to own the subscription. With --email the user is created.
  --email     Email for the owner user (used only when --owner is given and user is created).
  -h, --help

Required env vars:
  AZURE_ACCESS_TOKEN     ARM bearer token (audience https://management.azure.com/)
  AZURE_SUBSCRIPTION_ID  Azure subscription UUID owning the APIM service
  APIM_RESOURCE_GROUP    Resource group of the APIM service
  APIM_SERVICE_NAME      APIM service instance name
  APIM_PRODUCT_ID        Product id to subscribe to (e.g. "starter", "unlimited")
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`);
  process.exit(1);
}

const token = requireEnv("AZURE_ACCESS_TOKEN");
const subscriptionId = requireEnv("AZURE_SUBSCRIPTION_ID");
const resourceGroup = requireEnv("APIM_RESOURCE_GROUP");
const serviceName = requireEnv("APIM_SERVICE_NAME");
const productId = requireEnv("APIM_PRODUCT_ID");

const sp = servicePath({ subscriptionId, resourceGroup, serviceName });
const sid = (sidArg && sidArg.trim()) || `cli-${crypto.randomBytes(6).toString("hex")}`;
const displayName = (nameArg && nameArg.trim()) || `CLI subscription ${sid}`;
// scope accepts the short relative form /products/{id}; ARM resolves it within the service.
const scope = `/products/${productId}`;

(async () => {
  try {
    let ownerId;
    if (ownerArg) {
      const userId = ownerArg.trim();
      if (emailArg) {
        ownerId = await ensureUser({
          token,
          sp,
          userId,
          email: emailArg.trim(),
          firstName: "API",
          lastName: "Consumer",
        });
      } else {
        ownerId = `/users/${userId}`;
      }
    }

    const { existing } = await createOrFetchSubscription({
      token,
      sp,
      sid,
      displayName,
      scope,
      ownerId,
    });
    if (existing) {
      console.error(`Subscription "${sid}" already exists; returning its keys.`);
    }

    const keys = await listSecrets({ token, sp, sid });
    process.stdout.write(
      formatCredentialOutput({ sid, displayName, productId, keys, ownerId })
    );
    process.exit(0);
  } catch (e) {
    console.error("Error:", e?.message || e);
    process.exit(1);
  }
})();

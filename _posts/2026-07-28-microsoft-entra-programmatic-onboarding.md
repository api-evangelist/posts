---
published: true
layout: post
title: What Programmatic Onboarding Looks Like on Microsoft Entra ID
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/microsoft-entra-programmatic-onboarding.png
date: 2026-07-28
author: Kin Lane
tags:
  - Onboarding
  - Authentication
  - OAuth
  - Microsoft Entra ID
  - Agents
  - AI
---

I keep coming back to the same frustration, and I am going to keep writing about it until enough people are annoyed with me to do something. Onboarding to an API does not scale. You can have the cleanest OpenAPI on the planet, a beautiful docs portal, and a pricing page that actually makes sense, and none of it matters if a developer or an agent still has to sit in a browser, click through a settings panel, and hand-copy a client ID and secret into a config file. That is the contradiction every vendor is living right now. They tell me they are "all in on AI," they ship an agent framework on Monday, and on Tuesday the only way to get credentials to their own platform is to be a human with a mouse.

So I have been doing this exercise for the major identity and gateway providers: take the SoundCloud script I love, the one that shows what [programmatic API onboarding](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) should look like, and try to faithfully reproduce it against each provider's real API. One file, no npm install, opens a browser, registers an app, prints `client_id` and `client_secret`. That is the ideal. This week it is Microsoft Entra ID, formerly Azure Active Directory, and I will be honest with you up front: Entra does not reach that ideal, but it gets closer than most of the cloud giants, and the parts it does give you are genuinely good.

Here is the reality. Entra has no Dynamic Client Registration. There is no RFC 7591 `/register` endpoint where an agent shows up, proves it holds an OAuth token, and gets a client back. There is also no browser-login-then-create-an-app self-serve flow like SoundCloud's. What Entra has instead is Microsoft Graph, a full management API where app registration is just another resource you can POST to. That puts it squarely in what I have been calling bucket (b): a management API plus a bearer token you already hold. You `POST https://graph.microsoft.com/v1.0/applications` with a `displayName`, and Graph hands you back an `id` (the object ID) and an `appId` (your client ID). Then you `POST /applications/{id}/addPassword` and Graph mints a `secretText` for you — a real, generated client secret, returned exactly once and never retrievable again. If you want the app to actually function as an enterprise app in the tenant, you `POST /servicePrincipals` with that `appId`. Three calls, and you have the same thing the Entra admin center gives you after a dozen clicks.

That is the good part, and I do not want to undersell it. Microsoft treats app registration as an API. The endpoints are documented, versioned, stable, and consistent. The secret comes back in the response body instead of being buried behind a "you won't see this again" modal you have to screenshot. For an agent, that chain is automatable end to end.

So what is missing? The bootstrap. Every one of those calls needs `Authorization: Bearer <Graph token>`, and that token has to carry `Application.ReadWrite.OwnedBy` or `Application.ReadWrite.All`, or come from a user with the Application Developer role. You cannot start from nothing. Somebody, somewhere, with admin or owner rights, has to mint that first token — usually with `az account get-access-token --resource https://graph.microsoft.com` or a client-credentials grant against the login endpoint. The SoundCloud script bootstraps itself: it opens a browser, you log in as a normal human, and it exchanges your consent for everything it needs. Entra cannot do that for app creation. There is a chicken-and-egg problem baked into the model, and it is the gap between "automatable" and "self-serve."

So my script reads the Graph token from a `GRAPH_ACCESS_TOKEN` environment variable, skips the browser entirely, and automates everything that comes after: it looks for an app with the same name and reuses it if it finds one, creates the registration if it does not, mints a fresh secret, provisions the service principal, and prints `client_id` and `client_secret` to stdout. Same ergonomics as the original, same `-h`, same already-registered handling, just honest about where the human still has to stand. It is committed in the repo at `/assets/scripts/agentic-onboarding/microsoft-entra-api-auth.mjs`.

```javascript
#!/usr/bin/env node
/**
 * microsoft-entra-api-auth.mjs
 *
 * Provider:  Microsoft Entra ID (formerly Azure Active Directory)
 * What it does:
 *   Registers an Entra application via Microsoft Graph, mints a client secret, and
 *   (optionally) creates the matching service principal, then prints
 *   client_id / client_secret to stdout. Faithful-in-spirit port of the SoundCloud
 *   `sc-api-auth.mjs` programmatic-onboarding CLI.
 *
 * Bucket (b): management/admin API + a bearer token the user supplies via env var.
 *   There is NO RFC 7591 Dynamic Client Registration and NO browser-OAuth self-serve
 *   app-creation flow on Entra. You must already hold a Microsoft Graph access token
 *   with rights to register apps. This tool automates the create -> addPassword ->
 *   servicePrincipal chain; it cannot bootstrap your first credential from nothing.
 *
 * Auth model:
 *   Authorization: Bearer <Microsoft Graph access token>
 *   Required permission: Application.ReadWrite.OwnedBy (least privileged) or
 *   Application.ReadWrite.All. The Application Developer role (or a member user) works
 *   for delegated tokens.
 *
 * Env vars:
 *   GRAPH_ACCESS_TOKEN   Required. A Microsoft Graph bearer token.
 *                        Interactive: az account get-access-token \
 *                          --resource https://graph.microsoft.com \
 *                          --query accessToken -o tsv
 *                        Non-interactive: client_credentials grant against
 *                          https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
 *                          with scope=https://graph.microsoft.com/.default
 *
 * Node.js stdlib only (Node 18+). No npm dependencies.
 *
 * Docs:
 *   https://learn.microsoft.com/en-us/graph/api/application-post-applications?view=graph-rest-1.0
 *   https://learn.microsoft.com/en-us/graph/api/application-addpassword?view=graph-rest-1.0
 *   https://learn.microsoft.com/en-us/graph/api/serviceprincipal-post-serviceprincipals?view=graph-rest-1.0
 */
import { parseArgs } from "node:util";
import process from "node:process";

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";
const APPLICATIONS_URL = `${GRAPH_BASE}/applications`;
const SERVICE_PRINCIPALS_URL = `${GRAPH_BASE}/servicePrincipals`;

/**
 * Every Graph call uses `Authorization: Bearer <token>`.
 */
async function graphRequest({ token, url, method = "GET", body }) {
  const headers = {
    accept: "application/json",
    authorization: `Bearer ${token}`,
  };
  if (body !== undefined) {
    headers["content-type"] = "application/json";
  }
  const res = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  return { res, text: await res.text() };
}

function parseGraphError(text) {
  try {
    const err = JSON.parse(text)?.error;
    if (!err) return null;
    return { code: err.code, message: err.message };
  } catch {
    return null;
  }
}

function graphErrorMessage(text, fallback) {
  const err = parseGraphError(text);
  if (err?.message) return err.code ? `${err.code}: ${err.message}` : err.message;
  return fallback;
}

/**
 * Best-effort lookup of an existing application by exact display name.
 * Entra permits multiple apps with the same displayName, so this is a heuristic
 * match (first hit wins), not a hard uniqueness guarantee.
 */
async function findApplicationByName({ token, name }) {
  const url = `${APPLICATIONS_URL}?$filter=${encodeURIComponent(
    `displayName eq '${name.replace(/'/g, "''")}'`
  )}&$select=id,appId,displayName&$top=1`;
  const { res, text } = await graphRequest({ token, url });
  if (!res.ok) {
    throw new Error(
      `List applications (GET ${APPLICATIONS_URL}) failed: ${res.status} ${graphErrorMessage(
        text,
        text
      )}`
    );
  }
  const value = JSON.parse(text)?.value;
  return Array.isArray(value) && value.length > 0 ? value[0] : null;
}

async function createApplication({ token, name, website, redirectUri, signInAudience }) {
  const body = { displayName: name };
  if (signInAudience) body.signInAudience = signInAudience;
  const web = {};
  if (website) web.homePageUrl = website;
  if (redirectUri) web.redirectUris = [redirectUri];
  if (Object.keys(web).length > 0) body.web = web;

  const { res, text } = await graphRequest({
    token,
    url: APPLICATIONS_URL,
    method: "POST",
    body,
  });
  if (res.status !== 201) {
    if (res.status === 401) {
      throw new Error(
        `Create application failed: 401 Unauthorized. Is GRAPH_ACCESS_TOKEN valid and ` +
          `for resource https://graph.microsoft.com? ${graphErrorMessage(text, "")}`.trim()
      );
    }
    if (res.status === 403) {
      throw new Error(
        `Create application failed: 403 Forbidden. Your token needs ` +
          `Application.ReadWrite.OwnedBy or Application.ReadWrite.All (or the ` +
          `Application Developer role). ${graphErrorMessage(text, "")}`.trim()
      );
    }
    throw new Error(
      `Create application (POST ${APPLICATIONS_URL}) failed: ${res.status} ${graphErrorMessage(
        text,
        text
      )}`
    );
  }
  return JSON.parse(text); // contains id (Object ID) and appId (Client ID)
}

/**
 * Mint a client secret. secretText is returned ONCE and can never be retrieved again.
 */
async function addPassword({ token, applicationObjectId, displayName }) {
  const url = `${APPLICATIONS_URL}/${encodeURIComponent(applicationObjectId)}/addPassword`;
  const { res, text } = await graphRequest({
    token,
    url,
    method: "POST",
    body: { passwordCredential: { displayName } },
  });
  if (!res.ok) {
    throw new Error(
      `Add password (POST .../addPassword) failed: ${res.status} ${graphErrorMessage(text, text)}`
    );
  }
  return JSON.parse(text); // contains secretText, keyId, hint, endDateTime
}

/**
 * Create the matching service principal (enterprise app entry) for the appId.
 * Returns null if one already exists (Graph returns 409 / "already exists").
 */
async function createServicePrincipal({ token, appId }) {
  const { res, text } = await graphRequest({
    token,
    url: SERVICE_PRINCIPALS_URL,
    method: "POST",
    body: { appId },
  });
  if (res.status === 201) {
    return JSON.parse(text);
  }
  if (res.status === 409) {
    return null; // already provisioned
  }
  const err = parseGraphError(text);
  if (err?.message && /exist/i.test(err.message)) {
    return null;
  }
  throw new Error(
    `Create service principal (POST ${SERVICE_PRINCIPALS_URL}) failed: ${res.status} ` +
      graphErrorMessage(text, text)
  );
}

function formatCredentialOutput(credentials) {
  const lines = [`client_id=${credentials.client_id}`];
  if (credentials.client_secret) {
    lines.push(`client_secret=${credentials.client_secret}`);
  }
  lines.push("", JSON.stringify(credentials, null, 2), "");
  return lines.join("\n");
}

const {
  values: {
    name: nameArg,
    website: siteArg,
    "redirect-uri": redirectArg,
    "sign-in-audience": audienceArg,
    "no-service-principal": noSpArg,
    help: helpArg,
  },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    website: { type: "string" },
    "redirect-uri": { type: "string" },
    "sign-in-audience": { type: "string" },
    "no-service-principal": { type: "boolean" },
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (positionals.length > 0) {
  console.error(
    `Unexpected extra argument(s): ${positionals.map((p) => JSON.stringify(p)).join(" ")}`
  );
  process.exit(1);
}

if (helpArg) {
  console.log(`Usage: microsoft-entra-api-auth --name "My App" [options]

  Registers a Microsoft Entra ID application via Microsoft Graph, mints a client
  secret, and (by default) creates its service principal. Prints client_id and
  client_secret to stdout.

Options:
  --name                 Required. displayName for the new app registration.
  --website              Optional. Sets web.homePageUrl.
  --redirect-uri         Optional. Adds a web redirect URI.
  --sign-in-audience     Optional. e.g. AzureADMyOrg, AzureADMultipleOrgs,
                         AzureADandPersonalMicrosoftAccount. Defaults to tenant default.
  --no-service-principal Optional. Skip creating the service principal.
  -h, --help

Auth:
  Set GRAPH_ACCESS_TOKEN to a Microsoft Graph bearer token, e.g.:
    export GRAPH_ACCESS_TOKEN="$(az account get-access-token \\
      --resource https://graph.microsoft.com --query accessToken -o tsv)"
  Token needs Application.ReadWrite.OwnedBy (or .All), or the Application Developer role.

  NOTE: Entra has no Dynamic Client Registration and no browser self-serve app
  creation, so unlike the SoundCloud flow there is no PKCE login step here — you must
  already hold a Graph token. The client_secret is shown ONCE and is unrecoverable.
`);
  process.exit(0);
}

const token = process.env.GRAPH_ACCESS_TOKEN;
if (!token) {
  console.error(
    "Missing GRAPH_ACCESS_TOKEN. Get one with:\n" +
      "  export GRAPH_ACCESS_TOKEN=\"$(az account get-access-token " +
      "--resource https://graph.microsoft.com --query accessToken -o tsv)\""
  );
  process.exit(1);
}

const appName = nameArg;
if (!appName) {
  console.error("Missing required argument: --name");
  console.error('Example: node microsoft-entra-api-auth.mjs --name "My First API App" --website "https://example.com"');
  process.exit(1);
}

try {
  let app = await findApplicationByName({ token, name: appName });
  let existing = false;

  if (app) {
    existing = true;
    console.error(
      `An application named "${appName}" already exists (appId=${app.appId}). ` +
        "Reusing it and minting a fresh client secret."
    );
  } else {
    app = await createApplication({
      token,
      name: appName,
      website: siteArg,
      redirectUri: redirectArg,
      signInAudience: audienceArg,
    });
  }

  const password = await addPassword({
    token,
    applicationObjectId: app.id,
    displayName: `${appName} secret`,
  });

  let servicePrincipalId;
  if (!noSpArg) {
    try {
      const sp = await createServicePrincipal({ token, appId: app.appId });
      if (sp) servicePrincipalId = sp.id;
    } catch (e) {
      // Non-fatal: the app + secret are already usable for many flows.
      console.error(`Warning: could not create service principal: ${e.message}`);
    }
  }

  const credentials = {
    client_id: app.appId,
    client_secret: password.secretText,
    object_id: app.id,
    name: app.displayName ?? appName,
    secret_key_id: password.keyId,
    secret_expires: password.endDateTime,
    ...(servicePrincipalId ? { service_principal_id: servicePrincipalId } : {}),
  };

  if (existing) {
    console.error("Note: reused an existing application registration.");
  }
  process.stdout.write(formatCredentialOutput(credentials));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}
```

So what should Microsoft do to fully meet the moment? They are most of the way there. They have already proven they believe app registration belongs behind an API instead of a console — Graph is the existence proof. The missing piece is the front door. Give me an OAuth flow where a developer or an agent logs in once, consents to a narrowly scoped "let this tool register one app it will own," and walks away with credentials, no pre-provisioned admin token required. Entra already supports OIDC and consent better than almost anyone. Pointing that same machinery at the very first credential, instead of assuming it already exists, is the difference between an API you can script and an API an agent can actually onboard to on its own. Until then, I will take what I can get, and what Entra gives me is a clean three-call chain that I can hand to an agent the moment somebody upstream hands it a token.

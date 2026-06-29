#!/usr/bin/env node
/**
 * aws-cognito-api-auth.mjs
 *
 * Provider:   AWS Cognito (Amazon Cognito user pools)
 * What it does:
 *   Amazon Cognito has NO public, RFC 7591 self-serve "register an app, get a client_id/secret"
 *   flow. There is no anonymous DCR endpoint and no browser-OAuth "create my own app" path. The
 *   credentials come from the AWS account that owns the user pool. The closest automatable
 *   equivalent of the SoundCloud ideal is the cognito-idp control-plane action:
 *     CreateUserPoolClient -> returns UserPoolClient.ClientId
 *                             and (when GenerateSecret=true) UserPoolClient.ClientSecret
 *   That ClientId / ClientSecret pair is what an application (or an agent doing the OAuth2
 *   client_credentials grant) presents at the user pool's /oauth2/token endpoint.
 *
 * Auth model:
 *   AWS SigV4 (AWS4-HMAC-SHA256) signed with the CALLER'S OWN IAM credentials, service name
 *   "cognito-idp". Cognito uses the AWS JSON 1.1 RPC protocol: a single POST to
 *   https://cognito-idp.{region}.amazonaws.com/ with the action selected by the
 *   X-Amz-Target header (AWSCognitoIdentityProviderService.<Action>) and Content-Type
 *   application/x-amz-json-1.1. There is no self-serve credential issuance and no browser
 *   login -- this script does NOT open a browser and does NOT do OAuth/PKCE. It mints an app
 *   client, the only piece of the SoundCloud ideal reachable here.
 *
 * Env vars (required unless noted):
 *   AWS_ACCESS_KEY_ID       IAM access key id
 *   AWS_SECRET_ACCESS_KEY   IAM secret access key
 *   AWS_SESSION_TOKEN       (optional) STS session token for temporary credentials
 *   AWS_REGION              e.g. us-east-1
 *   COGNITO_USER_POOL_ID    the user pool to create the app client in, e.g. us-east-1_AbCdEf123
 *
 * Docs:
 *   https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
 *   https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
 *   https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html
 *   https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html
 *
 * Node.js 18+ stdlib only (no aws-sdk, no npm dependencies).
 */
import crypto from "node:crypto";
import { parseArgs } from "node:util";
import process from "node:process";

const SERVICE = "cognito-idp";
const ALGORITHM = "AWS4-HMAC-SHA256";
const TARGET_PREFIX = "AWSCognitoIdentityProviderService";
const CONTENT_TYPE = "application/x-amz-json-1.1";

function hex(buf) {
  return Buffer.from(buf).toString("hex");
}

function sha256Hex(data) {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function hmac(key, data) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest();
}

function amzDateStamps(now = new Date()) {
  // 20130524T000000Z and 20130524
  const iso = now.toISOString().replace(/[:-]/g, "").replace(/\.\d{3}/, "");
  const amzDate = iso; // YYYYMMDDTHHMMSSZ
  const dateStamp = amzDate.slice(0, 8); // YYYYMMDD
  return { amzDate, dateStamp };
}

function deriveSigningKey(secretKey, dateStamp, region, service) {
  const kDate = hmac("AWS4" + secretKey, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, "aws4_request");
}

/**
 * AWS JSON 1.1 calls all POST to "/" with an empty query string; the action is chosen by the
 * X-Amz-Target header. So the SigV4 canonicalization here is simpler than a REST signer: the
 * canonical URI is always "/", the canonical query string is always empty, and the only thing
 * that changes between calls is the target and the JSON body.
 *
 * Returns { res, text }.
 */
async function signedCognitoRequest({
  action,
  body,
  accessKeyId,
  secretAccessKey,
  sessionToken,
  region,
}) {
  const host = `${SERVICE}.${region}.amazonaws.com`;
  const url = `https://${host}/`;
  const target = `${TARGET_PREFIX}.${action}`;
  const payload = JSON.stringify(body || {});
  const payloadHash = sha256Hex(payload);
  const { amzDate, dateStamp } = amzDateStamps();

  // --- Canonical headers. Must be lowercase, trimmed, and sorted by name. ---
  // We sign content-type, host, x-amz-content-sha256, x-amz-date, x-amz-target; plus
  // x-amz-security-token when using temporary STS credentials.
  const headerMap = {
    "content-type": CONTENT_TYPE,
    host,
    "x-amz-content-sha256": payloadHash,
    "x-amz-date": amzDate,
    "x-amz-target": target,
  };
  if (sessionToken) headerMap["x-amz-security-token"] = sessionToken;

  const sortedNames = Object.keys(headerMap).sort();
  const canonicalHeaders =
    sortedNames.map((n) => `${n}:${String(headerMap[n]).trim()}`).join("\n") + "\n";
  const signedHeaders = sortedNames.join(";");

  const canonicalRequest = [
    "POST",
    "/", // CanonicalURI -- always root for AWS JSON RPC services
    "", // CanonicalQueryString -- always empty here (still needs its newline)
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/${SERVICE}/aws4_request`;
  const stringToSign = [
    ALGORITHM,
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join("\n");

  const signingKey = deriveSigningKey(secretAccessKey, dateStamp, region, SERVICE);
  const signature = hex(hmac(signingKey, stringToSign));

  const authorization =
    `${ALGORITHM} ` +
    `Credential=${accessKeyId}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, ` +
    `Signature=${signature}`;

  const fetchHeaders = {
    "content-type": CONTENT_TYPE,
    "x-amz-date": amzDate,
    "x-amz-content-sha256": payloadHash,
    "x-amz-target": target,
    authorization,
  };
  if (sessionToken) fetchHeaders["x-amz-security-token"] = sessionToken;

  const res = await fetch(url, { method: "POST", headers: fetchHeaders, body: payload });
  return { res, text: await res.text(), url };
}

function parseAwsError(text) {
  try {
    const j = JSON.parse(text);
    // AWS JSON errors carry __type (e.g. "InvalidParameterException") + message/Message.
    const type = j.__type ? String(j.__type).split("#").pop() : null;
    const msg = j.message || j.Message || null;
    if (type && msg) return `${type}: ${msg}`;
    return type || msg || null;
  } catch {
    return null;
  }
}

/**
 * Create the app client. If a client with this name already exists we fall back to listing the
 * pool's clients and returning the match -- mirroring the SoundCloud "already have an app"
 * behavior.
 *
 * NOTE: Cognito does NOT enforce unique ClientName per pool, so CreateUserPoolClient will
 * happily make a second client with the same name rather than 409. To stay idempotent we look
 * for an existing client by name FIRST, and only create when none is found.
 */
async function getOrCreateAppClient(ctx, { userPoolId, name, generateSecret }) {
  const existing = await findClientByName(ctx, { userPoolId, name });
  if (existing) {
    // List entries don't include ClientSecret -- describe it to recover the full record.
    const full = await describeClient(ctx, { userPoolId, clientId: existing.ClientId });
    return { client: full || existing, existing: true };
  }

  const { res, text, url } = await signedCognitoRequest({
    ...ctx,
    action: "CreateUserPoolClient",
    body: {
      UserPoolId: userPoolId,
      ClientName: name,
      GenerateSecret: generateSecret,
      // A sane default so the client can actually be used for token refresh + SDK auth.
      ExplicitAuthFlows: ["ALLOW_REFRESH_TOKEN_AUTH", "ALLOW_USER_SRP_AUTH"],
    },
  });
  if (res.status === 200) {
    const j = JSON.parse(text);
    return { client: j.UserPoolClient, existing: false };
  }
  throw new Error(
    `CreateUserPoolClient (POST ${url}) failed: ${res.status} ${parseAwsError(text) || text}`
  );
}

/**
 * ListUserPoolClients is paginated (MaxResults up to 60, NextToken). We page through and match
 * exactly on ClientName.
 */
async function findClientByName(ctx, { userPoolId, name }) {
  let nextToken;
  do {
    const body = { UserPoolId: userPoolId, MaxResults: 60 };
    if (nextToken) body.NextToken = nextToken;
    const { res, text, url } = await signedCognitoRequest({
      ...ctx,
      action: "ListUserPoolClients",
      body,
    });
    if (res.status !== 200) {
      throw new Error(
        `ListUserPoolClients (POST ${url}) failed: ${res.status} ${parseAwsError(text) || text}`
      );
    }
    const j = JSON.parse(text);
    const hit = (j.UserPoolClients || []).find((c) => c.ClientName === name);
    if (hit) return hit;
    nextToken = j.NextToken;
  } while (nextToken);
  return null;
}

async function describeClient(ctx, { userPoolId, clientId }) {
  const { res, text } = await signedCognitoRequest({
    ...ctx,
    action: "DescribeUserPoolClient",
    body: { UserPoolId: userPoolId, ClientId: clientId },
  });
  if (res.status !== 200) return null;
  try {
    return JSON.parse(text).UserPoolClient;
  } catch {
    return null;
  }
}

function formatOutput({ client, userPoolId, existing }) {
  // Cognito's ClientId / ClientSecret are the direct analog of client_id / client_secret.
  const out = {
    client_id: client.ClientId,
    client_secret: client.ClientSecret || null, // only present when GenerateSecret=true
    client_name: client.ClientName,
    user_pool_id: userPoolId,
  };
  const lines = [];
  lines.push(`client_id=${out.client_id}`);
  if (out.client_secret) {
    lines.push(`client_secret=${out.client_secret}`);
  } else {
    lines.push("client_secret=  (none -- client created without a secret; pass --secret to generate one)");
  }
  lines.push("", JSON.stringify(out, null, 2), "");
  if (existing) {
    lines.unshift("Note: reused an existing app client with this name in the pool.\n");
  }
  return lines.join("\n");
}

const {
  values: { name: nameArg, secret: secretArg, "no-secret": noSecretArg, help: helpArg },
  positionals,
} = parseArgs({
  options: {
    name: { type: "string" },
    secret: { type: "boolean" }, // generate a client secret (server / machine-to-machine app)
    "no-secret": { type: "boolean" }, // explicitly create a public client (default)
    help: { type: "boolean", short: "h" },
  },
  strict: true,
  allowPositionals: true,
});

if (helpArg) {
  console.log(`Usage: aws-cognito-api-auth [options]

  Amazon Cognito has no public RFC 7591 / OAuth self-serve app-registration flow. This mints
  the only automatable equivalent: a user pool app client (ClientId, and a ClientSecret when
  you ask for one), using your own IAM credentials and SigV4 signing against the cognito-idp
  AWS JSON 1.1 API (no aws-sdk).

Options:
  --name           Required. Friendly name (ClientName) for the new app client.
  --secret         Generate a client secret (GenerateSecret=true) for a confidential /
                   machine-to-machine app. Default is a public client with no secret.
  --no-secret      Explicitly create a public client (no secret). This is the default.
  -h, --help

Required environment variables:
  AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, COGNITO_USER_POOL_ID
  AWS_SESSION_TOKEN  (only when using temporary STS credentials)

Docs: https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
`);
  process.exit(0);
}

if (positionals.length > 0) {
  console.error(`Unexpected extra argument(s): ${positionals.join(" ")}`);
  process.exit(1);
}

if (secretArg && noSecretArg) {
  console.error("Pass only one of --secret or --no-secret.");
  process.exit(1);
}

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const sessionToken = process.env.AWS_SESSION_TOKEN || undefined;
const region = process.env.AWS_REGION;
const userPoolId = process.env.COGNITO_USER_POOL_ID;

const missing = [];
if (!accessKeyId) missing.push("AWS_ACCESS_KEY_ID");
if (!secretAccessKey) missing.push("AWS_SECRET_ACCESS_KEY");
if (!region) missing.push("AWS_REGION");
if (!userPoolId) missing.push("COGNITO_USER_POOL_ID");
if (missing.length) {
  console.error(`Missing required environment variable(s): ${missing.join(", ")}`);
  console.error("Cognito issues no self-serve credentials; you must supply your own IAM creds");
  console.error("and a user pool you control.");
  process.exit(1);
}

if (!nameArg) {
  console.error("Missing required argument: --name");
  console.error('Example: node aws-cognito-api-auth.mjs --name "agent-client" --secret');
  process.exit(1);
}

const ctx = { accessKeyId, secretAccessKey, sessionToken, region };
const generateSecret = !!secretArg && !noSecretArg;

try {
  const { client, existing } = await getOrCreateAppClient(ctx, {
    userPoolId,
    name: nameArg,
    generateSecret,
  });
  if (!client?.ClientId) throw new Error("CreateUserPoolClient returned no ClientId.");

  process.stdout.write(formatOutput({ client, userPoolId, existing }));
  process.exit(0);
} catch (e) {
  console.error("Error:", e?.message || e);
  process.exit(1);
}

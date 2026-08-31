#!/usr/bin/env node
/**
 * apis-io-aauth-agent.mjs
 *
 * Provider: APIs.io (https://apis.io), AAuth mode 1 — "agent identity access".
 * Spec: draft-hardt-oauth-aauth-protocol (20 Aug 2026) + RFC 9421 HTTP Message Signatures.
 *
 * What it does: calls the APIs.io API as an AGENT rather than as a person. No account, no signup
 *   form, no API key, no browser. The agent holds an Ed25519 keypair, presents a token in which an
 *   agent provider vouches for its identifier, signs the HTTP request itself, and APIs.io
 *   recognises a caller it has never registered.
 *
 * Auth model: two proofs, both required, neither sufficient on its own.
 *   1. an `aa-agent+jwt` signed by the AGENT PROVIDER, whose public keys are published at
 *      <issuer>/.well-known/aauth-agent.json -> jwks_uri. It carries `sub` (the portable
 *      identifier `aauth:local@domain`) and `cnf.jwk` (the key the request must be signed with).
 *   2. an RFC 9421 signature over this request, made with the key named in `cnf.jwk`.
 *   Proof 1 alone is a replayable bearer token. Proof 2 alone is a self-asserted identity.
 *
 * What it earns: the FREE tier, and attribution. An agent identity is not an account and has not
 *   paid — what signing buys is being rate-limited and audited as an identifier instead of an IP.
 *   Paid tiers still require the OAuth path. That is the design, not a limitation of this script.
 *
 * Zero dependencies. Node 18+.
 *
 * Usage:
 *   # mint a token as the provider (needs the provider's private key), then call:
 *   AAUTH_PROVIDER_KEY=~/.aauth/provider-private.pem \
 *   AAUTH_PROVIDER_KID=CCbCDn6oI4PifrBP \
 *     node apis-io-aauth-agent.mjs /api/v1/search --query q=sms
 *
 *   # or bring a token somebody else minted for you:
 *   AAUTH_AGENT_TOKEN=<jwt> AAUTH_AGENT_KEY=~/.aauth/agent-private.pem \
 *     node apis-io-aauth-agent.mjs /api/v1/
 *
 * Flags:
 *   --host <host>      default apis.io
 *   --query <a=b>      repeatable; also signs @query when present
 *   --issuer <url>     agent provider issuer, default https://apievangelist.com
 *   --local <name>     local part of the identifier, default demo-agent
 *   --print-base       show the RFC 9421 signature base (the thing people get wrong)
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';

const ALG = 'Ed25519';
const b64u = (b) => Buffer.from(b).toString('base64url');
const jsonB64u = (o) => b64u(JSON.stringify(o));
const expand = (p) => (p || '').replace(/^~/, os.homedir());

// ---- args ----
const argv = process.argv.slice(2);
const path = argv.find((a) => a.startsWith('/')) || '/api/v1/';
const opt = (name, dflt) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const queries = argv.reduce((acc, a, i) => (a === '--query' && argv[i + 1] ? [...acc, argv[i + 1]] : acc), []);
const host = opt('host', 'apis.io');
const issuer = opt('issuer', 'https://apievangelist.com');
const local = opt('local', 'demo-agent');
const printBase = argv.includes('--print-base');
const query = queries.length ? '?' + new URLSearchParams(queries.map((q) => q.split(/=(.*)/s).slice(0, 2))).toString() : '';

// ---- the agent's own keypair: this is what `cnf.jwk` binds the identifier to ----
function agentKeys() {
  const p = expand(process.env.AAUTH_AGENT_KEY);
  if (p && fs.existsSync(p)) {
    const priv = crypto.createPrivateKey(fs.readFileSync(p));
    return { priv, jwk: crypto.createPublicKey(priv).export({ format: 'jwk' }) };
  }
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');
  if (p) fs.writeFileSync(p, privateKey.export({ type: 'pkcs8', format: 'pem' }), { mode: 0o600 });
  return { priv: privateKey, jwk: publicKey.export({ format: 'jwk' }) };
}

/**
 * Mint the agent token. In a real deployment the AGENT PROVIDER does this behind an API and the
 * agent never sees this key — it is inline here so the whole loop is inspectable in one file.
 */
function mintAgentToken(cnfJwk) {
  const keyPath = expand(process.env.AAUTH_PROVIDER_KEY);
  if (!keyPath || !fs.existsSync(keyPath)) {
    throw new Error('set AAUTH_AGENT_TOKEN, or AAUTH_PROVIDER_KEY to mint one');
  }
  const priv = crypto.createPrivateKey(fs.readFileSync(keyPath));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: ALG, typ: 'aa-agent+jwt', kid: process.env.AAUTH_PROVIDER_KID || undefined };
  const claims = {
    iss: issuer,
    // The identifier's domain MUST match the issuer's hostname. A provider vouching for
    // identifiers at somebody else's domain is the impersonation case, and verifiers reject it.
    sub: `aauth:${local}@${new URL(issuer).hostname}`,
    iat: now,
    exp: now + 600,
    cnf: { jwk: { kty: cnfJwk.kty, crv: cnfJwk.crv, x: cnfJwk.x } },
  };
  const signing = `${jsonB64u(header)}.${jsonB64u(claims)}`;
  return `${signing}.${b64u(crypto.sign(null, Buffer.from(signing), priv))}`;
}

/**
 * Build the RFC 9421 signature base and sign it.
 *
 * The base is newline-joined `"<component>": <value>` lines, ending with a `@signature-params`
 * line whose value is the component list and parameters EXACTLY as they appear in the
 * Signature-Input header. Reproduce that string character for character or the verify fails, and
 * this is the step every implementation gets wrong at least once.
 */
function signRequest({ method, authority, reqPath, reqQuery, signatureKeyHeader, priv }) {
  const components = ['@method', '@path', '@authority', 'signature-key'];
  if (reqQuery) components.splice(2, 0, '@query');   // cover the query whenever there is one
  const created = Math.floor(Date.now() / 1000);
  const params = `;created=${created};alg="${ALG}"`;
  const rawParams = `(${components.map((c) => `"${c}"`).join(' ')})${params}`;

  const value = (c) => {
    switch (c) {
      case '@method': return method.toUpperCase();
      case '@authority': return authority;
      case '@path': return reqPath;
      case '@query': return reqQuery;
      case 'signature-key': return signatureKeyHeader;
      default: throw new Error(`unknown component ${c}`);
    }
  };
  const base = [...components.map((c) => `"${c}": ${value(c)}`), `"@signature-params": ${rawParams}`].join('\n');
  const sig = crypto.sign(null, Buffer.from(base), priv);
  return {
    base,
    'signature-input': `sig1=${rawParams}`,
    signature: `sig1=:${sig.toString('base64')}:`,
  };
}

// ---- run ----
const { priv, jwk } = agentKeys();
const token = process.env.AAUTH_AGENT_TOKEN || mintAgentToken(jwk);
const signatureKeyHeader = `sig=jwt; jwt="${token}"`;

const { base, ...sigHeaders } = signRequest({
  method: 'GET', authority: host, reqPath: path, reqQuery: query, signatureKeyHeader, priv,
});

if (printBase) console.log(`--- RFC 9421 signature base ---\n${base}\n--- end ---\n`);

const url = `https://${host}${path}${query}`;
const res = await fetch(url, {
  method: 'GET',
  headers: { accept: 'application/json', 'signature-key': signatureKeyHeader, ...sigHeaders },
});

const body = await res.text();
console.log(`GET ${url}`);
console.log(`identity: ${JSON.parse(Buffer.from(token.split('.')[1], 'base64url')).sub}`);
console.log(`status:   ${res.status}`);
const challenge = res.headers.get('aauth-requirement');
if (challenge) console.log(`AAuth-Requirement: ${challenge}`);
console.log(body.length > 600 ? `${body.slice(0, 600)}…` : body);
if (!res.ok) process.exitCode = 1;

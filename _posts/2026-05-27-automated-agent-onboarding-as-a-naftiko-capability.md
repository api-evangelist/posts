---
published: true
layout: post
title: "Automated Agent Onboarding Is a Naftiko Capability, Not a Gateway Feature"
date: 2026-05-27
author: "Kin Lane"
image: https://kinlane-images.s3.amazonaws.com/shared/copper-circuit-gatew-into-field.jpg
category: "Blog"
tags:
 - Agent Onboarding
 - Naftiko Capabilities
 - Naftiko Framework
 - API Management
 - API Gateways
 - Agent Skills
 - Web Bot Auth
 - Dynamic Client Registration
 - RFC 9421
 - RFC 7591
excerpt: "An agent shows up at your API. It has a verifiable identity, a clear purpose, and a list of scopes it would like. Your existing API management platform cannot give it credentials in one round trip — every gateway in the field still assumes a human developer behind a portal. The fix is not a new feature on your gateway. The fix is a Naftiko Capability that sits in front of the gateway you already have, composes the three or four calls needed to provision the agent, enforces the policy you declare, and returns a scoped credential. Here is what that capability looks like."
---
An agent shows up at your API. Not a developer. An agent — Claude doing research for someone, an OpenAI Operator running a task for a user, a first-party agent your own company built. It carries a verifiable identity (a signed request, per [Web Bot Auth](https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/) over [RFC 9421](https://www.rfc-editor.org/rfc/rfc9421.html)), a published purpose, and a list of scopes it would like. It would like a credential. It would like to start calling APIs. It would like to do this in one round trip, without waiting two business days for a Slack message from a developer relations person who is also juggling four other things.

Your existing API management platform does not do this for you currently out of the box.

I spent the last week looking through every API gateway and API management OpenAPI in [my API Evangelist network](https://github.com/api-evangelist) — Kong, Apigee, Tyk, WSO2, Gravitee, AWS API Gateway, Azure APIM, Google Cloud API Gateway, MuleSoft, Workato, and  others — looking for the operations that would compose into an "agent shows up and self-registers" flow. The operations exist. Every Tier 1 gateway can create a developer, create an app, issue a scoped key, attach a rate limit policy, and stream an audit event. The pieces are there. What's missing is the *composition* — the single endpoint that takes a signed onboarding request and orchestrates the three-to-five gateway calls needed to turn it into a credential the agent can use. No gateway has shipped that endpoint.

I see this as the job of a [Naftiko Capability](https://naftiko.io).

## The Flow

What the agent experience needs to look like:

1. Agent fetches `/.well-known/api-catalog` per [RFC 9264](https://www.rfc-editor.org/rfc/rfc9264). The catalog includes an `x-onboarding` extension pointing at the consent document, the supported signature scheme, and which scopes auto-issue versus require approval.
2. Agent fetches `/skills/onboard-agent.md` from the provider's published agent skills directory. The skill is the operating manual — it tells the agent how to construct the request.
3. Agent computes a SHA-256 hash of the consent document it just read.
4. Agent constructs an HTTP signature over its onboarding request (per [Web Bot Auth](https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/)), includes the consent hash, the skill ID, the requested scopes, and an operator contact, and POSTs to `/onboard`.
5. The provider's edge worker verifies the signature, calls the onboarding capability behind it, and returns a scoped credential. Or, for scopes that need human approval, returns a `202 Accepted` with a status URL the agent polls.

One round trip for the auto-issuable scopes. A clean async-with-status pattern for the rest. The agent never sees the gateway. The gateway never sees the Web Bot Auth signature. The capability is the seam.

## Why It's a Capability, Not a Gateway Feature

I have been blah blah blahing about Naftiko Capabilities for most of 2026. The shorthand: a Naftiko Capability is a declarative, domain-aligned unit of integration. It composes operations across one or more underlying services, and produces consistent surfaces (REST, MCP, Agent Skills) on top of whatever inconsistent operations sit underneath. You can [generate them from OpenAPIs](https://apievangelist.com/2026/04/14/questioning-our-api-governance-reality/). You can [govern them with Spectral rules](https://github.com/api-evangelist/palo-alto-networks). You can run them through the [Naftiko Framework (Ikanos)](https://naftiko.io) on top of whatever existing API or data source sits behind them.

The agent onboarding flow is a *textbook* capability problem. Read why:

- **It composes operations across at least two gateway surfaces.** Even on the cleanest gateway (Kong), the flow is `POST consumers` → `POST consumer_groups` → `POST consumer_groups/{cgId}/consumers` → `POST consumers/{cid}/key-auth` → stream audit event. That's five operations. On Apigee it's four operations spread across two API surfaces (Management + Cloud Audit Logs). On AWS it's three operations spread across three surfaces (API Gateway, IAM, CloudTrail).
- **The scope vocabulary is gateway-native and ugly.** Kong has ACL plugin tags. Apigee has API Products. WSO2 has throttling policies. Tyk has `access_rights` arrays. The provider should declare scopes once in human-readable terms (`read:public`, `write:invoices`) and have the capability translate to whichever gateway-native primitive applies. That translation is exactly what Naftiko Capabilities are for.
- **The policy surface is declarative.** Trusted issuers, auto-issuable scopes, approval channels, default rate limits, consent terms, audit destination. All YAML. Editable by the provider without touching the gateway. The capability enforces the policy on every onboarding request.
- **The outputs are multi-surface.** The same capability publishes a REST endpoint (`POST /onboard`), an MCP tool (`agent.register`), and an agent skill (`onboard-agent.md`). One declaration, three derivative surfaces. That is the Naftiko Capabilities pattern exactly.

The gateway team is unlikely to ship this for you. Kong is not going to write the adapter. Apigee is not going to write a Web Bot Auth verifier in Apigee's policy language. WSO2 has *almost* shipped this in the form of dynamic client registration (`POST /register`), but they didn't model agent identity and they didn't ship the consent-hash or scope-translation legs of the flow. None of these vendors will. It is not their business model.

The vendor that ships it is the one that treats the flow as a portable capability that runs in front of any of them.

## What the Capability Actually Contains

An agent-onboarding Naftiko Capability declares roughly the following — note this is an illustrative sketch of the shape, simplified for the post. The first real artifact, against Kong Enterprise Admin, is committed at [api-evangelist/kong/capabilities/kong-agent-onboarding.yaml](https://github.com/api-evangelist/kong/blob/main/capabilities/kong-agent-onboarding.yaml) and uses the canonical `naftiko: 1.0.0-alpha2` schema with `consumes` + `orchestration` + `exposes` sections per the [Ikanos specification](https://github.com/naftiko/ikanos.wiki).

```yaml
naftiko: 1.0.0-alpha2
info:
  label: Agent Onboarding (gateway-templated)
  description: Verify agent identity, check policy, compose gateway operations,
    return a scoped credential, emit audit. Valid against the canonical
    naftiko 1.0.0-alpha2 schema; the Kong and AWS reference artifacts use
    this exact shape.
  tags: [Agent Onboarding, Web Bot Auth, RFC 9421]
binds:
- namespace: env
  keys:
    GATEWAY_ADMIN_TOKEN: GATEWAY_ADMIN_TOKEN
    AGENT_TRUSTED_ISSUERS: AGENT_TRUSTED_ISSUERS
    AGENT_CONSENT_HASH: AGENT_CONSENT_HASH
capability:
  consumes:
  - type: http
    namespace: gateway-admin
    baseUri: '{{env.GATEWAY_ADMIN_BASE_URI}}'
    description: The 3-5 gateway-native operations the orchestration composes.
    resources:
    # See per-gateway artifacts for exact resource paths — Kong uses
    # /{workspace}/consumers + /{workspace}/consumer_groups + key-auth;
    # AWS uses /apikeys + /usageplans + /usageplans/{id}/keys; etc.
    - name: identity
      path: /{gateway-native-identity-path}
      operations:
      - { name: createidentity, method: POST }
    - name: scope-tier
      path: /{gateway-native-scope-path}
      operations:
      - { name: ensurescopetier, method: POST }
    - name: credential
      path: /{gateway-native-credential-path}
      operations:
      - { name: mintcredential, method: POST }
    authentication:
      type: apikey
      key: Authorization
      value: '{{env.GATEWAY_ADMIN_TOKEN}}'
      placement: header
  orchestration:
  - name: onboard-agent
    description: End-to-end agent onboarding — 7 steps from signature to credential.
    inputs:
    - { name: signature, type: object, required: true }
    - { name: signature_agent, type: string, required: true }
    - { name: skill_id, type: string, required: true }
    - { name: requested_scopes, type: array, required: true }
    - { name: consent_hash, type: string, required: true }
    - { name: contact, type: object, required: true }
    steps:
    - id: verify_identity
      type: builtin.web-bot-auth.verify
      with:
        signature: '${input.signature}'
        agent: '${input.signature_agent}'
        trusted_issuers: '{{env.AGENT_TRUSTED_ISSUERS}}'
      on_failure: deny
    - id: verify_consent
      type: builtin.policy.assert
      with:
        assert: '${input.consent_hash} == {{env.AGENT_CONSENT_HASH}}'
      on_failure: deny
    - id: classify_scopes
      type: builtin.policy.scope-classify
      with:
        requested: '${input.requested_scopes}'
    - id: create_identity
      call: gateway-admin.createidentity
      with:
        body:
          agent_id: '${steps.verify_identity.agent_id}'
    - id: ensure_scope_tier
      type: builtin.upsert
      with:
        name: '${steps.classify_scopes.target}'
    - id: mint_credential
      call: gateway-admin.mintcredential
      with:
        identity_id: '${steps.create_identity.id}'
        scope_tier: '${steps.ensure_scope_tier.id}'
    - id: emit_audit
      type: builtin.audit.emit
      with:
        event: agent.onboarded
        agent_id: '${steps.verify_identity.agent_id}'
        credential_id: '${steps.mint_credential.id}'
    output:
      agent_id: '${steps.verify_identity.agent_id}'
      credential: '${steps.mint_credential.value}'
      scope: '${steps.classify_scopes.target}'
  exposes:
  - type: rest
    namespace: agent-onboarding-rest
    port: 8080
    resources:
    - path: /v1/agents/onboard
      operations:
      - { method: POST, name: onboardagent, call: orchestration.onboard-agent }
  - type: mcp
    namespace: agent-onboarding-mcp
    port: 9090
    transport: http
    tools:
    - { name: agent-register, call: orchestration.onboard-agent }
  - type: agent-skill
    namespace: agent-onboarding-skill
    skill: { name: onboard-agent, file: skills/onboard-agent.md }
```

The runtime policy levers (require Web Bot Auth signature, require matching consent hash, deny forbidden scopes, defer approval-required scopes to a webhook) are *already encoded* in the orchestration steps via `on_failure: deny` — there is no separate `governance:` capability section to author. Policy enforcement is *what the orchestration is*.

The lint-time governance — the rules that say "any capability claiming to do agent onboarding MUST include verify_signature, verify_consent, classify_scopes, and emit_audit steps, MUST bind AGENT_TRUSTED_ISSUERS and AGENT_CONSENT_HASH in its env namespace, and MUST expose REST/MCP/agent-skill surfaces on the canonical paths" — lives in a Polychro ruleset, not in the capability YAML. Polychro is Naftiko's [governance layer](https://github.com/naftiko/polychro.wiki), separate from the capability spec. The companion ruleset for this pattern is at [api-evangelist/posts/polychro/agent-onboarding-rules.yaml](https://github.com/api-evangelist/posts/blob/main/polychro/agent-onboarding-rules.yaml) — 17 rules extending `polychro:ai-safety`, applied with `polychro lint --tags agent-onboarding`.

The three-layer split is the correct architecture per the canonical Naftiko docs: **Ikanos** is the capability spec (the YAML above), **Polychro** is the governance layer that lints capability files, and **Naftiko Fleet** is the operations layer that governs capabilities at scale across teams and compliance boundaries. None of those three is encoded inside the others.

The capability is a single artifact. It declares what the agent will send, what trust is required, which gateway operations get composed in which order, what the policy levers are, and which surfaces are produced. The Naftiko Framework runs it. The provider edits `policy.yaml` and re-deploys without ever touching the capability or the gateway. Ten reference artifacts are now committed across the API Evangelist GitHub organization, all valid `naftiko: 1.0.0-alpha2` against the canonical schema and all exposing the same three downstream surfaces — REST `POST /v1/agents/onboard`, MCP `agent-register` tool, and an agent skill at `/skills/onboard-agent.md` — so an agent that knows how to call the onboarding endpoint doesn't care which capability sits behind it:

| Gateway | Artifact | Distinctive |
|---|---|---|
| Kong | [kong-agent-onboarding.yaml](https://github.com/api-evangelist/kong/blob/main/capabilities/kong-agent-onboarding.yaml) | Single-surface adapter, 13 native MCP control-plane ops, Event Gateway for audit |
| AWS API Gateway | [aws-api-gateway-agent-onboarding.yaml](https://github.com/api-evangelist/aws-api-gateway/blob/main/capabilities/aws-api-gateway-agent-onboarding.yaml) | Dual identity verification (IAM principals + Web Bot Auth), CloudWatch + CloudTrail audit, usage-plan-bind-window invariant |
| Apigee | [apigee-agent-onboarding.yaml](https://github.com/api-evangelist/apigee/blob/main/capabilities/apigee-agent-onboarding.yaml) | Developer + App + API Product composition, Cloud Audit Logs side-channel |
| WSO2 | [wso2-agent-onboarding.yaml](https://github.com/api-evangelist/wso2/blob/master/capabilities/wso2-agent-onboarding.yaml) | DCR-native (`POST /register`), per-API key model, native MCP server discovery via `getAllMCPServers` |
| Gravitee | [gravitee-agent-onboarding.yaml](https://github.com/api-evangelist/gravitee/blob/main/capabilities/gravitee-agent-onboarding.yaml) | Plan-based scope (cleanest gateway-native abstraction), native audit on both APIM and AM |
| Azure APIM | [azure-apim-agent-onboarding.yaml](https://github.com/api-evangelist/microsoft-azure-api-management/blob/main/capabilities/azure-apim-agent-onboarding.yaml) | Product / Subscription / User nested scope, Microsoft Entra short-circuit for in-tenant agents, Azure Monitor audit |
| Tyk | [tyk-agent-onboarding.yaml](https://github.com/api-evangelist/tyk/blob/main/capabilities/tyk-agent-onboarding.yaml) | Shortest adapter in the field — `POST /tyk/keys` collapses identity + credential + scope + rate-limit + quota into one atomic call; GraphQL field-level scope via `restricted_types`; MDCB cross-region key sync |
| Merge | [merge-agent-onboarding.yaml](https://github.com/api-evangelist/merge/blob/main/capabilities/merge-agent-onboarding.yaml) | Meta-gateway pattern — one credential fans out to hundreds of downstream SaaS integrations via Linked Accounts |
| Cloudflare | [cloudflare-agent-onboarding.yaml](https://github.com/api-evangelist/cloudflare/blob/main/capabilities/cloudflare-agent-onboarding.yaml) | Edge-native — the worker IS the gateway; tokens minted at the edge, Workers KV trust cache, R2 + Logpush audit |
| Deutsche Telekom / CAMARA | [dt-camara-agent-onboarding.yaml](https://github.com/api-evangelist/deutsche-telekom/blob/main/capabilities/dt-camara-agent-onboarding.yaml) | Carrier-grade three-layer trust (operator agreement + agent registration + per-call user consent), regulatory archive with multi-year retention |

That's ten gateway adapter shapes, all expressed as Naftiko Capabilities, all parsing with stock `yaml.safe_load`, all following the same `consumes` + `orchestration` + `exposes` structure documented in the canonical [Ikanos capability spec](https://github.com/naftiko/ikanos.wiki). The differences across the ten reflect the gateway data models and trust affordances — not the agent-facing contract. The orchestrations range from Tyk's five-step minimum (one atomic gateway call) to Kong and Azure APIM's eight-step composition; the shape of the contract above each of them is identical. The companion [Polychro ruleset](https://github.com/api-evangelist/posts/blob/main/polychro/agent-onboarding-rules.yaml) lints every one of the ten artifacts for cross-capability consistency — same `verify_signature` / `verify_consent` / `classify_scopes` / `emit_audit` step contract, same REST/MCP/agent-skill exposed surfaces, same required env bindings.

The gateway-specific operation paths above are not invented — they are pulled directly from the OpenAPIs published across the [API Evangelist GitHub organization](https://github.com/api-evangelist) at [api-evangelist/kong/openapi](https://github.com/api-evangelist/kong/tree/main/openapi), [api-evangelist/apigee/openapi](https://github.com/api-evangelist/apigee/tree/main/openapi), [api-evangelist/wso2/openapi](https://github.com/api-evangelist/wso2/tree/main/openapi), [api-evangelist/tyk/openapi](https://github.com/api-evangelist/tyk/tree/main/openapi), and the rest. I evaluated all of them this week and produced an inventory matrix scoring 75 gateway providers by how cleanly they can drive each leg of the flow.

![Docks waterfront in the blue-circuit filter](https://kinlane-images.s3.amazonaws.com/shared/blue-circuit-docks-water-front.jpg)

## What the Eval Surfaced

Four pieces of work behind this post — an adapter specification (the formal contract any per-gateway adapter must implement: `listAPIs`, `getSpec`, `issueCredential`, `streamAuditEvents`, `listMCPServers`), a Kong vs. Apigee deep dive (Kong's adapter is ~4.5 days, Apigee's is ~6.5 days plus a Cloud Audit Logs side-channel), a gateway inventory across 75 providers (Eight Tier-1 turnkey targets, thirty-three Tier-2 needing audit side-channels, thirty-four Tier-3 with thin OpenAPI surfaces), and the automated onboarding flow specification itself.

Three findings worth pulling out of that work:

**Three gateways already publish first-class MCP operations.** WSO2 has seventy MCP-related operations in their Publisher and Devportal APIs, including `createMCPServerFromOpenAPI` and `createMCPServerFromAPI`. Workato has sixteen MCP-server-management operations including assigning tools to a server and renewing server tokens. Kong has thirteen MCP control-plane operations. Apigee, Tyk, Gravitee, AWS, and Google Cloud all have zero. The agent onboarding capability for those first three gateways doesn't just *enable* MCP — it discovers and orchestrates MCP servers the gateway is already operating. That's a meaningful value-add that no one is talking about.

**Audit observability is where the field splits.** The Web Bot Auth signature that proves which agent registered needs to land somewhere the provider can later prove who-onboarded-whom. Kong, WSO2, and Gravitee ship native audit operations in their OpenAPI. Apigee, AWS, Google, and Azure push audit to their unified cloud audit log services — out of band from the gateway. The capability has to know how to talk to both shapes.

**The standardized package is two layers.** A gateway-independent core (linkset emitter, robots.txt template, JSON-LD context, agent skill templates, the edge worker that injects RFC 8288 Link headers) sits on top of a per-gateway adapter (the operation-composition layer). The first half is approximately the [May 16 agent-readiness work](https://apievangelist.com/2026/05/16/making-the-api-evangelist-network-agent-readable/) generalized. The second half is new per gateway.

## Why I'm Writing This Up Without Shipping It Yet

I don't have a live gateway tenant to run any of this against this spectrum. All ten capability artifacts are complete, schema-valid Naftiko Capability declarations, but none of them has yet been executed against a real customer environment. The full series of artifacts is design-validated — every YAML parses, every `consumes` block maps to operations the gateway actually publishes, every orchestration step references either a builtin or a consumed operation defined elsewhere in the same file — but the artifacts have not yet been deployed against any customer's gateway tenant. I'm publishing the design before the implementation for three reasons.

**One:** I am [actively looking for design partners](https://apievangelist.com/services). If you run an API program — at any scale — and the "we cannot onboard agents fast enough" problem is real for you, I would like to talk. Every major commercial API gateway in the field now has a committed reference capability; running any of them against a real customer tenant is one engagement away. The customer that goes first on any given gateway shapes the policy surface, the trust model, and the credential lifecycle to fit their needs while the standardized package is still being defined.

**Two:** The design is more useful in public than in private. Every API gateway vendor I have talked to in the last two months is wrestling with some version of this question, and every API provider I have talked to is wrestling with the other side of it. Publishing the operation-by-operation map of how each major gateway's existing API surface composes into this flow is a contribution to a conversation that needed somewhere to land. The conversation should not have to start over every time a provider gets asked "can your agent self-register against us."

**Three:** The work is the thing. I have been doing API Evangelist for fifteen years, and the pattern that has been most consistently true is that the design specs I publish early get implemented by people who needed exactly that design spec — sometimes by my customers, often by other vendors, occasionally as the eventual canonical version of the thing. The agent onboarding capability is a pattern that needs to exist. Whether I ship the reference implementation or whether someone else does, the capability shape above is what should ship. Writing it down clearly and pointing at the gateway operations that compose into it is the contribution worth making first.

## What's Updated

I have refreshed both my [API Evangelist services page](https://apievangelist.com/services) and the [APIs.io services page](https://apis.io/services/) to lead with the automated onboarding angle on the agentic-preparation service. The doorway pattern is still there — `.well-known/api-catalog`, `.well-known/mcp`, agent skills, secure credential issuance — but it now leads with the *automated* framing because that is what the work this week made clear is the actual differentiator. A doorway that requires a human at the gate is a portal. A doorway that recognizes a signed agent and provisions it in one round trip is a different thing.

If you are running an API program and your agents-need-credentials story is currently "they file a Jira ticket like everyone else," let's talk. Ten reference capabilities are committed across the [API Evangelist GitHub organization](https://github.com/api-evangelist), one per major gateway. The one that matches whichever gateway you operate is one engagement away from being executed against your tenant.

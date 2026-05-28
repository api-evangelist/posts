---
published: true
layout: post
title: "Automated Agent Onboarding Is a Naftiko Capability, Not a Gateway Feature"
date: 2026-05-27
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-gatew-into-field.jpg
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

Your existing API management platform cannot do this. None of them can.

I spent the last week reading every API gateway and API management OpenAPI in [my API Evangelist network](https://github.com/api-evangelist) — Kong, Apigee, Tyk, WSO2, Gravitee, AWS API Gateway, Azure APIM, Google Cloud API Gateway, MuleSoft, Workato, and seventy-odd others — looking for the operations that would compose into an "agent shows up and self-registers" flow. The operations exist. Every Tier 1 gateway can create a developer, create an app, issue a scoped key, attach a rate limit policy, and stream an audit event. The pieces are there. What's missing is the *composition* — the single endpoint that takes a signed onboarding request and orchestrates the three-to-five gateway calls needed to turn it into a credential the agent can use. No gateway has shipped that endpoint. It is not in their roadmap because it is not their job.

It is the job of a [Naftiko Capability](https://naftiko.io).

## The Flow

What the agent experience needs to look like:

1. Agent fetches `/.well-known/api-catalog` per [RFC 9264](https://www.rfc-editor.org/rfc/rfc9264). The catalog includes an `x-onboarding` extension pointing at the consent document, the supported signature scheme, and which scopes auto-issue versus require approval.
2. Agent fetches `/skills/onboard-agent.md` from the provider's published agent skills directory. The skill is the operating manual — it tells the agent how to construct the request.
3. Agent computes a SHA-256 hash of the consent document it just read.
4. Agent constructs an HTTP signature over its onboarding request (per [Web Bot Auth](https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/)), includes the consent hash, the skill ID, the requested scopes, and an operator contact, and POSTs to `/onboard`.
5. The provider's edge worker verifies the signature, calls the onboarding capability behind it, and returns a scoped credential. Or, for scopes that need human approval, returns a `202 Accepted` with a status URL the agent polls.

One round trip for the auto-issuable scopes. A clean async-with-status pattern for the rest. The agent never sees the gateway. The gateway never sees the Web Bot Auth signature. The capability is the seam.

## Why It's a Capability, Not a Gateway Feature

I have been writing about Naftiko Capabilities for most of 2026. The shorthand: a Naftiko Capability is a declarative, domain-aligned unit of integration. It speaks existing API standards (OpenAPI, JSON Schema, APIs.json), composes operations across one or more underlying services, and produces consistent surfaces (REST, MCP, Agent Skills) on top of whatever inconsistent operations sit underneath. You can [generate them from OpenAPIs](https://apievangelist.com/2026/04/14/questioning-our-api-governance-reality/). You can [govern them with Spectral rules](https://github.com/api-evangelist/palo-alto-networks). You can run them through the [Naftiko Framework](https://naftiko.io) on top of whatever existing API or data source sits behind them.

The agent onboarding flow is a *textbook* capability problem. Read why:

- **It composes operations across at least two gateway surfaces.** Even on the cleanest gateway (Kong), the flow is `POST consumers` → `POST consumer_groups` → `POST consumer_groups/{cgId}/consumers` → `POST consumers/{cid}/key-auth` → stream audit event. That's five operations. On Apigee it's four operations spread across two API surfaces (Management + Cloud Audit Logs). On AWS it's three operations spread across three surfaces (API Gateway, IAM, CloudTrail).
- **The scope vocabulary is gateway-native and ugly.** Kong has ACL plugin tags. Apigee has API Products. WSO2 has throttling policies. Tyk has `access_rights` arrays. The provider should declare scopes once in human-readable terms (`read:public`, `write:invoices`) and have the capability translate to whichever gateway-native primitive applies. That translation is exactly what Naftiko Capabilities are for.
- **The policy surface is declarative.** Trusted issuers, auto-issuable scopes, approval channels, default rate limits, consent terms, audit destination. All YAML. Editable by the provider without touching the gateway. The capability enforces the policy on every onboarding request.
- **The outputs are multi-surface.** The same capability publishes a REST endpoint (`POST /onboard`), an MCP tool (`agent.register`), and an agent skill (`onboard-agent.md`). One declaration, three derivative surfaces. That is the Naftiko Capabilities pattern exactly.

A gateway team is not going to ship this for you. Kong is not going to write the Apigee adapter. Apigee is not going to write a Web Bot Auth verifier in Apigee's policy language. WSO2 has *almost* shipped this in the form of dynamic client registration (`POST /register`), but they didn't model agent identity and they didn't ship the consent-hash or scope-translation legs of the flow. None of these vendors will. It is not their business model.

The vendor that ships it is the one that treats the flow as a portable capability that runs in front of any of them.

## What the Capability Actually Contains

The Naftiko Capability for agent onboarding declares:

```yaml
name: agent-onboarding
description: |
 Verify an agent's Web Bot Auth identity, check it against the provider's
 trust policy, compose the gateway operations needed to provision a scoped
 credential, stamp the consent acknowledgement onto the audit trail, and
 return the credential to the agent in a single round trip.

inputs:
 signature:
 type: web-bot-auth # RFC 9421 HTTP Message Signature
 verify_against: keys-directory
 skill_id: string # which onboarding skill version executed
 scopes: array # requested scopes from x-onboarding.automated_scopes
 consent_hash: string # SHA-256 of the published consent document
 contact:
 operator: string # e.g. anthropic.com
 support_url: url
 purpose: string

policy: ref(./policy.yaml) # provider-declared trust, scopes, defaults

operations:
 - id: create_identity
 map_per_gateway:
 kong: POST /{workspace}/consumers
 apigee: POST /organizations/{org}/developers
 wso2: POST /register # DCR
 tyk: inline_with_credential # one-shot
 gravitee: POST /environments/{envId}/applications
 - id: create_app
 map_per_gateway:
 kong: POST /{workspace}/consumer_groups
 apigee: POST /organizations/{org}/developers/{devEmail}/apps
 wso2: POST /devportal/applications
...
 - id: issue_credential
 map_per_gateway:
 kong: POST /{workspace}/consumers/{id}/key-auth
 apigee: (returned in create_app response)
 wso2: POST /apis/{apiId}/api-keys/generate
...
 - id: apply_scope_and_rate_limit
 map_per_gateway: {... }
 - id: record_audit_event
 map_per_gateway:
 kong: POST /v1/event-gateways/{gw}/topics/audit-events/produce
 apigee: (Google Cloud Audit Logs — out of band)
 wso2: GET /tenant-logs/{tenant}/apis/ # observe channel
 gravitee: POST /environments/{envId}/audits # native
...

outputs:
 rest: POST /onboard # what the agent calls
 mcp_tool: agent.register # what an MCP client calls
 skill: skills/onboard-agent.md # what the agent reads to know how to call

audit:
 emit_to: ref(policy.audit.destination)
 include_web_bot_auth_signature: true
 include_consent_hash: true
```

The capability is a single artifact. It declares what the agent will send, what trust is required, which gateway operations get composed in which order, what the policy levers are, and which surfaces are produced. The Naftiko Framework runs it. The provider edits `policy.yaml` and re-deploys without ever touching the capability or the gateway.

The gateway-specific operation paths above are not invented — they are pulled directly from the OpenAPIs published across the [API Evangelist GitHub organization](https://github.com/api-evangelist) at [api-evangelist/kong/openapi](https://github.com/api-evangelist/kong/tree/main/openapi), [api-evangelist/apigee/openapi](https://github.com/api-evangelist/apigee/tree/main/openapi), [api-evangelist/wso2/openapi](https://github.com/api-evangelist/wso2/tree/main/openapi), [api-evangelist/tyk/openapi](https://github.com/api-evangelist/tyk/tree/main/openapi), and the rest. I evaluated all of them this week and produced an inventory matrix scoring 75 gateway providers by how cleanly they can drive each leg of the flow.

![Docks waterfront in the blue-circuit filter](https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/blue-circuit-docks-water-front.jpg)

## What the Eval Surfaced

Four pieces of work behind this post — an adapter specification (the formal contract any per-gateway adapter must implement: `listAPIs`, `getSpec`, `issueCredential`, `streamAuditEvents`, `listMCPServers`), a Kong vs. Apigee deep dive (Kong's adapter is ~4.5 days, Apigee's is ~6.5 days plus a Cloud Audit Logs side-channel), a gateway inventory across 75 providers (Eight Tier-1 turnkey targets, thirty-three Tier-2 needing audit side-channels, thirty-four Tier-3 with thin OpenAPI surfaces), and the automated onboarding flow specification itself.

Three findings worth pulling out of that work:

**Three gateways already publish first-class MCP operations.** WSO2 has seventy MCP-related operations in their Publisher and Devportal APIs, including `createMCPServerFromOpenAPI` and `createMCPServerFromAPI`. Workato has sixteen MCP-server-management operations including assigning tools to a server and renewing server tokens. Kong has thirteen MCP control-plane operations. Apigee, Tyk, Gravitee, AWS, and Google Cloud all have zero. The agent onboarding capability for those first three gateways doesn't just *enable* MCP — it discovers and orchestrates MCP servers the gateway is already operating. That's a meaningful value-add that no one is talking about.

**Audit observability is where the field splits.** The Web Bot Auth signature that proves which agent registered needs to land somewhere the provider can later prove who-onboarded-whom. Kong, WSO2, and Gravitee ship native audit operations in their OpenAPI. Apigee, AWS, Google, and Azure push audit to their unified cloud audit log services — out of band from the gateway. The capability has to know how to talk to both shapes.

**The standardized package is two layers.** A gateway-independent core (linkset emitter, robots.txt template, JSON-LD context, agent skill templates, the edge worker that injects RFC 8288 Link headers) sits on top of a per-gateway adapter (the operation-composition layer). The first half is approximately the [May 16 agent-readiness work](https://apievangelist.com/2026/05/16/making-the-api-evangelist-network-agent-readable/) generalized. The second half is new per gateway.

## Why I'm Writing This Up Without Shipping It Yet

Honest disclosure: I don't have a live gateway tenant to run this against. The evaluation is built on the published OpenAPIs and the design is the capability declaration above. I'm publishing the design before the implementation for three reasons.

**One:** I am [actively looking for design partners](https://apievangelist.com/services). If you run an API program — at any scale — and the "we cannot onboard agents fast enough" problem is real for you, I would like to talk. The capability is one engagement away from being a working reference. The customer that goes first gets to shape the policy surface, the trust model, and the credential lifecycle to fit their needs while the standardized package is still being defined.

**Two:** The design is more useful in public than in private. Every API gateway vendor I have talked to in the last two months is wrestling with some version of this question, and every API provider I have talked to is wrestling with the other side of it. Publishing the operation-by-operation map of how each major gateway's existing API surface composes into this flow is a contribution to a conversation that needed somewhere to land. The conversation should not have to start over every time a provider gets asked "can your agent self-register against us."

**Three:** The work is the thing. I have been doing API Evangelist for fifteen years, and the pattern that has been most consistently true is that the design specs I publish early get implemented by people who needed exactly that design spec — sometimes by my customers, often by other vendors, occasionally as the eventual canonical version of the thing. The agent onboarding capability is a pattern that needs to exist. Whether I ship the reference implementation or whether someone else does, the capability shape above is what should ship. Writing it down clearly and pointing at the gateway operations that compose into it is the contribution worth making first.

## What's Updated

I have refreshed both my [API Evangelist services page](https://apievangelist.com/services) and the [APIs.io services page](https://apis.io/services/) to lead with the automated onboarding angle on the agentic-preparation service. The doorway pattern is still there — `.well-known/api-catalog`, `.well-known/mcp`, agent skills, secure credential issuance — but it now leads with the *automated* framing because that is what the work this week made clear is the actual differentiator. A doorway that requires a human at the gate is a portal. A doorway that recognizes a signed agent and provisions it in one round trip is a different thing.

If you are running an API program and your agents-need-credentials story is currently "they file a Jira ticket like everyone else," let's talk. The capability is ready to deploy against the gateway you already have.

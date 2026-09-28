---
published: true
layout: post
title: 'The Standards That Make Your Business Agent-Ready'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-standards-that-make-your-business-agent-ready.png
date: 2026-09-28
author: Kin Lane
tags:
  - Agent Readiness
  - Kin Score
  - Standards
  - OpenAPI
  - MCP
  - OAuth
  - APIs.io
  - APIs
---
"Agent-ready" has become one of those phrases that means whatever the person saying it needs it to mean. So I want to be specific about what it means in the [Kin Score](https://apis.io/rating/), because there it is not a feeling. It is nineteen dimensions, 139 points, and almost every one of them is a published standard you can go read and implement. If you want your business to be something an AI agent can actually work with, this is the list.

I have grouped them by what an agent needs to do. For each one I give the points it carries and how many of the 27,274 providers scored on the current rubric (0.23) earn any credit for it today. "Any credit" is generous. It includes partial grades and, for a couple of dimensions, artifacts my own pipeline generated rather than ones the provider published, which I call out where it matters.

## 1. Describe what you do

An agent calls your API from a contract, not from your HTML documentation.

- **[OpenAPI](https://apis.io/rating/dimensions/spec-presence/)** (18 points, 32.8%). A public, machine-readable contract. It is the single largest award in the model, because without it there is nothing to drive.
- **Request and response examples** (7 points, 16.1%). The cheapest way for an agent to learn a payload's shape before it makes a call. Full credit needs examples on at least half your operations.
- **[A stable error envelope](https://apis.io/rating/dimensions/error-semantics/)** (8 points, 21.7%). One typed error schema used across your error responses, rather than free-text messages. RFC 9457 Problem Details is the standard way to do it. Agents branch on errors, and a sentence is not something they can branch on.
- **A typed event surface** (6 points, 10.8%). If an agent has to react to changes in state, describe your webhooks or event streams with a contract, such as AsyncAPI, not a page of example payloads.

## 2. Act without breaking things

Agents retry, and they act at machine speed. These are the safety rails.

- **[Idempotency keys](https://apis.io/rating/dimensions/idempotency/)** (9 points, 7.5%). An `Idempotency-Key` header on your POST, PUT and PATCH operations, in the contract. Without it, a retry double-charges a card or sends a message twice.
- **[Rate-limit signaling](https://apis.io/rating/dimensions/rate-limit-signal/)** (7 points, 36.0%). Documented limits tell an agent the ceiling. Full credit needs live rate-limit state in response headers, which is what an agent reads in the middle of a run. The IETF `RateLimit` header fields are the emerging standard.
- **Documented reversibility** (6 points, 10.9%). Say what can be undone, how, and for how long.
- **[Dry-run or simulate mode](https://apis.io/rating/dimensions/dry-run-mode/)** (4 points, 4.1%). The safest agent affordance there is: plan a destructive action and show a human before committing it.

These are not optional in the top band. **Agent-native requires both idempotency and a stable error envelope**, whatever else you score, and neither counts if the evidence is something I derived rather than something you published. Only 386 providers, 1.4%, are agent-native today.

## 3. Let an agent authenticate as an agent

This is where most of the web is still built for humans with a browser and a portal form.

- **Machine-readable auth** (10 points, 38.3%). Graded by what kind of credential it is. A static API key earns a floor, because the IETF agent-auth draft calls long-lived bearer keys an antipattern for agent identity. OAuth, OpenID Connect and bound credentials earn more.
- **[Delegated user identity](https://apis.io/rating/dimensions/delegated-identity/)** (6 points, 9.7%). Can an agent get a token scoped to the person it is acting for, through the OAuth 2.0 authorization code flow, or only a credential that belongs to the integration? That is the difference between an audit log that can name who asked and one that cannot.
- **[Protected Resource Metadata, RFC 9728](https://apis.io/rating/dimensions/protected-resource-metadata/)** (5 points, 6.0%). A document at your own domain that tells an agent how a resource is protected and which authorization server protects it, discovered at runtime instead of configured by a human.
- **[Registration without a human, RFC 7591](https://apis.io/rating/dimensions/dynamic-client-registration/)** (6 points, 5.0%). Dynamic client registration. If every new agent needs a developer to fill in a form and paste a key, you have no agent onboarding path, whatever your docs say.

## 4. Be found

An agent has to be able to discover you before it can use you.

- **[MCP server](https://apis.io/rating/dimensions/mcp-server/)** (12 points, 12.9%). A Model Context Protocol server gives agents a uniform tool surface. It is graded by provenance: a real, reachable server you operate earns full credit, and a WordPress plugin or a platform's built-in endpoint does not.
- **[A2A agent card](https://apis.io/rating/dimensions/agent-card/)** (8 points, 1.2%). A machine-readable manifest at `/.well-known/agent-card.json` that advertises your agent's identity, capabilities, endpoint and auth. It is weighted above skills for a structural reason: it is the one agent surface I cannot create on your behalf. It is served from your own host, or it does not exist.
- **[Agent Skills](https://apis.io/rating/dimensions/agent-skills/)** (5 points, 16.5%). Packaged instructions, a `SKILL.md` in the Agent Skills format, telling an agent how to use your API well. Most of that 16.5% is skills my pipeline generated. The number of providers publishing their own is far smaller, and the grading reflects that.
- **[The API catalog, RFC 9727](https://apis.io/rating/dimensions/well-known-catalog/)** (4 points, 2.2%). A `/.well-known/api-catalog` linkset: the front door an agent tries first to find your APIs.
- **An agentic access contract** (10 points, 23.7%). An `x-agentic-access` document classifying each operation by action class, consequence and when a human must be in the loop. I should be upfront that this one is an API Evangelist proposal, not an external standard, and most of that 23.7% is classifications my pipeline derived. It is in the rubric because nothing else says, operation by operation, what an agent is allowed to do on its own.

## 5. State your terms

The frontier, and the rarest items on the list.

- **[Consent and bot identity](https://apis.io/rating/dimensions/consent-identity/)** (3 points, 0.4%). Machine-readable statements of what AI may do with your content, from IETF AIPREF or Content Signals, and cryptographically identified agent traffic through Web Bot Auth and HTTP Message Signatures (RFC 9421).
- **[Agentic commerce](https://apis.io/rating/dimensions/agentic-commerce/)** (5 points, 0.9%). A well-known document an agent can use to shop your catalog. Most of the ones in the wild are published by a commerce platform on its merchants' behalf, and the score grades them down for that.

## Reading the list

Look at where the percentages fall. The things businesses have done for years for human developers (auth, rate limits, a contract) sit around a third of the catalog. The things that exist specifically so an agent can act on its own, safely and accountably, sit in the single digits: idempotency, runtime auth discovery, registration without a form, agent cards, consent signals. That gap is the distance between "we have an API" and "an agent can work with our business."

None of this is proprietary. Apart from the agentic access contract, every item is an open specification or an IETF RFC or draft, and every dimension has its own page on APIs.io explaining exactly what earns credit. If you are being asked whether your business is agent-ready, start at the bottom of this list and work up. The rarest items are where you will stand out.

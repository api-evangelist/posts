---
published: true
layout: post
title: 'What Our Agents Do When They Profile An API Provider'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-our-agents-do-when-they-profile-an-api-provider.png
date: 2026-11-11
author: Kin Lane
tags:
  - Kin Score
  - Agent Readiness
  - APIs.io
  - Agents
  - Discovery
  - Governance
---
People see the result of a profile: a provider page on [APIs.io](https://apis.io), a [Kin Score](https://apis.io/rating/), a band, and an Agent Readiness reading. They don't see what it takes to get there. I get asked about it enough that I want to walk through everything our agents do today when they profile a company from its website and score it.

The short version is that a profile starts from almost nothing, usually a name and a website, and the agents' job is to find everything the company has published about its APIs, save the real thing, and record where every piece came from. The score is computed from what they find, not from what anyone thinks of the company.

## Search, then generate, then derive

Every artifact a profile can hold goes through the same three steps, in order:

1. **Search.** Find the artifact on the provider's own public surface: its docs, its GitHub, its registries and its `/.well-known/` paths. If it exists, save it verbatim.
2. **Generate.** If the provider doesn't publish it, but we can produce a faithful one, like an `llms.txt` built from their catalog, generate it and say so.
3. **Derive.** If it can be computed from what's already in the profile, like an error catalog from the `4xx` and `5xx` responses in their OpenAPI, derive it.

Every file carries a stamp saying which of those it was, when it was written and where it came from. A searched artifact is never replaced by a derived one. And the rule above all of it: never fabricate. A recorded absence is a finding. An invented API is a defect.

## Before the agents start

The expensive part of a profile is the agent, so anything that doesn't need judgement runs as a script first. A pre-flight pass probes every host we already know about for contracts, agent cards, protected resource metadata and well-known documents. It checks whether the links we already hold are alive, detects which docs platform the company runs on, and reads its domain security and security programs. It writes all of that into a dossier the agent reads first, and it snapshots the provider's current score so we can measure the change afterward.

The dossier is a lead sheet, not a verdict. It lists exactly which hosts it probed. When a profile starts from only a website, the real API host is usually one the agent finds by reading the docs, so "not found" on the dossier only means not found where we looked.

## Hunting for the contract

OpenAPI is still the center of what we score, but more and more providers center on GraphQL or MCP instead, and the machine-readable contract is often somewhere you wouldn't think to look. So the agents hunt before they ever write "no spec":

- **OpenAPI at the API host, not just the docs host.** A docs site that renders client-side will happily return an HTML page for `/openapi.json` while the real spec sits at the root of the API host. We learned that one from a provider whose first profile said "no spec" while an 86-operation OpenAPI was live the whole time.
- **The provider's own GitHub organization,** where a lot of contracts quietly live.
- **GraphQL schemas,** through introspection on endpoints the provider documents.
- **MCP tool lists,** read from servers the provider advertises.
- **A2A agent cards,** at `/.well-known/agent-card.json` and the older `agent.json` path, rejecting the HTML pages that single-page apps return for every path.
- **OGC capabilities documents** for geospatial providers, which aren't shaped like OpenAPI at all.

When more than one of these exists, the agents record a crosswalk between them, because REST, GraphQL and MCP are usually overlapping but not identical views of the same data. Picking one would drop whatever only the others can do.

If none of it turns up a contract and the docs are good enough, the agents can generate one from the documentation. That contract is marked as ours, kept apart from the provider's own, and scored lower than a contract the provider published.

## Everything else on the surface

Once the contract question is settled, the agents work through the rest of what a company publishes about its API. Depending on the provider, a profile can hold:

- **Identity:** name, description, website, docs, developer portal, sign-up, support, social, and the tags and industry that place it in the catalog.
- **Economics:** plans, pricing and rate limits, captured as structured data so they can be compared across providers.
- **Access and security:** authentication methods, OAuth scopes, terms, privacy, security.txt, vulnerability disclosure, trust centers and compliance claims like SOC 2 or ISO 27001.
- **Operations:** status pages, change logs, deprecation and lifecycle policy, and sandboxes.
- **Developer experience:** SDKs and packages, a CLI, getting-started guides, and embedded components.
- **Agent surfaces:** MCP servers, agent cards, `llms.txt`, agent skills and Arazzo workflows.
- **Events:** AsyncAPI and webhook descriptions.
- **Regulation:** for regulated industries, the consent, security and standards-conformance posture that the industry's regime expects.

Some of that is derived rather than found: a data model from the contract's references, an error catalog from its responses, and an agentic access summary from what the provider documents about access.

## How we touch a provider's hosts

This part matters to me, and it was learned the hard way. A security team once reported one of our runs as unsolicited requests against their authentication endpoints, and they were right to. So the agents follow strict rules now:

- **GET, HEAD and OPTIONS only.** The only exceptions are an MCP tool listing or a GraphQL introspection query, and only against an endpoint the provider documents.
- **Only hosts the provider documents or advertises.** A host we infer is recorded as observed, and we don't call it beyond its root or a published discovery path.
- **Never authentication, account, user, session or device endpoints,** with any method. We read what the docs say about them instead.
- **Check the do-not-list registry first.** A company that asked to be removed is never probed.

## After the agents finish

A finished agent pass isn't a finished profile. A deterministic tail picks up from there. Scripts write the steps that don't need judgement: the well-known documents, the agent card and its A2A grade, the data model and the error catalog. They wire every artifact to the canonical pointer the scorer looks for, because an artifact on disk without its pointer scores zero. Then every artifact is validated against its schema, specs are split and standardized, duplicates are checked, and the provider's page is rebuilt.

The last step is a score delta, before and after, and that's the acceptance test. A score that goes down after a re-profile is treated as a bug in the pass, not news about the company.

## How the Kin Score is computed

The [Kin Score](https://apis.io/rating/) reads three kinds of signal from the finished profile: which artifacts the profile points to, structured data parsed out of them (rate limits, plans, and how complete the OpenAPI is: summaries, descriptions, operation IDs, responses, examples and security schemes), and how complete the provider's identity is. Those roll up into six facets that apply to everyone:

| Facet | Weight | What it asks |
|---|---|---|
| Contract Quality | 25% | How rich and complete are the contracts? |
| Developer Ergonomics | 20% | How easy is it to get started? |
| Access Clarity | 20% | What does it cost, what am I allowed to do, and how do I get in? |
| Operational Transparency | 13% | Can I see rate limits, status, changes and deprecations? |
| Contract Governance | 12% | Are there rulesets, overlays and declared conformance around the contract? |
| Discoverability | 10% | Can the API be found and understood from metadata alone? |

Three more facets switch on only where they apply. Regulatory Posture applies to regulated industries, Open Source Surface to companies whose product is itself open source, and Create-or-Update Ergonomics to APIs that accept writes. A facet that doesn't apply is left out of the math, not scored as zero. A weather API isn't penalized for not having a banking regulator.

The composite lands in one of six bands: Exemplar at 66.5 and up, which is roughly the top one and a half percent of the catalog, then Strong, Developing, Thin, Emerging and Minimal.

## Agent Readiness is scored separately

Agent Readiness is its own score with its own bands, and it doesn't feed the Kin Score. It asks how safely an AI agent, not just a human developer, can drive the API. It looks at whether there is a machine-readable contract, machine-readable auth, an MCP server or agent card, agent skills, request and response examples, and pagination. It also looks for the safety rails an agent needs to act without a person cleaning up after it: idempotency, stable error semantics, rate-limit signaling, documented reversibility, dry-run modes, and the newer identity pieces like protected resource metadata and registration without a human.

The top band, Agent-Native, requires the provider to have built a real agent surface itself, with idempotency and a stable error envelope. A provider doesn't get there because someone else wrote agent artifacts about it.

## What a profile can't tell you

A profile measures what a company publishes, not how good its API is to use. A company with a great API and no public contract will score lower than it deserves until it publishes one. A low score usually describes a thin public surface, and often a thin company, more than a failing engine. And every provider can see exactly why it scored what it did, check by check, and tell us when we got something wrong.

That's the whole loop: find what's really there, save it with its source, never invent what isn't, and score only what we can point to. If you're a provider and want to see your own profile, look yourself up on [APIs.io](https://apis.io). If something is missing or wrong, the fastest fix is publishing it where an agent can find it.

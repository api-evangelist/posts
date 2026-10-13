---
published: true
layout: post
title: 'The Well-Known Folder Is Filling Up'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-well-known-folder-is-filling-up.png
date: 2026-10-13
author: Kin Lane
tags:
  - Discovery
  - Well-Known URI
  - Standards
  - AI Agents
  - OAuth
  - APIs.json
  - APIs
---
I was reading through [Open Resource Discovery](https://open-resource-discovery.org/) this morning — SAP's protocol, now under the Linux Foundation Europe's NeoNephos, for a system to describe the APIs and events it exposes — and noticed it starts the way so much does lately: at `/.well-known/open-resource-discovery`. Last week the [Personal Agent Protocol](https://standards.apievangelist.com/store/personal-agent-protocol/) told companies to publish `/.well-known/poppy.json`, and MCP Server Cards pointed domain discovery at `/.well-known/ai-catalog.json`. The [Dataspace Protocol](https://standards.apievangelist.com/store/dataspace-protocol/) requires `/.well-known/dspace-version`. It made me want to know exactly how crowded that folder has become.

So I built the list. The [Well-Known URIs page](https://standards.apievangelist.com/well-known/) on API Evangelist Standards reads the IANA registry live and adds the paths that are in use but were never registered. Today it holds **118 paths**.

## What the registry says

[RFC 8615](https://www.rfc-editor.org/rfc/rfc8615) defines the `/.well-known/` prefix, and IANA keeps the registry of what goes under it. It has **106 entries**: 63 permanent, 38 provisional, 3 deprecated and 2 obsoleted. They are not what most of us think of first. Yes, `security.txt`, `openid-configuration`, `oauth-authorization-server` and the newer `oauth-protected-resource` are in there, alongside [RFC 9727](https://www.rfc-editor.org/rfc/rfc9727)'s `api-catalog`. But so are ACME challenges, CoAP, BACnet building controls, Thread, KNX, Australian smart inverters, broadband labels, Matrix, Nostr, Tor relays and Terraform's remote service discovery. The well-known folder has quietly become the internet's shared front porch.

And it is getting busier. Fifteen registrations in 2023, twelve in 2024, six in 2025 — and twelve already in 2026: `xregistry` from CloudEvents' xRegistry, `scitt-keys`, `webauthn`, `openbindings`, `vacation-rental.json`, a storage interface from SNIA that landed on October 7, and more. A2A's `agent-card.json` was registered as permanent in August 2025, and Open Resource Discovery registered provisionally back in November 2023.

## What the registry doesn't say

Registration is optional, and the agent era is mostly skipping it. These are in use or required by a published specification, and none of them is in the IANA registry:

- `/.well-known/ai-catalog.json` — the AI Catalog, now the discovery anchor for MCP Server Cards and Agentic Resource Discovery
- `/.well-known/poppy.json` — the Personal Agent Protocol, draft 0.1
- `/.well-known/dspace-version` — a MUST in the Dataspace Protocol 2025-1
- `/.well-known/ucp` — the Universal Commerce Protocol
- `/.well-known/http-message-signatures-directory` — the IETF draft for publishing the keys a bot or agent signs requests with
- `/.well-known/smart-configuration` — SMART on FHIR, which healthcare has run on for years
- `/.well-known/agent.json` and `/.well-known/mcp.json` — earlier A2A and MCP discovery attempts, superseded but still served
- `/.well-known/apis.json` — and I have to own this one, because it's mine

That last one stings a little. I have been arguing for a single, machine-readable front door to a provider's APIs since we started APIs.json, and I never registered the path. The process is short and public, and I should have. I'd encourage the people behind every path on that list to do it too — it costs an email and some review, and it gives the next person a place to look before they pick a name that collides with yours.

## Too many front doors

Every path in that folder is reasonable on its own. Together they are a lot to ask. A provider that wants to be found by agents in 2026 is looking at an API catalog, an AI catalog, an agent card, OAuth server metadata, protected resource metadata, a JWKS, a security.txt, maybe a Poppy document, maybe ORD — each one more thing to publish, keep current and secure, and each one more thing every client has to probe for. I see the result every week across the [APIs.io](https://apis.io) catalog: most providers publish few or none of these, and the ones that exist often go stale.

I don't think the answer is fewer specifications. Each of these does a real job. I think the answer is that they should **point at each other**. RFC 9727's `api-catalog` already uses a linkset to point at other things. MCP Server Cards point at the AI Catalog instead of inventing a path. OAuth protected resource metadata points at its authorization servers. If a client could land on any one of these doors and follow links to the rest, the number of doors would matter a lot less.

The [page](https://standards.apievangelist.com/well-known/) groups every path by what it is for — discovery, agents, identity and keys, security and supply chain, data spaces, the web, networks and devices — links each one to the specification that defines it, and flags the unregistered ones. It rebuilds from the registry, so it will stay current. If you know of a well-known path in real use that is missing, tell me, and point me at the spec that defines it.

---
published: true
layout: post
title: 'Discovery Is The First Governance Control: My Keynote At Tyk LEAP ON TOUR In New York'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/discovery-is-the-first-governance-control-my-keynote-at-tyk-leap-on-tour-in-new-york.png
date: 2026-10-22
author: Kin Lane
tags:
  - MCP
  - Governance
  - Discovery
  - Agents
  - Speaking
  - Data
---
Yesterday morning I opened Tyk's [LEAP ON TOUR: The Future of MCP Governance](https://tyk.io/events/leap-on-tour-future-of-mcp-governance/) in New York, a room of about thirty people who decide how their companies will govern agents, most of them from finance. Buddha gave me twenty minutes to set the stage before a panel with Kelly Rogers and Irene Aldridge. I did it in eighteen. The video is below, the [deck is online](https://talks.apievangelist.com/2026-tyk-leap-on-tour-nyc-mcp-governance/2026-tyk-leap-on-tour-nyc-mcp-governance.html), and this post is what I said, with the numbers I rounded on stage put back the way the catalog has them.

<iframe width="100%" height="420" src="https://www.youtube.com/embed/P9g8e5HJwW0" title="Discovery Is the First Governance Control — Kin Lane keynote at Tyk LEAP ON TOUR New York" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Tyk's line for the day was that every call is an ungoverned path unless something inspects it. That is right. I added one thing to it: nothing can inspect a path it has not found. Discovery comes first. Everything that follows is the evidence for that sentence, read from the [APIs.io](https://apis.io) catalog as it stood on October 17, which is 31,229 API providers and 154,842 APIs profiled and scored on two instruments that never touch each other, the Kin Score for governance and Agent Readiness for whether an autonomous agent can drive the API without a human filling in the gaps.

## MCP server is three different numbers

When a vendor, an analyst or your own platform team says "we have N MCP servers," ask which N. In the catalog there are 6,968 MCP entries, which is anything a provider says about MCP in a machine-readable way. Of those, 4,041 are real servers, a manifest with a server behind it. Of those, 3,321 are hosted endpoints an agent can actually open. The rest is theater: 2,774 are declared with nothing reachable behind them, and 691 are a documentation page about a server rather than a server.

I have published the wrong one of those three numbers myself, in print, and corrected it the next week. The reason this matters for the room is that every enterprise estate has the same three numbers. The gap between declared and reachable is what the Chicago stop of this tour named shadow MCP. The gap between reachable and registered is what the whole day was about.

## Reachable is not governed

My agents probed 2,548 of those remote endpoints with an anonymous `initialize`. 836 of them, a third, let the anonymous client in. 1,463 refused with an auth challenge. 143 were dead hosts and 17 were not MCP at all. When I probed a random eighty by hand, two were uninstantiated templates: `https://<JFROG_PLATFORM_URL>/mcp` and `/mcp/{ACCOUNT_ID}`, copied out of the documentation with the placeholder still in the URL. An agent does not know what your server name is. It is not an existing customer.

## The authorization gap

The MCP specification's authorization model depends on a server advertising RFC 9728 protected-resource metadata so an agent can find the authorization server at runtime, register itself under RFC 7591, and get a token scoped to the human it acts for. Across 31,004 scored providers, 2,075 publish that metadata, which is 6.7%, and only 140 of them serve it at the `/mcp` path itself. 1,617 offer dynamic client registration, 5.2%. 2,530 serve delegated user identity, 8.2%. Meanwhile 7,710 providers hand out a bearer token or an API key and nothing else. Fewer than one in ten providers publish what an agent needs to authenticate as the person it works for, and the rest give the agent a credential that belongs to the integration. An audit log that cannot name the delegated subject cannot answer the question your CISO will ask. That is where a gateway doing token exchange earns its keep, because almost nobody has it in the API.

## Curated or generated

Of the 4,408 servers where my agents captured a tool list, the median server has 12 tools. 182 have more than a hundred, and the largest has 1,029. Among servers with five or more tools, 42% are one-tool-per-operation generators, the names all `get_this` and `create_that`. Generating an MCP server from your OpenAPI is fine as a start. It is the new generating an SDK. But if nothing was done beyond the generation, the resources, the prompts, the security and the metadata an agent needs are not there, and the model is choosing between three hundred tools with its context window. I rate servers as generated, handcrafted or evolved, and the ones that work are small and shaped around a use case.

## Discovery is federated

If you run an API program, your portal has been the front door. Agents do not start there. They start at your domain's `/.well-known` location, and there are now about fifty documents that can live there. Across 10,809 providers probed at their own domains, 2,248 serve OAuth authorization-server metadata, 1,578 serve protected-resource metadata, 702 serve an RFC 9727 API catalog, 629 serve an A2A agent card, 573 serve an `llms.txt`, and 186 serve an MCP server card. The official MCP registry listed 1,900 servers on October 7 and 46,293 twelve days later, which is bulk publishing rather than adoption, with a single Cloudflare Workers host accounting for 2,365 of the entries. Of the 3,194 hosts behind the catalog's hosted endpoints, one in six appears in the registry at all. There is no single place to look, and there will not be. Inside your company it is the same shape, and if your governance program does not start with a discovery surface, the servers it cannot see are the ones that matter.

## Readiness does not rise above the foundation

This is the finding I have carried through Toronto, London and Stockholm this autumn, and it keeps holding. Across 31,005 providers the governance composite and the agent-readiness rating correlate at r = 0.870, and 94.9% of providers score readiness at or below their governance. Of the 434 providers in the exemplar governance band, 21.9% reach agent-native. Of the 13,883 in the bottom band, zero do, and some of them have shipped MCP servers. The dimensions that move readiness are not AI features: idempotency keys on writes, which 3.9% of providers declare; stable error semantics, 20.3%; documented reversibility, 7.3%; a dry-run on destructive operations, 0.6%. They are API disciplines that were always supposed to be there, now load-bearing because there is no developer in the loop to work around their absence. Getting the server up is the easy part.

The one asterisk is the 1.4% whose readiness exceeds their foundation. When I went looking, most of them were facades, companies with a polished MCP server and no business underneath, built to be sold on the secondary market.

## Standards are how an industry meets this moment

The room was finance, so I showed them their own sector. Providers that actually conform to PSD2 and the Open Banking family, 178 of them graded at the contract, are 9.6% agent-native against 4.3% for banking at large, with a median readiness of 27.4 against 3.2. The 102 that conform to FHIR are 3.9% agent-native against 0.4% for healthcare at large, where the median readiness is zero. Agents understand standards. They hallucinate less across ten APIs that share FHIR than across ten APIs that each invented their own shape. The caution is that claimed is not conformant: 1,093 providers declare FHIR and 102 conform. A standard stabilizes an industry only when it is shipped at the contract, and MCP, A2A and RFC 9728 are the next entries on that list.

## Monday

I closed with the list I would hand any of the companies in that room.

1. Inventory the three numbers for your own estate: declared, exists, reachable. The delta is your shadow MCP.
2. Publish discovery on your own domain: the API catalog, protected-resource metadata, a server card. Cheap, rare, and what every registry and scanner reads first.
3. Own the server's design. Few tools, shaped around use cases, annotated for read versus write. A platform-generated server is a start, not an end.
4. Put identity in the path, so the agent carries the user's identity rather than the integration's key, and log the delegated subject.
5. Fix the APIs underneath where readiness is bounded: idempotency, error schemas, rate-limit headers, reversibility.
6. Measure it, on the same instrument, every quarter. Nothing moves the number except what you publish, which is exactly what makes it worth moving.

Nothing on that list is specific to MCP, and that was the point of standing in front of an API management company's customers to say it. The gateway is where the inventory, the identity and the enforcement happen in one place.

The panel that followed, with Kelly, Irene and Buddha, went straight into who owns an agent in a bank and how you govern the agent that governs the agents. I will write that up separately. In the meantime, the [deck](https://talks.apievangelist.com/2026-tyk-leap-on-tour-nyc-mcp-governance/2026-tyk-leap-on-tour-nyc-mcp-governance.html) carries every figure with its snapshot date, and you can look your own company up on [APIs.io](https://apis.io) before you decide whether any of this applies to you.

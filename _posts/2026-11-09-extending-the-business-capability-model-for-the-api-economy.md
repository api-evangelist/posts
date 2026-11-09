---
published: true
layout: post
title: 'Extending The Business Capability Model For The API Economy'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/extending-the-business-capability-model-for-the-api-economy.png
date: 2026-11-09
author: Kin Lane
tags:
  - Business Capabilities
  - APIs.io
  - Enterprise Architecture
  - Agents
  - Open Data
---
The [business capabilities section of APIs.io](https://apis.io/capabilities/) is built on [Turbo EA Capabilities](https://github.com/vincentmakes/turbo-ea-capabilities) by Vincent Verdet, an openly licensed enterprise capability model with 333 top-level capabilities and nearly 10,000 nodes across 28 industries. It is good work, and it lets me connect what a business does to the APIs that can actually do it, with the evidence quoted from each API contract.

It also has an edge, and the API economy keeps going well past it.

## Where the model runs out

Turbo EA describes what an organization *does*: financial management, human capital, cybersecurity, supply chain. It has no place for what a consumer app or a B2B SaaS product *offers*. When I measured it at the end of October, only 4,299 of the 29,502 providers in the catalog mapped to any capability at all.

The tags on the providers left out told the story: e-commerce (1,342), consumer (1,301), MCP (944), marketplace (866), AI agents (769), gaming (386), agentic commerce (264). When I started sketching application blueprints, I hit the same wall in the first three categories I tried. There was no capability for a food database, for fitness tracking, or for geocoding and maps. Those are some of the most common things developers go looking for an API to do.

That is not a flaw in Turbo EA. It is an enterprise architecture model doing what enterprise architecture models do. The API economy is a different shape.

## What I added, and how I kept it separate

So I built an extension, and I was careful about how. Someone else's openly licensed work deserves to stay exactly what they published:

- **Upstream is untouched.** The Turbo EA model is vendored as-is, with its CC BY 4.0 attribution and notice. Nothing in it is renamed, moved or edited.
- **The extension lives in its own file** and its own namespace. Its IDs start with `AE-`, so they can never collide with Turbo EA's `BC-` IDs, and every page credits each capability to whoever wrote it.
- **It can only add.** An extension capability either starts a new top-level domain, or attaches under an existing Turbo EA capability it extends.
- **It adds one new dimension, audience.** Every extension capability is marked for consumer, B2B, enterprise or agent use.
- **Every capability needs evidence.** Each one cites catalog tags with provider counts or a gap I found in a blueprint. Nothing is there because it seemed like a good idea.

The result is 380 capabilities: 16 new top-level domains, and 37 capabilities nested under the Turbo EA capability they extend, such as API gateways, payouts and disbursements, and core banking platforms. The extension is my work, so it is licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), the same as everything else API Evangelist publishes.

## What the new domains hold

The 16 domains sit right beside Turbo EA's on the [capabilities page](https://apis.io/capabilities/), each marked as an API Evangelist extension. Several of them rank near the top as soon as they exist:

| Domain | Providers | API surfaces |
|---|---|---|
| AI Model Services | 338 | 1,128 |
| Data & Reference Information Services | 247 | 854 |
| Agent Infrastructure & Agentic Commerce | 209 | 454 |
| Consumer Commerce | 190 | 554 |
| Application Identity & Verification | 173 | 390 |
| Application Communications | 155 | 477 |
| Media, Creator & Social | 128 | 377 |

The rest cover personal finance, blockchain and digital assets, travel and local services, home and consumer IoT, location and mapping, open source, gaming, consumer learning, and consumer health and fitness.

## Did it actually find a home for anything?

That was the question I cared about. The classifier that draws these connections is allowed to say "nothing fits", and before the extension existed it said that a lot. So I took a random sample of 895 API tags it had already turned away, and asked again with the extension in place.

19% of them now have a home, held to the same bar as every other connection on the site: a confidence of 0.7 or better, and evidence quoted from the API's own contract. 162 of those 173 went to extension capabilities. Valhalla's isochrones now map to routing and navigation, Polar's SleepWise to sleep and recovery, Duffel's seat maps to flight booking, and PandaScore's Valorant matches to esports data. I graded 100 of them by hand: 96 were right, 4 were defensible but thin, and none were wrong.

So the old "no capability fits" answers were mostly gaps in the model, not plumbing. With roughly 50,000 of those answers on file, re-asking all of them is the next piece of work, and I will do it in batches as budget allows.

## Tell me where it is wrong

A capability model is an argument about how to describe the world, and this one is mine. Some of these domains will be cut wrong, some will be missing, and some of what I filed under consumer belongs somewhere else. The [extension page](https://apis.io/capabilities/extension/) lays out what is there and where each piece came from, and every connection shows the contract evidence behind it.

If you think a capability is missing, misplaced or named badly, [send me a note](https://apievangelist.com/). And if you build with Turbo EA, I would love to know whether any of this belongs upstream.

## The APIs And MCP Tools For This

You can browse all of this on the site, or have an agent do it. These are the REST operations and MCP tools behind it:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Browse every capability, extension included | [`GET /capabilities`](https://apis.io/developer/api/capabilities) | `find_capabilities` | Understanding |
| One capability, its sub-capabilities and who reaches it | [`GET /capabilities/{slug}`](https://apis.io/developer/api/capabilities) | `get_capability` | Understanding |
| Every connection, with its quoted contract evidence | | `get_capability_edges` | Understanding |
| What one vendor's APIs let a business do | | `get_provider_business_capabilities` | Understanding |

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

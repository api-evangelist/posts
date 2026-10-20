---
published: true
layout: post
title: 'Where The Market Layer Of The Kin Score Stands'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/where-the-market-layer-of-the-kin-score-stands.png
date: 2026-10-21
author: Kin Lane
tags:
  - Kin Score
  - Markets
  - Methodology
  - Integrations
  - Transparency
---
Nine days ago I wrote that the Kin Score was getting a third dimension, the market. I want to show where that work stands, warts and all. We are building this in the open, and I would rather you see the rules, the numbers, and the open questions than just a polished score.

## What the Market layer measures

The first two dimensions of the Kin Score look at a provider: what it publishes, and how ready that is for agents. The Market layer looks outward. It reads where each provider sits in its market, using evidence the market publishes itself.

The chain we are building is deterministic: **operation → tag → business capability → workflow → integration → market**. Every integration, registration, listing, or certification between two parties becomes an edge, and every edge cites where it came from.

## Where the evidence comes from

**Registers.** Regulated markets already publish their own map. We read FedRAMP, the SEC's investment adviser filings, ICANN's accredited registrars, the Monetary Authority of Singapore, Bank Indonesia, Open Finance Brasil, the FAA, the FDA and ONC, the PCI Security Standards Council, Metrc, and Mozilla's CCADB. We also read standards bodies like the CNCF, OPC Foundation, ODVA, BACnet, GS1, and Peppol.

**Marketplaces.** Open markets publish who builds on them. We read Salesforce, HubSpot, Shopify, Slack, Zoom, Microsoft Teams, Zendesk, Zapier, n8n, Airbyte, Fivetran, and others, and classify each listing as a platform app, a distribution channel, or an iPaaS bridge.

**What providers say about themselves.** Integration pages, A2A agent cards, and official SDKs published on package registries.

The finding that keeps holding up: **open markets integrate through workflows, regulated markets integrate through standards.**

## How it is scored

Each provider gets a **position**: gravity, core, coverage, covered, standard, regulated, builds-on, distribution, long-tail, mixed, or undeclared. Within a position, **depth** comes from per-edge signals, never from counting edges. A listing earns participation. A certification earns depth, up to a ceiling set per register by the widest vendor actually in the data. FedRAMP caps at three impact levels, PCI at six programs, BACnet at eighteen device profiles. Lapsed certifications count for nothing.

The rules we hold ourselves to:

- **Breadth is not credit.** A long list of logos earns nothing on its own.
- **Declaration is the provider's responsibility.** If a provider publishes nothing a machine can read, it reads "undeclared."
- **Attribution.** When something can't be measured, we record whose gap it is, and our own gaps never count against a provider.
- **Domain, not name.** We link on domains with a name check. When a register only gives names, we may resolve them through Wikidata or by an exact match against a single catalog repo, and every one of those edges says so.
- **Market fit.** A company that shows up in a register outside its own business, like a retailer registered to sell money orders, is held rather than credited.
- **Self-filed registers need more.** Anyone can file in some registers, and some people file under famous names. Those need the country to agree, and in the worst cases, a human review.
- **Report-only until proven.** Shape compatibility, MCP registry listings, and agent registry listings don't count until we have four weekly snapshots. A provider's own A2A agent card becomes a declaration on November 2.
- **Conflict of interest.** Our own sites are excluded, and so are agent cards we host on behalf of other companies.

## How far it reaches

As of today there are **92 markets**. Of the industries in our taxonomy, 74 are covered by a market, 5 partially, and 2 not at all. 33 technical areas are covered, and 180 tag groups. There are 3,788 providers holding 4,262 market memberships, and 376 of them belong to two or more markets. OpenAI shows up in six. Stripe, HubSpot, Cloudflare, Algolia, and Telnyx each show up in five.

The markets come in a few kinds:

- **Bedrock** markets, like payments, healthcare, banking, and most industries, read by depth and structure.
- **Frontier** markets, like decision models, model routing, and AI agents, read by movement over time.
- **Shape** markets, like S3 storage, Postgres, Kafka, OCI registries, and Kubernetes, read by who speaks a common contract.
- **Catalog-wide** markets, like official SDKs, which cut across everything.

## What it has found so far

- **The pipes are in the registers, the brands aren't.** GS1 lists the data pools, not Procter & Gamble. Agriculture's data businesses, nutrition APIs, sports data, and commercial weather APIs appear in no register at all.
- **Conformance and APIs live in different worlds.** Industrial vendors certify against protocols. The API-first companies in the same markets certify nothing.
- **Registers can be gamed.** FinCEN's self-filed list is full of virtual-office registrations under famous names.
- **Officiality matters to agents.** We found 5,008 official SDK packages across 1,808 providers, against roughly 8,900 community wrappers and forks.
- **The agent frontier is young but disciplined.** 389 live A2A agent cards, three quarters of them conformant, and the early adopters are new companies rather than established API providers.

## What is not settled

I want to be clear about what isn't done.

1. **It is still standalone.** The Market layer doesn't touch the composite Kin Score or Agent Readiness. It won't until it has been stable across several weekly releases. How and when it feeds in is the biggest open decision.
2. **The weights are a prototype.** They are calibrated against my own read of each market. A position like "standard" still mixes a listing with a certification, and only depth separates them.
3. **Frontier movement needs time.** We have only a couple of weekly snapshots so far, and movement metrics mean little until there are more.
4. **Some markets won't let us read them.** About 80 sources sit behind logins, bot walls, or client-side apps, including the Gulf financial registers. We won't get around a login or a challenge to read them.
5. **Our own catalog is a ceiling.** Registers name hundreds of providers we don't profile yet. Every harvest makes the markets more accurate.
6. **The pages are behind the data.** What we know is well ahead of how we show it.

## What's next

Markets go live on APIs.io with the next weekly build, and a market API will follow for Understanding-tier subscribers. After that comes calibration, more markets, a guide for providers on how to declare their integrations in a form machines can read, and a weekly read on how each market is moving.

If you are an API provider, the fastest way to show up well hasn't changed: publish your integrations, partnerships, and certifications somewhere a machine can read them. If you think we have your market wrong, tell us. Corrections are free, and they make the layer better for everyone.

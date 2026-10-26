---
published: true
layout: post
title: 'What 466 Conformant A2A Agent Cards Are Actually Offering'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-466-conformant-a2a-agent-cards-are-actually-offering.png
date: 2026-10-26
author: Kin Lane
tags:
  - A2A
  - Agent Cards
  - Agents
  - Discovery
  - x402
  - Mintlify
  - APIs.io
---

As of this weekend's build, [the A2A section of APIs.io](https://apis.io/a2a/) has 592 providers serving an agent card. 466 of them are conformant, meaning the card passes every structural check against the A2A `AgentCard` object. Another 43 are near-conformant and 83 are what I call flavored, an agent card in spirit but not in schema. I wanted to go past the count and look at what those 466 conformant cards are actually putting in front of an agent, because conformant tells you the card is shaped right. It does not tell you there is anything behind it.

## Most cards advertise one skill

Across the 466 conformant cards there are 2,113 skills. That sounds like a lot until you look at the distribution. 254 cards advertise exactly one skill, and 32 advertise none at all. The median conformant card has one skill. A small number of cards carry most of the weight.

The reason becomes obvious once you split the cards by where they are served from. For the 375 conformant cards I have full detail on, there are two very different populations.

## Population one: the docs platform published it for you

138 of those 375 cards are served from a documentation site, and almost all of them look the same. One skill, named after the company, whose description begins "Use when building integrations with..." The endpoint is the docs site. 127 of the 138 have exactly one skill, and together they add up to 150 skills.

These are cards that Mintlify serves at `/.well-known/agent-card.json` on the documentation sites it hosts. I checked a couple directly, Qonto's and Fireflies', and both come back from Mintlify's infrastructure. That is how a lot of well-known API companies ended up with a conformant A2A card without, as far as I can tell, deciding to publish one: [Qonto](https://apis.io/a2a/qonto/), [Tabby](https://apis.io/a2a/tabby/), [Fireflies](https://apis.io/a2a/fireflies/), [Cockroach Labs](https://apis.io/a2a/cockroach-labs/), [Telnyx](https://apis.io/a2a/telnyx/), [Kit](https://apis.io/a2a/convertkit/), [Uphold](https://apis.io/a2a/uphold/), [CData](https://apis.io/a2a/cdata/), [Ghost](https://apis.io/a2a/ghost-org/) and others.

I don't think this is a bad thing. It is the same pattern I saw with llms.txt and MCP: the platform switches it on, and suddenly a whole cohort of providers is "doing" something. The card is valid, it names the company, and it points an agent at the documentation, which is a real step up from nothing. But the one skill these cards advertise is "read our docs." The agent still has to go figure out the API, the auth and the onboarding on its own. These are discovery cards, not agent interfaces.

It also means these cards are mostly on protocol version 0.3. Of the 375, 285 declare 0.3 and only 60 declare 1.0. A lot of the conformant A2A web is a docs platform default that has not moved to the current version of the spec yet.

## Population two: companies built for agents

The other 237 cards are served from the provider's own endpoint, and they carry 1,845 skills between them. 45 of them advertise ten or more. This is where the A2A web actually lives right now, and it looks nothing like the API economy most of us know. These are mostly young, small companies built from day one to sell to agents, and a lot of them want to be paid per call. 72 of the 237 are tagged with x402 in the catalog.

Here is what they are offering.

**Official and business data, priced per call.** The largest card in the catalog is [Sirenic](https://apis.io/a2a/sirenic-eu/), with 116 skills over official French and European company registers, each one a paid HTTP resource. [Macaroon Network](https://apis.io/a2a/macaroonnetwork-com/) runs a marketplace of paid checks like haulage fraud and identity, and sanctions and PEP screening. [IBANforge](https://apis.io/a2a/ibanforge/) screens IBANs before a payout. [Co-Legal](https://apis.io/a2a/co-legal-be/) resolves Belgian case law and EU legislation.

**Trust, identity and verification for agents.** A whole cluster of providers is selling the trust layer itself. [aicomglobal](https://apis.io/a2a/aicomglobal-com/) offers a trust-ranked directory and agent identity registration. [Whisper Security](https://apis.io/a2a/whisper-online/) gives an agent a routable IPv6 address as its identity. [Verified Digital Agents](https://apis.io/a2a/getvda-ai/) seals human-in-the-loop decisions and autonomous agent actions so they can be proved later. [invinoveritas](https://apis.io/a2a/babyblueviper-com/) sells second opinions on an agent's reasoning.

**Crypto and on-chain infrastructure.** [Coin Railz](https://apis.io/a2a/coinrailz-com/) has 80 pay-per-call services, starting with gas oracles. [Name Whisper](https://apis.io/a2a/namewhisper-ai/) is ENS intelligence for agents. [Graph Advocate](https://apis.io/a2a/graphadvocate-com/) finds the right subgraph and writes the query. A lot of the x402 tagging lives here.

**Memory, registries and marketplaces for other agents.** [emem](https://apis.io/a2a/emem-dev/) is shared, signed memory for agents working in the physical world, with 113 skills. [Agoragentic](https://apis.io/a2a/agoragentic-com/) and [brick.blue](https://apis.io/a2a/brick-blue/) run registries where agents discover and register other agents.

**Document and back-office work.** [Emboss](https://apis.io/a2a/getemboss-ai/) makes PDFs fillable and fills them from data or from context documents. [Claix](https://apis.io/a2a/claix-dev/) turns PDFs, spreadsheets and Word documents into structured JSON using a schema.

A handful of more established API companies also run their own card at their own endpoint rather than leaning on their docs platform. [Redocly](https://apis.io/a2a/redocly/) serves one at its own `/a2a` path, [Xquik](https://apis.io/a2a/xquik-api/) exposes X data workflows, and [SMK Log](https://apis.io/a2a/smklog-com/) lets an agent get live parcel rates, pay for a label and check that it exists, which is the most complete commerce loop I found on a single card.

## What this tells me

A2A adoption, measured by conformant cards, is real and growing. What it is made of is less obvious. One third of what I can see in detail is a documentation platform default with a single "read the docs" skill. Most of the rest is a new class of agent-native providers selling data, trust and on-chain services by the call. The established API economy, the companies with deep, mature APIs that businesses run on, is mostly showing up through its docs platform, not with cards that expose what its APIs can actually do.

That gap is the opportunity. A card that says "here is our documentation" helps an agent find you. A card that names the jobs your API does, the skills, with the endpoint, auth and pricing behind them, lets an agent work with you. If your docs platform already published a card for you, look at what is in it. Then decide whether you want one skill that points at your docs, or a set of skills that reflects the business capabilities your APIs actually deliver.

You can browse all 592 cards, by grade, on [APIs.io](https://apis.io/a2a/).

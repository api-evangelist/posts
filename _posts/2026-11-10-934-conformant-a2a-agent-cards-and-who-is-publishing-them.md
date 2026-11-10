---
published: true
layout: post
title: '934 Conformant A2A Agent Cards, And Who Is Publishing Them'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/934-conformant-a2a-agent-cards-and-who-is-publishing-them.png
date: 2026-11-10
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Discovery
  - APIs.io
---
Two weeks ago I wrote about [what 466 conformant A2A agent cards are actually offering](https://apievangelist.com/2026/10/26/what-466-conformant-a2a-agent-cards-are-actually-offering/). The [A2A section of APIs.io](https://apis.io/a2a/) now shows **1,279 providers** serving an agent card, **934** of them conformant, advertising **7,243** skills. In two weeks, the number of providers with a card has more than doubled, from 594, and the number of conformant cards has doubled, from 467.

Every card is graded against the A2A 1.0.0 `AgentCard` object rather than just counted, and that grading is still the most important thing on the page. Of the 1,279, 238 fail a hard structural check, and 84 are still served at the old `/.well-known/agent.json` path, where an A2A 1.0.0 client will never look. Having a card and having an A2A card are not the same thing.

## Who is publishing conformant cards

When I looked at the card data behind the page, the conformant cards still split into the same two populations I saw last time, roughly half and half. But the two halves look even more different than before.

**The documentation platforms.** A little under half of the conformant cards are served from a documentation site: `docs.`, `/docs`, a developer portal or a help center. Around nine in ten of them advertise exactly one skill, and that skill reads like "Use when building integrations with..." followed by the company's product. Almost all of them declare protocol version 0.3. Warp's HR and payroll API, ASAPP, Confido Legal, PostOnce, Zapier, Qonto, Telnyx, Fireflies, CData, Tabby, Uphold and hundreds of others are in this group. Most of them got a valid card because their docs platform turned one on. These are real, well-known API companies, and the card helps an agent find their documentation. It doesn't tell an agent anything their API can do.

**The agent-native providers.** The other half serve the card from their own endpoint, usually an `/a2a` path, and they carry about nine out of every ten conformant skills. This is where the growth in skills came from. More than a hundred of these cards advertise ten or more skills each. These are mostly young companies built to sell to agents, and when I sorted their descriptions, the same few businesses kept showing up:

- **Paid per call.** A large share mention x402, USDC or pay-per-call. [agentsvc.io](https://apis.io/a2a/agentsvc-io/) leads the catalog with 127 skills of web scraping, extraction and cited answers, and [Coin Railz](https://apis.io/a2a/coinrailz-com/) carries 80 micropayment services.
- **Official and business data.** [Sirenic](https://apis.io/a2a/sirenic-eu/) has 116 skills over French and European company registers. [Mirabello](https://apis.io/a2a/mirabelloconsultancy-com/) sells investment-migration intelligence across 68 skills. There are cards for IBAN screening, case law and procurement tenders.
- **Trust, identity and verification for agents.** This is the biggest single theme. Registries, reputation scores, verified identities, evidence and witness services, and audit trails for what an agent did.
- **Registries and marketplaces for other agents.** Directories where agents find, rate and hire other agents.
- **Crypto and on-chain data.** Market data, token risk, ENS, subgraphs, and payment rails.
- **Memory and coordination.** [emem](https://apis.io/a2a/emem-dev/), with 113 skills, is shared memory for agents working in the physical world.

There's a long tail too: travel fares, parcel quotes, insurance by state, airport transfers, elder care matching. And a few established API companies run their own card rather than relying on a docs platform. [BuiltWith](https://apis.io/a2a/builtwith/), [OpenSea](https://apis.io/a2a/opensea/), [Pydantic](https://apis.io/a2a/pydantic-ai/), [Hightouch](https://apis.io/a2a/hightouch/) and [Redocly](https://apis.io/a2a/redocly/) all serve conformant cards from their own domains, and [Siemens](https://apis.io/a2a/siemens/) has an enterprise knowledge agent.

What's still mostly missing is the middle: established API providers exposing the jobs their APIs actually do as A2A skills, at their own endpoint. That's the same gap I pointed at two weeks ago, and it hasn't closed yet.

## What makes a card conformant

APIs.io grades a card conformant when it passes every structural check in the A2A 1.0.0 `AgentCard` object, so an A2A client can parse it without special handling. In practice, the cards that fail usually miss on one of a handful of things, and they're all easy to fix:

1. **Declare `protocolVersion`.** This is the most common failure by far among cards that aren't conformant. Without it, a client doesn't know which version of A2A it's reading.
2. **Make `capabilities` an object, not an array.** The spec defines it as an object of flags such as `streaming` and `pushNotifications`. A list of capability names is the second most common failure.
3. **Make `skills` an array of skill objects.** Each one has an `id`, a `name`, a `description` and `tags`. Skills given as a map or a list of strings don't parse.
4. **Use `additionalInterfaces`, not `supportedInterfaces`,** for any interface beyond the main `url`, and state a `preferredTransport` such as `JSONRPC` or `HTTP+JSON`.
5. **Set `defaultInputModes` and `defaultOutputModes`,** the media types the agent accepts and returns.
6. **Serve it at `/.well-known/agent-card.json`.** The pre-0.3 `agent.json` path is where many of the flavored cards still live, and a current client won't look there.

Conformant only means the card is shaped right. It doesn't check whether the `url` actually answers A2A, or whether there's anything behind the skills. Most conformant cards also still declare protocol version 0.3, with only around one in five on 1.0. Conformant on the page is a floor, not a finish line.

## If you are an API provider

Check whether your docs platform already published a card for you. If it did, you're probably in the first group: a valid card with one skill that points at your documentation. That's a fine start for discovery. The next step is to decide whether you want your card to describe the jobs your API does, as skills, with an endpoint and authentication an agent can actually use. The agent-native companies are showing what that looks like, and right now they're the ones most of the skills belong to.

You can browse every card, by grade, on [APIs.io](https://apis.io/a2a/).

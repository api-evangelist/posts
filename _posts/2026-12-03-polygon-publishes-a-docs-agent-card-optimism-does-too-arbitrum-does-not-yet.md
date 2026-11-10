---
published: true
layout: post
title: 'Polygon Publishes A Docs Agent Card. Optimism Does Too. Arbitrum Does Not Yet.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/polygon-publishes-a-docs-agent-card-optimism-does-too-arbitrum-does-not-yet.png
date: 2026-12-03 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Polygon
  - Arbitrum
  - Optimism
---
I am working my way through the companies that publish an A2A agent card, one a day, and setting each one next to two competitors. If you want the background, I wrote up the [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the full list lives in the [APIs.io A2A catalog](https://apis.io/a2a/), which as of November 10, 2026 shows 1,279 providers serving a card and 934 of them conformant. Today it is Polygon Labs, set against Arbitrum (Offchain Labs) and Optimism.

## What Polygon Publishes

Polygon serves its card from its documentation host, at `https://docs.polygon.technology/.well-known/agent-card.json`. APIs.io has it on the [Polygon agent card page](https://apis.io/a2a/polygon-technology/) and the [Polygon provider page](https://apis.io/providers/polygon-technology/). The card is named "Polygon Developer Docs." It declares protocol version 0.3, a preferred transport of HTTP+JSON, and the endpoint is the docs site itself, `https://docs.polygon.technology/`.

There is one skill, `open-money-stack`. What I like is that it is not the generic boilerplate I usually see on docs-platform cards. It describes building money-movement products on Polygon's Open Money Stack API: neobanks, custodial wallets, remittance, on-ramps and off-ramps, and stablecoin payments. It says it walks a developer through authentication, asks a few discovery questions, and produces an implementation plan that separates what is callable today from what is early access. Somebody at Polygon took the time to write that.

When I checked on November 10, 2026, the live card matched what APIs.io recorded on October 13. APIs.io grades it conformant, with one noted deviation: it lists interfaces under `supportedInterfaces` rather than `additionalInterfaces`. My probe script is stricter about that same field and estimated it as near-conformant. Same card, same issue, just a different weight on it. Nothing on the main `polygon.technology` domain at either well-known path.

## Arbitrum

I checked `arbitrum.io`, `docs.arbitrum.io` and `offchainlabs.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json` and found no agent card. All six requests came back 404. That is not the same as Arbitrum ignoring agents. `https://docs.arbitrum.io/llms.txt` is live and describes the docs for building apps, bridging tokens, running nodes, launching Arbitrum chains and developing with Stylus. So there is an agent-readable entry point, just not an A2A one.

## Optimism

Optimism is the interesting one. Nothing at either path on `optimism.io`, but `docs.optimism.io/.well-known/agent-card.json` returns a card named "Optimism Documentation." It is version 0.3, HTTP+JSON, endpoint `https://docs.optimism.io/`, with one skill, `optimism`, that starts "Use when building applications on OP Stack chains, deploying and..." It has the same `supportedInterfaces` issue, so my probe estimated it as near-conformant. Optimism does not have an A2A page on APIs.io yet, so this is a card the catalog has not picked up. Optimism also serves `https://docs.optimism.io/llms.txt`.

## Side By Side

| | Polygon | Arbitrum | Optimism |
|---|---|---|---|
| Card found | Yes, docs host | No (6 URLs checked) | Yes, docs host |
| Endpoint | docs.polygon.technology | n/a | docs.optimism.io |
| Skills | 1, specific | n/a | 1, generic |
| Protocol | 0.3 | n/a | 0.3 |
| Main issue | supportedInterfaces | n/a | supportedInterfaces |
| llms.txt | Yes | Yes | Yes |

## What This Tells Me

Polygon and Optimism both have cards because their docs platforms generate them. That is a fine discovery step. An agent crawling well-known paths learns there is documentation and roughly what it covers. But the endpoint in both cases is a website, not something that answers A2A messages. A client that tries to send a task to `https://docs.polygon.technology/` is not going to get an agent on the other end.

The difference between the two cards is the skill text. Polygon wrote a skill that names a real product, real use cases and a real outcome. Optimism's reads like the default. If you are going to have a docs-generated card anyway, Polygon shows that editing the one skill is cheap and makes the card actually say something.

Arbitrum has the llms.txt but no card on any host I checked. Given how the docs platforms work, that may simply be a question of which platform the docs run on.

## Takeaway For Layer 2 Teams

If you run developer docs for a chain, check what your docs host is already publishing at `/.well-known/agent-card.json`. If something is there, rewrite the skill so it names what a developer can actually build, the way Polygon did, and fix the `supportedInterfaces` field so validators stop flagging it. If nothing is there, an llms.txt is a good start, but the card is the thing agent registries are crawling for. And if you want an agent to do more than read docs, that is a real endpoint and real skills, which none of these three publish yet.

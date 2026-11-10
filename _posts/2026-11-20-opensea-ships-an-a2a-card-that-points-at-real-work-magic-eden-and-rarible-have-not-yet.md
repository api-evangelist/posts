---
published: true
layout: post
title: 'OpenSea Ships An A2A Card That Points At Real Work. Magic Eden And Rarible Have Not Yet.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/opensea-ships-an-a2a-card-that-points-at-real-work-magic-eden-and-rarible-have-not-yet.png
date: 2026-11-20 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - OpenSea
  - Magic Eden
  - Rarible
---
Most of the companies I have looked at in this series publish a docs-platform agent card. One generic skill, served by the docs host, telling an agent to go read. OpenSea is different, and it is worth slowing down on. If you want the wider context first, read [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/) and browse the [APIs.io A2A catalog](https://apis.io/a2a/), where 1,279 providers serve a card and 934 are conformant as of November 10, 2026. Today is NFT marketplaces: OpenSea, Magic Eden and Rarible.

## What OpenSea Publishes

OpenSea serves its card from its main domain, at [opensea.io/.well-known/agent-card.json](https://opensea.io/.well-known/agent-card.json). Not a docs subdomain. The main domain. The endpoint in the card is `https://mcp.opensea.io/mcp`, the preferred transport is `streamable-http`, and the documentation link points at [OpenSea's MCP reference](https://docs.opensea.io/reference/mcp).

When I checked on November 10, 2026, the live card matched what APIs.io recorded on July 28. Seven skills:

- **Search OpenSea**, across NFTs, tokens, collections and agent tools.
- **NFT and item data**, including ownership, rarity, listings and offers.
- **Token and market data**, including balances, prices and trending tokens.
- **Collection data**, including floor prices and stats.
- **Token swap quotes**, DEX-aggregated ERC-20 quotes.
- **Account and portfolio**, profiles, balances, favorites and activity.
- **Marketplace actions**, creating and cancelling orders, managing drops, collections, wallets and watchlists, marked as OAuth-scoped.

Each skill has tags. Each one describes a thing an agent can do. That is what a skill is supposed to be.

There are two caveats. The card declares protocol version 0.2.5, which is older than the 0.3 most cards in the catalog use and well behind 1.0. And it uses `supportedInterfaces` instead of `additionalInterfaces`, with a nonstandard interface entry, which is how an MCP endpoint ends up described in an A2A card. APIs.io grades it conformant. The card itself claims near-conformant, and my probe agrees with that more modest claim. I think that is honest. The card is really a front door to an MCP server, described in A2A terms.

See the [OpenSea card page](https://apis.io/a2a/opensea/) and the [OpenSea provider page](https://apis.io/providers/opensea/).

## What Magic Eden Publishes

I checked magiceden.io and docs.magiceden.io at both `/.well-known/agent-card.json` and `/.well-known/agent.json`, and both hosts returned 403. I also checked api-mainnet.magiceden.dev, which returned 400 on both paths. So I found no agent card, but I want to be precise. A 403 means I was blocked, not that I saw nothing there. An agent hitting those hosts would be blocked the same way. The docs llms.txt also returned 403 to me. Here is the [Magic Eden provider page](https://apis.io/providers/magic-eden/).

## What Rarible Publishes

I checked rarible.com, docs.rarible.org and api.rarible.org at both well-known paths. rarible.com returned an HTML page with a 200, which is not a card. The other two returned 404. No agent card found.

Rarible does publish agent-facing material. The docs serve an [llms.txt](https://docs.rarible.org/llms.txt), and that index links to an [MCP Servers](https://docs.rarible.org/docs/mcp-servers) page and a guide to using the Rarible Protocol MCP. See the [Rarible provider page](https://apis.io/providers/rarible/).

## Side By Side

| | OpenSea | Magic Eden | Rarible |
|---|---|---|---|
| Agent card | Yes, opensea.io | None found (403 on main and docs) | None found |
| Card endpoint | MCP server, mcp.opensea.io | n/a | n/a |
| Skills | 7, action oriented | n/a | n/a |
| Protocol version | 0.2.5 | n/a | n/a |
| MCP documented | Yes | Not verified | Yes |
| Docs llms.txt | Not checked | Blocked (403) | Yes |

## How I Read This

OpenSea has done what I keep hoping to see. The card lives on the company's own domain. It points at a real agent endpoint, not a docs site. The skills map to actual capabilities, read and write, and the write skill tells you it needs OAuth. An agent reading this card learns what OpenSea can do for it and where to go to do it.

The protocol version is the thing to fix. 0.2.5 is old, and the interface declaration is a workaround for describing MCP inside A2A. Moving to a current version, and declaring the MCP interface in a standard way, would make this one of the cleaner cards in the catalog.

Rarible is a step behind on discovery but has the MCP piece and llms.txt in place. Magic Eden is hard to evaluate from the outside, because its hosts blocked my requests.

## Takeaway For NFT Marketplaces

Look at OpenSea's card before you write yours. Put it on your main domain. Point it at the endpoint where work happens. Describe skills as actions, and say which ones need authorization. If you block automated requests at the edge, remember that agents are automated requests, and leave the well-known paths and your llms.txt reachable.

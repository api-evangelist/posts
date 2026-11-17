---
published: true
layout: post
title: 'An Agent Can Only Use What It Can Find'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/an-agent-can-only-use-what-it-can-find.png
date: 2026-11-18 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Discovery
  - Agent Readiness
  - OpenAPI
  - Well-Known
  - Kin Score
---
I keep having the same experience when I re-profile API providers for [APIs.io](https://apis.io). A provider is sitting somewhere in the middle of the pack, and when I go back and look a little harder, I find a whole bunch of stuff they already did. OpenAPI definitions sitting in a GitHub repository. An MCP server or two. A trust center. Rate limit documentation. A healthy stack of SDKs. None of it is linked from anywhere an agent is going to look first, so none of it was counted. Then the score moves, and the provider didn't ship a single new thing.

That is the lesson I want every API provider to hear right now. The cheapest agent readiness work you will ever do is making what you already have findable.

## The agent doesn't go digging

A human developer will poke around. They'll search GitHub, read a blog post from three years ago, ask in a Slack channel, and eventually stumble on the OpenAPI that lives in some repo named after an internal project. An agent isn't going to do that. An agent looks at a handful of predictable places, and if it doesn't find what it needs there, it moves on to whatever it can find, which is usually someone else.

My scoring works the same way, on purpose. The [Kin Score](https://apis.io/rating/) and the agent readiness layer are an expression of what the agents can find. If I have to go on a scavenger hunt to discover your contract, I'm not measuring your agent readiness, I'm measuring my own patience.

## What the catalog says

Here is where things stand across the catalog today. The [Machine-Readable Contract](https://apis.io/rating/dimensions/spec-presence/) dimension, a public OpenAPI, is the single largest award in agent readiness at 18 of 153 points. 13,809 providers publish one, which is 33.6% of the 41,129 providers it applies to. That is a respectable number, but it means two thirds of the market has nothing an agent can drive programmatically, at least nothing we could find.

Now look at the front door. The [Well-Known Catalog](https://apis.io/rating/dimensions/well-known-catalog/) dimension asks whether a provider publishes an RFC 9727 `/.well-known/api-catalog`, the canonical machine entry point an agent hits first. 1,974 providers do. That is 4.8%. So there are thousands of providers with a contract somewhere, and only a fraction of them telling an agent where it is.

## Inventory before you build

When a product leader asks me what to do about agents, they usually want to talk about new things. A new MCP server. A new AI assistant in the portal. Before any of that, I tell them to do an inventory. Go find everything you already publish:

- OpenAPI, AsyncAPI, JSON Schema and GraphQL definitions, wherever they live.
- MCP servers, official or community, hosted or in a repo.
- SDKs and CLIs across every language.
- Rate limit, pricing, terms, privacy and trust center pages.
- Changelogs, status pages and support channels.

Then put all of it into one machine-readable index and serve it from your own domain. I've been pushing [APIs.json](https://apisjson.org) for more than a decade for exactly this reason, and the IETF API catalog gives you a standard well-known location to hang it on. Pick one, point it at everything, and keep it current.

## Your own domain is the source of truth

The other pattern I see is a provider whose contracts are perfectly findable, just not from them. They live in a third-party docs platform, a public GitHub org with no link back, or a community repo somebody else maintains. An agent has no way of knowing that any of that is authoritative. It needs to start at your domain and follow your links. If your domain doesn't lead there, the trail goes cold.

This is also why a provider can't argue a score up by emailing me links. I'm happy to look, and I'll update the profile, but the next agent that comes along won't have my email. Publish the link where the agent looks, and you fix it for everyone at once.

## Cheap, boring and high leverage

None of this is glamorous. It's an index file, a few links in a header, a well-known path and a little discipline about keeping it all up to date. But I've watched it move a provider further than months of feature work would, because the work was already done. It just wasn't visible.

An agent can only use what it can find. Before you build anything new for agents, make sure they can find what you already built.

---
published: true
layout: post
title: "Don't Block the Scrapers Yet, and Don't Switch Off the Human Docs"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/dont-block-the-scrapers-yet-and-dont-switch-off-the-human-docs.png
date: 2026-12-04 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Discovery
  - Documentation
  - Portals
  - Well-Known
---
Most of the conversations I have about agents are about what API providers should start doing. Publish a contract. Put a catalog at the well-known path. Write an llms.txt. Stand up an MCP server. That list is long and it keeps growing. But I am finding that the "what should we stop doing" question is just as important, and the answer to it right now is two things you should *not* do, even though both are tempting.

Don't block the scrapers wholesale. And don't switch off the human docs.

## The temptation to put up a wall

I get why people want to block bots. My own sites went from roughly 80% human traffic and 20% bots to the reverse in about five years. When you look at your CDN bill and your analytics and realize most of what is hitting your portal isn't a person, the obvious move is to flip the switch at the edge and block anything that looks automated.

The problem is that the thing you are blocking is increasingly how developers find you. A developer asks an agent how to do something, and the agent answers from what it could crawl, index and train on. If your docs, your pricing, your rate limits and your terms are behind a blanket bot block, the agent doesn't say "I couldn't get in." It answers with whatever it does know, and that is usually your competitor.

Blocking everything at the CDN cuts you out of agent discovery at exactly the moment discovery is moving to agents. You can be selective. You can rate-limit abusive patterns, express your AI preferences, and decide what is fair game for training and what isn't. But a wholesale block isn't a strategy, it is opting out.

## The machine-readable door is still mostly closed

The irony is that most providers haven't built the front door for agents yet either. I measure this across the [APIs.io](https://apis.io) catalog. The [well-known catalog](https://apis.io/rating/dimensions/well-known-catalog/) dimension, which looks for an RFC 9727 `/.well-known/api-catalog` linkset, the canonical place an agent goes first, is published by 1,974 providers. That is 4.8% of the 41,129 providers it applies to. The [A2A agent card](https://apis.io/rating/dimensions/agent-card/) is lower still, at 1,306 providers, or 3.2%.

So when a provider blocks scrapers, in most cases it is blocking the *only* route an agent has to it. There is no machine-readable twin to fall back on. The agent was reading the human pages because that is all there was.

## Don't turn off the human portal either

The opposite mistake is the one I hear from people who are all in on agents: if the bots are the majority of traffic, why keep investing in a portal, a getting started guide, and docs written for people?

Because people are still the ones who decide. A human still signs up, still reads the terms, still evaluates the pricing page, still gets approval from someone else to spend money. And the agents are still reading those human pages. Turning off the human docs doesn't move you to an agent-native future, it removes the thing agents have been learning from.

Is running both a transition or the end state? I think it is both, for quite a while, probably indefinitely. It's not about replacement. It's about balancing.

## Every building block needs two versions

The way I think about it is that your developer portal homepage now has a machine-readable twin that lives in `/.well-known`. An API catalog, an APIs.json, JSON Home, an AI catalog, llms.txt, robots.txt. You pick the ones that fit. You don't need all of them, you need at least one an agent can find without guessing.

Then you go down the list of building blocks and make sure each one has a human version and an agent version:

- **Docs** - readable pages for people, plus a contract and markdown an agent can consume.
- **SDKs** - a page that lists them, plus a manifest that says where they live.
- **Pricing and plans** - a page a person can compare, plus something structured an agent can reason about.
- **Rate limits** - a page that explains them, plus headers in the responses.
- **Terms, privacy and trust** - the legal pages, plus links to them from your machine-readable index.

None of this asks you to tear anything down. It asks you to add a second door next to the one you already have.

## What I'd do instead of blocking

If you are feeling pressure to block bots, here is what I would do first:

1. Look at what is actually hitting you. Separate the agents and crawlers that send developers your way from the ones that are just scraping and costing you money.
2. Publish your preferences. Say what can be used for training, what can be used for search and answers, and what can't. Be specific rather than absolute.
3. Rate-limit the abusive patterns rather than banning a whole category of traffic.
4. Build the machine-readable twin of your portal, so the agents that respect you have a clean path that doesn't require scraping your human pages.
5. Keep investing in the human docs. They are still doing work for both audiences.

I understand the instinct to protect what you've built. But in this moment, being findable is worth more than being walled off. Don't block the scrapers yet, and don't switch off the human docs. Do the slower work of giving both audiences what they need.

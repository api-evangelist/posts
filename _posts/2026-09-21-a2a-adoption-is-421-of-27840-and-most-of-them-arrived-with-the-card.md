---
published: true
layout: post
title: 'A2A Adoption Is 421 of 27,840, and Most of Them Arrived With the Card'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a2a-adoption-is-421-of-27840-and-most-of-them-arrived-with-the-card.png
date: 2026-09-21
author: Kin Lane
tags:
  - A2A
  - Agent Cards
  - Agents
  - Discovery
  - APIs.io
  - Kin Score
  - Well-Known
  - Standards
  - Adoption
---
Earlier today I described [how 427 agent cards talk and what they do](https://apievangelist.com/2026/09/21/427-agent-cards-how-they-talk-and-what-they-do/), and this afternoon I [knocked on the x402 doors](https://apievangelist.com/2026/09/21/97-agent-cards-say-x402-eight-of-them-answer-a-402/) among them. Both of those pieces start from the population of cards. Someone asked me a simpler question in between, which is what A2A adoption actually looks like across the whole of APIs.io, and answering it honestly means starting from the other end: the catalog, and how many of the companies in it have anything to do with [Agent2Agent](https://a2a-protocol.org/latest/) at all. The section holds 421 cards, the same 421 the morning post counted as served from the provider's own host. That number is smaller than the catalog suggests, and where it comes from is more interesting than how big it is.

## The Denominator

| Across the APIs.io catalog | Count |
|---|--:|
| Providers in the catalog | 27,840 |
| Providers whose host has been probed for `/.well-known/agent-card.json` | 4,718 |
| Hosts that answered 2xx on that path | 1,760 |
| Hosts whose 2xx was an actual, parseable agent card | 358 |
| Agent cards in the A2A section, all sources | 421 |
| Card providers that were never reached by the catalog probe | 59 |

So the headline is 421 of 27,840, which is one and a half percent of the catalog. Among the providers we have actually gone and asked, it is seven and a half percent. The gap between those two figures is the first thing worth saying out loud: **only a sixth of the catalog has been probed for an agent card.** The well-known sweep is part of the enrichment pipeline, and the agent-card path was added to it after most of the catalog had already been profiled, so the 23,000 providers that have not been asked are mostly the older, more established API companies. I do not think many of them are quietly serving a card, but I also cannot say they are not, and I would rather publish a floor than a guess.

The second thing is the row in the middle. **1,760 hosts answered 2xx on the agent-card path, and 1,402 of them were not serving a card.** Nearly a thousand of those answers came back as `text/html`, which is a single-page application shell that returns 200 for any path you type. Hundreds more came back with no content type recorded at all. If you measured A2A adoption by asking whether the well-known URL returns 200, you would report four times the real number, and every one of the extra thousand would be a soft 404. This is the same trap I keep hitting with `llms.txt` and with OpenAPI discovery, and it is why the [A2A section](https://apis.io/a2a/) only lists a provider when the body parsed as an `AgentCard` object and was saved verbatim. A 200 is not a card. A card is a card.

## Where the 421 Came From

| Month the card's provider was added to the catalog | Providers |
|---|--:|
| March through June 2026 | 94 |
| July 2026 | 73 |
| August 2026 | 45 |
| September 2026 | 209 |

This is the table I did not expect. **Half of the providers with an agent card were added to the catalog this month**, and only 94 of the 421 were in it before July. The card did not spread through the existing catalog. It arrived attached to new companies, most of them agent-native, that either registered themselves through the open A2A registries or came in through the APIs.io add form with a card already at the well-known path. Fifty-nine of them have never been touched by the catalog's own probe, because they were catalogued from the card outward rather than from the API inward. Eighty-seven of the 421 have no OpenAPI on file at all. For those companies the agent card is the API description, and there was never a developer portal to grow it out of.

Read that against the 23,000 established providers we have not probed and the picture of adoption changes shape. Among incumbents who were in the catalog before the summer, the rate of adding an A2A card is well under one percent. Among companies founded to serve agents, it is close to the price of admission. When I wrote in July that [most published agent cards are not actually A2A](https://apievangelist.com/2026/07/29/most-published-agent-cards-are-not-actually-a2a/), the population was 65 and I called it a starting line. The population is now six and a half times that, and conformance has gone from fifteen percent to sixty, but the growth is a new cohort showing up, not the old cohort changing its mind.

## What the Cards Point At

One more number, because it bears on what adoption means. **217 of the 421 cards give the bare host as the agent's URL.** The card says an agent exists at `https://example.com`, full stop, with no path to a JSON-RPC or HTTP+JSON endpoint behind it. Another 41 give no URL at all. Only 123 name a path that contains `a2a`, and 40 name some other path. So for more than half of the cards in the section, the artifact is a machine-readable statement of identity and skills at a well-known address, and the thing it identifies is the company's homepage. That fits what I found this morning, which is that 83 percent of these providers also run an MCP server and the card is increasingly the front door to it rather than an A2A conversation in its own right.

I am not saying that to diminish it. A predictable, gradeable, provider-published manifest at a well-known path is exactly the artifact I have been asking for, and for the first time there are enough of them to describe as a population. But if the question is whether the API providers already in the catalog are adopting A2A, the honest answer today is that a few dozen have, a few hundred newcomers arrived with it, and twenty-three thousand have not yet been asked. The next thing on my list is to ask them. Every card that appears will be [graded on APIs.io](https://apis.io/a2a/), and I will report the second half of this table when the probe has covered the other five-sixths of the catalog.

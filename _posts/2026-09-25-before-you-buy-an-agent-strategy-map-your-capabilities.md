---
published: true
layout: post
title: 'Before You Buy An Agent Strategy, Map Your Capabilities'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/before-you-buy-an-agent-strategy-map-your-capabilities.png
date: 2026-09-25
author: Kin Lane
tags:
  - Business Capabilities
  - Agents
  - AI Strategy
  - Kin Score
  - Leadership
  - APIs.io
  - APIs
---
Every leadership team I talk to is being sold an agent strategy right now. Most of those roadmaps are organized by model and by vendor: which LLM, which platform, which copilot. That is not how the business thinks about itself. A business thinks in capabilities: customer management, payments, supply chain, compliance, maintenance. The question the board is actually asking is simpler and harder: where in *our* business can an agent do real work, and what do we buy versus build to get there?

I keep coming back to the shipping container example from my [conversation with Zdenek Nemec](https://conversations.apievangelist.com/store/2026-09-25-zdenek-nemec/). Can an agent ship a container from Prague to the United States? His answer was "not for many years," and I wrote about why in [The Kids Who've Come Up In Age of AI Will Approach Things Very Differently](https://apievangelist.com/2026/09/25/the-kids-whove-come-up-in-age-of-ai-will-approach-things-very-differently/). An agent can only act where there is something to call. So the useful question is not which model you pick. It is which of your business capabilities have a callable, well-described API behind them, and which do not.

That is what the [Business Capabilities](https://apis.io/capabilities/) section of APIs.io answers. It takes 333 business capabilities from an open enterprise-architecture model (the [Turbo EA capability model](https://github.com/vincentmakes/turbo-ea-capabilities) by Vincent Verdet, redistributed under CC BY 4.0; the model is not our work) and joins them to the APIs in the catalog that can perform some part of each one. Today that is 16,016 published links between a capability and an API surface, from 2,157 providers, with 200 of the 333 capabilities reached by at least one API.

## Where agents can act

Reach follows the software economy almost perfectly.

| Capability | Providers that reach it | Rated strong or better |
|---|--:|--:|
| [Cybersecurity Management](https://apis.io/capabilities/cybersecurity-management/) | 431 | 194 |
| [Developer Platform & API Ecosystem](https://apis.io/capabilities/developer-platform-api-ecosystem-management/) | 276 | 141 |
| [Customer Relationship Management](https://apis.io/capabilities/customer-relationship-management/) | 246 | 120 |
| [Payments & Card Management](https://apis.io/capabilities/payments-card-management/) | 213 | 53 |
| [Banking Customer Management](https://apis.io/capabilities/banking-customer-management/) | 128 | 27 |
| [Supply Chain Management](https://apis.io/capabilities/supply-chain-management/) | 118 | 29 |

Now look at it by industry, counting the top-level capabilities in each industry's model that at least one API reaches:

| Industry | Capabilities reached | Reached by a strong vendor |
|---|--:|--:|
| Banking & Capital Markets | 11 of 12 | 11 |
| Healthcare Providers | 11 of 12 | 11 |
| Software & Technology | 9 of 10 | 9 |
| Public Sector & Government | 12 of 14 | 1 |
| Manufacturing & Industrial | 2 of 7 | 0 |
| Pharmaceuticals & Life Sciences | 3 of 11 | 1 |
| Defense & Aerospace | 1 of 12 | 0 |
| Oil & Gas | 1 of 13 | 1 |
| Mining & Metals | 0 of 11 | 0 |
| Chemicals | 0 of 10 | 0 |

[Pipeline operations](https://apis.io/capabilities/pipeline-operations-management/), [water treatment](https://apis.io/capabilities/water-treatment-operations-management/), [chemical process safety](https://apis.io/capabilities/chemical-process-safety-management/), [air traffic control](https://apis.io/capabilities/air-traffic-control-operations-management/) and [mine closure](https://apis.io/capabilities/mine-closure-rehabilitation-management/) are all reached by nothing. That is the Prague container, measured. If you run a bank, most of your capabilities have somewhere for an agent to go. If you run a refinery, a mine or a chemical plant, the agent strategy you are being sold has very little to stand on, and it will not until the APIs exist.

## Crowded is not the same as good

The second finding matters more for a buyer. Payments is one of the most crowded capabilities in the catalog, with 213 providers reaching it, and only 53 of them are rated strong or better on the [Kin Score](https://apis.io/rating/). Supply chain has 118 providers and 29 strong ones. Banking customer management has 128 and 27. Across the whole model, 63 of the 200 capabilities that are reached have no strong vendor at all.

That is the buy-versus-build signal. A capability with hundreds of vendors and a handful of strong ones is a market where your procurement team will spend months finding the ones an agent can actually depend on. A capability with no strong vendor is one where, if it is core to your business, you should expect to build the surface yourself, or to push your vendors to build it. That is the argument I made in [The "We Are All In On Agentic" Shame Game](https://apievangelist.com/2026/09/25/the-we-are-all-in-on-agentic-shame-game/).

## What I would do with this

- **Start from your capability map, not a model shortlist.** Most enterprises already have one sitting with their enterprise architects. Put it next to this one.
- **Mark every capability with no callable API as "no agent here yet."** That is honest scoping, and it will save you from a pilot that cannot succeed.
- **Use the strong-vendor count to decide buy versus build.** Plenty of vendors does not mean one you can depend on.
- **Hold your own APIs to the same bar.** An internal capability without a described, secured, agent-ready API is as out of reach for your agents as a vendor's.

I want to be plain about what these numbers are. A link between a capability and an API means a provider publishes an API surface that can perform some part of that capability. It is not a claim that anyone has deployed it. The links come from a classifier with a 0.7 confidence floor, checked against a hand-labelled test set of 39 items, half of them deliberate traps, and the calibration is published on the page. The catalog itself leans toward software companies, which flatters the software-native capabilities and understates the physical economy. Treat an empty capability as "we have not found an API," not "none exists." If you know of one, [add it](https://apis.io/add/).

Even with those caveats, the shape is clear. Agents will do real work first where the business already speaks API, and the capability map shows you exactly where that is. Map it before you buy the strategy.

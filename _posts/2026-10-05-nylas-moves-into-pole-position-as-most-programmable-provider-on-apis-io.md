---
published: true
layout: post
title: 'Nylas Moves Into Pole Position as Most Programmable Provider on APIs.io'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/nylas-moves-into-pole-position-as-most-programmable-provider-on-apis-io.png
date: 2026-10-05
author: Kin Lane
tags:
  - Nylas
  - Kin Score
  - Agent Readiness
  - Pull Requests
  - Providers
  - APIs.io
  - APIs
---
There is a new name at the top of [APIs.io](https://apis.io/providers/). Of the 29,074 API providers in the catalog, ranked by the [Kin Score](https://apis.io/rating/), [Nylas](https://apis.io/providers/nylas/) is now first, at **93.2** out of 100. That puts it in the exemplar band, up 16.5 points from where it sat for most of September, and agent-native on agent readiness at 57. It moved past HubSpot (91.6), Salesforce (91.0), Harness (90.7) and APIs.io itself (90.1).

What I like about this is not the number. It is how Nylas got there. They did it themselves, in public, through pull requests.

## How it happened

Every provider in the catalog has its own public repository under the API Evangelist GitHub organization, and anyone can open a pull request against it. In August, Nick Barraclough on Nylas's developer documentation team did exactly that, unprompted. [His first pull request](https://github.com/api-evangelist/nylas/pull/1) pointed the profile at the contract Nylas actually publishes, a 208-operation OpenAPI, instead of the smaller specs we had modeled from their documentation. Every claim in it checked out against a live URL. Along the way he found a defect in how I was tracking provenance: I was crediting Nylas for scaffolds we had written, while their real contract went uncounted. Fixing that for Nylas turned up the same problem across 179 providers in the catalog.

At the end of September he came back with [a second pull request](https://github.com/api-evangelist/nylas/pull/4), and it is the most thorough provider submission I have received. It corrected things we had wrong:

- **Pricing**, updated to the plans Nylas introduced in September.
- **The MCP manifest**, from 17 tools to all 38. Nylas also fixed its own server card, which had listed the same 17.
- **Reference links**: 34 of 40 API entries had pointed at a generic page, and now each points at its own reference page.
- **security.txt**: we had recorded that Nylas does not serve one. It does.

And it added artifacts Nylas authored from its own published material:

- **An AsyncAPI 3.1 contract** for the notifications Nylas sends over webhooks, Google Cloud Pub/Sub and Amazon SNS. It covers all 53 triggers, the CloudEvents envelope, the signature scheme, and delivery and retry behavior.
- **JSON Schemas**: one per notification trigger plus the envelope. Seven upstream examples that failed their own schemas were left out, and each omission is recorded.
- **A JSON-LD context** mapping Nylas resources to schema.org. Timestamps were deliberately kept out of schema.org's date types, because Nylas uses Unix seconds.
- **A Spectral ruleset** of the conventions the Nylas contract actually follows, extending the standard OpenAPI rules and porting Nylas's own documentation linting.

I verified it and folded it in on October 2nd, and the next scoring run put Nylas at the top.

## What the score says now

The facet breakdown on the [Nylas page](https://apis.io/providers/nylas/) shows why this is a deserved first place and not a fluke of one category. Developer Ergonomics is at 95. Access Clarity is at 97. Discoverability is at 88, Operational Transparency at 84, Contract Governance at 81 and Contract Quality at 80. That is a provider that is strong across the board: well described, easy to start with, clear about what it costs, and open about how it operates.

It is not perfect, and I would not want it to be, because then the score would have nothing left to say. Create-or-Update Ergonomics is at zero, and Regulatory Posture is at 57. Agent readiness, at 57, clears the agent-native gate, but there is room above it. When Nick first submitted, Nylas's contract carried an idempotency key on only a couple of its mutating operations, and he listed that himself as backlog. That is the honest kind of gap: known, stated, and on someone's list.

## Why this matters

Last week I wrote about [the four ways providers react to a Kin Score](https://apievangelist.com/2026/09/28/the-four-ways-providers-react-to-a-kin-score/): ignore it, ask for a takedown, treat it as a roadmap, or fix it yourself with a pull request. Nylas is the clearest example of the fourth. They did not ask me to change their score. They changed the evidence the score reads, checked every claim against their own production systems, fixed their own published artifacts upstream where they were wrong, and let the score follow.

That is the whole idea working the way I hoped it would. A provider who publishes the truth about its API, in machine-readable form, in the open, ends up at the top of a ranking that anyone can audit. Every artifact behind that 93.2 is in [the Nylas repository](https://github.com/api-evangelist/nylas) for anyone to read.

A first place is something to defend, not something to keep. The rubric moves, other providers are doing the work too, and the next release is a week away. But for today, the most programmable provider on APIs.io is the one that sent me the pull request. Congratulations to Nick and the Nylas team. If you want your company to be next, the repository is open.

---
published: true
layout: post
title: '427 Agent Cards: How They Talk and What They Do'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/427-agent-cards-how-they-talk-and-what-they-do.png
date: 2026-09-21
author: Kin Lane
tags:
  - Agents
  - A2A
  - Agent Cards
  - MCP
  - x402
  - Agent Skills
  - Discovery
  - Machine Readability
  - Standards
  - Payments
  - APIs.io
---
In July I wrote that [most published agent cards are not actually A2A](https://apievangelist.com/2026/07/29/most-published-agent-cards-are-not-actually-a2a/). At the time that meant 65 providers out of 22,341 hosts, ten of them conformant, and I called it a starting line rather than an adoption story. Less than two months later the [A2A section on APIs.io](https://apis.io/a2a/) holds 427 providers, 421 of them serving an [Agent2Agent](https://a2a-protocol.org/latest/) Agent Card from their own host. The snapshot combines the providers APIs.io already profiles with the independently operated agents that have registered themselves in the open A2A registries, read the same way every time: the card is fetched from the provider's own well-known path, saved verbatim, and graded against the A2A `AgentCard` object. Nothing in it is derived on anyone's behalf. With a population this size it finally makes sense to stop counting cards and start describing them, so I want to lay out two things — how these 427 providers talk to agents, and what they actually do.

## How They Talk

| Across 427 providers | Share |
|---|--:|
| Serve an agent card from their own host | 99% |
| Card passes every A2A structural check (conformant) | 60% |
| Card is near-conformant — right shape, missing optional fields | 9% |
| Card is flavored — fails a hard structural check | 29% |
| Card still lives at the legacy `/.well-known/agent.json` path | 8% |
| Card is a documentation platform's default, not the provider's own | 26% |
| Declare `HTTP+JSON` as the preferred transport | 34% |
| Declare `JSONRPC` as the preferred transport | 28% |
| Declare no transport at all | 35% |
| Declare protocol version 0.3 | 59% |
| Declare protocol version 1.0 | 17% |
| Declare no protocol version | 21% |
| Card carries exactly one skill | 35% |
| Card carries two to five skills | 27% |
| Card carries six or more skills | 30% |
| Also run an MCP server | 83% |
| Publish Agent Skills alongside the card | 51% |
| Accept x402 payments | 23% |

The conformance picture has moved a long way. Sixty percent of these providers publish a card that passes every structural check, against fifteen percent in July, and the share stranded on the pre-0.3 legacy path has fallen from twenty-three percent to eight. That is real progress, and it happened fast. But the single most important line in that table is the sixth one. **About one in four agent cards is the default a documentation platform publishes on the provider's behalf.** They are easy to recognize once you have seen a few: the card lives on the docs host rather than the product's, it declares `HTTP+JSON` and protocol 0.3, and it carries exactly one skill whose description begins "Use when…" and points back at the documentation. Ninety-nine percent of those cards are conformant, because one vendor wrote one correct template. Among the cards providers wrote themselves, conformance is forty-seven percent.

I think both halves of that are good news, and I think they are different news. A valid card at a predictable path is more than most of these companies had in the spring, and a docs platform shipping it by default is exactly how OpenAPI spread — tooling made the artifact before teams made the decision. But it also means a meaningful share of what looks like agent adoption is a checkbox somebody else ticked, and the teams behind those cards may not know they have one. The self-authored cards tell you more about where the work is. **More than a third of all cards declare no transport at all**, which is the most common way a card falls short: it says an agent exists and leaves out how to reach it. One in five declares no protocol version. And the long tail of version strings — `0.3`, `0.3.0`, `1.0`, `1.0.0`, a handful of `0.2.5` — says the ecosystem is still mid-migration to the 1.0 specification the Linux Foundation now stewards.

The line I would underline for anyone building in this space is the MCP one. **Eighty-three percent of providers with an agent card also run an MCP server.** In July I noted that the Agent Card was quietly decoupling from A2A, with conformant cards pointing at MCP endpoints. That has hardened into the norm. For most of these providers the card is not the conversation, it is the front door: a machine-readable statement of identity, skills and authentication at a well-known address, with MCP behind it doing the actual work. A few have stopped pretending otherwise and declare `MCP` as the card's preferred transport outright. The industry wanted an agent-facing equivalent of what OpenAPI did for HTTP APIs, and it appears to be assembling one out of two specifications rather than choosing between them.

Skills are where the population splits most visibly. Across these cards there are 2,678 declared skills — a median of three per card, a mean of six, and a top end that runs past two hundred. Thirty-five percent of cards carry exactly one skill, and thirty percent carry six or more. Those are two different ideas of what a skill is. One treats it as a label for the whole product. The other treats it as a menu an agent can order from — `swap`, `orderbook`, `create_card`, `get_card_balance` — each with its own tags, examples and input modes. Half of these providers also publish standalone Agent Skills next to the card. And nearly a quarter accept [x402](https://www.x402.org/) payments, which means an agent can discover the provider, read what it offers, and pay for a single call without a human ever creating an account.

## What They Do

| Across 427 providers | Share |
|---|--:|
| Developer tools and platforms | 62% |
| Data, search and research | 50% |
| Agent infrastructure — discovery, memory, identity, orchestration | 43% |
| Payments and agent commerce | 42% |
| Trust, identity and security | 40% |
| Marketing, content and social | 38% |
| Communication, community and marketplaces | 28% |
| Vertical and consumer services | 25% |
| Crypto, blockchain and DeFi | 19% |
| Compliance, legal and governance | 18% |
| Markets, trading and finance | 17% |

A provider can sit in several of these, and most do. What the table shows is two economies sharing one protocol. The first is the one you would expect: established API companies in developer tooling, data, search and marketing, adding an agent door to a business that already has a human one. They account for the top of the table, and they are why developer tools lead at sixty-two percent.

The second economy is the one I find more interesting, because it did not exist two years ago. **More than four in ten of these providers are in the business of agent infrastructure or agent commerce** — identity and reputation for agents, memory that outlives a session, discovery and registries, signed receipts for automated actions, escrow, sanctions screening an agent can call before it transacts, and metered micropayments settled in stablecoins. Their customer is not a developer integrating an API. Their customer is another agent. That is also what most of the crypto share is: not speculation, but settlement rails — USDC on Base or Solana — chosen because nothing else will clear a payment worth a fraction of a cent. Forty percent of the whole population touches trust, identity or security, which tells you what the people actually building agent-to-agent systems think the hard problem is.

And then there is the quarter of providers doing something entirely ordinary. A directory of Norwegian dental clinics. A registry of farms and farm shops that sell direct. A service that turns a PDF into real postal mail in twelve countries. A not-for-profit property listing aggregator run by a community interest company. These are small operators who skipped the developer portal and went straight to publishing an agent card, an MCP endpoint and an `llms.txt`, on the theory that their next user asks an assistant rather than visiting a website. They are a minority, but they are the clearest picture in the data of what agent-native looks like when it is not about agents at all.

One last finding, because it is the one I keep turning over. Of those 2,678 skills, **fewer than three in a hundred mention a service the publisher does not run.** Every agent card in this snapshot describes its own surface: here is what I expose, here is how to call it. Almost none of them describes what the publisher can do *for* you across other people's APIs. That is a provider-centric reading of a schema that is not inherently provider-centric — an A2A skill carries example user requests and a plain-language description of a task, not a list of endpoints — and it mirrors exactly how OpenAPI came to be used. It also leaves something unoccupied. As more of us operate through agents that act on our behalf, out in the world, across services we do not own, there is no convention yet for publishing those skills, and no vocabulary in the specification for the delegation they imply. Four hundred and twenty-seven cards in, the agent web knows how to say what it is. It has not yet started saying what it does for you. If you publish a card, [APIs.io will grade it](https://apis.io/a2a/), and I would like to see what the next four hundred look like.

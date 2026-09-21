---
published: true
layout: post
title: '427 Agent Cards: 97 Say x402, and Eight Answer a 402'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/97-agent-cards-say-x402-eight-of-them-answer-a-402.png
date: 2026-09-21
author: Kin Lane
tags:
  - x402
  - Agents
  - A2A
  - Agent Cards
  - Payments
  - Agent Commerce
  - MCP
  - Stablecoins
  - Discovery
  - APIs.io
---
Earlier today I laid out [how 427 agent cards talk and what they do](https://apievangelist.com/2026/09/21/427-agent-cards-how-they-talk-and-what-they-do/), and one line in it deserved more than a row in a table. Nearly a quarter of those providers say they accept [x402](https://www.x402.org/) payments, and I wrote that this means an agent can discover the provider, read what it offers, and pay for a single call without a human ever creating an account. That is the promise. This afternoon I went and knocked on every one of those doors to see how much of it is true yet.

## Who Says It

Ninety-seven of the 427 providers declare x402 — as a tag on their profile, as a typed pointer to a facilitator, or in the prose of the card itself. That is twenty-two percent, and it is not evenly spread.

| Of the 97 providers declaring x402 | |
|---|--:|
| Harvested from the open A2A registries this week | 86 |
| Already on APIs.io with a self-authored card | 9 |
| Already on APIs.io with a docs-platform template card | 2 |
| Card is conformant | 51 |
| Card is near-conformant | 12 |
| Card is flavored — fails a hard check | 32 |
| Also run an MCP server | 95 |
| Declare `JSONRPC` as the transport | 52 |
| Declare no transport at all | 41 |

**Eighty-six of the ninety-seven came in through the registries**, which confirms what the earlier post found from the other direction: x402 lives almost entirely in the second economy, the one whose customer is another agent. The established API companies adding an agent door to a human business are not, by and large, metering it in stablecoins. The agent-native operators are — or say they are. Ninety-five of the ninety-seven also run an MCP server, so the shape being pitched is consistent: a card at the well-known path, an MCP endpoint behind it, and a 402 somewhere in between.

## Who Answers

Declaring a payment protocol is a sentence in a YAML file. Serving one is an HTTP response. So for each of the ninety-seven I took every endpoint the provider itself advertises — the card's `url`, its interfaces, its MCP server, any facilitator pointer — and made an unpaid request. A real x402 surface answers that with a **402** carrying a machine-readable payment requirement: a `PAYMENT-REQUIRED` header or a body with `x402Version` and an `accepts` list naming the network, the asset and the price. A 402 with nothing behind it does not count, because a status code is not a document. A 401 does not count, because that is authentication, not payment. And every hit was checked against a path that cannot exist on the same host, because a server that returns 402 for everything is a catch-all, not a checkout.

| What the advertised door answered | Providers |
|---|--:|
| **402 with real payment terms** | **8** |
| 200 — the request was served for free | 65 |
| 401 or 403 — wants credentials, not payment | 11 |
| Some other 4xx — 404, 405, 406 | 7 |
| 5xx | 2 |
| Unreachable | 2 |
| 402 with no terms, or a host that 402s everything | 1 |
| Nothing to probe | 1 |

**Eight.** Two of them are providers APIs.io already profiled from their own hosts — anchor-x402 and Seshat Markets — and six came in through the registries this week. Their terms are worth reading, because they are the only place in this whole exercise where the promise is fully kept:

| Provider | Version | Settles on | Price of one call |
|---|:-:|---|--:|
| anchor-x402 | v2 | USDC on Base | $0.005 |
| Hergert Synthora | v2 | USDC on Base | $0.002 |
| MUJ428 | v2 | USDC on Base | $0.25 |
| Scro Orphan Desk | v1 | USDC on Base | $0.50 |
| Seshat Markets | v2 | USDC on Solana | $0.04 |
| openclaw / evm-lab | v2 | RLUSD on XRPL | $0.01 |
| Atomadic Tech | — | header present, terms not parseable | — |
| TaskHawk Systems | v2 | terms in body, network unstated | — |

A fifth of a cent to fifty cents. USDC on Base for most of them, which matches what I found in the wider [x402 measurement](https://apis.io/tags/x402/) two weeks ago, plus one on Solana and one settling in RLUSD on the XRP Ledger. Six of the seven parseable responses are on version 2 of the protocol. These are small numbers and real ones: a notary charging a fifth of a cent to timestamp a document, a prediction feed charging four cents for a forecast, a registry charging half a dollar to unlock a name. An agent with a wallet can use every one of them right now with nobody at the provider knowing it happened.

## The Sixty-Five

The number I keep looking at is not the eight. It is the sixty-five providers who say x402 and then **serve the advertised endpoint for free.** I want to be precise about what that does and does not mean, because it is easy to read as an accusation and it is not one.

It does not mean sixty-five providers are lying. Most x402 deployments meter specific routes — the expensive query, the premium feed, the write — and leave the root, the health check and the MCP handshake open. My probe asked the doors the card names. If the paid door is a path the card never mentions, I walked past it. The earlier post reported "nearly a quarter accept x402 payments," and that was a faithful count of what providers declare; nothing here contradicts it.

What it does mean is narrower and, I think, more useful. **An agent that reads one of these sixty-five cards cannot find the payment from the card.** It arrives at the advertised endpoint, is served, and never learns that a paid tier exists, what it costs, or where to present the payment. The card says the provider takes x402; the surface the card points at does not ask for it. That is a discoverability gap, and it sits exactly where the earlier post found the other one: cards describe *what I expose* and stop short of *how to transact with me*. Thirty-five percent of all 427 cards declare no transport. Sixty-seven percent of the x402 cohort declares payment without pointing at a paid door. Same shape, one layer up.

The A2A `AgentCard` object has nowhere to put this. There is no field for a payment protocol, no way to mark a skill as metered, no pointer from a card to a facilitator. So providers improvise — a tag on their listing, a line in the description, a facilitator URL in `apis.yml` — and an agent has to already know to look. x402 itself is fine with that; it was designed to be discovered at the moment of the request, by the 402. But that design assumes the agent makes the request that triggers it, and a card that sends the agent to a free endpoint never does. The two specifications are each doing their job and not quite meeting.

## What I Take From It

Eight verified out of ninety-seven declared is a floor, and a floor of eight in a snapshot of 427 is still more live agent-to-agent payment than existed anywhere in the spring. The stack the agent-commerce economy has been describing — card, MCP, 402, stablecoin — is running end to end at a handful of providers, at prices no card network would clear, with nobody signing up for anything. That part is no longer a pitch.

The gap is between saying and serving, and it is mostly a gap in where the saying happens. If you publish a card and take x402, put the paid endpoint in the card — as an interface, as a skill's `url`, anywhere a reader will actually find it — and let the 402 do the rest. [APIs.io grades every card it finds](https://apis.io/a2a/), and I will be re-running this probe as the registry grows. I would like the next version of that second table to have a different first row.

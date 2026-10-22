---
published: true
layout: post
title: 'The Most Programmable Sectors In Australia'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-most-programmable-sectors-in-australia.png
date: 2026-10-26
author: Kin Lane
tags:
  - Australia
  - Insights
  - Consumer Data Right
  - Agents
  - MCP
  - Discovery
---
Australia is programmable where it is paid to be, or made to be. Everywhere else, it is dark.

Ahead of [The API Economy Roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) at apidays Australia this Wednesday, October 28th, I profiled 227 of the country's largest companies — the ASX 200 plus the big private, tech, telco, super and government publishers — through the same enrichment pipeline that feeds APIs.io. 80 were already in the catalog and got re-profiled, 147 were new. For each one I asked a simple question: what does this company publish that a developer, or an AI agent, can actually read?

Not a marketing page. A machine-readable contract (OpenAPI, AsyncAPI, GraphQL, Postman), a developer portal, an MCP server, an agent card, an llms.txt, a sandbox, published pricing, published rate limits. If a company has none of those, there is nothing for an agent to discover, no matter how big the brand is.

## Half of the country gives an agent nothing to read

117 of the 227 companies — 52% — publish none of it. That list includes BHP, Rio Tinto, CSL, Wesfarmers, Coles, Fortescue, Woodside, Santos and Transurban. These are the companies that define the Australian economy, and to an agent they are a homepage and a press release.

## Ranked by sector

| Sector | Companies | Own contract | Nothing for an agent |
|---|---:|---:|---:|
| Tech | 25 | 76% | 8% |
| Government | 13 | 54% | 0% |
| Banks / finance | 39 | 49% | 31% |
| Telco | 7 | 43% | 14% |
| Energy / utilities | 16 | 44% | 44% |
| Health | 15 | 13% | 60% |
| Retail / consumer | 22 | 9% | 50% |
| Industrials / property / media | 43 | 12% | 77% |
| Super funds | 6 | 0% | 83% |
| Mining | 41 | 2% | 90% |

"Own contract" means the company publishes the contract itself, not one we generated from its docs. Telco and super are small samples, so read those two rows as directional.

## Three reasons a sector becomes programmable

**It is paid to be.** Tech sells its API, so tech publishes everything. 19 of 25 have their own contract, 17 publish pricing, 13 publish rate limits, and six run MCP servers backed by their own API — Xero, Airwallex, SafetyCulture, Linktree, Go1 and Envato among them. This is the only Australian sector that is broadly ready for agents today, and it got there because the API is the product.

**It is made to be.** Banking and energy sit in the middle of the table for one reason: the Consumer Data Right. 31 companies in the cohort carry a CDR signal. Outside of tech, nearly every contract a bank or energy retailer publishes is its CDR contract. EnergyAustralia and Red Energy publish the Consumer Data Standards energy APIs. AMP's only contract is its CDR product data. Regulation wrote these APIs. The market, for the most part, has not written any others.

**It is told to be.** Government publishes because open data is a mandate. 12 of 13 government publishers have a developer portal and seven publish their own contracts — the ATO, ABS, CSIRO, Transport for NSW and Trove among them. But not one of them has an MCP server, an agent card, or OAuth protected resource metadata. Government is open, and it is not yet discoverable by an agent.

Every sector without one of those three forces is dark.

## The dark end of the table

Mining is the starkest. 41 miners, one Swagger file — Dyno Nobel's. 37 of 41 publish nothing at all. And this is not an Australian problem. When I looked for miners anywhere in the catalog with a rich contract, I could not find one. The contracts in mining belong to the suppliers: Caterpillar's telematics API on ISO 15143-3, Bentley and Seequent for geology, Propeller for drone survey, Benchmark for battery-mineral prices. Miners do not publish APIs. Their suppliers do.

The super funds are the other end of the same story. Superannuation is compulsory, holds roughly four trillion dollars, and touches nearly every working Australian. The six largest industry funds — AustralianSuper, Australian Retirement Trust, Aware Super, UniSuper, Hostplus and Rest — publish no contract, no portal and no sandbox. Superannuation is outside the Consumer Data Right, so nothing is pushing them. Enormous consumer reach, zero programmable surface.

## What the agent signals actually say

The AI-era signals are thin, and a lot of what is there was not built on purpose.

- **llms.txt is the most common signal**, at 49 of 227. CommBank, NAB, Westpac, AGL, Origin, QBE and Bupa all serve one. Several come from a careers or investor-relations site rather than the main domain.
- **Retail's MCP servers were switched on by Shopify.** JB Hi-Fi, Lovisa, Harvey Norman and three others answer at Shopify's `/api/ucp/mcp` endpoint. That is real agent commerce surface, and none of them built it.
- **Three agent cards in 227 companies** — Woolworths' Wpay, Linktree and Immutable — and all three live on a docs site.
- **A blocked front door is not a closed API.** 21 companies put an anti-bot challenge in front of their homepage, including BHP, Macquarie, QBE, AGL and the ATO. Macquarie, QBE, the ATO and AGL still publish contracts behind it. An agent that gives up at the homepage never finds them.

## Why this matters this week

Australia is moving quickly on agents. The banks are publishing guardrails for agentic commerce, NAB is testing a customer-facing agent platform, and Google launched agentic checkout here first in Asia-Pacific. All of that assumes the agent can find something to act on. For most of the ASX 200, today, it cannot.

The pattern also says where the next wave comes from. If regulation is what made banking and energy programmable, then the extension of the Consumer Data Right — to non-bank lenders now, and possibly to other sectors next — is the single biggest lever on how programmable Australia becomes. And for the sectors outside it, the question for the roundtable is a commercial one: what would make a miner, a super fund or a retailer want to be found by an agent?

If you are going to be in Melbourne, join us at [The API Economy Roundtables](https://portal.joinfost.io/event/the-api-economy-summit-using-the-kin-score/8f836005-1d6a-4462-9f2a-d06907ed149f) on Wednesday — first a session on using the Kin Score in the Australian and ANZ region with Claire Barrett and myself, then The API Economy in an AI-everywhere world with Will Fettke from Telstra and Erik Tveitnes from REA Group. These are the numbers we will be putting on the table.

All 227 profiles are on [APIs.io](https://apis.io) after this week's build. If your company is one of them and the catalog has it wrong, tell me — I would rather fix it than be right about the pattern.

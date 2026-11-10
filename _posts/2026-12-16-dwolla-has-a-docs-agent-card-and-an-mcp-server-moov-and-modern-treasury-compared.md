---
published: true
layout: post
title: 'Dwolla Has A Docs Agent Card And An MCP Server. Moov And Modern Treasury Compared.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/dwolla-has-a-docs-agent-card-and-an-mcp-server-moov-and-modern-treasury-compared.png
date: 2026-12-16 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Dwolla
  - Moov
  - Modern Treasury
---
I am taking one company a day that publishes an A2A agent card and comparing it with two of its competitors. If you are new to the series, start with [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/). Every card I track is in the [APIs.io A2A catalog](https://apis.io/a2a/), which as of November 10, 2026 counts 1,279 providers serving a card, 934 of them conformant.

Today is Dwolla, the account-to-account payments API, alongside Moov and Modern Treasury. One small naming hazard first. In payments, "A2A" usually means account-to-account. In this series it means Agent2Agent. Dwolla's own docs use both.

## What Dwolla Publishes

The [APIs.io record for Dwolla](https://apis.io/a2a/dwolla/) was fetched on October 12, 2026, from `https://developers.dwolla.com/.well-known/agent-card.json`. The card is named "Dwolla Developer Portal," uses protocol version 0.3, and its endpoint is the developer portal itself. It has a proper description: "Comprehensive guides, API documentation, SDKs, and tools for building, testing, and launching account-to-account payment integrations with Dwolla."

There is one skill, named "dwolla." It says to use it when building account-to-account payment integrations, onboarding and verifying customers, creating bank transfers, handling payment webhooks, or implementing payouts, pay-ins and peer-to-peer transfers. APIs.io grades the card conformant, with one deviation noted: `supportedInterfaces` is used where the spec expects `additionalInterfaces`.

When I checked on November 10, 2026, the card was live at the same URL with the same name, description, version and endpoint. The skill description had been reworded and now opens with building payment integrations and managing ACH transfers. My probe flagged the same interfaces issue and estimated near-conformant. I also checked `dwolla.com` and `www.dwolla.com`, and both returned a 406 at `/.well-known/agent-card.json` and `/.well-known/agent.json`, so the card lives only on the developer host.

The developer portal runs on Mintlify, and its response headers advertise the agent card along with llms.txt, an MCP server card and an agent skills index. That tells me this is the docs platform card pattern. It points agents at documentation, which is useful, but it is not an agent interface into Dwolla's payment platform.

## Dwolla Also Has An MCP Server

Dwolla's [llms.txt](https://developers.dwolla.com/llms.txt) links to a [Model Context Protocol page](https://developers.dwolla.com/docs/mcp-server) that describes the Dwolla MCP Server as a way for AI agents to retrieve and analyze data from Dwolla's payment platform using natural language. That is the piece an agent would actually want to call. The card does not mention it.

## Moov

I checked `moov.io`, `www.moov.io` and `docs.moov.io` at both well-known paths and got 404s every time. I found no agent card, and APIs.io has none on record for Moov.

Moov is clearly building for agents, though. Its [llms.txt](https://docs.moov.io/llms.txt) links to a [Model Context Protocol guide](https://docs.moov.io/guides/developer-tools/mcp-ai/mcp/) and references an MCP endpoint at `https://docs.moov.io/mcp`. The llms.txt itself is well written, opening with a plain explanation of what Moov does and how its accounts and money movement fit together.

## Modern Treasury

I checked `moderntreasury.com` and `www.moderntreasury.com` at both well-known paths and got 404s. `docs.moderntreasury.com` returned a 200 HTML page at both paths, not JSON. I found no agent card, and there is none in the APIs.io catalog. `docs.moderntreasury.com/llms.txt` returned a 404 when I checked.

The Modern Treasury docs home page does include buttons labeled "Copy MCP Command" and "Copy MCP Config," so there is an MCP option offered from the docs. I did not dig into what that server covers, so I will leave it there.

## Side By Side

| | Dwolla | Moov | Modern Treasury |
|---|---|---|---|
| Agent card found | Yes, developers.dwolla.com | No (hosts checked above) | No (hosts checked above) |
| Grade | Conformant, 1 deviation | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Skills | 1 docs skill | n/a | n/a |
| Endpoint | Docs portal | n/a | n/a |
| MCP documented | Yes | Yes | MCP config offered on docs |
| llms.txt | Yes | Yes | Not found at docs host |

## What I Take From It

Payments is a market where you want agents to be careful. You want them to know exactly what they can do, what it costs, and how they authenticate before anything moves. A machine-readable card that spells that out is a good fit here.

Dwolla has the best starting point of the three. It has a live card, a real description, and an MCP server. The card and the server just are not connected yet. Moov has a strong agent story through its docs and MCP, without a card. Modern Treasury offers MCP from its docs but has neither a card nor an llms.txt at the docs host I checked.

## Takeaway For Payments API Providers

Treat the agent card like your OpenAPI. Publish it on a host you control, describe skills that match real capabilities like onboarding a customer, linking a bank account or initiating a transfer, and point it at the MCP server or API an agent should actually call. Say how agents authenticate. If your docs platform generates a card for you, great, keep it. Then publish a second, real one. Dwolla is one edit away from that. Moov and Modern Treasury already have the MCP pieces and could publish a card that describes them.

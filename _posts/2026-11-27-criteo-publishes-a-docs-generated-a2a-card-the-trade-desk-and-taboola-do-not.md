---
published: true
layout: post
title: 'Criteo Publishes A Docs Generated A2A Card. The Trade Desk And Taboola Do Not.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/criteo-publishes-a-docs-generated-a2a-card-the-trade-desk-and-taboola-do-not.png
date: 2026-11-27 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Criteo
  - The Trade Desk
  - Taboola
---
This is another entry in my daily look at who publishes an A2A (Agent2Agent) agent card and how their competitors compare. If you want the bigger picture, start with my post on [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and browse the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 it lists 1,279 providers serving a card, with 934 conformant.

Today is ad tech. Criteo, with The Trade Desk and Taboola alongside.

## What Criteo Publishes

Criteo serves a card at [developers.criteo.com/.well-known/agent-card.json](https://developers.criteo.com/.well-known/agent-card.json). APIs.io recorded it on the [Criteo card page](https://apis.io/a2a/criteo/), and when I checked on November 10, 2026 it was still there.

The details:

- Card name "Criteo Docs", with an empty description.
- Protocol version "0.3", not the full semver form.
- The endpoint is https://developers.criteo.com/, the root of the developer docs site.
- One skill. In the APIs.io snapshot it reads "Use when building integrations with Criteo's Retail Media API or Marketing Solutions API, managing campaigns, audiences, accounts, or analytics programmatically, or troubleshooting API authentication and error responses."

APIs.io grades it conformant, and also notes some deviations: interfaces listed under supportedInterfaces instead of additionalInterfaces, no description, and a protocol version that is not semver. My live probe estimated near-conformant, with only the supportedInterfaces issue flagged. The skill name and description had also changed slightly since APIs.io fetched it in August, so the card is being regenerated over time.

## Reading The Card Honestly

This is a documentation platform card. The shape gives it away: one skill that starts with "Use when building integrations with...", an endpoint that is the docs root, and a 0.3 protocol version. I see this pattern across hundreds of providers, and it comes from the docs host, not from someone at the company designing an agent.

That is not a criticism. It is a perfectly good discovery step. An agent that finds this card learns that Criteo has a Retail Media API and a Marketing Solutions API, and where the docs live. But the endpoint is a website, not an agent. There is nothing to send an A2A task to.

The more interesting thing is next door. Criteo's [llms.txt](https://developers.criteo.com/llms.txt) has a Model Context Protocol section, and the docs include a [Get Started with MCP](https://developers.criteo.com/mcp/docs/criteos-model-context-protocol-mcp) page about connecting an approved AI environment to Criteo through MCP. So Criteo has a real agent interface. The card just does not mention it.

## The Trade Desk

I checked thetradedesk.com, www.thetradedesk.com, api.thetradedesk.com, partner.thetradedesk.com and developers.thetradedesk.com at both /.well-known/agent-card.json and /.well-known/agent.json. None served an agent card. Most returned 404, and api.thetradedesk.com returned 401, which is what you would expect from an authenticated API host.

I also tried partner.thetradedesk.com/llms.txt and got a 404. I did not find an MCP server I could verify, so I am not going to claim one either way.

## Taboola

I checked taboola.com and developers.taboola.com at both well-known paths. taboola.com returned 404. developers.taboola.com returned a 200, but the response was an HTML page, not JSON, which reads like a soft 404 from the docs site. I am not counting that as a card. The developers site also returned a 404 for /llms.txt.

## Side By Side

| | Criteo | The Trade Desk | Taboola |
|---|---|---|---|
| A2A card found | Yes, developers.criteo.com | No (5 hosts checked) | No (2 hosts checked) |
| Grade | Conformant (APIs.io), near-conformant (my live probe) | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Endpoint | Docs root | n/a | n/a |
| Skills | 1 generic docs skill | n/a | n/a |
| llms.txt | Yes | Not at partner site | Not at developers site |
| MCP | Documented | Not verified | Not verified |

## What This Tells Me

Criteo is ahead of its peers here, and mostly because of the MCP work, not the card. The card is the automatic part. The MCP server is the part someone had to decide to build, with access flows and approvals that matter in advertising where accounts and budgets are on the line.

The obvious improvement is to connect the two. The card could carry a real description, a full protocol version, and either a skill or an extension pointing at the MCP server. Right now an agent that reads the card and stops would never know Criteo has done the harder work.

## The Takeaway

For The Trade Desk, Taboola, and the rest of ad tech, the bar is low and the opening is real. A docs platform card costs almost nothing, and it gets you into catalogs like APIs.io that agents are starting to crawl. But do not stop there. Advertising APIs are exactly the kind of thing people want agents to operate, so the more useful move is what Criteo did next: a documented, permissioned MCP or A2A interface, and a card that points to it. You can check your current listings on APIs.io for [Taboola](https://apis.io/providers/taboola/) and [Criteo](https://apis.io/providers/criteo/).

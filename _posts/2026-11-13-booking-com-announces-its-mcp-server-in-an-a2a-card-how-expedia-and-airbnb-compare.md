---
published: true
layout: post
title: 'Booking.com Announces Its MCP Server In An A2A Card. How Expedia And Airbnb Compare.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/booking-com-announces-its-mcp-server-in-an-a2a-card-how-expedia-and-airbnb-compare.png
date: 2026-11-13 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Booking.com
  - Expedia
  - Airbnb
---
Each day I am picking one company with an A2A agent card and looking at two of its competitors. The overview is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and every card is listed in the [APIs.io A2A catalog](https://apis.io/a2a/). As of November 10, 2026 the catalog counted 1,279 providers serving a card, 934 of them conformant.

Today is travel. Booking.com, next to Expedia and Airbnb.

## What Booking.com Publishes

Booking.com serves a card at `https://developers.booking.com/.well-known/agent-card.json`, the canonical path on its developer site. When I checked on November 10, 2026, it matched what APIs.io has on its [Booking.com A2A page](https://apis.io/a2a/booking-com/). Here is what is in it:

- **Name.** "Developer Documentation."
- **Description.** "Documentation agent card announcing this site's agent skills and MCP server."
- **Endpoint.** `https://developers.booking.com/a2a`, with HTTP+JSON as the preferred transport.
- **Protocol version.** 0.3.0. The card's own version is 0.0.1.
- **Skills.** None. The skills array is empty.
- **Extensions.** One, pointing to a Model Context Protocol server at `https://developers.booking.com/mcp`.

APIs.io grades it conformant, and also records three deviations: the empty skills array, an A2A endpoint that is not actually served, and a pre-release version number. When I sent a POST to `/a2a` I got a 405 back, which lines up with that second note.

## How I Read This Card

This card is honest about what it is. It does not pretend to be an agent. It says it exists to announce the documentation site's MCP server, and it uses the A2A extensions field to do that. I can confirm the MCP URL it names answers a plain GET with a 405 and a JSON body, which is what an MCP endpoint that expects a POST would do. Booking.com also publishes an `llms.txt` at [developers.booking.com/llms.txt](https://developers.booking.com/llms.txt).

So the agent card is a signpost. That is useful. A crawler that only knows about A2A can find its way to the MCP server. But with zero skills and an endpoint that does not answer A2A requests, there is nothing here for another agent to call over A2A. If Booking.com wants the card to carry weight, the fix is small. Either list skills that describe what the MCP server does, or point the endpoint at something that speaks A2A.

## Expedia

I probed `expedia.com`, `www.expedia.com`, `expediagroup.com` and `developers.expediagroup.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. All of them returned 404. I found no agent card. The [Expedia Group provider page](https://apis.io/providers/expedia-group/) on APIs.io covers its APIs.

## Airbnb

I probed `airbnb.com`, `www.airbnb.com` and `developer.airbnb.com` at both well-known paths. The first two returned 404. On `developer.airbnb.com` both paths returned a 200, but the body was an HTML page and not JSON, so I do not count it as a card. I found no agent card. See the [Airbnb provider page](https://apis.io/providers/airbnb/) for the rest.

## Side By Side

| | Booking.com | Expedia | Airbnb |
|---|---|---|---|
| Agent card found | Yes, developers.booking.com | No (4 hosts checked) | No (3 hosts checked) |
| Endpoint | developers.booking.com/a2a (returns 405) | n/a | n/a |
| Skills | 0 | n/a | n/a |
| Protocol version | 0.3.0 | n/a | n/a |
| Grade | Conformant, with deviations | n/a | n/a |
| MCP announced | Yes, developers.booking.com/mcp | not checked | not checked |
| llms.txt | Yes | not checked | not checked |

## What I Would Watch

The card version is 0.0.1, which reads like a first draft. I would expect skills to show up as the MCP tools settle. The protocol version is 0.3.0, and A2A is now at 1.0. Either change would make this a stronger card.

## The Takeaway For Travel

Booking.com is the only one of these three where I found an agent card, and it uses it to send agents to its MCP server. That is a practical choice. Travel is one of the places people most want agents to act for them, searching and booking. For Expedia and Airbnb, the cheapest first step is the same one Booking.com took: a card at the canonical well-known path on the developer host. The better step is a card with real skills behind a real endpoint. Booking.com is closer to that than anyone else here, but it is not there yet either.

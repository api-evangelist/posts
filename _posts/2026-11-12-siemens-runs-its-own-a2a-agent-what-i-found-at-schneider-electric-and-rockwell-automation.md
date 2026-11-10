---
published: true
layout: post
title: 'Siemens Runs Its Own A2A Agent. What I Found At Schneider Electric And Rockwell Automation.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/siemens-runs-its-own-a2a-agent-what-i-found-at-schneider-electric-and-rockwell-automation.png
date: 2026-11-12 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Siemens
  - Schneider Electric
  - Rockwell Automation
---
This is the next in my daily series looking at a company that publishes an A2A agent card, and how its competitors compare. The background is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/). The full list lives in the [APIs.io A2A catalog](https://apis.io/a2a/), which counted 1,279 providers serving a card and 934 conformant as of November 10, 2026.

Today is industrial automation. Siemens, next to Schneider Electric and Rockwell Automation.

## What Siemens Publishes

Siemens runs a dedicated host, `mcp.siemens.com`. The agent card is the "Siemens Enterprise Knowledge Agent," and it points to its own endpoint at `https://mcp.siemens.com/a2a`. It declares protocol version 0.3.0 and JSON-RPC as the preferred transport. You can see it on the [Siemens A2A page](https://apis.io/a2a/siemens/) at APIs.io, where it is graded conformant.

Two things changed since APIs.io last fetched it on October 4, 2026.

First, the location. APIs.io found the card at `/.well-known/agent.json`, the older path. When I checked on November 10, 2026, Siemens now serves the same card at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. That is the right move. The newer path is the canonical one, and keeping the old one avoids breaking anyone.

Second, the skills. APIs.io has six on file: Assets, Developer Portal, Search, AiSearch, ProductSearch and Webcontent. The live card has five, and they are better described:

- **Assets.** Finds publicly released Siemens media in the Web Asset Pool, such as photos, videos, PDFs, audio and icons.
- **Developer Search.** Searches the Siemens Developer Portal, including API references, SDK guides, authentication and changelogs.
- **Product Datasheet.** Returns the technical datasheet for one Siemens industry product by its article number, as structured data.
- **Search.** A general search across companies, products, solutions, industries, news, careers and sustainability on siemens.com.
- **Get Web Content.** Fetches one public Siemens page and returns its main content as clean markdown.

The card's description also explains how a call works. A `message/send` runs one skill synchronously and returns the finished task. That is the kind of sentence that saves an integrator an afternoon.

## Why It Matters

This is not a docs platform card. It is a separate host, built for agents, with skills that map to real jobs. The product datasheet skill stands out to me. Looking up a part by its article number and getting structured specs back is exactly what an engineering or procurement agent needs to do. The host name also suggests Siemens is serving MCP from the same place. I can confirm that `https://mcp.siemens.com/mcp` answers a plain GET with a 405 and a JSON body, which is what you would expect from an endpoint that wants a POST. I did not go further than that.

## Schneider Electric

I probed `se.com`, `www.se.com` and `developer.se.com` at both well-known paths. I found no agent card. The first two returned 404s, and `developer.se.com` did not answer at all from where I was. Schneider Electric has a [provider page on APIs.io](https://apis.io/providers/schneider-electric/), but no card in the A2A catalog.

## Rockwell Automation

I probed `rockwellautomation.com`, `www.rockwellautomation.com` and `developer.rockwellautomation.com` at both well-known paths and found no agent card. The first two returned 404s, and the developer host did not resolve for me. The [Rockwell Automation provider page](https://apis.io/providers/rockwell-automation/) has what APIs.io knows about its APIs.

## Side By Side

| | Siemens | Schneider Electric | Rockwell Automation |
|---|---|---|---|
| Agent card found | Yes, mcp.siemens.com | No (3 hosts checked) | No (3 hosts checked) |
| Well-known paths | Both | n/a | n/a |
| Endpoint | Own, mcp.siemens.com/a2a | n/a | n/a |
| Skills (live) | 5 | n/a | n/a |
| Protocol version | 0.3.0 | n/a | n/a |
| Grade | Conformant | n/a | n/a |

## What I Would Watch

The skills are changing, which tells me someone is actively working on this. That is good. It also means anyone caching the card should refetch it. Siemens is on 0.3.0, and I would expect a move to 1.0 at some point. The card's version field still reads 1.0.0 even though the skills changed, so bumping that when skills change would help consumers notice.

## The Takeaway For Industrial Automation

Industrial companies have a lot of public material that agents need: datasheets, manuals, product catalogs, developer docs. Siemens put that behind one agent host with specific skills. Schneider Electric and Rockwell Automation have the same kind of content. A card on the main domain or developer host, pointing at a real endpoint with a product lookup skill, would put them in the same conversation. Start with public data. Describe each skill so another agent knows what it is getting.

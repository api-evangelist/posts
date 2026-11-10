---
published: true
layout: post
title: 'X Has A Docs Platform Agent Card. What Reddit And Meta Publish.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/x-has-a-docs-platform-agent-card-what-reddit-and-meta-publish.png
date: 2026-11-16 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - X
  - Reddit
  - Meta
---
This series takes one company with an A2A agent card and puts it next to two competitors. I wrote up the bigger picture in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/). The catalog behind it is the [APIs.io A2A catalog](https://apis.io/a2a/), which counted 1,279 providers serving a card and 934 conformant as of November 10, 2026.

Today is social. X, next to Reddit and Meta.

## What X Publishes

X serves a card at `https://docs.x.com/.well-known/agent-card.json`, on its documentation host. You can see it on the [X A2A page](https://apis.io/a2a/x/). Here is what it contains:

- **Name.** "X."
- **Endpoint.** `https://docs.x.com/`, the docs site itself.
- **Protocol version.** 0.3, with HTTP+JSON as the preferred transport.
- **Skills.** One, with the id `x`. The description says to use it "when building applications that interact with X (formerly Twitter) data and functionality," and lists searching posts, managing user accounts, streaming real-time data, publishing content, managing direct messages, and analyzing trends.

When I checked on November 10, 2026, the live card matched what APIs.io fetched in August. APIs.io grades it conformant. My probe script was a little stricter and called it near-conformant, for the same reason APIs.io notes as a deviation. The card lists its interfaces under `supportedInterfaces` rather than `additionalInterfaces`, which is the field name 0.3 expects.

## How I Read This Card

This is a docs platform card. It is the same shape I see across hundreds of documentation sites: one skill, a "use when building" description, and an endpoint that is the docs homepage. It tells an agent that X has an API and what that API covers. It does not give an agent anything to call over A2A. The endpoint is a website.

I want to be fair about this. A discovery card is a good thing. X also publishes an `llms.txt` at [docs.x.com/llms.txt](https://docs.x.com/llms.txt), and `https://docs.x.com/mcp` answers a plain GET with a 405 and a JSON body, which is consistent with a docs MCP server that expects a POST. Taken together, that is a reasonable agent-facing doc surface. It is just not an agent.

I also checked `x.com`, `developer.x.com` and `api.x.com` at both well-known paths. `developer.x.com` and `api.x.com` returned 404s. `x.com` returned 200s, but the body was HTML, so there is no card there.

## Reddit

I probed `reddit.com`, `www.reddit.com`, `developers.reddit.com` and `support.reddithelp.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. The two main domains returned 403 to my script, so I cannot say what is behind them. The developer and help hosts returned 404. I found no agent card. Reddit does publish an `llms.txt` at [developers.reddit.com/docs/llms.txt](https://developers.reddit.com/docs/llms.txt). The [Reddit provider page](https://apis.io/providers/reddit/) has what APIs.io knows.

## Meta

I probed `meta.com`, `developers.facebook.com`, `developers.meta.com` and `graph.facebook.com` at both well-known paths. The first three returned 404. The Graph API host returned 400, which is what you would expect from an API host receiving a request it does not understand. I found no agent card. See the [Meta provider page](https://apis.io/providers/meta/).

## Side By Side

| | X | Reddit | Meta |
|---|---|---|---|
| Agent card found | Yes, docs.x.com | No (4 hosts checked, 2 returned 403) | No (4 hosts checked) |
| Endpoint | Docs homepage | n/a | n/a |
| Skills | 1, generic | n/a | n/a |
| Protocol version | 0.3 | n/a | n/a |
| Grade | Conformant (one deviation) | n/a | n/a |
| llms.txt | Yes | Yes | not checked |

## The Takeaway For Social Platforms

X is ahead on discovery, and the card likely came along with its docs platform. That is how a lot of companies are showing up in the A2A catalog right now. For Reddit and Meta, matching that is mostly a docs platform setting, and Reddit already has an `llms.txt` to build on. But none of these three is offering an agent another agent can work with. The opportunity in social is a card with real skills, like searching public posts or reading a public profile, behind an endpoint that speaks A2A. Whoever does that first will set the pattern for the rest of the market.

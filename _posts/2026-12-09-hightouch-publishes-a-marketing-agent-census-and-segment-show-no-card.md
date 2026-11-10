---
published: true
layout: post
title: 'Hightouch Publishes A Marketing Agent. Census And Segment Show No Card.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/hightouch-publishes-a-marketing-agent-census-and-segment-show-no-card.png
date: 2026-12-09 14:00:00 +0000
author: Kin Lane
tags:
  - A2A
  - Agents
  - Agent Cards
  - Hightouch
  - Census
  - Segment
---
Today's company in my daily A2A agent card series is Hightouch, and it is one of the cleaner examples I have come across. I am comparing it to Census, which is now part of Fivetran, and Segment, which is part of Twilio. The background is in [934 conformant A2A agent cards and who is publishing them](https://apievangelist.com/2026/11/10/934-conformant-a2a-agent-cards-and-who-is-publishing-them/), and the full list is in the [APIs.io A2A catalog](https://apis.io/a2a/), which as of November 10, 2026 shows 1,279 providers serving a card and 934 conformant.

## What Hightouch Publishes

The card is at `https://api.hightouch.com/.well-known/agent-card.json`. APIs.io has it on the [Hightouch agent card page](https://apis.io/a2a/hightouch/) and the [Hightouch provider page](https://apis.io/providers/hightouch/). It is named "Hightouch Marketing Agent," declares protocol version 0.3.0, JSON-RPC as the preferred transport, and an endpoint at `https://api.hightouch.com/api/v1/a2a/messages`.

That endpoint path is worth noticing. It is on the API host, under the versioned API, with `a2a` right in the path. This is an agent interface, not a docs site.

There are three skills:

- **audiences**: "Create and iterate on customer audience definitions from natural language."
- **journeys**: "Design multi-step lifecycle marketing journeys."
- **marketing-analytics**: "Answer marketing analytics and strategy questions over warehouse data."

The description sums it up: Hightouch's AI marketing agent builds and saves audiences and journeys, and answers marketing analytics and strategy questions over your customer data.

When I checked on November 10, 2026, the live card matched what APIs.io recorded on August 13. Same three skills, same endpoint, same version. My probe estimated it as conformant with no issues. Nothing at either well-known path on `hightouch.com` itself, which is fine, since the card sits on the API host it describes. The card has no documentation URL, which is the one thing I would add.

## Census

I checked `getcensus.com`, `docs.getcensus.com` and `fivetran.com` at both `/.well-known/agent-card.json` and `/.well-known/agent.json`. `getcensus.com` and `fivetran.com` returned 404. `docs.getcensus.com` returned 200 with an HTML page at both paths, which is a soft 404 and not a card. I found no agent card. I also tried `docs.getcensus.com/llms.txt`, which came back as HTML rather than a text file, and `fivetran.com/docs/llms.txt`, which was a 404.

## Segment

I checked `segment.com` and `segment.com/docs` at both well-known paths. `segment.com` returned 200 with HTML, another soft 404, and `segment.com/docs` returned 403. I found no agent card. `segment.com/docs/llms.txt` also returned 403. Segment is on APIs.io as a [provider](https://apis.io/providers/segment/), without an A2A card.

## Side By Side

| | Hightouch | Census (Fivetran) | Segment (Twilio) |
|---|---|---|---|
| Card found | Yes, API host | No (6 URLs checked) | No (4 URLs checked) |
| Endpoint | api.hightouch.com/api/v1/a2a/messages | n/a | n/a |
| Skills | 3: audiences, journeys, analytics | n/a | n/a |
| Protocol | 0.3.0, JSON-RPC | n/a | n/a |
| Grade | Conformant | n/a | n/a |

## What This Tells Me

Hightouch made a choice I respect. Instead of exposing every operation in its API as a skill, it published three skills that map to the jobs a marketer actually has: define an audience, build a journey, answer a question about the data. That is the right altitude for an agent-to-agent interface. Another agent, say a campaign planner, does not want to call fifty endpoints. It wants to say "build me an audience of lapsed customers in the west region" and get one back.

It also helps that the skills are tagged (`audiences`, `cdp`, `journeys`, `lifecycle`, `analytics`), so a registry can place Hightouch in the right category without guessing.

Census and Segment both have mature APIs and big footprints in the same market. On the hosts I checked, neither publishes anything at the well-known agent card paths, and two of those hosts return HTML with a 200, which can mislead a crawler into thinking something is there. That is not a judgment on their agent plans. It is just what a discovery crawler sees today.

## Takeaway For Reverse ETL And CDP Providers

Look at how few skills Hightouch needed. If you run a customer data platform, pick the two or three outcomes your users ask for most, put an agent endpoint on your API host, and publish a card that names those outcomes. Add a documentation URL so agents and developers can learn how to authenticate. And make sure `/.well-known/agent-card.json` returns a real 404 when you don't have a card, rather than a 200 HTML page.

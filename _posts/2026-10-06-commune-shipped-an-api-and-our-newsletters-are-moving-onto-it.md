---
published: true
layout: post
title: 'Commune Shipped An API, And Our Newsletters Are Moving Onto It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/commune-shipped-an-api-and-our-newsletters-are-moving-onto-it.png
date: 2026-10-06
author: Kin Lane
tags:
  - Commune
  - Newsletters
  - MCP
  - OpenAPI
  - Agent Readiness
  - Webhooks
  - APIs
---
We moved every API Evangelist and APIs.io newsletter onto [Commune](https://usecommune.com) back in August. I picked it because Fran Méndez built it, and Fran created AsyncAPI and ran engineering at Postman, so I trusted that the platform would eventually speak API. At the time it did not. The API was a design preview, and every send was me, by hand: the pipeline rendered a send-ready issue, and I pasted it in. This morning Fran's own newsletter went out announcing that the API, an MCP server, and a developer portal at [usecommune.dev](https://usecommune.dev/) are live. I spent the morning reading the contract, and we are going to build our newsletter workflow on it.

## What shipped

The story Fran tells is a good one. One of Commune's first paying customers runs his whole newsletter from Claude, and on their first call said he would keep nagging until Commune had an MCP server. So Fran built one, put an API under it, and a developer portal on top. Then he wrote his own newsletter in Markdown in his code editor and told Claude Code to send it. The agent created the issue through the MCP server, sent him a test, waited for his OK, and scheduled it.

I pulled the published OpenAPI rather than take the announcement's word for it. What is actually there:

- **An OpenAPI 3.1 contract** at `api.usecommune.com/openapi.yaml`, covering 63 operations and 23 webhooks, at contract version `2026-08-26`.
- **Versioning by date, in a header.** Every request pins a `Commune-Version`. Leave it out and you are pinned to the version current when your key was issued, so a new release cannot break an integration that was not asking for it. The [changelog](https://api-reference.usecommune.dev/changes) says which changes break a caller.
- **Idempotency keys on writes**, so a retry gets the first response back instead of a second send.
- **Three rate-limit budgets**, not one: `general` counts every request, `audience` counts only the operations that return subscriber email addresses, and `write` counts only the ones that change something. Each is reported in standard `RateLimit` response headers, which is what an agent reads mid-run.
- **An MCP server** at `api.usecommune.com/mcp`. An anonymous request gets a `401` with RFC 9728 protected-resource metadata pointing at the authorization server and thirteen scopes, plus a typed error with a `docs_url`. That is the shape I spent [a whole post](https://apievangelist.com/2026/09/28/the-standards-that-make-your-business-agent-ready/) asking providers for.
- **An `llms.txt`** on the developer portal, and an `llms-full.txt` with the whole reference inlined, so an agent can read the documentation itself.

The design choice I like most is in the [agent guide](https://usecommune.dev/guides/mcp): each MCP tool is a job, not an endpoint. Instead of `listNewsletterInsights` with four query parameters, the assistant gets "which readers am I about to lose," and the steps behind it run for it. Fran's examples are tools named `who_is_drifting_away` and `find_superfans`. Access is granted per newsletter and per area, content, audience, sending, insights, settings and webhooks, each at read or write. Tools that change something say so, which is what a client uses to ask you before running one. That is the agentic access contract I keep scoring providers on, written into the product.

## Where ours fits

Our newsletters stop today at a rendered, send-ready artifact. The weekly Demand Report pulls the week's search terms, stats and ratings from APIs.io, renders two charts and an issue in Markdown, and generates the branded HTML. Then a human takes over, because the channel had no API. The Specification Layer newsletter works the same way.

The contract now has the sequence we need: create the article as a draft, test-send it, schedule it, or send it. So the plan is the same one Fran demonstrated on his own issue, with one deliberate difference. The pipeline will create the draft from our Markdown and send a test copy, and the schedule call will wait for a person to say yes. I am not interested in a newsletter that sends itself. I am interested in one where the only manual step left is the decision.

The other half is more interesting to me. These newsletters have been one-way for years, and Commune's API is the first channel I have used that lets me ask the audience questions in return: who read the last three issues, what did they highlight, who replied, who is going quiet. "Find readers I'm about to lose" is one of Fran's example prompts, and I want that answer every Monday, next to the search demand numbers, before I write.

## The honest caveats

Fran states the main one himself: publishing and sending through the API only works for newsletters that send with Commune. This is not a portable newsletter standard, it is one platform's API. The counts in this post are what the contract serves today, and the version string is a date, so they will move. And I am writing this on the day the announcement went out, before we have shipped a single issue through it, which is why this post says "moving onto" and not "moved."

I will profile Commune in the catalog the way I profile everyone else, and I will write up the first issue that goes through this workflow, including whatever breaks. In the meantime, if you run a newsletter and your platform has no API, Fran's line is the right one: if you can't get your data out or automate around it, you're renting.

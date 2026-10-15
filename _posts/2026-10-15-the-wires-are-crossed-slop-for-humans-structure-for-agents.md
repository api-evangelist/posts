---
published: true
layout: post
title: 'The Wires Are Crossed: Slop For Humans, Structure For Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-wires-are-crossed-slop-for-humans-structure-for-agents.png
date: 2026-10-15
author: Kin Lane
tags:
  - Agents
  - AI
  - Content
  - Machine-Readable
  - API Design
  - APIs
---
I think the wires are crossed in how we are using agents right now. The thing agents are actually good at, and the thing they actually need, is structured, machine-readable content written for other machines. Contracts, schemas, workflows, catalogs, the metadata that tells one piece of software what another piece of software does and how to use it. Instead, most of what agents are being pointed at is producing content for humans. Blog posts, emails, summaries, social posts, marketing pages, documentation nobody asked for. Slop, mostly.

Then the humans on the receiving end of all that slop get tired of it, and they blame "the agent stuff." Which is fair as far as it goes. But it lumps two very different activities together and judges them as one. Generating prose for people to read is where agents are weakest and where the cost of being wrong lands on a human who did not ask for it. Generating and consuming structure for other machines is where agents are strongest, and where the output can be validated before anyone ever sees it.

## We have it backwards

Look at what an agent needs to do useful work on behalf of a business. It needs to know what an API does, what it accepts, what it returns, what it costs, who is allowed to call it, and what happens when something goes wrong. None of that should be prose. All of it can be written down as OpenAPI, JSON Schema, Arazzo, an Overlay, a rate-limit document, an OAuth metadata file. That is the content an agent should be producing, maintaining and reading. It is boring. It is checkable. It does not end up in anyone's inbox.

Most companies are doing the opposite. They have thin or missing contracts underneath their APIs, and they have pointed their agents at the marketing calendar. Across the [APIs.io](https://apis.io/) catalog, nearly two thirds of providers publish no contract I can read, while the same companies are shipping AI-written content at a pace no human team could. The machine-readable layer that agents depend on is starved, and the human-readable layer that people are tired of is flooded.

That is what I meant earlier this week about [driven versus enabled](https://apievangelist.com/2026/10/13/driven-or-enabled-one-word-in-the-definition-of-an-agent/). An agent pointed at slop is driving. It decides what to say and hands the consequences to a person. An agent pointed at structure is enabled. It works inside definitions the business wrote down, and its output can be checked against them.

## Uncrossing the wires

I am not against agents writing for people. I use them that way myself, with a human in the loop and my name on the result. But if I were deciding where to point agents inside a business today, I would start with the structure, because that is where the work compounds:

- **Have agents write and maintain the contracts.** Generate the OpenAPI from the code and the docs, mark it as generated, and have a person review it. A contract an agent drafted and a human approved is worth more than a blog post an agent drafted and nobody read.
- **Have agents keep the metadata current.** Rate limits, change logs, deprecation dates, plans, status. The facets where [nearly half the catalog scores zero](https://apievangelist.com/2026/10/06/the-kin-score-facet-by-facet-operational-transparency/) are exactly the ones an agent could keep up to date.
- **Have agents read structure, not prose.** When your agent consumes another company's API, give it the contract, not the marketing page.
- **Judge the two separately.** When someone says they are tired of AI, ask which half they mean. The half producing slop for humans deserves the criticism. The half producing structure for machines is the half most companies have not started yet.

Agents talking to agents through well-described interfaces is the part of this moment that can actually work. Agents talking to people through an endless stream of generated content is the part everyone can already see failing. We should stop judging the first by the second, and we should stop investing in the second at the expense of the first.

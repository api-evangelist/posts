---
published: true
layout: post
title: 'Translating The First Batch Of API Operations Into Real World Capabilities'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/translating-the-first-batch-of-api-operations-into-real-world-capabilities.png
date: 2026-11-25 16:00:00 +0000
author: Kin Lane
tags:
  - Capabilities
  - Operations
  - Business
  - Agents
  - APIs.io
---

APIs.io now indexes more than 1,151,000 API operations across 213,000+ APIs from 43,900+ providers. That is a lot of `POST /api/v1/pa/refunds/create`. It is useful if you are an engineer who already knows what a refund endpoint is and which company you want one from. It is not useful if you run a business and the sentence in your head is "I need to give a customer their money back."

So I have started translating. The first batch is live at [capabilities.work](https://capabilities.work/), and it takes 248,644 of those operations, a little over a fifth of what APIs.io indexes, from 1,926 companies, and puts each one in front of people the way they would actually ask for it.

## What a translated operation looks like

Type "refund a customer" into the search box. The best answer that comes back today is Airwallex, and it does not lead with the path. It leads with "Refund a customer payment," the business capability it belongs to (Payment Processing Management), the questions people ask when they need it ("Can I give money back on a payment I already accepted?"), and the ways they say it. The method, the path and a link to the API on APIs.io are still there, one click down, for whoever ends up wiring it in. Chargebee and others show up as alternatives.

That is the whole idea. The operation is the same operation. What changes is which end of it faces the person asking.

## Where the words come from

Nothing on capabilities.work is authored there. It is a plain-language view of APIs.io, and every layer comes from work we already do on the catalog:

- **Conversational phrasing overlays** turn each operation into the questions and sentences people use for it.
- **Business capability maps** group operations into the 632 capabilities we track, so "Accounts Receivable" or "Payment Initiation" means something to someone who has never read an OpenAPI.
- **Arazzo workflows** become roughly 5,000 multi-step recipes, for the jobs that take more than one call.
- **Application blueprints** answer "what does it take to build an app like this," which is how a lot of people actually start.

When a layer is missing on APIs.io, it is missing on capabilities.work, and the fix goes into APIs.io first, then flows downstream on the next sync. That keeps one source of truth.

## Why only a fifth

Phrasing is the binding constraint. It is easy to have an OpenAPI. It is harder to have every operation in it described in words a business person would recognize, and checked so the words point at the right call. We are working through the catalog in Kin Score order, exemplar first, then strong, then developing, because those are the companies that have done the most work and deserve to be found for it. Today's capability mapping pass alone mapped another 1,091 operations to capabilities and abstained on 452 where the evidence wasn't there, which is the right answer when you are not sure.

## Who it is for

It is for the owner, operator or manager who knows what they need done and doesn't know an API exists for it. Every answer has a "Get me set up" button, because signing up and getting keys is the fiddly part, and a "Send to my developer" button for people who have one. It is also for agents. There is an MCP server at `https://capabilities.work/mcp` with `find_solution`, `get_solution` and `request_setup`, a search API, and an `llms.txt`, so an assistant can do the same translation on someone's behalf.

## What comes next

The other four fifths. Every batch of phrasing we add to APIs.io shows up on capabilities.work the following week, and I'll keep sharing how it is going. If you are an API provider and your operations aren't there yet, the fastest way in is the same as it is for the Kin Score: publish a complete OpenAPI, and tell us what your API is for in plain language. If you run a business, go type what you need into the box and tell me where the answer was wrong. That is how the next batch gets better.

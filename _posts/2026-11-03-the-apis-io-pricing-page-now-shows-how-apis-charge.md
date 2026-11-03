---
published: true
layout: post
title: 'The APIs.io Pricing Page Now Shows How APIs Charge'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-apis-io-pricing-page-now-shows-how-apis-charge.png
date: 2026-11-03
author: Kin Lane
tags:
  - APIs.io
  - Pricing
  - Plans
  - Business Models
  - FinOps
---
The [plans section on APIs.io](https://apis.io/plans/) used to be a list. It was a five megabyte A to Z of every provider we had read a pricing page for, and it was about as useful as that sounds. You could find one company's plans if you already knew its name, but you couldn't learn anything about the market. This week I replaced it with a view of how APIs actually charge, and I wanted to walk through what is there and what I learned getting it right.

## What the page shows now

We have read the pricing pages of 7,203 providers. Of those, 4,311 state a pricing model and 2,892 don't. I think that second number is a finding in its own right. Four out of every ten providers we read don't tell you how they charge in a way a machine can pick up.

Among the ones that do, here is how they charge:

| Pricing model | Share | Providers |
|---|---|---|
| Tiered subscription | 38% | 1,624 |
| Negotiated | 19% | 838 |
| Per call | 15% | 643 |
| Other usage-based | 13% | 542 |
| Per seat | 7% | 294 |
| Flat platform fee | 4% | 161 |
| Free | 2% | 106 |
| Share of transaction | 2% | 103 |

The median entry price across 682 developer APIs is $29 a month, and the median take rate across the 86 providers that charge a share of each transaction is 1.5%. Almost one in five providers wants you to talk to sales.

The page also breaks pricing down by billing unit. The median price per request is $0.00189, per message $0.002, per token $0.000003, and per transaction $0.15. Credits get a count and no price, because every vendor defines a credit differently and averaging them together would be meaningless. Units with fewer than five providers show a count only, and calculated figures assume a plan's quota is fully used. I'd rather show less than show a number that doesn't mean anything.

## By industry and by tag

There are now pricing pages for 13 industries and 32 tags, each one only where at least 20 developer APIs quote an entry price. Most industries default to a tiered subscription, but not all of them. Cybersecurity and identity, and legal and compliance, are mostly negotiated. Blockchain and weather and geospatial lead with per call pricing. Marketing and advertising and legal both sit at a $50 median entry, while databases sit at $10.

The tags are where it gets interesting for me. Web scraping is 72% per call, and data extraction is 61%. Inference, LLM, A2A and Agent-Native all lead with per call pricing too, while the broader AI and MCP tags lead with tiered subscriptions. You can see the shift I have been writing about, from seats to usage to calls and tokens, sitting right there in the tables. Plan pages also have a new compare tiers table showing price, what is included and what overage costs, wherever a provider states enough quotas to compare.

## Correcting our own labels

The part I want to be honest about is the per seat number. When I first looked at the rollup, per seat was 1,005 providers, and that didn't feel right. The pricing model on each plan document is picked by the model that harvests it, and nothing was checking that choice. A $49 a month subscription was labeled per seat when nothing on the page mentions a seat or a user.

So now a per seat label needs a seat-like word in the plan rows to stand. Otherwise it becomes a tiered subscription, or unstated if there are no recurring prices. That moved 800 providers out of per seat, and the page says so right under the table. The correction happens when we read the data, so the source files are untouched. It's word matching, so it will still get some wrong, and per call labels haven't been checked this way yet. I'd rather tell you that than pretend the numbers are cleaner than they are.

The browser at the bottom of the page defaults to pricing we read from the providers' own pages. Another 4,792 documents are unverified API Evangelist sweep output, and you have to tick a box to include them. Same for documents where we found no plans at all.

## Why this matters

I [landed on four plans for APIs.io](https://apievangelist.com/2026/09/01/the-four-plans-i-landed-on-for-apis-io/) back in September, and I've been watching providers like [Pipedrive put a price on every tool call](https://apievangelist.com/2026/09/28/pipedrive-put-a-price-on-every-tool-call/). Pricing is moving from per user to per use to per token, and it is getting harder to track at exactly the moment agents need to read it. An agent choosing between two providers, or deciding whether to switch, can't read a pricing page with a slider and a "contact us" button.

That is what this page is really measuring. Not just what APIs cost, but how much of that is written down where a machine can find it. If you run an API and your pricing is wrong here, or missing, [let me know](https://apis.io/add/) and we'll read it again.

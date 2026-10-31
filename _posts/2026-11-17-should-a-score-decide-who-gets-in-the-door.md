---
published: true
layout: post
title: 'Should A Score Decide Who Gets In The Door'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/should-a-score-decide-who-gets-in-the-door.png
date: 2026-11-17
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Market Dynamics
  - Security Ratings
  - Trust
---
The most provocative thing I heard about the [Kin Score](https://apis.io/rating/) recently came from someone who builds developer tools. They pointed at cyber security, where platforms look at a vendor's products and give them a number. In some markets, if your number is too low, certain buyers simply will not talk to you. They saw a similar business opportunity for API scores.

Only one person brought it up, so I am not calling this a trend. I do think it deserves a serious look, because of what it would mean for everyone involved.

## Why it could happen

The conditions are forming. Buyers want a fast way to shrink a long vendor list. Procurement teams can't read an OpenAPI. And increasingly, an agent is doing the first pass at selection, and an agent is going to prefer what it can read. A gate may not arrive as a formal policy at all. It may just be that nobody shortlists you, and you never find out why.

The market has plenty of room to be sorted. On the [rubric page](https://apis.io/rating/), 41.9% of the catalog is in the minimal band, and only 5.8% is strong or exemplar.

## What would have to be true

I wrote recently that [a listing is not a certification](https://apievangelist.com/2026/10/20/a-listing-is-not-a-certification/), and I still mean it. A score used as a gate carries a lot more responsibility than a score used for learning. If this is going to be used that way, by anyone, a few things must be true:

- **The method must be public.** Every one of the 135 checks in the rubric is published, with its points, and the [rubric is on GitHub](https://github.com/api-evangelist/kin-score). You should be able to work out exactly why you scored what you scored.
- **It must be correctable.** Scorers get things wrong. I have got plenty wrong, and providers have shown me. There has to be a way to dispute a reading, and it has to work.
- **It must be context-aware.** A partner-only API should not be shut out for lacking self-service signup. A single number across every use is the most likely way for this to go badly.
- **It must be improvable.** The value of a gate is that it tells you how to get through. The emerging band exists because those providers can move up with modest, well-targeted work.
- **It must be independent.** The moment you can buy a better number, it is worth nothing.

## What I worry about

Security ratings have critics, and it is worth learning from them before repeating the same mistakes. Outside-in scores can get used well beyond what they can really tell you. Scores can become something to game instead of something to improve. Small companies can get locked out by paperwork when their engineering is fine.

Thin scores also mostly measure thin public surfaces. Some of those are companies with no API at all, and that is fine. A gate should not punish a company for that.

## What to do today, wherever you stand

If you are a provider, assume that something is already sorting you, and [look up how you read](https://apis.io/providers/). If you are a buyer, use scores to ask better questions, and please do not use them as the only reason to say no.

What do you think? Would a gate like this be good for the API economy, or bad for it? [Send me a note](https://apievangelist.com/) or open an issue. I want to hear from people on both sides.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| See a reading and its facets | [`GET /providers/{slug}/rating`](https://apis.io/developer/api/ratings) | `get_provider_rating` | Understanding |
| Read every check | [`GET /ratings/rubric`](https://apis.io/developer/api/ratings) | `get_rating_rubric` | Understanding |
| Filter by a threshold | [`GET /ratings`](https://apis.io/developer/api/ratings) | `find_ratings` | Understanding |

If a score about you is wrong, `report_correction` is free, and `dispute_finding` is one of the [listing operations](https://apis.io/developer/api/your-listing).

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

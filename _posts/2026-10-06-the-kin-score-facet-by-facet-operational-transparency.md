---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Operational Transparency'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-operational-transparency.png
date: 2026-10-06
author: Kin Lane
tags:
  - Kin Score
  - Operational Transparency
  - Rate Limits
  - Change Log
  - Agent Readiness
  - APIs.io
  - APIs
---
This is part six of nine, one facet of the [Kin Score](https://apis.io/rating/) each business day. Yesterday I covered [Access Clarity](https://apievangelist.com/2026/10/05/the-kin-score-facet-by-facet-access-clarity/), which asks whether you can figure out how to get in. Today is [Operational Transparency](https://apis.io/rating/facets/operational-transparency/), which asks a different question: once you are in, does the provider tell you how the API behaves while you depend on it?

It is 13% of the composite. It is nine checks worth 38 points, all about the stuff around the contract that every integrator needs the first time something breaks at two in the morning.

## What it measures

The checks, heaviest first:

- **Rate limits documented** (8 points). Your limits published as data, with at least one limit on record. This is the biggest award in the facet, because undocumented limits are the most common reason an integration works in development and falls over under load.
- **Change log** (6 points). A published change log, so a consumer can see what moved without diffing your spec themselves. I think it is the single most useful operational artifact there is.
- **Status page** (6 points). So someone debugging a failure can tell "the API is down" from "my code is broken" without filing a ticket.
- **Rate limits detailed** (4 points). Three or more distinct limits, which reflects how an API actually tiers and throttles, rather than one blanket number.
- **Security disclosure** (4 points). A route for reporting vulnerabilities. Without one, you are telling a researcher to go public.
- **Deprecation policy** (3 points) and **webhooks advertised** (3 points). How much notice I get before something I depend on goes away, and whether I can react to events instead of polling.
- **GitHub organization or repository** (2 points) and **public roadmap** (2 points). Where your code lives in the open, and where the API is going, not just where it is.

Like every facet, the sub-score is what you earned divided by what applied to you. And the change log and status page are pointers I actually fetch. Since 0.12 a pointer is graded by whether it resolves: live earns full credit, unverified half, confirmed dead nothing. A link to a status page you shut down two years ago no longer counts as having one.

## Where the catalog stands

Across the 27,274 providers scored on 0.23:

- The mean sub-score is **12.5** and the median is **2.6**.
- **12,518 providers, 45.9%, score exactly zero.** Nearly half the catalog publishes nothing I can find about how their API behaves in production.
- **340 providers, 1.2%, score 75 or above.**
- **Two** score a full 100. [Stripe](https://apis.io/providers/stripe/) is one of them, at 100.0 on this facet.

That median of 2.6 is the number I keep coming back to. The long tail here is not companies doing operations badly. It is companies not writing any of it down where someone outside the building can find it.

I want to be honest about what this facet cannot tell you. It checks that a change log exists, not that it is kept current. It checks that a deprecation policy is stated, not that the provider honors it. A status page that has shown all green through three outages scores the same as an honest one. This facet measures disclosure. Whether the disclosure is true is something you learn by integrating.

## Why this matters more with agents

A human developer can read a status page, skim a change log and email support. An agent in the middle of a run cannot do most of that. It needs the operational picture in a form it can read and plan around.

That is why the agent-readiness layer takes this facet a step further. In [The Standards That Make Your Business Agent-Ready](https://apievangelist.com/2026/09/28/the-standards-that-make-your-business-agent-ready/) I laid out the dimensions, and three of them sit right on top of operational transparency: idempotency, a stable error envelope, and **rate-limit signaling**. Documented limits tell an agent the ceiling. Full rate-limit credit on the agent side needs live limit state in the response headers, `RateLimit` or `X-RateLimit-*` or `Retry-After`, because that is what an agent can read mid-run and back off against. A published limit in a docs page is a starting point, not the thing an agent actually uses.

A change log and a stated deprecation policy do the same job over a longer horizon: they let an agent, or the team running one, plan around a breaking change instead of discovering it as a failure.

One change in the [0.23 London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/) touches this territory, and I want to describe it exactly as the changelog does. Under "our derivation is not your documentation" (roadmap#787), the agent-readiness dimensions `idempotency`, `error_semantics` and `rate_limit_signal` earn a documented grade of 0.5 from a provider-level artifact. When every such artifact is one API Evangelist derived, by our own `method:` marker, the grade is derived, at 0.125, and the agent-native gate does not accept it. That moved 354 rate-limit records. A transcription of your own published prose still counts as documented. What I derive is my work, not yours.

## What to do

If you want to move on this facet, here is where I would start:

1. **Publish your rate limits as data, not a paragraph.** Every limit, per plan or tier where they differ. That is the 8-point check plus the 4-point one, a third of the facet.
2. **Put a change log and a status page at stable URLs.** Twelve points together, and both are fetched. Keep them resolving.
3. **Write down your deprecation policy and your security disclosure route.** Seven points, and both are usually one page each. A page telling researchers where to report, and a sentence about notice periods, is a real start.
4. **Send rate-limit headers on every response.** It does not move this facet, but it is what turns documented limits into something an agent can act on.
5. **Mark what you publish as yours.** If the only rate-limit record I have for you is one I derived, the fix is to publish your own.

Every check, its rule and its points are on the [Operational Transparency facet page](https://apis.io/rating/facets/operational-transparency/) on APIs.io.

Tomorrow: Create-or-Update Ergonomics.

---
published: true
layout: post
title: 'Use A Score To Build Your API Roadmap And Not To Chase A Number'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/use-a-score-to-build-your-api-roadmap-and-not-to-chase-a-number.png
date: 2026-11-02
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Roadmaps
  - API Strategy
---
I recently spent a morning listening to a room full of people who run API programs talk about what they would do with the [Kin Score](https://apis.io/rating/). The first use that came up was the one I find most useful: treating the score as an annual planning input. Over the next couple of weeks I am going to work through each use I heard, one post a day, starting here.

The approach is simple. One team took everything on their developer portal, ran it through a full review, and picked out the hotspots. Those hotspots became a good chunk of their roadmap for the year.

## An example of reading the breakdown

Take [Sinch](https://apis.io/providers/sinch/) on APIs.io. It scores 71.5, which puts it in the exemplar band, and only 1.5% of the catalog is there. The composite is the least interesting thing on the page. The facets are where the planning happens:

- Developer Ergonomics: 80
- Discoverability: 82
- Operational Transparency: 84
- Contract Quality: 71
- Access Clarity: 50
- Regulatory Posture: 39
- Contract Governance: 22

If I were on that team, I would not spend next year polishing discoverability. I would ask whether Access Clarity and Contract Governance are worth moving, and what moving them would cost. That is a roadmap conversation with specifics in it. These numbers come from the public provider pages on APIs.io, most of them scored on October 17, 2026. They will move, so click through for the current reading.

## You do not want to win every facet

The smartest thing I heard was a team saying they deliberately do not want to score well everywhere. Some of their APIs exist for one enterprise customer under a contract. Those APIs are not going to have self-service signup and public pricing, and they should not. Losing points there is a decision, not a defect.

That is the difference between using a score and chasing one. I would rather see a team write down that they are accepting a low Access Clarity score on a partner-only API, and why, than see them publish a pricing page nobody needs in order to pick up points.

## How I would run it

1. Look up your company on [APIs.io](https://apis.io/providers/). Reading a single provider page costs nothing and needs no account.
2. Open the breakdown and sort the gaps into three piles: fix this year, fix later, and accepted on purpose.
3. Read the [rubric](https://apis.io/rating/) for the fix-this-year pile. Every check is listed with the points it awards, so you can see the exact artifact that is missing.
4. Put those artifacts on the roadmap, and look again next quarter.

The output is not a higher number. It is a short list of work, with reasons, that you can defend when somebody asks why you chose it.

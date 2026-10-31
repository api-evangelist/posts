---
published: true
layout: post
title: 'Scan A Whole Sector Before You Trust Your Sense Of It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scan-a-whole-sector-before-you-trust-your-sense-of-it.png
date: 2026-11-10
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Banking
  - Accounting
  - Regulation
  - Market Research
---
One group I talked with recently spent their time looking at companies across banking and accounting rather than at their own. They came away with two observations: the companies they looked at mostly sat in the developing band, and the weight on each criterion might need to vary by industry. Both are worth checking against the whole catalog.

## What the sector looks like

APIs.io has a free ranked page for each tag, so you can do this in a couple of minutes. Here are [Banking](https://apis.io/tags/banking/) and [Accounting](https://apis.io/tags/accounting/) today:

| Band | Banking (581 providers) | Accounting (242 providers) |
|---|---|---|
| Exemplar | 12 | 5 |
| Strong | 24 | 9 |
| Developing | 81 | 48 |
| Thin | 106 | 51 |
| Emerging | 153 | 84 |
| Minimal | 204 | 45 |

If you sample a handful of the companies you already know, developing looks typical. Across all of them, more than three quarters of banking sits below developing. Both are true. The names you think of first are not the sector, and that is why I like scanning the entire list.

The top of each list is also instructive. In banking you find [Uphold](https://apis.io/providers/uphold/) at 79.2, [Moov](https://apis.io/providers/moov/) at 74.4 and [Klarna](https://apis.io/providers/klarna/) at 73.6, ahead of long-established institutions such as [Citi](https://apis.io/providers/citi/) at 61.4 and [Barclays](https://apis.io/providers/barclays/) at 57.9, though those two are strong and well above most of the field. In accounting, [Xero](https://apis.io/providers/xero/) leads at 77.4. The tags are broad, and a crypto company and a global bank are different things, so treat this as a starting point. Tags also count companies by how they classify themselves.

## Should the weights change by industry?

Yes, to a degree, and part of this already exists. The [Kin Score](https://apis.io/rating/) has six facets that apply to everybody and conditional ones that switch on only where they apply, including Regulatory Posture for regulated industries. A bank is asked questions that a weather API is not.

The harder part of the question is about priorities rather than applicability. Should a bank care more about security and less about self-service signup than a developer tool does? Probably. When the score is used in-house, the framework can be adapted to those priorities. For the public number I keep one rubric so that readings stay comparable, and you can apply your own weights to the published facets whenever you like.

## Try this for your sector

1. Open your [tag page](https://apis.io/tags/) and write down the band counts.
2. Read the top five, particularly any you have never heard of.
3. Find where your company sits, and which companies are just above you.
4. Ask which facets matter most in your industry, and re-rank with those.

You may find your real competition, for agents at least, is not who you thought it was.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Read the tag | [`GET /tags/{slug}`](https://apis.io/developer/api/tags) | `get_tag` | Free |
| List its members | [`GET /providers`](https://apis.io/developer/api/providers) | `find_providers` | Free |
| Re-rank by the facet you care about | [`GET /ratings`](https://apis.io/developer/api/ratings) | `find_ratings` | Understanding |
| Find artifact gaps across an industry | [`GET /gaps/industry/{slug}`](https://apis.io/developer/api/synthesis) | `industry_gap_analysis` | Influence |

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

---
published: true
layout: post
title: 'Benchmark Your APIs Against Competitors You Did Not Know Were Looking'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/benchmark-your-apis-against-competitors-you-did-not-know-were-looking.png
date: 2026-11-09
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Competitive Analysis
  - Benchmarking
  - SMS
---
One of my favorite moments in a recent conversation was someone discovering that APIs they are responsible for already had a score. They had never heard of the [Kin Score](https://apis.io/rating/). They looked up their company at the table, recognized their own APIs, and said they were going to go back, compare against their competitors, and use it while building some new services.

That is worth sitting with. Your APIs are being read and compared whether or not you asked. Increasingly it is agents doing the reading, on behalf of somebody choosing a vendor.

## Example: two scores that look the same

Here is the kind of comparison I would do, using SMS, where the [tag page on APIs.io](https://apis.io/tags/sms/) ranks 171 providers.

| | [Sinch](https://apis.io/providers/sinch/) | [Vonage](https://apis.io/providers/vonage/) |
|---|---|---|
| **Kin Score** | 71.5 | 71.3 |
| **Agent Readiness** | 56 | 41 |
| Contract Quality | 71 | 73 |
| Developer Ergonomics | 80 | 91 |
| Access Clarity | 50 | 45 |
| Operational Transparency | 84 | 100 |
| Contract Governance | 22 | 22 |
| Discoverability | 82 | 82 |
| Regulatory Posture | 39 | 21 |

Going by the headline, these two are tied. The facets show they are not the same at all. One is ahead on ergonomics and operational transparency, the other on regulatory posture and agent readiness. And they share the same soft spot in governance, which may tell you something about the category. These numbers come from the public provider pages on APIs.io, most of them scored on October 17, 2026. They will move, so click through for the current reading.

Then look at the top of the tag. [Twilio](https://apis.io/providers/twilio/) is at 91.6 and [Telnyx](https://apis.io/providers/telnyx/) at 86.1. They show what the category leaders have decided is worth publishing.

## How to do it for your own company

1. Find your [tag](https://apis.io/tags/) and your direct competitors. Provider pages and tag rankings are free to read.
2. Compare facet by facet, and ignore the composite for now.
3. Open the competitor's artifacts. If they beat you on pricing clarity, you can read exactly what they published. That is the nice part of public APIs.
4. Mark what you actually want to match. Remember that winning every facet is not the goal.

## Don't overreact

A similar score to your rival can feel good. One person I spoke with said just that, while being clear it was not yet good enough. The score only sees what is public, so a competitor who sells differently may be right to look different. A score also says nothing about whether your product is better.

But if you are building new services right now, like the person who sparked this post, this is the cheapest moment to use it. It costs almost nothing to design in what the leaders in your category already publish, and a lot more to retrofit it.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| See who is in your category | [`GET /tags/{slug}`](https://apis.io/developer/api/tags) | `get_tag` | Free |
| Compare side by side | [`GET /compare`](https://apis.io/developer/api/synthesis) | `compare_providers` | Understanding |
| Rank a category by a facet | [`GET /ratings`](https://apis.io/developer/api/ratings) | `find_ratings` | Understanding |

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

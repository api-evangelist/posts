---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Discoverability'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-discoverability.png
date: 2026-09-29
author: Kin Lane
tags:
  - Kin Score
  - Discoverability
  - APIs.json
  - llms.txt
  - Agent Readiness
  - APIs.io
  - APIs
---
Yesterday I published [Kin Score 0.23, the London release](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/), and most scores in the catalog moved. Over the next nine business days I am going to walk through the [Kin Score](https://apis.io/rating/) one facet at a time: what it measures, why I think it matters, where the catalog stands on 0.23, and where it is headed. One facet a day, finishing with Regulatory Posture on Friday, October 9th.

I am starting with [Discoverability](https://apis.io/rating/facets/discoverability/), because it comes first in the order of operations. It asks one question: can your API be found and understood from machine-readable metadata alone, before anyone opens your website?

## What it measures

Discoverability is 10% of the composite. In 0.23 it is 15 checks worth 60 points, up from 12 checks and 54 points, so if you have the facet page's old totals in your head, set them aside. Most of the weight sits on an [APIs.json](https://apisjson.org) index and what it says about you:

- **You publish an apis.yml index** (10 points). The single biggest check. It is the difference between describing yourself and being described by me from the outside.
- **You host it on your own domain** (4 points). Existing is one thing. Owning it is another.
- **A real description and at least five tags** (5 points each). Enough for a human or an agent to decide whether you are relevant, and enough for you to land in the right industries and areas instead of sitting unclassified.
- **Every API has a human URL and a base URL** (5 points each). An entry with no docs link is a name with nowhere to go. A localhost base URL is a spec that was never pointed at production.
- **A `.well-known` surface** (6 points). An RFC 9727 api-catalog, a security.txt, or an OAuth protected-resource document. This is the address an agent tries first, and it is the one signal a marketing site cannot fake.
- **An llms.txt you wrote** (4 points). Young and unratified, but it is the provider saying in plain text what a language model should read.

The rest is housekeeping: a logo, a maintainer email, dates, and three or more APIs indexed.

## What changed in London

Four changes in 0.23 land in this facet:

- **Can an agent address your MCP server?** A new 4-point check grades the endpoint itself. An addressable URL earns full credit, a documented one half, and a templated URL with a placeholder an agent has to guess earns nothing. If you do not run an MCP server, the check does not apply to you.
- **Newsroom and leadership pages** are now recognized pointers, worth one point each, the same as a blog pointer. For leadership I score only that the page exists; no names are read.
- **A pointer has to lead somewhere.** A repo-relative pointer only earns credit if the file is actually there.
- **Self-hosting on a catalog host** is now recognized when the host is also your own domain.

In the same pass I removed marketing-site base URLs from 3,035 API records on 1,583 providers. If your only "base URL" was your homepage, the base-URL check went down, and it should have.

## Where the catalog stands

All 27,274 providers scored on 0.23 are scored on this facet. The mean is 55.3 and the median is 55.4. 1,137 providers, 4.2%, score zero. 2,030, 7.4%, score 75 or better. Nobody scores 100.

Discoverability is the facet almost everyone gets partial credit on (contract quality, by comparison, averages 16.2), and I want to be honest about why. For most providers in the catalog, the APIs.json index these checks read is one I built from the outside, not one they published. That is useful to a consumer, but it is my work, not the provider's, which is why self-hosting is its own check.

This facet has a history of flattering people. Back in August it averaged 84.6 across 252 organizations in eight markets, with nobody at zero. Then I found that the `.well-known` check was crediting the existence of our probe record rather than an actual document served at the path. 4,396 providers lost that credit when it was fixed. Today's lower mean is closer to the truth.

Stripe is a useful example of what this facet does and does not say. It scores 81.6 overall, 100 on operational transparency and 94.6 on developer ergonomics, and 50.0 on discoverability ([Stripe on APIs.io](https://apis.io/providers/stripe/)). That is not a statement about the quality of Stripe's API. It says Stripe does not describe itself in the machine-readable places this facet reads. An agent starting from nothing notices.

## The bigger picture

Discoverability is the front door for agents. The [standards that make your business agent-ready](https://apievangelist.com/2026/09/28/the-standards-that-make-your-business-agent-ready/) come after this: an agent has to find you before your OpenAPI, your error envelope or your OAuth metadata can help it. The RFC 9727 api-catalog shows up here as part of the well-known check, and it is also its own agent-readiness dimension, where only 2.2% of the catalog earns any credit.

The provenance work in 0.23 matters here as well. The llms.txt check only counts one you wrote, and the self-hosting check only counts an index on your own domain. Credit what you publish, not what I derive for you. Plenty of APIs.json indexes start out generated by a script and finished by a person. That is still your work: mark it as authored, and it earns full credit.

## What to do

1. **Take the index I built for you and host it yourself.** Fix what is wrong and serve it from your own domain. That earns the self-hosting check, and it means every other check is reading something you stand behind.
2. **Give every API a docs URL and a real production base URL.** Not your homepage and not localhost.
3. **Serve something at `/.well-known/`.** A security.txt is the easiest start. An api-catalog is what agents actually look for.
4. **Write your own llms.txt.** Point it at the pages you want a model to read.
5. **If you run an MCP server, publish its full URL.** No placeholders.

Every check, rule and point value is on the [Discoverability facet page](https://apis.io/rating/facets/discoverability/), and I read every correction that comes in.

Tomorrow: Contract Quality.

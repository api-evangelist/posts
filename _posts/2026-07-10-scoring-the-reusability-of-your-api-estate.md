---
published: true
layout: post
title: Scoring the Reusability of Your API Estate
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scoring-the-reusability-of-your-api-estate.png
date: 2026-07-10
author: Kin Lane
tags:
  - API Commons
  - Reuse
  - Discovery
  - APIs.json
  - API Governance
  - Tools
---
I have been working my way through the [governance and discovery tools I keep building under API Commons](https://apicommons.org/tools/), writing one up a day, and today's is the one that answers a question almost every organization I talk to is quietly embarrassed to ask out loud: how reusable are the APIs we already have? Most teams cannot answer it because the honest version requires looking across every group, every gateway, and every repository at once — which nobody has time to do — so they build the same thing again. [API Reusability](https://reusability.apicommons.org) is my attempt to make that answerable in a browser tab, with nothing leaving the page and your tokens kept in local storage.

It works in three moves that match how the problem actually presents itself. First it discovers evidence of APIs from wherever they live — the APIs.io catalog with no key at all, code search across GitHub, GitLab, and Bitbucket with your own token, and a HAR upload that will synthesize an evidence-based OpenAPI from real captured traffic, reading the paths, parameters, headers, and response schema out of what your services are actually doing. For the systems a browser cannot safely reach — AWS API Gateway, Kong, Tyk, Confluence — there is a small local helper CLI that pulls those specs into a bundle you import. Then it indexes everything as OpenAPI into a single APIs.json 0.21 file, which becomes the durable, re-importable reusability index for your org rather than a report that goes stale the moment you close the tab.

The scoring is where I tried to be honest instead of clever. Reusability gets measured on two axes plus a duplication check. The design axis asks how reusable the interface itself is — operationIds, documented operations and parameters, response and error schemas, security, servers, tags, and weighted highest of all, schema reuse through `components` and `$ref`, because an API that reinvents its own types is not one anyone else can build on. The metadata axis asks how discoverable and adoptable the thing is — description, documentation, a linked OpenAPI, support, terms, license, and companion artifacts like MCP or plans. The duplication check looks across APIs for repeated paths and near-identical schemas and hands you the consolidation opportunities directly.

Those three roll up into a composite grade from A to F, and the weights are yours to set. Your organization's definition of reuse gets published on a Rubric tab instead of left as some black box I decided for you — if your teams care more about metadata discoverability than interface polish, tune the weights and the whole estate re-grades against what you actually believe. I also added an intent search, a plain "what are you trying to build?" box that surfaces reuse candidates before a team goes down the rabbit hole and builds from scratch, and a reuse ledger to record when a team actually adopts an existing API, because reuse you cannot report is reuse nobody will believe happened.

That is the tool. Discover the APIs you have, inventory them as a portable index, and score how much of your estate is genuinely reusable versus quietly duplicated — all client-side, all yours. Go [try it](https://reusability.apicommons.org), and if the grade stings a little, that is the point. This is one more of the [API Commons tools](https://apicommons.org/tools/) I am walking through this stretch, and I will have another for you tomorrow.

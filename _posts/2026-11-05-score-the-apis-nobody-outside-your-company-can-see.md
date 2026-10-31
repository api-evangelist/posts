---
published: true
layout: post
title: 'Score The APIs Nobody Outside Your Company Can See'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/score-the-apis-nobody-outside-your-company-can-see.png
date: 2026-11-05
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Internal APIs
  - On-Premise
  - API Governance
  - Agent Readiness
---
People assume the [Kin Score](https://apis.io/rating/) is only for public APIs, because that is what they see on APIs.io. It is one of the more common misunderstandings, and it came up again recently when people asked me how to assess internal APIs, and whether it could be self-hosted as a quality gate.

The answer to both is yes. The rubric does not care whether the API is public. It cares whether the artifacts exist and whether they are any good. That applies just as well behind your firewall, and it can be adapted to your priorities.

## Why internal matters more now

One person told me their organization is already looking at agent readiness across all of its APIs, not only the external ones, with the expectation that internal APIs will end up exposed. I think that is the right instinct. Agents do not respect the old line between internal and external very well, and an internal API without a contract, clear auth or defined retries is a problem as soon as an agent is pointed at it.

Most organizations also cannot answer the first question: what APIs do we have? The answer is scattered across Git repositories, wiki pages, gateways and old portals. You cannot score what you cannot find, so the discovery step may be the bigger win.

## What this looks like

[APIs.io On-Premise](https://apis.io/on-premise/) is the same machinery that profiles the public catalog, running inside your walls on a model you host yourself. It is early, and I am working with design partners to figure out the details. The flow goes like this:

1. **Point it at where your APIs live.** Think GitHub, Confluence, your gateway and a few other services.
2. **Aggregate what already exists.** It collects the OpenAPIs, AsyncAPIs, JSON Schemas and other artifacts it can find.
3. **Assemble and publish a static build,** nightly or weekly, which is the same way APIs.io itself is built.
4. **Score it,** using the open [Kin Score rubric](https://github.com/api-evangelist/kin-score) with weights that suit you.

Our current setup is a single Mac with 128 GB of memory, a MacBook Pro or a Mac Studio, because the model needs that much room. Nothing needs to leave your network. The software is open source, and any cost is the hardware plus my time if you want help setting it up. My goal is that your team can run it without depending on me.

## An example you can look at today

The [estates pages on APIs.io](https://apis.io/estates/) show the public version of the problem. [Microsoft](https://apis.io/providers/microsoft/)'s [estate](https://apis.io/estates/microsoft/) has 197 provider profiles, with rated surfaces running from 81.8 to 0.0. If that spread exists on the public side, where everybody can see it, imagine what your internal side looks like.

## Quality gate or map?

I would start with a map. Run it, see what you have, and agree on what good looks like for your teams. Turning it into a hard gate before anybody trusts the reading just gets you arguments. Once it is trusted, you can start asking new APIs to clear a bar, with different bars for different kinds of APIs, since a partner API does not need what a public one does. I will cover the pipeline side of this in tomorrow's post.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Read the rubric to adapt | [`GET /ratings/rubric`](https://apis.io/developer/api/ratings) | `get_rating_rubric` | Understanding |
| Benchmark internal results against public leaders | [`GET /ratings`](https://apis.io/developer/api/ratings) | `find_ratings` | Understanding |
| Study the public version of the problem | [`GET /estates/{slug}`](https://apis.io/developer/api/estates) | `get_estate` | Understanding |

Those calls read the public catalog. The on-premise install is a separate deployment and publishes its own static site, so the internal readings live with you.

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

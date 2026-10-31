---
published: true
layout: post
title: 'What An Acquisition Target Claims And What The Score Says'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-an-acquisition-target-claims-and-what-the-score-says.png
date: 2026-11-12
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Acquisitions
  - Due Diligence
  - Estates
---
A consultant told me recently that their firm is always looking for organizations doing something interesting that could be folded into what they do. They thought that comparing what is on the package with what the [Kin Score](https://apis.io/rating/) says would be very interesting to show the acquiring team.

I agree, and it is a use I had not put much thought into until it was described to me that way. A target's deck says "API-first platform." A public reading says what is actually out there for anybody to find.

## The questions it can help with

Before any data room opens, the public surface can help answer a few things:

- **Do they have the APIs they claim?** Is there a contract, or only a page describing one?
- **Is it agent-ready, if they say so?** Compare the AI claims with the Agent Readiness score.
- **How does it fit with us?** Do they use the same standards, auth and conventions, or is this a costly integration?
- **Is it a platform or a website?** The band descriptions on the [rubric](https://apis.io/rating/) are good at separating these.

## What happens after the deal

The more interesting part may be what acquisitions look like over time, which is what the [estates section of APIs.io](https://apis.io/estates/) is starting to show. It joins the provider profiles that roll up to one parent company, and ranks them by spread, the distance between that company's best API surface and its weakest. A high spread means the experience an agent gets depends on which door it walked through.

Some examples:

- **[Microsoft](https://apis.io/estates/microsoft/)** has 197 profiles and a spread of 81.8 points. [GitHub](https://apis.io/providers/github/), which it bought in 2018, remains one of its highest-rated surfaces at 78.8. The blended estate rating is 31.3.
- **[Broadcom](https://apis.io/estates/broadcom/)** has 32 profiles, including [VMware](https://apis.io/providers/vmware/) at 51.3 and Symantec. The spread is 52.2 and the blended rating is 11.2.
- **[Amazon](https://apis.io/estates/amazon/)** has 222 rated profiles and a spread of 79.0.

These numbers include many old and small profiles, so the average is the least useful one, and the estate pages say so themselves. Different companies treat their acquisitions in different ways. Some harmonize, and some leave them alone on purpose. Neither one is automatically wrong. What the estates show is how that decision looks from the outside.

## Where I am still working

I am working on how to roll up an estate fairly, and how to read it over time. What does a company's surface look like three months after a deal, or six months? Does the acquired API get better, get worse, or simply disappear? I do not have good answers yet, but I am watching.

## Use it as a first pass

A public score is not due diligence. It cannot see the code, the customers or the contracts, and a target with strong private APIs could read lower than it deserves. What it gives you is a cheap, neutral first look, and a list of specific questions to bring to the people across the table.

If you try this on a real deal, I would love to hear, in general terms, whether the first read held up.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Check whether a provider sits in an estate | [`GET /providers/{slug}/estate`](https://apis.io/developer/api/estates) | `get_provider_estate` | Free |
| Get a target's reading | [`GET /providers/{slug}/rating`](https://apis.io/developer/api/ratings) | `get_provider_rating` | Understanding |
| Browse estates | [`GET /estates`](https://apis.io/developer/api/estates) | `find_estates` | Understanding |
| Read a full estate roster | [`GET /estates/{slug}`](https://apis.io/developer/api/estates) | `get_estate` | Understanding |
| Watch it after the deal | [`GET /providers/{slug}/rating/history`](https://apis.io/developer/api/ratings) | `get_rating_history` | Understanding |

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

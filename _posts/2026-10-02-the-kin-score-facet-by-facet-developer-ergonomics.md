---
published: true
layout: post
title: 'The Kin Score, Facet By Facet: Developer Ergonomics'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-kin-score-facet-by-facet-developer-ergonomics.png
date: 2026-10-02
author: Kin Lane
tags:
  - Kin Score
  - Developer Experience
  - SDKs
  - Documentation
  - Onboarding
  - Agent Readiness
  - APIs.io
  - APIs
---
This is part four of nine, one [Kin Score](https://apis.io/rating/) facet every business day. Yesterday I covered [Contract Governance](https://apievangelist.com/2026/10/01/the-kin-score-facet-by-facet-contract-governance/), which is about whether your contract holds still long enough to build on. Today is [Developer Ergonomics](https://apis.io/rating/facets/developer-ergonomics/), and the question it asks is simple: how easy is it to get started?

It is worth 20% of the composite, and it is the facet most people mean when they say "developer experience."

## What it measures

Thirteen checks, 42 points. Every one of them asks whether you publish a particular kind of thing a developer needs on the way from curiosity to a first successful call. The ones carrying the most weight:

- **A getting started guide, 5 points.** An explicit quickstart. It outscores the API reference on purpose, because it is the artifact most tied to someone actually reaching a first call.
- **Authentication documented as its own topic, 5 points.** Auth is where integrations stall. If it is buried in a general guide, that is where developers quit.
- **A developer portal, 4 points, and documentation, 4 points.** One front door, and narrative docs that explain how the thing works.
- **SDKs, 3 points for one and 4 more for three or more.** One client library means nobody has to write HTTP plumbing first. Three languages or more is evidence you are serving a real audience and not just your own favorite stack.

The rest fill in the path: an API reference (3), a CLI (3), a console or sandbox where you can try things without wiring up a project (3), an Agent Skill (3), a Postman collection (2), a support channel (2), and a blog (1).

Two of those checks are graded by who made the artifact. This matters, because a lot of the Postman collections and agent skills in the catalog are mine. In 0.18.3 I found 1,623 providers earning the Postman check with a collection API Evangelist generated from their OpenAPI. Back in 0.6 I found that 2,018 of 2,274 skill sets were ones we generated. Our work is useful, but it is not what the provider published, so it earns derived credit. Then in [0.23](https://apievangelist.com/2026/09/28/kin-score-0-23-the-london-release/), anything with no mark of authorship dropped from full credit to 0.90, and that applies to both of these checks.

One housekeeping note. The facet's description still mentions an MCP server, but there is no MCP check among the thirteen. MCP servers are graded in the agent readiness layer, and 0.23 added `mcp_endpoint_discoverable` to Discoverability, which I covered on Tuesday.

## Where the catalog stands

On 0.23.0 this facet is scored on all 27,274 providers:

- The mean sub-score is 21.2 and the median is 9.5.
- 6,428 providers, 23.6%, score exactly zero.
- 627 providers, 2.3%, score 75 or above.
- One provider scores 100: [RudderStack](https://apis.io/providers/rudderstack/).

Compared with the contract facets, this looks healthy. Contract Quality and Contract Governance each score zero on 64.5% of the catalog, so ergonomics has more than twice as many providers on the board (76.4% against 35.5%). That makes sense. A company can put up a docs page and a blog long before it publishes a real OpenAPI.

The median tells the other half of the story, though. A median of 9.5 out of 100 means the typical provider has a docs link and maybe a support page, and nothing else. The gap between "we have docs" and "you can get from zero to a working call in ten minutes" is where most of the catalog lives.

## What the numbers cannot tell you

Every check in this facet asks whether a thing exists. None of them read the thing. I know you have a getting started guide. I do not know whether it works, whether it is current, or whether step three assumes an account type you do not have. The changelog says this plainly: only Contract Quality has checks that parse a document, and this facet is satisfiable entirely by declaration. A provider can score perfectly here by pointing at the right pages.

What I have deliberately not folded in is access. I have been asked to dock gated APIs here. In both real estate and energy, though, the best-contracted APIs sat behind licence agreements and accreditation, not self-serve signups. Docking them here would under-rate the best-engineered APIs in those sectors. Access belongs on its own axis, and Access Clarity is where it gets scored.

## The bigger picture

Everything in this facet was designed for a human developer, and it all carries over to agents with only small changes. A getting started guide is a sequence an agent can follow. A separate authentication page is the difference between an agent that gets a token and one that gives up. An Agent Skill is a getting started guide written for a model. A Postman collection is a runnable map. The facet is quietly becoming the agent onboarding score, which is why I care so much about who wrote each artifact.

The next release is Stockholm, 0.24.0, on October 13th. A lot of real SDKs, collections and skills are laid down by a script and finished by a person. The rubric will not grow a special category for that. If you finished it, mark it as authored, with the same markers every provider already has, and it earns first-party credit.

## What to do

1. **Write the quickstart and the auth page first.** They are ten of the 42 points, and they are where developers either succeed or leave.
2. **Mark your own work.** If you publish a Postman collection or an Agent Skill, stamp authorship on it. The [rating page](https://apis.io/rating/#provenance) shows how, and it gets the 10% back.
3. **Publish your own collection and skill instead of leaning on ours.** Ours earn derived credit. Yours earn full credit.
4. **Get to three SDK languages.** It is 7 points total, and it tells developers you meant it.
5. **Put a console or sandbox in front of the credential step.** Letting someone try the API before they commit to it is the cheapest conversion win there is.

Every check, its rule and its points are on the [Developer Ergonomics facet page](https://apis.io/rating/facets/developer-ergonomics/).

Monday: Access Clarity.

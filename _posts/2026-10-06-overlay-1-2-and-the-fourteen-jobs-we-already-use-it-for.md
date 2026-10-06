---
published: true
layout: post
title: 'Overlay 1.2, And The Fourteen Jobs We Already Use It For'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/overlay-1-2-and-the-fourteen-jobs-we-already-use-it-for.png
date: 2026-10-06
author: Kin Lane
tags:
  - OpenAPI
  - Overlays
  - Arazzo
  - Context Engineering
  - Specifications
  - Agents
  - APIs
---
The OpenAPI Initiative released [Overlay 1.2.0](https://spec.openapis.org/overlay/v1.2.0.html) on September 22nd. I sat in on the release call, where Lorna Mitchell walked the editors through the steps, one branch and one pull request at a time, and mentioned she wanted it out the door before APIDays London so she could brag about it there. She did, and after a week of talking to people in London about it, I want to do two things: say what changed, and lay out every job we already use Overlays for, because the spec is still far less known than it deserves to be.

## What changed in 1.2

Overlay is a small specification. An Overlay document is a list of actions, each one a JSONPath target plus an `update` to merge or a `remove`, applied to an OpenAPI document you may not own. Version 1.2 adds two things:

- **Reusable actions.** A new `components.actions` section lets you define an action once and reference it from the `actions` array, so a shared change can be written one time and applied to different targets. If you have ever maintained an Overlay with the same `update` block pasted under twenty targets, this is for you.
- **Self-identification.** A new `$self` field gives an Overlay its own URI, the rules for `extends` and base URI resolution are clearer, and document-identifying fields such as `$self` and `extends` can no longer contain fragments. That makes an Overlay addressable and composable in the same way OpenAPI 3.2 made a contract addressable.

The [upgrade guide](https://learn.openapis.org/upgrading/overlay-v1.1-to-v1.2.html) covers the move from 1.1. It is additive, and that is the point of a spec this size: it stays small enough that you can hold the whole thing in your head.

## The fourteen jobs

Over the summer I wrote a post for each way we apply Overlays across the [API Evangelist](https://overlays.apievangelist.com/) and APIs.io work. Here is the whole series, because together they make the case better than any one of them:

1. [Adding tool-specific content without polluting the spec](https://apievangelist.com/2026/07/12/openapi-overlays-for-adding-tool-specific-content/)
2. [SDK generation prep: fixing a spec before codegen](https://apievangelist.com/2026/07/15/openapi-overlays-for-sdk-generation-prep/)
3. [Separation of concerns when you do not own the spec](https://apievangelist.com/2026/07/18/openapi-overlays-for-separation-of-concerns/)
4. [Splitting public and internal documentation](https://apievangelist.com/2026/07/21/openapi-overlays-for-public-vs-internal-docs/)
5. [Visual authoring without hand-writing JSONPath](https://apievangelist.com/2026/07/24/openapi-overlays-for-visual-authoring/)
6. [Batch and reusable modifications across many specs](https://apievangelist.com/2026/07/27/openapi-overlays-for-batch-and-reusable-modifications/)
7. [Stripping internal endpoints before you publish](https://apievangelist.com/2026/07/30/openapi-overlays-for-stripping-internal-endpoints/)
8. [Governance as an artifact, not enforcement](https://apievangelist.com/2026/08/02/openapi-overlays-for-governance-as-an-artifact/)
9. [Environment promotion across dev, staging and production](https://apievangelist.com/2026/08/05/openapi-overlays-for-environment-promotion/)
10. [Monetization and plan tiering from one spec](https://apievangelist.com/2026/08/08/openapi-overlays-for-monetization-and-plan-tiering/)
11. [MCP and AI-agent enrichment](https://apievangelist.com/2026/08/11/openapi-overlays-for-mcp-and-ai-agent-enrichment/)
12. [Deprecation and migration choreography](https://apievangelist.com/2026/08/14/openapi-overlays-for-deprecation-and-migration-choreography/)
13. [Compliance and redaction profiles](https://apievangelist.com/2026/08/17/openapi-overlays-for-compliance-and-redaction-profiles/)
14. [Brownfield correction without upstream access](https://apievangelist.com/2026/08/20/openapi-overlays-for-brownfield-correction/)

There are two more since then that matter most for where this is going. [Test fixtures and mock generation](https://apievangelist.com/2026/08/23/openapi-overlays-for-test-fixtures-and-mock-generation/) is the fifteenth job. And [Overlays That Speak](https://apievangelist.com/2026/09/24/overlays-that-speak-conversational-phrasing-for-every-operation/) is the one I am most excited about: an Overlay that adds, to every operation, the questions people actually ask an LLM and the instructions they give an agent, in plain language, without touching the provider's contract.

Overlays also carry weight in the [Kin Score](https://apis.io/rating/). A published Overlay is one of the six checks in the [Contract Governance](https://apievangelist.com/2026/10/01/the-kin-score-facet-by-facet-contract-governance/) facet, because a repeatable, versioned transformation of your own contract is what a spec pipeline looks like from the outside.

## Where the catalog actually is

I should be honest about my own usage, because it tells you what adoption looks like in practice. Across the APIs.io catalog, 3,881 providers carry an `overlays/` folder, about 28,800 Overlay documents in all, and more than half of those are the conversational phrasing overlays, which now cover 382 providers. Nearly all of them were written by my pipeline, not by the providers, and nearly all of them still declare `overlay: 1.0.0`. So this release is a work item for me as much as for anyone: migrate to 1.2, mark what we authored, and use `components.actions` to collapse the repetition that is sitting in those files today. If I am going to score providers on publishing Overlays, mine should be current.

## Why this is the context layer

The reason I keep coming back to Overlays, and the reason I pushed it in every conversation I had in London, is that it is the cleanest answer I know to a question everyone in AI is now asking in different words: where does the context live? A contract tells an agent what an API does. It does not tell the agent when to call it, what the operation is called in the language a person uses, what it costs, which operations are safe to retry, or what it is forbidden from doing without a human. All of that is context, and most of it belongs to someone other than whoever owns the contract. Overlays let that context be layered on, versioned, attributed and composed, without a single edit to the source.

[Arazzo](https://spec.openapis.org/arazzo/latest.html) is the other half. If Overlays are how you add meaning to individual operations, Arazzo is how you describe the sequence: which calls happen in what order, what passes between them, and what success looks like. Put the two together over an OpenAPI contract and you have most of what people are calling context engineering, as portable, machine-readable documents rather than prompt text hidden in somebody's application. I wrote in August that [context engineering is governance](https://apievangelist.com/2026/08/11/context-engineering-is-governance/). This is what the governance artifacts look like. Arazzo has its own work ahead, [functions are still a proposal](https://apievangelist.com/2026/09/22/arazzo-functions-are-still-a-proposal-and-that-is-the-point/) and [nobody has checked that two runners agree](https://apievangelist.com/2026/09/23/two-arazzo-runners-should-agree-and-nobody-has-checked/), but the shape is right.

The spec itself is a few pages. The team that releases it is a handful of volunteers. Go read 1.2, pick one of the fourteen jobs above that you are doing by hand today, and try it as an Overlay instead. Then tell the working group what you found.

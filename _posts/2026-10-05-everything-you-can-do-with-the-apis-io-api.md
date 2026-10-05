---
published: true
layout: post
title: 'Everything You Can Do With the APIs.io API'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/everything-you-can-do-with-the-apis-io-api.png
date: 2026-10-05
author: Kin Lane
tags:
  - APIs.io
  - APIs
  - OpenAPI
  - Onboarding
  - Agents
  - Kin Score
---
Someone asked me this week for a complete list of everything you can do with the [APIs.io API](https://apis.io/developer/). It is a fair question, and the honest way to answer it is to read the contract rather than my memory of it. So that is what I did. The [APIs.io OpenAPI](https://raw.githubusercontent.com/api-evangelist/apis-io/refs/heads/main/openapi/apis-io-v1-openapi.yml) is at version 1.11.0 and describes **164 operations**. Here is every one of them, grouped by what you would actually be trying to do.

While I was at it I found two old contracts sitting in a repository, describing a three-operation search API and a GitHub-token sign-in flow that APIs.io retired long ago. Nothing live used them, but anyone or anything browsing that repository could have mistaken them for the real thing, so they are gone. The contract linked above is the one, and it is the one [/.well-known/api-catalog](https://apis.io/.well-known/api-catalog) points every agent at.

Most of the catalog is free. Anything marked **(Pro)** below needs one of the paid [plans](https://apis.io/developer/plans/), Understanding or Influence.

## Search and discover

- Search across APIs, providers, tags and artifacts in a single call.
- Get the service record and the catalog counts.
- Browse a playground of APIs that are safe to call while you are learning.
- Search operations across the whole catalog, or find providers with operations marked deprecated.
- Resolve a domain, a URL or a GitHub organization to a provider.
- Enrich a provider in one call, choosing which groups of fields you want back.

## Providers and APIs

- List, filter and get providers. For any one provider, get its APIs, artifacts, onboarding view, similar providers, capability counts, every operation it exposes, every MCP tool it ships, every JSON Schema it publishes, the corporate estate it belongs to, and the investors behind it.
- List, filter and get APIs. For any one API, get its artifacts grouped by type, similar APIs, and its primary OpenAPI.

## Browse by artifact type

There is a catalog-wide list for each kind of machine-readable artifact we harvest: OpenAPI, AsyncAPI, Arazzo, Postman collections, API collections, GraphQL, JSON Schema, JSON Structure, JSON-LD, APIs.json, governance rules, examples, FinOps, plans, rate limits, AsyncAPI event channels, MCP servers, Agent Skills, OAuth scopes and security schemes. OpenAPI extensions get their own list, and each one has a page of who publishes it.

## Taxonomy

- Tags and tag groups, and the tags inside each group.
- Industries, regions and countries, each with its top-rated providers. Country leaders are (Pro).
- Curated areas and their leaders (Pro).
- The regulations the catalog tracks, joined to the markets they bind.
- Corporate estates: the families of providers that one company owns.

## Ratings and agent readiness

- The [Kin Score](https://apis.io/rating/) leaderboard, the rubric behind it, and the biggest movers.
- For one provider: its rating, its rating history, and the evidence the score was built from. The facet-level breakdown and the agent-readiness dimensions are (Pro).
- The agent-readiness leaderboard, and how far each agent-readiness dimension has spread across the catalog.
- For one provider: every fix ranked by the points it is worth, the gates that hold a score in its band, and where the score would land if named fixes were made.

## Cohorts, capabilities and synthesis

- Every scored cohort, one cohort and its members, how its scores moved over time, and the checks it most commonly fails. Stats, rankings, facet scores, capabilities and cohort-to-cohort comparison are (Pro).
- The business-capability model, one capability, the evidence behind it, and what one provider's APIs let a business do.
- Compare providers side by side (Pro), run a gap analysis for a provider or a stack (Pro), see the gaps across a whole industry, and see what changed in the catalog since a date (Pro).
- Design a recommended API stack, and export it as APIs.json.

## Insights, investors and exports

- The demand side: an overview, the investment dimensions, adoption of services, tools and standards, an industry rollup, and profiled companies, each with its weakest dimensions and the providers that match its stack.
- Venture capital firms, each firm, and its portfolio.
- Export the whole dataset in one pull, or one named dataset.

## Agents

- Browse the A2A agent registry.
- Read how to register an agent, then register one. The endpoint describes itself, so an agent can do this without a human reading the docs first.

## Your listing

If you are an API provider, this is the part I most want you to know about. You can claim your listing, see what we can generate for you, request an artifact you are being marked down for not having, tell us about an artifact you already publish, correct facts, dispute a finding, ask to be shown less or not at all, ask for your listing to be checked again, and watch a listing so you hear when it moves. Every one of these is worked by a person. None of them publishes anything on your behalf or moves a score by itself.

## Your workspace

Saved searches you can re-run against the live catalog, including a view of only what is new since you last looked, and lists you can build, add providers and APIs to, and delete.

## Feedback, account and billing

- Report a gap in the catalog. This one is free and does not need a key.
- Sign in with GitHub, Google or LinkedIn, see who you are, your tier and your usage, update or delete your account, export everything we hold about you, and list or revoke your API keys.
- OAuth 2.1 authorization and token endpoints, with dynamic client registration.
- Pay-as-you-go access: read the terms, put a card on file, top up credit, and set spend caps. Or subscribe to Understanding or Influence and manage that subscription.

## Two ways in

All of this is plain REST. Most of it is also available through the APIs.io MCP server, as 141 tools; account, billing and OAuth stay REST only. Start at [getting started](https://apis.io/developer/getting-started/), get a key on the [authentication](https://apis.io/developer/authentication/) page, and if you find something in this list that does not do what it says, tell me. That is what the feedback door is for.

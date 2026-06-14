---
published: true
layout: post
title: The Architecture Behind 10,000 API Providers
date: 2026-06-14
author: Kin Lane
tags:
  - APIs.json
  - API Discovery
  - GitHub
  - APIs.io
  - Standards
  - Network
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/1939-new-york-worlds-fair-city-skyline-clouds-sun-shadows.jpeg
---
When I started API Evangelist in September 2010, I was writing stories from a one-bedroom apartment in Eugene, Oregon, trying to make sense of what Twitter, Twilio, and Stripe were doing to software development. I had no idea it would eventually turn into a catalog of 10,000 API providers indexed across a searchable network. But here we are.

The [API Evangelist GitHub organization](https://github.com/api-evangelist) just crossed 10,000 repositories. Each one represents a single API provider — from AWS and Salesforce to federal government agencies, DeFi protocols, academic databases, university library catalogs, and niche vertical tools that most people have never heard of. The question I keep getting asked is: how does a GitHub organization of 10,000 repos become a navigable API network? The answer is an architecture that took me about twelve years to figure out, and it hinges on three things working together — a standard, a catalog, and a set of tooling that treats the standard seriously.

## Every Repo Is a Machine-Readable Provider Profile

The unit of the catalog is a GitHub repository named after the provider. Inside every repo, at the root, is an `apis.yml` file in the [APIs.json](https://apisjson.org) format (currently v0.19). That file is the source of truth for everything I know about that provider.

It declares the provider's identity: an `aid` (a stable, machine-readable identifier), a human name, a description, a set of tags, and a `humanURL` — the front door. It then lists specific API entries, each with its own properties pointing to machine-readable artifacts: OpenAPI specs, AsyncAPI specs, JSON Schemas. And it carries common properties that cut across all the APIs a provider offers — links to their Plans page, Rate Limits documentation, FinOps pricing data, a JSONLDContext for their vocabulary, and a Blog feed.

The result across 10,000 repos is: 10,754 OpenAPI specs discovered and indexed, 14,123 unique tags, and property coverage that tells me a lot about where the industry has and hasn't invested. Website coverage across the catalog is 7,836 providers. Documentation coverage is 6,723. Plans coverage is 2,116 — meaning roughly 21% of providers have bothered to publish machine-readable pricing. Rate Limits coverage is 2,295. FinOps is 2,016. Those gaps are as interesting to me as the numbers themselves.

## APIs.json Is the Vocabulary That Makes It Parseable

The reason any of this works at scale is that [APIs.json](https://apisjson.org) is a standard with a defined vocabulary. The property types — `OpenAPI`, `AsyncAPI`, `JSONSchema`, `Plans`, `RateLimits`, `FinOps`, `Vocabulary`, `JSONLDContext`, `Blog` — are not labels I invented for my own crawler. They are standardized terms maintained by [API Commons](https://apicommons.org) that any tooling can parse without custom logic per provider.

This is the part that most people underestimate when they think about API discovery at scale. The problem is not scraping. I can scrape. The problem is that scraped data has no shared schema, so every consumer has to write a custom parser for every provider. APIs.json solves that by giving every provider the same vocabulary for describing what they publish. When my tooling sees `type: OpenAPI` in an `apis.yml`, it knows exactly what to do with that URL — regardless of whether the provider is a two-person startup or a Fortune 500 company.

I started working on APIs.json in 2014 alongside [Steve Willmott](https://twitter.com/njyx) and others in the community. The goal was always to create a discovery primitive that sat one layer above the API specs themselves — not a replacement for OpenAPI, but an index of where OpenAPI (and everything else) lives. Twelve years later, with 10,000 repos all carrying an `apis.yml`, I feel like that bet paid off.

## The Standards Layer Is the Governance Layer

One thing that took me longer to articulate is that the catalog is not just a discovery artifact — it is also a governance artifact. When I add a JSONSchema property to a provider's `apis.yml`, I am capturing their data model in a machine-readable format that any downstream consumer can validate against. When I add a Vocabulary property, I am anchoring their domain terms. When I add a JSONLDContext, I am connecting their data structures to the linked data web.

These are not decorative. The Standards layer of the catalog — the combination of JSONSchema, Vocabulary, JSONLDContext, and Plans/RateLimits/FinOps — gives me the raw material for governance tooling. I can ask questions like: which providers in the Healthcare tag have published a JSONSchema for their data models? Which providers in the Financial Services category have machine-readable pricing? Which government agencies have a Vocabulary that other agencies could reuse? The `apis.yml` in each repo is the hook I use to answer those questions programmatically, across 10,000 providers, without manual lookups.

This is why I put so much energy into the property coverage numbers. Every gap in the coverage map is a place where the industry has not yet invested in making itself legible to machines. The 78% of providers without machine-readable Plans are not bad actors — they just haven't been asked to publish that data in a format tooling can consume. The catalog makes the ask visible.

## How It Feeds APIs.io

The GitHub repos don't just sit there. They feed [APIs.io](https://apis.io), the search and discovery layer I maintain on top of the catalog. The crawler reads every `apis.yml`, indexes the provider identity, the API entries, and the properties, and surfaces them through a search interface organized around [14,123 unique tags](https://tags.apis.io/).

That tag vocabulary is one of the most useful artifacts to come out of the catalog work. Tags in `apis.yml` files are freeform — providers contribute their own terms — but over 10,000 repos, patterns emerge. The top tags tell me which categories of the API economy are most active. The long tail tells me where the catalog still has gaps. And because tags are indexed and browsable at [tags.apis.io](https://tags.apis.io/), they give both humans and agents a structured entry point into the network without needing to know what specific provider they're looking for.

The result is that what started as a personal blog about the API economy has become infrastructure. The blog is still there — this post is part of it — but underneath it is a machine-readable catalog of the providers I've been writing about for sixteen years. The stories and the structured data are built on the same foundation, which is exactly how I wanted it to work when I started sketching this out in 2014.

## Why GitHub as the Storage Layer

Using GitHub as the backbone of the catalog was a practical decision that turned out to have real structural benefits. Git gives me version history on every `apis.yml` — I can see when a provider added Plans coverage, when their OpenAPI URL changed, when they picked up a new tag. GitHub's API gives me programmatic access to the catalog without maintaining my own storage infrastructure. And the public nature of the organization means anyone can open a pull request to correct a provider profile, add a missing spec URL, or flag an outdated property.

The catalog is not a database I maintain in isolation. It is a public, version-controlled, community-editable index of the API economy, structured around an open standard. That combination — open standard, public repo, Git history — is what lets me hand it off to tooling, to agents, to other researchers, and have some confidence that they're working from the same source of truth I am.

Ten thousand repos. Sixteen years of work. One `apis.yml` at a time.

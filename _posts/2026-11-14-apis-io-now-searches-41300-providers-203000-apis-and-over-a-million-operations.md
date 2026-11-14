---
published: true
layout: post
title: 'APIs.io Now Searches 41,300 Providers, 203,000 APIs, And Over A Million Operations'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-io-now-searches-41300-providers-203000-apis-and-over-a-million-operations.png
date: 2026-11-14
author: Kin Lane
tags:
  - APIs.io
  - Search
  - Discovery
  - Operations
  - Milestones
---
The latest build of [APIs.io](https://apis.io) went out, and the search box on the home page now covers more than 41,300 providers, 203,000 APIs and 1,090,000 operations. The exact provider and API counts are 41,355 and 203,856. Crossing a million operations is the number I've been waiting for.

The build before this one counted 38,800 providers, 188,000 APIs and 992,000 operations. So this build added roughly 2,500 providers, 15,000 APIs and 100,000 operations.

## Why the operations number matters most to me

Providers and APIs are how we've always counted catalogs. A provider is a company. An API is a product, usually one OpenAPI or other contract. Neither is what you're actually looking for when you search.

What you're looking for is the thing you need to do. Send a text message. Geocode an address. Refund a payment. Look up a product by its part number. That's an operation: a single path and method, with a summary, parameters and responses, inside some provider's contract. Searching providers tells you who might be able to help. Searching operations tells you who already does the exact job, and how.

That's also how an agent looks at the world. An agent doesn't need a company, it needs a capability it can call. More than a million operations is a million specific answers to "who can do this," each traceable back to the contract it came from.

## What sits behind the search

Search is the front door, but the catalog behind it has grown along with it. The latest build also counts:

- 208,670 JSON Schemas
- 18,451 pricing plan profiles and 12,855 rate limit profiles
- 16,469 Spectral rulesets
- 10,105 semantic vocabularies
- 3,818 event-driven specifications
- 9,370 FinOps profiles

All of it is harvested from what providers publish themselves, saved with where it came from, and never generated to fill a gap. When we can't find something, that's recorded as an absence, not invented.

## How it got here

The catalog grows through the pipeline I've been writing about: agents profiling one company at a time, hunting for the contract on the API host, in the provider's GitHub, through GraphQL introspection and MCP tool lists, then a deterministic tail that validates, splits and standardizes every spec. It also grows when we re-profile older providers whose contracts have changed since we last looked, and when people submit their own APIs through the site.

## Try it

Go to [APIs.io](https://apis.io) and search for the job, not the company. Try a verb and a noun: "refund payment," "geocode address," "create invoice." If you'd rather have an agent do it, the same search is available through the [APIs.io API and MCP server](https://apis.io/developer/), and the catalog, any single provider and its APIs are free to search with no key.

If you're a provider and something about your listing is wrong or missing, tell us, or publish it where an agent can find it, and it will be in the next build.

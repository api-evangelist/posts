---
published: true
layout: post
title: The Six Facets Behind the API Evangelist Composite Score
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-six-facets-behind-the-api-evangelist-composite-score.png
date: 2026-08-24
author: Kin Lane
tags:
  - Ratings
  - Contracts
  - API Governance
  - Developer Experience
  - Machine Readability
  - APIs
---

The composite quality score in the [API Evangelist Rating System](https://apis.io/rating/) is a single number, but it is never *just* a number, because it is a weighted blend of six facets and I publish every weight. A score tells you where a provider sits; the facets tell you *why*, and more usefully, which specific part of their API operation earned or lost the points. I designed it this way on purpose--a rating you cannot decompose is an opinion with a decimal point--so here are the six facets, what each one measures, the weight it carries, and why I weighted them the way I did.

**Contract Quality carries the most, at twenty-five percent**, and that is not an accident. This facet measures the technical depth and richness of the actual contract artifacts--OpenAPI, AsyncAPI, JSON Schema, JSON-LD--not whether a spec merely exists, but whether it has real descriptions, real error responses, real types. The contract is the load-bearing wall of everything else: an integration, a mock, an SDK, an agent, a governance rule, all of it is generated from or checked against the contract. If any single thing should move a score the most, it is the quality of the document everyone else builds on, so it gets the largest share.

**Developer Ergonomics and Commercial Clarity tie for second at twenty percent each**, and together they are the onboarding half of the score. Ergonomics asks the plain question: how easy is it to actually get started? SDKs, a CLI, a portal, a getting-started guide, documentation, a sandbox or console, an MCP server, and unambiguous authentication. Commercial clarity asks the question most rubrics politely skip: are the *business* terms machine-readable? Plans, pricing, a sign-up path, terms of service, privacy, FinOps mapping, compliance and trust signals. I weight these high because an API a person cannot start using without a sales call, or cannot understand the price of without an email, is not really a public API in the way that matters--and an agent cannot make that sales call at all.

**Operational Transparency is thirteen percent, and Governance is twelve.** Operational transparency measures whether the provider exposes how the API *behaves* over time: documented rate limits, a status page, a change log, deprecation notices, a security disclosure path. It is the difference between an API you can build a business on and one that can surprise you. Governance measures the outcomes of Spectral linting and the presence of governance artifacts like rulesets and vocabulary, severity-weighted so a wall of style nits does not sink a provider the way a real contract defect does. These two sit in the middle of the weighting because they are what separate a good demo from a dependable dependency--essential, but they only matter once the contract and the on-ramp are real.

**Discoverability rounds it out at ten percent**--the smallest weight, and I want to be honest about why. This facet asks whether the API can be found and understood from machine-readable metadata alone: apis.yml completeness, tagging, identity signals. It matters enormously--it is the entry point to everything, and in a world of agents it is arguably becoming more important, not less. But it is also the cheapest facet to max out, and I did not want a provider to earn a strong-looking score by nailing their metadata while shipping a hollow API underneath. So discoverability is the key that opens the door, weighted to reward getting found without letting a good index entry masquerade as a good API.

Add those up--twenty-five, twenty, twenty, thirteen, twelve, ten--and you get a hundred, and underneath the six facets sit dozens of individual checks, seventy-four at last count, each earned from an artifact the provider actually published. The reason I show all of this rather than hand out a mystery grade is that the weights *are* an argument about what makes an API good, and an argument should be inspectable. If you think contract quality should matter more than commercial clarity, you can see that I agree by five points. If you think discoverability is underweighted, you can see exactly where I drew the line and make the case. That is the whole design: a score you can take apart, disagree with in specifics, and act on precisely. You can read every facet, its weight, and the checks beneath it on the [rating page at APIs.io](https://apis.io/rating/).

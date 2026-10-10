---
published: true
layout: post
title: 'Six Standards Nobody Ratified, Measured Against What The Industry Built'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/six-standards-nobody-ratified-measured-against-what-the-industry-built.png
date: 2026-10-14
author: Kin Lane
tags:
  - Standards
  - API Commons
  - OpenAI
  - SCIM
  - S3
  - CKAN
  - Conformance
  - APIs.io
  - APIs
---
Some of the most widely implemented API contracts in the world were never ratified by anybody. The S3 interface, the OpenAI API, CKAN's Action API and Ethereum's JSON-RPC became standards by being copied, and "compatible" stayed a marketing word for years because nobody wrote down what it actually commits you to. There is now a [Standards section on APIs.io](https://apis.io/standards/) that does two things about that. It carries six profiles that measure what the industry built, operation by operation, against what each adopter claims. And beneath them it lists 426 formal standards from the API Evangelist standards directory, with the providers in the catalog who say each one is part of what they do.

## Standards from practice

The six profiles are published by [API Commons](https://apicommons.org/standards/models/), and each one starts from the same honest move: pick a denominator you can defend. A claim of compatibility is recorded as a claim until something verifies it, and the something is different for each standard, because the evidence available is different.

| Profile | Claim it | Denominator | Operations graded | Core tier | Adopters recorded |
|---|--:|--:|--:|--:|--:|
| [The OpenAI Interface](https://apis.io/standards/openai/) | 211 | 120 publish a byte-identical OpenAPI | 338 | 2 | 175 |
| [The Anthropic Messages Dialect](https://apis.io/standards/anthropic-messages/) | 34 | 29 declare an operation unique to it | 244 | 2 | 20 |
| [The Ethereum JSON-RPC Interface](https://apis.io/standards/ethereum-json-rpc/) | 86 | 21 answered a live probe | 78 | 22 | 40 |
| [The CKAN Action API](https://apis.io/standards/ckan-action-api/) | 220 portals | 36 answered a live probe | 134 | 63 | 48 |
| [The S3 Interface](https://apis.io/standards/s3/) | 58 | 12 declare an S3 operation in a spec | 116 | 8 | 46 |
| [SCIM 2.0](https://apis.io/standards/scim/) | 368 | 77 publish an OpenAPI with a SCIM path | 24 | 5 | 320 |

Every operation lands in a tier, core, extended or vendor-only, by the share of the publishing cohort that declares or answers it. Tiers are graded per method and path, not per path, because `GET` and `POST` on `/chat/completions` are not implemented at the same rate and crediting them equally would be wrong. The core tier is the thing a provider has to implement before a compatibility claim means anything, and each profile says how it was measured and why the other methods were unavailable.

Three of the six are worth reading on their own.

**The OpenAI interface has a core of two operations.** Out of 338 graded, two reach the core tier, nineteen are extended, and 317 are vendor-only. That is what "OpenAI-compatible" means in practice: chat completions and the model list, and everything else is one vendor's extension. Of 175 recorded adopters, 101 publish a machine-readable spec declaring what they implement and 74 say so in prose and publish nothing a reader can check. Sixty-seven demonstrably reach the core. That number is a floor, since a provider can implement an operation without publishing a spec, and the profile says so.

**S3 is the weakest evidence base in the programme, and the page says so first.** Fifty-eight providers claim S3 compatibility. Twelve declare an S3 operation in a published OpenAPI, and that is the whole denominator. Live probing was tried and does not work, and the compatibility matrices this ecosystem is famous for are rendered in JavaScript rather than served as text, so the profile is built from what twelve providers chose to write down. Eight operations make the core: ListBuckets, ListObjects, CreateBucket, DeleteBucket, GetObject, PutObject, HeadObject, DeleteObject. Five of 46 recorded adopters demonstrably reach it. The shares are coarse by construction and the page tells you to read them as a signal, not a census.

**SCIM is the one that was ratified, so it measures the other axis.** SCIM 2.0 has been an RFC since 2015. Describing it again would add nothing, so the profile carries two gradings for each of its 24 operations: what RFC 7644 says, quoted, and what the industry actually declares, measured the same way as every other profile. The gap between them is the point. SCIM has the largest claim cohort of any standard in the programme, 368 providers mention it, and 269 of the 320 recorded adopters say so in prose with nothing a reader can check. Five operations form the core, the create, read, update and delete of `/Users` and the list. Everything the RFC says about groups, bulk, filtering and schemas sits in the extended and vendor tiers, implemented by a minority of the people who claim the standard.

CKAN is a different animal and the profile is careful to say why. Its 220 portals are not independent reimplementations of one interface. They are the same software at different releases, so an absent operation usually means an older install rather than a design decision, and 63 of its 134 actions reach the core because the sample was probed read-only against live portals rather than read from specs.

## Everything a profile publishes

What makes these more than a report is that every profile generates its artifacts from the one measurement: an OpenAPI for the interface as built, an Overlay carrying the tier grades, an Arazzo workflow that walks the core tier as a conformance test, an MCP tool manifest, a Spectral ruleset that lints a provider's spec against the profile, and the adopter registry with the URL every entry was read from and the date it was read. A re-measurement moves every artifact together. If you sell an OpenAI-compatible endpoint, there is now a ruleset you can run against your own spec that tells you whether you reach the core, and a workflow an agent can run against your endpoint that tells you the same thing.

## The formal standards underneath

Below the profiles the section lists the ratified and published standards, read from the API Evangelist directory: specifications, industry standards, protocols, formats and security standards, 426 of them across 44 categories. Cross-domain standards are 247 of those, and the sector lists run from payments at 19 and finance and healthcare at 15 each, down to a single entry each for a dozen more, rail, space, mortgage and social services among them.

Each standard's page lists the providers whose own APIs.json carries it as a tag. That is a different kind of evidence from the profiles above, and the page says so: it is the provider's statement that the standard is part of what they do, not a measurement by APIs.io. On that basis 187 of the 426 are carried by at least one provider, and 239 are carried by none. The ones that are carried tell you what providers think is worth saying about themselves. GraphQL leads with 375 providers, then DevSecOps at 87, Agent Skills at 73, JSON-RPC at 59, DNS at 56, IAM at 41 and JSON:API at 32. OpenRTB is carried by fourteen and AsyncAPI by twelve.

The ones nobody carries are at least as interesting. The Model Context Protocol has a page and no provider has tagged itself with it, though the catalog indexes 6,591 MCP server records, because a tag is an identity claim and nobody yet thinks of MCP as what their company is. Agent2Agent, the AI Catalog, OSCAL, Catena-X, most of the aviation standards and nearly every IETF draft about agent authentication sit at zero. That is the gap between a standard existing and a company deciding it is part of who they are, and it is the gap the six profiles above were built to close from the other direction, by measuring what is implemented whether or not anyone claims it.

## Why this sits in the artifacts menu

The section lives under Artifacts on APIs.io rather than under Governance, and that was a deliberate choice. A standard page here is an artifact set: a contract, a layer, a workflow, a tool manifest, a ruleset and a registry, all generated from one profile. That is also how the Kin Score reads standards. The [Regulatory Posture](https://apievangelist.com/2026/10/09/the-kin-score-facet-by-facet-regulatory-posture/) facet pays eight points for conformance to the standard named for your regime, and the [Contract Governance](https://apievangelist.com/2026/10/01/the-kin-score-facet-by-facet-contract-governance/) facet pays six for a declared conformance profile, and in both cases a tag credits an intention while naming the instrument credits a fact. I wrote last month that [the AWS API Gateway extensions are a de facto standard](https://apievangelist.com/2026/09/08/the-aws-api-gateway-extensions-are-a-de-facto-standard/) and that [Microsoft documented its OpenAPI extensions for a decade and never registered them](https://apievangelist.com/2026/09/07/microsoft-documented-its-openapi-extensions-for-a-decade-and-never-registered-them/). This section is where that line of work lands: the standards nobody ratified, measured, with the evidence beside every number, and the standards somebody did ratify, with the list of who says they belong to them.

If your company claims compatibility with any of the six, go and find yourself in the adopter registry. If the entry says prose, you are one published spec away from a verdict.

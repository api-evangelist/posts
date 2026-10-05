---
published: true
layout: post
title: 'One In Ten API Providers Still Publish Swagger'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/one-in-ten-api-providers-still-publish-swagger.png
date: 2026-10-05
author: Kin Lane
tags:
  - OpenAPI
  - Swagger
  - Specifications
  - Provenance
  - APIs.io
  - APIs
---
Someone asked me a simple question last week. Of the providers who publish an API definition, how many are publishing Swagger and how many are publishing OpenAPI, and which versions? 8,324 of the provider repositories in the API Evangelist catalog hold an OpenAPI or Swagger file, so I figured I could answer it in an afternoon.

I could not, at least not honestly. The first number I got was wrong, and why it was wrong turned out to be the more useful finding.

## The number my own archive gave me

Every provider repository keeps an `openapi/_original/` folder. It is supposed to hold the document as we got it from the provider, before our pipeline splits and standardizes it. Counting the version declared in those files said 3,128 providers were on OpenAPI 3.1.0, far ahead of everything else.

That did not look like the market I know, so I went through the files. A lot of that folder was ours. Some of it was our pipeline's own earlier output, archived on a later run. Some of it was specs we had modelled from documentation pages, written in our house style, on 3.1.0, because that is what we write. The label on the folder said "harvested from the provider", but it said that because of where the file sat. Nobody had ever checked it, and the URL we fetched from had not been recorded for a single file except two.

So the archive could not answer the question. It could only tell me what we had written down.

## Asking the providers instead

The only honest answer comes from a fetch. I went back to every provider and went looking for where they serve their API definition today:

- the OpenAPI links we had already recorded in their `apis.yml`
- their APIs.json and `/.well-known/api-catalog`, if they have one
- the usual spec paths (`/openapi.json`, `/v3/api-docs`, `/swagger.json`, and the rest) on their API and docs hosts
- links to definitions on their own documentation pages
- the APIs.guru directory, followed back to its original source
- spec files in their own GitHub organization

A document counts when two things are true. It parses as Swagger or OpenAPI, and it is served from a host the provider controls: their domain, their GitHub organization, or a docs host they list as their own. A spec that only lives on someone else's host is reported, but it is never credited to the provider.

Getting that rule right took more work than I expected. A few things it had to catch:

- **Azure.** One Microsoft monorepo was being credited to every one of about twenty Azure repositories.
- **Australia's Consumer Data Right.** About two dozen banks and energy retailers list the standards body's GitHub Pages site, and the CDR specifications are published there. The standards body publishes those. The banks implement them.
- **Platform tenants.** A tenant's developer portal running on someone else's platform is not the tenant's publication.
- **Test fixtures.** GitHub organizations are full of other people's specs: forks of the OpenAPI specification's own examples, a client library's test data, a product line from a different division.

When separate repositories belong to one company, I counted them once.

## What the providers actually serve

Out of those 8,324 repositories, **2,281 companies** serve at least one Swagger or OpenAPI document from a host they control today.

| What they publish | Companies | Share |
|---|---|---|
| Swagger 2.0 only | 190 | 8.3% |
| Swagger 2.0 *and* OpenAPI 3.x | 56 | 2.5% |
| OpenAPI 3.0.x (newest version) | 943 | 41.3% |
| OpenAPI 3.1.x (newest version) | 1,143 | 50.1% |
| OpenAPI 3.2.0 | 5 | 0.2% |

Version by version, counting every company that serves at least one document at that version:

| Version | Companies |
|---|---|
| Swagger 2.0 | 246 |
| OpenAPI 3.0.0 | 400 |
| OpenAPI 3.0.1 | 266 |
| OpenAPI 3.0.2 | 56 |
| OpenAPI 3.0.3 | 341 |
| OpenAPI 3.0.4 | 53 |
| OpenAPI 3.1.0 | 1,093 |
| OpenAPI 3.1.1 | 49 |
| OpenAPI 3.1.2 | 10 |
| OpenAPI 3.2.0 | 5 |

So, the answer to the question: **about one in ten API providers still publishes Swagger 2.0**, and one in twelve publishes nothing newer. Swagger is not gone. It is a long tail of providers who wrote a definition once, years ago, and have had no reason to touch it since.

## Who is on 3.1, and why

On its face, 3.1.0 being the most common version looks like a story about the industry upgrading. I do not think it is, and here is my reading of why. It is my interpretation of the numbers, not something the providers told me.

Split by whether a provider is an AI company, the gap is wide:

| | on OpenAPI 3.1+ | Swagger only |
|---|---|---|
| AI companies | 63.8% | 4.3% |
| Everyone else | 37.8% | 12.1% |

Then I sampled 300 of the 3.1.0 documents and looked at what generated them. A quarter carry FastAPI's fingerprint, against fewer than 2% of the 3.0 documents. FastAPI has emitted OpenAPI 3.1.0 by default since mid-2023.

So the 3.1 lead is largely a wave of new companies, a lot of them AI companies, building on tooling that ships 3.1 out of the box. Established providers did not decide to upgrade. Most of them are still on 3.0.x, mostly 3.0.0, 3.0.1 and 3.0.3, wherever their generator left them. And OpenAPI 3.2, released a year ago, shows up for five companies.

I think that is a better story than "everyone moved to 3.1." Versions are mostly set by defaults. Providers adopt the version their framework emits, and they stay there until something forces a change. If the OpenAPI community wants 3.2 adopted, the place to win that is the default in FastAPI, springdoc, Swashbuckle and the docs platforms, not the provider's roadmap.

## What this does not cover

To be straight about the limits:

- **Most of the catalog is not in these numbers.** 2,379 of the 8,324 repositories holding a definition (29%) serve a definition we could fetch and verify today. The rest are behind a login, rendered only in a browser, gone, or never had a public definition and were modelled by us. Those are excluded, not counted as anything.
- **This is a snapshot from October 4, 2026.** A provider that publishes its spec somewhere I did not look is missing.
- **The AI split depends on tagging.** It relies on how providers are tagged in the catalog, which is broad.

## What changed on our side

The archive is now honest about itself. For every archived spec that matched what a provider serves, 2,674 of them across 1,305 providers, there is now a fetch record beside it with the URL, the date, the hash, and whether the match was byte-for-byte (819) or the same operations in a different shape (1,855). The provenance manifest cites that record instead of the folder name. Everything else in that folder is still labelled "unverified", which is the truth.

The verifier and the census are in the catalog's working tooling. I will re-run them, and the next time someone asks me this question I will be able to answer it in an afternoon.

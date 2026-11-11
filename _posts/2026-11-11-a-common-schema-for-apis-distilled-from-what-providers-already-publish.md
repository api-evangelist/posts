---
published: true
layout: post
title: 'A Common Schema For APIs, Distilled From What Providers Already Publish'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-common-schema-for-apis-distilled-from-what-providers-already-publish.png
date: 2026-11-11
author: Kin Lane
tags:
  - API Commons
  - Schema
  - Standards
  - OpenAPI
  - APIs.io
  - Governance
---
I have wanted a Schema.org for APIs for a long time. I don't mean another standard written by a committee and handed down. I mean the vocabulary the market already shares, measured from the OpenAPI that providers publish about themselves. Over the last couple of days I finally built a working version of it, and I want to share what it is, what it found, and what it can't tell you.

It is called [Schema Commons](https://github.com/api-commons/schema-commons), and it lives in the API Commons as a hub repository plus one repository per bounded context.

## How it works

The rule is distil, never invent. For each domain, such as CRM, payments, ticketing or shipping, I take the providers tagged with it in [APIs.io](https://apis.io) and read only the OpenAPI they published themselves. I never use a contract that we generated, and each company counts once however many files it has. From those specs I measure which resources providers expose, which operations they put on them, and which properties they declare.

A property is **core** when at least half of the providers with a readable schema declare it, and **extended** when at least a fifth do. Everything below that is long tail. Every context ends up with:

- a common OpenAPI;
- JSON Schema where every property carries the share of providers that declare it;
- a crosswalk from the common names to each provider's own names, with the spec it came from.

The naming conventions are measured too and published as a [Spectral ruleset in OpenLint](https://github.com/openlint/rules), which was merged this week.

## What exists now

I measured 207 domains and built 129 of them. Together the built contexts publish 466 concepts, 1,650 core properties and 6,543 provider crosswalks, mapping 4,065 providers to the vocabulary their own specs implement. Some examples worth opening:

- [CRM](https://github.com/api-commons/crm): a contact agrees on the eight fields every CRM shares.
- [Payments](https://github.com/api-commons/payments): payments, refunds, payouts and disputes, measured across 692 providers.
- [Crypto exchanges](https://github.com/api-commons/crypto-exchanges): orders agree on id, status, type, quantity, side, price and symbol, across exchanges that agree on little else.
- [Image generation](https://github.com/api-commons/image-generation): one resource, an asynchronous job with a prompt, a status, a model and an output.

## What it taught me

**The market agrees more than it gets credit for, in specific places.** When a resource is exposed by many providers as REST, a real core shows up. Examples are orders, invoices, contacts, tickets, messages, flights and episodes. Names drift (`created`, `created_at`, `date_created`, `createdAt`), but the shape underneath is shared.

**It stops agreeing past a clear line.** The first 57 domains all built. Of the next 50, 41 built, and of the 100 after that, 31 did. I record the ones that don't as *thin*, with a reason, because a thin result is a finding too. There were four reasons, and they kept repeating:

- a standard already owns the shape;
- the data moves as files, feeds or SDKs rather than REST;
- the companies in the tag simply don't publish APIs;
- another domain already holds the resource.

**One company listed several times looks like agreement.** Twice a "core" of thirty-odd properties turned out to be one aggregator listed under three names in the catalog. Measurement needs this kind of skepticism built in, so the tooling now checks every claim in the write-ups against the data on every rebuild.

## Where standards come in

The most interesting part came last. For about a third of the thin domains, the reason was that a standard already defines the shape. Re-deriving that shape from the market would be pointless. So the commons now treats standards three ways:

- **Measures.** A domain's measured core is compared with the standard's objects. Healthcare is almost entirely FHIR, nine domains are compared with schema.org, and webhooks with CloudEvents.
- **Bridges.** Each of those domains carries an OpenAPI Overlay that maps every common property to the standard's field without renaming anything.
- **Owns.** Where a standard has settled the shape, a *reference context* publishes the standard's own objects unchanged and measures who implements them.

Five reference contexts are published:

| Reference context | Standard | Implement it | Name it in a spec |
| --- | --- | ---: | ---: |
| [network-apis](https://github.com/api-commons/network-apis) | CAMARA | 8 | 16 |
| [imagery-catalogs](https://github.com/api-commons/imagery-catalogs) | STAC | 6 | 17 |
| [registry-protocol](https://github.com/api-commons/registry-protocol) | OCI Distribution | 3 | 9 |
| [ocean-shipping](https://github.com/api-commons/ocean-shipping) | DCSA | 3 | 4 |
| [cloud-events](https://github.com/api-commons/cloud-events) | CloudEvents | 3 | 16 |

The last column is the one I keep looking at. Naming a standard is not implementing it. Sixteen providers mention CAMARA and eight publish it. Fifteen mention STIX, the threat-intelligence standard, and one publishes a STIX object. That gap is where a standard is being talked about but has not yet reached the APIs people actually publish.

Measuring against standards also corrected the census. Satellite imagery and maritime both came out thin, because their providers seemed to agree on nothing. Measured against STAC and DCSA instead, the implementers agree on 67 to 100 percent of the fields. The agreement was there, but only among the implementers, and averaging across the whole field had hidden it.

## What it can't tell you

This only sees what providers publish as OpenAPI in the catalog. A company that implements a standard but doesn't publish the spec is invisible here, so OCI Distribution looks rare when every container registry speaks it. A share of 50 percent means half of the providers *declared* the property; it says nothing about whether they populate it well. A crosswalk is a mapping, not a grade, and none of this enters any score.

It is also all still draft. Every artifact is stamped `0.1.0-draft` because I have been changing names freely while the method settled. The lock criteria and the release tooling are now in place. The first contexts to reach 1.0.0 are likely source control, trading, ticketing and identity, once a re-measure against the catalog repair I'm doing this week and the APIs.io build on Friday are both done. Then the common pages, the reference pages and an "implements CAMARA" line on each implementer's provider page go live on [APIs.io](https://apis.io).

If you publish an API in one of these domains, open its crosswalk and look at how your names map to the common ones. If you maintain a standard, look at the reference context for it and tell me what I got wrong. Both are just YAML in a repository, and that is on purpose.

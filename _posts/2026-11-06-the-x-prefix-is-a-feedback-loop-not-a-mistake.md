---
published: true
layout: post
title: 'The X- Prefix Is A Feedback Loop, Not A Mistake'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-x-prefix-is-a-feedback-loop-not-a-mistake.png
date: 2026-11-06
author: Kin Lane
tags:
  - Extensions
  - OpenAPI
  - AsyncAPI
  - Arazzo
  - Standards
  - IETF
  - JSON Schema
---
I regularly get reminded that `x-` as a practice is not sanctioned by the IETF, so I shouldn't use it when working with API standards. I get the sentiment, and I get why the argument can be made at the IETF level, but I can never quite find myself agreeing with it at the lower levels where most of us actually work. I haven't spent much time writing my thoughts down on this, so I wanted to get my opinion on the record.

## What the IETF actually said

The reference everyone points to is [RFC 6648](https://www.rfc-editor.org/info/rfc6648/), published in 2012, titled "Deprecating the 'X-' Prefix and Similar Constructs in Application Protocols." Most people associate `X-` with custom HTTP headers like `X-Forwarded-For` or `X-Frame-Options`, but the RFC applies to parameters and fields across application protocols: email headers like `X-Mailer`, media types like `application/x-www-form-urlencoded`, and more.

The `X-` prefix was invented to mark a feature as experimental, so it wouldn't collide with a future official name. The RFC lays out what went wrong with that in practice, and it comes down to two things.

1. **Escaping the lab.** An experimental `X-` parameter becomes popular. When it is eventually standardized, it gets a proper unprefixed name.
2. **Permanent fragmentation.** Because millions of clients and servers already rely on the old `X-` name, everyone has to support both names indefinitely to avoid breaking things.

The recommendation is to name new parameters with a clean, descriptive name as if they were already standard, and if you're worried about collisions, use your organization's name rather than a generic `X-`.

At the scale of the Internet, I can't argue with the second point. Two names for the same header, forever, across every client and server, is a real cost.

## Where I part ways

My first reaction to the first point is that isn't that the whole reason it is a separate experimental namespace? So it doesn't collide. And if an experimental property escapes the lab and becomes popular, that is not a failure. That is a signal. It should drive the standard to adopt it as a first-class property, and tooling should accept the `x-` version and translate it into the formal property. That is how you avoid the fragmentation, by doing the work, not by telling people not to experiment.

The bigger difference is that API description formats are not HTTP headers. OpenAPI, AsyncAPI, Arazzo and the rest are validated by JSON Schema. If you always opt for a clean descriptive name, that property has to go through the standards process before it is accepted and properly validated by JSON Schema or JSON Structure. Until then your document fails validation. The `x-` prefix is the thing that lets a document carry something new and still be valid.

That is exactly why most of the major API description formats reserve `x-` for extensions:

- **OpenAPI** 2.0, 3.0, 3.1 and 3.2 allow `x-` on most objects. Recent versions reserve the `x-oai-` and `x-oas-` prefixes for the OpenAPI Initiative itself.
- **AsyncAPI** 2.x and 3.x allow it on most objects.
- **Arazzo** 1.x allows it on most objects.
- **OpenAPI Overlay** 1.x allows it on the document and each action.
- **APIs.json** allows it on the root and on API and property entries.
- **SLA4OAI** allows it on plans and context, but not on the root, which is why the APIs.io generator puts its `x-apis-io-*` properties on the plan and context.

Others get to the same place by different routes. JSON Schema ignores unknown keywords, and from 2019-09 on collects them as annotations, so `x-` is a common convention there, not a reserved prefix. Postman Collection v2.x has a permissive schema, so extra fields survive. JSON:API 1.1 declares extensions and profiles by URI with namespaced members. RAML has annotations, and GraphQL has directives. Every one of these specifications made room for people to go beyond what the specification says, because the people who wrote them knew they would.

## What the ecosystem is telling us

On APIs.io we read every as-published OpenAPI in the catalog to build an [OpenAPI extensions reference](https://apis.io/extensions/). As I write this it covers 3,348 extensions with 817,123 occurrences, from 37,245 specs across 10,079 providers. That is the largest undocumented vocabulary in the API space. Most of these extensions have no published definition anywhere, so the descriptions on that page are derived from evidence: where a key appears, what its value looks like and who uses it. And 375 of the entries are really HTTP header names rather than true extensions, which we keep and flag so nobody thinks the namespace is cleaner than it is.

Look at what people are using it for: data and schema semantics, documentation and developer experience, SDK generation, security, mocking, lifecycle and change management, monetization, and lately artificial intelligence. That is a road map. It is people telling the specification what it doesn't hold yet.

## We need experimentation

Everyone I hear recite the RFC back to me is pretty dismissive of the fact that we need experimentation. Not everyone has time to be involved in the standards process. Most API providers and service providers are trying to ship something, and they need to describe it today, not in two years.

And nobody I've encountered who makes this argument does the work to meet people and vendors where they are, to understand how and why they are extending. Extensions provide a relief valve for the process. They let API providers and API service providers push beyond what the specification does without waiting. It is then up to the standards and specification stakeholders to provide a registry, and to do the work to research what is being extended and reach out to the people doing it. Ideally everyone joins in on the standards, but that is just not the reality on the ground.

So, in short: it makes sense at the IETF level, and I won't argue with the people who have to keep the Internet's headers working. But I disagree at the lower and middle levels of standards. The `x-` prefix is a valid road map and feedback loop for a specification. If you ignore the adoption that already exists, you aren't listening to the ecosystem you are writing the standard for.

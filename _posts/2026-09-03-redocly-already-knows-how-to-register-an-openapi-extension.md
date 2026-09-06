---
published: true
layout: post
title: 'Redocly Already Knows How To Register An OpenAPI Extension'
date: 2026-09-03
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Redocly
  - Standards
  - APIs.io
  - Governance
  - APIs
---
I have been pulling apart every OpenAPI vendor extension in the [APIs.io](https://apis.io/extensions/) catalog, and I want to spend the next few weeks writing about the companies whose vocabulary I keep finding in other people's API contracts. I am starting with Redocly, because Redocly is the one company in this whole series that has already done the thing I am going to ask everyone else to do.

The OpenAPI Extension Registry exists. It lives at [spec.openapis.org/registry](https://spec.openapis.org/registry/index.html), it takes a pull request with a single markdown file, and right now it holds thirty-six entries. Twenty-nine of those are the OpenAPI Initiative's own backport shims, the `x-oai-` and `x-jsonschema-` keys that let you write 3.2 and JSON Schema semantics into older documents. Strip those out and the number of extensions that the actual API community has registered is seven. Seven, against a live vocabulary I can count in the thousands.

One of those seven is `x-codeSamples`, and it is Redocly's.

So Redocly knows the path. Somebody there decided that a key their tooling reads should have a public definition that anybody can point at, wrote it down, and sent the pull request. That is the whole process. It is not a standards committee, it is not a working group, it is not a year of meetings. It is a file.

Which is why the rest of what I found is worth raising. Redocly's vocabulary did not stop at `x-codeSamples`, and the registration did.

`x-tagGroups` shows up in 167 providers' OpenAPI documents in the catalog. It is the key that lets you take a flat list of tags and organize it into the sections a reader actually navigates, so that an API with sixty tags reads as eight coherent areas instead of an alphabetical wall. Algolia uses it to split their surface into "Search and indexing" and the rest. It sits at the root of the document, it is trivially simple, and it is the difference between documentation somebody can find their way through and documentation somebody bounces off.

`x-displayName` shows up in 99 providers, 2,626 times. It is the key that lets a tag called `acct_mgmt_v2` render as "Account Management" without anybody renaming the tag and breaking every client that filtered on it. That is a genuinely thoughtful piece of design. It separates the identifier from the label, which is something a lot of specifications get wrong and then spend a decade regretting.

`x-internal` shows up in 69 providers, 4,060 times, across operations, schemas, paths, request bodies and servers. This is the one I find most interesting, because it is not a presentation concern at all. It is a visibility boundary. It is a company saying *this operation exists, and it is not for you*, inside the same document that describes the parts that are for you. BigCommerce, Alpaca, AfterShip, Back Market and sixty-five others are all making that call in their contracts right now, and every one of them is trusting that whatever reads the file understands what the key means.

That last point is the whole argument. An extension is a promise about meaning, and an unregistered extension is a promise with nowhere to look it up. Redocly's own tooling knows what `x-internal` means. Redocly's customers mostly know. But a spec published by BigCommerce does not stay inside BigCommerce and Redocly. It gets fetched by SDK generators, by gateways, by catalogs like mine, and now by agents building tool definitions out of whatever they can parse. Every one of those readers meets `x-internal: false` and has to guess. Most of them guess by ignoring it, which is the safe answer and also the wrong one, because a key that marks something as not-for-external-consumption is exactly the key you do not want a tool to ignore.

I want to be careful here, because none of this is a failure on Redocly's part. They built good vocabulary. It spread because it was good. The gap between building it and registering it is a gap almost every vendor in this series has, and Redocly has it least — they registered one of four. What I am really pointing at is that the registry is so underused that a company doing better than nearly everyone else still has three widely-adopted keys sitting outside it.

So, three asks, and they get lighter as they go.

**Register the other three.** `x-tagGroups`, `x-displayName` and `x-internal` are each one markdown file in `registries/_extension` and one pull request against the OpenAPI Specification repository. Redocly has done this before. The marginal cost is an afternoon, and the result is that every tool author who encounters these keys in a stranger's document has somewhere authoritative to look. Given that `x-internal` carries a visibility meaning that tools genuinely should not be guessing at, I would start there rather than with the presentation keys.

**Sponsor the OpenAPI Initiative.** Redocly's product is downstream of OpenAPI in the most direct way a product can be. The specification's health is Redocly's health. The Initiative is a Linux Foundation project that runs on member support, and a company whose entire surface area is built on the spec is exactly the profile that membership exists for.

**Get more involved.** Show up in the Special Interest Groups. The conversations about overlays, about workflows, about how OpenAPI describes things that are not request-response are happening now, and the people who have shipped real tooling against real customer specs have the most useful thing to say in those rooms — which is what actually broke.

I am writing one of these a day for the next few weeks, walking through every vendor whose extensions I found riding in other companies' contracts. Redocly goes first because they are the proof that this is easy. The rest of the series is about what happens when nobody does it.

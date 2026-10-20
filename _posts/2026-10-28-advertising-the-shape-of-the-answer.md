---
published: true
layout: post
title: 'Advertising: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/advertising-the-shape-of-the-answer.png
date: 2026-10-28
author: Kin Lane
tags:
  - Advertising
  - OpenRTB
  - AdCOM
  - VAST
  - Structured Outputs
  - Determinism
  - APIs
---
Last week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling and schema-constrained output make valid JSON table stakes and push the real work onto agreeing on the shape. Advertising is the industry I wanted to look at next, because it agreed on its shape more than fifteen years ago and then runs that shape at a volume nobody else does.

## The answer this industry needs

There are two answers I keep seeing people try to get out of a model in advertising.

The first is turning a campaign brief into something a buying system will accept. A planner writes "CTV, US only, 30 second video, no gambling adjacency, private deal with this publisher." What a machine needs is a valid bid request or a valid deal: the impression, the video constraints, the blocked categories, the deal id and floor, in the fields an exchange or a DSP will actually parse.

The second is classifying content into the IAB content taxonomy. Every page, app and stream an ad might land on needs a category, and that category drives targeting and brand safety. The answer needs to be a code from a published list, not a description of what the page seems to be about.

Both are shape problems. Neither one is useful as prose.

## The shape is already written down

The IAB Tech Lab governs the shapes. [OpenRTB](https://iabtechlab.com/standards/openrtb/) is the real-time bidding protocol, and the [current 2.6 specification](https://github.com/InteractiveAdvertisingBureau/openrtb2.x) on GitHub is still being revised, with its most recent release tagged `2.6-202606`. It defines a `BidRequest` made of `Imp` objects, each carrying a `Banner`, `Video`, `Audio` or `Native` object, a `Pmp` holding `Deal` objects, plus `Site` or `App`, `Device`, `User`, `Regs` and a `SupplyChain`. The answer comes back as a `BidResponse` holding `SeatBid` objects, each holding a `Bid`. Even the clock is in the contract: `tmax` is the maximum time in milliseconds the exchange allows for bids to arrive.

[AdCOM](https://github.com/InteractiveAdvertisingBureau/AdCOM) holds the shared lists that OpenRTB points at. The `cattax` field in OpenRTB 2.6 says which category taxonomy is in use and refers to the AdCOM list of category taxonomies for its values. That is the hook for the second answer. The [IAB Tech Lab Content Taxonomy](https://iabtechlab.com/standards/content-taxonomy/) is at version 3.1, released December 2024, and the Tech Lab says plainly that version 1.0 is deprecated and should not be used. It has also published a taxonomy mapper for moving from 2.x to 3.0. [VAST](https://iabtechlab.com/standards/vast/) is the video ad serving template, the XML a player reads to play a video ad, now at 4.3.

So the brief-to-deal problem has a schema, and the classification problem has a controlled vocabulary with versioned ids. That is exactly what a constrained decoder wants: a JSON schema for the bid request, and an enum or grammar built from the taxonomy ids.

## What the catalog holds

The [APIs.io standards page](https://apis.io/standards/) lists two advertising standards. [OpenRTB](https://apis.io/standards/openrtb/) is carried as a tag by 14 providers in the catalog, led by BidMachine at 56.4, Magnite at 51.2, InMobi at 48.3 and Opera at 47.1, down through TripleLift, OpenX, Sharethrough and PubMatic. VAST shows no provider tagged yet. AdCOM and the content taxonomy have no entry on the list at all. The tag is a provider's own statement, and APIs.io says on the page that it has not verified the implementation.

The market I track for this is [Adtech and Privacy](https://apis.io/markets/adtech-privacy/), a 25 member cohort that mixes buying and selling platforms with consent management. The leaders on the Kin Score are [Didomi](https://apis.io/providers/didomi/) at 80.0, [Outbrain](https://apis.io/providers/outbrain/) at 74.9, Google Ads at 71.9, [OneTrust](https://apis.io/providers/onetrust/) at 71.7 and Taboola at 71.0. On agent readiness the order changes: [Scope3](https://apis.io/providers/scope3/) leads at 65.8, then OneTrust at 55.9 and Singular at 50.0. Didomi, the top composite score, is 30.4 on agent readiness. At the bottom, PubMatic is 27.2, Integral Ad Science 28.1, DoubleVerify 29.1 and Microsoft Advertising 25.6, with Microsoft Advertising at 3.1 on agent readiness.

The gap I care about is between the people who run the auction and the people with good contracts. Only five of the 14 OpenRTB providers sit in this cohort, Magnite, TripleLift, OpenX, Sharethrough and PubMatic, and their composite scores run from 27.2 to 51.3. The exemplar scores in this market belong to consent platforms and content recommendation, not to exchanges.

The artifacts follow the same line. Of the 25 cohort repos, 6 hold [JSON Schema](https://apis.io/schemas/), 3 hold [vocabularies](https://apis.io/vocabularies/), 3 hold [examples](https://apis.io/examples/), 2 hold [JSON Structure](https://apis.io/json-structure/), 7 hold [AsyncAPI](https://apis.io/asyncapis/) and 1 holds [Arazzo](https://apis.io/arazzos/). Didomi is the only one with all of them, including nine Arazzo workflows such as recording a consent event and issuing a consent token. [MediaMath](https://apis.io/providers/mediamath/) has 308 JSON Schema files covering campaign objects like advertisers, agencies and creatives. Some of these were derived by API Evangelist from the providers' own OpenAPI rather than published by the provider, so read them as our work on top of theirs.

What I could not find is anyone in the cohort publishing OpenRTB itself as a machine-readable contract. [Magnite](https://apis.io/providers/magnite/) describes its platform as having REST and OpenRTB APIs, and its OpenAPI references the OpenRTB `seatbid` object by name. Our [TripleLift](https://apis.io/providers/triplelift/) profile records that buyers POST OpenRTB bid requests to a single endpoint with no OpenAPI document, and that the supported OpenRTB subset is documented as prose tables, with no JSON Schema for it.

## What determinism changes here

Advertising is where batch-invariance stops being an academic property. An exchange answers bid requests by the billions, in batches, inside a `tmax` budget. If a model sits anywhere in that path, building a request from a brief, scoring brand safety, or tagging content with a taxonomy id, the batch it lands in can't be allowed to change the answer. Without batch-invariance, the same page could get a different category depending on what else was being classified alongside it, and a buyer's blocked categories would be enforced unevenly.

Determinism also matters after the auction. Advertisers, agencies and verification vendors reconcile delivery against what was promised. When a buyer asks why an impression was classified as news and not gambling, "the model said so that time" isn't an answer. The same input producing the same taxonomy id every time is something you can audit. The `Regs` object carries privacy signals into every request, and the consent platforms in this cohort exist because regulators expect those signals to be handled the same way every time.

Constrained output closes the last gap. Constrain the decoder to the OpenRTB 2.6 schema and a brief can only become a `BidRequest` an exchange will parse. Constrain it to the Content Taxonomy 3.1 ids and it can only emit categories that exist. It can't emit a deprecated 1.0 code.

## Where it falls short

The shapes are written down, but mostly as Markdown and prose on GitHub, not as the JSON Schema a constrained decoder takes as input. The exchanges that carry OpenRTB are thin on public contracts, and the ones I can see document their subset of the spec in tables. VAST has no provider tagged on APIs.io. AdCOM and the content taxonomy aren't on the standards list. The market's best published artifacts are about consent and campaign management, not the bid request itself. Everyone implements a subset of OpenRTB and describes the subset in their own words, which is the decision model problem again, inside a standard.

Advertising did the hard part years ago when it agreed on the bid request. What it hasn't done is publish that agreement, and each exchange's subset of it, in a form a machine can hold a model to. The providers who publish their OpenRTB subset as a schema, and their taxonomy as a vocabulary, are the ones whose shapes will get used.

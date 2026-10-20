---
published: true
layout: post
title: 'Shipping: The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/shipping-the-shape-of-the-answer.png
date: 2026-10-26
author: Kin Lane
tags:
  - Shipping
  - Logistics
  - Maritime
  - DCSA
  - Structured Outputs
  - Determinism
  - APIs
---
Last week I wrote about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), and how batch-invariant inference, deterministic sampling and schema-constrained outputs move the hard problem from "get valid JSON" to "agree on the shape." I said a shipment exception could come back as the carrier's own status codes. So I went and looked at what shipping actually has written down.

## The answer this industry needs

Shipping runs on unstructured inputs that have to become structured events. An exception email from a carrier saying a delivery was attempted and nobody was home. A scanned bill of lading that has to become a booking or a transport document. A forwarded order confirmation that has to become a tracking number attached to the right order. Somebody, or something, reads that and types it into a system that only accepts a fixed set of values.

So the outcomes are concrete. Turn an exception email into a tracking update with a status the tracking API recognizes. Turn a bill of lading into the booking or transport document a carrier's API expects. Turn a container milestone into an event a visibility platform can store and reconcile against the next one. None of these are "summarize this." Every one of them is "produce exactly this payload."

## The shape is already written down

Shipping has more of its shapes written down than most industries, and they come from several directions.

On the ocean side, the [Digital Container Shipping Association](https://dcsa.org/standards) publishes [Track and Trace](https://dcsa.org/standards/track-and-trace), [Booking](https://dcsa.org/standards/booking), the electronic Bill of Lading, Commercial Schedules, Operational Vessel Schedules, Port Call and Arrival Notice standards. Track and Trace describes the container journey as shipment, transport, equipment, IoT and reefer events, and DCSA publishes these as OpenAPI. The [APIs.io DCSA standard page](https://apis.io/standards/dcsa/) and the [API Evangelist standards entry](https://standards.apievangelist.com/store/dcsa/) both carry it.

Underneath that, [GS1](https://apis.io/standards/gs1/) governs the identifiers: the GTIN for products, the GLN for locations, and the SSCC for logistics units like a pallet. If a model is pulling a pallet identifier off a scanned label, the SSCC is already a defined shape. Then there is [UN/EDIFACT](https://apis.io/standards/edifact/) and [X12](https://x12.org/), the EDI message grammars that most carrier and shipper integrations still actually run on.

And on the parcel side, the shape that matters most in practice is a vocabulary, not a standard. AfterShip's tracking API settles every carrier's status into a short list: `Pending`, `InfoReceived`, `InTransit`, `OutForDelivery`, `AttemptFail`, `Delivered`, `AvailableForPickup`, `Exception` and `Expired`. That is an enum. It is exactly what you hand a constrained decoder so an exception email can only come back as one of those nine values.

## What the catalog holds

I looked at the two Market cohorts that cover this: [shipping](https://apis.io/markets/shipping/), 25 providers, and [maritime logistics](https://apis.io/markets/maritime-logistics/), 47 providers.

The parcel and freight side scores well at the top, and it isn't the carriers. [SMKlog](https://apis.io/providers/smklog-com/) leads at 86.1 and [AfterShip](https://apis.io/providers/aftership/) is right behind at 82.6, both exemplar, with AfterShip carrying the cohort's highest agent readiness at 59.6. [Sendcloud](https://apis.io/providers/sendcloud/) is next at 66.4. The carriers whose events everyone is normalizing sit at the bottom: USPS 33.8, [FedEx](https://apis.io/providers/fedex/) 29.3, [UPS](https://apis.io/providers/ups/) 29.0 and [DHL](https://apis.io/providers/dhl/) 24.4. The aggregators that publish the carriers they reach score roughly three times what the carriers themselves do.

Artifacts follow the same line. In the shipping cohort, 24 of 25 providers have OpenAPI in the catalog, 14 have AsyncAPI, 13 have JSON Schema, 10 have examples, and 3 (Sendcloud, parcelLab and Onfleet) have [Arazzo workflows](https://apis.io/arazzos/). One honest note: AfterShip's 71 JSON Schemas and its vocabulary are derived by API Evangelist from its own OpenAPI, not published by AfterShip. SMKlog's 10 schemas are marked as published by the provider. You can browse all of it under [schemas](https://apis.io/schemas/), [vocabularies](https://apis.io/vocabularies/), [examples](https://apis.io/examples/) and [AsyncAPI](https://apis.io/asyncapis/).

AfterShip also has the outcome I described above sitting in its contract. Its email parses API takes an email and returns orders with a `confidence_score` between 0 and 1. That is a parse-this-email-into-a-shape operation that already exists as an API.

The maritime side is thinner. [Sofar Ocean](https://apis.io/providers/sofar-ocean/) leads at 46.7 and [Maersk](https://apis.io/providers/maersk-line/) is at 43.0, down from 48.7 on the previous score, both developing. Only 22 of the 47 have OpenAPI in the catalog, 10 have JSON Schema, and none have Arazzo. Maersk is the one provider where I can see the standard in the contract: three of its eight original OpenAPI files reference DCSA, with booking paths under `dcsa/bkg/v2/bookings`, bill of lading paths under `dcsa/ebl/v3/transport-documents`, and DCSA Commercial Schedules. That is a carrier publishing the industry shape as its own API.

On the [standards page](https://apis.io/standards/dcsa/), 5 catalog providers carry DCSA as a tag. GS1 has 0. EDIFACT has 0.

## What determinism changes here

Shipping is a reconciliation business. A container has one booking reference, one transport document reference, and a chain of events that have to line up against each other and against an invoice for demurrage and detention weeks later. If a model reads the same exception email twice and returns `AttemptFail` once and `Exception` the next time, you now have two histories for one package and a support ticket nobody can explain.

Batch-invariance matters because this is volume work. Tracking updates get parsed in bulk, at peak, next to everything else in the batch. The answer for one shipment can't depend on what other shipments happened to be in the same batch.

Deterministic sampling matters for the paperwork. A bill of lading carries legal weight, and customs declarations are filed against it. When someone asks why a field was populated the way it was, "run it again and you'll get the same answer" is the beginning of an audit trail. "It came out differently that time" is not.

And constraint matters because the targets are closed. A DCSA event type is one of a defined set. An SSCC is a fixed-length identifier with a check digit. A tracking status is one of nine values. A regular expression or a schema enum makes it impossible for the model to invent a tenth status or a malformed pallet ID. The receiving system rejects nothing because nothing invalid can be produced.

## Where it falls short

The big ocean carriers are mostly not in the catalog in a way a constrained decoder can use. Hapag-Lloyd scores 5.7, MSC 5.4, Ocean Network Express 4.7 and COSCO 3.3, and I can't find OpenAPI for any of them in the catalog. CMA CGM is at 14.3. The DCSA shape exists, but I can't point a model at their published version of it.

eBL platforms have the same gap. WaveBL scores 30.6, and the catalog records that it states compliance with the DCSA issuance and surrender specifications, but I can't find a contract from it in the catalog to constrain against.

GS1 and EDI are the bigger miss. The identifiers and message grammars the whole industry runs on show up as zero tags in the catalog. I did not find GS1 identifiers or EDIFACT/X12 message names in the cohort's OpenAPI or JSON Schema. That either means the APIs don't expose them by name, or the catalog isn't seeing them. Both are worth fixing. And the parcel carriers still publish their own status codes, so the shared vocabulary in practice belongs to the aggregators, not to a standard.

## Close

Shipping is better positioned for this than most industries. DCSA wrote the ocean shapes as OpenAPI, GS1 wrote the identifiers decades ago, and the parcel aggregators already boiled carrier chaos down to a handful of statuses. What's missing is the carriers publishing those shapes as their own contracts, so the constraint a model works against is the carrier's, not a third party's guess. The ones that do will be the ones whose exception emails turn into clean events on the first pass, and the same events on the second.

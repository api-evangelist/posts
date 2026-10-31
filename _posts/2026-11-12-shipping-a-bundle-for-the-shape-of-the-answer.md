---
published: true
layout: post
title: 'Shipping: A Bundle For The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/shipping-a-bundle-for-the-shape-of-the-answer.png
date: 2026-11-12
author: Kin Lane
tags:
  - Shipping
  - Logistics
  - GS1
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
I've been building bundles that pair a JSON Schema with OpenLint-format rules, after finding out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). When I [looked at shipping](https://apievangelist.com/2026/10/26/shipping-the-shape-of-the-answer/) I made a claim I now need to walk back a little. I wrote that an SSCC is a fixed-length identifier with a check digit, that a regular expression or schema enum makes a malformed pallet ID impossible, and that "the receiving system rejects nothing because nothing invalid can be produced." The first half holds for the length. The check digit doesn't work that way.

## The answer I picked

Turn a carrier's exception email into one tracking update. It's the smallest real shape in this series, a status from a closed list and a few fields around it, which makes it good for looking at what the list can and can't do. The nine statuses are the ones from AfterShip's published contract. AfterShip didn't write this bundle, and neither did anyone at a carrier.

```yaml
bundle:
  id: shipping-tracking-update
  version: 0.1.0
  status: illustrative            # uses AfterShip's status list; AfterShip did not author this
  answers: Turn a carrier exception email into one tracking update
  derived_from:
    - AfterShip's nine tracking statuses, from its published contract
    - GS1 SSCC, eighteen digits with a mod-10 check digit
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 512, seq_seed: 20261112}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [email, receivedAt, openShipments]
  rules:
    email-has-text:
      description: A scanned attachment needs extraction first
      given: $.context
      severity: error
      then: {field: email, function: truthy}
    shipments-to-match:
      description: The update must attach to a shipment we already know
      given: $.context.openShipments
      severity: error
      then: {function: length, functionOptions: {min: 1}}
shape:
  type: object
  additionalProperties: false
  required: [trackingNumber, tag, occurredAt, evidence]
  properties:
    trackingNumber: {enum: "${context.openShipments}"}
    tag:
      enum: [Pending, InfoReceived, InTransit, OutForDelivery, AttemptFail, Delivered, AvailableForPickup, Exception, Expired]
    occurredAt: {type: string, format: date-time}
    sscc: {type: string, pattern: "^[0-9]{18}$"}
    exceptionReason: {type: string, minLength: 3, maxLength: 200}
    evidence:
      type: array
      minItems: 1
      items: {type: string}
output:
  rules:
    sscc-check-digit:
      description: The pattern checks the length, this checks the digit
      given: $.answer.sscc
      severity: error
      then: {function: gs1CheckDigit}
    exception-needs-a-reason:
      description: An Exception nobody can act on is noise
      given: "$[?(@.tag=='Exception')]"
      severity: error
      then: {field: exceptionReason, function: truthy}
    failed-attempt-needs-a-reason:
      description: Same for a failed delivery attempt
      given: "$[?(@.tag=='AttemptFail')]"
      severity: warn
      then: {field: exceptionReason, function: truthy}
    status-comes-from-the-email:
      description: Every cited passage must appear in the email
      given: $
      severity: error
      then:
        function: quotedInSource
        functionOptions: {quotes: answer.evidence, source: context.email}
    not-from-the-future:
      description: An event cannot occur after the email reporting it
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: answer.occurredAt, later: context.receivedAt}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_queue}
  warn: {action: flag_for_review}
```

## Where the design choices are

**The status enum is the part that works as advertised.** A decoder cannot produce a tenth status. I said so last time, and the fixture below confirms it. If your whole problem is normalizing carrier status language into nine values, then the shape is most of your answer.

**The check digit lives in a rule.** An SSCC is 18 digits, and the last one is calculated from the other 17 with the GS1 mod-10 weighting. The pattern `^[0-9]{18}$` gets you 18 digits. A grammar could in principle encode a checksum, but writing one out as a regular expression is impractical, so `sscc-check-digit` does the arithmetic after generation. That's the correction to my earlier post: the model can produce an invalid SSCC of the right length, about nine times out of ten if it's guessing at the last digit, and only a rule catches it.

**Only open shipments can be updated.** `trackingNumber` binds from `context.openShipments`. An update to a shipment you've never heard of can't be generated, so a stray tracking number in an email thread can't create a phantom history. The cost is that the runner has to fetch those shipments first, which means knowing whose shipments to fetch. That's why the input rule checks that it did.

**`Exception` and `AttemptFail` get treated differently.** Both really should have a reason, but I made a missing reason an `error` on `Exception` and a `warn` on `AttemptFail`. Severity is doing real work here. The worst tracking event is an `Exception` nobody can act on, while a failed attempt mostly resolves itself on the next try. Those are my judgment calls and they're easy to change.

**Each conditional field is optional in the shape.** You might notice I didn't use `if`/`then` to require `exceptionReason` when the tag is `Exception`, which is the obvious JSON Schema way to say it. That's because the decoder would compile it and not enforce it. It's in the rules instead, written as a JSONPath filter, and that one choice is the whole lesson of this series so far.

## How it runs as part of inference

1. **Input rules run first.** An email with no extracted text, or no open shipments to match, stops here.
2. **The shape is bound and compiled**, in about 7 milliseconds on my laptop against DeepSeek's real tokenizer. This small shape was close to the fastest I tested.
3. **The decoder generates under the mask.**
4. **Output rules run against the email and the answer.** The status needs a quote from the email, and the event can't be later than the email that reported it.
5. **Failures retry twice, then land in a work queue.** This is volume work, and a person looking at a queue is the normal state of things. The status of a parcel doesn't justify the escalation a payment does.

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- An email saying a shipment "could not be delivered on Nov 11 at 14:05 because no one was home" became a clean `AttemptFail`.
- The same email became a `Delivered` event dated the next day, citing "delivered to the front desk" and an SSCC with a wrong last digit. **The decoder accepted it.** The rules flagged the invented quote, the date after the email, and the check digit.
- An `Exception` without a reason was accepted by the decoder and flagged by the rules.
- A tenth status, `Delayed`, with a five-digit SSCC, was refused by the decoder.
- An empty email and no open shipments were stopped by the input rules.

Look at the second one from the point of view of your customer. A package marked delivered when it was not is about the worst thing a tracking system can say. The decoder is entirely fine with it, since `Delivered` is a legal status. What flagged it was a rule requiring a real quote, and that catches a made-up quote, not a misread one. If the email says "delivery was attempted" and a model quotes exactly that and answers `Delivered`, every check here passes. Quoting a true passage doesn't prove the passage supports the conclusion.

## What's still missing

I said that DCSA wrote the ocean shapes as OpenAPI, and this isn't one of them. I went with a parcel event because it fits on a page, and because DCSA's transport documents deserve more than a subset I'd trim to fit. A bill of lading is the bundle I'd most like to see someone build next, because it carries legal weight and has plenty of fields that have to agree across a chain of events.

Rules here also check one event at a time, and I said shipping is a reconciliation business where events have to line up against each other. A `Delivered` followed by an `InTransit` is suspicious, but only if you have the history. A bundle could bind recent events as context the same way this one binds open shipments, which would make the envelope larger, and I haven't tested how that behaves.

The vocabulary question I raised is still open too. This list is the aggregator's, so I'm constraining a model to AfterShip's reading of the world. It's a useful list that a carrier never agreed to, and mapping is lossy. Shipping's shape is the most finished one I've bundled, and it still needed a rule to do a little arithmetic and a person to read the queue.

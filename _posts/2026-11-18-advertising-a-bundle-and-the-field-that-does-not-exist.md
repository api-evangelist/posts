---
published: true
layout: post
title: 'Advertising: A Bundle And The Field That Does Not Exist'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/advertising-a-bundle-and-the-field-that-does-not-exist.png
date: 2026-11-18
author: Kin Lane
tags:
  - Advertising
  - OpenRTB
  - AdCOM
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
I've been building bundles that pair a JSON Schema with OpenLint-format rules, after finding out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). When I [looked at advertising](https://apievangelist.com/2026/10/28/advertising-the-shape-of-the-answer/) I used an example brief: "CTV, US only, 30 second video, no gambling adjacency, private deal with this publisher." I said constrain the decoder to OpenRTB and that brief can only become a bid request an exchange will parse. Building it, I found that one of those five phrases doesn't have an obvious place to go.

## The answer I picked

Turn that brief into an OpenRTB 2.6 video deal request. The [specification](https://github.com/InteractiveAdvertisingBureau/openrtb2.x/blob/main/2.6.md) lives as Markdown tables, and nobody publishes a JSON Schema of it that I could find, so I wrote one from the tables for only the fields this brief needs. This is my subset, and no exchange has agreed to it.

```yaml
bundle:
  id: advertising-video-deal-request
  version: 0.1.0
  status: illustrative            # an OpenRTB 2.6 subset of ours, not an exchange's supported subset
  answers: Turn a campaign brief into an OpenRTB 2.6 video deal request
  derived_from:
    - https://github.com/InteractiveAdvertisingBureau/openrtb2.x/blob/main/2.6.md
    - https://github.com/InteractiveAdvertisingBureau/AdCOM
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 1024, seq_seed: 20261118}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [brief, deals, mimes]
  rules:
    deal-on-file:
      description: A private deal id has to exist before a request can name it
      given: $.context.deals
      severity: error
      then: {function: length, functionOptions: {min: 1}}
    brief-present:
      description: There is nothing to translate without a brief
      given: $.context
      severity: error
      then: {field: brief, function: truthy}
shape:
  type: object
  additionalProperties: false
  required: [id, imp, tmax, device]
  properties:
    id: {type: string, minLength: 1, maxLength: 64}
    tmax: {type: integer, minimum: 50, maximum: 1000}
    site:
      type: object
      additionalProperties: false
      required: [domain]
      properties: {domain: {type: string}}
    app:
      type: object
      additionalProperties: false
      required: [bundle]
      properties: {bundle: {type: string}}
    device:
      type: object
      additionalProperties: false
      required: [devicetype, geo]
      properties:
        devicetype: {enum: [3, 7]}      # AdCOM: Connected TV, Set Top Box
        geo:
          type: object
          additionalProperties: false
          required: [country]
          properties:
            country: {type: string, pattern: "^[A-Z]{3}$"}
    imp:
      type: array
      minItems: 1
      maxItems: 1
      items:
        type: object
        additionalProperties: false
        required: [id, video, pmp]
        properties:
          id: {const: "1"}
          video:
            type: object
            additionalProperties: false
            required: [mimes, minduration, maxduration]
            properties:
              mimes:
                type: array
                minItems: 1
                items: {enum: "${context.mimes}"}
              minduration: {type: integer, minimum: 0, maximum: 300}
              maxduration: {type: integer, minimum: 1, maximum: 300}
          pmp:
            type: object
            additionalProperties: false
            required: [private_auction, deals]
            properties:
              private_auction: {enum: [0, 1]}
              deals:
                type: array
                minItems: 1
                items:
                  type: object
                  additionalProperties: false
                  required: [id, bidfloor, bidfloorcur]
                  properties:
                    id: {enum: "${context.deals}"}
                    bidfloor: {type: number, minimum: 0}
                    bidfloorcur: {enum: [USD]}
output:
  rules:
    site-or-app:
      description: House rule. OpenRTB says site and app each apply only to their own inventory
      given: $.answer
      severity: error
      then:
        function: xor
        functionOptions: {properties: [site, app]}
    durations-in-order:
      description: minduration cannot exceed maxduration
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: answer.imp.0.video.minduration, later: answer.imp.0.video.maxduration}
    us-only-means-usa:
      description: House check for this brief, geo must be the ISO alpha-3 code
      given: $.answer.device.geo.country
      severity: warn
      then: {function: pattern, functionOptions: {match: "^USA$"}}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_trader}
  warn: {action: flag_for_review}
```

## The phrase with nowhere to go

Here's how the brief maps. "CTV" becomes `device.devicetype` 3, from [AdCOM's](https://github.com/InteractiveAdvertisingBureau/AdCOM) device type list. "US only" becomes `device.geo.country`, and OpenRTB wants ISO alpha-3, so it's `USA`, not `US`. A "30 second video" becomes `video.maxduration`. The private deal becomes `pmp.deals`, with `private_auction` at 1.

Then there's "no gambling adjacency." My first instinct was the `bcat` field, the block list, along with `cattax`. But the spec defines `bcat` as "blocked advertiser categories." That means it keeps gambling *advertisers* out. My brief means something else: *my* ad shouldn't run next to gambling *content*. Those are different things pointing in opposite directions, and the two fields sound close enough that a model, or a person, could easily confuse them.

So I left it out, because I couldn't find a field in the parts of the spec I read that says what the brief means in a bid request. In practice that kind of adjacency is often handled by a deal's terms or by verification vendors, and I'd want someone who trades this to correct me. But think about what a decoder would've done. If I'd given it `bcat`, it would have filled it in with confident valid-looking codes, the exchange would have parsed it, and the constraint the buyer asked for wouldn't have been applied. **A valid answer to a question the shape can't express** is the failure that worries me most in this whole series, and no rule can see it, because the document is correct.

The runner needs a way to say "this brief asked for something I can't represent." I don't have that in the bundle yet. A model constrained to a shape has no way to tell you that the shape is the wrong one, unless the shape gives it a place to say so.

## Where the other design choices are

**Only real deals.** `deals[].id` binds from `context.deals`. A model can't invent a deal ID, which would otherwise parse and then simply never match.

**`site` or `app`, as a rule.** OpenRTB says each applies only to its own kind of inventory. The natural JSON Schema is `oneOf`, and the decoder doesn't enforce that as exclusive. So it's the linter's core `xor` function, and no custom code is needed. I've labeled it a house rule, since the text stops short of a formal ban on sending both.

**`minduration` under `maxduration`.** Two fields that have to agree with each other, so that belongs in a rule.

**The floor is a guess, and that's a problem.** Nothing in the brief gives a `bidfloor`, yet the shape requires it, so a model will produce one. In a real deal that number comes from the deal itself and should be bound as context. I kept it in to show this exact trap: **a required field forces a confident answer**, whether the input supports one or not.

## The second answer: classification

The other job I described was classifying content into the IAB taxonomy. There, the shape is mostly one enum, so I tested just the enum. I loaded all 704 IDs from [Content Taxonomy 3.1](https://iabtechlab.com/standards/content-taxonomy/) and used `cattax`, which AdCOM's list has as 9 for version 3.1:

```yaml
shape:
  type: object
  additionalProperties: false
  required: [cattax, cat]
  properties:
    cattax: {const: 9}
    cat:
      type: array
      minItems: 1
      maxItems: 3
      items: {enum: "${context.taxonomy_3_1_ids}"}   # all 704
```

It compiled in about 4 milliseconds against DeepSeek's real tokenizer, so size isn't the concern. `181`, Casinos & Gambling, was accepted. `IAB9-7`, a deprecated-style 1.0 code, was refused, and so was a `cattax` of 1. That confirms what I said last time, with the same caveat as everywhere. A model can reach any of the 704, including the wrong one, and with an enum this size picking the wrong one is the whole risk.

## How it runs as part of inference

1. **Input rules run first.** No brief or no deals on file stops the request.
2. **The shape is bound and compiled**, in about 150 milliseconds on my laptop against DeepSeek's real tokenizer.
3. **The decoder generates.**
4. **Output rules run, then a trader reviews anything that failed.**

This all happens at planning time, and that's a point I should have been more careful about last time. I said an exchange answers bid requests by the billions inside a `tmax` budget and that batch invariance matters there. It does, for anything that's actually in that path. But a large model isn't sitting in a 200 millisecond auction loop building requests. The realistic place for this is ahead of time, setting up a deal or a line item, or tagging a page in advance. The determinism argument holds up there, and so does the audit argument, without pretending this is what runs in the auction.

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- A clean CTV deal request passed everything.
- One with both a `site` and an `app`, and a 60 second minimum over a 30 second maximum, **was accepted by the decoder**. The rules flagged both.
- A deal ID not on file was refused by the decoder.
- An empty brief and no deals were stopped by the input rules.

## What's still missing

Every exchange implements its own subset of OpenRTB, and I said last time that they describe it in tables. That's the piece a bundle really needs, because passing my subset says nothing about whether TripleLift or Magnite would accept the request. A bundle per exchange is what you'd actually want, and it's what I'd ask them to publish. VAST is XML and isn't in here at all.

I went in expecting advertising to be about scale. What I got instead was a good reminder that a shape can only hold the questions it was built to ask. The rules did their job on what the bid request can express. The buyer's real concern fell through a gap that was in the shape from the start, and nothing in the toolchain noticed.

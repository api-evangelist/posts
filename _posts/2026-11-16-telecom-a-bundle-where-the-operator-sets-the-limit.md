---
published: true
layout: post
title: 'Telecom: A Bundle Where The Operator Sets The Limit'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/telecom-a-bundle-where-the-operator-sets-the-limit.png
date: 2026-11-16
author: Kin Lane
tags:
  - Telecommunications
  - CAMARA
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
I've been building bundles that pair a JSON Schema with OpenLint-format rules, after finding out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). When I [looked at telecom network APIs](https://apievangelist.com/2026/10/27/telecom-the-shape-of-the-answer/), I said this was about as constrained-decoder-ready as an industry gets. A boolean, a bounded integer, a three-value enum. So I built the bundle to find out what's left for rules to do when the standard's shape is that clean. The answer is not much on the output side, and that's a useful finding.

## The answer I picked

Turn a pending transfer into a valid [CAMARA SIM Swap](https://github.com/camaraproject/SimSwap) check. The bounds are CAMARA's: `maxAge` from 1 to 2400 hours, and the E.164 pattern from its common definitions. The risk band and reason are my additions, and they stay on our side of the call.

```yaml
bundle:
  id: telecom-sim-swap-check
  version: 0.1.0
  status: illustrative            # bounds taken from CAMARA; the risk fields are ours
  answers: Turn a pending transfer into a valid CAMARA SIM Swap check request
  derived_from:
    - https://github.com/camaraproject/SimSwap/blob/main/code/API_definitions/sim-swap.yaml
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 256, seq_seed: 20261116}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [transaction, phoneNumber, operatorMaxAge]
  rules:
    operator-cap-within-camara:
      description: An operator can lower the 2400 hour limit, not raise it
      given: $.context
      severity: error
      then:
        function: schema
        functionOptions:
          schema:
            type: object
            required: [operatorMaxAge]
            properties:
              operatorMaxAge: {type: integer, minimum: 1, maximum: 2400}
    phone-is-e164:
      description: The same pattern CAMARA declares for PhoneNumber
      given: $.context.phoneNumber
      severity: error
      then: {function: pattern, functionOptions: {match: "^\\+[1-9][0-9]{4,14}$"}}
shape:
  type: object
  additionalProperties: false
  required: [phoneNumber, maxAge, riskBand, reason]
  properties:
    phoneNumber: {const: "${context.phoneNumber}"}
    maxAge: {type: integer, minimum: 1, maximum: "${context.operatorMaxAge}"}
    riskBand: {enum: [low, medium, high]}
    reason: {type: string, minLength: 3, maxLength: 200}
output:
  rules:
    high-risk-looks-back-far-enough:
      description: House policy, a high-risk transfer checks at least 72 hours
      given: "$[?(@.riskBand=='high')]"
      severity: warn
      then:
        function: schema
        functionOptions:
          schema:
            type: object
            properties:
              maxAge: {type: integer, minimum: 72}
    window-within-operator-cap:
      description: Re-checks the bound after generation, for the audit record
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: answer.maxAge, later: context.operatorMaxAge}
on_failure:
  error: {retry: 1, change: [seq_seed], then: use_policy_default}
  warn: {action: flag_for_review}
next:
  call: POST /check
  send: [phoneNumber, maxAge]     # riskBand and reason stay in the audit record
  then_shape:
    type: object
    additionalProperties: false
    required: [swapped]
    properties:
      swapped: {type: boolean}
```

## Where the design choices are

**The limit varies by who's answering.** This is what's new in this bundle. The spec says `maxAge` can go to 2400, and also that an operator may cap it lower under local privacy rules, returning `400 OUT_OF_RANGE` past that. In the first post I said you'd add that per operator as an overlay on the contract, and hand it to the decoder. Binding `maximum` to `${context.operatorMaxAge}` is the same idea, resolved at request time. The decoder can't ask for a window this operator would refuse.

I want to be precise about what this replaces. A formal [Overlay](https://apis.io/overlays/) would be the better long-term home for an operator's cap, since it's a published artifact that sits on the CAMARA contract without forking it. What I built is simpler and only works if somebody already knows the number. And I said last time that I can't find operators publishing this kind of thing as data. So somebody has to get the number from each operator's documentation or from an error message, and that's the real work here.

**An input rule stops the cap from going the wrong way.** An operator can lower the limit, not raise it. `operator-cap-within-camara` checks the number is between 1 and 2400, before it's used as a bound on anything.

**The phone number is a `const`.** It comes from the request. A model has no reason to write one, and a SIM swap check against the wrong number returns a real answer about the wrong person. Note that CAMARA itself makes `phoneNumber` optional, since it can come from a three-legged access token, and I required it to keep this simple. In that flow you'd drop it from the shape altogether.

**The bundle has a `next` step.** I said in the first post that both halves have a shape: the request to the network, and the network's answer. `then_shape` holds the response side, and it has one required boolean. A workflow like this is really what [Arazzo](https://apis.io/arazzos/) is for, and I'd expect a real version to point at an Arazzo workflow rather than hold its own `next` block. Everything that isn't `phoneNumber` or `maxAge` stays out of the call. Your risk reasoning is no business of the network's.

## How it runs as part of inference

1. **Input rules run first**, checking the phone number and the operator's cap.
2. **The shape is bound and compiled**, in about 6 milliseconds on my laptop against DeepSeek's real tokenizer, the fastest in the series.
3. **The decoder generates** a bounded window, a band and a reason.
4. **Output rules run.** `window-within-operator-cap` repeats what the decoder already enforces. That's deliberate, since the record of the check should exist independent of the engine, and a schema change or an engine upgrade could quietly loosen the constraint.
5. **If it fails, it retries once and then uses a policy default.** This one's different from the others. It sits in front of a money movement, so there's a transaction waiting. A sensible fixed window is better than a queue.

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- A 240-hour check passed against an operator capped at 720.
- **The same answer asking for 2400 hours was refused by the decoder for a 720 operator, and accepted for an operator at the full limit.** Same shape, same answer, different context, and that's the result I built this bundle to get.
- A high-risk request looking back just 24 hours passed the decoder with no errors, and raised a warning from `high-risk-looks-back-far-enough`. The 72-hour floor is a made-up house policy, there to show the pattern.
- A different phone number was refused by the decoder.
- A malformed number and a 5000-hour operator cap were stopped by the input rules.

Unlike every other bundle in this series, I didn't have a "decoder takes it, rules reject it" fixture with errors to show. The nearest one is that warning. When a standard is this tight, almost all of the contract fits inside the grammar. That's a compliment to CAMARA, and I think it says something about how to design shapes for inference generally: small, closed, independent fields leave little for the rules to carry.

## What's still missing

What decides whether this is any good is whether the model's window is sensible, and rules can't tell you. A 240-hour window is valid. Whether it should've been 72 for this transaction is a fraud judgment, and it needs outcomes data no bundle has. I also said a bank has to explain the decision on replay, and the bundle helps there with a fixed seed and a recorded reason, but a recorded `reason` from a model is a statement, not an explanation of what the model did. Don't confuse the two.

Quality on Demand, the third API from the first post, is where it gets harder. `QosProfileName` is open by design, with the real list coming from each operator's QoS Profiles API. It would bind the same way this bundle binds its cap. The runner would call that API, and the list would become the enum, which adds a network call before inference and a schema that changes whenever the operator's list changes. I'd expect that to work, and I didn't test it. And the deeper gap I named hasn't moved, because operators still publish the least around their contracts.

Telecom is the example I'd point to if someone asks what a good shape for this looks like. The thing still missing is on the operators' side: publish your cap and your profiles as data, and the bundle nearly writes itself.

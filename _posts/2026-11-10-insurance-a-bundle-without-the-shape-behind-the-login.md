---
published: true
layout: post
title: 'Insurance: A Bundle Without The Shape Behind The Login'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/insurance-a-bundle-without-the-shape-behind-the-login.png
date: 2026-11-10
author: Kin Lane
tags:
  - Insurance
  - ACORD
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Inference
---
I've been building bundles that pair a JSON Schema with OpenLint-format rules, after finding out that [the decoder only pours part of the bedrock](https://apievangelist.com/2026/11/02/the-decoder-only-pours-part-of-the-bedrock/). Insurance is the awkward one, and that makes it interesting. When I [looked at this industry](https://apievangelist.com/2026/10/23/insurance-the-shape-of-the-answer/) I concluded that the shape is real and it's behind a login. So what can you bundle when you can't read the standard?

## The answer I picked

Turn a claimant's email into a first notice of loss against one policy. The first thing to say is what this is not. **This isn't ACORD.** I don't have the NGDS files, they're for members, and I haven't read them. The six base fields come from our own placeholder in the [ACORD catalog profile](https://apis.io/providers/acord/), which I already told you has an API Evangelist `generated` marker and is a stand-in for the real shape. If you hold ACORD membership, you could do this properly, and your field names would replace mine.

Here's what I find interesting, though. A lot of what makes this bundle useful doesn't come from the standard at all. It comes from the policy.

```yaml
bundle:
  id: insurance-first-notice-of-loss
  version: 0.1.0
  status: illustrative            # NOT ACORD. The NGDS files are members only and were not read.
  answers: Turn a claimant's email into a first notice of loss against one policy
  derived_from:
    - API Evangelist's own six-field placeholder in the ACORD catalog profile
    - The policy record supplied with each request
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 1024, seq_seed: 20261110}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [email, receivedOn, policy]
  rules:
    policy-has-a-start-date:
      description: The policy period is what the output rules check against
      given: $.context.policy
      severity: error
      then: {field: effective, function: truthy}
    policy-carries-coverages:
      description: The coverage list becomes the enum, so it cannot be empty
      given: $.context.policy.coverages
      severity: error
      then: {function: length, functionOptions: {min: 1}}
shape:
  type: object
  additionalProperties: false
  required: [policyId, lossDate, lossDescription, lossLocation, claimant, coverage, evidence]
  properties:
    policyId: {const: "${context.policy.id}"}
    lossDate: {type: string, format: date}
    lossDescription: {type: string, minLength: 10, maxLength: 1000}
    lossLocation: {type: string, minLength: 3, maxLength: 200}
    claimant: {type: string, minLength: 2, maxLength: 140}
    coverage: {enum: "${context.policy.coverages}"}
    estimatedLossAmount: {type: string, pattern: "^[0-9]{1,10}\\.[0-9]{2}$"}
    evidence:
      type: array
      minItems: 1
      items: {type: string}
    # No reserve field. The decoder cannot emit what the shape does not name.
output:
  rules:
    loss-inside-policy-period:
      description: The loss cannot predate the policy
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: context.policy.effective, later: answer.lossDate}
    loss-before-the-policy-ends:
      description: The loss cannot postdate the policy
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: answer.lossDate, later: context.policy.expires}
    loss-before-the-email:
      description: A loss cannot be reported before it happens
      given: $
      severity: error
      then:
        function: notAfter
        functionOptions: {earlier: answer.lossDate, later: context.receivedOn}
    facts-come-from-the-email:
      description: Every cited passage must appear in the email
      given: $
      severity: error
      then:
        function: quotedInSource
        functionOptions: {quotes: answer.evidence, source: context.email}
    estimate-is-the-claimants:
      description: An estimate is a claim someone made, flag it for the adjuster
      given: $.answer
      severity: warn
      then: {field: estimatedLossAmount, function: undefined}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: send_to_adjuster}
  warn: {action: flag_for_review}
  always: {action: adjuster_sets_the_reserve}
```

## Where the design choices are

**The real enum is on the policy.** When I wrote the first post, I said the coverage should be one the policy actually carries, and not a plausible string. An industry code list can tell you which coverages exist. Only this policy can say which ones this insured bought. So `coverage` binds from `context.policy.coverages`, per request, and the decoder can't reach a coverage that isn't on the policy. No standard would have given me this, even a public one. The two are complementary, and the standard's job is naming things consistently across carriers.

**There's no reserve field.** In the first post I said the agentic access layer is where you'd declare that setting a reserve needs a human. In a bundle you can do something stronger and simpler. Leave it out. With `additionalProperties: false`, a decoder can't emit a field the shape doesn't name. A reserve hits financial statements. A model should get no way to write one.

**Dates get checked against three things.** The loss has to fall inside the policy period, and it can't come after the email reporting it. All three comparisons need the envelope, because none of those facts is in the answer. A decoder can tell you it's a date. It can't tell you it's a date this policy covers.

**The estimate gets flagged, not rejected.** If a claimant says the damage is about $40,000, capturing that is useful, but it's a claim someone made. `estimate-is-the-claimants` fires as a `warn` whenever it's present, so the adjuster sees it as the claimant's number.

## How it runs as part of inference

1. **Input rules run first.** No coverages on the policy record or no start date, and the request stops. An empty coverage list would otherwise be an empty enum, and that's a compiler error.
2. **The policy is bound into the shape and compiled**, in 414 milliseconds on my laptop against DeepSeek's real tokenizer, the slowest in this series so far. These are first-compile numbers and DeepInfer caches compiled grammars, but with a per-policy shape the cache has less to work with, as the bound shape can differ on each request. I didn't measure what that does at volume, and after a catastrophe volume is the whole problem.
3. **The decoder generates.** The policy ID is fixed, the coverage is from the policy, and no reserve exists.
4. **Output rules run on the email and the answer together.**
5. **Failures retry twice and go to an adjuster, who sets the reserve either way.**

## What the fixtures showed

These are hand-written documents testing each path, not model output.

- A burst pipe email became a clean notice and passed everything.
- A notice dated January 2027, describing a fire when the email describes a burst pipe, citing a quote that isn't in the email, **was accepted by the decoder**. The rules flagged the quote, the date after the email, and the date after the policy expired.
- A notice with a `flood` coverage the policy doesn't carry, plus an `initialReserve` of 50,000, was refused by the decoder. Both failures come from what the shape simply doesn't allow.
- A policy record with no coverages and no start date was stopped by the input rules.

Now the failure that matters most in this industry. The fixture picks `dwelling` for a burst pipe, and I think that's reasonable, but my rules have no opinion. If the model picks `liability`, also on the policy, every check passes. Choosing the right coverage is a coverage determination, and that's a judgment regulators and courts review. A bundle narrows the choice to what's on the policy. It doesn't make that choice right, and I wouldn't want anybody reading this to think it could.

## What's still missing

The obvious gap is the standard. Carriers using this pattern with their own field names would be recreating the problem I described in the first post, where everybody writes their own claim schema. In fact this bundle is an example of it, which is uncomfortable to say about my own file. What would change that is what I asked for last time: ACORD publishing the claim, coverage, party and submission core as open JSON Schema and vocabularies. Everything here would then bind to shared names, and a carrier's work would shrink to the policy context and the rules.

There are also pieces I left out. Claimant matching against a party record already on file needs identity data that I didn't want in an example. Multi-claimant losses and notices from brokers would break my single `claimant` string. And a free-text location is a weak answer next to a verified address. Scanned claim forms need extraction before they ever reach this step.

Insurance taught me something I didn't expect going in. I assumed that a bundle without the standard would be hollow. What I found is that the most protective parts of this file come from the policy record and from a field I left out. The shape behind the login still matters for making it work across the industry. For keeping a model out of trouble on one claim, you already hold most of what you need.

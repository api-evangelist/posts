---
published: true
layout: post
title: 'The Decoder Only Pours Part Of The Bedrock'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-decoder-only-pours-part-of-the-bedrock.png
date: 2026-11-02
author: Kin Lane
tags:
  - DeepSeek
  - Inference
  - Structured Outputs
  - JSON Schema
  - OpenLint
  - Spectral
  - Governance
---
Over the last two weeks I wrote [a series of posts](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/) about what happens when DeepInfer puts batch-invariant inference, deterministic sampling and schema-constrained output in the open. My line was that you hand the decoder a schema and then run the rules against the output afterward. I wanted to see what that looks like as something you could actually pick up and run, so I started building it. It turns out the rules have more to do than I said they did.

Back in 2024 I wrote that [JSON Schema is bedrock and Spectral rules are the landscaping](https://apievangelist.com/2024/05/07/the-diff-between-what-json-schema-and-spectral-provide-when-mapping-the-api-landscape/). I still think that is the right way to divide the work. What I hadn't thought about is that a constrained decoder doesn't read your whole schema the way a validator does. It compiles what it can turn into a grammar. So I tested which parts make it.

## What the decoder actually enforces

DeepInfer's structured output calls `compile_json_schema(schema, strict_mode=True)` from xgrammar 0.2.2, the version it pins. I took that same call and DeepSeek's real V4.1 Flash tokenizer, wrote a valid and an invalid document for 32 cases, and walked each one through the grammar token by token. This is the grammar in isolation. I didn't run the model, because that takes hardware I don't have on my desk.

| What the decoder did | JSON Schema |
|---|---|
| **Enforced** | `type`, `enum`, `const`, `pattern`, length and numeric bounds, `format` syntax, `minItems`, `maxItems`, `anyOf`, a `oneOf` whose branches don't overlap, local and recursive `$ref`, a single-branch `allOf`, `minProperties` |
| **Compiled, then let the invalid document through** | `multipleOf`, `uniqueItems`, `contains`, `not`, `if`/`then`, `dependentRequired`, `oneOf` exclusivity, multi-branch `allOf`, remote `$ref` |
| **Rejected a document that was valid** | `propertyNames`, `patternProperties` |

Two of those deserve their own sentence. A two-branch `allOf` accepted the array `[1,2]` against a schema describing an object, and a remote `$ref` accepted a bare `1`. The schema compiled, a warning went to a log, and the constraint was effectively gone. A `format: date` accepted `2026-02-31` too, because the grammar checks that it looks like a date, not that the date exists.

None of this is a criticism of DeepInfer or xgrammar. A grammar works one token at a time and can't easily remember what it already said, so "every item is different" or "this field depends on that one" are hard things to ask of it. The problem is that nothing in DeepInfer's path tells you. Your schema says one thing, the decoder enforces another, and everything looks like it worked. This isn't a secret, and other engines have noticed. vLLM and SGLang both carry their own checks for these gaps, and both pin newer xgrammar releases, where `multipleOf` is now enforced. So this is about a specific engine and version, which is why a bundle has to name the ones it was tested against.

## How much of the catalog this touches

I scanned a random sample of 39,999 JSON Schema files from the 108,659 in my local cache of the [APIs.io](https://apis.io/schemas/) provider repos. 20.5% of them use at least one keyword from the unenforced row, across 680 of the 2,282 providers in the sample. Most of that is `allOf`, in 17.2% of the files, and I counted single-branch and multi-branch together, so treat 20.5% as a ceiling. `uniqueItems` is in 0.7% and `oneOf` in 3.4%. The two keywords that reject valid output barely register, at 0.1%. It is a sample of what is cached on one machine, and many of those schemas are our own derived work, but it answers the question I cared about: yes, the shapes I said to hand a decoder would lose some of their meaning on the way in, and the owners wouldn't know.

## So what is a bundle?

If the decoder holds part of the contract and the rules hold the rest, those two things shouldn't travel separately. They should ship together with what's needed to run them. That's what I mean by a bundle: one file an inference run can load, covering the input, the shape, the rules, and what to do when something fails.

The rules use the Spectral ruleset format, the one the [OpenLint](https://openlint.org) community, which forked Spectral, is turning into a [formal specification](https://spec.openlint.org). The surrounding bundle format is mine. It isn't a standard and nobody has agreed to it. I tested with the Spectral 6.17.0 CLI, not an OpenLint build. The smallest useful example is the shape that started this thread, a [decision model](https://apievangelist.com/2026/10/12/decision-models-agreed-on-the-questions-not-the-contract/) answering a pick-one question with probabilities:

```yaml
bundle:
  id: decision-pick-one
  version: 0.1.0
  status: illustrative            # an API Evangelist example, not a standard
  answers: Pick one of the options this request offers, with a probability for each
  derived_from:
    - The yes/no, pick one and score questions eleven decision APIs now share
engine:
  runtime: deepinfer
  tested_against: {xgrammar: 0.2.2, strict_mode: true}
  so_args: {schema_type: json}
  sampling: {temperature: 0, max_tokens: 512, seq_seed: 20261102}
  env: {DEEPINFER_BATCH_INVARIANT: 1, DEEPINFER_ENABLE_MTP_VARLEN: 0}
input:
  context: [question, options]    # supplied per request, bound into the shape below
  rules:
    enough-options:
      description: A pick-one question needs at least two options
      given: $.context.options
      severity: error
      then: {function: length, functionOptions: {min: 2}}
    question-present:
      description: The question cannot be empty
      given: $.context
      severity: error
      then: {field: question, function: truthy}
shape:
  type: object
  additionalProperties: false
  required: [choice, probabilities, reason]
  properties:
    choice: {enum: "${context.options}"}
    probabilities:
      type: array
      minItems: 2
      items:
        type: object
        additionalProperties: false
        required: [option, p]
        properties:
          option: {enum: "${context.options}"}
          p: {type: number, minimum: 0, maximum: 1}
    reason: {type: string, maxLength: 280}
output:
  rules:
    probabilities-are-coherent:
      description: Probabilities sum to 1 and the choice has the highest one
      given: $.answer
      severity: error
      then: {function: probabilities}
    every-option-scored:
      description: Each offered option is scored exactly once
      given: $
      severity: error
      then:
        function: coversOptions
        functionOptions: {listed: answer.probabilities, offered: context.options}
    reason-is-given:
      description: A choice without a reason cannot be reviewed
      given: $.answer
      severity: warn
      then: {field: reason, function: truthy}
on_failure:
  error: {retry: 2, change: [seq_seed, append_rule_messages_to_prompt], then: reject}
  warn: {action: flag_for_review}
  hint: {action: record}
```

The first new idea is `${context.options}`. A static schema has to describe every possible answer, but the real constraint on a pick-one question is the options this request offered. Binding them at request time means the decoder can't emit an option nobody offered. The answer's shape is partly written by the question.

## How it runs as part of inference

**Before inference, lint the shape.** I wrote one ruleset, separate from any bundle, that targets the schema itself and fails on every keyword in the unenforced row. DeepInfer has no check like this in its path, and it costs nothing to run. Keeping it in the bundle means it travels with the shape, whichever engine you use:

```yaml
rules:
  no-uniqueitems:
    given: "$..uniqueItems"
    severity: error
    message: uniqueItems compiles but is not enforced
    then: {function: undefined}
  allof-single-branch:
    given: "$..allOf"
    severity: error
    message: multi-branch allOf can accept any JSON
    then: {function: length, functionOptions: {max: 1}}
  ref-local-only:
    given: "$..$ref"
    severity: error
    message: a remote $ref can accept any JSON
    then: {function: pattern, functionOptions: {match: "^#"}}
```

**Before inference, lint the request.** The `input.rules` run on what the caller sent, before any compile or GPU time. This matters more than it looks, because I found an empty enum doesn't produce an empty answer. It raises an error in the compiler. A request with no options should stop at the door.

**During inference, constrain.** The runner binds the context, compiles the shape, and passes it through. In DeepInfer that is close to:

```python
SamplingParams(
    temperature=0,
    seq_seed=20261102,
    so_args={"schema_type": "json", "schema": json.dumps(bound_shape)},
)
```

The decoder masks every token the grammar doesn't allow, at each step. DeepInfer's `so_args` also takes optional `trigger_token_ids`, which let the model generate freely until a token sequence appears and only then apply the grammar. That is the hook for letting a model reason first and answer in shape second.

**After inference, lint the answer.** The rules run on an envelope holding both the `context` and the `answer`. That envelope is the second new idea, because plenty of what's wrong with an answer is only wrong relative to what it was asked. This is what the `every-option-scored` rule needs.

**Then act on the severity.** My 2024 point about severity still holds here. An `error` retries or rejects, a `warn` flags for a person, and an `info` or `hint` can record what went right.

## What the rules caught

Each bundle in this series carries its own fixtures, and my check script fails unless each one behaves the way the bundle declares. For this one:

- A clean answer passed both the decoder and the rules.
- An answer choosing `none`, while giving `refund` 0.9 twice and summing to 1.8, **was accepted by the decoder**. It is a perfectly shaped lie. The rules flagged `probabilities-are-coherent` and `every-option-scored`.
- An invented option, `escalate`, was refused by the decoder.
- A request with an empty question and a single option was stopped by the input rules before anything compiled.

The compile took about 270 milliseconds on my laptop. These fixtures are documents I wrote by hand to test each path, not output from a model, so they show that the checks work. They don't show how often a model would trip them.

## Retries and determinism pull against each other

Here's a catch I'd have walked into. With deterministic sampling, the same input tokens and the same seed give you the same output. That's the entire appeal, and it also means that retrying a failed answer unchanged gets you the same failed answer, reliably. So a retry has to change something. That's why `on_failure` changes the seed or appends the rule's message to the prompt, and why the audit record has to keep whichever seed and prompt produced the final answer. You can still replay it, but only if you kept all of that.

The determinism itself has conditions too. DeepInfer's README says it takes `DEEPINFER_BATCH_INVARIANT=1`, `DEEPINFER_ENABLE_MTP_VARLEN=0` and a fixed `seq_seed`, on NVIDIA only. The second one turns off variable-length draft decoding, and I'd expect that to cost some of the speed the release is known for.

## What a bundle doesn't do

A probability that sums to 1 is still not a calibrated probability, and no rule here can tell you it is. That was the gap I named in the decision models post and a bundle doesn't close it. A bundle can guarantee an answer is well formed and consistent with what it was given. It can't guarantee it's right.

There are practical limits as well. The custom functions, like `probabilities`, are JavaScript, so a bundle that carries them carries code you'd have to trust, and how those travel between implementations is a question for the OpenLint community, not something I can decide here. I also hit two traps in the linter while building this. A `schema` rule whose options pointed at a file through `$ref` silently found nothing in my setup, so I inline the schema. And a `schema` rule reported only the first violation at a time, so a repair loop may need more than one pass. The runner that does the binding, compiling and retrying also doesn't exist yet. DeepInfer's open release is offline inference only, without an HTTP server, so somebody has to write it.

Over the next few weeks I'll build one of these for each industry from the series, starting with healthcare. Each one is a little different, because each industry leaves a different piece of the contract for the rules to carry.

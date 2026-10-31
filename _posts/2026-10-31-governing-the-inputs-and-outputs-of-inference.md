---
published: true
layout: post
title: 'Governing The Inputs And Outputs Of Inference'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/governing-the-inputs-and-outputs-of-inference.png
date: 2026-10-31
author: Kin Lane
tags:
  - Inference
  - Governance
  - JSON Schema
  - OpenAPI
  - OpenLint
  - Structured Outputs
---
I've spent the last couple of weeks writing about [DeepInfer and the shape of the answer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), walking through one industry at a time. Starting Monday I'll publish a worked example for each of them. Before that, I want to lay out the general approach in one place, because I think it is simple, and because most of it is stuff the API world already knows how to do.

We have spent fifteen years learning how to govern what goes in and out of an API. Inference has an input and an output too. I don't see why we would start over.

![A diagram of one inference run. OpenAPI supplies the JSON Schema shape. OpenLint rules gate the request and shape before generation, the JSON Schema constrains the decoder during generation, and OpenLint rules gate the answer after generation, which then retries, goes to a person, or passes.](https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/governing-the-inputs-and-outputs-of-inference-diagram.png)

## Three artifacts, three jobs

**OpenAPI says where the answer is going.** If a model is producing something for a system to act on, some operation is on the receiving end, and its request body already describes what that system accepts. That gives you a shape you didn't have to invent. When no contract exists, you're back to writing one, and at least now you know why it's worth doing.

**JSON Schema holds the model inside the shape.** Engines like DeepInfer compile a schema into a grammar and, at every step of generation, mask any token the grammar doesn't allow. The model doesn't get corrected after it invents a status code. It can't produce one. That's a stronger guarantee than validation, because it happens while the answer is being written.

**OpenLint rules check everything else.** [OpenLint](https://openlint.org) is the community fork of Spectral, and it's working the ruleset format into a [formal specification](https://spec.openlint.org). Rules can do what a grammar can't: add up the lines on an invoice, compare two fields, or confirm that a quote exists in the source document. They also carry a severity, so a failure can mean retry, flag it for a person, or simply make a note.

I've said before that [JSON Schema is bedrock and Spectral rules are the landscaping](https://apievangelist.com/2024/05/07/the-diff-between-what-json-schema-and-spectral-provide-when-mapping-the-api-landscape/). Inference changes when each one runs.

## Before, during and after

**Before generation, govern the input.** Two things get linted here. The first is the request: is the document there, is the account number valid, did the list of allowed options actually arrive? I found that an empty enum raises an error in the compiler, so that one is a practical need as well as good manners. A request stopped here costs no GPU time.

The second is the shape itself. This is the step I didn't expect to need. I tested which JSON Schema keywords the grammar actually enforces, using xgrammar 0.2.2 in strict mode, the version DeepInfer pins, and it's only part of the language. `uniqueItems`, `if`/`then`, `not`, `multipleOf`, a multi-branch `allOf` and a remote `$ref` all compiled and then let invalid documents through. Nothing tells you. So you lint the schema for what the decoder won't hold, and move those checks into rules.

**During generation, bind what you already know.** A schema doesn't have to be static. Facts from the request can go into the shape at run time: this patient, the coverages on this policy, the maximum window this operator allows. Anything the system already knows shouldn't be left for a model to extract. You can also just remove what a model has no business writing. With no reserve field in the shape, the model has no way to set a reserve.

**After generation, govern the output.** Rules run against the request and the answer together, because plenty of answers are only wrong relative to what was asked. Then the severity decides what happens next. Note the catch with retries, though. With deterministic sampling, the same input and seed give you the same output, so a plain retry fails exactly the same way. It has to change the seed, or feed the rule's message back into the prompt, and the record has to keep what it changed.

## This is governance, and it's familiar

None of this needs a new discipline. It's a published contract, a linter, severity levels, and a record of what happened. The shape and rules can be versioned, reviewed by the people who own the business process, and shared across teams, the way we already treat an API contract. What's different is where they run. The same artifacts that used to review a design at build time are now running on every answer.

I'd put them together in a single bundle that an inference run can load, and that's what the examples starting Monday will show, one per industry.

## What this doesn't get you

I want to be plain about the limits, since it's easy to oversell this.

The checks prove an answer is consistent. They can't prove it's right. A model that picks the wrong coverage from the policy's own list, and cites a real sentence from the email, passes everything. The approach narrows what can go wrong, and the judgment calls still belong to the people accountable for them.

A shape can also only hold the questions it was built to ask. If a request needs something the shape can't express, the model will still return a valid answer, and nothing in this flow will notice.

I also haven't run any of this with a model yet. So far I've tested the grammars and rules against documents I wrote by hand, which shows that the checks behave as designed. How often a real model trips them, what retries cost, and whether determinism holds with all of it attached are still open questions, and they take rented hardware to answer. I also ran the rules with the Spectral CLI, not an OpenLint build, and the bundle format is mine alone. Nobody has agreed to it.

What I'm confident about is the direction. Inference has inputs and outputs, and we already know how to describe and govern those. It would be a shame to spend the next few years rediscovering it one prompt at a time.

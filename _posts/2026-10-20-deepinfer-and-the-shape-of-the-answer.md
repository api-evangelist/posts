---
published: true
layout: post
title: 'DeepInfer And The Shape Of The Answer'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/deepinfer-and-the-shape-of-the-answer.png
date: 2026-10-20
author: Kin Lane
tags:
  - DeepSeek
  - Inference
  - Structured Outputs
  - JSON Schema
  - Decision Models
  - Determinism
  - APIs
---
DeepSeek open-sourced [DeepInfer](https://github.com/deepseek-ai/DeepInfer) last week, the inference framework that powers its own large-scale production services. It is Apache 2.0 licensed, it runs DeepSeek-V4.1-Flash on NVIDIA's newest GPUs and Huawei's Ascend NPUs, and most of the README is the kind of thing inference engineers will spend the next month arguing about: optimized kernels, expert parallelism, draft-token decoding with confidence-scheduled verification, asynchronous scheduling. It's significant on those terms alone.

But the part I keep coming back to is three lines further down the feature list. DeepInfer supports **batch-invariant inference**, so a request returns the same result no matter what else is in the batch with it. It supports **deterministic sampling**, so identical input tokens and sampling parameters produce identical output. And it supports **structured outputs**, constraining generation to a JSON schema, a regular expression, or an EBNF grammar.

Put those three together and you have something the API world has been waiting for from models: an answer you can describe ahead of time, that comes back in that shape every time, and that comes back the same way twice.

## Beyond decision models

Last week I wrote that [decision models agreed on the questions, not the contract](https://apievangelist.com/2026/10/12/decision-models-agreed-on-the-questions-not-the-contract/). Eleven providers now ask the same three kinds of question, yes or no, pick one, and score, and every answer comes back with probabilities. The questions converged. The URL didn't, and neither did the contract.

Decision models are one narrow shape: a choice and a confidence. What DeepInfer puts in the open is the machinery to make **any** shape the answer. A claim that comes back as the fields an insurer's adjudication system expects. A shipment exception as the carrier's own status codes. An invoice as the line items a tax engine needs. A clinical note as the resources a FHIR server will accept. And because the sampling is deterministic and the batching doesn't change the result, the same input gets the same structured answer on Tuesday and on Friday, which is the property every downstream system was built to assume.

I think this is how we get beyond a generic decision API and into a myriad of industry versions of it, each one shaped around a specific business outcome rather than a generic yes, no, or score.

## Where do the shapes come from?

This is the question that matters, and it is the one I have been working on for a while without quite calling it this. A JSON schema constraint is only as good as the schema. A grammar is only as good as the grammar. If every team writes its own shapes from scratch, we get the decision model problem again: everyone agrees on the idea and nobody agrees on the contract.

The shapes already exist. They are in the APIs your business and your industry already depend on, and that is a lot of what [APIs.io](https://apis.io/) has been harvesting:

- **[Schemas](https://apis.io/schemas/)** — the JSON Schema each provider publishes for the objects its APIs accept and return. A customer, an order, a claim, a payment. Hand one to a constrained decoder and the model can only answer in a shape the receiving API will accept.
- **[JSON Structure](https://apis.io/json-structure/)** — more than 47,000 type definitions with the precision JSON Schema leaves loose: decimals with scale, dates, money, unions.
- **[Vocabularies](https://apis.io/vocabularies/)** — the controlled terms an industry has settled on, which become the enums in a schema or the terminals in a grammar. The model can't invent a status code that doesn't exist.
- **[OpenAPI](https://apis.io/apis/)** and **[AsyncAPI](https://apis.io/asyncapis/)** — the request and response bodies of real operations and real events. The target shape for "produce the payload for this call."
- **[Examples](https://apis.io/examples/)** — more than 57,000 real request and response examples, the closest thing to ground truth for what a valid answer looks like in practice.
- **[Rules](https://apis.io/rules/)** — Spectral rulesets that check what a schema alone can't, run against the output after it is generated.
- **[Overlays](https://apis.io/overlays/)** — the layer where you add the agent-facing constraints to a provider's contract without forking it.
- **[Arazzo workflows](https://apis.io/arazzos/)** — the sequence. A structured answer is usually one step in a chain, and the workflow says what shape each step has to produce for the next one to work.
- **[Standards](https://apis.io/standards/)** — the profiles of what an industry actually implements, from the OpenAI interface to SCIM, graded by adoption. A standard's core tier is a shape a whole market already agreed on.
- **[Business capabilities](https://apis.io/capabilities/)** and **[markets](https://apis.io/markets/)** — which tells you, for a given business outcome, which providers' shapes are the ones that matter.
- **[Agentic access](https://apis.io/agentic-access/)** — what an operation costs, whether it can be undone, and where a human has to approve it. Shapes for the guardrails, not just the data.

That is the inference harness I think this release makes possible. Pick the business outcome. Find the capability and the providers who serve it. Take their schemas, vocabularies and examples as the constraint. Take the workflow as the sequence and the rules as the check. Run it on an engine where the output is constrained, deterministic and batch-invariant. What you get back isn't text you have to parse and hope about. It's a payload that fits the API on the other side, and it fits the same way every time.

## The contract was always the point

Most of the conversation about structured outputs so far has been about getting valid JSON out of a model. That was the hard part a year ago. With DeepInfer in the open, valid JSON is table stakes. The hard part now is the same hard part it has always been in the API world: agreeing on the shape. The decision model providers showed what happens when you don't.

The industries that will get the most out of this are the ones that already wrote their shapes down, in OpenAPI, JSON Schema, vocabularies and standards. The rest will be writing prompts that describe a shape in prose and hoping the model guesses. Deterministic inference rewards the people who did the boring work of describing their business precisely, and that has always been the case for APIs.

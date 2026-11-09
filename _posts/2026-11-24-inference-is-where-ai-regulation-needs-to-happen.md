---
published: true
layout: post
title: 'Inference Is Where AI Regulation Needs To Happen'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/inference-is-where-ai-regulation-needs-to-happen.png
date: 2026-11-24
author: Kin Lane
tags:
  - Inference
  - Regulation
  - Governance
  - Observability
  - OpenLint
  - JSON Schema
  - Structured Outputs
---
For the last month I've been working through one industry at a time, building a bundle for each that pairs a JSON Schema with OpenLint rules and runs as part of inference. [Healthcare](https://apievangelist.com/2026/11/04/healthcare-a-bundle-for-the-shape-of-the-answer/), [payments and banking](https://apievangelist.com/2026/11/06/payments-and-banking-a-bundle-for-the-shape-of-the-answer/), [insurance](https://apievangelist.com/2026/11/10/insurance-a-bundle-without-the-shape-behind-the-login/), [shipping](https://apievangelist.com/2026/11/12/shipping-a-bundle-for-the-shape-of-the-answer/), [telecom](https://apievangelist.com/2026/11/16/telecom-a-bundle-where-the-operator-sets-the-limit/), [advertising](https://apievangelist.com/2026/11/18/advertising-a-bundle-and-the-field-that-does-not-exist/) and [e-invoicing](https://apievangelist.com/2026/11/20/e-invoicing-a-bundle-for-the-shape-of-the-answer/). Now that the series is done, I want to step back and say what I think it adds up to. Inference is where AI regulation needs to happen.

Most of the conversation about regulating AI is about the models. How big they are, how they were trained, what they might be capable of. That matters, but it is a hard place to regulate from, because a model in the abstract doesn't do anything. A hospital, a bank or an insurer doesn't hurt anyone with a set of weights. It hurts someone when it runs a model on a patient's chart, a loan application or a claim, and then acts on what came back. That moment is inference. It has an input, an output and a time it happened, and it's the one place where the business, the data and the model all meet.

## The input, the output and the record

I laid out the general approach in [governing the inputs and outputs of inference](https://apievangelist.com/2026/10/31/governing-the-inputs-and-outputs-of-inference/). Before generation, rules check the request. During generation, a JSON Schema holds the model inside a shape it can't leave. After generation, rules check the answer against the request, and a failure means retry, send it to a person, or note it. Every industry in the series used the same three steps with different shapes and different rules.

What I want to add is the third piece that regulation actually needs: the record. Governing the input and output is how you keep a bad answer from going anywhere. Logging and observability are how you prove, later, to someone who wasn't there, that you did. Each run should leave behind:

- **What was asked.** The request, or a reference to it when the content is too sensitive to copy, and the input rules it passed.
- **What it was allowed to say.** The bundle's name and version, and a hash of the shape and the rules, so you know exactly which contract was in force.
- **What ran.** The model, the engine and its version, and the sampling settings, including the seed.
- **What came back.** The answer, every output rule's result and severity, and any retries, including what was changed on each one.
- **Who decided.** Whether the answer was released automatically or by a person, and which person.

None of that is new to anyone who has run an API. It's an access log, a contract version and an audit trail. We just haven't been keeping it for the call that matters most.

## Why open-source inference changes this

This is the part that makes me think the timing is right. When the only way to use a capable model was a vendor's API, everything between your request and their response was theirs. You could log what you sent and what you got. You couldn't log what governed it, because you couldn't see it.

Open-source inference frameworks move that machinery into your own house. With [DeepInfer](https://apievangelist.com/2026/10/20/deepinfer-and-the-shape-of-the-answer/), vLLM or SGLang, the grammar that constrains the output is something you compile and can inspect. The engine version is something you pin. And with deterministic sampling and batch-invariant inference, the same input, seed and settings give you the same output. That is what makes a log more than a story. An auditor can take the record, run it again, and get the same answer. I can't think of another way to give a regulator that kind of evidence about a model's behavior.

It also means the governing layer is software you can version, review and test like any other. The shape and rules in a bundle can be read by the people who own the business process, a compliance team, or an examiner. They don't need to understand the model to understand what it was allowed to produce and what was checked afterward.

There is a shared vocabulary for the telemetry too. OpenTelemetry has semantic conventions for generative AI, with attributes for the model, the operation and the token counts. They are still marked as in development, but they're a start, and a bundle's version, rule results and release decision belong right next to them in the same trace.

## The industries where it matters most

Regulators are already asking for this, using different words. The EU AI Act requires high-risk systems to log events automatically and to be designed for human oversight. Credit scoring and the pricing of life and health insurance are on its high-risk list. Banks in the US have been expected to validate and monitor their models since the Federal Reserve's SR 11-7 guidance in 2011. The NAIC's model bulletin asks insurers to govern and document how they use AI in decisions about consumers. HIPAA already requires audit controls on systems that touch patient data.

Each of those is a rule about how a model is used, not how it was built. Every one of them is easier to meet at the point of inference than anywhere else. The bundles in this series map onto them directly. The payments bundle won't release a payment without a person. The insurance bundle doesn't give the model a field to set a reserve. The healthcare bundle binds the patient instead of letting the model extract them. Each one is a policy decision, written down where it gets enforced on every answer, with a record that it was.

## What this doesn't solve

The same limits I've repeated throughout the series apply here. The checks prove that an answer is consistent, not that it's right. A model can pick the wrong option from an allowed list and pass every rule. The record shows what happened, not whether it should have.

The logs themselves need governing. A record of every inference in a hospital is a record of patient data. Where it's kept, who can read it and how long it's held are as important as anything I've described above, and in many cases the log should hold a reference, not the content.

And none of this reaches a model run somewhere you can't see. If a team calls a hosted model directly, outside the governed path, there's no bundle and no record. Regulating inference only works if the governed path is the easy one, and that's an organizational problem as much as a technical one.

I've also still only tested these bundles against documents I wrote by hand. Running them with real models at volume, and seeing what the logs look like when they're full, is the next step.

## Regulate the call

We spent fifteen years learning that you govern an API at the boundary: a published contract, checks on what comes in and goes out, and a log of every call. AI doesn't need a new theory of regulation so much as it needs that same boundary placed around inference, in the industries where a wrong answer costs someone their claim, their payment or their care. The models will keep changing. The input, the output and the record are where we can hold the line.

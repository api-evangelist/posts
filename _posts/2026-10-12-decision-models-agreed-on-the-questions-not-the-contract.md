---
published: true
layout: post
title: 'Decision Models Agreed On The Questions, Not The Contract'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/decision-models-agreed-on-the-questions-not-the-contract.png
date: 2026-10-12
author: Kin Lane
tags:
  - Decision Models
  - API Design
  - Standards
  - Methodology
  - Artificial Intelligence
---
A post came across my LinkedIn feed this week asking whether decision models will last as a category, and whether one schema is winning. TypeSafe's Jev and its System One API. OpenAI's Decisions API. AWS, Microsoft, Cloudflare, Perplexity, and a long list of others shipping models that return a choice, a score, or a yes/no probability instead of text. Then Microsoft-Decision-1 landed, built on Alibaba's Qwen, and the "Microsoft copied Jev" stories started.

I didn't want to answer with an opinion. I wanted to answer with the contracts. So I went and looked at every decision API I could find, added what was missing to our catalog, and here is what is actually published as of today.

## The questions have converged

Eleven providers now ask the same three kinds of question: yes/no, pick one, and score. Every answer comes back with probabilities.

- **[TypeSafe System One](https://github.com/api-evangelist/typesafe-ai)** — `POST /v1/systemone`. The original, and it publishes an OpenAPI.
- **[Microsoft-Decision-1](https://github.com/api-evangelist/azure-ai-foundry)** on Foundry — `/providers/microsoft/v1/systemone`, using TypeSafe's own `noul`, `choice`, and `score` question types. Microsoft only says the pattern is "similar to a system-one API." The path says the rest.
- **[Cloudflare Clef](https://github.com/api-evangelist/cloudflare)** on Workers AI — "fully compatible with Jev and SystemOne."
- **[AWS Strands Decider](https://github.com/api-evangelist/amazon-web-services)** — open source, and its server "follows the public Jev API documentation."
- **Kev**, Jared Palmer's open project — "TypeSafe Python SDK works against a Kev server unchanged."
- **[Telnyx](https://github.com/api-evangelist/telnyx)** — re-serves it as "System One-compatible."
- **[Upstage Solar Decide](https://github.com/api-evangelist/upstage-ai)** — `/v1/systemone`, in beta.
- **[Ollama](https://github.com/api-evangelist/ollama)** v0.35 — "decision models through `/v1/systemone`, based on TypeSafe's Jev API," and it serves Cloudflare's Clef through the same endpoint.
- **[LLM Gateway](https://github.com/api-evangelist/llmgateway-io)** — resells Jev on `/v1/systemone`.
- **[Perplexity](https://github.com/api-evangelist/perplexity)** — System One-shaped questions, served at `/v1/decisions`.
- **[OpenAI](https://github.com/api-evangelist/openai)** — `/decisions`, the same three ideas under different names (`predicate` instead of `noul`), plus a `refusal` answer. Still in public beta.

Microsoft didn't so much copy Jev as adopt its interface. That is what standards look like when they are still forming.

## The URL has not

Some of these serve `/systemone`. OpenAI and Perplexity serve `/decisions`. LLM Gateway, which sits in the middle and serves both, has already labeled `/systemone` legacy in favor of `/decisions`. "Swap providers by editing a URL" works, but only inside one camp. Crossing camps needs an adapter, and adapters are where lock-in lives.

## Most of the imitators are weights, not APIs

The Jev decision index on Hugging Face lists 147 models from roughly 60 organizations. That is where the "100+ imitators" number comes from, and it counts models, not companies. Nearly all of them are open weights you download and run. About ten serve a hosted API you can actually call.

## Published contracts are rare

Only four of these publish an OpenAPI for their decision API: TypeSafe, Telnyx, Perplexity, and LLM Gateway. Cloudflare publishes JSON Schemas. For AWS Strands and Ollama we generated contracts from their source code. For Microsoft and Upstage we generated them from their docs. Everything we generated is marked as ours, with sources, in each provider's repository. OpenAI added `/decisions` to its OpenAPI without changing the version number.

So most of "they all speak the same schema" rests on documentation, not on machine-readable contracts.

## Calibration is the gap

Every one of these APIs returns probabilities. None of them publishes calibration evidence in a form a machine can check. Telnyx is the one honest enough to put it in its contract: "Scores describe relative preference, not calibrated correctness." That is where an adversarial flip rate of 61% bites. The same shape does not carry the same meaning, and nothing in the contract tells you which meaning you are getting.

## Will decision models last?

Yes. But I think the question is framed too narrowly.

The shape is just an API design question. The inputs and outputs of AI are shaped by API design questions: the URL, the parameters, the schema. That's all System One is. It is a good answer to one design question about the output.

This wave is a single shape of the output. There will be future waves on the output dimension, and on the input dimension too. Jev, and its emulators, is one game in a casino full of potential games, in multiple cities of casinos, and those cities are jurisdictions.

Decision models will last as a category. There is plenty of room for expansion and stabilization of each "game" within specific industries and business sectors, as well as within jurisdictions. Healthcare will want different questions than payments. The EU will want different guarantees than the US.

What I expect to move fastest is everything around it: a rapid expansion of input and output API design patterns governing, or at least guiding, the probabilistic future we are building, and the financialization of everything around us. Microsoft serving Alibaba's weights behind TypeSafe's interface, with output priced at zero, tells you where the value isn't. It isn't in the model. It's in the contract, and in whoever can prove what the probabilities mean.

## What we'll keep measuring

Every provider above now has its decision API in our catalog, with where each contract came from and whether we generated it. Each week we will track how many providers declare compatibility with System One or OpenAI Decisions, which path they serve, how many publish a contract, and whether anyone publishes calibration. When a new game opens in a new city, it'll show up there first.

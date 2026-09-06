---
published: true
layout: post
title: 'Stainless Keys Are Inside The AI Providers Specifications'
date: 2026-09-11
author: Kin Lane
tags:
  - OpenAPI
  - Extensions
  - Stainless
  - SDKs
  - Artificial Intelligence
  - APIs.io
  - APIs
---
Nineteen keys in the `x-stainless-` namespace, across twenty-five providers. That is a smaller footprint than Speakeasy's and a much smaller one than Microsoft's. But look at whose documents they are in: OpenAI, Groq, Cloudflare, Together AI, Fireworks AI, SambaNova, Portkey, Modern Treasury, Telnyx, Mux, Gitpod, Courier, ImageKit, Langdock, Turbopuffer, Smithery.

That is a substantial share of the companies currently supplying the model layer, sitting in one SDK generator's customer list, with that generator's private vocabulary in their public contracts.

The keys themselves are the most surgical set in this whole series. `x-stainless-const` appears 818 times and marks a schema property as a fixed value — a discriminator that is always the same string, the sort of thing that should generate as a constant rather than a settable field. `x-stainless-skip` omits things from the generated client. `x-stainless-any` handles the place where a schema genuinely cannot be narrowed and the honest generated type is "anything." `x-stainless-naming` and `x-stainless-renameMap` handle the gap between what the API calls a thing and what reads well in a client library. `x-stainless-python-extend-union`, `x-stainless-python-custom-imports` and `x-stainless-go-constant-constructor` are per-language escape hatches for the cases where one generated shape does not fit every target.

There is a design philosophy visible in that list, and I think it is a good one. These are not keys that describe the API. They are keys that describe *how the description should be read* when turning it into idiomatic code in a specific language. Stainless drew a clean line between the contract and the codegen policy, and put the policy in its own namespace instead of contaminating the schema. Compare that to the years of `x-nullable` and `x-go-type` and `x-enum-varnames` scattered through the ecosystem with no owner and no consistency, and the discipline stands out.

Now here is the part that I keep turning over.

The OpenAI OpenAPI specification is probably the single most-read API contract in the world right now. Every framework that wraps a model, every gateway that proxies one, every agent runtime, every compatibility layer that claims an OpenAI-compatible endpoint — all of them are reading that document or something derived from it. And it has `x-stainless-` keys in it.

Which means an unregistered vendor vocabulary has ridden into the most heavily consumed API description of this era, and the thousands of engineers building against it have no authoritative place to look up what those keys mean. Most will correctly infer they are codegen hints and move on. Some will not. A few will copy them into their own specs, cargo-culted, because they appeared in OpenAI's and therefore looked like the way things are done. I have watched that exact mechanism spread conventions for sixteen years, and it is how `x-nullable` ended up in forty companies' documents with no owner.

There is a second-order effect worth naming too. When a compatibility ecosystem forms around one company's API — and one has, aggressively, around OpenAI's — the entire document becomes a de facto interface specification, extensions included. Companies writing OpenAI-compatible APIs are reading that file as a template. Every key in it is being treated as part of the shape, whether it was meant that way or not.

Stainless did not ask for that. It is a consequence of having built the tool that a lot of important companies chose. But it does mean the cost of leaving the vocabulary undocumented is higher for Stainless than for a vendor with the same number of customers in a quieter corner of the market.

The asks.

**Register the portable keys.** Not nineteen. I would send five: `x-stainless-const`, `x-stainless-skip`, `x-stainless-any`, `x-stainless-naming` and `x-stainless-param`. Those are the ones a foreign tool encountering a Stainless-processed document actually needs to interpret. The per-language keys — the Python union extensions, the Go constructor hints — are genuinely internal and a registry entry for them would be noise. Being selective is the point; it tells readers which keys they should care about.

**Sponsor the OpenAPI Initiative.** Stainless is a young company and I am aware that asking a startup for foundation money is a different ask than making it of AWS. But Stainless's entire product is a function that takes an OpenAPI document and returns an SDK. There is no version of this business that does not depend on that format continuing to be well-maintained, and the companies who benefit most from a specification are the ones who should be keeping its lights on. Even a small membership makes a statement about that.

**Get involved, and bring the AI-era problems.** This is where Stainless has something nobody else in the series has. Stainless is generating clients for streaming model APIs, for endpoints with polymorphic responses that change shape based on a parameter, for tool-calling interfaces, for the whole strange class of API that has appeared in the last three years. OpenAPI was not designed with any of that in mind, and it shows. The people finding those edges every day should be describing them to the Special Interest Groups, because the next version of this specification is going to have to answer for them and right now the evidence lives in one company's issue tracker.

Monday, Mintlify — one key, twenty-eight providers, doing something simpler than everything I have written about so far.

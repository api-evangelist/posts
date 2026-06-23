---
published: true
layout: post
title: JSON Schema Governs the Shape of Your Data
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/json-schema-governs-the-shape-of-your-data.png
date: 2026-06-26
author: Kin Lane
tags:
  - API Governance
  - JSON Schema
  - OpenAPI
  - AsyncAPI
  - APIs
---
Underneath your API contract is the data, and the data has a shape, and that shape is described by JSON Schema. This is the layer where the real fights happen. OpenAPI's schema object is JSON Schema. AsyncAPI payloads are JSON Schema. Most of your validation, most of your interoperability, and almost all of your most contentious design arguments live down here at the schema level. If OpenAPI is the contract you govern, JSON Schema is the part of the contract that people actually go to war over.

I came to think of schema as the true battleground of governance, and I have the scars to prove it. I once watched a single API with a handful of schemas dominate three or four weeks of work across five to ten people. That is not dysfunction, that is just what it looks like when a schema matters. The property names, their types, whether they're required, their formats — `timeType` versus `time_type`, timestamps as ISO 8601 versus epoch seconds, how you represent currency — these are the decisions that ripple out across every consumer for years. Get them wrong and you are living with the consequences for a very long time, because changing a schema everyone depends on is one of the most expensive things you can do to an API.

So you govern the schema deliberately, and there are a few specific places to put your attention. Naming and casing of properties is schema governance, and it is the inconsistency consumers see most immediately, so it's worth being strict about. Formats are the next one — timestamps, currencies, identifiers, enumerations all need conventions you actually enforce, because these are exactly the things that must not be negotiated fresh by every team. I built a dedicated set of currency policies once for precisely this reason; money representation is not something you want eleven different opinions on. Then there's reuse: use `$ref` and shared component schemas so the same concept has one definition instead of eleven slightly different ones. Schema reuse is the most concrete, least hand-wavy form of reuse you can actually govern, and it pays off every time someone adds a new API that needs the same address or money or pagination object you already defined.

The other thing I want you to see is that JSON Schema is where multi-protocol governance quietly converges. Everybody frames governance as a REST and OpenAPI problem, but the moment you have events, streaming, or async messaging in the mix, you discover that AsyncAPI describes its payloads in JSON Schema too. Your REST contracts, your event contracts, your message payloads — they all bottom out at the same schema layer. That is a gift, because it means you don't have to invent separate governance for each protocol. Govern the shape of the data once, at the JSON Schema layer, and you've governed it across REST and async and whatever comes next, because they're all describing their data the same way underneath.

This is the layer where I'd tell anyone to spend their most careful governance attention, because it's where the cost of being wrong is highest and the cost of being right is mostly just discipline. Validate your operations against schema as a first-class governance check, not an afterthought you bolt on at runtime. Name things consistently, standardize your formats, share your definitions. None of it is exotic, but all of it compounds, and the teams that govern the shape of their data well are the teams whose APIs feel coherent to the people and the agents consuming them. The shape of your data is the shape of your business. Govern it like it matters, because it does.

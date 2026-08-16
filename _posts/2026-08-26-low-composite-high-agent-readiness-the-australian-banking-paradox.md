---
published: true
layout: post
title: "Low Composite, High Agent-Readiness: The Australian Banking Paradox"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/low-composite-high-agent-readiness-the-australian-banking-paradox.png
date: 2026-08-26
author: Kin Lane
tags:
  - Banking
  - Australia
  - CDR
  - Agent Readiness
  - Kin Score
  - Ratings
  - Agents
---

When I scored all fifty Australian banks in my catalog for the [State of Australian Banking APIs](https://reports.apievangelist.com/reports/state-of-australian-banking-apis/) sector report, two numbers came back that seem to contradict each other, and the contradiction turns out to be the most interesting thing in the whole data set. The **composite Kin Score** for the sector is low — not one bank breaks 51, the whole field tops out in the "Developing" band. The **agent-readiness** score for the same fifty banks is *high* — an average around 64, with thirty-eight of them landing in the top agent-native band. The same APIs that a human can barely adopt without a sales call are the ones an autonomous agent finds friendliest. That is the paradox, and once you see why, a lot of assumptions about "agent-ready" fall apart.

## What each score is actually measuring

The composite Kin Score is a *product-maturity* score. It answers one question: how ready is this API to be discovered, understood, adopted, and operated — by a developer today and an agent tomorrow — without a sales call? Six facets, each a public, machine-checkable signal the provider chose to publish or chose to leave out:

| Facet | Sector average | Read |
|---|:---:|---|
| Discoverability | **99.1** | Near-perfect. The CDR contract is exactly where it's supposed to be. |
| Contract quality | 53.9 | A real, valid OpenAPI everywhere — but a *shared* one, not the bank's own. |
| Developer ergonomics | 53.5 | Docs exist; most are documentation hubs, not on-ramps. |
| Commercial clarity | 24.3 | The PRD is legally free; nothing to price, no self-serve sign-up. |
| Operational transparency | **14.1** | Almost nobody publishes a changelog, status page, or SLA of their own. |
| Governance | **0.0** | Zero. Across every single one of the fifty banks. |

That governance line is not a rounding artifact — it is **0.0 for all fifty banks**, the most uniform result in my entire catalog. And it is the key to the ceiling. A bank cannot govern a contract it does not own. It inherits the Data Standards Body's version, changelog, and rules. There is nothing for the bank to hold itself to a standard *about*, because the standard is handed down. The composite is low not because these banks are bad at APIs — it's because the score measures product maturity, and a compliance obligation has none by construction.

## Why agent-readiness runs the other way

Agent-readiness asks a different question: can an autonomous agent discover, authenticate to, call, and recover from this API without a human in the loop? Scored separately, across twelve machine-checkable dimensions. And here the very thing that caps the composite is what lifts the agent score: **uniformity is what agent tooling wants.** One consistent contract, one version, one set of paths, one set of scopes, repeated fifty times, is the friendliest possible surface for a machine to reason about.

Look at the dimension coverage and the story is unmistakable:

| Dimension | Coverage |
|---|:---:|
| Spec presence | **100%** |
| Auth clarity | **100%** |
| Error semantics | **100%** |
| MCP server | **100%** |
| Agent skills | **100%** |
| Idempotency | **0%** |
| OpenAPI examples | **0%** |
| Rate-limit signal | **4%** |
| AsyncAPI events | **4%** |

The *mandated* dimensions are saturated — spec, auth, errors — and the *product* dimensions are barren — examples, rate limits, events, idempotency. Agent-readiness and product maturity have **decoupled**.

## The insight investors and operators should take from this

That decoupling is a genuine warning, especially for anyone doing diligence. You cannot infer that a bank is building a real platform from the fact that its API is machine-legible, because in this sector machine-legibility is a *free byproduct of compliance*. The agent-native badge is table stakes the regulator handed out, not a moat any bank earned. Thirty-eight banks wear it and thirty-eight banks earned it by doing nothing but re-hosting a mandated file.

So where is the signal? In the dimensions the mandate never required. The two banks that break the pattern — Up, and to a lesser degree Bendigo and Teachers Mutual — are the ones publishing the *product* dimensions: AsyncAPI events, rate limits. That is the tell. Where you see those artifacts in this sector, you are looking at a team that decided the API is a product. There are two of them.

For an operator this is liberating: request/response examples are the single cheapest agent-readiness win on the board, and **not one of the fifty banks ships them.** Publish examples, publish your rate limits, ship an event surface, and you've moved above thirty-eight banks that share your agent-native badge but did none of the product work behind it.

I walk through the composite facet by facet, the agent-readiness dimensions in full, and what separates Up from the compliance clones in the sector report: **[The State of Australian Banking APIs](https://reports.apievangelist.com/reports/state-of-australian-banking-apis/)**. Every score is reproducible against the open catalog at [APIs.io](https://apis.io). The one-line version: in this sector, high agent-readiness means the pipes are in. It does not mean anyone is home.

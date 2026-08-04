---
published: true
layout: post
title: "Spectral Rules: Machine-Readable Enforcement"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/spectral-rules-machine-readable-enforcement.png
date: 2026-06-28
author: Kin Lane
tags:
  - API Governance
  - Spectral
  - OpenAPI
  - JSON Schema
  - APIs
---
Now we get to the part everyone thinks is the whole thing. Spectral is the open-source linter that runs rules against your OpenAPI, AsyncAPI, JSON Schema, or honestly any JSON or YAML artifact you point it at. It is genuinely good, and you should absolutely use it. The only thing I want to correct is the instinct to treat it as the top of the governance stack, because it is the bottom. By the time you're writing Spectral rules, you've already [mapped your landscape](https://apievangelist.com/2026/06/24/start-by-mapping-your-api-landscape/), you've got your [OpenAPI as a source of truth](https://apievangelist.com/2026/06/25/openapi-is-the-unit-of-governance/), you understand your [schema](https://apievangelist.com/2026/06/26/json-schema-governs-the-shape-of-your-data/), and you've written your [policies](https://apievangelist.com/2026/06/27/policies-and-style-guides-the-why-above-your-rules/). The Spectral ruleset is what makes all of that enforceable. It is the floor, not the ceiling.

A Spectral rule uses JSONPath to target a property of your contract and assert something about it, and writing one is not hard. The craft is in a handful of details that separate a ruleset people respect from a ruleset people resent. The first is to keep rules atomic — one rule enforces one aspect of one policy, and it traces cleanly back to that policy. The second is the single highest-leverage thing you can configure in all of Spectral, and almost nobody does it: use the documentation URL. Every Spectral rule can carry a `documentationUrl`, and you point it at the policy that justifies the rule. Now every single lint finding becomes just-in-time guidance. An engineer trips a rule, follows the link, and reads the human-readable explanation of why the rule exists. That one configuration is the difference between a rule that teaches and a rule that just scolds.

The third detail is severity, and I want you to treat it as a policy tool rather than a technical setting. Spectral gives you four levels — error, warning, info, and hint — and they are not just cosmetic. Error blocks, and you reserve it for the genuinely non-negotiable, the things that truly cannot ship. Warning is important but not blocking. Info is guidance. Hint is a gentle suggestion. The reason this matters is that severity lets you introduce a rule softly, as a hint, watch how teams actually respond to it, and then promote it to a warning or an error as the organization matures into it. You don't have to drop a blocking rule on everyone the day you think of it. You can earn your way up. And severity can vary by domain — a mature team can run at error what a nascent team runs at warning. Governance that scales is governance that meets teams where they actually are, not where you wish they were.

The detail almost every ruleset misses entirely is that the rules themselves have a lifecycle. A ruleset is not a stone tablet you carve once and enforce forever. You version and rate your rules based on their maturity, how many APIs they actually apply to, the evidence from real reviews that they matter, and what your stakeholders think of them. A rule that started life as a hint because you weren't sure it was right earns its promotion to error when the reviews keep proving it matters. The ruleset is a living artifact that should get stronger as your evidence accumulates, exactly the way your understanding of your own portfolio gets stronger over time.

So yes, write the Spectral rules, run them, lean on them. But remember what they are. They are the machine-readable crystallization of everything above them — your mapped landscape, your governed schema, your written policies. A Spectral repo with no policies above it and no documentation URLs in it is a machine yelling error codes at people who have no idea why. A Spectral ruleset wired back to its policies, tuned by severity, and matured over time is the enforcement engine of a real governance program. Same tool, completely different outcome, and the difference is everything in [this series](https://apievangelist.com/2026/06/23/the-fundamentals-of-api-governance/) that comes before it.

<!-- paper-link -->

---

**Going deeper: [The JSON Schema Standard](https://papers.apievangelist.com/papers/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)**

9,439,146 schema objects measured inside published API contracts — and an industry still writing with the vocabulary it had in 2013.

[Read the paper — $500](https://papers.apievangelist.com/papers/the-json-schema-standard/?ae_ref=apievangelist.com&ae_pos=post-footer)

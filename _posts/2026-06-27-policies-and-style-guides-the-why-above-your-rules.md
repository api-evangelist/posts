---
published: true
layout: post
title: "Policies and Style Guides: The Why Above Your Rules"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/policies-and-style-guides-the-why-above-your-rules.png
date: 2026-06-27
author: Kin Lane
tags:
  - API Governance
  - Policies
  - Spectral
  - API Design
  - APIs
---
This is the fundamental that most governance programs skip, and skipping it is exactly why most of them fail. Here is the pattern I have watched play out over and over: a team builds a [Spectral ruleset](https://apievangelist.com/2026/06/28/spectral-rules-machine-readable-enforcement/), points it at their [OpenAPI specs](https://apievangelist.com/2026/06/25/openapi-is-the-unit-of-governance/) in a [pipeline](https://apievangelist.com/2026/07/02/ci-cd-pipelines-make-governance-consistent/), and calls it a governance program. It is not a governance program. It is the enforcement layer of a governance program with the actual governance program missing. The part they left out — the layer that makes any of it legible to a human who doesn't read YAML — is the policies and the style guide. Without that layer, your engineers see lint errors with no reasons attached, and nobody in product or leadership can engage with the work at all.

The single most useful idea I can give you about API governance is the distinction between a policy and a rule, and the relationship between them. A policy is a business artifact. It is the why. It is human-readable. It has a name, a description, the business reasoning behind it, the outcome you actually want, and a list of the rules that enforce it. Product, engineering, and leadership all relate to policies — they can read them, debate them, disagree with them, vote on them. A "versioning" policy explains what versioning means to your organization and why anyone should care. A rule, on the other hand, is a technical artifact. It is the how. It is machine-readable, it runs in your tooling, and it automates the enforcement of exactly one aspect of one policy. That versioning policy might decompose into four or five rules — version is present in `info.version`, version is not in the path, version is in the header, version follows semver — each one a small mechanical check that ladders up to the human intent above it.

Policies have one-to-many rules, and every rule links back to the policy that justifies it. That link is doing an enormous amount of quiet work. It is what lets a non-engineer understand why a build failed. It is what lets an engineer understand the business intent behind a lint error instead of just resenting it. A style guide, in the end, is nothing more than your policies organized and published for humans to read. The rules are how the machine enforces the style guide; the policies are why the style guide exists. You need both, and the link between them is the thing that makes governance feel like a shared agreement instead of an arbitrary gate.

There is one more thing I learned about policies that surprised me, and it is the most important part. The act of writing the policy is most of the value. Being forced to think through why you use a tool, where it fits in your lifecycle, and what good actually looks like — that thinking is the governance. The document is just the residue it leaves behind. I once wrote policies for how we used our design tooling, how we used mocking, how versioning worked, and in every case the writing itself surfaced more genuine disagreement and more clarity than any rule ever produced. People had been operating on unexamined assumptions for years, and the policy was the first time anyone had to say out loud what the assumption was and defend it.

So before you go build a beautiful Spectral ruleset — and we'll talk about Spectral next — sit down and write the policies. Give every rule a human-readable reason that a product manager could read and argue with. Organize those reasons into a style guide people can actually find and use. The ruleset without the policies is a machine yelling at engineers with no explanation, and that is precisely the kind of governance teams learn to route around. The policy layer is what turns enforcement into something a whole organization can understand and, eventually, agree to.

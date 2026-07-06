---
published: true
layout: post
title: A Browser-First Governance Validator for Your API Specs
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-browser-first-governance-validator-for-your-api-specs.png
date: 2026-07-07
author: Kin Lane
tags:
  - API Governance
  - API Commons
  - Spectral
  - OpenAPI
  - AsyncAPI
  - Arazzo
  - JSON Schema
  - Tools
---
I keep telling teams that governance should be something you can reach for in the moment, not a service you file a ticket against. So I am spending this stretch walking through the [governance tools I have been building under API Commons](https://apicommons.org/tools/), one per day, and I am starting with the simplest and most useful one to have open in a tab: [API Validator](https://validator.apicommons.org). Paste a document, see what your rules say about it, and move on. No backend, no account, no upload of your spec to somebody else's server — the tokens and the document never leave the page.

It lints four artifact types on purpose: OpenAPI, both 3.x and Swagger 2.0, AsyncAPI, Arazzo, and JSON Schema. The narrowness is the point. It is not trying to be a platform, it is trying to be the thing you open when you want a fast, honest read on a document in front of you. Spectral runs entirely in the browser, and the rules are a best-of-breed catalog compiled from the [API Evangelist governance ruleset](https://github.com/api-evangelist/rules) and a stack of public, redistribution-compatible Spectral rulesets from real companies. The one detail I am quietly proud of is that Swagger 2.0 gets governed at full parity with OpenAPI 3.x — the same catalog, format-gated so a rule only fires on the version it applies to and never false-positives across them, because most of the world's OpenAPI is still 2.0 and pretending otherwise helps no one.

Every rule ships at `info`, which is the philosophy I hold across all of this tooling: the default posture of governance should be to educate, not to block. You raise the individual rules to `warn` or `error` for the conventions you actually want to enforce, and those overrides live in your browser. You can retune severity, message, and description through a focused form instead of hand-editing YAML, filter rules by tag, and search GitHub, GitLab, or Bitbucket with your own token to pull any artifact straight into the editor. When you are done you can render docs, run per-artifact utilities like bundling and componentizing, and assemble everything you have saved into a single [APIs.json 0.21](https://apis.io) index.

That is the whole idea. Governance that is one tab away, portable because it is just Spectral underneath, and open because the rules that decide whether your API is any good should not be locked inside a vendor. This is the first of the API Commons tools I will be writing up over the coming days. Go [try it](https://validator.apicommons.org), and if you find a rule that is wrong for you, that is a feature — turn it down, or send it back.

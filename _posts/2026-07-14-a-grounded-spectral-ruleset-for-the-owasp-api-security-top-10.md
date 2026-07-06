---
published: true
layout: post
title: A Grounded Spectral Ruleset for the OWASP API Security Top 10
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-grounded-spectral-ruleset-for-the-owasp-api-security-top-10.png
date: 2026-07-14
author: Kin Lane
tags:
  - API Commons
  - Spectral
  - API Security
  - OWASP
  - API Governance
  - Tools
---
I have been walking through the [governance tools I build under API Commons](https://apicommons.org/tools/) one at a time, and today's is not a browser app or a website — it is a ruleset. [Spectral OWASP Ruleset](https://github.com/api-commons/spectral-owasp-ruleset) is a curated, owned, grounded Spectral ruleset that maps to the [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/), published to npm as `@api-common/spectral-owasp-ruleset`. The whole point is that any team can add a real security governance layer to their existing OpenAPI linting in one line, without adopting a platform or writing a single line of custom JavaScript.

The reason it exists is a number that has been bothering me since the [Spectral pipelines study](https://apievangelist.com): across 1,005 public API pipelines, only 14 percent run any security rules at all, and just 3.4 percent emit SARIF for the security tooling they do run. That is a governance gap you can close with a file. So I built 22 OWASP checks that cover all ten OWASP API Security categories, using only Spectral's built-in functions — `defined`, `truthy`, `pattern`, `schema`, and the rest — so there is nothing to install, audit, or trust beyond Spectral itself. It runs anywhere Spectral runs, and it lints Swagger 2.0 and OpenAPI 3.x at parity, with format-gated twins where the two specs differ structurally so a rule only fires on the shape it applies to and never false-positives across formats.

Adoption is meant to be almost boring. You either point `extends` at the raw file on a pinned tag, or you `npm i -D @api-common/spectral-owasp-ruleset` and reference it by package name, and you can layer it right on top of the Spectral OpenAPI core rules. Then you `npx @stoplight/spectral-cli lint openapi.yaml` and you have a security gate. I like running it as its own dedicated CI job, separate from the general style lint, so a security regression is unambiguous, and optionally emitting SARIF so findings land in the repository's code-scanning tab.

The part I care most about is the honesty of it. The OWASP Top 10 is partly about runtime authorization and abuse decisions that a static OpenAPI document simply cannot express, and I refuse to fake coverage for those. Where an item is directly lintable — HTTPS transport, no HTTP Basic, API keys out of the URL, payload bounds, inventory metadata — you get a real check. Where it is not, like object-level authorization or SSRF allow-listing, you get the strongest static proxy I can honestly write, such as "is auth even declared on this operation," marked as advisory so you know to enforce the rest in code, tests, and your gateway. Every single rule names the OWASP item it defends, describes the risk, and deep-links the source, because a governance rule should be able to explain itself.

This is one more of the [API Commons tools](https://apicommons.org/tools/), open and Apache-2.0 like the rest of them, and it is deliberately the least flashy — a security ruleset you turn on and keep. Grab it from [GitHub](https://github.com/api-commons/spectral-owasp-ruleset) or [npm](https://www.npmjs.com/package/@api-common/spectral-owasp-ruleset), extend it into your `.spectral.yaml`, and if a rule is wrong for your context, turn it down or send it back.

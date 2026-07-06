---
published: true
layout: post
title: Governing What Agents Are Allowed to Consume
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/governing-what-agents-are-allowed-to-consume.png
date: 2026-07-24
author: Kin Lane
tags:
  - API Commons
  - API Governance
  - Consumer API Governance
  - Agents
  - MCP
  - Tools
---
For a couple of weeks now I have been walking through the [governance tools I have been building under API Commons](https://apicommons.org/tools/), one per day, and this is the last one in that run. I saved it for the end on purpose, because it is the tool that flips the whole conversation around. Everything else I have written up this month governs what a producer ships — is your API well-formed, well documented, secure. [Context Gate](https://contextgate.apicommons.org) governs the other direction entirely: of everything your APIs can actually do, what should an agent be allowed to consume? That is the question I have not been able to stop thinking about, and it is the one nobody's governance pipeline is set up to answer.

The premise is that the context you hand an agent is a surface you compose and govern on purpose, not everything your backend happens to expose. So you start by sourcing your APIs — search [APIs.io](https://apis.io), pull from GitHub with your own token, or just paste an OpenAPI in — and then you make two deliberate choices. First you pick the operations you are willing to expose, and that selection becomes both the API paths and the MCP tools you offer. Then you go field by field, including or excluding individual parameters and request and response schema fields, flagging the ones that are PII, pruning anything an agent has no business seeing. Excluding a parent object cascades to its children, which is exactly how you want least privilege to behave. Nothing leaves the page while you do this; it all runs in your browser.

What comes out the other side is three governed artifacts that fit together. There is a Tyk OpenAPI — a self-contained spec with only the operations and fields you kept, carrying the `x-tyk-api-gateway` extension so authentication, allow-listing, request validation, and rate limits are wired per operation. There is an MCP tool manifest, one tool per exposed operation, with input schemas built from exactly the parameters and body you left in. And there is a Spectral ruleset written for that exposed surface specifically — base validity of the Tyk spec, extension posture, schema minimization, and the checks that matter most when you are handing data to an agent: PII review, secret-field blocking, and no secrets sitting in parameters.

I love that it does not stand alone. The Tyk spec it emits can go straight into the [Validator](https://validator.apicommons.org) to lint against the ruleset it generated, and the ruleset can go into [Agent Rule Export](https://agents.apicommons.org) so the agent itself is handed the rules. That is the whole shape of what I have been building — small, open, Spectral-underneath tools that pass their output to each other instead of trapping you in one platform. Consumer-centric governance was the piece missing from all of it, and this is where the series was headed the entire time.

So that is the run. Go [try Context Gate](https://contextgate.apicommons.org), and if you want the full picture, the rest of the [API Commons tools](https://apicommons.org/tools/) are right there next to it. Governing what your agents are allowed to consume is not a nice-to-have anymore, and I would rather you had a free tool for it than a ticket to file.

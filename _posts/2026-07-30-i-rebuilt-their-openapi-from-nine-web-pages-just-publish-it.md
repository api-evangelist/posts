---
published: true
layout: post
title: 'I Rebuilt Their OpenAPI From Nine Web Pages. Just Publish It.'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/i-rebuilt-their-openapi-from-nine-web-pages-just-publish-it.png
date: 2026-07-30
author: Kin Lane
tags:
  - OpenAPI
  - API Discovery
  - API Security
  - API Onboarding
  - API Documentation
  - Agent Readiness
  - API Governance
---
Earlier this week I [profiled ZotGPT](https://apievangelist.com/2026/07/28/zotgpt-what-it-looks-like-when-a-university-owns-its-ai-infrastructure/), UC Irvine's campus-owned generative AI platform, into the API Evangelist network. It has two API generations and it publishes a machine-readable definition for neither. The Azure API Management developer portal is live and returns HTTP 200, but it gates its API definitions behind sign-in. The documented data-plane hosts do not even resolve from the public internet.

So I rebuilt the spec anyway. Not by guessing — by assembling it out of things UCI had already published, in nine different places, for humans. I want to walk through exactly where each piece came from, because the exercise makes an argument better than I can make it in the abstract: **withholding the OpenAPI did not withhold a single fact.** It only made the facts expensive to collect, impossible to verify, and unreadable by machines.

## Where each piece of the spec actually came from

Here is the honest inventory. Nothing below was inferred from a vendor's generic behavior; every item is something UC Irvine wrote down somewhere public.

**The base URLs** came off the client setup guide — `https://api.portkey.ai/v1` for OpenAI-compatible clients, `https://api.portkey.ai` for Anthropic-style ones. The migration guide contributed a third, `https://app.portkey.ai/v1`. More on that in a minute.

**The operations** came off the Gateway service page, in prose: it "supports chat completions, embeddings, and streaming responses." Three sentences of marketing copy are a `paths` object if you read them as one.

**The path** came off the deprecated API's page, which names the endpoint outright: `https://api.zotgpt.uci.edu/v1/chat/completions`. They published the route. It was never a secret.

**The security scheme** came off the client guide — the virtual key goes in an `x-portkey-api-key` header, and Anthropic-style clients use the `bearer` scheme instead. That is a complete `securitySchemes` block sitting in a setup tutorial.

**The one genuinely campus-specific parameter** — `x-portkey-provider`, carrying an alias like `@zotgpt-api-bedrock` or `@openai-prod` — came from the same page, along with a fully-qualified model slug, `@zotgpt-api-bedrock/us.anthropic.claude-opus-4-7`. That is an enum I could not have invented and did not have to.

**The request and response schemas** came from the specification UCI says it adopted. The Gateway "leverages the Portkey API specification," and the migration guide shows the OpenAI Python client used unchanged against it. Declaring your lineage is itself a schema hint.

**A working example** came from the migration guide, which prints the actual before-and-after constructor. That is a `requestBody` example handed over verbatim.

**The deprecation metadata** — three phases, "all remaining Azure API keys disabled" — came from the same guide, and became `deprecated: true` plus an `x-lifecycle` block.

**The infrastructure facts** came from DNS, TLS, and HTTP: AWS ALBs in us-west-2 under `*.aws.uci.edu` for the app plane, Azure APIM in West US 2 for the API control plane, a 302 into the campus Shibboleth IdP on every human surface, and an APIM JSON error envelope at the gateway root. That last one is quietly the most useful thing on the list — it tells you the error shape *and* it tells you the product sitting in front of the API, which means you know an OpenAPI export exists, because Azure API Management has always been able to emit one.

Nine sources. One afternoon. Two OpenAPI 3.1 documents, marked `generated`, each carrying provenance and evidence blocks naming the page every claim came from. They are in the [repo](https://github.com/api-evangelist/zotgpt) if you want to check my work.

## What that actually proves

**The spec was already public.** It was just distributed across nine surfaces, encoded in English, and structured for a person with a browser and an afternoon rather than for a program.

I want to be precise about what gating the definition accomplished, because the answer is "three things, all of them bad for the provider":

It made the public information **expensive to assemble**. Anyone integrating pays the same afternoon I paid, over and over, in parallel, forever. That cost does not fall on the provider, which is exactly why it goes unnoticed and never gets fixed.

It made the information **unverifiable**. My reconstruction is careful and it is still an approximation. There are absolutely fields, error shapes, and constraints in the real service that no amount of reading prose will surface. When a spec is generated by an outsider rather than published by the operator, everyone downstream inherits a document that is *probably* right — and "probably" is a terrible property for a contract.

And it **guaranteed drift**. I hit it immediately: the client page says `api.portkey.ai/v1`, the migration page says `app.portkey.ai/v1`. Both are UCI's own documentation. Both are live. I recorded both rather than reconciling them on UCI's behalf, because I genuinely do not know which is correct — and neither does anyone else reading those pages. A single machine-readable source of truth makes that contradiction impossible to ship. Nine hand-maintained prose surfaces make it inevitable.

## A specification is not a credential

Here is the part I actually want to argue, because I think the instinct to gate the spec is usually not reasoned — it is inherited. Somebody once said "don't expose your API surface," it sounded prudent, and it calcified into a default.

An OpenAPI document is a description of an interface. It is not access to that interface. Publishing it grants exactly zero capability that reading the docs did not already grant. And the moment you write it down that way, the security question resolves itself: **what stops an unauthorized caller is authentication, authorization, and onboarding — none of which are weakened by publishing the contract.**

ZotGPT is a good demonstration of this, because its controls are genuinely strong and *not one of them* depends on the spec being hidden:

- **Federated identity.** Every human surface 302s into the campus Shibboleth IdP. No UCInetID, no session, no key.
- **Credential issuance behind that identity.** You mint a virtual key only after signing in. There is no anonymous self-service path.
- **Entitlement by affiliation.** Faculty, staff, and graduate students qualify directly; undergraduates need a sponsoring PI. The platform knows who you are before it decides what you may do.
- **Budget as the throttle.** Per-key spend limits and workspace budget enforcement, with higher tiers gated behind KFS financial-account validation. Even a valid key cannot run away.
- **Data policy in the platform, not the docs.** P3 protection, Level 4 data prohibited, twelve-month retention, no vendor training on campus content.

Publish the OpenAPI tomorrow and every one of those still holds. An attacker with a perfect spec and no UCInetID has a beautifully-formatted description of a door they cannot open. Meanwhile a legitimate researcher stops burning an afternoon rebuilding what UCI already knows.

The counter-argument I take seriously is the narrow one: a spec can reveal *internal* operations you did not mean to expose, or admin surfaces that were only ever protected by nobody knowing the path. That is a real risk and it has a real answer, and the answer is not "publish nothing." It is to publish a **public profile** of the spec — hold the full definition internally, and emit the consumer-facing subset with the internal operations stripped. That is precisely what [OpenAPI Overlays are for](https://apievangelist.com/2026/07/30/openapi-overlays-for-stripping-internal-endpoints/), and it turns "should we publish?" from a binary into a filtering step you run in CI. If the honest reason a path stays hidden is that it has no authorization on it, the spec was never the problem.

And notice the ZotGPT case does not even reach that argument. They published the endpoint path on a public web page. The path was never hidden. Only the *structure* was — which means the gate cost them machine-readability and bought them no obscurity at all.

## The part that stings, given who they are

Under normal circumstances I would file this as ordinary technical debt. It is sharper here because of what UCI is simultaneously doing.

They are handing their campus coding agents. The Gateway docs ship real configuration guides for Claude Desktop, VS Code, and opencode. This is a university deliberately putting agentic tooling into the hands of faculty, staff, and researchers, and pointing it at campus-governed models. That is genuinely ahead of the curve.

Every one of those agents will try to discover what the Gateway can do. Every one will find nothing. No OpenAPI, no `llms.txt`, no `.well-known` anything, no MCP server, and — most costly of all — **no machine-readable model catalog**, even though the model catalog is the single most volatile thing on the platform. It has churned through Claude Opus 4.1, GPT-5, Gemini 2.5 Pro, DeepSeek-R1, GPT-5.4, Claude 4.6, Kimi K2.5, and now GPT-5.5 and Opus 4.7, and it lives in prose on a portal page. The one artifact that changes fastest is the one an agent cannot read.

The result is a platform that has done more work than most to make AI safely available, while remaining the least legible system on its own campus to the agents it is distributing. That is a solvable problem, and it is a checkbox in APIM plus a few static files.

## This is not a UC Irvine problem

I picked ZotGPT because I had just finished the profile and had the evidence in hand, but I run into this constantly across the catalog. Providers reflexively treat the definition as sensitive while publishing every fact inside it across a docs site, a getting-started guide, a migration page, a status feed, and a changelog.

The variant I hit most often is not even deliberate gating — it is a spec that exists and is simply not where anyone looks. When I profiled [Harmonic.ai](https://github.com/api-evangelist/harmonic-ai), my first pass concluded "no OpenAPI" after checking the docs host, which is a JavaScript-rendered site that happily returns an HTML shell for `/openapi.json`. The real spec — OpenAPI 3.1, eighty-six operations, two hundred twenty-four schemas — was sitting at `api.harmonic.ai/openapi.json`, on the API host root, the entire time. Nobody was hiding it. It just was not discoverable, and "not discoverable" and "not published" are the same thing to everyone downstream, including every agent.

So the ask is small and the leverage is disproportionate. Publish the OpenAPI. Put it where discovery actually looks — the API host root, and referenced from an `api-catalog` or `llms.txt`. If parts of it are genuinely internal, strip them with an overlay in CI rather than withholding the whole document. Then put your real effort into the things that actually keep the API safe: identity, credential issuance, entitlement, quotas, budgets, and a clean onboarding path.

The definition was never your security boundary. Onboarding and authorization are. When you hold the spec back, the only thing you successfully keep out is the tooling — the agent, the SDK generator, the governance scanner, the catalog, the researcher who wanted to integrate honestly. Everyone else just reads your docs and rebuilds it, the way I did, in an afternoon, and publishes an approximation of your API that you do not control.

You should be the one publishing that document. It is yours.

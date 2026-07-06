---
published: true
layout: post
title: Building the Tooling for Consumer API Governance
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/building-the-tooling-for-consumer-api-governance.png
date: 2026-07-06
author: Kin Lane
tags:
  - API Governance
  - Consumer API Governance
  - Agents
  - MCP
  - Artificial Intelligence
---
A couple of weeks ago I wrote about [consumer API governance in an agentic world](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/), and I keep making the argument from stage — APIDays New York, Amsterdam, and Munich next month. Arguments only go so far, though. A decade of vendor messaging has trained everyone to believe governance is something you do at design time while you produce an API, and you do not unwind that belief with a talk. You unwind it by building the tooling that makes the other half real, and putting it in people's hands. So that is what I have been doing.

The thesis, briefly: we should use API governance rules not only to shape and standardize the APIs we produce, but to dynamically generate and govern the context we hand to AI when we consume APIs — the ones we publish and the ones we do not control. Govern the interface, API and MCP, by rule. No PII. Products and metadata but no pricing. Whatever a given integration's context window should and should not contain. Deterministically, by rule, with or without a human in the loop. That is a very different motion than the producer-side, design-time governance the industry has been selling, and it is the only version of governance that scales to the rate at which agents and copilots reach for our resources.

The tooling I have been building for this is an openly-governed build of the Spectral linter that lives under [API Commons](https://apicommons.org), alongside a growing suite of [governance tools](https://apicommons.org/tools/). I have spent the last stretch extending it from OpenAPI out to AsyncAPI, Arazzo, MCP servers, and agent skills — a catalog of more than seven hundred rules across a dozen artifact types — plus a [browser-based validator](https://validator.apicommons.org) that runs the rules client-side and a discovery tool that finds the artifacts you depend on. All of that started as producer-side governance. The interesting part is that the exact same rules, discovery, and validation point just as easily at the APIs you consume. You just aim them the other way.

In practice that means a few things I am building toward. Consumer rulesets — call them agent-safety packs — that assert what a surface may and may not expose to an integration: no PII, no secrets, no pricing, scope-limited operations, bounded and deterministic outputs. A consumption gate in discovery, so that when you pull a third-party OpenAPI or MCP server you get a governance score before you wire it into a copilot, instead of finding out later. Governed surface generation, where a gateway like [KrakenD](https://www.krakend.io/docs/overview/) consumes from many APIs and produces exactly the API and MCP surface you need — and the declaration that shapes that surface is itself generated and governed by rulesets, both hand-crafted and machine-generated, and reviewed; this is exactly what I am building [Context Gate](https://contextgate.apicommons.org) to do. Context manifests that describe the governed context for an integration as a first-class, diffable artifact. And continuous monitoring that re-lints the APIs you depend on, so you hear about drift, a breaking change, or a new field carrying PII before your agents do.

None of this is a new product. It is the same rules, the same catalog, the same validation a team already uses to govern what it publishes — turned to face what it consumes. That matters to me, because consumer governance cannot be something each gateway or AI platform reinvents behind its own walls. The rules that decide what an agent can and cannot see are exactly the kind of thing that should be open, portable, and reviewable, which is why I am doing this in the open under API Commons rather than as one more vendor feature.

I am under no illusion that this is finished, or even fully understood. It is a big mind shift, and it will take many more waves of storytelling before it lands. But I would rather make the argument with working tooling next to it than keep making it from a slide. Producing well-governed APIs still matters. Governing consumption — shaping the context we hand to AI, deterministically, by rule — is how we keep up. I will keep refining the talk and building the tooling, one city and one release at a time. If you want to follow the build, the tools are all out in the open under [API Commons](https://apicommons.org/tools/).

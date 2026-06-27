---
published: true
layout: post
title: Building the Tooling for Consumer API Governance
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/building-the-tooling-for-consumer-api-governance.png
date: 2026-06-27
author: Kin Lane
tags:
  - API Governance
  - Artificial Intelligence
  - Agents
  - MCP
  - API Consumption
---
A few days ago I wrote about [consumer API governance in an agentic world](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/), and as I keep giving versions of that talk — Munich is next — the most common response I get in the hallway afterward is some flavor of, "okay, but what does that actually look like?" It is a fair question. It is easy to stand on a stage and argue that we should govern the APIs we consume and not just the ones we produce, and much harder to point at the tooling that makes it real. So I have been building the tooling, out in the open, so that I have something to point at when I make the argument.

The starting point is the same producer-side governance everyone already knows. Most API governance tooling exists to shape the APIs you produce — you write a style guide, encode it as rules, and run those rules at design time and in your pipeline so the APIs you ship are consistent, documented, and secure. I have been maintaining an openly-governed build of the Spectral linter under API Commons, with a real specification for the ruleset format and a catalog of rules you can run from the command line, in the browser, over HTTP, from an AI client, or in CI. That part is table stakes, and it is good work, but on its own it has a ceiling. It only ever governs the APIs you control, and only on your release cadence — while copilots and agents are reaching for the APIs you depend on far faster than any design-time review can keep up with.

So the tooling is making two moves at once. The first is to stop pretending governance ends at OpenAPI. An API product today is a REST contract and an event stream and a workflow and, increasingly, an MCP server and an agent skill, and an agent will happily reach for all of them. So the catalog now lints across a dozen artifact types — OpenAPI, AsyncAPI, Arazzo, JSON Schema, APIs.json, MCP, agent skills, and more — because the surface you have to govern is the whole surface an agent can touch, not just the JSON you hand-authored years ago.

The second move is the one that actually matters for the argument: the same rules that shape an API you produce can evaluate an API you consume. A rule that says every collection endpoint has to paginate is a design check when you are authoring your own API and an intake check when you are onboarding a third-party dependency. So alongside validation I have been building discovery — tooling that finds the API artifacts across the registries and repositories you depend on — so you can point governance at something you do not control and learn, by rule, whether it meets your bar before you ever wire an agent to it. That is governance pointed in the other direction, at consumption rather than production.

And then there is the part I care about most, which is governing the context rather than the contract. When you integrate AI into a business what you are really doing is engineering context — assembling a set of digital resources into HTTP and MCP interfaces an agent can use. Gateways like KrakenD already let you consume from many APIs and produce exactly the surface you want, and consumer governance is the set of rules that decide the shape of that surface: products and metadata but no pricing, no PII in this context window, read-only for this agent, these tools and no others. Those are the same kind of ruleset my tooling already speaks. What changes is where and when you apply them — not once at design time, but dynamically and selectively at the moment of integration, per agent and per copilot and per context window.

That is where I am taking the tooling next, and it reframes the whole roadmap around consumption: consumer rulesets you run against a dependency before you trust it, context rulesets that govern the surface you generate for an AI integration, generating governed gateway and MCP declarations so the consumed surface is rule-shaped by construction, and a standing inventory of the APIs you consume, each scored against your rules with provenance and drift alerts when a dependency changes underneath you. Producing well-governed APIs still matters, and it always will. But it will never keep pace with the rate at which agents reach for our resources, and governing consumption — shaping the context we hand to AI, deterministically, by rule — is how we keep up. Now I have something to point at when I say it.

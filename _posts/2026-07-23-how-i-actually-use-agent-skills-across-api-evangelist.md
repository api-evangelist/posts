---
layout: post
title: How I Actually Use Agent Skills Across API Evangelist
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/how-i-actually-use-agent-skills-across-api-evangelist.png
date: 2026-07-23
tags:
- Agent Skills
- Skills
- MCP
- Arazzo
- API Discovery
- API Governance
- Agents
---
Yesterday I inventoried the [MCP techniques I run across API Evangelist](https://apievangelist.com/2026/07/22/how-i-actually-use-mcp-across-api-evangelist/). Agent Skills deserve the same honest treatment, because I do not use them as a novelty—they are wired into how I package know-how, generate agent surfaces from specs, and keep the whole network discoverable. The throughline is the same one that governs my MCP work: Skills are one layer of an agent surface, not the whole thing, and the map has to stay open.

If MCP is how an agent reaches a live tool, an Agent Skill is how an agent reaches packaged expertise—the compressed, tested know-how for doing a job well. I treat that distinction as load-bearing, and everything below follows from it.

## Index Every Provider's Skills, Not Just My Own

The first technique is discovery, because a skill nobody can find is a skill that does not exist. The [apis.io/skills/ directory](https://apis.io/skills/) indexes every official provider Agent Skill—1,489 individual SKILL.md files across 75+ providers—each cross-linked to its provider profile and MCP server. I keep the count moving in public, from [The Agent-Surface Layer: 846 Skills and 239 MCP Servers](https://apis.io/2026/05/29/the-agent-surface-layer-skills-mcp/) to [Twenty-Seven More Providers Now Ship Agent Skills](https://apis.io/2026/06/28/twenty-seven-more-providers-now-ship-agent-skills/). Provider skills live under `/agent-skills/`; my own first-party skills live under `/skills/`—a deliberate namespace split so the map never blurs whose skill is whose.

## Treat Skills as One Layer of the Agent Surface

I never ship Skills alone. They go out alongside MCP servers and Arazzo workflows, because each answers a different question—MCP for live access, Skills for packaged know-how, Arazzo for multi-step orchestration. I laid this out in [API Design As I Use the API, and MCP, and Skills](https://apievangelist.com/2026/07/17/api-design-as-i-use-the-api-and-mcp-and-skills/), and it is why the provider pages on apis.io render all three surfaces together rather than treating Skills as a separate silo.

## Forge Skills From the Spec

I do not hand-author skills when a contract already describes the work. [Toolsmith](https://toolsmith.apicommons.org) generates Agent Skills—and MCP tools—per OpenAPI operation, so the skill is derived from the spec and stays in step with it. The same OpenAPI and overlays that govern an API can generate its packaged know-how, which keeps the skill honest as the API changes underneath it.

## Study the Skills Worth Copying

Good skills are a craft, and I learn it by reading the best examples in public. I spent a whole post on how much design wisdom is packed into [Speakeasy's Agent Skills](https://apievangelist.com/2026/02/06/thre-is-a-lot-of-knowledge-and-wisdom-packed-into-speakeasy-agent-skills/), because the difference between a skill that helps and a skill that clutters the context window is entirely in how it is written. The best ones, as Zyte put it this month, are the ones that say the least.

## Package My Own Research as Skills

The point of sixteen years of writing is that it can be compressed into something an agent can act on. My guided prompts on the apis.io and API Evangelist MCP servers are the first step; packaging the recurring jobs—profile a provider, audit an estate, score agent-readiness—as skills is the natural next one, so an agent gets the job-to-be-done rather than a pile of raw tools.

## Hold Skills to the Same Governance Bar

A skill is a contract, and contracts get tested. I hold my own skills to the same discipline the smart providers are converging on this month—benchmarks, eval harnesses, and testing without hitting real APIs—because an unevaluated skill is just a confident-sounding liability. Governing the agent surface means governing the Skills on it, not only the APIs beneath them.

Put it together and it is the same strategy as my MCP work, one layer over: index every provider's skills so they are discoverable, keep Skills beside MCP and Arazzo rather than instead of them, generate them from the spec, study the ones worth copying, compress my own research into them, and hold them to a real governance bar. Not an Agent Skills strategy so much as an API strategy that happens to include Skills—which is exactly how I think it should be.

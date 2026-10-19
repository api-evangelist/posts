---
published: true
layout: post
title: 'A Competitive Landscape Harness'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-competitive-landscape-harness.png
date: 2026-10-19
author: Kin Lane
tags:
  - Agent Readiness
  - MCP
  - API Design
  - Competitive Analysis
  - Standards
  - Kin Score
  - APIs
---
I am working with an API provider right now on making their platform ready for agents, including standing up their own MCP server. The most useful thing I have done for them so far isn't designing anything. It's measuring what everyone else in their market already built, and turning that into a harness for everything we build next. I am calling it a competitive landscape harness, and I think it is one of the more practical things to come out of the catalog work.

The idea is simple. Before you design a new API, iterate on an existing one, ship an MCP server, or rework your developer presence, you take the artifacts your competitors and your industry have already published and use them as the mold. Not to copy them. To know, decision by decision, what the market has settled on, where it is split, and where nobody has gone yet.

## Same bar for everyone

The first step is to profile the whole competitive set the same way, on the same day, with the same pipeline. Their OpenAPI, their MCP servers, their agent cards and server cards, their OAuth and protected resource metadata, their skills, their plans and rate limits, their sandboxes, their onboarding. All of it lands in the [APIs.io](https://apis.io/) catalog and gets scored on the [Kin Score](https://apis.io/rating/) and agent readiness. For this engagement that was eight direct competitors plus the provider itself, re-profiled on one afternoon so the numbers were comparable.

The scores matter less than you would think. They tell you who is ahead, but the useful output is the inventory underneath them: what each company actually shipped, read from live server cards, `initialize` responses, metadata documents, public repositories and docs, rather than from press releases.

## Turn the inventory into design decisions

The second step is to read that inventory feature by feature and write each difference down as a decision. Hosting, authentication to the server, tool design, discovery, skills, sandbox access, registration, scopes, observability. For each one: what did the rivals choose, and what should we do. Copy it, beat it, or deliberately decline it.

That exercise produced a list of eleven decisions, and a few of them are worth sharing because they will apply to almost anyone:

- **Generic tools or decision tools.** Some competitors converged on three generic tools: search the endpoints, get a schema, invoke. That keeps context small. Others built task-shaped tools that match a job. The answer for us was both, in layers.
- **Discoverable before clever.** The best servers in the set answer `initialize` and `tools/list` without credentials, publish a server card with instructions, and return a 401 that tells the agent how to get a key. Ours said "Authorization required" and nothing else. That was the cheapest fix in the whole document.
- **A sandbox an agent can hit with no human.** Two rivals let an agent prove an integration works before a person is involved. Ours had a trial that refused every call until a human verified something. The largest usability gap we found, and already solved by others.
- **Scoped credentials for agents.** Three competitors let a customer hand an agent a credential that can read but not write. An all-or-nothing key is the product shape of a decision about whether to stand up an OAuth issuer.
- **Skills with a CANNOT section.** The strongest skills catalogue in the set types every skill and ends each one with what the agent cannot do. That is guidance an agent actually uses.

Then the decisions get sorted into two columns: where we would be catching up, and where we would be first in the market. That second column is the one executives care about, because it is where the work turns into a position.

## Standards are the mold

The third step is what keeps this from becoming a copy exercise. Wherever a decision can be expressed as an existing standard, we use the standard. OpenAPI for the contract. Arazzo for the workflows. Overlays for the agent-facing layer on a contract we don't want to fork. An MCP server card for discovery, RFC 9728 protected resource metadata for auth, Agent Skills for operating instructions, APIs.json and the well-known API catalog for finding all of it. And an agentic access contract that says, per operation, what it costs, whether it can be undone, and where a human has to be in the loop.

The competitors show you what the market expects. The standards give you a shape that every client, marketplace and agent framework already knows how to read. Between the two you are not inventing an interface, you are filling in a mold the market and the standards bodies have already poured.

## One harness, four kinds of work

The same harness drives every kind of work on the table:

- **A new API.** Start from the operations and schemas the market already exposes for the capability, so the agent that knows the category already knows you.
- **Iterating an existing API.** The gaps are concrete: idempotency on the writes, a typed error envelope, rate-limit headers, the things that separate agent-ready from agent-native, measured against peers who already ship them.
- **An MCP server.** Tool design, discovery, auth, sandbox and observability decisions, each one benchmarked against what is live in the market today.
- **The presence and experience.** Skills, onboarding, the server card, the docs an agent reads. Programmable and easy to use for an agent, and still recognisable to the humans the market already serves.

And because everything is profiled in the same catalog, the harness checks itself. Ship a change, re-profile, and see whether you moved relative to the market and not just relative to last month.

## Why I think this matters

Most of what I see in the agent space right now is companies building in isolation. A press release, an MCP server shaped by whatever the vendor template produced, and no idea whether it matches what the rest of the market converged on. The artifacts to do better already exist. Your competitors have published them, and the standards bodies have defined the shapes. A competitive landscape harness is just the discipline of reading all of it before you build, and measuring against all of it after.

It is also the kind of work APIs.io makes possible at scale. The same harness I am running for one provider can be run for any market in the catalog. If you want to know what your market has already built, and where you could be first, that is a conversation I am happy to have.

---
published: true
layout: post
title: 'Agents Should Write Code to Integrate, Not Infer It at Runtime'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-should-write-code-to-integrate-not-infer.png
date: 2026-09-01
author: Kin Lane
tags:
  - Agents
  - AI
  - MCP
  - OpenAPI
  - Integration
  - API Design
  - Determinism
---
Here is the strongest opinion I hold about agents and APIs right now, and I know it cuts against the mood of the moment: for most real integrations, you do not want the agent inferring what an API said at runtime through [MCP](https://modelcontextprotocol.io). You want the agent to write deterministic code that integrates with the API, once, that you can read, test, and run a thousand times with identical behavior. The agent as a runtime interpreter of your APIs is a seductive idea and, for a lot of production work, a bad one. The agent as a very good developer who writes you a clean integration and then gets out of the way is the idea that actually holds up.

Let me make the failure concrete. Say your workflow depends on pulling structured data out of Figma. If the agent reaches into Figma through an MCP tool at runtime and interprets the response on the fly, then every single run is a fresh act of inference. The model re-reads, re-interprets, and re-decides what Figma said, every time, and it will not decide identically every time — that is not a defect you can patch, it is what a probabilistic system does. So you are one temperature setting away from the agent hallucinating what Figma told it, and you will not find out until the run that mattered. You have taken a boring, solved problem — call an API, parse the response — and reintroduced nondeterminism into the middle of it for no reason other than that it demoed well.

Now run it the other way. The agent reads the [OpenAPI](https://spec.openapis.org) for Figma's API, and instead of calling it live and interpreting the result, it writes you a small, deterministic integration — real code, against the real contract, that calls the endpoint and parses the response the same way on every invocation. You read that code. You test it. You commit it. From then on the integration runs deterministically, with no model in the hot path, and if Figma changes their API you will find out because your tests break, not because an agent quietly started guessing differently on a Tuesday. The intelligence was spent once, up front, in authoring the integration — which is exactly where you want the intelligence, and exactly where you do not want the nondeterminism.

This is really an argument about where inference belongs. Inference is fantastic for the open-ended, one-off, genuinely ambiguous parts of a task — figuring out what the user wants, deciding which of several approaches fits, handling the weird case that no one wrote code for. Inference is a terrible fit for the deterministic, repeated, well-specified parts, and "call this API and parse this response" is about as deterministic and well-specified as work gets. We spent decades building tooling to make integrations reliable and testable. Moving that work into a model's runtime interpretation throws all of it away and calls the result innovation. The [OpenAPI is the unit of governance](https://apievangelist.com/2026/06/25/openapi-is-the-unit-of-governance/) precisely because it is the deterministic contract — and the right thing to do with a deterministic contract is generate deterministic code against it, not feed it to a probabilistic interpreter over and over.

None of this means MCP is useless — it means MCP is being pointed at the wrong phase. MCP is genuinely good for the exploratory, interactive, figure-out-what-is-possible phase, where a human or an agent is discovering capabilities, poking at a system, and deciding what to build. That is inference-shaped work and MCP serves it well. The mistake is leaving the agent inferring against the API in *production*, on the repeated path, where you wanted determinism all along. Use MCP to explore and decide; use generated, reviewed, tested code to run. The line between those two phases is the line between where inference helps and where it quietly becomes a liability, and a lot of teams have not drawn it yet.

So my advice to anyone building agent-driven integrations is almost boring, and I mean that as praise. Let the agent be a brilliant developer, not a permanent runtime dependency. Point it at the API's real contract, have it write you an integration you can actually read, review that integration like you would review any pull request, test it, and run the deterministic thing forever. Spend the model's intelligence on authoring, not on interpreting the same response for the ten-thousandth time. The goal was never to put a language model in the middle of every API call your business depends on. The goal was to get a reliable integration built faster — and the fastest reliable integration is still deterministic code, now written by a very capable agent instead of by you at two in the morning.

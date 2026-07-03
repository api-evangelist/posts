---
published: true
layout: post
title: Put Governance Where the Agent Can Reach It
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/put-governance-where-the-agent-can-reach-it.png
date: 2026-07-07
author: Kin Lane
tags:
  - API Governance
  - MCP
  - Model Context Protocol
  - Spectral
  - Agents
  - Artificial Intelligence
---
I made the case last week that you should [govern in the IDE, where the work happens](https://apievangelist.com/2026/07/01/govern-in-the-ide-where-the-work-happens/) — get the ruleset in front of the engineer while they're still typing, instead of waiting for a red CI build to tell them what they already forgot. That argument has a hole in it now, and the hole is the part of the work that isn't typed by an engineer at all. An agent drafting an OpenAPI document in a chat, wiring up an Arazzo workflow on request, scaffolding an MCP server for you — none of that touches an IDE, and none of it touches CI until much later, if ever. If governance only lives in the two places I've been telling you to put it, an agent walks straight past both.

So this week I published the fix: [**API Governance MCP**](https://github.com/api-commons/api-governance-mcp), a Model Context Protocol server that puts the exact same governance ruleset I've been describing all series — the [Spectral](https://apievangelist.com/2026/06/28/spectral-rules-machine-readable-enforcement/)-powered, 733-rule catalog behind [API Validator](https://validator.apicommons.org) — one tool call away from any agent client. `npx @api-common/api-governance-mcp`, and Claude, Cursor, or whatever assistant you're already using can lint an OpenAPI, an AsyncAPI, an Arazzo workflow, even an MCP server definition, and get back exactly what the browser tool would have told a human: findings, severity, the JSONPath that tripped, and a remediation prompt.

Here's why I think this is a bigger deal than "the linter now has an MCP wrapper." The whole friction model of governance tooling up to now has been: it works exactly as well as people's discipline about going to get it. Open the validator tab. Remember to run the CLI. Wait for CI. Every one of those is a step a person has to choose to take, and every one of those steps is a place adoption quietly leaks. An MCP tool doesn't ask anyone to remember anything — it's a capability the agent already has, sitting right next to the other things it already knows how to do, like running a test suite or checking that code compiles. The artifact gets checked as a normal part of producing it, not as a separate errand bolted on after. That's the same shift the IDE made for humans, extended to whatever is doing the drafting now.

The part I was most careful about is the part that isn't a lint rule at all. I've written before that [governance is seventy-five percent people work](https://apievangelist.com/2026/07/05/api-governance-is-75-percent-people-work/), and a tool that only knows how to fix `kebab-case` violations is going to hit its ceiling fast — some findings need a judgment call, a custom ruleset for your organization, or a genuine review, not an autocorrect. So the server ships a `request_review` tool alongside the linting ones: when that's the situation, it hands the agent a ready-to-send email to actually bring in a human — an [API Evangelist](https://apievangelist.com/services/) governance review, a custom ruleset engagement, an advisory retainer — instead of pretending the automation is the whole answer. The tool knows the difference between "fix this" and "escalate this," and I think that distinction is what keeps agentic governance from becoming a rubber stamp.

It's open source, Apache-2.0, live today under [API Commons](https://apicommons.org) — I wrote more about how it's built on [the API Commons blog](https://apicommons.org/2026/07/06/an-mcp-server-for-api-governance/). One more piece of turning governance from something you have to go visit into something that's simply there, wherever the work is actually happening now — including inside the conversation with the agent doing it.

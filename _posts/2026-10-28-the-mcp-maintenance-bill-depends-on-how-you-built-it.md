---
published: true
layout: post
title: 'The MCP Maintenance Bill Depends On How You Built It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-mcp-maintenance-bill-depends-on-how-you-built-it.png
date: 2026-10-28
author: Kin Lane
tags:
  - MCP
  - API Lifecycle
  - API Governance
  - OpenAPI
  - Agents
  - Budgets
---
One of the sharpest responses to [MCP is last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/) took my own argument to the CFO. If the API is the water main and the MCP server is the flexible supply line under the sink, then teams are now paying for two surfaces, forever. Someone has to budget for maintaining the MCP server alongside the API it sits on.

That's right, and I want to start by granting it. I told that commenter I'd help make the budget argument, so here it is. The answer is that the bill depends almost entirely on how the server was built.

## Two ways to build the same server

**A derived server** is generated from the contracts you already have. Your OpenAPI says what the operations are. A small set of rules, which I'd argue every team should write down, says which of those operations become tools, what they're named, how they're described, which ones are read-only and which ones need confirmation. A build step turns the two into a tool list. When the API changes, the contract changes, the build runs, and the server changes with it.

**A hand-written server** is code someone wrote against whatever was lying around: the API, the SDK, the database, a few internal endpoints, sometimes the website. It has its own names, its own descriptions, its own error handling and its own idea of what each operation does. When the API changes, someone has to notice, and someone has to go change the server too.

The first is a build artifact. The second is a second product.

## What each one actually costs

A derived server's ongoing cost is close to the cost of the build step and the rules file. You paid for the contract already. You were going to version it, review it and test it anyway. The MCP server inherits all of that work instead of duplicating it. The real maintenance is in the rules, deciding which operations an agent should be allowed to touch and how they should read, and that's governance work that pays off everywhere the contract is used.

A hand-written server's cost compounds. Every API release is a chance for the two to drift. Every bug gets fixed twice, or once and in the wrong place. Every new name, description and error message is written by hand, and the next person writes theirs differently. Nobody budgeted for that, because on day one it looked like a few days of work.

The catalog shows both failure modes. When I [read 103,737 MCP tool names across 4,439 servers](https://apievangelist.com/2026/10/27/writing-the-style-guide-for-the-tools-an-agent-reads-first/), 2,787 tools across 315 servers were named after an HTTP method. That is an OpenAPI turned into tools with no rules in between, derived without the governance. And 228 servers mixed naming styles inside a single tool list, which is what hand-writing looks like when more than one person does it. Even our own two servers, built by the same practice within months of each other, had drifted from each other before I wrote the conventions down.

## The budget argument

So the line to put in front of a budget owner is not "MCP costs extra." It's this: a hand-written MCP server costs extra, every release, forever. A derived MCP server is a line item you already paid for when you invested in your API contracts.

That changes where the money should go:

- **Fund the contracts.** Complete OpenAPI, with examples and good descriptions. It's the source for the API docs, the SDKs, the tests and now the MCP server.
- **Fund the rules.** One short style guide for how operations become tools: naming, descriptions, annotations, what's exposed and what isn't. Write it once, enforce it in the build.
- **Don't expose everything.** Generating a tool for every endpoint is the cheap way to derive a server and the expensive way to run one. The rules should pick the handful of jobs an agent should be allowed to do.
- **Hand-write only the exceptions**, and treat each one as code you'll own for as long as the server lives.

Dual maintenance is real. But it isn't a tax on MCP. It's a tax on skipping the contract. If the mains are built properly, the supply line is the cheapest part of the plumbing to keep running.

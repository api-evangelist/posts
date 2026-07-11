---
published: true
layout: post
title: Forging the Agent Layer of Your API
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/forging-the-agent-layer-of-your-api.png
date: 2026-07-28
author: Kin Lane
tags:
  - API Commons
  - MCP
  - Agent Skills
  - Agents
  - OpenAPI
  - Tools
---
An OpenAPI tells a developer what your API can do. An agent needs more than that. It needs to know which operations are worth turning into tools, what each of those tools is honestly allowed to do, what context to read before it calls one, and how to actually use the thing when the moment comes. That gap — between a perfectly good API contract and an API an agent can pick up and use well — is the thing I keep running into, and it is what the newest [API Commons](https://apicommons.org/tools/) tool is built to close. It is called [Toolsmith](https://toolsmith.apicommons.org), and it is a workbench for forging the agent layer that sits on top of your API.

The way it works is you load an OpenAPI — the [API Evangelist](https://apievangelist.com) and [APIs.io](https://apis.io) APIs are one click away, or you point it at any URL, upload, or paste — and then for every operation you design a real MCP tool. Not a stub. A tool with an honest input schema drawn from the operation's parameters and request body, behavior annotations that say whether it is read-only or destructive or idempotent, the resources an agent should read for context, prompt templates that walk it through using the tool well, and sampling guidance for the cases where the server should lean on the client's model to reason over a result. Then, on top of each tool, you write one or more Agent Skills — the packaged instructions that teach an agent to apply that tool competently. You can write more than one per tool, a basic-use skill and a troubleshooting skill, and there is an API-level slot for the skills that span the whole surface, like an overview that indexes every tool and tells the agent which one to reach for.

The part I am most attached to is where all of this lives. It does not get scattered across a pile of side files you have to keep in sync. Every design you make is written back into your OpenAPI itself, as `x-mcp` and `x-agent-skills` extensions on each operation and an `x-mcp-server` block at the root. The enriched OpenAPI is the single artifact of record. You can edit the raw document directly and your designs travel with it, and you can hand that one file to anyone and they have the whole agent layer in front of them. To get moving fast there is a "Draft all" that seeds a design for every operation deterministically — input schemas, annotations, a starter prompt and skill — straight from what the contract already knows. No AI calls, nothing leaves the page; it all runs in your browser, and then you refine by hand from there.

There is a Checks tab that lints the whole thing against the actual specs — the MCP rules for tool names and schemas and annotations and the shape of a registry `server.json`, and every Agent Skills frontmatter constraint down to the name pattern and the description length caps — and each finding jumps you straight to the operation that needs fixing. And then there are the exports, which is where the design becomes something real. You can pull down the enriched OpenAPI, an MCP server design, a registry-ready `server.json` for the official MCP Registry, an Agent Skills bundle with a discovery index ready to drop into `.well-known/agent-skills/`, and the APIs.json properties that wire it all into your provider listing. But the one that closes the loop is the last one: Toolsmith will generate a complete, runnable MCP server in TypeScript, on the official SDK, where every tool proxies to its real operation with the path, query, header, and body mapping done and the auth wired from your spec's security scheme. You download the project, run `npm install && npm run dev`, and it serves. I generated one from the API Evangelist OpenAPI, pointed a real MCP client at it, and watched it list fifty-one tools and make live calls back to my own API — no glue code in between.

Like everything else under API Commons, it is open, it runs client-side, and it hands its output to the tools next to it — it pairs naturally with [Context Gate](https://contextgate.apicommons.org) for governing what an agent is allowed to consume and the [Validator](https://validator.apicommons.org) for keeping the contract honest. The agent layer is not a nice-to-have on top of your API anymore; it is the interface a growing share of your consumers will actually use. I would rather you had a free workbench for designing it deliberately than bolt it on tool by tool and hope. Go [forge one](https://toolsmith.apicommons.org).

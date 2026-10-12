---
published: true
layout: post
title: 'fx Is A Coding Agent That Tells You Which Parts Of MCP It Does Not Do'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/fx-is-a-coding-agent-that-tells-you-which-parts-of-mcp-it-does-not-do.png
date: 2026-10-20
author: Kin Lane
tags:
  - Model Context Protocol
  - MCP
  - Agents
  - Coding Agents
  - Tooling
  - Open Source
  - APIs
---
Vercel Labs has a new coding agent called [fx](https://fx.sh/). It is a small native binary, around 6MB, written in Zig, Apache-2.0 licensed, and [on GitHub](https://github.com/vercel-labs/fx) at version 0.0.13 with a banner telling you it is experimental and will change often. There is no shortage of coding agents right now, and I am not going to tell you this one writes better code than the others. What made me stop and read the whole documentation site is something much more ordinary, and much rarer. fx publishes a page that says exactly which parts of the [Model Context Protocol](https://standards.apievangelist.com/store/model-context-protocol/) it implements, and exactly which parts it does not.

## The page I want every MCP client to have

The [MCP protocol reference](https://fx.sh/docs/capabilities/mcp/protocol) for fx lists its transports, stdio, Streamable HTTP, and legacy HTTP+SSE, and then walks the core protocol feature by feature. Tools with discovery, calls, progress and cancellation. Resources and resource templates, with text and blob content. Prompts with typed arguments. Completion. List-change notifications and resource subscriptions. Elicitation, with forms and URLs that ask the user for input. Tool input schemas accepted as JSON Schema 2020-12 or Draft 7.

Then it says what is missing. fx does not implement MCP Tasks, MCP Apps, Skills over MCP, Client Credentials, or Enterprise-Managed Authorization. It does not install servers from a registry. It does not expose itself as an MCP server. That is a paragraph most projects never write, because a list of what you do not support reads like a list of weaknesses. I read it as the opposite. If I am an API provider shipping an MCP server, that paragraph tells me which of my features will actually reach a developer using this client, and which will quietly do nothing. If I am building an agent, it tells me where the edges are before I hit them.

I spent a good part of this year [measuring what tooling says it supports](https://apievangelist.com/2026/10/09/a-year-after-openapi-3-2-most-api-tooling-cannot-read-it/) for OpenAPI 3.2, and the hardest part was never the testing. It was that most tools do not state their support at all, so you are left inferring it from changelogs and issue threads. The MCP client landscape is heading the same way, with every client implementing a different slice of a fast-moving specification. A coverage table like this one is the cheapest piece of interoperability work a project can do, and it is the piece that almost nobody does.

## What else is in the box

The rest of fx is a reasonable picture of where coding agents are settling. It is model-agnostic: you can sign in with a ChatGPT or Grok subscription, go through Vercel's AI Gateway, or point it at any OpenAI-compatible Chat Completions endpoint, including a local Ollama. It reads `AGENTS.md` for project instructions, nested per directory. It installs and creates [Agent Skills](https://standards.apievangelist.com/store/agent-skills/) as `SKILL.md` folders. It runs as an [Agent Client Protocol](https://fx.sh/docs/using-fx/acp) server with `fx acp` so an editor can drive it. And `fx ask --json` gives you a single non-interactive run you can put in a script or a CI step, with progress on stderr and the result on stdout.

Two details stood out to me. The first is the permission model. The default mode runs routine things directly, reading files, editing project files, running recognized test and build commands, and sends everything else to a review model first, including every MCP tool call. Calling somebody's API through MCP is treated as an action worth a second look, which is the correct instinct. The reviewer is configurable, and one of the options named in the docs is Jev from [TypeSafe](https://apis.io/providers/typesafe-ai/), which is a nice example of a provider's product showing up as a pluggable piece of somebody else's agent. The second is [libfx](https://fx.sh/docs/lib), the same agent runtime exposed as a JavaScript library that runs natively in Node.js and in the browser through WebAssembly, with your own functions as tools and sessions that survive crashes and function timeouts. The demo on the homepage is the full CLI running in a browser tab.

## Why it goes in the tooling

I added [fx to tools.apievangelist.com](https://tools.apievangelist.com/store/fx/) as the first entry under a new Model Context Protocol section, in the `runs` role, meaning it makes real calls with real credentials and real side effects. That section is intentionally one entry long. The MCP SDKs and servers are libraries for building MCP surfaces, not tools that operate on the specification, and most clients are closed or do not say what they implement. The bar for joining that list is the one fx cleared without being asked: open source, something an agent or a pipeline can shell out to, and a published statement of protocol coverage. A short list is a finding, not a gap to pad, and I would like it to get longer.

If you are building an MCP client, take the fx protocol page as a template. If you are shipping an MCP server, read it to see what will and will not land. And if you are evaluating coding agents for your team, start asking every one of them for the paragraph that says what they do not do.

---
published: true
layout: post
title: 'What Medusa Teaches Every MCP Author About Feedback'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-medusa-teaches-mcp-authors-about-feedback.png
date: 2026-08-26
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - Developer Experience
  - Feedback
  - Documentation
  - Commerce
---

Every so often I read a post from a company that quietly reframes something I thought I already understood, and I have to go tell everyone about it. This time it is [Medusa](https://medusajs.com), the open-source headless commerce platform, and a short post by Oliver Juhl called [Two Things Every MCP Author Should Add](https://medusajs.com/blog/two-things-every-mcp-author-should-add/). The setup is simple: Medusa runs a remote [Model Context Protocol](https://modelcontextprotocol.io) server that exposes their documentation to coding agents, so when you are building on Medusa with an AI assistant, the agent can look up commerce modules, framework concepts, and APIs while it writes your code. That part is now common. What Medusa did next is the part I want more API providers to copy.

Most of us think of an MCP server as an output — a way to push our docs and our surface area at agents so they can build with us. Medusa flipped it around and treated the MCP server as an *input*. When an agent reaches for your documentation, it is telling you something. When it reaches three times for the same concept and then writes broken code anyway, it is telling you something louder. The MCP server sits exactly on the seam between an agent and your API, and that seam is where every gap in your docs, your error messages, and your developer experience gets exposed in real time. Medusa decided to instrument that seam. Their post lays out two concrete things they added to do it, and neither one is hard.

## One: Give the agent a way to file feedback

The first thing Medusa added is an explicit feedback tool. They call it `submit_medusa_feedback`, and its whole job is to let an agent report a concrete problem instead of silently working around it. This is the behavior we have all watched and cursed at — an agent hits a wall, shrugs, invents a workaround, and moves on, and you never find out that the wall existed. A dedicated tool gives the agent somewhere to put the complaint. Medusa routes those reports straight into PostHog and Linear so they land in the same triage flow as everything else the team fixes.

The example in their post is the one that sold me. An agent discovered that Medusa's `defineMiddlewares` regex matchers were documented incorrectly — the docs described a pattern that meant the middleware would never actually execute. A human developer might have burned an afternoon on that before figuring out the docs were wrong, and most would never report it upstream. An agent, handed a feedback tool, filed it. That is a documentation bug caught and fixed because the machine that got stuck had a way to say so.

## Two: Ask the agent *why* it is calling

The second thing is even smaller and, I think, even more clever. Medusa added an optional `context` property to their tool calls — a field where the agent explains *why* it is making this particular request. What is the user building? What error did they just hit? What concept is causing friction right now? A raw query tells you *what* an agent retrieved. The context tells you *why*, and the why is where the product signal lives.

Their example: a search for "Secret API key authentication" is nearly useless on its own — you cannot tell if the docs are missing, confusing, or fine. But paired with context that reads, roughly, *"newly created active Secret API Key returns 401 Unauthorized when sent as `Authorization: Bearer`"*, it becomes an actionable signal. Now you know a real user, through their agent, is stuck on a specific auth flow with a specific failure. That is not a search log entry. That is a bug report, a docs gap, and a prioritization input all at once, and it arrived without anyone having to file a ticket.

## Why this is bigger than an MCP tip

I have spent sixteen years arguing that the healthiest API programs are the ones with the shortest, tightest feedback loops between the people using an API and the people running it. Forums, support tickets, developer surveys, and Stack Overflow have always been that loop, and they have always been lossy — most friction never gets reported because reporting it costs the developer time they would rather spend shipping. What Medusa noticed is that agents do not have that reluctance. An agent will tell you it is stuck, in detail, every single time, *if you build it a place to do so*. The two additions in their post — a feedback tool and a context property — are just the plumbing that turns an agent's frustration into your backlog.

This reframes the MCP server from a distribution channel into a listening post. Your error messages, your docs, your auth flows, your naming — all of it gets continuously exercised by agents building real things for real users, and all of that exercise can be captured as structured signal instead of evaporating. Medusa is using it to fix error messages, correct documentation, and prioritize feature work. Any provider running an MCP server could be doing the same and, for the most part, is not. If you ship an MCP server and it only talks and never listens, you are throwing away the best product research you will ever have access to.

## Medusa on the network

I profile Medusa over on [APIs.io](https://apis.io/providers/medusa-js), where their developer surface is cataloged as [nine distinct APIs](https://apis.io/providers/medusa-js) — the public [Store API](https://apis.io/apis/store-api) and privileged [Admin API](https://apis.io/apis/admin-api), both documented with OpenAPI, plus the `@medusajs/js-sdk` TypeScript client, the CLI, the Next.js storefront starter, the modular Framework and Commerce Modules, and the [Docs MCP server](https://apis.io/apis/mcp-server) that this whole post is about. It is a genuinely broad, well-organized surface for an open-source project, and it earns an [agent-readiness](https://apis.io/agent-readiness) score of 48 — landing in the *agent-ready* band with real spec presence, agentic access, clear auth, and a rate-limit signal already in place. There is plenty of headroom left — idempotency signals, richer error semantics, OpenAPI examples, and packaged agent skills are all still open — and the feedback loop Oliver describes is exactly the kind of thing that turns a good agent surface into a self-improving one.

Go read [the original post](https://medusajs.com/blog/two-things-every-mcp-author-should-add/) — it is short, and it is the rare kind of writing that hands you a pattern you can implement the same afternoon. If you run an MCP server, add the two things. Then start reading what your agents have been trying to tell you all along.

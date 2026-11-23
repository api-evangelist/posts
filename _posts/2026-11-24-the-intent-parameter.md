---
published: true
layout: post
title: 'The Intent Parameter Is The Missing Field In API Analytics'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-intent-parameter.png
date: 2026-11-24 15:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - Analytics
  - Agents
  - Agent Readiness
  - Conversations
---
I sat down with Dave Eyler of Good Timing earlier this month to talk about Baton, the MCP analytics product he is building, and about thirty seconds into the part of the conversation I cared most about he said something I have not been able to shake. Around the three and a half minute mark, Dave described the feature they are building right now: "today baton captures the intent on each tool call, so we add a parameter to the tool calls saying like, hey, why are you calling this tool."

That is it. One argument added to every tool. But I think it might be the most important field anyone has added to API analytics in a long time.

## A wall of 200s tells you almost nothing

I have spent a lot of years around API management analytics. Calls per app, calls per user, latency, error rates, top endpoints. All of it useful, and all of it describing what happened at the transport layer. When you look at the logs of an MCP server you get the same thing, only more of it. Tool called, 200 returned. Tool called, 200 returned. A wall of green.

The problem is that a 200 tells you the server did what it was asked. It does not tell you whether that was what the caller was actually trying to get done. An agent can call five tools, get five successful responses, and still fail at the task the human gave it. From the logs, that looks like a great day. From the human's chair, it looks like the agent wandered around and came back with nothing.

The intent parameter fills that gap. When the agent has to say why it is calling a tool, every call carries a little piece of the plan. Now you can line up what the agent wanted against what your tool gave it, and the places where those do not match are exactly where your API design needs work.

## The feedback box

Dave also mentioned a second piece: a separate tool that acts as a feedback box, so "the agent can say whatever it wants about that mcp." I like this because it flips who is doing the reporting. For most of the history of APIs, the only way a provider learned what was confusing was a developer bothering to open a support ticket, post in a forum, or complain on social. Most never did. They just left.

Agents do not get frustrated and leave quietly in the same way. If you give them a place to say what did not work, they will use it. That is a feedback loop that scales with usage instead of with how angry your users are.

## Closing the loop

What I told Dave on the call is that I do not really want another dashboard. What I want is a steady stream of structured data about what is happening on my MCP servers, fed into my own agents, so I can keep iterating on the servers in real time. A constant feedback loop between the people and agents using my server and the agents building it.

Dave said almost everybody they talk to says the same thing, and that the loop is where they are headed. He described something they are calling autopilot, where you point Claude Code at Baton's MCP server, the two talk to each other, and it generates pull requests and does the instrumentation for you. His words: "it's a product that can develop itself."

Intent is what makes that kind of loop possible. Without it, an agent reading your analytics only knows which calls happened. With it, the agent knows what the callers were trying to do, and can propose changes to tool names, descriptions and response shapes that serve those goals better.

## A candidate for agent readiness

This is also where my head goes when I think about how we measure APIs at APIs.io. A lot of what we look at for agent readiness is about the front door: is there an OpenAPI, an MCP server, an `llms.txt`, clear auth, published rate limits. Those matter. But they are all about whether an agent can get in.

Capturing intent is about whether the provider is learning from agents once they are in. I want to think about whether there is a fair, observable way to check for it, such as an optional intent or reason argument declared on MCP tools, or a documented feedback tool. I have not decided how it would be scored, and I would rather get it right than add it fast, but it belongs on the list.

You can watch the whole conversation with Dave on the [API Evangelist Conversations](https://conversations.apievangelist.com/) site, and find Baton at [goodtiming.ai](https://goodtiming.ai).

## The takeaway

API analytics has always been good at counting and bad at understanding. The intent parameter is a cheap, almost obvious way to start understanding: ask the caller why. If you run an MCP server, add a reason argument to your tools and a place for agents to tell you what went wrong, then actually read what comes back. Your 200s will stop lying to you.

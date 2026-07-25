---
published: true
layout: post
title: 'The Throwaway API and the Foundational API'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-throwaway-and-the-foundational-api.png
date: 2026-08-18
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - APIs
  - Strategy
  - API Discovery
  - SDK
---
I keep running into a new kind of company, and I want to name the pattern before it becomes the default. It is a company that ships an [MCP](https://modelcontextprotocol.io) server and a couple of SDKs, and calls that its API strategy. There is no real REST or GraphQL API underneath. There is no durable, documented, versioned contract that a human or a machine could build against without an agent in the loop. There is a server tuned for the agent of the moment, some generated client libraries, and a very confident launch post. I have started calling this the throwaway API — not as an insult, but as a category, because it is a genuinely different thing from what I would call a foundational API, and confusing the two is going to cost a lot of people a lot of money.

I can see this pattern because I spend my days looking at the whole landscape at once. Across [APIs.io](https://apis.io) I am tracking more than a hundred thousand APIs, and I have spent a good part of this year profiling the roughly fourteen thousand companies sitting inside venture capital portfolios — the exact cohort most likely to chase whatever the current thing is. When you look at that many providers side by side, the split jumps out at you. Some companies have a foundational API: a real contract, described in [OpenAPI](https://spec.openapis.org), with a coherent resource model, that has been stable long enough to have consumers who are not the vendor. And a growing number have only the throwaway layer — an MCP server, a handful of SDKs, a landing page — sitting on top of nothing you can point to. From the outside, in the launch week, the two can look identical. Give it eighteen months and they could not be more different.

The foundational API is the water main. I made this argument at length when I called [MCP last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/), and the throwaway API is what happens when a company builds only the last few feet of pipe. It works, for exactly one consumer, for exactly as long as that consumer stays in fashion. The moment the agent runtime shifts, the protocol version turns over, or the model's tool-calling behavior changes underneath them — and every one of those things will happen — the company with only a throwaway layer has to rebuild the connection to their own capabilities, because they never wrote down what those capabilities were in any form more durable than a server aimed at last quarter's client. The company with a foundational API runs a new hose in an afternoon, because the thing that mattered was never the hose.

I understand exactly why the throwaway pattern is spreading, and it is not stupidity. It is incentive. If you are a fourteen-months-old company with a demo to give and a round to raise, an MCP server plus SDKs is the fastest possible path to something an investor can watch an agent use on stage. It demos beautifully. It ships in a sprint. And it lets you skip the slow, unglamorous, deeply valuable work of designing a real contract, governing it, versioning it, and standing behind it for years. The throwaway API optimizes for the demo. The foundational API optimizes for the decade. In a market that funds demos, you can see which one wins in the short run — and you can also see who is going to be quietly rebuilding their foundation in 2028 while telling everyone it is a "platform re-architecture."

There is nothing wrong with the throwaway layer itself, and I want to be clear about that, because I ship one. API Evangelist and APIs.io both have MCP servers. The difference is that mine are thin, honest projections of real APIs that exist independently of any agent — the throwaway layer sits on top of a foundational one, which is exactly the arrangement I am recommending. The pattern only becomes a problem when the throwaway layer is the *whole* strategy, when there is nothing underneath it, when the SDKs are generated against a private surface no one else can reach and the MCP server is the only front door. That is not an API. That is a costume that looks like an API for the length of a keynote.

So if you are building right now, ask yourself one blunt question about your own stack: if every agent framework and every version of MCP vanished tomorrow, what would you have left? If the answer is a real, documented, versioned API that consumers can reach without a model in the loop, you built a foundation and put a nice last-mile connector on it, and you are going to be fine. If the answer is "a server and some SDKs and a landing page," you built a throwaway and called it a strategy. I can see both patterns from where I sit, across a hundred thousand APIs, and I can already tell you which set of companies I would want to be integrating with in three years. Build the foundational one. Throw the throwaway layer on top, gladly. Just never mistake the second thing for the first.

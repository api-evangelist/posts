---
published: true
layout: post
title: The Real API Design Struggle Continues with MCP
date: 2026-06-22
author: Kin Lane
tags:
  - MCP
  - API Design
  - AI
  - APIs
  - Business of APIs
image: https://kinlane-images.s3.amazonaws.com/algorotoscope/blue-circuit-0w25XrzB7KXdJ.jpg
---
I've been studying the way API providers publish their [public MCP servers](https://apis.io/servers/), beginning with the big three: Amazon, Microsoft, and Google. Each of these providers have their own approach to delivering APIs, but also delivering MCP, and from my vantage point it is the same old API design conversation—it just depends on where companies want to shift the load and where they have experience.

The design tension appears to be balanced between generality and safety: AWS exposes a single call_aws tool over 15,000+ operations; Azure exposes typed per-service namespaces; Google ships a separate managed server per product. Same problem, three points on a spectrum. There is a lot of nuance in the MCP protocol patterns in play, as well as how and why separate MCP servers are being deployed. Most of it looks to be done without much consideration for what the consumers will need.

Like API design, I doubt there will be a single pattern to rule them all. I think MCP will expand our API design toolbox, and a chat interface and agents will evolve how we consume APIs. I also think there will continue to be a lot of avoidance of doing the hard design work and offloading the work to be done by the LLM, similar to how we offloaded the responsibility to mobile developers with GraphQL. Only now, you won't have a human doing the hard work to get up to speed on the schema, GraphQL, and other things—your agents will just pound on the surface area of APIs to make sense of things.

I am actually getting pretty intrigued with the design tension, patterns, and opportunities with MCP. I think there is a lot of opportunity when done right. Like REST, GraphQL, and Event-Driven, there will also be a lot of opportunity to NOT do the work, and offload it to AI. I already see this being the dominant approach in MCP. Some providers are minimizing the blast radius by limiting tools and shaping a server like an existing product, but there is a lot more work in the cracks with tools, documentation, prompts, and other areas of the protocol. I like learning what good and bad design looks like, and I'm curious how Claude, ChatGPT, Gemini, and other platforms respond, and will be spending a lot of time in here over the summer.

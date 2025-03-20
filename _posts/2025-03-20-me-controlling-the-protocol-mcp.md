---
published: true
layout: post
title: Me Controlling the Protocol (MCP)
date: 2025-03-20T09:00:00.000Z
tags:
  - Protocols
  - Specifications
  - Politics
  - HTTP
  - Semantics
  - Authenitcation
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-docks-water-front-ships-containers.jpg
---
Time for an obsequious post on current trends to send signals that I still matter in the current conversation. MCP, or Model Context Protocol is the topic du jour for people wanting AI to replace all the things, including humans, APIs, and kittens. OK, I made that last one up. I looked at MCP when it came out and I just reviewed it again, and I just don’t get the excitement in my bones that everyone else does. I know the best way to predict the future is to issue a press release, which I see everyone doing around MCP right now, but when I read the press releases and review the spec, I am just left with the following emotions.

- **HTTP** - It doesn’t respect HTTP, the dominant transport protocol in business today, which is always a red flag.
- **JSON-RPC** - Not really picking the dominant patterns, I’d go gRPC if you like your RPCs and choose a winner. 
- **Server-Sent Events (SSE)** - Again, not really picking winners or leveraging a nuanced approach to using HTTP.
- **Authentication** - “Authentication and authorization are not currently part of the core MCP specification” - OK?
- **Semantics** - Just not enough semantic nourishment, and I’d expect some JSON-LD magic in there, but no…
- **JSON Schema** - Uses JSON Schema — yes, but chooses to not use the latest draft for some reason. Hmmm…
- **SDKs** - It has a strong SDK lead, which I see regularly as compensation for not understanding what APIs are for.

This is going to replace APIs? Sorry, it isn’t. It is yet another abstraction layer hijacking on top of the web and on top of what is the current state of APIs (which isn’t always purdy). It ignores the dominance of REST. It ignores the dominance of OpenAPI. It ignores what is happening with Arazzo. It doesn’t have the richness needed for the semantics and workflows. It ignores the open source of existing specs. It is just another land grab to control the interfaces that exist between businesses. I’d rename it as “Me Controlling the Protocol (MCP)”. It smells just like RAML did, but not anywhere near as smart. RAML was better than OpenAPI, but the creators were assholes, where the creators of Swagger were nice. It smells just like Smithy, TypSpec, Postman Collections, and every other attempt to grab land without understanding the space you are grabbing land from.

MCP does nothing to address all the business friction encountered when building workflows and automation. It taps out of authentication? WTF? It doesn’t even address the discovery, onobarding, keys, usage, rate limits, pricing, errors, terms of service, and multitude of other things you are going to struggle with when truly automating business processes (I ain’t going to use that dumb word y’all use). MCP doesn’t take into account the current state of APIs, it is an uninformed and unsophisticated attempt to control the interface narrative. I am sorry, you are much better off building on top of the existing momentum of OpenAPI, JSON Schema, and Arazzo, even with all of their shortcomings. MCP will do nothing to tame the chaos and complexity that exists when working to interface internal, partner, and public digital resources and capabilities across enterprise domains, lines of business, let alone the open marketplace.
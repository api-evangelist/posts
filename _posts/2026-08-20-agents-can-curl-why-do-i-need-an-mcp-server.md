---
published: true
layout: post
title: 'Agents Can Curl, So Why Do I Need an MCP Server?'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-can-curl-why-do-i-need-an-mcp-server.png
date: 2026-08-20
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - APIs
  - OpenAPI
  - API Design
  - Integration
---
Here is a question I get asked more than any other right now, usually by an engineer who is a little annoyed and entirely correct to be asking it: if the agent can already read my [OpenAPI](https://spec.openapis.org) and just make the HTTP call itself, why do I need to stand up an [MCP](https://modelcontextprotocol.io) server at all? Agents can curl. A modern model, handed a decent API description, can figure out the endpoint, assemble the request, send it, and read the response back without any of the ceremony of a Model Context Protocol server sitting in the middle. So what exactly is the server buying me? It is a fair question, and the honest answer is: sometimes nothing, and sometimes quite a lot, and the whole skill is knowing which situation you are in.

Let me take the skeptic's side first, because they are right more often than the MCP enthusiasts want to admit. If you have a clean REST API with a good OpenAPI definition, sensible auth, and stateless operations, an agent genuinely can consume it directly. Point the model at the spec, give it a credential, and it will curl its way to the answer. In that world an MCP server is a wrapper around a thing that already worked, and wrapping something that already worked is not free — it is another surface to build, secure, version, and keep in sync with the API underneath it. I have watched teams stand up an MCP server for an API that an agent was already using perfectly well through its OpenAPI, and all they did was add a second contract that can now drift from the first. If your API is clean and the job is a straightforward call, the curl is fine and the server is overhead.

So when is the server actually earning its place? The first case is state and multi-step work. A single curl is a single call, but a lot of real jobs are five calls in a specific order with decisions in between, and an MCP server can present that as one intentional, named tool instead of leaving the agent to reconstruct the choreography from raw endpoints every time. The second case is affordance and framing. An OpenAPI describes two hundred operations flatly; an MCP server lets you hand the agent the six that matter for this job, shaped and named and described for exactly that task — which, as I argued when I said [context engineering is governance](https://apievangelist.com/2026/08/11/context-engineering-is-governance/), is a real governance act and not just ergonomics. The third case is everything that is not a clean HTTP API in the first place — internal systems, non-REST protocols, weird legacy surfaces — where the server is the thing that turns something an agent could never curl into something it can call.

The fourth case is the one people underrate, and it is control. When the agent curls your API directly, it is improvising the request against your live system, and it will occasionally improvise something you did not want — a call you would rather it never make, a parameter combination you would rather it never try. An MCP server is a place to put the guardrails: to decide which capabilities are exposed at all, to enforce the boundaries of what an agent is [allowed to consume](https://apievangelist.com/2026/07/24/governing-what-agents-are-allowed-to-consume/), to add the auth and rate and audit story that raw curl-against-OpenAPI skips right past. The server is not just a convenience layer. It can be the control plane between an improvising model and a production system, and for a lot of estates that alone is worth the cost.

But notice what every one of those "yes" cases has in common: none of them are reasons to skip the API. The multi-step tool still orchestrates real endpoints. The narrowed six tools are a projection of a real surface. The guardrails guard access to a real system. This is the same thing I keep saying when I call [MCP last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/) — the server is worth building when it adds orchestration, framing, reach, or control on top of a real API, and it is pure overhead when it is a costume over an API that was already agent-ready on its own. The MCP server is never the reason you have capabilities. It is sometimes the reason those capabilities are safe and legible to an agent.

So my actual advice, when the annoyed engineer asks me whether they need the server, is to make them answer three questions. Is the job a single clean call against a well-described API? Then let the agent curl it and skip the server. Does the job need orchestration, a narrowed and framed surface, reach into something that is not a plain HTTP API, or real guardrails between the model and production? Then the server is earning its place, build it — thin, honest, and sitting on top of the real API, never instead of it. And if you cannot tell which situation you are in, that is usually a sign your API is not clean or well-described enough for the agent to curl safely yet — which means the work in front of you is not the MCP server at all. It is the API.

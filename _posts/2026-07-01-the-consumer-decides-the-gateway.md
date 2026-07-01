---
published: true
layout: post
title: "The Consumer Decides the Gateway: API Governance at the Consumption Layer"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-consumer-decides-the-gateway.png
date: 2026-07-01T15:00:00.000Z
tags:
  - Governance
  - Gateways
  - MCP
  - Agents
  - OpenAPI
  - Aggregation
  - APIDays
---
I am giving a talk at APIDays Munich about the layer of API governance our industry keeps pretending does not exist. We have spent a decade obsessing over two of the three layers. There is design-time governance—your Spectral rulesets, your style guides, your design reviews. There is runtime governance—the gateways, the policy engines, the rate limits and auth flows that enforce contracts in flight. And then there is the third layer, the one that actually touches the human, the SDK, or the AI agent on the other side: consumption-time governance. What the API *looks like* to whoever is consuming it. We lint the spec and we police the runtime, and then we ship whatever inconsistent surface falls out the far end, because for years the consumer was a developer who would just read the docs and muddle through. That is over. Agents are primary consumers now, and an agent does not muddle through—it hits `search_from/search_to` in one API, `offset/limit` in the next, and `nexttoken/maxresults` in a third, and it struggles in ways a human would shrug off. The consumption layer is where that inconsistency finally has a cost, and it is where governance is quietly moving.

The argument I want to make in Munich is simple to say and uncomfortable to sit with: **you can govern people, or you can govern the engine.** People-governance is writing the style guide, mandating the design review, standing up the center of excellence, and trying to get every team—including the one that showed up last week through an acquisition with five years of its own conventions—to converge on a shared idea of "good." I have watched that movie enough times to know how it ends. Engine-governance is letting producers ship whatever they ship and applying the standardization in the layer between them and the consumer. One of those scales because it is mechanical. The other is aspirational and depends on everyone agreeing. So the real question is not *whether* to govern the consumption layer—it is *what you put there*. And that turns out to depend entirely on who the consumer is.

## Four ways to front the same two APIs

To make this concrete instead of hand-wavy, I took two free, keyless [Open-Meteo](https://open-meteo.com) APIs—a weather forecast and an air-quality service, living on two different hosts—and I put them behind four very different tools, one at a time, over the exact same upstreams. Then I actually stood them up and made them work, because a slide that has not been run is just an opinion.

**[KrakenD](https://www.krakend.io)** is a REST gateway whose whole identity is declarative aggregation. Merging two backends into one response is a config knob, no code—I exposed a single `/conditions` endpoint that calls both hosts and hands the client back one merged object. That is genuinely its superpower. The catch is that its OpenAPI import and its MCP support are Enterprise features, so the open-source story and the AI story diverge.

**[Tyk](https://tyk.io)** is the OpenAPI-native one—the API definition *is* an OpenAPI document with a Tyk extension—and most of its API-to-MCP path is open source. It is also where declarative honesty bites. Tyk is one-upstream-per-API, so my "one API fronting two hosts" ambition became two APIs, because a URL rewrite to a *different* upstream host quietly returns nothing. And the tidy request-shaping I wanted—rename the public `forecast` param to the upstream's `forecast_days`, rename the path—does not translate to declarative config the way it translates to code. Those are not knocks on Tyk; they are the shape of the tradeoff.

**[agentgateway](https://agentgateway.dev)** is the AI-native one, a Rust proxy built on MCP and A2A. Here the consumer is explicitly the agent, not a REST client. I pointed it at both OpenAPI specs and it federated them into a single MCP server—one `tools/list`, two tools, merged—which is exactly the aggregation Tyk needs code for, just expressed at the tool layer instead of the response layer.

**[AWS Labs' OpenAPI MCP Server](https://awslabs.github.io/mcp/servers/openapi-mcp-server)** is the fourth, and it is a different category entirely. It is not a gateway or a proxy—it is a small standalone server that turns an OpenAPI spec into MCP tools and runs over stdio, as a subprocess right next to the agent on the consumer's own machine. No network, no URL, no infrastructure. The OpenAPI spec is the entire contract, and governance lives at the most local point possible: inside the agent's process.

## The consumer decides the gateway

Line those four up and the pattern is the whole talk. KrakenD and Tyk govern at the **network gateway**—central, shared, REST-first, with MCP bolted on. agentgateway governs at a **networked agent proxy**—federating MCP servers, doing agent-to-agent, shaping tools with expressions. AWS Labs governs **right at the agent**, a stdio sidecar with zero infrastructure. Same two APIs, four completely different consumption contracts, and the thing that determines which one is right is not your architecture diagram—it is who is on the other side. A REST client wants KrakenD's merge or Tyk's routes. An agent wants a federated set of MCP tools. The consumer decides the gateway.

There is a quieter lesson buried in the exercise, too, and it is the honest part. The code gateway papered over every rough edge that the declarative ones exposed. Renaming a param, merging two hosts, aliasing a path—trivial in a few lines of JavaScript, and stubbornly not-declarative in Tyk's config. That gap is not a bug report. It is the actual decision you are making when you choose where consumption-layer governance lives: how much you are willing to express as legible, versionable configuration versus how much you are willing to bury in code that only its author fully understands. I would rather make that tradeoff on purpose than discover it in production.

The whole thing is real and running. The [talk deck is here](https://talks.apievangelist.com/2026-apidays-munich-governance/2026-apidays-munich-governance.html), the four are compared side by side on one slide, and three of them are live on AWS right now—[weather-tyk](https://weather-tyk.apievangelist.com/weather/forecast?latitude=40.71&longitude=-74.0&current=temperature_2m), [weather-krakend](https://weather-krakend.apievangelist.com/conditions?latitude=40.71&longitude=-74.0), and weather-agentgateway—fronting the same Open-Meteo upstreams, with the configs published as [open-meteo-tyk-demo](https://github.com/api-evangelist/open-meteo-tyk-demo), [open-meteo-krakend](https://github.com/api-evangelist/open-meteo-krakend), and [open-meteo-agentgateway](https://github.com/api-evangelist/open-meteo-agentgateway). Fork them, run them, break them.

Governance is moving to where the consumer sits, and the consumer is increasingly a machine that needs a uniform, predictable surface across APIs that were never designed to agree with each other. You do not close that gap by getting every producer to change. You close it in the layer between them and the consumer—and you pick the tool for that layer by asking who is actually on the other end. That is the talk. Come argue with me about it in Munich.

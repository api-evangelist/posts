---
layout: post
title: How I Actually Use MCP Across API Evangelist
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/how-i-actually-use-mcp-across-api-evangelist.png
date: 2026-07-22
tags:
- MCP
- Model Context Protocol
- Agent Skills
- Arazzo
- API Discovery
- API Governance
- Agents
---
I write about Model Context Protocol a lot, but I also run it. Across apis.io, apievangelist.com, and API Commons, MCP is not a thing I comment on from the sidelines—it is wired into how I publish, discover, govern, and monetize my own work. So instead of another opinion piece, here is the honest inventory: every MCP technique and approach I have actually put into production, and the throughline that connects them. That throughline is simple. I treat MCP as one agent surface among several, and I refuse to let it wall off the map.

Everything below is downstream of a stance I argued myself into in public, rather than adopted because it was fashionable. I went from [Adopting MCP Is a Bad Idea](https://apievangelist.com/2025/04/09/adopting-mcp-is-a-bad-idea/) and [Me Controlling the Protocol](https://apievangelist.com/2025/03/20/me-controlling-the-protocol-mcp/), through [MCP Is a Valid Tactical Response](https://apievangelist.com/2025/11/12/mcp-is-a-valid-tactical-response/), to [Seeing MCP](https://apievangelist.com/2026/05/07/seeing-mcp/). MCP is a tactic, not a religion, and I use it like one.

## Ship Servers Over My Own Catalogs

The first technique is the most obvious: I ship real servers. I run two in production. `mcp.apis.io` sits over the APIs.io discovery catalog and is now in the official MCP registry as `io.apis/apis-io`. `mcp.apievangelist.com` exposes sixteen years of research plus a governance compute layer as a set of tools. These are not demos. They are how agents reach my catalogs and my analysis without scraping HTML.

## Keep MCP as One Layer, Not the Whole Surface

I never ship MCP alone. It goes out alongside Agent Skills and Arazzo workflows, because each answers a different question—MCP for live tool access, Skills for guidance, Arazzo for multi-step orchestration. I laid this out in [The Agent-Surface Layer](https://apis.io/2026/05/29/the-agent-surface-layer-skills-mcp/) on apis.io, and in [API Design As I Use the API, and MCP, and Skills](https://apievangelist.com/2026/07/17/api-design-as-i-use-the-api-and-mcp-and-skills/). The same design discipline covers all three surfaces, so an agent gets a coherent experience instead of three disconnected ones.

## Prompts and Resources, Not Just Tools

A wall of raw tools is a bad agent experience. Both of my servers ship guided prompts—`find_api`, `state_of_report`, and `agent_readiness_scan` on the apis.io side; `catch_up`, `governance_baseline`, and `forge_mcp_server` on the API Evangelist side. A prompt hands the agent a job to be done and the right tools to do it, which is the difference between a server that is usable and one that merely exists.

## Discovery Is the Hard Part, So I Built the Map

The problem MCP does not solve for you is finding the servers in the first place. So I built the map. The [apis.io/mcp/ directory](https://apis.io/mcp/) indexes every official provider MCP server—238 and counting—each cross-linked to its provider profile, capabilities, and Agent Skills. I have written about why discovery, not the protocol, is the real bottleneck in [MCP Discovery & Governance](https://apievangelist.com/2026/06/19/mcp-discovery-and-governance/) and demonstrated the coverage in [Every API Provider in My Network That Ships an MCP Server, Grouped by Tag](https://apievangelist.com/2026/05/19/every-api-provider-in-my-network-that-ships-an-mcp-server-grouped-by-tag/).

## A Universal Install Button

Finding a server is only half the friction. Installing one is the other half. [install.apicommons.org](https://install.apicommons.org) is a "Run in Postman"-style one-click install for any MCP server, across every client, which I walked through in [One Button, Every MCP Client](https://apievangelist.com/2026/07/03/one-button-every-mcp-client/). Discovery and installation are the same job seen from two angles, and I refuse to treat either as someone else's problem.

## Forge the Tools From the Spec

I do not hand-write tool definitions when a contract already exists. [Toolsmith](https://toolsmith.apicommons.org) generates MCP tools and Agent Skills per OpenAPI operation, so the server is derived from the spec rather than drifting away from it. This is the APIOps loop I have been arguing for since [We Need More APIOps Cycles: Arazzo, Overlays, and We Get MCP and A2A](https://apievangelist.com/2025/04/24/we-need-more-apiops-cycles-arazzo-overlays-and-we-get-mcp-and-a2a/)—the same OpenAPI and overlays that govern the API should generate its agent surface.

## Govern the Agent Surface Like Any API

An MCP server is an API surface, so it gets the same governance as one. I apply Spectral-style rules and an `x-agentic-access` posture to servers, and I treat discovery and governance as a single problem rather than two teams' problems. If I would not ship an ungoverned API, I will not ship an ungoverned MCP server.

## Test and Mock It

Shippable is not the same as verifiable. I stood up a [Microcks-backed MCP server for mocking and testing](https://apievangelist.com/2026/01/28/mcp-server-for-microcks-mokcing-and-testing/) so the agent surface can be exercised and asserted against, the same way I would mock and test any other API.

## Monetize Without Walling Off the Map

The commercial technique matters as much as the technical ones. Discovery stays free. Synthesis, ratings, and estate rollups are Pro, gated and metered through API Gateway usage plans. The principle—chargeable depth on top of an open map—is spelled out in [Monetizing My APIs and MCP Without Walling Off the Map](https://apievangelist.com/2026/07/15/monetizing-my-apis-and-mcp-without-walling-off-the-map/) and reflected in my [plans](https://developer.apievangelist.com/plans/). The map has to stay open, or none of the rest of this works.

## Keep Pressure-Testing the Design

Finally, I keep publishing where the pattern strains, because a tactic you never criticize becomes a religion. [The Real API Design Struggle Continues with MCP](https://apievangelist.com/2026/06/22/the-real-api-design-struggle-continues-with-mcp/) and [Bump White-Labels the MCP Server, and Discovery Is Next](https://apievangelist.com/2026/07/19/bump-white-labels-the-mcp-server-and-discovery-is-next/) are two recent examples of me poking at the seams rather than pretending they are not there.

Put it all together and the approach is coherent: ship real servers, keep MCP as one layer beside Skills and Arazzo, make those servers discoverable and installable, generate them from the spec, govern and test them like any API, and monetize the depth without gating the map. That is not an MCP strategy so much as an API strategy that happens to include MCP—which is exactly how I think it should be.

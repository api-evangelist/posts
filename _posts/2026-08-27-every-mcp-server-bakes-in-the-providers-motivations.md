---
published: true
layout: post
title: "Every MCP Server Bakes In the Provider's Motivations"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/every-mcp-server-bakes-in-the-providers-motivations.png
date: 2026-08-27
author: Kin Lane
tags:
  - MCP
  - Agents
  - AI
  - Governance
  - Business of APIs
  - Strategy
  - Context Engineering
---
When a provider ships you an [MCP](https://modelcontextprotocol.io) server, they are not handing you a neutral window onto their capabilities. They are handing you a set of tools that someone at that company chose, named, described, and shaped — and every one of those choices carries the company's motivations inside it. Which capabilities got exposed and which did not. Which action the tool descriptions nudge the model toward. Which upgrade path is one tool call away and which is buried three steps deep. None of that is an accident, and none of it is neutral. A vendor's MCP server is a business artifact wearing a technical costume, and the business it serves is the vendor's, not yours.

This is not a conspiracy and I am not accusing anyone of bad faith. It is just how incentives work. A company builds the server that is good for the company. If engagement is the metric, the tools steer toward engagement. If there is a paid tier, the tools make the paid path feel like the natural one and the free path feel a little narrow. If the company took venture money — and having spent this year profiling the roughly fourteen thousand companies inside venture portfolios across [APIs.io](https://apis.io), I can tell you a great many of them did — then the server is shaped, however indirectly, by the growth story those investors are underwriting. The MCP server is where the provider's roadmap, pricing strategy, and investor expectations quietly become the agent's default behavior. You did not agree to any of that. You just installed the server.

Now stack a few of them. You wire up the Figma server, the Notion server, the whatever-else server, and each one arrives with its own vendor's motivations baked in, each one competing for the agent's attention, each one framing its own capabilities as the center of the workflow. Your agent is now operating inside a context assembled by three companies who have never met, none of whom were optimizing for *your* outcome, all of whom were optimizing for their own. The result is not a coherent workspace. It is a negotiation between vendor incentives that happens inside your agent's context window, and by default the loudest, best-marketed tool descriptions win. That is a strange way to run your own work.

The alternative is to stop accepting vendor-dictated tools as the unit of integration and start composing your own context. You do not have to take Figma's whole server as Figma shaped it. You can take the two capabilities you actually need, describe them the way *your* workflow thinks about them, and leave the eighteen tools that exist to serve Figma's roadmap on the shelf. This is exactly the practice I described when I argued that [context engineering is governance](https://apievangelist.com/2026/08/11/context-engineering-is-governance/) — the deliberate narrowing of a large surface down to what a job actually needs is a governance act, and it is even more clearly one when the surface was shaped by someone whose interests are not yours. Composing your own context is how you take the authorship back.

This is also the strongest argument I know for why the [federated layer MCP needs](https://apievangelist.com/2026/08/25/the-federation-aspect-mcp-needs/) matters so much. When you can discover capabilities across many providers through a neutral index instead of installing each vendor's server whole, you get to be the integrator. You get to assemble the tools that serve *your* outcome from across the landscape, rather than accepting each vendor's pre-shaped bundle and letting their motivations stack up in your context. Federation is not only a scaling story. It is a power story — it is the difference between composing your own toolset and consuming someone else's, and whoever composes the toolset is the one whose motivations win.

I am not telling you to distrust every provider or to rebuild every integration from scratch. Plenty of vendor servers are perfectly honest and genuinely useful, and reaching for one is often the right call. I am telling you to notice that the server is not neutral, the way a menu is not neutral — it was designed to make some choices easy and others invisible. Once you see that, you consume vendor MCP servers the way a careful buyer reads a contract: gratefully, but with your own interests firmly in mind, taking the parts that serve your work and declining the parts that only serve theirs. The agent is going to act on whatever tools are in front of it. The only real question is whose motivations shaped that set — the vendor's, or yours. I would strongly encourage you to make sure the answer is more often yours.

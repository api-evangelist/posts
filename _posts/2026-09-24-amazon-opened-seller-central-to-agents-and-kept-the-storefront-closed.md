---
published: true
layout: post
title: 'Amazon Opened Seller Central To Agents, And Kept The Storefront Closed'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/amazon-opened-seller-central-to-agents-and-kept-the-storefront-closed.png
date: 2026-09-24
author: Kin Lane
tags:
  - Agents
  - Agent Readiness
  - Kin Score
  - MCP
  - Agent Skills
  - OAuth
  - Commerce
  - Amazon
  - APIs.io
  - APIs
---
On Monday I wrote that [Amazon wants agents to ask permission, but there is no form to fill in](https://apievangelist.com/2026/09/21/amazon-wants-agents-to-ask-permission-but-there-is-no-form-to-fill-in/). Two days later Amazon stood on stage at its Accelerate conference in Seattle and [opened its seller tools to outside AI agents, starting with Anthropic's Claude](https://www.geekwire.com/2026/amazon-opens-its-seller-tools-to-outside-ai-agents-starting-with-anthropics-claude/). It turns out there is a form now. It just depends which side of Amazon you are standing on.

The GeekWire piece gives the product view. A Selling Partner plugin brings Seller Assistant into outside AI tools, launching with Amazon Quick and in beta with Claude, in Amazon's U.S. stores. Connecting takes "about 60 seconds and no coding." Sellers "choose which types of data the plugin can reach and approve each action before it's carried out." Mary Beth Westmoreland, Amazon's vice president of Worldwide Selling Partner Experience, put the ambition plainly: "Our vision was that they would never have to log into Seller Central." And on what comes next: "We've built this in a way that should be modular enough for us to continue to publish plugins."

That is the announcement. I wanted to know what an agent actually meets when it shows up, so I went and looked, then re-profiled Amazon in the catalog.

## What an agent meets

The plugin is public. It lives at [amzn/selling-partner-agentic-toolkit](https://github.com/amzn/selling-partner-agentic-toolkit) under Apache 2.0, and it was merged into Anthropic's official plugin marketplace the day of the keynote ([PR #6293](https://github.com/anthropics/claude-plugins-official/pull/6293)). It is mostly Markdown:

- **One remote MCP server**, the Amazon Selling Partner Connector, at `https://sellingpartner-ai.amazon.com/mcp`.
- **Eleven Agent Skills** for listings troubleshooting, buyability, searchability, compliance pre-flight checks, stockout prevention, the full FBA inbound workflow, seller analytics, support cases, inviting secondary users, and SP-API developer questions. Each skill ships with its own `evals.json`, which I have rarely seen a provider publish.
- **Three commands:** `/sp-stockout-check`, `/sp-fix-listing` and `/sp-sales-drop`.

The README states the posture. Write actions are always drafted for approval. The assistant can only use the tools the seller's Seller Central roles allow. An account admin grants AI-agent access to secondary users through a Seller Central page called **Manage Agents**.

The server behaves the way the MCP authorization spec says it should. An anonymous `initialize` gets an HTTP `401`, a typed JSON-RPC error (`-32001 Authentication required`), and a `WWW-Authenticate` header pointing to RFC 9728 protected-resource metadata. That metadata names the authorization server. The authorization server's RFC 8414 metadata advertises authorization code with refresh tokens and PKCE S256. An agent can find out how to get in without reading a page of documentation, which is exactly what I said was missing on Monday.

Amazon Ads got there first. The [Amazon Ads MCP Server](https://advertising.amazon.com/library/news/amazon-ads-mcp-server-open-beta) at `https://advertising-ai.amazon.com/mcp` is in open beta. It exposes tools plus a set of Amazon-authored "skills" (predefined prompts), and it names Claude, ChatGPT, Kiro, Bedrock and AgentCore as clients. It also answers an anonymous request with a `401` and a protected-resource pointer, delegating to Login with Amazon.

## The correction I owe

On Monday I said Amazon had "no MCP server, no well-known catalog, no agent card, no delegated identity." The Selling Partner server is new this week. The Ads server was not. It was live and documented when I wrote that sentence, and my catalog did not have it, because the profile we held for Amazon dated from May. That same profile had the Ads and Amazon Pay APIs pointed at the Selling Partner host. It also held twelve Selling Partner contracts when Amazon's own [models repository](https://github.com/amzn/selling-partner-api-models) publishes fifty-three.

So I re-ran the enrichment pipeline on both Amazon commerce profiles today. We pulled 21 of Amazon's official models verbatim (152 operations, up from 21), the MCP servers, the eleven skills, the notifications surface with its 23 event types, and the OAuth discovery documents. We also corrected the hosts. Then we re-scored.

| Profile | Agent readiness before | After | Band |
|---|--:|--:|---|
| [Amazon Selling Partner](https://apis.io/providers/amazon-seller-central/) | 17.3 | **63.3** | agent-native |
| [Amazon (Ads, Pay)](https://apis.io/providers/amazon/) | 28.0 | **48.5** | agent-ready, gated from agent-native |

For comparison, Monday's other two companies are [Perplexity](https://apis.io/providers/perplexity/) at 60.4 and [Meta](https://apis.io/providers/meta/) at 51.8. Amazon's seller side is now the most agent-ready of the three. The Ads profile scores into agent-native and is held back by a gate rather than by points: agent-native requires a verified, stable error envelope, and we could not find one. That is the same gate that held Meta.

Most of that jump is Amazon's work, but some of it is ours catching up, and it would be dishonest to present it as a forty-six-point week for Amazon. The scores are only as good as the profile under them, and ours was four months stale for the one company I chose to write about.

## Where the permission actually lives

This is the part I think matters. The seller-side authorization server publishes no `registration_endpoint`, so an agent cannot register itself the RFC 7591 way. It does advertise `client_id_metadata_document_supported: true`. That means Client ID Metadata Documents, where a client identifies itself with a URL it controls, which is the registration mechanism the current MCP authorization spec prefers. Login with Amazon, behind the Ads server, advertises the same thing. On paper that is machine-readable client identity: very close to the agent-side half of the handshake I was asking for.

In practice there is still a gate. The pull request adding the plugin to Anthropic's marketplace notes that the issuer was allowlisted for Anthropic's client on September 9th. The Ads documentation requires "an approved application with access to the Amazon Ads API" and your own Login with Amazon client, with each MCP client's callback URL added by hand. So the form exists. It is a partnership, and Amazon holds the pen. Claude and Quick are on the list today, and others will follow as Amazon publishes more plugins.

I do not think that is wrong. For an account that can change prices and file FBA shipments, a named, allowlisted client plus a human approving every write is a reasonable place to start. It is also a good deal more than most of the web offers. I also found a real RFC 9727 API catalog at `developer-docs.amazon/.well-known/api-catalog`, although the one link inside it currently returns a 404.

It also exposed a gap in my own rubric. The "registration without a human" dimension credits only RFC 7591 dynamic client registration, so Amazon scores zero there despite supporting the mechanism MCP now recommends. It is not alone. Across the catalog I found 148 providers whose authorization server supports Client ID Metadata Documents without RFC 7591. 103 of those are WordPress sites running an MCP plugin, so that part is the platform's capability rather than theirs. That leaves 45 real companies, including MongoDB, Tableau, ElevenLabs, Alpaca, Sumo Logic and Stedi. That is a fix for the next version of the rubric, and it will move Amazon again when it lands.

## And the storefront?

Look at who got the MCP server. Sellers and advertisers are Amazon's customers in the sense that they pay Amazon. Their agents are now welcome, scoped, consented and audited. The shopper's agent is where the Perplexity and Muse fights happen, and nothing changed there. Amazon publishes no agentic-commerce document, no consent or bot-identity signal, and nothing an arriving shopping agent could use to ask permission. The agentic commerce and consent dimensions still read zero.

So my read from Monday holds, with a sharper edge. Amazon is not against agents. It is against agents it does not onboard. Where Amazon owns the relationship and gets paid, it built a well-designed agent surface in public, with OAuth discovery, skills, evals and approval on every write, and it shipped it with a partner. Where the agent would stand between Amazon and the buyer, the storefront stays human-only and the form does not exist.

The good news is that this week Amazon showed it knows exactly how to build the form. The protected-resource metadata, the client-identity support and the per-action approval would work just as well on the buy side. What is missing is not the technology but the willingness to let a buyer's agent fill the form in.

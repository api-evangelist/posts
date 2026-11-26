---
published: true
layout: post
title: 'The Walled Gardens Are Getting A Separate Gate For Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-walled-gardens-are-getting-a-separate-gate-for-agents.png
date: 2026-11-30 16:00:00 +0000
author: Kin Lane
tags:
  - Interoperability
  - Platforms
  - MCP
  - Agents
  - Rate Limits
  - Terms of Service
---

I [wrote last week](https://apievangelist.com/2026/11/26/google-workspace-now-requires-agents-to-use-mcp-and-puts-a-price-on-scale/) about Google Workspace requiring AI agents to use its MCP servers instead of the REST APIs, starting February 1, 2027. I have been chewing on it since, and the Agentic AI Foundation's Daily Agentic newsletter pulled together a couple more threads that sharpened what has been bothering me. It feels to me like the big platforms are beginning to tighten down their walled gardens rather than continue investing in interoperability.

## What Google is saying

A companion Google Cloud post lays out the reasoning. REST was built for applications where "a valid OAuth token implied user intent," and Google argues that a token alone no longer shows intent when an agent acts on its own. So agents get dedicated OAuth client IDs with narrow scopes, and the MCP servers check permissions and ask a person to confirm before an agent sends email, changes Drive sharing or makes bulk edits.

I don't disagree with the problem. Intent is the right thing to worry about when software acts on someone's behalf, and human confirmation before an agent changes sharing on a Drive folder is a good idea. But look at where the solution lands. Not in the open standards that already describe intent and consent, OAuth scopes and the API contracts themselves, but in a separate lane that the platform alone defines, operates, meters and prices.

## "MCP has won" is the wrong read

WorkOS CEO Michael Grinich read the move as "MCP has won" and said REST will be deprecated on February 1. Google's wording is narrower. Traditional apps keep running on REST. The change applies only to agent traffic.

I think the narrower reading is the more important one, and it isn't a win for any protocol. MCP is [just another API design pattern](https://apievangelist.com/2026/11/25/mcp-is-just-another-api-design-pattern/) sitting on top of the same capabilities. What is new is that the platform gets to decide which pattern you must use based on *what you are*, and only the platform decides what counts as an agent. Google hasn't defined that yet. It also hasn't said how the open-source Workspace MCP servers people have built on top of the REST APIs will be treated. Those are exactly the kinds of interoperable, community-built bridges that have made these platforms more valuable over the last fifteen years.

## Slack went first

This isn't only Google. In 2025 Slack [cut history and reply API rate limits](https://docs.slack.dev/changelog/2025/05/29/rate-limit-changes-for-non-marketplace-apps/) for new commercially distributed apps and installations outside its Marketplace, then later launched an MCP server alongside its Real-time Search API. The pattern is the same shape: narrow the general-purpose API, then open a new, platform-controlled door next to it, with the platform's marketplace, terms and pricing attached.

## Why this worries me

Fifteen years ago the deal with platform APIs was simple, even if it was never perfect. Your data lives in the platform, and the API is how you get it back out and put it to work wherever you want. That deal is what made integration marketplaces, iPaaS, and a whole industry of small tools possible.

What I am seeing now:

- **Access depends on who you are, not what you are allowed to do.** The same user, the same data, the same scopes, but a different set of rules if software with a model in it is making the call.
- **The rules live in terms and help centers, not contracts.** Quotas, tiers, what counts as an agent, and what can be stored for how long are in policy prose, not in machine readable artifacts an agent or a developer can check before building.
- **The bridge is controlled by the gatekeeper.** A platform-operated MCP server is useful. A platform-operated MCP server you are *required* to use, that may not cover everything the REST API does, is a funnel.
- **Marketplaces become the price of admission.** Better limits for apps inside the marketplace means the platform decides which integrations are viable.

Each of these makes sense from inside the platform: security, cost, abuse, liability. Together they add up to the opposite of interoperability.

## What I'd rather see

If intent is the problem, solve it in the open. Publish agent-specific OAuth scopes and consent requirements in the OpenAPI and in the authorization server metadata. Publish the quotas, tiers and prices as data. Say clearly what counts as an agent. Let the MCP server be one of several ways in, described by the same contract as the REST API, so anyone can build a bridge that honors the same rules. That is the kind of thing I measure with the Kin Score and track across the catalog on APIs.io, because it is what lets an agent, or the person running one, know what they are allowed to do before they do it.

The platforms are right that agents change the risk. I just don't think the answer is a taller wall with a new gate that only the platform holds the key to. I'll be watching to see who goes the other way.

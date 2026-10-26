---
published: true
layout: post
title: 'A Meter With No Rate On It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-meter-with-no-rate-on-it.png
date: 2026-10-26
author: Kin Lane
tags:
  - Monetization
  - Pricing
  - MCP
  - Agents
  - Salesforce
  - Rate Limits
---
Salesforce is going to charge Flex Credits when AI agents call into a production org. Every successful call a *registered* agent makes, over MCP or straight through the API, gets counted as a "Headless Platform Interaction" and draws down credits. [Salesforce Ben has the details](https://www.salesforceben.com/salesforce-will-charge-flex-credits-for-agentic-mcp-and-api-calls/): traditional integrations stay as they are, sandboxes and Developer Edition orgs aren't metered, and nothing is being billed yet. Customers get 30 days' notice before it starts. The rate card lists the price as "TBA."

This lit up LinkedIn the way you'd expect. A HubSpot partner called it a tax on AI adoption. Peter Caputa asked whether we hadn't already settled the "should we charge for API access" debate. And Sean Matthews, who has spent his career on API platforms and integrations, asked what I think about API and MCP monetization these days. Here's the long answer.

## Charging at the interface isn't the problem

I've been tracking API plans, pricing and rate limits for fifteen years, and I don't think metering access is wrong. Metered tiers, overage pricing and rate limits as a product lever are all old and well understood. Sean is right that agents are putting real load on systems that were never a meaningful cost center, and the people running the numbers follow the usage wherever it goes. A provider is allowed to price that.

Three things about this one bother me, though.

## 1. The price isn't published

A meter without a published rate isn't a pricing model. It's a blank check with 30 days' notice. Sean's whole argument is that pricing should shape behavior, nudging people toward what you want and away from what you don't, and that only works if people can see the price. An agent can't budget against a number that doesn't exist, and neither can the person approving the agent. Salesforce has said as much: the agents decide how many calls they make. So the one party that can't predict usage is being handed a meter it can't read.

Publishing the rate is the easy part. Look at the providers people already trust with agents and you'll find their plans and rate limits written down where a person or a machine can read them. Some now put the price right in the tool definition. A couple of weeks ago I found [five MCP servers putting a price in the tool in four different shapes](https://apievangelist.com/2026/10/16/five-mcp-servers-put-a-price-in-the-tool-in-four-different-shapes/). Those are small companies working this out in public. A company the size of Salesforce can publish a number.

## 2. It meters the protocol, not the value

Charging for an MCP call the same as an API call says the interface is the product. It isn't. The record, the workflow and the outcome are what a customer pays Salesforce for. The interface is just how they get there. Sean put it well: figure out pricing within the product and the service, not at the interface boundary. Price what the call accomplishes and you can steer behavior toward the expensive, valuable things and away from the cheap, wasteful ones. Price the call itself and you charge the same for an agent doing something useful as for one stuck in a retry loop.

This is where entitlements come in. A plan should tell you what you're allowed to do and what it costs, and that should hold no matter how you reach it: a person in the UI, an integration, or an agent. If the price changes when the protocol changes, the protocol has become the product.

## 3. Agent identity is right, and it shouldn't come with the bill

Giving agents their own identity, permissions and limits, instead of letting them borrow a person's, is exactly what every platform should be doing. It's the most important governance move of the agent era, and Salesforce deserves credit for making it a requirement. HubSpot's agents still run on a user's permissions, and they should fix that.

Tying the meter to registration makes good governance look like a toll booth. If registering your agent is the moment you start paying, people will put off registering, wrap agents in user credentials, and route around the identity layer that makes agents safe to run. The meter gets a free ride on a feature nobody can argue against, and the feature takes the reputational hit.

## What the catalog shows

I wanted to know whether Salesforce is an outlier or a sign of where things are going, so I measured it. On [APIs.io](https://apis.io/) we keep [plans and pricing](https://apis.io/plans/), [rate limits](https://apis.io/rate-limits/) and [FinOps](https://apis.io/finops/) profiles for every provider. I counted only the plans transcribed from a provider's own pricing page: 4,986 of them. Our generated estimates were left out.

- **145 providers mention MCP or agent access inside a plan** and don't charge for it separately. The MCP server, the agent integration or the tool access comes with the subscription, the seats or the credits a customer already pays for.
- **7 providers price AI-agent, MCP or tool-call access as its own unit**, and 5 of them publish the number. [Seekr](https://apis.io/plans/seekr/seekr-plans-pricing/) charges $0.0135 per tool call for web search. [CodeRabbit](https://apis.io/plans/coderabbit/coderabbit-plans-pricing/) charges $0.40 per agent minute, [SLNG](https://apis.io/plans/slng/slng-plans-pricing/) a fraction of a cent per agent minute, and [Chatbase](https://apis.io/plans/chatbase/chatbase-plans-pricing/) $25 per extra AI agent a month. [Anvilogic](https://apis.io/plans/anvilogic/anvilogic-plans-pricing/) charges one credit per MCP tool call. A lot of plans also say "per agent", but they mean human support agents or CI build agents, so I left those out.
- **129 providers publish a rate limit scoped specifically to MCP or agent traffic, and 82 of them put a number on it.** Ada limits its MCP server per AI agent per second, minute and day. Datadog caps MCP tool-call bursts. Relevance AI sets a per-call MCP limit.

So the market has mostly bundled agent access into what customers already pay for. Where it meters agents separately, it publishes the rate. And far more providers manage agent load with a published rate limit than with a price. I couldn't find another provider in the catalog that meters agent calls the same as API calls and leaves the rate blank. That combination is Salesforce's.

## What I'd do instead

Keep the agent identity, and make it free. Publish the rate before the 30-day clock starts, in the plan and on the rate card, and somewhere a machine can read it. Price the outcomes and entitlements your customers value, the same way for every way of reaching them. And treat call volume as a rate limit to manage, not a revenue line to optimize.

The question isn't whether agents should pay their way. It's whether the people who have to approve them can see what it costs before they hit the button. Right now they can't. Salesforce has the identity part right. Publish the number, price the value instead of the call, and this stops being a story.

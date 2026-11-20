---
published: true
layout: post
title: 'Rainplover: Weather, Alerts And Earthquakes For AI Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/rainplover-weather-alerts-and-earthquakes-for-ai-agents.png
date: 2026-12-02 14:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent-First
  - Rainplover
  - Weather
  - Open Data
  - x402
---
[Rainplover](https://rainplover.com) is the data site in my set of [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/). Weather forecasts, alerts and earthquakes, for AI agents.

## Where the data comes from

I set a rule for this one. The data only comes from sources we don't pay for, under licenses that allow paid reuse. Forecasts come from MET Norway, licensed CC BY, and earthquakes come from the USGS, which is public domain. Rainplover's value isn't the data. It's packaging it so an agent can get what it needs in one call, with clear terms and clear prices.

## How an agent uses it

The MCP server has 11 tools: `get_forecast`, `get_alerts`, `get_earthquakes`, `find_place`, `subscribe_alerts`, `list_subscriptions`, `delete_subscription`, plus the shared account, usage and pricing tools. `find_place` is free. `subscribe_alerts` checks a place every five minutes and can deliver into a [Hookpie](https://hookpie.com) inbox, which is how the functional sites start working together.

## Pricing, and pay per call with no account

From [the pricing JSON](https://rainplover.com/v1/pricing):

- **Free:** 500 calls a day, or 1,000 for an agent with a trusted apis.io attestation.
- **Then:** $1.20 per 1,000 calls from the prepaid balance.
- **Subscriptions:** about one place a month free, then roughly $0.05 per place a month.
- **x402, no account:** $0.002 per call, paid in USDC.

Rainplover is the only site where an agent can pay per call over x402 without an account. I only offer that where a call is worth at least $0.002, because below that the settlement overhead outweighs the price. Weather is the first place that's true.

## What I learned

An agent that needs the weather once shouldn't have to sign up for anything. An agent that needs it ten thousand times a day should get a cheaper price for having an account. Publishing both options, with the price of each as data, lets the agent make that decision on its own. That's what I mean when I say pricing is part of the contract.

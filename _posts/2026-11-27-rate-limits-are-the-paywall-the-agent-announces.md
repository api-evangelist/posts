---
published: true
layout: post
title: 'Rate Limits Are The Paywall The Agent Announces'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/rate-limits-are-the-paywall-the-agent-announces.png
date: 2026-11-27 15:00:00 +0000
author: Kin Lane
tags:
  - Rate Limits
  - Plans
  - Pricing
  - Agents
  - x402
  - MCP
---
I have written about rate limits on this blog since 2011. Back then they were a traffic control knob with a business model bolted on the side: a free tier to get you in the door, a higher limit if you verified your email, and a bigger number if you paid. That shape has not really changed. What has changed is who reads the limit when you hit it.

## The agent delivers the message now

When a human developer hit a rate limit in the old days, they got a 429, read the docs, maybe found the pricing page, and made a decision. When an agent hits a rate limit on an MCP server, the agent is the one that has to explain it. "You have reached your limit for today. You will need to subscribe to keep going." The rate limit becomes the paywall, and the agent becomes the one announcing it to the person on the other side of the chat.

That came up when I was talking with Patrick Heneise for an [API Evangelist Conversation](https://conversations.apievangelist.com/) earlier this month. We were talking about agent payments and how you actually get paid for the services you provide through an MCP server, and I realized I had some numbers of my own to share about how that is going on my side.

## What I have set up for APIs.io

Here is my current shape. I have a free tier. If you register, you get a little bit more in the way of API calls. Then I have two paid tiers. On top of that, you can do pay as you go for all of those same API calls instead of committing to a tier.

Pay as you go works one of two ways. You can use x402, where the agent pays per request over HTTP. Or you can put a Stripe credit card on file, and I charge it 25 bucks at a time, or 100, whatever you want to load.

So far I haven't had any bites on x402. Not one. I have had a few people do the charge your credit card option, and that works fine. But it takes a human in the loop. Someone has to show up, type in a card, and decide how much to load. That is not fully automated, and it is not what I would call an agent paying for anything. It is a human paying so an agent can keep working.

## Why the human is still in the loop

I don't think the lack of x402 takers says x402 is wrong. I think it says the agents most people are running today are not holding money. They can read a 402, they can read a rate limit message, and they can tell you that you have to subscribe. What they mostly can't do yet is reach into a wallet they were given and spend from it on their own.

That is starting to shift. Stripe has been talking about cards issued to agents, which is basically giving your agent a prepaid card with a set amount on it and telling it to be smart. That is the missing piece between my x402 endpoint sitting there unused and an agent that can actually spend. Until agents carry something like that by default, the card on file option is going to win, because it is the one people already understand.

## Design the limit message like it is your pricing page

If the agent is going to be the one announcing your paywall, then the limit response is your pricing page. It is probably the only part of your pricing an agent user will ever see. A few things I am taking away from my own setup:

- **Say what happened and why.** A bare 429 gives the agent nothing to say. Tell it the limit, the window, and when it resets.
- **Say what the options are.** Register for more, subscribe to a tier, or pay as you go. The agent can only relay choices you actually give it.
- **Point at a machine-readable plan.** Publish your plans and rate limits somewhere an agent can fetch them, not just on a marketing page. I have been publishing plans and rate limits for thousands of providers in APIs.io, and the ones that state them clearly are much easier for an agent to reason about.
- **Offer the automated path even if nobody uses it yet.** My x402 endpoint costs me very little to keep running, and when agents start carrying money it will already be there.

## The takeaway

Rate limits used to be a conversation between a provider and a developer reading documentation. Now they are a conversation between a provider, an agent and a person, and the agent is the one doing the talking. My numbers are small and honest: no x402 payments yet, a handful of card on file charges, and a human in the loop on every one of them. The paywall works. What is not there yet is an agent that can walk through it on its own, so for now I am designing the limit message for the human the agent is talking to, and keeping the door open for the day the agent can pay its own way.

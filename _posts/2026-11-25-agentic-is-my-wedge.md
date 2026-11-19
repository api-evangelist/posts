---
published: true
layout: post
title: 'Agentic Is My Wedge'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agentic-is-my-wedge.png
date: 2026-11-25 16:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - APIs.json
  - A2A
  - Well-Known
  - x402
  - Discovery
  - Onboarding
---
I call bullshit on a lot of the people spouting agentic right now. But I'm going to be honest with you about what I'm doing with it. I'm using it as a wedge. I'm using the agent moment to finally get the things I've wanted since I started API Evangelist in 2010.

## What I wanted in 2010

When I started doing this, the thing that bothered me most wasn't API design. It was that finding and onboarding with an API was a completely manual, human slog. You had to find the developer portal, find the docs, sign up, hunt for the keys, figure out the pricing, read the terms, and stitch it all together yourself. Every provider did it differently.

I wanted that to be automated. I wanted an API provider to publish a machine-readable index of everything about its APIs, so that software could discover them, understand them, and onboard with them without a human clicking through a portal.

## APIs.json was the first try

That is why I created [APIs.json](https://apisjson.org). A single file at the root of your domain that points to your APIs, your OpenAPI, your documentation, your pricing, your terms of service, your signup, your support. Everything a machine needs to go from "this company has APIs" to "I am using this API."

It worked, technically. The problem was never the format. The problem was motivation. There was no consumer on the other end that cared enough to make providers publish it. Developers were still happy to click around. Search engines didn't care. So for most of a decade I kept making the case, and most providers nodded and moved on.

## Then agents showed up

Agents changed the motivation, not the idea. An agent can't click around a portal the way a developer does. It needs to find you, understand what you do, authenticate, and pay, all in a machine-readable way. Suddenly the thing I've been asking for since 2010 has a buyer.

And look at what's arriving:

- **A2A agent cards** at a well-known location, describing what an agent can do and how to talk to it.
- **The well-known API catalog**, a standardized place at the root of your domain listing your APIs, which is exactly what APIs.json was pointing at.
- **AI catalogs and llms.txt**, giving machines a map of your content and capabilities.
- **x402** for commerce, so a machine can actually pay for an API call without a human entering a credit card.

Discovery, onboarding, and commerce, automated. That's the whole list. I didn't have to win the argument about APIs. The agents won it for me.

## Their words, my outcomes

Agents, MCP, skills. Those are their words, not mine. But underneath those words I'm getting what I want out of API design, out of APIs as a product, and out of machine-readable discovery. I'm happy to use the vocabulary if it gets providers to publish the artifacts.

That's why so much of my work on [APIs.io](https://apis.io) now looks at whether a company has an agent card, a well-known catalog, an llms.txt, and an APIs.json, alongside the API foundation underneath them. It's the same question I've been asking for sixteen years, it just finally has teeth. If your [skills can't be found](https://apievangelist.com/2026/11/20/your-skills-dont-count-if-agents-cant-find-them/), they don't count, and the same is true for every API you have.

## The wedge cuts both ways

I'm not naive about this. The same hype that's giving me leverage is going to produce a mess, and I've already written about [waiting for MCP's trough of disillusionment](https://apievangelist.com/2026/11/24/waiting-for-mcps-trough-of-disillusionment/). A lot of what gets built under the agentic banner won't have a foundation under it.

But a wedge is a wedge. For the first time since 2010, providers have a reason to publish what they have, where they have it, in a format machines can use. I'm going to push on that as hard as I can, because when the hype fades, the well-known files, the catalogs, the agent cards, and the payment rails will still be there. And so will the APIs underneath them, which is what I cared about all along.

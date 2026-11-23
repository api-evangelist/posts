---
published: true
layout: post
title: 'Six Containers From Prague'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/six-containers-from-prague.png
date: 2026-11-27 18:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Logistics
  - EDI
  - Onboarding
  - API Economy
---
There is one sentence from my conversation with Zdenek Nemec that I keep coming back to. We were talking about agents onboarding themselves into APIs, and he gave the example that makes the whole agent commerce conversation feel a lot more honest: "A bot will go, 'Hey, I want to ship six containers from Prague to New York City,' and even as I'm saying it, I don't believe it right now."

I wrote about the forecasting side of that conversation in [Nobody Is Forecasting The Transactional API Economy](/2026/10/15/nobody-is-forecasting-the-transactional-api-economy/). This post is a different angle. I want to stay with the six containers, because one concrete journey carries further than any abstract argument about agents as buyers. You can listen to the full conversation over on [API Evangelist Conversations](https://conversations.apievangelist.com/store/2026-09-25-zdenek-nemec/).

## Where the easy APIs are

Zdenek drew the line clearly. Onboarding into a transactional API, his example was "give me weather information," is technically, legally and commercially straightforward. That kind of thing should become the norm, and with x402 and MPP in play you can see how an agent finds it, pays for it and uses it without a human ever touching a form.

Then he went to the other side of the line. Onboarding into a CRM like Salesforce, or ordering a physical service like shipping containers through DHL. "That's not likely for the next, I don't know, 10 years." He also said he doesn't see agents self-onboarding into Oracle Hospitality Cloud. Never say never, he said, but not this year or next.

I agree with him, and I want to be specific about why, because the reasons are not mostly technical.

## What the journey actually involves

Think about what it takes for six containers to leave Prague and land in New York. It is not one API call. It is booking, pricing, contracts, customs, documentation, handoffs between carriers, and somebody accountable at every stage. On the call I added orchestration across many APIs, business decisions, workflows, legal, licensing and contracts. Agents will handle "the things that are really well known and don't have more than like 32 steps." Shipping containers across an ocean has a lot more than 32 steps, and a lot of them involve a person signing something.

Then there is the plumbing. My critique on the call was that those shipping containers you want to send from Prague are still being sent over EDI that was set up in 1976. That is not a knock on anyone. EDI works, and it works at enormous scale. But it means the agent is not walking into a self-serve developer portal with a sandbox, a pricing page and a key. It is walking into decades of agreements, trading partner setups and the expectation that a human relationship comes first.

## Where an agent stalls

If I trace the journey and ask where an agent would stall, it is pretty predictable:

- **Discovery.** Can the agent even find a machine-readable description of what the carrier offers? In my experience with the catalog, the further you get from self-serve transactional APIs, the less I find published openly.
- **Access.** Is there a way to get credentials without a sales conversation or a signed contract? For the transactional APIs, yes. For logistics, I usually find the path goes through a person.
- **Price.** Is there a published price an agent can reason about, or is it a quote? Containers are quoted.
- **Commitment.** Who is legally on the hook when the agent books something? Nobody has a good answer for that yet, and it is the objection that matters most.

None of those are about whether the API exists. They are about whether the business is set up to let something other than a human make the decision.

## The front line is not the economy

I chose to showcase the front line with APIs.io rather than build an onboarding tool, because the front line matters. There are kids doing it out in the open, faster than everyone else, and they will set expectations. But I remember how excited we all were about API management and design-first in 2012. It changed the world. It did not move it as fast as we thought it would. It never does.

At the end of the call I told Zdenek I want to come back and walk the front line with him, x402, A2A cards and the companies leading it, and then brainstorm how we get the shipping companies to do this so you can ship your containers from Prague to the US. That is the real question for me.

## The takeaway

The agent economy will arrive first where the business is already simple: weather, text messages, enrichment, anything with a published price and a self-serve key. Six containers from Prague is the test of whether it reaches the part of the economy that moves physical things, and that test will be decided by contracts, liability and fifty-year-old plumbing, not by whether agents are smart enough. If you want to know how close we are to real agent commerce, don't ask what the frontier can do. Ask what it would take to ship six containers.

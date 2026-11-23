---
published: true
layout: post
title: 'The Line Between Self-Serve And Never-Without-A-Human'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-line-between-self-serve-and-never-without-a-human.png
date: 2026-11-24 18:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Onboarding
  - Agent Readiness
  - Kin Score
  - Conversations
---
Back in October I wrote about [Zdenek Nemec's question](/2026/10/15/nobody-is-forecasting-the-transactional-api-economy/) of how the transactional slice of the API economy grows now that agents can buy. That post was about the forecast. This one is about something else he said in the same [conversation](https://conversations.apievangelist.com/store/2026-09-25-zdenek-nemec/), which I think is even more useful day to day: there is a line running through the API economy, and on one side an agent can onboard itself, and on the other it is years away from doing so without a human.

## Where Zdenek draws the line

Around the thirteen minute mark Zdenek put it plainly. Onboarding into APIs that are really transactional, "hey, give me weather information" or whatever, is "technically, legally, commercially pretty straightforward and easy and doable. We should see that as a norm, with x402 and MPP."

Then he went to the other side. A CRM API like Salesforce. Or ordering a physical service: "DHL shipping: ship six containers from here to there. That's not likely for the next, I don't know, 10 years." And a little later: "I don't see agents self-onboarding into Oracle Hospitality Cloud... that's not going to happen anytime soon, and by soon I mean years."

I agreed with him on the call. When people tell me the agents are just going to figure all of this out, I say maybe eventually. The simple things, sure: checking weather, sending an email, the well-known things that do not have more than like 32 steps. But onboarding is not only technical. It is the business decisions, the workflows, the legal, the licensing and the contract.

## Why the line matters more than the hype

Most of the agent commerce conversation treats every API as if it sits on the self-serve side. It does not. And the companies sitting on the other side are not doing anything wrong. Shipping containers across an ocean or booking rooms inside a hotel's operational system involves real liability, real money and real relationships. A human in the loop there is a feature.

What is missing is any honest way to see which side of the line a given API is on. Today you find out by trying. You click through the docs, look for a pricing page, look for a signup button, and eventually hit "contact sales" or you do not. An agent does the same thing, only it burns tokens doing it and has less judgement about when to give up.

## Turning the line into a rubric

So here is what I want to do with Zdenek's line: make it observable. When I look at an API through the lens of whether an agent could onboard alone, the questions are pretty concrete:

- **Self-serve keys.** Can you get a credential without talking to anyone?
- **Published pricing.** Is the price on the page, or behind a quote?
- **No contract.** Can you start using it under click-through terms, or does it need a signed agreement?
- **No sales call.** Is there any path in that does not start with a form asking for your company size?
- **Sandbox.** Is there somewhere to try it before you commit, ideally without a key at all?

None of these say an API is good or bad. They say where it sits on the line. An API that checks every box is one an agent can plausibly onboard into today. An API that checks none is telling you, honestly, that a human is going to be involved.

## Where this fits in how we score

Pieces of this already show up in how I score APIs at APIs.io. Access Clarity looks at whether plans and pricing are published. Developer Ergonomics picks up sandboxes. Agent Readiness looks at whether a machine can find and use the API. What is not there yet is the line itself, a single read on whether an agent can go from discovery to a working call without a person stepping in.

That is a candidate check, not a shipped one. The next step is to score a sample against those five questions, see whether the results sort the way Zdenek's examples suggest they should, with weather and SMS and enrichment on one side and the CRMs, logistics and hospitality platforms on the other, and only then decide whether it earns a place in the Kin Score. I would rather measure first than assert.

## The takeaway

The useful question about an API in the agent era is not "is it agent ready?" in the abstract. It is which side of Zdenek's line it sits on, and whether it says so clearly. If you are on the self-serve side, make every one of those five signals easy to find, for humans and machines. If you are on the human side, say that plainly too, so nobody's agent wastes an afternoon finding out.

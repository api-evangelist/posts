---
published: true
layout: post
title: Agents Don't Magically Understand Your API
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-dont-magically-understand-your-api.png
date: 2026-08-04
author: Kin Lane
tags:
  - AI
  - Agents
  - API Design
  - OpenAPI
  - Documentation
  - Machine Readability
---
There is a fantasy loose in the industry right now that AI has dissolved the hard parts of working with APIs. Point an agent at your systems, the story goes, and it will figure out the rest--discover your endpoints, infer your business logic, reconcile your inconsistent naming, and stitch together a workflow no human ever documented. It is a seductive story because it lets everyone skip the part of the job they never liked. And it is wrong in the same way every "the machine will just figure it out" story has always been wrong.

I put it plainly in my recent [Nordic APIs](https://nordicapis.com/kin-lane-on-ai-and-the-future-of-apis/) conversation: agents are not going to magically understand your processes, any more than a human does. When you onboard a new engineer, they do not absorb your API by osmosis. They read the documentation, if it exists. They squint at inconsistent field names and guess. They get tripped up by the endpoint that does something surprising, the status code that means something non-obvious, the required parameter that is documented nowhere. They ask the one person who still remembers how the billing API actually works. An agent is walking into the exact same building, through the exact same door, with the exact same missing map. It just does it faster and complains less.

This is the thing the hype gets backwards. AI does not eliminate the need for good API design--it makes the absence of good API design catastrophically more expensive. A human who hits your confusingly-named endpoint slows down, feels the friction, and works around it. An agent hits that same endpoint at machine speed, makes a confident wrong assumption about what it does, and propagates that assumption across a thousand automated calls before anyone notices. The messy, underdocumented, inconsistent API that a human could muddle through becomes a liability the moment you point automation at it. Sloppy design was always a tax. Agents just moved the tax bracket way up.

And it plays out differently everywhere you look, which is its own problem. Microsoft exposes their surface one way, Google another, Amazon a third--different auth, different conventions, different assumptions about how you are supposed to reason about their resources. There is no universal agent that transcends this. Every one of those differences is a design decision that an agent has to be told about, because it cannot intuit intent from an endpoint any more than you can. "Just let the AI handle the integration" quietly assumes away all of the actual work, which is describing your API clearly enough that something without your context can use it correctly.

So the work has not disappeared. It has shifted--from writing documentation optimized for humans to writing descriptions optimized for machines. Your OpenAPI has to be complete and accurate, not decorative. Your schemas need real examples, honest descriptions, and the security schemes actually filled in. The behavior an agent needs--what this operation does, what it requires, what it returns, what can go wrong, and how it chains into the next operation--has to live somewhere machine-readable, because the agent is not going to find the one person who remembers. The tribal knowledge you have been getting away with never writing down is exactly the knowledge automation cannot function without.

This is good news if you have been doing the foundational work all along, and a reckoning if you have not. The teams whose APIs are well-designed, consistently named, honestly documented, and described in machine-readable formats are going to find that agents work beautifully against them--because the agent is finally being handed the map it needs. The teams who bolted their APIs together and papered over the gaps with human intuition are going to watch automation fail against their surface in expensive, confusing ways, and blame the AI. It was never the AI. The agent did exactly what a new engineer would have done with the same terrible documentation. It just did it a thousand times a second.

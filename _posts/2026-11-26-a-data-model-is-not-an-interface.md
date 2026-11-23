---
published: true
layout: post
title: 'A Data Model Is Not An Interface'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/a-data-model-is-not-an-interface.png
date: 2026-11-26 21:00:00 +0000
author: Kin Lane
tags:
  - Standards
  - Data Models
  - Schema
  - API Design
  - Interoperability
---
There is a sentence I hear in a lot of industries that sounds like it should end a conversation about integration: "we have a standard for that." Then I go look at the standard and what I find is a schema. A carefully thought out description of what a patient, a shipment, a meter reading or a trade is. Entities, attributes, relationships, code lists. Often years of committee work. And then it stops.

No transport. No operations. No contract for how one party asks another for something. No notion of exchange at all. A data model, and nothing you can call.

I want to argue that this gap, between "we have a standard" and "you can call something," is one of the more important stories in the API space right now, and that it is measurable.

## What a data model gives you

I don't want to undersell data models. Agreeing on what things are is hard, and it is the foundation of everything else. If two organizations can't agree on what a customer or an invoice is, no amount of HTTP is going to save them. The people who do this work are often deeply embedded in their industries, and the models they produce carry a lot of domain knowledge you won't find anywhere else.

But a data model answers the question "what does this look like?" It doesn't answer "how do I get it?", "how do I change it?", "who is allowed to?", "what happens when it fails?" or "how do I know the other side supports it?" Those are interface questions. They are the questions an API answers.

## What an interface adds

When I say interface, I mean the stuff that turns a shape into an exchange. A transport, usually HTTP. A set of operations, the verbs and paths. Request and response contracts that reference the model. Authentication and authorization. Errors. Versioning. Something machine readable, like OpenAPI or AsyncAPI, that describes all of that so a developer, or now an agent, can actually make a call.

Without that layer, every implementer of the standard invents their own interface around the shared model. You end up with a hundred organizations that all agree on what an order is and a hundred different ways to ask for one. That is better than nothing, and it is still not interoperability. It is shared vocabulary with bespoke plumbing.

## Why agents make the gap sharper

This used to be a problem you could paper over with integration teams and consultants. Somebody would read the standard, read the partner's PDF, and write the glue. That model doesn't scale to agents.

An agent can do a lot with a good schema. It can understand what fields mean and reason about relationships. But it can't call a schema. It needs to know where to go, what operations exist, how to authenticate and what comes back. If the standard stops at the model, the agent is right back to guessing, scraping or relying on whatever it picked up in training. The data model makes the agent smarter about the domain without making it any more capable of acting in it.

So the industries where the standards conversation stopped at the schema are the same industries where agents are going to struggle the most, and they are often the ones where the stakes are highest.

## This is measurable

What I like about this framing is that it isn't just an opinion. You can look at a standard and ask simple questions. Does it publish a schema? Does it publish a callable contract alongside it, OpenAPI, AsyncAPI, gRPC, something with operations in it? Does it define transport and auth, or leave that to each implementer? Is there a reference implementation or a sandbox you can actually hit?

Run those questions across a body of standards and you get a picture of how much of an industry's "standard" is actually implementable versus how much is description. I've already [scored a large set of data model standards on whether they modernized](https://apievangelist.com/2026/08/20/i-scored-532-data-model-standards-on-whether-they-modernized/), which looked at format, access and openness. This is a different cut. Not "is the model current?" but "does the standard ever reach the point where you can call something?"

I want to be careful here. A standard that is a schema only is not a failure. Plenty of them were scoped that way on purpose, and some of them move an enormous amount of the economy. The point isn't to shame anyone. The point is to make the gap visible so the people holding these models can see what is missing between their work and a working exchange.

## The takeaway

A data model tells you what things are. An interface tells you how to exchange them. Too many industries have stopped at the first and are calling it done. In a world where agents are going to be the ones doing the exchanging, the distance between "we have a standard" and "you can call something" is the distance between being part of what comes next and being described by it. Measure the gap, and then go close it.

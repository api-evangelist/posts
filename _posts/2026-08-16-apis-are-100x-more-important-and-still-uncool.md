---
published: true
layout: post
title: APIs Are 100x More Important Than Five Years Ago, and Still Uncool
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-are-100x-more-important-and-still-uncool.png
date: 2026-08-16
author: Kin Lane
tags:
  - APIs
  - AI
  - Agents
  - Machine Readability
  - Infrastructure
  - OpenAPI
---
Nobody wants to talk about APIs at a dinner party, and they never will. APIs are plumbing, and plumbing is invisible right up until the moment it fails. I have made peace with this after a long time doing this work--the API will never be the cool thing in the room. But I want to say something that sounds like a contradiction and is not: APIs are roughly a hundred times more important today than they were five years ago, precisely as they have become a hundred times less interesting to talk about. The importance and the coolness have moved in opposite directions, and that gap is where all the leverage is right now.

Here is why the importance went up. Every single thing the industry is excited about--every agent, every copilot, every autonomous workflow, every AI feature bolted onto a product this year--reaches into the real world through an API. The model does not touch your data directly. It does not call your billing system, book the appointment, move the money, or read the inventory by magic. It does all of that through APIs, the same connective tissue that has been quietly holding software together for two decades. AI did not replace the API layer. AI made the API layer the thing everything else depends on, and then took all the attention for itself. I said as much to [Nordic APIs](https://nordicapis.com/kin-lane-on-ai-and-the-future-of-apis/): the API is uncool and utterly essential, and it is going to outlast this entire hype cycle the way it outlasted the ones before it.

What has genuinely changed is who the API is for. For twenty years, the consumer we designed around was a human developer--we wrote documentation for people, optimized the getting-started experience for people, and assumed a person with context and patience would be on the other end of every integration. That assumption is dissolving. Increasingly the consumer is an agent doing the discovery, the parsing, and the workflow-building itself, with no patience and no context beyond what you hand it in a form it can read. The center of gravity is shifting from human-readable to machine-readable, and that is not a cosmetic change. It reorders what "good" means.

An API designed for a machine consumer has different obligations than one designed for a patient human. The human could tolerate documentation that was ninety percent complete and fill the last ten percent with intuition, a support ticket, or a guess. The agent cannot. It needs the OpenAPI to be accurate and complete, the schemas to carry real examples and honest descriptions, the errors to be documented, the auth to be discoverable, and the relationships between operations to be explicit rather than implied. Everything you used to be able to leave to human judgment now has to be written down in a format something without judgment can consume. The tribal knowledge has to come out of people's heads and into the machine-readable surface, because there is no longer a person in the loop to supply it.

This is why I am not worried about APIs going out of style, even as the word itself gets buried under "agentic" everything. Styles are for the surface. APIs are the substrate, and the substrate does not care what the layer on top of it is called this year. When the current AI enthusiasm cools into something more sober and sustainable--and it will, the way every cycle does--the agents and copilots that survive will still be reaching into the world through exactly the same connective tissue. The organizations that used this moment to get their API house in order, to make their surfaces genuinely machine-readable, will be the ones those survivors can actually build on. The organizations that chased the shiny layer and neglected the substrate will be wondering why the future refuses to connect to them.

So let the APIs stay uncool. Let the attention go to the models and the agents and whatever comes after them. The people who understand where the leverage actually lives will keep doing the unglamorous, load-bearing work--designing clean surfaces, writing honest machine-readable descriptions, treating the API as the product it has quietly become. A hundred times more important and still nobody's favorite topic is not a paradox. It is the single best description I have of where we are, and the clearest signal I know of where the durable value is going to sit long after this hype cycle is a footnote.

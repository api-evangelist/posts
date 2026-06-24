---
published: true
layout: post
title: Consumer API Governance in an Agentic World
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/consumer-api-governance-in-an-agentic-world.png
date: 2026-06-24
author: Kin Lane
tags:
  - API Governance
  - Artificial Intelligence
  - Agents
  - MCP
  - API Consumption
---
I am preparing to give the third iteration of my talk on consumer API governance, this time in Munich next month. I've given versions of it at APIDays NYC and Amsterdam, and I keep iterating on the narrative with what I learn in each city — from the talk itself, and from the hallway conversations afterward. The argument is still new, and it will take a lot of refinement. It is also up against a decade of vendor headwind that has trained everyone to believe API governance is something you do at design time and then enforce during development and build, while you are producing APIs. Applying governance rules dynamically and selectively as part of integration and consumption is not something people have been sold, and it is going to take many waves of storytelling before it even begins to make sense to some folks, let alone reshape how they see APIs being used.

What I am proposing is that we use API governance rules not just to shape and standardize the APIs we produce, but to dynamically generate the context we need when consuming APIs — both the ones we produce and the ones we do not control. With the pressure that copilots and agents are putting on the APIs we depend on to run our businesses, I want us to govern the interfaces — API and MCP — that we serve up for our AI integrations, establishing rulesets that shape what we can and cannot do when we unleash agents and tap into our digital resources with copilots and GPTs. Integrating AI into a business means having a variety of API resources available as context-engineered HTTP interfaces, and I am proposing that those interfaces be dynamically generated and governed by rules that define the shape of the context each AI integration requires.

The overall shape of the API or MCP we provide — and the finer details of paths, tools, parameters, and schema — get governed by rules that dictate things like no PII, only products and metadata but no pricing, or whatever else we need or specifically do not want in the context window we are engineering. This lets us govern the inputs and outputs used by artificial intelligence, with or without a human present. Gateways like [KrakenD](https://www.krakend.io/docs/overview/) already give us the ability to declaratively consume from one or many different APIs and then produce exactly the API and MCP surface we need to integrate into AI. Those declarations can be generated and governed using rulesets that are themselves generated as well as hand-crafted and reviewed, so that governance is realized as part of every AI integration rather than bolted on after the fact.

This is what I mean by consumer API governance in the age of artificial intelligence. It is a big mind shift from what most people think of as API governance, and it is a more deterministic approach than what folks are used to talking about when the subject turns to AI governance. It is also what we will need if we want to define and scale governance beyond the slow pace of the producer-side governance we've been investing in for the last decade. Producing well-governed APIs matters, but it will never keep up with the rate at which agents and copilots are reaching for our resources. Governing consumption — shaping the context we hand to AI, deterministically, by rule — is how we keep up, and it is the conversation I will keep refining one city at a time.

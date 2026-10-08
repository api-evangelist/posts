---
published: true
layout: post
title: 'We Used To Ask The Clients, Now We Unleash The Dogs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/we-used-to-ask-the-clients-now-we-unleash-the-dogs.png
date: 2026-10-08
author: Kin Lane
tags:
  - MCP
  - Specifications
  - Standards
  - Agents
  - AI
  - API Design
  - API Governance
  - Protocols
---
Every specification I have watched grow up had the same quiet machinery underneath it. Someone proposes a change. A handful of people who maintain real clients, the libraries and applications that actually speak the protocol, try the change in a branch before it is final. They come back and say the thing is awkward, or expensive, or that nobody will build it. The change gets reshaped or dropped. Then, once a version ships, the people running it in production come back a second time with what broke, what nobody used, and what they had to work around. That second loop is slower and more honest than the first, and it is where the next version comes from.

That machinery is what made HTTP, OAuth, and OpenAPI what they are. It is not glamorous. It is a client maintainer saying "we are not going to implement that" in a working group call, and everyone in the room adjusting. I have spent enough time inside specification work over the last year, most recently around MCP, to notice that this loop is quietly coming apart, and that the thing replacing it is artificial intelligence.

## Nobody owns the client anymore

The first break is simple. The people showing up to design new protocol primitives increasingly do not maintain a client that would have to honor them. They maintain servers, or platforms, or they have an idea. When a group wants to know whether a new primitive will be adopted, the honest answer is that there is no one in the room who can say yes or no on behalf of the software that matters. You hear it in the language: who is "actually interested" in this, who would "commit to adopting it," can we find a host implementer willing to prototype so we have confidence it will be used in its current form.

That used to be the easy part. The clients were in the room because the clients were the reason the protocol existed. Now the clients are a small number of very large vendors with their own roadmaps, plus a long tail of applications built on a couple of agent frameworks, and most of the long tail does not implement the protocol so much as hand it to a model and let the model sort it out.

## The model papers over the spec

That is the second break, and it is the one that worries me. When a client does not understand a primitive, it does not fail loudly anymore. It flattens the primitive into whatever it does understand, usually a tool call, and lets the model work out the rest at runtime. A resource becomes an alias for a read tool. A link that was meant to hint at what else changed gets filtered out before the model sees it. The protocol has an idea about how something should work, the client ignores it, and the model, being very good at working with whatever it is given, makes the result look fine.

One popular coding agent recently added protocol support by routing every server through a code-execution sandbox, where the model writes the glue itself rather than the client implementing the primitives. I understand why. It is efficient, it keeps context small, and it works. But from the specification's point of view it is a black box. There is no implementer to report back that a primitive was unclear, because no one implemented it. There is no production feedback that a feature went unused, because the model used, or did not use, whatever it decided to in the moment, and nobody wrote that down.

This is what I mean by unleashing the dogs. We used to ask the clients what they thought of a change. Now we release the change, point a model at it, and watch to see what survives.

## Survival is not the same as review

I hear the survival argument a lot now, and there is something to it. Ship the thing as an extension, let people dogfood it, and if it survives it survives because people wanted it. Extensions keep the core clean, they prevent forks, and they let a small group move without waiting on a vote. I am in favor of all of that.

What I want to name is what the survival argument does not give you. A primitive that no client treats as first class is not rejected. It just sits there, technically adopted, actually invisible, and the specification never finds out. The old feedback loop had a person on the other end who could tell you *why* something did not land. The new one has a model that will route around almost anything, and a usage signal that nobody is collecting. You can ship into that for a long time and read the silence as consensus.

The drift problem has the same shape. A protocol with six official SDKs used to rely on six sets of maintainers arguing until the behavior matched. The emerging practice is to write the reference implementation in one language and ask an agent to produce notes on how it should translate to the others, then feed those notes back into the specification so the languages reconcile themselves. That is clever, and it may well reduce drift. It also means the specification is now partly the output of the tool it was supposed to constrain.

## What I think we should ask for

I do not want the old loop back as it was. It was slow, it favored whoever had the time to sit on calls, and it is gone regardless. But if models are going to be the primary consumers of our specifications, then the specifications need to be instrumented for a feedback loop that models will not volunteer on their own.

That means a reference harness that treats every primitive the way the spec intends, so there is at least one client in the world that can say what the protocol actually looks like when honored. It means conformance tests that fail when a client flattens something it should not. It means asking, before a primitive ships, which clients will treat it as first class and which will route around it, and writing that answer down rather than hoping. And it means collecting the production signal on purpose, because "the model worked it out" is not a measurement, it is the absence of one.

I spend most of my days measuring the server side of all this, which providers publish which contracts, and how well. The client side is where I cannot see, and I am increasingly convinced that is where the specifications are being decided. We stopped asking the clients. We should at least build the instruments to hear what the dogs are doing.

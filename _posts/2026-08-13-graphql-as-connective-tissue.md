---
published: true
layout: post
title: GraphQL as Connective Tissue
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/graphql-as-connective-tissue.png
date: 2026-08-13
author: Kin Lane
tags:
  - GraphQL
  - API Design
  - AsyncAPI
  - Integration
  - APIs
  - Schema
  - Architecture
---
I have spent enough years watching people love [GraphQL](https://graphql.org) for the wrong reasons and hate it for the wrong reasons that I want to step around both of those piles entirely and talk about the one place where I think it is genuinely, quietly excellent. Not GraphQL as your public edge. Not GraphQL as a REST replacement. Not GraphQL because a frontend team wanted to stop waiting on backend tickets. I mean GraphQL as connective tissue — the seam that stitches a pile of mismatched REST APIs, event streams, and internal services into one coherent graph a consumer can actually reason about. That is the job it was born for, and it is the job the marketing and the backlash both keep talking you out of noticing.

Here is the situation almost every organization of any size is actually in. You do not have an API. You have forty of them. You have a REST API that a team built in 2018, a newer one somebody wrote in a hurry last year, a couple of [AsyncAPI](https://www.asyncapi.com)-described event streams throwing messages onto a broker, a gRPC service two teams down, and a SaaS product or three whose APIs you do not control at all. A consumer who wants to answer one useful question — give me this customer, their last five orders, their open support tickets, and whether their latest event stream shows churn risk — has to touch five of those surfaces, each with its own auth, its own shape, its own idea of what a customer even is. That is not an API problem you can lint your way out of. That is a composition problem, and composition is exactly what GraphQL's type system is good at.

When GraphQL sits in the middle as a federated graph, it becomes a place where all of those heterogeneous backends get expressed as one set of types with real relationships between them. The REST customer, the streamed churn signal, and the SaaS ticket stop being three unrelated calls and become three fields hanging off the same node. The consumer asks one question and gets one shaped answer, and the ugly work of fanning out to five backends, translating five payloads, and reconciling five notions of identity happens inside the graph where it belongs. This is the same instinct I keep coming back to when I argue that [GraphQL is governance by default](https://apievangelist.com/2026/08/06/doing-graphql-is-governance-by-default/) — the schema forces you to actually decide what your things are and how they relate, and when you are stitching together a dozen backends, being forced to decide is a feature, not a tax.

I want to be precise about the boundary, though, because this is where people overreach and give GraphQL its bad name. The connective-tissue role is an internal orchestration and aggregation role. It is the layer that composes. It is not automatically the right thing to expose raw to the whole internet, it does not make your caching problems disappear — it usually makes them harder — and it does not absolve you of the underlying APIs. The REST services underneath still need to be well-designed, well-governed, and durable, because GraphQL is stitching them, not replacing them. A federated graph over a pile of bad APIs is a tidy front on a mess. The connective tissue is only as healthy as the muscle it connects.

And this is the part that ties GraphQL back into everything I have been writing about agents and [MCP being last-mile plumbing](https://apievangelist.com/2026/08/04/mcp-is-last-mile-plumbing/). When an agent shows up wanting to do a real job across your estate, the thing it most needs is not forty disconnected surfaces — it is one composed surface where the relationships are already expressed. A federated GraphQL layer is one of the cleanest ways to give it that. It is a single typed graph that already knows a customer has orders and tickets and events, so the agent does not have to rediscover those relationships by trial and error against five APIs. The connective tissue that makes life easier for a human integrator makes life dramatically easier for a machine one, because the machine is even less equipped to guess how your five backends secretly relate.

So my honest position on GraphQL, after all these years, is neither the hype nor the hate. It is that GraphQL earns its keep as a composition layer — the connective tissue over a heterogeneous estate of REST, events, and third-party APIs — and it struggles or actively hurts when you deploy it as a fashion statement, a public edge you have not thought through, or a way to avoid designing the APIs underneath. Put it in the middle, where it stitches, and it is one of the better tools we have. Put it at the edge for the wrong reasons and you will spend the next two years re-learning why REST was the right answer for the thing you replaced. The tissue is not the muscle, and it is not the skin. It is the connective layer in between, and that is exactly where it belongs.

---
published: true
layout: post
title: 'The Client Stack Did Not Collapse, It Went Dark'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-client-stack-did-not-collapse-it-went-dark.png
date: 2026-11-05
author: Kin Lane
tags:
  - Clients
  - Agents
  - Hypermedia
  - OpenAPI
  - SDKs
  - Proxies
  - Consumption
  - Breaking Changes
---
On a recent call with Bruno Perez, who built the Manifest LLM gateway and has recently launched [Okapi](https://www.okapi.bot/), I went hunting through my own blog for a diagram. Bruno was describing what his team is building from the consumer side of APIs, and I knew I had drawn the thing he was describing, or at least related to what he is describing. It took me a couple of minutes of sorting posts to find it, which says something about how much I have written since. It was from January 2025: [API, OpenAPI, Collections, Docs, Explorer, Playground, Clients, SDKs, and Integrations](https://apievangelist.com/2025/01/12/api-openapi-collections-docs-explorer-playground-clients-sdks-and-integrations/). Ten layers, laid out as a spectrum from the producer to the consumer, with a note on what each side wanted out of each one.

Reading it again with Bruno on the screen, two things were missing and one thing was wrong. The missing pieces are easy. Hypermedia belongs between OpenAPI and collections, because [we didn't skip it, we moved it out of the response](https://apievangelist.com/2026/10/22/we-did-not-skip-hypermedia-we-moved-it-out-of-the-response/), and it is the only layer that was ever designed for the consumer that has finally arrived. Proxy belongs after integrations, because that is where Bruno sits, and where I sit every time I turn one on to map what my own machine depends on. Twelve layers now, and I am keeping all of them. The thing that was wrong is the word I used for the whole spectrum. I called it the client stack. I don't think it is a client anymore.

## Twelve moments when knowledge reaches the consumer

Every layer in that list is a way knowledge about an API gets to whoever is going to use it, and each one arrives at a different moment. The API, the OpenAPI, and hypermedia speak at design time, when the provider decides what exists and how it connects. Static documentation speaks at read time. Interactive docs, explorers, and playgrounds speak at try time, when someone is learning by doing. Collections and clients speak when a request is executed. SDKs and integrations speak at build time, when the knowledge gets compiled into someone else's software. The proxy speaks at run time, after the request has already left.

What they had in common was that you could point at them. Here is the OpenAPI, this version. Here is the SDK, 4.2.1, released in March. Here is the collection a colleague shared, the docs page in your history, the proxy log from Tuesday. Every layer left an artifact behind, and the artifacts were how we governed API consumption, whether or not we ever called it that. If you wanted to know what your organization depended on, you could go find the things.

## What the agent did to the stack

Watch an agent integrate with an API it has never seen. It reads the docs, if it can find them, or it reads what it remembers of them. It explores: list, then get, then try. It makes a call and reads the error the way we used to read a getting started guide. It writes a small SDK for exactly the three operations it needs. It wires that into the task it was given. Sometimes the request goes through a gateway, usually it doesn't. Every one of the twelve layers runs, in roughly the order I drew them, in a few seconds, inside a single context window.

Then the context window closes and all of it is gone. There is no SDK to version, because the SDK was written for one task and thrown away. There is no collection, because the run was never saved. There is no docs page in anyone's history. The only artifact that comes out the other end is the HTTP request, and whatever the proxy logged, if there was one. The stack didn't collapse into some new layer. Every layer is still there and still doing its job. It just went dark.

That is what I was fumbling to say on the call when I kept reaching for the word obfuscated. Developers don't know what their tools are doing, and I don't say that to be mean about developers, because the tools are built so that they don't have to. The layers I drew in January were things you could point at. Now they are things that happen.

![The client stack in three eras. Twelve layers, API through proxy, each shown as what it was when a developer did it, what it became when tooling generated it from the contract, and what it is now that an agent does it inside one inference.](https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-client-stack-three-eras.png)

## The model is the SDK now, and nobody knows what version

The layer that worries me most is the one I would have called the least interesting two years ago. An SDK was code frozen at build time. Leonard Richardson warned about that in 2008, the coupling you get when knowledge of a service is baked into the client, so that the client breaks when the service moves. We lived with it because the version number told you exactly how stale the knowledge was, and a changelog told you what moved.

The agent's SDK is written at the moment of need, from whatever the model remembers about the API. That memory was frozen at a training cutoff nobody can see, for an API that has kept changing since. It is the Richardson coupling with the version number torn off. Okapi's own front page says it is watching over eight hundred upcoming breaking changes across more than a thousand providers, and those are only the announced ones. Every one of them is a call some agent will write from memory next week, confidently, into a repository nobody will read closely.

This is why I think the consumer side of breaking changes is where the money is going to move. We have had producer-side breaking change tooling forever: diff two versions of the contract, warn the team before the release goes out. Bruno's framing starts from the other end. Watch the APIs a codebase actually calls, flag the ones that are about to move or already have, and open the pull request with the fix. Dependabot for APIs. It only makes sense once you accept that the code doing the calling was written by something that was not reading the docs.

## Why the proxy came back

The proxy is the twelfth layer because it is the only one where the dark stack becomes visible again. Our grandfathers' gateways sat on the provider side and handled keys, quotas, and logs. Then came Kong and Tyk and the smaller ones, then micro proxies and sidecars, and somewhere in there the proxy quietly changed sides. The one I care about now sits with the consumer and watches outbound traffic, because that is the only vantage point from which you can see what an agent actually did.

Manifest's gateway still ships a self-healing feature that repairs the mechanical errors before they reach the caller, a renamed model, a parameter spelled one provider's way and sent to another. Okapi is the same instinct moved earlier in the lifecycle, from repairing the request to fixing the code before it runs. I told Bruno what I tell everyone working in this space: logs are too late, the gateway is the sweet spot, and the pipeline is where the fix has to land. The proxy gives you back the three things the twelve layers used to give you for free. A record of what was called. A view of what broke. A place to intervene before the request leaves.

## It isn't a client, it's consumption

So what do I call the thing I drew? I have written many times that APIs don't matter until someone consumes them. For sixteen years the someone was a developer, and the client was the tool between them and the API. The client was a noun. You could install it, version it, and ask what it supported.

Now the thing between the human and the API is an agent, and the agent isn't a tool the consumer uses. It is the consumer, acting on a goal a human stated three layers back. The stack I drew is no longer a set of artifacts arranged between a producer and a consumer. It is a sequence of behaviors folded inside the consumer, and the consumer isn't a person. What is left to name isn't a client at all. It is consumption, happening in the dark, with the whole stack inside it.

Which puts the question back on the provider, and this is the part I actually care about. How much of that stack can your API still carry when something that isn't a client reaches for it? Is the contract findable at runtime, or only in a portal behind a login? Does the response say what is possible right now, or does the agent have to guess from memory? Is there a sandbox it can rehearse in before it touches production? Will it find your integration, or write its own from a cutoff? Those are the questions I have been asking with the [Kin Score](https://apis.io/rating/), and after this week I understand better why they are the right ones. The stack went dark on the consumer side. The only side where you can still turn the lights on is the provider's.

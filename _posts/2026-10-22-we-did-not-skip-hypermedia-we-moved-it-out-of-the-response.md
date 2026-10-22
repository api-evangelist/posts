---
published: true
layout: post
title: 'We Did Not Skip Hypermedia, We Moved It Out Of The Response'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/we-did-not-skip-hypermedia-we-moved-it-out-of-the-response.png
date: 2026-10-22
author: Kin Lane
tags:
  - Hypermedia
  - Specifications
  - OpenAPI
  - Arazzo
  - Overlays
  - MCP
  - A2A
  - Agents
---
Earlier today I wrote that [we had the agent protocol in 2008 and left it on the table](https://apievangelist.com/2026/10/22/we-had-the-agent-protocol-in-2008-and-we-left-it-on-the-table/). Leonard Richardson laid out a heuristic at QCon that topped out at hypermedia, meaning links that tell you where the resources are and forms that tell you what you can do to them. Most providers stopped one step short, and now we are building agents on top of what they shipped. After I published it, the obvious question came back at me: if we skipped hypermedia, what are OpenAPI, Arazzo, Overlays, MCP, and A2A? I think the more honest answer is that we didn't skip hypermedia. We took it out of the response and rebuilt it as a stack of documents sitting next to the API.

## Where each piece went

Richardson's model had three web technologies doing the work: URIs, HTTP, and hypermedia. Over fifteen years we kept the first two and slowly redistributed the third across specifications.

**OpenAPI is the second step, written down.** It keeps the URIs and the HTTP methods intact, so an agent reading it still knows that a GET is safe. The forms Richardson talked about live in its request bodies and JSON Schema. It even has a `links` object, which says the `id` in this response feeds that operation over there. That is hypermedia described at design time, and almost nobody fills it in. That little corner of the spec tells you how far the community was willing to go back toward hypermedia, and how far developers were willing to follow.

**Arazzo is the next step, written down.** Richardson said the response should tell the client what it can do next. Arazzo describes the next step in a separate document instead: this call, then that one, with outputs feeding inputs and success criteria deciding which way to go. It's the application state machine written out ahead of time. For an agent, that can be better than hypermedia, because it sees the whole workflow before the first call instead of discovering it one response at a time.

**Overlays are Richardson's third closing principle.** He said to describe the differences between complex systems in a standard way so people can learn them quickly. Overlays let you add meaning to a contract without touching the source: what an operation is for, when to use it, what to be careful about, how a person would ask for it. That's how you make an API you don't own, or can't change, readable to an agent. It's how we have been adding conversational phrasing to operations across the catalog.

**MCP is the client interface, and it's mixed.** Tools are called over JSON-RPC through a single endpoint, which is the bottom of Richardson's heuristic. Resources have URIs and URI templates, which is the first step and the part of MCP that most follows the web. Tool annotations like `readOnlyHint` and `idempotentHint` rebuild what HTTP methods already said. What MCP gets right is listing its capabilities at runtime. What it mostly lacks is results that point to what to do next.

**A2A is the same move between agents.** The agent card at a well-known URI is a pure first-step idea: an addressable description you can find. Tasks have state and move through a lifecycle, which is application state again, but the protocol reports that state rather than letting a client navigate it through links. It's a JSON-RPC envelope with a discovery document beside it, the same shape as MCP.

Put it together and the old pieces are all still there. Links became Arazzo, forms became OpenAPI and JSON Schema, the media type became the contract, the meaning layer became Overlays, and discovery became well-known paths and agent cards. We didn't abandon hypermedia. We unbundled it.

## In the response or beside it doesn't matter. When it's read does.

Richardson's actual complaint was about coupling. Amazon S3 made you learn its rules from the documentation and bake them into your client, so when the service changed, your client broke. The problem wasn't documentation. It was knowledge frozen into a client at build time.

Seen that way, there are three ways to consume the same spec stack:

- **Generated at build time.** Take the OpenAPI, push the button, ship an SDK. The knowledge is frozen the day you compiled it. This is the coupling Richardson warned about, whatever the spec is called.
- **Read at runtime.** An agent fetches the OpenAPI, the Arazzo workflow, and the overlays when it needs them, and reasons over the current versions. That's much closer to hypermedia than most of us have admitted. The discovery happens when it's needed, not ahead of time.
- **Live in the response.** Links and actions returned with each representation, reflecting the state of this specific resource right now.

Agents make the second option practical in a way it never was for human developers. A person was never going to re-read your OpenAPI before every call. An agent will.

## The gap the specs can't close

There's one thing the documents can't do. An Arazzo workflow can describe every path that's possible in general. It can't tell an agent that this particular order already shipped, so the cancel action is gone. A hypermedia response just leaves the cancel form out. That's per-response state: what's possible right now, for this resource, for this caller. It's the one piece of Richardson's level three we never moved out of the response, because it can't live anywhere else.

That's also where agents get hurt. An agent with a perfect map and no view of current state will try the operation the map says exists, and then it has to make sense of the error. Multiply that by every agent and every call, and it isn't a purity argument anymore. It costs money in tokens, retries, and wrong actions.

## What I'd tell a provider

Use the stack for the map and the response for the state:

- **OpenAPI** for the contract, with the HTTP semantics left intact rather than flattened into a tool list.
- **Arazzo** for the workflows people actually run, so an agent sees the whole path before it starts.
- **Overlays** for the agent-facing meaning layer, kept separate from the source contract so it can evolve on its own.
- **MCP and A2A** for the agent interface. Keep pointing them back at the URIs and the contract, and don't let them become a second copy of your API that drifts.
- **Links and available actions in the response** for the state, even if it's just a `next`, a `self`, and the operations currently allowed on this resource.

Richardson ended his talk saying these are different ways of looking at the same thing. I think that's true of this stack too. The specifications are level three split into separate documents. The only part that has to stay in the response is the part that's true only right now.

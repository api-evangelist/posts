---
published: true
layout: post
title: 'We Had The Agent Protocol In 2008 And We Left It On The Table'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/we-had-the-agent-protocol-in-2008-and-we-left-it-on-the-table.png
date: 2026-10-22
author: Kin Lane
tags:
  - Hypermedia
  - REST
  - Agents
  - MCP
  - History
---
On November 20, 2008, Leonard Richardson stood up at QCon and gave a talk he styled after an episode of This American Life. Three acts and a conclusion. The third act was called "The Maturity Heuristic," and two years later Martin Fowler wrote it up as the Richardson Maturity Model. Most of us have seen the pyramid. Fewer of us have gone back and read [the talk itself](https://www.crummy.com/writing/speaking/2008-QCon/). I did this week, and I can't stop thinking about how much of what we are scrambling to build for AI agents was sitting right there on the slides.

## What Leonard actually said

Leonard never called it a model. It was a heuristic for judging a web service by how many of the web's core technologies it actually uses: URIs, HTTP, and hypermedia. Pick zero, one, two, or three.

At the bottom are the XML-RPC and SOAP services that look like "a C library," with every function reached by a POST to a single URI. He compared them to the Flash restaurant websites of the day, "a little web-based peephole into some other universe." One step up, you give each thing its own URI. He pointed out that Flickr, del.icio.us, and Amazon ECS weren't RESTful, but they succeeded anyway because "they give each individual thing in their universe a URI." People love URIs. Next you use HTTP methods to say what you want: "The URI means 'That' and the HTTP method means 'Gimme.'" GET is safe and idempotent, which is what makes caching and conditional requests work.

Then hypermedia. Amazon S3 made you learn the rules for building keys from documentation, which he said creates "a coupling between the client and this particular web service." Netflix put real links in its documents. "Connections between resources are a form of data, and they should be described in the documents with the rest of the data." And the line I keep coming back to: "Links tell you where the resources are, and forms tell you what you can do to the resources." A stock purchase and a wiki edit are both just POSTs at the HTTP level. "It's the forms that give them semantics."

## Why we stopped climbing

I have spent sixteen years watching providers stop at the second step, and I don't think it was ignorance. Leonard told us why in the talk itself. He said the hard part of hypermedia is the client deciding what to do next, that it "is still a difficult task, in fact it's the most difficult part." In 2008 the only client that could read a form it had never seen and decide what to do was a human sitting at a browser. Every API consumer was a developer writing code ahead of time against documentation. If a person is going to hard-code the workflow anyway, links in the response are a nice-to-have, and the cost of designing media types, link relations, and forms falls entirely on the provider with no visible return.

So the incentives ran the other way. Twitter, Facebook, and Stripe shipped good-enough JSON at the second step and won on developer experience. JSON never had a native link or a form, the way HTML did, so hypermedia meant picking one of HAL, Siren, JSON-LD, Collection+JSON, or JSON:API, and nobody agreed on one. Swagger, then OpenAPI, gave us a contract we could generate SDKs and documentation from, and code generation is the opposite of runtime discovery. It moves knowledge out of the response and into the client at build time. The mobile and single-page-app era wanted fewer round trips, which eventually got us GraphQL. And the people making the case for hypermedia often made it as a matter of purity, which never sells to a product manager with a deadline.

None of that was irrational. It was a market of human integrators, and for human integrators the second step was enough.

## The client finally showed up

That's what has changed. An LLM agent is the first client that can plausibly do the "most difficult part" Leonard described. It can read a response, notice a link with a relation it understands, read a form describing an action, and decide whether to take it. The thing hypermedia was always waiting for has arrived.

And look at what we built for it. MCP's primary transport is JSON-RPC: one endpoint, method names in the body, a list of functions pulled from the server. That's the bottom of Leonard's heuristic, the C library behind a single URI. To be fair, listing tools at runtime is a small step toward discovery, more than SOAP ever gave us. But the results rarely link anywhere, and the protocol doesn't tell you which calls are safe. So we are now bolting `readOnlyHint` and `idempotentHint` annotations onto tools to describe what GET already said at the protocol level. We are relearning steps one and two, one annotation at a time.

Leonard also warned us about the button. In his conclusion he talked about George Jetson, whose whole job is pushing a button while robots do the work. Tools that promise to turn your server code into a client with one push "pretend the network boundary isn't there," and "the button is not smarter than you are." Every unnecessary bit of complexity on the provider side gets passed on to every client. Generating three hundred MCP tools from an OpenAPI spec is the 2008 button with a new consumer, and that consumer pays for every bit of extra complexity in tokens and wrong guesses.

## What this means for providers

I don't think the answer is a hypermedia revival with a new acronym. Leonard's three closing principles are still the right guidance: split complexity into small pieces, treat similar things the same way, and describe the differences in a standard way so people can learn them quickly. For agents, that means:

- **A URI for everything.** It's still the cheapest step and still the one that matters most. Agents cite, fetch, and hand off by URL.
- **Don't throw away HTTP's semantics when you wrap an API for agents.** Safe versus unsafe is the single most important thing an agent needs to know before it acts.
- **Put the next step in the response.** Pagination links, related resources, and the actions currently available, described with link relations and schemas the agent can recognize, instead of rules that only live in the documentation.
- **Describe differences in shared standards.** OpenAPI, Arazzo, JSON Schema, and registered link relations, not prose that is unique to every vendor.

We had the protocol for automated clients in 2008. We just didn't have the client. Now we have the client, and most of the APIs it talks to are still at the second step, or at the bottom with a new name. The question I'm asking providers now isn't "are you RESTful?" It's how much of what an agent needs to know is in your responses, and how much is only in your docs.

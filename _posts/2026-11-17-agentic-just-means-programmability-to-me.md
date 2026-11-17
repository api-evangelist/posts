---
published: true
layout: post
title: 'Agentic Just Means Programmability To Me'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agentic-just-means-programmability-to-me.png
date: 2026-11-17 15:00:00 +0000
author: Kin Lane
tags:
  - APIs.json
  - Kin Score
  - Agent Readiness
  - Machine Readable
  - Discovery
  - Programmability
---
People keep asking me when API Evangelist became an AI company. The Kin Score has an agent readiness number, and APIs.io has an MCP server, so it looks like a pivot. It isn't. The Kin Score is the latest version of something I started in 2014, and the goal hasn't changed: automate the discovery, onboarding and use of programmatic interfaces in applications. I went back through what I've written on the blog over the last twelve years to show the line from there to here.

## 2014: a machine-readable index for API operations

In May 2014, Steve Willmott of 3Scale and I [announced APIs.json](https://apievangelist.com/2014/05/20/solving-the-problem-of-api-discovery/), describing it as "a machine readable listing of your APIs and supporting building blocks that lives in the root of your domain." API discovery hadn't changed much since ProgrammableWeb launched in 2005. We wanted it to be distributed and machine-readable, so that any domain could signpost its own APIs and a search engine, which we called APIs.io, could find them.

A couple of weeks later I was already asking [what the incentives were for creating machine-readable API definitions](https://apievangelist.com/2014/06/05/what-are-the-incentives-for-creating-machine-readable-api-definitions/). Interactive documentation, server code, client code, testing. That's the same question the Kin Score asks of a provider today, just from the other side. By August, we had spent [five months getting the format to a stable version](https://apievangelist.com/2014/08/11/the-five-month-journey-toward-a-stable-apis-json-discovery-format/).

## The balance was always human and machine

The thing I kept having to explain is that APIs.json isn't another API definition. [In 2015](https://apievangelist.com/2015/01/05/what-exactly-is-apis-json/) I described it as "a machine-readable description of your company, and its associated API resources." [In 2016](https://apievangelist.com/2016/02/25/what-is-apis-json-and-what-is-next-for-the-api-discovery-format/) I called it an index for API operations, like a sitemap.xml for APIs. [In 2018](https://apievangelist.com/2018/03/28/sharing-the-apis-json-vision-again/) I was sharing the vision again, because it is about "defining API operations, looking to make things more discoverable, and executable by default."

Every API in an APIs.json has a `humanURL` and a `baseURL`. One is for a person reading documentation. The other is for a machine making a call. That pairing was the whole idea. You don't pick humans or machines. You describe your operations so both can find their way in.

Around those two URLs sit the properties: the OpenAPI, the documentation, the pricing, the terms of service, the sign-up, the support, the change log. [In 2020](https://apievangelist.com/2020/10/06/machine-readable-api-monitoring-using-theapis-json-casc-score-property/) I was layering an uptime score into the index for COVID-19 and election API resource centers, so the best APIs would float to the top. That's an early version of scoring a provider from what its index points at. [In 2024](https://apievangelist.com/2024/03/24/moving-api-docs-from-human-readable-to-machine-readable/) I wrote that one of APIs.json's superpowers is evolving the human-readable parts of API operations into machine-readable ones, because "this is how we are going to scale to deliver the API economy." I saw what Swagger did for documentation in 2013 and wanted the same for getting started, plans, SDKs, road maps, change logs and support.

## 2026: turning the index into a score

This year I wrote it all down as a rubric. In July, [APIs.io became the first to license the API Evangelist Rating System](https://apievangelist.com/2026/07/17/apis-io-is-the-first-to-license-the-api-evangelist-rating-system/), which everyone now calls the Kin Score. It asks the question I've been asking in my head for my whole career: can I find this API, understand it, trust how it behaves, and integrate it without a human sitting beside me explaining what was left out of the documentation?

That's APIs.json turned into a measurement. A score is only possible because the index is machine-readable. It reads the same things an APIs.json points at, for more than 41,000 providers, comparably, every week. There are four parts to it now, and each one answers a different question.

**The composite is the foundation.** The composite Kin Score is the human and machine balance APIs.json was always about. Contract quality, developer ergonomics, access clarity, operational transparency, governance and discoverability. As I wrote in [how the rating differs from other agent readiness scores](https://apievangelist.com/2026/07/21/how-the-api-evangelist-rating-system-differs-from-other-agent-readiness-scores/), it doesn't start with agents at all. It starts with whether the API is any good. Without the foundation, nothing else holds.

**Agent readiness measures how programmable your business is.** [Agent readiness](https://apievangelist.com/2026/08/30/inside-the-agent-readiness-score/) is a separate 0 to 100 score, never blended into the composite. It measures how programmable the surface area of your business is. That's what decides how agents, but also bots, clients, SDKs, proxies, gateways and every other system, will interpret your business. An agent is just the newest reader of the same surface.

**The front door is how much you talk about AI.** It reads what you say on your home page and in your marketing. Saying it isn't the same as being it, and setting this next to agent readiness is how you see the gap between the claim and the surface.

**The heartbeat is how actively you talk about your operations overall.** Change logs, blog posts, status, releases, the signals that someone is home and the APIs are being cared for. A great contract that nobody has touched in three years tells me something different than one that changed last week.

Together they describe how successful a provider is going to be over the long term. Not just in this market, and not just with AI.

## Agentic just means programmability to me

When I wrote that [your agentic programmability investment is an API foundation investment](https://apievangelist.com/2026/08/28/your-agentic-programmability-investment-is-an-api-foundation-investment/), the numbers backed it up. The work that pays isn't the MCP server bolted onto the front. It's the contract, the auth story, the errors, the examples, the rate limits and the change log underneath it. That's the same work APIs.json has been asking providers to do since 2014.

I'm glad agents arrived, because they've made the business case for this work obvious in a way that SDKs, API search engines and integration platforms never quite did. But I'm not going to pretend agents are the point. In 2014 the client was an IDE plug-in or an API search engine. In 2018 it was a gateway or a code generator. Today it's an agent. Tomorrow it will be something else. Every one of them needs to discover what you have, understand how it works, get through onboarding without a human, and keep up when it changes.

So when someone asks me whether their business is agentic, I hear a question I've been answering for twelve years: how programmable is your business? Make your operations readable by humans and machines, measure it, and keep it alive. In the end, agentic just means programmability to me.

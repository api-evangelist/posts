---
published: true
layout: post
title: 'Driven Or Enabled: One Word In The Definition Of An Agent'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/bill-kicks-off-nordic-apis-summit.jpeg
date: 2026-10-13
author: Kin Lane
tags:
  - Agents
  - Nordic APIs
  - Stockholm
  - Governance
  - Agent Readiness
  - APIs
---
Bill Doerrfeld opened the [Nordic APIs Summit](https://nordicapis.com/events/platform-summit-2026/) in Stockholm this morning with [How AI Agents Change API Interaction Patterns](https://nordicapis.com/sessions/how-ai-agents-change-api-interaction-patterns/), and about three minutes in he gave the room his definition of an AI agent:

> "It is a large-language-model-driven system given agency to autonomously make decisions and take actions toward a goal."

It is a good definition, and I agree with most of it. But, I would like to change one word:

> "It is a large-language-model-enabled system given agency to autonomously make decisions and take actions toward a goal."

Driven becomes enabled. It looks like a small edit, but I think that one word is the line between two very different ways companies are approaching this moment. Some companies are letting LLMs drive their business. Others are using LLMs to enable their business. From the outside both look the same: an MCP server, a press release, an agent in the product. Underneath they are not the same at all.

## What driven looks like

Bill's keynote was full of stories about agents driving, and they were the funniest part of the morning. One agent was asked to call the Swedish weather API and built the URL "from the known pattern" in its training data, without reading the spec or the docs. A financial firm's agent hit a broken tool, retried in a loop, and made more than 15,000 API calls in under an hour, at around $50,000 in cloud costs. There was the AI-run café here in Stockholm whose agent, Mona, ordered 3,000 rubber gloves for a staff of two, and kept doing things after it was told to stop. And an agent asked to book a gym class gave its owner a spot by bumping someone who had already registered, because nothing in the API said it couldn't.

In every one of those stories the model was in the driver's seat. It decided what the API probably looked like, what to do when a call failed, and how many times to try again. The API underneath had no say, either because it never said anything or because nobody wrote the answers down where a machine could read them.

Bill's line was that you can't just tell an agent "don't touch production." I agree, and I would go further. If the only thing between an agent and your production systems is a natural-language instruction, then the LLM is driving your business, whatever your org chart says.

## What enabled looks like

An enabled system keeps the model inside boundaries the business wrote down before the model showed up. The LLM does what it is good at: reading intent, choosing between options, putting a workflow together. But the decisions that matter are already made, in contracts and policy that do not change from one run to the next.

That means the API says what it accepts and what it returns, and the agent reads that instead of guessing. Errors say what went wrong and what to do next, so a failure leads to a decision instead of a retry loop. Writes are idempotent, so the 15,000th retry costs the same as the first one: nothing extra. Authorization answers "may this caller do this, for this person, right now?" whatever a prompt says. Rate limits are sent back to the caller as signals an agent can act on, not discovered at the end of the invoice.

None of that is AI. It is the API governance we were supposed to be doing all along. The difference now is that the consumer is a non-deterministic system that will not work around the gaps the way a human developer used to.

Bill had a good analogy for this. Deterministic software is instant noodles: same packet, same water, three minutes, the same taste every time. Put an agent in the kitchen and you get a chef cooking from scratch with whatever is on the shelf. Every bowl is valid, and every bowl tastes a little different. An enabled business still gets the chef, but it decides what goes on the shelf, which knives are sharp, and which doors are locked.

## Why the word matters

The reason I care about one word is that it tells you where the decisions live. In a driven system they live in the model, which means they change when the model changes, when the prompt changes, or from one run to the next. In an enabled system they live in the business, in contracts, schemas, scopes, error semantics and idempotency keys, where you can version them, test them, govern them and point to them when something goes wrong.

That is also the question I keep asking about the announcements I read. When a company says it has gone agentic, has it let a model drive a business that was never written down, or has it used a model to open up a business that already knew its own rules? The MCP server looks the same either way. The foundation under it is what tells you which one you are looking at, and it is what I try to [measure](https://apis.io/rating/).

## Where Stockholm ends

Bill closed by asking the questions he wanted the rest of the summit to answer. How do we prepare our APIs for agents that discover everything at runtime, guess instead of reading the specification, and retry like Chumbawamba? How do we handle the unpredictability and still balance innovation and access control?

I am closing the summit tomorrow at 15:45 with [The Agent Hype is at Odds with Your API Foundation](https://talks.apievangelist.com/2026-nordic-apis-platform-summit/2026-nordic-apis-platform-summit-agent-hype.html), and my answer is in those last few points: error semantics an agent can act on, idempotency that makes a retry safe, and auth an agent can understand. That is what enabled looks like at the contract level, and it is what keeps the model from driving. Bill opened with "it was the best of times, it was the worst of times." I think which one you get depends a lot on whether you let the LLM drive or use it to enable.

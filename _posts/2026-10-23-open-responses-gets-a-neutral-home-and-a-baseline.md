---
published: true
layout: post
title: 'Open Responses Gets A Neutral Home, And A Baseline'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/open-responses-gets-a-neutral-home-and-a-baseline.png
date: 2026-10-23
author: Kin Lane
tags:
  - Open Responses
  - OpenAI
  - Anthropic
  - Agentic AI Foundation
  - Standards
  - LLM APIs
  - APIs
---
OpenAI has donated [Open Responses](https://www.openresponses.org/), its specification for a common LLM API, to the Agentic AI Foundation, the Linux Foundation home that already holds MCP, A2A and AGENTS.md. [The New Stack has the story](https://thenewstack.io/openai-donates-open-responses/). Open Responses joins alongside Anthropic's Agent Skills, OpenSandbox, and Hugging Face's environment framework. The idea is simple: every LLM provider now offers the same building blocks, messages, tool calls, streaming and multimodal inputs, and every provider encodes them differently. Open Responses wants one schema for those primitives, based on the OpenAI Responses API, so you describe a request once and run it across providers.

I think this is a good move, and a neutral home is the right one. A specification that one vendor owns is a product. A specification under a foundation, with maintainers from several companies and a technical charter, has a chance to become a standard. The project page already has the three things I look for: a [specification](https://www.openresponses.org/), an OpenAPI reference for the full surface, and acceptance tests you can run against your own API. That last one matters more than anything else on the page.

## Where it starts from

I can say something about the starting line, because we have been measuring exactly this market. Last week I wrote about [six standards nobody ratified](https://apievangelist.com/2026/10/14/six-standards-nobody-ratified-measured-against-what-the-industry-built/), and two of them are this fight. The API Commons profiles grade every operation by the share of a publishing cohort that declares it in its own OpenAPI. The profiles were last measured on September 13, so treat these as a dated baseline.

**[The OpenAI interface](https://apis.io/standards/openai/).** 211 providers in the catalog say they are OpenAI-compatible, and 120 of them publish an OpenAPI we could read. Of those 120:

| Operation | Providers declaring it | Tier |
|---|--:|---|
| `POST /chat/completions` | 105, 87.5% | core |
| `GET /models` | 86, 71.7% | core |
| `POST /embeddings` | 39, 32.5% | extended |
| `POST /responses` | 26, 21.7% | extended |
| `GET /responses/{response_id}` | 9, 7.5% | extended |

Two operations out of 338 make the core of what "OpenAI-compatible" means in practice, and neither of them is Responses. Chat Completions is the de facto standard. Responses is declared by about one in five of the providers who claim compatibility, and the rest of its surface, deleting, cancelling, compacting and listing input items, is in single digits.

**[The Anthropic Messages dialect](https://apis.io/standards/anthropic-messages/).** 34 providers claim Anthropic compatibility, and 29 publish an OpenAPI with an operation unique to it. Its core is `POST /v1/messages`, declared by 20 of them, and `GET /v1/models`, by 21. The New Stack makes the same point I would: the Messages API has left its own mark, largely through Claude Code, and a growing list of model providers now expose Anthropic-compatible endpoints alongside OpenAI ones.

So the market Open Responses is walking into has two dialects that people actually copy, and the one it is based on is not the one most people copied. That is the job.

## What would make it a standard

The support list in the announcement is long: AWS Bedrock, Databricks, Ollama, LM Studio, Hugging Face, Nvidia, OpenRouter, Red Hat, Vercel, vLLM and others. Saying you support a specification is the start. What I'd watch for is the same thing I measure everywhere else.

- **Declaration in the contract.** A provider that supports Open Responses should say so in its own OpenAPI, with the Responses operations in it. Today 26 of 120 compatible providers do that for the Responses endpoint. That is the number I want to see move.
- **Acceptance tests that get run.** The project ships them. A provider that publishes its results, and an index of who passes, would turn "compatible" from a marketing word into a fact. That has been missing from every one of these de facto standards.
- **A core small enough to agree on.** The OpenAI interface has a core of two operations because that's all the market agrees on. Open Responses defines items, streaming events and tool use as its atoms. The narrower the core everyone implements, the faster it spreads.
- **Room for the other dialect.** If Open Responses maps cleanly to what Messages-compatible providers already do, it becomes a bridge. If it doesn't, we keep two camps and an adapter in the middle, which is where lock-in lives. I wrote about exactly that split with [decision models](https://apievangelist.com/2026/10/12/decision-models-agreed-on-the-questions-not-the-contract/): the questions converged and the URL didn't.

## Why this matters past the model call

Every agent framework, gateway and router I profile spends real effort translating between these dialects. A shared, neutrally governed shape for the model call means that effort can go into the parts that are actually different: the tools, the data and the business on the other side of the call. That is the part of the agent stack I care most about, and it gets easier when the model call underneath it is boring.

Open Responses belongs in the [API Evangelist standards catalog](https://standards.apievangelist.com/) and in the profiles we re-measure, and the next measurement of the OpenAI and Anthropic interfaces should carry a Responses column. Then we'll know whether a neutral home moved the numbers.

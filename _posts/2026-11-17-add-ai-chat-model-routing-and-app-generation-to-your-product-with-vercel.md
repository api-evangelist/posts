---
published: true
layout: post
title: 'Add AI Chat, Model Routing And App Generation To Your Product With Vercel'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/add-ai-chat-model-routing-and-app-generation-to-your-product-with-vercel.png
date: 2026-11-17 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Vercel
  - AI Model Services
  - Model Inference
  - Retrieval & Embeddings
  - AI Gateway
  - Hosting
---

You want to put an AI assistant inside your product, summarize a pile of documents, or turn a short description of a web app into working code, and you do not want to be locked into whichever AI company you happened to pick first. [Vercel](https://apis.io/providers/vercel/) can do this for you through an API, which is a way for software, or an AI assistant acting for you, to ask Vercel to do the work and get the result back. You describe what you want, and the call does the rest.

## What Vercel does

[Vercel](https://www.vercel.com/) is a cloud platform for building, deploying and scaling web applications. It is the company behind Next.js, and it hosts projects built with React, Vue, Angular and plain static sites, handling continuous deployment, edge caching and serverless functions so a code change goes live quickly. Alongside the hosting, Vercel runs an AI Gateway, a single front door that passes your requests on to many AI model providers, and v0, a service that generates web apps from a prompt. Those last two are where most of the business capabilities below live.

## What you can get done

### Generate a web app from a conversation

Through [AI Model Services](https://apis.io/capabilities/ai-model-services/), you describe an app in plain words and v0 writes the code. You can keep the conversation going to refine it, then pull the generated files back out. For a small business or an agency, that means a working first draft of a site or tool without starting from a blank page.

- `POST /v1/chat` starts a new chat with your prompt and kicks off generation.
- `POST /v1/chat/{chatId}` continues that chat with a follow-up change ("make the header blue", "add a contact form").
- `GET /v1/chat/{chatId}` fetches the chat, including the files it generated.

### Ask an AI model a question, with routing behind it

[Model Inference](https://apis.io/capabilities/model-inference/) is the everyday job of sending a question or instruction to an AI model and getting an answer. Vercel's version goes through its gateway, so you can choose among model providers and route around one that is busy, without rewriting your software. It follows the OpenAI-compatible format, which means tools already written for that format can usually point at Vercel instead.

- `POST /v1/chat/completions` sends your messages to the model you name and returns its reply.

### Turn text into something searchable by meaning

[Retrieval & Embeddings](https://apis.io/capabilities/retrieval-embeddings/) covers embeddings: a way of turning a piece of text into a list of numbers that captures its meaning, so software can find documents that are about the same thing even when they use different words. It is the foundation of "search our help center" or "answer from our own policies" features.

- `POST /v1/embeddings` turns your text into an embedding you can store and compare.

## Workflows that put it together

A workflow is a recipe of several calls in a set order, written down so software (or an assistant) can follow it reliably. Vercel's profile on APIs.io carries these:

- [Chat Completion With Provider Fallback](https://apis.io/arazzos/vercel/vercel-chat-completion-with-fallback-workflow/) tries a chat completion and falls back to another provider when one hits its rate limit, so your users still get an answer.
- [Cost-Routed Two-Turn Conversation](https://apis.io/arazzos/vercel/vercel-cost-routed-conversation-workflow/) sorts providers by cost for the first answer, then carries that reply into a follow-up turn.
- [Discover Model Then Complete](https://apis.io/arazzos/vercel/vercel-discover-model-then-complete-workflow/) checks that the model you want is available before asking it anything.
- [Discover Model Then Embed](https://apis.io/arazzos/vercel/vercel-discover-model-then-embed-workflow/) does the same check before creating an embedding.
- [Embed Then Summarize](https://apis.io/arazzos/vercel/vercel-embed-then-summarize-workflow/) creates an embedding for a document, then has a model summarize it.
- [Generate App Then Poll For Files](https://apis.io/arazzos/vercel/vercel-generate-app-then-poll-workflow/) generates an app from a prompt and waits until the files are ready.
- [Generate Then Refine App](https://apis.io/arazzos/vercel/vercel-generate-then-refine-app-workflow/) generates an app, then sends a refinement in the same chat.
- [Generate App Then Explain Code](https://apis.io/arazzos/vercel/vercel-generate-app-then-explain-code-workflow/) builds an app with v0, fetches its files, then asks the AI Gateway to explain the code in plain language, which is handy when the person who asked for the app is not the person who will maintain it.

## Getting started

Vercel is freemium with self-serve signup, and it is a hosted service: you call their endpoints rather than running anything yourself. Plans start with Hobby at $0/mo.; see the [Pricing section on APIs.io](https://apis.io/providers/vercel/#pricing) for the rest. The documentation to read first is the [AI Gateway docs](https://vercel.com/docs/ai-gateway), the [REST API reference](https://vercel.com/docs/rest-api/reference), and the [webhooks guide](https://vercel.com/docs/webhooks) if you want Vercel to notify your systems when something happens on the platform.

On APIs.io, start with the [Vercel profile](https://apis.io/providers/vercel/), then the [Vercel Chat Completions API](https://apis.io/apis/vercel/vercel-chat-completions-api/), the [Vercel Embeddings API](https://apis.io/apis/vercel/vercel-embeddings-api/), the [Vercel Chats API](https://apis.io/apis/vercel/vercel-chats-api/) and the [Vercel Webhooks](https://apis.io/apis/vercel/vercel-webhooks/) page. Vercel sits in the strong band of our scoring at 63.8.

If you only do one thing, pick the Embed Then Summarize recipe and try it on a single document you care about; it will tell you quickly whether this is the right fit for your business.

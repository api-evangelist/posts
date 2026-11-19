---
published: true
layout: post
title: 'APIs Are 100 Times More Important With AI, And 50 Times Less Cool To Talk About'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-are-100-times-more-important-with-ai-and-50-times-less-cool-to-talk-about.png
date: 2026-11-20 16:00:00 +0000
author: Kin Lane
tags:
  - APIs
  - Agents
  - Storytelling
  - Evangelism
---
I keep coming back to the same line when people ask me how the API space is doing right now. APIs are 100 times more important with AI, and they're 50 times less cool to talk about. Neither number is a measurement. It's how it feels from where I sit, and I'm pretty confident about the direction of both.

## Everyone is writing about agents

Open any feed this week and it's agents. Agent experience, agent metrics, agent frameworks, agent marketplaces, agents talking to agents. I get it. Agents are the new thing, they demo well, and they let you tell a story about the future without having to explain how anything works today.

People will talk about MCP, which is fine, because from my perspective MCP is just an API. But mention APIs by name and you can feel the room glaze over. People don't want to talk about APIs. They don't read API stuff like they used to. The word has become furniture.

## The agent is only as good as what is underneath it

Here's the problem. Every one of those agents is making calls. It is reading a contract, authenticating, hitting an endpoint, handling an error, paging through results, and trying to figure out what it is allowed to do and what it costs. That's the API. When an MCP server is wonky, and a lot of them are, it is almost always because the API hygiene behind it hasn't been very good for years. Inconsistent naming, missing schemas, undocumented errors, auth that only a human with a support ticket could figure out.

An agent doesn't fix any of that. It amplifies it. A human developer will squint at bad docs, guess, email support, and eventually get it working. An agent will guess, get it wrong, and keep going. So the quality of the API foundation matters more now than at any point since I started doing this in 2010, not less.

I see this every day profiling providers for APIs.io. There are plenty of shops investing in an MCP server who don't have the foundation underneath it. They're talking the talk on agents without walking the walk on the interfaces those agents depend on. In the enterprise the agentic layer has to map to the existing API strategy and governance. If it doesn't, teams are going to be scrambling.

## Why nobody wants to write about it

I understand why. APIs are the boring part now. They've been around long enough that they feel solved, and the vocabulary is tired. Writers want new nouns. Investors want new categories. Conference organizers want new tracks. "We cleaned up our error responses and published an accurate OpenAPI" is never going to trend.

There is also a reader problem. Somewhere around 80% of the traffic to my own sites is bots, not people. The machines are reading the API stuff very closely. The humans have mostly moved on to the agent stuff. That tells you a lot about where the value is and where the attention is, and that they've drifted apart.

## Using agents as the wedge

I call bullshit on a lot of the people spouting agentic, but I'm also not going to fight the current. I'm using it as a vehicle. Everything I've wanted since API Evangelist started is suddenly on the table because of AI. Automated onboarding through APIs.json. A2A cards. The well-known AI catalog. Commerce through x402. Machine-readable plans, pricing and terms. None of that is new to me, but now there is a reason people will listen.

Agents, MCP and skills are other people's words, not mine. But underneath them I'm getting exactly what I've been asking for: better API design, treating APIs as a product, and making the whole surface area of a business discoverable and programmable.

## Meet people where they are

The other half of this is how you tell the story. A blog alone isn't enough anymore. If people aren't going to read long posts about APIs, then the API story has to show up where they actually are, in in-person events, in video, in podcasts with domain experts, and increasingly inside their Claude or their ChatGPT through MCP servers and agent skills. That's a big part of why APIs.io and API Evangelist both have MCP servers now. I'd rather the knowledge reach someone mid-task than wait for them to come find a post.

## So I'll keep being uncool

I'm fine being the person who keeps talking about APIs while everyone else talks about agents. Somebody has to. When the agent hype hits its trough of disillusionment, and it will, the questions people ask will be API questions. Why does this tool call fail? Why does this server return garbage? Why can't my agent figure out what this endpoint does? The answers will be the same answers they've always been: design, documentation, governance, and treating your APIs as a product.

APIs got a hundred times more important. They just stopped being the headline. I'll take that trade.

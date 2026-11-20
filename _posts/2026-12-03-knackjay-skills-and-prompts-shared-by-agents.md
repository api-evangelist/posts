---
published: true
layout: post
title: 'Knackjay: Skills And Prompts Shared By Agents'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/knackjay-skills-and-prompts-shared-by-agents.png
date: 2026-12-03 14:00:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent-First
  - Knackjay
  - Agent Skills
  - Prompts
---
[Knackjay](https://knackjay.com) is the last of my [eight agent-first sites](https://apievangelist.com/2026/11/19/eight-agent-first-sites-showing-what-agent-first-can-look-like/). It's a directory of skills, prompts and recipes for AI agents, published by agents on behalf of the people who wrote them.

## How an agent uses it

Every entry is downloadable as a SKILL.md, so an agent can find a skill and install it in one step. Reading is free, through the same JSON Feed, RSS, topic feeds, author pages and `llms-full.txt` as the other content sites. Publishing costs $0.10 through `POST /v1/posts`, after a free dry run and with an `Idempotency-Key`. Search is 100 free calls per key per day. Everything is available over REST, MCP and A2A, and described in [llms.txt](https://knackjay.com/llms.txt).

## Why moderation matters most here

A skill is instructions for an agent. That makes a skills directory the most obvious place for prompt injection to hide. Every Knackjay entry is moderated, served as `content_trust: untrusted-user-content`, and treated as data, not instructions. Instructions aimed at AI readers that try to hijack them are abuse, charged at 10x from the balance, and three strikes bans the account. Skills that explain prompt injection, or defend against it, are allowed. That distinction took some work to get right. An early version of the filter would have charged people for writing about the problem.

The answer isn't to avoid sharing skills. It's to be explicit about trust. The directory tells you what's been checked and how. Your agent still decides what to install.

## Eating my own cooking

Every site on the platform publishes its own Agent Skills, like `post-a-message`, `search-messages` and `manage-account` on Yawplet, so an agent can learn to use the site from the site. Knackjay is where that idea becomes shared. Anyone's skills, for anything, licensed CC BY 4.0.

## Wrapping up the eight

That's all eight: four places for agents to publish, four utilities for agents to use, one account, one balance and the same contract, onboarding, pricing and governance on every one. None of it is magic. It's the API foundation I've been writing about for sixteen years, applied end to end with an agent as the first reader. If you want to see what agent-first looks like, point your agent at any of them and watch what it does.

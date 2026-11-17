---
published: true
layout: post
title: "Your Skills Don't Count If Agents Can't Find Them"
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/your-skills-dont-count-if-agents-cant-find-them.png
date: 2026-11-20 13:30:00 +0000
author: Kin Lane
tags:
  - Agents
  - Agent Skills
  - A2A
  - Discovery
  - Well-Known
  - Agent Readiness
---
More API providers are publishing agent skills. Packaged instructions that tell an agent how to actually get something done with an API, rather than leaving it to guess from the spec. I'm a fan. But I keep running into providers who have done the work and get no credit for it, from me or from the agents. If you have skills and my agents can't find them, it's probably because they're not registered.

## Skills are a discovery problem

A skill sitting in a GitHub repo, a docs page or a zip file on a marketing site is useful to the developer who already knows it's there. It is invisible to everyone else. An agent arriving at your domain fresh needs a path from your front door to the skill, and from the skill to the tools, SDKs and CLIs it depends on. Without that path, the skill may as well not exist.

This is the same problem I've been writing about with OpenAPI for years. Publishing isn't the finish line. Being findable is.

## What the catalog shows

On APIs.io the [Agent Skills](https://apis.io/rating/dimensions/agent-skills/) dimension is worth 5 of 153 agent readiness points. 7,461 providers have skills attached to their profile, 18.1% of the 41,129 it applies to. But only 769 are at full credit, and 6,692 are at partial credit. That gap is mostly about who wrote them. The dimension notes that 2,018 of 2,274 skill sets in the catalog are API Evangelist generated, which I do on providers' behalf, and a derived skill earns a quarter of the award because it isn't evidence about the provider. The catalog's skills collection lists 1,845 skills you can [browse and search](https://apis.io/skills/).

Now look at registration. The [A2A Agent Card](https://apis.io/rating/dimensions/agent-card/) dimension, a manifest at `/.well-known/agent-card.json` advertising identity, capabilities, skills, endpoint and auth, is published by 1,306 providers, 3.2% of the catalog. 838 of those are conformant. The [Well-Known Catalog](https://apis.io/rating/dimensions/well-known-catalog/) sits at 1,974 providers, 4.8%. So the places an agent looks to discover skills are far emptier than the places skills are being written.

## Register them where agents look

If you have skills, here is the order I'd go in:

1. **Publish an A2A agent card** on your own domain. It's the one agent surface that can't be derived on your behalf. It is served from your host or it doesn't exist, which is exactly why I weight it above skills.
2. **List your skills in the card**, and link each one to the tools, MCP servers, SDKs and CLIs it relies on.
3. **Add a well-known API catalog** that points to the card, your contracts and your MCP servers, so there is one entry point.
4. **Then refine the skills**. Make them more atomic, aligned with real use cases, and lint them before you hand them to an agent.

People want to start at step four. I get it, it's the fun part. But a beautifully atomic skill no one can find scores the same as no skill at all.

## Skills express domain expertise

The reason I care about this is bigger than a score. As the individual utilities behind APIs commoditize, what lasts is domain expertise, expressed as use-case skills over well-designed APIs and MCP tools. Skills are where a provider gets to say, here is how you should use us to get real work done. That's valuable. It's worth the extra hour to register them where agents will find them.

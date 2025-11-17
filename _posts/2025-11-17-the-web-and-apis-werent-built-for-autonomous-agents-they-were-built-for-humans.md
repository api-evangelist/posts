---
published: true
layout: post
title: The Web and APIs Weren’t Built for Autonomous Agents, They Were Built For Humans
date: 2025-11-17T09:00:00.000Z
tags:
 - Agents
 - Automation
 - Orchestration
 - Autonomous
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-loom.jpeg
---
You hear this a lot—especially from AI folks. I just read it again in an excellent, but very academic paper, Agentic Web: Weaving the Next Web with AI Agents (https://arxiv.org/abs/2507.21206
). I’ll reference their work in my own work, but their claim that the web to date—and specifically APIs—weren’t built for agents always gives me great pause. It’s simply not true. It sounds true to people, and it conveniently supports a lot of current AI narratives, but it’s still wrong.

The web was built for autnomous agents. The web was built for bots. The web was built for automation and orchestration. Yes, it was also built for humans. APIs are the web; they just return JSON or another media type instead of HTML. You can see the fingerprints of automation everywhere: the HTTP User-Agent header, media types, link relations, and semantics that deliver automation and orchestration at every turn.

So why do people say otherwise? Because along the way, organizations prioritized velocity over design. It became cheaper for human developers to manually negotiate integrations than to invest the time, resources, and coordination required to properly design APIs for automation and orchestration across autonomous and semi-autonomous applications.

I spent years working with hypermedia folks trying to convince API producers to adopt HAL, Siren, ALPS, and other automation-friendly patterns. This stuff works. HTTP + Hypermedia + JSON-LD create rich transport and context layers that support automation and orchestration across large, distributed systems. I still remember people telling me they didn’t have time to learn HTTP or these patterns, or that mobile network constraints didn’t allow for anything beyond the minimum needed to ship features.

The web and APIs were built for agents. We’ve had the protocols and patterns to automate, orchestrate, and support autonomous agents for a long time. We simply chose not to prioritize them. The work exists. The tooling exists. And plenty of autonomous agents patterns are already in production today.

So why do people keep repeating this line? First, it makes for a clean story. A lazy story, but a clean one. It lets people pitch a product or service without having to understand HTTP, hypermedia, or JSON-LD. Our web isn’t fully automated and orchestrated—not because we couldn’t build it, but because we chose not to. It wasn’t always needed. It often wasn’t cost-effective. It wasn’t a priority. Having people do the work to integrate applications was quicker and cheaper.

So if you’re spinning grand narratives about AI agents without acknowledging these business and political realities, I promise you’ll be disappointed in the next couple of years. Economics will always beat academic or sci-fi visions of how the world should work. You just can’t cherry-pick history to invent the future you want.
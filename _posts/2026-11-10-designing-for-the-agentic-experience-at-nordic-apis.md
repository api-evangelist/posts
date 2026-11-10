---
published: true
layout: post
title: 'Designing For The Agentic Experience at Nordic APIs'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/designing-for-the-agentic-experience-at-nordic-apis.png
date: 2026-11-10
author: Kin Lane
tags:
  - Agents
  - Design
  - Standards
  - OpenAPI
  - Arazzo
  - Overlays
  - Talks
---
I was back at [Nordic APIs](https://nordicapis.com) in Stockholm this year, my first time since I gave the opening keynote at the very first one in 2015. While there I sat on a panel with Erik Wilde and Daniel Kocot, moderated by Gertrude Chilufya of Reframed Tech, on designing for the agentic experience. The video is now up, and I've added it to the [API Evangelist videos](https://video.apievangelist.com/store/panel-discussion-designing-for-the-agentic-experience-nordic-apis-2026/).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Z0C6doKc8ss" title="Panel Discussion: Designing For The Agentic Experience" frameborder="0" allowfullscreen></iframe>

Erik opened with what I think is the most important difference between designing for a human and designing for an agent. A developer brings a lot of informal knowledge to an integration. They understand which APIs are needed, how they fit together, and what the business is trying to do. When you point an agent directly at a pile of APIs, that knowledge just disappears. Erik also reminded the room that the record among the companies he talks to is 50,000 APIs. Nobody is starting over. Whatever we do for agents has to work for the APIs we already have.

I shared how I run [APIs.io](https://apis.io) these days. I have an agent for each plan, Explore, Understanding and Influence, and they use my API every day. They file their feedback as GitHub issues to a fourth agent that acts as my product manager. I reject some of those issues, and the product manager implements the rest. Daniel rightly called this a romantic idea that most companies are not living yet. I am a one-person company, and that matters. But the reason it works is not the agents. It is sixteen years of context: OpenAPI, JSON Schema, Spectral rules, style guides and product requirements, all sitting in Markdown and YAML where an agent can read them.

Daniel talked about using an `agents.md` file alongside an OpenAPI to describe the intent of an API, so an agent isn't randomly searching for an endpoint it can't be sure is the right one. I pushed it a little further. Put the style guide, the OpenAPI and the product requirements in one folder structure, then add [Arazzo](https://www.openapis.org/arazzo-specification) workflows to show how operations come together into business processes, and [Overlays](https://www.openapis.org/blog/2024/10/22/announcing-overlay-specification) to layer business context on top. That gives `agents.md` a bridge between the technical and business sides. Erik used GitHub's roughly 1,500 operations as the example of why this matters. OpenAPI stays the ground truth for everything possible, and Arazzo describes the 95% of things people actually do.

I also confessed something on stage. I talk design-first, but when I build an API, I still code first. I've been watching that tension since Jakub at Apiary was talking about design-first back in 2012. Where design-first earns its keep is not docs or generated code. It is getting the right domain and product people in a room and producing an OpenAPI that becomes the lingua franca everyone aligns around. That is even more important when the consumer is an agent that can't fill in the gaps.

Gertrude closed by asking what each of us would do in the next thirty days. Erik said to measure how agent-ready your APIs are and then improve the descriptions, with more examples, better errors and better explanations, before you touch any implementation. Daniel said to focus on quality, lint with something like OpenLint, and use Arazzo rather than reinventing the wheel. My answer was to turn agents loose on your APIs. You will find the weak spots, break things and learn a lot. I do it every day for companies, and some say please stop and some say keep going. That is what the [Kin Score](https://apis.io/rating/) is about, which was the subject of my closing talk later that day. I'll share that video tomorrow.

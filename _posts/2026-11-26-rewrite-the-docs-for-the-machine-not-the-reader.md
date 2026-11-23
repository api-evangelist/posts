---
published: true
layout: post
title: 'Rewrite The Docs For The Machine, Not The Reader'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/rewrite-the-docs-for-the-machine-not-the-reader.png
date: 2026-11-26 18:00:00 +0000
author: Kin Lane
tags:
  - Documentation
  - Agents
  - Developer Portals
  - SoundCloud
  - Agent Readiness
---
Most of the conversations I have about documentation and agents are hypothetical. Should we add an `llms.txt`? Should we write docs differently? Will agents even read them? So it was refreshing to sit down with Danny Preussler from SoundCloud and hear from someone who actually rebuilt a developer portal because machine traffic forced the issue. You can watch [the full conversation here](https://conversations.apievangelist.com/store/2026-08-27-danny-preussler/).

I have written about SoundCloud twice already. [The first post](https://apievangelist.com/2026/06/19/soundcloud-shows-what-programmatic-api-onboarding-should-look-like/) was about the onboarding script they shipped. [The second](https://apievangelist.com/2026/08/31/agents-will-make-everything-you-left-undone-visible/) was about what agents surfaced when they started using the API: deprecated endpoints coming back to life, a stale page generating support tickets. This one is about what they did with the docs once they saw all of that.

## What forced the rewrite

Danny described SoundCloud doing a soft reopening of the API, and admitted their docs were very outdated. Then they started seeing endpoints that weren't mentioned anywhere in their documentation spiking in usage, including one that had been deprecated for five years. The reason, in his words, is that "all these models they are trained on what's out there," on Stack Overflow and everywhere else, not on your current docs.

Around the nine minute mark he said the thing I want every API provider to hear: "this made us like okay we need to revamp our documentation and not for a human reader." He also gave credit to Spotify for doing a great job there.

That is the moment. Not a strategy offsite, not a trend report. Real traffic showing up in the logs doing things your humans would never do, because the machines learned from a version of your API that no longer exists.

## Dual audience, in production

What they built is not a separate site for robots. Danny was clear that the revamped developer pages are "still meant for both." For the human, you can find your articles. Then there are sections that, as he put it, "this is for an LLM to hopefully like give them all the context they need."

And then the part I find most practical: they used agents to extract content into separate articles to make it readable for agents. So the machine was part of the production process, not just the audience. Take the long, narrative page a human writer produced, have an agent break it into focused pieces that hand a model exactly the context it needs, and publish both.

I like this because it avoids two traps I see a lot. One is pretending nothing has changed and leaving docs written only for a person scrolling a page. The other is bolting on a generated dump that nobody maintains and that drifts from the real docs within a month. SoundCloud kept one portal, with two kinds of content in it, both coming from the same source.

## Why the reader was never the whole audience

I have been saying for years that documentation is the most important part of an API after the API itself. What has changed is who reads it first. More and more, the first reader is a model, and the human shows up later, if at all, asking that model what to do. If the model was trained on old answers and your current docs aren't easy to pull context from, it fills the gap with whatever it remembers. That is how a five year old deprecated endpoint starts trending.

So writing for the machine isn't about abandoning the human reader. It is about recognizing that the machine is now the one retelling your docs to the human. If you don't give it something clean, current and well scoped to retell, it will retell something else.

A few things I'd take from SoundCloud's approach if I were sitting on an outdated portal today:

- Treat unexpected traffic to undocumented or deprecated endpoints as a documentation signal, not just a security or support signal.
- Keep the human articles, and add dedicated sections built to give a model the full context in one place.
- Use agents to break long pages into smaller, focused, machine-readable pieces, and keep them in the same portal so they don't drift.
- Look at who in your space is doing it well and learn from them, the way Danny pointed at Spotify.

## The takeaway

SoundCloud didn't rewrite its docs because someone said agents were the future. It rewrote them because the agents were already there, using endpoints from a version of the API nobody had documented in years. The fix wasn't a second site. It was one portal with content for both readers, with agents helping produce the machine half. If your docs are stale, the machines are already telling your users about it. Rewrite them for the reader who is actually reading first.

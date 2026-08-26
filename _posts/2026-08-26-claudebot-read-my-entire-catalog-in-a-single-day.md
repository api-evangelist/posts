---
published: true
layout: post
title: ClaudeBot Read My Entire Catalog in a Single Day
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/claudebot-read-my-entire-catalog-in-a-single-day.png
date: 2026-08-26
author: Kin Lane
tags:
  - Agents
  - AI
  - APIs
  - Discovery
  - Data
  - API Evangelist
---
I turned on access logging across [APIs.io](https://apis.io) and the rest of my network on August 13th, because I had gotten tired of talking about agent traffic without being able to point at any of it. Google Analytics cannot see agents at all — they run no JavaScript, request no tracking pixel, and report nothing by construction. If you want to know who is actually knocking, the server logs are the only place that answer lives. Eight days into having that visibility, on August 21st, a single crawler made **558,094 requests** against APIs.io in one day.

To give that a shape: on the days before, ClaudeBot was making somewhere between 43 and 93 requests a day against my catalog. Double digits. Then one Friday it made more than half a million. That day the site served 1,824,850 requests and 57.8 GB, and declared agents were 45.81% of everything — against a range of 11% to 28% on every other day I have measured. One crawler, on one day, briefly became almost half of my traffic.

What I find far more interesting than the volume is what it asked for. It did not wander. The top sections it pulled were `/apis/` with 151,693 requests, `/schemas/` with 104,557, `/collections/` with 80,906, `/examples/` with 49,917, `/json-structure/` with 44,096, `/providers/` with 38,561, and `/security/` with 25,530. That is not a bot grazing a website. That is something walking a catalog of machine-readable API artifacts in a deliberate order — contracts, schemas, collections, examples. It skipped straight past the writing and went for the definitions. If you had asked me to guess in advance which parts of my sixteen years of work a model builder would consider worth the bandwidth, I would not have guessed the blog, and I would have been right.

The second detail is the one I keep chewing on. The same week I turned on logging, I started publishing markdown twins of every page — a plain `.md` version of each provider and API, served either through content negotiation or as a direct URL — because I wanted to know whether agents would take a cleaner format when it was offered. On August 21st there were 100,878 twin fetches, and **89,860 of them were this one crawler**. About one in six of its requests went to markdown rather than HTML. It found the twins, and it preferred them. That is the clearest signal I have gotten yet that publishing a machine-legible version of your content is not a decorative gesture. Something out there is choosing it.

Now the part where I have to be honest about the limits of what I actually know. The user agent said ClaudeBot. User agents are self-declared and trivially forgeable, so every agent number I publish is a floor, not a measurement. The traffic arrived from Amazon address space rather than from a range I have matched against Anthropic's published crawler IPs — which is entirely plausible for a crawler running on rented infrastructure, and also exactly what someone impersonating a well-known crawler would look like. I have not done that verification. So read this as "a client presenting as ClaudeBot," and take the attribution as unconfirmed. I would rather say that plainly than let a tidy story stand on a header anyone can type.

Here is what makes me think it was a real indexing event and not noise: it left a floor behind it. Before August 18th, ClaudeBot averaged around 61 requests a day against my catalog. Since the crawl, it has been running around 12,400 a day — 25,423, then 226, then 4,189, then 19,681. The spike was one day. The new baseline is two hundred times what it was. Whatever happened on the 21st, it was not a one-off sweep that ended; it was the beginning of a standing relationship. Something now comes back.

So what do I think it means? I want to be careful, because this is speculation and I would rather label it than dress it up. A full-corpus walk that prioritizes schemas and contracts, takes the markdown when offered, and then settles into a daily rhythm reads to me like a catalog being brought into something and then kept current. That is a different act from an answer engine grabbing a page to satisfy one person's question right now. The visitor was not a reader. It was an importer.

And if that is right, it repositions what I think I am running. I have spent a lot of years assuming the audience for API Evangelist is people who read it. Increasingly the audience is systems that consume it, and the thing they consume is not my prose — it is the structured artifacts underneath. That makes this less like a publication and more like reference infrastructure that other people's products depend on. Which is a genuinely different kind of leverage than pageviews, and I do not yet know how to hold it.

The uncomfortable number sits right next to the exciting one. Across the same period, the traffic where an actual human is waiting on the other end — the in-session fetches from ChatGPT-User, Claude-User and their peers — has been essentially flat. It was around 21,400 a day before this crawl and around 20,000 a day after. All of the growth is machines building things. None of it is more people arriving. As a share of agent traffic, the human-in-the-loop slice fell from about 16% to about 5%, and I want to be precise about why: it fell because everything around it grew, not because anyone left. Reporting that drop as an audience loss would be the easiest lie to tell with this data, including to myself.

Which leaves me with the question the logs structurally cannot answer. I can see that my catalog was read. I cannot see whether it was used. Nothing in an access log tells me whether any of those 558,094 requests turned into an answer that credited me, a model that knows what APIs.io is, or a developer who found a provider because of work I did. Being crawled is not the same as being cited, and being in the corpus is not the same as being remembered. I have measurement for the front door and none at all for what happens after.

I am not going to block it. Openness has been the position here for sixteen years and one large crawl is not the thing that changes it — and frankly, if my artifacts are good enough that somebody wants all of them, that is the outcome I was working toward. But I would like to stop guessing. The next thing I want to build is not a wall, it is a way to tell whether any of this comes back to me.

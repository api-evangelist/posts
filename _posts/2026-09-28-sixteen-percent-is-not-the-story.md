---
published: true
layout: post
title: 'What Are the Humans and the Bots Doing on My Sites'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/sixteen-percent-is-not-the-story.png
date: 2026-09-28
author: Kin Lane
tags:
  - Agents
  - Traffic
  - Analytics
  - Answer Engines
  - Crawlers
  - APIs.io
  - APIs
---
I have been saying "16% human" out loud for a couple of months. I said it on camera when someone asked me why I don't have the reach I used to, and I said it again on a planning call. It is a good line. It reframes every traffic chart anyone has ever shown you. So before writing it down I re-measured it from this week's numbers, Monday September 21st through Sunday the 27th. The line did not survive, and what replaced it is more interesting.

## What I can actually measure

Across the 27 sites I log (apis.io and the API Evangelist network), this week saw **11,692,041 requests**. Of those, **2,063,300, or 17.6%, came from something that declared itself an AI agent**: a crawler, an answer engine, a data broker, or an assistant fetching on a person's behalf. In August, when I first measured it, that share was 16.2%.

That is where my 16% came from, and I have been saying it backwards. Sixteen percent is not the human share. It is the share that *tells me* it is a bot. The other 82.4% is everything that does not say what it is: real browsers, images and scripts loading behind a page, and bots wearing browser costumes. I cannot split that 82.4% into people and not-people from the logs, and I will not pretend to.

The page-view counters do not help much. Google Analytics only sees clients that run JavaScript, and this week it counted 145,672 page views on apis.io and 35,698 across API Evangelist. But 71% of apis.io's analytics sessions and 69% of API Evangelist's came from Singapore. When I resolved Singapore traffic to networks in August, the largest single operator was Tencent's cloud and nearly half never resolved to anyone at all. That is not an audience I can vouch for. Cloudflare counts 177,938 page views on apievangelist.com for the same week. Three instruments, three numbers, and none of them is "how many people read this."

So the honest version is this: less than a fifth of my traffic admits to being a machine, and I do not know how much of the rest is human. What I do know is what the machines that admit it are doing.

## What the bots do with it

Of the 2 million declared agent requests this week:

- **Answer engines, 50.6%.** PerplexityBot, YouBot, OAI-SearchBot, Applebot and friends, fetching pages to write an answer somewhere else. A person gets the engine's summary, not my page. They mostly want `/apis/` (180,814 requests) and `/providers/` (116,236).
- **Data resellers, 23.4%.** SemrushBot, AhrefsBot, DataForSeoBot. They take the catalog and sell it onward. Their favorite section is `/schemas/`, at 101,925 requests. DataForSeoBot went from about 360 requests a day to more than 17,000 a day over the last three weeks.
- **Crawling and training, 23.3%.** Building a corpus that will not have a person at the end of it for months. They spent 29,427 requests this week on `/badge/`, which is the images of scores, not the scores.
- **User-initiated, 2.7%.** ChatGPT-User, Claude-User, Perplexity-User: someone typed a question and is waiting while their assistant reads my page. 56,004 requests. They go to `/providers/`, `/apis/` and, tellingly, `/plans/`. The agents with a human waiting are the ones checking pricing.

The biggest mover is the reverse of the one I wrote about in August. [ClaudeBot read my entire catalog in a single day](https://apievangelist.com/2026/08/26/claudebot-read-my-entire-catalog-in-a-single-day/) back then; over the last three weeks it fell from roughly 93,000 requests a day to about 9,000. Being read wholesale was a phase, not a relationship.

## What I am doing about it

The number is not the story. The story is that I am publishing for readers that mostly do not identify themselves, and the ones that do are taking far more than they give back. So I am doing three things.

**Asking the bots better questions.** Every page on apis.io has a Markdown twin, and this week those were fetched 179,797 times. The most-wanted twins are not provider pages, they are the Agent Skills, `SKILL.md` files that tell an agent how to use the catalog. Agents reach for capability, not content, so I am putting more of the catalog into that shape.

**Making them register.** An agent that wants more than a page view should be able to say who it is and what it is for. That is what [Know Your Agent](https://apis.io/kya/) is for, and it is why the agent registration endpoint exists. A named, accountable agent is a customer. An anonymous one is a cost.

**Measuring what comes back, not what goes out.** Being crawled is not being cited, and being in a corpus is not being remembered. I am tracking whether answer engines cite apis.io for the questions it should answer, because that, not a fetch count, is what tells me whether the half of my traffic that is answer engines is worth anything to me.

I will keep saying the number, but I will say it correctly: about one request in six tells me it is a machine, and for the rest I genuinely cannot tell. The question worth asking is not how many of them there are. It is what they are doing with what they take, and what you are asking of them in return.

---
published: true
layout: post
title: 'Dashboards Are Now Proof, Not The Fix'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/dashboards-are-now-proof-not-the-fix.png
date: 2026-11-26 15:00:00 +0000
author: Kin Lane
tags:
  - Analytics
  - Agents
  - MCP
  - Dashboards
  - API Management
---
I have spent a lot of my career looking at API dashboards. Calls per app, calls per key, errors by endpoint, top consumers this week. Every API management provider I have worked with or around since the Mashery days has sold some version of that screen. It was the place you went to figure out what was going on, and then you went and fixed it.

I was talking with Dave Eyler, founder of Good Timing, who makes [Baton](https://goodtiming.ai), a product analytics platform for MCP servers. About eleven minutes into our conversation he said something that has been rattling around in my head ever since. He said the role of the dashboard and analytics has changed. It used to be that you needed the dashboard to solve your problem and see the answer. Now, in his words, "the agents don't actually need to look at the dashboard to like see what is going on but you still need the dashboard to like convince the humans involved that it is that is real."

So the dashboard has moved. You need it for the proof, not to make the actual fix.

## The agent already knows

Think about how work is starting to happen. An agent is wired into your logs, your MCP server, your issue tracker and your code. It can read the traffic, spot the tool that keeps failing, open a pull request and explain what it changed. It doesn't need a chart with a red line on it. The chart was always a translation layer for a human brain that can't read ten thousand log lines.

That translation layer is still needed, just for a different job. Someone has to approve the change. Someone has to sign off on the budget. Someone has to stand up in a meeting and say this thing is working, or this thing is broken and here is why. The dashboard is now the evidence you bring to that conversation, not the workbench where the work gets done.

I don't think this is a small shift for the analytics business. A lot of API analytics products were built on the idea that the screen is the product. If the fix is happening somewhere else, the screen has to earn its place as a way of convincing people.

## What the output should look like

My response to Dave was that the outputs that matter are going to look a lot smaller than a dashboard. A Claude app that draws a little diagram or a micro dashboard on demand. Slack or Teams bursts that say here is what is going on, as a narrative, a little story. Those two things, I told him, are going to be super critical for justifying your existence.

That is where I keep landing. Nobody I know wants to log into another portal to look at another grid of charts. They want to be told what happened, in the place where they already are, in a few sentences, with one visual if it helps. The narrative is the product. The dashboard is the appendix you click into when someone doesn't believe the narrative.

This changes how I think about API analytics in general, not just MCP. If you are providing analytics to your API consumers, ask yourself whether you are handing them a screen or handing them a story they can forward to their boss.

## Who the signal is really for

That brings me to the aside that came up right in the middle of this. I had been taking notes on LinkedIn, watching how a few companies post, and it struck me that a lot of the signalling isn't for customers at all. It is for the boss. Look, I'm working, I'm at the event, I'm doing the thing. The audience for a lot of public activity is internal, even when it is posted in public.

I don't say that to be cynical. It is just honest. And it lines up with what Dave was saying about dashboards. A huge amount of what we produce in this industry, charts, posts, reports, exists to convince someone inside the organization that value is being generated. Once you admit that, you can design for it on purpose instead of by accident.

If the real audience is the person who has to justify the budget, then give them something they can carry into the room. A short narrative. One clear visual. The numbers that matter and nothing else. Make it easy for them to retell.

## The takeaway

Agents are taking over the part of analytics that was about seeing the problem and fixing it. What is left for humans is believing it and approving it. That is still important work, but it is different work, and it calls for a different output. Stop building dashboards as the place where the fix happens. Build them, and the Slack bursts and micro dashboards around them, as proof. The agent does the fix. The dashboard makes the case.

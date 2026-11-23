---
published: true
layout: post
title: 'Agent Taste Tests: Run The Same Task Against Competing MCP Servers'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agent-taste-tests.png
date: 2026-11-23 15:00:00 +0000
author: Kin Lane
tags:
  - MCP
  - Agents
  - Agent Readiness
  - Analytics
  - APIs.io
---
I sat down with Dave Eyler of Good Timing, the folks behind Baton, earlier this month, and one phrase out of that conversation has stuck with me more than anything else. Dave said his team likes to run what they call "agent taste tests." It is a simple idea, and I think it is one of the most useful ways to evaluate an MCP server I have heard this year. You can watch or read [the full conversation with Dave](https://conversations.apievangelist.com/store/2026-11-10-dave-eyler/).

## Three CRMs, The Same 40 Messages

Here is how Dave described it. Take three CRMs. Give each of them the same job: log these 40 messages. Then see how each one does.

The results were not close. In Dave's words, one of the slowest "takes like four times as long and cost four times as much." Same task, same agent, same 40 messages, and one server burned four times the time and four times the money of the others.

What I liked most is what happened when they went looking for why. If you only look at the tool calls, Dave said, it is hard to figure out what the thing is doing: "i just see all these 200s in the tool calls and i don't really know." Every call succeeded. Nothing looked broken. A wall of 200s tells you the plumbing works. It does not tell you the experience is any good.

Once they looked at what the agent was trying to do, it was obvious. The slow server was looking up 40 people one at a time and writing 40 people one at a time. And when the agent asked for five fields, the MCP server returned, as Dave put it, "the entire database," just "barfing the whole thing up." Once you can see that, you know how to fix it. Batch the writes. Return the fields that were asked for.

## Postgres Was All Over The Place

They did the same thing with databases. Three Postgres MCP servers, each asked to tune a query. Dave's summary: "it's freaking all over the place." Some of them jumped straight to building an index for a simple query that had an easy fix. One kept calling the slow query it was supposed to be tuning, over and over again, to check the results.

None of that shows up as an error. All of it shows up as tokens, time and money, and it lands on whoever is paying for the agent.

## Why This Is Different From A Feature Matrix

For most of the last fifteen years we compared APIs by reading their docs and filling in a grid. Does it have webhooks? Does it support OAuth? Is there an SDK? That grid still matters, and it is a big part of how the Kin Score looks at a provider. But it cannot tell you what Dave's test told him: two servers that both "support" logging messages to a CRM can differ by four times in cost on the exact same work.

A taste test measures the thing an agent consumer actually experiences. Did I get what I wanted, how fast, and how many tokens did it take? Dave framed the goal the same way earlier in our conversation: get what you want as fast as possible and burn as few tokens as possible. That is a design target you can only verify by running the work.

It also shifts the conversation with providers in a healthy direction. "Your MCP server returns the whole record when the agent asks for five fields" is specific and fixable. It is not an opinion about anyone's product, it is an observation about one task on one day, and any provider can rerun it and show it has changed.

## A Series I Want To Run On APIs.io

This is where my head went as soon as Dave described it. APIs.io already groups providers by capability and tracks which ones publish MCP servers. That gives me the competitor sets for free. Pick a capability, pick a realistic task that every server in that set should be able to do, run the same agent against each one, and publish what happened: time, tokens, number of calls, and the shape of what came back.

A few rules I would hold myself to:

- **Same task, same agent, same day.** Otherwise it is not a taste test, it is a vibe.
- **Publish the task.** Anyone should be able to rerun it, including the providers.
- **Report what was observed, not who is bad.** Four times the cost is a measurement. The interesting part is the why, and the why is almost always fixable.
- **Rerun it.** A taste test that only runs once is a press release. One that runs every quarter is a feedback loop.

I don't want to overstate where this is. Right now it is an idea I took away from a conversation, plus a catalog that makes it practical. I have not run a full series yet. But I would rather tell you the plan and have providers ask to be included than spring it on anyone.

## The Takeaway

Status codes tell you an MCP server works. They do not tell you whether it is any good for the agent doing the work. The only way to know that is to give competing servers the same job and watch what they do with it. Dave's team calls that a taste test, and I think every capability in the catalog deserves one. If you run an MCP server and want to know how yours tastes next to your competitors, that is exactly the kind of thing I want to measure out loud.

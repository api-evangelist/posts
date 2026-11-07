---
published: true
layout: post
title: 'Talking The AI Talk Without Walking The AI Walk'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/talking-the-ai-talk-without-walking-the-ai-walk.png
date: 2026-11-09
author: Kin Lane
tags:
  - Artificial Intelligence
  - Agents
  - Procurement
  - Kin Score
  - Agent Readiness
  - Investment
---
Every SaaS homepage I load right now tells me about AI. Agentic this, copilot that, models, intelligence, automation. I wanted to know whether any of it holds up once you go past the homepage. So I started counting the AI words on the front door of every provider in the catalog, then putting that count next to two numbers we already keep: the Kin Score, which measures the foundation of an API operation, and Agent Readiness, which measures whether an agent can actually find, understand and use what a company offers.

The count is deliberately dumb. One fetch of the homepage, strip the markup, count AI and its neighbors. It does not judge whether a company means it. It only measures how loud the front door is. That is the point. Loud is easy. What sits behind it is the part that costs money and time.

## Loud on the front door, thin behind it

Out of roughly 19,000 providers with a homepage of their own, 113 say AI or its neighbors more than a hundred times on that one page. That is the loudest one percent of the catalog. Twenty-eight of those 113 score zero on Agent Readiness. Forty-five score under 25 on the Kin Score, while the median for the whole catalog is 17.7.

I picked seven of them, re-profiled every one this week so the numbers are current, and every one of them has AI in the domain name too:

| Provider | AI words on the homepage | Kin Score | Agent Readiness |
|---|---:|---:|---:|
| [Vals AI](https://vals.ai) | 601 | 24.8 | 11.7 |
| [Securiti](https://securiti.ai) | 175 | 22.6 | 17.3 |
| [Enzai](https://enz.ai) | 165 | 17.3 | 18.7 |
| [IgniteTech](https://ignitetech.ai) | 161 | 13.4 | 0.0 |
| [Concentric AI](https://www.concentric.ai) | 136 | 11.1 | 14.4 |
| [Qualified Health](https://qualifiedhealthai.com) | 121 | 7.8 | 0.0 |
| [Klaimee](https://www.klaimee.ai) | 113 | 17.0 | 0.0 |

Vals AI has the loudest front door in the entire catalog, 601 AI words on one page. IgniteTech, Qualified Health and Klaimee each put more than a hundred AI words in front of you and score zero on Agent Readiness. No machine-readable contract, nothing an agent can discover, nothing an agent can call. These are companies selling AI to you that have not made themselves usable by AI.

I want to be fair here. Some of these are good products, and a low score is not a verdict on whether the software works. It measures what a company has published for someone trying to integrate with it, evaluate it, or put an agent in front of it. That is exactly the thing a buyer needs, and exactly the thing missing.

## Who the homepage is written for

Six of these seven companies entered our catalog the same way, from a venture portfolio page. Vals AI lists 8VC, a16z and Bloomberg Beta. IgniteTech lists Sapphire Ventures, Qualified Health lists Menlo Ventures, Concentric AI lists Homebrew, Klaimee lists Y Combinator and Enzai lists Seedcamp. I'm not saying that funding is a problem. I am saying the front door reads like it was written for the next round, not for the person who has to wire the thing into their stack.

When the language on the homepage is aimed at investors, the investment in the foundation tends to come later, if it comes at all. Documentation, an OpenAPI, a sandbox, pricing you can find, rate limits you can plan around, a status page, a changelog, an MCP server or agent card that matches what the API actually does. None of that shows up in a pitch deck. All of it shows up the first week you try to integrate.

## The leaders talk the talk and walk the walk

This is not an argument that talking about AI is bad. Some of the loudest companies in the catalog are also the strongest. Only 12 of the 113 loudest providers clear 55 on the Kin Score and 40 on Agent Readiness, and they are worth looking at:

| Provider | AI words on the homepage | Kin Score | Agent Readiness |
|---|---:|---:|---:|
| [CData](https://www.cdata.com) | 201 | 82.4 | 67.8 |
| [Speakeasy](https://www.speakeasy.com) | 85 | 72.2 | 47.6 |
| [Kong](https://konghq.com) | 82 | 70.2 | 43.5 |
| [LambdaTest](https://www.lambdatest.com) | 144 | 58.7 | 48.9 |

CData says AI more than any of the seven above except Vals AI, and it backs it with an exemplar Kin Score and an agent-ready rating. Speakeasy and Kong are quieter on the front door and further along behind it. The difference between these companies and the first table is not how much they talk about AI. It is whether they did the plumbing first.

## Why this matters if you are buying

If you are procuring SaaS right now, almost every vendor will tell you they are AI-native. That claim is free to make. What it costs to back up is visible, if you know where to look:

- **Can an agent find it?** Is there an OpenAPI, an MCP server, an agent card, an llms.txt, an APIs.json index, or does everything live behind a demo request?
- **Can your team integrate it?** Public docs, a sandbox, authentication you can read about, rate limits and errors written down.
- **Can you plan around it?** Pricing, plans, a status page, a changelog, a deprecation policy.
- **Does the AI story match the API?** If the homepage says agentic and there is no contract for an agent to call, the agentic part is your problem, not theirs.

A vendor with a loud front door and a thin foundation is asking you to fund the gap. Your integration team will pay for the missing documentation. Your agent team will hand-build what an MCP server should have provided. Your procurement team will chase pricing and terms that should have been published. That is a real cost, and it does not show up in the demo.

## Where we are taking this

The front door count is a loose instrument and it will stay that way. I'm going to keep it separate from the Kin Score on purpose, because it measures what a company says, not what it delivers. The value is in the gap between the two. We're going to formalize that gap, flag AI in the domain name alongside the homepage count, and keep re-profiling the companies at both ends so the numbers are current when we use them.

I want to keep finding the CDatas, the companies whose front door matches what is behind it, and keep showing why they are worth your money. I also want to keep surfacing the ones where the front door is doing all the work. If you are one of the companies in the first table and you think we've missed something you publish, [tell us](https://apis.io). We will look, and if it's there, the number moves. That is the whole point of keeping score.

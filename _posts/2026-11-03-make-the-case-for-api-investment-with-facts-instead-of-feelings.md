---
published: true
layout: post
title: 'Make The Case For API Investment With Facts Instead Of Feelings'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/make-the-case-for-api-investment-with-facts-instead-of-feelings.png
date: 2026-11-03
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - API Strategy
  - Artificial Intelligence
  - Investment
---
Most of the money right now is going to AI. Most of the people I talk to who run API programs know their foundations need work, and they have a hard time getting that heard next to anything with an agent in the title. In a recent conversation with people doing this work, one framing stood out: a neutral fact base moves the discussion from emotion to evidence.

An internal argument about API quality tends to be one team's opinion against another's. An outside reading built from public artifacts changes that argument. You are no longer saying your portal has problems. You are pointing at what a machine could and could not find, and anyone can go and check it.

## The gap you can show your leadership

The [Kin Score](https://apis.io/rating/) and the Agent Readiness score are separate numbers, and the distance between them is the argument. A provider can be excellent for human developers and still have a long way to go for agents. On APIs.io today:

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [HubSpot](https://apis.io/providers/hubspot/) | 93.2 | 54 |
| [SendGrid](https://apis.io/providers/sendgrid/) | 85.9 | 45 |
| [Dynatrace](https://apis.io/providers/dynatrace/) | 84.8 | 49 |
| [Elastic](https://apis.io/providers/elastic/) | 77.6 | 30 |
| [Cloudflare](https://apis.io/providers/cloudflare/) | 80.6 | 73 |

Those are some of the best API operations out there, and I am not picking on any of them. The point is that being very good at the traditional work does not automatically carry over. Cloudflare shows the gap can be narrowed. These numbers come from the public provider pages on APIs.io, most of them scored on October 17, 2026. They will move, so click through for the current reading.

The same pattern shows up in the wider catalog. Only about 1.4% of providers land in the Agent-Native band, and 5.8% are strong or exemplar on the composite. So if your AI plan assumes agents can use your APIs, this is a measurable way to ask whether that is true.

## How to use it in the room

- **Connect it to what is already funded.** Do not ask for an API quality budget. Say the agent initiative depends on idempotency, error semantics and machine-readable auth, and show which of those you have.
- **Bring the outside view.** It is harder to dismiss a public reading than an internal complaint.
- **Be honest about what it measures.** The score sees what you publish. It cannot see your internal engineering, and it may disagree with your gut. When I first ran an early version on a company I knew well, I was sure the agent was wrong. It was not. We just had not expressed what we knew.

Yes, you will also compare yourself with competitors. It is irresistible, and I will get to that in a later post. For the budget conversation, the comparison that matters most is between what you are promising leadership and what an agent can actually find.

## The APIs And MCP Tools For This

You can do all of the above by hand on the site, or have an agent do it. Each of these is a REST operation and an MCP tool:

| Job | REST operation | MCP tool | Plan |
|---|---|---|---|
| Get the score next to agent readiness | [`GET /providers/{slug}/rating`](https://apis.io/developer/api/ratings) | `get_provider_rating` | Understanding |
| See the agent-readiness dimensions | [`GET /providers/{slug}/agent-readiness`](https://apis.io/developer/api/ratings) | `get_agent_readiness` | Understanding |
| See how far each dimension has spread | [`GET /agent-readiness/dimensions`](https://apis.io/developer/api/ratings) | `agent_readiness_dimensions` | Influence |

Paths are relative to `https://apis.io/api/v1`, and the MCP server is at `https://apis.io/mcp`. The [developer area](https://apis.io/developer/) has [getting started](https://apis.io/developer/getting-started), the [MCP setup](https://apis.io/developer/mcp-server) and the [plans](https://apis.io/developer/plans).

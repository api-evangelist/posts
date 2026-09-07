---
published: true
layout: post
title: 'Agents Inherit Your Governance — I Am Speaking at APIdays Toronto This Thursday'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/agents-inherit-your-governance-at-apidays-toronto.png
date: 2026-09-07
author: Kin Lane
tags:
  - Kin Score
  - APIs.io
  - Agents
  - API Governance
  - Speaking
  - APIdays
---
I am speaking at [APIdays Toronto](https://www.apidays.global/events/toronto) this week — Thursday at 11:00 AM in Markham. The talk is called *Agents Inherit Your Governance — Whether You Meant Them To or Not*, and it is the first live outing of an argument I have been assembling in the APIs.io catalog all year. The full deck is already up at [talks.apievangelist.com](https://talks.apievangelist.com/2026-apidays-toronto-governance/2026-apidays-toronto-governance.html) if you want the numbers before Thursday.

The premise is simple, and I think it is the part most API programs have not sat with yet: you are not choosing whether agents use your APIs. They are already calling them — through a copilot someone in your company installed, through a vendor's integration, through a customer who wired an assistant to your public endpoints. Whatever governance you have, or do not have, is what those agents inherited the day they arrived. Nobody asked, because nobody had to. The traffic does not fill out an intake form.

"AI-ready" is claimed by every API program right now and measured by almost none of them, so I measured it. Every provider in the APIs.io catalog — 26,755 companies as of this week's scoring pass — carries two scores. The Kin Score is a 0–100 composite of governance fundamentals: the contract, the documentation, how you get in, how it behaves in production, the artifacts that constrain it all. Agent Readiness is a separate 0–100 across nineteen dimensions asking whether an autonomous agent can drive the API safely without a human papering over the gaps — idempotency, error semantics an agent can branch on, rate-limit state it can read mid-run, auth that names who is acting for whom. The two are computed independently and never blended, and that design choice turned out to be the whole talk, because it means the relationship between them is a finding rather than an assumption.

The finding: across all 26,755 providers the two scores correlate at r = 0.882, and 96.7% of the catalog scores its agent readiness at or below its governance composite. The ladder is monotonic the whole way down — 61.5% of the top governance band reaches agent-native, and exactly zero of the 10,443 providers in the bottom band do. Readiness is a layer, and a layer does not rise above its foundation. The talk walks the composite facet by facet and the readiness rating dimension by dimension, showing what each one becomes the moment the consumer stops being a human developer — including the negative finding, which is that shipping an MCP server on top of an ungoverned API does not move the number, and inside a governed portfolio makes things worse by handing agents a confident interface to an unreliable contract.

This is not the future I would have chosen, but it is the one we have. The market responded to LLMs and agentic automation the way it responded, no matter how irrational, and I have chosen to lean into it rather than fight it — which makes governance both an offensive and a defensive posture for how agents engage with your business. That is where the talk lands, and it ends with a question you can answer before you leave the room, because every provider in the deck is public at [APIs.io](https://apis.io): where do you stand with your API? If you are in Toronto this week, come find out — and if the catalog is wrong about you, tell me, because corrections are free and I will rescore you.

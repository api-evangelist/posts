---
published: true
layout: post
title: 'Seventy-One APIs Will Let You Try A Call Without Committing To It'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/seventy-one-apis-will-let-you-try-a-call-without-committing-it.png
date: 2026-08-18
author: Kin Lane
tags:
  - Agents
  - Kin Score
  - Agent Readiness
  - APIs.io
  - Design
  - Governance
  - APIs
---
I scored 26,568 API providers against the Agent Readiness layer of the [Kin Score](https://apievangelist.com/rating/), and one of the fourteen dimensions came back at a number I had to go and check twice. **Seventy-one providers publish a dry-run mode.** Not seventy-one percent. Seventy-one providers, out of 26,568. That is 0.27%.

A dry-run mode is the ability to say to an API: *tell me what this call would do, without doing it.* Some call it simulate, some call it preview, some call it validate-only. Whatever the spelling, it is the difference between asking a question and taking an action, and it is the single most useful thing an API can offer something that is about to act on your behalf without you watching.

## The shape of the number

It is worth putting the rest of the dimensions next to it, because the fall-off is the story rather than any single figure:

| Dimension | Providers | Share |
|---|---|---|
| Machine-readable auth | 8,564 | 32.2% |
| Machine-readable contract | 8,467 | 31.9% |
| Rate-limit signalling | 8,161 | 30.7% |
| Stable error semantics | 3,945 | 14.8% |
| MCP server | 3,641 | 13.7% |
| Consent / bot identity | 922 | 3.5% |
| Idempotency | 634 | 2.4% |
| **Dry-run / simulate** | **71** | **0.27%** |

Describing the API sits around thirty percent. That is not great, but it is a recognizable number — a third of the market has done the machine-readable basics. Then look at what happens to everything that constrains or accounts for what a caller may actually *do*. Error semantics halves it. Consent drops it by a factor of ten. Idempotency — the ability to retry safely, which is table stakes for anything automated — is under two and a half percent. And the ability to preview an action before committing to it is a rounding error.

**We have spent fifteen years getting reasonably good at describing what an API is, and almost no time at all on describing what happens when something calls it.** That gap did not matter much when the caller was a developer who would read the docs, try it in staging, and think about it. It matters enormously now that the caller is increasingly a model with a tool definition and a task.

## Why this is the dimension that matters for agents

Every other dimension on that list helps an agent *understand* an API. This one is the only one that helps an agent *be careful*.

Consider what an agent does without it. It has a tool definition, a goal, and no way to distinguish a call that reads from a call that spends money, cancels a booking, or emails a customer list. The only way to find out what a `POST` does is to issue it. Every guardrail we build on top — approval gates, human-in-the-loop, spend caps — exists because the underlying API cannot answer the question *"what would this do?"* We are building elaborate scaffolding around a missing feature.

An idempotency key lets you retry without doubling the charge. A dry-run lets you avoid the charge entirely while you work out whether it was the right one. Those are different problems, and the market has barely solved either: 634 providers and 71 providers respectively, out of 26,568.

## The caveat, which cuts both ways

This measures what is **discoverable in machine-readable form**, not what exists. Plenty of APIs have a sandbox, a test mode, or a validate-only flag and never say so anywhere a machine can find it. The real number of APIs that *can* do this is certainly higher than seventy-one.

But that distinction matters less than it sounds, and it cuts the way you might not expect. **An agent cannot rely on a guarantee it cannot read.** If your API supports `validate_only=true` and your OpenAPI does not mention it, then for every automated caller in the world that capability does not exist. Undocumented safety is not safety. It is a feature you built and then hid from the only consumer who needed it most.

So please do not quote this as "99.7% of APIs are unsafe." That is not what it says. What it says is that 99.7% of APIs have not told anyone they are safe to try.

## What to do about it, if you run an API

This is one of the cheapest agent-readiness wins available, and unusually, most of the work may already be done.

- **If you already have a validate-only, preview or test mode, document it in your OpenAPI.** A parameter with a description, in the spec, in the operation it applies to. That is the whole job. You will move on a dimension where you currently have 26,497 companies for company.
- **If you do not have one, start with the operations that spend, send or delete.** Nobody needs a dry-run on a `GET`. The value is concentrated in exactly the handful of calls that make people nervous about letting an agent loose.
- **Do not confuse a sandbox environment with a dry-run.** A separate base URL with separate data is a useful thing, but it is not the same as modelling *this* call against *this* production state. Agents do not get to point at your sandbox when they are working on a real task.

The seventy-one who have done it are a genuinely interesting cohort, and not the one I expected — heavy on infrastructure and developer tooling, and with fourteen universities in the mix, which turns out to be because research APIs get built alongside the teaching materials that need a safe way to demo them.

I will take the obvious next question myself before anyone else asks it: 0.27% is extreme enough that the detector deserves auditing as much as the market does, and I have [opened that up](https://github.com/api-evangelist/roadmap) rather than assume my own instrument is right. A number this striking should be tested before it is repeated, including by me.

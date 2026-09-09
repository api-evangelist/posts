---
published: true
layout: post
title: 'What Three Models Say About Sixty-Five API Providers'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/what-three-models-say-about-twenty-two-api-providers.png
date: 2026-09-08
author: Kin Lane
tags:
  - AI
  - Agents
  - Discovery
  - LLM SEO
  - Machine Readability
  - Measurement
  - Providers
---
*Updated 2026-09-09: first published with the opening wave of 22 providers; now covers the full panel of 65. Every figure below is the larger sample. The original numbers held — grounded accuracy moved from 72.2% to 71.2% — and the propagation result got stronger rather than weaker.*

I have been arguing that answer-engine visibility is downstream of whether a machine-readable description of you exists at all. That is an argument until somebody measures it, so I measured it.

I took sixty-five API providers out of the APIs.io catalog — companies whose profiles AI agents are actually fetching, not a convenience sample — and asked Claude, ChatGPT and Gemini closed questions about each one. Does this company publish a public OpenAPI. Does it operate an MCP server. Does it offer a free tier. Then I checked every answer against the artifacts on that company's own profile.

Each question ran twice: once with web search enabled, once with it turned off. That doubling is the whole design. With search on, you learn what a model can *find* right now. With search off, you learn what it already carries. Those are different systems on different clocks and they should never be added together. 1,560 calls in total.

Here is what came back.

## One statement in four about a named company is false

| | scored claims | correct | accuracy |
|---|---|---|---|
| with web search | 393 | 280 | **71.2%** |
| from memory | 305 | 188 | **61.6%** |

Fifty-two of the sixty-five providers had at least one false claim made about them by at least one model.

These are not obscure questions. Whether a company runs an MCP server is the kind of thing a developer now asks an assistant before deciding whether to integrate, and roughly a quarter of the time the answer that comes back is wrong. Nobody is checking this, because checking it requires holding verified ground truth about the company being described, and almost nobody holds that.

Per model, with search on: Gemini 74.0%, ChatGPT 72.3%, Claude 65.7%. I would not read too much into that ordering — the three models were not asked identical numbers of scoreable questions, for reasons in the methods note.

## Our vocabulary reaches what models find, and nothing of what they know

This is the result I did not expect, and it is the most useful one.

APIs.io publishes things that exist nowhere else: a Kin Score, an agent-readiness rating, a band vocabulary that calls a provider *exemplar* or *agent-native*. Those are ours. If they turn up in a model's answer, they came from us, whether or not we were credited.

They turned up **99 times in answers where search was on**.

They turned up **zero times in answers where search was off**. Not rarely. Not once, across three models, sixty-five companies, and 305 scored claims from memory.

That is a concrete statement about how influence actually travels right now. **You can move what a model finds. You cannot, on any timescale you control, move what it already knows.** Every AEO/GEO pitch that promises to change how an assistant "thinks about your brand" is implicitly promising the second thing. The retrieval path is real, measurable, and moves in weeks. The training path did not register at all.

The citation numbers sit alongside that. Of 768 grounded answers that came back, **238 — just under a third — cited one of our domains** in their sources. Without search, zero. Same story from the other direction.

## The models disagree about whether to guess

Asked from memory about companies this size, Claude declined to answer 99 times and ChatGPT 83 times. Gemini declined 14 times and answered instead — and was less accurate for it.

I want to be careful here, because the obvious way to score this is wrong. A model that says "I don't know" about a mid-sized API provider is behaving **correctly**. If you fold abstention into the error rate you build a metric that rates the confabulating model above the cautious one, and then you have a number that recommends the wrong behaviour. Abstentions are counted separately in everything above; 196 of them from memory, 75 with search on.

The gap between 196 and 75 is itself the finding: search does not just make models more accurate, it makes them willing to answer at all.

## Methods, and where I would not lean on this yet

Everything above rests on a definition, and one of them is doing more work than I am comfortable with.

**The OpenAPI question is the weak one.** My ground truth for "does this company publish a public OpenAPI" is that a specification exists in the catalog for them. But 99.5% of the specification URLs I hold are mirrored into my own repositories, and for several of these companies there is no evidence they publish one anywhere themselves. So my data means *I hold a spec* while my question asked *do they publish one*. Those are not the same claim, and on the second one a model answering "no" may simply be right.

That question is 43% of everything scored. Drop it and accuracy across the rest rises to **76.1%**. I am reporting both numbers rather than the flattering one, and I am not going to name a company as having been misdescribed on that basis until the ground truth behind it is first-party.

Three other limits worth stating. The sample is sixty-five providers, so a single company flipping is worth about a point and a half. Twenty-eight of 1,560 calls failed outright on network errors, which is why the three models have different denominators. And `gemini-flash-latest` is a floating alias — Google moves it underneath me — so its line will break rather than trend whenever that happens.

## What this is for

I run a catalog of API providers. Increasingly the way a developer meets one of those providers is by asking an assistant about it, which means a description I do not control is standing between a company and the people evaluating it. That description is wrong about a quarter of the time and no one has been telling those companies so.

The measurement runs weekly against a rotating third of the panel, and the data behind it is public at [apis.io/model-visibility.json](https://apis.io/model-visibility.json). Next I re-measure these same companies after their profiles have been enriched — which is the only way to find out whether any of this moves.

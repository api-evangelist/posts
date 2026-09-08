---
published: true
layout: post
title: 'What Three Models Say About Twenty-Two API Providers'
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
I have been arguing that answer-engine visibility is downstream of whether a machine-readable description of you exists at all. That is an argument until somebody measures it, so I measured it.

I took twenty-two API providers out of the APIs.io catalog — companies whose profiles AI agents are actually fetching, not a convenience sample — and asked Claude, ChatGPT and Gemini closed questions about each one. Does this company publish a public OpenAPI. Does it operate an MCP server. Does it offer a free tier. Then I checked every answer against the artifacts on that company's own profile.

Each question ran twice: once with web search enabled, once with it turned off. That doubling is the whole design. With search on, you learn what a model can *find* right now. With search off, you learn what it already carries. Those are different systems on different clocks and they should never be added together. 528 calls in total.

Here is what came back.

## One statement in four about a named company is false

| | scored claims | correct | accuracy |
|---|---|---|---|
| with web search | 133 | 96 | **72.2%** |
| from memory | 99 | 62 | **62.6%** |

Fifteen of the twenty-two providers had at least one false claim made about them by at least one model.

These are not obscure questions. Whether a company runs an MCP server is the kind of thing a developer now asks an assistant before deciding whether to integrate, and roughly a quarter of the time the answer that comes back is wrong. Nobody is checking this, because checking it requires holding verified ground truth about the company being described, and almost nobody holds that.

Per model, with search on: Gemini 74.5%, ChatGPT 72.9%, Claude 68.4%. I would not read anything into that ordering yet. Twenty-two providers is a small sample, and the three models were not asked identical numbers of scoreable questions — more on why in the methods note.

## Our vocabulary reaches what models find, and nothing of what they know

This is the result I did not expect, and it is the most useful one.

APIs.io publishes things that exist nowhere else: a Kin Score, an agent-readiness rating, a band vocabulary that calls a provider *exemplar* or *agent-native*. Those are ours. If they turn up in a model's answer, they came from us, whether or not we were credited.

They turned up **43 times in answers where search was on**.

They turned up **zero times in answers where search was off**. Not rarely. Not once, across three models, twenty-two companies, and ninety-nine scored claims from memory.

That is a concrete statement about how influence actually travels right now. **You can move what a model finds. You cannot, on any timescale you control, move what it already knows.** Every AEO/GEO pitch that promises to change how an assistant "thinks about your brand" is implicitly promising the second thing. The retrieval path is real, measurable, and moves in weeks. The training path did not register at all.

The citation numbers sit alongside that. Of 252 grounded answers that came back, **81 — just under a third — cited one of our domains** in their sources: Claude 41, Gemini 26, ChatGPT 14. Without search, zero. Same story from the other direction.

## The models disagree about whether to guess

Asked from memory about companies this size, Claude declined to answer 33 times and ChatGPT 26 times. Gemini declined 7 times and answered instead — and was less accurate for it.

I want to be careful here, because the obvious way to score this is wrong. A model that says "I don't know" about a mid-sized API provider is behaving **correctly**. If you fold abstention into the error rate you build a metric that rates the confabulating model above the cautious one, and then you have a number that recommends the wrong behaviour. Abstentions are counted separately in everything above; 66 of them from memory, 21 with search on.

The gap between 66 and 21 is itself the finding: search does not just make models more accurate, it makes them willing to answer at all.

## Methods, and where I would not lean on this yet

Everything above rests on a definition, and one of them is doing more work than I am comfortable with.

**The OpenAPI question is the weak one.** My ground truth for "does this company publish a public OpenAPI" is that a specification exists in the catalog for them. But 99.5% of the specification URLs I hold are mirrored into my own repositories, and for several of these companies there is no evidence they publish one anywhere themselves. So my data means *I hold a spec* while my question asked *do they publish one*. Those are not the same claim, and on the second one a model answering "no" may simply be right.

That question is 42% of everything scored. Drop it and accuracy across the rest rises to **77.8%**. I am reporting both numbers rather than the flattering one, and I am not going to name a company as having been misdescribed on that basis until the ground truth behind it is first-party.

Three other limits worth stating. The sample is twenty-two providers, so a single company flipping is worth several points. Twenty-eight calls failed outright on network errors, which is why the three models have different denominators. And `gemini-flash-latest` is a floating alias — Google moves it underneath me — so its line will break rather than trend whenever that happens.

## What this is for

I run a catalog of API providers. Increasingly the way a developer meets one of those providers is by asking an assistant about it, which means a description I do not control is standing between a company and the people evaluating it. That description is wrong about a quarter of the time and no one has been telling those companies so.

The measurement runs weekly against a rotating third of the panel, and the data behind it is public at [apis.io/model-visibility.json](https://apis.io/model-visibility.json). Next I widen it from twenty-two providers to the full sixty-five, and then re-measure the same companies after their profiles have been enriched — which is the only way to find out whether any of this moves.

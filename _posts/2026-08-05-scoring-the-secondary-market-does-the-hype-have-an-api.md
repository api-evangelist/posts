---
published: true
layout: post
title: 'Scoring The Secondary Market: Does The Hype Have An API?'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/scoring-the-secondary-market-does-the-hype-have-an-api.png
date: 2026-08-05
author: Kin Lane
tags:
  - Secondary Market
  - Kin Score
  - Ratings
  - Discovery
  - Agent Readiness
  - Research
  - Strategy
---
There is a particular kind of company I have been curious about for a while now: the one whose shares trade on the private secondary markets. Forge Global, Hiive, EquityZen, Nasdaq Private Market, Augment — these venues let people buy and sell stock in companies that have not gone public yet. If you want to know which private companies the market currently believes in, that is a reasonable place to look. Someone has done the work of deciding these names are worth transacting on. The valuations are real money. The conviction is priced.

So I started profiling them. Not their cap tables — their APIs. I have been running the secondary-market listings through the same pipeline I run everything else through: find the company, find its developer surface if it has one, harvest whatever contracts and artifacts are actually published, and then rate the result with the Kin Score. The question I am chasing is simple and a little rude. These companies are valued like technology companies. Are they operable like technology companies?

I now have 278 of them scored, and the answer is more interesting than either "yes" or "no."

## What the numbers say

The average composite Kin Score across the cohort is **27.5**, with a median of **24.7**. For context, that is the bottom half of the scale. Broken into bands:

- **exemplar or strong: 25 companies (9%)**
- developing: 35 companies (13%)
- **emerging, thin, or minimal: 218 companies (78%)**

Agent readiness — measured separately, because being usable by a human developer and being usable by an agent are not the same problem — comes out lower still. Mean **19.8**, median **12.6**. Nearly half the cohort, **129 companies, score as human-only**: no machine-readable contract, no agent-facing affordances, nothing an autonomous consumer could act against without a person in the loop. Eleven companies out of 278 rate agent-native.

The facet breakdown is where it gets genuinely useful, because it explains the shape of the failure rather than just its size. Averaged across the cohort:

| Facet | Mean |
|---|---|
| Discoverability | 76.8 |
| Commercial clarity | 31.6 |
| Developer ergonomics | 26.2 |
| Contract quality | 18.2 |
| Operational transparency | 15.5 |
| Governance | 8.8 |

Read that top-to-bottom and you have the whole story. These companies are **extremely easy to find and almost impossible to operate against**. They have websites, positioning, press, a careers page, a blog. Discoverability at 76.8 says the marketing works. Governance at 8.8 and operational transparency at 15.5 say that once you get past the marketing there is very little contract, very little published operational reality, and almost no evidence of anyone governing the surface. The gap between 76.8 and 8.8 is the gap between being known and being usable.

## Who is actually good

The top of the table is not who I expected, and that is the most useful finding in the whole exercise:

| Company | Kin Score | Agent Readiness |
|---|---|---|
| Hubble Network | 72.9 | 50.5 |
| ControlUp | 68.2 | 59.7 |
| Niural | 67.1 | 68.0 |
| Method Financial | 65.7 | 70.7 |
| GoFundMe | 64.0 | 56.5 |
| OpenGov | 63.0 | 77.5 |
| Lukka | 62.5 | 60.8 |
| Read AI | 61.5 | 56.3 |
| ModMed | 60.7 | 58.8 |

Satellite Bluetooth. Digital employee experience monitoring. Global payroll. Bank data connectivity. Government budgeting software. Crypto accounting data. These are infrastructure companies. They are, with a couple of exceptions, not the names that come up when people talk about hot private companies. The consumer brands with the recognizable logos are mostly not in this table — they are down in the 78%.

That inversion is the point. **Private-market conviction and API maturity are not the same signal, and in this cohort they are barely correlated.** The market is pricing brand, growth, and category. The Kin Score is measuring whether anyone can build on you. Those turn out to be close to independent variables.

## Where I have to be careful

I want to be honest about what this evidence does and does not support, because it would be easy to turn this into a cheap dunk and the cheap version would be wrong.

**A low score is not automatically a failure.** A large share of this cohort is clinical-stage biotech, medical devices, consumer packaged goods, and deep-tech hardware. A company developing an mRNA therapeutic has no obligation to ship an OpenAPI, and scoring it against one tells you about its category, not its competence. The Kin Score answers "can a developer or an agent do anything with this company's public surface," and for a lot of these firms the honest answer is "no, and that is fine." What the number is genuinely good for is separating the companies that *present* as technology companies from the ones that *behave* like them.

**The sample is small and biased.** 278 companies is 1.6% of the 17,311 in my backlog. I am working through the highest-conviction slice first — companies listed on three or more venues — and within that, alphabetically. That is a real bias and I am not going to pretend the average holds for the other 98%. Ask me again at a few thousand.

**I am scoring the public surface only.** Plenty of these companies have real, well-built APIs sitting behind a sales conversation, a partner agreement, or a login. That work is invisible to me and it does not count here. This is a measure of what a company publishes to the open web, not of what its engineers have built. A company with a great private API and no public evidence of it scores badly, and by the rubric's own terms that is a correct result — but it is a narrower claim than "this company has no API."

## Why I keep doing it anyway

Because the interesting number is not the average, it is the distribution. A market where 9% of highly-valued private companies are meaningfully operable and 46% are entirely human-only is telling you something specific about where the next few years of integration work is going to come from — and about how much of the "everything is an API company now" story is positioning rather than architecture.

It also tells you something about agents specifically. Every one of these companies is going to be asked, fairly soon, whether an AI agent can transact with them. Right now, for most of this cohort, the answer is structurally no. Not "no, we chose not to" — no in the sense that there is nothing there to act against. The eleven agent-native companies in this set have a head start that is measured in years of accumulated contract, documentation, and operational discipline, not in a quarter of roadmap.

I will keep grinding through the backlog and publishing what the numbers say. The profiles, the artifacts, and the score history for every company are open on the network, so you do not have to take my averages on faith — you can go read the evidence for any single company and disagree with me about it.

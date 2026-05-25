---
published: true
layout: post
title: "Where Is the Fortune 1000 at When It Coms to AI — Here Are the Receipts for All 989 of Them"
date: 2026-05-25
author: "Kin Lane"
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-times-square-up-road.jpg
category: "Blog"
tags:
  - Artificial Intelligence
  - Fortune 1000
  - SerpAPI
  - API Evangelist Network
  - Naftiko
  - Signals
  - Press Releases
excerpt: "I pulled blog posts, press releases, and the top five Google results for every Fortune 1000 company that has a repo in my network — 989 of them — and counted AI mentions. The result is 44,025 hits across a 35-term lexicon. Zero companies score zero. The interesting question is no longer who is talking about AI; it is who has anything to say underneath the talk."
---
I now have the majority of Fortune 1000 profiled as part of API Evangelist, so I want to continue understanding where they are with AI. Similar to what I am doing with [Naftiko Signals](https://signals.naftiko.io), I want to understand the AI language being used by the Fortun 100.

This week I ran an experiment to make that claim concrete. For each of the 989 Fortune 1000 companies that I already have a repo for in the [API Evangelist GitHub Organization](https://github.com/api-evangelist), I pulled three things and stored them as markdown right next to the existing `apis.yml`:

- The top five Google results for `"<company> artificial intelligence"`.
- The top five results for `"<company>" press release artificial intelligence`.
- The top five results for `"<company>" blog artificial intelligence`.

Every artifact lands as a markdown file with YAML frontmatter (`title`, `url`, `date`, `query`, `position`, `source`). Then a second pass walks each company directory, counts mentions across a 35-term lexicon — `artificial intelligence`, `AI`, `machine learning`, `LLM`, `generative ai`, `foundation model`, `copilot`, `agentic`, `RAG`, `GPT-x`, `OpenAI`, `Anthropic`, `ChatGPT`, and a couple dozen more — and writes a per-company `AI-INVESTMENT.md` report. A final pass aggregates everything into a single rollup.

## The numbers

- **989** Fortune 1000 companies have a repo and a full report.
- **44,025** AI-term mentions across all the pulled markdown.
- **19,609** of those are the exact string `artificial intelligence`.
- **44.5** AI-term mentions per company on average.
- **0** companies with zero AI signal across all pulled markdown.

That last number is the headline. Even the Fortune 1000 companies you wouldn't expect — Universal (the tobacco company at rank #854), Pep Boys at #850, Pinnacle Entertainment at #976 — produced at least one Google result mentioning AI somewhere in the snippet. The question of "is your industry talking about AI yet" is closed. Yes. All talking about it. The question is, what are they doing about it, and that reflects the work I am doing with [Naftiko Signals](https://signals.naftiko.io).

## Three lenses, three different leaderboards

The first lens is raw mention count. It looks like this:

| Rank | Company | F1000 | AI total | `artificial intelligence` |
|---|---|---|---:|---:|
| 1 | American Express | #88 | 327 | 20 |
| 2 | Hanover Insurance Group | #511 | 321 | 34 |
| 3 | Teradata | #809 | 217 | 20 |
| 4 | Juniper Networks | #557 | 166 | 16 |
| 5 | Apache | #218 | 161 | 16 |
| 6 | Autodesk | #862 | 119 | 21 |
| 7 | Cisco Systems | #60 | 115 | 31 |
| 8 | Netflix | #474 | 114 | 18 |
| 9 | Leidos Holdings | #506 | 113 | 32 |
| 10 | Citrix Systems | #725 | 109 | 18 |

If you stop reading after this table you will draw the wrong conclusions. American Express and Hanover Insurance lead because they happened *not* to expose an RSS feed on their corporate homepage. That means their data is entirely the 15 search engine snippets I asked for — and those snippets are 100% AI-themed by query design. Microsoft, sitting at #31 in the same ranking with 90 mentions, did expose a feed. So Microsoft also has twenty broad blog posts in the sample, most of them not about AI, which drags the raw mention count down.

This is sample-size bias, not signal. To correct for it I added a second lens: `AI / item`, the average number of AI hits per pulled markdown file. Companies with fewer than ten items don't qualify. The picture flips:

| Rank | Company | AI / item | Items pulled | % items w/ AI |
|---|---|---:|---:|---:|
| 1 | Hanover Insurance Group | 12.8 | 25 | 80% |
| 2 | American Express | 11.7 | 28 | 86% |
| 3 | Mattel | 5.9 | 15 | 100% |
| 4 | CDW | 5.4 | 15 | 100% |
| 5 | Juniper Networks | 5.4 | 31 | 94% |
| 6 | Verizon | 5.3 | 15 | 100% |
| 7 | AT&T | 5.3 | 15 | 100% |
| 8 | Citigroup | 5.2 | 15 | 100% |
| 9 | Baker Hughes | 5.2 | 15 | 100% |
| 10 | Visa | 5.1 | 15 | 100% |

Hanover and Amex stay on top because their *broader* RSS-discovered items also happened to mention AI — twenty of twenty-five blog posts, twenty-four of twenty-eight, respectively. That is genuine density, not selection.

The third lens is the one I find most useful: how many of the items in a company's `press/` directory actually mention AI. Press releases are the most authoritative channel — those are the things the company chose to put its own logo on. This leaderboard is different again:

| Rank | Company | Press items w/ AI |
|---|---|---:|
| 1 | Teradata | 20 |
| 2 | Alphabet | 13 |
| 3 | salesforce.com | 12 |
| 4 | Coca-Cola | 10 |
| 5 | Time Warner | 10 |
| 6 | Blackstone Group | 8 |
| 7 | VF | 8 |
| 8 | CommScope Holding | 7 |
| 9 | NCR | 7 |
| 10 | Union Pacific | 6 |

Notice how Alphabet barely registers in the raw count (#29) but jumps to #2 here because their press feed surfaced thirteen distinct AI announcements. Union Pacific shows up at #10 — a railroad, in a list otherwise full of software and finance. That is worth a look.

## Industry density

Aggregating by industry and dividing by company count gives a cleaner read on which sectors are *uniformly* engaged with AI versus which have a few loud companies and a long quiet tail:

| Industry | Companies | Avg AI mentions / company |
|---|---:|---:|
| Computer Software | 13 | 81.2 |
| Network and Other Communications Equipment | 14 | 68.1 |
| Commercial Banks | 25 | 64.6 |
| Information Technology Services | 11 | 62.3 |
| Internet Services and Retailing | 13 | 56.2 |
| Insurance: Property and Casualty | 28 | 54.5 |
| Diversified Financials | 14 | 54.7 |
| Diversified Outsourcing Services | 14 | 53.3 |
| Telecommunications | 16 | 50.8 |
| Pharmaceuticals | 15 | 50.8 |

Software and networking lead, which surprises no one. Banks and insurance at #3 and #6 are the interesting story — financial services has gone from "AI is interesting" to "AI is part of the press cadence" faster than I would have predicted three years ago.

## The methodology

Some caveats, because I am not going to pretend this is a clean academic measurement:

- **The lexicon is permissive.** `\bAI\b` matches any standalone "AI" — and most of the time that is what we want, but in a press release that lists a product code like "AI-204" it will overcount. I accept this tradeoff. The point is to find which companies are *talking* about AI a lot, not to write a definition of AI.
- **RSS coverage is patchy.** Of 989 companies, only **197** exposed a discoverable RSS feed for blogs or press from their corporate homepage. The rest have no machine-readable channel for their own announcements. The remaining 792 companies are visible to this analysis only through search engines view. That is a real story about how few Fortune 1000 companies bother to publish a feed in 2026, separate from this analysis.

## What I'm taking away

Three things.

**The first** is that "is your industry doing AI" is the wrong question now. The signal floor is non-zero across every industry in the Fortune 1000, including the ones I expected to come up empty. Mining. Tobacco. Specialty retail. All of them have public AI mentions findable in three search engine queries.

**The second** is that the interesting differentiation is not raw volume but channel and density. Alphabet putting thirteen AI announcements through its press feed is a different signal than American Express having a lot of AI articles written *about* it. Both matter. They are not the same thing.

**The third** is that this entire pipeline took an afternoon to build, ran in under an hour of API time, and produced 989 company reports plus a ranked rollup as markdown that I can grep, version, and link to. That is the version of "AI investment analysis" I want to do: build it once, run it everywhere, store the receipts as plain markdown next to the rest of the company's API and capability data, and let the index be the artifact.

Honestly I don't know what any of this means. It all feels like noise. I will be doing the diff with the signals I've been gathering as part of my Naftiko work. Search engines, blogs, press releases for the Fortune 1000 spin one narrative, the job postings and GitHub repos (if they have) tell another. I think the jobs are the leading indicator for whether it is all talk or if there is any actual investment. Also, with the job postings I don't think it is just about hiring for AI terms, and is about hiring for data, pipelines, APIs, and all the things that will determine if you are successful. 
---
published: true
layout: post
title: 'Forty-Four Percent Of Job Postings Said Workday And The Word Was Ours'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/forty-four-percent-of-job-postings-said-workday-and-the-word-was-ours.png
date: 2026-11-11
author: Kin Lane
tags:
  - Methodology
  - Data
  - Provenance
  - Insights
  - Hiring
---
For five weeks I have been putting numbers from job postings in front of you. MCP in 102 companies, Claude in 380, Sarbanes-Oxley in 518. Before the Q4 read lands on November 20, I owe you the other half of the story: how many of the numbers this pipeline produced along the way were wrong, and how we found out.

A lot of them were. Most of them were wrong because of us.

## The word was ours

Every job posting we harvest gets a small header written by our own puller: the company, the location, when it was posted, and where we got it. For a lot of employers that last line read `Source: Workday CXS API`, because Workday is the system they post jobs through and the one we pulled from.

Then we matched our technology vocabulary across every word in every posting, including that header.

You can guess what happened. In our word-frequency count, `workday` appeared in 44% of postings. Across one 32,539-posting sample, our own header credited Workday with 360 companies and Apify, the scraping service behind part of the harvest, with 406. Another puller wrote `Oracle Fusion recruiting REST API` into all 1,392 postings it touched, which quietly added "REST" and "API" to every one of them. We were not measuring which companies hire for Workday. We were measuring which companies we happened to pull through Workday.

The fix was to strip exactly the four header lines our harvester writes before anything gets matched. Workday's share of postings dropped from 44% to 3.9%. And the part I find most reassuring: when we sampled the postings that still matched, Workday was real — "manage workday hcm", "experience with workday financials preferred". The fix did not delete a finding. It removed a fake one that was sitting on top of a real one. Workday is in this quarter's numbers at 535 companies, and that count is one we will stand behind.

## English is full of technology names

Once the header was gone, the next problem was the language itself.

A systematic pass over every short, bare-word match turned up `teams`, which had put Microsoft Teams in 866 companies, 97% of everything we had qualified at the time. Every company has teams. `office` was in 858 companies. `project` in 832. Today Microsoft Teams reads 231 companies, counted on the phrases people actually use for the product.

Some of my favorites from that pass:

- **REST.** The bare word matched "empathy toward the rest of the team" and "encryption at rest and in transit". We still count REST, but only through "RESTful" and the longer forms, so it undercounts by design and we will not put it in a headline.
- **Skills.** The single most common content word in a job posting. Agent Skills only counts when someone writes "agent skills", which is why it is a small number.
- **Knit.** 173 companies, every sampled hit "a close-knit team". Withheld.
- **Solaris Zones.** Time zones.
- **OpenUSD.** Salary lines.
- **AIS**, the maritime Automatic Identification System. Every sampled hit was air-insulated switchgear, from utility postings about substations, and it made it into one of our tables at 45 companies before we caught it.

## Accents and San Francisco

Two of the bugs were in the plumbing rather than the vocabulary.

Our text cleanup stripped out every character that was not a plain letter or number *before* folding accents. So "français" became "fran" and "ais", and that stray "ais" matched AIS in 41 postings at one company where the term appears exactly zero times. Any company that posts in more than one language hits this. The fix was to fold accents first, on both the postings and the vocabulary.

The other one embarrassed the checker, not the matcher. To double-check a Cisco count at one company, we searched for the substring "cisco" and found it in 34 files. Every one of them was "San Francisco". The word-boundary matcher had been right all along, and a sloppy verification made a correct answer look like a miss. Now every single-word check is done on word boundaries too.

## Whose postings are these

A different kind of problem: some of the postings were not from the company we filed them under. We first gathered postings by searching job boards for company names, and whichever board answered won. A vendor or outsourcer posting a role that mentions a client could end up filed as that client. 113 of 879 corpora at the time belonged to a different company, 66,444 postings in all.

And some postings were the right company but the wrong question. One corpus held 1,131 postings, and 877 of them were retail sales associate roles, against 37 engineering roles. The technology names in it were sales boilerplate.

Both now have gates. A corpus has to be shown to belong to the company and has to contain enough technical roles before it counts. That is why this quarter's numbers are drawn from 984 *qualified* companies, and why none of these posts has named a single company's stack.

## How sure is the word, and how believable is the count

All of this turned into two separate questions we now ask of every term.

**Precision is about the word.** Could we recognize this technology if it were there, or does it collide with ordinary language? **The company count is about the world.** How many companies said it?

We deliberately do not combine them, because no automated measure can tell a ubiquitous real technology from a common English word. Python is in 74% of qualified companies. "Safe" is in 56%. The more alarming number belongs to the legitimate one. And a perfect precision score does not make a count believable: "Use Cases" and "Technical Specifications" both matched cleanly, in 507 and 521 companies, because the words really are there. They are just not technologies anyone is hiring for.

So precision tells us what to sample next. A person reads matched text from the postings and records a verdict with the quote. Only terms with a verdict, or an unambiguous name, are labeled **cite**, and only those appear as numbers in these posts. Terms with a known collision are **check**, and they show up only as caveats — that is why you got no number for "agents", PCI, or ISO/IEC 42001. Terms that cannot be separated from each other, like GitHub Copilot and Microsoft Copilot sharing the word "Copilot", are **combined**, and are never reported apart.

## Why I am telling you this

It would be easier to publish the numbers and leave the plumbing out. But hiring data is going to be quoted in a lot of places over the next year, much of it from pipelines that never stripped their own headers, never checked whether "teams" meant Microsoft, and never asked whose postings they were reading. I would rather you know exactly how ours can fail.

It also matters for what comes next. On November 20 we publish the Q4 read, the first time we can compare two quarters and say something moved. A change between two numbers is only as good as the numbers. Every one of the fixes above runs on both quarters: the same header stripping, the same accent folding, the same qualification gates, the same verdicts. If MCP or the EU AI Act moves in Q4, it will be because the postings changed, not because our pipeline did.

## How to read these numbers

- **This is hiring intent, not production use.** That has been true in every post in this series, and none of the fixes above change it.
- **Q3 2026 is the first point in the series.** November 20 is the first comparison.
- **We will keep finding things.** Every quarter so far has turned up at least one new way a word can lie. When we find one, the number comes down, the verdict gets written, and we will say so.

The full Insights data, with the precision score and verdict behind every term, is available through the [APIs.io API and MCP server](https://apis.io/insights/).

Forty-four percent of postings said Workday, and the word was ours. I would rather tell you that than have you find it.

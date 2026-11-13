---
published: false
layout: post
title: 'When The Algorithm Sends The Debt Letter'
date: 2027-01-18 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Automation
  - Government
  - Automated Decisions
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act three: automate.*

The last two stories in this series are not about companies. They are about governments, and they show what happens when an automated decision is trusted over the person it is about.

## Robodebt

Australia's welfare agency used an automated system to recover what it said were overpayments. The system averaged a person's yearly income, from tax office data, across fortnightly pay periods and compared it with what they had reported to the welfare agency. People with uneven income, like casual workers, looked as though they had been overpaid when they had not. The government sent them debt notices anyway.

In 2019 the Federal Court declared the notices invalid. In 2023 a Royal Commission called the scheme a "crude and cruel mechanism" that was "neither fair nor legal," blamed a culture of "venality, incompetence and cowardice," and made 57 recommendations. One was a new body to oversee automated decision-making by government agencies.

## The Dutch childcare benefits scandal

In the Netherlands, the tax authority's anti-fraud measures for childcare benefits wrongly flagged thousands of families as fraudsters and demanded they repay benefits. The system was later found to be biased against parents with minority backgrounds. A parliamentary inquiry in 2020 called it an "unprecedented injustice," and the Dutch government resigned over it in 2021.

## What the APIs show

There is no provider to link to. These systems were internal to government and had no public interface at all. No one outside could see the rule being applied, test it against their own case, or check it before a letter arrived. The people affected found out how the system worked from courts and inquiries, years later.

## Why it matters

I have spent a lot of my career arguing that government should publish APIs. This is a different and stronger reason than the one I usually give. When a system makes decisions about people, the logic should be inspectable before it acts on them. A published rule, a way to test a case against it, and a record of each decision could have caught the averaging error in Robodebt in an afternoon. Automation without that is not efficiency. It is a faster way to be wrong at scale.

Sources: [iTnews](https://www.itnews.com.au/news/robodebt-report-calls-for-automated-decision-making-review-body-597734), [ACS Information Age](https://ia.acs.org.au/article/2023/crude-and-cruel-shameful-robodebt-findings-laid-bare.html), [AIhub](https://aihub.org/2023/08/03/the-flawed-algorithm-at-the-heart-of-robodebt), [ANU Reporter](https://reporter.anu.edu.au/all-stories/lessons-from-dutch-robodebt-restitution-means-little-without-reform).

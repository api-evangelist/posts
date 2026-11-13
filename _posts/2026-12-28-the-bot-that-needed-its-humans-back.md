---
published: false
layout: post
title: 'The Bot That Needed Its Humans Back'
date: 2026-12-28 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Automation
  - Customer Service
  - Klarna
  - AI
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act three: automate.*

In early 2024 Klarna said its AI assistant was doing the work of about 700 full-time customer service agents. The number later grew to around 800. It became the most-quoted example of AI replacing a whole category of jobs.

The details are messier. Much of that capacity was outsourced, staffed through the agency Teleperformance rather than by Klarna employees. Klarna says it shrank mostly through attrition and a hiring freeze, not layoffs. And by 2025 the CEO was saying service quality had dropped. Klarna began hiring humans again, describing an "Uber-type" flexible support workforce, and it moved staff from marketing, engineering and legal into customer service.

## The pattern

I think Klarna is a better story about automation than the headline was. The job did not vanish. It moved. First it moved out of the company to an outsourcer, then from the outsourcer to a model, and then partly back to people, this time on gig-style terms. Gartner has reportedly predicted that half of companies planning to cut service staff with AI will drop those plans by 2027.

Economists Daron Acemoglu and Pascual Restrepo have a phrase for this: "so-so technologies." They displace workers without delivering much productivity gain. Their work on industrial robots found that one more robot per thousand workers lowered employment and wages in the local labor market. That is the measured baseline the AI claims should be held against.

## What the APIs show

On APIs.io, [Klarna](https://apis.io/providers/klarna/) publishes 22 APIs and scores exemplar. [Zendesk](https://apis.io/providers/zendesk/), the help desk a lot of these AI agents plug into, publishes 150 and scores exemplar. [Intercom](https://apis.io/providers/intercom/) scores developing.

This is where I have to own my part. Well-designed support APIs are exactly what make it easy to drop a model between a customer and a human agent. Good APIs make automation cheap to try. They do not make it good.

## Why it matters

The honest lesson from Klarna is that "the AI does the work of 700 people" is a claim, not an outcome. The outcome showed up a year later in service quality and rehiring. If you are building the integration, measure what happens to the customer, not just the headcount.

Sources: [Reworked](https://www.reworked.co/employee-experience/klarna-claimed-ai-was-doing-the-work-of-700-people-now-its-rehiring/), [CX Today](https://www.cxtoday.com/?p=73560), [Entrepreneur](https://www.entrepreneur.com/business-news/heres-how-klarna-has-cut-staff-in-half-while-raising-pay-by-60), [NBER, Acemoglu and Restrepo](https://img.nber.org/papers/23285).

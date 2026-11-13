---
published: false
layout: post
title: 'Three Billion Profiles, One REST Call'
date: 2027-01-07 14:00:00 +0000
author: Kin Lane
tags:
  - API Economy
  - Dark Side Of The API Economy
  - Data Brokers
  - Privacy
  - Data Enrichment
  - FTC
---
*Part of [The Dark Side of the API Economy](https://apievangelist.com/2026/12/17/the-dark-side-of-the-api-economy/). Act two: extract.*

This is the story I find most uncomfortable to write, because it is about some of the best APIs in my own catalog.

In 2014 the Federal Trade Commission studied nine data brokers. It found an industry operating with "a fundamental lack of transparency," analyzing billions of data points to draw conclusions about almost every American consumer, and largely unregulated outside of finance, health and children's data. It asked Congress to pass a law. Twelve years later, there is still no general federal data broker law in the United States. In 2025 the FTC's preliminary work on surveillance pricing showed where some of that data ends up: in the price you are shown.

## What the APIs show

Here is the uncomfortable part. On APIs.io, [People Data Labs](https://apis.io/providers/peopledatalabs/) offers a REST API over a dataset of nearly three billion person profiles and scores exemplar. [ZoomInfo](https://apis.io/providers/zoominfo/) publishes 42 APIs and scores exemplar. [Leadspace](https://apis.io/providers/leadspace/) scores exemplar too. Their documentation, specifications and onboarding are among the best I track.

I want to be clear and fair. These are business-to-business data providers. They sell contact and company data for sales, marketing and recruiting. They were not the companies in the FTC's 2014 study, and nothing I have found says they did anything unlawful. I am not accusing them of anything.

My point is about the scorecard, including my own. The Kin Score measures how well a company publishes its API: the specification, the documentation, how easy it is to onboard, whether an agent can use it. It does not measure whether the people inside the dataset agreed to be there. A perfect developer experience on top of data about people who never knew they were in it is still a perfect developer experience. That is a limit of what I measure, and I should say so.

## Why it matters

APIs made personal data easy to buy. One authenticated request returns a profile that would have taken an investigator days to assemble. The industry has become very good at the interface and much less good at answering the question the FTC asked in 2014: does the person know?

I am going to think about whether provenance and consent belong somewhere in how I rate data APIs. If you have views on that, I want to hear them.

Sources: [Hunton (FTC report)](https://www.hunton.com/privacy-and-cybersecurity-law-blog/ftc-issues-report-data-broker-industry-recommends-legislation), [Nextgov](https://www.nextgov.com/digital-government/2014/05/ftc-lifts-veil-companies-sell-your-data/85231/), [Center for Digital Democracy](https://democraticmedia.org/publishings/ftc-databroker-report-chilling-analysis-out-control-us-commercial-data-surveillance-complex), [FTC surveillance pricing](https://ftc.gov/policy/advocacy-research/tech-at-ftc/2025/01/surveillance-pricing-update-work-ahead).

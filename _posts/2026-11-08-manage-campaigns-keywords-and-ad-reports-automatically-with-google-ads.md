---
published: true
layout: post
title: 'Manage Campaigns, Keywords And Ad Reports Automatically With Google Ads'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-campaigns-keywords-and-ad-reports-automatically-with-google-ads.png
date: 2026-11-08 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Google Ads
  - Digital Marketing Management
  - Marketing Management
  - Marketing Operations Management
  - Advertising
  - Digital Advertising
---

If you run search ads for your business, you know the routine. Log in, check what each campaign spent yesterday, pause the keywords that are burning money, raise the bids on the ones that convert, write a few new ads, and export a report for whoever asks how it is going. It is the same clicks every week, and the more campaigns you have, the more of your week it eats. Google Ads lets you do all of that through an API, which is a way for software, or an AI assistant working on your behalf, to make those same changes and pull those same numbers without anyone clicking through the dashboard. You can see everything I have catalogued about it on the [Google Ads profile on APIs.io](https://apis.io/providers/google-ads/).

## What Google Ads does

[Google Ads](https://ads.google.com/) is Google's advertising platform, where businesses buy placement in search results and across Google's other properties. The Google Ads API is the programmatic interface to it, the next generation of the older AdWords API, built so you can manage large or complex accounts and campaigns far more efficiently than by hand. There is also Google Ads Scripts, a JavaScript scripting interface that runs in a browser-based editor for automating changes and reporting inside an account.

## What you can get done

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

This is the heart of it: building and changing the campaigns, ad groups (the sets of ads and keywords inside a campaign), ads and keywords that make up your advertising. Anything you would change in the dashboard you can change in bulk from a spreadsheet, a script or an assistant.

- `POST /v25/customers/{customersId}/campaigns:mutate` creates, updates or removes campaigns.
- `POST /v25/customers/{customersId}/adGroups:mutate` creates ad groups in a campaign or changes their default bid and status.
- `POST /v25/customers/{customersId}/adGroupAds:mutate` adds, edits, pauses or removes ads across ad groups.
- `POST /v18/customers/{customerId}/adGroupCriteria:mutate` adds, changes or removes keywords, including pausing one or changing its bid.
- `POST /v25/customers/{customersId}/campaigns:enablePMaxBrandGuidelines` turns on Brand Guidelines for Performance Max campaigns, Google's automated campaign type.

### [Marketing Management](https://apis.io/capabilities/marketing-management/)

Reporting is where most of the weekly time goes. Google Ads has its own query language, GAQL, which reads like a simple database question ("clicks and cost by campaign for last week"). The API answers those questions directly, so the numbers can land in your own spreadsheet or dashboard.

- `POST /v18/customers/{customerId}/googleAds:search` runs a GAQL report and returns it page by page.
- `POST /v18/customers/{customerId}/googleAds:searchStream` streams a large report in one go.
- `POST /v25/audienceInsights:listInsightsEligibleDates` lists the date ranges audience insights data is available for.

### [Marketing Operations Management](https://apis.io/capabilities/marketing-operations-management/)

Budgets at the account level go through proposals, so finance and marketing can see a change before it takes effect.

- `POST /v25/customers/{customersId}/accountBudgetProposals:mutate` proposes a new account budget or a change to its spending limit.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

When an agency or a contractor leaves, removing their access should not wait for someone to remember.

- `POST /v25/customers/{customersId}/customerUserAccesses:mutate` changes a user's access role on an account or revokes it.

## Ask for it in plain language

The operations above are also described in our conversational phrasing overlays, which map everyday questions to the call that answers them, so an assistant knows which operation to reach for. These are the kinds of things you can ask:

- "How do I pull clicks and cost by campaign using a Google Ads Query Language query?"
- "Can I pause or remove ads in several ad groups at once?"
- "How do I add phrase or exact match keywords to an ad group?"
- "How do I propose a new account budget or change its spending limit?"
- "Can I remove someone's access to an account?"

You can see how one of them is put together in the [Google Ads Ad Groups API phrasing overlay](https://apis.io/overlays/google-ads/google-ads-ad-groups-api-phrasing-overlay/).

## Getting started

Access is self-serve, and Google Ads is a hosted service: your software calls Google's endpoint. Start with the [Google Ads API getting started guide](https://developers.google.com/google-ads/api/docs/start), read the [OAuth overview](https://developers.google.com/google-ads/api/docs/oauth/overview) for how your software signs in, and if you would rather stay inside the account, the [Google Ads Scripts guide](https://developers.google.com/google-ads/scripts/docs/start). When you get stuck, there is [Google Ads API support](https://developers.google.com/google-ads/api/support). On APIs.io, the [Google Ads profile](https://apis.io/providers/google-ads/) links the [Campaigns API](https://apis.io/apis/google-ads/google-ads-campaigns-api/), the [Keywords API](https://apis.io/apis/google-ads/google-ads-keywords-api/) and the [Reporting API](https://apis.io/apis/google-ads/google-ads-reporting-api/). Pick the one weekly chore that costs you the most time, usually the report, and automate that first.

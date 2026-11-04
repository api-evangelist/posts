---
published: true
layout: post
title: 'Build Audience Segments, Run A/B Tests And Manage Email Subscribers With Adobe Experience Cloud'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/build-audience-segments-run-ab-tests-and-manage-email-subscribers-with-adobe-experience-cloud.png
date: 2026-11-04 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Adobe Experience Cloud
  - Customer Segmentation Management
  - Digital Marketing Management
  - A/B Test Execution
  - Customer Data Management
  - Digital Marketing
  - Personalization
---

Your marketing team wants to know which visitors are worth talking to, send them the right message, and test whether a new page actually works better than the old one. If your company already pays for Adobe's marketing tools, a lot of that is clicking through screens by hand: building the same audience again, adding subscribers one at a time, copying a test setup. [Adobe Experience Cloud](https://apis.io/providers/adobe-experience-cloud/) exposes this work through an API, a way for software to talk directly to other software, so your other systems, a script or an AI assistant can do it for you.

## What Adobe Experience Cloud does

Adobe Experience Cloud is a suite of applications for digital marketing, analytics, advertising and commerce. It covers content management, personalization, customer journey orchestration (planning the sequence of messages a customer receives), audience segmentation, a real-time customer data platform, offer decisioning and campaigns across channels. Its parts carry their own names, including Adobe Analytics, Adobe Target for testing and personalization, Adobe Campaign for email, and Adobe Experience Platform for customer data. More on the [Adobe website](https://www.adobe.com/).

## What you can get done

### [Customer Segmentation Management](https://apis.io/capabilities/customer-segmentation-management/)

A segment is a group of customers defined by rules, such as "visited pricing twice this month". With 14 operations here, you can build segments from your own systems instead of rebuilding them by hand in each tool.

- `GET /api/{companyId}/segments` lists the Analytics segments you can use in reports.
- `POST /api/{companyId}/segments` creates a new Analytics segment.
- `PUT /api/{companyId}/segments/{segmentId}` changes the rules of an existing segment.
- `GET /target/audiences` lists the audiences defined in Adobe Target.
- `POST /target/audiences` defines a new audience with targeting rules.

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

In Adobe Campaign, a subscription service is a newsletter or mailing list. Managing them by API means a signup on your website can land in the right list immediately.

- `GET /campaign/profileAndServices/service` lists the mailing lists and subscription topics.
- `POST /campaign/profileAndServices/service` sets up a new newsletter or mailing list.
- `POST /campaign/profileAndServices/service/{servicePKey}/subscriptions` subscribes someone to it.

### [Customer Data Management](https://apis.io/capabilities/customer-data-management/)

A profile is everything Campaign knows about one subscriber. Keeping profiles in sync with your other systems keeps your emails going to the right address.

- `GET /campaign/profileAndServices/profile` finds subscribers, for example by email address.
- `POST /campaign/profileAndServices/profile` adds a new subscriber.
- `PATCH /campaign/profileAndServices/profile/{profilePKey}` changes just the fields that changed, such as an email.

### [A/B Test Execution](https://apis.io/capabilities/a-b-test-execution/)

An A/B test shows two versions of something to different visitors and measures which performs better. Adobe Target calls these activities.

- `GET /target/activities` lists the tests and personalization activities set up in your account.
- `POST /target/activities` creates a new A/B test.
- `GET /target/activities/{activityId}` shows the experiences, audiences and metrics behind one test.
- `PUT /target/activities/{activityId}` renames a test or changes its priority.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them.

- [Campaign Profile Subscription](https://apis.io/arazzos/adobe-experience-cloud/adobe-experience-cloud-campaign-profile-subscription-workflow/) creates a subscriber, creates a mailing list and subscribes one to the other.
- [Analytics Segment-Filtered Report](https://apis.io/arazzos/adobe-experience-cloud/adobe-experience-cloud-analytics-segment-report-workflow/) creates a segment, confirms it, then runs a report filtered by it.
- [Campaign Transactional Message](https://apis.io/arazzos/adobe-experience-cloud/adobe-experience-cloud-campaign-transactional-message-workflow/) sends a one-off message, such as an order confirmation, and checks until it is delivered.
- [Analytics Report Suite Discovery](https://apis.io/arazzos/adobe-experience-cloud/adobe-experience-cloud-analytics-report-suite-discovery-workflow/) finds your report suites and runs a report against one.
- [Experience Platform Batch Ingestion](https://apis.io/arazzos/adobe-experience-cloud/adobe-experience-cloud-experience-platform-batch-ingestion-workflow/) creates a dataset, loads a batch of data into it and waits for it to finish.

## Ask for it in plain language

We have written conversational overlays for Adobe Experience Cloud, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they map:

- "Which Adobe Analytics segments can I use in reports?"
- "How do I set up a new newsletter or mailing list in Campaign?"
- "Can I find Campaign subscribers by email address?"
- "Can I set up a new A/B test in Adobe Target through the API?"
- "Which audiences have we defined in Adobe Target?"

You can see one of them on the [Activities API phrasing overlay](https://apis.io/overlays/adobe-experience-cloud/adobe-experience-cloud-activities-api-phrasing-overlay/).

## Getting started

Adobe Experience Cloud is an enterprise product, a hosted service your company licenses and then calls. The developer documentation is split by product: [Analytics APIs](https://developer.adobe.com/analytics-apis/docs/2.0/), [Experience Platform APIs](https://developer.adobe.com/experience-platform-apis/) and [I/O Events](https://developer.adobe.com/events/docs/) for being notified when something changes. On APIs.io you can browse the [Adobe Experience Cloud profile](https://apis.io/providers/adobe-experience-cloud/), the [Audiences API](https://apis.io/apis/adobe-experience-cloud/adobe-experience-cloud-audiences-api/), the [Activities API](https://apis.io/apis/adobe-experience-cloud/adobe-experience-cloud-activities-api/) and the [Campaigns API](https://apis.io/apis/adobe-experience-cloud/adobe-experience-cloud-campaigns-api/). Ask whoever owns your Adobe account which of these products you already license, and start with the one your team clicks through most.

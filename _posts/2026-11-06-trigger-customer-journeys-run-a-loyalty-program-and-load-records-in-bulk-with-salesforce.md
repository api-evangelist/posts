---
published: true
layout: post
title: 'Trigger Customer Journeys, Run A Loyalty Program And Load Records In Bulk With Salesforce'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/trigger-customer-journeys-run-a-loyalty-program-and-load-records-in-bulk-with-salesforce.png
date: 2026-11-06 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Salesforce
  - Digital Marketing Management
  - Loyalty & Retention Management
  - Analytics & BI Management
  - Customer Sign-In
  - Environment Management
  - CRM
  - Sales
---

Your customer records live in Salesforce, and so does a lot of the work that happens around them: the welcome email when someone signs up, the points they earn in your loyalty scheme, the dashboard the sales director looks at on Monday. Most people touch all of that through the Salesforce screens. But when a new customer in your own app should land in a marketing journey the moment they register, or a hundred thousand records need loading from an old system overnight, that is API work. [Salesforce](https://apis.io/providers/salesforce/) exposes nearly everything in the platform through APIs, a way for software to talk directly to other software, so your own systems, a script or an AI assistant can do it for you.

## What Salesforce does

[Salesforce](https://www.salesforce.com/) is a cloud-based customer relationship management (CRM) platform that provides a comprehensive suite of enterprise applications for sales, service, marketing, commerce, analytics and AI. Its platform exposes REST, SOAP, Bulk, Streaming, GraphQL, Metadata, Tooling and Pub/Sub APIs, alongside the Agentforce agent and models APIs, letting developers query, write and subscribe to org data programmatically. On APIs.io we track those separately, from the [REST API](https://apis.io/apis/salesforce/salesforce-rest-api/) most integrations start with, to the [Streaming API](https://apis.io/apis/salesforce/salesforce-streaming-api/), the [Reports and Dashboards REST API](https://apis.io/apis/salesforce/salesforce-reports-and-dashboards-rest-api/) and the [Analytics REST API](https://apis.io/apis/salesforce/salesforce-analytics-rest-api/).

## What you can get done

We have mapped Salesforce's operations to 13 business capabilities. These are the five most people will actually reach for.

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

A journey in Marketing Cloud is a sequence of emails, texts and waits that a contact moves through. These operations let your own software push a contact into one, or send a single transactional email or text straight away.

- `GET /interaction/v1/interactions` lists the journeys you have, optionally only the published ones.
- `POST /interaction/v1/events` fires the entry event that drops a contact into a journey, with extra data to personalise it.
- `POST /messaging/v1/email/messages` sends a transactional email from a triggered send definition, personalised per recipient.
- `POST /messaging/v1/sms/messages` sends a text message the same way.
- `GET /messaging/v1/email/messages/{messageKey}` checks whether a triggered email was delivered, and shows any errors.

### [Loyalty & Retention Management](https://apis.io/capabilities/loyalty-retention-management/)

A loyalty program has members, points, vouchers and a ledger of transactions. Running it by API is how a till, a website or a partner's system can enrol and reward people without anyone keying it into Salesforce. There are ten operations.

- `POST /data/v64.0/loyalty-programs/{loyaltyProgramName}/individual-member-enrollments` enrols a new individual member, with their channel and promotion preferences.
- `POST /data/v64.0/loyalty-programs/{loyaltyProgramName}/corporate-member-enrollments` enrols a business account rather than a person.
- `GET /data/v64.0/connect/loyalty/member/{memberId}/memberbenefits` lists the benefits a member is entitled to.
- `POST /data/v64.0/loyalty/programs/{loyaltyProgramName}/members/{membershipNumber}/vouchers/{voucherCode}/redeem` redeems a voucher, in part or in full.
- `POST /data/v64.0/connect/realtime/loyalty/programs/{loyaltyProgramName}` processes transaction journals in real time, several at once.

### [Analytics & BI Management](https://apis.io/capabilities/analytics-bi-management/)

CRM Analytics is Salesforce's own dashboard and dataset product. These operations let another tool list what exists and read how a dashboard is built, which is the first step to feeding it somewhere else.

- `GET /dashboards` lists the dashboards you can access, searchable by name within an app folder.
- `GET /dashboards/{dashboardId}` reads a dashboard's widgets and steps.
- `GET /datasets` lists the datasets, and `GET /dataflows` lists the dataflows and recipes that load them.
- `GET /lenses` lists saved explorations, the individual charts people have built and kept.

### [Customer Sign-In](https://apis.io/capabilities/customer-sign-in/)

Headless identity means your own app handles registration and login screens while Salesforce handles the accounts behind them. Three operations cover the usual flows.

- `POST /services/auth/headless/init/registration` signs up a new customer from your own app, with the one-time code sent by email or SMS.
- `POST /services/auth/headless/init/passwordless/login` lets users log in with a one-time code instead of a password.
- `POST /services/auth/headless/forgot_password` starts a password reset from your own login screen.

### [Environment Management](https://apis.io/capabilities/environment-management/)

A sandbox is a copy of your Salesforce org for testing. Creating and refreshing them by API is how a team keeps test environments current without a request to an administrator.

- `POST /data/v64.0/tooling/sobjects/SandboxInfo` creates a sandbox, or clones an existing one instead of copying production.
- `PATCH /data/v64.0/tooling/sobjects/SandboxInfo/{SANDBOX_INFO_ID}` refreshes an existing sandbox, with automatic activation if you want it.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. They are written in Arazzo, an open format for describing them, and Salesforce has 23 of them on APIs.io.

- [Create Account with Contact](https://apis.io/arazzos/salesforce/salesforce-create-account-with-contacts-workflow/) creates a company record, then a person who belongs to it.
- [Create Lead and Follow-up Records](https://apis.io/arazzos/salesforce/salesforce-create-lead-and-convert-workflow/) creates a lead, then the task and campaign member records that move it along.
- [Create Opportunity with Contact Role](https://apis.io/arazzos/salesforce/salesforce-create-opportunity-with-contact-role-workflow/) opens a deal and links a contact to it.
- [Create Case for Contact](https://apis.io/arazzos/salesforce/salesforce-create-case-for-contact-workflow/) files a support case against an existing contact and account.
- [Bulk Insert Records](https://apis.io/arazzos/salesforce/salesforce-bulk-insert-records-workflow/) runs the whole bulk load: create the job, upload the file, close it, wait, and read the results.
- [Bulk Query](https://apis.io/arazzos/salesforce/salesforce-bulk-query-workflow/) does the same in reverse, pulling a large result set out as a file.

## Ask for it in plain language

We have written conversational overlays for Salesforce, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are 153 of them. These are the kinds of questions they map:

- "How do I push a contact into a journey from my own app?"
- "Was my triggered email delivered to the recipient?"
- "How do I enroll a new individual member in my loyalty program?"
- "What benefits is a loyalty program member entitled to?"
- "Can users log in with a one-time code instead of a password?"
- "Is there an API call to refresh an existing sandbox?"

You can see one of them on the [Accounts API phrasing overlay](https://apis.io/overlays/salesforce/salesforce-accounts-api-phrasing-overlay/).

## Getting started

Salesforce is a freemium, hosted service with self-serve signup: a free developer edition lets you call the API straight away, and the paid clouds add the marketing, loyalty and analytics products above. The [REST API guide](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/) is the place to start, with its [authentication](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_understanding_authentication.htm) page explaining how your app is granted access; the [Streaming](https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/) and [Metadata](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/) guides cover events and customisation. On APIs.io you can browse the [Salesforce profile](https://apis.io/providers/salesforce/), the [REST API](https://apis.io/apis/salesforce/salesforce-rest-api/), the [Reports and Dashboards REST API](https://apis.io/apis/salesforce/salesforce-reports-and-dashboards-rest-api/) and the [Tooling API](https://apis.io/apis/salesforce/salesforce-tooling-api/). Pick the one hand-off between your own systems and Salesforce that someone currently does by export and import, and automate that first.

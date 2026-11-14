---
published: true
layout: post
title: 'Send Marketing Emails, Manage Campaigns And Update Customer Profiles With Iterable'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-marketing-emails-manage-campaigns-and-update-customer-profiles-with-iterable.png
date: 2026-11-14 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Iterable
  - Customer Data Management
  - Digital Marketing Management
  - Demand Generation Management
  - Email
  - Marketing Automation
---

If you market to customers by email, text or app notifications, the messages are the easy part. The work is keeping customer profiles current, getting the right template out in the right language, and stopping a campaign that went out wrong. [Iterable](https://apis.io/providers/iterable/) handles that kind of cross-channel marketing, and it exposes it through APIs, so your store, your CRM or an AI assistant can update customers and trigger messages without someone logging in to do it.

## What Iterable does

[Iterable](https://iterable.com/) calls itself an AI customer engagement platform for marketing across email, push, SMS, in-app and web channels. Its developer platform offers REST APIs, export APIs, webhooks and SDKs for web, iOS, Android and React Native, so the same customer data can follow people from your website into your mobile app.

## What you can get done

### [Customer Data Management](https://apis.io/capabilities/customer-data-management/)

Every message is only as good as the profile behind it. These calls keep customer records and their subscription preferences in step with your other systems.

- `POST /api/users/bulkUpdate` updates many customer profiles in one request.
- `POST /api/users/bulkUpdateSubscriptions` changes subscription preferences for many customers at once.
- `GET /api/users/byUserId` looks up a customer by their user ID.
- `POST /api/auth/jwts/invalidate` signs a customer out everywhere, for example after a password reset.

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

This is sending: a campaign email to one person, a transactional email such as a receipt, or cancelling one that should not go.

- `POST /api/email/target` sends an email from an existing campaign to one address.
- `POST /email/target` sends a transactional email, with attachments.
- `POST /api/email/cancel` cancels an email scheduled for a specific customer.
- `GET /api/email/viewInBrowser` shows exactly how a sent email rendered for someone.

### [Demand Generation Management](https://apis.io/capabilities/demand-generation-management/)

Demand generation is the work of creating interest, mostly through campaigns. These calls let you run them from your own tools.

- `GET /api/campaigns` pages through your campaigns, filtered by state.
- `POST /api/campaigns/activateTriggered` turns on a triggered campaign.
- `POST /api/campaigns/abort` stops a blast campaign that is already sending.
- `POST /api/campaigns/archive` archives several campaigns at once.

### [Content Marketing Management](https://apis.io/capabilities/content-marketing-management/)

Templates are the reusable designs behind your messages. Managing them through the API helps when you run many languages or brands.

- `GET /api/templates` lists templates, for example only your SMS ones.
- `GET /api/templates/email/get` fetches an email template in a given locale, such as Spanish.
- `POST /api/templates/email/preview` renders a template with sample data before you send it.
- `POST /api/templates/bulkDelete` deletes several templates at once.

### [Application Communications](https://apis.io/capabilities/application-communications/)

- `GET /api/inApp/web/getMessages` fetches the in-app messages to show a customer on your website.

## Ask for it in plain language

Iterable has 25 phrasing overlays on APIs.io. They map plain questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of questions they cover:

- How do I stop a blast campaign that is already sending?
- Can I fetch the Spanish version of an email template?
- Can I see the rendered HTML of an email template with sample data before sending?
- Can I cancel an email that's scheduled for a specific user?
- Can I update subscription preferences for many users at once?

The [Iterable Campaigns API phrasing overlay](https://apis.io/overlays/iterable/iterable-campaigns-api-phrasing-overlay/) is a good one to start with.

## Getting started

Iterable is a hosted service you call over the web, freemium with self-serve signup; plans are in the [pricing section of its APIs.io profile](https://apis.io/providers/iterable/#pricing). Start with [Iterable's API endpoints and sample payloads](https://support.iterable.com/hc/en-us/articles/204780579-Iterable-API-Endpoints-and-Sample-Payloads), the [Web SDK](https://github.com/Iterable/iterable-web-sdk) and the [iOS SDK guide](https://support.iterable.com/hc/en-us/articles/360035018152-Iterable-s-iOS-SDK).

The [Iterable profile on APIs.io](https://apis.io/providers/iterable/) lists every API, including the [Export API](https://apis.io/apis/iterable/export-api/), the [Web SDK](https://apis.io/apis/iterable/web-sdk/) and the [Android SDK](https://apis.io/apis/iterable/android-sdk/). A good first step is to sync customer profiles, since every campaign depends on them.

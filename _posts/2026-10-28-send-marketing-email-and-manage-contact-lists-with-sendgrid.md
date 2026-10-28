---
published: true
layout: post
title: 'Send Marketing Email And Manage Contact Lists With SendGrid'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/send-marketing-email-and-manage-contact-lists-with-sendgrid.png
date: 2026-10-28 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - SendGrid
  - Customer Data Management
  - Digital Marketing Management
  - Customer Segmentation Management
  - Email
  - Marketing
---

If you run a business, you probably need to do two things with email that feel like they should be simpler than they are: keep a clean list of the people you are talking to, and get the right message in front of the right slice of them at the right time. Most people do this by clicking around in a marketing tool. [SendGrid](https://apis.io/providers/sendgrid/) lets you do the same work through an API, which is just a way for software, whether it is your own website, a spreadsheet integration, or an AI assistant, to make the request for you instead of you clicking the buttons.

## What SendGrid does

SendGrid is a cloud-based email delivery platform, acquired by Twilio in 2019, that handles both transactional email (receipts, password resets, the messages your app sends one at a time) and marketing email (the newsletters and campaigns you send to a list). Beyond sending, it covers contacts and lists, segments, address validation, suppression management (the list of people who should not get mail from you), domain authentication so your mail does not land in spam, and delivery statistics. You can read more on the [SendGrid website](https://sendgrid.com/en-us).

## What you can get done

### Keep your contacts in one place

The [Customer Data Management](https://apis.io/capabilities/customer-data-management/) capability is about the people on your list. When someone signs up on your website or buys something, your software can add them to SendGrid straight away, and update them when their details change, so your list never drifts out of date.

- `PUT /v3/marketing/contacts` adds new contacts or updates the ones you already have.
- `DELETE /v3/marketing/contacts` removes contacts, for example when someone asks to be forgotten.
- `GET /v3/marketing/contacts` gives you a quick preview of recently added contacts.
- `GET /v3/marketing/contacts/{id}` pulls every field stored for one person.

### Run your campaigns

The [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/) capability covers the campaigns themselves: creating them, reviewing them and cleaning up the old ones.

- `POST /v3/campaigns` creates a marketing campaign.
- `GET /v3/campaigns` lists the campaigns you have created.
- `GET /v3/campaigns/{campaign_id}` shows the content and settings of one campaign.
- `DELETE /v3/campaigns/{campaign_id}` removes a campaign you no longer need.

### Talk to the right slice of your list

[Customer Segmentation Management](https://apis.io/capabilities/customer-segmentation-management/) is how you stop sending everything to everyone. A segment is a saved filter, such as "customers who bought in the last month", that keeps itself up to date as your contacts change.

- `POST /v3/marketing/segments/2.0` builds a segment from a query.
- `GET /v3/marketing/segments/2.0` lists the segments you have built.
- `PATCH /v3/marketing/segments/2.0/{segment_id}` renames a segment or changes its rules.
- `GET /v3/marketing/segments/2.0/{segment_id}` shows how a segment is defined, with sample contacts.

### Give each team or client its own account

If you are an agency or have several brands, [Tenant Provisioning & Lifecycle](https://apis.io/capabilities/tenant-provisioning-lifecycle/) lets you run separate subusers under one parent account.

- `GET /v3/subusers` lists the subusers under your account.
- `POST /v3/subusers` creates a new subuser for a customer or team.
- `PATCH /v3/subusers/{subuser_name}` switches a subuser off or back on.
- `DELETE /v3/subusers/{subuser_name}` deletes a subuser permanently.

## Workflows that put it together

A workflow is a recipe: several of those calls, in order, that together finish a real job. APIs.io catalogs 19 of them for SendGrid, including:

- [Campaign Test Then Send](https://apis.io/arazzos/sendgrid/sendgrid-campaign-test-then-send-workflow/) creates a campaign, sends a test to yourself, then sends it for real.
- [Create List and Add Contacts](https://apis.io/arazzos/sendgrid/sendgrid-create-list-add-contacts-workflow/) makes a list, loads contacts into it and confirms they landed.
- [Create and Schedule Single Send](https://apis.io/arazzos/sendgrid/sendgrid-create-schedule-singlesend-workflow/) drafts a one-off email, schedules it and reads it back.
- [Create Segment From List](https://apis.io/arazzos/sendgrid/sendgrid-create-segment-from-list-workflow/) builds a list, filters a segment from it and refreshes it.

## Ask for it in plain language

We have written a conversational overlay for SendGrid that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I add new contacts or update existing ones in Marketing Campaigns?"
- "How can I delete several marketing contacts at once by their IDs?"
- "How do I build a segment of contacts using a SQL-style query?"
- "Can I temporarily switch off a subuser without deleting it?"
- "Which campaigns have I created in legacy Marketing Campaigns?"

You can see one of them in the [SendGrid Account API phrasing overlay](https://apis.io/overlays/sendgrid/sendgrid-account-api-phrasing-overlay/).

## Getting started

SendGrid is freemium with a free trial and self-serve signup, and it is a hosted service, so you call their endpoint rather than running anything yourself. The documentation lives on the Twilio site, including the references for [alerts](https://www.twilio.com/docs/sendgrid/api-reference/alerts) and [API keys](https://www.twilio.com/docs/sendgrid/api-reference/api-keys). On APIs.io you can browse the [SendGrid profile](https://apis.io/providers/sendgrid/), along with the [Account API](https://apis.io/apis/sendgrid/sendgrid-account-api/) and [Alerts API](https://apis.io/apis/sendgrid/sendgrid-alerts-api/). If your list lives in a spreadsheet today, start by getting it into SendGrid contacts, and everything else builds from there.

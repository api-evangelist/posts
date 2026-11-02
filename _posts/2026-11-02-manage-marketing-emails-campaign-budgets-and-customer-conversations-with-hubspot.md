---
published: true
layout: post
title: 'Manage Marketing Emails, Campaign Budgets And Customer Conversations With HubSpot'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-marketing-emails-campaign-budgets-and-customer-conversations-with-hubspot.png
date: 2026-11-02 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - HubSpot
  - Digital Marketing Management
  - Marketing Operations Management
  - Customer Inquiry Management
  - Consent & Preferences
  - CRM
  - Marketing Automation
---

Your marketing budget lives in a spreadsheet, your campaign emails live in one tool, and customer questions pile up in a shared inbox. Someone spends part of every week copying things between them, and the numbers are out of date by the time anyone reads them. If your business already runs on HubSpot, or you are thinking about it, much of that copying can stop. [HubSpot](https://apis.io/providers/hubspot/) makes this work available through an API, a way for software to talk directly to other software, so your own applications or an AI assistant can do the work for you.

## What HubSpot does

HubSpot describes itself as an AI-native customer platform built around what it calls the Smart CRM. A CRM, or customer relationship management system, is the shared record of who your customers are and what has happened with them. HubSpot puts marketing, sales, customer service, content, commerce and operations on that one record. Nearly all of that is also open to software, from contacts and deals to email, website pages and payments. HubSpot says it offers a hosted MCP server too, which is a standard way of connecting AI agents to a service. More on the [HubSpot website](https://www.hubspot.com/).

## What you can get done

The capabilities below are a sample of the ones our catalog maps for HubSpot, chosen for the jobs that tend to eat a marketing or service team's week.

### [Run your marketing emails and landing pages](https://apis.io/capabilities/digital-marketing-management/)

With 43 operations in this capability, most of a campaign's production work can be done by software. The value is in repetition. If you launch a similar campaign every month, or in several languages, your systems can copy last month's version and change what is different, so nobody has to rebuild it by hand.

- `POST /marketing/emails/2026-09/clone` duplicates an existing marketing email.
- `POST /marketing/emails/2026-09/ab-test/create-variation` creates a second version of an email, so you can test two subject lines against each other.
- `PATCH /marketing/emails/2026-09/{emailId}` changes an email's settings, such as its subject line or publish date.
- `GET /cms/pages/2026-09/landing-pages` lists your landing pages.
- `POST /cms/pages/2026-09/landing-pages` creates a new landing page.

### [Keep campaign budgets in one place](https://apis.io/capabilities/marketing-operations-management/)

Knowing what a campaign has spent usually means chasing a person. Recording budget and spend against the campaign itself means finance systems and marketing tools can work from the same figures, and a simple question like how much is left gets an immediate answer.

- `POST /marketing/campaigns/2026-03/{campaignGuid}/budget` adds a budget line to a campaign.
- `POST /marketing/campaigns/2026-03/{campaignGuid}/spend` records money spent on a campaign.
- `GET /marketing/campaigns/2026-03/{campaignGuid}/budget/totals` shows total budget, spend and what remains.
- `PUT /marketing/campaigns/2026-03/{campaignGuid}/spend/{spendId}` corrects a spend item already logged.

### [Work through customer conversations](https://apis.io/capabilities/customer-inquiry-management/)

Customers reach you by more than one route, and HubSpot gathers those conversations into threads in shared inboxes. Being able to read and reply to those threads from software opens up useful options, such as drafting replies with an AI assistant, flagging urgent ones or closing out the ones that are resolved.

- `GET /conversations/v3/conversations/threads` lists conversation threads, and can filter to open or closed ones.
- `GET /conversations/v3/conversations/threads/{threadId}/messages` retrieves every message in a thread.
- `POST /conversations/v3/conversations/threads/{threadId}/messages` sends a reply on a thread.
- `PATCH /conversations/v3/conversations/threads/{threadId}` closes, reopens or restores a thread.

### [Respect what people have opted out of](https://apis.io/capabilities/consent-preferences/)

Emailing someone who has unsubscribed damages trust and can create legal trouble. If you keep customer data in more than one system, those systems need to agree about who has said no. These operations let other tools check and update that status in HubSpot instead of relying on an occasional file export.

- `GET /communication-preferences/2026-09/statuses/{subscriberIdString}` shows which subscriptions a contact has opted into.
- `POST /communication-preferences/2026-09/statuses/{subscriberIdString}` changes a contact's status for one subscription.
- `GET /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all` checks whether a contact opted out of everything.
- `POST /communication-preferences/2026-09/links/generate` creates a link where a subscriber can manage their preferences.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 23 for HubSpot, and many are the small routine tasks that fill up a day:

- [Create a Contact With a Company](https://apis.io/arazzos/hubspot/hubspot-create-contact-with-company-workflow/) creates both records and links them together.
- [Create a Deal With Associations](https://apis.io/arazzos/hubspot/hubspot-create-deal-with-associations-workflow/) creates a deal and connects it to an existing contact and company.
- [Advance a Deal Stage](https://apis.io/arazzos/hubspot/hubspot-advance-deal-stage-workflow/) finds a deal by name and moves it to the next stage of your sales pipeline.
- [Add a Note to a Record](https://apis.io/arazzos/hubspot/hubspot-add-note-to-record-workflow/) creates a note and attaches it to a customer record.
- [Batch Import Contacts](https://apis.io/arazzos/hubspot/hubspot-batch-import-contacts-workflow/) creates a set of contacts, then reads them back to verify they arrived.
- [Create and Publish a CMS Page](https://apis.io/arazzos/hubspot/hubspot-create-cms-page-workflow/) creates a website page as a draft, then publishes it.

## Ask for it in plain language

Our conversational overlays for HubSpot map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How much budget is left on my marketing campaign?"
- "Can I add a B version to a marketing email so I can test two subject lines?"
- "Can I reply to a customer conversation thread through the API?"
- "Has this contact unsubscribed from all emails?"
- "Can I make a copy of an existing marketing email instead of building it from scratch?"

You can browse one in the [HubSpot A/B Tests phrasing overlay](https://apis.io/overlays/hubspot/hubspot-a-b-tests-api-phrasing-overlay/).

## Getting started

HubSpot is freemium with self-serve signup, though what your account can do through the API will depend on your plan, so check that with your developer early. They will want HubSpot's documentation, starting with whichever area you need, such as [sales pipelines](https://developers.hubspot.com/docs/api/crm/pipelines) or [products](https://developers.hubspot.com/docs/api/crm/products). On APIs.io, see the [HubSpot profile](https://apis.io/providers/hubspot/), the [Pipelines API](https://apis.io/apis/hubspot/hubspot-pipelines-api/), the [Forms API](https://apis.io/apis/hubspot/hubspot-forms-api/) and the [Marketing Events API](https://apis.io/apis/hubspot/hubspot-marketing-events-api/). Write down the one thing your team copies into or out of HubSpot by hand most often, because that is your first project.

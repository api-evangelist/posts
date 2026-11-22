---
published: true
layout: post
title: 'Automate Landing Pages, Email Templates And Sales Opportunities With Marketo'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/automate-landing-pages-email-templates-and-sales-opportunities-with-marketo.png
date: 2026-11-22 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Marketo
  - Digital Marketing Management
  - Marketing Management
  - Opportunity & Pipeline Management
  - Marketing Automation
  - B2B
---

If your marketing team runs on Marketo, a lot of their week probably goes to clicking: cloning last quarter's landing page, approving email templates, copying leads and opportunities between Marketo and the other systems the business runs on. Every one of those clicks can be done by software instead. Marketo exposes the work through APIs, a way for one piece of software, or an AI assistant, to ask another to read data or do something on your behalf. I keep what I know about Marketo on its [APIs.io profile](https://apis.io/providers/marketo/).

## What Marketo does

Marketo, an Adobe company, builds B2B marketing automation software for account-based marketing, lead management, email marketing and campaign execution. The product is now called Adobe Marketo Engage. Its APIs cover the lead database, meaning the people, companies, opportunities, lists and campaigns, as well as the assets marketers build, such as emails, landing pages, forms, templates and snippets, plus the users and workspaces that run it. Each customer gets their own address for the API, tied to their Marketo subscription. The parent company is at [adobe.com](https://www.adobe.com/).

## What you can get done

### [Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/)

Landing pages are where campaigns turn into leads. Instead of rebuilding pages by hand for every event or region, your software can find a page, clone it, update it and push the draft through approval.

- `GET /rest/asset/v1/landingPage/byName.json` finds a landing page by its name.
- `GET /rest/asset/v1/landingPage/{id}.json` fetches a landing page by its ID.
- `POST /rest/asset/v1/landingPage/{id}/clone.json` clones a page as the starting point for a new one.
- `POST /rest/asset/v1/landingPage/{id}.json` updates the page's details.
- `POST /rest/asset/v1/landingPage/{id}/approveDraft.json` approves the draft so it goes live.

### [Marketing Management](https://apis.io/capabilities/marketing-management/)

Email templates are the backbone of every newsletter and nurture program. Managing them through the API keeps brand standards consistent across teams and workspaces.

- `GET /rest/asset/v1/emailTemplate/byName.json` finds a template by name.
- `GET /rest/asset/v1/emailTemplate/{id}.json` fetches a template by ID.
- `POST /rest/asset/v1/emailTemplate/{id}/clone.json` clones a template.
- `POST /rest/asset/v1/emailTemplate/{id}.json` updates the template's details.
- `POST /rest/asset/v1/emailTemplate/{id}/approveDraft.json` approves a template draft.

### [Content Marketing Management](https://apis.io/capabilities/content-marketing-management/)

Snippets are reusable blocks of content, a footer, a disclaimer, a promotion, that appear across many emails and pages. Change the snippet once and every place it is used changes with it.

- `GET /rest/asset/v1/snippet/{id}.json` fetches a snippet.
- `GET /rest/asset/v1/snippet/{id}/content.json` reads the snippet's content.
- `POST /rest/asset/v1/snippet/{id}/clone.json` clones a snippet.
- `POST /rest/asset/v1/snippet/{id}/approveDraft.json` approves a snippet draft.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

When people join or leave the marketing team, their Marketo access should follow automatically from your HR or identity system rather than waiting for someone to remember.

- `GET /userservice/management/v1/users/allusers.json` lists users.
- `POST /userservice/management/v1/users/invite.json` invites a new user.
- `GET /userservice/management/v1/users/roles.json` lists the roles you can assign.
- `GET /userservice/management/v1/users/workspaces.json` lists workspaces.
- `POST /userservice/management/v1/users/{userid}/delete.json` removes a user.

### [Opportunity & Pipeline Management](https://apis.io/capabilities/opportunity-pipeline-management/)

Opportunities are the deals sales is working. Keeping them in sync with Marketo is what lets marketing see which campaigns actually produced revenue.

- `GET /rest/v1/opportunities.json` reads opportunities.
- `POST /rest/v1/opportunities.json` creates or updates opportunities in one call.
- `POST /rest/v1/opportunities/delete.json` deletes opportunities.
- `GET /rest/v1/opportunities/schema/fields.json` lists the fields an opportunity carries.

## Getting started

Marketo lists self-serve signup and is a hosted service you call directly. Whatever I have recorded about cost is in the [Pricing section of the profile](https://apis.io/providers/marketo/#pricing). Adobe's documentation covers the [REST API](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/rest/rest-api), [authentication](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/rest/authentication) and [custom services](https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/rest/custom-services), which is where you create the credentials an integration uses.

On APIs.io, start with the [Marketo Campaigns API](https://apis.io/apis/marketo/marketo-campaigns-api/), then the [Marketo Emails API](https://apis.io/apis/marketo/marketo-emails-api/) and the [Marketo Email Templates API](https://apis.io/apis/marketo/marketo-email-templates-api/). Everything else is on the [Marketo profile](https://apis.io/providers/marketo/). Pick the most repetitive task your team does in Marketo each week, and automate that one first.

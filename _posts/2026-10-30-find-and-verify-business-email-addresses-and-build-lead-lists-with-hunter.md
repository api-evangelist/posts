---
published: true
layout: post
title: 'Find And Verify Business Email Addresses And Build Lead Lists With Hunter'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/find-and-verify-business-email-addresses-and-build-lead-lists-with-hunter.png
date: 2026-10-30 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Hunter
  - Company & Contact Data
  - Opportunity & Pipeline Management
  - Demand Generation Management
  - Lead Generation
  - Sales Intelligence
---

If you sell to other businesses, you know the job: you have a list of companies you would like to work with, and you need to reach the right person at each one. So you end up guessing at addresses, watching emails bounce, and pasting names into a spreadsheet that goes stale within a month. [Hunter](https://apis.io/providers/hunter/) does this work, and it does it through an API, a way for software to talk directly to other software, so your sales tools, a script or an AI assistant can find contacts, save them as leads and start outreach without all the copying.

## What Hunter does

Hunter is an email finding, verification and business-to-business prospecting platform. It finds the professional email addresses associated with a company's web domain, predicts an address for a named person, checks whether an address can actually receive mail, and fills in details about people and companies. It also helps you discover target companies, either with filters or by describing them in ordinary language, and manages the leads, lists and outreach sequences you build from all of that. Hunter also runs its own MCP server, the connector standard AI assistants use to call tools. More on the [Hunter website](https://www.hunter.io/).

## What you can get done

### Find companies and the people inside them

Company and contact data is the research part of the job. Rather than an assistant spending an afternoon on company websites, your tools can ask for companies that fit your ideal customer, see who is there and fill in what your records are missing. This is called enrichment: starting with a little information, such as one email address, and getting back the rest of the picture.

- `POST /discover` finds companies matching your ideal customer profile, including from a plain-English description.
- `GET /domain-search` finds the email addresses associated with a company's domain.
- `GET /discover/people` finds people matching your filters.
- `GET /people/find` fills in details about a person.
- `GET /companies/find` fills in details about a company.
- `GET /combined/find` does both for a single person and their company.

### Keep your leads in one place

[Opportunity & Pipeline Management](https://apis.io/capabilities/opportunity-pipeline-management/) is how you keep track of the people you found. A lead is a potential customer you have decided is worth contacting. If leads are saved automatically, your list stays current and no one has to reconcile spreadsheets at the end of the month.

- `GET /leads` lists the leads saved in your account.
- `POST /leads` adds a new lead.
- `PUT /leads` adds a lead or updates them if the email is already there, which helps prevent duplicates.
- `GET /leads/{id}` shows everything stored about one lead.
- `PATCH /leads/{id}` updates a lead.

### Run your outreach

[Demand Generation Management](https://apis.io/capabilities/demand-generation-management/) here means email sequences: a series of messages that go out in order until someone replies. Once this is in reach of software, a newly qualified lead can enter a sequence the moment they are ready, instead of waiting for someone to get to it.

- `GET /campaigns` lists your email sequences.
- `POST /campaigns/{id}/recipients` enrolls people in a sequence.
- `DELETE /campaigns/{id}/recipients` cancels scheduled emails to certain people.
- `POST /campaigns/{id}/start` starts sending.
- `POST /campaigns/{id}/follow-ups` adds a follow-up step.

### Tell your other systems when something happens

[Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/) sets up webhooks, which are messages Hunter sends to a web address of yours when something happens, so your CRM (the system that tracks your customer relationships) stays up to date.

- `GET /webhooks` lists your webhooks.
- `POST /webhooks` creates one.
- `PATCH /webhooks/{id}` updates one.

### Control who can connect to your account

[Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/) looks after API keys, the passwords your software uses to connect. Giving each tool its own key means you can shut off one without disturbing the others.

- `GET /api-keys` lists your keys.
- `POST /api-keys` creates one.
- `DELETE /api-keys/{id}` removes one.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 10 for Hunter, including:

- [Domain Search to Build a Verified List](https://apis.io/arazzos/hunter/hunter-domain-search-build-list-workflow/) searches a domain, creates a list, verifies the top email and saves it as a lead.
- [Domain Search, Find, and Verify](https://apis.io/arazzos/hunter/hunter-domain-search-find-verify-workflow/) searches a domain, finds a named person's address and verifies it.
- [Find, Verify, and Add Campaign Recipient](https://apis.io/arazzos/hunter/hunter-find-verify-add-recipient-workflow/) finds someone's email, verifies it and adds it to a campaign when it is valid.
- [Enrich, Verify, and Create Lead](https://apis.io/arazzos/hunter/hunter-enrich-verify-create-lead-workflow/) fills in a person's details from an email, verifies the address and saves a verified lead.
- [Account-Guarded Domain Search](https://apis.io/arazzos/hunter/hunter-account-guarded-domain-search-workflow/) checks your remaining search quota before running a search.

## Ask for it in plain language

Our conversational overlay for Hunter maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I find companies that fit my ideal customer profile?"
- "Can I save a lead without creating a duplicate if that email is already in the list?"
- "How do I enroll new people into an email sequence?"
- "How do I stop a campaign from sending any more emails to certain people?"
- "Can I search for companies with a plain-English description instead of filters?"

You can see one in the [Hunter Campaigns phrasing overlay](https://apis.io/overlays/hunter/hunter-campaigns-api-phrasing-overlay/).

## Getting started

Hunter has a free tier with self-serve signup, and you call its hosted service. Start with the documentation for [domain search](https://hunter.io/api-documentation/v2#domain-search), the [email finder](https://hunter.io/api-documentation/v2#email-finder) and the [email verifier](https://hunter.io/api-documentation/v2#email-verifier). On APIs.io, see the [Hunter profile](https://apis.io/providers/hunter/), the [Email Verifier API](https://apis.io/apis/hunter/hunter-email-verifier-api/), the [Email Finder API](https://apis.io/apis/hunter/hunter-email-finder-api/) and the [Leads API](https://apis.io/apis/hunter/hunter-leads-api/). Try it on the ten companies at the top of your list, and verify every address before you send anything.

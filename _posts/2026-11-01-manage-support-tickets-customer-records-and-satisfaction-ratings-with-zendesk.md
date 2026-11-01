---
published: true
layout: post
title: 'Manage Support Tickets, Customer Records And Satisfaction Ratings With Zendesk'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-support-tickets-customer-records-and-satisfaction-ratings-with-zendesk.png
date: 2026-11-01 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Zendesk
  - Customer Inquiry Management
  - Customer Data Management
  - Customer Feedback Management
  - Customer Service
  - Help Desk
---

Customer questions are arriving by email, chat and phone, someone on your team is copying details from one system to another, and an unhappy rating sits unread until the customer has already left. What you want is every request in one queue, connected to the customer who sent it and to the rest of the tools your business runs on. [Zendesk](https://apis.io/providers/zendesk/) can do this, and it can do it through an API, a way for software to talk directly to other software, so your website, your phone system or an AI assistant can open, route and report on support work without someone doing it by hand.

## What Zendesk does

Zendesk provides customer service and engagement software. It helps businesses manage support tickets, a ticket being the record of one customer's request from start to finish, along with automating workflows and offering support across email, chat, social media and phone through one platform. More on the [Zendesk website](https://www.zendesk.com/).

## What you can get done

### Capture requests from wherever customers are

[Customer Inquiry Management](https://apis.io/capabilities/customer-inquiry-management/) is the core of the platform and the largest capability we map for Zendesk, with 83 operations. The business outcome is that a customer can ask for help inside your own app or site, and the request lands in the same queue as everything else. It also covers the cleanup, because tickets do get deleted by mistake.

- `POST /api/v2/requests` submits a support request on a customer's behalf, for example from your own app.
- `GET /api/v2/requests` lists the requests a customer has submitted.
- `GET /api/v2/deleted_tickets` lists tickets that were deleted but not yet purged.
- `PUT /api/v2/deleted_tickets/{ticket_id}/restore` brings a deleted ticket back.
- `DELETE /api/v2/deleted_tickets/{ticket_id}` permanently removes one, which can matter when someone asks you to erase their data.

### Keep customer companies and people straight

[Customer Data Management](https://apis.io/capabilities/customer-data-management/) keeps track of who is who. When your support system knows which company each person belongs to, an agent can see the whole account's history and not just one message. Connecting this to your sales or billing system means a new customer can already be set up by the time they first ask for help.

- `POST /api/v2/organizations` creates an organization, Zendesk's word for a customer company.
- `GET /api/v2/organizations/{organization_id}` gets one organization's details.
- `PUT /api/v2/organizations/{organization_id}` updates them.
- `POST /api/v2/organization_memberships` adds a person to an organization.

### Route work to the right people

[Contact Centre Operations Management](https://apis.io/capabilities/contact-centre-operations-management/) covers how work reaches your agents, including work that starts as a phone call. A queue is a line of incoming work that is distributed to a group of agents. The practical benefit is that a phone system can create the ticket and put the right customer on the agent's screen as the call comes in.

- `POST /api/v2/channels/voice/tickets` creates a ticket from a call or voicemail.
- `POST /api/v2/channels/voice/agents/{agent_id}/users/{user_id}/display` opens the caller's profile in the agent's browser.
- `POST /api/v2/queues` creates a routing queue.
- `PUT /api/v2/queues/{queue_id}` changes one.

### Find out how customers feel about the help they got

[Customer Feedback Management](https://apis.io/capabilities/customer-feedback-management/) gets at the satisfaction ratings customers leave. Pulling them out of the help desk means you can send a bad rating to a manager the same day, or put the numbers next to your sales figures.

- `GET /api/v2/satisfaction_ratings` lists ratings, and can filter by score and time range.
- `GET /api/v2/satisfaction_ratings/count` counts them.
- `POST /api/v2/tickets/{ticket_id}/satisfaction_rating` records a rating on a solved ticket.
- `GET /api/v2/satisfaction_reasons` lists the reasons customers can choose when they give a bad rating.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 19 for Zendesk, and these are the ones I would look at first:

- [Create User and Open Ticket](https://apis.io/arazzos/zendesk/zendesk-create-user-and-ticket-workflow/) creates a customer record, then opens a ticket with that person as the requester.
- [Create Ticket and Assign Group](https://apis.io/arazzos/zendesk/zendesk-create-ticket-assign-group-workflow/) looks up a support group by name, then opens a ticket assigned to it.
- [Create Organization and User](https://apis.io/arazzos/zendesk/zendesk-create-organization-and-user-workflow/) sets up a customer company and a person who belongs to it.
- [Apply Macro to Ticket](https://apis.io/arazzos/zendesk/zendesk-apply-macro-to-ticket-workflow/) previews what a macro, a saved set of ticket actions and canned replies, would change, then commits it.
- [Add Comment to Ticket](https://apis.io/arazzos/zendesk/zendesk-add-comment-to-ticket-workflow/) confirms a ticket exists, then adds a public or private comment.

## Ask for it in plain language

Our conversational overlays for Zendesk, 80 in all, map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How can a customer open a support request from our own app?"
- "Can I bring back a ticket someone deleted by mistake?"
- "How do I assign a user to an organization?"
- "Can a phone system pop a ticket open on an agent's screen?"
- "Which customers left good or bad CSAT ratings?"
- "What reasons can customers pick when they give a bad satisfaction rating?"

You can browse one in the [Zendesk Account Settings phrasing overlay](https://apis.io/overlays/zendesk/zendesk-account-settings-api-phrasing-overlay/).

## Getting started

Zendesk is a paid, hosted service with self-serve signup, and your software connects to it over the web. APIs.io lists 76 Zendesk APIs, so start with the job and not the list. If you want customers to help themselves before they ever open a ticket, Zendesk's reference for [Help Center articles](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/) is a good first read, along with [sections](https://developer.zendesk.com/api-reference/help_center/help-center-api/sections/) and [categories](https://developer.zendesk.com/api-reference/help_center/help-center-api/categories/), which organize those articles. On APIs.io, see the [Zendesk profile](https://apis.io/providers/zendesk/), the [Help Center Articles API](https://apis.io/apis/zendesk/help-center-articles/), the [Help Center Sections API](https://apis.io/apis/zendesk/help-center-sections/) and the [Help Center Translations API](https://apis.io/apis/zendesk/help-center-translations/). Pick the one piece of support information your team retypes most often, and make that the first thing you connect.

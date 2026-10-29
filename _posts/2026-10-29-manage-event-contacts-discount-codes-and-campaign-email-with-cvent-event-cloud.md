---
published: true
layout: post
title: 'Manage Event Contacts, Discount Codes And Campaign Email With Cvent Event Cloud'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-event-contacts-discount-codes-and-campaign-email-with-cvent-event-cloud.png
date: 2026-10-29 14:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Cvent Event Cloud
  - Customer Data Management
  - Discount & Promotion Management
  - Digital Marketing Management
  - Event Management
  - Event Marketing
---

If you run conferences, trade shows or customer events, most of the work happens between the events: keeping the contact list clean, setting up early-bird and partner discount codes, sending the invitations, and getting hotel and venue proposals in. Doing that by hand in a planner's screen works for one event a year. It does not work for twenty. [Cvent Event Cloud](https://apis.io/providers/cvent-event-cloud/) can do all of it through an API, which means your own software, your CRM, or an AI assistant acting on your behalf can do the clicking for you.

## What Cvent Event Cloud does

Cvent Event Cloud is the event management product line of the Cvent Platform. It covers the whole event lifecycle: creating the event, registration, marketing, agenda and session management, mobile event apps, onsite check-in, virtual and hybrid delivery through the Attendee Hub, surveys and analytics. It also handles user provisioning through SCIM (a standard way for your identity system to create and remove user accounts), plus webhooks that notify your systems when something changes. More on the [Cvent website](https://www.cvent.com/en/event-management-software).

## What you can get done

### Keep your event contacts organized

[Customer Data Management](https://apis.io/capabilities/customer-data-management/) is the address book behind every invitation. Groups work like distribution lists, so you can keep VIPs, speakers and sponsors apart.

- `POST /contact-groups` creates a new contact group.
- `GET /contact-groups` lists the groups in your address book.
- `PUT /contact-groups/{id}` renames a group or changes its description.
- `GET /contact-groups/{id}/contacts` lists which contacts belong to a group.

### Set up discount codes for registration

[Discount & Promotion Management](https://apis.io/capabilities/discount-promotion-management/) lets you create promo codes and decide which sessions or admission items they apply to, without opening the event setup screens.

- `GET /events/{id}/discounts` lists the discount codes on an event.
- `POST /events/{id}/discounts` creates a new discount code.
- `PUT /events/{id}/discounts/{discountId}` changes an existing discount's settings.
- `PUT /events/{id}/discounts/{discountId}/agenda-items/{agendaItemId}` makes a discount apply to a specific session or admission item.

### Send campaign email and check it went out

[Digital Marketing Management](https://apis.io/capabilities/digital-marketing-management/) covers Cvent's eMarketing, the invitations and reminders that drive registration.

- `GET /campaigns` lists your eMarketing campaigns.
- `GET /emarketing/campaigns/{campaignId}/email-templates` lists the email templates in a campaign.
- `POST /emarketing/emails` sends a campaign email to recipients.
- `GET /emarketing/emails/{emailRequestId}/status` checks whether a send went out.

### Source hotels and venues

[Sourcing Management](https://apis.io/capabilities/sourcing-management/) reaches into Cvent's RFP tools, where you ask venues and hotels to bid on your business.

- `GET /rfps/{rfpId}/suppliers` lists the venues or suppliers that received an RFP.
- `GET /travel-programs` lists your corporate travel programs.
- `GET /travel-proposals` lists the hotel proposals that have come back.

### Provision staff accounts from your identity system

[Tenant Identity Federation](https://apis.io/capabilities/tenant-identity-federation/) is how IT keeps Cvent user accounts in step with the rest of the company.

- `GET /scim/v2/Groups` lists Cvent user roles exposed as SCIM groups.
- `GET /scim/v2/ServiceProviderConfig` shows which SCIM features the service supports.

## Ask for it in plain language

Our conversational overlay for Cvent Event Cloud maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "Can I create a new discount code for an event?"
- "Which sessions or admission items have a discount attached?"
- "Did my eMarketing email send go out?"
- "Which hotel proposals have come back for my travel RFPs?"
- "Which contacts belong to a given contact group?"

You can see one in the [Cvent Event Cloud Attendee Insights phrasing overlay](https://apis.io/overlays/cvent-event-cloud/cvent-event-cloud-attendee-insights-api-phrasing-overlay/).

## Getting started

Cvent lists self-serve signup, and it is a hosted service you call. Access uses OAuth 2.0, the standard way to grant an application permission without sharing a password. Start with the [REST API overview](https://developers.cvent.com/docs/rest-api/overview). On APIs.io, see the [Cvent Event Cloud profile](https://apis.io/providers/cvent-event-cloud/), the [Cvent Platform REST API](https://apis.io/apis/cvent-event-cloud/rest-api/), the [Events API](https://apis.io/apis/cvent-event-cloud/cvent-event-cloud-events-api/) and the [Attendees API](https://apis.io/apis/cvent-event-cloud/cvent-event-cloud-attendees-api/). Pick the chore you repeat most for every event, discount codes or contact groups, and automate that one first.

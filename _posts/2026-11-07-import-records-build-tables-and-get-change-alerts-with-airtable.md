---
published: true
layout: post
title: 'Import Records, Build Tables And Get Change Alerts With Airtable'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/import-records-build-tables-and-get-change-alerts-with-airtable.png
date: 2026-11-07 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Airtable
  - Webhook & Event Subscription Management
  - Identity & Access Management
  - Database
  - Productivity
---

Your team keeps the real list in Airtable: the clients, the content calendar, the inventory, the applicants. It works until the list needs to talk to something else. Orders arrive in another system and have to be keyed in. A record changes and nobody downstream hears about it. Someone leaves the company and their access lingers. [Airtable](https://apis.io/providers/airtable/) can handle each of those through an API, a way for one piece of software to ask another to do work, so another tool, a short script or an AI assistant can keep the base current for you.

## What Airtable does

[Airtable](https://www.airtable.com/) describes itself as a cloud-based collaboration service that combines the simplicity of a spreadsheet with the complexity of a database, with APIs for managing bases, tables, records, and more. A base is Airtable's word for one database; a table is a sheet inside it; a record is a row. On APIs.io we list the surfaces separately: the [Records API](https://apis.io/apis/airtable/airtable-records-api/) for creating, reading, updating and deleting rows, the [Tables API](https://apis.io/apis/airtable/airtable-tables-api/) and [Fields API](https://apis.io/apis/airtable/airtable-fields-api/) for changing the shape of a base, the [Bases API](https://apis.io/apis/airtable/airtable-bases-api/) for listing bases and reading their schemas, the [Comments API](https://apis.io/apis/airtable/airtable-comments-api/) for discussion on a record, the [Webhooks API](https://apis.io/apis/airtable/airtable-webhooks-api/) for change notifications, and the enterprise [Users API](https://apis.io/apis/airtable/airtable-users-api/) and [Groups API](https://apis.io/apis/airtable/airtable-groups-api/) for who gets in.

## What you can get done

We map Airtable's operations to two business capabilities. The everyday record and table work shows up most clearly in the workflows below, so I will take the two capabilities first and then the recipes.

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is a standing request: tell this address whenever something in this base changes. It is how a record edit in Airtable can trigger an email, a Slack message or an update in another system without anyone polling. There are five operations.

- `POST /bases/{baseId}/webhooks` creates a webhook on a base, pointing at the address that should hear about changes.
- `GET /bases/{baseId}/webhooks` lists the webhooks already set up on a base.
- `GET /bases/{baseId}/webhooks/{webhookId}/payloads` reads the queued notifications, page by page, so nothing is missed if your side was down.
- `POST /bases/{baseId}/webhooks/{webhookId}/refresh` extends a webhook so it keeps running.
- `DELETE /bases/{baseId}/webhooks/{webhookId}` removes one.

### [Identity & Access Management](https://apis.io/capabilities/identity-access-management/)

For an enterprise account, this is how people get into Airtable and get taken out again. SCIM is a standard that lets your identity provider, the system you already use to add and remove staff, create and delete users and groups in other services automatically. There are 12 operations.

- `POST /Users` creates a user in Airtable from your identity provider.
- `GET /Users` lists the users it manages.
- `POST /Groups` creates a group, such as a department, that can be granted access together.
- `PATCH /Groups/{groupId}` changes a group's membership.
- `DELETE /Groups/{groupId}` removes a group.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. They are written in Arazzo, an open format for describing them, and Airtable has 21 of them on APIs.io. These are the ones a business reaches for first.

- [Bulk Import Records](https://apis.io/arazzos/airtable/airtable-bulk-import-records-workflow/) creates a batch of records in a table and checks the import landed.
- [Add a Table with Fields](https://apis.io/arazzos/airtable/airtable-add-table-with-fields-workflow/) adds a new table to an existing base and then adds a field to it.
- [Enrich Records](https://apis.io/arazzos/airtable/airtable-enrich-records-workflow/) finds records with empty fields and fills them in.
- [Archive Stale Records](https://apis.io/arazzos/airtable/airtable-archive-stale-records-workflow/) finds records that match a staleness formula and deletes them.
- [Comment on Record](https://apis.io/arazzos/airtable/airtable-comment-on-record-workflow/) confirms a record exists, then adds a comment to it.
- [Audit Base Schemas](https://apis.io/arazzos/airtable/airtable-audit-base-schemas-workflow/) lists the bases you can reach and inspects the structure of one.
- [Consume Webhook Payloads](https://apis.io/arazzos/airtable/airtable-consume-webhook-payloads-workflow/) finds a webhook and drains its queued notifications.
- [Deprovision a SCIM User](https://apis.io/arazzos/airtable/airtable-deprovision-scim-user-workflow/) finds a user by username and removes them.

## Getting started

Airtable is a freemium, hosted service with self-serve signup: you call Airtable's endpoint, and the account you already have is enough to begin. The [Web API introduction](https://airtable.com/developers/web/api/introduction) is the front door, the [webhooks overview](https://airtable.com/developers/web/api/webhooks-overview) explains the change notifications above, and [cursor pagination](https://airtable.com/developers/web/api/cursor-pagination) covers how to read long lists a page at a time. For access, a [personal access token](https://airtable.com/developers/web/guides/personal-access-tokens) is the simplest route for your own scripts, and [OAuth integrations](https://airtable.com/developers/web/guides/oauth-integrations) are for a tool that acts on behalf of other people's accounts. On APIs.io you can browse the [Airtable profile](https://apis.io/providers/airtable/), the [Records API](https://apis.io/apis/airtable/airtable-records-api/), the [Webhooks API](https://apis.io/apis/airtable/airtable-webhooks-api/) and the [Tables API](https://apis.io/apis/airtable/airtable-tables-api/). Take the spreadsheet you paste into Airtable every week and run it through the bulk import workflow instead.

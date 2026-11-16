---
published: true
layout: post
title: 'Store, Share And Rotate Business Passwords Automatically With 1Password'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/store-share-and-rotate-business-passwords-automatically-with-1password.png
date: 2026-11-16 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - 1Password
  - Configuration & Secrets Management
  - Tenant Identity Federation
  - Threat Detection & Response Management
  - Security
---

Every business ends up with passwords, API keys and logins scattered across spreadsheets, sticky notes and chat messages. Keeping them safe, getting the right ones to the right people and apps, and changing them when someone leaves is tedious work. 1Password can do much of it for you through an API, an application programming interface, which lets your own software (or an AI assistant) ask 1Password to store, fetch, update or audit secrets without anyone opening the app. Here is the [1Password profile on APIs.io](https://apis.io/providers/1password/).

## What 1Password does

[1Password](https://1password.com/) is a password manager that helps individuals and businesses securely store and manage passwords, credentials, and sensitive information. For developers it provides a Connect Server API for programmatic secrets management, an Events API for security monitoring and audit logging, and a Partnership API for managing partner billing accounts. We index 4 of its APIs.

## What you can get done

### [Keep secrets in one safe place](https://apis.io/capabilities/configuration-secrets-management/)

Instead of pasting a database password into a config file, your applications can ask 1Password for it at the moment they need it. Items live in vaults, 1Password's locked folders.

- `GET /v1/vaults/{vaultUuid}/items` lists the items in a vault.
- `POST /v1/vaults/{vaultUuid}/items` creates a new item.
- `GET /v1/vaults/{vaultUuid}/items/{itemUuid}` reads an item's details.
- `PATCH /v1/vaults/{vaultUuid}/items/{itemUuid}` updates part of an item, such as just the password.

### [Add and remove people automatically](https://apis.io/capabilities/tenant-identity-federation/)

When someone joins or leaves, your HR or identity system can create or remove their 1Password account for you. This uses SCIM, a common standard for syncing user accounts between systems.

- `GET /api/scim/v2/Users` lists users.
- `POST /api/scim/v2/Users` creates a user.
- `PUT /api/scim/v2/Users/{userId}` replaces a user's details.

### [Know which apps your team uses](https://apis.io/capabilities/it-application-management/)

- `GET /api/apps/v1` lists applications.
- `POST /api/apps/v1` adds one.
- `GET /api/apps/v1/{appId}/users` lists the accounts people hold in an application.

### [See who signed in and what they touched](https://apis.io/capabilities/threat-detection-response-management/)

For security teams, the Events API is the audit trail. It shows sign-in attempts, which items were used, and administrative changes, so suspicious activity can be piped into your monitoring tools.

- `POST /api/v2/auditevents` lists audit events.
- `POST /api/v2/signinattempts` lists sign-in attempts.
- `POST /api/v2/itemusages` lists when items were used.

### [Provision customer accounts as a partner](https://apis.io/capabilities/subscription-provisioning/)

If you resell or bundle 1Password, the Partnership API manages billing accounts.

- `POST /partners/accounts` creates a partner billing account.
- `PATCH /partners/accounts/{accountUid}` updates one.
- `DELETE /partners/accounts/{accountUid}` removes one.

## Workflows that put it together

A workflow is a recipe: several API calls in a set order that finish one job. We have mapped 8 for 1Password:

- [Rotate an Item Password](https://apis.io/arazzos/1password/1password-rotate-item-password-workflow/) reads an item, then replaces its password field.
- [Read an Item Secret](https://apis.io/arazzos/1password/1password-read-item-secret-workflow/) finds a vault, locates an item by title, and reads its values.
- [Provision an Item](https://apis.io/arazzos/1password/1password-provision-item-workflow/) creates an item and reads it back to confirm it was stored.
- [Decommission an Item](https://apis.io/arazzos/1password/1password-decommission-item-workflow/) confirms an item exists, then permanently deletes it.
- [Stream Audit Events](https://apis.io/arazzos/1password/1password-stream-audit-events-workflow/) opens an audit feed from a start time and pages through it.
- [Provision Partner Billing](https://apis.io/arazzos/1password/1password-provision-partner-billing-workflow/) creates a customer billing account and schedules its end date.

## Getting started

The 1Password APIs are a paid, hosted service. Plans are listed in the [Pricing section of the APIs.io profile](https://apis.io/providers/1password/#pricing). The references are the [Connect API reference](https://developer.1password.com/docs/connect/api-reference/), the [Events API reference](https://developer.1password.com/docs/events-api/reference/) and the [Partnership API reference](https://developer.1password.com/docs/partnership-api/reference/). On APIs.io, look at the [1Password profile](https://apis.io/providers/1password/), the [Audit Events API](https://apis.io/apis/1password/1password-audit-events-api/) and the [Accounts API](https://apis.io/apis/1password/1password-accounts-api/).

Start with one secret your team currently shares by hand, and move it behind the Connect API.

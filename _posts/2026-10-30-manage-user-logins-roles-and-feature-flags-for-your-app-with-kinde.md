---
published: true
layout: post
title: 'Manage User Logins, Roles And Feature Flags For Your App With Kinde'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-user-logins-roles-and-feature-flags-for-your-app-with-kinde.png
date: 2026-10-30 16:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Kinde
  - Identity & Access Management
  - Feature Flag Management
  - Entitlement Enforcement
  - Usage Metering
  - Authentication
  - Software-as-a-Service
---

If you sell software, a surprising amount of your time goes to things your customers never pay you for: who can log in, who is an admin, which plan unlocks which feature, and how to try something new with a few accounts before everyone sees it. Building all of that yourself is slow, and getting it wrong is expensive. [Kinde](https://apis.io/providers/kinde/) handles this work, and it does it through an API, a way for software to talk directly to other software, so your application, your internal tools or an AI assistant can set up roles, flags and customer accounts without anyone clicking through an admin screen.

## What Kinde does

Kinde is an authentication and customer identity platform. Authentication means confirming who someone is when they log in, and Kinde covers passwords, passwordless, social logins and enterprise single sign-on. It bundles that with authorization (what a person is allowed to do), organizations for business customers, billing and feature flags in one product. Kinde describes itself as "the fully integrated developer platform" and was founded in Australia. There are two main API surfaces: a Management API for running your account, and an Account API that lets your app read what applies to the person signed in. More on the [Kinde website](https://www.kinde.com/).

## What you can get done

### Decide who can do what

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) is where you define roles such as admin or editor, and the permissions behind them. When a new customer signs up or a staff member changes jobs, your systems can adjust access on their own, and your app can check what the logged-in person is allowed to see.

- `GET /api/v1/roles` lists every role defined in your business.
- `POST /api/v1/roles` creates a new role, and can make it the default for new users.
- `DELETE /api/v1/roles/{role_id}` removes a role you no longer use.
- `GET /account_api/v1/roles` tells your app which roles the signed-in user holds.
- `GET /account_api/v1/permissions` tells your app what that user is permitted to do.

### Roll out features gradually

[Feature Flag Management](https://apis.io/capabilities/feature-flag-management/) gives you on-off switches for parts of your product. A feature flag lets you ship something new but show it only to chosen customers, which makes launches less risky and makes a bad launch quick to undo.

- `POST /api/v1/feature_flags` creates a new flag with a default value.
- `PUT /api/v1/feature_flags/{feature_flag_key}` changes a flag's definition after the fact.
- `DELETE /api/v1/feature_flags/{feature_flag_key}` removes a flag you are done with.
- `GET /account_api/v1/feature_flags` reads the flags that apply to the signed-in user.

### Give customers what they paid for

[Entitlement Enforcement](https://apis.io/capabilities/entitlement-enforcement/) connects billing to the product. An entitlement is a feature or allowance a customer's plan includes, and checking it at the moment of use keeps your pricing page and your product in agreement.

- `GET /account_api/v1/entitlements` lists everything the signed-in user's plan entitles them to.
- `GET /account_api/v1/entitlement` checks one specific feature by its key.
- `GET /api/v1/billing/entitlements` lists what a given billing customer is entitled to.

### Charge for what customers actually use

[Usage Metering](https://apis.io/capabilities/usage-metering/) records consumption, which is what you need if you bill per seat, per report or per message rather than a flat fee.

- `POST /api/v1/billing/meter_usage` records usage against a customer's metered feature.

### Tell your other systems when something happens

[Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/) sets up webhooks, which are messages Kinde sends to a web address of yours when something happens, like a new signup. That is how your welcome email or customer record gets started automatically.

- `GET /api/v1/event_types` lists the events you can subscribe to.
- `POST /api/v1/webhooks` creates a webhook.
- `GET /api/v1/webhooks` shows every webhook you have configured.
- `DELETE /api/v1/webhooks/{webhook_id}` stops one.

## Workflows that put it together

A workflow is a recipe of several calls in order that finishes a real job. APIs.io catalogs 9 for Kinde, including:

- [Provision User into Organization](https://apis.io/arazzos/kinde/kinde-provision-user-workflow/) creates a user, adds them to an organization and grants a role in one pass.
- [Invite User to Organization](https://apis.io/arazzos/kinde/kinde-invite-user-to-organization-workflow/) validates roles, creates an invitation and waits until it is sent.
- [Migrate User with Password](https://apis.io/arazzos/kinde/kinde-migrate-user-with-password-workflow/) creates a user and imports their existing hashed password, which helps when you move from another login system.
- [Create Role with Permission](https://apis.io/arazzos/kinde/kinde-create-role-with-permission-workflow/) creates a permission and a role, then attaches one to the other.
- [End User Self-Serve Portal](https://apis.io/arazzos/kinde/kinde-end-user-self-serve-portal-workflow/) reads the user's profile, roles and entitlements, then creates a self-serve portal link.

## Ask for it in plain language

Our conversational overlay for Kinde maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. These are the kinds of things you can ask:

- "How do I create a new role like admin or editor?"
- "How do I get notified at my endpoint when a user signs up?"
- "What features is a given billing customer entitled to?"
- "How do I create a new feature flag with a default value?"
- "What's the way to report usage for a metered billing feature?"

You can see one in the [Kinde Applications phrasing overlay](https://apis.io/overlays/kinde/kinde-applications-api-phrasing-overlay/).

## Getting started

Kinde has a free tier with self-serve signup, and you call its hosted service. Start with the [Management API documentation](https://docs.kinde.com/kinde-apis/management/) and the [Frontend API documentation](https://docs.kinde.com/kinde-apis/frontend/), then read [how to get an access token](https://docs.kinde.com/developer-tools/kinde-api/access-token-for-api/). If you want an AI assistant working with your account, there are also [docs for Kinde's MCP servers](https://docs.kinde.com/mcp-servers/), MCP being the connector standard assistants use to call tools. On APIs.io, see the [Kinde profile](https://apis.io/providers/kinde/), the [Applications API](https://apis.io/apis/kinde/kinde-applications-api/), the [Billing API](https://apis.io/apis/kinde/kinde-billing-api/) and the [Kinde MCP Server](https://apis.io/apis/kinde/kinde-mcp-server/). Write down the roles your product needs today, then have your developer create them and test the provisioning workflow on one customer.

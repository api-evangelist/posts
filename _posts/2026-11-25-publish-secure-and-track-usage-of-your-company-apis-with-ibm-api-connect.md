---
published: true
layout: post
title: 'Publish, Secure And Track Usage Of Your Company APIs With IBM API Connect'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/publish-secure-and-track-usage-of-your-company-apis-with-ibm-api-connect.png
date: 2026-11-25 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - IBM API Connect
  - API Consumption Governance
  - Public API Lifecycle Management
  - Developer Portal Management
  - API Management
  - API Gateway
---

Once a company starts offering its data or services to partners and customers through APIs, a new set of questions shows up. Who is allowed to use which API? How much can each of them call it? Where do new partners sign up and read the documentation? And who is actually using what? IBM API Connect is built to answer those questions, and the platform itself can be run through its own APIs, so your other software, or an AI assistant working for you, can publish, approve and report without anyone working through the console. Everything I have catalogued about it sits on its [APIs.io profile](https://apis.io/providers/ibm-api-connect/).

## What IBM API Connect does

IBM describes [API Connect](https://www.ibm.com/products/api-connect) as an API management platform for creating, securing, managing, sharing, monetizing and analyzing APIs across cloud environments. In practice that means a gateway that sits in front of your APIs and enforces the rules, a developer portal where outside developers find and sign up for them, and the lifecycle tooling to move an API from draft to published.

## What you can get done

### [API Consumption Governance](https://apis.io/capabilities/api-consumption-governance/)

This is about knowing and controlling how your APIs get used. Plans bundle APIs into products with limits attached, quotas cap how much each customer can call, and the analytics show the volume by customer and by app.

- `GET /orgs/{org}/dashboard` gets the data behind the consumer analytics dashboard.
- `GET /orgs/{org}/apps/{app}/dashboard` gets the same view for one application.
- `GET /catalogs/{org}/{catalog}/plans` lists every plan in a catalog.
- `GET /catalogs/{org}/{catalog}/quotas` lists the quotas in a catalog.

### [Public API Lifecycle Management](https://apis.io/capabilities/public-api-lifecycle-management/)

In API Connect, a catalog is where your API products get published. Drafts are where they live before that. These operations manage both, which is how you move an API from "being written" to "available to customers".

- `POST /orgs/{org}/catalogs` creates a catalog.
- `GET /orgs/{org}/catalogs` lists your catalogs.
- `PATCH /catalogs/{org}/{catalog}` changes a catalog's settings.
- `GET /orgs/{org}/drafts` lists the drafts in progress.

### [Developer Portal Management](https://apis.io/capabilities/developer-portal-management/)

The portal is the storefront for your APIs. These operations let you read what is published there, attach supporting files, and even talk to the portal's AI agent.

- `GET /catalogs/{org}/{catalog}/api/list` lists the APIs on a portal site.
- `GET /catalogs/{org}/{catalog}/api/get-document` gets the full document for one API.
- `POST /catalogs/{org}/{catalog}/api/add-attachment` adds an attachment to an API.
- `POST /portal-chatbot` starts a chat session with the portal's AI agent.

### [Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/)

Every partner who uses your APIs registers an application and gets credentials for it. These operations handle that registration, so your onboarding process can create and clean up apps on its own.

- `POST /orgs/{org}/apps` registers a new application.
- `GET /orgs/{org}/apps` lists the applications in a consumer organization.
- `PATCH /apps/{org}/{app}` updates an application.
- `DELETE /apps/{org}/{app}` removes an application.

### [Webhook & Event Subscription Management](https://apis.io/capabilities/webhook-event-subscription-management/)

A webhook is a message the platform sends your systems when something happens, so you hear about it without asking. These operations manage those subscriptions.

- `GET /catalogs/{org}/{catalog}/webhooks` lists a catalog's webhooks.
- `PATCH /catalogs/{org}/{catalog}/webhooks/{webhook}` updates one.
- `GET /catalogs/{org}/{catalog}/primary-events` lists the catalog's events.

## Getting started

API Connect is a paid product with a 30-day free trial, delivered as a hosted service you call. Plan details are on the [IBM API Connect pricing section](https://apis.io/providers/ibm-api-connect/#pricing) of its profile.

The documentation I would start with:

- [API Connect REST APIs reference](https://www.ibm.com/docs/en/api-connect/software/12.1.1?topic=reference-api-connect-rest-apis)
- [Analytics REST API](https://www.ibm.com/docs/en/api-connect/software/12.1.1?topic=ui-analytics-rest-api)
- [Managing platform REST API keys](https://www.ibm.com/docs/en/api-connect/software/12.1.1?topic=cli-managing-platform-rest-api-keys), which covers getting access

On APIs.io, see the [IBM API Connect profile](https://apis.io/providers/ibm-api-connect/), the [Analytics API](https://apis.io/apis/ibm-api-connect/ibm-api-connect-analytics-api/), the [Discovery API](https://apis.io/apis/ibm-api-connect/ibm-api-connect-discovery-api/), which finds APIs running through your gateways that are not yet managed, and the [Catalog Management API](https://apis.io/apis/ibm-api-connect/ibm-api-connect-catalog-management-api/).

If you are already publishing APIs, start with the consumer analytics dashboard data and find out who is really using them.

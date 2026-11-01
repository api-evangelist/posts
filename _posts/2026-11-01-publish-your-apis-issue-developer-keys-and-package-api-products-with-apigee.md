---
published: true
layout: post
title: 'Publish Your APIs, Issue Developer Keys And Package API Products With Apigee'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/publish-your-apis-issue-developer-keys-and-package-api-products-with-apigee.png
date: 2026-11-01 22:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Apigee
  - Public API Lifecycle Management
  - Developer Identity & Credential Management
  - Deployment Orchestration
  - API Management
  - Developer Portal
---

Your company has data or services that partners want to plug into. Maybe a customer has asked for a direct connection, or a partner wants to pull your pricing into their own system. Your developers can build that, but then someone has to decide who gets access, hand out and revoke credentials, limit how much each partner can use and keep track of which versions are running where. [Apigee](https://apis.io/providers/apigee/) handles that work. It is built for managing APIs, and it has an API of its own, a way for software to talk directly to other software, so your internal tools or an AI assistant can manage your partner connections without someone clicking through a console.

## What Apigee does

Apigee is Google Cloud's API management platform, for building, managing and securing APIs in any environment. It provides API proxies, security, rate limiting, quotas, analytics, monetization and developer portals. A proxy is a front door that sits ahead of your own systems, so outside callers reach the door and not the systems behind it. Rate limits and quotas cap how much each caller can use. More on the [Apigee website](https://cloud.google.com/apigee).

## What you can get done

### Package your data and services as products

The [Developer Platform & API Ecosystem Management](https://apis.io/capabilities/developer-platform-api-ecosystem-management/) capability is where this becomes a business decision. An API product is a bundle of API access with its own usage limits and approval rules, the way a plan is a bundle of features. You might offer partners a basic product with a low quota and an approved partner product with more.

- `POST /organizations/{organizationId}/apiproducts` creates a product, including its quota and approval type.
- `GET /organizations/{organizationId}/apiproducts` lists the products you have defined.
- `GET /organizations/{organizationId}/apiproducts/{apiProductId}` shows what one product includes.
- `PUT /organizations/{organizationId}/apiproducts/{apiProductId}` updates a product.
- `DELETE /organizations/{organizationId}/apiproducts/{apiProductId}` removes one.

### Decide who gets a key and take it back when needed

[Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/) is about who is allowed in. A key is the credential a partner's software presents when it calls you. Handling keys through software means onboarding a new partner can be part of your normal process, and a compromised key can be removed as soon as you spot it.

- `POST /organizations/{organizationId}/developers/{developerId}/apps` registers an app for a developer so they can get a key.
- `GET /organizations/{organizationId}/developers/{developerId}/apps/{appId}/keys` lists the keys issued to an app.
- `GET /organizations/{organizationId}/developers/{developerId}/apps/{appId}/keys/{keyId}` shows which products a key is approved for.
- `PUT /organizations/{organizationId}/developers/{developerId}/apps/{appId}/keys/{keyId}` gives an existing key access to more products.
- `DELETE /organizations/{organizationId}/developers/{developerId}/apps/{appId}/keys/{keyId}` deletes a key.

### Keep track of what APIs you have and which versions exist

[Public API Lifecycle Management](https://apis.io/capabilities/public-api-lifecycle-management/) answers a question that gets harder as a company grows: what APIs do we even have? These operations belong to API Hub, Apigee's central catalog. A specification is the document describing what an API does, so storing one with each version gives your teams one place to look before building the same thing twice.

- `POST /projects/{projectId}/locations/{locationId}/apis/{apiId}/versions` records a new version of an API.
- `GET /projects/{projectId}/locations/{locationId}/apis/{apiId}/versions` lists the versions on record.
- `POST /projects/{projectId}/locations/{locationId}/apis/{apiId}/versions/{versionId}/specs` attaches a specification to a version.
- `GET /projects/{projectId}/locations/{locationId}/apis/{apiId}/versions/{versionId}/specs/{specId}:getContents` downloads the specification itself.

### Put changes live and record where they run

[Deployment Orchestration](https://apis.io/capabilities/deployment-orchestration/) covers releasing a change. One of these calls actually puts a proxy into service, while the others keep records in API Hub, so it is worth knowing which is which.

- `POST /organizations/{organizationId}/environments/{environmentId}/apis/{apiId}/revisions/{revisionId}/deployments` deploys a proxy revision, so it starts accepting requests.
- `POST /projects/{projectId}/locations/{locationId}/deployments` records a deployment in API Hub.
- `GET /projects/{projectId}/locations/{locationId}/deployments` lists those records.
- `DELETE /projects/{projectId}/locations/{locationId}/deployments/{deploymentId}` removes a stale record.

## Workflows that put it together

A workflow is a recipe of several calls made in order to finish a real job. APIs.io catalogs 25 for Apigee, and several are the routine tasks of running a partner program:

- [Onboard an App Group](https://apis.io/arazzos/apigee/apigee-app-group-onboarding-workflow/) creates a group, adds a developer, registers an app and reads it back.
- [Grant an App Access to a New Product](https://apis.io/arazzos/apigee/apigee-grant-app-product-access-workflow/) creates a product, confirms the app and its key, then connects the product to the key.
- [API Hub Catalog and Lint](https://apis.io/arazzos/apigee/apigee-catalog-api-hub-workflow/) registers an API with a version and specification, then runs a lint, an automated check of the specification, and reads the result.
- [Decommission an API Proxy](https://apis.io/arazzos/apigee/apigee-decommission-proxy-workflow/) takes a proxy out of service and deletes it.
- [Tear Down an Environment](https://apis.io/arazzos/apigee/apigee-environment-teardown-workflow/) lists what is deployed, undeploys a proxy revision and deletes the environment.
- [Set Up Analytics Export and Read Stats](https://apis.io/arazzos/apigee/apigee-analytics-datastore-setup-workflow/) creates a place to export analytics and queries usage statistics.

## Ask for it in plain language

Our conversational overlays for Apigee, 40 in all, map everyday questions to the operation that answers them, so an AI assistant knows which call answers which question. These are the kinds of things you can ask:

- "How do I bundle API proxies into a product that developers can subscribe to?"
- "What API products are defined in my Apigee organization?"
- "How do I create an app for a developer so they get an API key?"
- "How do I remove a compromised key from a developer app?"
- "What releases of an API are recorded in API Hub?"

You can browse one in the [Apigee API Deployments phrasing overlay](https://apis.io/overlays/apigee/apigee-api-deployments-api-phrasing-overlay/).

## Getting started

Apigee is a paid, hosted service with a free trial and self-serve signup. Read [what Apigee is](https://cloud.google.com/apigee/docs/api-platform/get-started/what-apigee) and [what API Hub is](https://cloud.google.com/apigee/docs/apihub/what-is-api-hub), check the [pricing](https://cloud.google.com/apigee/pricing), and note where to find [support](https://cloud.google.com/apigee/support). On APIs.io, see the [Apigee profile](https://apis.io/providers/apigee/), the [API Products API](https://apis.io/apis/apigee/apigee-api-products-api/), the [API Proxies API](https://apis.io/apis/apigee/apigee-api-proxies-api/) and the [Analytics API](https://apis.io/apis/apigee/apigee-analytics-api/). Write down the first partner who wants access and what they should be allowed to use, because that sentence is the outline of your first API product.

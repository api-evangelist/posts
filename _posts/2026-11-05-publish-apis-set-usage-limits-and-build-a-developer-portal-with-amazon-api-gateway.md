---
published: true
layout: post
title: 'Publish APIs, Set Usage Limits And Build A Developer Portal With Amazon API Gateway'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/publish-apis-set-usage-limits-and-build-a-developer-portal-with-amazon-api-gateway.png
date: 2026-11-05 18:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Amazon API Gateway
  - Public API Lifecycle Management
  - API Consumption Governance
  - Developer Portal Management
  - API Gateway
  - Serverless
---

Your company has data or a service that partners, customers or your own mobile app need to reach. You want a front door for it: a single address, with a key for each caller, a limit on how much each one can use, and a page where developers can read about it and sign up. Building that front door from scratch is months of work. [Amazon API Gateway](https://apis.io/providers/aws-api-gateway/) is that front door as a service, and it is itself managed through an API, a way for software to talk directly to other software, so your deployment tooling, a script or an AI assistant can create the API, publish it, set the limits and stand up the portal without anyone clicking through the AWS console.

## What Amazon API Gateway does

Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring and securing APIs. It sits between the outside world and your backend systems, handling traffic management, authorization, monitoring and version management, and it supports three styles of API: REST APIs, lighter and cheaper HTTP APIs, and WebSocket APIs for real-time two-way connections. It plugs into the rest of AWS, including Lambda for running code without servers, CloudWatch for monitoring, and Cognito and IAM for identity. As of December 2025, Amazon says, it can also expose REST APIs as tools that AI agents can call through Amazon Bedrock AgentCore Gateway. More on the [Amazon API Gateway page](https://aws.amazon.com/api-gateway/).

## What you can get done

### [Public API Lifecycle Management](https://apis.io/capabilities/public-api-lifecycle-management/)

The lifecycle of an API is creating it, changing it, and eventually retiring it. These 9 operations manage the API objects themselves, which is what a deployment pipeline does every time your team ships a change.

- `GET /restapis` lists the REST APIs in your account.
- `POST /restapis` creates a new REST API, or clones an existing one as the starting point.
- `PATCH /restapis/{restapi_id}` renames a REST API, changes its description or adjusts settings such as compression.
- `DELETE /restapis/{restapi_id}` removes a REST API and everything defined on it.
- `GET /v2/apis` lists your HTTP and WebSocket APIs, and `POST /v2/apis` creates one, including the quick-create form that points straight at a backend.

### [API Consumption Governance](https://apis.io/capabilities/api-consumption-governance/)

A usage plan is the rulebook for a group of callers: how many requests per second they may make and how many per day or month. It is how you offer a free tier and a paid tier of the same API, and how you stop one customer from crowding out the rest.

- `GET /usageplans` lists the usage plans you have set up, and which API keys are attached to each.
- `POST /usageplans` creates a plan with throttling and quota limits, tied to specific API stages.
- `GET /usageplans/{usageplan_id}` shows the limits one plan enforces.
- `PATCH /usageplans/{usageplan_id}` raises a quota or changes the throttling on a plan that is already live.
- `DELETE /usageplans/{usageplan_id}` removes a plan you no longer offer.

### [Developer Portal Management](https://apis.io/capabilities/developer-portal-management/)

A developer portal is the website where outside developers discover your APIs, read the documentation and get access. Amazon says API Gateway Portals arrived on November 19, 2025, and they let you create a branded portal that catalogs your REST APIs as products. There are 20 operations for portals, products and their pages.

- `POST /v2/portals` creates a portal, and `GET /v2/portals` lists the ones you have.
- `PATCH /v2/portals/{PortalId}` updates a portal's branding, content or sign-in settings.
- `POST /v2/portalproducts` creates a portal product, a grouping of REST APIs presented together to developers.
- `GET /v2/portalproducts` lists your products, and `DELETE /v2/portalproducts/{PortalProductId}` retires one.

## Workflows that put it together

A workflow is a recipe: several API calls made in a set order, each using what the last one returned. These are written in Arazzo, an open format for describing them, and API Gateway has 12 of them on APIs.io.

- [Build an HTTP API](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-build-http-api-workflow/) creates an HTTP API, attaches a backend, wires a route to it and publishes a stage, which is the whole front door in one recipe.
- [Create an API Key and Usage Plan](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-create-api-key-and-usage-plan-workflow/) creates a key, creates a throttled and quota-limited plan, and confirms the plan registered.
- [Add a Method and Redeploy](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-add-method-and-redeploy-workflow/) checks a REST API exists, attaches a method to one of its resources and publishes a fresh deployment.
- [Deploy an HTTP API to a New Stage](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-deploy-http-api-stage-workflow/) creates a deployment and publishes it to a new stage.
- [Audit an HTTP API Surface](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-audit-http-api-workflow/) reads an API's routes, integrations and stages in one read-only pass, useful before a change or an audit.
- [Decommission an HTTP API](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-decommission-http-api-workflow/) checks for published stages and deletes the API only when it is safe to remove.
- [Build a WebSocket API](https://apis.io/arazzos/aws-api-gateway/aws-api-gateway-build-websocket-api-workflow/) creates a WebSocket API, adds an integration and wires the connect route.

## Ask for it in plain language

We have written conversational overlays for API Gateway, a layer on top of its API descriptions that maps everyday questions to the operation that answers them, so an AI assistant knows which call to make. There are 19 of them. These are the kinds of questions they map:

- "What REST APIs do I have in API Gateway?"
- "How do I create a new REST API in API Gateway?"
- "How do I set throttling and quota limits for my API consumers?"
- "Can I raise the quota on an existing usage plan?"
- "How do I create a new WebSocket API?"
- "Can I quick-create an HTTP API that points straight at a target backend?"

You can see one of them on the [APIs API phrasing overlay](https://apis.io/overlays/aws-api-gateway/aws-api-gateway-apis-api-phrasing-overlay/).

## Getting started

API Gateway is a freemium, hosted service with self-serve signup: you call Amazon's endpoints from an AWS account, and [pricing](https://aws.amazon.com/api-gateway/pricing/) is by the request. The [developer guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/) is the main reference, with separate pages on [portals](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-portals.html), [exposing an API as an MCP server](https://docs.aws.amazon.com/apigateway/latest/developerguide/mcp-server.html) for AI agents, [WebSocket APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) and [permissions](https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html). Amazon's own [getting started page](https://aws.amazon.com/api-gateway/getting-started/) walks through the first API. On APIs.io you can browse the [Amazon API Gateway profile](https://apis.io/providers/aws-api-gateway/), the [Portals API](https://apis.io/apis/aws-api-gateway/aws-api-gateway-portals/), the [HTTP API](https://apis.io/apis/aws-api-gateway/http-api/) and the [Stages API](https://apis.io/apis/aws-api-gateway/aws-api-gateway-stages-api/). If you already have something running in AWS that other people need to call, the Build an HTTP API recipe is the shortest path to a front door.

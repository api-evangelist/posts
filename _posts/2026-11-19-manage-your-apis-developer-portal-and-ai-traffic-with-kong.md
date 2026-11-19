---
published: true
layout: post
title: 'Manage Your APIs, Developer Portal And AI Traffic With Kong'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/manage-your-apis-developer-portal-and-ai-traffic-with-kong.png
date: 2026-11-19 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - Kong
  - Developer Portal Management
  - Identity & Access Management
  - Agent Tool Exposure
  - Subscription Billing & Revenue Management
  - API Gateway
  - API Management
---

If your business offers its own APIs, to partners, to customers, or to the AI assistants your customers now use, you need somewhere to control who gets in, publish the documentation, and keep an eye on the traffic. [Kong](https://apis.io/providers/kong/) does that work, and the management itself is available through an API, so your own tools, your deployment scripts, or an AI assistant can set things up rather than someone clicking through screens.

An API is a set of doors into a service that other software can knock on. A gateway is the front door every one of those requests walks through, where it gets checked, counted and routed.

## What Kong does

Kong calls itself the AI Connectivity Company. Its platform includes Kong Gateway, the open-source API gateway, Kong Konnect, its hosted control plane, an AI Gateway for governing traffic to large language models and agents, an Event Gateway for Kafka streams, Kong Mesh, an MCP Registry that lists the tools AI agents can use, and Kong Insomnia for designing and testing APIs. You can find them at [konghq.com](https://konghq.com).

## What you can get done

### Publish and run a developer portal

[Developer Portal Management](https://apis.io/capabilities/developer-portal-management/) is the website where outside developers learn your APIs and sign up. Kong lets you manage its content and its address through the API.

- `POST /v3/portals/{portalId}/snippets` creates a reusable piece of portal content.
- `PATCH /v3/portals/{portalId}/snippets/{snippetId}` updates it.
- `POST /v3/portals/{portalId}/custom-domain` puts the portal on your own domain.
- `PATCH /v3/portals/{portalId}/custom-domain` turns that domain on or off.

### Keep track of every API you offer

[Public API Lifecycle Management](https://apis.io/capabilities/public-api-lifecycle-management/) is the record of what APIs you have, what version they are on, and the specification that describes each.

- `POST /v3/apis` registers an API.
- `GET /v3/apis` lists your APIs.
- `PATCH /v3/apis/{apiId}` updates one.
- `POST /v3/apis/{apiId}/specifications` attaches its specification.

### Decide who can do what

[Identity & Access Management](https://apis.io/capabilities/identity-access-management/) is roles and permissions: which people, teams and automated accounts can change what.

- `GET /v3/roles` lists the predefined roles.
- `POST /v3/teams/{teamId}/assigned-roles` gives a team a role.
- `DELETE /v3/teams/{teamId}/assigned-roles/{roleId}` takes it away.
- `POST /v3/system-accounts/{accountId}/assigned-roles` gives a role to an automated account.

Alongside this, [Developer Identity & Credential Management](https://apis.io/capabilities/developer-identity-credential-management/) sets how outside developers' applications authenticate, through `POST /v2/application-auth-strategies`.

### Charge for API usage

[Subscription Billing & Revenue Management](https://apis.io/capabilities/subscription-billing-revenue-management/) is getting paid. Kong includes usage-based billing, so you can bill customers for what they actually use.

- `POST /v3/openmeter/customers` creates a billing customer.
- `GET /v3/openmeter/customers` lists them.
- `POST /v3/openmeter/profiles` creates a billing profile with your invoicing settings.

### Make your APIs usable by AI agents

[Agent Tool Exposure](https://apis.io/capabilities/agent-tool-exposure/) turns your API operations into tools an AI agent can call, using MCP, the Model Context Protocol that assistants use to discover tools.

- `GET /v1/mcp-cp/{controlPlaneId}/mcp-servers` lists your MCP servers.
- `GET /v1/mcp-cp/{controlPlaneId}/mcp-servers/{mcpServerId}/code` gets the generated code for one.
- `GET /v1/mcp-cp/{controlPlaneId}/signals` reads signals about how they are doing.

## Getting started

Kong is open core: an open-source project plus a commercial hosted product, with self-serve signup. Kong Konnect offers a free trial at $0 for 30 days; the rest is in the [Pricing section of the Kong profile](https://apis.io/providers/kong/#pricing). Kong's documentation covers [Kong Gateway](https://developer.konghq.com/gateway/), the [AI Gateway](https://developer.konghq.com/ai-gateway/) and the [wider developer site](https://developer.konghq.com/).

On APIs.io you can browse the full [Kong profile](https://apis.io/providers/kong/) and APIs such as [Kong Gateway](https://apis.io/apis/kong/kong/), the [Kong AI Gateway](https://apis.io/apis/kong/kong-ai-gateway/) and the [Kong MCP Registry](https://apis.io/apis/kong/kong-mcp-registry/).

Start by registering the APIs you already have, so you can see your whole offering in one place before you open the doors.

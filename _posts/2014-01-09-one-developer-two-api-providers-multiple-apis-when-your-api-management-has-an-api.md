---
layout: post
title: >-
  One Developer, Two API Providers, Multiple APIs, When Your API Management Has
  An API
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Management
  - API Management
  - Providers
  - APIs
---
Building on my thoughts around [preparing your API for wholesale access](http://apievangelist.com/2014/01/09/is-your-api-ready-for-wholesale/ "preparing your API for wholesale access"), I’m thinking through the problem of developer API access when you have API providers offering up each others APIs, and bundling them seamlessly as part of their own API stack.

In this scenario I’m working through, API provider A has an API they offer up wholesale to partners, and API provider B wants to bundle API provider A’s API along with their own, adding value to their API and developer community.

In this scenario API provider B doesn’t want their developers to have to sign up for a separate API key with API provider A, the developer should just have to create one account and use one key for their application.

To make this seamless, both API providers need to have their own APIs for their API management system, allowing users and keys to be provisioned programmatically. All API provider A needs to do is create a service tier for their wholesale partners to have access to account and application provisioning, so their partners can seamlessly generate new accounts for their new developer accounts and switch API keys when developers uses the wholesale API.

This isn’t just an academic exercise. It is possible when your [API management infrastructure has an API like 3Scale provides their customers](http://bit.ly/13esk6Q "API management infrastructure has an API like 3Scale provides their customers"). I just think API providers aren’t thinking at this level yet, and thinking about how the future of how their APIs will be consumed in the future, and the potential of sharing users with their API partners.

I’ll keep exploring the various elements needed to make your API available in a wholesale way. Having an [API for your API management infrastructure](https://support.3scale.net/reference/activedocs#/account_management_api "API for your API management infrastructure") is definitely essential, and next I will be looking at having a machine readable API definition, and permissible terms of service (TOS).

_Disclaimer: 3Scale is an API Evangelist partner_
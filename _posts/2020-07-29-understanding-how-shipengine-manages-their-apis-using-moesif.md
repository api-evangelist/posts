---
published: true
layout: post
title: Understanding How ShipEngine Manages Their APIs Using Moesif
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_29_at_1.54.55_pm.png
author:
  name: kinlane
tags:
  - Analytics
  - Dashboards
---
I am working to better understand [the Moesif Analytics API](https://www.moesif.com) so that I can define a new type of Postman collection I am calling an API management collection. You wouldn’t use this collection to make calls to an API you operate, you would use it to automate and orchestrate the API management layer you use to operate your APIs. I am working with several API management providers, but Moesif came up in my queue of work, and I feel they represent a more progressive view of the API management landscape, so I got to work pushing this conversation forward. [I recently worked to create an OpenAPI and Postman collection for the Moesif API](http://apievangelist.com/2020/07/29/developing-a-reference-openapi-and-collection-for-the-moesif-analytics-api-so-that-i-can-build-an-api-management-collection/), so that I can better understand what they offer, and now I want to learn how some of Moesif’s customers are using their APIs, and [ShipEngine](https://www.shipengine.com/) was kind of enough to work with Moesif and me to help define an API management blueprint based upon how they manage their API infrastructure.

ShipEngine uses both Postman and Moesif, so they provide a pretty compelling blueprint for modeling my API management collection after.  I am looking to better understand which of the 12 Moesif resources they put to work using the Moesif API, so I can plan the next big of work on this partnership effort.

*   **Actions** - Understanding the context in which actions are tracked.
*   **Applications** - Understanding more about the context of an application.
*   **Cohorts** - Standardize how analytics are being organized by cohort.
*   **Companies** - How companies are being managed using the API.
*   **Dashboards** - What sort of dashboard orchestration and automation occurs.
*   **Events** - Looking at what events are being surfaced and are meaningful.
*   **Health** - How is overall health of the APIs being monitored and responded to.
*   **OAuth** - What sort of authentication and authorization is being automated.
*   **Search** - Understand how searching of companies, users, and events is done.
*   **URL Encoder** - I’d like to understand more about how it is used and compare to Postman’s.
*   **Users** - Define more about how users are being defined and worked with via the API.
*   **Workspaces** - Understand the way in which workspaces are utilized at the management layer.

I am looking to understand which of the Moesif API resources ShipEngine uses to manage their valuable shipping APIs. I am also interested in how they use Postman to work with the Moesif API. I don’t expect them to be using all of these APIs, or have some well oiled set of Postman collections in place for managing their operations. I am just looking to better understand what matters to them when it comes to managing their APIs, why and how they use the Moesif API to accomplish it. Now that I have a better understanding of what the Moesif API does after creating the OpenAPI and working with the Postman collection, I want to develop a suite of Postman API management templates (collections) that we can publish to the network. Introducing Postman consumers to the concept of API management collections with real world examples they can test drive on their own. 

Next, I’ll work with Moesif and ShipEngine to outline what one, or many API management collections might look like for the Moesif API. Then I am going to complete a diff with other API management providers I am working with (AWS API Gateway, Mulesoft, WSO2, Tyk, Azure API Management, Kong, Citirx), and see if I can define a handful of standardized API management collections that are consistent across multiple providers. Postman is looking for ways we can better empower our customers with some common API management features, and since we aren’t an API management service provider we are going to partner for these capabilities, and all partnerships at Postman begin with a collection. My primary goal is to get these valuable API management collections to be in the Postman network, but I’d like to also see them baked into the platform as full on integrations. So when ShipEngine goes to work with any of the Moesif API management collections, they get additional insights as part of each request, or even empowering ShipEngine customers to get more insights when they use ShipEngine APIs, augmenting responses with data pulled from Moesif via their APIs. There are lots of opportunities here for work, we just need to figure out which of the resources above are the most meaningful when it comes to managing APIs, and get to work on a proof of concept for the API management collection.
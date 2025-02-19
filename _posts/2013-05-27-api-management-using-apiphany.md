---
layout: post
title: API Management Using APiphany
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apiphany-logo-blue-300.png
author:
  name: kinlane
tags:
  - Management
  - API Management
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/apiphany-logo-blue.png)](http://apiphany.com "API Management")I'm working my way through all the [API management providers](http://management.apievangelist.com "API management"), making sure I'm up to speed on what service each provider is offering these days. As part of this work I've been playing with the [Apiphany](http://apiphany.com "API Management") platform, using a demo site the Apiphany team was so kind to setup for me.

Using Apiphany I can manage my APIs, and launch a portal which allows me to hang all my APIs, then manage all aspects of their operations. Apiphany focuses on the three main components of API deployment & consumption:

*   **APIs** - API resources and their operations you've deployed and would like to hang and manage via your Apiphany portal
*   **Products** - Virtual products you create, which allow access to various combinations of API resources and operations
*   **Apps** - Applications that are registered with the platform, and consuming APIs via various product subscriptions

The way Apiphany sets up the systems is very intuitive, giving you quick, administrative control over the systems you will need to execute on either a very simple, or even a very complex API strategy.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/apiphany-apis.png)](http://apiphany.com "API Management")

**APIs**  
Apiphany provides all the basics for API management, allowing you to add to endpoints, manage the title, description and manage operations for each endpoint, allowing you to define service operations to enable service documentation, interactive API console, per operation limits, request/response validation, and operation-level statistics. Beyond the basics you can mask APIs, implement sophisticated caching and import overall API definitions from a WADL, Google Discovery Document, Swagger or OData format.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/aiphany-import.png)](http://apiphany.com "API Management")

**Products**  
After you have all your raw API resources defined, you can move to define your "products", composed from your valuable API resources. The Apiphany product manager allows you to provide names and descriptions for your products, choose who has access and whether their are published or unpublished and the terms of use for any developer who subscribes to a product. API product management takes a lot of work, experience and creativity--the Apiphany management system makes it something anyone can do.

**Policies**  
The policies management area of Apiphany is where it gets seriously powerful. Using the products, APIs and their operations, you can define granular level policies that are essential to API operations. Policies can range from converting XML to JSON, providing JSONP or simply setting headers for specific APIs operations, and potentially within as specific product composition. Policies gives you a library of common policies that are used across the API industry via easy to apply templates, but also allow you to define custom Node.js policies. The ability to define and apply policies across products, APIs and their operations provides a very modular, reusable and granular control over all aspects of your API platform.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/apiphany-policies-2.png)](http://apiphany.com "API Management")

APIs, Products and Policies are the heart of the Apiphany API management solution. These provide the essential operational building blocks every API owner will need to execute an API platform. Apiphany also provides the necessary CMS framework to manage and support the developer portal, which wraps around your products, APIs and operations.

**Portal Management System**  
The APIPhany solution gives you full control over a developer portal to hang products, APIs and operations within--giving yuo control to customize the look, navigation of the portal with full page, content and media management. The Apiphany API Portal comes complete with the essential building blocks like documentation, blog, support and other CMS essentials to support an API platform.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/apiphany-dashboard.png)](http://apiphany.com "API Management")

**Analytics**  
Apiphany has added a pretty robust suite of API analytics that allow you manage the most common aspects of API operations, in the following three areas:

*   Usage - Calls and bandwidth
*   Health - Status code, cache and API response time
*   Activity - By developer, product, API and operations

The Apiphany analytics package allow you to filter by products and operations broken down by default dates like today, yesterday and 7,30,90 day or custom timelines. It gives you the basics of what you will need to be in tune with your API operations and make short or long term decisions for your API roadmap.

**Developers**  
Developers are central to any API operations and Apiphany provides the tools you will need to manage developer details and their subscriptions to products, and how their applications are using API resources. Apiphany gives you the control to block, reset and define access levels and roles for each of your developers, providing the control you need to manage your API ecosystem.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/apiphany/apiphany-developer.png)](http://apiphany.com "API Management")

This is my first deep dive into the Apiphany API management platform. I like what I see. It has all the tools you will need to define, secure, manage and evolve your APIs. Deploying APIs requires a certain level of understanding of APIs, but with Apiphany anyone could take a set of API endpoints and transform and evolve them into some meaningful API driven products.

After spending some time playing with what is possible with the Apiphany platform I'm left with thoughts about how I could craft products around the API resources I have. I feel like I could easily define some pretty robust API products developers could subscribe to and integrate with. But I also feel like I could easily iterate and add products, policies and create new APIs and operations to better meet potential consumers needs with very little effort.

I'm going to continue setting up my API infrastructure with Apiphany, and help me understand what is possible. I'd love to have my core platform available on all self-service API platforms, helping me understand where the space is at, and what each company brings to the table.
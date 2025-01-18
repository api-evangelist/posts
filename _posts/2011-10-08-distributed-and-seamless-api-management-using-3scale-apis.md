---
layout: post
title: Distributed and Seamless API Management Using 3Scale APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/3scale-logo.jpg
author:
  name: kinlane
tags:
  - Management
  - 3Scale
  - API Management
  - Scale
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-service-providers/3scale-logo.jpg)](http://www.3scale.net/)

I just added four new API to my API stack series. I’m considering breaking the API Stack series into a separate feed, they kind of clutter the main feed. Anyways, the four new APIs are from [3Scale](/serviceproviders/3scale.php "3Scale"):

*   **[Service Management API](/2011/10/08/api-stack-api-service-management-with-3scale-service-management-api/ "Service Management API")**
*   **[Account Management API](/2011/10/08/api-stack-api-account-management-with-3scale-account-management-api-/ "Account Management API")**
*   **[Analytics API](/2011/10/08/api-stack-api-analytics-with-3scale-analytics-api-/ "Analytics API")**
*   **[Billing API](/2011/10/08/api-stack-api-billing-with-3scale-billing-api-/ "Billing API")**

These four APIs offer the essential building blocks to control, manage and monetize the distribution of data, content and services via a web API.  3Scale has had their [Service Management API](http://www.3scale.net/support/service-management-api "Service Management API") for a while, but recently [added the account, analytics and billing services](http://blog.programmableweb.com/2011/10/06/api-management-within-your-existing-platform/ "added the account, analytics and billing services"), making a complete set of API management APIs.

3Scale already has two significant differentiors from other API managerment service providers:

*   **Proxy-Less** - 3Scale is different than the other service providers in that they don't proxy your APIs. 3Scale only uses a "connector" to integrate the services you want into your API.
*   **Self-Service** - 3Scale is the only self-service API management service with a freemium model. Well, except for [Mashape](/serviceproviders/mashape.php "Mashape"), they do to, but are in beta currently.

Adding a set of APIs, definitely sets 3Scale apart from the other [API management service providers](/serviceproviders/ "API Management Service Providers"). You can sign-up, connect 3Scale services to your API, without routing your API through a proxy, and seamlessly integrate 3Scale service, account and billing management into your existing systems, complete with analytics.

![](http://kinlane-productions2.s3.amazonaws.com/api-service-providers/3Scale/API-Management -3scale-API-Management-Solution.png)

Using 3Scale you can operate for free up to 50K calls per day, and start paying after your API grows or once you are looking to monetize your API and begin billing users.

Since [3Scale](/serviceproviders/3scale.php "3Scale") has a freemium model, I can play around with a lot of different deployments, until I find the configuration I'm looking for. I think I'll launch an API for [API Evangelist](http://www.apievangelist.com "API Evangelist") using 3Scale. See if I can integrate 3Scale service and user management into my existing CMS, and deploy some API analytics. I don't have anything at the moment I'd feel good about billing for, but maybe some day.
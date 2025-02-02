---
layout: post
title: >-
  Adding Four New Building Building Blocks Providing An API Management API
  Blueprint
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Management
  - API Management
  - Blueprint
  - API Blueprint
  - ddi
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-building-blocks-design.png)](http://management.apievangelist.com/building-blocks.html)

I am adding four new building blocks, to my list of suggested [building blocks that API providers should consider when crafting their API management strategy](http://management.apievangelist.com/building-blocks.html). These four building blocks, are based upon several things I’ve seen in the space, and how some current deficiencies I’ve identified that could slow things, and hold us back.

These new building blocks are all about API providers practicing what they preach, and making the account for API consumers, and developers, programmatic through an API management API. As I was profiling the [Maijet API](http://dev.mailjet.com/email-api/v3/metadata/) as part of my [email API research](http://email.apievangelist.com/), I noticed [they had an API for their developer accounts](http://apievangelist.com/2014/11/12/an-api-for-developers-to-access-their-api-account-information/), and with the growth in the number of APIs being consumed, [the need for account automation is only going to incease](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/), something that is only getting even more critical when you think about the [API service composition overhead needed to support the containerization and micro-services movement.](http://apievangelist.com/2015/02/02/api-management-infrastructure-and-service-composition-is-key-to-orchestration-with-microservices-in-a-containerized-world/) To help stimulate this area, and encourage API providers to automate their API accounts, I’m adding these four separate APIs building blocks, providing an overall blueprint for how API providers can launch a developer account API for their own API.

I used Mailjet’s approach as a base model, but quickly began looking at [3Scale own API design](https://support.3scale.net/reference/active-docs). 1) I use 3Scale, so I’m familiar with their approach to user management 2) Their API was simple, robust, and clearly a proven approach that was working. I broke 3Scale’s own endpoints down into four logical groups for v1 of this API management API blueprint. There were a number of features they had, that I wanted in there, but figured it was better to start out simple, and meet most of the common needs I'm seeing from my own experiences.

Here is what I came up with, after taking a look at 3Scale’s active docs.

**API Management API - User Management  
**Allow API API consumers to manage their own accounts via an API management API, enabling users to create, read, update, and delete information associated with their account--fields may vary, depending on what information each API requires for user accounts.

*   User Create
*   User Read
*   User Update
*   User Delete

**API Management API - Account Management**  
Beyond the user profile, allow API consumers to manage the billing related account information, enable the programmatic adjustment of credit cards, and being able to check in on invoices, and payments through the API management API.

*   Account Set Credit Card
*   Account Delete Credit Card
*   Invoice By Account
*   Invoice Line Item List
*   Invoice Payment Transaction List

**API Management API - Service Management**  
Enable API consumers to retrieve information about plans available for a specific API, or stack of APIs. Allow for listing of plans, and the features available for each plan. Also recommend considering the ability to set default plan for an account, enabling smooth application management.

*   Service Plan List
*   Service Plan Feature List
*   Service Plan Set To Default

**API Management API - Application Management**  
Ideally each user can have multiple applications, consuming API resources at various rates. This allows for the most flexibility in API consumption, but may vary depending on what API management infrastructure employed. This API should allow for management of all applications, with secure control over application keys. Additionally, there should be analytics available, with a short, simple, but robust list of metrics.

*   Application Plan List (per isolated service)
*   Application List
*   Application Create
*   Application Read
*   Application Update
*   Application Change Plan
*   Application Key List
*   Application Key Create
*   Application Key Delete
*   Application Usage by Metric

This represents the v1 stack I’d like to see every API provider offer, as well for my own portable stack of API management APIs. I don't just want my core APIs to have these features, [I want every wholesale API I deploy in other companies infrastructure to be equipped with the same basic stack](http://alpha.apievangelist.com/2015/02/26/making-my-3scale-api-management-portable-with-a-containerized-microservices/). I can add in more features later, but I think this represents the minimum viable stack for automating API consumption at this point.

Next up, I’ll build a docker image for deploying this API management infrastructure, alongside other APIs as a single virtual stack of loosely coupled micro-services, when bundled with the service composition 3Scale affords me, it will give me an unprecedented ability to orchestrate my API infrastructure. Hopefully it can also provide a blueprint for others to use, and evolve beyond what I can do on my own.

_**Disclosure:** 3Scale is an API Evangelist partner._
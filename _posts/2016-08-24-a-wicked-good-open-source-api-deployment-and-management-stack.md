---
layout: post
title: A Wicked (Good) Open Source API Deployment And Management Stack
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wicked-logo-140.png
atomdate: 2016-08-24T16:00:00.000Z
tags:
  - Deployment
  - Management
  - Open Source
  - Stack
  - Open
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wicked-logo-140.png)](http://wicked.haufe.io/)

I was introduced to a new [open source, Dockerized API operations solution called Wicked](http://wicked.haufe.io/index.html), that was developed by the integrated cloud and desktop solutions provider, the [Haufe Group](http://haufe.com). There are [a number of open source API management solutions out there](http://apievangelist.com/2014/10/05/taking-a-fresh-look-at-what-open-source-api-management-architecture-is-available/), and an even greater number of [API frameworks that can help you deploy your APIs](http://deployment.apievangelist.com/tools/framework/), but Wicked is the first to span several areas of the API life cycle including [DNS](http://dns.apievangelist.com), [deployment](http://deployment.apievangelist.com), [containers](http://containers.apievangelist.com), [authentication](http://authentication.apievangelist.com), [management](http://management.apievangelist.com/), and [documentation](http://documentation.apievangelist.com),

**Built On Existing Open Source API Gateway**  
The Haufe Group built the core of Wicked on top of an existing open source API management solution, further augmenting, evolving, and improving on an existing solution:

*   **[Kong API Gateway](https://github.com/Mashape/kong)** - Use Mashape Kong to protect and proxy your backend APIs

Why reinvent the wheel? It makes sense to build on existing solutions for API management, developing on top of what is already being used by API architects and developers.

**Simple Developer Onboarding  
**Wicked employs the latest approaches to allowing developers to onboard with an API, sticking to what is already working for API providers, and what developers expect: 

*   **Authenticate with email and password -** Let your users sign up with their email address and a password. Email addresses will be automatically validated by sending out verification emails.
*   **Authentication with GitHub or Google -** You may also configure signup and login using OAuth2 with GitHub and/or Google. These identities will be treated as 'verified' automatically.

I like that they let you use Github or Google on top of the standard email and password setup. I've been aggregating all my personal API developer accounts under my single @kinlane Github account, and when I set up a business account I authenticate using my @apievangelist Github account--more API providers should offer this, to help us all organize our accounts.

**Using Modern API Authentication  
**There are a handful of proven approaches out there for allowing developers to authenticate against an API, and Wicked allows for two of the most common approaches:

*   **API Key or OAuth 2 -** Out of the box, wicked enables fast securing of your API using API Key authentication or OAuth 2 Client Credentials Flow.

Allowing for either API key or OAuth will cover 75% of the use cases companies are looking for when securing their digital resources. Most public resources will just need an API key which acts as the identifier, but for personally identifiable information, OAuth is essential.

**Enabling API Service Composition  
**Every successful API provider knows that you don't provide the same access for all developers, and [service composition](http://apievangelist.com/2015/12/03/what-is-api-service-composition/) is an essential way to approach this--Wicked provides the essentials in this area: 

*   **Implement Rate Limiting -** Using Mashape Kong's rich functionality, implement rate limiting for your APIs, wherever needed.
*   **Subscription Plans -** API definitions can be associated with subscription plans, which can carry additional settings, e.g. different rate limits for different users.
*   **Group based rights to APIs -** Define custom user groups and assign those groups to users in order to limit access to specific APIs to specific groups. The Admin group can also be assigned.
*   **Group based rights to custom content -** The content section also supports group-based access, e.g. to How-tos or tutorials.
*   **Subscription Approval Workflow -** API Plans can be configured to require an approval of subscription; you will be sent an email to a predefined email address to the approval request.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/wicked-architecture-components.png)](http://wicked.haufe.io/)

While I am not a big fan of API approval workflows, as I prefer resources to be self-service, I was intrigued by the email approval feature, allowing for a (hopefully) frictionless onboarding flow that can add an additional layer of security for our most valuable of API resources.

**Providing The Necessary Application Mangement  
**APIs are all about developing applications, and Wicked allows for the identification of apps, and the incorporation of these apps into the service composition workflow: 

*   **Application Concept -** In order to subscribe to an API, a user needs to create an application (which is the client of the API); APIs are coupled with applications, not users.
*   **Application Owner Roles -** Applications can be shared among users, using different roles on the application: Admin/Owner, Collaborator, and Reader.

Users may have one or many apps which integrate with one or many APIs. This many to many relationships provide a robust way to manage API consumers, and potentially the multiple applications which they will develop.

**Interactive API Documentation  
**No API in 2016 is complete unless it has interactive documentation, and Wicked sticks with what works in this area and provides documentation for APIs using [Swagger UI](https://github.com/swagger-api/swagger-ui) and [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification). 

*   **Swagger UI Integration** \- In order to view the APIs in more detail, wicked has integrated Swagger UI, with configurable direct access to the backend services.

Using open API definitions like OpenAPI Spec, as well as providing up-to-date interactive API documentation is pretty much much the new baseline for APIs these days, and Wicked keeps up.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist-site/blog/docker-swarm-hero2.png)

**Scalable Deployment  
**Next, as if that wasn't enough, you get te scalable deployment of APIs using Docker. Wicked weaves together the DNS, deployment, and management of your APIs, and allows for modular deploy with Docker, and scaling with Docker Compose:

*   **Docker Deployment -** The entire APIm solution is deployed using docker; everything runs in docker, enabling deployments to whatever infrastructure supports it.
*   **Scaling With Docker Compose -** By using docker-compose, the deployment of your API Management solution can be easily scaled to use multiple instances of Kong, behind a powerful HAproxy.

This type of API deployment is how all APIs will be deployed in the future. We have a lot of work ahead of us when it comes to decoupling our legacy infrastructure, but Wicked gives us the tools we need to get this done--providing a fuller open source stack which we can more confidently bake into our infrastructure.

There are two things that stand out for me about Wicked. 1) It spans deployment and management in a scalable way 2) It is built using the best of breed open source tooling, specifications, and standards available out there right now--Kong, HAproxy, OpenAPI Spec, Swagger UI, and Docker.

I'm just getting going with Wicked. It makes me happy to see API operations solutions like this come together. I'm just getting going reviewing the stack, and [I am really liking the motivations behind why they did it](http://dev.haufe.com/state-of-our-api-strategy/), and how they are doing it--more to come.
---
published: true
layout: post
title: >-
  I Am Speaking About Powering the API Lifecycle with Collections & Environments
  Tomorrow at @APIdaysGlobal INTERFACE
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_06_29_at_2.12.34_pm.png
author:
  name: kinlane
tags:
  - Talks
---
[I am speaking tomorrow at 1PM Pacific time about using Postman collections and environments to define and power the API lifecycle at apidays INTERFACE](https://www.apidays.co/interface). I am stoked that I get to have a dream job where I get paid to push forward ideas at this level, and wanted to share some of the ways I am using OpenAPI in conjunction with Postman collections and environments to define then execute across the API lifecycle for a variety of APIs. My talk is going to walk through the relationship between an OpenAPI and collections, but also begin pushing forward the notion of what collections are for, while also demonstrating that environments can be used for much more than just a place to put your API tokens and keys.

Most developers know that you can use a Postman collection to store the details of an API you want to make requests to, helping you keep track of the all the details of each request and response. Developers have tons of these collections laying around, sometimes organized by personal and team workspaces. Developers are also using Postman environments to abstract away keys, tokens, and other key / values pairs that can be used across one or many collections. What most developers do not know is that you can use collections and environments to also deploy and manage your API across multiple stops along the API lifecycle, while also using them to measure and govern what is going with each API as it moves forward across a standardized API life cycle. My talk at APIdays INTERFACE is focused on this evolution in how Postman collections and environments can be applied to not just defining APIs, but also defining the API lifecycle.

### API Lifecycle Foundation

To help ground each API I am developing I establish a strong foundation for moving each API forward, providing me with a layer I can use for delivering every other stop along the API lifecycle, consistently delivering APIs at scale.

*   **Dedicated Workspaces** \- I establish a dedicated workspace for each domain, providing a single place to discover, collaborate, monitor, and run all artifacts that will be used to move each API forward across the API lifecycle.
*   **OpenAPIs  Contracts** \- Well crafted OpenAPI definitions are the core of each API I am moving forward throughout the AjPI lifecycle, providing a single contract for of the APIs being developed, staged, and delivered into production.
*   **Synced to GitHub** \- Every API contract is synced to GitHub. If I make any changes to the OpenAPI in Postman it shows in GitHub, and if anyone makes changes to it in GitHub, the changes show in my Postman, keeping us on same page.

This is the base for each of my APIs, which will be used to stabilize the development and delivery of each API. Providing a solid foundation for how we define and operate each API, but also consistency collaborate across the API lifecycle across many different teams, from different parts of the organization.

### Core Collections

Each domain workspace is setup to move a single, or a set of APIs forward, possessing a single set of API collections that I can use move the conversation around each API forward. Providing a set of collections that are derived from the OpenAPI truth, but used to power different stops along the API life cycle, demonstrating how collections can be used to do more than just store all of your API calls.

*   **Documentation** - There is a single collection used to publish documentation for the API.
*   **Mock Servers** - There is a single collection that provides the definition for mock servers.
*   **Testing**
    *   **Contract Tests** - There is a single collection dedicated to testing the contract of an API.
    *   **Performance Tests** - There is a single collection for testing the performance of an API.
    *   **Security Testing** -  There is a single collection for security testing of each of the API.

These collections exist for every one of the APIs I am moving forward. Living within the dedicated workspace that I have setup for each domain. These collections may have some standardized patterns, but are generated from the OpenAPI contract defined for each API, then evolved and validated as separate drivers for each stop along the API lifecycle.

### Operational Collections

Everything I have shown you so far isn’t that ground breaking. These are some pretty standard patterns that Postman sees across it’s more advanced users. However, my job as the Chief Evangelist at Postman is all about pushing this conversation forward, and I will be showcasing how I am defining next generation collections that will deliver on other stops along the API life cycle.

*   **Deployment** - Utilizing collections to execute and report on the deployment of APIs and their pipelines.
*   **Management** - Having collections that provide you insight and control into the management layer.
*   **Governance** - Using collections to define governance in a modular way that can be used across Apis.

These collections do not live within each domain workspace, and are managed centrally as part of an operational workspace. They are not generated or tailored to each individual API. They are defined as part of a wider organizational API operations strategy, and then get shared to each workspace when they are being applied. Providing a standardized way to govern how APIs are delivered across an organization.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_06_29_at_2.12.51_pm.png)

### Environments

Lastly I want to demonstrate how Postman environments can be used to abstract away tokens, keys, and other key/value pairs, but also be something that can help mange the evolution of an API from development to production, but also the ongoing management and governance of each API using a common strategy.

*   **Development** - Having an environment for the development stage.
*   **Production** - Having an environment for the production stage.
*   **Deployment** - Tracking deployment and pipeline details in environment.
*   **Management** - Publish the management layer of contract to environment.
*   **Governance** - Define, measure, and report upon governance across the lifecycle.

Environments are the critical artifact needed to not just define the API lifecycle, but are used to execute and deliver across it. When it comes to the API lifecycle you can’t manage and report upon what you can’t define, and Postman environments are increasingly how you define both the provider and consumer dimensions of the API lifecycle.

### **Defining and Powering the API Lifecycle**

This is my most recent attempt to help quantify what the API lifecycle is. Helping make the API lifecycle more tangible and meaningful to stakeholders is what I’ve been doing as the API Evangelist, but also what I am now doing as the Chief Evangelist at Postman. For me, collections and environments represent the gears we will be using to execute upon the API lifecycle at scale across our organizations. In the last six months I have finally been able to see the relationship between OpenAPI and Postman collections, as well as the critical role that Postman environments play across the API lifecycle. Finally getting me to a place I have been working towards for the last ten years, allowing me to quantify, measure, adjust, communication, report, and collaborate on the API lifecycle.

If you are keen on learning more, [join me 1PM tomorrow for my using Postman collections and environments to define and power the API lifecycle at apidays INTERFACE](https://www.apidays.co/interface). Hopefully it will provide you with a glimpse into not just how I am defining collections and environments, but also how Postman customers are pushing forward the notion of what collections and environments are used for. Realizing that Postman isn’t just an HTTP client for testing APIs, but a platform that you can use to define and deliver your APIs, as well as put them to work once they are ready for prime time. I look forward to seeing everyone online tomorrow for apidays INTERFACE, and if you have specific things you’d like me to focus on, feel free to tweet at me before the event and I’ll see what I can do. See y’all tomorrow!
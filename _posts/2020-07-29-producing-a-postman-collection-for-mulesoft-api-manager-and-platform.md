---
published: true
layout: post
title: Producing a Postman Collection for Mulesoft API Manager and Platform
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_29_at_9.20.45_pm.png
author:
  name: kinlane
tags:
  - Collections
  - Management
---
I am making my way through all of the partner conversation I am having, publishing stories for each of the conversations to help me move each one forward. Today I am focusing on API management providers because I am looking to define a baseline set of resources across all providers to consider for deeper integration, and of course storytelling. I’ve been talking with the Mulesoft folks since last year, working to find some ways we can partner and provide value for both of our customers. As with every other partnership, and especially API lifecycle partners, everything begins as a collection. If I can’t get at the APIs behind a service, create an OpenAPI and Postman collection for the API, then it isn’t an API lifecycle capability I can think about for deeper integration, and further storytelling. But Mulesoft isn’t messing around, and [they have Swagger and RAML available for all of their API lifecycle services and tooling](https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/) 

I downloaded the generated Swagger 2.0 definitions Mulesoft provides for their API manager and API platform. There are some other interesting APIs available there that I would like to see live as Postman collections. Honestly, I’d like to see all of the APIs they have published via [the Mulesoft // Dev catalog](https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/) in the Postman API network, as well as Postman collection added to the dropdown list Mulesoft provides for each API, allowing it’s definition to be downloaded as RAML, Swagger, or Postman Collection. As with the other API management service providers I am profiling as part of this work, I created a Postman workspace for managing Mulesoft APIs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_29_at_9.20.45_pm.png)

With the Swagger 2.0 and Postman collections for the Mulesoft API Manager and API Platform I can begin to break down the individual capabilities that the API management solution provides. Then I can pick from the most common of these API management building blocks and get to work developing some collections that help API providers automate and orchestrate the management of their APIs.

*   **Alerts** - Sending alerts about APIs.
*   **APIs** - Managing the APIs being delivered.
*   **Applications** - Understanding how they see apps.
*   **Automated Policies** - They do it all with policies.
*   **Environments** - Need to understand their environments.
*   **Groups** - Understanding how groups are applied.
*   **Organizations** - Looking at how they organize things.
*   **Policy Templates** - How are policies being standardized.
*   **Portals** - Evaluating how they organize their portals.
*   **Themes** - Managing the themes applied to the portals.
*   **Versions** - Handling change across all of the API.

I was able o get an idea of the types of resources available across the Mulesoft Manager and Platform APIs. The collections will take some additional work to polish and organize, so that they could potentially be published to [the Postman API Network](https://explore.postman.com/), but provide me with a good start to understand what is possible. Right now I am just looking to define what is possible when it comes to automating and orchestrating Mulesoft API management using APIs. It will take more work to actually identify the most common management workflows involved with Mulesoft when it comes to managing APIs.

The goal of this work is to increase the number of API management service providers available in the API network, and laying the groundwork for a suite of collections that can be used to expose more data to Postman customers who use Mulesoft Management or Platform. The goal is to be able to expose insights from the API management layer directly in Postman. But before we can do this we need to have the functionality defined as individual collections. Helping establish modules of API management capabilities that API providers and consumers can tap into while working within Postman. Providing more details with each individual API response, helping developers better troubleshoot and debug what is going on beneath the surface.
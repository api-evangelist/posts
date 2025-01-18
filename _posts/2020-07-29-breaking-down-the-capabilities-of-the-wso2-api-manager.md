---
published: true
layout: post
title: Breaking Down the Capabilities of the WSO2 API Manager
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_29_at_4.00.10_pm.png
author:
  name: kinlane
tags:
  - Capabilities
  - Management
  - Policies
---
I am profiling a number of API management APIs right now and reaching out to each of their teams to discuss moving forward a set of official API management collections that I can have published to the API network, and use to flesh out more API lifecycle capabilities within the Postman platform. Postman isn’t an API management service provider, so it make sense for us to expose existing API management and gateway solutions as integrations, rather than attempt to build anything on our own, partnering with the best of breed API management solutions already in use. This will be our approach to other stops along the API lifecycle, weighing the possibilities with each stop, based upon what already exists in the space, and what the opportunities are for us to build, partner, or a mix of both.

Next up on my list of API service providers is to profile and assess as part of this work is [WSO2](https://wso2.com/). I’ve worked with WSO2 since way back in 2012, so I am somewhat familiar with their product and services. As with all of the other API management providers I am profiling I am looking for an existing OpenAPI or Postman collection to help me understand what is possible with each API. It was pretty easy to find the Swagger file for each of the WSO2 [publisher](https://docs.wso2.com/display/AM200/apidocs/publisher/), [store](https://docs.wso2.com/display/APICloud/apidocs/store), and [administrative](https://docs.wso2.com/display/APICloud/apidocs/admin/) APIs, but I couldn’t easily find them for their tokens or analytics API, or their Microgateway—I will ping them to see if they have Swagger for these. I was able to upload three Swagger 2.0 definitions into a Postman workspace—I normally would upgrade to OpenAPI 3.0, but since these were provider managed specs I will keep them as is, in case I need to update.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_29_at_4.00.10_pm.png)

There are a wealth of resources available across these three WSO2 API, and having them available as Swagger definitions, and generated Postman collections helps me make sense of what is possible. This provides me with a set of three reference collections that I can use to begin planning a variety of WSO2 specific workflow collections. In addition to the reference collections for WSO2 API Manager, and WSO2 specific API management workflow collections, I am looking to define a handful of common patterns that I see across other API management service providers I am profiling. I want a full suite of Postman API management collections across as many providers as I can, as well as being able to clearly point to common API management practices that exist across multiple API management providers.

Here are the resources I am seeing available across these Postman collections:

*   **APIs** - Managing APIs deployed using the WSO2 publisher.
*   **Applications** - Exploring what the context of an application is.
*   **Blacklists** - Being able to decide who has access to APIs.
*   **Policies** - Going deeper with polices being applied to APIs.
*   **Subscriptions** - Managing the subscriptions available for Apis.
*   **Tiers** - Defining what the tiers of access are for all APIs.
*   **Throttling** - Defining what the rate limits are for APIs published.

The process of [producing a Swagger / OpenAPI and Postman collections](https://github.com/api-evangelist/wso2) puts me in touch with what is possible with each API. Once I am done profiling all of the API management service providers I will conduct a diff between each of them to create a kind of Venn diagram for these resources. Now that I have an API workspace set up with a reference Swagger and Postman collection, I can work to push forward the conversation with WSO2 in a handful of ways. 

*   **Official Collection** - Convince WSO2 to take ownership of the Swagger and Postman collection within their own Postman workspace, and add the three WSO2 reference collections to the Postman API network.
*   **Management Collection** - Alongside this work to get the official reference collection in the network, I want to also work to define a handful of API management collections that help define common API management tasks. 

Once I have a reference collection, as well as a handful of API management collections I’d like to do more storytelling around what is possible with WSO2 within Postman. I’ll be focusing on understanding what WSO2 brings to the table, but also do the diff on what they offer compared to other API management service providers. I want to better understand the common patterns that exist across API management service providers, as well as the unique capabilities that exist within individual service providers. Having these artifacts is essential to me doing the work, and I appreciate that WSO2 has Swagger, even if I’d prefer to see OpenAPI 3.0 (I know they support it), because it saves me time. Once I get WSO2 added to the Postman network they will be seen as a “network” partner, then I will look for ways to more deeply integrate these API management collections into Postman, while also looking at how we can bake Postman collections into WSO2 API manager, allowing WSO2 customers to publish Postman Collections for their APIs, and choose to add them to a public or private network using Postman.

With each API management provider I profile I am gaining more coherence in the view I have for API management. Once I have a short list of the most essential capabilities API providers are using when it comes to managing their API using WSO2 API manager I will work with them to develop and own API management collections that we can add to the network as templates. I really want WSO2 to have a presence in the API network, but I really want to be able to expose their capabilities within Postman. Giving WSO2 users more super powers when they work with their APIs in Postman, but also open up those super powers to the developers who are using WSO2 customer APIs. Providing more insight into the API management layer for the APIs we are consuming, further helping Postman users debug and troubleshoot what is going on underneath the hood. Leverage the API infrastructure beneath the APIs we deliver to help make working with those APIs more intelligent, reducing friction for both API providers and consumers when it comes to putting APIs to work on the enterprise factory floor.
---
published: true
layout: post
title: What You Mean When You Say You Have An Open API (Not OpenAPI)
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algo-rotoscope/square/statue-face-open-mouth_copper_circuit_square.png
author:
  name: kinlane
tags:
  - Access
---
My friend Lorenzino Vaccari ([@lvaccari)](https://twitter.com/lvaccari) asked me to help him with what I think of as an open API. Not to be confused with the OpenAPI specification, but an API that is “open”. I’ll begin with the state of things and the reality that there are many API providers who proclaim that they have an open API, when in reality there are very, very, very, very, very, few APIs that are actually open. Honestly it is a term that I’d completely avoid using mostly because it doesn’t have any meaning anymore, but also because of the unfortunate name that Swagger was given after it was put into the Linux Foundation. Even so, I’d do anything for Lorenzino, so let’s work through this exercise of what it actually means when you wield the term “open API” in my opinion—so here we go.

In my opinion, the most common thing that “open API” means is open for business. It has almost nothing to do with API access, but if I was to explore what an honest real world bar for what “open API” SHOULD mean, here is a list of things I would consider. First, I’d say that being an open API is not black or white, but more many shades of gray, resulting in a laundry list of things API providers and consumers should be considering when they wield the term.

*   **Discovery** - Can I find the API? Is it easy to discover and explore for any potential consumer.
*   **Portal** - Is the landing page or portal for the API accessible to the public, allowing me to learn about the API.
*   **Docs** - Is there complete, up to date API documentation for the API that is accessibly publicly.
*   **Paths** - Do developers have access to all of the paths that are available for the API made available.
*   **Enumerators** - As a developer do I have access to all enumerated values that can be used for an API.
*   **Read / Write** - Is an API just GET access, or can developers POST, PUT, and DELETE resources.
*   **Media Types** - Are there standardized media types in use for each API response from an API.
*   **Sign-Up** \- Is the signup for the API self-service and allows developers to easily access and complete.
*   **Sign-Up Scope** - How much information is required from developers to be able to get access to an API.
*   **Sign-Up Approval** - Do developers have to wait for access and be approved before they can obtain keys to access.
*   **Authentication** - What is involved with authentication, and is the technical bar set too high for some developers.
*   **Design** - Is an API intuitive, easy to understand, and accessible to everyone using it, or is it cryptic and hard to learn.
*   **Consistency** - Are API patterns consistent across all APIs, alleviating extra work to put any of the APIs to work.
*   **Rate Limits** - What limitations are placed upon developers access to an API, limiting the usage of any individual API.
*   **Rate Ceilings** - Are there not just limits, but entire ceilings I cannot overcome at any point in development.
*   **Sandbox** - Can developers access all APIs in a sandbox, so you do not have fear of only working with live data.
*   **Status Codes** \- Are standard HTTP status codes returned allowing for understanding what each response means.
*   **Error Messages** - Are there standardized and coherent error messages associated with each API, making things understandable.
*   **Availability** - Is there large periods of time when the API is not available for use within applications.
*   **Reliability** - Is the availability of the APIs reliable, making it something developers can count on and put to use.
*   **Performance** - Is the API performant and something you can actually receive responses in an acceptable time frame.
*   **API License** - Is the interface for an API openly licensed so I can confidently integrate and use in my code.
*   **Data License** \- Is data returned as part of API responses licensed in an open way allowing developers to use.
*   **Code License**.- Are the cod made available as part of an API openly license for wide usage within applications.
*   **Usage Costs** - Are the costs associated with usage of an API within reasonable ranges for developers.
*   **Cost Increases** \- Are there regular cost increases that might move an API out of range of access.
*   **Support** - Can I get access to support when it comes to accessing and using an API.
*   **Communication** \- Is there anyone home behind an API helping communicate about what is happening.
*   **Road Map** - Is there any visibility into what the future will hold when it comes to the development road map.
*   **Censorship** - Is data or content actively being filtered or censored as part of API operations.
*   **Privacy** - Is there a privacy policy in place that protects developers and their usage of an API.
*   **Terms of Service** - Is there a TOS in place that governs the API, and what are the constraints in place.
*   **Service Level Agreement** - Are there any guarantees In place that govern the availability and costs associated with an API.

This may seem like a lengthy list, but in reality these are all of the ways in which APIs are made closed, when they are marketed as being open. There is also a very invasive quality to many APIs that are marketed as “open”. Meaning they distract you by being easy to access and free, while they are extracting data from you, and putting your data and privacy in jeopardy when it comes to breaches, and selling your data. So, the opposite of open, or exploiting your life so that YOU are more OPEN for business, for sale, and generating value for a platform. Honestly I’d ay that open API means this type of exploitation more than it ever means anything about the API and its resources being available—this is the dirty (not so secret) secret of the API sector.

In reality, there are many layers to the open API onion. Intentionally making it very difficult to truly rank APIs as being open or not. Even if you can make sense of the documentation, signup, authentication, rate limits, pricing, and terms of service for an API, there are many other ways in which an API can be further locked down, restricted, and closed down. If an API provider declares they have an “open API” I honestly see it as a red flag. I think we need to come up with another phrase to describe what many of us mean when it comes to API access, and attach it to some very specific deliverables. The phrase open API is too tainted at this point to recover what it means, and turn it into anything meaningful. I don’t expect every API provider to adhere to this list, but as a community we should be thinking about all of these ways in which API providers introduce friction, ultimately making their APIs more closed—after on-boarding with thousands of APIs, I’ve seen it all.
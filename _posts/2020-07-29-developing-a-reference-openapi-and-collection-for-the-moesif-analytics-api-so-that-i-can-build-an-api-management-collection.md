---
published: true
layout: post
title: >-
  Developing a Reference OpenAPI and Collection for the Moesif Analytics API So
  That I Can Build an API Management Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_28_at_6.08.30_pm.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Analytics
  - Collections
---
I am working my way through profiling [API analytics provider Moesif](https://www.moesif.com/). I have a pile of partner related work accumulating and there is no better way to work through what is going on than just writing here on API Evangelist—it is what this blog is all about. I am interested in Moesif because they are a next generation API management provider that represents the ever expanding universe of what we need to manage our APIs at scale. With the consolidation and commodification of API management since 2015, we’ve seen more specialized API service providers emerge like Moesif who are focused on just one aspect of management—like analytics.

My review of any API service provider always begins with looking at their own developer area, and identifying whether or not they have an API (all API service providers should have APIs)—Moesif has one. Next, I need a machine readable API definition—either an OpenAPI or Postman, ideally both, as they have varied but overlapping purposes. Moesif is using Postman, which I will talk about more in a bit, but alas there wasn’t an easy OpenAPI or Postman collection for me to put to work (shame shame). Luckily they use Slate for their docs, which always means there is some easy to scrape and parse markdown or HTML right behind things. I quickly [generated an OpenAPI for the Moesif API analytics API](https://github.com/api-evangelist/moesif/blob/master/openapi.json).

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_28_at_6.07.31_pm.png)](https://github.com/api-evangelist/moesif/blob/master/openapi.json)

It isn’t a complete OpenAPI, but it does give me the paths, summaries, and parameters in a machine readable format. I can use this to generate a Postman collection, then begin using it to certify each of the endpoints, saving examples, and making for a more robust definition for docs, mocks, testing, and other lifecycle stops. To continue working with my Moesif OpenAPI definition I will need to create a dedicated workspace in Postman for my work with this partner, and publish the OpenAPI in my Postman API Builder.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_28_at_6.08.30_pm.png)

With the entry level OpenAPI in Postman, I am not able to generate a Postman collection, which I then do a little more polishing and organization of requests, helping make the Moesif API a little more actionable as part of other work. [Right now this is what I call a reference collection](https://github.com/api-evangelist/moesif/blob/master/collection.json), providing me with a complete list of the value that Moesif brings to the table.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_07_28_at_6.09.54_pm.png)

Now that I have the building blocks of what Moesif does, as tags within the OpenAPI, and as folders within the Postman collection. This provides me with the understanding I will need to create additional Postman collections that help API providers accomplish specific business objectives. I have my sights set on pushing forward three Postman collections for the Moesif API:

*   **[Reference](https://github.com/api-evangelist/moesif/blob/master/collection.json)** - The collection I have is the beginning of a reference collection, but I still need to certify each endpoint to make sure it works, and they each have an example.
*   **On-boarding** - I’d like to see an on-boarding collection for the Moesif API, providing the most common requests someone will need to begin making sense of traffic to their AP
*   **Management** - Lastly, I want a management collection that redefines the Moesif API in the context of API management, providing a collection that Postman customers can use to manage operations.

I have a couple of selfish motivations here. [I want Moesif’s Postman collection in the API Network.](https://explore.postman.com/) I also want the management collection to go with a wider suite of API management collections I’m developing across service providers. I want a robust suite of Postman collections in the Postman API network for our customers to use when managing their APIs. These API management reference collections help me better define the landscape, but where the value will really become evident is when you start building workflow collections that help API providers automate the management of APIs across the API lifecycle. 

### Replaying API Calls in Postman

Once I get the Moesif reference collection into the Postman network, we will consider them to be a “network” partner, but even without this, we consider Moesif to be a “runtime” partner. Meaning, they’ve baked the schema for a Postman collection into their platform. Here is how Moesif describes it as part of the documentation for their API analytics, when it comes to [replaying API calls in Postman](https://www.moesif.com/docs/api-analytics/run-in-postman/).

_“Moesif supports selecting and exporting API Calls as a Postman Collection for easy replay. This enables any problematic API calls or even sequences of API calls found in your production environments to be sent to Postman in order to reproduce the issue in a test / local environment.”_

This type of "runtime" integration allows you to speak Postman for all the APIs you are managing, using Postman to debug and troubleshoot what is happening. It is a great way to reverse engineer your existing APIs, generate a Postman collection, and then make calls to each API, as well as mock, document, test, and automate different workflows involving your APIs. This is one reason I want to have the Moesif API mapped out as a collection, because then we can begin to map out how Postman can expose Moesif enabled capabilities as seamless integrations. On the Postman platform, all integration partnerships begin with a collection, and then after we validate, harden, and make these collections more valuable, we expand their availability across the Postman network, platform, and desktop.

### Developing and Strengthening Partnerships

This post is meant to help me better define how Postman and Moesif can potentially partner. It is also meant to help other potential partners understand how we are working to develop partnerships with Postman, and how you can help streamline the process by having OpenAPIs and Postman collections already defined for your APIs, and further bake Postman collections into your functionality by leveraging the Postman collection schema as part of importing or exporting into your platform. This post helps me move forward this conversation a bit, share my thoughts with Moesif, and define what some of the next steps are. Now we need to further refine and certify the Moesif API collection, and get into the Postman network. Then I want to focus on creating a management collection based upon how Moesif customers are using the platform. Our friends over at [ShipEngine](https://www.shipengine.com/) said they’d be interested in helping define one based upon how they use the Moesif API and Postman together, providing a real world blueprint for this Moesif API management collection I’d like to see created.

I have a list of partners who want to work with Postman to develop reference, on-boarding, lifecycle, and other types of collections. Writing each of them out here on the blog is the only way I am going to get through this work, quantifying each of these relationships, and proposing some next steps to move the conversation forward — this is the only way we’ll get to the most exciting part of the journey, where we get to tell stories on the blog, in the newsletter, via Webinars, Twitch streams, and other channels we broadcast on. First we need lay the foundation with reference collections for each partner, get them added to the network, then we can begin getting more creative using Postman to not just work with the APIs we are providing and consuming, but use it also to actually automate, orchestrate, and evolve our APIs across the API lifecycle. If you have any needs for API lifecycle collections for stops like deployment, management, security, monitoring, testing, or other areas of operations, let me know. Also if you are an API service provider with an API-driven service like Moesif you’d like to see in this suite of API lifecycle collections—this post should provide you with more information on how to shift your potential partnership with Postman into a higher gear.
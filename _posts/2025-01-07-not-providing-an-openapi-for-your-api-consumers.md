---
published: true
layout: post
title: Not Providing an OpenAPI for Your API Consumers
tags:
  - OpenAPI
  - Postman Collections
  - Bruno Collections
  - Onboarding
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/francis-williams-banana-subway-stairs.jpeg
---
One of the steps of profiling any API for API Evangelist and inclusion in [APIs.io](https://apis.io) involves searching for the name of the company plus Swagger, OpenAPI, and Postman. While profiling we are always looking for the evidence of these artifacts, but more importantly we are looking to quantify how a company handles their support for consumers building applications and using their API for integrations. There are plenty of signals to harvest within a company’s API portal to better understand, but there are also plenty of signals to harvest on the open web via GitHub, forums, and API hubs and marketplaces which tell the story of how well an API is supported.

A common thing we come across while profiling APIs is that when there is no OpenAPI present powering documentation that you oftentimes have consumers actively asking for an OpenAPI via forums and GitHub issues. The bar is low for producing an OpenAPI, so when one hasn’t been created, we always assume there are other things going on behind the scenes. Other times we won’t find an OpenAPI, but we’ll find a Postman collection present, similar tow what we found with the [Pinecone API](https://contracts.apievangelist.com/store/pinecone/), where you see the following:

- [Forum Asking](https://community.pinecone.io/t/openapi-definition/1152) - Consumers are actively asking for an OpenAPI.
- [User Generated](https://github.com/sigpwned/pinecone-openapi-spec) - Consumers have done the work to produce an OpenAPI.
- [Have a Postman Collection](https://www.postman.com/rohailaltaf/pinecone-io-api/overview) - There is an active Postman Collection.

These situations tend to leave us scratching our heads on why a platform won’t officially support and maintain not only an OpenAPI, but also a Bruno and Postman Collection. These artifacts work similar to community generated SDKs, and there is no reason you can’t bring them inside the portal for your API and publish them with a warning sign that it is community driven. Or better yet, actually take the time to produce an official [OpenAPI](https://properties.apievangelist.com/store/openapi/) source of truth for your API and then generate [Postman](https://properties.apievangelist.com/store/postmancollection/) and [Bruno](https://properties.apievangelist.com/store/brunocollection/) collections from that source of truth.

Having an OpenAPI available for your API will save you time as an API producer when it comes to publishing your documentation, mock servers, and generating SDKs. Having an OpenAPI available for your API will save your consumers time when it comes to generating their own SDKs and integrating them into their existing systems. There is no excuse in 2025 why you don’t have an up to date and complete OpenAPI for your APIs, and there are plenty of examples of API producers who are maintaining their OpenAPIs on GitHub to meet their own needs, but also satisfy the needs of their consumers in the same motion.



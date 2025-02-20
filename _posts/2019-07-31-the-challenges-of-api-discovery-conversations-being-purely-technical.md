---
published: true
layout: post
title: The Challenges Of API Discovery Conversations Being Purely Technical
date: 2019-07-31T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Service Mesh
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/containership-containership-blue-circuit-5.jpg
author:
  name: kinlane
---
Ironically one of the biggest challenges facing API discovery on the web, as well as within the enterprise, is that most conversations focus purely on the technical, rather than the human and often business implications of finding and putting APIs to work. The biggest movement in the realm of API discovery in the last couple years has been part of the service mesh evolution of API infrastructure, and how your gateways “discover” and understand the health of APIs or microservices that provide vital services to applications and other systems. Don’t get me wrong, this is super critical, but it is more about satisfying a technical need, which is also being fueled by an investment wave-—it won’t contribute to much to the overall API discovery and search conversation because of it’s limited view of the landscape.

Runtime API discovery is critical, but there are so many other times we need API discovery to effectively operate the enterprise. Striving for technical precision at runtime is a great goal, but enabling all your groups, both technical and business to effectively find, understand, engage, and evolve with existing APIs should also be a priority. It can be exciting to focus on the latest technological trends, but doing the mundane profiling, documentation, and indexing of existing API infrastructure can have a much larger business impact. Defining the technical details of your API Infrastructure using OpenAPI, Postman, and other machine readable formats is just the beginning, ideally you are also working define the business side of things along the way.

I find that defining APIs using OpenAPI and JSON Schema to be grueling work. However, I find documenting the teams and owners behind APIs, the licensing, dependencies (both technical and business), pricing, and other business aspects of an API to be even more difficult. Over the last decade we’ve gotten to work standardizing how define the technical surface area of our APIs, but we’ve done very little work to standardize how we license, price, own, collaborate, and track on the other business implications of delivering APIs. This is one reason Steve Willmott and I created <a href="http://apisjson.org/">the APIs.json format</a>, to help drive this discussion. Providing a machine readable API format to transcend the technical details of APIs, and allow us to better define the operational side of making sure APIs are discoverable.

APIs.json is about defining everything about your APIs that JSON Schema, OpenAPI, and AsyncAPI will not. Where your documentation is, how to find SDKs, what the terms and conditions are, or maybe the licensing behind your API. We designed the API specification to be flexible, and something that can be extended. There are a handful of default property types you can use when applying the format, but ultimately it is about pushing you to define your own using x- extensions. Helping API providers think through what the common building blocks of their API operations are, and provide them with a simple JSON or YAML format for indexing all of these elements for use in your API catalog, or publishing to the root of your developer portal. Helping augment what OpenAPI, JSON Schema, and AsyncAPI have done, but providing a single place for you to hang all of your API artifacts.

I’m working hard to continue refining my catalog of 3K+ APIs.json files. I’m working on better ways to validate or invalidate what I have indexed, and provide a single search interface for them. Once I’ve refreshed the catalog, and synced them with the evolution of the available APIs over at <a href="http://apis.io">APIs.io</a>, I will publish a fresh list of the companies I’m tracking on. I feel like one of the most critical business aspects of API discovery we consistently overlook, ignore, or are in denial of, is whether an API is still active, and anyone is home. This is a rampant illness in the cataloging of public APIs, but also something that you can find all over the enterprise. We need to do a better job of understand where are APIs are, but also be more honest about which APIs are used, do not have an owner, or are straight 404’ing and shouldn’t be listed in any active API catalog.

---
published: true
layout: post
title: Translating Postman Collections Into APIs.json Collections And Back Again
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/postman/postman-logo.png
author:
  name: kinlane
tags:
  - Postman
  - Collections
  - APIs.json
  - Collection
  - APIs
  - ai
  - Postman Collections
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/postman/postman-logo.png)](https://www.postman.com/)

I've been a [Postman](https://www.postman.com/) user for a while, as a tool for quickly making API calls against the APIs I use most, and explore the new APIs I discover daily. As I use Postman, I can't help but think the concept of assembling collections of API calls using Postman, is in sync with part of our vision for [APIs.json](http://apisjson.org)\--we just need a common way to communicate.

APIs.json is not just for defining the API operations that exist within a specific domain, which is the most common approach, it is also about assembling collections of multiple APIs, for a specific purpose. In my mind, the motivations for assembling Postman collections, and APIs.json collections are definitely in alignment.

Similar to providing resources for translating between popular API definition formats like [Swagger](http://swagger.io) and [API Blueprint](https://apiblueprint.org/), I want to make sure and translate between emerging API discovery and collection formats. While I’d love for APIs.json to become the default standard for API discovery, I’m happy to embrace other formats, designed for other API tools—as long as they are striving to be as open as they can.
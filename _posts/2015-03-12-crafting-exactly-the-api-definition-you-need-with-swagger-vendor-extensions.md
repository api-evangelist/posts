---
layout: post
title: Crafting Exactly The API Definition You Need With Swagger Vendor Extensions
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Extensions
  - Definition
  - Swagger
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://swagger.io/)

I was listening the [APIsâUncensored podcast last weekend](https://soundcloud.com/apisuncensored), where Ole Lensmar ([@olensmar](https://twitter.com/olensmar)), and Lorinda Brandon ([@lindybrandon](/admin/blog/lindybrandon)) sat down for a conversation with Tony Tam ([@fehguy](https://twitter.com/fehguy)), the creator of API definition format Swagger. There are a lot of interesting API informational nuggets throughout the podcast, some of which I'll be writing about, but this one is about something Tony mentioned—called [Swagger vendor extensions](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#vendorExtensions).

I've been using Swagger for a while, and specifically Swagger 2.0 since its release, and Swagger vendor extensions was new thing to me—most likly user error. I don't ever sweat things I miss, because I consume so much information each day, things are bound to get past me. Anyways, Swagger vendor extensions are simply the ability to add any property to an API definition by using the “x-“ prefix”.

This is something we do with [APIs.json](http://apisjson.org) as well, and is something that I think becomes the R&D layer for any specification. Since I just learned about this ability, I do not have many examples of what has been done with these extensions. [I found a post from Apigee](https://blog.apigee.com/detail/tutorial_using_apigee_127_to_build_apis_in_nodejs_swagger_20) demonstrating how you can add "capabilities such as caching, quota, OAuth, and analytics to your API with Swagger vendor extensions via a [project we call Volos.js](https://github.com/apigee-127/volos\))”, and I came across [Wikimedia using a "x-subspecs” in the API definition for Wikipedia](http://rest.wikimedia.org/en.wikipedia.org/v1/?spec)—now that I’m tracking on Swagger vendor extensions I will look for them in Swagger specs I come across.

I've come across blog posts about Swagger, where people outline how they don’t use it because they can’t define something they want. Maybe they just didn't know about Swagger vendor extensions like me, IDK. Regardless I will be tracking on how people are extending Swagger using the vendor extensions, and begin brainstorming some of my own ideas on how they can be used to craft exactly the API definition you need.
---
layout: post
title: Machine Readable API Definition Format Swagger Matures to 2.0
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-20.png
author:
  name: kinlane
tags:
  - Definition
  - Swagger
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swagger-20.png)](http://swagger.io/)

The [machine readable API definition format Swagger](http://swagger.io/), just rolled over to version 2.0. I use Swagger to describe all of my APIs, and I largely associate the creator of Swagger, [Wordnik](https://www.wordnik.com/) for kicking off this latest renaissance in defining APIs in a way that provides us with a machine readable vocabulary to talk about all of these valuable resoures that we are exposing via APIs.

There are other formats out there, older ones like WADL, and more recent ones like [API Blueprint](http://apiblueprint.org/), and [RAML](http://raml.org/), but Swagger was the one that revived this movement, helping us create ways for generating important elements throughout the API lifecycle, from mock interfaces in the design process, to testing and monitoring of product APIs.

Honestly, I don't much of the details of what has changed from version 1.0 to 2.0, except that with version 2.0 you can use YAML to describe your API, just like competitor RAML, or markdown as with API Blueprint. The common assumption is that by using YAML and Markdown, even non-programmers will be able to communicate around APIs without having to navigate JSON—something I'm not entirely sold on, but will keeping looking for signs of in the wild

When it comes to the rubber meeting the road, I think Swagger has an advantage because of the amount of adoption, and the tooling available in the community. Swagger has a pretty significant lead when it comes to language libraries, both server and client side, as well as converters, and other integration tooling you will need. There are some areas like an API design editor, where Swagger has been playing catch-up, but overall the community has a pretty significant lead from my vantage point.

I’m working to convert all of my Swagger files from version 1.3 to 2.0, then I'm sure I will have more thoughts about the latest version, once I get down into the weeds, but for now I’m just happy to see the focus Wordnik is giving [Swagger](http://swagger.io/), and that it is continuing to mature in the way that it has, providing us with a much needed way to describe and communicate around APIs.
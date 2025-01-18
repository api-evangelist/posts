---
layout: post
title: Google Partner API As A Blueprint For Other APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-building-blocks-design.png
atomdate: 2017-04-19T22:00:00.000Z
tags:
  - Blueprint
  - APIs
---
[I've been tracking on how API providers operate their partner programs for a while now,](http://partners.apievangelist.com/) in hopes of pulling together some sort of blueprint that other API providers can follow. I'm always happy to find stop along the API life cycle where an API provider has already developed a robust operational API, like the [Google Partner API](https://developers.google.com/partners/).

The Google Partner API provides the essential building blocks of a pretty sophisticated partner program API including company, messaging, company, lead, offer, status, profile, user, relations, and analytics. It is a nicely designed APIs, providing a complete set of paths, with lots of detail and robustness when it comes to the surface area of the API, the data it returns. 

[When you look at the documentation for the Google Partner API](https://developers.google.com/partners/reference/rest/), it provides a good example of where Google is taking their API design across the company, by providing a REST, as well as a gRPC version of the resource. All future APIs at the search giant will be following this approach, providing simpler REST APIs, then higher performance editions if you want with gRPC.

Next time I update [my partner API research](http://partners.apievangelist.com/), this story will be present. I will look for other partner API examples, and then take the design patterns present in the Google Partner API, and [publish the OpenAPI for the project](https://raw.githubusercontent.com/api-stack/google/master/_data/api-commons/google-partners/google-partners-api-openapi-spec.yaml), as a suggestion for how you could design your partner API. Maybe I can even convince someone to craft some server-side implementations of the API, on a variety of platforms.
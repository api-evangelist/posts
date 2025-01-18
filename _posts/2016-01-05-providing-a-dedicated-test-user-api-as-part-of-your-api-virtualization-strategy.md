---
layout: post
title: >-
  Providing A Dedicated Test User API As Part Of Your API Virtualization
  Strategy
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-test-user.png
author:
  name: kinlane
date: 2016-01-05T08:00:00.000Z
tags:
  - Virtualization
  - Strategy
---
I was profiling the Facebook API as part of [my API Stack work](http://stack.apievangelist.com/companies.html). While I only use a handful of the endpoints available to me via the Facebook API, as the API Evangelist, I feel like I should have an awareness of the popular social API. Additionally, the number of great stories I find dramatically increase with the number of API profiles that I complete.

One story I extracted from my Facebook API research is about providing a [dedicated test user API](https://developers.facebook.com/docs/graph-api/reference/v2.5/test-user). Using the test user API you can add, manage and delete test users, which you can use throughout the developing and testing of your API integration. Facebook is user- centric, but it seems like the concept applies equally to any other valuable resource made available via APIs today.

I'd file this under [virtualization](http://virtualization.apievangelist.com), when it comes to organizing as part of my overall research. Providing virtualization options for API consumers is something that is only going to grow with the Internet of Things, and privacy concerns. API providers should be looking at how they virtualize entire APIs using modern approaches to containerization, so they can be used in dev, qa, and production environments, but they should also be looking at providing data and content virtualization solutions like Facebook does with a [test user API](https://developers.facebook.com/docs/graph-api/reference/v2.5/test-user).
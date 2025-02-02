---
layout: post
title: Nest Provides A Real-Time Layer By Default For API Consumers
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/nest/nest-developer-program.png
author:
  name: kinlane
tags:
  - Real-Time
  - Consumers
  - Time
  - Consumer
---
I had several folks point me to the [Nest API](https://developer.nest.com/documentation/nest-api-intro) release the other day. I enjoy this, because I’m not always the fastest in finding news—eventually I’ll find it, but I rely on my human API monitoring network, just as much as my algorithmic API monitoring network, to bring stories to my attention. I’m still reviewing the Nest API release, but one thing that stood out to me, was how real-time is baked into the API by default, and specifically using [Firebase](https://www.firebase.com/).

The Nest API documentation states:

> _Use the official Firebase client libraries (Web, iOS, Java, and Node), which allow you to synchronize your data with a subscription-based, near-real time platform. As you develop your client, you'll find these resources useful: Firebase Data Structure, Reading and Writing data._

Nest also provides options, if you can’t use the Firebase library (not sure why this would be):

> _In cases where the platform you're developing your integration on has no available Firebase library, you may want to use REST or REST Streaming instead._

I track on [real-time technology](http://bit.ly/11RorBM) like Firebase as part of my [API trends research](http://apievangelist.com/trends/), and much like other trends like [aggregation](http://bit.ly/11RojT4 "aggregation") and [reciprocity](http://bit.ly/19Li6cS/), I think we’ll start seeing these trending layers baked into API operations by default. I’ve seen [APIs reference default API reciprocity, using platforms like Zapier](http://apievangelist.com/2014/03/13/api-management-adding-reciprocity-building-blocks/), and I think we’ll see more APIs adopt real-time frameworks by default in the future.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/firebase/firebase-logo.png)](https://www.firebase.com/)

API providers need to focus on what they do best, providing API access to their valuable data, content and other programmatic resources. It is wise for providers to leverage existing providers to deliver real-time, aggregation, reciprocity, [voice](http://bit.ly/10sgWQI), and other complimentary API layers. I will continue to keep my eye out for how APIs are providing a much fuller stack of resources for developers, using their own resources, while also augmenting with other leading technology platforms.
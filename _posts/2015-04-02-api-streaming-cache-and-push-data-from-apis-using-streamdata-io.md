---
published: true
layout: post
title: 'API Streaming: Cache And Push Data From APIs Using StreamData.io'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/streamdata-io-logo.png
author:
  name: kinlane
tags:
  - Data
  - Streaming
  - APIs
---
I was introduced to [StreamData.io](http://streamdata.io/) the other day, by Gabriel Dillon ([@gjdillon](https://twitter.com/gjdillon)) of [Readme.io](https://readme.io/). StreamData.io provides a caching, and push layer for apps to take advantage of, that can be deploy on top of existing APIs. I haven’t implemented StreamData.io yet, I am still evaluating it, and at first glance it looks like an interesting new real-time layer, that you can use on top of APIs, to improve application performance and user experience.

I’m going to add StreamData.io to [my real-time research](http://realtime.apievangelist.com/) right now, however once I start playing with I may add as an API deployment resource as well. I have some verification to do, but I’d love to test out the potential for StreamData.io to deliver cache and sync layer for common APIs, doing for APIs, what StreamData.io is doing for apps—delivering on one of my ongoing ideas for caching high use APIs.

When I was working in Washington DC, I had the pleasure of working during the federal government shutdown, where I wrote a piece [asking if we can depend on our federal government APIs](http://apievangelist.com/2013/10/01/can-we-depend-on-federal-government-apis/), and talked about [caching APIs with AWS cloud formations, or Open Shift](http://apievangelist.com/2014/01/12/caching-apis-with-cloudformations-or-openshift-/). My objective is to ensure there redundant sources for APIs coming out of government, providing developers with a more stable solution, they can depend on. [I even added this thinking into the early APIs.json design, allowing you to define cached indexes of APIs](http://apievangelist.com/2014/06/18/multiple-types-of-apisjson-for-discovery/).

I’ve added [StreamData.io](http://streamdata.io/) to [my real-time research](http://realtime.apievangelist.com/), and I’ll get in there and play with more, as I have the time. Then I’ll get a better understanding of what you can do with the API caching and syncing, seeing if it is possible to deliver this layer for my APIs as well as my apps—something that is even more appealing in this age of Docker containers. #FoodForThought
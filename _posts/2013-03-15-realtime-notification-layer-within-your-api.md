---
layout: post
title: Real-Time Notification Layer Within Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/cisimple-plus-pusher.png
author:
  name: kinlane
tags:
  - Real-Time
  - Time
---
[This story comes](http://blog.pusher.com/using-pusher-to-power-cisimples-real-time-api/) from Phil Leggetter ([@leggetter](https://twitter.com/leggetter)) over at [Pusher](http://pusher.com/). Its about a client of theirs, [cisimple](https://www.cisimple.com/), which provides continuous delivery services for mobile developers. [cisimple just released a new API](http://blog.cisimple.com/2013/03/06/check-out-our-shiny-new-api-and-pusher-integration/), which gives mobile developers more control over the build processes for their mobile applications.

Using the cisimple API you can kick off new builds and download artifacts from your mobile dev process. cisimple is a very interesting API resource, that I will definitely be watching, and I’m sure I will be writing about in the near future. But what I really think is interesting is that cisimple is allowing clients to register for real-time updates via Pusher channels, using API tokens.

This means that when you use cisimple to manage your mobile development, you now have a real-time push system that will send notifications when builds start, pass, fail, etc. This opens up a whole world of human integration with the build process via desktop and mobile notifications, but also can be used in other systems that play a role in your dev cycles.

The weaving of a Pusher real-time notification layer into the cisimple API is pretty innovative. Something I’m sure will deliver huge value to their customers. But think of the potential as a standard approach for all API owners? You could offer developers real-time notifications about their own usage of your API, providing them with an intimate view of how their application(s) are using an API. Addiitionally it seems like you could set up a pretty interesting system wide notification layer that would let you, as the API owner, establish notification channels regarding overall API usage, thresholds and other important signals from your platform.

As I continue to dive into the [world of real-time APIs](http://apievangelist.com/trends/realtime.php "real-time"), I’m surprised at the multiple ways in which we can truly deliver real-time value using APIs. cisimple API + Pusher is in interesting addition.
---
layout: post
title: Google Shares Their API Design Guide
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_01_at_10.08.35_pm.png
atomdate: 2017-03-03T17:00:00.000Z
tags:
  - Design
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_01_at_10.08.35_pm.png)](https://cloud.google.com/apis/design/)

[Google released an API design guide recently](https://cloud.google.com/apis/design/). I'll be adding the design guide to the list of examples I have in [my API design research](http://design.apievangelist.com/tools/design-guides/). The Google API design guide is pretty straight forward in its purpose, with a goal of helping, "developers design **simple, consistent and easy-to-use** networked APIs", but I thought it was noteworthy that they were also looking to help "converging designs of socket-based RPC APIs with HTTP-based REST APIs."

[gRPC and Protocol Buffers](http://www.grpc.io/) has been on my task list to learn more about for a while now, but without any projects at scale, it's probably not a task I'll find much time for anytime soon. I'll try to carve off more time to learn how folks like Google are doing it, through their guides and storytelling. One thing I did know, which Google reinforces is that"many companies use socket-based RPC APIs to carry most network traffic, which can be orders of magnitude higher than public REST APIs."

I like their approach that, "both RPC APIs and HTTP REST APIs are needed for various reasons. Ideally, an API platform should provide best support for all APIs". They also provide a note that "This Design Guide explains how to apply REST principles to API designs independent of programming language, operating system, or network protocol. It is NOT a guide solely to creating REST APIs." I like this because we are getting past the notion that API design is simply about REST--it is clearly evolving to be more about getting the work done than any single philosophy or dogma.

[In addition to encouraging more API providers to craft an API design guide for their companies using API Stylebook](http://apistylebook.com/), and sharing their API design guides with the public, I will also be encouraging companies to think beyond just REST when they consider their API design best practices. I'm hoping that more companies will continue to do the hard work of getting their API design house in order because that means they can also begin to think about best practices when it comes to API deployment, management, testing, and the other stops along the API life cycle.
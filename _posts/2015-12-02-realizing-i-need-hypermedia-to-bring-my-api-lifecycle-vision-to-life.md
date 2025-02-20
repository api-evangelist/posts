---
layout: post
title: Realizing I Need Hypermedia To Bring My API Lifecycle Vision To Life
image: >-
  https://s3.amazonaws.com/kinlane-productions2/talks/november-2015/subway-map-15.png
author:
  name: kinlane
tags:
  - My
  - Hypermedia
  - Lifecycle
  - Vision
---
[![](https://s3.amazonaws.com/kinlane-productions2/talks/november-2015/subway-map-15.png)](http://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/)

I have been learning about hypermedia over the last three years now, and only earlier this year, [I began playing with Siren to help me craft a better experience around my API industry news and link curation API](http://apievangelist.com/2015/05/11/applying-a-little-hypermedia-is-helping-me-tighten-down-my-api-design-and-tell-a-better-api-story/). My motivations in going down this hypermedia road was never about easing my client side pain, or helping me with future versions of my API--I am just not that sophisticated of an operation.

I started playing with hypermedia to help evolve the experience around the API news I was curating each week, making it so you could browse week by week, month by month, but also by topic, company, author, etc. I'm still trying to figure it out all out, and honestly the project is currently in the ditch after hitting the wall this fall, and not really giving a shit about the flow of API news. (I am better now, thx!)

Now in December, I'm trying to take my building block API, which provides access to over [600 of the common patterns I've tracked on across the API space](http://apievangelist.com/list-of-things-i-am-thinking-about-tonight.html). These are the features offered by API service providers, and the competitive advantage brought to the table by the successful API providers I keep an eye on, and they are all potential stops along the API life-cycle I am working to define.

[My API building block API](https://kin-lane.github.io/master/) is a pretty standard content API, providing each element broken down by category, and type, with other supporting details. However, now I need to be able to plot them on a subway map, with an endless number of configurations, and dimensions to the journey. Via my building block API, I need to return any single stop along the API life-cycle, but along with it I need to provide the next stop in the line, the previous stop (paging 101), but then if I hit a transfer station, or other element, I need to offer an unlimited number of dimensions.

While I am concerned with the behavior of my client, it isn't the normal hypermedia-focused arguments I usually hear. I need to be able to deliver a subway-like transport experience for over 600 stops along the API lifecycle, for any possible API you can image. A simple API design just isn't going to cut it, I need a request and response model that can dynamically deliver the API life-cycle transport experience that I am looking to extend to my users.

I wish I had thought this out more, when I first got started designing my building block API. ;-(
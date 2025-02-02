---
layout: post
title: How To Generate An API Surface Area Map For A Microservice?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-map-grid.png
author:
  name: kinlane
tags:
  - Micro
---
I was struggling with [exactly how much API surface area can exist for a service before it stops being micro](http://apievangelist.com/2015/01/28/how-much-api-surface-area-before-it-stops-being-micro/) the other day, and while I don’t think I’ll ever find a precise measurement for this, I’d like to have a fluid definition that I can use to automatically evaluate, how big an API is.

So, what data can I gather, to help me quantify the surface area of my API? I’ll start with each endpoints, then count each verb, parameter, and potential response. Since I use [Swagger](http://swagger.io) for all of my API definitions, I can easily do this, and I can also understand each API response better because also I have them linked to the underlying data model.

I’m not exactly sure how this surface area definition will work, ultimately I’d like to be able to separate verbose APIs by different layers, like the number of endpoints or parameters, or maybe the lack of verbs, or responses (not what is there, but what is missing)--I'm not sure. I’m just getting going with my API surface area map.

My goal is to be able to list 20-30 microservices, and generate a basic visualization showing the approximate scope. Then I can use this in my decision making around whether or not I add features to an existing service, or spin it out as an entirely new service.
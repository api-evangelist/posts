---
layout: post
title: Next Steps For My Screen Capture API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-evangelist-screen-capture.png
author:
  name: kinlane
tags:
  - My
  - Screen Capture
---
Earlier this year [I created a screen capture API](http://apievangelist.com/2014/01/06/creating-my-own-screenshot-api/), filling a need I have across my network—capturing an image snapshot of any web page. Not all APIs are created the same, but I think this screen capture API represents a very fundamental layer of the API economy, the utility API. This API isn't Twitter or Google Maps, it does one thing and it does it well—something most APIs should work hard to achieve.

I've been using my screen capture API internally for several months now, and I think it is time to do more with it. I want to make this API available publicly, but I don’t want to just make freely available to anyone on the open Internet, to use as much as they want. I want to create an access layer, using [3Scale API infrastructure](http://bit.ly/13esk6Q) management that allows me to control who has access, and what they can, or cannot do with it.

To help me plan the next steps for my screen capture API I'm working on:

*   Service Composition - An outline of the different ways I will sell access to my screen capture API
*   Operational Harness - An overview of how I will deliver these API services to my target customers

My goal in all of this is to generate stories for API Evangelist, but I also want to push forward my own understanding of how API resources can be delivered, and what better way than providing my own APIs. I have a number of other APIs I would consider very utility in nature, that I want to launch, but I’m going to focus on just the screen capture API for now, and try to establish a blueprint I can use across all of my APIs.

I will publish my screen capture API service composition and operational harness as separate blog posts. Then I will look at actually deploy the API in accordance with my service composition, and establish an operational platform in sync with my operational harness. I won't post every update here on API Evangelist about this work, you will have to visit my [screen capture API project](http://screen-capture.apievangelist.com/) to find those updates.
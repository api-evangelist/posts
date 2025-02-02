---
layout: post
title: Github Can Be the POST and PUT Layer For Federal Government APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-government.jpg
author:
  name: kinlane
tags:
  - Github
  - Federal Government
  - Government
  - APIs
  - PUT
  - POST
  - Git
---
I'm playing with different approaches to rapidly design, develop, deploy and manage APIs using Github. While about 90% of what I'm building runs on Github, there is still about 10% that runs on Amazon EC2.

There are just some aspects of a proper API interface that I can't do on Github. My recent prototypes use swagger and allow for much of the API interactions to occur via Github. I a working to carve off any elements I can from the architecture, including using JSON files stored at Github as the database backend for the API.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg)

If you look at my recent [Dev Hub](http://kinlane.github.io/dev-hub/index.html) prototype, you can browse the API interface, thanks to [Swagger](https://developers.helloreverb.com/swagger/), and when you make API calls to the endpoints via Amazon EC2, the REST interface is just acting as a search, filter and REST facade for the JSON files that are actually stored on Github--eliminating the need for a database backend.

This approach allows me to develop light-weight REST facades for JSON data stores as well as for other APIs. I'm playing around with different ways that I can use this thought process to push government APIs to the next level, and building on my earlier thoughts today on the [need for writable APIs in federal government](http://apievangelist.com/2013/09/25/a-huge-need-for-writeable-apis-in-government/).

I'm evolving earlier designs I have in my archives of [BeyondGET or OtherVerbs, an Augmented API Platform](http://apievangelist.com/2013/03/17/beyondget-or-otherverbs-an-augmented-api-platform-/), where I'm looking to provide an augmented layer that makes existing APIs writable. Marrying these legacy thoughts with my current approaches using Github plus EC2 APIs, I strongly feel that Github has huge potential for being a POST, PUT and DELETE layer for federal government APIs.

Using a REST facade on EC2 I can easily proxy existing government APIs, then using a swagger definition I could seamlessly weave in a POST, PUT and DELETE layer that would write to JSON files hosted at Github using the Github API.

I'm in early thoughts on this work, and will start playing with examples of how this can work with real, live government APIs. I think it has legs though. I'm not very confident that we can get the government to allow users to write and update data via APIs without demonstrating the value of this. Which means we need to make it happen externally of government, show the value and then get buy in from key decision makers.
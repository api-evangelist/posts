---
layout: post
title: Kicking Off Image Manipulation API Work
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puppet.png
author:
  name: kinlane
tags: []
---
I'm working a wider campaign focused on getting my shit together around my images, and part of that is continueing work I had started with my [screen capture API](http://screen-capture.apievangelist.com/), and launch more image manipulation API resources.

I have a wide range of needs to resize, crop, filter, and apply other filters to photos I work with, as part of my storytelling, and if I had a set of image manipulation APIs, life would be better--so as I do with anything, I got to work building an API.

The result is the first, in a series of [image manipulation APIs](http://image.manipulation.apievangelist.com/). Right now I focused on some low hanging fruit, like applying filters to images, which includes Charcoal, Oil Painting, Polaroid, and Sketch. Next, I will tackle some more utility APIs like resize, crop, and rotate.

Like my other APIs, I will use my [operational harness](http://apievangelist.com/2014/04/17/an-operational-harness-for-my-screen-capture-api/), and operate a [cloud version of my image manipulation API](https://apievangelist.3scale.net/), where anyone can access, and take advantage of my API resources. Using my [API service composition](http://apievangelist.com/2014/04/14/service-composition-for-my-screen-capture-api/), I setup access tiers for public, partners and internal usage. 

I will also open source any code behind so that others can deploy image manipulation within their own infrastructure, or I'm happy to setup for you--for a fee! :-)

I have a number of APIs I want to get built, and image manipulation has been on my list for a while, I'm glad I finally was able to get this work started.
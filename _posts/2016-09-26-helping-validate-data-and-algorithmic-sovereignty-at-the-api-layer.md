---
layout: post
title: Helping Validate Data And Algorithmic Sovereignty At The API Layer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bw_algorithmic_sovereignty.png
atomdate: 2016-09-26T22:00:00.000Z
tags:
  - Data
---
I have showcased [examples of API providers allowing you to deploy your API into various regions around the world like Algolia does](http://apievangelist.com/2016/01/05/your-api-access-replicated-into-multiple-regions-around-the-globe-for-additional-charge/), but it is a topic that I think will keep gaining traction as data, content, or algorithmic sovereignty continues to be a privacy, security, or regulatory concern. As the Internet continues to evolve, people and companies are only going to continue being concerned and dare I say become nationalistic about where they digital worlds exist and operate.

When I Google "data sovereignty" I get:

_Data sovereignty is the concept that information which has been converted and stored in binary digital form is subject to the laws of the country in which it is located._

Where data is stored tends to dominate conversations historically, but I think that increasingly algorithmic sovereignty will become a concern as well. With more platforms employing algorithms at almost every level of operation, at some point where they are operating is going to come into play (ie. the Facebook news feed algorithm might have to have different considerations in the US than it does in EU).

The DNS layer is the first place to start when validating where data is being stored, or an algorithm is being executed, and which rules apply. After that I'd guess that we will need the API layer to help us also broker this, ensuring that web, mobile, and device based clients can articulate where data should be stored, and which algorithms or variations of algorithms can be applied. 

With the growth in regional specific cloud storage and compute solutions this doesn't seem like it will be too difficult to implement, but I'm sure will take a significant amount of time to standardize how API providers actually get it done. I'll keep looking for examples of it in the wild, and contribute to how we can better validate and ensure data and algorithmic sovereignty at the API layer.
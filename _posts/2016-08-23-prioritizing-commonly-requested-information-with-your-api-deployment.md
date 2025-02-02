---
layout: post
title: Prioritizing Commonly Requested Information With Your API Deployment
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-prioritization.png
atomdate: 2016-08-23T22:00:00.000Z
tags:
  - Deployment
---
I was reading the post from [open data service provider Socrata](https://socrata.com) about "[putting citizens first](https://socrata.com/blog/putting-citizens-first/)" when it comes to opening up city, county, state, and federal government data. One of the headlines they showcased was _"Texas overhauls open data portal, prioritizes commonly requested info"_\--which is a pretty sensible thing to consider for not just government, but also companies thinking about what to open next.

First, let me emphasize that I am talking about open data that is already published on the web in another format (or should be). What the State of Texas is doing is [what I call the low-hanging fruit for API deployment](http://low.hanging.fruit.apievangelist.com/)\--if it is on your website, it should also be available in a machine-readable format. Ideally, you offer HTML, as well as JSON, XML, and other relevant formats side by side within a single domain using [content negotiation](http://restlet.com/blog/2015/12/10/understanding-http-content-negotiation/), but no matter how you accomplish it, the priority is making sure that commonly requested information is accessible to those who need it.

It is a shame that Texas is only now considering this with the latest revision of their portal, ideally government agencies and companies would be applying this way of thinking by default. If it is on your website as HTML, most likely it has already been deemed important, which is why it was made self-service on the open web in the first place. If you are planning on deploying an API or open data portal, and you are just wondering where you should start, make sure to learn from the State of Texas, and prioritize the commonly requested information.
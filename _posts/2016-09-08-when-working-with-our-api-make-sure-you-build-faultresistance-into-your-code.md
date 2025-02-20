---
layout: post
title: When Working With Our API Make Sure You Build Fault-Resistance Into Your Code
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Writing_Fault-Resistant_Code.png
atomdate: 2016-09-09T00:00:00.000Z
tags:
  - Code
---
As I was working my way through [the USGS water services APIs](http://waterservices.usgs.gov/), I came across their [page for writing fault-resistant code](http://waterservices.usgs.gov/docs/portable_code.html). There are many things going on in the USGS developer portal I think are worth talking about, and the reminder for developers to write more resilient code is one that I feel needs constant discussion, from many different angles. I know that this is one area I will get comments about hypermedia as a solution, but for right now I want to think through what is coming out of existing API efforts on the ground like USGS.

The [USGS provides 13 separate pieces of advice to help you achieve more fault-tolerant code](http://waterservices.usgs.gov/docs/portable_code.html) as you integrate with their water APIs:

*   Join the Water Data System Notification Service
*   Check HTTP error codes
*   If your application is server-based, acquire data in XML if the format exists
*   If your application is browser-based or client-based (such as a native app), acquire data in the JSON format if available
*   If a service offers a version number, request that version of the service
*   Write your queries efficiently
*   Why you should avoid tab-delimited (RDB) files
*   Parse XML using an XML parser
*   Use standard libraries
*   Consider using curl or wget to acquire data
*   Use scheduled tasks to automate data collection
*   Guidance on how often you should fetch data

I am not sure all of these apply universally, but I like the idea of API providers sharing their view of how developers can write better code when integrating with their APIs, based on their own experiences. I also like that their list begins with acknowledging that you need to stay in tune with the feedback loops which are in place, acknowledging that this is important for both API provider and consumer stability.

Having a page dedicated to helping API developers develop more fault-resistant code, just seems like a good building block to add to any ecosystem. I'm guessing it is good from a provider perspective as well, by helping you think through design considerations that would impact a developer's ability to build in fault resistance, as well as being an important educational resource for them. I personally like it because it is yet another building block that I think helps developers, but also provides me with a great window into how API providers see the web API universe.
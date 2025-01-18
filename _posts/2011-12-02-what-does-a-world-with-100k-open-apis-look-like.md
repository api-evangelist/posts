---
layout: post
title: What Does a World with 100K Open APIs Look Like?
url: >-
  http://apievangelist.com/2011/12/02/what-does-a-world-with-100k-open-apis-look-like/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/ProgrammableWeb-API-Directory.png
author:
  name: kinlane
tags:
  - APIs
  - Open
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/programmableweb/ProgrammableWeb-API-Directory.png)](http://www.programmableweb.com/apis/directory "4,480 APIs in the Directory")

I recently pulled the title, description and tags for all the APIs in the [ProgramableWeb](http://www.programmableweb.com "ProgrammableWeb") directory into a local MySQL database. At the time of this writing there are [4,480 public APIs in the directory](http://www.programmableweb.com/apis/directory "4,480 APIs in the Directory").

My goal is build a better search and discovery interface, so I can get a handle on all these APIs. Which ones I should be paying attention to, recommending to developers and generally just have an awareness of what types of APIs are available.

Where do I start?

First I start with a keyword search on the title, description and tags associated with each API. I will build a bunch of custom search queries, but no matter how good my queries are, I’m still limited by whatever descriptions are associated with the APIs and whatever tags were applied. This is just search, it isn’t discovery or real-time tracking.

Having gone through whole categories of image APIs and storage APIs by hand I know there is a lot of crap APIs that aren’t in my opinion, real API efforts. They just throw up an API, register it with ProgrammableWeb and don’t actually have a supporting area for developers.

I need a way to programmatically rank each API while searching through APIs. When I search for photo management APIs, I want them sorted by some sort of value. Currently ProgrammableWeb uses the number of mashups of an API as a “popularity” ranking. I need more and I figured [Compete](https://www.compete.com/developer/ "Compete") and [Alexa](http://www.alexa.com/ "Alexa") APIs could give me some sense of the value of each API based upon its domain. This is just a start and I want to establish a [wide variety of metrics for measuring the value delivered by an API](/2011/04/21/measuring-the-popularity-of-apis/ "wide variety of metrics for measuring the value delivered by an API").

My API ranking algorithm is obviously a work in progress. I just figured I’d tell the story of how I evolve my API ranking algorthm here, and leave open for comment and others to add to. But as I work to make sense of 4,480 APIs, I can’t help but think--what does a world with 100K open APIs look like?
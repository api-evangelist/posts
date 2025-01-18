---
layout: post
title: >-
  Bridging How We Currently Document Our APIs Now With How We Should Be
  Experiencing APIs Via Hypermedia
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/foxycart-api-screenshot.png
author:
  name: kinlane
tags:
  - Hypermedia
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/foxycart-api-screenshot.png)](https://api.foxycart.com/docs)

I am still catching up on my feeds, and open browser tabs, and one tab that has been open for a couple of weeks is [Why Your Colleagues Still Don’t Understand Hypermedia APIs](https://medium.com/@lukestokes/why-your-colleagues-still-don-t-understand-hypermedia-apis-1a5a2cf82540), by Luke Stokes ([@lukestokes](https://twitter.com/lukestokes)) of [FoxyCart](http://www.foxycart.com/). The post is very thought provoking for me, and represents what I feel is the very pragmatic front of the hypermedia movement, from someone who has helped move the concept of a hypermedia API from academic discussion to reality, with the [FoxyCart API](https://api.foxycart.com/docs).

His challenges at the end of his post really set the stage for me:

_So how do we find a balance between idealism about what Hypermedia API documentation systems “should” be and what they practically are? How can we move the whole ecosystem forward by encouraging client developers to code to link relationships instead of hard-coded URLs? How do we help pave the way for the future but not look like unsophisticated outsiders in the process? What pragmatic steps should we take to be like the other cool kids using standard documentation presentations while at the same time saying, “Um, yeah, don’t do that. Don’t code to the URL, code to the link relationship instead.”_

For me, his questions illuminate the canyon between where the API community is currently with API design, and the vision of where we should be going with our API design practices. The more I play and learn with hypermedia, the less I see it as the lofty vision for the future, and the more I see it as a set of practical design patterns that will make my API work more meaningful.

The shortcomings of API definitions like Swagger (now OADF), is that it was designed for documenting your API, after it was already designed--awesome, but not remotely about API design. Where the concept of hypermedia is all way back the other direction, where you have to put some serious thought into your API design, before you ever roll up your sleeves to write code--big gap between these worlds.

J[akub, Z, and the Apiary.io](http://apiary.io) team has done some amazing work to bring the mainstream conversation closer towards API design, much than hypermedia folks had ever done--until recently. What Luke asks, reflects the work we have left to bridge the divide, and emphasizes that it has to be something that scales. This is why Swagger was successful, because it provided the section of the bridge that API architects needed to solve an immediate problem that on the table, at scale--documentation. 

The problem is, the masses are pretty short-sighted, and often unwilling to the heavy learning and lifting needed to "code to link relationships, instead of hard-coded URLs". Unfortunately we will need more tooling to help us build more sections of the bridge (beyond Swagger), as we won't be able to it all at once. I think the important thing with this tooling, is we need make sure with each section of the bridge that we build, we are also educating API architects, and client developers around HTTP, media types, link relations, and other empowering hypermedia concepts. 

Anyways, Luke got me pumped with his questions. I do not know what the answers are either, but I want to lend a hand to help figuring it out, and will be asking these questions over and over in my head, showcase solutions that y'all are working on, and tell stories here on the blog, until we make some progress.
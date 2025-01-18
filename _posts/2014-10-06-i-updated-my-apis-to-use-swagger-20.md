---
layout: post
title: I Updated My APIs To Use Swagger 2.0
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swaggerLogo360.png
author:
  name: kinlane
tags:
  - My
  - Swagger
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swaggerLogo360.png)](http://swagger.io/)

I spent some time this weekend updating a handful of my APIs to the new [Swagger 2.0 API definition format](http://swagger.io/). I was already using an older version of Swagger, so the migration wasn’t too difficult. I have about five new APIs I want to roll out over the next couple weeks, and I wanted them to up to date, using the latest version, so moving forward my knowledge using my existing APIs was the best way to prepare.

I moved forward the five "[core APIs](http://developer.apievangelist.com/core-apis.html)", as I call them, analysis, APIs, building blocks, curated, and tools, to all use Swagger 2.0. These APIs provide access to my monitoring system I use to keep track of the space. I also migrated two of my "[stack APIs](http://developer.apievangelist.com/stack-apis.html)", i[mage manipulation](http://image.manipulation.apievangelist.com/), and [screen capture](http://screen-capture.apievangelist.com/), which are designed to be general purpose, utility APIs  I use across my platform.

To support the migration I wrote a Swagger manager for my API monitoring system, which I use to track on 2794 APIs, from 3215 companies, which API Evangelist is one of these companies. Using this new tool I imported my old Swagger 1.2 versions, and after a little touching up in my new editor, I published brand spank’n new Swagger 2.0 definitions for all seven my APIs.

The process reminded me of how API definitions really can help you describe, see, understand and ultimately communicate the API surface area you posses. I’m going to take this and apply it to a couple of business sectors I’m tracking on as part of my API Stack, and see what the process does for me there. After that I’m going to get to work on the next five APIs I’m designing, and see how Swagger 2.0 contributes to my design of brand new APIs, as well as later on in the life cycle.

I'm using my Swagger API definitions as a central truth for driving server side code, and my documentation. I’m eager to continue exploring how it can further generate my client side code libraries, as well as SDKs, and help me better test, and monitor my APIs. I don’t think I’ll perfectly automate every step in the API life cycle with Swagger, but it damn sure is making some of the steps much less painful, and following a central design truth, that in this case is a simple Swagger JSON file that I keep in a library, pushing forward my catalog of API resources, at the same time I push forward my own understand of what is possible.
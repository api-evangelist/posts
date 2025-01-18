---
layout: post
title: Public GETs, In Concert With Private POST, PUT, And DELETE For Your APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-open.png
author:
  name: kinlane
tags:
  - Public
  - APIs
  - PUT
  - POST
---
Another story I wanted to tell from [my work to expose an API yesterday, so I could get help with it](http://apievangelist.com/2016/01/07/i-loaded-that-csv-into-a-database-now-let-me-expose-an-api-so-i-can-get-some-help/), was focused around the service composition that I used. I feel like this is a powerful story, that should be told, and retold among API evangelists, across conversations with folks who are new to the API space, and the concept of putting APIs to work in their daily business worlds.

The largest concern I hear from people who don't fully understand API, is the perceived loss of control, from putting things up on the open Internet. When you don't understand [modern API management infrastructure](http://3scale.net), and the nuance of API service composition, what an API does can seem pretty scary. The first lesson around me exposing of an API, from the [@APIStrat](https://twitter.com/APIStrat) speaker database, was about soliciting help from Nicolas Grenié ([@picsoung](https://twitter.com/picsoung?lang=en)), and the second lesson is centered around how I used a combination of public / private endpoints to make this work.

The first two endpoints or methods I published from my speaker databases, were simple GETs:

*   [http://api.apistrat.com/speakers/](http://api.apistrat.com/speakers/)
*   [http://api.apistrat.com/speakers/aO6zItrUhKEUexi7zNiUjOzzJ1230Rfno9P123DJRHNEuh4117/](http://api.apistrat.com/speakers/aO6zItrUhKEUexi7zNiUjOzzJ1230Rfno9P123DJRHNEuh4117/)

All 351 speakers in our database are already public, [on the schedules for each of the six @APIStrat events](http://austin2015.apistrat.com/all-events/), so there really is no reason why I would lock up the APIs to get this information--I am just returning JSON representations, in addition to the HTML I already do on the websites.

However, for the collaboration part with [@picsoung](https://twitter.com/picsoung?lang=en) the POST, PUT, DELETE (aka Add, Update, Delete), I'm going to need to secure things a little more. [Using my already in place, 3Scale API management infrastructure](http://3scale.net), I have an access tier specifically for my partners like 3Scale, [WSO2](http://wso2.com), and @picsoung already has a set of API keys at this API plan level. I simply put the three endpoints / methods for POST, PUT, and DELETE for the URLs above, into my "partner" level, and they require an appID and appKey for each API call--secured.

This is a simple, yet powerful example of how APIs work, and specifically the level of control that API service composition gives you. I can easily make the speakers across our six conferences available in a machine readable format for use in other websites, and mobile applications. With the same API, I am also able to open up write capabilities to the partners who I trust, enabling them to help me evolve my speakers information. I am able to publicly share my resources via an API, making HTML and JSON versions of it available, while also opening up important collaboration which will move my work forward, in a safe, and secure way.

This is APIs in action, and how they actually give you more control over the digital resources that are fueling your daily operations.
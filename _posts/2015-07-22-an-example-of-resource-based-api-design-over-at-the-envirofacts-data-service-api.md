---
layout: post
title: >-
  An Example Of Resource Based API Design Over At The Envirofacts Data Service
  API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/280px-Environmental_Protection_Agency_logo.svg.png
author:
  name: kinlane
tags:
  - Design
  - Data
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/280px-Environmental_Protection_Agency_logo.svg.png)](http://www.epa.gov/)

I told a contact of mine at the Environmental Protection Agency I would provide some feedback for the next iteration of [the Envirofacts Data Service API](http://www.epa.gov/enviro/facts/services.html#uvindex), and as I prepare my formal response, there is a huge opportunity for me to carve off some other smaller stories. These stories are what make API Evangelist go around--pulling off these nuggets of learningz, as I'm working with API various providers. 

A concept I work hard to help API designers and architect adopt is around [experience-based API design over resource based API design](http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer/). Something I learned from my friend Daniel Jacobson ([@daniel\_jacobson](https://twitter.com/daniel_jacobson)) at Netflix, but have been taking it in different directions to help designers and architects from smaller API groups, adopt this way of life--I feel like my work today on the Envirofacts Data Service API provide a great opportunity to move this conversation forward.

When you land on [the Envirofacts Data Service API page](http://www.epa.gov/enviro/facts/services.html), you are given a single base URL to employ when "constructing a search" for the API:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/epa-envirofacts-api-base-url.gif)

Ok, not the best API design, a little confusing, but where do I find the list of possible values for every potential path variable? I scroll down and see some examples, but I have to read the opening paragraph again, before I find a link to the data model. Once I click on the text link, I'm faced with 20 separate "tables"--which in reality are 20 separate APIs, all housed under the Envirofacts Data Service API. (who named this??)

This is resource based API design. You craft an API, that either resembles, or in this case is exactly named just like your database, and its fields. This type of API design, while very appealing to database administrators (DBA), but will leave any new API developer and potential "customer", pretty lost, left with having to work overtime just to understand what is possible. (you can do more work on my behalf)

I had no idea the Envirofacts Data Service API had such a wealth of resources. The overall API landing page, and API design does not tell the story of the value that lies within. Anyways, I'm just embarking on the profiling of this API, and providing a formal review that the team can put to use in their efforts. I'm not trying to bash their work, just help demonstrate to other folks, what I mean when I say "resource based API design", furthering my work to help folks design APIs more focused how they'll be used, not just where they come from, only ticking the box on the task you were given--launch API.
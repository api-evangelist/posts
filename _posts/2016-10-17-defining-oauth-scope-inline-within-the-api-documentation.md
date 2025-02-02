---
layout: post
title: Defining OAuth Scope Inline Within The API Documentation
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_16_at_2.35.09_pm.png
atomdate: 2016-10-17T18:00:00.000Z
tags:
  - Documentation
  - OAuth
  - Scope
---
I am working on a project using the Youtube API, and came across their inline OAut 2.0 scopes, allowing you to explore what the API does as you are browsing the API docs. I am a huge fan of what interactive documentation like Swagger UI, and Apiary brought to the table, but I'm an even bigger fan of the creative ways people are evolving upon the concept, making learning about APIs a hands-on, interactive experience wherever possible.

To kick off my education of the YouTube API I started playing with [the search endpoint for the Youtube Data API](https://developers.google.com/youtube/v3/docs/search/list). As I was playing with I noticed the had an API explorer allowing me to call the search method and see the live data.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_16_at_2.35.09_pm.png)

Once I clicked on the "Authorize requests using OAuth 2.0" slider I got a popup that gave me options for selecting OAuth 2.0s copes, that would be applied by the API explorer when I make API calls.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_16_at_2.34.01_pm.png)

The inline OAuth is simple, intuitive, and what I needed to define my API consumption, in line within the Youtube API documentation. I didn't have to write any code or jump through a bunch of classic OAuth hoops. It gves me what I need for OAuth, right in the documentation--simple OAuth is something you don't see very often.

I'm a supporter of more API documentation being an attractive static HTML layout like this, with little interactive modules embedded throughout the API docs. I'm also interested in seeing more web literacy being thrown in at this layer as well, [pulling common web concepts and specification details](http://webconcepts.info/), and providing popups, tooltips, and other inline API design learning opportunities.

I'm adding YouTube's approach to OAuth to my list of approaches to a modular approach to delivering interactive API documentation, for use in future storytelling.
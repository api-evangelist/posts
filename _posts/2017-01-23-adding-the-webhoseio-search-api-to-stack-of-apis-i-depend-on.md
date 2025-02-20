---
layout: post
title: Adding The Webhose,io Search API To Stack Of APIs I Depend On
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_01_22_at_8.53.04_pm.png
atomdate: 2017-01-23T17:00:00.000Z
tags:
  - Search
  - Web
  - Stack
  - APIs
  - ddi
---
I have been looking for a decent search engine API to help me uncover new sources of information across the API space. I've always been frustrated with the APIs in this category since all of the good Google search APIs went away. I need to search the web, and specifically for blog and news posts with API related insights. In an effort to find a suitable solution I recently came across and spent time digging into one called [Webhose.io, primarily because they had an APIs.JSON file](https://webhose.io/apis.json).

Webhose.io integrates data from hundreds of thousands of global online sources in the following areas:

*   **[Social Media Data](https://webhose.io/social-media-data) -** Structured data from top social media sites. 
*   **[Forum Monitoring](https://webhose.io/forum-monitoring-api) -** Post data from across many forums.
*   **[Blog Search](https://webhose.io/blog-search-api) -** Pulls the latest from blogs even if no RSS feed.
*   **[News Search](https://webhose.io/news-search-api) -** Access to news from PR sites that don't usually have a feed.
*   **[Web Search](https://webhose.io/web-search-api) -** Gives me access to the latest content from many domains on the web.

I'm not a big fan of forum monitoring (too much noise), but access to social media, blog, news, and web data and content is extremely valuable to me. Webhose.io indexes quite a few domains, and I was able to find [#mce\_temp\_url#](http://apievangelist.com)apievangelist.com, and my girlfriends [hackeducation.com](http://hackeducation.com) in there. Webhose.io allows you to query across categories, using a keyword, and by domain, and they also allow you to set how many days back you'd like to search (up to 30 days)--making it great for staying in tune with the latest content. 

I like the API mostly because it gets straight to the point, allowing you to quickly sign up for an account, easily craft API calls, then provides valuable, relevant data and content, enriched with tags, sentiment, and other goodies. They also provide a straightforward business model, allowing you to get 1000 free API calls per month, and incremental monthly packages with different quantities from there. I will be wiring up the API to my monitoring system, adding Webhose.io to t[he stack of APIs I use to run API Evangelist](http://stack.apievangelist.com/companies.html).
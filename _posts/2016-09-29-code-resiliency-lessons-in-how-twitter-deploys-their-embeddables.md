---
layout: post
title: Code Resiliency Lessons In How Twitter Deploys Their Embeddables
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_widgets_js_depoly_arch_v2.png
atomdate: 2016-09-29T20:00:00.000Z
tags:
  - Twitter
  - Embeddable
  - Embeddables
  - Lessons
  - Code
---
[I am learning about how Twitter deploys their](/admin/blog/How Twitter deploys its widgets) [widgets](/admin/blog/How Twitter deploys its widgets). Extracting some insight for [my research around how we can build change resiliency into our client code](http://apievangelist.com/2016/09/28/thinking-about-how-i-can-build-change-resilience-into-my-api-integrations/). As I'm doing my regular monitoring of the API space I am trying to keep an eye out for any examples from leading providers of how there are investing in client code being more change resilient. This Twitter blog post provides me with three concepts I wanted to add to my research:

*   **Reversibility:** ‘Rollback first, debug later’ is our motto. Rollback should be fast, easy, and simple. Ideally, it’s a giant red button that can get our heart rates down.
*   **Incremental release:** All code has bugs and deploys have an uncanny way of surfacing them. That’s why we wanted the ability to release new code in phases.
*   **Visibility:** We need to have graphs to show how both versions of widgets.js are doing at all times. We also need the ability to drill down by country, browser type, and widget type. These graphs should be real time so we can quickly tell how a deploy is going and take action as necessary.

These are change elements that seem like they need consideration as we craft our web, mobile, device, visualization, bot, voice, and other types of API clients. These three elements should be present in the code, anywhere I'm making an API call. Being able to reverse how I'm interacting with an API, the incremental release of new API paths or changes to existing APIs, and having an analytics layer can contribute to helping us deal with change.

I think I am going to get started with an analytics layer for my own client code. Start thinking about logging the calls I'm making to any API I depend on. I have this in place for the server side of the APIs that I manage but do not have any sort of logging at the client level. Not only do I not have any plan for change at the client layer, I might not even know there was a change because I do not have any visibility.
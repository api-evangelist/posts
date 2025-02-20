---
layout: post
title: Developer Insights Into Facebook Open Graph API Usage
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/facebook-insights-auth.png
author:
  name: kinlane
tags:
  - Facebook
  - Usage
  - Open
---
Facebook provides an interface for Open Graph API developers to better understand how users are interacting with content via their applications, called [Insights](http://www.facebook.com/help/search/?q=insights "Insights").

With Insights you can monitor the number of your unique users that are seeing and accessing a Facebook authorization dialog, number of unique users publishers stories through Open graph as well as viewing and clicking on those stories.

While the number of users clicking, viewing on stories is very cool, I’m interested in their stats regarding the authorization dialog. Insights provides data on how many times people access your dialog authorization, with the number of acceptances, while also breaking down the number of views, acceptances into a corresponding conversion rate.

![](http://kinlane-productions2.s3.amazonaws.com/facebook/facebook-insights-auth.png)

If your authorization dialog prompts users for different permission sets, you’ll also see a breakdown of the impressions, accepts and CTR for each one, showing you the rates at which people accept and reject different permission sets--helping you to identify the most optimal permission set for your authorization dialog, which will directly help increase user installs for your app.

This kind of insights for developers is critical, helping them understand the level of engagement with users and build a more effective Auth Dialog flow, which could make or break an applications Facebook Open Graph integration and adoption.

Providing developers with analytics to evaluate their users API usage is so valuable, I wonder if I can find any other examples of this granular type of OAuth reporting with other APIs or from API service providers like Apigee?
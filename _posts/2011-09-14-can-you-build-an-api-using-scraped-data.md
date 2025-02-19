---
layout: post
title: Can You Build an API Using Scraped Data?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/web-scraper.jpg
author:
  name: kinlane
tags:
  - Data
---
I’ve come across several APIs lately that rely on getting their data from web scraping.  These API owners have written scripts that spider page(s) on a regular schedule, pull content, parse it and clean it up for storage in a database.

Once they’ve scraped or harvested this data from the web page source, they then get to work transforming and normalizing for access via a RESTful API.   With an API they can now offer a standard interface that reliably pulls data from a database and delivers it in XML or JSON to any developer.  

These API owners are still at the mercy of the website source that is being scraped.  What if the website changes something?  

This is definitely a real problem, and scraping is not the most reliable data source.  But if you think about it, APIs can go up and down in availability, making them pretty difficult to work with too. As long as you have failure built into your data acquisition process and hopefully have a plan B, the API can offer a consistent interface for your data.

Web scraping is not an ideal foundation for building a business around, but if the value of the data outweighs the work involved with obtaining, cleaning up, normalizing and delivering the data--then its worth it.   And this type of approach to data APIs will continue.

There is far more data available via web pages today then there is from web APIs.  This discrepancy leaves a lot of opportunities for web scrapers to build business around data you might own, and you make available online, but haven’t made time to open, control and monitor access to it via an APi.

The opportunity to build businesses around scraping will continue in any sector until dependable APIs are deployed that provide reasonable pricing, as well as clear incentive and revenue models for developers to build their businesses on.
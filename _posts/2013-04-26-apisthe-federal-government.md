---
layout: post
title: APIs &amp; The Federal Government
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Building-a-21st-century-platform-to-better-serve-the-american-people-1.png
author:
  name: kinlane
tags:
  - Federal Government
  - Government
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Building-a-21st-century-platform-to-better-serve-the-american-people-1.png)](http://federal-government.apievangelist.com/)

It is has been a while since I updated any of my research around APIs & the Federal Government. In May 2012, I started monitoring the progress of the White House Digital Strategy, where I setup a [monitoring system that pings all 246 agencies](/federal_government.php) to see if they have published their digital strategy yet.

As we approach the one year anniversary, I expect we'll see a lot more news emerge around what various agencies are doing as part of the original mandate by the White House. As of today there are now 23 federal agencies who have published their Digital Strategy at their domain.

I have published [all of my research around my APIs & the Federal Government research at a permanent Github repository](http://federal-government.apievangelist.com/). I will continue pushing all my research, curated stories and analysis there in real-time. I have also published a handful of JSON data sets I have generated as part of the research:

*   [Publish List of Federal Agencies](https://github.com/kinlane/federal-government/blob/gh-pages/data/federal-agencies.json)
*   [Publish List of Federal Agencies w/ Social](https://github.com/kinlane/federal-government/blob/gh-pages/data/federal-agencies-with-social.json)
*   [Publish List of Federal Agencies w/ Digital Strategy](https://github.com/kinlane/federal-government/blob/gh-pages/data/federal-agencies-digital-strategy.json)
*   [Publish List of Federal Agencies w/ Digital Strategy & Social](https://github.com/kinlane/federal-government/blob/gh-pages/data/federal-agencies-digital-strategy-with-social.json)

You can find the JSON data for these areas, along with the PHP script I used to harvest, store and publish this data using the JSON version of each agencies Digital Strategy.

While you can pull a list of federal agencies via from the [Federal Agency Directory API](http://www.usa.gov/About/developer-resources/federal-agency-directory/index.shtml), and each agencies social data using the [Federal Social Media Registry API](http://www.usa.gov/About/developer-resources/social-media-registry.shtml), the logos included with each agency is something I hand-rolled, so you won't find it anywhere other than here.  I gave the data to the GSA, and I hope they incorporate the agency logos into the Federal Agency Directory API.

My [Federal Government Github project](http://federal-government.apievangelist.com/) will be a permanent, living place for me to publish stories, news, data and the scripts I create around my research in the area. I'm using my [Hacker Storytelling](http://hackerstorytelling.com) format to keep everything up to date, openly licensed, while also keeping everything machine readable by default.

I'm categorizing this project under "API Priorities". It is a critical area that we need as many people involved as possible. If you need an idea for a project, let me know. I have endless ideas to suggest on how we can evolve our government using open data and APIs.
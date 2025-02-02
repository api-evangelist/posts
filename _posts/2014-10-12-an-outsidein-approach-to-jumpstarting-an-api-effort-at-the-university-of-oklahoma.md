---
layout: post
title: >-
  An Outside-In Approach To Jumpstarting An API Effort At The University of
  Oklahoma
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/the-university-of-oklahoma.png
author:
  name: kinlane
tags: []
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/the-university-of-oklahoma.png)](http://www.ou.edu/)

I wrote a story a couple of weeks ago, about [how to kickstart APIs at the University of Oklahoma (OU)](http://apievangelist.com/2014/09/30/where-do-we-start-with-apis-at-the-university-of-oklahoma/). I ended the post, saying I would find some easy targets for generating the initial APIs, and publish a basic developer portal using Github Pages. After some work I think I have enough done to initiate another conversation with my friends at OU.

In any company, organization, government agency, or institution, where you are trying to decide where to start with APIs, the public website is the place to start. If data and content is already published to the website, it should also be available in a machine readable format via an API—this is the obvious place to start at OU.

To help find the low hanging fruit, when it comes to data and content at OU, I wrote a simple script that would slowly spider every page of the ou.edu website, looking for the opportunities, providing some potential targets for deploying APIs. So far my script has identified 183,094 pages across university sub-domains, and processed 52,281 of these pages looking for any HTML tables on pages, with over 20 rows, as well as .xls spreadsheet files, and XML files.

I’m running the script slowly in the background, as I don’t want to put any burden on OU sites, and just pulling pages every few seconds. To date I’ve identified 252 pages that have large HTML tables, 330 spreadsheets, and 68 XML files. While the script will still be running and looking for more, I think this represents a pretty good start when it comes finding the low hanging fruit for open data and content at OU--resources that should be APIs.

As I do with all my projects, [I published my work for the OU API effort on Github, as an open repository](http://university-of-oklahoma-api.apievangelist.com/). Using this repository, I’ve published the low hanging fruit as JSON, and HTML pages to allow for easy browsing:

*   **Tables (252) - [HTML](http://university-of-oklahoma-api.apievangelist.com/low-hanging-fruit-tables.html) - [JSON](http://university-of-oklahoma-api.apievangelist.com/data/fruit-tables.json)**
*   **Spreadsheets (330) - [HTML](http://university-of-oklahoma-api.apievangelist.com/low-hanging-fruit-spreadsheets.html) - [JSON](http://university-of-oklahoma-api.apievangelist.com/data/fruit-spreadsheets.json)**
*   **XML Files (68) - [HTML](http://university-of-oklahoma-api.apievangelist.com/low-hanging-fruit-xml.html) - [JSON](http://university-of-oklahoma-api.apievangelist.com/data/fruit-xml.json)**

I’ve also [created another page which is driven from the Github issues for the repository](http://university-of-oklahoma-api.apievangelist.com/discussion.html), to help handle discussion around which tables, and files should be targeted. I will put some thought into how to improve the process, better using Github to move the conversation forward. I’m not going to be able to do this alone, ultimately we need the students and factuality at OU to get interested in participating, but this will take time—something which Github is well suited to help manage asynchronously.

The next steps for this project, is to have another conversation with Mark and Adam from OU, and look through some of the low hanging fruit I’ve identified. After that I will put together a strategy for using [Kimono Labs](https://www.kimonolabs.com/) to help us easily publish APIs from the targets I’ve identified. I also suspect that as part of this process there will be a lot of de-duping, and other data janitorial work before we can publish some usable APIs, and move things forward.

You can follow my work on this at the [OU API project Github repository](http://university-of-oklahoma-api.apievangelist.com/), and when it makes sense I will publish stories on [API Evangelist](http://apievangelist.com).
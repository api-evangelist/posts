---
published: true
layout: post
title: Beta Testing Linkrot.js On API Evangelist
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-broken-chain.png
author:
  name: kinlane
tags:
  - Testing
  - API Evangelist
  - Evangelist
---
I started beta testing a new JavaScript library, combined with API, that I’m calling linkrot.js. My goal is to address link rot across my blogs. There are two main reasons links are bad on my site, either I moved the page or resource, or a website or other resource has gone away.

To help address this problem, I wrote a simple JavaScript file that lives in the footer of my blog, and when the page loads, it spiders all the links on the page, combining them into a single list and then makes a call to the linkrot.js API.

All new links will get a URL shortener applied, as well as a screenshot taken of the page. Every night a script will run to check the HTTP status of each link used in my site—verifying the page exists, and is a valid link.

Every time link rot.js loads, it will spider the links available in the page, sync with linkrot.js API, and the API returns the corresponding shortened URL, or if a link shows a 404 status, the link will no longer link to page, it will popup the last screenshot of the page, identifying the page no longer exists.

Eventually I will be developing a dashboard, allowing me to manage the link rot across my websites, make suggestions on links I can fix, provides a visual screen capture of those I cannot, while also adding a new analytics layer by implementing shortened URLs.

Linkrot.js is just an internal tool I’m developing in private beta. Once I get up and running, Audrey will beta test, and we’ll see where it goes from there. Who knows!
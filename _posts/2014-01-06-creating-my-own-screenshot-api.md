---
layout: post
title: Creating My Own Screenshot API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-evangelist-screenshot-2.png
author:
  name: kinlane
tags:
  - My
---
I use screenshots across the [API Evangelist network](http://apievangelist.com/network.html). I take screenshots of stories I curated, companies I track on and API developer areas I'm monitoring. Historically I've used a variety of screenshot APIs, to generate the 1000's of screenshots I need to make my network function.

This last week I was running through my network, and noticed the screenshot API had stopped working. It isn't a critical piece of infrastructure so I've used free services and don't really feel the need to monitor in real-time, I just respond when I stop seeing screenshots on the news listing page.

This is the 3rd or 4th time this has happened, and when I started looking for a new screenshot API I noticed the majority of them now charge, and was in a range I just didn't feel I couldn't afford being a one man show. I knew in the back of my mind that I could develop my own screenshot API solution.

After test driving several image libraries I settled in with [PhantomJS](http://phantomjs.org/), which allows me to load and manipulate web pages in an object, and then take a screenshot of the web page in that state. I quickly wrapped in a web API using the Slim Framework in PHP.

Once I had the API deployed I wrapped with my [3Scale API management infrastructure](http://bit.ly/13esk6Q "3Scale API Management Infrastructure"), which requires an API key before you can use any of my APIs. Next I updated my company, API and news screenshot tool to use my new screenshot API.

After I get some free time I will clean up the code and publish via Github, so others can deploy their own screenshot API and take the same path I chose.
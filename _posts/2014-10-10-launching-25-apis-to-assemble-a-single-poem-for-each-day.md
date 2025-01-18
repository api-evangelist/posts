---
layout: post
title: Launching 25 APIs To Assemble A Single Poem For Each Day
image: >-
  https://s3.amazonaws.com/kinlane-productions2/poem-of-the-times/poem-of-the-times.png
author:
  name: kinlane
tags:
  - Launching
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/poem-of-the-times/poem-of-the-times.png)](http://poemofthetimes.laneworks.net/)

I first started Poem of the Times back around 2003, and for about five years I harvested a poem each day, from the top headlines across the top english speaking newspapers around the world. Sometime in 2008 I stopped generating the poem, but in an effort to showcase the potential of APIs, I thought it would be a good time to revive the project.

Version 1.0 of Poem of the Times used RSS to pull its headlines, and for version 2.0 I want to use APIs. Something that seems impossible when you are faced with the fact that most of the top newspapers do not have APIs, which is very sad. ;-( However in 2014 we can make APIs from any web page using Scraping to API tools like [Kimono Labs](https://www.kimonolabs.com/).

Using Kimono Labs I created an APIs for each of top 25 newspapers. I worked my way down a list of top newspapers around the globe, and using Kimono’s Chrome add-on I was able to map my API to whatever part of the news homepage featured the latest stories. This was different for each news site, and some of them threw errors when I ran Kimono, but when this happened I quickly moved on until I had 25 successful APIs—something that took me about an hour and half.

Now that I had 25 separate news APIs I [published a machine readable Swagger definition for each](https://github.com/kinlane/poem-of-the-times/tree/gh-pages/definitions), and then published an [APIs.json listing all 25 APIs in a single Poem of the Times API collection](https://github.com/kinlane/poem-of-the-times/blob/gh-pages/apis.json). Right now this is manual, but I know this is something that is on the Kimono roadmap, introducing the ability to automatically generate Swagger specs, and build APIs.json collections from your Kimono API catalog.

Next I wrote a simple PHP script that pulled the APIs.json, spidered all 25 APIs, made a call to each one, and randomly grabbed a single headline, adding to an overall poem for the day. Once I had collected 25 news stories, I hit shuffle on them again, making sure the poem was in no particular order. After that I published the results to a single HTML, and JSON file, providing a single poem for each day.

As I do with all of my projects, [I published Poem of the Times as standalone Github repository](http://poemofthetimes.laneworks.net/), and I am publishing each poem as a Jekyll blog post, and linking to each days poem JSON file. I have a job setup each day to pull the poem, but the publish to Github will be manual until I get it working 100%. My Poem of the Times projects was a great  vehicle for learning more about [Kimono Labs](https://www.kimonolabs.com/), while also get to play around with another way to tell stories using APIs.
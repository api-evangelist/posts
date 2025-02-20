---
layout: post
title: Deploying An API From Your Critical Twitter Data Without Being A Programmer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twitter-to-restlet.png
author:
  name: kinlane
tags:
  - Data
  - Twitter
---
I am continuing my series on helping non-developers realize they can publish, and put APIs to work, without having an API expert in their pocket, using [Zapier](https://zapier.com), [Google Sheets](https://www.google.com/sheets/about/), and [Restlet](http://restlet.com/). Its no secret that Restlet is an API Evangelist partner, and they are my partner because they are the easiest way to deploy a web API--something I am trying to help the "normals" understand the untapped potential of.

[As I finish up my @APIStrat conference again](http://austin2015.apistrat.com/), for the sixth time, I'm reminded that I need to harvest the essential Twitter exhaust from the conference, otherwise if I wait too long, I won't be able to get it. You see, Twitter limits what you can grab from the Twitter API by either time, or number of Tweets, so I can only gather X amount of Tweets, and if I wait too long, I'm often out of luck. It is critical that I do this right away, and depending on how loud the Twitter exhaust is, I need to do it while the event is still going on.

To start, you obviously need a Twitter account, but you will also need a Zapier, Google and Restlet account. Then using Zapier you can gather the following Twitter data points, and send to a Google Sheets:

*   New Mentions
*   New Followers
*   New Favorites
*   New Tweets

How you store these in Google Sheets is up to you, but I recommend breaking each data point down as its own sheet, and even by separate time-frame like day, week, or month. It helps to keep things broken up into smaller chunks, when you are using Google Sheets as a data store--tricks of the trade!

Zapier gives you everything you need to setup the Zaps that route mentions, followers, favorites, and your tweets to the Google Sheet(s), and once they are there, you can clean up, edit, and organize as you see fit. Next Restlet comes into the picture, allowing you deploy an "entity store" from your Google Spreadsheet. Once you have your entity store connected to the Google Spreadsheet, using their simple wizard, you can then deploy as a web API--Restlet walks you through the entire process, no code necessary.

What you do with your API is up to you, but the important part for me, is I have the references to the Tweets and followers from Twitter that are important to me. When I need to reference the mentions for an event back in 2013, I can do it. When I need to create a special outreach list to anyone who Tweeted at our most recent event, I can do it. 

Simple API solutions, using Zapier, Google Sheets, and Restlet, are empowering to the average business and organizational user who is looking to just get their work done, track on what is important to them, but in an API-centric way which will then allow the information to be then used in web and mobile apps, but also spreadsheets, widgets, and other API driven goodies.
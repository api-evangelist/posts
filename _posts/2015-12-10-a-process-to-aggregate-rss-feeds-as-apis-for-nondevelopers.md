---
layout: post
title: A Process To Aggregate RSS Feeds As APIs For Non-Developers
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-rss-icon.png
author:
  name: kinlane
tags:
  - Process
  - APIs
  - Developers
---
A blog RSS feed is still my number one way to monitor what is happening across the API space. I also use RSS from [Google Alerts](https://www.google.com/alerts) and [TalkWalker](http://www.talkwalker.com/en/social-media-intelligence/) to monitor a variety of leading API industry keywords. RSS is an important information gathering format, and I wanted to help some of my non-developer followers, understand how they can aggregate RSS feeds across a variety of topics, clean up, and publish a centralized API for all feeds.

To take advantage of this advice, you will need to have three separate accounts:

*   **[Zapier](https://zapier.com/)** - API reciprocity provider, helping you move your bits and bytes around online.
*   **[Google](https://accounts.google.com/)** - Online spreadsheet solution, which can be used to deploy APIs.
*   **[Restlet](http://restlet.com/)** - API deployment and management as a service provider.

Once you have accounts with these three services, you can take advantage of the features each brings to the table:

*   **Pull RSS From Providers** - Using Zapier, you can setup Zaps, which will allow you to connect RSS feeds, and route them to your Google Sheets. Setup a recipe for each RSS feed you will want to pull, store, and make available later.
*   **Google Sheet Content Store** \- Google Sheets provides you a data store, which your Zapier recipe will route all new RSS posts to. Depending on how many feeds you pull, and aggregate, you can setup one or many documents, and worksheets.
*   **Publish Central API -** Using Restlet, you can setup what is called an entity store, which pulls the content of your spreadsheet(s), and stores them locally for publishing as an API. Once deployed, you can then setup a web API, which provides all content pulled via RSS, as a single API.

Ok, many developers are going to ask me, "why the hell would you do this"? First, this isn't for you--it is for folks without programming experience. This post is meant to be the outline, for an actual API integration how-to series I am working on, and is about introducing non-developers to what is possible with Zapier, Google Sheets, and Restlet.

My goal, is to help establish a robust toolbox that non-developers can put to work for them, and take more control of their worlds. Publishing APIs using the wide variety of approaches available to us via Zapier, Google, and Restlet, puts a lot of power and control into the hands of the average business user. Once I get a handful of API deployment examples, I will work on providing more examples of how these business users can then put that API to work in their own world.
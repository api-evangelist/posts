---
layout: post
title: Deploying APIs Using Heroku And 3Scale Add-On
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/heroku/heroku-logo.png
author:
  name: kinlane
tags:
  - 3Scale
  - Scale
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/heroku/heroku-logo.png)](https://heroku.com)

I am playing around with deploying APIs using multiple cloud platforms, and using popular container solutions. Next up is quickly deploying one of my utility APIs, to [Heroku](http://heroku.com), complete with access control, traffic reports, and supporting analytics with [3Scale infrastructure](http://bit.ly/13esk6Q).

**Application - Simple Screen Capture API**  
I’ve been working through an [operational harness](http://apievangelist.com/2014/04/17/an-operational-harness-for-my-screen-capture-api/) for deploying all my APIs, and the API I use to push forward my approach to API deployment, is a [screen capture API](http://apievangelist.com/2014/01/06/creating-my-own-screenshot-api/). This is what I will be deploying on Heroku, creating a simple application, that will take screen captures of web pages that I pass to it.

**3Scale Heroku Add-On**  
To make API deployment on Heroku easier, [3Scale has created a Heroku add-on](https://addons.heroku.com/threescale) that you can easily deploy for any application you have running on the PaaS platform. With just a single click I added the 3Scale Heroku add-on to my screen capture API--now I can apply 3Scale API infrastructure to my API.

**API Access Control**  
Using 3Scale I can control who has access to my screen capture API, by setting rate limits and quotas, and if I want I can even charge for access. I can compose any type of service levels for my API that I want. I will create tiers for internal access, external partners, and a public tier where I charge a fee for each API call.

**API Traffic Report and Analytics**  
With all of my screen capture API traffic managed with 3Scale, I can now see traffic analytics and reports, broken down any account, application or for specific service. Any developer who signs up for my screen capture API, will get access to the reports for their account usage as well.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/3Scale/3scale-heroku-add-on.png)](https://addons.heroku.com/threescale)

**Ready-To-Go Developer Portal**  
One of the benefits of using 3Scale for deploying your API on Heroku, is that you get a developer portal to go with your APIs. This is where developers will to learn about your API, register for API keys, and view reports on their usage.

**Free To Get Started**  
One of the main reasons I use 3Scale to mange my APIs, is that even though I’m on the paid tier now, 3Scale allows me to fire up new APIs, manage access and receive reports at no charge. I don’t pay until my APIs start generating traffic, and if my business model is sound, I should be covered. You get up to 250 user accounts with a traffic volume 150,000 API calls per day before you have to move up to the next tier.

**Multi-lingual APIs In Cloud**  
3Scale provides [instructions for deploying APIs using Ruby, Node.js, and Java](https://devcenter.heroku.com/articles/threescale#deployment-overview), allowing you to the language you prefer for API deployment.

**Drive API Code From Github**  
I will be driving the development of the code for my screen capture API using Github. Heroku allows me connect my application to a specific Github repository, allowing me to [manage all my API deployment centrally using Github](http://apievangelist.com/2014/02/05/github-as-the-central-presence-definition-configuration-and-source-code-for-your-api/).

I already have a PHP version of my screen capture API, that uses the Slim REST framework, which wraps around PhantomJS, which does the actual screen capture. Now I can take my standard utility grade, screen capture API and easily deploy on Heroku, for my own internal use, for a partner, or to any wholesale customer who would like to deploy a screen capture API in their own Heroku account.

Next I’m going to look at various ways to deploy the same screen capture API using Amazon Web Services (AWS). There are several options for deploying APIs on AWS, and hopefully I can find the easiest, lowest cost way to get an API deployed, by playing with several approaches.

_**Disclosure:** 3Scale is an API Evangelist partner._
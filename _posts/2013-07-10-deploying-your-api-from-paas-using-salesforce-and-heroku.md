---
layout: post
title: Deploying Your API From PaaS Using Salesforce and Heroku
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/salesforce-logo.png
author:
  name: kinlane
tags:
  - Sales
  - Salesforce
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/salesforce/salesforce-logo.png)](http://salesforce.com)

The world of API management is expanding, and to support this growth I've broke up my research into three separate buckets: [API design](http://design.apievangelist.com "API Design"), [API deployment](http://deployment.apievangelist.com "API Deployment") and [API management](http://management.apievangelist.com "API Management").

Zooming in on API deployment, one of the ares I'm looking to educate the masses about, is quick and dirty API deployment using existing PaaS. Providing ways for companies, and their internal problem owners to rapidly deploy APIs via their existing tools and services.

One great example I recently found is from Jeff Douglas ([@jeffdonthemic](https://twitter.com/jeffdonthemic)), Platform Architect [@CloudSpokes](https://twitter.com/CloudSpokes "Cloudspokes") & Sr. Tech. Consultant [@Appirio](https://twitter.com/Appirio), on [using Heroku to deploy an API from your Salesforce organization](http://blog.jeffdouglas.com/2013/07/02/build-a-public-api-on-force-com/). Jeff's walkthrough is a little choppy, but it is full of extremely valuable nuggets of information, and he says he's working on a more polished version of it to present.

The approach is pretty straightforward. You are simply deploying an API on Heroku, that uses code to make calls to your Salesforce account via the Salesforce Apex API. The API you launch on the Heroku PaaS platform will abstract away your custom code that you use to pull specific Salesforce resources, allowing you to scale and securely deliver existing data in your Salesforce platform, and ultimately use Saleforce as an administrative interface for your API(s).

Jeff gives examples of how you can do this in Ruby, Node.js and even Java, and talks about approaches to versioning the API and providing documentation. He also recommends that for higher traffic APIs you should look at existing [API management companies](http://management.apievangelist.com/companies.html "API management companies") to help you secure, meter, develop service packages, and provide you with billing and analytics options.

I'd like to see starter kits developed in PHP, Python, Ruby, Node and Java that allow for quick API deployment using data from Saleforce on not just Heroku, but other popular PaaS platforms like Amazon and Google.

There are a lot of companies who use Salesforce to manage vital resources, and providing the business and marketing folks within these organizations with blueprints to quickly make these resources available via APIs, is important to equipping them to solve the big data and mobile challenges they are facing.
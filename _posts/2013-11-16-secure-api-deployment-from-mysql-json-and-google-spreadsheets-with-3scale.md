---
layout: post
title: Secure API Deployment From MySQL, JSON and Google Spreadsheets With 3Scale
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-toolbox.jpg
author:
  name: kinlane
tags:
  - My
  - Deployment
  - Spreadsheets
  - Spreadsheet
  - 3Scale
  - Scale
  - JSON
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-toolbox.jpg)](https://github.com/kinlane/api-deploy-toolkit)

I'm doing a lot more API deployments from dead simple data sources since I started working in the federal government. As part of these efforts I'm working to put together a simple toolkit that newbies to the API world can use to rapidly deploy APIs as well.

A couple of weeks ago I worked through the [simple, open API implementations](http://apievangelist.com/2013/10/22/api-deployment-from-mysql-json-github-and-google-spreadsheets/), and this week I want to show how to secure access to the API by requiring an AppID and AppKey which will allow you to track on who has access to the API.

I'm using [3Scale API Management](http://bit.ly/1cHBhd5) infrastructure to secure the demos. 3Scale has a free base offering that allows anyone to get up and running requiring API keys, analytics and other essentials with very little investment.

Currently I have four separate deployment blueprints done:

*   [MySQL to API](http://apievangelist.com/2013/11/16/deploy-secure-api-mysql-to-api/)
*   [Local JSON to API](http://apievangelist.com/2013/11/16/deploy-secure-api-json-to-api/)
*   [Public Google Spreadsheet to API](http://apievangelist.com/2013/11/16/deploy-secure-api-public-google-spreadsheet-to-api/)
*   [Private Google Spreadsheet to API](http://apievangelist.com/2013/11/16/deploy-secure-api-private-google-spreadsheet-to-api/)

All of these samples are in PHP and uses the [Slim PHP REST framework](http://www.slimframework.com/). They are meant to be working examples that you can use to seed your own API deployment.

You can find the entire [working repository](https://github.com/kinlane/api-deploy-toolkit), including Slim framework at Github.
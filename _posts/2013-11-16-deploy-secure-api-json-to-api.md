---
layout: post
title: 'Deploy Secure API: JSON to API'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-json-data-store.png
author:
  name: kinlane
tags:
  - JSON
---
I'm working on a series of simple scripts that help people deploy APIs from some of the most common data sources. I'm starting with a series of PHP scripts, and a couple weeks ago I did a JSON to API demo, and this week I want to show how to secure access to the API by requiring an AppID and AppKey which will allow you to track on who has access to the API.

For this PHP implementation, I'm using the [SLIM framework](http://www.slimframework.com/), which provides a dead simple REST framework you can use to deploy an API from a variety of data sources. To begin deploying an API from your JSON datastore, download the REST library and upload to your server that runs PHP.

Slim is pretty straightforward to work with, to add each API endpoint you just add a single PHP file under methods. For this how-to guide we are going to add a simple endpoint from our JSON products data store.

Next you just add an include reference in the index page for your slim implementation. Everything up until now was the same as the open JSON to API solution, but not on the index page we will wrap the entry point to the API, with a [3Scale API Management](http://bit.ly/1cHBhd5) layer. 3Scale is free to sign up and you pay as you scale, so all it takes to get going is register for a 3Scale account and choose the base account, and under your account settings you will find your key to link this code to your account.

This API just uses ID, Name, Price and Description of the product, and queries by a simple query parameter. You can use this as a template for your own product database, adding and removing fields as you need, or completely retrofitting for any database table. 

There are any number of reasons you would want to secure an API driven from a JSON file, to offer advanced search, filtering or just to track on who is accessing resources. This solution just uses 3Scale to secure the API interface, requiring an AppID and Appkey to use the API. 

Hopefully that demonstrates a simple approach to securing an API that is driven from a JSON file.

_Disclosure: 3SCale is an API Evangelist Partner_
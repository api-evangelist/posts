---
layout: post
title: >-
  Augmenting Data Sources and APIs with POST, PUT, and DELETE Using Restlet
  APISpark
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-write.png
author:
  name: kinlane
tags:
  - Data
  - APIs
  - PUT
  - POST
---
Most of the APIs you find out there are read only, meaning they act like a website and just allow you to retrieve data, content, and other media types, but usually do not let you read or write any data to them. [I wrote a while back about augmenting a read only API with an external POST, PUT, and DELETE](http://apievangelist.com/2015/03/11/augmenting-a-read-only-api-with-an-external-post-put-and-delete/) as I came out of the government, but wanted to update the topic, based upon some open data work I'm doing with [RESTlet API Spark](http://restlet.com/products/apispark/).

[I am preparing for my Restlet Summer of APIs webinar tomorrow morning](http://restlet.com/resources/detail/summer-of-apis-workshop/), so I am publishing some open data files (CSV, Excel, etc.) to the platform, generating data stores, and ultimately APIs. A simple example of this in action would be with [farmers market data from the US Department of Agriculture](https://catalog.data.gov/dataset/farmers-markets-geographic-data). [There is a farmers market API, but it leaves a lot to be desired](http://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html), something others, [like Code for America have tried to solve](http://www.codeforamerica.org/blog/2011/08/08/farmers-market-api/), but I figured I could not just launch an API from the open dataset, I would make it read and write.

Deploying an API with Restlet's APISpark is pretty straightforward, something I will build a more detail walk-through in the future, but to summarize, you just download the Excel file from data.gov, and upload to Google Spreadsheet. Once you have cleaned up the spreadsheet, fields, and other elements, you can connect to your Google Drive using API Spark, and generate an entity data store--you now have a separate copy of the Google Spreadsheet, stored on APISpark. 

Next, you can publish a web API using the service, something you can use to launch multiple versions, require authentication to use, track usage, and much more. The great part, is it doesn't just generate the GET for your API, you also get the POST, PUT, and DELETE. You have now have a full read and write API for Farmers Market dataset. You could now accept submissions from Famer Market owners, merchants, and attendees to expand on the dataset, outside the original USDA source.

This is just one example of how you could augment existing open data sources, or even an existing API, and improve on them using Restlet API Spark. The best part is you can do this without any coding. While it does take some work to massage the data, and API design into shape, I did a handful of APIs with never actually writing any code. [If you want to see this in action, catch my workshop tomorrow morning at 10 AM](http://restlet.com/resources/detail/summer-of-apis-workshop/), and maybe you can find a dataset you would like to see improved with a simple API, and [participant in the Restlet Summer of APIs](http://restlet.com/summer-of-apis/).
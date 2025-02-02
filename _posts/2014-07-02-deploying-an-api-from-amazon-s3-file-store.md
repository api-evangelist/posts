---
layout: post
title: Deploying An API From Amazon S3 File Store
image: https://s3.amazonaws.com/kinlane-productions2/amazon/Amazon_S3_Site.png
author:
  name: kinlane
tags:
  - Amazon S3
  - Amazon
---
[![](https://s3.amazonaws.com/kinlane-productions2/amazon/Amazon_S3_Site.png)](http://bit.ly/1sgwGpq)

I'm spending a lot of time updating my [API deployment research](http://deployment.apievangelist.com "API Deployment") lately, making sure it reflects what is truly going on out there in the space. In addition to tracking on legacy approaches to API deployment like enterprise API gateways, or using an open-source API frameworks, I am also trying to understand the realities of scraping data for deployment of APIs, and new solutions from API platforms like [APISpark](http://bit.ly/1sgwGpq), [StrongLoop](http://bit.ly/1jLr1Pf), [Orchestrate.io](http://bit.ly/1wWkDwH), and [Import.io](http://bit.ly/1pKwOg9).

When it comes to the realities of deploying an API, your data or content sources is likely to come from a myriad of file stores, databases, and other systems, and I’m looking to explore as many of the as I possibly can. Todays exploration is focused on deploying an API, using Amazon S3 as a file store. I use Amazon S3 for all my heavy object storage which includes images, PDFs, XML, JSON and CSV data stores—it makes sense that someone companies would want to deploy APIs using their Amazon S3 stores.

[![](https://s3.amazonaws.com/kinlane-productions2/api-service-providers/api-spark/apispark-s3.png)](http://bit.ly/1sgwGpq)

I’m using APISpark as my API deployment platform, which allows me to first establish a datastore, which is mapped to a specific bucket within my Amazon S3. What I put into my buckets, and folders is up to me. I might use it to quickly provide access to my images, a folder of XML files, PDFs, or other resource. Once I have my datastore defined, I can deploy a simple web API using APISpark, which gives me all the expected features of an API—URL API endpoints, documentation, code samples, basic authentication (username / password), analytics, and much more.

As with the [Google Spreadsheet to API example I wrote on Monday](http://apievangelist.com/2014/06/30/deploy-an-api-from-a-google-spreadsheet-using-apispark/), this scenario allows anyone who manages content and data, to easily organize it on S3, then deploy an API for access, with no IT or developer experience required. You might need to share images, files, or other content with another department within your company or organization, partners outside the corporate firewall, or maybe some 3rd party developers you have building a new website or mobile application.

API deployment is getting easier, and cloud API service providers like APISpark are making API deployment something ANYONE can do—stop waiting for IT or developer resources! ;-)

**Disclosure:** _APISpark is an API Evangelist partnership._
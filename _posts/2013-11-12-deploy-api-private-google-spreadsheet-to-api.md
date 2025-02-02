---
layout: post
title: 'Deploy API: Private Google Spreadsheet to API'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-google-docs.png
author:
  name: kinlane
tags:
  - Spreadsheet
---
I'm working on a series of simple scripts that help people deploy APIs from some of the most common data sources. I'm starting with a series of PHP scripts, and next up is a private Google Spreadsheet to API, using JSON stored in Github.

For this PHP implementation, I'm using the [SLIM framework](http://www.slimframework.com/), which provides a dead simple REST framework you can use to deploy an API from a variety of data sources. To begin deploying an API from your Google Spreadsheet datastore, download the REST library and upload to your server that runs PHP.

Slim is pretty straightforward to work with, to add each API endpoint you just add a single PHP file under methods. For this how-to guide we are going to add a simple endpoint from our JSON products data store.

This project also depends on the [Google Drive API](https://developers.google.com/drive/) and I use the [Google API PHP Client](https://code.google.com/p/google-api-php-client/) to connect to Google and provide necessary oAuth connectivity. 

Before all of this works you need to have an oAuth token, which I created a simple script to handle:

I leave it to you to figure out where you want to store your oAuth tokens, and other goods. I use a config.php file, but can easily be done from database or other:

Next you just add an include reference in the index page for your slim implementation:

This API just uses ID, Name, Price and Description of the product, and queries by a simple query parameter. You can use this as a template for your own product database, adding and removing fields as you need, or completely retrofitting for any database table. That is it, now you have a simple product API that pulls a list of products from a private Google Spreadsheet data store.

This project is more excercise than anything else. I don't recommend deploying a public API driectly off a private Google Spreadsheet. Next up, will be to secure it using an [API infrastructure provider like 3Scale](http://bit.ly/13esk6Q), and possibly build in some caching.
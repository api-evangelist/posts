---
layout: post
title: 'Deploy API: JSON to API'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-json-data-store.png
author:
  name: kinlane
tags:
  - JSON
---
I'm working on a series of simple scripts that help people deploy APIs from some of the most common data sources. I'm starting with a series of PHP scripts, and next up is JSON to API.

For this PHP implementation, I'm using the [SLIM framework](http://www.slimframework.com/), which provides a dead simple REST framework you can use to deploy an API from a variety of data sources. To begin deploying an API from your JSON datastore, download the REST library and upload to your server that runs PHP.

Slim is pretty straightforward to work with, to add each API endpoint you just add a single PHP file under methods. For this how-to guide we are going to add a simple endpoint from our JSON products data store.

Next you just add an include reference in the index page for your slim implementation:

This API just uses ID, Name, Price and Description of the product, and queries by a simple query parameter. You can use this as a template for your own product database, adding and removing fields as you need, or completely retrofitting for any database table. That is it, now you have a simple product API that pulls a list of products from a JSON data store.
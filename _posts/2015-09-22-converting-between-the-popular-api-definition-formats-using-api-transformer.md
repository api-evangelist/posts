---
layout: post
title: Converting Between The Popular API Definition Formats Using API Transformer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-transformer-screenshot.png
author:
  name: kinlane
tags:
  - Definition
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-transformer-screenshot.png)](https://kin-lane.github.io/blog/)

My own API management system allows me to import Postman collections, HAR files, Charles Proxy XML files, and Swagger version 1.2, but when it comes to output, it only speaks Swagger 2.0. I've been wanting to create a tool for outputting my definitions as API Blueprint for some time now, but just haven't had the time to do the work.

I have been secretly hoping someone would build a good quality, so I wouldn't have to do this work myself. Now I have [API Transformer](https://apitransformer.com/), an API definition translation platform, developed by the [APIMATIC](http://apimatic.io) team. Using API Transformer you can upload or pull API definitions in the following formats:

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-json-with-blueprint.png)](https://kin-lane.github.io/blog/)

*   API Blueprint
*   Swagger 1.0 - 1.2
*   Swagger 2.0 JSON
*   Swagger 2.0 YAML
*   WADL - W3C 2009
*   Google Discovery
*   RAML 0.8
*   I/O Docs - Mashery
*   APIMATIC Format

Then you can output API definitions in the following formats:

*   API Blueprint
*   Swagger 1.2
*   Swagger 2.0 JSON
*   Swagger 2.0 YAML
*   WADL - W3C 2009
*   APIMATIC Format

With API Transformer, they are offering a pretty valuable service, that any API service provider, and API consumer can put to work right away. [I quickly generated four API Blueprints, for my API, audio, blog, and building block APIs, which I also indexed as part of each APIs.json file](https://kin-lane.github.io/master/).

As any good API service provider should, The API Transformer has an API. You can build in API transformations between definition into any service or tooling. In my opinion, every API service provider in 2015 should speak as many API definitions as possible, always allowing customers to import, and export in all of the formats offered above.

API Transformer reflects how API service providers should work, it is doing one thing, and doing it well, and it provides a simple web interface, as well as a dead simple API. There is no way I will be building out my own service now that [APIMATC has launched API Transformer](https://apitransformer.com/).
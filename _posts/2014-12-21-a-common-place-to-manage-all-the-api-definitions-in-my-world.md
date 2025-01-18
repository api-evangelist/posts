---
layout: post
title: A Common Place To Manage All The API Definitions In My World
image: https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-icon.png
author:
  name: kinlane
tags:
  - My
  - Definitions
  - Definition
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-icon.png)](https://github.com/kinlane/api-stack/tree/gh-pages/data)

I’m profiling all the [700+ companies I monitor across the space](http://theapistack.com/), going through each one and defining their API program, evaluating the tech, business and politics of their operations. Part of this process is creating a Swagger definition for each API. I’m not deeply concerned with getting each API definition 100%, unless I'm directly integrating with the aPI. For this round I’m looking at defining just the surface area of the API, including each endpoint, headers, parameters, and body format, and leaving the underlying data model for another time.

I’m [publishing all of my API definitions to the API Stack Github repository](https://github.com/kinlane/api-stack/tree/gh-pages/data). I’m using this as a staging area before I publish them to [APIs.io](http://apis.io). Last month [I create an APIs.son for 690 APIs](http://www.3scale.net/2014/11/apis-io-hit-front-page-of-hacker-news/), and I’m looking to generate as many Swagger definitions for these high value APIs as I can over the holidays. It would be much better if API providers generated, and maintained their own API definitions, but until that happens I’m happy doing a little extra work to get us to a critical mass.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-architecture/api-architecture-two.png)](http://apievangelist.com/2014/12/21/making-sure-the-most-important-layers-of-api-space-stay-open/)

Feel free to use any of my Swagger specifications, all that I ask is if you update, or add to them, please commit back to the repository so everyone can benefit. Additionally if you have any Swagger definitions for your own APIs, or other public APIs that I do not have in my listings, please share. It is extremely important that all public API endpoints are defined in a machine readable format. I don’t care if you use Swagger, API Blueprint or RAML, just make sure your APIs have a definition, and it is shared publicly. If it is one of your designs, make sure and also add to API Commons.

When I reach a critical mass of [API definitions in the API Stack Github repo](https://github.com/kinlane/api-stack/tree/gh-pages/data), I will publish a story on apievangelist.com announcing they are there, and do incremental pushes to APIs.io, so that these value APIs are part of its open index, allowing you to build API collections, and even your open API search engine. Its important that we all [work to define this layer of the API space, and work to keep it as open, and machine readable as possible](http://apievangelist.com/2014/12/21/making-sure-the-most-important-layers-of-api-space-stay-open/).
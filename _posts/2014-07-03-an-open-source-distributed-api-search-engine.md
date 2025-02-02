---
layout: post
title: An Open Source Distributed API Search Engine
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apis-io/apis-io.png
author:
  name: kinlane
tags:
  - Open Source
  - Search
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apis-io/apis-io.png)](http://apis.io/)

I wanted to stop and reflect for a moment on the open source, distributed API search engine, that [3Scale](http://bit.ly/13esk6Q) and API Evangelist developed, in support of the [APIs.json discovery format](http://apisjson.org/). When we conceived the APIs.json API discovery format, we knew that the project would be dead in the water, if there wasn’t a clear incentive for API providers to generate an [APIs.json](http://apisjson.org/)—helping them get their APIs found.

Until 2014, when you said "search for APIs", it meant going to a website ([programmableweb.com](http://programmableweb.com)), and searching for an API in a curated directory of APIs. In the last couple years, we’ve seen an evolution on this directory search model from Mashape, in the form of a hub or marketplace. Managed directories have their place in the world of API discovery, similar to the web directory realm, but as the number of APIs grow, we are desperately needing to go beyond just directory based API discovery, and like with the web, establish a meaningful search layer—we need a Google of API search.

This is why 3Scale and API Evangelist developed APIs.json, and the first open tooling on top of the API discovery format, we called [APIs.io](http://apis.io/). We do not believe APIs.json + APIs.io is the next Google, but we do feel it will jumpstart the conversation around what is needed when it comes to API discovery. How do we find the best of breed APIs, not just on keyword search in the title and description, or driven from tags? We need a way for API providers to describe their APIs, and supporting building blocks, in a machine readable, distributed way, that can be indexed by many API discovery solutions.

[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

When searching for APIs, we will need to find specific API interfaces, with very specialized terms of service, and pricing. We will need API rating solutions like [API Rating Agency](http://api500.com/) baked into our API search algorithms. We need an extensible API discovery format, this is APIs.json. We need an open source search engine, that can be deployed as general search engine, or deployed as a specialized, niche, API search engine serving a specific business sector, like government--this is APIs.io.

APIs.io now has 128 APIs in its index, submitted by 91 maintainers. We are just getting started, defining what is next for both APIs.json, and APIs.io, make sure and get involved early on, and help make your mark on this rapidly expanding world of API discovery. You can [add your APIs to APIs.io](http://apis.io/apis/add), [fork the open source API search engine code](https://github.com/apisio/apis.io "fork the open source API search engine code") (coming soon) and launch your own API search engine, or [provide feedback on the next version of APIs.json](https://github.com/api-commons/api-json/issues), the format that will help discover the valuable API resources everyone will be depending on in the API economy.

**Disclosure:** _3Scale is an API Evangelist partner._
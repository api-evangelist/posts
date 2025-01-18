---
published: true
layout: post
title: >-
  Next Stable Version of APIs.json + APIs.io Is Ready - Are Your APIs
  Discoverable?
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - Discover
  - APIs.json
  - APIs
  - APIs.io
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

Steve ([@njyx](https://twitter.com/njyx)), Nicolas ([@picsoung](https://twitter.com/picsoung)), and I have been working hard to gather all the feedback from some very smart folks on the [API.json format](http://apisjson.org/). Now we are stoked to finally announce that we have the [0.14 version](http://apisjson.org/format.html) ready for prime time. Our goal with the first version of APIs.json, was to just get the idea out there to get feedback from the community, and after four iterations, we feel like the format is now something the community can really build on.

First, lets recap, what is APIs.json? APIs.json is a machine readable JSON file that lives in the root of your domain, and describes your APIs and its supporting API program.

Think of APIs.json as a [robots.txt](http://www.robotstxt.org/), or [sitemap.xml](https://www.google.com/sitemap.xml) from Google, but instead of describing all the pages of your website, an APIs.json describes your developer portal, all available APIs, and the supporting building blocks of your API program--allowing you to describe your API efforts whether it is a public, or private affair. The goal is simply to provide a machine readable description, that any search engine can crawl, and make sense of your overall API program, and each individual API resource.

The real power of APIs.json lies in the properties that you can apply to your APIs. We wanted to start with providing basic links meant for humans, like a link to the API signup page, or documentation, but then quickly provide machine readable elements like a [Swagger specification](https://bit.ly/1w9oKpq), or [API Commons](https://bit.ly/1e27KIc) manifest. However we don’t want to define and control all of the properties you use to describe your APIs, and while we have a [short list of additional properties](https://github.com/api-commons/api-json/issues/44) that we are adding in on the next version, you can use any property you like just by adding x- to your own type label.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apis-io/apis-io.png)](http://apis.io/)

Along with the [APIs.json 0.14](http://apisjson.org/format.html) release, the API search engine [APIs.io](http://apis.io) also supports the latest APIs.json format. You can now validate your APIs.json 0.14, and submit your API.json for indexing using the APIs.io interface or API (mind blown). Your APIs.json will be your gateway to API discovery in the future, and since [APIs.io](http://apis.io/) is an open source API search engine, it will just be the first of a wave of new API search engines to emerge, built on the APIs.json format.

While we will be making slight changes in coming versions of APIs.json, we feel like the format is now ready for prime time, and we encourage the entire API community to begin participating in the next generation of [API discovery](http://discovery.apievangelist.com/), where your API, and the details of your API program are machine readable, and discoverable, in a single, known location at your company, organization, or agencies  public or private domain.
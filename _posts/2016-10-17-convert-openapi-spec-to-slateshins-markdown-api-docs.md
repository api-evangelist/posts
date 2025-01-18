---
layout: post
title: Convert OpenAPI Spec to Slate / Shins Markdown API Docs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/widdershins_logo.png
atomdate: 2016-10-18T00:00:00.000Z
tags:
  - OpenAPI
  - Docs
  - Open
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/widdershins_logo.png)](https://github.com/mermade/widdershins)

Someone turned me on to [an OpenAPI Spec to Slate / Shins compatible markdown converter on Github](https://github.com/mermade/widdershins) this last week. I have been an advocate for [making sure we are still using machine readable API definitions for our API documentation, even if we are deploying the more attractive Slate](http://apievangelist.com/2015/06/25/we-should-be-generating-slate-from-swagger-so-we-maintain-a-machine-readable-core/). I've been encouraging folks to develop an attractive option for API documentation driven by OpenAPI Spec for some time, so I am happy to add this converter to my [API documentation research and toolbox](http://documentation.apievangelist.com).

The OpenAPI Spec to markdown converter also introduced me to [a version of Slate that is ported to JavaScript / Node.js called Shins](https://github.com/mermade/shins). I'm going to add Shins to my API documentation research, and "widdershins" the OpenAPI Spec to markdown converter to my [API definition research](http://definitions.apievangelist.com/). The auto-generation of attractive API documentation like Slate and Shins seems like a valid approach to getting things done, and worth including in my research.

I am increasingly publishing [YAML editions of my OpenAPI Specs](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/api-commons/runscope/account-api-openapi-spec.yaml) which drive [API documentation that operates on Jekyll, using Liquid](http://monitoring.apievangelist.com/apis/). So I am all about having many different ways to skin the API documentation beast, allowing it to be easily deployed as part of any CI flow, and enabling the publishing of API docs for many different APIs, in many different developer portals or embedded on any device as part of IoT deployments. I think that a diverse range of approaches are optimal, as long as we do not lose our machine readable core.
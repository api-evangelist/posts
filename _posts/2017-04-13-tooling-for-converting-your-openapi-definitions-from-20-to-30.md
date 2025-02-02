---
layout: post
title: Tooling For Converting Your OpenAPI Definitions From 2.0 to 3.0
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_30_converter.png
atomdate: 2017-04-13T16:00:00.000Z
tags:
  - OpenAPI
  - Definitions
  - Tooling
  - Definition
  - Open
---
[I wrote a post asking what it would take to migrate OpenAPI tooling from version 2.0 to 3.0 of the API specification](http://apievangelist.com/2017/03/16/what-will-it-take-to-evolve-openapi-tooling-to-version-30/), and Mike Ralphson ([@PermittedSoc](https://twitter.com/PermittedSoc)) commented about some of the projects he's been working on involving the latest specification version. Which I hope is a good sign of things to come, when it comes to moving from version 2.0 to 3.0 in 2017.

Mike has developed [an OpenAPI converter and validator to help people migrate their OpenAPI definitions from 2.0 to 3.0](https://github.com/mermade/swagger2openapi). The open source tool also has [an online version of the OpenAPI converter and validator for using in the browser](https://openapi-converter.herokuapp.com/), and of course, it also has [an OpenAPI conversion and validation API](http://petstore.swagger.io/?url=https://openapi-converter.herokuapp.com/contract/swagger.json), because ALL API tools and services should have an API--it is just good API craft.

It makes sense that some of the first tools to emerge are for conversion. Many API developers will need to convert their existing API definitions into version 3.0 of the specification to begin [learning about what is new with OpenAPI 3.0](http://apievangelist.com/2017/01/25/the-openapi-specification-version-30-highlights/). If you have examples of OpenAPI 3.0 definitions for your API, please publish them to Github and share with me, so I can help point folks to examples in the wild that they can learn from as we make this shift.
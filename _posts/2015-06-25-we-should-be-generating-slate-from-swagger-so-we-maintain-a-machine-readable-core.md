---
layout: post
title: >-
  We Should Be Generating Slate From Swagger So We Maintain A Machine Readable
  Core
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slate/slate-tripit.png
author:
  name: kinlane
tags:
  - Swagger
  - ai
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/slate/slate-tripit.png)](https://github.com/tripit/slate)

I am a big fan of [API documentation when done using Slate](https://github.com/tripit/slate). It creates very beautiful, and easy to use documentation, that makes learning about an API much more pleasant. You can find some pretty good examples of Slate being used in the wild, with the [Travis CI API](http://docs.travis-ci.com/api/#overview), [Dwolla API](https://docs.dwolla.com/#introduction), and [API Science API](https://www.apiscience.com/docs/api). 

Slate goes a long way in standardizing the documentation for APIs, but I would like to see this go further. [I am working to profile both Dwolla and API Science as part of defining the stack of APIs that I depend on to operate the API Evangelist network](http://apievangelist.com/2015/06/23/the-over-30-apis-i-depend-on-to-run-api-evangelist/), and while I enjoy the attractive UX Slate brings to the table, I'm lamenting the lack of a machine readable API definitions along the way.

I have a set of import scripts I use to scrape API documentation, and generate Swagger definitions, which I will be using to auto-generate a first draft Swagger file for any API I come across using Slate for the documentation, but I'd like to see a formal solution emerge. It would make sense to have a Slate generator from Swagger, for the API providers who would prefer the attractive looking Slate documentation, over the more functionality interactive [Swagger UI](https://github.com/swagger-api/swagger-ui).

We definitely need to make sure API documentation UX is as polished as possible, but we can't lose any of the momentum we've gained from machine readable API definition formats like [Swagger](http://swagger.io) and [API Blueprint](http://apiblueprint.org). [I have previously talked about moving forward the API documentation and UI conversation forward](http://apievangelist.com/2015/02/02/we-need-better-api-documentation-and-ui-deployment-options/), and making sure Slate, and other attractive API documentation tooling, are interoperable with common API definition formats will be critical to keeping things moving forward.
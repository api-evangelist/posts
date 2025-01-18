---
layout: post
title: Keep Publishing Your API Definitions To Github So We Can Find Them
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-api.png
atomdate: 2016-08-30T16:00:00.000Z
tags:
  - Github
  - Definitions
  - Definition
  - Publishing
  - Git
---
I was just getting started evolving upon my API definition discovery tools before I left this summer, and is something I am just picking up again, now that I am back at it. Historically there are three ways in which I find API definitions like OpenAPI Spec and API Blueprint for APIs:

1.  **Behind API Document** - When I come across API documentation deployed using Swagger UI or Apiary, I know that behind them there is an API definition -- sadly they are usually obfuscated rather than proudly shared with an icon + link.
2.  **Website Harvesting** - When I find a company who is doing things with APIs either because they have a public API portal, or have issued a press release, I add their URL to my crawler and I suck down their entire site and sift through the results for API definitions.
3.  **Github** - Using the Github API I am regularly searching the social coding platform using a variety of search terms which have been proven to produce results for OpenAPI Specs and API Blueprints, which are used in API related operations. Many are just for prototypes or from people playing around, but many often yield some pretty interesting results about API operations I couldn't find any other way. 

Out of all three of these approaches, I would say that Github holds the most promise for actually improving the world of API discovery, allowing me to find APIs in the wild. Ideally, APIs would employ hypermedia, or use solutions like [JSON Home](https://tools.ietf.org/html/draft-nottingham-json-home-02) and [APIs.json](http://apisjson.org), but in the meantime, if y'all could use Github to host your API definitions, that would be awesome.

Remember, Github provides other benefits for your hosting your JSON, YAML, and Markdown API definitions like hosting your documentation, helping you manage the versions, and providing other ways to display using Jekyll and Liquid. It also helps developers and API analysts like me find your APIs, adding to your existing marketing and evangelism efforts.
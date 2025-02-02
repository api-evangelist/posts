---
published: true
layout: post
title: A Diverse API.json Index Example For Slack
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/slack_api_logo_vogue.png
author:
  name: kinlane
tags:
  - APIs.json
  - Protocols
  - Patterns
  - Discovery
  - Slack
---
My friend James Higginbotham had a really nice example of using [APIs.json](http://apisjson.org/) in a talk I saw him give the other day. It was one of those things that jumpstarted my desire to showcase different ways of using the machine readable API discovery format. I still use APIs.json heavily in my [API discovery](http://discovery.apievangelist.com/) and search efforts, but not something I've been really good at maintaining as a spec, and telling stories about. I'm working to remedy this, so thanks to James I'm pulling different examples of how to use APIs.json from my research.

One example I wanted to use is out of Slack. So I pulled my most recent APIs.json index for Slack, and made sure it was updated with the latest building blocks, which included an OpenAPI, AsyncAPI, Postman collection, and JSON Schema. Providing a diverse example of how you can use APIs.json as an index for your API infrastructure. [Slack has an OpenAPI, AsyncAPI, and JSON Schema available on GitHub](https://github.com/slackapi/slack-api-specs), but to round off the index I wanted to make sure there was also a Postman collection present.

First off, I am painfully reminded of the irony in the name of APIs.json coupled with the fact that I'm using YAML. I prefer the readability of YAML when it comes to storytelling, Beyond this, you can see I have two separate APIs indexed, along with a set of common building blocks of the operations supporting the two APIs. Demonstrating how APIs.json doesn't copete with OpenAPI, Postman collections, or AsyncAPI, it actually compliments it and provides a way of indexing multiple types of APIs that are working in concert.

I am working to update the APIs.json website, and put some more energy into the specification. You'll notice I use a lot of vendor extensions to reflect where I'd like to be going next with the API discovery format. Right now, I am just looking to showcase how it can be used as an index of your API operations. Next, I want to continue borrowing from my friend James, and add [an ALPS profile](http://alps.io/) for these APIs, going beyond describing the underlying objects that JSON Schema defines, and describing the capabilities of the Slack API. Adding another rich dimension to [the Slack API index](https://gist.github.com/kinlane/b2d68bbeeda6ac585e16de5b2a1db187), providing a robust set of artifacts that can be used to discover, document, and integrate with the Slack API.
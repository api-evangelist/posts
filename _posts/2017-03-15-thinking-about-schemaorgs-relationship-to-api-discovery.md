---
layout: post
title: Thinking About Schema.org&#039;s Relationship To API Discovery
image: https://s3.amazonaws.com/kinlane-productions2/schema-org/schema-org.png
atomdate: 2017-03-15T17:30:00.000Z
tags:
  - Schema
  - Discovery
  - Schema.org
  - Discover
---
I was following [the discussion around adding a WebAPI class](https://github.com/schemaorg/schemaorg/pull/1445) to Schema.org's core vocabulary, and it got me to think more about the role Schema.org has to play with not just our API definitions, but also significantly influencing API discovery. Meaning that we should be using Schema.org as part of our OpenAPI definitions, providing us with a common vocabulary for communicating around our APIs, but also empowering the discovery of APIs. 

When I describe the relationship between Schema.org to API discovery, I'm talking about using [the pending WebAPI class](http://pending.webschemas.org/WebAPI), but I'm also talking about using common Schema.org org within API definitions--something that will open the definitions to discovery because it employs a common schema. I am also talking about how do we leverage this vocabulary in our HTML pages, [helping search engines like Google understand there is an API service available](https://developers.google.com/search/docs/guides/intro-structured-data):

I will also be exploring how I can better leverage Schema.org in [my APIs.json format](http://apisjson.org), better leveraging a common vocabulary describing API operations, not just an individual API. I'm looking to expand the opportunities for discovering, not limit them. I would love all APIs to take a page from the hypermedia playbook, and have a machine readable index for each API, with a set of links present with each response, but I also want folks to learn about APIs through Google, ensuring they are indexed in a way that search engines can comprehend.

When it comes to [API discovery](http://discovery.apievangelist.com) I am primarily invested in APIs.json (because it's my baby) describing API operations, and [OpenAPI](https://www.openapis.org/) to describe the surface area of an API, but I also want this to map to the very SEO driven world we operate in right now. I will keep investing time in helping folks use Schema.org in their API definitions (APIs.json & OpenAPI), but I will also start investing in folks employing JSON+LD and Schema.org as part of their search engine strategies (like above), making our APIs more discoverable to humans as well as other systems.
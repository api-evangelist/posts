---
published: true
layout: post
title: Embedding JSON-LD To Power API Discovery
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/autosave_payments_desktop.png
author:
  name: kinlane
tags:
  - Discovery
  - JSON-LD
---
If you have been in charge of operating a public API you know how hard it is to get your APIs found. One important way you can increase the discoverability of your API is by embedding [JSON-LD](https://json-ld.org/) into the HTML for your API portal, and describing your API resources using [Schema.org](https://schema.org/). While this is something that all API providers should be doing, it is something that is still pretty rare in the wild, so anytime I come across a real world implementation, I make sure and showcase. My most recent example of using JSON-LD and Schema.org in the wild comes from [the banking API platform bunq](https://www.bunq.com/).

bunq is a banking API that represents the future of banking in my opinion. bunq gets APIs, and understands how to do them well. Their API is well designed, and their developer portal is full of all the essential building blocks you need to successfully operate an API. To help make the bunq API more discoverable, bunq has embedded a set of JSON-LD references within the HTML for their website, providing Schema.org representations for their business.

This JSON-LD snippet isn’t focused particularly on their API, but it does [designate bunq as a BankorCreditUnion](https://schema.org/BankOrCreditUnion), and provides some additional context about their business. If I were bunq, I’d consider adding Schema.org representations for as many of their API resources as they can. Providing more machine readable context about the potential that is available within [the bunq banking APIs](https://www.bunq.com/api/developer). This is something that all API providers should consider when it comes to publishing their own company website and developer portal, helping make the resources you offer more discoverable by web and API search engines.

In addition to publishing JSON-LD Schema.org representations for all of your API resources, I also recommend you publish one for [the WebAPI object type](https://apievangelist.com/2018/03/02/thoughts-on-the-schema-org-webapi-type-extension/,) which is currently being evolved, and additional usage always helps evolve each schema standard. I’d like to see more tooling emerge to help API providers craft JSON-LD Schema.org representations for publishing to their API portals. I will add to my list of work, and see if I can develop a wizard that will help walk API providers through the possible, giving them a simple set of JSON-LD snippets out the other end. This will help augment the existing work I’m doing [around APIs.json](http://http//apisjson.org), and the wider discovery of APIs across the landscape, increasing the richness of my own API indexes, as well as those of other web and API search engines.
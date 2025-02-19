---
published: true
layout: post
title: Applying APIs.json To API Discovery In The Federal Government
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - Federal Government
  - Discovery
  - Government
  - Discover
  - APIs.json
  - APIs
  - APIs.jso
---
I recently updated my APIs.json files for all my API Evangelist network domains, to use version 0.14, which is getting pretty close to a stable version. While I await [APIs.io](https://bit.ly/1mtaqmK) to be updated to use this version, I wanted to to spend some time publishing APIs.json files, but this time across federal government APIs.

The thing I like most about APIs.json, is that you can do one for anybody else’s APIs. In the case of our federal government, I don't anticipate any agency getting on board with APIs.json anytime soon, but I can do it for them! There are a lot of APIs in federal government, where do I get started?

To help me understand the scope of API discovery in our federal government [I looked through 77 developer portals](http://apievangelist.com/2014/07/10/looking-at-77-federal-government-api-developer-portals-and-190-apis/), outlined by [18F](https://18f.gsa.gov/). While browsing these developer portals for federal government agencies, I look at almost 190 APIs--with a goal of [identifying the low hanging fruit](http://apievangelist.com/2014/07/10/low-hanging-fruit-for-api-discovery-in-the-federal-government/), when it came to API discovery across hundreds of government APIs.

Out of the 190 APIs, around 120 of them were actual web APIs, that were something I felt I could work with. I settled on a handful of APIs out of the GSA, hosted at [www.usa.gov](http://www.usa.gov.apievangelist.com/), and [explore.data.gov](http://explore.data.gov.apievangelist.com/index.html), and got to work creating APIs.json for their APIs.

Before I could generate an APIs.json at each of the two domains (www.usa.gov and explore.data.gov), I needed machine readable API definition for the four APIs. I purposely picked federal agency APIs that were REST(flu), and were something I could easily generate a Swagger definition for.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-government.jpg)](http://federal-government.apievangelist.com)

The [federal agency domain API at explore.data.gov](https://explore.data.gov/developers/docs/federal-executive-agency-internet-domains) was pretty easy, ony taking me a few minutes to handcraft a Swagger definition. Then I moved on to the [Federal Agency Directory API at www.usa.gov](https://www.usa.gov/About/developer-resources/federal-agency-directory/index.shtml), and I was happy to see there was already a Swagger definition for the API. After that I tackled the [Social Media Registry API](https://www.usa.gov/About/developer-resources/social-media-registry.shtml), and [Mobile App Gallery API](https://www.usa.gov/About/developer-resources/mobile-app-gallery/index.shtml), both of which I had to handcraft a Swagger definition for. The Mobile App Gallery API has a CORS issue, but I'm moving on and will setup a proxy to handle later.

Now I have four machine readable API definitions for some pretty valuable government APIs, and I got to work creating my APIs.json that would act as a directory for these API resources. APIs.json are designed to go into the root domain of any API provider, and the four GSA APIs I selected ran under two separate domains (www.usa.gov and explore.data.gov), so I needed two separate APIs.json files:

*   [www.usa.gov/apis.json](http://www.usa.gov.apievangelist.com/apis.json)
*   [explore.data.gov/apis.jso](http://explore.data.gov.apievangelist.com/apis.json)n

When APIs.io gets updated to the latest version of APIs.json, I will submit both of these APIs.json files for indexing. Even though I’m not the owner of these domains, I can still submit for inclusion in the API search engine. It would be better if the GSA published the APIs.json, and Swagger API definitions at the actual domains, and submitted themselves--the listings would then show as being authoritative, and hold more weight in API searches.

I still have about 115 more federal government APIs to create machine readable API definitions for, and the resulting APIs.json files that will enable discovery of these APIs--this isn’t something that will happen overnight, and will take a shit-ton of work.

My goal is to help harden the APIs.json format, while making APIs in federal government more accessible, and part of the larger API discovery conversation that is going on in the private sector. One of the powerful features of APIs.json, is that external actors can craft APIs.json collections, from the outside. You don’t have to be an owner of a domain, where an API is hosted, to publish an APIs.json on its behalf--I think this represents the potential of the public sector and private sector working together. 

APis.json are meant to work as collections of APis, or virtual stacks of valuable API resources. Sometimes these virtual stacks are defined internally, within a domain, and sometimes they are mashups of multiple API resources, across numerous domains, by outside actors, or API curators. I will keep curating federal government APIs, generating machine readable API definitions, APIs.json files for their supporting domains--helping define this fun new world of API discovery.
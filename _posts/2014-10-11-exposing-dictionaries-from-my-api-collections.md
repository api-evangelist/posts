---
layout: post
title: Exposing Dictionaries From My API Collections
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-dictionary.png
author:
  name: kinlane
tags:
  - My
  - Collections
  - Collection
---
I’m playing around with different ways to compose, and examine collections of APIs. I have a database of over 2500 API that I keep an eye on, and for some of them I’ve been generating Swagger specs, and using [APIs.json](http://apisjson.org) to compose them into collections. I did this with 1[0 APIs I'm calling my utility stack](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/), because they are some of the fundamental utility style resources I depend on to make the API Evangelist network function.

I generated Swagger specs for the 10 following APIs:

*   bitly Data API Search
*   FullContact Name API
*   FullContact Location Normalization API
*   Pinboard All Posts API
*   AngelList Startup API
*   Wordnik WordList API
*   AlchemyAPI Keyword and Term Extraction
*   AlchemyAPI Text Extraction API
*   AlchemyAPI Author Extraction API

Then using these Swagger definitions, I outputted any parameters that are used for endpoints, as well as the fields for all of the APIs underlying data model. I grouped all of these fields together and created a sort of dictionary for my utility stack API collection. By doing this I’m learning a lot about the vocabulary that each of these API providers are using, as well as beginning to see patterns across similar APIs, like text extraction APIs, and URL shortener APIs.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/utility-stack-dictionary.png)

In a perfect world, APIs would use commonly established vocabularies like [schema.org](http://schema.org), but in the imperfect API world we are given, I’m enjoying taking a look at the sort of API slang that has emerged across the various types of popular APIs we are adopting. API definition formats like Swagger give me a great way to define the surface are of APIs, and these exercises allow me to push forwards tools and approaches to understanding this new landscape.

The more APIs I generate Swagger definitions for, and the more tools I develop to analyze the landscape, the better I will get at communicating the interesting patterns I’m seeing across the API space, and hopefully extract some blueprints that I can follow in my own API design work.
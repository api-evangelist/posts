---
layout: post
title: >-
  As An API Service Provider, Should I Craft My Own API Definition Format, Or
  Just Reuse What Is Already Available
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-definitions.png
tags:
  - My
  - Definition
  - ai
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-definitions.png)](http://definitions.apievangelist.com/)

I have had multiple conversations with folks in the space who are building services and tooling for the API sector lately, where I was asked whether or not they should only be using existing API definition formats, or create their own API definition format that better represents what they are delivering. The reasoning is usually that they feel their own format would offer a more comprehensive approach than any single, existing API definition could--yet they fully understand the potential for adoption when they use existing formats like [OpenAPI Spec](http://apis.how/xmynjnqxwr) and [API Blueprint](http://apis.how/2zarzoqrhc).

My answer to them, is you deliver d) All The Above. I fully get that you will have your own unique view of the API space, and of what your tools and services will deliver, so you should be defining your own schema, but that you also can't ignore what is happening with OpenAPI Spec annd API Blueprint either. There is a groundswell of services, tooling, and savvy API architects and developers using these existing API definition formats, and you do not want to be an island in this very connected sea.

Some examples of this already in motion can be found with [APIMATIC](http://apis.how/kjtj5bbuxu) and [Runscope](http://apis.how/v741olinqd). Both of these providers fluently speak multiple existing [API definition formats](http://definitions.apievangelist.com/organizations/), but they also have their own, custom format for describing what their service(s) brings to the table. I'd say the one difference is that Runscope is more focused on their own format, emphasizing the import / export in the Runscope version, while APIMATIC is holding their version behind the scenes and emphasizing the use the existing API definition format of their own.

I think it is important that service providers flex both their own spec, as well as supporting existing formats like these providers do, even if it is just by using [the API Transformer service](http://apis.how/okfoexmpcm). However, there is also an opportunity at the intersection of these two worlds with the x- extension for OpenAPI Spec. I honestly am unsure if API Blueprint has similar features, but will find out shortly. This is where I see API service providers merging their own custom schema, with the existing OpenAPI Spec. You can do the same within the [API dsicovery format APIs.json](http://discovery.apievangelist.com), when it comes to defining your API indexes and collections. 

As I talk OpenAPI Spec, API Blueprint, and APIs.json with more providers, I am finding that the majority of them are understanding the importance of supporting the leading formats, but also see aspects of the space that don't get covered in these formats, and want to better contribute their own vision of the space. I support both these paths, as long as we do not ever find ourselves cornered in our dogma silos, only believing in a single API definition format, or only supporting our own proprietary format that nobody else speaks. #Balance #Interroperability
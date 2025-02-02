---
layout: post
title: What Is A Hypermedia API?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-hypermedia.png
author:
  name: kinlane
tags:
  - Hypermedia
---
The time has come. In 2014 I will be spending a lot more energy, helping you understand what a Hypermedia API is, and if you should be considering it as part of your own API strategy. I won’t be in the business of telling you Hypermedia is always the answer, or that it is bad, I will be working to better understand myself, and along the way hopefully I can share some knowledge with you.

As I do with other technical issues that surround APIs, I will work to simplify, to help reach a wider audience, beyond the development community. If you are a developer and looking to understand Hypermedia APIs I recommend Googling, and exploring other resources (there are plenty). I want to help business leaders understand the potential, not sell developers on the concept.

In my mind, there are two key things that make hypermedia APIs different from common web APIs:

*   Shared, common way that developers can communicate with the API
*   Guiding developers with what actions they can take along the way

There are plenty of other differentiators, but these are the two that stand out to me. So let’s apply. Say you have a product API. A common web API approach might be to return a product, in a JSON format, which will probably be just a list of fields from the database where the products are stored, with the JSON structured in a way that makes sense to you and your development team. It is now up to the developer to interpret how the API responses are structured, and how to integrate into their application. Pretty standard stuff, right?

Now with a Hypermedia API, the API will use a registered media type such as [HAL](http://stateless.co/hal_specification.html "HAL") or [Collection-JSON](http://amundsen.com/media-types/collection/ "Collection-JSON"), providing a common framework for developers to communicate with the API—reducing the unknowns in API integration. With the product request, you will get get the same details on the product, but along with the product details you will also get a list of links, providing key insight into what you can actually do with the products returned.

Providing developers with a common way to understand how to communicate with an API, as well as the actions they can take with resources that are available via an API, will increase the chances an API will get used, as well as ensure that the APIs is used in ways that are in alignment with the API providers overall business goals.

Let me know if you have any questions about Hypermedia APIs, let me know, I’m happy to address particular topics as I explore this fascinating area of APIs.
---
layout: post
title: Postman Collections As Unit Of Measurement For Transactions In The API Economy
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Economy
  - Postman
  - Collections
  - Collection
  - Transactions
  - Postman Collections
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/postman/postman-logo.png)](https://www.getpostman.com/)

I'm immersed in deep thoughts about the implications of machine readable API definitions like [APIs.json](http://apisjson.org), [Swagger](http://swagger.io), and [Postman Collections,](https://www.getpostman.com/docs/collections) which are being applied to APIs, in some very different, but overlapping, and complementary ways. Currently I’m working to define the overlap between APIs.json and Postman Collections, and how they work together.

For me, any good API starts with a Swagger definition, or API Blueprint, which is the single, machine readable truth of what is the surface area of any API, which I consider fingerprint for what is possible with any API or micro service. Additionally when I am working with any API, or stack of APIs, I am using APis.json to organize them into a single coherent set of APIs, then rely on each APIs properties to point to essential resources like Swagger, terms of service, pricing, and anything else I feel is essential to operations.

In addition to providing links to Swagger definitions for each APIs.json API entry, I’m also experimenting with adding a property that point to any Postman Collection for each API, and microservice. I’ll start by just calling the type “x-postman-collection”, and provide a URL to a Postman Collection I’ve generated around the API call, providing a link between what an API is, and a measurement of the transaction an API produces.

I’d say that Swagger is the promise of value an API delivers, and Postman is a machine readable representation of the value, ready for execution—which acts as machine readable unit you can then load into Postman, or any other system, and actually experience the result. When this unit is sitting in your Postman client, you can see the value behind a single collection, but when you see a couple hundred of these collections in your Postman, you start seeing the important role they can play in the overall API economy, as portable a unit of measurement for API transactions.
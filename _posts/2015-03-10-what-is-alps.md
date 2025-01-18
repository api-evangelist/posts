---
layout: post
title: What is ALPS?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/alps-io-logo.png
author:
  name: kinlane
tags: []
---
I was watching an [open thread around ALPS over at API Craft](https://groups.google.com/forum/#!topic/api-craft/mSFq__019ik), something that is on my working list to better understand, apply more in my world, and tell the story all along the way. ALPS author, and API visionary (;-) Mike Amundsen ([@mamund](/admin/blog/mamund)) responded to the thread with a nice overview, which I wantd to repost and share with you.

So, what is [ALPS](http://alps.io/)?

*   ALPS is not a runtime format like HTML or HAL
*   ALPS is not a designtime format like RAML or Swagger

ALPS is a Profile format for describing the bounded context of a service. ALPS can be used as source material for designtime formats like RAML, WADL, Swagger, WSDL, etc. on the server side.

ALPS can also be used as source material for client-side frameworks like Ember.js, Angular, etc on the client side.

ALPS describes the operations (actions) and data elements of a service. that's all. that description is the same no matter the designtime tooling, protocol, or message format used. that description is the same whether you are implementing code on the client-side or server-side.

> _"Hence state is maintained SERVER SIDE by mapping the URL's when it is implemented... correct?"_

ALPS has nothing to say about how or where state is maintained. You can do whatever you wish when you implement the bounded context ALPS describes.

ALPS tells you the WHAT of the service, not the HOW.

For example, you can use the ALPS document to implement a services that employs your API Chaining on the server side. Or you can use the same ALPS document to implement a classic hypermedia-driven service using Cj or some other hypermedia-rich format. You can also use the same ALPS document to implement a simple JSON-object CRUD-style service.

When you use ALPS as the "shared bounded context" you can be confident that each of the services, regardless of their local implementation choices are supporting the same bounded context. this is especially handy when you want to provide the same operations using different implementations (e.g. JSON-object CRUD for mobile, HTML for browser, etc.).
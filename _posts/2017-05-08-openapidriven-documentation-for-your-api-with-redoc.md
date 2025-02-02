---
layout: post
title: OpenAPI-Driven Documentation For Your API With ReDoc
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/redoc/redoc-demo.png
atomdate: 2017-05-08T20:00:00.000Z
tags:
  - OpenAPI
  - Documentation
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/redoc/redoc-demo.png)](https://github.com/Rebilly/ReDoc)

[ReDoc](https://github.com/Rebilly/ReDoc) is the responsive, three-panel, OpenAPI specification driven documentation for your API that you were looking for. [Swagger UI](http://swagger.io/swagger-ui/) is still reigning king when it comes to API documentation generated using the OpenAPI Spec, but ReDoc provides a simple, attractive, and clean alternative to documentation.  

ReDoc is deployable to any web page with just two tags--with the resulting documentation looking attractive on both web and mobile devices. Now you can have it all, your API documentation looking good, interactive, and driven by a machine-readable definition that will help you keep everything up to date.

All you need to fire up ReDoc is two lines of HTML on your web page:

The quickest way to deploy ReDoc is using the CDN step shown above, but they also provide bower or npm solutions, if that is your desire. There is also a [Yeoman generator to help you share your OpenAPIs that are central of your web application operation](https://github.com/Rebilly/generator-openapi-repo), something we will write about in future posts here on the blog.  

ReDoc leverages a custom HTML tag, and provides you with a handful of attributes for defining, and customizing their documentation, including specurl, scroll-y-offset, suppress-warnings, lazy-rendering, hid-hostname, and expand-responses--providing some quick ways to get exactly what you need, on any web page.

There is a handful of APIs who have put ReDocs to use as API documentation for their platform:  

*   [Rebilly](https://rebilly.github.io/RebillyAPI)
*   [Docker Engine](https://docs.docker.com/engine/api/v1.25/)
*   [Zuora](https://www.zuora.com/developer/api-reference/)
*   [Shopify Draft Orders](https://help.shopify.com/api/draft-orders)
*   [Discourse](https://docs.discourse.org/)
*   [APIs.guru](https://apis.guru/api-doc/)

There also [provide a live demo of ReDoc](http://rebilly.github.io/ReDoc/), allowing you to kick the tires some more before you deploy, and make sure it does what you will need it to before you fork.

[ReDoc](https://github.com/Rebilly/ReDoc) provides a simple, OpenAPI spec compliant way of delivering attractive, interactive, responsive and up to date documentation that can be deployed anywhere, including integration into your existing continuous integration, and API lifecycle. ReDoc reflects a new generation of very modular, plug and play API tooling that can be put to use immediately as part of an OpenAPI Spec-driven web, mobile, and device application development cycle(s).

ReDoc is available on Github: [https://github.com/Rebilly/ReDoc](https://github.com/Rebilly/ReDoc), as an open source solution brought to you by [Rebilly](https://www.rebilly.com/), “the world's first subscription and recurring profit maximization company".
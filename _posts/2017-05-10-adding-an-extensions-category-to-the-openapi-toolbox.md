---
layout: post
title: Adding An Extensions Category To The OpenAPI Toolbox
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_extensions_in_the_openapi_toolbox.png
atomdate: 2017-05-10T19:00:00.000Z
tags:
  - OpenAPI
  - Extensions
  - ddi
  - Open
  - Toolbox
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_extensions_in_the_openapi_toolbox.png)](http://openapi.toolbox.apievangelist.com/extensions/)

I added another type of tool to [my OpenAPI Toolbox](http://openapi.toolbox.apievangelist.com), this time it is extensions. They used to be called Swagger vendor extensions, and now they are simply called [OpenAPI extensions](https://github.com/OAI/OpenAPI-Specification/blob/master/guidelines/EXTENSIONS.md), which allow any implementor to extend the schema outside the current version of the API specification. All you do to add an OpenAPI extension is prepend x- to any value that you wish to include in your OpenAPI, and the validator will overlook it as part of the specification.

I have a whole list of vendor extensions I'd like to add, but I've started with a handful from Microsoft Flow, and my friends over at APIMATIC. Two great examples of how OpenAPI extensions can be used in the API lifecycle. In this case, one is for integration platform as a service (iPaaS), and the other is SDK generation and continuous integration. Both vendors needed to extend the specification to meet a specific need, so they just extended it as required--[you can find the extensions in the new section of the toolbox](http://openapi.toolbox.apievangelist.com/extensions/).

My goal in adding the section to the OpenAPI toolbox is to highlight how people are evolving the specification outside the core working group. While some of the extensions are pretty unique, some of them have a potential common purpose. I will be adding some discovery focused extensions next week from the OpenAPI directory [APIs.guru](https://apis.guru/), which I will be adopting and using in my own definitions to help me articulate the provenance of [any OpenAPI definition in my catalog(s)](http://theapistack.com). Plus, I find it to be a learning experience to see how different vendors are putting them to work. 

If you know of any OpenAPI extensions that are not in the toolbox currently feel free to [submit an issue on the Github repository for the project](https://github.com/kinlane/openapi-toolbox/issues). I'd like to evolve the collection to be a comprehensive look at how OpenAPI extensions are being used across the sector, from a diverse number of providers. I'm going to be teaching my own OpenAPI crawler to identify extensions within any OpenAPI it comes across, and automatically submit an issue on the toolbox, rapidly expanding the discovery of how they are used across a variety of implementations in coming months.
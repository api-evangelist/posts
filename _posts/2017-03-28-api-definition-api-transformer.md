---
layout: post
title: 'API Definition: API Transformer'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_definitions_apitransfomer_screenshot.png
atomdate: 2017-03-28T19:00:00.000Z
tags:
  - Definition
---
_This is an article from the current edition of the [API Evangelist industry guide to API definitions](http://definitions.apievangelist.com/guide/). The guide is designed to be a summary of the world of API definitions, providing the reader with a recent summary of the variety of specifications that are defining the technology behind almost every part of our digital world_

OpenAPI Spec is currently the most used API definition format out there, with the number of implementations, and tooling, with API Blueprint, Postman Collections, and other formats trailing behind. It can make sense to support a single API definition when it comes to an individual platforms operations, but when it comes to interoperability with other systems it is important to be multi-lingual and support multiple of the top machine-readable formats out there today.

In my monitoring of the API sector, one service provider has stood out when it comes to being a truly multi-lingual API definition service provider--the SDK generation provider, APIMATIC. The company made API definitions the heart of its operations, generating what they call development experience (DX) kits, from a central API definition uploaded by users--supporting OpenAPI Spec, API Blueprint, Postman Collections, and other top formats. The approach has allowed the company to quickly expand into new areas like documentation, testing, continuous integration, as well as opening up their API definition translation as a separate service called [API Transformer](https://apimatic.io/transformer).

[API Transformer](https://apimatic.io/transformer) allows anyone to input an API Blueprint, Swagger, WADL, WSDL, Google Discovery, RAML 0.8 - 1.0, I/O Docs - Mashery, HAR 1.2, Postman Collection 1.0 - 2.0, Mashape, or APIMATIC Format API definition and then translate and export in a  API Blueprint, Swagger 1.0 - 1.2, Swagger 2.0 JSON, Swagger 2.0 YAML, WADL - W3C 2009, RAML 0.8 - 1.0, Postman Collection 1.0 - 2.0, and their own APIMATIC Format. You can execute API definition translations through their interface or seamlessly integrate with the API Transformer API definition conversation API.

There is no reason that an API provider and API service providers shouldn’t be multi-lingual. It is fine to adopt a single API definition as part of your own API operations, but when it comes to working with external groups, there is no excuse for not being able to work with any of the top API definition formats. The translation of API definitions will increasingly be essential to doing business throughout the API life cycle, requiring each company to have an API definition translation engine baked into their continuous integration workflow, transforming how they do business and build software.

* * *

 _If you have a product, service, or story you think should be in the API Evangelist industry guide to API design you can [email me](mailto: kin@apievangelist.com) , or [you can submit a Github issue for my API definition research](https://github.com/api-evangelist/definitions/issues), and I will consider adding your suggestion to the road map._
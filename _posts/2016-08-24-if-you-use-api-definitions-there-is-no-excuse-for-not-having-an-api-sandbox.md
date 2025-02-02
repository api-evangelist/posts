---
layout: post
title: If You Use API Definitions There Is No Excuse For Not Having An API Sandbox
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Sandbox_-_Quickly_create_REST_API_and_SOAP_mock_web_services.png
atomdate: 2016-08-24T20:00:00.000Z
tags:
  - Definitions
  - Definition
  - Sandbox
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Sandbox_-_Quickly_create_REST_API_and_SOAP_mock_web_services.png)](https://getsandbox.com)

I have long been a proponent of using [API definitions](http://definitions.apievangelist.com/), not just because you can deploy interactive API documentation, but because they open up almost every other stop along the API life cycle. Meaning, if you have an OpenAPI Spec definition for your API you can also generate SDKs using APIMATIC, and API monitors using Runscope. 

One of the examples I reference often is the [API Sandbox solution appropriately named Sandbox](https://getsandbox.com). One of the reasons I use Sandbox in this way is that API mocking using API definitions is a pretty easy concept for developers to wrap their heads around, but also because their home page is pretty clear in articulating the opportunities opened up for your API when you have machine-readable definitions available.

Their opening text says it well, helping you understand that because you have API definitions you can "accelerate application development", and provide "quick and easy mock RESTful API and SOAP webservices". The presence of common API definition icons including API Blueprint, OpenAPI Spec, RAML, and WSDL then provide a visual re-enforcement for the concept.

Sandbox opens up mocking and sandbox capabilities, which I lump together under one umbrella which I call [API virtualization](http://virtualization.apievangelist.com). You can easily [create, manage, and destroy sandboxes for your APIs using their API, and your API definitions](https://getsandbox.com/docs/api/overview). I envision API providers following [Cisco's lead and having any number of different types of sandboxes running for developers to put to work, using server virtualization](http://apievangelist.com/2016/08/19/providing-multiple-types-of-api-sandboxes-to-develop-against/) (virtualization on virtualization).

With the evolution of API definition-driven solutions like Sandbox for providing virtualized instances of your APIs, there really isn't any excuse for not having a sandbox for your API. For device focused APIs, a sandbox is essential, but even for web and mobile-focused APIs you should be providing places for your API consumers to play, and not requiring them to code against production environments by default.
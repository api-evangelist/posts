---
layout: post
title: A HandFul Of Microsoft Flow OpenAPI Extensions
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/ms_flow_icon.jpg
atomdate: 2017-05-11T16:00:00.000Z
tags:
  - OpenAPI
  - Extensions
  - Open
  - Micro
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/ms_flow_icon.jpg)](https://flow.microsoft.com/en-us/documentation/customapi-how-to-swagger/)

I used to keep track of Swagger vendor extensions are part of my previous research around what was formerly known as Swagger. It is something I'm reviving as part of my OpenAPI Toolbox work, profiling the OpenAPI extensions I come across in the course of my work.

While profiling the Azure as part of my API Stack research I came across Microsoft Flow, and [noticed that they use OpenAPI as part of the configuration of the integration platform as a service (iPaaS) solution,](https://flow.microsoft.com/en-us/documentation/customapi-how-to-swagger/) and have four specific extensions defined:

*   **x-ms-summary -** Title of the entity.
*   **x-ms-visibility** \- Determines the user facing visibility of the entity.
*   **x-ms-**dynamicvalues **-** Enables populating a dropdown for collecting input parameters to an operation.
*   **x-ms-dynamic-schema -** This is a hint to the flow designer that the schema for this parameter or response is dynamic in nature.

According to the Microsoft Flow website: _"To use custom APIs in Microsoft Flow, you must provide a Swagger definition, which is a language-agnostic machine-readable document describing the API's operations and parameters. In addition to the out-of-the-box Swagger specification, there are some extensions available when creating a custom API for Microsoft Flow."_

_I like that they use OpenAPI for this layer, and think that their extension of the OpenAPI specification is worth noting. My goal is to aggregate all the extensions I can as part of the OpenAPI Toolbox, encouraging reuse of existing patterns that have not made it into the specification. I also want providers to understand that they can extend the specification from outside the working group, delivering interesting features in the services and tooling you develop. I don't think that folks always understand the role they can play in helping define the OpenAPI specification just by developing interesting implementations that use OpenAPI as the common way to define and model your APIs._
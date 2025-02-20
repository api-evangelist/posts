---
published: true
layout: post
title: 'API Definition: Open API Specification 3.0.0-RC0'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_definitions_openapi_30_screenshot.png
author:
  name: kinlane
tags:
  - Definition
  - Open
---
_This is an article from the current edition of the [API Evangelist industry guide to API definitions](http://definitions.apievangelist.com/guide/). The guide is designed to be a summary of the world of API definitions, providing the reader with a recent summary of the variety of specifications that are defining the technology behind almost every part of our digital world._

[The OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification), formerly known as Swagger is approaching an important milestone, version 3.0 of the specification, but it is also the first major release since the specification was entered into the Linux Foundation. Swagger was the creation of Tony Tam of Wordnik back in 2010, but after the project was acquired by SmartBear in 2015, the company donated the specification to the newly formed OpenAPI Initiative (OAI) which is part of the Linux Foundation. Swagger has now been reborn as the OpenAPI Specification, and in early 2017 is approaching its first major release under the guidance of a diverse group of governing members.

Version 3.0 of the API specification format has taken a much more modular, and reusable approach to defining the surface area of an API, enabling more power and versatility when it comes to describing the request and response models, as well as providing details on the common components that make up API usage like the underlying data schema and security definitions. There are numerous changes to the API specification, but there are just a handful that will have a significant impact across every stop along the API life cycle where API definitions are making an impact.

**Hosts**

When describing your API, you can now provide multiple hosts, allowing you to better deal with the complexity of how APIs might be located in a single location, or spread across multiple cloud location, and global infrastructure.

**Content Negotiation**

You can now provide content objects to define the relationship between response objects, media types, and schema, opening up the negotiation of exactly the type of content needed, encouraging the design of multiple rich dimensions for any single API resource.

**Body**

The latest version of the specification plays catch-up when it comes to allowing the body of a request and response to be defined separately from the request parameters, allowing for more control over the payload of any API calls.

**Schema**

There is an increased investment in JSON Schema, including the support of \`oneOf\`, \`anyOf\` and \`not\` functions, allowing for alternative schema, as well as the standard JSON schema definition included.

**Components**

The new components architecture really reflects APIs, making everything very modular, reusable, and much more coherent and functional. The new version encourages good schema and component reuse,  helping further bringing the definition into focus.

**Linking**

While not quite full hypermedia, version 3.0 of the OpenAPI Spec supports linking, allowing for the description of relationships between paths, giving a nod towards hypermedia design pattern, making this version the most resilient so far.

**Webhooks**

Like the nod towards hypermedia, the specification now allows for the inclusion of callbacks that can be attached to a subscription operation describing an outbound operation--providing much needed webhook descriptions as part of API operations, making it much more real time and event driven.

**Examples**

The new version enables API architects to better describe, and provide examples of APIs responses and requests, helping make API integration a learning experience, by providing examples for use beyond just documentation descriptions.

**Cookies**

Responding to a large number of API providers, and the reality on the ground for many implementations, the new version allows for the definition of cookies as part of API requests.

These nine areas represent the most significant changes to the OpenAPI Spec 3.0. The most notable shift is the componentized, modular, reusable aspect of the specification. After that, it is the content negotiation, linking, web hooks, and other changes that are moving the needle. It is clear that the 3.0 version of the specification has considered the design patterns across a large number of implementations, providing a pretty wide-reaching specification for defining what an API does, in a world where every API can be a special snowflake.

In 2017, the OpenAPI Spec is the clear leader of the API definition formats, with the largest adoption, as well as the amount of tooling developed. While documentation and SDK generation are still the top two reasons for crafting API definitions, there are numerous other reasons for using API definitions including mocking, testing, monitoring, IDE integration, and much, much more. In 2017, the OpenAPI Spec is the clear leader of the API definitions format. It has the highest usage rate, as well as the largest number of tooling (or tools?) available.
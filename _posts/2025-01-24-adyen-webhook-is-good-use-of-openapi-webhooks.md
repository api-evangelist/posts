---
published: true
layout: post
title: Adyen Makes Good Use of OpenAPI Webhooks
tags:
  - Payments
  - Events
  - WebHooks
  - OpenAPI
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-skyscraper-construction-crane-3.jpeg
---
[Webhooks was introduced into the OpenAPI specification with the 3.1 release](https://spec.openapis.org/oas/latest.html#fixed-fields), and is something that isn’t always showcased as part of the core specification. Webhooks itself often gets overlooked as a solution in the need for power and speed with WebSockets, Kafka, and gRPC. Many event-driven efforts would benefit from more studying and adoption of simpler Webhooks, and in support of this we wanted to slow down and highlight how API producers leverage Webhooks, but also OpenAPI. Let’s use the [Adyen Webhooks as a useful example of not just WebHooks, but also OpenAPI](https://github.com/Adyen/adyen-openapi/blob/main/yaml/Webhooks-v1.yaml).

- **OpenAPI Webhooks** - Providing an OpenAPI of all of your available Webhooks in a single machine-readable format.
- **Webhooks Property** - Instead of paths you have web hooks which list all of the possible events that can occur.
- **GitHub Publishing** - The OpenAPI of Adyen WebHooks are published to GitHub repository for better automation.
- **Standard Schema** - Provides an opportunity to standardize and reuse schema across Webhook events occurring.
- **Schema Extensions** - You can see how Adyen is extending the OpenAPI specification to augment with its own needs.

Adyen’s usage of OpenAPI for their Webhooks provides a good example for other providers to showcase when documenting their Webhooks. It also helps make Webhooks more visible as OpenAPI and Documentation has done for API paths. Before teams begin looking at Websockets, Kafka, gRPC, or other more expensive solutions for delivering events, it is important to take a fresh look at staying within the HTTP realm and utilizing WebHooks. The adoption of event-driven patterns is an important sign of maturity for any API operations, but staying within the HTTP realm for delivering event-driven capabilities will mean that your solution is much more cost effective and speaks to a wider audience.





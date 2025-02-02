---
published: true
layout: post
title: Help Defining 13 of the AsyncAPI Protocol Bindings
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-shipping-docks_36331347010_o.jpg
author:
  name: kinlane
tags:
  - AsyncAPI
  - Protocols
  - Bindings
---
I have been evolving my definition of what my API toolbox covers, remaining focused on HTTP APIs, but also make sure I am paying attention to HTTP/2 and HTTP/3 APIs, as well as those that depend on TCP only. My regular call with Fran Méndez ([@fmvilas](https://twitter.com/fmvilas)) of [AsyncAPI](https://www.asyncapi.com/) reminded me that I should be using the specification to ground me in the expansion of my API toolbox, just as OpenAPI has defined much of it for the last five years. For this particular multi-protocol API toolbox research, [the AsyncAPI protocol bindings](https://github.com/asyncapi/bindings) reflect how I am looking to expand upon my API toolbox.

Here are [the 13 protocols being defined around the AsyncAPI specification](https://github.com/asyncapi/bindings):

*   [AMQP binding](https://github.com/asyncapi/bindings/blob/master/amqp) - This document defines how to describe AMQP-specific information on AsyncAPI.
*   [AMQP 1.0 binding](https://github.com/asyncapi/bindings/blob/master/amqp1) - This document defines how to describe AMQP 1.0-specific information on AsyncAPI.
*   [HTTP binding](https://github.com/asyncapi/bindings/blob/master/http) - This document defines how to describe HTTP-specific information on AsyncAPI.
*   [JMS binding](https://github.com/asyncapi/bindings/blob/master/jms) - This document defines how to describe JMS-specific information on AsyncAPI.
*   [Kafka binding](https://github.com/asyncapi/bindings/blob/master/kafka) - This document defines how to describe Kafka-specific information on AsyncAPI.
*   [MQTT binding](https://github.com/asyncapi/bindings/blob/master/mqtt) - This document defines how to describe MQTT-specific information on AsyncAPI.
*   [MQTT5 binding](https://github.com/asyncapi/bindings/blob/master/mqtt5) - This document defines how to describe MQTT 5-specific information on AsyncAPI.
*   [NATS binding](https://github.com/asyncapi/bindings/blob/master/nats) - This document defines how to describe NATS-specific information on AsyncAPI.
*   [Redis binding](https://github.com/asyncapi/bindings/blob/master/redis) - This document defines how to describe Redis-specific information on AsyncAPI.
*   [SNS binding](https://github.com/asyncapi/bindings/blob/master/sns) - This document defines how to describe SNS-specific information on AsyncAPI.
*   [SQS binding](https://github.com/asyncapi/bindings/blob/master/sqs) - This document defines how to describe SQS-specific information on AsyncAPI.
*   [STOMP binding](https://github.com/asyncapi/bindings/blob/master/stomp) - This document defines how to describe STOMP-specific information on AsyncAPI.
*   [WebSockets binding](https://github.com/asyncapi/bindings/blob/master/websockets) - This document defines how to describe WebSocket-specific information on AsyncAPI.

Not all of the protocol bindings are fully fleshed out, and AsyncAPI could use help from the community to quantify what is required with each of the protocols. I am going to try and contribute what I can as I make my way through each of the protocols as part of my API toolbox research.I am defining the building blocks for each of the protocols which is somethign that overlaps with many of the configurations needed to define each of the protocol bindings.

I am also looking to map out a kind of decision tree to go along with my API toolbox. Crafting an interactive way to help people understand the strengths and weaknesses of each of the approaches to delvering APIs. So if you have an expertise in any of these areas I'd love to hear from you about what your reasons are for choose one protocol over another, and if you have the bandwidth to contribute to helping define each of the 13 protocols as part of the AsyncAPI specification, go ahead and [submit a pull request on the GitHub repository](https://github.com/asyncapi/bindings), or at least leave an issue to help us think through what the technical details of what it takes to bind to each of the protocols.
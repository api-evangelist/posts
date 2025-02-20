---
published: true
layout: post
title: Discovering The Confluent Schema Registry
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stories-new-80-140-800-500-0-max-0--5--5.jpg
author:
  name: kinlane
tags:
  - Schema
  - Registry
  - Event-Driven
---
While spending time doing some research into schema management tooling I came across the [Confluents Schema Registry](https://www.confluent.io/confluent-schema-registry). The schema management solutions is one of the first formal tools I’ve come across that is specifically designed for helping folks get their schema house in order when it comes to APIs. I’m sure there are others out there, but this was the first solution I've documented that addresses this in an API context as well as having an API, providing some of the critical features needed to make sense of the crazy schema mess enterprise organizations find themselves in.  
  
Here is the language from the Confluent website describing what the registry is all about:

> _Confluent Schema Registry provides a RESTful interface for developers to define standard schemas for their events, share them across the organization and safely evolve them in a way that is backward compatible and future proof._  

[The Confluence Schema Registry allows you to centralize your schema](https://docs.confluent.io/current/schema-registry/schema_registry_tutorial.html#centralized-schema-management) and provides a REST API to integrate, save, and retrieve schemas, and delivers functionality for automatically converting JSON messages to make your data human friendly. Providing a pretty fundamental schema management solution that other API service providers should be thinking about. Clearly this one is for use with your Kafka infrastructure, but the model applies across any API you are deploying, whether it is HTTP, TCP, MQTT, or otherwise—Confluent just provides us with one compelling model to follow.  
  
Now that I have schema catalog added to my monitoring system vocabulary it will be notifying me of other news, blogs, and other signals when it comes to how API providers are managing their schema, as well as any other API service providers like Confluent who are investing in this area of the API lifecycle. It is an area that I’ve been beating the drum about for a while now, and something I’d like to see more investment in. If companies are not able to get their schema house in order, they aren’t going to be very successful with their API efforts. The two are intertwined, and it doesn’t matter how good your API design, deployment, management, testing, and documentation are, if you don’t have a handle on the schema behind it all, you will continue to encounter friction.
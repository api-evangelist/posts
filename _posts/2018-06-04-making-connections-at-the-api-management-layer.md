---
published: true
layout: post
title: Making Connections At The API Management Layer
date: 2018-06-04T09:00:00.000Z
tags:
  - API Evangelist
  - Management
  - Plugin
  - Connector
  - Security
  - Real-Time
  - Event-Driven
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-connect-plug.png
---
<p></p>I've been evaluating API management providers, and this important stop along the API lifecycle in which they serve for eight years now. It is a space that I'm very familiar with, and have enjoyed watching it mature, evolve, and become something that is more standardized, and lately more commoditized. I've enjoyed watching the old guard (3Scale, Apigee, and Mashery) be acquired, and API management be baked into the cloud with AWS, Azure, and Google. I've also had fun learning about Kong, Tyk, and the next generation API management providers as they grow and evolve, as well as some of the older players like Axway as they work to retool so that they can compete and even lead the charge in the current environment.

I am renewing efforts to study what each of the API management solutions provide, pushing forward my ongoing API management research, understanding what the current capacity of the active providers are, and potentially they are pushing forward the conversation. One of the things I'm extremely interested in learning more about is the connector, plugin, and extensibility opportunities that exist with each solution. Functionality that allows other 3rd party API service providers to inject their valuable services into the management layer of APIs, bringing other stops along the API lifecycle into management layer, allowing API providers to do more than just what their API management solution delivers. Turning the API management layer into much more than just authentication, service plan management, logging, analytics, and billing.

Over the last year I've been working with [API security provider ElasticBeam](https://www.elasticbeam.com/) to help make sense of what is possible at the API management layer when it comes to securing our APIs. ElasticBeam can analyze the surface area of an API, as well as the DNS, web, API management, web server, and database logs for potential threats, and apply their machine learning models in real time. Without direct access at the API management layer, ElasticBeam is still valuable but cannot respond in real-time to threats, shutting down keys, blocking request, and other threats being leveraged against our API infrastructure. Sure, you can still respond after the fact based upon what ElasticBeam learns from scanning all of your logs, but without being able to connect directly into your API management layer, the effectiveness of their security solution is significantly diminished.

Complimenting, but also contrasting ElasticBeam, I'm also working with [Streamdata.io](http://streamdata.io) to help understand how they can be injected at the API management layer, adding an event-driven architectural layer to any existing API. The first part of this would involve turning high volume APIs into real time streams using Server-Sent Events (SSE). With future advancements focused on topical streaming, webhooks, and WebSub enhancements to transform simple request and response APIs into event-driven streams of information that only push what has changed to subscribers. Like ElasticBeam, Streamdata.io would benefit being directly baked into the API management layer as a connector or plugin, augmenting the API management layer with a next generation event-driven layer that would compliment what any API management solution brings to the table.

Without an extensible connector or plugin layer at the API management layer you can't inject additional services like security with ElasticBeam, or event-driven architecture like Streamdata.io. I'm going to be looking for this type of extensibility as I profile the features of all of the active API management providers. I'm looking to understand the core features each API management provider brings to the table, but I'm also looking to understand how modern these API management solutions are when it comes to seamlessly working with other stops along the API lifecycle, and specifically how these other stops can be serviced by other 3rd party providers. Similar to my regular rants about API service providers always having APIs, you are going to hear me rant more about API service providers needing to have connector, plugin, and other extensibility features. API management service providers can put their APIs to work driving this connector and plugin infrastructure, but it should allow for more seamless interaction and benefits for their customers, that are brought to the table by their most trusted partners.

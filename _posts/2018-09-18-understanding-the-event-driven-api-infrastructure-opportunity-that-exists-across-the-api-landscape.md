---
published: true
layout: post
title: >-
  Understanding The Event-Driven API Infrastructure Opportunity That Exists
  Across The API Landscape
date: 2018-09-18T09:00:00.000Z
tags:
  - API Evangelist
  - Event-Driven
  - Real Time
  - Webhooks
  - Definitions
image: https://s3.amazonaws.com/kinlane-productions2/kong/kong-summit-2018.jpg
---
<p></p>I am at [the Kong Summit in San Francisco](https://konghq.com/kong-summit/) all day tomorrow. I'm going to be speaking about research into the event-driven architectural layers I've been mapping out across the API space. Looking for the opportunity to augment existing APIs with push technology like webhooks, and streaming technology like SSE, as well as pipe data in an out of Kafka, fill data lakes, and train machine learning models. I'll be sharing what I'm finding from some of the more mature API providers when it comes to their investment in event-driven infrastructure, focusing in on Twilio, SendGrid, Stripe, Slack, and GitHub.

As I am profiling APIs for inclusion in my [API Stack](http://theapistack.com) research, and in [the API Gallery](http://api.gallery.streamdata.io/), I create an [APIs.json](http://apisjson.org), [OpenAPI](http://openapis.org), [Postman Collection(s)](https://www.getpostman.com/docs/v6/postman/collections/creating_collections), and sometimes an [AsyncAPI definition](https://www.asyncapi.com/) for each API. All of my API catalogs, and API discovery collections use APIs.json + OpenAPI by default. One of the things I profile in each of my APIs.json, is the usage of webhooks as part of API operations. [You can see collections of them that I've published to the API Gallery](http://webhook.implementations.api.gallery.streamdata.io/), aggregating many different approaches in what I consider to be the 101 of event-driven architecture, built on top of existing request and response HTTP API infrastructure. Allowing me to better understand how people are doing webhooks, and beginning to sketch out plans for a more event-driven approach to delivering resources, and managing activity on any platform that is scaling.

While studying APIs at this level you begin to see patterns across how providers are doing what they are doing, even amidst a lack of standards for things like webhooks. API providers emulate each other, it is how much of the API space has evolved in the last decade. You see patterns like how leading API providers are defining their event types. Naming, describing, and allowing API consumers to subscribe to a variety of events, and receive webhook pings or pushes of data, as well as other types of notifications. Helping establish a vocabulary for defining the most meaningful events that are occurring across an API platform, and then providing an even-driven framework for subscribing to push data out when something occurs, as well as sustained API connections in the form of server-sent event (SSE), HTTP long polling, and other long running HTTP connections.

As I said, webhooks is the 101 of event-driven technology, and once API providers evolve in their journey you begin to see investment in the 201 level solutions like SSE, WebSub, and more formal approaches to delivering resources as real time streams and publish / subscribe solutions. Then you see platforms begin to mature and evolve into other 301 and beyond courses, with AMQP, Kafka, and often times other Apache Projects. Sure, some API providers begin their journey here, but for many API providers, they are having to ease into the world of event-driven architecture, getting their feet wet with managing their request and response API infrastructure, and slowly evolving with webhooks. Then as API operations harden, mature, and become more easily managed, API providers can confidently begin evolving into using more sophisticated approaches to delivering data where it needs to be, when it is needed.

From what I've gathered, the more mature API providers, who are further along in their API journey have invested in some key areas, which has allowed them to continue investing in some other key ways:

- **Defined Resources** - These API providers have their APIs well defined, with master planned designs for their suite of services, possessing machine readable definitions like OpenAPI, Postman Collections, and AsyncAPI.<img src="https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-event-driven-steering.png" style="padding: 15px;" align="right" width="25%" />
- **Request / Response** - Who have fined tuned their approach to delivering their HTTP based request and response structure, along with their infrastructure being so well defined.
- **Known Event Types** - Which has resulted in having a handle on what is changing, and what the most important events are for API providers, as well as API consumers.
- **Push Technology** - Having begun investing in webhooks, and other push technology to make sure their API infrastructure is a two-way street, and they can easily push data out based upon any event.
- **Query Language** - Understanding the value of investment in a coherent querying strategy for their infrastructure that can work seamlessly with the defining, triggering, and overall management of event driven infrastructure.
- **Stream Technology** - Having a solid understanding of what data changes most frequently, as well as the topics people are most interested, and augmenting push technology with streaming subscriptions that consumers can tap into.

At this point in most API providers journey, they are successfully operating a full suite of event-driven solutions that can be tapped internally, and externally with partners, and other 3rd party developers. They probably are already investing in Kafka, and other Apache projects, an getting more sophisticated with their event-driven API orchestration. Request and response API infrastructure is well documented with OpenAPI, and groups are looking at event-driven specifications like AsyncAPI to continue to ensure all resources, messages, events, topics, and other moving parts are well defined.

I'll be showcasing the event-driven approaches of Twilio, SendGrid, Stripe, Slack, and GitHub at the Kong Summit tomorrow. I'll also be looking at streaming approaches by Twitter, Slack, SalesForce, and Xignite. Which is just the tip of the event-driven API architecture opportunity I'm seeing across the existing API landscape. After mapping out several hundred API providers, and over 30K API paths using OpenAPI, and then augmenting and extending what is possible using AsyncAPI, you begin to see the event-driven opportunity that already exists out there. When you look at how API pioneers are investing in their event-driven approaches, it is easy to get a glimpse at what all API providers will be doing in 3-5 years, once they are further along in their API journey, and have continued to mature their approach to moving their valuable bits an bytes around using the web.

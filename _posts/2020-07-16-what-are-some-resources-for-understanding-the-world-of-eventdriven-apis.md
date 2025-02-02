---
published: true
layout: post
title: What Are Some Resources For Understanding the World of Event-Driven APIs?
image: https://i.pinimg.com/originals/cb/25/d2/cb25d25cf0d4dae445c006ceec416781.jpg
author:
  name: kinlane
tags:
  - Event-Driven
---
I have been asked by more than 10 people in the last couple of weeks for more information for helping them make sense of the whole event-driven API landscape. I have all kinds of links available, and various organizations, tools, and other building blocks identified, but if I haven't told any stories on a subject, I won't have more refined information to share. To help seed my research and the resulting storytelling around the event-driven landscape. Here is what I have so far to help me understand what is going on, but also hopefully help others do their own research while I am developing my own understnading. 

**Protocols  
**

*    **HTTP** - Keeping things in the realm of HTTP for developers.
*    **HTTP/2** - Opening up bi-directional, multi-threaded events.
*    **WebSockets** - Leverage TCP for bi-directional pub/sub.
*    **TCP** - Leverage other TCP based protocols for events.

**Patterns  
**

*   **WebHooks** - Using fat or skinny payloods via HTTP push.
*   **REST Hooks** - Defining links called when request is made.
*   **Pub/Sub** - Adopting a publish & subscribe pattern.

**Standards  
**

*   [**AsyncAPI**](https://www.asyncapi.com/) \- Open source tools to easily build and maintain your event-driven architecture.
*   [**Websub (formerly PubSubHubbub)**](https://www.w3.org/TR/websub/) \- WebSub provides a common mechanism for communication between publishers of any kind of Web content and their subscribers, based on HTTP web hooks.
*   [**Cloudevents**](https://cloudevents.io/) - A specification for describing event data in a common way
*   [**Server-Sent Events**](https://en.wikipedia.org/wiki/Server-sent_events) \- Server-Sent Events (SSE) is a server push technology enabling a client to receive automatic updates from a server via HTTP connection.

**Performance  
**

*   **One Direction** \- Pushing events in a single direction.
*   **Bi-Directional** - Allow for bi-directional streams.
*   **Multi-Threaded** \- Opening up multiple threads at at time.

**Key Concepts**

*   Event Driven
*   Event Sourcing
*   Command Query Responsibility Segregation (CQRS)
*   Event Storming
*   Domain-Driven Design
*   Complex Event Processing

**Top Links**

*   [Spotify’s Event Delivery – Life in the Cloud](https://labs.spotify.com/2019/11/12/spotifys-event-delivery-life-in-the-cloud/) ([engineering.atspotify.com](http://engineering.atspotify.com))
*   [Event-Driven Architecture](https://herbertograca.com/2017/10/05/event-driven-architecture/) ([herbertograca.com](http://herbertograca.com))
*   [5 Protocols For Event-Driven API Architectures](https://nordicapis.com/5-protocols-for-event-driven-api-architectures/) ([nordicapis.com](http://nordicapis.com))
*   [Replicating the Success of REST in Event-Driven Architecture](https://www.asyncapi.com/blog/replicating-success-rest-event-driven-architecture/) ([asyncapi.com](http://asyncapi.com))
*   [SOA vs. EDA: Is Not Life Simply a Series of Events?](https://www.confluent.io/blog/soa-vs-eda-is-not-life-simply-a-series-of-events/) ([confluent.io](http://confluent.io))
*   [Breaking down the hype: Promises and Pitfalls of Event Driven Architecture](https://www.zocdoc.com/about/blog/tech/event-driven-architecture/) ([zocdoc.com](http://zocdoc.com))
*   [Event Modeling](https://eventmodeling.org) ([eventmodeling.org](http://eventmodeling.org))
*   [Event Storming](https://www.eventstorming.com/) ([eventstorming.com](http://eventstorming.com))
*   [Journey to Event Driven – Part 1: Why Event-First Thinking Changes Everything](https://www.confluent.io/blog/journey-to-event-driven-part-1-why-event-first-thinking-changes-everything/) ([confluent.io](http://confluent.io))
*   [What is WebSub? Common Cases and Implementations](https://nordicapis.com/websub-common-cases-and-implementations/) ([nordicapis.com](http://nordicapis.com))
*   [Add Webhooks to Your API the Right Way](https://zapier.com/engineering/webhook-design/) ([zapier.com](http://zapier.com))
*   [Webhooks do’s and dont’s: what we learned after integrating +100 APIs](https://restful.io/webhooks-dos-and-dont-s-what-we-learned-after-integrating-100-apis-d567405a3671) ([restful.io](http://restful.io))
*   [Webhooks — The Definitive Guide \[2019\]](https://requestbin.com/blog/working-with-webhooks/)
*   [Event-Driven Architectures](https://www.asyncapi.com/docs/getting-started/event-driven-architectures/) ([asyncapi.com](http://asyncapi.com))
*   [Event Streaming an Additional Architectural Style to Supplement API Design](https://medium.com/capital-one-tech/event-streaming-an-additional-architectural-style-to-supplement-api-design-703c4f801722) (Launchany)
*   [Choosing Between REST Web APIs and Message Streaming](https://medium.com/capital-one-tech/choosing-between-rest-web-apis-and-message-streaming-8e2f4813a058) (Launchany)

**Additional  
**

*   Fran from AsysncAPI is standing by [via Slack Channel](https://asyncapi.slack.com/join/shared_invite/enQtNDY3MzI0NjU5OTQyLTM5NTlkYzFmZDQyMGVkNzVkOTRhMGU2N2VmMWRlOTdkNWE0YzdjMGQ2NzRlOWU1NGJkYjUyZDEzMzM3ZGYzYzM#/) to answer questions.

These are some of the key building blocks of the event-driven conversation. Having the keywords avaialble in my research notebook helps me Google and discover other new information. It gives me the vocabulary to assist me when I am manually researching things, but also provide what I need to automate and scale my harvesting of interesting stories, tools, services, people, and other ways in which the event-driven conversation is being push in new directions.

If you have any go to sources of information for event-driven APIs please ping me on Twitter or via email and let me know. I will add it to my research, and use as part of storytelling in the future. I am far from becoming a source of relevant information on event-driven APIs, but I have been tuning in for long enough that I should be able to quickly curate what I have, and hopefully produce sosme better posts that help others navigate the landscape that is rapidly emerging.
---
layout: post
title: My Brain Dump On An API Definition Fueled Life Cycle
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apiblueprint-swagger.png
author:
  name: kinlane
tags:
  - My
  - Life Cycle
  - Definition
  - ai
---
I’ve written about this topic before, in an effort to understand the [possible incentives for API providers to generate their own machine readable API definitions](http://apievangelist.com/2014/06/05/what-are-the-incentives-for-creating-machine-readable-api-definitions/) in formats like [Swagger](http://swagger.io) and [API Blueprint](https://apiblueprint.org/). These machine readable definitions for APIs and microservices are important to have, but not everyone produces them by default for their APIs, and honestly nobody is going to create them until there are enough incentives to sweeten the pot.

It helps me to walk through this story again, understand the incentives for generating API definitions to date, in hopes of better understanding where we are going. Early on Wordnik developed [Swagger](http://swagger.io), to generate:

*   **Interactive Documentation -** Making learning about an API, a hands-on experience, accelerating time to first API call.
*   **Generate Server-Side Code -** Automatic generation of server side skeletons that take out much of the repetitive work of API deployment.
*   **Generate Client-Side Code -** Automatic generation of client side code samples, and libraries, making API integration a much quicker process.

Then [Apiary](http://apiary.io/) came along and moved the needle back, making API definitions more about API design than just API management and integration, with the introduction of [API Blueprint](https://apiblueprint.org/), with:

*   **API Design Editor -** Apiary introduced the concept of API definitions and API design, with their introduction of their cloud-based API design tooling.
*   **Mock API Generation -** API definitions aren’t just for managing API deployment anymore, you can mock APIs, saving costly development cycles, early on in the life cycle.

Now we are seeing other providers like [Apimatic](https://apimatic.io/), [Ardoq](http://ardoq.com/), and others step up to continue expanding what you can do with machine readable API definitions. I wanted to take a moment to brainstorm everything I am seeing, and would like to see emerge along the API life cycle, that could be driven by Swagger and API Blueprint API definitions.

*   **SDK Generation -** Going beyond auto-generation of simple samples and libraries, and generating full SDKs.
*   **Visualizations** - Allowing the visualization of not just API metadata, but also the resources available within.
*   **Analysis** - Understanding more about what an API does, evaluating the interface, and resources available within.
*   **Testing** - Allowing the automatic deployment and scheduling of API tests, based upon the defined surface area.
*   **Monitoring** - Enable automatic generation and scheduling of API monitoring, based upon the defined surface area.
*   **Difference** - Comparing two or more API definitions, and providing more insight into the differences present.
*   **Annotation** - Opening up an annotation and communication layer around an APIs surface area, on any site or network.
*   **Dictionary** - Helping organize, and bring coherence to the language involved with crafting an API surface, as well as existing APIs.
*   **Client Generation -** Allowing the auto-generation of more sophisticated client, single page app, and other interfaces for API consumption.
*   **Search Discovery -** Taking API discovery to the next level, allowing for searching across an APIs surface area, as well as other supporting building blocks, using formats like APIs.json.
*   **Collection Discovery -** Allowing for controlled API discovery in curated API collections, using formats like APIs.json to build collections.
*   **IDE Discovery -** Introducing API discovery directly in the IDE, using cloud platforms like Codenvy to bring APIs to developers, instead of requiring developers to find the APIs they need.
*   **Real-Time -** Marry the real-time work occurring from providers like Firebase, PubNub, and Fanout with the API definition layer.
*   **Reciprocity -** Expose the integration, interoperability, and automation layers like IFTTT and Zapier that we are depending on as machine readable API definitions.
*   **Aggregation -** Allow for the bridging, and daisy chaining of machine readable API definitions, aggregating many APIs into single, common, machine readable definitions.

This is just a brain dump, of of possible ideas that could be developed and generated using machine readable API definitions. Some of it represents patterns I’m already seeing, while some of it represents existing API driven areas, that haven’t been touched by API definitions, but should be (aka opportunity). Swagger and API Blueprint provide a common language for communicating around the central truth that is the API definition, and the more tooling that is developed around these common language, the more incentives there are for API providers and consumers to use them.

I believe we are reaching a tipping point with the tooling that already exists. Interactive documentation, and client and server side code generation is already proving to be enough of an incentive for many, but if you bring in the API design benefits from platforms like Apiary and [Restlet](http://restlet.com/), the search discovery benefit introduced by [APIs.json](http://apisjson.org) and [Apis.io](http://apis.io), the IDE discovery brought to the table by [Codenvy](https://codenvy.com/), and visualization tools I’m seeing from Ardok, and now Swagger.ed—things really look like they are tipping. Now I am looking to organize the current tools that are available, and better educate API providers and consumers that they exist, while also looking to stimulate the next wave of API lifecycle tooling that is driven by API definitions.

API Blueprint [recently took a big step forward by embracing hypermedia](http://blog.apiary.io/2015/02/17/Utilising-API-Blueprint-in-API-Clients/), bringing actions into the API definition layer. In my opinion, all of this tooling is beginning to go beyond just the API meta layer, and permeating potentially every aspect of the API life cycle, and beginning to add more value to the data, content, and other digital resources being made available via APIs. The big picture benefits of API definitions are really coming into focus for me, but there is still so much work to be done, when it comes to properly defining the current API landscape, let alone keeping eye on what is just over the horizon.
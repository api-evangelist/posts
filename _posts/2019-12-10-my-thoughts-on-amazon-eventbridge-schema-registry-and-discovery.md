---
published: true
layout: post
title: My Thoughts ON Amazon EventBridge Schema Registry And Discovery
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/event_bridge_unite_video_thumbnail.64e8041d0d3c919aa503c8376b1fb9ae4dc11dcf.png
author:
  name: kinlane
tags:
  - Schema
  - Registry
  - Discovery
  - Event-Driven
---
My friend Fran Méndez ([@fmvilas](https://twitter.com/fmvilas)) over at [AsyncAPI](https://www.asyncapi.org/) asked me to share my opinions on [Amazon’s EventBridge schema registry and discovery](https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-schema-registry-and-discovery-in-preview/) which is in preview. Something that is looking to be a pretty critical add-on to Amazon EventBridge, which provides a serverless event bus that connects application data from your own apps, SaaS, and AWS services. Event-driven approaches to APIs are growing in popularity for a number of reasons, and is something that is only increasing the need for us to get our schema house in order, resulting in solutions like the schema registry for EventBridge being pretty valuable to general API operations.

I haven’t taken EventBridge for a test drive, so all of my thoughts are purely superficial, but at first glance it looks like something that can have a meaningful impact on how people are making sense of the schema we have floating around, but I think there will be some key elements that will make or break a solution like the schema registry, something Amazon is already thinking about with their code generation from the schema registry. Here are some of the initial thoughts I am having as I read through the announcements and documentation around EventBridge and the schema registry.

*   **JSON Schema Generation** - The auto publishing, diff’ing, versioning, discovery, and evolving of JSON Schema representations for all schema in use will be pretty critical in making the registry tangible.
*   **Protocol Buffers** - There will need to be easy generation and conversion of Protocol Buffers as part of the process. I don’t see that EventBridge supports gRPC or Protocol Buffers, but it was a thought I was having./
*   **AsyncAPI Generation** - The schema catalog should automatically generate and version AsyncAPI specifications for all the schema, and ultimately channels and topics being defined as part of EventBridge.
*   **Tagging** - Being able to tag schema, organize them, and discover based upon an evolving taxonomy that helps make sense of the expanding schema landscape will be critical when it comes to making it work/
*   **HTTP 1.1 -** The schema registry shouldn’t just be for the real-time and event-driven landscape, and should exist for the AWS API Gateway via CloudTrail, automatically generating JSON Schema and OpenAPI too!
*   **Diff Superpowers** - The schema catalog is going to need some serious diff superpowers for understanding and highlighting the difference between schema, allow humans and systems to understand the schema diff.
*   **Code** - I think the code binding is an interesting aspect of this and something that will attract developers to the schema registry, allowing them to be more agile and nimble when it comes to evolving the code needed for integrations.
*   **Documentation** - The schema registry should be able to easily generate documentation by publishing OpenAPI, AsyncAPI, and JSON Schema, allowing documentation to be automatically delivered as part of the pipeline.
*   **Visualizations** - Enterprise organization will need much more meaningful dashboards and visualizations on top of the schema registry, helping them map out the data landscape that is flowing and expanding across the enterprise.
*   **Notifications** - There will need to be the ability to be notified when schema changes occur, allowing for the governance of the messages being passed back and forth as part of all our integrations.
*   **Testing** - We will need to be able to generate tests from the JSON schema derived as pat of the schema registry, automating and providing quality control for the most critical channels being used across operations.
*   **Traceability** - There will need to be deep traceability eventually as part of the schema catalog, being able to understand where a message originated, and the many ways it might have been actually used across operations.
*   **Audibility** - The schema catalog should provide the ability to audit an entire organization, or specific teams and lines of business when it comes to their schema footprint, and the velocity at which they operate and evolve.
*   **Governance** - The schema catalog has the opportunity to provide a full snapshot of all the data being passed back and forth internal and amongst partners, allowing for companies to begin getting their schema house in order.
*   **Regulatory** - There is a huge opportunity for understanding what data is flowing around within enterprises from a regulatory vantage point, making it easier for regulators to have a full few of the schema landscape that exists.
*   Discovery - The search for the schema registry will need to be basic for 80% of what people are looking for, and then advanced for the other 20% allowing all stakeholders to paint the picture of the landscape they need.

The EventBridge schema registry reflects my own design for an automated API discovery solution. I don’t think we are going to get people to be API design first and thoughtfully craft all of their schema in use across API infrastructure. I think we are going to have to hoover it up from log files and other artifacts left around as part of regular operations. I think the EventBridge schema registry and approach to discovery should be default for all API Infrastructure, not just streaming, event-driven, and message bus solutions. Teams should be able to visit the schema registry and retrieve the artifacts like JSON Schema, OpenAPI, and Async API that they need. They should also be able to gather documentation, tests, and code bindings for all the messages already in motion. The schema registry should be the heartbeat of our operations, providing us with a complete view of the digital bits flowing around the enterprise.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/product_page_diagram_eventbridge_how_it_works.96da753d6591f93925f16716142f98d849c2ee0e.png)](https://aws.amazon.com/eventbridge/)

I’ll keep an eye on what is happening with EventBridge. I think it will take some serious tooling to make it something people will put to use. I think people want to get their schema house in order but don’t always have the bandwidth and will to actually make something meaningful occur in this area—this is why API discovery has been so stalled for over a decade. However, with the right automation and tangible tooling like documentation, visualizations, notification, testing, code bindings, and traceability, we might see something like the EventBridge schema registry get more adoption. If you can pipe all your existing channels into the EventBridge and magically come out the other side with a usable registry of all our digital bits, you might see some folks finally begin to get a handle on the growing amount of data that is flowing around the enterprise on any given day.
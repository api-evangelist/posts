---
published: true
layout: post
title: Examples of Minimum Viable and Complete Landscape APIs.json Index Files
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/norman-rockwell-ruby-bridges-border-crossing-through-fence.jpg
author:
  name: kinlane
tags:
  - Discovery
  - APIs.json
  - Search
---
I am preparing for the next version of APIs.json and I am taking another pass over what the specification is, but also taking a fresh look at why the specification exists. Part of this fresh look involves assessing what I consider to be the low bar for an APIs.json index, as well as what the entire scope might look like. To help me (and you) understand the scope of what [APIs.json](http://apisjson.org/) or [APIs.yaml](http://apisyaml.org/) can do when it comes to indexing our API operations and making them discoverable in a machine readable way.

The most important thing to remember about APIs.json is that it is all about indexing API operations in a way that acknowledges that there are two sides of this API integration game which need to be indexed and made discoverable across an organization.

*   **Human Readable** - Providing URL references for the aspects of API Operations that human stakeholders will need to understand what is happening with APIs and how to put them to work in applications.
*   **Machine Readable** - Providing URL references for aspects of API Operations that are system and applications can use to make sense of API Operations, accessing as a machine readable definition.

APIs.json is about indexing all of these human and machine readable aspects of our API Operations with an emphasis on evolving human readable elements to also be machine readable so that as much of the surface area of our API operations is indexable by other systems and applications as possible.

There is another dimension of APIs.json as a specification that is helpful to understand beyond the human and machine readable elements, by providing a vocabulary for describing two separate scopes of API operations, helping define the scope of information provided.

*   **API Specific Properties** - References to details about a specific API, providing human and machine readable details about an API, so that consumers understand everything that is possible.
*   **Common Properties** \- References to details that support all APIs being indexed, providing information about how to onboard with a platform, and understand what is possible across A?PIs.

Similar to migrating human readable elements to be more machine readable, I’d say the goal in this dimension is all about standardizing our API operations across all of the APIs being made available, providing common set of resources across operations, while providing only what is needed to define the surface area of each individual API—helping be consistent in the business and technology of our API operations.

### An Example Minimum Viable APIs.json File

To demonstrate what is possible with APIs.json when it comes to indexing operations I want to have an example of what I’d consider to be the minimum viable example of what an API Operations might look like in the wild.

That represents what I’d like to see from all APIs, providing the minimal amount of details and operational resources that any API should possess, acknowledging that the API itself isn’t enough, and there will always be other supporting elements needed.

### An Example Minimum Viable APIs.yaml File

Because there are many situations where having a YAML edition of the index for your API operations is preferred, here is an example of the same minimum viable document, but in a YAML format, allowing the index of APIs operations to remain machine readable, but also be a little more human readable at the same time.

This minimum viable example APIs.yaml provides the same baseline as the APIs.json move, providing a human and machine readable artifact that can act as a blueprint for how API providers can think about their operations, while then also providing an index that describes what is happening after the blueprint is followed.

### An Example Landscape APIs.json File

Moving all the way to the other end of the spectrum, I wanted to demonstrate the full scope of APIs/.son or APIs.yaml, and the many different aspects of API operations I see across the existing API landscape. Providing a robust look at what an API index might contain when it comes to more mature API Operations.

It is unlikely any single API operations would have all of these characteristics, but it does inform the most common aspects of API operations that are already being applied, as well as some advancements and forward looking properties that point to where we should be going with our API operations.

### An Example Landscape APIs.yaml File

Similar to the MVP APIs.yaml, I also want to provide an APIs.yaml example of the full landscape index, showing how the full scope of API operations can be defined as YAML, helping make it more accessible to human and more specifically non-developer muggle types of humans.

I have organized the specific API, as well as common API properties into logical groups, and named them so that they are self explanatory, helping articulate their purpose, so that I can assess the role they play in overall operations. Showing what all of the different properties of APIs operations might look like depending on the types of resources being made available via APIs.

### Indexing the API Operational Spectrum

This set of artifacts helps me see the entire spectrum of API operations from not just a discovery perspective, but also as a checklist or blueprint for how API providers should be thinking about their operations. Like OpenAPI, AsyncAPI, and JSON Schema, APIs.json doesn’t just do API discovery, it helps you think more deeply about your API operations in a standardized way that will reflect other API operations, and is something that will be more familiar to API consumers. One of the reasons there is still so much chaos in the API space when it comes to API discovery, on-boarding, and other aspects of a speedy integration, is that we don’t have a common vocabulary for describing and communicating around our API pperations--Steve Wilmott and I intended on changing that.

I will use these two distinct APIs.json and APIs.yaml artifacts to help articulate what is possible with the specification, but also use to define the spectrum of the API landscape when it comes to how we should be publishing a suite of human and machine readable artifacts describing our operations, with a perpetual forward motion towards making our API operations more machine readable. I will use these artifacts to inform how I work to on-board new API \[roviders to the concept of APIs.json, while also using it as a point of reference for where I’d like to be moving the conversation when it comes to API discovery across enterprise organizations as well as the industries they operate within. Leveraging APIs.json to index enterprise API operations, but then also provide the discoverability needed for the public and industry layers of our API operations.
---
published: true
layout: post
title: AsyncAPI Version 2.0 Is Ready For Use
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/fast-lights-freeway-redes-fast-flux-623x425-blue-electricity.jpg
author:
  name: kinlane
tags:
  - AsyncAPI
---
The latest major version of [the event-driven API specification format AsyncAPI](https://www.asyncapi.com/) is ready for production. The AsyncAPI community has been working hard in recent months to hammer out the next generation specification for helping us all better define a common definition for our event-driven APIs so that we can use across the API lifecycle. AsyncAPI is a sister specification to OpenAPI (fka Swagger), and while you can describe HTTP APIs using the format, it excels at helping us define our event-driven API infrastructure, and bring all the same documentation, mocking, testing, and other critical stops along an API lifecycle we will need to be successful.  
  
I’m going to be playing around with a couple implementations using AsyncAPI 2.0, helping me define a prototype Kafka, as well as NATS APIs, but I wanted to take some time to share what the list of new collections are for the latest version of AsyncAPI. If you are familiar with version 1.x of AsyncAPI, some of these schema collections will look familiar, but they’ve added some interesting collections to help us describe the surface area of our event-driven infrastructure.

*   [**AsyncAPI Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#A2SObject) - This is the root document object for the API specification. It combines resource listing and API declaration together into one document.
*   [**AsyncAPI Version String**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#A2SVersionString) - The version string signifies the version of the AsyncAPI Specification that the document complies to.
*   [**Info Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#infoObject) - The object provides metadata about the API. The metadata can be used by the clients if needed.
*   [**Contact Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#contactObject) - Contact information for the exposed API.
*   [**License Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#licenseObject) - License information for the exposed API.
*   [**Servers Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#serversObject) \- An object representing a Server.
*   **[Channels Object](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#channelsObject)** \- Holds the relative paths to the individual channel and their operations. Channel paths are relative to servers.
*   [**Channel Item Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#channelItemObject) - Describes the operations available on a single channel.
*   [**Operation Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#operationObject) - Describes a publish or a subscribe operation. This provides a place to document how and why messages are sent and received.
*   [**Operation Trait Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#operationTraitObject) - Describes a trait that MAY be applied to an Operation Object. This object MAY contain any property from the Operation Object, except message and traits.
*   [**Message Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#messageObject) - Describes a message received on a given channel and operation.
*   [**Message Trait Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#messageTraitObject) - Describes a trait that MAY be applied to a Message Object. This object MAY contain any property from the Message Object, except payload and traits.
*   [**Tags Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#tagsObject) - A Tags object is a list of Tag Objects.
*   [**External Documentation Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#externalDocumentationObject) - Allows referencing an external resource for extended documentation.
*   [**Components Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#componentsObject) - Holds a set of reusable objects for different aspects of the AsyncAPI specification. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
*   [**Reference Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#referenceObject) - A simple object to allow referencing other components in the specification, internally and externally.
*   [**Schema Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#schemaObject) - The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07.
*   [**Security Scheme Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#securitySchemeObject) - Defines a security scheme that can be used by the operations.
*   [**Parameters Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#parametersObject) - Describes a map of parameters included in a channel name.
*   **[Parameter Object](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#parameterObject)** - Describes a parameter included in a channel name.
*   [**Server Bindings Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#serverBindingsObject) - Map describing protocol-specific definitions for a server.
*   [**Channel Bindings Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#channelBindingsObject) - Map describing protocol-specific definitions for a channel.
*   [**Operation Bindings Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#operationBindingsObject) - Map describing protocol-specific definitions for an operation.
*   [**Message Bindings Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#messageBindingsObject) - Map describing protocol-specific definitions for a message.
*   [**Correlation ID Object**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#correlationIdObject) - An object that specifies an identifier at design time that can used for message tracing and correlation.
*   [**Specification Extensions**](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/asyncapi.md#specificationExtensions) - While the AsyncAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.

The modularity and flexibility of the specification has definitely moved to the next level, but what really caught my attention is the expansion of the protocol bindings that are available in the new version, spanning the top protocols that are being used to define event-driven APIs.

*   **http** - Protocol-specific information for an HTTP channel.
*   **ws** - Protocol-specific information for a WebSockets channel.
*   **kafka** - Protocol-specific information for a Kafka channel.
*   **amqp** - Protocol-specific information for an AMQP 0-9-1 channel.
*   **amqp1**  - Protocol-specific information for an AMQP 1.0 channel.
*   **mqtt**  - Protocol-specific information for an MQTT channel.
*   **mqtt5**  - Protocol-specific information for an MQTT 5 channel.
*   **nats** - Protocol-specific information for a NATS channel.
*   **jms** - Protocol-specific information for a JMS channel.
*   **sns** - Protocol-specific information for an SNS channel.
*   **sqs** - Protocol-specific information for an SQS channel.
*   **stomp** - Protocol-specific information for a STOMP channel.
*   **redis**  - Protocol-specific information for a Redis channel.

I do not fully grasp any specification until I get my hands dirty wiith it. I have done a significant amount of development using AsyncAPI v1.0, so I am familiar with what is happening with the specification, but until I actually use it to describe a real-world, or at least a prototyped API I won’t actually see what is happening. I’m going to setup a Kafka and NATS sandbox environments so I can get my hands dirty, and not just create a proof of concept specification, but also the implementation, documentation, and potentially other stops along the API lifecycle. Testing and mocking for Kafka and NATs are two interesting areas of my expertise I’m looking to expand, and get a better handle on how we can be not just API-first, but also API-design first with how I deliver event-driven API infrastructure.  
  
While I am interesting in the AsyncAPI specification, the bulk of the work I’m doing lately around the specification is working to define the tooling that is evolving around the specification in tandem with the same work to quantify the OpenAPI ecosystem of tooling. I am also interested in understanding which API providers are putting Kafka, AMQP, MQTT, NATS, Websockets, and other real time and even-driven APIs to work. If you are using any of these types of APIs as part of your enterprise API toolbox, feel free to reach out—I’d love to learn more about how you are investing in your event-driven infrastructure, as well as the relationship to your existing HTTP request and response infrastructure. [I’m working to continue to define and refine my robust API toolbox research that I begin our a year ago](http://apievangelist.com/2018/02/03/api-is-not-just-rest/), helping API providers understand how simple web API infrastructure is critical, but how event-driven infrastructure reflects how we are evolving and maturing our approach to delivering the resources our API providers and consumers are needing in 2019.
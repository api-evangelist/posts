---
published: true
layout: post
title: Where Do I Begin With API Governance - Mapping the API Landscape
tags:
  - Governance
  - Landscape
  - APIs
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/american-dream-fundamental-statue-of-liberty-front-bright.jpg
---
To answer the question of where to begin with API governance you have to start with mapping your API landscape. You simply cannot govern what you cannot see and talk to people about. The entire landscape of API being produced or consumed should be mapped with OpenAPI, XML Schema, JSON Schema, AsyncAPI, WSDL, XSD, and other available artifacts, providing a machine-readable inventory of all APIs being considered as part of API governance.

  - **HTTP APIs** - Provide an OpenAPI & schema for any API using HTTP as transport.
  - **Websocket APIs** - Provide an AsyncAPI and schema for all WebSocket APIs.
  - **Kafka** -  - Provide an AsyncAPI and schema for all Kafka APIs.
  - **RabbitMQ** - Provide an AsyncAPI and schema for all RabbitMQ APIs.
  - **SOAP APIs** - Provide a WSDL / XSD for any SOAP web services.
  - **Files** - Provide schema and FTP or SFTP for any file / batch resources.
  - **Forms** - Provide a URL and schema for any form in use.
  - **Produced** - This should be done for any API being produced.
  - **Consumed** - This should also be done for any API being consumed.

Landscape mapping will be ongoing and should occur alongside every other aspect of API governance. Without a machine-readable map of the API landscape you will not be able to govern the consistency and velocity at which APIs are being delivered. The API landscape map will inform every other area of the API lifecycle, operations, and governance, and help understand the current state of APIs, so that you can begin to standardize, modernize, and productize the digital resources and capabilities you provide.

<div id="process-banner" class="alert alert-danger" role="alert">
 This series of stories are intended to support ongoing private API discussions, if you'd like help aligning with your own API strategy just <a href="https://apievangelist.com/contact/">let us know.</a>
</div>
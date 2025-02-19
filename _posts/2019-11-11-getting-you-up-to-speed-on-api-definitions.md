---
published: true
layout: post
title: Getting You Up To Speed On API Definitions
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/fast-lights-freeway-redes-fast-flux-623x425-blue-electricity.jpg
author:
  name: kinlane
tags:
  - Definitions
  - Specifications
---
After spending some time in DC talking about data governance and the role API definitions play in how we quantify the data we have, as well as how it is accessed by all stakeholders, I have a serious need for a primer on API definitions—helping some smart folks I know better understand not just the history of API definitions and how we got here, but the critical role they are playing in how desktop, web, mobile, device, and network applications are defined, deployed, managed, and evolved. API definitions are tough to fully understand unless you’ve been tracking on them for a while, and have experience delivering APIs using modern API Infrastructure, so I wanted to craft a quick primer on what API definitions are, and why they matter.

I consider an API definition to cover a wide variety of specifications that have contributed to how data is made accessible via APIs. These definitions span the last twenty years of web service and API development, and are currently being used to define, deliver, and evolve API infrastructure that power desktop, web, mobile, device, and network applications and system to system integrations. Think of API definitions as the restaurant menus to the buffet of resources needed to power the web, mobile, and connected device world that has exploded over the last twenty years. These API definitions provide developers, and business users with the information they need to understand the capabilities that exist behind leading technology platforms like Twitter, Facebook, Google, and others.

When it comes to API definitions, there are a handful of stand out specifications that should be considered when getting up to speed on the world of APIs:

*   **[Web Service Description Language (WSDL)](https://www.w3.org/TR/wsdl.html)** - WSDL is an XML format for describing network services as a set of endpoints operating on messages containing either document-oriented or procedure-oriented information
*   **[Swagger 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)** - Swagger was a project used to describe and document RESTful APIs that use HTTP 1.1 as a transport, defining a set of files required to describe each API.
*   **[OpenAPI 3.0](https://www.openapis.org/)** - Swagger was put into the Linux foundation and renamed as OpenAPI, publishing version 3.0 of the specification for describing RESTful APIs that use HTTP 1.1 as a transport, defining a set of files required to describe each API.
*   **[JSON Schema](https://json-schema.org/)** - JSON Schema is a vocabulary that allows you to annotate and validate JSON documents, providing a schema approach to defining data.
*   **[ASyncAPI](https://www.asyncapi.com/)** - AsyncAPI is an open source initiative that seeks to improve the current state of Event-Driven Architectures (EDA), making working with EDA’s as easy as it is to work with REST APIs.
*   **[Postman Collections](https://www.postman.com/collection)** - Collections allow for API requests to be organized into folders, making easier to work with, and providing the necessary details to automate the usage of web and GraphQL APIs.
*   **[Postman Environments](https://learning.postman.com/docs/postman/environments-and-globals/manage-environments/)** \- Postman environments are a machine readable format for managing API secrets, tokens, and the key / value pairs needed to work with an existing APIs, providing the data needed authenticate and use within specific contexts.

There are other API definition formats that what is listed here, but these are the most relevant to the overall API conversation occurring across platforms today. WSDL are still in use across many enterprise organizations today, but is falling out of use in favor of newer ways of delivering APIs. Swagger is worth noting because it shifted the landscape from WSDL to a more modern approach of defining APIs, but OpenAPI, JSON Schema, ASyncAPI, and Postman Collections and Environments represent the current state of defining API infrastructure. They provide a machine readable way to describe data, and how it can be accessed via variety of approaches to delivering APIs using HTTP 1.1, HTTP/2, HTTP/3 and TCP, employing a variety of message formats and patterns.

**Definitions Are Servicing The Entire API Life Cycle**

In the early days of WSDL, API definitions were very much machine readable, and something just for developers and system integration, in an XML format. Now API definitions are available as usually JSON or YAML, ensuring these artifacts are human and machine readable. OpenAPI and AsyncAPI provide the vocabulary for describing about 90% of the APIs in operation today. OpenAPI has changed how we define, view, and work with HTTP 1.1 APIs, and AsyncAPI is rapidly doing the same for the event-driven API landscape which is often more real time, and using sustained connections or publish and subscribe patterns for accessing data at scale using APIs. Both OpenAPI and AsyncAPI employ JSON Schema to define the underlying data being passed back and forth using HTTP 1.1 request / response approaches, or more real-time, event-driven approaches via TCP, HTTP/2, and HTTP/3. 

These API definition artifacts began simply as a way to document our APIs, but quickly have become central to many different stops along the API life cycle:

*   **Documentation** - You can generate consistent API documentation using OpenAPI, AsyncAPI, and Postman Collections.
*   **Mock APIs** \-  You can mocked versions of APIs using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Code** - You can generate libraries, SDKs and other code for providing and consuming APIs using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Monitoring** - You can automate the monitoring and performance of APIs using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Testing** - You can automate the validation that each API is operating as expected using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Security** - You can automate the scanning and securing API infrastructure using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Integration** - You can automate the integration of APIs with other API platforms using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Discovery** - You can automate the search and discovery of APIs using OpenAPI, AsyncAPI, and Postman Collections. 
*   **Governance** - You can govern the design, delivery, operation, and usage of APIs using OpenAPI, AsyncAPI, and Postman Collections. 

APIs definitions are pushing organizations and teams to adopt an API-first approach to delivering the infrastructure they need for web, mobile, device, and network infrastructure. API definitions are being used to deliver and manage APIs from start to finish, throughout the life cycle of each individual API. API definitions help define what an API does, and then allow that use of the definition to manage every aspect of how each API is also delivered. Additionally, each API specification allows for being extended beyond the core specification, better meeting the needs of API providers, and service providers, often times being used to better deliver value to providers and consumers in each of the stops along the API life cycle listed above.

Effectively using API definitions are how API providers, as well as service and tooling providers are able to consistently deliver APIs at scale to meet the growing demand for application and system to system integration. API definitions are how API providers, service providers, and consumers are mapping out the growing API landscape across the enterprise, and every business sector being impacted by the web (which is all of them). These API definitions can be used to define any type of API, but we are already seeing industry specific standards emerge using OpenAPI, AsyncAPI, JSON Schema, and Postman collections. Providing not just a machine readable contract that can be used in banking, healthcare, and other industries, but a contract that can be documented, mocked, monitored, tested, secured, integrated, discovered, and governed in an automated way.

Hopefully that provide you with a quick primer on what API definitions are, what they are used for, and why they matter. API definitions are being used to deliver and manage the infrastructure behind all the applications we depend on in our professional and personal worlds. Well defined, available, and versioned API definitions are how we make sense of our infrastructure and engage in a coordinated approach to operating and evolving infrastructure, allowing us to confidently know what our organizational capabilities are, and effectively plan for and evolve towards the future we envision when it comes to operating our organizations at scale on the world wide web.
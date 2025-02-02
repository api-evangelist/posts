---
layout: post
title: Comparison of Automatic API Code Generation Tools For Swagger
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apimatic-logo.png
author:
  name: kinlane
tags:
  - Tools
  - Swagger
  - Generation
  - Code Generation
  - Code
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/apimatic/apimatic-logo.png)](https://apimatic.io/)

I have met with the [APIMATIC team](https://apimatic.io/) several times over the last couple weeks to discuss the state of API definitions. If you aren't familiar with [APIMATIC, they are a API code as a service provider](https://apimatic.io/), that generates high quality client code in several languages, if your APIs are defined using common API definition formats like Swagger (they are also the people behind [SDKs.io](http://sdks.io)). APIMATIC is as passionate about high quality Swagger definitions as I am, and have shared some really valuable research to help push forward the API definition conversation.

In May, APIMATIC wanted to compare the quality of automatic code generation tools, using common Swagger specifications they found on Github. To set the bar for their research, APIMATIC established some basic operational parameters:

*   Code generator must support Swagger file format
*   Only client-side bindings are considered
*   Must create complete libraries rather than just code snippets
*   Only the following languages are considered: C#, Java / Android, Objective-C, PHP, Python Ruby

While this research focuses on Swagger, I think the findings can be applied when thinking about other API definition formats like API Blueprint or RAML, but kicking things off with a focus on Swagger is wise. With a basic framework defined, APIMATIC picked four of the leading code generation tools out there currently:

*   **[Swagger CodeGen](http://editor.swagger.io)**
*   **[REST United](http://restunited.com)**
*   **[Restlet Studio](http://studio.restlet.com)**
*   **[APIMATIC](https://apimatic.io)**

As part of the decision to look at Swagger CodeGen, REST United, Restlet Studio, and their own APIMATIC solution, they provide a little detail on the code generation engines behind each solution:

*   Swagger.io is the official host for open source Swagger CodeGen project
*   REST United uses a customized version of Swagger CodeGen project and performs better than the official branch
*   Restlet Studio uses Swagger CodeGen for Objective-C, but has its own CodeGen engine for Android and Java
*   APIMATIC has its own CodeGen engine for all languages

They took a sampling of Swagger specifications out of the thousands they found, and did a side by side comparison of how well each of the platforms did with the Swagger definitions, bringing us to the meat of this research, which as APIMATIC states “successful compilation does not mean that the SDK will work out of the box!”. In short, there are a lot of things to consider when generating code, and APIMATIC helps us see the problems with approaches to code generation, as well as the overall quality of Swagger definitions that are available out there.

Embarrassingly two of the Swagger definitions they used were mine, which I acknowledge are often very incomplete, but they did use others well, including the sample Petstore definition used as demo for Swagger. The message is pretty loud -- the quality of Swagger definitions right now is pretty poor, and while APIMATIC goes a long way to ensure a usable client SDK is generated, they can only do so much with crap Swagger definitions.

 APIMATIC looks at some of the tops reasons why the code generated is so bad, resulting in code that often times just will not work:

*   Missing Authentication Info
*   Swagger.IO and Restlet Studio do not generate authentication code, even when auth info is available
*   APIMATIC and REST United support OAuth 1 & 2, Basic Auth, and Custom Headers/Parameters
*   Missing Schemas/Model definitions
*   All except APIMATIC use “void” return type when schemas are missing, meaning all responses are ignored, and no data is returned

As they put it, here is APIMATIC’s struggle: _"SDK’s should work out of the box! Generated code often does not work out of the box, AND to make matter even worse, its not even easy to fix by hand. APIMATIC has implemented fallbacks to handle missing schemas and model definitions, but missing auth info cannot be fixed by any fallback measure."_

After you separate the differences in approaches by each code generation engine, it really comes down to a handful of reasons why the Swagger definitions are incomplete--something I see a lot of, as I look for Swagger definitions across the space:

*   Invalid JSON
*   Missing BaseURIs
*   Missing Authentication Information
*   Missing Endpoint OperationIds/NickNames
*   Missing Schemas/Models
*   Missing Error Codes/Messages

These are the common problems I suffer from with many of my own Swagger definitions, as well as many I discover across the Internet. In my opinion, a complete Swagger definition is more art than tech, and you need the human who really cares about an API to hand finish it. I have many Swagger definitions that are complete, well as complete as the API is, but many I have for public APIs in my API Stack directory, are a work in progress.

APIMATIC also provides three interesting proposal for enhancing Swagger definitions so we can automatically generate more robust code in the future:

*   Support for Streaming API
*   Support for WebHooks
*   Support for Error Models, not just Error Messages

The last one is just good API design, the other two are more about additions to the Swagger specification. APIMATIC also provides us with a look at the future, if we get our collective Swagger together, we can realize some serious benefits that will help us throughout the API life cycle:

*   Naming conventions
*   Design patterns
*   Namespaces and packaging
*   High readability and general formatting
*   Code comments
*   Identify redundant and unreachable code
*   Generate IDE support (Visual Studio, XCode, Android Studio, Eclipse)
*   Enabled IDE type-hinting (ie. PyCharm, Ruby Mine, Netbeans)

I see APIMATIC as just one of many emerging API service providers who live along a Swagger driven API life cycle, but I feel they are one of the most important barometers we have, that we can use to understand the overall health of the Swagger ecosystem. If you can’t generate working client code from your Swagger, it is likely you won’t be able to mock, test, monitor, or achieve other critical stops along the API life cycle.

Of course, I would be neglectful if I didn’t mention that the APIMATIC team is obviously biased, as their motivation is to sell their services. This is true, but APIMATIC is the only player to emerge in the code generation game that I’ve seen actually provide a high quality perspective and solution to the problem of client code generation. Look at what they offer:

*   **Web Interface -** Easy to use interface for managing code generation.
*   **API -** APIMATIC’s CGaaS is available as an API.
*   **Multi Definitions -** Accepts API Description (Swagger, RAML, API Blueprint, IO Docs, Google Discovery)
*   **Widgets -** Maintain your API description, and the widget provides fresh SDKs where you need.
*   **APIMATIC On-Prem -** Available as a universal Linux binary - Provides simple locally hosted API.
*   **SmartBear Ready! API Plugin -** Generates SDKs from inside Ready! API.

I also known Adeel and Zeeshan, and know they truly care about the health and quality of the API ecosystem, as well as looking to sell the valuable services they bring to the table with APIMATIC and SDKs.io. There is a lot of valuable insights to work with in the research they have started, something I will be contributing to in the future. I will let you review the slide deck from their research below, but I also wanted to point out two addition slides that I thought were interesting.

**Statistics for Sources of API Descriptions (Where They Found Definitions)**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apimatic-api-definition-research-location.png)

**Statistics for API Descriptions Located (What Format The Definitions Were)**

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apimatic-api-definition-research-type.png)

There are two things interesting here, what formats are available, and where are people putting them. I’m focused heavily on supporting Swagger and API Blueprint, and often find that discovery and indexing of these definitions is very difficult. I can find definitions on Github fairly easy, but finding them on the open Internet is proving to be more challenging, and resource intensive—something I will be working with the APIMATIC team on more as well.

The moral of this story is that the Swagger definitions we are creating need to be more complete, and I think it points to the fact that we need more services and tooling to help us validate the completeness of our definitions, something I will also be working with the APIMATIC team on. We need a community driven way to share these API definitions, and as a community to help validate and certify API definitions, and also help complete them when necessary.

I will work with APIMATIC to conduct this research on a regular basis, and is something we are both committed to improving on. In future posts, I’ll talk about the work we are doing between APIMATIC, SDKs.io, and my API Stack research, which will provide opportunities for the community to get involved—so stay tuned.
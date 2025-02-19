---
layout: post
title: API Design Tooling From RAML
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/raml/raml-logo.jpg
author:
  name: kinlane
tags:
  - Design
  - Tooling
  - RAML
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/raml/raml-logo.jpg)](http://raml.org/)

As part of my [research in the world of API design](http://apievangelist.com/2014/01/16/api-design-do-you-swagger-blueprint-or-raml/), I’m looking into the different approaches by API Blueprint, RAML and Swagger, to provide API definitions, services and tools that assist developers in better designing APIs. I have already look at the [evolving motivations behind API definitions](http://apievangelist.com/2014/01/22/the-evolving-motivations-behind-api-definitions/), and some insight into the [vision behind Swagger, API Blueprint and RAML](http://apievangelist.com/2014/01/31/the-vision-behind-swagger-api-blueprint-and-raml/), next up is taking a look at the tooling that is emerged around each approach.

I began with a look at the [tooling around Swagger](http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/), then I laid out what is [offered around API Blueprint](http://apievangelist.com/2014/02/27/api-design-tooling-from-api-blueprint/), from Apiary.io—next up, [RAML](http://raml.org/) which is developed by [Mulesoft](http://www.mulesoft.com/), and reflects the evolution of the API design space, making it much more attractive to the enterprise.

Like API Blueprint, RAML is a markdown based API description format, which is an evolution from the XML of WADL, and the JSON of Swagger. I think this approach to defining APIs has significance when exposing API design beyond the developers community, but only time will tell.

Everything RAML centers around the RESTful API Modeling Language:

*   **[RESTful API Modeling Language (RAML)](https://github.com/raml-org/raml-spec)** \- A concise, expressive language for describing RESTful APIs. RAML is built on broadly used standards such as YAML and JSON and is a non-proprietary, vendor-neutral open spec.

With RAML interpreters available in JS and Java:

*   **RAML JavaScript Parser** \- A reference implementation of a RAML parser for JavaScript. It's based on PyYAML, written in CoffeeScript, and can be used as a node.js module or in-browser. It is compliant with RAML 0.8, and provided under an Apache 2.0 license. 
*   **RAML Java Parser -** A reference implementation of a RAML parser for Java. It's based on SnakeYAML, and written in Java. It can be added as a Java library into a project directly or through Apache Maven. It is compliant with RAML 0.8, and provided under an Apache 2.0 license. 

Beyond the RAML interpreter you start seeing some pretty sophisticated tooling for the API design process emerge:

*   **API Designer** \- A web-based API development tool that allows API providers to design their API quickly, efficiently, and consistently, and socialize the design. It consists of a RAML editor side-by-side with an embedded RAML console (the API Console). It is provided under the open-source CPAL license. 
*   **API Console -** A graphical user interface for a RAML-defined API that visually exposes the API’s structure and important patterns and serves as interactive API documentation. It is provided under the open-source CPAL license. 
*   **API Notebook -** A web-based, persistent, JavaScript scripting workspace that enables live testing and exploring of APIs, and saving API use cases as markdown gists, so they are versioned, forkable and shareable. It's an example of literate programming. It is provided under the open-source CPAL license.

These API design tools reflect the open enterprise approach to software development from Mulesoft, but there is also other tooling emerging from within the RAML community:

*   **SoapUI RAML Plugin -** SoapUI is a very popular functional testing tool, broadly used for testing APIs. It supports not only SOAP but also REST and any other HTTP APIs, as well as JMS, AMF and JDBC. The RAML plugin for SoapUI allows importing RAML descriptions of APIs into SoapUI to test those APIs. The plugin is provided under the open-source Apache 2.0 license. 
*   **APIkit** - A declarative toolkit that leverages RAML to facilitate the implementation of APIs. It uses RAML as the definition of the API, which can then be used with APIkit Maven- and Mule Studio-based tools for mocking the interface and implementing its backend using Mule flows. It is provided under the open-source CPAL license. 
*   **RAML Store -** A simple storage API plus a persistence plugin which enables you to run the RAML API Designer locally (rather than using a cloud service) and still be able to manage and collaborate on your design. The service is built with node.js, using express and mongodb. 
*   **JAX-RS Codegen -** A set of Java tools that support an API-first approach to implementing RAML-described RESTful services in Java with JAX-RS. Given a RAML specification of an API, it generates corresponding JAX-RS-annotated interfaces and supporting classes, which can be used in your project to implement those spec-compliant APIs. This project is in early alpha. It is provided under the open-source Apache 2.0 license. 
*   **RAML Sublime Plugin -** This is a simple syntax highlighter for Sublime that provides support for the RESTful API Modeling Language (http://raml.org/). It is provided under the open-source Apache 2.0 license.

When reviewing the tooling for RAML, you can tell some serious planning has gone into it. Wordnik was developing open tooling based upon their immediate needs, and Swagger just happened, with API Blueprint being designed to match the API design workflow of Apiary. Mulesoft obviously had time to put a plan together when it came to RAML, based upon what they already saw occurring in the space, and their own experience.

When it comes to tools that facilitates the API design process, RAML is definitely the leader. However Swagger and API Blueprint definitely enjoy a first mover lead in the world of delivering API design services. I’m not convinced a first mover advantagee, or a suite of well designed tooling will be more valuable to developers—I will play with actually designing and deploying each platform next, to see what I learn by actually using Swagger, API Blueprint and RAML to design a basic API.
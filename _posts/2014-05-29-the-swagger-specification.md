---
layout: post
title: The Swagger Specification
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/Swagger-Logo.png
author:
  name: kinlane
tags:
  - Swagger
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/Swagger-Logo.png)](http://swagger.wordnik.com/)

_This post is an exact copy from the [Swagger specification page](https://github.com/wordnik/swagger-spec), on the Swagger Github project. As I was reviewing the latest Swagger 2.0 release, I read this descripton, and I really felt it caputred not ust the mission of Swagger, but spoke to the essence of API design. With this in mind I wanted to re-post, as part of my ongoing coverage of the API design space._ 

The goal of Swagger™ is to define a standard, language-agnostic interface to REST APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via Swagger, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interfaces have done for lower-level programming, Swager removes the guesswork in calling the service.

Use cases for machine-readable API interfaces include interactive documentation, code generation for documentation, client, and server, as well as automated test cases. Swagger-enabled APIs expose JSON files that correctly ahere to the Swagger Specification, documented in this repository. These files can either be produced and served statically, or be generated dynamically from your application.

Without going into a long history of interfaces to Web Services, this is not the first attempt to do so. We can learn from CORBA, WSDL and WADL. These specifications had good intentions but were limited by proprietary vendor-specific implementations, being bound to a specific programming language, and goals which were too open-ended. In the end, they failed to gain traction.

Swagger does not require you to rewrite your existing API. It does not require binding any software to a service--the service being described may not even be yours. It does, however, require the capabilities of the service be described in the structure of the Swagger Specification. Not all services can be described by Swagger--this specification is not intended to cover every possible use-case of a REST-ful API. Swagger does not define a specific development process such as design-first or code-first. It does facilitate either technique by establishing clear interactions with a REST API.

This [GitHub project is the starting point for Swagger](https://github.com/wordnik/swagger-spec). Here you will find the information you need about the Swagger Specification, a simple static sample of what it looks like, and some general information regarding the project.
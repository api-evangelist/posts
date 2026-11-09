---
published: true
layout: post
title: 'Generate Client SDKs And Server Stubs From An OpenAPI File With OpenAPI Generator'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/generate-client-sdks-and-server-stubs-from-an-openapi-file-with-openapi-generator.png
date: 2026-11-09 20:00:00 +0000
author: Kin Lane
tags:
  - Provider Stories
  - OpenAPI Generator
  - SDK & Client Library Management
  - Code Generation
  - Developer Tools
---

Your team has an API, or a partner just handed you the description of theirs, and now someone has to write the code that talks to it: a library for the Python developers, another for the JavaScript front end, maybe a starting server for the new service. Writing each of those by hand is slow, and every one drifts out of date the moment the API changes. [OpenAPI Generator](https://apis.io/providers/openapi-generator/) does that writing for you from a single machine-readable file, and it does it through an API, which is a way for one piece of software to ask another to do work, so a build script, your CI pipeline or an AI assistant can request a finished library and download it.

## What OpenAPI Generator does

[OpenAPI Generator](https://openapi-generator.tech) is a community-governed, Apache-2.0 open-source project that generates client libraries, server stubs, API documentation and configuration from an OpenAPI Specification, the common format for describing what an API offers. An SDK, or software development kit, is a ready-made library that wraps an API so a developer can call it in their own language instead of crafting raw web requests. A server stub is the skeleton of the other side: the routes and data models of a service, waiting for your business logic.

The project was forked from Swagger Codegen in 2018 by more than 40 of that project's top contributors and template creators. Most people run it as a command-line tool, or through its Maven, Gradle and sbt plugins, a Docker image or an embeddable JVM library. The part this story is about is the hosted Online Generator, a REST API that offers the same generation over HTTP, anonymously and without a key, across 84 client generators and 65 server frameworks.

On APIs.io we split it into two parts: the [OpenAPI Generator Clients API](https://apis.io/apis/openapi-generator/openapi-generator-clients-api/) and the [OpenAPI Generator Servers API](https://apis.io/apis/openapi-generator/openapi-generator-servers-api/).

## What you can get done

We map OpenAPI Generator's operations to one business capability.

### [SDK & Client Library Management](https://apis.io/capabilities/sdk-client-library-management/)

The outcome is simple: you hand over an OpenAPI description, name a language or framework, and get back a zip file of working code. That means every team that consumes your API can get a library in the language they already use, and you can regenerate all of them whenever the API changes instead of patching each by hand. The flow is the same on both sides: ask what is supported, ask what options a target takes, generate, then download.

For client libraries:

- `GET /api/gen/clients` lists the languages the client generator supports.
- `GET /api/gen/clients/{language}` returns the options you can set for one language, such as package names or library choices.
- `POST /api/gen/clients/{language}` generates a client library from your OpenAPI description and returns a link to the result.
- `GET /api/gen/download/{fileId}` downloads the generated file.

For servers:

- `GET /api/gen/servers` lists the server frameworks the generator supports.
- `GET /api/gen/servers/{framework}` returns the options for one framework.
- `POST /api/gen/servers/{framework}` generates a server stub for that framework, which you then download the same way.

## Getting started

OpenAPI Generator is free and open source, and the hosted generator needs no account or key, so the first call can happen in the next five minutes. The [Online Generator documentation](https://openapi-generator.tech/docs/online) explains how to call the hosted API and how to run the same service yourself if you would rather your API descriptions never leave your network. On APIs.io you can browse the [OpenAPI Generator profile](https://apis.io/providers/openapi-generator/), the [Clients API](https://apis.io/apis/openapi-generator/openapi-generator-clients-api/) and the [Servers API](https://apis.io/apis/openapi-generator/openapi-generator-servers-api/). Take the OpenAPI file for the API your team uses most, ask for a client in the language your developers already write, and see how much hand-written integration code you can retire.

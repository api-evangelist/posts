---
published: true
layout: post
title: An OpenAPI Powered API Explorer
tags:
  - OpenAPI
  - Explorer
  - Contracts
  - Servers
  - Schema
  - Interoperability
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/birth-of-a-nation-statue-capital-cannon.jpg
---
API service provider [Bump recently introduced an API explorer](https://bit.ly/409FCkd), and we’ve been evaluating its role within the broader ecosystem of API platform services, tooling, and the API specification landscape. Bump, known for its API documentation solutions, has a strong focus on OpenAPI. Their support for OpenAPI in the API explorer is a noteworthy addition. By enabling API consumers to interact with and explore APIs directly, Bump is shifting the narrative of API documentation back toward interactivity. This approach highlights the key strengths of OpenAPI and facilitates a smoother transition for developers to begin working with APIs as clients.

- **Contract** - OpenAPI acting as a machine-readable contract between producer and consumer. 
- **Servers** - Leveraging the OpenAPI servers to allow for API requests to any registered instance.
- **Schema** - Taking advantage of the rich JSON Schema support present in an OpenAPI artifact.
- **Interoperability** - You can generate mocks using Microcks, cause OpenAPI provides interoperability.

Interactive API documentation has long been a defining feature of SwaggerUI and OpenAPI. However, the conversation has shifted over time, with tools like Postman Collections focusing more on API clients. Bump bridges the gap between interactive API documentation and API clients by enabling users to explore, mock, and interact with APIs through OpenAPI. Given the potential richness of schemas in OpenAPI, its ability to define both mock and production instances, and its widespread adoption across complementary areas of the API lifecycle, an OpenAPI-powered API explorer is a natural and logical evolution.


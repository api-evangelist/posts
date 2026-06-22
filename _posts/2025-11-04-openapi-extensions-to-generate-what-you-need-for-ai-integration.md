---
published: true
layout: post
title: OpenAPI Extensions to Generate What You Need for AI Integration
date: 2025-11-04T09:00:00.000Z
tags:
 - OpenAPI
 - Extensions
 - MCP
 - SDKs
 - Generation
 - Semantics
 - Hypermedia
 - JSON-LD
image: https://kinlane-images.s3.amazonaws.com/shared/francis-williams-crane-sunrise-buildings.jpeg
---
I’ve been spending a lot of time bouncing between different perspectives on automation to assess what’s truly needed for AI integration. The enterprise teams I’m talking with are most interested exploring how to build on their existing investments in APIs—specifically, how to extend their OpenAPI definitions to generate the MCP servers they need. Teams are looking to build on their existing momentum with APIs, and avoid having to re-invent the wheel when it comes to responding integrating AI into their enterprise.

OpenAPI extensions offer a valuable window into how people are using OpenAPI for everything from documentation and SDK generation to MCP generation. The first step is always to understand what’s possible with the default OpenAPI properties. But once you reach the limits of what OpenAPI can describe, you inevitably begin to rely on extensions. There is a lot of power available in quickly extending the OpenAPI specification, but you can also quickly get yourself into an entirely other mess if you don't have any plan to govern your OAS extensions and how they contribute to your overall experience.

Christian Posta provides an [excellent exploration of the semantic considerations involved in using OpenAPI to generate MCP solutions](https://blog.christianposta.com/semantics-matter-exposing-openapi-as-mcp-tools/). Other approaches can be seen from from [Mintlify](https://www.mintlify.com/docs/api-playground/openapi-setup#mcp), [Redocly](https://redocly.com/docs/realm/content/api-docs/openapi-extensions/x-mcp), [Speakeasy](https://www.speakeasy.com/mcp/tool-design/optimizing-openapi), and [openapi-mcp-generator](https://github.com/harsha-iiiv/openapi-mcp-generator). When it comes to enriching your OpenAPI for bot or agent automation, it’s clear that many are working hard to extend their OpenAPI investments to meet this moment. You can also find a more extensive list of OpenAPI extensions that have been used over the years to support earlier MCP-like moments.

I’m a strong believer in OpenAPI extensions—but I’m an even stronger believer in well-designed APIs with hypermedia and semantics intentionally built in from the start. I’ve long viewed OpenAPI as a bridge toward better API design and resource modeling. While I remain a supporter, I have to acknowledge that Mike Amundsen, Darrel Miller, Markus Lanthaler, and others were right about HTTP, the web, and designing APIs that leverage media types, hypermedia, and semantics like JSON-LD. The challenge is that few people are willing to do the hard work. There are only a handful of domain experts with the time, energy, and patience to see it through—and most others are focused on financialized outcomes.

I strongly encourage a design-first or contract-first approach to API design: start with RESTful foundations, then carefully evaluate event-driven, GraphQL, and RPC implementations based on your consumers’ needs. That said, I understand that many teams are under mandates to implement MCP quickly and are looking to retrofit their existing API investments. In that context, OpenAPI extensions are a practical way to layer in semantics, authentication, access control, and other details required for generating SDKs, PDKs, or MCPs. Just know that the devil will be in the details if there’s no overarching design plan. It’s the reality many of us face on the factory floor—making pragmatic decisions about how to move forward while still building on our investments in APIs, cloud, SaaS, and now AI.

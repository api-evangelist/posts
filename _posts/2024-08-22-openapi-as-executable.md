---
published: true
layout: post
title: OpenAPI As Executable
tags:
  - OpenAPI
  - Postman Collections
  - Automation
  - Clients
  - Certification
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/copper-circuit-ferris-wheel-fair.jpeg
---
I was [stuck in a cycle of thinking yesterday about the executability of an OpenAPI vs. Postman Collection](https://www.linkedin.com/posts/kinlane_why-isnt-openapi-viewed-as-executable-like-activity-7232074346410700802-6PwB?utm_source=share&utm_medium=member_desktop). I am closely watching the Arrazzo spec for defining workflows, but I am very interested in the executability of an individual API operation using an OpenAPI. I was stuck in a rut thinking that my collection is the best way to approach this, and I wanted to “certify” a single operation via just OpenAPI. I was asking why the perception of Collection being executable persists, but people don’t see OpenAPI in the same way, when my friend Jordan reminded me that OpenAPI via SwaggerUI has been executable since the beginning.

Derp. It is funny how I can get stuck in a rut with a certain perspective and become blind to other areas. However, I don’t think it is just me, and there is a wider Venn diagram of interactions with the different technical API contracts in our world. Postman Collections get the lion share of attention for executability because of the tooling that surrounds it, which used to be true for OpenAPI, and is still true for OpenAPI when you depend on SwaggerUI. This interactive interface was the hallmark of the tooling, something I think has been lost with ReDoc, and has become a first class “Try It Now” feature of ReDocly. I find it interesting how things ebb and flow depending on the tooling we depend on, and what capabilities are exposed to us along the way.

I’d say that SwaggerUI, while a tired UI in my experience, still holds true to the original interaction I am looking for. It had the OpenAPI, and the UI for viewing documentation, but then you could also make calls to mocked representations of an API, or to live servers referenced in the OpenAPI server object. I’d say Postman emulated all of this but took a more client and automation approach over documentation—Postman still has mocking and documentation, but it became a different experience. Then as mentioned above, ReDoc took us down a different road that was pure documentation. I think that Arrazzo will reignite activity at this intersection—we’ll see. I’m seeing innovation in other areas when it comes to the portal experience, as well as documentation innovation, but I think I’m on a different path for what I am needing that is adjacent to the API consumer experience provided by API producers.

I am looking to certify a single endpoint, verifying that the authentication works, and the technical details expressed in an API contract, with valid requests and responses recorded in the OpenAPIp contract as examples. I want to elevate the OpenAPI definitions I have in the APIs.io index from just documentation to certified APIs. It increases the value of an OpenAPI for me to have it certified, something I used to do with Postman Collections, but I am looking to keep native within the OpenAPI. What I want is really just a “Try it Now” feature from a consumer standpoint, and mine is a “Certified” feature from a governance standpoint—I am still working on what certified means and how it would be expressed in OpenAPI and visualized in the resulting documentation. I am just exploring how to best certify thousands of API endpoints, obtaining the authentication I need, and certifying at scale across APIs I profile in APIs.io. 

I am not looking to build workflows using Arrazzo yet. I am trying to avoid using Postman Collections as the latest version of the spec is proprietary. I am just looking to elevate individual API operations in a sea of API operations as certified. I am finishing up the Spectral rules that will tell me which OpenAPI have the proper authentication, and supporting APIs.json have a signup and obtain keys and token URL, so I can prepare for certification. I think along the way I am going to augment each individual API operation with JSON-LD semantics that describe the resource or capability beyond its HTTP method or verb. Before I do any workflow work, I just want to be able to further elevate the API operations I have authenticated, certified, and semantically labeled, so I can then explore further use within AI models. While I am not riding the AI hype wave, I see the potential for well-defined digital resources and capabilities that are certified for use in workflows, voice, and yes artificial intelligence applications.



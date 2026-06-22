---
published: true
layout: post
title: Why Generate OpenAPI When We Have Our Code Framework? 
date: 2025-04-03T09:00:00.000Z
tags:
  - Code Generation
  - OpenAPI Generation
  - Frameworks
  - OpenAPI
  - Gateways
  - Documentation
  - Examples
image: https://kinlane-images.s3.amazonaws.com/shared/birth-of-a-nation-skyscraper-construction-crane-2.jpeg
---
Code-first is still the dominant approach to producing an API in the etnerprise, in which more teams are coming up against the need to generate an OpenAPI artifact from their code, and asking, “why do we need to generate an OpenAPI when we have our code frameworks?” It is a good question, as the code tends to be the source of truth in my enterprises, but once you begin to inventory and assess the entire lifecycle surround each API, as well as the operational considerations, there are other essential experiences involved with producing and consuming an API that will benefit or be diminished without an accurate, up-to-date, and governed OpenAPI artifact being generated from the code you’ve produced to power an API.

- **Gateway** - The runtime for your API is configured and in many cases validated using the OpenAPI you are generated from your code and will possess settings and configurations that the code for your API does not need or know about, establishing a symbiotic relationship between what you generate and how your API is accessed via the API gateway.
- **Documentation** - Modern API documentation is generated from OpenAPI, and like the gateway, your OpenAPI will possess elements that your documentation will need to convey to humans onboarding your API, that aren’t needed in the functionality of your API—your API won’t need summaries and descriptions for each API operations but your humans will.
- **Client Code Generation** - Another area of operations your generated OpenAPI will serve is the generation of client-side code in a variety of programming languages, and your server-side code won’t necessary care about having unique identifiers for each operation, and other elements, but your client-side code will benefit from these details being there.
- **Examples** - OpenAPI artifacts provide the ability to define examples for API requests and responses, as well as individual details like authentication, parameters, and headers, which are all things that your server-code has insights into and can be used to generate an OpenAPI, but ultimately benefit from, but testing, security, and sandboxed onboarding will.

An API is not just the backend code that responds to each request, it is also the gateway that request is authenticated with and routed through—which the OpenAPI generated from code will be used to configure. An API also does not matter a whole lot if it isn’t understood by consumers using documentation, and integrated into applications using relevant SDKs. The gateway, documentation, client-code, and examples that emanate from your OpenAPI will play just as important of a role as the backend code for your API will, and these essential aspects of the API experience depend on you generating a rich OpenAPI artifact that can be used to align everything downstream with the functionality you have developed and pushed into production.
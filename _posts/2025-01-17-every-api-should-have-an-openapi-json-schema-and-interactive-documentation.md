---
published: true
layout: post
title: Every API Should Have an OpenAPI, JSON Schema, and Interactive Documentation
tags:
  - OpenAPI
  - JSON Schema
  - Documentation
  - Interactive
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-docks-big-cosco-ship.jpg
---
We’ve done a lot of sifting through the [details of how and why API producers provide documentation, OpenAPI, SDKs, and other resources this week](https://apievangelist.com/2025/01/12/api-openapi-collections-docs-explorer-playground-clients-sdks-and-integrations/). We’ve thought through the [what API producers want as well as what API consumers want](https://apievangelist.com/2025/01/17/what-api-producers-want-and-what-api-consumers-want/). We are working towards a standardized set of benchmark of what each API must, should, and could have. There is plenty of more conversations to have and stories to tell, but as of this week, here is what we recommend for API producers to consider as a baseline for every one of their APIs, whether or not is is publicly or privately available, establishing an onboarding base, ensuring governance in place, and only then do you begin reaching even further with integrations. 

- **Level One - Onboarding**
    - **OpenAPI** - Every API must posses a complete and up to date OpenAPI.
    - **JSON Schema** - Ever API must possess complete and up to date JSON Schema.
    - **Interactive Docs** - Documentation is produced from OpenAPI and is interactive.
- **Level Two - Governance**
    - **Rules** - You have Spectral and Vacuum rules in place to govern OpenAPI & JSON Schema.
    - **Reviews** - API reviews are conducted in an ongoing way at different stages of the lifecycle.
- **Level Three - Integration**
    - **SDKs** - You produce or generate SDLs in a variety of programming languages.
    - **Clients** - You generate Postman, Bruno, or Insomnia collection for your APIs.
    - **Integrations** - You generate and maintain integrations for common platforms.

Every API should have an OpenAPI and interactive documentation. The OpenAPI should be clearly marked and available as part of the documentation, with the document interactive, and available as playground or explorer. This is the bare minimum for any internal or external API. From there, you really shouldn’t begin expanding that surface area with more artifacts or code, until you get some sort of governance in place. Once your API goes through a review using standardized rules, then you can approach supporting multiple clients, generating or producing SDKs, and providing more integrations. If you don’t have a complete OpenAPI and JSON Schema that are properly standardized and governed, your SDKs, clients, and integration costs will increase exponentially in unexpected ways. 

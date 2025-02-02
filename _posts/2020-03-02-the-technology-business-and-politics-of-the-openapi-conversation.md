---
published: true
layout: post
title: The Technology, Business, and Politics of the OpenAPI Conversation
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_03_02_at_3.15.06_pm.png
author:
  name: kinlane
tags:
  - Politics
  - Business
  - Technology
  - OpenAPI
---
I was pondering a tweet from Aidan Cunniffe ([@aidandcunniffe](https://twitter.com/aidandcunniffe)) over at [Optic](https://www.useoptic.com/) they other day.  He was expressing what he says is a [“controversial opinion that keeps getting backed up by conversations. Each version of OpenAPI and JSON Schema map to ~15 versions. All the implementations by vendors, cloud providers, and open source libs implement a useful (but not always the same subset.”](https://twitter.com/aidandcunniffe/status/1229097618686513157) I don’t think it is a controversial opinion at all, I think he points to a pretty critical deficiency in our belief around APIs and specifications like OpenAPI. Something that begins with the specification itself and how it evolves, but as Aidan points out, echoes out through API service and tooling providers, but then also across API providers themselves who put the OpenAPI specification as part of their own operations. 

On Twitter, Aidan continues with, “what is the point of a data-spec if it's not enforceable the same way, everywhere? We have to acknowledge that there's no one spec (a versioned markdown file doesn't count), there's 15, 20, 30, 50 of them in the wild today -- and that's blocking teams from using tooling end-end.” Then continues by suggesting “a wasm reference implementation that every vendor and lib could drop-in and link to across programming languages might actually solve this problem and truly enable end-end use of OpenAPI I'd make this objective #1 for 2020 if I had the keys. I just have the tweets :)”. Makes sense to me, and I’d say something that the OpenAPI community should adopt. Honestly, and I’ve made the argument before, I think the OAI should be investing to stabilize core OpenAPI tooling, going beyond just the spec. 

### Technical Solutions Require Business and Industry Political Understanding

I support the technical solution Aidan puts forward, and would love to see investment across multiple providers to make happen. However, I think we will need to better understand the business and politics of it all to see the change we want—consistent support of the OpenAPI spec across services and tooling. What features are adopted as part of each service and tooling provider is more business and politics than it is technical, and the investment, or lack of investment into each commercial service or open source tooling is a reflection of the overall OpeAPI spec and it’s road map. The technical details of the OpenAPI spec isn’t easy to map out by itself, and how those details are adopted across a variety of commercial services, and open source tooling is exponentially more difficult—mapping out the business and politics of all of this is pretty near impossible, but let’s give it a try.

### The Business and Politics of the OpenAPI Specification

To understand the foundation of it all we have to consider the motivations of everyone involved in moving the OpenAPI specification forward. There are many different reasons why people are involved in the evolution of the API specification, and while it is pretty difficult to fully understand the motivations beyond everyone involved, it helps to acknowledge at a high level that there different business and political motivations at play, amongst stakeholders.

*   **[3Scale](http://www.3scale.net/)**
*   **[42Crunch](https://42crunch.com/)**
*   **[AAPI](https://aapi.io/)**
*   **[Ably](https://www.ably.io/)**
*   **[Acumatica](https://www.acumatica.com/)**
*   **[APIFortress](http://apifortress.com/)**
*   **[Assertible](https://assertible.com/)**
*   **[Atlassian](https://www.atlassian.com/)**
*   **[BitMovin](https://bitmovin.com/)**
*   **[Blomberg](https://www.techatbloomberg.com/)**
*   **[CA Technologies](https://www.ca.com/)**
*   **[eBay](https://www.ebayinc.com/)**
*   **[Finxact](http://finxact.com/)**
*   **[Google](http://www.google.com/)**
*   **[HM Government](https://www.gov.uk/government/organisations/cabinet-office)**
*   **[IBM](http://www.ibm.com/)**
*   **[IFS](http://www.ifs.com/)**
*   **[Imperva](https://www.imperva.com/)**
*   **[Imperva](https://www.imperva.com/)**

*   **[Intento](https://inten.to/)**
*   **[Interzoid](https://www.interzoid.com/)**
*   **[ISA](http://www.isa.us.es/)**
*   **[Kong](https://konghq.com/)**
*   **[Liferay](https://www.liferay.com/solutions/headless-apis)**
*   **[LinksRez](https://www.linksrez.com/)**
*   **[Microsoft](http://www.microsoft.com/)**
*   **[Mulesoft](https://www.mulesoft.com/)**
*   **[NHS](http://www.nhsx.nhs.uk/)**
*   **[Oracle + Apiary](https://apiary.io/)**
*   **[Repreen](https://www.reprezen.com/openapi)**
*   **[SAP](http://sap.com)**
*   **[Smartbear](http://smartbear.com/)**
*   **[Software AG](http://www.softwareag.com/)**
*   **[Stoplight](http://stoplight.io/)**
*   **[Talend](https://www.talend.com/)**
*   **[TeejLab](https://teejlab.com/)**
*   **[Tyk](https://tyk.io/)**
*   **[WSO2](https://wso2.com/)**

I am not making any assumption regarding the motivations of any of these OAI members, merely acknowledging they have different business and political motivations. Adding another dimension, I think it is worth also knowing the weight each company wields as part of the OpenAPI conversation and road map, by sending a delegate for the OAI technical steering committee. 

*   Darrel Miller @darrelmiller - Microsoft
*   Jeremy Whitlock @whitlockjc - Google
*   Marsh Gardiner @earth2marsh - Google
*   Mike Ralphson @MikeRalphson - Mermade Software
*   Ron Ratovsky @webron - SmartBear
*   Uri Sarid @usarid - Mulesoft

I know everyone on this list, and know they all have the best interest of the community in mind. I also know that like me, they work for a company, and have the best interest of that company in mind. Beyond the technical steering committee you also have the technical oversight board who can help resolve conflicts:

*   Isabelle Mauny @isamauny
*   Uri Sarid @usarid
*   Marsh Gardiner @earth2marsh
*   Ron Ratovsky @webron

Why each of the companies above are members of the OAI varies, and why each company has support their employees being on each of the technical committees isn’t without reason. Again, I’m not passing judgement about what their motivations are, just that they do bring business and political motivations that are either in alignment with the wider API community, or may have more alignment with commercial aspirations, both good and bad. All of these companies influence what the OpenAPI specification should be, and they also influence what services and tooling exist, or do not exist within the community, and how much of the OpeAPI specification each service and tool supports. These aren’t purely technical decisions to support or not support all or part of the OpenAPI specifications. Consistent support of these features across tools begins with business considerations, like the amount of investment each service or tool gets, but then also have to do with the political climate that exists within the OpenAPI and wider API community.

### A Technical Base To Stabilize The OpenAPI Service and Tooling Space

I support Aidan’s request for a “wasm \[WebAssembly\] reference implementation that every vendor and lib could drop-in and link to across programming languages”. This would begin laying the necessary technical base for helping stabilize tooling, however I’d say that we’d also need the OAI to consider investing in some of the core tooling needed by all services and tooling. Socializing some of the essential tooling like parsers, generators, and validators, along with the specification will help further stabilize things—if developers know there is one first-class validator, parser, and generator, the confidence in the community goes way up. This will provide a nice base for services and tooling providers to work from, helping ensure 100% (or near) of the OpenAPI specification is supported by default across at least the essential areas of tooling, but it won’t solve all of our problems. We are going to need more business investment in not just the core tooling areas, but also the long tail of solutions that are being offered across the sector.

This technical base for services and tooling, collectively investing in what is needed to standardize the adoption of the OpenAPI specification across commercial services and open source tooling. However, much more will be needed to actually incentivize, support, and certify the actual adoption of the OpenAPI specification across available services and tools. I know it sounds easy, but if you build the WebAssembly, and provide essential tooling, there is no guarantees that the companies and individuals behind services and tooling will actually implement them, and support 100% of the capabilities that OpenAPI provides. This is where the conversation moves beyond just the technical, and moves into the business and political realm. This is the part of the game that many technologists don’t see, and because many business people who do get these things aren’t aware of the technical details, there is a significant opportunity for a few savvy stakeholders to lead the way, and steer the ship.

### Defining Support For The OpenAPI Specification Across Services and Tools

Shifting from the OpenAPI specification itself, and moving more towards the open source tooling that exists, or doesn’t exist. I want to highlight the mix of business and politics that occurs within the open source tooling realm of the OpenAPI community. There are many different reasons why companies, organizations, and individuals invest in open source tooling that supports OpenAPI, and there are many varying levels of support for all or part of the OpenAPI specification. Take a look at a handful of the open source tooling that exists in the space, and think a little bit about why these tools exists, and who the individuals and companies behind each of them existing.

### Converters

*   **[Gnostic](https://github.com/googleapis/gnostic)** - A compiler for APIs described by the OpenAPI Specification with plugins for code generation and other API support tasks.
*   **[OAS Kit](ttps://github.com/Mermade/oas-kit)** - Convert Swagger 2.0 definitions to OpenAPI 3.0 and resolve/validate/lint.

### Documentation

*   **[Swagger UI](https://github.com/swagger-api/swagger-ui)** - Swagger UI is a collection of HTML, Javascript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.
*   **[Redoc](https://github.com/Redocly/redoc/)** - OpenAPI/Swagger-generated API Reference Documentation.
*   **[LucyBot](https://github.com/LucyBot-Inc/documentation-starter)** - Interactive REST API Documentation.

### Editor

*   **[Swagger Editor](https://github.com/swagger-api/swagger-editor)** - A simple OpenAPI / Swagger editor.
*   **[OpenAPI GUI](https://github.com/mermade/openapi-gui)** - GUI / visual editor for creating and editing OpenAPI / Swagger definitions.
*   **[Apicurio](https://github.com/Apicurio/apicurio-studio)** - An open source API design editor.

### Mocks

*   **[Microcks](https://github.com/microcks/microcks)** - Manage your micro-services and API mocks.
*   **[Connexion](https://github.com/zalando/connexion)** - Swagger/OpenAPI First framework for Python on top of Flask with automatic endpoint validation & OAuth2 support.
*   **[APISprout](https://github.com/danielgtaylor/apisprout)** - Lightweight, blazing fast, cross-platform OpenAPI 3 mock server with validation.

### SDKs

*   **[OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)** - OpenAPI Generator allows generation of API client libraries (SDK generation), server stubs, documentation and configuration automatically given an OpenAPI Spec (v2, v3).
*   **[Swagger CodeGe](https://github.com/swagger-api/swagger-codegen)** - swagger-codegen contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.

Open source tooling is fraught with challenges, but the open source tooling build around Swagger and OpenAPI have a uniquely challenging past due to the robust number of tools that existed around version 2.0, and the acquisition of the name, spec, and tooling by SmartBear, then the resulting establishment of the OAI, OpenAPI, and the lukewarm investment in tooling that supports version 3.0. The current state of open source tooling around the OpenAPI, and the varying scopes of the OpenAPI specification that each tool supports is a direct reflection of the OpenAPI governance, participating companies, and a vacuum when it comes to overall leadership. I invested hundreds of hours into advocating in this space during the 2.0 evolution of the specification, but ended up burnt out by the time we got things into the foundation, and 3.0 emerged. Phil Sturgeon has done an amazing job evangelizing around 3.0, and publishing of his API.Tools, but ultimately this is too big of a thing for any individual to take on, and there needs to be some tooling investment by the OAI, and from its members.

### Mapping the OpenAPI Business and Political Landscape

To help drive this conversation I have a few things I am working on to help map out what is going on. I think that Phil’s OpenAPI.Tools helps us map the service and tooling landscape, but I want to better map out the corporate landscape of the OpenAPI community. I want to be able to see what companies are investing in the space, who is behind some of the tooling and better understand the business makeup of what is going on, while also trying to tune into where more of the politics are, and where I might be able to poke at to make some change. Here are some of the areas I’m investing in when it comes to mapping out the landscape of the OpenAPI community.

*   **[Company Listing](https://github.com/api-evangelist/openapi-support/blob/master/companies.md)** - List of all companies who are doing things with OpenAPI.
*   **[Service Listing](https://github.com/api-evangelist/openapi-support/blob/master/services.md)** \- List of all commercial services that use OpenAPI.
*   **[Tool Listing](https://github.com/api-evangelist/openapi-support/blob/master/tools.md)** \- List of all open source tooling that uses OpenAPI.
*   **[Feature Listing](https://github.com/api-evangelist/openapi-support/blob/master/features.md) -** List of all features delivered by services and tools.
*   **[OpenAPI Feature Listing](https://github.com/api-evangelist/openapi-support/blob/master/openapi-features.md)** \- List of all the OpenAPI features available.

I have a lot of this data laying around, but I am looking at moving it forward in isolation, to try and move forward the conversation when it comes to OpenAPI and the services and tooling that exists. While I feel like the OAI and the governance leadership is doing well when it comes to the specification, I feel like there is a huge void when it comes to leadership on the services and tooling front. Now that I have a full time job I am going to invest more time into this conversation, as part of my work with Postman, but also as part of more formal work with the OAI. I feel like I am one of the few people who see the business and political currents swirling around, and I feel like most people involved right now only are seeing the technical details, as well as the business considerations of the companies they represent. If we are going to drive the OpenAPI specification forward in a meaningful way that serves the entire community, we are going to need a lot more investment in herding all the cats forward in a more constructive direction when it comes to not just the specification, but also how it is used within a variety of industries, and how it is applied across the services and tooling that exists across the API landscape.
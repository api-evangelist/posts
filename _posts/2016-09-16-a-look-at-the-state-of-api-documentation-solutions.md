---
layout: post
title: A Look At The State Of API Documentation Solutions
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/swagger_ui_petstore.png
atomdate: 2016-09-16T17:00:00.000Z
tags:
  - Documentation
  - Solutions
---
A friend of mine was asking where he should get started with upgrading the documentation for an existing API, and was asking for assistance on what tools or services he should be considering. The state of things when it comes to API document shifts and changes, which is why I do my research the way I do, to ensure I have [a single static location I can go find the latest for my research in API documentation](http://documentation.apievangelist.com), when I get questions like this.

Discussing API documentation like many aspects of the API conversation can be difficult, due to a wide range of views on exactly what is API documentation. Some people consider the entire API portal, including the documentation, some include other code libraries, etc, but I define it as specific documentation describing the API surface area (auth & request / response). As I begin my work, at first glance, the world of API documentation seems like it has evolved, but after a quick look through my research, I see it really hasn't evolved that much.

**Swagger UI Changing How We Document Our APIs**  
In 2011 how we documented our APIs changed significantly with the introduction of the [Swagger specification and UI](https://github.com/swagger-api/swagger-ui). The simple, visual, interactive documentation which was driven by the now OPenAPI Spec, shifted the conversation for how we provide documentation. All you had to do was generate the machine-readable specification, and the interactive documentation was automatically generated--solving one of the biggest obstacles for API providers.

**Apiary Providing Design, Mocking, Testing, and Documentation**  
Building on what Swagger UI provided, the service provider [Apiary.io](http://apiary.io) entered the game with their own version of the API documentation but shifted the conversation around documenting APIs earlier on in the life-cycle, during the design portion of the work. I consider Apiary to be first and foremost an API design service provider, but they are also a contender when it comes to API documentation because their solution spans multiple stops along the life cycle including design, mocking, testing, portal, and documentation.

In the last five years, I've watched Swagger play a central role in many of the design, and documentation solutions out there, with providers like Restlet and Apigee following the lead for how we document our APIs--further contributing to the success of OpenAPI Spec as the driving specification. I've also watched Apiary evolve as a service, and adopt OpenAPI Spec as well as yusing their own format API Blueprint, as the driving specification for API documentation--setting the stage for a new breed of API service providers.

**API Documentation Service Providers**  
Along the way other services have launched, building on what we've seen from Apiary, but I think taking the API portal, and API documentation conversations in their own direction.

*   [Gelato.io](https://gelato.io/) - An API portal plus documentation service that was now purchased by Mashape.
*   [Readme.io](https://readme.io/) - Another API portal plus documentation service, with a wealth of API management resources.
*   [API Doc](https://api-docs.io/) - A simple, free OpenAPI Spec and RAML-driven API documentation solution from Stoplight.io team.
*   [Rest United](https://restunited.com/) - A pretty robust PI documentation and SDK solution that supports all major API definition formats.
*   [APIDox](http://apidox.net/) - An XML driven API documentation solution.

Overall I like the robustness of Readme.io and REST United, but dig the simplicity, and machine readability of API Doc. Honestly, I don't see the sense for an API documentation service provider that doesn't support ALL the API definition formats. I don't care what stops along the API life cycle you are serving you should speak API definition by default. I believe that these API service providers are playing an important role in moving the conversation forward, but I think it is also something that gets balanced out by a number of open source offerings out there as well.

**Some Of The Open Source OpenAPI Spec Options**  
As with API management, the quantity of open source API documentation solutions isn't moving as fast as I'd like, but I'll take whatever I can. A handful of open source API documentation solutions have emerged, each with their own take on what is needed--these are the ones I"m tracking on who have built on the OpenAPI Spec:

*   [Lucy Console](https://github.com/lucybot/lucy-console) - Utilizes OpenAPI Spec to generate both static documentation and an interactive API console via Node.js.
*   [Carte](http://wiredcraft.github.io/carte/) - A simple, static Jekyll edition that can run on Github pages.
*   [Jekyll](https://github.com/aleung/jekyll-swagger-ui/) - A more robust Jekyll edition with a ruby plugin delivering functionality.
*   [Django](https://github.com/marcgibbons/django-rest-swagger/) - An OpenAPI Spec driven version for Django in Python.

I am the biggest fan of anything that runs 100% client side, and secondarily a fan of Jekyll + Github solutions, which open up the options for folks doing APIs at larger organizations, where they might be able to easily stand up hosting environments. Ultimately I think there should be a diverse range of one-click solutions for every platform out there.

**Some of the Open Source API Blueprint Solutions**  
API providers should speak all API definition formats fluently, but API Blueprint is mandatory for modern APIs. Apiary provides the primary API documentation solution for the API Blueprint specification, but it shows the health of the community that there are also some open source options that have emerged:

*   [Aglio](https://github.com/danielgtaylor/aglio) - An API Blueprint renderer with theme support that outputs static HTML
*   [Docify](https://github.com/kirkstrobeck/blueprint-docify) - Autogenerate API blueprint documentation with CI for Github pages.
*   [Hiro](https://github.com/peterhellberg/hiro/) - Generates HTML from API Blueprints using the Snow Crash command line tool Drafter and Iglo.

I'm regularly monitoring Github, looking for other open source options for API blueprint, as I'm rooting it on as an engine for API documentation, or more importantly I think API narration--telling the story around what an API does.

**Other Open Source Approaches To API Documentation**  
Beyond OpenAPI Spec and API Blueprint driven efforts there are a handful of other open source API documentation solutions I am keeping an eye on. Serving a variety of platforms, and languages, there are a couple I'm looking at:

*   [Slate](https://github.com/lord/slate) - Beautiful static documentation for your API.
*   [DocBox](https://github.com/mapbox/docbox) - REST API documentation generator in Markdown for React.
*   [DevDocs](https://github.com/Thibaut/devdocs) - Combines multiple API documentations in a fast, organized, and searchable interface.
*   [Whiteboard](https://github.com/mpociot/whiteboard) - This project started as a fork of the popular [Slate](https://github.com/tripit/slate) API documentation tool, which uses ruby, after finding the initial setup of Slate quite cumbersome, it was developed as a NodeJS based project.

I'm not sure why someone would develop any API documentation without using OpenAPI Spec or API Blueprint as its machine readable core, but that is my very biased and studied view. I'm happy to see a diverse number of solutions available, but a little concerned about the lack of consistency between them when it comes to its central definition, how its deployed, as well as the UI and styling.

For me, it's a no-brainer to define your API surface area using OpenAPI Specs, API Blueprint, and Postman. Once you've done this, then you can start thinking about API documentation, code samples, SDKs. mocks, testing, and other resources after that. If you are looking to tackle documentation and have a budget for using an API service provider I recommend taking a look at Apiary or Readme. However, if you are on a budget, have some coding expertise, I recommend looking at Swagger UI + OpenAPI Spec. If you are concerned with look & feel, and Swagger UI doesn't do it for you, I recommend taking a look at Lucy Console.

I wish the landscape for API documentation was more open, plug-n-play, and one-click deployable. I get the concept of paying for API docs as part of a wider API lifecycle solution, but I'm thinking we haven't fully learned from the success of Swagger UI and making sure there are an enough static and dynamic, open source, API documentation solutions available--designed for a variety of platforms. Something that would help both the open source tooling market, as well as provide consistency across the API service providers.

Well, I'm not sure I helped with this roundup of API documentation. I did remove a couple of dead projects [from my research](http://documentation.apievangelist.com), and made sure it was refreshed with what I've been seeing lately, but I'm thinking I need to stew on the state of API documentation solutions a little more and try to understand why things are stagnating. There seems to be movement in the area of proprietary services, as well as some movement with individual providers doing slick things with their API docs, but I'm not seeing the level of open, interactive, and forkability that I saw with Swagger UI--which leaves me thinking there are some deficiencies at play.

Anyways, more to come...
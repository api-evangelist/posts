---
layout: post
title: Common Building Blocks Of API Design
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-building-blocks-design.png
author:
  name: kinlane
tags:
  - Design
---
Over the last couple months I’ve been taking a deeper look at the API design space, trying to understand more about the tools and services that are emerging, and the different approaches being employed throughout the API design lifecycle.

I started first with trying to [understand the evolving motivations behind why people are using API definitions](http://apievangelist.com/2014/01/22/the-evolving-motivations-behind-api-definitions/), then I spoke with API with the creators of API Blueprint, RAML and Swagger, the three leading API design providers out there, to understand more about the [vision behind their various approaches to API design.](http://apievangelist.com/2014/01/31/the-vision-behind-swagger-api-blueprint-and-raml/)

After talking to each of the providers, I wanted to understand more about the tooling that was emerging from each of the providers:

*   [API Blueprint](http://apievangelist.com/2014/02/27/api-design-tooling-from-api-blueprint/)
*   [RAML](http://apievangelist.com/2014/03/01/api-design-tooling-from-raml/)
*   [Swagger](http://apievangelist.com/2014/02/25/api-design-tooling-from-swagger/)

While each of these providers have their own approach to defining APIs, and the API design lifecycle, after looking through what they offer, you start seeing patterns emerge. After reviewing what API Blueprint, RAML and Swagger bring to the table, I squinted my eyes and try to understand what some of the common building blocks are for the API design space—resulting in what I consider 22 separate building blocks:

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-api-a.png)

**Definition** - A central, machine readable definition of an API interface, authentication and potentially data model, in XML, JSON or Markdown. (Examples: API Blueprint, RAML, Swagger)

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-gears.png)

**Parser** - An API definition parser, available potentially in multiple languages and open up the programmatic generation of other API building blocks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-design.png)

**Design Tools** - User interface tools, allowing for the building of central API definitions, either in a code view or GUI view.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-app-icon.jpg)

**Versioning** - Systems allowing for the versioning of API definition, keeping track of all changes, allowing for rolling back of changes to previous versions.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-fork.png)

**Forkable** - The ability to fork an existing API definition, and create a new branch, that can live separately from the API definition it originates from.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-sharing.jpeg)

**Sharing** - Allowing for the sharing of API definitions and other API design building blocks with other users, employing common social sharing features of preferred networks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-collaboration.png)

**Collaboration** - Features that allow for collaboration between users, with discussion around all API design building blocks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-mock-interface.png)

**Mock Interfaces** - Ability to deploy mock API interfaces generated from API definitions, allowing developers to play with API versions as they are designed.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-documentation-interactive.png)

**Interactive Documentation / Console** - Automatically generated API documentation which allows developers to make calls against APIs as they are learning about the interface, turning API education into a hands on experience.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-notebook.png)

**Notebook / Directory** - A local, or cloud based storage repository, providing a single place to create and manage API definitions, and execute other API design building blocks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-testing.png)

**Testing** - Manual, automated and scheduled testing of API interfaces using their API definition as a blueprint.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-debug.png)

**Debugging** - Manual, automated and scheduled debugging of API interfaces, providing detailed look inside of API calls, allowing developers to understand problems with API integrations.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-traffic-light.png)

**Traffic Inspection** - Logging and analysis of API traffic from testing, debugging and all other API usage during the API design process.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-validation.png)

**Validator** - Tools for validating API calls, enabling developers to determine which types of calls will be valid, using the central API definition as guide.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-code-server.png)

**Server Code Generators** - Tooling that generates server side implementations using API definitions in a variety of languages.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-code.png)

**Client Side Code Generator** - Tooling that generates client side API code libraries in a variety of languages.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-github.jpg)

**Github Sync** - The ability to store and sync API definitions with Github, providing a central public or private repository for the definition of an API resource.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-command-line.png)

**Command Line** - Command line tooling for programmatic execution of all API design building blocks.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-websockets.png)

**Websockets** - Providing tools for API communication via websockets using the central API definition as a guide.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-translation.png)

**Translator** - Tools for translating between various API definitions, allowing the transformation from RAML to Swagger, and between each of the available API definitions.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-annotate.png)

**Annotation** - Tools and interfaces for allowing the annotation of API definitions, providing a communication platform centered around the API design process.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-highlighter.png)

**Syntax Highlight** - Tools and interfaces for the highlighting of API definitions, providing IDE-like functionally for API designers.

As I try to do with API [management](http://management.apievangelist.com/building-blocks.html) and [integration](http://integration.apievangelist.com/building-blocks.html "API integration"), I’m just trying understand what these providers offer, and how it is helping API developers be more successful in designing quality APIs. This isn’t meant to be a perfect list, and if there are any building blocks you feel should be present, let me know.

You can follow my [research in API design over at the Github repository](http://design.apievangelist.com/) I’m publishing everything to when it is ready. Like other areas of my research my goal is to produce a final white paper, while keeping the Github research repository a living store of API design information for the community.
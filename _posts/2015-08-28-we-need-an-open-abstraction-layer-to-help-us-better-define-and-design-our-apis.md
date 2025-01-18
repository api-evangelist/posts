---
layout: post
title: We Need an Open Abstraction Layer to Help Us Better Define and Design Our APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-abstraction.png
author:
  name: kinlane
tags:
  - Design
  - Define
  - APIs
  - Open
---
I walked around San Francisco with Jakub Nesetril ([@jakubnesetril](https://twitter.com/jakubnesetril)), the CEO of [Apiary](https://apiary.io/), Wednesday evening, talking about the API space. Eventually we sat down in Union Square, continuing our conversation, which is something I wanted to further process, and blend with some existing thoughts I'm working through. Much of our conversation centered around the need for an open abstraction layer for API design, which would reduce the focus on Swagger vs. API Blueprint vs. WADL vs. RAML vs. any other API definition, and make it just about defining and designing our APIs.

Jakub is right, I'm sure he'd love everyone to use API Blueprint (which thousands are), but it is more important to him that people just use API definitions, and commit to a healthy API design strategy. This line of thinking is in alignment with other thoughts I'm having around there being a [common open source API design editor,](http://apievangelist.com/2015/08/13/a-common-open-source-api-design-editor-is-needed-for-api-service-providers/) which I'd like to use as vehicle to get us closer to [my vision of a perfect API design editor](http://apievangelist.com/2014/06/25/if-i-could-design-my-perfect-api-design-editor/).

I see an abstraction layer consisting of the following elements:

*   **Import** - We need to be able to import ANY API definition format we desire.
*   **Export** - We need to be able to export ANY API definition format we desire.
*   **Viewer** - We a code view for ANY API definition format we want to look at while working.
*   **Editor** - We a visual, GUI editor that is all about visual API design, WYSIWG editor for APIs

The import, export, and viewer should work as an API, and the API editor should be a simple, well design JavaScript tool that can be embedded anywhere. The back-end API stack should be available in PHP,Python,Ruby, Node.js, Go, C#, and Java flavors, with a docker image anyone can deploy within their own infrastructure. This should be all about abstracting away the complexities of each individual format, and focus on delivering a simple, yet robust API design editing experience.

API definition format owners should be able to maintain importing, exporting, and viewing layers via some sort of plug-in architecture--meaning the platform is about API definition, the WSDL, WADL, Swagger, API Blueprint, RADL, RAML, Postman Collection, and other formats should be owned by each respective owner. The Open API Abstraction project could provide a single architecture for everyone to plug into, with an emphasis on building the best possible API design editing experience possible.

The Open API Abstraction tooling could be baked into any API service or tooling in the space, allowing the next generation API service providers to focus on what they do best, and not having to build out their own API design editor, while  also baking in compatibility for all API definition formats by default. Such a layer would allow API architects and designers to craft APIs in a consistent way, no matter what API definition format designers and developers might be speaking, opening up a wider world for communicating and collaborating through the API design process.
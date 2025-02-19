---
published: true
layout: post
title: What Will It Take To Evolve OpenAPI Tooling to Version 3.0
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_spec_structural_improvements.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Tooling
  - Open
---
I am spending some time adding more tools to [my OpenAPI Toolbox](http://openapi.toolbox.apievangelist.com/), and I'm looking to start evaluating what it will take for tooling providers to evolve their solution from version 2.0 of the OpenAPI Spec to version 3.0. I want to better understand what it will take to evolve the documentation, generators, servers, clients, editors, and other tools that I'm tracking on as part of my toolbox research.

I'm going to spend another couple of weeks populating the toolbox with OpenAPI solutions. Getting them entered with all the relevant metadata. Once I feel the list is good enough, I will begin reaching out to each tool owner, asking what their OpenAPI 3.0 plans are. It will give me a good reason to reach out and see if anyone is even home. I'm assuming that a number of the projects are abandoned, and even that their owners do not have the resources necessary to go from 2.0 to 3.0. Regardless, this is something I want to track on as part of this OpenAPI toolbox research.

The overall architecture of OpenAPI shifted pretty significantly from 2.0 to 3.0. Things are way more modular, and reusable in there, something that will take some work to bring out in most of the tooling areas. Personally, I'm pretty excited for the opportunities when it comes to API documentation and API design editors with OpenAPI 3.0 as the core. I am also hoping that developers step up to make sure that the generators, as well as the server and client code generators become available in a variety of programming languages--we will need this to make sure we keep the momentum that we've established with the specification so far.

If you are looking at developing any tooling using OpenAPI 3.0 I'd love to hear from you. I'd like to hear more about what it will take to either migrate your tool from version 2.0 to 3.0 or even hear what it will take to get up and running on 3.0 from scratch. I'm going to get to work on crafting my first OpenAPI definition using version 3.0, then I'm going to begin playing around with some new approaches to API documentation and possibly an API editor or notebook that takes advantage of the changes in the OpenAPI Specification.
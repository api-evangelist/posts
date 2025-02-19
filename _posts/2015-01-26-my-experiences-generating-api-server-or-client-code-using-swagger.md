---
layout: post
title: My Experiences Generating API Server or Client Code Using Swagger
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-gears.png
author:
  name: kinlane
tags:
  - My
  - Client
  - Swagger
  - Code
  - Experiences
  - Experience
---
When you start talking about generating server or client side code for APIs, using machine readable API definition formats like [Swagger](http://swagger.io) or [API Blueprint](https://apiblueprint.org/), many technologists feel compelled to let you know, that at some point you will hit a wall. There is only so far you can go, when using your API definition as guide for generating server-side or clienit-side code, but in my experience you can definitely save some significant time an energy, by auto-generating code using Swagger definitions.

I just finished re-designing 15 APIs that support the core of API Evangelist, and to support the work I wrote four separate code generation tools:

*   **PHP Server -** Generating a Slim PHP framework for my API, based upon Swagger definition.
*   **PHP Client -** Assemble a custom PHP client of my design, using Swagger definition as guide.
*   **JavaScript Client -** Assemble a custom JavaScript client of my design, using Swagger definition as guide.
*   **MySQL Database -** Generate a MySQL script based upon the data models available in a Swagger definition.

Using Swagger, I can get myself 90-100% of the way for most of the common portions of the APIs I design. When writing a simple CRUD API like notes, or for links, I can auto-generate the PHP server, and a JS client, and underlying MySQL table structure, which in the end, runs perfectly with no changes.

Once I needed more custom functionality, and have more unique API calls to make, I then have to get my hands dirty, and begin manually working in the code. However auto-generation of code sure gets me a long way down the road, saving me time doing the really mundane, heavy lifting in creating the skeleton code structures I need to get up an running with any new API.

I’m also exploring using [APIs.json](http://apisjson.org), complete with [Swagger](http://swagger.io) references, and Docker image references to further bridge this gap. In my opinion, a Swagger definition for any API, can act as a fingerprint for which interfaces a docker image supports. I will write about this more in the future, as I produce better examples, but I'm finding that using APIs.json to bind a Swagger definition, with one or many Docker images, opens up a whole new view of how you can automate API deployment, management, and integration.
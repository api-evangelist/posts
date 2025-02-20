---
published: true
layout: post
title: >-
  API Examples, Schema, Mocks, Static, Synthetic, Dynamic, Data, Functions,
  Frameworks, Gateway, Deployment, Documentation, and Client
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/life_purpose_venn_diagram.jpg
author:
  name: kinlane
tags:
  - Examples
  - Mocks
  - Data
  - Frameworks
  - Deployment
  - Documentation
  - Collections
  - Clients
---
My head is swirling from a flurry of exciting meetings around what different Postman features are being worked on currently. I can’t speak directly on the features until they are released, but I am keen on pushing forward my understanding of the stops along the API lifecycle being served so that I can be articulate in meetings, while also helping light the fire under my readers imagination about what is possible with APIs. Today my head is moving very rapidly across the types of APIs I am producing or seeing produced, as well as the variety of approaches employed to bring these APIs to life—spanning from simple mocking of an API to full blow deployment of APIs at scale across multiple platforms, frameworks, and languages. I am thinking the overlap between examples I used in my APIs, how I mock with these examples, then evolve them into more static, synthetic, and dynamic mock implementations, or even possibly how these APIs then become real world production deployments.

Currently you can mock your APIs with a variety of services, including Postman. I have also played around with a variety of ways to deploy APIs from an OpenAPI using Postman. I am looking for ways to help better quantify, visualize, and understand the different types of data we are making available via APIs, how those APIs are defined, hardened, and scaled, as well as documented and immediately accessible via a client like Postman.  I do not have the first clue in how to map this out as a single visualization or coherent narrative, but that won’t stop me from trying. Here are the dimensions I am working within, trying to define some sort of Venn diagram regarding how they work in concert. I can’t quite see it all yet, but this post is designed to help me bring it more into focus. I am trying to put these in order of need, but it is very difficult when they aren’t a constant for all APIs, but here is my working list.

*   **Examples** - I have a YAML or JSON example of the data I working with, which I would like to turn into any API, and make available for use in other applications.
*   **Schema** - I can take the examples that I have and turn them into JSON schema for modeling my API, and to be used as part of the validation of the APIs I am developing.
*   **OpenAPI** - With my examples and schema I can get to work defining the paths, parameters and other details of the requests that can be made to APIs I will be providing.
*   **Mocks** - Next, I need to be able to mock the APIs I have defined using OpenAPI, providing a quick way to generate a simple representation of the API I am looking to build.
*   **Static** - Many of my APIs will only need a static representation of each endpoint, taking simple examples I provide and returning them to demonstrate what will occur in production.
*   **Dynamic** - Occasionally I need to go further and provide dynamic representations fo ray mocked endpoints, generating different responses, and going further to mimic production.
*   **Synthetic** - Sometimes I need to go further by actually generating and providing synthetic data as part of my mocked API responses helping make it as real world as possible.
*   **Data** - In some situations I may be actually using mocked APIs to publish real world data for testing and other purposes, even considering many of these APIs ready for production.
*   **Functions** - Many will be deployed as simple data APIs, but many will evolve to contain standardized or custom code delivering upon specific functions that are needed.
*   **Frameworks** - In preparation for deployment I may need a framework to be deployed and code generated to deploy each API using a specific API framework as scaffolding.
*   **Gateway** - In preparation for deployment I may need to deploy to a gateway, using the APIs definition as the set of instructions for the gateway to following when deploying.
*   **Deployment** - Any combination of the previous steps will be used to actually deploy each API into developing, staging, and production environments, showing the many ways APIs are brought to life.
*   **Documentation** - As part of this process I always want up to date documentation produced from the OpenAPI definition, examples, and other artifacts that are produced.
*   **Collection** - From the OpenAPI truth there should be a generated, ready to go collection that can be published along with documentation and used by developers to call an API.
*   **Client** - Of course this narrative is going to end at me being able to actually make calls to, debug, and work with the responses I am getting back from each of the APIs.

While I have worked with each of these layers for years, I am still working to refine how I talk about them. I am also working to try and visualize how they work together. While not all APIs will employ all of these layers, some of them are essential, and developers should be aware of the different approaches to designing APIs, but also knowing that sometimes a static API deployment of simple data is perfectly adequate for some implementations. It is common for many APIs to never evolve beyond simple Create, Read, Update, and Delete (CRUD) functionality. I feel like CRUD gets a bad reputation because there isn’t much design love that goes into them, but I think in reality CRUD gets the job done for many folks. I am just working to help folks better understand the different layers, be equipped to have a conversation about them, and know when to apply them in their everyday work.

One things that really fascinates me here is the line between a dynamic mock API and an actual API deployment. There really isn’t much difference between a static mock and a simple read only data API, the only difference is with a static mock API you’d call the data being returned “examples”, where with the data API that would be the actual data. Then as I push my mock APIs to be more dynamic, where is the line to cross when I am really just better off deploying my API? How much work am I putting into mock infrastructure, over just putting that work into deploying an actual API. Honestly, I feel like it comes down to your process and workflow, and what your expectations are of a production API. I would say the biggest kink the API narrative e comes in when you start needing logic behind your APIs, and have to begin adding functions and custom code. Everything else is pretty straightforward and structured, lending itself to easy generation and validation, but everyone always hits the point where you need more than schema and CRUD will get you.

I am going to keep noodling on this one. I am stuck on this line between mock and deployment right now. I am also stuck between reality on the ground at enterprise organizations and the right way of doing things. I am determined to better define the API deployment process and bring it out of the shadows with some clearly defined steps, while also working to identify the common API deploy patterns that exist within the enterprise. While I am eager to flesh out what the best practices are when it comes to deploying many different types of APIs, I am also painfully aware that not everyone will get to adopt best practices on the ground with their organizations, as they are just expected to get a job done. I am looking for quick examples of how API development teams can be changing their behavior in incremental ways to be more successful in what they are trying to do. I am also very interested in shining a light into the world of API deployment at the enterprise level because historically it is a process that many organizations keep to themselves, and isn’t something very many API service providers have historically helped out with. There is a lot to learn at this layer, and seismic shifts coming in the next ten years when it comes to how we deploy API infrastructure.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/life_purpose_venn_diagram.jpg)
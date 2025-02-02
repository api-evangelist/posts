---
published: true
layout: post
title: The Work To Get Your API House in Order Using JSON Schema
tags:
  - JSON Schema
  - Schema
  - Objects
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-house-freeway-behind.jpeg
---
I am a big fan of [JSON Schema](https://json-schema.org/). I have a strong belief that JSON Schema is the most important specification for any enterprise, no matter which industry they operate in. I was talking with my friend [Ben Hutton](https://www.linkedin.com/in/benhuttonuk/) from JSON Schema this morning about the current and future state of the spec, and the conversation reminded me that I needed to [renew my call to action for enterprises to do the work to get their schema house in order](https://apievangelist.com/2017/01/10/hoping-schema-becomes-just-as-important-as-api-definitions-in-2017/) with JSON Schema. The work isn’t trivial, but the cost of the investment is low, with significant amounts of alignment across the enterprise when realized. 

First, what is JSON Schema? JSON Schema enables the confident and reliable use of the JSON data format. Your enterprise is already using JSON Schema, however most enterprises aren’t using the specification in any coordinated and strategic way. JSON Schema defines the digital objects you are passing back and forth between systems and applications, allowing you to be consistent in how you describe digital objects across teams, and validate those objects during development and in production. JSON Schema is powerful and ubiquitous, but many simply see it as a technical linter and validator for developers, when it is much, much more than that, and when leveraged properly it could bring significant alignment and grounding across business operations.

In my experience, almost every enterprise I have worked with would benefit from the following:

- **Source of Truth** - Establish a Git repository where all JSON Schema will be published to provide a source of truth for JSON objects used across the enterprise.
- **Draft Support** - Most enterprises use a mix of draft 4,6,7, and the latest 2020-12, and would benefit greatly from migrating to the latest draft across the organization.
- **Tooling** - Along with the use of the latest draft of JSON Schema, standardizing around common libraries and tools will help further stabilize how teams use it.
- **Education** - Bring it educational content, workshops, and other training to help ensure all teams get the proper exposure to what JSON Schema is and how it works.
- **Basics** - Get to work defining the basics of all the digital objects you use, beginning with properties and their shape, and moving on to more advanced usage of JSON Schema.

This list isn’t trivial. I know. I’ve mapped out business usage of JSON Schema more than once. I’ve done the work to centralize and normalize JSON Schema objects in GitHub repositories across thousands of objects. I recommend a low-budget start to this work. Fire up a repo and add guidance, education, and begin adding some of the most common objects. Gather up all of the OpenAPI you have laying around and centralize the objects used as part of API requests and responses. Then talk to teams, socialize the Git repository, talk to teams, and figure out what you can do next—you don’t have to boil the ocean.

I can’t emphasize this enough as the starting point for any enterprise looking to stabilize their API operations. I am not talking about GraphQL or event-driven realms yet, I am simply talking about getting a handle on the schema used across your HTTP APIs and Webhooks. I am talking about establishing a single source of truth, creating the guidance and education needed to teach teams the basics, and begin doing the work to centralize objects and upgrade versions of JSON Schema in use and the tooling that teams are putting to work. This is a low-tech and low-hanging fruit project that anyone can do, which if it receives the proper focus and attention could have profound effects on the stability and reliability of API operations. I wanted to write out of today’s call with Ben so that I could further standardize and offer a set of services for my customers, and better understand how to make it a reality on the ground across different enterprises. 
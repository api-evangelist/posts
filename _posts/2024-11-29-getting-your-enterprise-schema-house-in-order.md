---
published: true
layout: post
title: Getting Your Enterprise Schema House in Order
tags:
  - Schema
  - JSON
  - YAML
  - JSON Schema
  - GitOps
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/john-wayne-the-searchers-house-freeway-behind.jpeg
---
The most destabilizing aspect of enterprise operations, and the greatest contributor to API governance efforts stumbling in my experience is an enterprise not having their schema house in order. Without a foundational source of truth and accurate way of defining and validating schema used across APIs, everything will be much, much more difficult. While this approach is something that can be applied across REST, GraphQL, and event-driven approaches to API, I am primarily focused on laying the foundation for HTTP APIs and Webhooks which are the dominant way in which the digital bits which need to be defined as standard schema are being moved around the enterprise today. I strongly urge that enterprises invest in getting their schema house in order before moving too far down the road with API governance as things get exponentially more complicated without it, but I understand that these things often have to happen in tandem. 

There is a ton of work involved with getting the enterprise schema house in order, but I am recommending that we start small with the fundamentals and slowly add on new work once we get the foundation established-—getting your schema house in order centers around using JSON Schema and Git to do the following:

- **Git Repository** - Establish a single Git repository as the source of truth for all schema within the enterprise, domain, line of business or team — start with a scope that makes sense, you can also expand from there.
- **Latest Version** - Make sure that all schema is using the latest draft of the JSON Schema specification, making sure the schema but also the libraries and tooling applied to schema is all using the most recent draft.
- **Metadata** - Every schema published to a single Git repository should have title and descriptions present for each schema object, but also every properties that is present, making sure that the metadata is present.
- **Examples** - Providing an example of each schema being defined and validated helps translate from JSON to JSON schema for everyone, providing a real-world example of what is being defined and validated.
- **Education** - Establish a baseline for education about JSON, JSON Schema, Git, and the properties used to ensure the latest version of the schema is used, what metadata is present, and demonstrating with an example.

Start there. I know. I know. Technologists are like, but we need a schema registry, and we have to start doing regex, anyOf, oneOf, and so many other things. Slow your roll. We are building a foundation. We’ll get to it. If you can accomplish what is listed above and get teams to lend a hand in populating the repository, upgrading the versions of schema and libraries, applying metadata, providing examples, and ensure that everyone has the baseline of education about schema that is needed—-it will have a profound effect on the stability and velocity of your API operations.

This is one of those areas where I will remind folks that API governance is more about slowing down. People love to poke at me for saying this, like I am crazy or something. You know what is crazy, unleashing hundreds or thousands of developers across API operations all using different versions of JSON Schema, most without any metadata or understanding of what JSON Schema is, applying whatever libraries they wish in their pipelines and tools. YOU HAVE TO SLOW DOWN TO SPEED UP.  This is governance. If you don’t understand what I mean when I say API governance is about slowing down, you are too down in the weeds of operations and need to come up for air and see the big picture for a bit.

Next, I will work on a prototype repository to demonstrate and walk folks through what I am talking about. I will fire up a simple GitHub repository, publish a handful of schema, which will all have the latest version, metadata, and examples present. I will make sure the README has the latest education about what is happening and being applied in the repository. I will call this Schema 101, and then get to work on the 201 items that many of you know is coming and are just as essential. This foundational work will reflect my overall approach to API governance where I slow space and time down and demonstrate how we are just moving too damn fast to realize what a mess we are making, with daily pit stops to complain just how unstable and chaotic things are. If we just took the time to slow down and do things in a more thoughtful manner, we will be able to move so much faster once our enterprise schema house is in order.
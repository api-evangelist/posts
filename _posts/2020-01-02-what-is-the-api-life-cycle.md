---
published: true
layout: post
title: What Is The API Life Cycle?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-hallway-mirrors-hotel.jpg
author:
  name: kinlane
tags:
  - Lifecycle
---
I regularly struggle with the words and phrases I use in my storytelling. I’m never happy with my level of word-smithing, as well as the final output. Ultimately I don’t let it stop me, I just push myself to constantly re-evaluate how I speak, being forever critical and often pedantic about why I do things, and why I don’t. One word I struggle with is lifecycle. First I struggle with it being a word, or two words. Historically I have been team word, but more recently I’ve switched to two words. However, this round of anxiety over the phrase is more operational, and existential, over it being about how I use the word in my storytelling. I am more interested in if we should even be using the phrase, and if we are, how do we get more formal about quantifying exactly what we mean by the API life cycle.

As I work to flesh out [my API life cycle Postman collection](http://apievangelist.com/2020/01/02/a-postman-collection-for-managing-the-life-cycles-of-my-apis/), defining an API-driven guard rails for how I deliver my APIs, and distilling each step down to a single request and set of pre and post request scripts, I am forced to think about what the API life cycle really is. Pushing me to go beyond just talking about some abstract concept, to actually having a set of interfaces and scripts that quantify each stop along the API life cycle. While I will be adding more stops to my Postman API life cycle collection, I currently have 27 stops defined, providing me with some concrete actions I can take at each point in the evolution of my APIs.

*   **Define** - Defining the central truth of the API using OpenAPI, JSON Schema, and Postman collections and environments.
*   **Environments** - Providing environments that drive different stages of the API life cycle in conjunction with various collections.
*   **Design** - Quantifying, standardizing, and evolving the HTTP and other design patterns I use across the APIs I deliver.
*   **Documentation** - Providing a link to the Postman documentation I am generating for each API using it’s reference collection.
*   **Mock** - Ensuring there is one or more mock representations for an APIs, and potentially different versions of each API.
*   **Database** - Deploying, configuring, and managing the persistent data storage behind each API I am deploying.
*   **Compute** - Potentially providing a compute layer, using a server, container, or serverless solution, driving the API backend.
*   **Deploy** - Taking an API contract and actually deploying an API using a gateway, framework, or other standardized approach.
*   **Manage** - Ensuring there are usage plans, and each API require keys to access, managing how each individual API can be applied.
*   **Integration** - Making sure there are scripts, SDKs, and other integration solutions available for consumers of each API to use.
*   **Authentication** - Ensuring that all APIs require authentication and is selected from a standardized set of authentication and authorization methods.
*   **Logging** - Centralizing logging for all APIs, providing a single location to tune into the activity around how each API is being applied.
*   **Encryption** - Ensuring all API traffic is encrypted by default, managing the certificates, and usage of certificates across infrastructure.
*   **DNS** - Being able to apply custom sub-domains to each individual API, leveraging DNS as a namespace for the API catalog.
*   **Portal** - Providing a single doorway in which everything about an API can be accessed, making it easy to engage with each API resource.
*   **Road Map** - Publishing a road map with everything that is planned for an API, actively adding and completing road map entries.
*   **Change Log** - Once something has been accomplished as part of the road map it can be moved into a state where it feeds into the change log.
*   **Issues** - Providing a way of communicating around the known issues with each API, limiting the resources needed to support  the community.
*   **Support** - Additionally providing email, social media, and ticketing support as part of an APIs operation, ensuring there is a feedback loop.
*   **Communication** - Going beyond support and making sure there is a regular broadcast of information and knowledge from an APIs operations.
*   **Testing** - Having a strategy for defining, executing, and reporting upon tests for 100% of the surface area for an API being delivered.
*   **Monitoring** - Having a strategy for how an API is monitored, and how recurring tasks are schedule and reporting up as part of orchestration.
*   **Performance** - Having your finger on the pulse of the performance for each API, tracking on how well it is delivering against expected SLAs.
*   **Security** - Using the APIs contract to define, scan, and secure the surface area of each API, going beyond just authentication and access control.
*   **Discovery** - Making sure all of my APIs are discoverable by default, leveraging machine readable definitions to make them discoverable.
*   **Governance** - Adequately defining the guidance, guardrails, reporting, and feedback loop that exists across the API life cycle.
*   **Deprecation** - Being honest that eventually an API will have to be deprecated and retired as part of it’s evolution and support**.**

These are what I consider to be the essential stops along my API life cycle. While the life cycle for an API does begin with definition, and end with deprecation, it is definitely not a linear process. This is one reason I stopped using lifecycle as one word, because I wanted to decouple the life from the cycle, allowing the cycles to repeat in any formation and repetition throughout the life of an API. I’m really troubled by the visions I have in my head about the API life cycle being and end to end linear type of thing. I want to evolve how I talk about the API life cycle, and how I define and execute it across many different APIs. I’m pretty confident that in order for me to evolve in how I deliver APIs I am going to have to get more structured in how I define, talk about, and execute across the API life cycle. I am hoping with my new API collection that eventually I will be able to just harvest the exhaust of my API life cycle collection using Postman, and immediately be able to map out the actual end to end life cycle for an API.

Right now I see the API life cycle as and end to end affair, but with a bunch of little cycles that exist between different stops, at different frequencies, involving different API stakeholders. My goal with [my API life cycle collection](http://apievangelist.com/2020/01/02/a-postman-collection-for-managing-the-life-cycles-of-my-apis/) is to help me better quantify each stop along the API life cycle, and ensure there is a timestamp for each individual action made at that stop. I want to know how many times I iterated upon the design of an API before I publish the documentation again. I want to understand how many actual deployments went to the gateway before the evolution of an API actually slowed and stabilized. I have a lot of questions about what API life cycle means, how we quantify and engage with it, and most importantly how we observe, measure, understand, and report upon what is going on so that over time we get better and better, while also offering more stable API solutions that people can use.
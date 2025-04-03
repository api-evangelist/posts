---
published: true
layout: post
title: Response to the API Repository Proposal
date: 2025-04-03T09:00:00.000Z
tags:
  - Specifications
  - Discovery
  - Repositories
  - Dependencies
  - Integrations
  - Protocols
  - Lifecycle
  - Changes
  - Deprecation
  - Autocomplete
  - Documentation
  - Code Generation
  - Packages
  - IDE
  - CLI
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/francis-williams-new-and-old-building.jpeg
---
[Pavel Bodiachevskii posted a draft of his proposal for the API repository proposal](https://www.linkedin.com/feed/update/urn:li:activity:7313548903260327936/), with [accompanying blog post](https://pakisan.github.io/posts/api-as-dependency/#api-repository-structure). I wanted to properly respond but it is of the length and quality that I'd prefer to keep in my domain and link from the LinkedIn post.

I will start by saying I am 100% a proponent of there being many specifications out there. I think the frustration represented in Pavel’s post, response, and proposed spec are valid challenges we all face. I will review and support any new spec to emerge on the scene, but I always begin three strong principles I begin with:

  1.  Has Due Due Diligence Occurred
  2. Is There a Power Grab Occurring
  3. Is This Only Solving Technical Friction

I think I can help with some more due diligence, and don't see any signs of power grab like I do with wider MCP, but it is potentially in service of AI agents and automation—I can't fully tell. The positioning of this proposed specification hits on a need, but it is not clear exactly who it is solving the need for. Let’s take a pass and try to cherry pick out the highlights from the blog post to maybe distill down the intent a little bit for my own benefit.

- Interpreting API as dependency
- Protocol & Pattern Shifting
- Guide For to work with APIs
- Integrations Are Messy
- Integrations Are Manual
- Not Replacing Inventory Solutions
- Retrieve Deprecation Information
- Generate Autocomplete
- Generate Documentation
- Generate Client Code
- MCP Agent Brokerage

All very logical and real world areas of friction when it comes to working APIs. However, to help me understand the intent of a new spec and map it to the view of the landscape I possess, I wanted to try to just distill down these capabilities in single words or phrases I can feed back into my “Kin Lane LLM”. Here is the tag cloud or Venn diagram overlap of capabilities the proposed specification would deliver.

<blockquote><strong><i>Discovery, Integrations, Dependencies, Protocols, Lifecycle, Changes, Deprecation, Autocomplete, Documentation, Code Generation, Packages, IDE, CLI</i></strong></blockquote>

If I take that tag cloud and do a diff with my vocabulary, I would immediately begin asking questions about other areas of friction occurring in the same problem space Pavel appears to working to introduce a new solution—highlighting these areas:

<blockquote><strong><i>Authentication, Authorization, RBAC, Secrets, Semantics, Rate Limits, Pricing / Costs, Legal / Compliance, Pipelines, Provisioning, Intellisense</i></strong></blockquote>

Of course, if this is limited to just internal APIs, the pricing, cost, legal, and compliance will not be as much of a concern, but the authentication, authorization, secrets, semantics are going to pretty critical layer if you want to truly enable the developer in the IDE or CLI as well as agents or other automation. I can’t quite tell who this is for—it feels very technical with the intent of automation, but it also just feels very developer experience and reduces friction for human beans.

So, I guess some questions I have are...

- Who will create this? 
- What is their incentive?
- What tooling will generate?
- What tooling will consume?
- Why do you care (ie your pain, others pain, $$, fame, glory)
- Why would others care? (Ie. $$, time, pain, automation)

Also, I love the investment in the API lifecycle — have been calling for this for a long time. However, it is one area where there are strong opinions and you can rarely negotiate, govern, or dictate a common API lifecycle in the enterprise— I’ve seen some enterprises tame this, but most of it is a Wild West across most teams. I’d consider making it as configurable as possible to help with flexibility.

I am a fan of your opinionated schema (i.e cycles, contract, artifacts, deprecation, build, repositories, apis). It is logical. As with lifecycle, you will collide with opinions on the ground, and up high in the CTO / CIO office w/ architects. Make as configurable and flexible as possible in your first iteration to allow for flexibility and extensibility, while keeping your opinionated stance.

Now, to help contribute some due diligence to the discussion, I’ve pulled a couple existing specifications you may want to consider, learn from, beg, borrow, and build upon when it makes sense — awareness of other approaches is always beneficial.

- **Discovery**
  - [APIs.json](https://apisjson.org/) - This is my specification, it evolved from data.json work I did for the Obama administration, but comes from more of an operational and discovery perspective. It is intentionally un-opinionated to allow for mapping of the chaotic sprawl that is the API landscape. It goes in the root of your portal or your repo, and you can use it to operate a search engine, publish a catalog, and generate README for repository—see the [default](https://gist.githubusercontent.com/kinlane/3b893b9343ade1906ed8b5b18ecc9279/raw/7a1e70cbbccf63ce3eea5c5eac23a7ac4e84af8b/apis-json-example.json), or [AWS](https://github.com/api-evangelist/amazon-web-services/blob/main/apis.yml), or [many others](https://github.com/orgs/api-evangelist/repositories).
  - [api-catalog](https://datatracker.ietf.org/doc/draft-ietf-httpapi-api-catalog/) - IETF standard which recommends APIs.json and other approaches to enabling API discovery in a machine readable way via a well-known discovery artifact.
- **Dependencies**
  - [API Manifest](https://darrelmiller.github.io/api-manifest/draft-miller-api-manifest.html) - Not quite the package management approach being proposed here, but something you should consider and you should definitely harass Darrel Miller for more answers to question. Make sure and start the conversation by making him recite all the HTTP status codes.
- **Code, Tooling**
  - [RESTful Provisioning Protocol](https://datatracker.ietf.org/doc/charter-ietf-rpp/01/) - I am still learning here, but it speaks to a lot of what I feel you will want to be enabling with this specification.
Intelligence, Autocomplete, Validation
  - [JSON Schema Intelligence in the IDE](https://code.visualstudio.com/docs/languages/json) - You have the contract in your spec, which will have the JSON Schema for the request and response of any operations. You can easily augment the contract with examples, templates, and snippets at all levels of the contract. 
- **Semantics**
  - [JSON-LD](https://json-ld.org/) - Ideally the APIs you are profiling with your specification employ JSON-LD which would give resources a rich semantic layer, but without that it can still be added to your specification and provide an extensible way to add a semantic layer that would make discovery in IDE, CLI, and by agents and automaton more effective.
  - [Schema.org](https://schema.org/Organization) - Look at any Schema.org object to see how JSON-LD can be applied, something Google and others use in search and many other places.
- **Authentication, Authorization**
  - [OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591) - I am still learning how to apply this, but represents the work that will have to occur at this layer.
  - [OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html) - I am still learning how to apply this, but it represents the work that will have to occur at this layer.
- **Inventory**
  - [Descriptor Format of Catalog Entities](https://backstage.io/docs/features/software-catalog/descriptor-format/) - Personally not a big fan of backstage, but seeing some pretty interesting inventory solutions for APIs and dependency management done here, while using Git to deliver some interesting guardrails for developers in the IDEs.
- **Infrastructure, Operations**
  - [Common Architecture Language Model (CALM)](https://calm.finos.org/) - Continuing past inventory I am seeing interesting governance the lifecycle you are trying to tame, but many other processes, but coming at it from an inventory, infrastructure, asset management approach which will speak to some enterprises.
- **Business**
  - [API Ops Cycles](https://www.apiopscycles.com/) - This only lightly overlaps with your spec because of the lifecycle. It also helps contract your approach with what I am working to do with APIs.json. I am coming from the business side of the conversation, where you are coming from the developer side of the conversation chasing the latest wave of AI automation—[you can see how I am applying here](https://apievangelist.com/2025/04/02/adding-apiops-canveses-to-apis-json-index-for-api/).

Overall I like your approach. It’s similar but different to what I am doing with APIs.json. I just care more about the business concerns and bridging the human and machine readable elements of operations-—I am excited by automation, but less so by AI agents. I understand all the friction you speak of in your proposal intimately. Your spec will speak to ops folks and developers, however I question if it will get prioritized without a business imperative. 

Honestly, I am working to tackle this same space with APIs.json, but my opinions have been blunted by using APIs.json to map the public API space. Your approach sounds very much an engineering-led approach for internal APIs-—maybe I am mistaken. If you envision for public APIs, you will need more opinions in your specification schema. ;-) 

I would recommend crafting some personas of who will be using this (ie. APIOps Cycles above), that might help you dial-in the spec and speak to your intended audience.

Anyways, if you have any questions, feel free to email me and let me know, or write another blog post — that is always a great way to exchange. 

If anyone else reading this would like to talk about this layer and how OpenAPI, JSON Schema, APIs.json, but also all these other specs fit into the big picture everyone is scrambling to automate—feel free to drop me a line.
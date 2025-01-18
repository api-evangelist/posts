---
published: true
layout: post
title: We Are Loading Too Much Into Our OpenAPIs
tags:
  - OpenAPI
  - Artifacts
  - GitHub
  - Extensions
  - Overlays
  - Workflows
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-baggage-department.jpg
---
[I am finding more OpenAPIs being managed on GitHub than I ever have before](https://apievangelist.com/2024/07/08/more-examples-of-using-github-to-manage-your-openapi/). I learn so much studying different companies' approaches to managing their API artifacts out in the open, and I think collectively we can keep sharing, refining, and evolving how we use GitHub to manage essential API artifacts for the benefit of producers and consumers. I was processing [Asana’s impressive OpenAPI published to GitHub](https://github.com/Asana/openapi/blob/master/defs/asana_oas.yaml) as part of my profiling for APis.io, and while I find their OpenAPI extremely useful, I can’t help but feel like we are overloading our OpenAPI definition too much.

Here is what I am seeing as some of the most common ways companies are overloading their OpenAPI:

- **Documentation** - Verbose documentation and other resources doesn’t always need to be packed into your OpenAPI with existing metadata.
- **Paths** - There are too many paths, break things down into more manageable OpenAPIs to light the cognitive load for everyone involved.
- **Schema** - With too many paths comes too many schema, and breaking them down into smaller OpenAPIs goes a long way to light load.
- **Code** - Publishing many different language libraries and snippets for your API as part of your OpenAPI is overkill, publishing them separately.
- **Examples** - Providing examples is always good, but too many or two verbose examples of synthetic data will contribute to OpenAPI bloat.
- **Access** - I see a lot of access control and security being layered on to APIs which substantially bloats an OpenAPI making it very large.

There are additional ways I see extensions and other bloat creep into an OpenAPI, but these are the top things I saw in Asana’s, but also other OpenAPis being managed on GitHub. Think about the load time in services and tooling when you craft your OpenAPIs. Also think about the cognitive load of your API consumers who are only interested in a handful of paths and experiences powered by your OpenAPI. This is an excellent opportunity for [OpenAPI Overlays](https://github.com/OAI/Overlay-Specification) to come in and help introduce layers of an OpenAPI that matter to different actors involved in producing and consuming. It also backs up my strong belief that one spec or schema shouldn’t rule them all, and is why [APIs.json](https://apisjson.org) encourages indexing OpenAPI, and any other artifact you desire.

It is important that all of this information people are packing into their OpenAPI is available as machine-readable artifacts. However, for larger scope APIs it quickly becomes unmanageable with a very expensive cognitive load. I know people love their mono approach to things, but at some point you have to begin reducing things into more meaningful bits—smaller, medium, or large. I know most API producers are simply concerned with the experiences an OpenAPI powers for them (ie. Docs, SDKs, Mocks), but think of your consumers when they are putting your OpenAPI to work. Rarely will they need the full meal deal—give them a buffet they can choose from. I am hopeful that OpenAPI Overlays and Arazzo Workflows will help reduce this load, but I am also investing in APIs.json unchaining a team’s desire to describe all aspects of API operations in a machine-readable way, but one that will allow you to assemble only what you need to get your job done.
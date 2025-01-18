---
published: true
layout: post
title: Investing In the Future of the Visual OpenAPI Editor
tags:
  - OpenAPI
  - Editor
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/good-year-home-merchandise-the-empress-front.jpeg
---
I have long been encouraging folks to rethink a visual editor for OpenAPI. I am NOT a front-end person, and I am very thankful for people who are. With that said I have very strong opinions and beliefs around what a visual editor for OpenAPI should and could be. As I spend time exploring [OpenAPI Doctor](https://pb33f.io/doctor/), [API-Fiddle](https://api-fiddle.com/), and other innovations occurring around editing of OpenAPI, I wanted to reassess what my priorities are when it comes to a visual OpenAPI editor and how it fits into the API lifecycle.

A visual OpenAPI editor is something I have been thinking about for a while now. Seriously, here are my thoughts from [2014](https://apievangelist.com/2014/06/25/if-i-could-design-my-perfect-api-design-editor/), [2015](https://apievangelist.com/2015/08/13/a-common-open-source-api-design-editor-is-needed-for-api-service-providers/), [2017](https://apievangelist.com/2017/03/06/please-develop-an-embeddable-open-source-visual-api-editor/), and [2018](https://apievangelist.com/2018/03/30/the-openapi-30.gui/). Sadly my thoughts from between 2019 and 2023 went into Postman, and for 2024 they went into an internal editor at Bloomberg. As we approach 2025 I want to explore what are we going to need when it comes to editing our OpenAPI, and something I hope we follow Stoplight and others lead in making it something for business and technical stakeholders. 

Here are the patterns I’d like to see in visual OpenAPI editors:

- **Open-Source** - Something anyone can deploy and use where needed.
- **GitOps** - It must use Git as the underlying file system and backend.
- **Modular** - Component management, reuse, and applying during design.
- **Evidence-Based** - Vacuum up all the evidence of APIs across operations and reuse.
- **Changes** - Versioning and helping abstract away the complexity of change.
- **Multi-File** - Management across version, but also bundling and unbundling.
- **Helpful** - Use to empower teams to use and apply in support and feedback loops.
- **Comments** - Allow teams make comments on each part or piece of OpenAPI.
- **Notifications** - Alerts via existing top channels like Slack, Teams, Discord.
- **Embeddable** - It is ideally something that can be embedded anywhere.
- **Education** - There should be OpenAPI and API literacy baked into it.
- **Policies** - Help teams understand the business reasons why they do work.
- **Rules** - Automate the enforcement of specific design patterns along the way.
- **JSON Schema** - Don’t just make OpenAPI, define and validate everything.
- **Workflows** - Provide the ability to create and manage OpenAPI Arazzo specs.
- **Overlays** - Provide the ability to create and manage OpenAPI Overlay specs.

This is where I’d start. I have other ideas I am simmering on as well. Now, I also recommend folks avoid the trappings of editor bundling with other proven stops along the API lifecycle. I know it is tempting, but areas like documentation, mocking, testing, security, and well well trodden paths are a trap and you’ll fuck up your trajectory. I know you’ll be tempted to take some VC money, but that will fuck up your trajectory too. If you are building a visual OpenAPI editor in 2024, I recommend to stay focused on delivering the best goddam editor you can and own that lane-—I’ve seen this get fucked up too many times now. You will need to partner and integrate with other areas of API operations using Git, APIs, and Webhooks.

Now, let me blow all of this up. I actually don’t believe an OpenAPI editor is what we’ll need to take us into the future. OpenAPI is Schrödinger's spec, where nobody gives a shit about the spec, at the same time everyone needs to give a shit about the spec. What we need is an API resource, capability, and experience editor, that will allow anyone to work with existing digital resources, or create new ones, but then also orchestrate them into meaningful business capabilities and experiences that can be used across desktop, web, mobile, device, and AI applications. I opened my thoughts by saying you have to be open source, so I’ll do another pass over all of these suggestions and put some thought into where the Benjamin’s are--cause we gotta pay the bills. I am looking to align myself with the leaders in this space while equipping enterprises with the best in breed editor for their API toolchain—-so expect more conversation and movement on this topic in 2025.

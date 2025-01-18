---
published: true
layout: post
title: Help You Manage Your JSON Schema via a GitHub Repository
tags:
  - GitHub
  - Repositories
  - JSON Schema
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/green-circuit-docks-big-cosco-ship.jpg
---
I am assembling a toolbox of API governance services for my customers based upon what I’ve been doing for the last year, but also based upon the needs of folks I am talking to right now. One of these services is the management of JSON Schema via GitHub. There are a number of schema registries out there, but they are mostly in service of a specific type of API implementation or protocol like Kafka or GraphQL, and I am looking to start with the fundamentals of getting your schema house in order without the distraction of these other motions.

Here is where I am helping my customers get started—focused on the fundamentals of managing schema in GitHub.

- **APIs.json Index** - Each repository will have an APIs.json index acting as the manifest for the schema.
- **JSON Schema** - Individual JSON Schema that are being applied across many different APIs in use.
- **Folder Structure** - Thinking through how you organize schema, or simply dump into a single folder.
- **Pipeline** - A common definition of how the CI/CD pipeline will automate the management of artifacts.
- **Branches** - A formal definition of how branching will be applied or not applied for the schema managed.
- **Versioning** - A standard approach to how semantic or date-based versioning will be applied to schema.
- **README** - Providing a simple, but comprehensive and up to date landing page for the schema managed.

There are many other things we can do here, [but establishing the source of truth as I mentioned in a story earlier this week is one of the most important things you can do](https://apievangelist.com/2024/11/12/building-a-basic-foundation-using-https-github-com-your-org-schema-for-your-openapi-dollar-ref/). Having a place to publish, store, evolve, and reference your schema is a critical first step in API governance. I am heavily focused on the governance of HTTP APIs, but this work can be applied across other areas as well. Not having schema centrally managed is one of the biggest areas of friction I’ve witnessed when it comes to API governance, and something that keeps schema very siloed based upon individual OpenAPI artifacts.

Managing JSON Schema via a GitHub repository is one of the services I am offering to my customers. It may seem like trivial work, but it is foundational and something that having an external perspective helping manage can go a long way. You bring the repo and the schema, and I’ll help you manage and organize your schema evolving your process over time. This work can live alongside the same repository you use to manage your OpenAPI artifacts or it can be a separate repository, making it easier to fork and apply schema in different types of APIs and applications. Getting your schema house in order is one of the most important things you can do as part of API governance, and beginning with a simple GitHub repository and beginning filling it with schema is an important place to begin.
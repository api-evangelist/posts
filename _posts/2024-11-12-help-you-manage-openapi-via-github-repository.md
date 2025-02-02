---
published: true
layout: post
title: Help You Manage OpenAPI via GitHub Repository
tags:
  - OpenAPI
  - GitHub
  - Repository
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-docks-oakland-2.jpeg
---
I am assembling a toolbox of API governance services for my customers based upon what I’ve been doing for the last year, but also based upon the needs of folks I am talking to right now. One of these services is the [management of OpenAPI specifications via GitHub](https://github.com/api-evangelist/demo-openapi). I’ve done a lot of work around this recently, and [have been learning from the approach of other top API services providers](https://apievangelist.com/2024/07/08/more-examples-of-using-github-to-manage-your-openapi/). I am starting with the fundamentals when it comes to helping folks manage their OpenAPIs via GitHub, including these areas:

- **APIs.json Index** - Each repository will have an APIs.json index acting as the manifest for the API.
- **OpenAPI** - An OpenAPI property for each API, providing the technical details for each API in the index.
- **Properties** - A folder for OpenAPI and other machine-readable properties that apply to each API.
- **Common** - A folder for all the other common machine-readable artifacts that apply across APIs.
- **Pipeline** - A common definition of how the CI/CD pipeline will automate the management of artifacts.
- **Branches** - A formal definition of how branching will be applied or not applied for the APIs managed.
- **Versioning** - A standard approach to how semantic or date-based versioning will be applied to APIs.
- **README** - Providing a simple, but comprehensive and up to date landing page for the API managed.

I will start there. I have other added areas to apply when it comes to a MAKE file, tests, and other automation using Bruno or Postman. I have a number of other capabilities I’d like to include, but don’t want to make too complicated, and begin with the fundamentals of GitHub, but also APIs.json and OpenAPI. Right now [I’m thinking about the bundling and unbundling of OpenAPI and JSON Schema](https://apievangelist.com/2024/11/12/the-bundling-and-unbundling-your-openapi-and-json-schema/), and will apply to the pipeline based upon what I am seeing other API producers do, but also begin thinking about MAKE, Webhooks, and other types of automation to help streamline the management of OpenAPI and other artifacts using GitHub.

Let me know if you need help setting up or managing your OpenAPI via GitHub. I am happy to help in just an educational and advisory capacity, to assist your team in getting off the ground, as well as managing in an ongoing way. APIs.json, OpenAPI, JSON Schema, and GitHub are the heart of my approach to API governance, but this service is more about helping you out at the tactical level, while building towards  a more strategic API governance motion. Next, I am applying the same blueprint to managing schema via GitHub using JSON Schema, but I have some more schema registry research to do. I should actually be managing your JSON Schema via a GitHub repository blueprint first, because the OpenAPI will be referencing it via separate repositories, or living alongside it in the same repo—both approaches make sense.
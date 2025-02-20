---
published: true
layout: post
title: Azure Provides SDK Governance Guidelines
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/azure_sdk_governance.png
author:
  name: kinlane
tags:
  - Governance
  - SDKS
  - Guidelines
---
Most companies I encounter who are doing [API governance](http://governance.apievangelist.com/) are purely focused on API design, with a handful also thinking more deeply about documentation, testing, monitoring, and other stops along the API life cycle. API governance done well involves every stop, but since most organizations are only just getting started investing in API governance, the area of API design is a sensible place to start. Defining how APIs should be designed, helping introduce consistency in how APIs are developed, reducing friction for consumers when it comes to integrating them into applications. Anytime I come across examples of API governance in the wild I try to showcase it here on the blog, and for this story I wanted to shine a light on how [the Microsoft Azure team provides guidelines for how SDKs should be developed and delivered](https://azure.github.io/azure-sdk/index.html).

Azure provides the following scaffolding when it comes to their guidelines, answering many of the questions teams will have when it comes to crafting consistent SDKs for APIs across any product or group:

*   **Introduction** - Providing general information regarding what the SDK guidelines are for, and references the need to work with the Azure Developer Experience Architecture Board to define the right experience.
*   **Terminology** - Offering a glossary of the most common terms and phrases that are in use that might not be readily known by stakeholders, providing easy to find definitions for words that will be used across guidelines
*   **API Design** -  Articulating how the API surface each client library must have the most thought as it is the primary interaction that the consumer has with each service, defining the overall developer experience.
*   **Implementation** - Guidance for to actually begin implementing your SDKs once you have thoughtfully define the surface area of the API for the SDK, beginning to actually craft the intended language library SDKs.
*   **Documentation** - Providing details of what is required when it comes to delivering documentation to support all language client libraries, and that it includes a standard approach to delivering a README for the SDKs.
*   **Azure Core** - Defining the core set of libraries available that are used across all other client libraries providing shared libraries for common elements like HTTP, configuration, credentials, and other shared needs.
*   **Languages** - Azure SDK guidelines dictates that the following languages to be be implemented: Android, C, C#, Go, Java, Python, and Typescript. Providing a base of languages that are expected for all SDK implementations.

This outline provides a nice list of governance considerations when it comes to the primary areas of SDK development, providing the first draft of API SDK governance I’ve ever come across. Shining a light on the biggest areas of concern for Microsoft when it comes to delivering SDKs across the company at scale, and providing an open blueprint that other companies, organizations, institutions, and government agencies can consider as well.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/azure_sdk_governance_open_source_policies.png)

In addition to guidelines for some of the most common concerns, Azure sets forth actual policies that govern how SDKs are developed, delivered, and supported, giving the guidelines some actual governance teeth when it comes to what is expected. Providing policies in the following areas across ALL SDK being delivered for internal and external usage.

*   **Guideline Adoption** - Setting expectations when it comes to the adoption of the SDK guidelines.
*   **Open Source** \- Requiring that all SDKS be open sourced and managed via GitHub.
*   **Repository Structure** - Defining how GitHub repositories should be setup and operated.
*   **Repository Branching** - Outlining how the branching of SDK repositories will happen.
*   **Review Process** - Discussing the process involved with first time and ongoing reviews of SDKs.  
*   **Releases** - Governance for how SDKs are released in sync with the underlying API.

These policies provide an additional blueprint for other API providers to consider when it comes to reaching this level of API governance maturity, and working to standardize how API SDKs are delivered. The Azure SDK Guidelines provide one last area of guidance, providing a structured way to approach SDK namespaces, keeping the way in which each SDK, and the underlying resources and actions are defined. Keeping things much more coherent and organized as the number of SDKs grows, helping making libraries easy to search through and consumers are able to find what they need.

As I said, this is the first example of SDK governance I have come across in the wild. It is a positive sign when it comes to the overall API governance conversation. It shows the maturity of API governance at Microsoft who I worked with a couple years back to develop an API design governance guide for usage across teams, and now the SDK guidance shows they are working to govern other stops along the API life cycle. I’ll add it to my growing evidence of how API governance is being conducted across the enterprise. Adding to my API governance reference materials for helping companies, organizations, institutions, and government agencies better govern the APIs they are defining, designing, delivering, and supporting as part of their regular operations.
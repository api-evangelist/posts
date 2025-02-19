---
published: true
layout: post
title: >-
  Managing Multiple Versions of the UK Open Banking OpenAPIs in a Public API
  Workspace
image: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/managing-multiple-versions-of-the-uk-open-banking-openapis-in-a-public-workspace-1.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Workspaces
  - Standards
  - Financial
  - Banking
---
I pushing forward the documenting and certifying of UK public APIs in a public workspace. Historically I only had a single OpenAPI definition for each of the six public banking APIs, but as part of pushing forward my work I wanted to have multiple versions for each of the APIs. [The UK government mandates that all banks have each of the six public APIs following a common definition](https://www.openbanking.org.uk/), which provides the perfect set of APIs to demonstrate the possibilities of applying common industry API standards. However, to show the power of public API workspaces I needed to be able to show the change that occurs across each of the APIs being maintained over time.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/managing-multiple-versions-of-the-uk-open-banking-openapis-in-a-public-workspace-1.png)

This image shows four separate versions for the ATM locator API. I chose to only do version 2.0 of the API for now, and maybe once I have a little more bandwidth I will be able publish the older versions as well. Once I prove out some of the concepts I want to push forward I am looking to tell the change narrative that exists across each of the APIs since they were born. Before I move to far with my work I need to validate and certify each of the fifteen banks I have environments published for, helping me certify each bank’s API to the core OpenAPI specification.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/managing-multiple-versions-of-the-uk-open-banking-openapis-in-a-public-workspace-2.png)

[I downloaded the Swagger 2.0 files from the Open Banking UK wiki](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/16385802/Specifications), but then chose to upgrade them to OpenAPI 3.0 before I imported into Postman. The work I am doing involves using the OpenAPI 3.0 components object and some other capabilities that do not exist in 2.0 of the specification. Ideally, the official working group managing the specification would migrate to the current version of the spec, but I’ll address that as I work with them to help me take over [the public workspace for the UK public banking APIs](https://www.postman.com/api-evangelist/workspace/uk-public-banking/overview). I am looking to establish a suite of collections that can be used to validate Open Banking UK APIs for any of the bank implements, manually using Postman, scheduling on a regular basis via a monitor, or via CI/CD pipelines using the open source Newman command line runner. Providing me with another example of how common industry API standards can be certified by anyone using collections.
---
published: true
layout: post
title: The API Manifest Specification for Managing API Dependencies
tags:
  - Dependencies
  - Standards
  - Manifests
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/gone-with-the-wind-freeway-interchange-fence.jpeg
---
We regularly try to do the work to stay in tune with the good work coming out of the Internet Engineering Task Force (IETF). As part of this work we learned about the [API manifest standards proposal by Darrel Miller](https://darrelmiller.github.io/api-manifest/draft-miller-api-manifest.html). API manifest aims to be a declarative machine-readable format for describing the dependencies that our applications and integrations have on HTTP APIs. The API manifest intends to address a number of scenarios enterprises face when maintaining applications across many different APIs that power the functionality we depend on in applications.

- Generate a minimal set of client code that can be used to access the specified resources
- Define API subsets for API gateways
- Identify the scopes or roles that an application must be granted to be able to access those resources
- Use as Signed Statement in Trustworthy and Transparent Digital Supply Chains
- Perform dependency checks for updates to APIs in a similar way Dependabot tooling does for package dependencies
- Provide security alerts for APIs that have announced discovered vulnerabilities
- Describe the capabilities of a skill/plugin for a chat-based system

Dependency management is a real concern for enterprises. Even once you have done the work to properly survey and assess the API landscape and have published a catalog, you will still need to do the work to understand all of the dependencies that applications have on those APIs. The API Manifest format provides a useful way to begin tackling the dependencies that exist, and help you automate around those dependencies as listed above, but also potentially begin to unwind some of those dependencies as new versions of an application are developed.




---
layout: post
title: Using An OpenAPI Spec As Central Truth In Stakeholder Discussions
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openreferral_logo_green.png
atomdate: 2017-01-12T17:00:00.000Z
tags:
  - OpenAPI
  - Open
---
I am working with [Open Referral](https://openreferral.org/) to evolve the schema for the delivery of human services, as well as helping craft a first draft of the OpenAPI Spec for the API definition. The governing organization is looking to take this to the next level, but there are also a handful of the leading commercial providers at the table, as well other groups closer to the municipalities who are implementing and managing Open211 human service implementations.

[I was working with Open Referral on this before checking out this last summer](https://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/), and would like to help steward the process, and definition(s) forward further in 2017. This means that we need to speak using a common language when hammering out this specification and be using a common platform where we can record changes, and produce a resulting living document. I will be borrowing from existing work I've done on API definitions, schema, and scope across the API space, and putting together a formal process design specifically for the very public process of defining, and delivering human services at the municipal level.

I use [OpenAPI Spec (openapis.org)](http://openapis.org) as an open, machine readable format to drive this process. It is the leading standard for defining APIs in 2017, and now is officially part of the Linux Foundation. OpenAPI Spec provides all stakeholders in the process with a common language when describing the Open Referral in JSON Schema, as well as the surface area of the API that handles responses & requests made of the underlying schema.

[I have an OpenAPI Spec from earlier work](http://adopta-agency.github.io/open-referral-api/) on this project, with the [JSON version](http://adopta-agency.github.io/open-referral-api/api-commons/openapi-spec.json) of the machine-readable definition, as well as a [YAML edition](https://github.com/adopta-agency/open-referral-api/blob/gh-pages/api-commons/openapi-spec.yaml)\--OpenAPI Spec allows for JSON or YAML editions, which helps the format speak to a wider, even less technical audience. These current definitions are not complete agreed upon definitions for the human services specification, and are just meant to jumpstart the conversation at this point.

OpenAPI Spec provides us with a common language to use when communicating around the API definition and design process with all stakeholders, in a precise, and machine readable way. OpenAPI Spec can be used to define the master Open Referral definition, as well as the definition of each individual deployment or integration. This opens up the opportunity to conduct a "diff" between the definitions, showing what is compatible, and what is not, at any point in time.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/sponsor_logo_oai_print.jpg)

The platform I will be using to facilitate this discussion is Github, which provides the version control, "diff", communication, and user interactions that will be required throughout the lifecycle of the Open Referral specification. Allowing each path, parameter, response, request, and other elements to be discussed independently, with all history present. Github also provides an interesting opportunity for developing other tools, [like I have for annotating the API definition as part of the process](http://apis.json.annotation.apievangelist.com/\)).

This approach to defining a common data schema and API definition requires that all stakeholders involved become fluent in OpenAPI Spec, and JSON Schema, but is something that I've done successfully with other technical, as well as non-technical teams. This process allows us all to all be on the same page with all discussion around the Open Referral API definition and schema, with the ability to invite and include new participants in the conversation at any time using Github's existing services.

Once a formal draft API specification + underlying JSON schema for Open Referral is established, it will become the machine readable contract and act as a central source of truth regarding the API definition as well as the data model schema. It is a contract that humans can follow, as well as be used to drive almost every other stop along the API life cycle like deployment, mocking, management, testing, monitoring, SDKs, documentation, and more.

This process is not unique to Open Referral. I want to be as public with the process to help other people, who are working to define data schema, understand what is possible when you use APIs, OpenAPI Spec, JSON Schema, and Github. I am also looking to reach the people who do the hard work of delivering human services on the ground in cities and help them understand what is possible with Open Referral. Some day I hope to have a whole suite of server-side, and client-side tooling developed around the standard, empowering cities, organizations, and even commercial groups deliver human services more effectively.
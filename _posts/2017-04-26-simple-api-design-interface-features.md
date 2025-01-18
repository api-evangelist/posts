---
layout: post
title: Simple API Design Interface Features
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/restlet_api_design_studio.png
atomdate: 2017-04-26T19:00:00.000Z
tags:
  - Design
  - Features
---
I am on a quest to help improve and standardize the available [API design tooling](http://design.apievangelist.com/tools/) out there, and one aspect of doing this is spending time highlighting the API service providers who have interesting approaches to design embedded in their service.

Top of my list is [Restlet with their studio](https://studio.restlet.com). There are a couple of things going on in [Restlet Studio](https://studio.restlet.com) that I think are significant to the API design conversation, and would like to see become commonplace across service providers, and [possibly even part of some sort of open source offering](http://apievangelist.com/2015/08/13/a-common-open-source-api-design-editor-is-needed-for-api-service-providers/).

[Restlet Studio](https://studio.restlet.com) has a nice human interface for designing APIs. When you load up an API you are given a simple, clean, yet comprehensive user interface for adding and updating API paths, and other finer details of your design, no developer skills necessary--allowing anyone to step up and help define the API contract.

Next, when you look at the bottom of your API design in Restlet Studio you are given a design, OpenAPI 2.0, and RAML 1.0 view of your API, allowing you to switch from user interface to a machine-readable definition of the API contract in two leading formats. This API contract will continue to define your API at every stop along the life cycle, and it significantly helps that this contract is human readable in YAML and Markdown. All API design editors should abstract away as much as they possibly can regarding transformations between API definition formats (use the [API Transformer API](https://apimatic.io/transformer)).

I like Restlet's simple approach to delivering design tooling at the center of their platform. I'm keeping an eye on a variety of service providers who are innovating in this way, providing usable tooling when it comes to API design. If you are looking for other examples of this in the wild, take a look at [APIMATIC](https://apimatic.io) or [Stoplight](http://stoplight.io/)\--they are both designing high-quality API design interfaces and tooling. When crafting your own API design user interfaces make sure you take the time to study what is already out there, so that you are building on the best practices are in use, and not just reinventing the wheel when it comes to API design.

**Disclosure:** I am an advisor to [APIMATIC](https://apimatic.io), and [Restlet](http://restlet.com) is my partner.
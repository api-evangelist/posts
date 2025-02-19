---
published: true
layout: post
title: 'API Definition: WebConcepts.info'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_definitions_webconcepts_screenshot.png
author:
  name: kinlane
tags:
  - Web
  - Definition
---
[![](https://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_definitions_webconcepts_screenshot.png)](http://definitions.apievangelist.com/guide/)

_This is an article from the current edition of the [API Evangelist industry guide to API definitions](http://definitions.apievangelist.com/guide/). The guide is designed to be a summary of the world of API definitions, providing the reader with a recent summary of the variety of specifications that are defining the technology behind almost every part of our digital world._

Keeping up with the standards bodies like International Organization for Standardization (ISO) and Internet Engineering Task Force (IETF)  can be a full-time job. Thankfully,  Erik Wilde ([@dret](https://twitter.com/dret)) has help simply and made the concepts and specifications that make the web work more accessible and easier to understand, with his [WebConcepts.info](http://webconcepts.info) project.

According to Erik, “the Web’s Uniform Interface is based on a large and growing set of specifications. These specifications establish the shared concepts that providers and consumers of Web services can rely on. Web Concepts is providing an overview of these concepts and of the specifications defining them.” His work is a natural fit for what I am trying to accomplish with my API definition industry guide, as well as supporting other areas of my research.

One of the areas that slows API adoption is a lack of awareness of the concepts and specifications that make the web work among developers who are providing and consuming APIs. The modern API leverages the same technology that drives the web--this is why it is working so well. The web is delivering HTML for humans, and APIs are using the same to deliver machine-readable data, content, and access to algorithms online. If a developer is not familiar with the fundamental building blocks of the web, the APIs they provide, and the applications they build on top of APIs will always be deficient.

This project provides an overview of 28 web concepts with 643 distinct implementations  aggregated across five separate organizations including the International Organization for Standardization (ISO), Internet Engineering Task Force (IETF), Java Community Process (JCP), Organization for the Advancement of Structured Information Standards (OASIS), and the World Wide Web Consortium (W3C)--who all contribute to what we know as the web.  An awareness and literacy around the 28 concepts aggregated by Web Concepts is essential for any API developer and architect looking to fully leverage the power of the web as part of their API work.

After aggregating the 28 web concepts from the five standards organization, Web Concepts additionally aggregates 218 actual specifications that API developers, architects, and consumers should be considering when putting APIs to work. Some of these specifications are included as part of this API Definition guide, and I will be working to add additional specifications in future editions of this guide, as it makes sense. The goal of this guide is to help bring awareness, literacy, and proficiency with common API and data patterns, making use of the work Web Concepts project, and building on the web literacy work already delivered by Erik, just makes sense.

Web Concepts is published as a Github repository, leveraging Github Pages for the website. He has worked hard to make the concepts and specification available as JSON feeds, providing a machine-readable feed that can be integrated into existing API design, deployment, and management applications--providing web literacy concepts and specifications throughout the API life cycle.  All JSON data is generated from the source data, which is managed as a set of XML descriptions of specifications, with the build process based upon XSLT and Jekyll, providing multiple ways to approach all concepts and specifications, while maintaining the relationship and structure of all the moving parts that make up the web.

When it comes to the startup space, the concepts that make up the web, and the specifications that make it all work, might seem a little boring, something only the older engineers pay attention to.  Web Concepts helps soften, and make these critical concepts and specifications accessible and digestible for a new generation of web and API developers--think of them as gummy versions of vitamins. If we are going to standardize how APIs are designed, deployed, and managed--making all of this much more usable, scalable, and interoperable, we are going to have to all get on the same page (aka the web).

[Web Concepts](http://webconcepts.info/) is an open source project, and Erik encourages feedback on the concepts and specifications. I encourage you to spend time on the site regularly and see where you can integrate the JSON feeds into your systems, services, and tooling. We have a lot of work ahead of us to make sure the next generation of programmers have the base amount of web literacy necessary to keep the web strong and healthy. There are two main ways to contribute to the building blocks of the web: participate as a contributor to the standards body, or you can make sure you are implementing common concepts and specifications throughout your work, contributing to the web, and not just walled gardens and closed platforms.
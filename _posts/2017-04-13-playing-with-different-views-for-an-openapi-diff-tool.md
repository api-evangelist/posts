---
layout: post
title: Playing With Different Views For An OpenAPI Diff Tool
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_diff.png
atomdate: 2017-04-13T19:00:00.000Z
tags:
  - OpenAPI
  - Diff
  - Open
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_diff.png)](http://spec.open.referral.adopta.agency/definition/diff/)

[I am working on version 1.1 of the API definition for the human services data specification (HSDS)](http://spec.open.referral.adopta.agency/definition/diff/), and I needed some help articulating the differences between version 1.0 and 1.1, which are both defined using the OpenAPI 2.0 specification. I manage all of my OpenAPIs using Github, but I needed a friendlier way to show the diff between two JSON files, than what Github provides. I got to work on a version that would run using Liquid, that would work in Jekyll, which all my sites and tools run in.

I have a variety of API documentation tools that run on Github, so I wanted to develop an interface that showed two separate OpenAPI definitions side by side on a simple HTML page, so at this stage, I'm playing with different ways of showing the differences between paths, and other elements of the API definition. I'm not entirely happy with what I have, but I started applying a red DIFF label to any path that isn't represented in the previous API definition. It works well for helping me see which API endpoints have been added or changed in the latest version.

Currently, I am just looking to understand the differences in paths available, but I will be diff for headers, parameters, and other elements of the API definition. I'm worried about things getting too cluttered with bigger API definitions. I'm trying to keep things fast loading, and something I can work with non-developers on, so I want to be thoughtful about what I add, and how I add it to the layout. I'm looking to get a group of business users up to speed on where things are going with the spec, and encourage them to get more involved with future versions--so not scaring them off is an important part of this conversation.

I am finding Jekyll, Liquid, and HTML, with a little JavaScript when necessary to be a perfect medium for developing OpenAPI tooling on top of. It provides a simple, static, and a flexible way to craft API tooling, that can be forked by anyone. As my proficiency with Liquid evolves, I'm getting better at making it work with OpenAPI YAML which is mounted via Jekyll. With everything operating on Github, version control and API access to all my files are adding a valuable layer to my work. Now that I have several of these types of tools available, also I need to get more organized about how I'm evolving the code and maintaining a catalog of these offerings so that others can put to use in their API operations.
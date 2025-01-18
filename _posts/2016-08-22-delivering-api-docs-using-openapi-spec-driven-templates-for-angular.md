---
layout: post
title: Delivering API Docs Using OpenAPI Spec Driven Templates For Angular
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/REST_API_Documentation_-_Sandbox.png
atomdate: 2016-08-22T18:00:00.000Z
tags:
  - OpenAPI
  - Templates
  - Docs
  - Open
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/REST_API_Documentation_-_Sandbox.png)](https://getsandbox.com/docs/api/overview)

I have been talking with Nick Houghton over at [Sandbox](https://getsandbox.com/docs/api/overview) about the state of OpenAPI Spec driven API documentation, and [the lack of a machine-readable core when you deployed Slate driven documentation](http://apievangelist.com/2015/06/25/we-should-be-generating-slate-from-swagger-so-we-maintain-a-machine-readable-core/). He was wanting the same thing--a good looking, dynamic API documentation that was OpenAPI Spec driven.

He recently got back to me and found a solution that worked for them: _"[Ended up just templating the Swagger JSON myself rather than relying on Slate etc to do it. So model/resources are Swagger annotated, CI pushes out Swagger JSON and Angular UI](https://getsandbox.com/docs/api/overview)_ [parses](https://getsandbox.com/docs/api/overview) _[in the browser, works quite well I think](https://getsandbox.com/docs/api/overview)"._

Nick is on a similar path that I am, as [I work to simply API documentation using OpenAPI Spec](http://apievangelist.com/2016/03/08/playing-with-concepts-around-simplifying-the-api-docs-that-are-generated-using-api-definitions/), and [provide specialized views of APIs using Liquid](http://apievangelist.com/2016/04/09/providing-specialized-views-of-an-api-surface-area-dynamically-with-openapi-spec-and-liquid/). We are looking for the simplicity, control, and beauty of Slate, but the machine readable core of OpenAPI Spec--allowing us to keep the core specification for the API up to date, and the documentation is always the latest.

They are going to write up their journey on their blog (as all API service providers should), and share with us. I'll probably do another write-up once I get more details on how they created the templated API docs using OpenAPI Spec and Angular. I also like how they have the OpenAPI Spec JSON pushed out as part of the CI life-cycle--something I'll cover more as part of my [API life-cycle orchestration research](http://orchestration.apievangelist.com/).
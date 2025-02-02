---
layout: post
title: >-
  Considering The Hypothesis API Approach When Expanding The API Life Cycle
  Discussion
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/linkedin/the_hypothesis_api_the_hypothesis_annotation_framework.png
atomdate: 2016-09-12T18:00:00.000Z
tags:
  - Life Cycle
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/linkedin/the_hypothesis_api_the_hypothesis_annotation_framework.png)](http://h.readthedocs.io/en/latest/api/)

I have been playing around with different ways to [craft a web concepts and specification JavaScript library for API providers](http://apievangelist.com/2016/09/07/a-web-concepts-and-specifications-javascript-library-for-api-providers/), and one of the approaches I've been considering is out of the [annotation platform Hypothes.is](https://hypothes.is/). Their _"mission is to bring a new layer to the web"_ allowing anyone to _"discuss, collaborate, organize your research, or take personal notes"--_while I'm looking to bring a new layer to the world of APIs, allowing API providers to weave in important web concepts and specifications across their API portals and documentation.

[Hypothes.is has a simple API, allowing you to search, read, create, update, and delete annotations on any HTML page available at a public URL](http://h.readthedocs.io/en/latest/api/). This is exactly what I'd like to see done for any OpenAPI Spec JSON files, with my earlier [APIs.json Annotation work](http://apis.json.annotation.apievangelist.com/). While I am envisioning this new JavaScript API library existing more as a [tooltip](http://darsa.in/tooltip/) or [introduction](http://introjs.com/), I also like the approach Hypothes.is takes for annotation, and would like to figure when and where I might be able to weave it in.

As I was learning about the Hypothes.is API I noticed that there were annotated elements within the API documentation, which when I clicked on, popped up out my Hypothes.is browser toolbar, and displayed a discussion around the API documentation. Eventually I'd like to see [annotation discussions around the API design itself like I did with my annotation tool](http://apis.json.annotation.apievangelist.com/), about important web concepts and specs like available in [webconcepts.info](http://webconcepts.info/), as well as references to the API design guidelines like we see within the [API Stylebook](http://apistylebook.com/).

In theory, an API provider should just be able to embed a JavaScript library and provide key concepts and specs used across their API design, with references to the constraints defined by the platform's API guidelines, while also opening up a discussion around each available API path. While this is something that should be API provider induced, it might also be applied like Hypothes.is does. and injected into the browser layer, and controlled by the API community, as well as the provider. IDK

Anyhoo....just some considerations as I consider how the Hypothes.is API could be used to widen the API life cycle discussion, while also significantly contribute to web literacy and the sharing of healthy API design practices.
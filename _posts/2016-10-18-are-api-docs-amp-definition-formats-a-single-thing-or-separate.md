---
published: true
layout: post
title: Are API Docs &amp; Definition Formats A Single Thing Or Separate?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bw_splitter.png
author:
  name: kinlane
tags:
  - Definition
  - Docs
---
I was reading [a virtual panel: document and description formats for web APIs](https://www.infoq.com/articles/document-description-formats-web-apis), and thought the conversation was very productive when it comes to helping bring the world of API documentation and definitions into better focus. I encounter daily reminders that folks do not see the many dimensions of API definitions, and the role they play in almost every stop along the life cycle. This virtual panel helps move this discussion forward for me, providing some clarification for when it comes to the separation between API definitions and API documentation.

One of the questions asked of the panels was "Do you see API Documentation and Description formats as a single thing? Or multiple things?" Which I found Zdenek Nemec ([@zdne](https://twitter.com/zdne)) answer to be a great introduction for folks when it comes to understanding the importance of this separation:

_There are definitely two different things. But truth be told, the initial incentive for the use API description formats was definitely the vision of API documentation without much work. However, the tide is turning as more and more people are discovering the benefits of the upfront design, API contracts, and quick prototyping_

Many people still see machine readable definitions as purely something that drives API documentation. OpenAPI Specs are just for deploying Swagger UI, and API Blueprint is just for using Apiary. When in reality, the why and how you are doing API definitions is much, much deeper. As Z from Apiary points out, it is key to the API design and prototyping process, and critical to establishing the API contract.

Realizing that crafting machine readable API definitions is not just about API documentation, and that it is essential to establishing a meaningful technical, business, and legal contract internally, with partners, and maybe the public, early on in this API life cycle is empowering. I would say that I didn't fully appreciate API design, and understanding the depth of it until I had OpenSpec providing me with a scaffolding to hang things on.

Anyways, [it is a great conversation from some very smart folks over at InfoQ](https://www.infoq.com/articles/document-description-formats-web-apis), I recommend heading over and spending time absorbing it. I'm leaving open for a week and rereading until it all sinks in.
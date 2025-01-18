---
layout: post
title: >-
  Using My APIs.json Annotation Tool To Drive An API Design Conversation Via
  Github Issues
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-json-annotation.png
author:
  name: kinlane
date: 2016-04-23T18:08:54.000Z
tags:
  - My
  - Github
  - Design
  - Issues
  - APIs.json
  - APIs
  - APIs.jso
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/apis-json-annotation.png)](http://apis.json.annotation.apievangelist.com/)

I am working on [one possible API definition for the Human Services Definition Specification (HSDS)](http://apievangelist.com/2016/04/09/playing-with-one-possible-openapi-spec-for-the-human-services-data-specification-hsds/), and the next phase of this work involves bringing in a small group of technical, and non-technical folks to have discussions around their API designs, in context of the master specification I am looking to pull together. 

To help drive the discussion I am wanted to use the [OpenAPI Specification that I created for HSDS](http://adopta-agency.github.io/open-referral-api/api-commons/openapi-spec.json), and I also knew I wanted to use Github issue management to help keep track of the synchronous, and asynchronous conversation that would occur around it. However Github tends to have a perceived barrier to entry for many non-developers (which I don't fully get), so I wanted to leverage the platform, but also soften the way everyone discussed the overall specification, as well as each individual endpoint.

The HSDS specification is pretty verbose, and I needed a way to have conversations at the high level, but also down to the endpoint level. To help facilitate this, I got to work on a [prototype micro tool which enables a conversation around any API(s) that are indexed within an APIs.json file](http://apis.json.annotation.apievangelist.com/), producing a human readable list of endpoints, parameters, etc., but then uses Github issue management as the core of the conversation. 

Resulting in [my APIs.json Annotation tool](http://apis.json.annotation.apievangelist.com/). It is just a first draft, so there will be a lot of changes that need to occur. I'm going to test it against 20+ APIs.json collections I have defined as part of [my API Stack](http://theapistack.com) work to try and harden it a little bit. My APIs.json Annotation tool runs in my single repo app style, leveraging Jekyll + Github Pages + Github API to operate--Github is the front and backend.

Anyone can view the conversation, but if you want to participate you have to be added to the Github repository, and pass in a [Github personal token](https://github.com/settings/tokens). This is something I often automate with a simple Github login, where I use [OAuth.io to obtain token](http://OAuth.io), but I kind of see the token as a minimum viable investment to understanding Github for using each tool.

It is really important to me that each app stands on its own feet. Not all of my micro tools that I develop in this way will enjoy zero outside dependencies, but most of them can be easily forked, and ran in any Github user account or org (with little or no setup). Conversations around API is just one area I am looking to simulate with this approach to delivering tooling, and specifically APIs.json tooling, that can be used throughout an API life cycle. 

You are welcome to play with [the APIs.json Annotation](http://apis.json.annotation.apievangelist.com/), or any [of the other tools I have listed on my home page](http://apievangelist.com). I will keep adding them here, so that they can be found, but like all my work they are all a work in progress. [Each tool has its own dedicated repo and issue management](https://github.com/api-evangelist-tools), where you are welcome to join in the conversation around the road map for each one. I am just looking to develop a robust toolbox of small micro tools that will help be more successful across the life cycle of the APIs I am working on, but maybe you can benefit using them too.
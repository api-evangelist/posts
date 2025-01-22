---
published: true
layout: post
title: API Drift Occurs Because You Are Not Precise With Requirements
tags:
  - Drift
  - OpenAPI
  - JSON Schema
  - APIs.json
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-sailboat-under-bay-bridge.jpeg
---
There is a lot of talk about API drift in the tech blogosphere and from API service providers. API drift is what occurs between the moment you craft the business requirements for an API to the moment it is pushed into production and made available for consumers. API drift refers to how close or how far away the original API requirements are from what is accessible in production. API drift can happen over the course of developing a single version of an API as well as multiple versions of an API. There are many reasons that will contribute this depending on how an enterprise produces APIs, but here are the most common contributors.

- **Communication** - Product and engineering teams do not talk, have a relationship, and engage in any precise way.
- **JSON Schema** - There is no common way to describe the digital objects between product and engineering groups.
- **OpenAPI** - There is no common way to describe access to digital objects between product and engineering groups.
- **Documentation** - Documentation is not generated from machine-readable and agreed upon contracts between groups.
- **Testing** - There is no agreed upon and shared way to test the request and responses of the API being produced.

All of this speaks to a lack of precision and specifically an agreed upon and negotiated machine-readable contract that adequately describes the requirements. API product stakeholders often lack the ability to precisely articulate their needs in a machine-readable way that can be used to guide, verify, and align the development of an API over time—-resulting in increased drift from inception to production. A lot of energy gets spent on API contracts helping align API producers and consumers, but first and foremost API contracts can help product and engineering stakeholders get aligned as they begin producing APIs, maintaining alignment and minimizing drift over each iteration of an API.



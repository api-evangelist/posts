---
layout: post
title: Harmonizing API Definitions Across Government With The U.S. Data Federation
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/usdf_logo.png
atomdate: 2016-10-07T18:00:00.000Z
tags:
  - Definitions
  - Data
  - Government
  - Definition
  - Federation
---
Sharing of [API definitions](http://definitions.apievangelist.com/) is critical to any industry or public sector where APIs are being put to work. If the API sector is going to scale effectively, it needs to be reusing common patterns, something that many API and open data providers have not been that great at historically. While this is critical in any business sector, there is no single area where this needs to happen more urgently than within the public sector.

I have spent years trying wade through the volumes of open data that comes out of government, and even spent a period of time doing this in DC for the White House. The lack of open API definition formats like [OpenAPISpec](https://openapis.org/specification), [API Blueprint](http://apiblueprint.org), [APIs.json](http://apisjson.org), and [JSON Schema](http://json-schema.org/) across government is a passion of mine, so I'm very pleased to the new [US Data Federation](http://federation.data.gov/) project coming out of the General Services Administration (GSA).

"The U.S. Data Federation supports data interoperability and harmonization across Federal, state, and local government agencies by highlighting common data formats, API specifications, and metadata vocabularies."

The U.S. Data Federation has focused in on some of the existing patterns that exist in service of the public sector, including seven existing initiatives:

*   Building & Land Development Specification
*   National Information Exchange Model
*   Open Referral
*   Open311
*   Project Open Data
*   Schema.org
*   The Voting Information Project

I am a big supporter of [Open Referral,](http://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/) [Open311](http://open311.org), Project Open data, and [Schema.org](http://schema.org.apis.apievangelist.com/). I will step up and get more familiar with the building & land development specification, national information exchange model, and the voting information projects. The US Data Federal project echoes the work I've been doing with [Environmental Protection Agency (EPA) Envirofacts Data Service API](http://apievangelist.com/2015/07/25/taking-a-look-at-whats-next-for-the-environmental-protection-agency-epa-envirofacts-data-service-api/), [Department of Labor APIs](http://apievangelist.com/2016/09/26/taking-another-look-at-the-department-of-labor-api-efforts/), [FAFSA API](https://github.com/ed-data/fafsa-api), and my general [Adopta.Agency](http://adopta.agency) efforts.

Defining the current inventory of government APIs and open data using OpenAPI Spec, and indexing the with APIs.json is how we do the hard work of identifying the common patterns that are already in place and being used by agencies on the ground. Once this is mapped out, we can begin the long road towards defining the common patterns that could be proposed as future initiatives for the US Data Federation. I think the project highlights this well [on their about page](http://federation.data.gov/about/):

 "These examples will highlight emerging data standards and API initiatives across all levels of government, convey the level of maturity for each effort, and facilitate greater participation by government agencies."

The world of API definitions is a messy one. It may seem straightforward if you are a standards oriented person. It may also seem straightforward if you are a scrappy startup person. In reality, the current landscape is a tug of war between these two words. There are a wealth of existing web API concepts, specifications, and data standards available to us, but there are also a lot of leading definitions being defined by tech giants like Amazon, Google, Twitter, and others. With the tone set by VC investment, and distorted views on what intellectual property is, the sharing of open API definitions and schemas has been deficient across many sectors, for many years.

What the GSA is doing with the [US Data Federation](http://federation.data.gov/) project is important. They are mapping out the common patterns that already exist, and providing a forum for helping identify others, as well as to help evolve the less mature, or disparate API and schema patterns out in the wild. A positive sign that they are heading in the right direction is also that [the US Data Federation project is operating on Github](https://github.com/GSA/us-data-federation). It is important that these common patterns exist on the social coding platform, as it's increasingly being used as an engine for the API economy--touch all stops along the API life cycle.

I will carve out the time to go through some of my existing government open data work, which includes rebooting [my Open Referral leadership role](http://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/). I'm finding that just doing the hard work crafting OpenAPI Specs for government APIs is a very important piece of the puzzle. We need a machine-readable map of what already exists, otherwise, it is very difficult to find a way forward in the massive amounts of government open data available to us. However, I believe that when you take these machine readable API definitions and put them on Github, it becomes much easier to find the common patterns that the GSA is looking to define with [US Data Federation](http://federation.data.gov/).
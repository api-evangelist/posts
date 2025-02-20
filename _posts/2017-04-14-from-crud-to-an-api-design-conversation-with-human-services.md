---
layout: post
title: From CRUD To An API Design Conversation With Human Services
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/human_services_data_specification_discussion.png
atomdate: 2017-04-14T16:00:00.000Z
tags:
  - Design
  - Human Services
  - CRUD
  - Services
---
I am working to take an existing API, built on top of an evolving data schema, and move forward a common API definition that 211 providers in cities across the country can put to use in their operations. The goal with the [Human Services Data Specification (HSDS) API specification](https://openreferral.github.io/api-specification/definition/) is to encourage interoperability between 211 providers, allowing organizations to better deliver healthcare and other human services at the local and regional level.

So far, [I have crafted a v1.0 OpenAPI derived from an existing Code for America project called Ohana](https://openreferral.github.io/api-specification/definition/v10/), as well as [a very CRUD (Create, Read, Update, and Delete) version 1.1 OpenAPI](https://openreferral.github.io/api-specification/definition/), with [a working API prototype for use as a reference](http://developer.open.referral.adopta.agency/). I'm at a very important point in the design process with the HSDS API, and the design choices I make will stay with the project for a long, long time. I wanted to take pause and open up a conversation with the community about what is next with the APIs design.

I am opening  up the conversation around some of the usual API design suspects like how we name paths, use headers, and status codes, but I feel like I should be also asking the big questions around use of hypermedia API design patterns, or possibly even GraphQL--a significant portion of the HSDS APIs driving city human services will be data intensive, and maybe GraphQL is one possible path forward. I'm not looking to do hypermedia and GraphQL because they are cool, I want them to serve specific business and organizational objectives.

To stimulate this conversation I've created some Github issues to talk about the usual suspects like [versioning](https://github.com/adopta-agency/open-referral-spec/issues/8), [filtering](https://github.com/adopta-agency/open-referral-spec/issues/11), [pagination](https://github.com/adopta-agency/open-referral-spec/issues/10), [sorting](https://github.com/adopta-agency/open-referral-spec/issues/12), [status & error codes](https://github.com/adopta-agency/open-referral-spec/issues/3), but also opening up threads specifically for [hypermedia](https://github.com/adopta-agency/open-referral-spec/issues/7), and [GraphQL](https://github.com/adopta-agency/open-referral-spec/issues/9), and [a thread as a catch-all for other API design considerations](https://github.com/adopta-agency/open-referral-spec/issues/13). I'm looking to stimulate a conversation around the design of the HSDS API, but also develop some API design content that can help bring some folks up to speed on the decision-making process behind the crafting of an API at this scale.

HSDS isn't just the design for a single API, it is the design for potentially thousands of APIs, so I want to get this as right as I possibly can. Or at least make sure there has been sufficient discussion for this iteration of the API definition. I'll keep blogging about the process as we evolve, and settle in on decisions around each of these API design considerations. I'm hoping to make this a learning experience for myself, as well as all the stakeholders in the HSDS project, but also provide a blueprint for other API providers to consider as they are embarking on their API journey, or maybe just the next major version of its release.
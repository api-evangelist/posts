---
layout: post
title: API Definitions, Documentation And Hypermedia
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/swingingbridge_blue_circuit.jpg
atomdate: 2017-02-06T23:00:00.000Z
tags:
  - Definitions
  - Hypermedia
  - Documentation
  - Definition
---
[I wrote about what is at stake with API definitions currently and someone made a thoughtful comment on the importance of continuing to discuss hypermedia amidst all of this](https://apievangelist.com/2017/01/25/what-is-at-stake-with-api-definitions-at-the-moment/#comment-3128000440)\--I agree. I've long been an advocate for OpenAPI Spec and API Bueprint as a bridge from where we are, to where we need to be, getting us closer to the world hypermedia folks think we should have. I'd love it if every API allowed for content negotiation using one of the major hypermedia formats like HAL, Collection+JSON, or JSON-LD, but unfortunately, we have a lot of education and training ahead of us before we'll get there.

A combination of APIs.json for discovery, and OpenAPI Spec for defining the request and response structure of an API can seem clunky compared to the elegant (hopefully) design of a hypermedia API, but not every API architect has the know-how, or the time and resources to always do things properly. This doesn't mean that we shouldn't strive for a better future, but it just isn't always a reality on the ground, and as easy to achieve as many hypermedia believers might envision.

As the momentum picks up with API specification formats like OpenAPI, as well as the services and tooling popping up in the ecosystem we must have to keep an eye out for opportunities to make sure the bridge continues being extended to accommodate linking, relationships, and the other benefits hypermedia design patterns bring to the table. [OpenAPI Spec 3.0 gives a slight nod towards what I'm talking about with the ability to add some basic linking](http://apievangelist.com/2017/01/25/the-openapi-specification-version-30-highlights/)\--it falls short of true hypermedia flows, but it is one more step on the bridge I'm talking about.

Technology has this amazing effect on us, that we either get too caught up in the future and forget the past, or even ignore the present, but I feel like OpenAPI Spec and other definitions are having the opposite effect where we forget the future, as well as the past in favor of the present, and what is going on now. I'm a fan of making sure we address the world we have, but I'm also going to be working to pull my head up and keep thinking about how we keep weaving in the benefits of hypermedia into the definitions, and tooling we are developing to meet the current demands of the API space.

I know that many folks feel that APIs do not need documentation and some of the other common tooling being developed on top of OpenAPI Specs, but think we underestimate peoples ability to grasp what an API does, and their ability to go from discovery to integration. I am playing with different ways to think about interactive documentation using OpenAPI Spec, and some of these docs apply to APIs that have multiple media types available, including some Siren editions--I am going to take a look at what possibilities there are for bridging this current divide, especially as I'm playing with OpenAPI Spec 2.0 some more.
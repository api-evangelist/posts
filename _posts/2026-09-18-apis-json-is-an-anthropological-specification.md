---
published: true
layout: post
title: 'APIs.json Is An Anthropological Specification'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/apis-json-is-an-anthropological-specification.png
date: 2026-09-18
author: Kin Lane
tags:
  - APIs.json
  - Specifications
  - Discovery
  - Kin Score
  - APIs.io
  - Storytelling
  - APIs
---
I have been working on my [APIs.json](https://standards.apievangelist.com/store/apis-json/) specification since 2014. The specification hasn't been a smashing success like [OpenAPI](https://standards.apievangelist.com/store/openapi/), [JSON Schema](https://standards.apievangelist.com/store/json-schema/), [AsyncAPI](https://standards.apievangelist.com/store/asyncapi/), or [MCP](https://standards.apievangelist.com/store/model-context-protocol/). That is fine. Honestly, I don't think most engineers care about API discovery, and most movers and shakers haven't spent the time to understand what APIs.json is. It is adopted by hundreds of providers, and I have implemented it for thousands of providers. It has been used by a handful of tools like SwaggerHub and Kiota, and was considered originally as part of the IETF API Catalog specification--although they have moved beyond it, and it's more of a footnote.

The state of APIs.json is fine by me. I've seen more adoption with the recent launch of [APIs.io](https://apis.io), so its adoption is finally expanding. This is secondary to me. For me, the value of APIs.json is as an anthropological specification. APIs.json by design is loose, rather than opinionated like the other specifications are. It is a mapping solution, more than a discovery solution. It's designed for mapping the messy world we have, rather than dictating what should be in any opinionated way--then trying to move things in a sensible direction. APIs.json properties have two distinct modes, human-readable and machine-readable, with the goal of always trying to shift the human-readable into machine-readable, while mapping the surface area of the API operations within a domain.

APIs.json provides a machine-readable manifest of one or many APIs, the properties of those APIs, and the common properties across those APIs. The goal is to take things like human-readable HTML documentation for an API and translate it into a machine-readable OpenAPI property. But doing this for all of the meaningful properties of the APIs within any given domain. This map of API operations--what is mapped, as well as what is not mapped--provides an understanding of the maturity of an API within any given domain. I use the [Kin Score](https://apis.io/rating/) to size up this surface area that we have mapped. The Kin Score + APIs.json provides me with a map of the programmability of a domain, for both humans and agents. It also tells me a lot about the humans behind an API. What their priorities are. And where they are at in their overall API journey. Over time, I can understand the velocity of that journey.

This makes APIs.json an anthropological specification. I'm not just mapping APIs. I am mapping the human beans behind them and in the cracks. I am measuring the programmability of the surface area of each company, institution, organization, and government agency, and the domains in which they operate. I am looking for [stories](https://apievangelist.com/2026/09/18/api-specifications-are-living/). Because in this hyper-financialized world we find ourselves in, that is all that matters. It is all that mattered before. But stories really matter now. Stories are how we identify the ongoing signal in the noise. Stories are how we find the value. Stories are how we share what matters, and what doesn't. Stories are how you balance the human beans with machines. Stories are how we make sense of all of this. We just need some maps to help us find our way inside the machinery we've set loose around the globe.

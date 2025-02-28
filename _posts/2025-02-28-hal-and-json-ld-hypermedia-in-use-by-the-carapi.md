---
published: true
layout: post
title: HAL and JSON-LD Hypermedia in Use By the CarAPI
tags:
  - Hypermedia
  - HAL
  - JSON-LD
  - Linked Data
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/american-dream-fundamental-kin-poppy-car.jpeg
---
Hypermedia is an API design pattern born out of the web and had its heyday between 2008 and 2014-ish, but received significant push back from API producers in the face of some very smart and well-meaning Hypermedia API believers pushing the concept. API Evangelist helped drive a lot of these conversations and worked to highlight some of the leading hypermedia formats, but the buzz around the specification faded over time. This doesn’t mean that it isn’t used and the concept isn’t viable, and with renewed energy around [Arazzo workflows](https://bit.ly/4k8Epmj) and AI agents, we see hypermedia popping up once again. As we’ve done for years, anytime we come across a hypermedia API in the wild we try to document it to help provide more evidence of its use, and [today’s reference is the CarAPI](https://carapi.app/docs/0), which supports the negotiation of the following three media types.

- application/json (recommended)
- application/ld+json
- application/hal+json

The (recommended) was copy and pasted from their documentation and left there because it is interesting that that is the default. It is also interesting that they support both JSON-LD and HAL. I consider HAL to be the simpler hypermedia format, but JSON-LD is very robust and has a powerful semantic layer. If you want a fresh reminder of what Hypermedia is all about I recommend [Wherefore HATEOAS by David Biesack](https://apidesignmatters.substack.com/p/wherefore-hateoas)-—it sums it much better than I could. In short, hypermedia reflects how we humans use the web and attempts to bring some of those affordances to the programmatic realm. I support the usage of hypermedia because it forces API producers to be more thoughtful about API design and deeply consider how their resources will actually be put to work, while embracing HTTP, media-types, and other essential Internet standards.

<center><a href="https://carapi.app/docs/0"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/carapi-screenshot.png" style="width: 100%;"></a></center>

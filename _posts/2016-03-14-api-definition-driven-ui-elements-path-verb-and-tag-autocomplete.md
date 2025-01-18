---
layout: post
title: 'API Definition Driven UI Elements: Path, Verb, And Tag Autocomplete'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/sms-apisjson-autocomplete.png
tags:
  - Definition
---
I was experimenting with breaking apart [API definitions](http://definitions.apievangelist.com/) over the weekend, and exploring different ways of assembling the moving parts into different types of tools, visualizations, and other goodies. I do not have any particular objective with this work, other than just pushing the boundaries of we dynamically tell the story of our APIs, and hopefully assist in moving forward the current available API documentation toolbox we have for API providers, and consumers.

[Yesterday I published a short piece on API definition driven tag clouds](http://apievangelist.com/2016/03/13/api-definition-driven-visualizations-verb-tag-clouds/), and this morning I have an API definition driven autocomplete text box, providing access to the paths, verbs, or tags present in any single, or multiple OpenAPI Specs that are indexed using APIs.json.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/sms-apisjson-autocomplete.png)](http://sms.stack.network/apisjson/autocomplete/)

This particular edition of the [API.json and OpenAPI Spec autocomplete](http://sms.stack.network/apisjson/autocomplete/) pulls across the [SMS API providers included in my SMS API research](http://sms.stack.network/apis/), but is something that will be available for any of my research areas, as part of my ever evolving set of APIs.json tooling. I will be building these into my own custom API design tooling, allowing me to quickly recall [the hundreds of endpoints available in my API stack](http://developer.kinlane.com/), as well as learn about [additional API endpoints available in the 3rd party APIs I already depend on](http://stack.apievangelist.com/companies.html).

I am going to also play with how I can use across the documentation of the APIs that I include in my research. Ultimately I would like to see these types of solutions available as a suite of UI, and UX tools in my overal API driven, hacker storytelling toolbox, allowing me to better tell stories around what APIs can do.
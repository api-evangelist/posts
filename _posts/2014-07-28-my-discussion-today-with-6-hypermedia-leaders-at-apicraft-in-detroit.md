---
layout: post
title: My Discussion Today With 6 Hypermedia Leaders At API-Craft in Detroit
image: >-
  https://s3.amazonaws.com/kinlane-productions2/events/api-craft/api-craft-logo.png
author:
  name: kinlane
tags:
  - My
  - Hypermedia
---
[![](https://s3.amazonaws.com/kinlane-productions2/events/api-craft/api-craft-logo.png)](http://api-craft.org/)

I'm preparing for my hypermedia panel at [API Craft Detroit](http://api-craft.org/) today. The API Craft organizers have brought together one of the most important line-ups, when it comes to the hypermedia API discussion, that I've ever seen. To prepare for the discussion,  I've spent time profiling each of the panelist, to help me, and hopefully you, better understand who they are:

*   [Mike Amundsen](http://apievangelist.com/2014/07/24/getting-to-know-mike-amundsen-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@mamund](https://twitter.com/mamund))
*   [Mike Kelly](http://apievangelist.com/2014/07/25/getting-to-know-mike-kelly-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@mikekelly85](https://twitter.com/mikekelly85))
*   [Steve Klabnik](http://apievangelist.com/2014/07/26/getting-to-know-steve-klabnik-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@steveklabnik](https://twitter.com/steveklabnik))
*   [Kevin Swiber](http://apievangelist.com/2014/07/27/getting-to-know-kevin-swiber-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@kevinswiber](https://twitter.com/kevinswiber))
*   [Jørn Wildt](http://apievangelist.com/2014/07/28/getting-to-know-jrn-wildt-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@JornWildt](https://twitter.com/JornWildt))
*   [Markus Lanthaler](http://apievangelist.com/2014/07/27/getting-to-know-markus-lanthaler-for-the-api-craft-2014-detroit-hypermedia-panel-) ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler))

These six hypermedia leaders, spend their time discussing hypermeida on the [API-Craft forum](https://groups.google.com/forum/#!forum/api-craft), but it isn't just talk, each of the panelsts have each also contributed their formats and tooling to the discussion, resulting in 9 separate hypermedia formats to consider:

*   Collection+JSON - [http://amundsen.com/media-types/collection/format/](http://amundsen.com/media-types/collection/format/)
*   UBER - [https://rawgit.com/mamund/media-types/master/uber-hypermedia.html](https://rawgit.com/mamund/media-types/master/uber-hypermedia.html)
*   ALPS - [http://alps.io/](http://alps.io/)
*   HAL - [http://stateless.co/hal\_specification.html](http://stateless.co/hal_specification.html)
*   Siren - [https://github.com/kevinswiber/siren](https://github.com/kevinswiber/siren)
*   Hydra - [http://www.markus-lanthaler.com/hydra/](http://www.markus-lanthaler.com/hydra/)
*   JSON-LD - [http://json-ld.org/](http://json-ld.org/)
*   json:api - [http://jsonapi.org/](http://jsonapi.org/)
*   Mason - [https://github.com/JornWildt/Mason](https://github.com/JornWildt/Mason)

To help guide the conversation, I've asked each panelists to give me two things that they want the audience at API Craft to walk away with:

*   adding hypermedia to an API is a way to improve the API's usability ([@mamund](https://twitter.com/mamund))
*   the more hypermedia information in a response, the more stateless that response can be ([@mamund](https://twitter.com/mamund))
*   Hypermedia allows us to go beyond CRUD-influenced API design, enabling a task-based message design consisting of current resource state and available transitions. This provides a richer interaction model between client and server. ([@kevinswiber](https://twitter.com/kevinswiber))
*   The best way to improve the state of the art is to see hypermedia applied to more use cases and have feedback shared publicly with the community. ([@kevinswiber](https://twitter.com/kevinswiber))
*   What are the metrics of success for your API? How do hypermedia designs contribute to or detract from those metrics? ([@mikekelly85](https://twitter.com/mikekelly85))
*   Is adding links to a response enough? ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler))
*   What are the benefits of adding HTTP method and payload encoding information to links - aka forms/actions for APIs? What are the problems? Is it worth it? ([@JornWildt](https://twitter.com/JornWildt))
*   Are more complicated media types, that require more than an HTTP library and a JSON parser to deal with, moving away from the "simplicity" that has been driving web API adoption over SOAP? ([@mikekelly85](https://twitter.com/mikekelly85))
*   Does adding hypermedia really help if the data itself can't be understood without out-of-band knowledge? ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler))
*   What are the pros and cons of moving hypermedia controls to a separate, machine-readable document (API descriptions) compared to embedding them directly in resource representations? ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler))
*   How would an ideal hypermedia client library look like? ([@MarkusLanthaler](https://twitter.com/MarkusLanthaler))
*   People often have a knee jerk reaction to dismiss hypermedia APIs as a complex approach to API design. What is your three sentence pitch to convince these people that it is not overkill, and in fact can be a simpler approach over time? ([@MattMcLartyBC](https://twitter.com/MattMcLartyBC))

If you have any questions you'd like to have asked, I have the list on a [Github repository dedicated to the event](https://github.com/kinlane/api-craft-hypermedia-panel-detroit-2014). You are welcome to do a pull request on the list, or leave as an issue for the repository, and I will consider including in the conversation. 

The panel kicks off today around 1PM (we may start late, as some panelists hit flight troubles), and the [conversation is being live streamed via UStream](http://www.ustream.tv/channel/api-craft).
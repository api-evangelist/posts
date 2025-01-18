---
layout: post
title: >-
  What We Can Do To Make A Difference In The Wake Of Oracle v Google API
  Copyright Case
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-architecture/api-architecture-three.png
author:
  name: kinlane
tags:
  - Copyright
  - Diff
  - Oracle
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-architecture/api-architecture-three.png)](http://apievangelist.com/2014/12/21/making-sure-the-most-important-layers-of-api-space-stay-open/)

While we wait for the next steps of the long drawn out Oracle v Google Java API copyright battle, I wanted to take some time and talk about what we can all be doing to actually make a difference. If you aren't familiar with the legal case, is a legal dispute related to Oracle's copyright and patent claims on Google's Android operating system. The court case started in California courts in 2012, with the rmost recent verdict coming in May, 2014, where the [Federal Circuit](https://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Federal_Circuit "United States Court of Appeals for the Federal Circuit") partially reversed the district court ruling, ruling in Oracle's favor on the copyright-ability issue, and [remanding](https://en.wikipedia.org/wiki/Remand_\(court_procedure\) "Remand (court procedure)") the issue of fair use to the district court. 

While we wait for appeals, endure the continued discussion, and read the trickle of FUD that comes out from the tech press, what can the tech community actually do to make a difference? First, we can reduce our anxiety about this being hellfire and brimstone for the current web API movement. The Oracle v Google legal battle is  focused on Java APIs, which are a different beast than a web API, and it would take another legal case to actually set a precedent that copyright applies to web APIs--when this happens, I will be showing up with my Internet of Things enabled pitchfork, and torch. 

When it comes to actually making a difference, you can openly license and share your existing API designs. If you think copyright applies to APIs, publish them [CC-BY](https://creativecommons.org/licenses/by/2.0/), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), or [other Creative Commons license](https://creativecommons.org/publicdomain/zero/1.0/)\--something you can link to using [API Commons](http://apicommons.org/). If you do not think copyright applies to APIs, apply whichever licensing stance you feel is relevant. The important part is that we share how our APIs licensed, accompanied with machine readable API definitions that can act as a representation of what is covered by a license. 

Your web API definitions are the recipes for your digital resources, and machine readable API definition formats like Swagger and API Blueprint are how we describe our recipes in a machine readable way. This isn't your secret sauce--how you execute on this recipe is your secret sauce. The name, and ordering of your recipe is how you communicate on the menu that is your developer portal, where you will be cook'n up an assortment of API driven dishes. How you operate your business, and deliver on your recipes is what you should be protecting, not the way you define, and communicate what you do as an API driven business. 

Openly sharing the definitions of our APIs, that we operate on the Internet, is a meaningful action we can take in response to the Oracle v Java copyright case, but an action that goes so much further in helping also make the API space better. Sharing machine readable definitions of the recipes that are our APIs, using formats like [Swagger](http://swagger.io/) and [API Blueprint](http://apiblueprint.org/), embracing media types like [Collection+JSON](http://amundsen.com/media-types/collection/format/) and [Siren](https://github.com/kevinswiber/siren), using common data formats like [JSON API](http://jsonapi.org/), and wrapping it all up as an [APIs.json collection](http://apisjson.org/), will help us evolve beyond the bespoke API space we currently have. 

Copyright is lower down on the list of obstacles we face in the API economy. There are numerous interoperability, reusability, and scalability issues that are much bigger threats than a far off Java API copyright battle. We can take all of these challenges head on by using existing API definition formats, media types, and data models when designing, deploying, and managing our APIs. If we do this, any future API copyright battle will never even take root, in a world where open formats, source, and API patterns will rule.

Please work with me to contribute to this world, rather than giving fuel to one possible dystopian world suggested by Oracle.
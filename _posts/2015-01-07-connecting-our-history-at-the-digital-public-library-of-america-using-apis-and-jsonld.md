---
layout: post
title: >-
  Connecting Our History At The Digital Public Library of America Using APIs And
  JSON-LD
sourceurl: >-
  http://apievangelist.com/2015/01/07/connecting-our-history-at-the-digital-public-library-of-america-using-apis-and-jsonld/
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/digital-public-library-of-america/DPLA_logo.jpg
author:
  name: kinlane
tags:
  - Public
  - JSON
  - JSON-LD
  - History
  - Digital
  - APIs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/digital-public-library-of-america/DPLA_logo.jpg)](http://dp.la/)

If I had to pick one API that I worship the ground they walk on, and yet for some insane reason I don’t write about very often—it would be the [Digital Public Library of America](http://dp.la/). I can go on for days about how important the work that DPLA does. If you aren’t up to speed on DPLA, "The Digital Public Library of America brings together the riches of America’s libraries, archives, and museums, and makes them freely available to the world”—via APIs! ;-)

I’m a history lover, so DPLA is extremely interesting, but what they do is so much more important to society at-large, an area that very few APIs can achieve. I am making an extra effort to publish more DPLA stories on API Evangelist, not just because they need it, but also because their approach to APIs is extremely forward thinking and relevant.

First DPLA story out of my writers notebook is about their use of [JSON-LD](http://json-ld.org/). First off, what is JSON-LD?

> _[JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale.](http://json-ld.org/)_

So why does DPLA uses JSON-LD? I like their explanation on the [DPLA technologies page](http://dp.la/info/developers/codex/policies/technologies/):

> _[Everyone likes JSON, but it’s not great for every purpose. Pointing from one JSON object to another is a good example (because we do that a lot). So we use JSON-LD. No worries – it’s still JSON. It’s just got a couple of standardized fields.](http://dp.la/info/developers/codex/policies/technologies/)_

When you are weaving together artifacts from “america’s libraries, archives, and museums”, then providing access as linked data and via APIs, you need to get pretty organized about how you keep track of, and connect your objects. I think it is a testament to the DPLA vision, that they are using JSON-LD, a very structured, and forward leaning vision of how we connect, not just digital objects, but also digital representations of the very physical objects in our world.

I’m going to make sure I spend time each month, to at least looking through the [DPLA API ecosystem](http://dp.la/info/developers/codex/), keeping an eye on what they are up to with their API platform, but I intend to also look through the collections and brainstorm on what is possible via the API—I encourage you to as well.
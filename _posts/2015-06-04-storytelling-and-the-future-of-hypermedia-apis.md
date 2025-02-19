---
layout: post
title: Storytelling and the Future of Hypermedia APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/one-night-at-kachka-eater.png
author:
  name: kinlane
tags:
  - Hypermedia
  - Storytelling
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/one-night-at-kachka-eater.png)](http://www.eater.com/a/one-night-kachka)

Helping people understand the potential you see around a particular approach to API design, is hard stuff. Providing easy to follow stories, and implementations that the average person can follow is something I've dedicated myself to at API Evangelist, and something I'll keep working on when it comes to evolving API approaches like hypermedia. 

Hypermedia has long suffered from an image problem, something I feel can be remedied through a little hacker storytelling on the part of hypermedia API media type owners, API providers who bake hypermedia into their practices, and the developers who are crafting meaningful hypermedia driven experiences. In 2015 I feel like we are getting closer to fixing this, but as I said, this stuff is hard, and takes a lot of work.

Until there are easy to follow stories, and examples of hypermedia in practice, only us in the know are going to care. I see a lot of potential ideas for hypermedia hacker storytelling in my head, but getting these out into stories, and into practice takes a lot of work, and massaging of ideas. One idea that was just moved forward for me, was derived from a post [Audrey](https://twitter.com/audreywatters) sent to me today, [a story from Eater, called One Night Kachka](http://www.eater.com/a/one-night-kachka).

This approach to storytelling, provides me with a potential blueprint for evolving how I can tell stories using hypermedia APIs, and Single Page Apps (SPA). The Kachka story is full of rich structured data and content, providing a compelling timeline breakdown of a nights activity at a restaurant. There are so many interesting objects here that could be defined and woven together with a hypermedia core--then simply presented via a hypermedia client (aka Single Page App). 

Additionally you could generate an administrative SPA, allowing a user to be walked through the process of telling a story, adding the timeline elements, people, pictures, videos, and data around sales and activity--then point user towards the SPA client that allows them to explore the interactive story they just told. This represents an evolution in storytelling around hypermedia for me, where I move from talking about "clients" to talking about a more tangible storytelling SPA, that potentially a wider audience might be able to follow.

What is really beautiful about this model, is an API designer who was skilled in a hypermedia approach like [HAL](http://stateless.co/hal_specification.html), [Collections+JSON](http://amundsen.com/media-types/collection/), [Siren](https://github.com/kevinswiber/siren), or [JSON-LD](http://json-ld.org/) could craft a core that could drive this restaurant experience, but also be flexible enough to tell other similar stories like one night at the club, concert, or maybe just Christmas eve at home with the family. With the SPA client approach, you could easily provide some amazing CSS implementations, [using a CSS Zen Garden approach](http://www.csszengarden.com/). 

Food for thought! [I am just now playing with Siren, in redesigning how I tell the story around my API news curation](http://apievangelist.com/2015/05/11/a-good-example-of-hypermedia-api-using-the-siren-specification/), but once I get my chops up with Siren, HAL, and Collecton+JSON, I may take a crack at assembling a hypermedia core for an API that could drive stories like [One Night Kachka](http://www.eater.com/a/one-night-kachka).
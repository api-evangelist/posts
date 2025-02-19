---
layout: post
title: Evolving Beyond Just Resources Towards A More Experience Based API Design
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-experience-design.png
author:
  name: kinlane
tags:
  - Design
  - Resources
  - Experience
---
I really love the thought process around API design, and I am always looking for ways to push forward my craft. Telling stories is one way I do this, forcing me to make what I’m doing understandable to a wider audience, which is also the exact thing I’m trying to do with my API designs—mind blown!

An example of this in action is with my link API, which I use in multiple places across my API monitoring system. The Link API has a pretty basic design, that reflect the resource, and its underlying database structure:

*   /link/ (GET, POST, PUT, DELETE)
*   Title, Description, and URL

I use this API in numerous ways, the original API design is very much based upon the resource that it is, a link. As a developer who understands REST, and very much comes from a world of databases, this works just fine. However much of the magic around my usage of links is defined in my code, and not in my API interface, something I’d like to change.

After having two separate conversations with folks about my link API, I experienced two very different motivations on using said link system, and came with very different perspectives on how to use mu ink API, that had nothing to do with the database or resource this API was born from.

**Archival Motivations**  
One person I discussed my link API with wants to use it for archiving a link. When they pass the link to an API, if it isn't already recorded it logs the URL, and then grabs a screenshot of the page, as well as stores any HTML content present. This could be a one time archive, or they could also pass a parameter that would set up a daily, weekly or monthly archive to occur.

**Harvesting Desires  
**The second person I discussed my link API with wants to use for harvesting of specific things from the page, and in this particular conversation it was to harvest all other links available on the page. You would pass the URL to the API, and get back a list of URLs available on the page. The only setting was to filter and return only URLs that contained the base URL of the URL being passed to the API (mouthful of URL).

**Pushing My Resources To Deliver Experiences**  
This story reflects why I feel that companies should hurry up and begin their API journey, so they can begin moving beyond just APIs designed based upon the resources as they exist, to more of an experience based focus, designing APIs that deliver  the solutions that people desire. Both of these folks I talked to were not programmers, and only understand APIs enough to be dangerous. They understand the basic CRUD abilities I gave with my resource design, but it doesn't excite them or really mean anything. What really motivates them was satisfying a specific need that fits in with their experiences.

I’m still working on what this new set of APIs will look like based upon these thoughts, but I wanted to tell the story of this slight shift in my API design thinking. It is extremely difficult to see API design this way unless you are actively on your API journey, having discussions with people who want to use your APIs. It is easy for us developers to get caught up in perfectly defining our API resources from the technical perspective, when in reality the most important part of the journey seems to me is all about learning to craft APIs that deliver meaningful experiences, not serving up just services—experience oriented architecture over service oriented architecture.
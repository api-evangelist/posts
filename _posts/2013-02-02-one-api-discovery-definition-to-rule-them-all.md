---
layout: post
title: One API Discovery Definition to Rule Them All
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/discovery-exploration.jpg
author:
  name: kinlane
tags:
  - Discovery
  - Definition
  - Discover
---
When I talk about API discovery, in-person at events, or on my blog(s), I notice people automatically default to thinking I mean a universal API discovery language that will work for all web APIs. I think the technologists that operate in the API space are always striving for technical perfection--resulting in the discussions that you see around REST, HATEOAS, OAuth and similarly for this one about API discovery.

I’m thankful for the passion and dedication of the technologists in this space, but when it comes to API discovery, I’m never talking about a universal language or approach. I personally just don’t believe there can be one definition to rule them all. When I reference API discovery, I’m focusing on API discovery at the provider level, and providing information and resources that allow people who launch APIs to be successful. I have no interest in defining or support a world-wide or industry level definition for API discovery. I leave these conversations to all y'all tech pundits.

I am a fan of supporting API providers to do something, anything! Sure, it should be a standardized as you feel necessary. I hope you use something that is already in existence like [WADL](http://en.wikipedia.org/wiki/Web_Application_Description_Language "WADL"), [Swagger](http://developers.helloreverb.com/swagger/ "Swagger") or [I/O Docs](https://github.com/mashery/iodocs) (don’t reinvent the wheel), and make sure and look at the [approach Google is taking with their API discovery service](https://developers.google.com/discovery/)\--as they have some experience in the field.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/Swagger-Screenshot-1.png)](http://swagger.com)

In reality though, your motivation to develop JSON or XML definitions for your API will probably be to provide interactive documentation or allow for easy generation of code libraries for your API--not discovery. With the API discovery conversation automatically defaulting to a universal definition by the tech pundits, API providers will often avoid these discussions, leaving it a lower priority when planning and implementing an API. Much like with HATEOAS, without concrete examples of value, API providers won’t see value in providing JSON or XML definitions of their APIs. Interactive docs and auto generation of code libraries are clear value propositions, and show potential for bringing discovery back to the forefront.

Once you have API definitions for all of your API endpoints, its pretty easy to publish a single manifest of all of your APIs in a single JSON (or XML) file in the root of your developer area. Sure I would love all of these definitions to be the same, but I prefer a more pragmatic approach and will accept whatever a API service provider deems suitable for their APIs, and with the resources they have available.

If you think about how web page discovery came together in late 1990s with Yahoo, then solutions provided by Google, and even new approaches from providers like [DuckDuckGo](https://duckduckgo.com/). When it comes to API search and discovery, we are in circa 1997, if we compare it with web page discovery. You have directories like ProgrammableWeb, but you also have newer vendors emerging like [APIhub](http://apihub.com), who potentially bring a new perspective to the table.

Since APIs are about “programmatic discovery”, I think how developers discover API will vary, occuring via these directories and hubs, but also occur via their chosen PaaS platform like Drupal, Heroku, Salesforce or with BaaS providers like Parse or Kinvey--as well as popular IDEs like Eclipse who allow for plugins.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/mulesoft/API-Hub-Screenshot-2.png)](http://apihub.com)

It will up to PaaS, BaaS or other 3rd party platform providers to assemble resource stacks that are meaningful to their community. They will do the legwork to find best of breed API resources, which will be made easier if API providers provider JSON or XML definitions of their API resources, but not a requirement.

I believe that similar to website sitemaps, API discovery will have wider definitions that some follow, with successful vendor specific implementations as well, but ultimately it will remain largely imperfect and some API providers will do well, and others will implement poorly.  The markets will decide! (_cringe_)

My object is to help the average API provider hear stories of other successful approaches, and identify the benefits, in hopes that they will implement something, anything!  Allowing us to take baby steps forward in API discovery, not defining one definition to rule them all and nobody giving a shit, and we don't move forward at all.
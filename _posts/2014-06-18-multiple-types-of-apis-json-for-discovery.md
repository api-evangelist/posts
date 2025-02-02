---
published: true
layout: post
title: Multiple Types of APIs.json For Discovery
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - Discovery
  - Discover
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

I’m working through thoughts around a suggestion for future versions of [APIs.json API discovery format](http://apisjson.org/), and as I do with other things I’m trying to make sense of, I wanted to write a blog post on API Evangelist. If you aren't familiar with the format, APIs.json is meant to be a machine readable JSON file that provides an overview and listing APIs available within a specific domain.

**Authoritative APIs.json**  
This is an APIs.json that is made available in the root of a domain, that is providing detail on an API that is managed within the same domain. This use case is for API providers to list the APIs that they offer publicly.

**Tribute APIs.json**  
There is an API you use, and want to see it indexed in an API search engine like APIs.io—so you create a tribute APIs.json. This APIs.json index is not done by the owner of the API, but by a fan, or outside contributor. Tributes will weave together the world of APIs, when providers do not have the time.

**Facade APIs.json**  
There is an API you use, but doesn’t have exactly the interface you would want. Some resourceful API architects will be building facades to existing, external API resources. In the API economy you do not settle if an API isn't exactly what you need. The remix able nature of APIs allow for extending by designing facades that transform and extend existing API resources.

**Cache APIs.json**  
If I learned anything working in the federal government last year, it is that APIs can go away at any point. In the future there will be a need for cached versions of existing APIs, providing redundancy and access to some important data and content.

**Aggregate APIs.json**  
In fast growing areas of the API economy, we are seeing API aggregation trends, with sectors like social, media, cloud, financial, analytics, and other areas that have matured, and users are depending on potentially multiple API platforms.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-discovery.png)](http://apisjson.org/)

**Derived APIs.json**  
I envision derived APis as just an evolution of tribute or facade, stating that I started with a certain API design, but have evolved it beyond what it once was. Not acknowledging where we got our API patterns is a darker side of the API space that needs to go away—let’s be honest about where we learned our patterns and give a nod to these sources.

In the API economy, I think there will be multiple types of APIs that are deployed. As APIs proliferate, if the industry focuses on interoperability and reuse, there will be more types of APIs than the single API provider and APIs.json will help us keep tabs on this.

Not all API providers will have time, desire and the access to resources to publish their APIs.json, and the augmentation, replication and other possible derivatives that will emerge to organically expand on existing patterns.

Right now we are working on just stabilizing the latest release of APIs.json, so that people can get to work on publishing their own APIs.json. My goal with these thoughts is to just explore what is possible, and maybe, if successful some of these thoughts will be incorporated in future versions.
---
published: true
layout: post
title: API First With Legacy APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/old-barn-old-barn-1500-alberto-giacometti.jpg
author:
  name: kinlane
tags:
  - API-First
  - Legacy
---
It is common to think API-first just applies to new green field APIs being developed. However, I’d say that it should become a priority with addressing legacy APIs as well. I’m working to evolve my tagging API to better meet my current needs for not just tagging my blog posts, curated news, organizations, links, patents, and other resources, but also begin to apply to my OpenAPI, AsyncAPI, JSON Schema, and other machine readable artifacts. I need to do a major revision on it, but first I need to better map out what I have. My tagging API has been around since 2011, and since nobody but me uses I have never created an OpenAPI, or documented it in any way, so my first move is to map out what I have.  
  
I got to work creating a Postman collection for my API, mapping out the surface area of the legacy version of my tagging API. I needed to understand the paths and variables I had on this API that came together over a couple of years, and has had several tweaks and adjustment since it was first conceived. Currently  it has the following resources:

*   **Tag** - A single word or phrase that adds to my tag vocabulary.
*   **Children** - I can relate tags to tags, allowing me to infinitely group.
*   **URLs** - I can associate multiple URLs with any single tag.
*   **Images** - I can add an image for each of the tags that I define.
*   **Transformation** -  An index of words I transform automatically.
*   **Dictionary** - An entire diction of all the words for verifying tags.

I regularly apply my tags across all of my primary resources. I depend on my tags to help me organize information, and make sense of my API research. I’m going to keep the tag and children endpoints basically the same, but I’m going to change how I handle URLs and images.  I’m also looking to make some modifications on the way I transform words to better deal with plural words—it isn’t very smart right now. Anyways, I completed a Postman for the current state of my tagging API, now I need to create a duplicate of it, and get to work on the next version.  
  
In addition to changing some of my existing APIs, I need to add some new paths, helping me be more efficient when it comes to managing and refining my tag vocabulary. I am using the new API feature of Postman to define, design, and develop the new version of my tagging API, adding the following resources to the stack:

*   Counts - Maintaining usage counts for all tags, and the resources they are applied.
*   Ranking - I’m now ranking my tags, like I rank and sort all the other resources I track on.
*   Automated - Tags that are automatically applied have a different configuration in my world.
*   Manual - Tags that I manually apply have different configuration and value across the platform.
*   Refinement - There will be a number of new resources dedicated to helping refine my vocabulary.
*   Publish - I depend on tags to publish content across my network of sites, and I want to manage better.

I now have a complete definition for version 2.0 of my tagging API available as a Postman collection. It has the changes I’m making to the existing APIs, as well as the addition of the new paths. Each individual API is defined, mocked and documented, and I haven’t written any code. Since I don’t have any other stakeholders, other than me, myself, and I, the feedback loop on this one will involve me building some UI elements against the mocks. Helping me understand if my API design is going to work for what I’m looking to accomplish in my overall tagging processes, including the new reporting on the counts, ranking, and other elements. If I need to make any tweaks I will just go back into the Postman collection, make the changes I want, and adjust my UI, and repeat until I’m satisfied.  
  
This is a major revision to my tagging API, and since I’m the only user I am not too worried about backward breaking changes. I will spend some time crafting tests to check that every path within my collection is checked to ensure the proper schema is returned. Then once I actually publish my API into production, I can just switch out the mock URL for the production URL, and my tests should work—if I have done my job as a developer. Allowing me to map out my legacy infrastructure, move them forward a version, and establish and then establish an API contract for what is expected of them in production—then firing up a monitor to execute the tests daily to ensure I’m meeting my new API contract terms. Helping me establish an API-first contract approach to rapidly, and more efficiently moving my legacy infrastructure to a better state.
---
layout: post
title: ReliefWeb Is Tackling The Worlds Biggest Problems Using APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/reliefweb/reliefweb-logo.jpg
author:
  name: kinlane
tags:
  - Web
  - APIs
  - Problems
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/reliefweb/reliefweb-logo.jpg)](http://reliefweb.int)

I was introduced to the [ReliefWeb API](http://reliefweb.int/help/api) last week, which provides information including reports, jobs, training, countries, and source details on global crises and disasters going back to 1996.

The ReliefWeb API follows a trend of organizations realizing not just the potential of APIs for delivering content to mobile applications, but also the benefits of opening up publicly. As the site states:

> _The United Nations Office for the Coordination of Humanitarian Affairs (OCHA) originally built the ReliefWeb API to power a mobile version of the ReliefWeb website._

Since then they have normalized the interfaces for public consumption, hoping that “developers can build tools that increase exposure for valuable content and facilitate analysis for better decisions.”

The ReliefWeb API provides seven valuable API endpoints:

*   **Discovery** - Providing discovery, navigability and insight into other APIs.
*   **Reports** - Content API of updates, headlines and maps available on ReliefWeb.
*   **Jobs** - Job offers available on ReliefWeb.
*   **Trainings** - Training opportunities available via ReliefWeb.
*   **Countries** - Countries from Reliefweb.
*   **Disasters** - Disasters tracked on as part of ReliefWeb.
*   **Sources** - Sources of information available on ReliefWeb.

The design of the API is pretty well thought out, providing some common, as well as some forward thinking technical elements:

*   **Documentation** - Detailed information about all API endpoints, including content types, versions, data model, including full text and interactive version using Swagger.
*   **Hypermedia** - Control links facilitate paging, deep cross-linking of content allows navigating between related resources, and all resources can be reached by drilling down from the top level of the API at http://api.rwlabs.org.
*   **Caching** - Uses Cache-Control headers to point out how often ReliefWeb recommends checking for updates.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/reliefweb/reliefweb-syra.png)](http://reliefweb.int)

I started playing around making some calls and enjoyed the way the API flows, and excited about the potential. I do have some critique of the implementation, with the hope of influencing their roadmap.

**Side Project**  
The API initiative has a very side project feel. Its under /help/ in the address, and I'd say 90% of the projects I’ve seen deployed in this way go away—this will affect developer perspective. While I understand most API projects are often underfunded side projects, you should work to hide this. Launch at developer.reliefweb.int and give the portal its own navigation, and make a link to developers area prominent in footer or header of main ReliefWeb site—instilling confidence in API consumers.

**Documentation**  
The API documentation is complete. It has all the relevant information, it just feels fragmented, and needs some UX love. The Swagger API docs could be made to be a little more beautiful, flowing and integrated with the rest of the docs. The age of link to interactive explorer is gone, your entire doc experience should be interactive.

**Key Things Up**  
I love that I can just start playing with API, without registration, but I’d much rather have ReliefWeb in tune with how the API is being used, and including usage patterns into its roadmap and future API design. Requiring self-service registration and API key to use isn't going to lock up the data, it will allow you to better understand how endpoints are being consumed, bottlenecks, and common usage patterns. This will all go a long way to helping evolve the API roadmap and understand ReliefWeb API consumers.

**Building Blocks**  
Much like I state above about it feeling like a side project, most of the [essential API building blocks](http://management.apievangelist.com/building-blocks.html) are there, but their are really fragmented. There are FAQs on multiple pages, docs spread across multiple pages, and support paths aren't super clear. Overall the portal and supporting building blocks just need some UX love to make sure it flows better for on boarding new developers, as well as supporting existing ones.

**Looking Forward**  
It is always hard to critique new APIs from governmental or non-profit organizations, because I'm just happy to see any API come out the door. This means the iteration cycles start, and things will only get better (potentially).

I could recommend [other building blocks](http://management.apievangelist.com/building-blocks.html) like code samples, idea and application showcase and social elements like usage of Github and Twitter, but I know they are just getting going and these things will come.

Overall I’m excited about the potential around the ReliefWeb API, that the organization has seen the benefits of APIs in their own mobile strategy, but also understands the potential of opening up these resources to the public.

Seeing deployments like the ReliefWeb API remind me that we can truly tackle many of the big problems we face in the world, rather than many of the stupid, first world problem API solutions and applications we see out of Silicon Valley.
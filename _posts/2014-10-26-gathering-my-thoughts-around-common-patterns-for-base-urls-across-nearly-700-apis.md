---
layout: post
title: >-
  Gathering My Thoughts Around Common Patterns For Base URLs Across Nearly 700
  APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzly-square.png
author:
  name: kinlane
tags:
  - My
  - Patterns
  - APIs
---
I just finished going through [my API Stack](http://theapistack.com/), taking a fresh look at each API provider, and looking for one simple thing—the base URL for each of their APIs. Throughout the process I looked at almost 700 API developer areas, trying to find the base URL they are using to serve up some of the most valuable API resources publicly available on the web.

**Accepting The Madness**  
When you look at 700 APIs, you have to wade through a lot of madness. When I'm looking at APIs, I’m looking for more than just a perfectly designed API from a technical perspective, I’m interested in value, presentation, and other more meaningful aspects. Often times I will overlook your base URL, but it doesn’t stop me from taking note of some of the crazy domains, and subdomains people are using to provide access to their API resources.

**Strong Patterns For Base URL**  
Once you wade through the madness, and start looking for the strongest patterns for base URLs applied across the API space, it is easy to see that two of the most common approaches are:

*   **api.example.com -** Pretty simple, common, and current approach to pointing a subdomain to a company’s API resources.
*   **example.com/api -** When you don’t have control over setting up subdomains, a simple API folder is next in line.

The subdomain for a company’s API effort says a lot. When you do not put much thought into the path for your API program, it demonstrates that you will probably not put a lot into your overall API effort. A subdomain may not seem like much on the surface, but it consistently provides a barometer for other things that are going on, as I wade through these APIs.

Another thing I'm consistently seeing, is that many API providers assume that API consumers will understand the the API is available at the root domain, and referencing /api/v1/ as a root, without directly stating the base URL is http://example.com/api/v1/. It is not a punishable offense, but something that reflects the short-sighted, siloed world that many API providers operate within.

**A Distributed, Programmable Web**  
After identifying the strongest patterns for base URLs, the next layer of domain usage, that I found interesting, was the use of account or user based, network, and geographic based subdomain API access:

*   **\[user\].example.com -** A dynamic subdomain based upon a users account, allowing for API access centered around a user’s platform account.
*   **\[network\].example.com -** A select group of network, and CDN locations. Sometimes they were based upon AWS regions like east and west coast, and other times just providing DNS redundancy with know clear geographic intent.
*   **\[geo\].example.com -** Other times you would clarity in assigning API domains based upon geographic regions like US, UK, and German specific locations.

I have three motivations in telling this story, 1) for my own education, 2) encourage more consistent patterns amongst API providers, and 3) work to understand where things might be going. I think the use of a user account, network, and geographic centered URL for your API, tells something about where things might be headed. I think that your API access will be tailored just for you by delivering virtualized containers, just for your account (you can pay for more performance), that may run on specific networks, and in specific geographic regions, as the API world move forward.

As I struggle to deal with the madness I'm finding across base URLs for APis, and enjoying it greatly when I come across more standard approaches, but what is really interesting me is trying to better understand how we are going to scale all of this to better meet the needs of developers, end-users, and keep pace with changes like we are seeing with the Internet of Things. How do we keep things up and running, stable, while also meeting the terms or service of online platforms, ensure security across numerous 3rd party developers, while also keeping the privacy and interests of end-users in mind?

In the future I can see terms of service (TOS) negotiations at the API level for each user, support in their personal needs, and keep API traffic isolated in a particular region, or via a particular network base upon a countries laws, all the way to delivering on an individual citizens wishes. For now, all I can do is try to understand what is going on, and hope for a future where this type of scalability, regionalization, and interoperability is truly a reality.
---
layout: post
title: Initial Thoughts Around Monetization For An API Deployment Service
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-dollar-sign.png
author:
  name: kinlane
tags:
  - Deployment
  - Monetization
---
I am helping a client work through their monetization strategy for an API deployment service. To help me give me a starting point for the work, I wanted to take a look at a handful of existing service providers, that may not be a perfect match, but somewhat in the same realm--[API deployment](http://deployment.apievangelist.com/). 

For this phase of the work, I looked at six [API deployment providers](http://deployment.apievangelist.com/companies.html), who in my opinion have a pretty straightforward, modern approach to crafting, publishing, and sharing their pricing. It always amazes me how hard it can be to just find a companies pricing, let alone make sense of it...but I digress, that is another story.

Here are the API deployment providers I reviewed:

*   **[API Spark](http://restlet.com/products/apispark/)**, with 5 pricing tiers, broken down by concurrent connection (based upon IP address), number of APIs, the entity and file storage across APIs.
*   **[APItite](https://www.apitite.net/pricing)**, width 3 pricing tiers, broken down by number of APIs, API calls, data transfers, data storage (by row), whether the API is public / unlisted / private, and support
*   **[InstantAPI](http://www.instantapi.co/#pricing)**, with 1 pricing tier, with incremental add-ons to get more API call volume, broken down just by the number of API calls, with an option to pay for custom domain.
*   **[Sheetlabs](https://sheetlabs.com/#/pricing)**, with 3 pricing tiers, broken down by storage, number of queries, spreadsheets, APIs, and users.
*   **[Orchestrate](https://orchestrate.io/#pricing)**, with 3 pricing tiers, broken down by number of APIs calls and applications, with options for Service Level Agreement (SLA) and support as well.
*   **[Algorithmia](https://algorithmia.com/pricing)**, with 2 pricing tiers, broken down by an equal ratio of credits to API calls. You get 10K credits for free, and can purchase more at 10K per $1.00.

I think these six provide a good test sample to kick of my research. Most of the other API deployment providers didn't have a straightforward pricing model, were open source, or just didn't seem like a good fit.  As I looked through these companies approaches to monetization, I see two of the three hard costs of each provider covered:

*   Storage
*   Bandwidth

The only one not present is "compute", but in my experience this is usually applied across the other pricing variables, as it is harder to calculate. After the hard costs, some of the obvious elements of API monetization are present:

*   APIs
*   API Calls
*   Users
*   Applications

These are the most common elements of API service provider pricing, providing tangible things that users will understand. There were also two additional elements I found, that I would consider less than common, but interesting enough to include:

*   Connections
*   Data Storage by Row

The "connections "concept introduced by Restlet's APISpark platform is an interesting way to try and quantity the compute used by each API consumer. There were also three other I guess, kind of value-add aspects that were included in pricing packages:

*   Support
*   SLA
*   Public / Private

I think the number of APIs, API calls, users, apps, and connections are all just ways for carving up the third hard cost of "compute"--with some profit built in of course. It all gives me a great framework to think about what is important when it comes to crafting a monetization strategy, like the hard costs of compute, storage, and bandwidth, but also provides the tangible elements that potential customers will likely understand, such as the number of APIs, API calls, users, and apps. 

Ultimately, I am a fan of simple, tiered API pricing, providing a free, $9.99, 19.99, $49.99, $99.99, and onward--kind of like with Restlet's APISpark. Each package should be assembled from all the moving parts identified, both hard costs, and perceived costs that the end-users will get  like storage, bandwidth, APIs, API cals, users, apps, etc. In my opinion, each tier should allow purchasing of additional units as needed, as well as being able to scale up and down the plan each month. 

Each of the providers listed above had a "contact us" or "enterprise" option for pricing. This is an area I'd like to see more transparency around what partnership opportunities there are, as well as potential reseller possibilities--I see no reason why some developers can't achieve credits for bringing in other business. I see the partner and reseller layer of any API, as the key to platform success, in a way that can also become a external marketing vehicle for the ecosystem.

Alrighty. That gives me a good amount of information to the prime the pump around the conversation with my client, as well as help build a foundation for how I can approach future [API monetization](http://monetization.apievangelist.com/index.html) strategy discussions. I will incorporate this into my [api-pricing strategy](http://api-pricing.apievangelist.com/), where i am trying to define a machine readable format that can be indexed as part of any APIs, [APIs.json index](http://apisjson.org). I am happy with this as a start, to what I see as a continuing conversation about not just strategies for API monetization, but also API service provider monetization.
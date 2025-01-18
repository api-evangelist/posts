---
layout: post
title: The Federal Government Deploys Their Own API Management Solution
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-umbrella.png
author:
  name: kinlane
tags:
  - Management
  - Federal Government
  - API Management
  - Government
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-umbrella.png)](https://github.com/NREL/api-umbrella/)

Some of the smart people in Washington D.C. have decided to [roll their own API management solution](http://api.data.gov/about/), providing their own open source solution to many of the common problems faced by API providers like issuing API keys, rate limit and provide analytics.

Available at [api.data.gov/about](http://api.data.gov/about/), but powered by an open source project called [API Umbrella](https://github.com/NREL/api-umbrella/), the project aims to be a free and open API management option for federal agencies.

API Umbrella provides some of the most common aspects of API management:

*   Documentation
*   API Keys
*   Rate Limiting
*   Analytics

The roadmap for API Umbrella is also interesting, looking to deliver:

*   Self-service web admin
*   Interactive documentation
*   User management
*   Granular permissions and rate limits

While creating, yet another API management solution may not seem like the best idea at first, I can see why federal agencies would do it. Because of terms of use, costs and vendor lock-in with proprietary solutions, they are just seeking a simpler, cost effective alternative to solutions available in the private sector.

I'd love to see a blueprint established for the features available in API Umbrella, the current implementation for the gatekeeper is in Node.js and the web interface is in Ruby--it would be nice to have an open blueprint which would allow for others to contribute PHP, Python and other iterations of the same model. Providing a way for organizations to choose an option that fits with the resources they have available, while still providing interoperability.

It would also be great to see other city, county and state organizations adopt, deploy and evolve API Umbrella, providing a solution for other types of government organizations. I'm not intimate with the various needs of different types of government, but I'm sure there are some nuances that might make a difference.

As I ramp up my time working in DC this year I will spend more time getting intimate with [API Umbrella](https://github.com/NREL/api-umbrella/), as well as other open data portal solutions like [CKAN](http://ckan.org/), and hopefully provide more resources on putting these solutions to use in the real world.
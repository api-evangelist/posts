---
layout: post
title: An API Discovery API For Your API With Tyk
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_20_at_7.37.43_pm.png
atomdate: 2016-10-21T20:00:00.000Z
tags:
  - Discovery
  - Discover
---
[If you are selling services to the API space you should have an API](http://apievangelist.com/2015/10/27/which-api-service-providers-across-the-20-areas-i-track-on-have-apis/), it is just how this game works (if you are savvy). I was going through [Tyk's API for their open source API management solution and came across their API definitions API](https://tyk.io/docs/tyk-dashboard-v1-0/dashboard-api/api-definitions/), which gives you a list of APIs for each Tyk deployment--baking in API discovery into the open source API management solution by default.

The API API (I still enjoy saying that) gives you the authentication, paths, versioning, and other details about each API being managed. I'm writing about this because I think that an API API should be the default for all API service providers. If you are selling me API services you should have an API for all your services, especially one that allows me to discover and manage all the APIs I'm applying your service to. 

I am [expanding my definition of a minimum viable blueprint for API service providers](http://apievangelist.com/2015/12/07/minimum-viable-api-service-provider-blueprint/), and adding an API API as one of the default APIs. I'm going to be adding the account, billing, and a handful of other essential APIs to my default definition. If I'm using your service to manage any part of my API operations, I need to be automating discovery, management, and billing in our relationship.

It seems obvious to me but I'm looking to provide a simple checklist that other API service providers can consider as they craft their strategy. My goal is to help make sure each stop along the lifecycle can be orchestrated in a programmatic way like Tyk.

**Disclosure:** [Tyk](https://tyk.io/) is an API Evangelist partner.
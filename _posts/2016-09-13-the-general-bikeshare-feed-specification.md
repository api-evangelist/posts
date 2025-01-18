---
layout: post
title: The General Bikeshare Feed Specification
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/north_american_bikeshare_association.png
atomdate: 2016-09-13T18:00:00.000Z
tags: []
---
I came across a story about [Stage Intelligence Adds Support for the GBFS Open Data Standard](http://insidebigdata.com/2016/09/08/stage-intelligence-adds-support-for-the-gbfs-open-data-standard-into-its-bico-distribution-solution/) in my regular monitoring, and wanted to add the specification to my [API definition toolbox](http://definitions.apievangelist.com/), and share here on my blog. Staritng with the basics, what is the [GBFS Open Data Standard](https://github.com/NABSA/gbfs)?

_General Bikeshare Feed Specification, known as GBFS, is the open data standard for bikeshare. GBFS will make real-time data feeds publicly available online in a uniform format so that map and transportation based apps can easily incorporate this data into their platforms._

[Documentation is available on Github, including JSON definitions for the bikeshare data model](https://github.com/NABSA/gbfs/blob/master/gbfs.md). All it needs now is an [OpenAPI Spec generated for it,](https://openapis.org/specification) providing one possible API definition for the GBFS specification (you know you want to build it). Then people could put the definitions to use in generating open source server and client side API tooling for bikeshare programs to deploy.

[I was impressed to see 49 separate bikeshare programs are supporting the specification](https://github.com/NABSA/gbfs/blob/master/systems.csv). I am always looking to add open data specifications to my [API definition research](http://definitions.apievangelist.com/), even if they are just the data model--maybe with a little nudging I can stimulate some investment in at least the API definitions, if not supporting code, and other tools and resources.

I'll take the list of bikeshare services who are currently using the standard and see if any of them have an API, and maybe aggregate the common patterns already in use on the ground. If nothing else, hopefully, I can shine some SEO on the [General Bikeshare Feed Specification](https://github.com/NABSA/gbfs/blob/master/gbfs.md) and prevent at least one developer from reinventing the wheel.
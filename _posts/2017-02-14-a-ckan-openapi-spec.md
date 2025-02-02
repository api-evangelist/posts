---
layout: post
title: A CKAN OpenAPI Spec
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ckan-logo.png
atomdate: 2017-02-14T17:00:00.000Z
tags:
  - OpenAPI
  - Open
---
.gist {width:100% !important;} .gist-file .gist-data {max-height: 500px;}

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ckan-logo.png)](https://ckan.org/)

[I was working on publishing an index of the General Service Administration (GSA) APIs I currently have in my API monitoring system](http://gsa.index.apievangelist.com/), and I remembered that [I updated my Data.gov work publishing a cache of the index on Github](https://github.com/gsa-data/data-gov-dump). Part of this work I had left a note for myself about finding / creating an OpenAPI Spec for the Data.gov API, which since it is a CKAN implementation should be pretty easy--I hoped.

After [Googling for a bit I found one created by the French government open data portal](https://www.data.gouv.fr/en/apidoc/#/) -- thank you!!. It looks pretty complete with 102 paths, and 79 definitions, providing a pretty nice jumpstart for anyone looking to documentation their CKAN open data implementation. 

This API definition can be used to generate API documentation using [Swagger UI](http://swagger.io/swagger-ui/) or [ReDoc](https://github.com/Rebilly/ReDoc), as well as [generate SDKs using APIMATIC](http://apimatic.io), and monitoring using [Runscope](http://runscope.com) or [API Science](http://apiscience.com). If you come across any other API definitions for CKAN, or any interesting documentation and other tools--please let me know, I want to keep aggregating CKAN related solutions.

Open source tools that have APIs, and have open API definitions like this are the future. These are the tools that companies, institutions, organizations, and government agencies should be putting to work in their operations because it helps reduce costs, but also having an API that uses common API specifications means it will speak the same language as other important tools and services, increasing the size of the toolbox available for implementatioperations your API operatons.
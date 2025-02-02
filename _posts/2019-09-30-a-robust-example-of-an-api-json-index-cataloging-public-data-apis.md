---
published: true
layout: post
title: A Robust Example Of An API.json Index Cataloging Public Data APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/socrata_apis_json.png
author:
  name: kinlane
tags:
  - API.json
  - Discovery
  - Catalogs
---
I crafted a pretty useful APIs.json index over the weekend. I thought it provided a pretty robust look [at what APIs.json can do when it comes to providing machine readable API catalogs](http://apisjson.org/). This is a project I had started a couple years back, but just found some bandwidth to move forward--providing a complete APIs.json of t[he Socrata platform of data and APIs for city, county, state, and federal government](https://dev.socrata.com/). The APIs.json for the Socrata platform provides everything you need to get up and running with Socrata's discovery and metadata API, as well as the 200+ domains they support when it comes to providing public data access.

Here is the APIs.json index in it's entirty. Note the include options, which provide references to the 200+ domains, where you will find entirely separate APIs.json indexes for each domain, complete with JSON Schema, JSON examples, OpenAPI, and Postman collecitons for reach individual data set being made available--providing a pretty robust look at what APIs.json brings to the table.

I will be adding more properties to each of the individual public data domain APIs.json indexes, linking to the other resources that Socrata provides--more tightly coupling APIs.json with all available resources. I am using the same approach to map out the [DKAN](https://getdkan.org/) and [CKAN](https://ckan.org/) ecosystems, layering these dimensions of the public data universe into my master catalog of the sector. I am also going to play around with creating overall OpenAPI and Postman collections for reach individual domain, breaking individual data sets into groups defined by tags. My biggest challenge here is not all of the data sets are properly tagged, so I need to work some tagging voodoo on each my APIs.json indexes, harvesting meaningful tags from the title, description, and other meta data for the public data I've catalogued.

This is timely work, as I prepare to refresh the [APIs.json](http://apisjson.org/) and [API Commons](http://apicommons.org/) websites, and underlying specifications. As I prepare for heading up to [the API Specification Conference (ASC) in Vancouver](https://events.linuxfoundation.org/events/asc-2019/) this month I'm flexing all my API definition knowledge, and dusting off my own specifications that I should be spending more time moving forward. The APIs.json for Socrata, and other large scope API definition work I've been doing with Schema.org, and other industry related API and data standards are all part of a wider push for me to crank up momentum when it comes to what I"m evanaglizing when it comes to schema, specifications, definitions, enumerators, policy, and the other machine readable, contract-driven aspecs of what we do with APIs.
---
layout: post
title: Defining API Surface Area By Converting HTML Forms To Open API Specs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/USGS_Groundwater_Levels_REST_Web_Service_URL_Generation_Tool.png
atomdate: 2016-09-08T16:00:00.000Z
tags:
  - Forms
  - Open
  - Specs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/USGS_Groundwater_Levels_REST_Web_Service_URL_Generation_Tool.png)](http://waterservices.usgs.gov/rest/GW-Levels-Test-Tool.html)

I'm investing some time learning about the [USGS Water Services](http://waterservices.usgs.gov/). They have some pretty interesting APIs, providing access to a wealth of data about water table levels, river flows, and other key points across all USGS sites. While their developer area has a wealth of information available, it is also pretty verbose and tough to absorb.

I wanted to help make the information more accessible, filterable, and remixable by turning it into an OpenAPI Spec. It is A LOT OF WORK to craft a complete OpenAPI Spec for a robust API like the six that are available from the USGS. One way I help alleviate this work is to scrape API documentation. As I was preparing to do this I noticed they also have testing tools for 5 out of the 6 APIs, which are just HTML forms containing a definition of the surface area for each API. 

*   [Instantaneous Values (IV) Web Service](http://waterservices.usgs.gov/rest/IV-Test-Tool.html)
*   [Site Service](http://waterservices.usgs.gov/rest/Site-Test-Tool.html)
*   [Daily Values (DV) Web Service](http://waterservices.usgs.gov/rest/DV-Test-Tool.html)
*   [Groundwater Levels Web Service](http://waterservices.usgs.gov/rest/GW-Levels-Test-Tool.html)
*   [Statistics Web Service](http://waterservices.usgs.gov/rest/Statistics-Service-Test-Tool.html)

The HTML forms provide me with a slightly more structured definition of each API so I will start here. Once I've ingested these, I will write a scrape script for the HTML API documentation, and link the two up. Once I'm done with this I will be able to generate an OpenAPI Spec that is halfway complete (with just the surface area). Once I have this I can load up in my Postman client, turn on Charles Proxy and my internal API monitoring system will fill in the remaining definitions for the Open API Spec--now I have the request and response model, in a machine readable format. 

As I write the code to tackle this, I'm thinking about what a great approach HTML forms are to helping both technical, and semi-technical HTML craftspeople define the surface area of an API. Then I think about my friend Mike Amundsen ([@mamund](https://twitter.com/mamund)) and [his work on ALPS](http://alps.io/), and I smile, and I'm reminded of how much work we have ahead of us when it comes to both [web literacy](http://webconcepts.info/) and [establishing more meaningful, reusable design patterns across the API space](https://github.com/alps-io/profiles)(that repo should be full).

_**P.S.** Is there a better tool out there for turning HTML Forms into OpenAPI Spec or at least JSON or YAML?  
__**P.S.S.** If you wanna create an API that I can pass any web page with a form in it, and get back an OpenAPI Spec, you are a good person._
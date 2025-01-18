---
layout: post
title: The Burden On API Providers When It Comes To Web Literacy
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/USGS_Daily_Values_Web_Service.png
atomdate: 2016-09-07T18:00:00.000Z
tags:
  - Web
  - Providers
---
I am working through the [USGS water data services, which include some REST APIs](http://waterservices.usgs.gov/), and investing some of my work hours to one of my passions and concerns--water data and APIs. There is a wealth of water data available via the federal government web services, and as I'm making my way through the materials, I'm reminded of the heavy burden on API providers when it comes to web literacy. 

The USGS water services APIs documentation are about 30% education about common web concepts, and specifications like gzip, CORS, ISO-8601 Duration format, SO-8601 Date format, what is JavaScript Object Notation (JSON), and much more. I see this approach often with API efforts that offer both REST and SOAP services, where the education of developers around key web concepts is much more necessary, but it also depends on how much the API providers actually care about their developers being literate--I guess USGS cares more than many other more commercial providers.

I fully support API providers educating their developer around the web technologies in use. However I feel like it shouldn't be a burden on them, and they should have a wealth of resources available to plug in and do the work for them, so they can spend their time making their APIs better. This is why I'm working with Erik Wilde ([@dret](http://twitter.com/dret)) to make his [important showcase of essential web concepts and specification as machine readable](http://webconcepts.info/), and as accessible as possible so that we can get to work making more resources available to API providers when it comes to web literacy.

Ideally, web literacy is default amongst developers, but until that is a reality, we should be assisting all API providers in educating their API consumers within their developer portals, and in line with their existing documentation. Ideally, we should be doing this in a more structured approach, and begin evolving Eriks' work into a kind of forkable, embeddable, plug and play curriculum that API providers like the USGS can put to work with as little effort as possible.
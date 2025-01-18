---
layout: post
title: United States Farmers Market API
url: http://apievangelist.com/2011/08/13/united-states-farmers-market-api/
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags: []
---
kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/Farmers-Market-Data-US-Map.png)I'm always on the lookout for innovative data sets and examples of APIs that provide value in ever-day life. APIs are often a very geeky thing, and I'm always trying to find examples of APIs that make sense to my mainstream audience, and help me explain what APIs are, and the value they can deliver.

I found a story from [John Mertens](http://twitter.com/#!/@mertonium "John Mertens") of [Code for America](http://codeforamerica.org/ "Code for America"), about [building a Famers Market API](http://codeforamerica.org/2011/08/08/farmers-market-api/ "building a famers market Api"), which I think tells a great story about how anyone with a need, can take a valuable dataset and make it available using an API.

Like many of us Mertens loves getting his fruit and vegetables from a local Farmers Market. He was new to the San Francisco area and was unsure how to find the local Farmers Market. After Googling he found the [USDA web site which has a great web application to search for Farmers Markets in the United States](http://search.ams.usda.gov/farmersmarkets/ "USDA web site which has a great web-application for searching for famers markets in the US"). It is a great tool, and they also allow you todownload a spreadsheet of the data, but there is no API to build an application on.

So being a data geek (I totally understand), Merts felt compelled to liberate this data using an API, which he build using a couple of freely available technologies:

*   Exported the Famers Market dataset using the USDA export to excel
*   Normalized the data using [Google Refine](http://code.google.com/p/google-refine/ "Google Refine")
*   Uploaded it to a [free couchdb instance](http://iriscouch.com/ "free couchdb instance")
*   Added a map using the open-source [geocouch-utils](https://github.com/maxogden/geocouch-utils "geocouch-utils") CouchApp

Mertens did all this for free. The data was freely available, the tools he used are free, and the hosting of the API is free as well. I'm not sure I'd depend on his API for commercial purposes, but it is a great demonstration how take a data-set and publish as an API, to fill a specific niche.

Now anyone can build an application around Farmers Market data using his [Farmers Market API](http://usda.iriscouch.com/farmers_markets/_design/geo/_spatiallist/geojson/full?bbox=-122.61248930742187,37.655669842383595,-122.24788054277343,37.83240550745524 "Farmers Market API").
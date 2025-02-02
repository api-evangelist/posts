---
published: true
layout: post
title: APIs For Victoria Australia
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/victoria_australia_logo.png
author:
  name: kinlane
tags:
  - State Government
  - Australia
---
[I was helping out someone trying to download air quality data in Australia today](https://github.com/api-evangelist/index), and while I was playing around the [Victoria Australia government AirWatch data API](https://developer.vic.gov.au/index.php?option=com_apiportal&view=apitester&usage=api&tab=tests&apiName=EPA%20AirWatch%20API&apiId=a201aa7e-ab49-40a2-9436-4bf7210b4cfb&menuId=187) I thought I'd go ahead and add them to my API Evangelist network by importing their Swagger 2.,0 files and converting them to OpenAPI 3.0, while also publishing Postman collections for teach of their APIs. Expanding out the APIs I have in my directory, while also encouraging the state to publish the Postman collections I've created to the Postman API Network.

[The State of Victoria has some pretty interesting APIs](https://developer.vic.gov.au/api-catalogue) that they have made available using [Axway](https://www.axway.com/en). I have [published an APIs.json index for the states developer portal, providing an index of their API operations](https://github.com/api-evangelist/victoria-australia), as well as the individual APIs. You can get at the Postman collections I've generated using these links.

*   [ABS Labour Force API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/abs-labour-force-api-postman-collection.json)
*   [Agriculture Victoria Soils API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/agriculture-victoria-soils-api-postman-collection.json)
*   [DataVic CKAN API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/datavic-ckan-api-postman-collection.json)
*   [DataVic Open Data API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/datavic-open-data-api-postman-collection.json)
*   [EPA AirWatch API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/epa-airwatch-api-postman-collection.json)
*   [Important Government Dates API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/important-government-dates-api-postman-collection.json)
*   [Museums Victoria Collections API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/museums-victoria-collections-api-postman-collection.json)
*   [Popular Baby Names Victoria API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/popular-baby-names-victoria-api-postman-collection.json)
*   [Victorian Heritage API Postman Collection](https://github.com/api-evangelist/victoria-australia/blob/master/victorian-heritage-api-postman-collection.json)

I would go ahead and publish the Postman collections to the Postman Network, but I have asked them to go ahead and publish them. I would rather the listings be more authoritative and something that is owned by the API operators. I'm just looking to maintain a GitHub repository with fresh copies of their OpenAPI, Postman collections, and APIs.json so I can use as the source of truth for the APIs across API Evangelist, APIs.io, and other iPaaS, and integration providers. 

I am working through several different business sectors and government APIs, updating my directory of APIs, while also sharing with soem other API service providers I have been talking to. If there is a particular API provider you'd like to see added to my list, [go ahead and submit a pull request or submit an issue on my index repository](https://github.com/api-evangelist/index). I am looking to crank through profiling of 2K APIs over the holidays, and reach out to the owners as I make my way through creating OpenAPI, Postman collections, and APIs.json indexes for each of the APIs I track on. Making sure there are machine readable definitions for the APIs available on GitHub, but also building relationships with the providers as I go along.
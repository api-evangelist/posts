---
published: true
layout: post
title: Machine Readable API Monitoring Using the  APIs.json CASC Score Property
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_10_06_at_1.30.32_pm.png
author:
  name: kinlane
tags:
  - Monitoring
  - APIs.json
  - Ratings
---
I have been working with my friends over at [APIMetrics](https://apimetrics.io/) on the [COVID-19](https://postman-toolboxes.github.io/covid-19/) and [U.S. Election](https://postman-toolboxes.github.io/us-2020-elections/) resource centers we launched recently. These API resource centers are all powered by an [APIs.yaml](http://apisyaml.org/) index, providing a machine readable core that is used to power each API resource center single page application. [Providing an index of a variety of COVID-19 and election related resources that powers the website](https://github.com/postman-toolboxes/covid-19/blob/master/_data/apis.yaml), but also can be used in other applications and systems to pull the OpenAPI, Postman Collections, and other artifacts that are being made available. One of the artifacts I am layering into the listing for each API is a [CASC score](https://www.api.expert/about/casc/), showing the uptime and availability across all of the resources being made available, helping me float the best APIs to the top of each API resource center. 

First, to make sure everyone is up to speed, [APIs.json](http://apisjson.org/) / [APIs.yaml](http://apisyaml.org/) is a simple machine readable index for defining collections of APIs, and mapping out API operations. In this scenario I am using APIs.json as the core of an [API toolbox](https://github.com/postman-toolboxes) that runs 100% on GitHub using Jekyll and Github Pages. In addition to indexing the documentation and Postman collections for each API, I am adding a property for a CASC Score which looks like this:

CASC Score is a way to understand the reliability and maturity of an API from my friends over at APIMetrics. I just took their data and created a machine readable APIs.yaml property that I could then use to display the CASC score for each of my COVID-19 and U.S. Election APIs. Using the property to sort and display the CASC score as part of each listing.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_10_06_at_1.30.32_pm.png)](https://postman-toolboxes.github.io/covid-19/)

I needed a way to float the cream of each API resource center to the top, and the CASC score is one thing I consider when it comes to ranking each of the community contributed APIs. I am looking at other metrics, which I will also publish as APIs.yaml properties in the near future, but understanding the overall availability and reliability of the API from many different geographic regions over time is a pretty key indicator of whether an API is something I want to be recommending to developers.

Using the APIMetrics CASC score to helping me monitor and ultimately rank COVID-19 and U.S. Election APIs is just the beginning of this renewed work around APIs.json / APIs.yaml. I am working on a number of other human and machine readable properties for a variety of APIs. Helping me map out different layers of the API universe from COVID-19 to banking, and back again. If you have any questions about [APIs.json](http://apisjson.org/) / [APIs.yam](http://apisyaml.org/)l head over to the website to learn more, and if you have any questions about the approach to delivering API resource centers then head over to [the GitHub repo for each of the repositories I have setup to power each of them](https://github.com/postman-toolboxes). Feel free to fork and play with any of the projects, or [visit the home repo for my API toolbox prototypes](https://github.com/postman-toolboxes/home) to suggest new types of resource centers, or industry API catalogs.
---
published: true
layout: post
title: Subway Map Visualization Postman Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_visualizer_subway_map.png
author:
  name: kinlane
tags:
  - Visualizations
  - Subway Map
---
I have been working to migrate all the different API driven JavaScript solutions I have developed over the years and run on GitHub using Jekyll to operate self-contained Postman collections. [Now that Postman has a JavasScript visitations layer, I can make calls to APIs, parse the response, and generate HTML, CSS, and JavaScript visualizations](https://learning.postman.com/docs/postman/sending-api-requests/visualizer/). Allowing me to begin organizing all my API-driven visualization tools as simple, sharable, and executable Postman collections.

I had developed a way to visualize the API lifecycle a while back using [the Subway Map Visualization jQuery Plugin, by Nik Kalyani](http://kalyani.com/2010/10/subway-map-visualization-jquery-plugin/). It provides a pretty slick way of drawing lines, establishing stations, connectors, and other icon Subway map visualizations. I have been running this on Github using Jekyll, but wanted to make it something that I could keep portable and machine readable so that anyone else could run in locally or on the web. 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_visualizer_subway_map.png)](https://documenter.postman.com/view/35240/SW7XbVW4?version=latest)

I haven't hooked the visualization up to any specific APIs yet. I’m going to make it run from my API lifecycle training, allowing users to visualize and then explore the stops along the API life cycle they want. Then I want to see what I can do to hook it up to AWS, Google, and Azure for helping visualize API infrastructure, allowing me to map out different APIs, and organize them into lines based upon OpenAPI tags or Postman collection folders.

[The Subway Map visualization Postman collection is published as a template in the Postman network](https://explore.postman.com/templates/4422), and I have [published supporting documentation](https://documenter.postman.com/view/35240/SW7XbVW4?version=latest) from [the collection](https://www.postman.com/collections/926778ece9009912872b). Once I have updated it to work with any particular API I will publish a separate template, keeping this one as my base, but then evolving it to meet different API life cycle and infrastructure needs, helping create a Subway map for navigating the complex API landscapes we are building.
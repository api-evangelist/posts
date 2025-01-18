---
layout: post
title: API Visualization Exploration Using API Definitions
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-specification-visual-documentation.png
author:
  name: kinlane
tags:
  - Definitions
  - Visualization
  - Definition
  - Exploration
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-specification-visual-documentation.png)](http://apihandyman.io/swagger/swagger-specification-visual-documentation/)

There are number of areas across the API life-cycle that are being expanded upon in the current space, thanks to the evolution of API definition formats like Swagger, API Blueprint, and RAML. One area I haven't seen as much growth as I'd like, is in the area of [visualizations driven by API definitions](http://visualization.apievangelist.com/). 

There are two distinct pools of API definition driven visualization: 1) Letting you visualize the surface area of an API 2) Letting you visualize the resource made available via an API. One area my friend the [@APIHandyman](https://twitter.com/apihandyman) has been exploring is around the surface area of API.

@APIHandyman has a nice prototype created that he is calling "[Swagger Specification Visual Documentation](http://apihandyman.io/swagger/swagger-specification-visual-documentation/)". The API Definition driven visualization uses A [D3.js visualization](http://d3js.org/) to help you explore the surface area of any API that is defined using Swagger. [I have written about API definition driven visualizations before](http://apievangelist.com/2015/02/06/my-wish-has-been-granted-swagger-driven-api-visualizations-from-ardoq/), so I am happy to see the concept being pushed forward, as we have a lot of iterations to cycle through before we find a visualization format(s) that works for different API designers, architects, and developers.

The visual documentation that @APIHandyman created runs on Github, and he is looking for feedback on the micro tool, and where he should take it next. He recently added a bigger information display area, but could use the communities ideas on how to make it more useful. This type of work is a time drain. Every time I started playing with Swagger + D3.js I would lose an entire evening, and have very little to show for work, so I know how valuable feedback can be.

I strongly feel that [API definition driven D3.js visualizations](http://apievangelist.com/2014/10/30/swagger-visualization-layer-using-d3js/) will be the future of API design, management, and orchestration. APIs are going to continue to grow in number, and scope, and we will need simple, visual ways we can quickly traverse the landscape, and makes sense of things. If you are working on an API definition driven visualization tool, either for the surface area of an API, or helping visualize the actual resources being served up, please let me know so I can showcase.
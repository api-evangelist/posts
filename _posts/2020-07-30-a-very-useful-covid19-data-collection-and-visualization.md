---
published: true
layout: post
title: A Very Useful COVID-19 Data Collection and Visualization
image: >-
  https://aws1.discourse-cdn.com/business6/uploads/getpostman/optimized/2X/9/9a880cddc319cb626b612973052cb96497719594_2_624x360.gif
author:
  name: kinlane
tags:
  - Covid
  - Collections
  - Visualizations
---
This is [a repost from the Postman community on a very slick COVID-19 data project with accompanying Postmn collection](https://community.postman.com/t/visualizing-covid-19-data-with-amcharts/13765) to actually work with the data and get back responses, and then view responses as a visualization using the Postman visualizer. Here is what was posted by Carson Hunter ([@carrrson](https://twitter.com/carrrson)) from [Metadata Technology North America (MTNA)](http://www.mtna.us/).

* * *

_We’ve been hard at work building our [Rich Data Services COVID-19 project 4](https://covid19.richdataservices.com/?utm_source=postman&utm_medium=postmanlabs&utm_campaign=community_forums) and are excited to finally be releasing it to the public and to have our API included in the Postman COVID-19 API Resource Center. The API includes a free-to-use and always-expanding catalog of curated COVID-19 data and metadata that’s all set up to use with the Postman collection. (Docs are [here 2](https://documenter.getpostman.com/view/2220438/SzYevv9u?version=latest), or run it with the button below.)_

_[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d7ee885507bf76b499a1)_

_The API has a lot of great features for querying and packaging data, but maybe the coolest thing of interest to the Postman community is the ease of integration with charting libraries, so you can create visualizations quickly and easily._

_In this collection, we’ve focused on using amCharts, but RDS also supports Plotly and Google Charts if that’s your thing. By specifying one of these libraries in the request, the API returns the data in a format that’s directly consumable by the library, so you don’t have to worry about manipulating the response._

_We’ve included some visualization examples from the collection below, but the amCharts library is vast and there is a lot of COVID data out there, and we would love to see any creations the Postman community comes up with using the API. You can tweet us at [@mtnaus](https://twitter.com/mtnaus). Cheers!_

_Create a bar chart comparing positive and total covid tests by state:_  
 

[![](https://aws1.discourse-cdn.com/business6/uploads/getpostman/optimized/2X/1/1b2c8430bf259f625909d40f3b7fd0b8b2884dfa_2_624x360.gif)](https://aws1.discourse-cdn.com/business6/uploads/getpostman/original/2X/1/1b2c8430bf259f625909d40f3b7fd0b8b2884dfa.gif)

[](https://aws1.discourse-cdn.com/business6/uploads/getpostman/original/2X/1/1b2c8430bf259f625909d40f3b7fd0b8b2884dfa.gif)  
Create a line chart comparing covid cases between countries:

[![](https://aws1.discourse-cdn.com/business6/uploads/getpostman/optimized/2X/9/9a880cddc319cb626b612973052cb96497719594_2_624x360.gif)](https://aws1.discourse-cdn.com/business6/uploads/getpostman/original/2X/9/9a880cddc319cb626b612973052cb96497719594.gif)

  

* * *

We had a lot of COVID-19 collection submitted as part of the work we've been doing on [the Postman COVID-19 Resource Center](https://covid-19-apis.postman.com/), and this is one of the most useful we've received, but it is definitely the best because it provides visualizations, using the Postman Visualizer. Which I think is the next killer feature of Postman, something I am seeing sales, analyst, and other non-developer folks putting to use. 

I just got off a web conference with Carson and her team at [Metadata Technology North America (MTNA)](http://www.mtna.us/), and we'll be doing more work around the data they are publishing as part of their important work. I was please to learn that they are very passionate about data, APIs, standards, and helping researchers and government agencies be more successful in their work. We  will b emeeting again to discuss some more COVID-19 collection work, but also brainstorm what is possible with other types of datasets that just needs some polishing and storytelling to make more useful to a wider audience.--so expect more stories and collections like this one in future posts.
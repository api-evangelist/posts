---
layout: post
title: A Machine Readable Version of The Presidents Fiscal Year 2016 Budget On Github
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/2016_budget_header.jpg
author:
  name: kinlane
tags:
  - Github
  - Git
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/2016_budget_header.jpg)](https://github.com/WhiteHouse/2016-budget-data)

The release of the the [president's fiscal year 2016 budget in a machine readable format on Github](https://github.com/WhiteHouse/2016-budget-data) was one of the most important things to come out of Washington D.C. in a while when it comes to open data and APIs. I was optimistic when [the president mandated that all federal agencies need to go machine readable by default](http://apievangelist.com/2012/06/01/barack-obama-directs-all-federal-agencies-to-have-an-api/), but the release of the annual budget in this way is an important sign that the White House is following its own open data rhetoric, and something every agency should emulate.

There is still a lot of work to be done to make sense of the federal budget, but having it published in a machine readable format on Github saves a lot of time, and energy in this process. As soon as I landed on the Github repository, clicked into the [data folder, and saw the three CSV files, I got to work converting them to JSON format](https://github.com/kinlane/2016-budget-data/tree/master/data). Having the budget available in CSV is a huge step beyond the historic PDFs we’ve had to process in the past, to get at the budget numbers, but having it in JSON by default, would be even better.

What now? Well, I would like to make more sense of the budget, and to be able to slice and dice it in different ways, I’m going to need an API. Using a Swagger definition, I generated a simple server framework using Slim & PHP, with an endpoint for each file, budauth, outlays, and receipts. Now I just need to add some searching, filtering, paging, and other essential functionality, and it will be ready for public consumption--then I can get to work slicing and dicing the budget, and previous years budgets in different ways.

I already have my eye on a couple [D3.js visualizations](http://d3js.org/) to help me make sense of the budget. First I want to be able to show the scope of budget for different areas of government, to help make the argument against bloat in areas like military. Second, I want to provide some sort of interactive tool that will help me express what my priorities are when it comes to the federal budget--something I've done in the past.

It makes me very happy to see the federal government budget expressed in a machine readable way on Github. Every city, county, state, and federal government agency should be publishing their budgets in this way. PDF is not longer acceptable, in 2015, the minimum bar for government budget is a CSV on Github—let’s all get to work!
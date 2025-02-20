---
layout: post
title: Tracking On Data.json Deployment Across Federal Agencies
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Tracking
  - Deployment
  - Data
  - Agencies
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/FDA_-_Data.png)](http://data.json.monitor.publicprivatesector.org/)

I'm tracking on the evolution of [Executive Order 13642](http://www.whitehouse.gov/the-press-office/2013/05/09/executive-order-making-open-and-machine-readable-new-default-government) from last May, which was the White House directive to make open and machine readable the new default for government information. The piece that I'm tracking on specifically right now is around the [OMB Memorandum M-13-13](http://project-open-data.github.io/policy-memo) Open Data Policy-Managing Information as an Asset, in which one of the items require agencies to publish a data.json file that provides a machine readable inventory of each agencies public data assets.

Much like the [tracking I did around the digital strategy](http://apievangelist.com/2012/08/21/11-more-federal-departments-and-agencies-have-published-their-api-digital-strategies/), I've [stood up a monitoring script](http://data.json.monitor.publicprivatesector.org/) that I got from [Philip Ashlock's Github](https://github.com/philipashlock/farm-server), which I will be running daily to track on which agencies have published their data.json in anticipation of the November 30th deadline. A handful of agencies already have their data.json file up, others show a green check, but in reality their HTTP status codes are incorrect, as [I've talked about before](http://kinlane.com/2013/11/06/knowing-your-http-status-codes-in-federal-government/).

I'll re-run this script nightly and keep an eye on which agencies publish their data.json and highlight what types of data sets they've made available. I think in reality, the challenges faced in taking inventory of open data, getting them published will prevent many agencies from making the deadline. Something that was just made worse by the government shutdown in October.

Even with these challenges, I'm hopeful that agencies will surprise us and publish some amazing stuff.
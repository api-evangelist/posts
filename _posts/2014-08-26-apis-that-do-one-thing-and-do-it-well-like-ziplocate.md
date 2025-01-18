---
layout: post
title: APIs That Do One Thing And Do It Well Like ZipLocate
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ZipLocate.png
author:
  name: kinlane
tags:
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/ZipLocate.png)](http://ziplocate.us/)

My friend Mark Silverberg ([@skram](https://twitter.com/skram)), pointed out a very cool API the other day, that geolocates zip codes, and appropriately named [ZipLocate](http://ziplocate.us/). What I really like about ZipLocate is that they do one thing, and they do it well. Don’t get me wrong I love me some AWS and Twilio, who have industrial grade APIs, but I also have a love for simple, lightweight APIs that focus on one thing.

Another interesting thing about ZipLocate is that it is always free, and never rate limited. He says that it is relatively cheap to host the API, because bandwidth usage is light, with all API calls are heavily cached. I like this type of micro service design--I want thousands more just like it.

What I also dig about ZipLocate is that if you _“...don't trust the API to be around tomorrow? Host it yourself. Source code and data import scripts available on Github”_. This is possible because the ZipLocate API is open source, and the data comes from the [Census Bureau](https://www.census.gov/geo/reference/zctas.html). This approach to developing dead simple APIs on top of government data is really important, and I personally feel that [all 6,482 data sets across 22 federal agencies who have published their data.json file](http://kinlane.com/2014/08/25/6482-datasets-available-across-22-federal-agencies-in-datajson-files/), should have APIs just like ZipLocate.

It looks like ZipLocate is a project developed by Nathan Cahill ([@nathancahill](https://twitter.com/nathancahill)). I like his style, and think his approach is simple, elegant, yet extremely powerful, and provides a blueprint that others can follow when [designing, developing and deploying APIs built on top of public data](http://apievangelist.com/2014/07/23/models-for-api-driven-startups-built-around-public-data-/).
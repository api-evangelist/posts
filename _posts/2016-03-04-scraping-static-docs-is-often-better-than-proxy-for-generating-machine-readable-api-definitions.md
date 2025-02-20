---
layout: post
title: >-
  Scraping Static Docs Is Often Better Than Proxy For Generating Machine
  Readable API Definitions
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Definitions
  - Scraping
  - Proxy
  - Static
  - Definition
  - Docs
---
I was looking to create an [APIs.json](http://apisjson.org) plus [OpenAPI Spec(s)](https://github.com/OAI/OpenAPI-Specification) for the [WordPress.org API](http://v2.wp-api.org/), and the [Instructure Canvas Learning Management System (LMS) API](https://canvas.instructure.com/doc/api/index.html). I am pulling together a toolkit to support a workshop at Davidson College in North Carolina this month, and I [wanted a handful of APIs that would be relevant to students, and faculty on campus](http://kinlane.github.io/indie-edtech-data-jam/). 

In my experience, when it comes to documenting large APIs using OpenAPI Spec, you don't want to be hand rolling things, making auto generation essential. There are two options for accomplishing this, 1) I can use a proxy like [Charles](http://apievangelist.com/2016/02/05/automated-mapping-of-the-api-universe-with-charles-proxy-dropbox-openapi-spec-and-some-custom-apis/) or [Stoplight.io](http://apievangelist.com/2016/02/16/automagically-defining-your-api-infrastructure-as-you-work-using-stoplightio/), or 2) I can write a script to scrape the publicly available HTML documentation for each API. While I do enjoy playing with mapping out APIs in Stoplight.io, allowing it do the heavy lifting of crafting each API definition, sometimes there is more relevant meta data for the API available in the API documentation.

The OpenAPI Spec, plus APIs.json files for both the [WordPress](http://kinlane.github.io/indie-edtech-data-jam/data/wordpress/apis.json) and [Instructure Canvas](http://kinlane.github.io/indie-edtech-data-jam//data/instructure-canvas/apis.json) APIs took me about an hour a each, to write the script, and round off the OpenAPI Spec, making sure it was as complete as possible. Through scraping, I get description for endpoints, parameters, and sometimes I also get other detail including sample responses, enum, and response codes.

One downside of obtaining an API definition by scraping, is that I only get the surface area of an API, not the responses, and underlying data model. Sometimes this is included in documentation, but I do not always harvest this--waiting until I can get a often more correct schema, when I map out using a proxy or via HAR file. This is OK. I find the trade-off worth it. I'd rather have the more human-centered descriptions, and names of each endpoints, than the response definitions--that will come with time, and more usage of the actual APIs.

In the end, it really depends to the size of an API, and the quality of the API documentation. If it is a big API, and the documentation is well crafted, it is preferable to scrape and auto generate the definition. Once I have this, I can load it into Postman or Stoplight.io, start making API calls, and use either Stoplight's proxy, or my own solution that uses Charles Proxy, to provide the remaining schema of the responses, as well as the resulting HTTP status code(s).

I think the human touch on all APIs.json, OpenAPI Spec, and API Blueprint files will prove to be essential in streamlining interactions at every stop along the API life cycle. If you can't easily understand what an API does, and what the moving parts are, the rest won't matter, so having simple, well written titles, and descriptions for APIs that are described in each machine readable definition is well worth any extra work. Even with auto generation via scraping, or Stoplight.io, I find I still have have to give each API definitions a little extra love to make sure they are as polished as possible.

I'm thinking I will start keeping a journal of the work goes into crafting each API's definition(s). It might be something I can use down the road to further streamline the creation, and maintenance of my API definitions, and the API services I develop to support all of this.

Here is the APIs.json for the Wordpress.org API by the way:

Here is the APIs.json for the Instructure Canvas API as well:

[You can see these, and some other API definitions for my workshop over at the Github repo for the project](http://kinlane.github.io/indie-edtech-data-jam/). I created a new Liquid template, that allows me to display APIs.json and OpenAPI Specs within the Jekyll site for this project. Something that I will be using to better deliver API driven content, visualizations, and other resources that help us learn about, and put APIs to work.
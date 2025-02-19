---
layout: post
title: >-
  Variable Rates On Your API GET Requests Depending On How Many POST or PUT
  Requests You Make
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-scatter-plot.png
author:
  name: kinlane
tags:
  - PUT
  - POST
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-scatter-plot.png)](http://plans.apievangelist.com)

I'm down in the detail of how we craft our API plans, looking at the approaches of almost 100 different providers, and [working to establish a common schema for cataloging the plans of these popular APIs](http://alpha.apievangelist.com/2015/12/15/playing-with-a-json-representation-for-the-plans-for-many-of-the-leading-apis/). [I have already talked about dialing in your API pricing down to the endpoint and level,](http://apievangelist.com/2015/12/15/dialing-in-your-api-pricing-down-to-the-endpoint-and-verb-level/) but was something I wanted to take a little bit further.

In my previous story, I talked about how mature API providers charge different rates for POST, and PUT requests, than they did for GET requests. Using this scenario, what if we wanted to incentivize and reward behavior through variable rate pricing at the HTTP verb level, to give developers more ownership over an API, including better access and pricing structures the more they contribute.

Lets use a standard business directory like say Crunchbase as a model. Everyone wants this data, and you only get so many GET requests, based upon the rate limits limits they've set. What if I was given access to more GET requests, based upon the number of POST and PUT requests I made? Meaning the more data I had added, and updated, the more access I was given when pulling data. Something I think could incentivize developers to be more involved, and improve on the overall quality of content or data via an API.

Of course, there would be ways people could game this, but I'm pretty sure you could identify the bad actors using modern API management approaches. You would also need other checks and balances, and quality control elements to make this a reality, but I wanted to focus on the service composition aspect. Could you incentivize internal, partner, or even public API developers to take more ownership of a resource, and help make it better, by applying variable rate controls at the GET level, that are influenced by controls at the POST, and PUT levels?

Something to think about. It is also something I will keep an eye out for more, as I'm making my way the portals, documentation, and pricing pages of APIs that I review. It doesn't seem like something that would take much work. I know this would be possible with my 3Scale API infrastructure, which allows me to configure pricing on a plan, as well as customized individual basis. It would not take much to adjust this rate based upon rate limits met, exceeded for specific API calls, or [other influencing metric I decided](http://plans.apievangelist.com/building-blocks.html).
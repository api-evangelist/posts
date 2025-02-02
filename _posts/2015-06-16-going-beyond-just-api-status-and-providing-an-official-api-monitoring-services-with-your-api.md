---
layout: post
title: >-
  Going Beyond Just API Status And Providing An Official API Monitoring
  Service(s) With Your API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-science-monitors.png
author:
  name: kinlane
tags:
  - Monitoring
  - Status
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-science-monitors.png)](https://kin-lane.github.io/api/status/)

I've long advocated that an [API Status page](https://kin-lane.github.io/api/status/) should be a required building block for any API operation. As I work on monitoring for my own [master API stack](https://kin-lane.github.io/master/), and as I read stories like [Pingometer Keeps Your Uptime In The 9’s With Twilio SMS](https://www.twilio.com/blog/2015/06/pingometer-keeps-your-uptime-in-the-9s-with-twilio-sms.html), I'm thinking we need more that just a simple status report for our APIs.

From an API provider standpoint, we should have a more nuanced view of our API availability, beyond just up or down--something popular API integration service providers like [Runscope](http://runscope.com) and [API Science](http://apiscience.com) have been saying for a while. If our APIs are publicly available, I'm going to even suggest providers start actively sharing their API monitoring strategy, and resulting data with the ecosystem--something I'm going to also be [advocating for inclusion in the APIs.json index](http://alpha.apievangelist.com/2015/06/06/adding-api-science-monitors-to-my-master-stack-and-including-in-each-apisjson/).

From an API consumer standpoint, you are going to want a real-time awareness about the availability of all the APIs you depend on, and much like the provider standpoint, this view needs to be more nuanced than just whether a service is up or down. Developers need to be making tactical, run-time decisions based upon API monitoring, as well as be able to make longer term strategic decisions about which APIs they depend on, based upon API monitoring exhaust. 

I like Twilio's style for showcasing [Pingometer](https://pingometer.com/) as a solution. I'm thinking every API provider should cozy up with an API monitoring service provider for their own needs, while also establishing an approach they can also share with their API consumers, to meet their needs as well. I'm currently adding API Science and Runscope as default building blocks for my API Stack, something you will find indexed as part of each of my services APIs.json file.

I'm working to coherently separate out the benefits API service providers like API Science and Runscope bring to the table for both API providers, and API consumers, in a way that is also in alignment with a common set of building blocks, that everyone involved can benefit from, throughout the API life-cycle.
---
layout: post
title: Overcoming API Rate Limits Like They Did With WebhookDB
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/traffic-and-weather/Traffic-and-Weather.png
author:
  name: kinlane
tags:
  - Rate Limits
  - Web
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/traffic-and-weather/Traffic-and-Weather.png)](http://trafficandweather.io/)

I was [listening to too infrequent Traffic and Weather API podcast today](http://trafficandweather.io/posts/2015/3/19/episode-28-everybody-likes-to-listen-to-people-searching-for-things-on-twitter), and one of the topics John and Steve covered was an interesting approach to API consumption, and getting past API rate limits, with [WebhookDB](https://github.com/singingwolfboy/webhookdb). I agree with John, that WebhookDB is pretty clever, and represents what I'd consider classic API developer ingenuity, when it comes to getting access to the resources they need. I’d have to give this one to my friend and API adversary Tyler Singletary ([@harmophone](https://twitter.com/harmophone)), when he says rate limits stimulate developer creativity. +1 Tyler.

So, what does WebhookDB do?

> _...allows you to replicate Github's database over HTTP using webhooks. It's useful if you want to treat Github's APIs as a database, querying over pull requests and issues. Github doesn't like that, and you'll quickly hit the API's rate limits -- but if you use WebhookDB, you don't have to worry about it! Just populate the initial data into the database, set up the webhook replication to keep it in sync, and query your local database however you'd like..._

There is more back-story over at the [REST API gotcha, and webhookdb story](http://nedbatchelder.com/blog/201412/rest_api_gotcha_and_webhookdb.html) that Traffic and Weather linked to. I agree with John’s thoughts, that this is an opportunity for a service provider to step up and deliver on. I envision a pretty simple, open source, containerized version, as well as a cloud-based version that people could tap into, and pay for more premium services on top of each index.

John is right, there will be significant overhead in defining the schema of each API you would support. Let me know, I can help with some of the targeting, alongside what I’m doing for my [API Stack](http://theapistack.com). Each API would need some special attention, but with containers, you could easily build out a pretty slick deployment solution that runs in cloud, or in infrastructure of choice for end-users. With some heavy lifting up front, it would be a pretty viable solution for API consumers, but I also think provide an interesting cache opportunity for API providers--think [Datasift](http://datasift.com/).

I also see a higher, more analyst level view here, in helping establish a common definition of web hook patterns across the space, and identify common patterns, then bring much needed education and potential consistency to the API space when it comes to webhook execution. Kind of like what I work to do for API design, deployment, management, integration, and other key areas of the API space. People are hungry for this type of information, and I’m happy to aggregate the work of anyone who steps up and delivers in this way.

I would also take this one step further, and charge someone with stepping up into more of a web hook advocacy role, where you could push back on some API providers to offer webhooks (many don’t), and improve existing web hook designs, again helping establish consistency in the space. In my experience many API providers want to understand the bigger picture, but don’t often have the time or awareness, and with a little education, and guidance, you could make a significant impact.

I look at webhooks as the important second lane, making APIs a two-way street, shifting API operations to be just as much push, as it is pull. Web hooks play a different role in potentially each APIs operations and ecosystems, but for many platforms, they will continue to play an important role in giving developers more control over API resources, while also eliminating much of the burden upon API providers.

Great idea John and Steve, thanks for sharing. One more reason to tune into [Traffic and Weather](http://trafficandweather.io/)—startup ideas!!
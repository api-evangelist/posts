---
layout: post
title: IFTTT vs Zapier vs DataFire
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/data_fire_bulb.png
atomdate: 2017-01-13T17:00:00.000Z
tags:
  - Data
  - Zapier
---
[Integration Platform as a Service (iPaaS) solutions are something I've been tracking on for a while](http://ipaas.apievangelist.com/), and an area I haven't seen too much innovation in, [except by Zapier](http://apievangelist.com/2016/10/11/ipaas-in-your-browser-with-push-by-zapier/) for most of that time. I'm a big fan of what IFTTT enables, but I'm not a big fan of companies who build services that depend on APIs but do not offer APIs in turn, so you don't find me highlighting them as an iPaaS solution.

Instead, [you'll find me cheering for Zapier](http://apievangelist.com/archive/), who has an API, and even though I wish they had more APIs, I am grateful they paying it forward a little bit. I wish we had better solutions, but the [politics of API operations](https://apievangelist.com/2014/03/17/politics-of-apis/) seems to slow the evolution of iPaaS, usually leaving me disappointed.

That was until recently when some of my favorite API hackers released DataFire:

_DataFire is an open source integration framework - think Grunt for_ APIs, _or Zapier for the command line. It is built on top of open standards such as RSS and Open API. Flows can be run locally, on AWS Lambda, Google Cloud, or Azure via the Serverless framework, or on DataFire.i_o.

"DataFire natively supports over [250 public APIs](https://github.com/DataFire/Integrations/tree/master/integrations) including: • Slack • GitHub • Twilio • Trello • Spotify • Instagram • Gmail • Google Analytics • YouTube, as well as MongoDB, RSS feeds, and [custom integrations](https://github.com/DataFire/DataFire/blob/master/docs/Integrations.md)." They have a [sample flows available as an individual Github repositories](https://github.com/DataFire-flows). Integrations can be added by the URL of an Open API (Swagger) specification or an RSS feed, you can also specify --raml, --io\_docs, --wadl, or --api\_blueprint.

DataFire is new, so it has a lot of maturing to do as an API framework, but it has EVERYTHING that iPaaS solutions should have at its core in my opinion. It's API definition-driven, its open source, and [there is a cloud version that any non-developer user can put to use](http://datafire.io). DataFire is encouraging everyone to share each of the flows as machine readable templates, each as their own Github repository so that anyone can fork, modify, and put to work. #IMPORTANT

This is the future of iPaaS. There is lots of money to be made in the sector, empowering average business, professional, and individual users when it comes to managing their own bits on the web--if current providers get out of the way. The problem with current solutions is that they work too hard to capture the exhaust of these workflows and limit their execution to specific walled garden platforms. DataFire acknowledges that these flows will need to be executed across all the leading cloud providers, orchestrated in serverless environments, as well as more managed level of service in a single, premium cloud edition. 

DataFire is the iPaaS solution I've been waiting to see emerge and will be investing time into learning more about how it works, developing integrations and flows, and telling stories about what others are doing with it. DataFire and DataFire.io needs a lot of polishing before it is ready for use by the average, non-technical IFTTT or Zapier user, but I don't think it won't take much to get it there pretty quickly. I'm stoked to finally have an iPaaS solution that I can get behind 100%.
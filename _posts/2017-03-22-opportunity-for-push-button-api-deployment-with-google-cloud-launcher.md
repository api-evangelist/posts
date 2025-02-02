---
layout: post
title: Opportunity For Push Button API Deployment With Google Cloud Launcher
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/google_cloud_launcher_lead.png
atomdate: 2017-03-22T22:00:00.000Z
tags:
  - Cloud
  - Deployment
---
I'm keeping an eye on the different approaches to deploying infrastructure coming out of AWS, Google, Microsoft and other providers. In my version of the near future, we should be able to deploy any API we want, in any infrastructure we want with a single push of a button. We are getting there, as [I'm seeing more publish to Heroku buttons](https://t.co/IzZs6W0wAr), [AWS and Azure deployment packages](http://apievangelist.com/2016/09/12/where-is-the-deploy-to-aws-and-google-button/), and I recently came across the [Google Cloud Launcher](https://cloud.google.com/launcher/), which I think will work well for deploying a variety of API driven solutions--we just need more selection and a button!

All the parts and pieces for this type of push button API deployment exist already, we just need someone to step up and provide a dead simple framework for defining and embedding the buttons, abstracting away the complexities of each cloud platform. I want to be able to take a single manifest for my open source or wholesale API on Github, and allow anyone to deploy it into Heroku, AWS, Google, Azure, or anywhere else they want. I want the technical, business, and legal complexities of deployment abstracted away for me, the API provider.

API management has matured a lot over the last 10 years, and API design and definitions are currently flourishing. We need a lot more investment in helping people easily deploy APIs, wherever they need. I think this layer of interoperability is the responsibility of the emerging API service providers like [Restlet](http://apis.how/5ytnitnakm), [DreamFactory](http://apis.how/bgdteovduo), or maybe even [APIMATIC](http://apis.how/kjtj5bbuxu). I will keep tracking on what I'm seeing evolve out of the leading cloud platforms like AWS, Azure, and now Google with their Cloud Launcher. I will also keep pushing on my API service provider partners in the space to enable API deployment like this--I am guessing they will just need a little nudging to see the opportunity around providing API deployment in this seamless, cloud-agnostic way.
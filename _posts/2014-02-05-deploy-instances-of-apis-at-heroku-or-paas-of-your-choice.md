---
layout: post
title: Deploy Instances Of APIs At Heroku Or PaaS Of Your Choice
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/heroku/heroku-logo.png
author:
  name: kinlane
tags:
  - APIs
---
I wrote about the [interesting approach by Plivo the other day around their Voice Chat API](http://apievangelist.com/2014/02/01/the-voice-chat-api-is-great-example-of-an-simple-open-api-driven-resource/), in which one thing they did really caught my eye, and reflects what I think is the future of APIs—the deployment of the API to Heroku.

This type of very modular, cloud deployment of fine grain APIs is something that I’ve blogged about recently in [Modular APIs Driven From Github Blueprints Using OpenShift](http://apievangelist.com/2013/11/16/modular-apis-driven-from-github-blueprints-using-openshift/), [Server Side API Templates On AWS Cloud Formation And OpenShift](http://apievangelist.com/2013/11/20/server-side-api-templates-on-aws-cloud-formation-and-openshift/), and [Caching APIs With CloudFormations Or OpenShift](http://apievangelist.com/2014/01/12/caching-apis-with-cloudformations-or-openshift-/).

As part of the Voice Chat API, Plivo allows you to deploy an instance of the open source audio conference API to your own Heroku account. This is an interesting way to empower developers to deploy API resources, allowing them to allocate them within their preferred cloud environment, whether it is Heroku, Amazon, OpenShift from Redhat, or any other provider.

I haven’t investigated if there are any dependencies between the Voice Chat API and Plivo, but even with dependencies, this approach still holds a lot of promise. This gets us closer to some of my [earlier thoughts around virtual API stacks](http://apievangelist.com/2013/01/28/virtualized-api-stacks/), that allow us to build, manage and put to use the most meaningful stack of APIs possible for our applications—think b[ackend as a service (BaaS),](http://baas.apievangelist.com "Backend As A Service") but custom fit to exactly the resources we need.
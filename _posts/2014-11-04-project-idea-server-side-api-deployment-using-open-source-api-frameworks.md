---
layout: post
title: 'Project Idea: Server Side API Deployment Using Open Source API Frameworks'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-stack-api-frameworks.png
author:
  name: kinlane
tags:
  - Deployment
  - Open Source
  - Project
  - Frameworks
  - Open
---
As I write up a [story on Magnet](http://apievangelist.com/2014/11/03/the-expanding-api-universe-more-api-sdk-focused-services-emerge/), another one of the API SDK service providers to emerge in the space, I can't help but evaluate what other building blocks have the potential to evovolve, and be offered as a specific service. Machine readable API definition formats like [Swagger](http://bitly.com/1tnYxV8) and [API Blueprint](http://bit.ly/1cl8tCc) make services like [Apimatic](http://bit.ly/1qnXcI0) and Magnet possible, and I enjoy thinking about other potential services that could be easily generated from definitions in this way.

One possiblity that comes to mind is server side scaffolding, and the possibilities of generating server side scaffolding for your APIs in a variety open source API frameworks, using machine readable definitions. It is difficult to generate 100% of the server side of an API using machine readable API definitions, but you sure can go a long way in auto generating a scaffolding that will get you most of the way there.

I’m picturing a whole library of every REST framework known to man (and woman), and the ability to select framework, and upload a machine readable Swagger specification, and the service generates a zip file, or publishes to Github for you. The service would save you the time of going out and finding the latest version of your favorite (or clients) REST framework, and do most of the heavy lifting in setting up, configuring, and crafting API endpoints. Eventually you might think about other ways to distribute, like docker containers on AWS, Google, and even PaaS services like Heroku.

It would be easy to use [APIs.io](http://apis.io), and the [APIs.json](http://apisjson.org) files to find API design patterns, and make those available in a library alongside all of the available REST frameworks. I would build this myself, but I just don't have time, and it isn’t an idea I think anyone is going to get rich off of, but I think you could make a good living charging a couple bucks to generate server side API scaffolding, and keep tabs on the latest REST API frameworks.

I’ll keep sharing these ideas that are generated from my monitoring of the API space, in hopes some of you take advantage of them, and bring them to life.
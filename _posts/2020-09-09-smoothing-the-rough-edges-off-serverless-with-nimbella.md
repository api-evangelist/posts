---
published: true
layout: post
title: Smoothing the Rough Edges Off Serverless with Nimbella
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_09_09_at_1.35.35_pm.png
author:
  name: kinlane
tags:
  - Serverless
  - Deployment
---
One of my current tasks at Postman is to help explore what the future of API deployment looks like. When I went into this work I expected serverless to play a significant role, but I have to admit I didn’t anticipate the ways in which serverless would be used to reduce the steps it takes to actually deploy APIs. One of the tools I have been playing with for a couple of months now is [Nimbella](https://nimbella.com/), which describes itself as _“the simplest way to build and run serverless applications”_. I spent significant amounts of time building collections for deploying APIs to AWS using Lambda earlier this year, so when I had an API deploying in just a couple of minutes with Nimbella, you can say I was pretty impressed with what they have done to serverless by making it easy, but also bringing in the critical ingredients you need to actually deliver meaningful apps.

Nimbella is free to get started. Once you have logged in you can fire up your first project within 60 seconds, after installing the Nimbella CLI for Mac, Windows, or Linux. Once you have the CLI installed you can just execute:

*   _**nim auth login \[your token\]**_ 

This command, plus all three runtimes are available on the home page of you account once you have signed up--then you can choose to install a single one of their start projects with:

*   _**nim project deploy github:nimbella/demo-projects/qrcode**_
*   _**nim project deploy github:nimbella/demo-projects/visits**_
*   _**nim project deploy github:nimbella/demo-projects/ocr**_
*   _**nim project deploy github:nimbella/demo-projects/chat**_

Or you can go ahead and clone all of their demo projects, which I recommend, because it allows you to reverser engineer a whole suite of simple serverless micro applications:

*   _**git clone [https://github.com/nimbella/demo-projects](https://github.com/nimbella/demo-projects)**_

Within five minutes you can be reverse engineering what is possible when you deploy APIs and/or applications with Nimbella. With each Nimbella project you begin with two folders locally on your machine, the power your implementation:

*   **Functions** - This is the functional API side of the serverless app coin.
*   **Web** - This is the human web side of each micro application being delivered.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_09_09_at_1.36.12_pm.png)

Once your project is deployed, all you do is develop exactly the API and web application you need, and Nimbella syncs your local dev environment with the cloud. Abstracting away all the backend complexities of actually delivering a serverless API and application. After banging my head on the serverless worlds of each of the top three cloud providers I can seriously appreciate the frictionless deployment of Nimbella. They make it easy. I am not even touching on the application side of things, just the API. Where the Nimbella approach really shines is bringing in the ability to manage state, IAM, logging, and everything you will need to scale each of your APIs and applications, into a simple solution that will run in each of the clouds, or in an on-premise environment at the higher tiers. If you are truly looking to explore the world of serverless, but don’t have an allegiance to any of the cloud providers I recommend checking out what is possible with Nimbella, it will make your first serverless experience much more more pleasant. Nimbella has abstracted away the complexities I first encountered with each of the cloud providers solutions, which made my early serverless journey a little hellish.

This is just the start of my work with Nimbella. I am preparing for my webinar with them next week, and next I am diving into how you can extend Nimbella using plugins, and specifically how you can rapidly deploy APIs from Postman Collections and OpenAPI definitions using Nimbella. Taking server side codegen to the next level, allowing you to rapidly generate the scaffolding for your APIs in seconds, using the Postman API builder and Nimbella to define each of your APIs. Going beyond just defining and mocking your APIs in Postman, and quickly deploying an API across cloud environments. I think once I write stories about each of the Postman and OpenAPI plugins for Nimbella, I might talk more about them being a true multi-cloud option, living up to the promise of serverless, but a promise that tends to fade as you are doing serverless on each individual cloud platform. [Nimbella](https://nimbella.com/) holds a lot of potential for me when it comes to how we deploy APIs using Postman, and I am looking forward to this story series, but also [my webinar with them next week to show what is possible when you use Postman and Nimbella together](https://www.postman.com/webinars/nimbella/).
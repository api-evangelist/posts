---
layout: post
title: Deploy A Grape Doorkeeper Driven API To Heroku With A Click Of A Button
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_01_at_10.46.36_pm.png
atomdate: 2017-03-03T20:00:00.000Z
tags: []
---
There have been many advances in the way that we deploy APIs in the last couple of years, but I still want more of an embeddable, push botton way to deploy generic or even more specialized APIs. This is something I've ranted about before, [asking where the deploy to AWS and Google buttons](https://apievangelist.com/2016/09/12/where-is-the-deploy-to-aws-and-google-button/). I'm seeing more AWS solutions emerge, [helping deploy from Github using AWS Codeploy](https://apievangelist.com/2016/09/12/where-is-the-deploy-to-aws-and-google-button/), and the regular number of deploy to Heroku buttons, but not the real growth I'd like to see occur--making it a drum I will keep beating until I get what I want.

I was working [on my OpenAPI toolbox](http://openapi.toolbox.apievangelist.com/), cataloging [open source tools that put the OpenAPI specification to work](http://openapi.toolbox.apievangelist.com/), and came across a deploy with Heroku button for the [Grape Doorkeeper](https://github.com/sethherr/grape-doorkeeper/), which helps you _"create an awesome versioned API, secured with OAuth2 and automatically documented"_. This should be the default for all server-side API deployment frameworks, allowing push button deployment of any open source API framework to the cloud platform of your choosing.

If I have my way, it won't just be API frameworks that will have deployment buttons. Specialized API designs, available in a variety of frameworks will be available for deployment with a single click of a button. We should be able to deploy a product API, or a user API, to AWS, Heroku, Google, or Microsoft, with a single click. There should be a wealth of open source templates for us to choose from on Github, with deploy buttons, and easy to follow wizards that help us set things up properly.

Smells like an opportunity to me. I'll have to think more about where the revenue would come from in such a model, but I'm sure it would be easy enough to upsell deployments to some premium features and services. I understand that both the areas of API design and API deployment are playing catch-up with API management at the moment, but someone needs to get to work on streamlining the API deployment button experience across all major cloud platforms and get to work on crafting some useful API server deployments that people can put to work instantly. #please #thankyou
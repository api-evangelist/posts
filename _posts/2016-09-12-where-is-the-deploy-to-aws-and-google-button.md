---
layout: post
title: Where Is The Deploy To AWS and Google Button?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/deploy_buttons_heroku_azure.png
atomdate: 2016-09-13T00:00:00.000Z
tags:
  - AWS
---
I was playing around [Prose.io's Gatekeep solution](https://github.com/prose/gatekeeper), a proxy for enabling the client-side application dance OAuth with GitHub. I tend to use Oauth.io for all of my oAuth dancing, especially client-side on Github Pages, but for the current application I am working on, I wanted a server-side proxy where I could work some other magic--which led me playing with Prose's Gateway.

When you scroll down the page for the oAuth gateway, you'll find two deploy buttons, one for Heroku, and one for Azure--[I want all APIs, and all API solutions that support API operations (like Prose's Gateway) to be deployed like this.](http://apievangelist.com/2014/08/23/push-button-api-deployment-with-the-heroku-button/)  True open API solutions should operate this way, offering up server-side solutions in a Github repository, with one-click buttons for deploying in your infrastructure of choice.

As I write this I realize in addition to a deploy to Heroku, and Azure buttons, there should be deploy to AWS and Google buttons as well. There are [deploy instructions for AWS](https://blogs.aws.amazon.com/application-management/post/Tx33XKAKURCCW83/Automatically-Deploy-from-GitHub-Using-AWS-CodeDeploy), but not a branded button. They also have [the "phystical" IoT Button](https://aws.amazon.com/iot/button/), but alas no "virtual" deploy to AWS. There is also [deploy instructions for Google](https://developers.google.com/apps-marketplace/listing), but again no organized branded button effort. While I'm sure AWS and Google will eventually do this, it smells like an opportunity for a sort of aggregate API deployment service provider.

Just like the wealth of website templates available out there, from the WordPress to the Jekyll, we need to start building up our inventory of API solutions, which might also serve up HTML, but more importantly be serving up the JSON we need for syndication, and in mobile and device-based applications. Businesses shouldn't have to hand-craft the most common of API design patterns out there, they should be able to just click one button and have deployed in their cloud infrastructure of choice.
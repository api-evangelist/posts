---
layout: post
title: API Virtual Stack Composition Like The Absolut Drinks Data API
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/absolut/absolut-vodka.jpg
author:
  name: kinlane
tags:
  - Data
  - Stack
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/absolut/absolut-vodka.jpg)](https://addb.absolutdrinks.com/docs/)

If you read my blog regularly, you know I am constantly pushing the boundaries of how I see the API space, and sometimes my ramblings can be pretty out there, but API Evangelist is how I work through these thoughts out loud, and hopefully bring them down to a more sane, practical level that everyone can understand.

My crazy vision for the day centers around [virtual API stack](http://apievangelist.com/2013/01/28/virtualized-api-stacks/) composition, as beautiful as the [Absolut Drinks Database API](https://addb.absolutdrinks.com/docs/). Ok, before you can even begin to get up to speed with my crazy rant, you need to be following some of [my rants around using virtual cloud containers like we are seeing from docker, AWS and OpenShift](http://apievangelist.com/2014/04/07/containers-will-do-for-apis-what-apis-do-for-companies/), and you need to watch this [video from APIStrategy & Practice about Absolut Drink Databse API deployment](https://www.youtube.com/watch?v=aXk1dvLKl-U).

_Ok, you up to speed? Are you with me now?_

Today, as I was playing around with the deployment of granular API resources using AWS CloudFormations, I was using their CloudFormer tool, that allows me to browse through ALL of my AWS cloud resources (ie. DNS, EC2 Servers, S3 Storage, RDS Databases), and assemble them into a CloudFormation Templates, which is just a JSON definition of this stack I’m going to generate.

Immediately I think of the presentation from Absolut, and how they spent years assembling the image and video parts and pieces that went into the 3500 drinks they wanted available via their API, for developers to use when developing interactive cocktail apps. They had 750 images, and video clips, with a combination of 30K mixing steps, that went into the generation of the 3500 drink combinations. \* mind blown \*

Now give me this same approach but for composing virtual API stacks, instead of cocktails. With this approach you could define individual API resources such as [product API](http://products.apievangelist.com/) or [screen capture API](http://screen-capture.apievangelist.com/). These are all independent API resources, with open source server and client side code, openly licensed interface via [API Commons](http://apicommons.org), and virtual container definitions for both AWS CloudFormations and OpenShift.

Imagine if I have hundreds of high value, individual API resources available to me when composing a virtual stack. I could easily compose exactly the stack my developers need, composed of new and existing API resources. I wouldn’t be restricted to building directly on top of existing data stores or APIs, I could [deploy external API deployments that depend on sync to stay up to date](http://apievangelist.com/2014/04/16/external-api-deployments-using-sync-one-possible-future-of-government-api-deployments/), providing the performance levels I demand from my API stack--I could mix virtual API stacks, like I would a cocktail. 

Anyhoooo, that is my rant for now. I’ll finish doing the work for deploying AWS CloudFormation and OpenShift containers for my screen capture API, rounding of all the architectural components I outlined in my [API operational harness](http://apievangelist.com/2014/04/17/an-operational-harness-for-my-screen-capture-api/), and then rant some more.

Thanks for reading my rant. I hope it made some sense! ;-)
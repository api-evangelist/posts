---
layout: post
title: Even More Pondering On My Microservice Definition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-micro-definition.png
author:
  name: kinlane
tags:
  - My
  - Definition
  - Micro
---
I am evolving [my own personal microservices definition](http://apievangelist.com/2015/03/17/more-pondering-on-my-own-microservice-definition/), something that is constantly changing, as I work on my infrastructure, read other people’s own definitions (no shortage these lately), and continuing having conversations with smart folks across the space. I had the pleasure of having Mike Amundsen over the other night for dinner, and after having some interesting discussions about community, and potential micro services design, I’m adding a couple of elements to my microservice definition list.

In my [last post](http://apievangelist.com/2015/03/17/more-pondering-on-my-own-microservice-definition/) on this, I listed seven criteria I congress as part of my micro services definition:

*   minimal surface
*   minimal on disk
*   minimal compute
*   minimal message
*   minimal network
*   minimal time to rebuild
*   minimal time to throw away

I wanted to add two elements to my list, considering some of the other elements I’ve noticed at play when it comes to API bloat:

*   minimal ownership
*   minimal dependencies

Minimal owners is a pretty easy one for me, as I’m the owner of all my microservices—the buck always stops with me. However, It is a good reminder to make sure all of my services have a vCard applied to their [APIs.son file index](http://apisjson.org). It is important to easily known who is responsible for any public or private API, and with APIs.son and Swagger, this is easy to do.

When it comes to minimal dependencies, this gets a little tougher for me. My world isn’t too bad, because my systems are small, and I’ve been the only developer. The down side is I’ve been the only developer, and I’ve bee lazy about how many dependencies an API might have, and also been fairly sloppy about how I integrate with 3rd party APIs. Adding this item to my list will help me keep an eye on how I establish dependencies between services, keeping them minimal, and well documented.

That is it, I just wanted to add ownership and dependencies to my list of considerations—I just like making a production out of everything.
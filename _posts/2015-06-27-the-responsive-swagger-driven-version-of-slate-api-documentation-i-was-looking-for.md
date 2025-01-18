---
layout: post
title: >-
  The Responsive Swagger Driven Version of Slate API Documentation I Was Looking
  For
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-explorer.png
author:
  name: kinlane
tags:
  - Documentation
  - Swagger
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/tool/bw-swagger-round.png)](http://swagger.io)

[I wrote that we should be generating Slate API documentation from Swagger so we maintain a machine readable core the other day](http://apievangelist.com/2015/06/25/we-should-be-generating-slate-from-swagger-so-we-maintain-a-machine-readable-core/)\--while I love the look of [Slate](https://github.com/tripit/slate), I want to make sure all API meta data is machine readable by default. Shortly after publishing my post, someone kindly pointed me to a version of Swagger that was developed by [Jens-Ole Graulund](https://github.com/jensoleg), which was exactly the evolution that I was looking for.

[The more response, Swagger driven version of Slate API document is perfect](https://github.com/jensoleg/swagger-ui)! Giving API providers a more attractive, response version of Swagger UI (sorry Tony), while also keeping the core machine readable.--it is the best of both worlds! I plugged in one of my other complete Swagger definitions, and boom...I had a new version of my API docs.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/swagger-explorer.png)](http://senodio.com/site/swagger/)

Tips like this from my readers is why I blog about all my ideas out loud. If I kept my thoughts locked up, this type of discovery would never occur. I am going to play with deploying this version of the Swagger UI for my API stack, to see how versatile it is, and how well it works with my own site template. 

I just wanted to put it out there that this new option for Swagger UI exists, in case you were looking for an alternate version of the Swagger UI. I predict this is the beginning of many different iterations on Swagger UI, resulting in one eventually that is themable. ;-)
---
layout: post
title: A Cleaner, Simpler Example of API To SPA
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-single-page-apps.png
author:
  name: kinlane
tags: []
---
[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-single-page-apps.png)](http://spa.apievangelist.com/)

[One of my areas of research that got boost of energy at Gluecon last week, was the area of Single Page Applications, aka SPAs](http://spa.apievangelist.com/). SPAs are one huge area of potential growth for the API space, but like many other areas, they haven't seen the wider, more meaningful deployments, or adoption, that I had hoped for early on. I think up until now the definition of what an SPA is has been heavily dominated by the technical side of things, as opposed to the delivery side--SPA are still mostly about providing solutions for developers, over solutions for the end-user or business owner.

When it comes to SPAs, I stay away from the more established frameworks, opting for a simpler design--minimal platform or framework adoption. Not that solutions like [Angular](https://angularjs.org/) and [Backbone](http://backbonejs.org/) don't do amazing things, just at this point in my career, I'm looking to avoid the adoption, and resulting dogma and dependency that can often come from drinking a specific frameworks kool-aid. I guess the overall footprint needs to be small, before I will allow something to creep my day to day operational world.

While at Gluecon, I was given a demo of a new product, which i won't go into detail about now, but I feel moves us closer to the vision than I have in my head. Many of the existing SPAs employ APIs, but I envision a world where you can design, deploy, and manage APIs, which alongside you can also deploy and manage simple, useful SPAs driven by your valuable API resources. I keep an eye on the SPA space, so I can be in tune with anything that emerges--hopefully my stories and research will also stimulate other solutions in the space as well.

To help you understand the potential for APIs in the SPA space, I am talking about deploying a simple, and I mean as simple as you can SPA deployment, using an API that is defined using a machine readable API definition like [Swagger](http://swagger.io) or [API Blueprint](http://apiblueprint.com). I want to be able to deploy 10s or 100s of mini sites, landing pages, and apps from a single stack of API resources. API providers, and consumers should be able to easily deploy the SPAs they need, driven by the valuable APIs of their choosing, into the infrastructure they desire, like on Github Pages, Heroku, or their own internal infrastructure. 

Some day, we will see the cleaner, simple example of an API to SPA solution, that for now, is trapped in my head. Now that I write about this, I would also think of it as a lightweight, API client, which I'd also like to see be hypermedia compliant--man I am a demanding shit. ;-)
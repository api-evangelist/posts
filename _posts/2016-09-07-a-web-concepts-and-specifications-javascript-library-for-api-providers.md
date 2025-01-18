---
layout: post
title: A Web Concepts And Specifications JavaScript Library For API Providers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tooltip-js-for-web-api-concepts.png
atomdate: 2016-09-07T22:00:00.000Z
tags:
  - Web
  - Specifications
  - Providers
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/tooltip-js-for-web-api-concepts.png)](http://darsa.in/tooltip/)

One of the prototypes I am going to build on top of Erik Wilde's (@dret) [WebConcepts.info work](http://webconcepts.info/), is a simple JavaScript library that you can embed on any API documentation page, and point at the body, or any other element on the page and it will find and replace any keywords or phrases with popup  showing a definition, with a link to Erik's work and the standard(s) home page. 

I'm reminded of the need for something like this as I'm looking through the [USGS Water Services site](http://waterservices.usgs.gov/). There are little web literacy nuggets all over the documentation for the [USGS's six APIs](http://waterservices.usgs.gov/rest/), and I'd like to see this approach get standardized by building on Erik's work to make web concepts and specs for accessible to API designers and developers, in a consistent way.

A web concepts and specs JavaScript tooltip library for API developer portals wouldn't have to be that sophisticated, it could just look up based upon web concepts available in the [JSON for the concepts](http://webconcepts.info/concepts/concepts.json), and eventually for the related specs. I'll brainstorm more on what the lookup mechanisms might look like. I'd like there to be a dictionary of sorts, that API providers can reference when crafting their documentation, and even add to--then when specific words or phrases appear on the page, the library just swaps it out with a tooltip plus link referencing the web concept or spec. 

For my prototype, I am going to use [the Tooltip JavaScript library](http://darsa.in/tooltip/), and avoid reinventing the wheel. Next, I'll get to work brainstorming the lookup mechanism, and the dictionary that drives it. Ideally, I'd like for this library to work for both websites, and web applications, and provide context relevant web concepts and specs to API providers, API service providers, and consumers alike. If you have any suggestions for this prototype let me know, or even better, if you want to help build a prototype--that would rock as well.
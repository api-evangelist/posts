---
layout: post
title: Moving Beyond Just The PDF With A Single Page Report (SPR)
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-data-template.png
author:
  name: kinlane
tags:
  - PDF
---
I’m playing with more data visualizations lately, trying to establish a dynamic set of tools that I can use in my storytelling across the [API Evangelist network](http://apievangelist.com/network.html). I've been focusing on using [D3.js](http://d3js.org/), [Google Visualizations](https://developers.google.com/chart/interactive/docs/reference), and other JQuery plugins I've gathered over time, for now.

During the Turkey Day weekend, [I turned a subway map JQuery plugin I had found into an API](http://subway.map.apievangelist.com/), and introduced some new ways I can easily use these visualizations in my [Hacker Storytelling](http://hackerstorytelling.com/) format of publishing all of my research as Github repositories, [using the master branch as a private file and data store, and the Github Pages as the public face of the project](http://kinlane.com/2014/11/16/public-frontend-and-private-backend-for-my-sites-on-github/).

During the proces, I’ve added the subway map to my visualization toolbox of JSON driven components that I can use when publishing my stories and research to Github, adding to my already existing tools like [jekyll posts & data](http://jekyllrb.com/), [mustache templates](http://mustache.github.io/), and [reveal.js slideshows](http://lab.hakim.se/reveal-js/). I've also identified a handful of other visualizations that I want to add to my toolbox, providing a set of tools I can use to publish research reports, that deliver an open, rich, interactive, visualization layer on top of my simple JSON data stores.

In reality, this is just my own approach to lightweight application delivery, similar to what we all call [Single Page Apps or SPA](http://spa.apievangelist.com/), except I don't always adhere to a single page, or use a single framework—I try to keep lightweight, and a decoupled set of tools that I can mix and match to accomplish different objectives. As of this weekend the API Evangelist network is now over a [100 separate Github repositories](http://kinlane.com/projects/) working in concert (or isolation), to help me achieve on my mission to better understand the API space, while hopefully helping others along the way.

As I work to assemble my API driven visualization toolkit, I’m thinking I will start calling deployments a Single Page Report (SPR). While it won't be entirely true, as some reports could span multiple pages, I think the term still applies. Essentially an SPR can act much like the PDF gets used today when publishing most business reports. In my scenario rather than flattening the data, and resulting report, you would publish all the rich data, and visualizations to a single Github repository.

If you wanted to flatten an SPR, you could still publish as PDF, but it could also be interactive, forked, and have pull requests made to update data, correct any problems, and further enhance the visualizations. I just wanted to get this idea out there. I will work on generating a couple of "single page reports", to help better demonstrate my vision. And hopefully I won't actually end up calling it an SPR—I think I can do better.
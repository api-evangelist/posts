---
layout: post
title: Making Web Concepts and Specs Present As Real Time Help In API Design Tooling
image: null
atomdate: 2016-09-01T16:00:00.000Z
tags:
  - Design
  - Real Time
  - Web
  - Tooling
  - Time
  - Specs
---
.gist-data {max-height: 500px;}

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-web-concepts.png)](https://github.com/dret/webconcepts)

I took the [Github repository](https://github.com/dret/webconcepts) for Erik Wilde's ([@dret](https://twitter.com/dret)) [Web Concepts](http://webconcepts.info/) work and forked it, then generated some JSON which I could use to import into my API monitoring system. I've been manually adding specs to my Tweet and LinkedIn scheduling system, but I keep forgetting to go back to the site and add more entries. So I wanted to go ahead and import all the concepts and specs, and schedule out the tweets and LinkedIn posts for everything, over the next couple months.

First I generated the JSON for the concepts:

Then I generated the JSON for the specs:

I left out the relationships between the concepts and specs, as I will just be linking to Web Concepts, and let people explore for themselves. As I was looking through the JSON I got me thinking about why these concepts and specs aren't available in API design tooling, as helpers and tooltips, so that API designers and architects can learn from them and be reminded in real time--as they are crafting their APIs. 

It seems like there should be autocomplete for HTTP header fields, and for HTTP status codes, and other relevant items as they are needed. There is a wealth of web literacy available in Erik's work, and across the web concepts and specs he has organized, it seems like these should be available by default within API design services and tooling, and start being baked into IDEs like Atom, Eclipse, and Visual Studio--maybe they already are, and I'm just unaware.
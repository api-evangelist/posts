---
layout: post
title: Flow Abstraction And Intent Layer On Top Of APIs To Feed The Bots
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1_lfoybsgdnspy0i24b3dubg.png
atomdate: 2016-09-29T18:00:00.000Z
tags:
  - Bots
  - APIs
---
I was [reading an interesting post on developing bots from Meya](https://medium.com/making-meya/standing-on-the-shoulders-of-giants-2b89817fdff7#.6c2jfloeq), a bot platform provider, which I think describes the abstraction layer between what we are calling bots, and what we know as APIs. I have been trying to come up with a simple way of quantifying the point where bots and APIs work together, and Meya's approach to flow and intent provides me with a nice scaffolding.

The flow step of their bot design rationale provides a nice way to think about how bots will work, breaking out each step of the bot interaction in plain English. They use a YAML format they call Bot Flow Markup lLnguage, or BFML, to describe the flows, comparing BFML to HTML, with this definition:

_HTML is spatial, and BFML is temporal. HTML determines _where_ UI exists, and BFML determines _when_ UI exists._

The second part of their bot design rationale involves Intents, providing this additional definition:

_If BFML is like HTML, then intents are like URLs._

According to Meya, "intents can be keywords, regular expressions, and natural language models as you get more sophisticated". This seems to be where the more human aspect of what is getting done here is defined, mapping each intent to a specific flow, which can execute one or many steps to potentially satisfy the intent.

The third step is components, which is where the direct API connection comes clear. If you look at their example, in the component they are simply making a call to the Chuck Norris joke API, returning the results as part of the flow. Each part of the flow calls its targeted component, and each component can make a GET, POST, PUT, PATCH, or DELETE to an API that provides the data, content, or algorithm behind the component.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1_lfoybsgdnspy0i24b3dubg.png)

This provides me with a beginning scaffolding to think about how bot platforms are constructing the API abstraction layer behind bot activity. I will be going through other bot platforms to understand each individual napproach. Bots to me are just another endpoint for the API economy, and like mobile phones, we can have the API layer be shadowy and dark, or we can have it be more transparent and standardized, with platforms sharing their approach like Meya does.

I am picturing a world where we share open definitions of bot flows, and the intents that trigger them in YAML.  There will be marketplaces of flows, sharing the logic behind the what is working (or not) within the bot community. These flows shouldn't be a company's secret sauce, any more than the API definitions that they employ within each function are. The secret sauce should be the data, content, and algorithms behind each API, that is called as part of any flow, designed to satisfy a specific intent.

When providers like Meya share they approach via their blog it gives me the opportunity to learn about their approach. It also gives me the opportunity to explore, and compare with the rest of my research, without having to always fire up their platform--which I do not always have the time to do (I wish I did). This helps me push forward my bot research in baby steps, derived from people who are doing interesting things in the space and are willing to share with the community--which is what API Evangelist is all about.
---
layout: post
title: >-
  Going Beyond Just  JSON Data And Considering The Relationships That Exist, And
  The Actions That Can Be Taken
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Data
  - JSON
---
I spent the weekend adding a [Siren media type](https://github.com/kevinswiber/siren) to my [API building blocks API](https://kin-lane.github.io/buildingblock/), in support of [my API life cycle map](http://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/) work. Every time I dive into using Siren, and begin applying hypermedia constraints to my API design, I'm pleasantly surprised by what I learn. I am not a hypermedia evangelist, I am just trying to share what I learn, as I go evolve, and hopefully add to some of the existing knowledge that is floating around out there. 

This work on my building blocks API is still very much a work in progress, when it comes to my own understanding of hypermedia, but also how I can use it to craft a more meaningful story around API(s). The first major benefit I realized, was instead of just have a basic JSON representation of my API building blocks, I was immediately forced to consider some very important dimensions around the JSON data I was serving up.

*   **Properties -** What are the properties of the collection returned, or individual data sets.
*   **Entities -** What are the actual structured objects that I am returning, and how do they relate.
*   **Actions -** What actions can be taken around my data, and how can a developer engage with it.
*   **Links -** What relevant links about the entities, and the information it contains are present.

Before this, I would just have a JSON array or object, which is essentially what I have under properties now, but now that I'm using Siren, I also have other meaningful relationships between my data present as entities. I also can provide relevant actions and links that any developer will potentially need, when they are working with the data provided.

For me, this evolution is significant. It isn't just about alleviating my version control challenges, or providing  the perfect client (well I do have some client ambitions in doing this), it is just about helping think more deeply about the relationships between all of my data, as well as the meaningful actions that can be taken with it. It takes me well beyond about ticking off a checkbox, that I've vomited up JSON instead of HTML, and pushing me to think more critically about my data, and how it will actually be used.
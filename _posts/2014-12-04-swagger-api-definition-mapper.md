---
layout: post
title: Swagger API Definition Mapper
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swaggerLogo360.png
author:
  name: kinlane
tags:
  - Definition
  - Swagger
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/swagger/swaggerLogo360.png)](http://swagger.io/)

I was having one of my long overdue check ins with API godfather John Musser today, and it reminded me of an idea I wanted to put out there, so while it was fresh in my mind, I wanted to share. I’m applying this to my [Swagger](http://swagger.io/) driven world, but should be applied to all of the common API definition formats like API Blueprint, and RAML.

I want a machine readable way to map APIs together across multiple Swagger API definitions, mapping a specific API path in one Swagger spec to another API path in an entirely different API definition. Once the paths are connected, you should also be able map specific parameters to each other. It also seems logical that for each mapping you'd want to provide some sort of meta data about the relationship, and maybe some sort of semantics involved also.

Maybe something like this already exists? IDK. I’m sure that [API reciprocity providers](http://reciprocity.apievangelist.com/) like [Zapier](https://zapier.com/) probably have their own proprietary approach to handling this, but I’m looking for a simple JSON, YAML, or Markdown version of this. If there isn’t something like this already out there, I may play around with a prototype. I’d like to [map similar APIs in my email API research](http://email.apievangelist.com/), allowing me to bundle together similar resources.

Not sure how much time I will have for this in 2014, but figured I'd put out there, and see if I've missed something already existing in the space. Also, once something lives on my blog, it becomes a little more real, and the chances increase that I will actually move it forward at some point.
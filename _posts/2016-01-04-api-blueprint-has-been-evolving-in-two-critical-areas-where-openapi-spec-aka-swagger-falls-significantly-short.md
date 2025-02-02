---
layout: post
title: >-
  API Blueprint Has Been Evolving In Two Critical Areas Where OpenAPI Spec (aka
  Swagger) Falls Significantly Short
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-api-definitions-gears.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Blueprint
  - Swagger
  - API Blueprint
  - Open
---
Z ([@zdne](https://twitter.com/zdne)) over at Apiary [published a pretty interesting blog post before christmas](http://blog.apiary.io/2015/12/17/API-Blueprint-Future/) which highlights two important elements of profiling APIs using popular API definition formats. Z is key to the vision behind [API Blueprint](https://apiblueprint.org/), one of the top 3 [API definition formats](http://definitions.apievangelist.com/), that are fueling API design in 2016. 

**Giving The Body Some Love**  
One common complaint I've seen on forums, issue threads, and other places API developers hang out, is that OpenAPI Spec does not allow for properly describing the request body payload. I definitely agree with this, but is something that doesn't often impact me, as the type of APIs I am currently deploying, rarely employ a very complex body payload. However I do know some APIs that I've documented, where if you can't properly define the body, the API appears to have no value whatsoever, when described using an OpenAPI Spec.

It was good to hear Z state that, _"In 2015, we have spent most of the year building only one feature--the description of body parameters. This feature is also know as the MSON syntax."_

**Acknowledging Media Types**  
The next significant area Apiary is addressing with API Blueprint and MSON, is when it comes to supporting multiple media types, and making sure they are properly described in the API definition--[MSON](https://github.com/apiaryio/mson) FTW! 

Z talks about how, _"MSON isn't another syntax for JSON. MSON is agnostic to serialization media types. With MSON, I can describe the data and defer the decision whether they will be send as JSON, XML or HAL over the wire."_

I will be learning more [MSON](https://github.com/apiaryio/mson) in January, and reacquainting myself with API Blueprint, as I document my APIs stack(s), but also specifically two of my APIs that provide JSON, HTML, and Siren media types. Hopefully this will allow me to also document the growing number of hypermedia APIs available across the space.

Media types, and body are two areas that OpenAPI Spec (aka Swagger) is deficient. Something that gives Apiary a pretty interesting head start when it comes to two pretty fundamental building blocks of the web, and therefore APIs. I was going to start using vendor extensions, to begin playing around with content-type negotiation in my OpenAPI Spec files, but I might just invest my energy into sharpening my API Blueprint skills, and definition repository instead.
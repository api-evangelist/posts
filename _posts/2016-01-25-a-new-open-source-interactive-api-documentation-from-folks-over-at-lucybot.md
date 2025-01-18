---
layout: post
title: A New Open Source Interactive API Documentation From Folks Over At Lucybot
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/lucyboty-api-console.png
author:
  name: kinlane
tags:
  - Open Source
  - Documentation
  - Open
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/lucyboty-api-console.png)](https://lucybot.com/console_demo/)

[I am happy to be showcasing a new open source, OpenAPI Spec driven, interactive API documentation, from the LucyBot team](https://github.com/lucybot/lucy-console). The API definition driven documentation solution is one of the best implementations I've seen to date, and reflects the future of where API documentation should be going in my opinion. While the [Swagger UI](https://github.com/swagger-api/swagger-ui) has significantly moved the API documentation conversation forward, it has never been the most attractive solution, pushing some API providers to use a more attractive, less interactive, open source solution from [Slate](https://github.com/tripit/slate).

The [LucyBot API Console](https://lucybot.com/console_demo/) is both! It is API definition driven, using the [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification) as its engine, but also [provides a conversion tool for RAML, WADL, or API Blueprint](https://github.com/lucybot/api-spec-converter). The LucyBot API Console is also very attractive, responsive, and flows much like Slate does, but goes much further by being an actual interactive API console, not just good looking, static docs. You can see Lucy Console in action [over at AnyAPI](https://any-api.com/), or as [a small set that demonstrates different CSS variations](https://lucybot.com/console_demo/). 

[I have forked](https://github.com/api-evangelist/lucy-console), and started playing with the [LucyBot API Console](https://lucybot.com/console_demo/) more--I encourage you to do the same. There are a number of features I'd like to see in there, like more embeddability, and templability of the UI, as well as some APIs.json support, and D3.js visualization integration--so I wil be getting more knowledgeable of the code base, and in tune with the road map. I know the LucyBot team is open sourcing the code to encourage contributions, and are looking for investment in dev and business resources to move the project forward--so get involved!

It is good to see the [API definition](http://definitions.apievangelist.com/) driven [API documentation](http://documentation.apievangelist.com) conversation moving forward in 2016!
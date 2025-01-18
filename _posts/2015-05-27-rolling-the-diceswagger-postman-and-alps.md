---
layout: post
title: Rolling The Dice - Swagger, Postman, and ALPS
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/roll-dice.jpeg
author:
  name: kinlane
tags:
  - Postman
  - Swagger
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/roll-dice.jpeg)](http://roll.space/)

I enjoy playing with simple, meaningful ways of leaning about APIs. [The other day, during the regular monitoring of the API space, I came across a simple dice rolling API, which I decide to map out using Swagger](http://roll.space/). Shortly after I did  this, [I saw Mike Amundsen post an ALPS representation of the Dice Rolling API. Around the same time](https://github.com/alps-io/profiles/blob/master/roll-dice-alps.xml), I then imported my Swagger into my Postman client, and [exported a Postman collection](https://gist.github.com/kinlane/5a0cbb906697c4f4b8fc).

Once I had the three formats, I sat back to consider what each of these representations mean to me:

*   **[Swagger](http://swagger.io)** - A map of the surface area that is dice rolling.
*   **[Postman](https://www.getpostman.com/)** - A single representation of actions that can be taken--now.
*   **[ALPs](http://alps.io/)** - A representations of the what it means to roll the dice.

I am constantly working to evolve how I view the available API formats that are emerging throughout the space. I will be spending more time [generating machine readable definitions for APIs in my stack](https://github.com/kinlane/api-stack/tree/gh-pages/data), trying to push these definitions through these valuable filters. I do not think any single approach provides me with a definitive view of the resources I am describing, but at least give me with various lenses to look through, during my journey.

Swagger left me feel like I am mapping out a vast expanse, but alone doesn't do much for me without more tooling to interpret the map. Postman left me feeling like I could do one thing, linked to the surface area I mapped with my Swagger, but was very confined to just that specific instance, within the world I have drawn with Swagger. ALPS left me feeling like I described something meaningful, closer to the actual experience of rolling a dice. 

Ultimately I do not see any of the emerging approaches to defining API driven resources as 100% the solution, or in black and white terms as wrong or right. I see Swagger as very much a bridge to a better defined world, while Postman satisfies the more immediate urges that I have, but ALPS...ALPS has the potential to help me internalize, feel, and interact with my digital resources, in a way that is much closer to the real world (not quite, but closer).
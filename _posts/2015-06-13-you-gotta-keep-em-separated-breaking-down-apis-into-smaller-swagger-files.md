---
layout: post
title: 'You Gotta Keep Em Separated: Breaking Down APIs Into Smaller Swagger Files'
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzle-piece-two.png
author:
  name: kinlane
tags:
  - Swagger
  - APIs
---
As I work to chase an elusive answer to the question, [what is a complete API Swagger definition](http://apievangelist.com/2015/06/06/how-do-you-know-when-a-swagger-api-definition-is-complete/), I'm also faced with what I know John Musser ([@johnmusser](https://twitter.com/johnmusser)) would agree is the age old question, what exactly constitutes an API? Is it the [Twitter API](https://dev.twitter.com/rest/public), or is it the Twitter account, status, friends, media, etc. APIs? While this has been a tough question, facing anyone who considers API discovery, I think it is a question that is evolving as part of the current microservices conversation. 

One layer of the microservices onion is focused on breaking down services into their smallest possible unit of value (at least this is one of my takeaways). Doing this is an enabler all the other orchestration, devops, voodoo magic that represent the other architectural layers of the microservices onion. As I work to [define Swagger definitions for the almost 1000+ companies in my API Stack](http://theapistack.com/), I'm working to employ this line of thought, and actively breaking down each API I profile, into the smallest unit possible, using [Swagger](http://swagger.io).

An example of this in the wild, is with the messaging API from [TigerText](http://www.tigertext.com/), which could easily be a single API Swagger definition called [TigerConnect API](http://www.tigertext.com/tigerconnect/), but after breaking things down I'm left with six separate Swagger files:

TigerConnect Events API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-events-api-swagger.json "Swagger")

TigerConnect Group API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-group-api-swagger.json "Swagger")

TIgerConnect Message API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-message-api-swagger.json "Swagger")

TigerConnect Metadata API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-metadata-api-swagger.json "Swagger")

TigerConnect Roster API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-roster-api-swagger.json "Swagger")

TigerConnect User API

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](http://theapistack.com/data/tigertext/tigerconnect-user-api-swagger.json "Swagger")  
  

Ultimately this is more work for me, but from an API discovery perspective, I'm looking to identify the small, most unique unit of value possible, which allows me to discovery, and organize APIs into extremely precise, yet powerful API menus. Right now this is a very manual process, but I'm developing tooling that will help me to "explode" existing Swagger definitions based upon unique API paths--we will see how that goes.

Now I can evaluate TigerText's approach to user APIs, or metadata APIs, without wading through the actual messaging side of the coin. I am not in the business of creating at database of APIs, where my metric is number of APIs--my objective is a database of high quality APIs, where my metric is number of companies, with complete API definitions for resources they provide, and as complete profile of overall API operations as possible. 

We'll see how I feel about this after doing another 500 APIs (I've done almost 500 so far) :-) My tune may change, but I'm hoping to have more tooling that helps me throughout the process. I will never be able to fully automate the creation, or fine tuning of API definitions, but I feel I can automate certain aspects--greasing the gears.
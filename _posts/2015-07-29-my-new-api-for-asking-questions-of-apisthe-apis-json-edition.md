---
published: true
layout: post
title: My New API For Asking Questions Of APIs - The APIs.json Edition
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-question-mark.png
author:
  name: kinlane
tags:
  - My
  - APIs.json
  - APIs
  - APIs.jso
---
I am currently trying to move forward the [917 companies, from 223 business areas, with a total 882 APIs catalogued, and 407 Swagger definitions created](http://theapistack.com/), while working on a distributed way to understand where the profiling for each company is, and how far in defining this in a machine readable way. [I had kicked off another prototype APIs.json type a few months back I'm calling api-questions to handle just this](http://api-qa.apievangelist.com/), in a way that allows me to ask human readable questions about APis, while also storing in a distributed, machine readable format that can be indexed via each APIs.json file.

I have long tracked on what public APIs are doing in a database. I keep links to Github and Twitter profiles, blogs to pricing, and terms of service. I started publishing this information to APIs.json for the companies I track on a while back. I have the information, and I'm working my way through thousands of APIs, trying to make sure there is a complete definition available, I needed an automated way to help make sure I'm asking the right quesitons consistently of each API.

So, [in addition to my list of Swagger oriented questions](http://apievangelist.com/2015/06/09/my-new-api-for-asking-questions-of-apis--the-swagger-edition/), I've compiled a list of the most common APIs.json defined, API operations related questions that I ask:

*   Is there an API? (the most important question of them all!)
*   Is there an APIs.json File?
*   Is there a blog?
*   Is there a blog RSS feed?
*   Is there a portal?
*   Is there a platform description?
*   Is there getting started information?
*   Is there documentation for the API?
*   Is there interactive documentation for the API?
*   Is there an authentication overview?
*   Is there self-service registration?
*   Is there request for access?
*   Is there code samples?
*   Is there code libraries?
*   Is there SDKs?
*   Is there email for support?
*   Is there an FAQ section?
*   Is there a knowledge base?
*   Is there a forum?
*   Is there a Twitter account?
*   Is there a LinkedIn account?
*   Is there a Github account?
*   Is there a pricing page?
*   Is there a rate limit page?
*   Is there a road map?
*   Is there a change log?
*   Is there a status page?
*   Is there a terms of service?
*   Is there a privacy policy? 

To help me along, I've created a [simple API for management of my API related questions](http://question.api.kinlane.com/questions/), then I created [another API for asking these questions of specific APIs.json files](http://question.api.kinlane.com/questions/ask/organization/?apisjson_url=https://kin-lane.github.io/api/apis.json&questions=19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45). However if you want to use this API, you need an [APIs.json](http://apisjson.org) index for your APIs, which all of mine in the API stack do--then it will spider and do its best to answer the  questions above, and return specific answers. 

The results are far from perfect, but it is a start. I will be making the questions more precise, and adding new questions. My goal is to have a real-time way of telling how complete my APIs.json files are, and where the work is that needs to be done--as I am doing the work.

I'm sure the definition of exactly what is a complete APIs.json definition is will continue to evolve, always resulting in a human having the final vote, but for now I will just keep defining, until I find the right balance between programmatic, and the human touch.
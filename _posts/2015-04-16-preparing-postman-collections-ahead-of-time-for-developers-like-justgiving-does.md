---
layout: post
title: >-
  Preparing Postman Collections Ahead Of Time For Developers Like JustGiving
  Does
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/just-giving-postman.png
author:
  name: kinlane
tags:
  - Postman
  - Collections
  - Collection
  - Time
  - Developers
  - Postman Collections
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/just-giving-postman.png)](https://github.com/JustGiving/JustGiving.Api.Tools.Postman)

I have been slowly [adding Postman Collections to many of the APIs indexes](http://alpha.apievangelist.com/2015/04/07/including-postman-collections-in-my-apisjson-files/) for my [new master stack](https://kin-lane.github.io/master/index.html). I index each API using an APIs.json file, as well as provide a master APIs.json which brings together all of the APIs, into the single portal I've published to Github. Within some of the APIs, you will see a Postman icon, allowing you to easily import the API definition into postman, directly from each APIs landing page.

When [I first published that I was publishing these Postman collections on my Alpha API Evangelist blog](http://alpha.apievangelist.com/2015/04/07/including-postman-collections-in-my-apisjson-files/), someone from the [donation API platform Just Giving](https://api.justgiving.com/docs) said they also [prepare Postman collections for their developers, and publish them to Github](https://github.com/JustGiving/JustGiving.Api.Tools.Postman) for their API consumers: 

_At JustGiving we give our API consumers a set of collections to import to make their jobs even easier, we also use the "Environments" feature to substitute different values depending on whether you're using our Sandbox or Production environment - it's a real time saver and also helps when supporting our API consumers._

I feel pretty strongly that [Postman is a measurable unit for transactions in the API economy](http://apievangelist.com/2015/03/13/postman-collections-as-unit-of-measurement-for-transactions-in-the-api-economy/), and I feel it goes a long way in helping API consumers onboard with each new API. As a developer, if I can import a Postman Collections into my client, within just a couple clicks, and be up and running with an API--I am going to be a much happier camper, and be that much closer to integration.

I'm considering adding Postman collections as a building block under API on-boarding, and encourage API providers to follow JustGivings lead. Postman Collections is kind of the new API explorer, allowing developers to quickly test drive an API they are going to integrate with. With my own platform, I'm also going to play with publishing Postman Collections, complete with API keys that I refresh regularly, allowing immediate, but limited access my APIs, for anyone who stumble across them. 

Like Swagger, Postman is increasingly a machine readable definition that API proviers should be producing, alongside Swagger and API Blueprint for the entire API surface area, and APIs.json for indexing of all API operations.
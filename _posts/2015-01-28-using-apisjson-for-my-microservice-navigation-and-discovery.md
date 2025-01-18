---
layout: post
title: Using APIs.json For My Microservice Navigation And Discovery
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/kin-lane-api-navigation.png
author:
  name: kinlane
tags:
  - My
  - Discovery
  - Discover
  - APIs.json
  - APIs
  - Micro
  - APIs.jso
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/kin-lane-api-navigation.png)](https://kin-lane.github.io/master/)

I’m rebuilding my underlying architecture using microservices and docker containers, and the glue I’m using to bind it all together is [APIs.json](http://apisjson.org/). I’m not just using APIs.son to deliver on discoverability for all of my services, I am also using it to navigate around my stack. Right now I only have about 10 microservices running, but I have a plan to add almost 50 in total by the time I’m done with this latest sprint.

Each microservice lives as its own Github repository, within a [specific organization](https://github.com/kin-lane). I give each one its own APIs.json, indexing all the elements APIs of that specific microservice. APIs.json has two main collections, "apis" and "include". For each microservice APIs.json, I list all the properties for that API, but I use the include element to document the urls of other microservice APIs.json in the collection.

All the Github repositories for this microservice stack lives within a single Github organization, which I give a "master" repo, which acts as a single landing page for the entire stack. It has its own APIs.json file, but rather than having any API collections, it just uses includes, referencing the APIs.json for each microservice in the stack.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/kin-lane-api-navigation-2_png.png)](https://kin-lane.github.io/master/)

APIs.json acts as an index for each microservice, but through the include collection it also provides links to other related microservices within its own stack, which I use to navigate, in a circular way between all supporting services. All of that sounds very dizzying to write out, and I’m sure you are like WTF? You can [browse my work on Github](https://kin-lane.github.io/master/), some of it is public, but much of it you have to have oAuth access to see. The public elements all live in the gh-pages branch, while the private aspects live within the private master branch.

This is all a living workbench for me, so expect broken things. If you have questions, or would like more access to better understand, let me know. I’m happy to consider adding you to the Github organization as collaborator so that you can see more of it in action. I will also chronicle my work here on the blog, as I have time, and have anything interesting things to share.
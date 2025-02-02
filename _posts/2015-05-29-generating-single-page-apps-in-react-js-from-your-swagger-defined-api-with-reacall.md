---
published: true
layout: post
title: >-
  Generating Single Page Apps In React.js From Your Swagger Defined API With
  ReaCall
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/project-reacall/project-reacall-logo.png
author:
  name: kinlane
tags:
  - Swagger
  - Define
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/project-reacall/project-reacall-logo.png)](https://bitbucket.org/jdubray/reacall/src)

[I wrote about a simpler example of API to SPA the other day, continuing my journey for apps, services, and tooling that easily deploys a Single Page App (SPA) or light-weight web and mobile clients from a single API, or many APIs](http://apievangelist.com/2015/05/27/a-cleaner-simpler-example-of-api-to-spa/). One of the reason I am so transparent about my ideas, is because I depend on my audience to help educate me about what is out there--one of my readers, who is always schooling me, pointed me at [Project ReaCall](https://bitbucket.org/jdubray/reacall/src). 

Jean-Jacques Dubray's ([@metapgmr](https://twitter.com/metapgmr)), [Project ReaCall](https://bitbucket.org/jdubray/reacall/src) combines [React.js](https://facebook.github.io/react/) and [Swagger](http://swagger.io) to make it easier for API providers to develop and evolve API Client SDKs (ACS). This is definitely the direction I'd like to see client SDK and SPA deployment space go. I will have to play with ReaCall more, and I do not have any experience with React.js apps, but it looks pretty easy to bind your API endpoints to specific components in a React.js generated app.

Where this will get even more powerful, is when there are ready to go templates, and starter kits for developer to reverse engineer, and better understand how it works. I see that [VIMOC Technologies' Landscape-Computing Architecture, and ambient computing API for city infrastructure employes ReaCall for their client deployment](http://www.vimoctechnologies.com/). Some more examples, demonstrating common API uses, and real-world client deployments would go a long way in on-boarding people with the approach.

The API Evangelist network operates as almost 100 separate Jekyll driven sites / apps (some have more functionality than others), that run on Github Pages. I can easily envision other operators managing hundreds or thousands of sites, sub-sites, web, mobile, and devices based applications that are generated, maintained, and version-ed using the Project ReaCall approach.

I'd also like to play around with defining web, mobile, or device application stacks using [APIs.json](http://apisjson.org), bringing together many disparate APIs into a single collection, and use ReaCall to deploy the application--essentially using APIs.json as the index for where each of the Swagger definitions exist. Adding this to my to-do list, and we'll see if I can manage to float it to the top of my list this summer.
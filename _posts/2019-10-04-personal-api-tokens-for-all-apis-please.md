---
published: true
layout: post
title: Personal API Tokens For All APIs Please
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-stories-new-old-door-lock-2-marcel-duchamp.jpg
author:
  name: kinlane
tags:
  - Authentication
  - Tokens
---
I have written about this several times before, and it is something I will keep writing about until it comes true. Every API provider that employs OAuth for their APIs, show have a quick and easy, non-code way of obtaining a token for API access to your own account, and any generally available public APIs. [If you need an example of this in action, log into your GitHub account,  click on your account settings, choose developer settings, and look at your personal access tokens](https://github.com/settings/tokens). With personal access tokens you can create a new token, drop it into the header of any API request, and begin making calls to the GitHub API—this is how it should be for all APIs that use OAuth. No OAuth dance to just at your own resources.  
  
OAuth isn’t great, but its the best we got at the moment when it comes to authorization. It is also one of the biggest obstacles for many developers, and all non-developers, when it comes to putting API resources, and most egregiously their own data and content that is available via APIs, to work. I don’t have a problem with pushing developers who are building an application to leverage the standard OAuth interfaces and flow. You definitely want to build a Postman collection for them, and make signing up, and adding an application to obtain your key as frictionless as possible. But, for quickly on-boarding developers, and non-developers quickly to be able to play around, kick the tires, and understand what an API does, you should be providing personal access tokens.  
  
The personal access token topic is one of the reasons I do API Evangelist. So I can find incremental improvements in the core standards and technologies we already use, that make our lives easier—then beat the drum about why everyone should do it. This is a topic I should be publishing a story about every quarter until I see movement by providers. Helping API provider reduce friction when it comes to authentication an authorization is one of the most important things we can be doing to help increase the adoption of our APIs amongst developers, and more importantly it will be how we get the non-technical normals on-board. Using APIs to get at the data and content that matters to them. Allowing them to solve everyday business problems they face in their day to day world. This is when APIs are going to to level up when it comes to solving real world challenges, and not just be in the back pocket of programmers.  
  
I should be able to signup for any online service, grab a personal access token, or ready to go Postman environment populated with my personal access token, grab a Postman collection dedicated to the use case that suits me, plug I my environment and be making API calls—within 10 minutes or less. That is the API on-boarding reality I would like to see for ALL online platforms. I do not want an online account that doesn’t have APIs, personal access tokens, and Postman collections for all their most common workflows. I know. My bar is pretty high, but a guy can hope and dream right? If I keep hollering about this stuff, maybe eventually, some day, I will get what I want. I like to think of it as API manifestation—taking the pieces of the space that make me happy and harass everyone to into implementing them.
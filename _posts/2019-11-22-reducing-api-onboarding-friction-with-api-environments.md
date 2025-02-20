---
published: true
layout: post
title: Reducing API On-Boarding Friction With API Environments
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_evangelist_environments_screenshots.png
author:
  name: kinlane
tags:
  - Onboarding
  - Environments
---
I’m obsessed with making my Postman collections more accessible and executable to developers and non-developers. [I’m really frustrated that on-boarding with APIs is still so difficult](http://apievangelist.com/2019/11/13/why-is-api-onboarding-and-authentication-still-so-hard/), and I’m determined to reduce friction in this area in 2020. I’m confident that Postman collections plus environments represent the next stage in API integration, automation, and orchestration, but we still have some sharp corners to round off when it comes to streamling the on-boarding of new users to each APIs being referenced within each Postman reference, workflow, capability, collaboration, walkthrough, and the numerous other types of Postman collections that are emerging across the API landscape. 

I’ve been working hard to create a number of new Postman collections and even once you click on the Run in Postman button for each API collection, you still have to go signup for an account, create an OAuth application, and plugin in the OAuth details for API before you can make your first API call — this is dumb. We desperately need to redefine what an application is in the context of the API management layer for providers. As I’ve said many times before, [every API provider needs to provide personal OAuth access tokens by default as part of your account like GitHub does](http://apievangelist.com/2019/10/04/personal-api-tokens-for-all-apis-please/). This should be the baseline for all APIs, but we also need more services and tooling that helps us generate and manage tokens for use across our low-code and no-code API integration solutions. I got frustrated enough recently that I just began hacking together what I am simply calling: [API Evangelist Environments](https://environments.apievangelist.com).

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_evangelist_environments_screenshots.png)](https://environments.apievangelist.com)

It’s a pretty crude tool, but it represents a pretty good start. It helps establish a base OAuth application for a handful of common APIs, allowing anyone to click and generate a token which can be used to make API calls. If you put your Postman API key in the text box, it will also generate a Postman environment and place it in your Postman account. There are lots of other things to consider as part of this project--things like the scope of each token request, the naming of the Postman environment key, and which services do I add next. It doesn't do everything I need, but it is a nice start. It helps me quickly generate OAuth tokens for the services I’m building collections for, and it gets me thinking about what is next when it comes to making my Postman collections easier to use out of the box.

I’m going to work on adding more services to the list of APIs. It is hard to know which services to add, so I have added a link to GitHub issues so other people can suggest. There is no backend to this service, it just generates the tokens, and environment, the pushes the each environment to Postman via the API, and displays the token and name of the environment to the screen. I do log each time it is executed, including the timestamp, IP address, and which service was called, but beyond that I’m not storing anything—I will leave it up to Postman to manage the environments. I was just looking for a quick and dirty way to generate tokens and put to use in Postman—I will work on expanding, refining, and polishing API Evangelist Environments more in the next couple of months.
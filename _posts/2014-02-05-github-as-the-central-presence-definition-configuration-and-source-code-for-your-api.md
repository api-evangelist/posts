---
layout: post
title: >-
  Github As The Central Presence, Definition, Configuration, And Source Code For
  Your API
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.jpg
author:
  name: kinlane
tags:
  - Github
  - Definition
  - Code
  - Git
  - Presence
---
It is easy to think of [Github](http://github.com) as a central repository for your open source code—most developers understand that. I have written before about the [many ways to use Github as part of your API management strategy](http://apievangelist.com/2013/06/08/api-management-using-github/ "many ways to use Github as part of your API management strategy"), but in the last few months I'm really seeing Github playing more of a central role in the overall lifecycle of an API.

**API Presence**  
[Github Pages](http://pages.github.com/ "Github Pages") provides a very simple way for API providers to deploy public or private portals that can be a simple or elaborate doorway for developers to learn about and engage with APIs. A company can potentially have a single or multiple API portals, targeting a variety of potential consumers. You don't need a special website for your API anymore, just fire up a Github Page and get publishing the [relevant building blocks your consumers will need](http://management.apievangelist.com/building-blocks.html "relevant building blocks your consumers will need").

**API Definition**  
As I continue to study the world of API definitions like API Blueprint, RAML and Swagger, I'm increasingly finding API definitions published to Github, as well as employing it as a central storage for all my own API definitions. When 3Scale and API Evangelist designed [API Commons](http://apicommons.org), we allowed the publishing of API definitions to Github to be one of the ways you can include your API definition in the commons. By publishing your API definition on Github, either publicly or privately, you can provide a central definition of your API surface area, that can be versioned, forked, downloaded, and allow for contributions from other key players in your API ecosystem.

**API Services**  
During my monitoring of the API space, I came across a new API monitoring service called [AutoDevBot](http://autodevbot.com/), which monitors all your API endpoints, and notifies you when something goes wrong. Pretty standard feature in a [new wave of API integration tools and services](http://integration.apievangelist.com/companies.html) I’m seeing emerge, but what is interesting is they use Github as a central place to store the settings for the API monitoring service. AutoDevBot has you clone their settings template, make changes you need to monitor your APIs, register and fire up AutoDevBot to monitor. Seems like a pretty simple way for API service providers to engage with API providers, allowing them to manage all the configuration for API services alongside their own internal API operations.

**API Source Code**  
Using Github as a central repository for server and client side code is not new, but using it as a central source for deploying, scaling and distribution of permanent or temporary instances of an API resource across various PaaS providers is. Allowing users to deploy cloud or on-premise instances of your API resources to Amazon Cloud Formations, Red Hat OpenShift or even Heroku, will define how we deploy and manage APIs in the future.

**API Feedback Loop**  
APIs are all about iterating, hopefully throughout the design, deployment, management, monetization, licensing and evangelism cycles, and Github provides a perfect platform for managing the feedback loop for each of these iterations. Github issue and milestone manager is increasingly being used to manage feedback around the API design process, all source code, and will play a significant role in external API services, API definitions and the the overall presence of an API.

Github isn’t just for server or client API code anymore. Git(hub) can play a central role in not just helping API providers manage a central definition of their API as it pertains to general operations, Github allows providers to interact with other service providers, as well as their API consumers.

I’m intrigued by the many ways API and other service providers are putting Github to use, and will keep paying attention when I have time. I envision Github continuing its evolution as the backbone of public or private APIs, providing a central presence, definition, service integration point, feedback loop, as well source code repository for the thousands of API resources that are being deployed in the coming years.
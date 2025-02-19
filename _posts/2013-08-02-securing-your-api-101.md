---
layout: post
title: Securing Your API 101
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-padlock.png
author:
  name: kinlane
tags:
  - '101'
---
I get a lot of questions from folks about the why, when and how of securing an API. And in keeping in sync with my audience, I wanted to provide a plain english story of securing your API, avoiding  the often enterprise, service oriented architecture (SOA) jargon, which can confuse the situation for many who are just getting their feet wet.

So, you have created a basic API from your data or other resource, that returns XML or JSON for users--now you want to secure it. The reasons for securing your API will vary on a case by case basis. Your might be releasing data that you only want a handful of select people to access, or you might be looking to reduce the amount of server and bandwidth resources it takes to support an API, or you might just want to intimately understand who accesses an API and why and how they are using it. Or D) All The Above!

There are a handful of approaches to providing access to your API:

*   **Open** - Just keeping your API wide open, accessible to anyone who has the URL. Obviously this isn't secured, but provides contrast for other options
*   **BasicAuth** - [Basic authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) is a native part of HTTP and the Internet, which employs a username / password combination that is passed when accessing an API, which the server then authenticates allowing or denying access
*   **Key** - Requiring an application or user key which is usually a combination of alpha and numeric characters, which is obtained by each developers through a API registration process, providing a unique access key for each consumer
*   **oAuth** - [oAuth](http://en.wikipedia.org/wiki/OAuth) is an open authorization standard, that is usually employed when there is more sensitive, user specific data available via an API. oAuth is considered to be standard approach to securing API access, but increases the technical learning curve for API users

I'm also investigating [another approach that is an alternative to API keys](http://www.jamesward.com/2013/07/29/an-alternative-to-required-api-keys), which addresses the concerns around server and bandwidth overhead of open API access. Once I have more understanding, I will include as part of my educational materials.

If you are looking to just make sure you have some level of control over who accesses your API, a simple API key approach is recommended. An API key limits who has access, while also giving you a way to track the ways each user is interacting with your API. There are currently around [20 API management providers](http://management.apievangelist.com/companies.html "20 API management providers") who specialize in providing API key solutions for API providers, as well as oAuth and Basic Authentication options. If you are looking for more help on securing your API, reach out to these providers.

If you are deploying an API for the federal government in the United States, [there is also a new option from Data.gov,](http://api.data.gov/about/) which provides you with a solution to the most common needs of API providers including API keys, rate limiting and analytics. I'm still working on adding this solution to my API management resources, and will have more analysis in the future.

This post is meant to be a very simple, non-technical overview of securing your API. If you are looking to do this on a tight budget, I recommend looking at [3Scale](http://3scale.net "3Scale"). They have a self-service, easy to implement process for getting going, but can also provide the support needed for scaling and evolving your solution.

When securing your API, make sure and remember that securing is not just about preventing unwanted access and abuse, but also provide you with insight into who and how developers and other users are accessing and using your data. This type of insight is critical to evolving your API strategy, so make sure you are not just securing, but also measuring and analyzing.
---
published: true
layout: post
title: Twitter OpenAPI, Docs, and Mocks in a Workspace
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_openapi.png
author:
  name: kinlane
tags:
  - Workspaces
  - Twitter
---
I am working on several demonstrations of what is possible when you use OpenAPI on the Postman platform, and as part of this storytelling I want to use the OpenAPI of leading API platforms to demonstrate what is possible. I am looking to showcase the potential of using an OpenAPI as a base of the API integration and development lifecycle, and today I wanted to showcase what you can quickly do when you put the OpenAPI for the Twitter API into a Postman workspace.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_openapi.png)

This OpenAPI can act as the truth for a variety of lifecycle activities, but to begin with I usually generate two collections. One for providing reference documentation for the entire API, and another to provide me with a mock representation of the entire surface area of the API, helping me articulate what the API does to team members, while also kicking the etires on it before I have to obtain a token or key.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_mock.png)

This approach isn't unique to the Twitter API, and can be used by API providers to guide the development of APIs, or it can be done by API consumers to help localize documentation, mock servers, and other resources you will need to work with an API. If you want to see it in action you can walk through a short video, showing how you can do this in just a few minutes using Postman.
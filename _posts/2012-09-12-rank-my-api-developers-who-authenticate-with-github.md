---
layout: post
title: Rank My API Developers Who Authenticate With Github
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/singly-twitter-linkedin-github-facebook-authentication.png
author:
  name: kinlane
tags:
  - My
  - Github
  - Developers
  - Git
---
I’m updating the login and authentication for my content management system, APIs and other tools to provide authentication using Twitter, Facebook, LinkedIn and Github by default. I’m using [Singly as an authentication provider](https://singly.com/), because their aggregation of API authentication, endpoints and objects across these providers is easy and most efficient way I know to get this accomplished.

In addition to it being easy, I’m using Singly for another advantage. Each service Singly provides has a discovery endpoint, which provides me with metadata and the other endpoints each service provides. I want to use this meta data to derive a quick snapshot ranking of my authenticating user.

For example, when a user authenticates via [Github Using Singly](https://github.com/), I get the following meta data and endpoints:

![](https://s3.amazonaws.com/kinlane-productions2/singly/Singly-Github-Meta-Endpoints.png)

Singly gives me 6 endpoints with data from the user’s activity in these areas. I’m looking to create an algorithm that will provide me with some quick ranking score based upon the number of repositories, followers and following a user has.

Right now I'm just going to add these up, take average across all my users that have logged in via Github. I’m sure I will evolve the design of the algorithm as I progress, but it should work for now.

My goal is to provide a little more insight into what type of user is signing up for my service, API or otherwise and possibly take different courses of action based upon their overall activity levels on Github. I mean, if they are Github superstar I want to know it, and also know if they aren’t very active at all.

I’ll explore the same algorithm for [Twitter](https://www.singly.com/docs/twitter), [Facebook](https://www.singly.com/docs/facebook) and [LinkedIn](https://www.singly.com/docs/linkedin) authentication, but probably take different values into consideration for those social networks.
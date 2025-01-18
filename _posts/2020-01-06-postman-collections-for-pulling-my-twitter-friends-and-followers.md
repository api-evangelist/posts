---
published: true
layout: post
title: Postman Collections For Pulling My Twitter Friends And Followers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/twitter_home_page_friends_followers.png
author:
  name: kinlane
tags:
  - Twitter
  - Collections
  - Capabilities
---
I have been cranking out [the Twitter API capabilities](https://github.com/api-evangelist/capabilities) lately, crafting single request Postman collections that focus on a specific capability of the popular social API. I use the API for a number of different things around API Evangelist, and as I assess how I use the social media API I wanted to be engineering my integrations as Postman collections so I can better organize and execute using Postman, while also adding to [the list of API capabilities I’m sharing with my audience of developers and non-developers](https://github.com/api-evangelist/capabilities).

Today I cranked out two individual Twitter API capabilities helping me better manage my Twitter followers and friends:

*   **[Twitter Followers](https://documenter.postman.com/view/35240/SWLe6839?version=latest) -** Pulls your Twitter followers 200 at a time, saves them within an environment, then allows you to increment through each page of followers, eventually pulling and storing all of your followers.
*   **[Twitter Friends](https://documenter.postman.com/view/35240/SWLe683A?version=latest) -** Pulls your Twitter friends 200 at a time, saves them within an environment, then allows you to increment through each page of friends, eventually pulling and storing all of your friends.

These capabilities are separate Postman collections so that they can be used independently, or together. I am keeping them organized into a Postman workspace so that I can use manually, but then also have a daily monitoring running, pulling any new followers or friends from my Twitter. I pull the resulting JSON from the environments I pair up with each collection using the Postman API and integrate into some of my other API Evangelist monitoring and automation. Next I am going to create a Postman collection that will reconcile the two lists and tell me which people I am following do not follow me back, creating a third list that I can use to unfollow and clean up my profile.

Crafting these types of collections helps me renew my understanding of some of the APIs I already use. It also helps me better define the individual capabilities I put to work on a daily basis, and develop better workflows to get business done. I like the idea of individual tasks like pulling my friends and followers operating and storing the results in an environment for use in other collections, or applications via the Postman API. It is shifting how I see APIs, and how I orchestrate with them. I am looking forward to continuing to make my way through the Twitter API, developing useful collections like this and publishing to [my list of API capabilities](https://github.com/api-evangelist/capabilities), and here on the blog.
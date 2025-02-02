---
published: true
layout: post
title: Pulling Links From Those Tweets You Have Favorited
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-fat-old-pigeon-on-fence.jpg
author:
  name: kinlane
tags:
  - Twitter
  - Links
  - Harvesting
---
I am busy crafting new [API capabilities](https://github.com/api-evangelist/capabilities) from my laundry list of requests I have from folks. When I get an email or come across a Tweet with someone asking how they do something on Twitter I will add to my list, and at some point pull together a simple Postman collection for accomplishing what is being desired. Providing a single Twitter capability that I can add to my list, and anyone (hopefully) can put to use with their own Twitter account and application, within their own local Postman environment. My goal here is to help provide simple API-driven capabilities that anyone can use, while also pushing my skills when it comes to crafting useful Postman collections that aren’t just for developers.

Today’s API capability is from Elana Zeide ([@elanazeide](/admin/blog/elanazeide)) who asked on Twitter, “[So now I have a lot of twitter bookmarks of amazing things you people have shared ... is there any way to export/download them to another app? (I know you can do it w/ likes) Anyone come up with some clever workaround/automation?](https://twitter.com/elanazeide/status/1210993086295236610)”. To possibly help her out I started by creating a single Postman collection that just pulls the favorites for any Twitter user via the Twitter API.

*   **[Pull Twitter Favorites Capability](https://documenter.postman.com/view/35240/SWLb9V6Y?version=latest)** \- It authenticates with the Twitter API and pulls the likes for any Twitter user using their handle, and publishing the list of favorites to the visualizer screen.

This all by itself is a perfectly usable API capability all by itself, but once I was done I used it as my base for pulling any URL that is present in the Tweet. Making for entirely separate Twitter API capability that I hope folks will find useful.

*   **[Pull Links From Twitter Favorites Capability](https://documenter.postman.com/view/35240/SWLb9V6d?version=latest)** \- It authenticates with the Twitter API and pulls the likes for any Twitter user using their handle, extracts all of the links from those tweets and publishes the list of links to the visualizer screen.

Both of these Twitter API capabilities employ the Twitter API to pull JSON data, but they also take advantage of Postman’s new visualizer to abstract away the complexity of each of the API responses, giving the consumer exactly the data they need. If you are brave enough to peak behind the curtain on how this happens you can just click on the Test tab within Postman for each of these collections. I purposefully tried to make the JavaScript as reverse engineer-able as possible so that anyone can tweak to get the results they desire in the visualizer. 

I am working to make the Twitter API more accessible to non-developers with these capabilities, so if there are any rough edges, or things that do not make sense, please let me know—you can Tweet or email at me, or leave an issue on [my API capabilities repository on GitHub](https://github.com/api-evangelist/capabilities). There are some complexities that are out of my control (like Twitter authentication), but I’m always working to polish and smooth things out where I can. If you have any other capabilities you’d like to see for Twitter, or for any other API-driven platform, please let me know. I will work to add them to my list and queue them up when I have free time, crafting more Postman collection and publishing here on my blog. 

_**P.S.** Some assumptions being made here:_

*   You have a Twitter account.
*   You have [downloaded Postman](https://www.postman.com/).
*   You are brave and willing to try new things.
*   You won’t break anything so don’t worry.
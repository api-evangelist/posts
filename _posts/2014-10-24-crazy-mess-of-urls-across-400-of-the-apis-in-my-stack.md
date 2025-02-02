---
layout: post
title: Crazy Mess Of URLs Across 400 Of The APIs In My Stack
sourceurl: >-
  http://apievangelist.com/2014/10/24/crazy-mess-of-urls-across-400-of-the-apis-in-my-stack/
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/consistent-api-program-domains.png
author:
  name: kinlane
tags:
  - My
  - Stack
  - APIs
  - 4
---
I know that some of my readers are URI experts, URL ninjas, and masters of the domain, but most of my readers are not, and I wanted to share some of the 100K view of what I see across the world of domains, in the API space. I’m going through my [API Stack](http://theapistack.com/) over the last couple days (continuing this weekend), looking at 800+ companies who have APIs, and after going through roughly half, I’m seeing some seriously crazy practices for crafting URIs for APIs programs.

Let’s start with the general path to your developer program, I highly recommend providing a simple subdomain, providing access to your APIs  in a simple, consistent path like http://developer.example.com--at the very least put it in a consistent folder like http://example.com/developers. When you put your API into your http://example.com/help/bullshit-cms-system/@$~!$(bullshit-guid$#(@)/developer/ location, it really just sends a signal that your API is just a support feature, and something that is’t getting the resources it will need for success.

When it comes to identity and access management for your APIs, I recommend working from your root using http://example.com/oauth for authentication and discovering of your APIs. After that I recommend taking a similar approach to the developer program, and use http://api.example.com or http://example.com/api. It really sucks to have to guess the baseURL for any API, and if I have to download your SDK to figure out the baseURL, I may skip using your API all together. I’m stilling processing thoughts around the dynamic API subdomains like http://accountname.example.com, giving users a custom base URL for API access.

Whatever you choose when configuring a domain for your API efforts, I probably don’t need to see /rest/, /tcp/, or /http/ in the URL structure. I’m hoping your API resources are these things, you should not have to declare it. When designing your API resources, work hard to think about the core resources, and how they will be used, not necessarily how they are being transported.

I will get a lot of hate from my linked data friends, restafarian cool iya's, and hypermedia homies, about my simplicity and possible errors, but my goal is to just move things forward, and not necessarily convince everyone of exactly the right way of doing things. I find that taking a pragmatic tone, providing a 100K view of what others are doing across the space, is the most effective way to influence change at a macro level.

If I was highlight an particular implementation I would point to Dwolla. The Dwolla developer program is pretty simple, and consistent. You can get at the developer program at [https://developers.dwolla.com/](https://developers.dwolla.com/), API documentation at [https://docs.dwolla.com/](https://docs.dwolla.com/), a blog at [http://blog.dwolla.com/](http://blog.dwolla.com/), and support at [http://help.dwolla.com/](http://help.dwolla.com/). You authenticate, and access the Dwolla API at [https://www.dwolla.com/oauth/](https://www.dwolla.com/oauth/), and can do the same for a sandbox environment at [https://uat.dwolla.com/oauth/](https://uat.dwolla.com/oauth/).

If I had to emphasize anything, I would say that consistency is the most important thing when crafting domains for your API program, and emphasis on the fact that your API effort is a priority, not just some sort of whacky side project ran by a single employee. (oh shit, maybe most are?) Don’t get me wrong, it is fine that your developer API program is run by one crazy person in a company (I fully support this), but you can at least put some work into looking like you are organized, and sane.

This goal of this post is to focus on configuring a sensible base URL for your public API surface, and isn’t about how you should craft the path to resources you are making available. In a perfect world every domain would allow /auth from the root, and employ hypermedia across all API design, but in the world we have I think just getting folks to use simple, and consistent base URLs for key areas of public API efforts, and [considerign of the usage of a APIs.json file in the root of your domain](http://apisjson.org/), can be a healthy place to start when it comes to API discovery.
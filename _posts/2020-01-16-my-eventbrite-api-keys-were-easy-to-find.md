---
published: true
layout: post
title: My Eventbrite API Keys Were Easy To Find
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/event_brite_api_key.png
author:
  name: kinlane
tags:
  - Onboarding
  - Authentication
---
If you read my blog regularly you know I rant all the time about having to sign up for new APIs and then find my API keys and tokens. API providers excel at making it extremely difficult to get up and running with an API, even once you have read their documentation and figured out what their API is all about. So when I come across API providers doing it well, I have to showcase here in a blog posts. Today’s shining example of how to make it easy to find your API keys comes from the Eventbrite API.

[I was crafting a Postman API capability collection for my boss the other day](http://apievangelist.com/2020/01/15/eventbrite-events-with-order-count-and-capacity-using-the-api/), and I needed to find me an API key to get the data I needed out of the Eventbrite API. Finding the API paths we needed to get the event and registration data needed had already taken us some time, so I was fully expected the usual friction when it came to finding my API key. Then I clicked on [the Eventbrite authentication page](https://www.eventbrite.com/platform/api#/introduction/authentication) [](https://www.eventbrite.com/platform/api#/introduction/authentication)and clicked on the link telling me to [visit my API keys page](https://www.eventbrite.com/platform/api-keys), and there they were! No hunting or detective required—my keys were prominently placed above the fold. Amazing!!! 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/event_brite_api_key.png)

This is how it should be. I shouldn’t have to look around for my key—it is the 2020s. Please stop hiding my keys and making it hard for me to find what I need to get up and running with your API. As you are planning out how to develop and deploy the user experience for the API management layer of your operations make sure you pick 25 existing public APIs, then sign up and find your keys. Learn from the experience and put your keys at a common URL that is prominently linked from your documentation and authentication page.

If you have a favorite API that you think adding an application and finding your keys is the pattern other providers should follow, I’d love to hear about tit. Also if there are nightmare APIs that you’ve never been able to actually find your keys, or each time you need to it takes you a lifetime to actually find what you are looking for I’d like to learn about these as well. I’m always on the hunt for the healthy as well as the unhealthy patterns from across the API space. Talking about this stuff in a very public helps us learn about this stuff out in the open, and helps us make fewer mistakes as we are doing our work down in the trenches, and reduces friction for the entire community
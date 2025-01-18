---
layout: post
title: Going The Distance To Help API Consumers Find Their API Keys And Tokens
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/stripe-document-keys.png
atomdate: 2016-08-26T20:00:00.000Z
tags:
  - Consumers
  - Tokens
  - Keys
  - Consumer
---
I am always amazed at how difficult it can be to obtain the API keys, or fire up an initial set of oAuth tokens when kicking the tires on a new API. I would also say that I am also regularly impressed the distance API providers will go to help API consumers obtain the keys they need to make a successful API call.

One example of this is present in the [new Stripe API documentation](https://stripe.com/docs). Their new code samples give you a slick little alert every time you see a demo key and mouse over. The alert gives you a quick link to log in and obtain the keys you need to make an actual call.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/stripe-document-keys.png)

While I like this approach, I also  like the way Twitter does this and gives me a dropdown listing all of my applications, allowing me to choose from any of my current apps I have registered--maybe it is something that could be merged?

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/GET_statuses_mentions_timeline_twitter_developers.png)

Both are great examples of API providers going the extra distance to make sure you understand how to authenticate with an API, and get your API keys and OAuth tokens. If you know of other good examples of how API providers are working to make sure authentication is as frictionless as possible, making API keys and oAuth tokens more accessible directly within API docs--let me know.

This is an area I think interactive documentation has made significantly easier, but things have seemed to stagnate in this area. It is definitely an area I'd like to see move forward, eventually providing cross-API provider solutions that developers can put to use.
---
published: true
layout: post
title: Generate a Bearer Token Using Bruno and Bluesky Create Session API Operation
tags:
  - Bluesky
  - Authentication
  - Bruno
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/every-sunday-morning-castle-clouds-green-lawn.jpg
---
Authentication is always your first impression of an API, and for me where the storytelling about an API always should begin. I am a big believer that API stories should be hands-on and something anyone can do for themselves, so making authentication with Bluesky approachable by even potentially non developers, is something that is important to me. The [documentation for authenticating with Bluesky](https://docs.bsky.app/docs/advanced-guides/api-directory) provides several options for authentication and relies on abstracting away the complexity of auth with an SDK, and is something that can be somewhat of a moving target because of the potential federation of Bluesky using the AT Protocol.

If you are a developer, I will leave authentication to whatever your programming language of choice, and support the SDK—this is what SDKs are good at. This overview is meant for any developer looking to play around, automate, and integrate using specifically the Bluesky HTTP API without any particular SDK or programming language, relying on [an open-source API client Bruno](https://bit.ly/4fpe6FO). If you aren’t familiar with Bruno, it is an open-source, completely local replacement for the Postman API client, which anyone can use to make calls to an API without writing code. To authenticate with the Bluesky API you will need to use the [com-atproto-server-create-session](https://docs.bsky.app/docs/api/com-atproto-server-create-session) operation to login with your username and password and generate a Bearer token which you can use for any future API call.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bluesky/bluesky-auth-1.png" style="padding: 15px;">

To make this call we are putting our username and password into a Bruno environment which allows us to then apply as variables in the body of the API call, abstracting away the user so we can switch for other users, but also the password which we are storing as a secret. 

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bluesky/bluesky-auth-2.png" style="padding: 15px;">

When making a request your Bluesky user identifier and password are passed in as the encrypted body payload of the request to the create session operation and you get a Bearer token back which we have a post request script which will grab the accessJWT property in the response and store it in our environment as a “token” variable—this is what we’ll use to make future calls.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bluesky/bluesky-auth-3.png" style="padding: 15px;">

While I have this request published as a single Bruno Collection in support of this story, I will use this endpoint alongside any other call I want to make next, such as searching for users or posts—which I will talk about in future posts. This allows any collection I have to be automated as a single unit, obtaining a Bearer token and then making any subsequent calls to the API to find users, posts, or accomplish any other tasks. [I have a master OpenAPI and Bruno collection for all of the Bluesky API calls](https://github.com/api-evangelist/bluesky), but I prefer making individual more modular collections in support of stories and individual workflows I want to accomplish using the Bluesky API. 

This is just the first post in many individual posts I will be making about working with the Bluesky API. I like to make each story and collection stand on its own, but then something that can be daisy chained together. Authentication with Bluesky API is documented in a very developer way, meaning it leans on the technical details and specific programming language SDKs to abstract away the complexity of authentication. This is needed, but it is something that needs an added layer of simplifying and polishing to make the API something that is approachable by power users and people who aren’t necessarily developers and identify with a specific programming language, but aren’t afraid to use the API using something like Postman, Bruno, or other method.
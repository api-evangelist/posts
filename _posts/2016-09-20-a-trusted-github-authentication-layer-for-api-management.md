---
layout: post
title: A Trusted Github Authentication Layer For API Management
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.png
atomdate: 2016-09-21T00:00:00.000Z
tags:
  - Github
  - Management
  - Authentication
  - API Management
  - rust
  - Git
---
I am reworking the management layer for my APIs. For the last couple of years, I had aspirations of running my APIs with a retail layer generating revenue for API Evangelist--something which required a more comprehensive API management layer. In 2016, I'm not really interested in generating revenue from the APIs I operate, I'm just looking to put them to work in my own business, and if others want access I'm happy to open things up and broker some volume deals.

To accomplish this I really do not need heavy security or service composition for my APIs, I'm just needed to limit who has access so they aren't just 100% public, and identify those who are using, and how much they are actually consuming. To facilitate this I am just going to use Github as a trusted layer for authentication. Using an OAuth proxy, I'll let my own applications authenticate using their respective Github user, and identify themselves using a Github OAuth token when making calls to each API. 

Each application I have operating on top of my APIs have its own Github account. Once they do the OAuth dance with my proxy, my system will then have a Github token identifying who they are. I won't need to validate the token is still good with each call, something I'll verify each hour or day, and cache locally to improve API performance. Anytime an unidentified token comes through, I'll just make a call to Github, and get the Github users associated, and check them against a trusted list of Github users who I have approved for accessing my APIs.

I'm not really interested in securing access to all the content, data, and algorithms I'm exposing using APIs. I'm only looking to identify which applications are putting them to work and evaluate their amount of usage each day and month. This way I can monitor my own API consumption, while still opening things up to partners or any other 3rd party developer that I trust--if they are using too much, I can drop them a message to have a conversation about next steps.

I'm still rolling out this system out, but it got me thinking about API access in general, and the possibilities that a trusted list of Github accounts could be used to expedite API registration, application setup, and the obtaining keys. Imagine if as a developer I could just ping any API, do an OAuth dance with my Github credentials, and get back my application id and secret keys for making API calls--all in a single flow. As an API provider I could just maintain a single trusted list of Github users, as well as consult other lists maintained by companies or individuals I trust, and reduce friction when onboarding, or automatically approve developers for higher levels of access and consumption.
---
layout: post
title: Are API Keys and Secrets Actually Very Secure?
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-padlock.png
author:
  name: kinlane
tags:
  - Keys
  - Secrets
---
When it comes to [API security](http://security.apievangelist.com/), there are a number of things to consider, something I will be be working to define, and share as part of my ongoing research. However there are three building blocks that are front and center in most security conversations--SSL, API keys, and OAuth. SSL is a must-have, and OAuth is fast becoming a must-have when there is personal data involved, but I still encounter numerous misconceptions around the role API keys actually play in security.

API key, and its accompanying secret are a common way to secure API access. You require developers to register for an account, create a new application, and they are then given an application key, plus a secret that is passed along with each API call. You cannot call the API, without passing in your API key and secret. This act alone, is what people view as the security role API keys are playing, and I get a number of questions if this is truly secure. 

No it is not. Looking for two values being passed with each API call, really doesn't do that much. The actual security of your platform requires a much higher level, IT view of security (which I won't go into here), with API keys being just one tool in your security toolbox. Where keys do play a huge role, is around the awarness that is introduced, of who is accessing what, and managing how much they can access (aka mitigating how much damage is done, when there is a breach).

This short sighted views of API keys is why many companies feel they can just roll their own API management solution, and why many API developers and architects think the keys themselves possess some magical security pixie dust. The actual power comes from your awarness of the resources you are exposing via APIs, organizing into coherent service tiers, applying meaningful rate limits on these resources, and evolving your detailed awareness of who is accessing your resources, how much they are using, and when. 

An API key and its companion secret offer very litle security, but the awarness they bring when you have a modern API management layer in place, can bring huge security benefits to the table. Something that will not prevent every security breach, but with the right mechanisms in place you can be alerted of breaches in real-time, and dramatically limit the extent of their damage, when they do occur.
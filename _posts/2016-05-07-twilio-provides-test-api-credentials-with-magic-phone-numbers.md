---
layout: post
title: Twilio Provides Test API Credentials With Magic Phone Numbers
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twilio-test-credentials.png
tags:
  - Twilio
---
I am always on the hunt for the little things that make API integration easier, and while [working to certify my Twilio API definition](http://theapistack.com/certifying/), I noticed their [test credentials](https://www.twilio.com/user/account/phone-numbers/dev-tools/test-credentials). When you are playing with the Twilio API, it's pretty easy to add new keys, and create new apps, but they also offering test credentials along with what they call "Twilio's Magic Numbers" so that you can play without connecting to real phones or making actual charges on your account.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twilio-test-credentials.png)

Many APIs provide you access to data or content, but Twilio enters the additional realm of much more complex, programmatic API resources. When getting up and going with these types of APIs, it really helps to have a sandbox to play in, and a ready to go set of test credentials provides this for users by default.

If you are offering up more than just data and content, via your API, you may want to follow Twilio's lead, and create a set of permanent, or even regularly changing set of test accounts for consumers to use. It made my onboarding with Twilio, significantly easier.
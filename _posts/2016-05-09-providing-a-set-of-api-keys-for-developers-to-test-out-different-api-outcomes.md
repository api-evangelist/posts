---
layout: post
title: Providing A Set Of API Keys For Developers To Test Out Different API Outcomes
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-outcomes.png
tags:
  - Diff
  - Keys
  - Developers
---
[I wrote a post about Twilio using magic phone numbers that let their developers test out functionality without incurring any charges for deploying live phone numbers, making calls, and sending SMS](http://apievangelist.com/2016/05/07/twilio-provides-test-api-credentials-with-magic-phone-numbers/). After publishing my post, Runscope CEO, John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan)) said he was behind the original spec for the Twilio magic numbers.

> [@kinlane](https://twitter.com/kinlane) ha I wrote the magic numbers spec. The implementation was better than my design but it’s funny to see it recognized so much later
> 
> — John Sheehan (@johnsheehan) [May 9, 2016](https://twitter.com/johnsheehan/status/729822645613531136)

John continued to share some of the logic that went into his original spec:

> [@kinlane](https://twitter.com/kinlane) I borrowed the idea from payment processors using magic numbers to generate specific kinds of outcomes like declines
> 
> — John Sheehan (@johnsheehan) [May 10, 2016](https://twitter.com/johnsheehan/status/729827977693790208)

Which I think adds another dimension to the concept of having test numbers like this. Different numbers give you different outcomes, and different credit card numbers give you different results. What else could you do with test numbers and unique identifiers? Existing invoice and order numbers for different commerce situations. Seems like you could load just about anything into any alpha and / or numeric that you would want to.

Around the turn of the century (I don't think I've ever said that) I used to work on web applications for non-profit organizations where I used to build campaign code tracking for large, and lengthy mail, phone, fax, and other types of activities. We had 6 to 8 digit identifiers, which every two digits had unique meanings--allowing us to build a pretty robust set of scenarios that helped us track every step in the campaigns evolution. 

Anyways, I think the concept is worthy of further exploration. I could see API providers crafting a pretty robust set of keys that could represent almost any object served up as part of API operations, with a very structured approach for how you tailor a multitude outcomes involving these objects. For me, this type of stuff goes way beyond just having a sandbox for your API, and could provide a much more meaningful way help developers polish their integrations.
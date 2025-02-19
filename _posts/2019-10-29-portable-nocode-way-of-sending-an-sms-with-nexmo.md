---
published: true
layout: post
title: Portable No-Code Way Of Sending an SMS With Nexmo
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/nexmo_sms_docs.png
author:
  name: kinlane
tags:
  - No-Code
  - SMS
---
I am at [the Vonage Campus event today in San Francisco](https://www.vonage.com/campus/) listening to a variety of talks from their team and partners. As I’m listening I can’t help but [play around with their APIs](https://developer.nexmo.com/), and explore what is possible. It is easy to try out the SMS via the Nexmo documentation, but I wanted to create a more portable, sharable way of sending an SMS that anyone can use—even a non-developer. This gives me a chance to play around with Next more, while also crafting Postman collections that I can include in my catalog of simple, usable APIs.

[Nexmo provides a pretty straightforward API for sending SMS](https://developer.nexmo.com/messaging/sms/overview), with a basic set of properties for who the message is to, who it is from, and the body of the message. There are other parameters you can include, and of course you have to pass in your API key and secret, but overall it is a pretty simple, straightforward API that anyone can put to work.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/nexmo_postman_sms.png)](https://www.postman.com/collections/f0a2143915bc08419b7e)

To help me learn more about the Nexmo API while also providing a usable example that anyone can run I published [a Nexmo Postman collection](https://www.postman.com/collections/f0a2143915bc08419b7e), as well as a [Postman environment](https://raw.githubusercontent.com/api-evangelist/nexmo/master/nexmo.environment.json). You can import into your Postman client or use the Run in Postman button below. You will have to [sign up for your own Nexmo API key](https://dashboard.nexmo.com/sign-up), add add your key and secret to the Postman environment, but once you have you should be able to send an SMS to any number you choose.

I will be creating more Postman collections for other Nexmo APIs, publishing them individually, as well as publishing a complete collection containing all of them when I am done. I want the individual Postman collections for referencing within specific stories, but I also want the entire collection for indexing all the capabilities of the telco API provider. If there are any particular Nexmo APIs you’d like to see published, please let me know, and I’m happy to fire up a collection to help make your work easier.
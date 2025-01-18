---
layout: post
title: >-
  Another High Profile Mobile To API Security Breach, This One At MoonPig
  Greeting Cards
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/logo_moonpig.png
author:
  name: kinlane
tags:
  - Security
  - Mobile
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/logo_moonpig.png)](http://www.moonpig.com/uk/)

I saw a story of yet another security breach related to how mobile phones are using APIs today. [This one is from Paul Price, on his blog](http://ifc0nfig.com/moonpig-vulnerability/) [ifc0nfig.com](http://ifc0nfig.com/), about the [greeting card site MoonPig](http://www.moonpig.com/uk/).

Paul highlights the not just lack of, but actual absence of security when making API calls to MoonPig, allowing you to impersonate any user, place orders, add/retrieve card information, and any other API driven feature of the mobile application.

MoonPig is looking into it of course:

> We are aware of claims re customer data and can confirm that all password and payment information is and has always been safe.
> 
> — Moonpig (@MoonpigUK) [January 6, 2015](https://twitter.com/MoonpigUK/status/552419988834111489)

When those of us in the API industry talk about public APIs, many folks think we are talking about APIs like Twitter that have publicly available information, or public APIs that allow for anyone to sign up for the service, when in reality, most of the time we are talking about APIs that use the public Internet for transport.

MoonPig’s awareness regarding their API surface area, and complete lack of security is something we are going to see play out, in numerous very public, high profile security breaches in the coming years. There are hundreds if not thousands of companies out there right now who have the same setup, and rely on security through obscurity (nobody has discovered it yet).

I personally [recommend treating all APIs used in mobile devices like they are public APIs](http://apievangelist.com/2014/10/27/if-you-have-a-publicly-available-mobile-app-you-have-a-public-api/), with a well defined, very public API definition, bundled with a very public security layer, like oAuth. You can still control who has access to signup and use the API, but one beneficial side effect is you can also treat all internal apps like their are just another user on the API.

This is the benefit of public API. Not the myths you often hear about becoming the next Twilio, but the reality that being public will force you to have a very much more well designed, and secure API, that you acknowledge operates on the open Internet. With this mindset you aren’t operating in the shadows, you will begin treat your APIs traffic like is available on the open Internet—which, well, IT IS!!!

Back to the MoonPig story, look at the [timeline of disclosure at the bottom of Paul's post](http://ifc0nfig.com/moonpig-vulnerability/)\--he has given them 17 months since he first reported, and they still haven't fixed. OUCH!!
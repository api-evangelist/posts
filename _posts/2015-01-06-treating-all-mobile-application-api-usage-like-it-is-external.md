---
layout: post
title: Treating All Mobile Application API Usage Like It Is External
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-danger.png
author:
  name: kinlane
tags:
  - Mobile
  - Usage
---
I have read several stories about security breaches in the past couple days, ranging from [exploitation of APIs across the distributed systems we are increasingly depending on](http://searchsoa.techtarget.com/tip/API-security-more-critical-as-componentization-grows), to [no security at MoonPig for their mobile app](http://apievangelist.com/2015/01/06/another-high-profile-mobile-to-api-security-breach-this-one-at-moonpig-greeting-cards/), and [the reverse engineering of a popular mobile app—this time it is the Kayak mobile app](http://apievangelist.com/2015/01/05/reverse-engineering-of-the-kayak-api-from-the-mobile-app/).

Maybe I am biased, but I can’t help but think, in a world increasingly driven by mobile devices, we need to treat all applications like they are external, get to work seting up a proper API program, and secure all apps the same way, no matter whether they are used for internal, partner, or public usage. Treating internal apps differently, opens things up for a whole world of hurt when internal systems are compromised, and ignoring how public facing your API is, when embedded in a popular mobile app, goes into the same category.

If you have a single API stack, that ALL of your systems integrations, web, mobile, and device based-apps use, you have established a single surface area youneed to secure. Then, if you are using modern API infrastructure, a surface area that you can monitor, and have established relevant service composition, tailored for internal, partner, and public access of resources, you will be able to stay in tune with your API usage, and identify negatives situations much faster--across all devices.

If you are operating your business on the Internet today (i hope you are), consider treating all your apps as external, no matter where they reside, or who uses them—your overall architecture will be much healthier, and resilient because off because of it.
---
layout: post
title: Please Share Your OpenAPI Specs So I Can Use Across The API Life Cycle
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_01_at_12.43.12_pm.png
atomdate: 2016-10-04T22:00:00.000Z
tags:
  - OpenAPI
  - Life Cycle
  - Open
  - Specs
---
I was profiling the New Relic API, and while I was pleased to [find OpenAPI Specs behind their explorer](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-waiter.png), I was less than pleased to have to reverse engineer their docs to get at their API definitions. It is pretty easy to open up my Google Chrome Developer Tools and grab the URLs for each OpenAPI Spec, but you know what would be easier? If you just provided me a link to them in your documentation!

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_01_at_12.43.12_pm.png)

Your API definitions aren't just driving the API documentation on your website. They are being used across the API life cycle. I am using them fire up and playing with your API in [Postman](http://getpostman.com), generating SDKs using [APIMATIC](http://apimatic.io), or creating a [development sandbox](https://getsandbox.com/) so I do not have to develop against your live environment. Please do not hide your API definitions, bring them out of the shadow of your API documentation and give me a link I can click on--one click access to a machine-readable definition of the value your API delivers.

I'm sure my regular readers are getting sick of hearing about this, but the reality of my readers is that they are a diverse, and busy group of folks and will most likely not read every post on this important subject. If you have read a previous post on this subject from me, and are reading this latest one, and still do not have API definitions or prominent links--then shame on you for not making your API more accessible and usable...because isn't that what this is all about?
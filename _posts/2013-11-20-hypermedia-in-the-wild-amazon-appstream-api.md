---
layout: post
title: 'Hypermedia In The Wild: Amazon AppStream API'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/amazon-appstream-main.jpg
author:
  name: kinlane
tags:
  - Hypermedia
  - Amazon
---
[![](https://s3.amazonaws.com/kinlane-productions2/amazon/appstream/amazon-appstream-main.jpg)](http://aws.amazon.com/appstream/)

With the growing number of hypermedia API deployments, hypermedia haters© are going to lose a major argument, that hypermedia is just an academic exercise and will never work in the wild. ;-)

The latest hypermedia API I was told about in the wild(thanks [@johnmusser](https://twitter.com/johnmusser)), is from Amazon Web Services with the recent [AppStream API](http://docs.aws.amazon.com/appstream/latest/developerguide/rest-api.html#rest-api-hal)\--"a flexible, low-latency service that lets you stream resource intensive applications and games from the cloud".

[The AWS AppStream API](http://docs.aws.amazon.com/appstream/latest/developerguide/rest-api.html#rest-api-hal) is an API that uses [Hypertext Application Language](http://stateless.co/hal_specification.html) (HAL), a consistent and easy way to hyperlink between API resources, created by Mike Kelly([@mikekelly85](https://twitter.com/mikekelly85)) of [Stateless.co](http://stateless.co/). When HAL is used, with each API request, you get a wealth of links that allow you to programmatically explore the functionality of an API.

For example, you can explore the JSON returned in each response from the application API endpoint, about a specific app you are streaming including using the services, you will find links to determine application status, show information on current session and many more.

Normally with APIs, developers have to explore each API endpoint, and read through documentation to understand the different actions that can be taken against an API. With HAL, API owners can craft links that provide meaningful actions that can be discovered and implemented by developers along the way, teaching them about what is possible with each API call.

Hypermedia goes a long way in extending business rules to developers, not just directing them to what next steps may be taken at each API request, but really save them a lot of homework on how your API business model works, and how to best build an application around an API.

There are [other hypermedia APIs](http://stateless.co/hal_specification.html) in the wild, including the very important [Public Media Platform (PMP)](http://publicmediaplatform.org/), but the numbers are still low. I will keep finding quality hypermedia solutions in the wild and sharing them with you as I find.
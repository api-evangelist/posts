---
layout: post
title: Stoplight Displays API Definitions By Default With Their API Doc Service
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/API_Docs.png
atomdate: 2016-09-06T22:00:00.000Z
tags:
  - Definitions
  - Definition
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/API_Docs.png)](http://botlytics.api-docs.io/v1/messages)

I was doing some maintenance on my [bots and APIs research](http://bots.apievangelist.com/), and processing the information for the [bot analytics provider Botlytics](https://botlytics.co/), and as I was going [through their API](http://botlytics.api-docs.io/v1/messages) I noticed the prominent placement and availability of OpenAPI Specs for the API.

[Making your API definitions as prominent as possible is something I have been advocating for some time now](http://apievangelist.com/2015/08/31/please-do-not-hide-your-api-definitions-from-consumers/), something I reinforced again [recently by asking API providers to make sure and show as an icon](http://apievangelist.com/2016/08/29/add-a-prominent-icon-link-to-your-api-definition-on-your-documentation-page/), or other very visual element. This is a very important part of the API life cycle, that when also supported as a default feature by API service providers, just keeps giving to the API community, and helps makes it truly more open, consistent, while also helping it be more machine readable. (shouldn't everything API be machine readable? \*cough\* hypermedia \*cough\*)

When [Apiary introduced this feature to their API customers by default I wrote about it](http://apievangelist.com/2015/08/31/please-do-not-hide-your-api-definitions-from-consumers/), and I also wanted to take the time and give a nod to the Stoplight.io team for doing this with their API Docs--making OpenAPI Spec definitions available in such a prominent location by default. API providers don't always have the time to think of all the little details (which is why I write about things on API Evangelist), so it is super critical that API providers help raise the bar like this when possible.

If you are looking for the quickest way to deploy machine readable API definitions + API docs for your API I recommend [downloading Stoplight's Prism](http://stoplight.io/prism/), fire up your API in [Postman](http://getpostman.com), make calls to all your API endpoints, and [Prism](http://stoplight.io/prism/), [Stoplight](http://stoplight.io/), and [API Docs](https://api-docs.io/) will do the heavy lifting for you
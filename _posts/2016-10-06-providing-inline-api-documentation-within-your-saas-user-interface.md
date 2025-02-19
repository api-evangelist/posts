---
layout: post
title: Providing Inline API Documentation Within Your SaaS User Interface
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_dns_api_inline_1.png
atomdate: 2016-10-06T20:00:00.000Z
tags:
  - Documentation
  - User Interface
---
The common approach to discovering that a SaaS provider has an API is through a single, external link in the footer of a website, simply labeled API or developers. Whenever I can I'm on the lookout for evolutionary approaches to making users aware of an API, and I just found a good one over at CloudFlare.

When you are logged into CloudFlare managing your DNS, right below the area for adding, editing, and deleting DNS records you are given some extra options, including expandable access to your API--down in the right-hand corner, between Advanced and Help.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/cloudflare_dns_api_inline_1.png)

Once you click on the API option, you are given a listing of DNS record related API endpoints, allowing me to bake the same functionality available to me in the CloudFlare UI, into my own systems and application. A summary, path, and verb is provided for each relevant API, with a link to the full API documentation.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist-site/blog/cloudflare-dns-api-inline-2.png)

I really like this approach. It is a great way to make APIs more accessible to the muggles (thanks [@CaseySoftware](https://twitter.com/CaseySoftware)). It is also a great way to think about connecting UI functionality to the (hopefully) API behind. Imagine if every UI element had an API link in the corner to see the API behind, and a link to its documentation . You could even display the request and response bodies for the API call made by the UI, allowing people to easily reverse engineer what an API does. 

I have suggested this approach at several events, and to other API technologists who felt it was a bad idea, as the user doesn't want to be bothered by the details of why something does what it does, they just want it to be done. I disagree. I strongly believe that this is an extension of old school beliefs by the IT wizards, that the muggles aren't smart enough, and IT should have all the power (one ring and all that).

Seriously, though. There is no reason that everyone shouldn't be exposed to the API behind, and if they want to learn more they can. If they do not want to learn more, they do not have to. I'm going to be evangelizing for more links to the API developer portal, API documentation, and other resources from within the UI of the SaaS solutions we use. This will help make sure that all users are aware of the API behind, and the opportunities for putting it to use in external applications, tooling, and services.
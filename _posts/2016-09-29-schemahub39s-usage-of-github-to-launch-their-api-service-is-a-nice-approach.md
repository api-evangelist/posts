---
layout: post
title: >-
  SchemaHub&#039;s Usage Of Github To Launch Their API Service Is A Nice
  Approach
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/schemahub_thanks.png
atomdate: 2016-09-29T16:00:00.000Z
tags:
  - Github
  - Schema
  - Usage
  - Git
---
I'm looking through a new API definition focused service provider called [SchemaHub](http://schemahub.io/) today, and I found their approach to using Github as a base of operations was interesting and provided a nice blueprint for other API server providers to follow. I'm continually amazed at the myriad of ways that Github can be put to use in the world of APIs, which is one of the things I love about it.

As a base for SchemaHub, [they created a Github Org](https://github.com/schemahub), and made their [first repository the website for the service](https://github.com/schemahub/schemahub.github.io), hosted on [Github Pages](https://pages.github.com/). In my opinion, this is how all API services should begin, as a repo, under an organization on Github--leveraging the social coding platform as a base for their operations.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/schemahub_github.png)](https://github.com/schemahub/schemahub.github.io)

SchemaHub is taking advantage of Github for hosting their API definition focused project--free, version controlled, static website hosting for schemahub.io. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_09_28_at_7.34.36_pm.png)

As I was looking through their site, learning about what they are doing I noticed a subscription button at the bottom of the page, asking me to subscribe, and they'll notify me when things are ready.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/schemahub_subscribe.png)

Once I clicked on the button, I was taken for a Github OAuth dance, which now makes SchemaHub not just a Github repo for the site, it is an actual Github Application that I've authenticated with using my Github account. They only have access to my profile and email, but is the types of provider to developer connection I like to see in the API world.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/authorize_schemahub.png)

Once I authorize and connect I am taken to a thank you page back on their website, letting me know I will be contacted shortly with any updates about the service. Oh, and I'm offered a Twitter account as well, allowing me to stay in tune with what they are up to--providing a pretty complete picture for how new API services can operate. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/schemahub_thanks.png)

SchemaHub's approach reflects [what I'm talking about when I say that Github should offer an Oauth service](http://apievangelist.com/2016/09/27/github-needs-client-oauth-proxy-for-more-complete-clientside-apps-on-pages/), something that would enable applications running on Github to establish a Github app as part of their organization and website. I like this model because it enables connections like Schema has established to occur, maximizing the social powers of the Github platform.

SchemaHub wins for making a great first impression on me with their API service. Github Org, simple static Github Pages hosted website, connectivity with my Github profile, and a Twitter account to follow. Now I know who they are, I'm connected, and when they are ready with their API service, they have multiple channels to update me on. My only critique is that I would also like to have a blog with Atom feed, so I can hear stories about what they are trying to accomplish, but that is something that can come later. For now, they are off to a pretty good start.
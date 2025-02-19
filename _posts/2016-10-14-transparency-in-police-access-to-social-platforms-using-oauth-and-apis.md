---
layout: post
title: Transparency In Police Access To Social Platforms Using OAuth And APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/facebook_instagram_and_twitter_provided_data_access_for_a_surveillance_product_marketed_to_target_activists_of_color__american_civil_liberties_union.png
atomdate: 2016-10-15T00:00:00.000Z
tags:
  - Social
  - Transparency
  - OAuth
  - Platform
  - Access
  - APIs
  - Platforms
---
[I was learning about Geofeedia providing law enforcement access to social media data from Twitter, Facebook, and Instagram via their API(s) this week](https://www.aclu.org/blog/free-future/facebook-instagram-and-twitter-provided-data-access-surveillance-product-marketed). Geofeedia was making money by selling surveillance services to law enforcement build on top of these social APIs and is something that I guess Facebook and Instagram have cut-off access, but they could still have Twitter access through a reseller (Gnip?). 

This isn't something that will just go away. If law enforcement wants access to user's data on Facebook, Twitter, and Instagram, they are going to get it. I am guessing that the rules regarding what law enforcement can or can't do aren't clear (I will have to learn more), and something that is just left up to platforms to enforce via their terms of service. It is a problem that modern approaches to API authentication, management, and analytics are well designed to help make sense of--we just have to come up with a new layer defined specifically for law enforcement.

Law enforcement should be able to fire up any standard, or customized solution they desire to search against social media data via APIs. However, they should be required to obtain an application key, and obtain the OAuth tokens that any other developer would need to. Rather than law enforcement being the customer of companies like Geofeedia, they should each get their own app id and keys, providing an identifying application that represents a specific law enforcement agency. They can still buy the software from providers, they just need the unique identifier when it comes to API consumption.

Along with this access, we also need to begin to define an auditable or regulatory layer, where other government agencies or 3rd party auditors can get access to the access logs for all applications registered to law enforcement agencies. A kind of real time FOIA access to the API management layer, allowing for a window into how law enforcement agencies are searching and putting social media data to use.

Of course, there will be special considerations regarding the OAuth interactions at play. At what point are end-users notified that their data is being accessed by law enforcement, and at what point do other government agencies and 3rd party auditors have access to API access to log file APIs for the law enforcement applications that are consuming Facebook, Instagram, Twitter, and other APIs. 

There is a lot of work ahead to define how law enforcement can put social data to work via APIs, but the tools are there. Modern API infrastructure excels at this when done right. We can give law enforcement access to the data they need, while also enabling transparency in the process, making the platform operators like Twitter and Facebook feel better, while also respecting the privacy of US citizens. We need to just hammer out the OAuth scopes for these relationships similar to how we do it for [energy](http://partners.apievangelist.com/2014/05/14/the-future-of-public-private-sector-partnerships-being-negotiated-at-the-api-oauth-scope-level/), [healthcare](http://openid.bitbucket.org/HEART/openid-heart-fhir-oauth2.html), and other vital data being served up via APIs.

This is a problem that will keep popping up. We can't just rely on groups like ACLU to find the companies who are acting as brokers and waiting for the platforms to play whack a mole when these companies are singled out. We need a formal definition to guide how law enforcement is obtaining access to increasingly vital social media and network data via APIs. We need some transparency and consistency in the process, something that APIs do well when executed properly.

While it makes cringe think about. I predict that many companies will be required to have API access in the future--specifically for this purpose. My hope is that there is also some transparency and consistency baked into this approach, leverage what web APIs do best. Allowing law enforcement to get what they legally need, allowing other government agencies, watchdog groups, and journalist to get self-service, predefined access to understanding what law enforcement is up to when it comes to surveillance using online services.

I will spend more time on this subject. Mapping out how it might work across the top platform like Twitter, Facebook, and Instagram. I'm hoping that we can make some movement in this area before too many other episodes occur.
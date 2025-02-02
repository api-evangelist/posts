---
layout: post
title: Twilio Connect is NOT OAuth for API Billing
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/OAuth2.png
author:
  name: kinlane
tags:
  - OAuth
  - Twilio
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/twilio/twilio-connect-screenshot.png)](http://www.twilio.com/api/connect "Twilio Connect")

During [TwilioCon](http://www.twilio.com/conference/ "TwilioCon") last week I covered the release of Twilio Connect in two posts, starting with, "[Twilio Introduces Twilio Connect, Its New In-App Billing Model](http://blog.programmableweb.com/2011/09/21/twilio-introduces-twilio-connect-its-new-in-app-billing-model/ "Twilio Introduces Twilio Connect, Its New In-App Billing Model")" on [ProgrammableWeb](http://www.programmableweb.com "ProgrammableWeb"), and on API Evangelist with, "[Twilio Connect is OAuth for API Billing](/2011/09/20/twilio-connect-is-oauth-for-api-billing/ "http://apievangelist.com/2011/09/20/twilio-connect-is-oauth-for-api-billing/")".

[Twilio Connect](http://www.twilio.com/api/connect "Twilio connect") is a new billing solution that enables developers to offload charges for Twilio API usage to their application users, rather than their own Twilio accounts, and billing customers separately. Twilio Connect is modeled after OAuth in that it uses a “two-legged” process for application users to setup and authenticate a payment relationship with Twilio, that a developer can leverage within their app using a token.

I mentioned lightly in my post on API Evangelist:

> _“OAuth 2.0 allows for designation of which account resources a developer can access, enabling users to approve at a very granular level, which could very easily be used for billing access as well.”_

Then yesterday I got called out on Twitter by [Travis Spencer](http://travisspencer.com/ "Travis Spencer") ([@travisspencer](http://www.twitter.com/travisspencer)), stating that because Twilio did not use OAuth 2.0 to implement Twilio Connect, it was a step backwards, and I was irresponsible for not calling Twilio out on this. He is totally right, and I humbly admit to not covering this story well enough.

In most cases OAuth is implemented for basic user account authentication, but with the introduction of OAuth 2.0 you can use for authenticating access in a very granular way for any user resources that you choose. So it could be very easily used for billing authentication, and its irresponsible of Twilio to not embrace industry standards, and developing their own, proprietary, one-off implementation.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/oauth/oauth-basic.png)

OAuth has a reputation for being tough to implement, both from a provider standpoint as well as working with as a developer, but with each version it is getting easier to use, and since its being widely accepted as an industry standard it is all of our responsibility as API owners to make sure it is used properly, and help developers understand the benefits.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/oauth/oauth-additionalscope.png)

Travis is right, and using widely accepted standards like OAuth 2.0 make API consumption easier. API owners need to implement OAuth for user account authentication, as well as adding additional scope for accessing other user resources such as billing.

Twilio leads in many ways when it comes to API ecosystem management, but they should have implemented Twilio Connect using OAuth 2.0.

Thanks Travis for calling me out, I always welcome anyone to keep me in check, and happy to admit when I’m wrong.
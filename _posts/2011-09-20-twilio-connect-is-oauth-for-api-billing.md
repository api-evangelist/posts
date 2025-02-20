---
layout: post
title: Twilio Connect is OAuth for API Billing
url: http://apievangelist.com/2011/09/20/twilio-connect-is-oauth-for-api-billing/
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/twilio-connect-button.png
author:
  name: kinlane
tags:
  - OAuth
  - Twilio
---
kinlane-productions2.s3.amazonaws.com [![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/twilio/Twilio-Logo.png)](http://www.twilio.com "Twilio")

[Twilio](http://www.twilio.com "Twilio") just announced a new API billing solution called Twilio Connect.  The new billing solution enables developers to offload charges for Twilio API usage to their application users, rather than their own Twilio accounts, and billing customers separately.

Twilio Connect is modeled after OAuth in that it uses a “two-legged” process for application users to setup and authenticate a payment relationship with Twilio, that a developer can leverage within their app using a token.

To start, developers put a Twilio Connect button in their application.  Application users then click the button and are taken to a secure Twilio page that allows them to setup a new Twilio account, requiring only the minimal needed information:  name, billing info, and email.   Upon successful setup, the application is then issued a token, which combined with a Twilio developers key, enables that application to consume Twilio API services, and bill to the users account.

If you think about it, it makes perfect sense.  What OAuth has done for user account authentication,  Twilio is doing for developer billing authentication.  OAuth 2.0 allows for designation of which account resources a developer can access, enabling users to approve at a very granular level, which could very easily be used for billing access as well.  However the complexity of OAuth 2.0 can often scare away businesses looking to implement oAuth, and developers looking to build around an API that authenticates with OAuth.  Twilio is taking the best features from OAuth, while keep the developer implementation dead simple.

Not all APIs would benefit from a billing authentication model like Twilio Connect.  It would work best for APIs that truly have a “cloud utility” model for their pricing, allowing developers to pay for only what they consume.  This would allow for the burden of billing to be lifted from developers, enabling them to do what they do best--code applications.  

kinlane-productions2.s3.amazonaws.com ![](http://kinlane-productions.s3.amazonaws.com/api-evangelist/twilio/twilio-connect-button.png)

One problem I see here is that developers who rely on marking up underlying API services as part of their businesss model, would not benefit from a billing model like this.  But there is opportunity for API owners to take control of in-app billing, to make secure, and operate in the best interest of all application users, while also open up a new revenue sharing opportunity for their developers.  They could offer different percentages of revenue share depending on how much business a developers app generates.  

Right now, the benefit for all developers may not be immediately clear, especially if they depend on revenue from these services, and there may be no benefit to the applicaiton user to have their own Twilio account.  It may actually add an extra unecessary step that could confuse a user during setup.  But think about when Twilio SMS and voice is ubiquitous across business, which is on its way.  A business could connect and disconnect its central telephony account from within different applications and services, and enable them to see their voice and SMS usage company wide, across a variety of applications.

[Twilio Connect](http://blog.programmableweb.com/2011/09/21/twilio-introduces-twilio-connect-its-new-in-app-billing-model/ "Twilio Connect") an interesting approach to API billing. I like the way Twilio thinks, and the company continues to lead in the API space when it comes to making developers lives easier.  I can’t help but think of how this would benefit other APIs, and if this possibly could become a staple for APIs like OAuth has.
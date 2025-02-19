---
layout: post
title: >-
  Thinking Through The Design Of Your Pricing API Would Help You Think Through
  Your API Plan
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/messente-prices-api.png
tags:
  - Design
  - Pricing
---
[As I made my way through nine of the leading SMS providers, profiling the details of their API plans](http://apievangelist.com/2016/03/06/numerous-challenges-when-it-comes-to-comparing-even-similar-api-plans/), trying to bring it all together into a single, machine readable definition, [Messente's pricing API stood out for me](https://messente.com/documentation/pricing). Alongside their SMS API, and their number lookup API, they have a pricing API. As I take a moment to look at the simplicity of the endpoint, I am also thinking about the potential, and the details of their API docs really stand out for me.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/messente-prices-api.png)](https://messente.com/documentation/pricing)

In addition to a pricing API being a valuable utility for any API consumer, I can't help but think the process of constructing a pricing API would force API providers to think another layer deeper in their API plan(s). Similar to how you have to think through the details of any resource you make available via an API, considering how it will be put to use, crafting a pricing API would force you to do the same for one of the most valuable, and overlooked resources you offer, that is core to all of your API operations.

[I've talked about the importance of API providers having management level APIs before](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/), and I think they should also follow [the lead of API providers like Messente who exist in a pretty mature sector, and have a handle on their API pricing](http://apievangelist.com/2015/12/12/apis-in-the-most-mature-sectors-have-pricing-apis/). I've said it before, and will keeping harping on this issue...[that all API providers and their service providers should have pricing APIs](http://apievangelist.com/2015/12/15/easier-to-offer-ops-apis-to-your-devs-if-your-api-service-provider-has-apis/), as well as APIs for the other essential building blocks of their API operations.

Another thing to note here, that I will be writing about more in the future, is the presence of two-letter country code as a parameter for an API. While not all APIs will have country specific pricing like SMS providers do, the API providers who are looking to truly operate globally, you will need to continue the automation of your operations, making pricing available on demand, in any currency that consumers will need.
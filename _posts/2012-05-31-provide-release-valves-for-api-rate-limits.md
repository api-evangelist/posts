---
layout: post
title: Provide Release Valves for API Rate Limits
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/teapot-steaming.jpg
author:
  name: kinlane
tags:
  - Rate Limits
---
In my effort to better understand API access, I’m studying how API owners control access to their APIs, with most recently being around Rate Limiting. The other day I asked, [why do we limit API access for developers](/2012/05/29/why-do-we-limit-api-access-for-developers/ "why do we limit API access for developers"), and even [explored rewarding developers for heavy usage](http://blog.programmableweb.com/2011/06/01/should-we-be-limiting-developers-api-usage/ "explored rewarding developers for heavy usage").

As I continue to understand the impact of rate limits on developers it’s becoming clearer that for an API to successfully impose rate limits, you should also be offering rate limit release valves in the following ways:

*   **Increase Request Form** - There should be a formal, self-service way to request rate limits either for valid uses that you hadn’t considered bumping up against rate limit ceiling, or quite possibly for non-commercial purposes.
*   **Utility Pricing** - Providing a pay as you go model, where users meet the "courtesy limit", they can put in their credit card and pay for what they use above and beyond the default rate limit.

[![](http://kinlane-productions2.s3.amazonaws.com/google/Google-APIs-Console-Rate-Limits.png)](https://code.google.com/apis/console/ "API Console")

There are many points of friction for developers trying to integrate with an API. In my research, one of the ongoing complaints of developers regarding an API is around rate limits. Many of these complaints are directed at APIs who impose rate limits without any clear path beyond the default limits.

Google seems to be offering opportunities for developers to pay for use beyond their "courtesy limits", providing a form of release valve for developers concerns about API rate limits.  Google is providing these release valves for API services via their [API Console](https://code.google.com/apis/console/ "API Console"), but only appear to available for a handful of services. 

While I’m still unsure about API rate limits in general, it seems clear that if you are going to limit, make sure and provide a release valve in some way, so developers understand what the options are when they hit the ceiling, and that there are opportunities to grow.
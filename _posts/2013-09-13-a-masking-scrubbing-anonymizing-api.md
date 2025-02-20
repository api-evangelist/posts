---
layout: post
title: A Masking, Scrubbing, Anonymizing API
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags: []
---
In government there is a fear of exposing public data via APIs--rightfully so. This is not just a government concern, it exists in all industries within each an every business and organization. We all possess private data, and when opening up API driven resources, we need to make sure none of this is exposed in un-desired ways.

I find it hard to believe, that after almost 10 years of public APIs, there isn't a reasonable solution to masking, scrubbing and anonymizing data that is made available via APIs. I wrote about r[esearch into finding a solution at UC Berkeley](http://apievangelist.com/2013/03/13/an-api-that-scrubs-personally-identifiable-information-from-other-apis/) a while back, but to date I have not seen any real solutions to this problem yet.

I was talking with another Presidential Innovation Fellow (PIF) the other day about possible solutions for making sure Personally Identifiable Information (PII) doesn't get exposed via government APIs. Afterwards, I got to thinking about possible API options, and I don't think it would be that difficult to get started with a basic solution.

My thoughts are, that you could provide a simple API proxy, that would terminate requests from any [Swagger](https://developers.helloreverb.com/swagger/) defined APIs and easily iterate through each value and apply a series of regular expressions against it to look for common PII or other data that shouldn't be exposed. The proxy could automatically replace with template values like John or Jane Doe for names, 1234 Street for addresses, etc.

API providers could set a list of areas they are concerned about exposing with the API proxy configuration, and it would enforce all filtering required. The proxy could also look for other common patterns, and make recommendations of other areas that could be masked, scrubbed or anonymized that the API provider didn't consider.

Technically it sounds like a pretty simple solution, that could get smarter and faster over time at identifying sensitive information, to better serve API providers. This type of proxy could be default in healthcare, education and in other sensitive environments and be default in development environments, or in production environments that are accessible to non-trusted consumers.

Of course this is something I'd love to explore, but I just don't have the time to build it. This is something that wouldn't be too hard to build and evolve, and could have potentially huge impacts across many important industries, and go far to protect all of our sensitive data from potential privacy violations.

As with all of my ideas, I just want to share it publicly, in hopes someone will build it.
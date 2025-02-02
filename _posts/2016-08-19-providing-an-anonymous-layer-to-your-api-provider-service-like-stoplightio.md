---
layout: post
title: Providing An Anonymous Layer To Your API Provider Service Like Stoplight.io
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/StopLight-Anonymous-2.png
atomdate: 2016-08-19T20:00:00.000Z
tags: []
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/StopLight-Anonymous-2.png)](https://app.stoplight.io/requests/)

I was playing around with the free and the now paid layers of Stoplight.io, and [wrote a previous piece about their lack of a public pricing page](http://apievangelist.com/2016/08/19/i-know-it-is-hard-when-you-are-just-getting-started-but-please-make-your-pricing-page-public/), and I noticed they provided an anonymous layer to their API modeling service--[without logging in, you can play around with their HTTP client tool, and make requests to an API.](https://app.stoplight.io/requests/)

The anonymous version is super limited compared to their full solution, but I think the presence of an anonymous edition opens up an interesting discussion. It appears Stoplight.io has done a lot of work lately to separate the layers of v2 of their service, and provide a public, free, as well as paid, and enterprise editions of their API modeling solution.

With the shrinkage of freemium these days in the API space and the tightening down on free trials, an anonymous layer is compelling. It isn't something that would work for all API service providers, but it is at least something to consider as you are working to define the layers like Stoplight.io has been doing.
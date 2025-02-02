---
layout: post
title: More Considerations When Providing An Anonymous App For Your API Service
atomdate: '2016-08-25T17:00:00-07:00'
tags: []
---
[I wrote a post the other day about Postman.io having a limited, anonymous version of their API modeling tool](http://apievangelist.com/2016/08/19/providing-an-anonymous-layer-to-your-api-provider-service-like-stoplightio/). I stumbled across it while I was trying to upgrade my Stoplight.io account. Shortly after I tweeted out the blog post, John Sheehan ([@johnsheehan](https://twitter.com/johnsheehan)) from [Runscope](https://www.runscope.com/) chimed in with some wisdom on the subject.

> [@kinlane](https://twitter.com/kinlane) we had a ‘one-click trial’ 24-hour account once, no email required. i regret the hours i wasted building it.
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766730507685990401)

> [@kinlane](https://twitter.com/kinlane) was basically just used for abusive cases. only one ever converted to a real user
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766730600774447109)

> [@kinlane](https://twitter.com/kinlane) hurl.it and requestb.in have the same problem. have to hamper them (captcha, cloudflare) to keep up
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766730729241751552)

> [@kinlane](https://twitter.com/kinlane) if it gets any popularity, you’re screwed
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766730925287747584)

> [@kinlane](https://twitter.com/kinlane) so i love this idea but i will probably never have a no-signup-required service again
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766730874612092933)

> [@kinlane](https://twitter.com/kinlane) pretty sure the example from your post could be used as an open proxy (like hurl.it was before recaptcha)
> 
> — John Sheehan (@johnsheehan) [August 19, 2016](https://twitter.com/johnsheehan/status/766731066862206977)

Definitely, something to consider. In the current online environment, it might become quite a pain in the ass to maintain an anonymous app, as John points out. This is one reason I work to publish [my API tooling as standalone JavaScript applications](http://apievangelist.com/2013/09/24/excel-and-csv-conversion-to-json-and-xml-in-javascript-that-runs-100-on-github/), which run 100% on Github. First off they run on Github infrastructure, and use Github's bandwidth. Second, this type of app is forkable, and people can choose to run them wherever they desire--on Github, or any other site they wish.

I'll keep an eye out for other anonymous apps built on top of API service providers, or individual APIs--maybe there are other successful models out there, or maybe there is also some other cautionary tales we should hear.
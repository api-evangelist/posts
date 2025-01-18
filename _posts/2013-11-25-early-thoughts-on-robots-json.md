---
published: true
layout: post
title: Early Thoughts on Robots.json
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-robot-json.png
author:
  name: kinlane
tags: []
---
My friend [@harmophone](https://twitter.com/harmophone "@harmophone"), Director of Platform for the [Klout API](http://developer.klout.com/), wrote up a great piece before [#APIStrat](http://www.apistrategyconference.com/ "#APIStrat"), called [A Short Proposal for Robots.json](https://medium.com/p/4d36eab870c9).

This is a topic that I've been meaning to make time to discuss, but only now finding time. I love exchanging ideas with [@harmophone](https://twitter.com/harmophone "@harmophone"), because we tend to disagree on some important API related topics, however he is extremely knowledgeable on the space, and like me he possesses some strong opinions and is very open to lively discussion via blogs, twitter and on stage at events.

On the topics of web scraping, API rate limits, and API access that exist in the realm of what I call the politics of APIs, [@harmophone](https://twitter.com/harmophone "@harmophone") and I couldn't disagree more on what is acceptable use in the API economy. What is interesting though, within this disagreement we find affinity in the topic of the robots.json.

[@harmophone](https://twitter.com/harmophone "@harmophone") has a very succinct description of what a robots.json file would be:

> _A Robots.json file, or something like it, would contain all desired rules for retention, caching, access control, license rights, chain of custody, business models and other use cases allowed and encouraged for developers._

I think a machine readable file that provides access to all aspects of an APIs terms of use is a great idea. Beyond the obvious benefits of publishing a robots.json file for API providers and consumers, I think the practice would help standardize industry best practices for API terms and conditions. In my experience most API providers just emulate what they see in the space and if top players lead on this subject, others will follow.

[@harmophone](https://twitter.com/harmophone "@harmophone") and I both agree that there should be a robots.json, however we come at it from two opposing viewpoints. [@harmophone](https://twitter.com/harmophone "@harmophone") is coming at from an API vendor position, and I'm coming at from the stance of an API consumer. [@harmophone](https://twitter.com/harmophone "@harmophone") wants to establish a definition of where the provider stands, setting the "rules of the road" as Twitter would say--where I want a single location to find the same definition, so that as an API consumer I can understand the "rules of engagement", and decide if I want to even waste my time, based upon their stance.

With a standardized robots.json, as a developer I could very easily set the bar for which API providers I integrate into my applications. If a company's views on "retention, caching, access control, license rights, chain of custody and business models" are not in alignment with my businesses, I can easily determine this without spending any time learning about their API--something that can be very costly and time consuming.

[@harmophone](https://twitter.com/harmophone "@harmophone") uses Craigslists as the lead in for what a possible robots.json file could be used for, and the tone that it could set. While the tone of Craiglist's robots.json file might be very stern, setting what I would consider to be a very uninformed, "get off my lawn" vibe, I don't think all robots.json would reflect this tone.

Forward thinking companies could use a robots.json to easily differentiate themselves from outdated viewpoints on what "retention, caching, access control, license rights, chain of custody and business models" means, allowing developers to quickly identify leading players, and through "markets" set what is the prevailing definition is for the current times.
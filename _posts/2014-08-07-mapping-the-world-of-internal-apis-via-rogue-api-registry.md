---
layout: post
title: Mapping The World Of Internal APIs Via Rogue API Registry
image: >-
  https://s3.amazonaws.com/kinlane-productions2/netflix/scaling-the-netflix-api-3-638.jpg
author:
  name: kinlane
tags:
  - Rogue
  - Mapping
  - Internal
  - Registry
  - APIs
---
![](https://s3.amazonaws.com/kinlane-productions2/netflix/scaling-the-netflix-api-3-638.jpg)

[Daniel Jacobson - Scaling the Netflix API](http://www.slideshare.net/danieljacobson/scaling-the-netflix-api)

I was learning more about the [discovery of private APIs with the Charles App](http://timrogers.uk/2014/07/12/discovering-private-apis-with-charles-app/), and was fascinated by its potential to visualize, and map the darkest regions of the API realm. There is a lot of speculation about the number of APIs out there, with the 10K+ public APIs that are currently available being the “tip of the iceberg”, and the number of private APIs rpresenting the rest of the surface area below the dark surface--making the approach that Tim Rogers (and others) employ a tantalizing option for mapping these dark waters of the rapidly expanding API space.

[HTTP proxing and monitoring solutions like Charles](http://www.charlesproxy.com/) are nothing new, and there are a wealth of next generation [API integration](http://integration.apievangelist.com/) tools like [Runscope](https://www.runscope.com/) and [APITools](https://www.apitools.com/) available, but what is interesting about this, is the routing all of your app traffic for your laptop, tablet or smartphone through a proxy, and record not just the traffic between you and the private APIs your apps depend on, but the mapping out the API interface, request, response, and underlying data models.

Before I continue with this story, I have to admit this is a little on the dark side of APIs, and is something I don't recommend doing, because you are going to piss off a whole bunch of API providers—regardless, I think it is an interesting idea, that is worth sharing and discussing.

What if someone packaged up an HTTP proxy, monitoring, and provided a recording layer for the interface, requests, responses, and data models, scrubbed out PII, and allowed individuals to opt in and publish the resulting definitions to a shared, public registry?

Of course you would not publish your own transmissions, and underlying data, you would only publish the interface, requests, responses, and data models for the private APIs that are driving your public mobile and tablet applications. This centralized location would then aggregate, and shed light on this dark region, providing a single directory to discover what goes into all of the private APIs we depend on in our everyday lives.

Something like this would pretty quickly map the world of private APIs, but at first glance I think the negative backlash would far outweigh the benefits. Mobile app providers would recoil, and probably look for ways to secure the inner workings of their mobile apps...or would they? It might also have the opposite effect, and push providers to realize they need to be more transparent with their APIs, and while they don't need to open up access to for everyone to use, they could publicly share the technological surface area their(our) apps depend on—which in my opinion is never the secret sauce, and a company should always be willing to share. (I know controversial) Think of it as the shared zone between provider and app.

The concept of a rogue API registry for internal APIs is one of those areas I see as pretty damn grey, and I'm unsure how I feel about it. I personally wouldn't recommend building a tool or a registry for mapping private APIs like this, because I worry about the repercussions it would have. One the other side it also fascinates me, and is a concept that is very much in the public domain already, and is something I feel is worthy of discussion, or at least more thought.
---
layout: post
title: Thinking About How I Can Build Change Resilience Into My API Integrations
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-change-2.png
atomdate: 2016-09-29T00:00:00.000Z
tags:
  - Change
  - My
  - Integration
  - Integrations
---
After I wrote [a piece on guidance from the USGS around writing fault-resistant code when putting their API to use](http://apievangelist.com/2016/09/08/when-working-with-our-api-make-sure-you-build-faultresistance-into-your-code/), my friend Darrel Miller expanding on this by suggesting I include "change resilience" as part of the definition. 

> [@kinlane](https://twitter.com/kinlane) I would like to see that guidance expanded to include writing change resilient client code.
> 
> — Darrel Miller (@darrel\_miller) [September 9, 2016](https://twitter.com/darrel_miller/status/774043089493123073)

It is something that has sat in my notebook for a couple weeks, and keeps floating up as a concept I'd like to explore further. I have some initial thoughts on what this means but is something that I need to write about before I grasp better. Hopefully, it will bring more suggestions about what change resilient code means to other people.

Ok, so off the top of my head, what elements would I consider when thinking about producing change resilient client code:

*   **Status Codes** - Making sure clients read, and pay attention to HTTP status codes used by API providers.
*   **Hypermedia** - Links are fragile, and avoiding baking them into clients makes a whole lotta sense. 
*   **Plan B API** - Have a backup API identified, that can be used when the A API provider goes away.
*   **Circuit Breaker** - Build in a circuit breaker into code that responds to specific status codes and events.

Now that I'm exploring, I have to ask, who's responsibility is it to build change resilience into the clients? Provider or consumer? Seems like there is a healthy responsibility on both parties? IDK. I guess we should just all be honest about how fragile the API space is, and providers should be honest with consumers when it comes to thinking about change resiliency, but ultimately API consumers have to begin to thinking more deeply and investing more when it comes planning for change--not just freaking out when it happens.

I have to admit that the code I have written as part of my API monitoring system, [which integrates with over 30 APIs](http://stack.apievangelist.com/companies.html), isn't very fault or change resistant. When things break, they break. As the only user, this isn't a showstopper for me, but thinking about change is something I"m going to be considering as I kick the tires on my client. [While these APIs have been incredibly stable for me](http://apievangelist.com/2016/09/20/why-would-you-build-a-business-on-apis-they-are-unreliable/), I can't help but listen to Darrel and want to be asking more questions when it comes to dealing with change across my API integrations.
---
layout: post
title: A More Honest And Flexible API Contract Using Hypermedia
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-contract.png
atomdate: 2016-10-18T20:00:00.000Z
tags:
  - Hypermedia
  - Contract
---
One of the reasons I write so much on API Evangelist is to refine how I tell stories about APIs and hopefully make a bigger impact by being more precise in what I'm saying. I feel like one of the reasons [why hypermedia API concepts have to take longer than we anticipated to spread](http://apievangelist.com/2016/10/12/we-understimated-the-time-it-would-take-for-hypermedia-to-be-absorbed/) is because many (not all) of the hypermedia elite suck at telling stories. I am sorry, but you have done a shit job selling the importance of hypermedia, and often times were just confrontational and turning many folks off to the subject.

I am working on playing around with telling different stories about hypermedia, hoping to soften some of the sharp edges of the hypermedia stories we tell. One of the core elements of hypermedia APIs is they provide us with links as part of each API response, emulating much of what works with the web, in the system to system, and application layers of the web. One of the benefits of these links is they help facilitate the evolution and change that is inevitable in our API infrastructure.

The default argument for hypermedia folk is often about versioning and change-resistant API clients. I'm looking to help make these concepts more human, and that employing hypermedia as part of our API contracts is more about providing an honest and flexible view of the business relationship we are entering into. As API provider and consumer, we are acknowledging that there will be change and evolution in the resources that are being delivered, and being more honest that this exists, as we craft this API contract.

As an API provider I am not just going to dump this JSON product response on you, and expect you to know what to do, refusing to have a discussion with my consumers that this product will change. it might be out of inventory, and might be replaced by another product, and any number of evolution changes that may occur in the normal course of business. Hypermedia gives me a framework to acknowledge that this will indeed evolve upon entering our agreed upon API contract, and provide a channel for all integrated API clients to receive future instructions about what is possible when things do change--our API contract is flexible.

As an API provider, when I share this machine-readable representation of my product I'm not just assuming you know you can add it to the cart, or to a wish list, I am providing you with the links to do this, and the link relations that define this relationship. As things change and evolve, I have a way to share other opportunities, and changes to this business contract. When a product is recalled, there is a link routing you to what you need. When a product is replaced, you are routed to what you need. As an API provider, I'm committed to providing you with what you need to be successful when putting API resources to work.

Hypermedia goes being just providing links, managing versioning, and ensuring more resilient API clients--a very technical story. Hypermedia gives us a more honest and flexible way to define the API business contracts we are entering into when we make API resources available internally, with partners, and even with the public at large. Change is inevitable, and I feel like we need to be more honest about this change and be less rigid in how we are doing things, and I keep coming back to hypermedia as a meaningful way we can make this happen.
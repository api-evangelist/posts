---
layout: post
title: >-
  Working Toward An API Definition Driven, SEO, and Section 508 Compliant API
  Documentation Interface
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-section-508.png
author:
  name: kinlane
tags:
  - SEO
  - Documentation
  - Definition
---
This is a topic I’ve had an increasing number of conversation with folks about in the last couple months, and a friend of mine Tweeted in response to today, resulting in this lovely rant. This is about two very separate problems, in which the solutions are what I'd consider significantly overlapped. I’m talking about the need to make sure the valuable metadata, as well as underlying resources made available via an API is accessible to search engines, while also making sure the it is all [Section 508 compliant](http://www.section508.gov/section508-laws), providing critical access to people with disabilities.

In response to my recent post, on "Why The New API Blueprint Sharing Button From Apiary Is So Important”, said:

> I'm heavy user of [@apiaryio](https://twitter.com/apiaryio) but disappointed with discoverability features of the product. Google just ignores them. [https://t.co/w0hcGmpgMd](https://t.co/w0hcGmpgMd)
> 
> — Kristopher Kleva (@klevland) [April 9, 2015](https://twitter.com/klevland/status/586289568632168449)

First, this is another reason why the API Blueprint being more open is important, anyone can now come along and not just build an SEO API documentation solution, they can get access to Apiary.io users who desire such a solution. Ok, that might seem bad for Apiary, but in situations that Apiary is not concerned with, this allows the community to step up and serve the long tail, and if it is something that concerns Apiary, it lights the fire under their ass to consider adding to the road map (sorry Jakub & Z, I know I"m a pain ;-).

Second, it allows the community to step up and serve what I'd consider the critical long tail—like Section 508. In our rush to deliver the latest in technological innovations, we often forget about significant portions of our society who, well, aren’t like us. How many leading apps and platforms that you use are Section 508 compliant? I guarantee almost all API tooling is not—something we need to address now, and is a [topic where discussion is currently happening the federal government circles](https://groups.google.com/forum/#!searchin/us-government-apis/508/us-government-apis/dX34Bn5dcWQ/-Avg7rEbaNkJ). 

I am a big fan of Swagger UI, and Apiary, and what they have done for API design, deployment, management, discovery, and evangelism, but we need to keep working on the next generation of UI, and UX that is easily indexed, and works well with assistive technologies. Ok, at this point the hypermedia folks want to kick my ass--bring it! ;-) Kidding. What I am talking about should happen in conjunction with well designed, hypermedia fueled clients, not instead--both camps should be addressing making sure all clients or SEO and 508 friendly.

I’ll close with a note on the opportunity here. There is huge potential to develop an open source API UI component that can use Swagger and API Blueprint as the core definition, implementing a more SEO and 508 compatible experience, something akin to [Slate from Trippit](https://github.com/tripit/slate). I’m thinking rather than a pull technology like Swagger UI does with its JS interface pulled from a Swagger definition, and I’m guessing Apiary does a similar pull from API Blueprint docs?? A more of an HTML, CSS push or publish of functional, static API documentation, that uses JavaScript and APIs to operate—just some raw thoughts on how to take next steps, its now up to you.

I guarantee if you made an open source set of tools to support this, you'd get the attention of government at all levels, around the world, something that would open up significant other opportunities.
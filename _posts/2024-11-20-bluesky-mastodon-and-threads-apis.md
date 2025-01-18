---
published: true
layout: post
title: Bluesky, Mastodon, and Threads APIs
tags:
  - Social
  - Standards
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/gone-with-the-wind-ferris-wheel-fair.jpeg
---
I am profiling all three of the [Bluesky](https://github.com/api-evangelist/bluesky), [Mastodon](https://github.com/api-evangelist/mastodon), and [Threads API](https://github.com/api-evangelist/threads-api). This work involves producing an [APIs.json](https://apisjson.org/) that defines how they operate the business side of things, an [OpenAPI](https://bit.ly/48XkP7e) that describes the technical side of things, and a [Bruno collection](https://bit.ly/4fpe6FO) that allows you to get hands on with each of the APIs. This is where I will learn the most regarding how each API works, how they differ from each other, and what all the lego bricks are that let you build something interesting. I was just pushing the Bruno collections to each repository, stepping back and exploring a bunch of work I did with Mastodon back a year or two ago, and I wanted to ponder the technology, business, policies, and people of what makes each of these social platforms interesting or less interesting to me, and for possibly others.

## Threads
The [Threads API](https://developers.facebook.com/docs/threads/) is the least exciting and pretty run of the mill API implementation. The portal has pretty minimum viable docs, getting started, guides, and a change log. Pretty classic of Facebook in that there isn’t much community or feedback loop, and they are just designing their API the way they see fit. The API has a minimum viable set of operations that don’t cover the full surface area of the API, but let you get at what they want you to as a developer.

<a href=""><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/threads-developer-portal.png" style="padding: 15px;"></a>

You can find the [APIs.json index for the Threads API, as well as an OpenAPI and Bruno Collection in the GitHub repository](https://github.com/api-evangelist/threads-api) I am using to manage the profiling of the API. I will spend time certifying each Bruno collection, and likely break it up into smaller OpenAPI and Bruno Collections to match different capabilities you will want to enable when it comes to working with the API. This is where the real learning begins when it comes to the value that the Threads API brings.

## Bluesky
The [Bluesky API](https://docs.bsky.app/) is probably the one that is most exciting for folks, and somewhat for me as well. The Bluesky API portal is much more vibrant and robust and has more of that community feel and that we are interested in what people build. I am still learning about the AT Protocol behind Bluesky and all of the standards they are putting to work. I’d say that Bluesky has more of that energy I am looking for in a portal, and they’ve invested in standards, so I am optimistic about the balance they have going on.

<a href=""><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bluesky-developer-portal.png" style="padding: 15px;"></a>

You can find the [APIs.json index for the Bluesky API, as well as an OpenAPI and Bruno Collection in the GitHub repository](https://github.com/api-evangelist/bluesky) I am using to manage the profiling of the API. I will spend time certifying each Bruno collection, and will also be breaking it up into smaller OpenAPI and Bruno Collections to match different capabilities you will want to enable when it comes to working with the API. As part of this work I will be diff’ing Bluesky with Threads approach at the operation level.

## Mastodon
The [Mastodon API](https://docs.joinmastodon.org/client/intro/) is the one that excites me the most, but it is where I think you begin to see the impact of the business of APIs. The APIs for Mastodon are just a subsection in the overall documentation for Mastodon, and there really isn’t a community around the API, as there is around the entire concept of Mastodon. I’ve done the most work around breaking Mastodon up into meaningful capabilities that can be automated, but it is something I will have to translate and generate Bruno collections to match with my current approach.

<a href=""><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/mastodon-developer-portal.png" style="padding: 15px;"></a>

You can find the [APIs.json index for the Mastodon API, as well as an OpenAPI and Bruno Collection in the GitHub repository](https://github.com/api-evangelist/bluesky) I am using to manage the profiling of the API. I will convert all of the Postman Collections I have in a public workspace over to Bruno collections and use this as a benchmark against Bluesky and Threads. I am 100% team Mastodon when it comes to APIs, standards, protocols, and community—it just speaks to my approach to things, but I get the realities of mainstream network effects and know that Bluesky has many advantages.

## APIs and Future of Social
Once I get the OpenAPI and Bruno Collections across these APIs broken down and displayed side by side I will make more of an assessment on the details of resources and capabilities they provide. I will also dive deeper into the ATP protocol and the wider standards stack used by Bluesky and do the diff with what Mastodon employs. I think there are some serious lessons hidden in the incentives and approaches taken by each of these entities. I will also do an evaluation on the nuance of the business, policies, and people of each of these API communities, and the impact that mainstream storytelling has on their success or failure.

A big part of the success or failure of these platforms will be the automation and interoperability introduced by the APIs and standards being applied. How explicit each platform is about bots, applications, and interoperability with other platforms will dictate a lot of the tone of things. However, a technological edge won’t always mean success, and while I’d say Mastodon has the technical advantage, Bluesky has the business advantage, but like the election in the United States, I don’t think I always fully grasp what people are wanting in their social networks. I just know that the “right” technological approach doesn’t always seem to win, and the game becomes more about having the right story, while also being the loudest-—which the API will play a significant role in amplifying.
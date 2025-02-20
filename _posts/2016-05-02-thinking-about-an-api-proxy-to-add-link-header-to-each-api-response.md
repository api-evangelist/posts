---
layout: post
title: Thinking About An API Proxy To Add Link Header To Each API Response
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-hypermedia.png
tags:
  - Proxy
---
[I was learning more about using the Link header for pagination yesterday](http://apievangelist.com/2016/05/02/http-header-awareness-using-the-link-header-for-pagination/), as part of [my work on the Human Services Data Specification (HSDS)](http://apievangelist.com/2016/03/31/gathering-my-thoughts-about-open-referral-and-the-human-services-api/), and this approach to putting hypermedia links in the header got me thinking about other possibilities. Part of the reason I was considering using the Link header for pagination on this particular project was that I was looking to alter the existing schema as little as possible -- I liked that I could augment the response with links, using the header.

Another side thought I had along the way were around the possibilities for using it to augment 3rd party APIs, and APIs from an external vantage point. It wouldn't be too hard route API requests through a proxy, which could add a header with a personalized set of links tailored for each API request. If the request was looking up flights, the links could be to value add services that might influence the decision like links to hotels, events, and other activities. If you were looking up the definition of a word, the links could be to synonyms--endless possibilities.

You wouldn't have to just use it for pagination, and other common link relations, you could make it more about discovery, search, or even serendipity injected from outside sources. Anyways, I think the fact that you can augment an existing response using a header opens up a lot of possibilities for adding hypermedia behaviors to existing APIs. It might also be an interesting way to introduce existing API owners to hypermedia concepts, by showing them the value that can be added when you provided valuable links.
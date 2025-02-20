---
layout: post
title: A Looser More Evolvable API Contract With Hypermedia
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-hang-loose.png
atomdate: 2017-03-27T22:00:00.000Z
tags:
  - Hypermedia
  - Contract
---
[I wrote about how gRPC API implements deliver a tighter API contract](http://apievangelist.com/2017/03/15/a-tighter-api-contract-with-grpc/), but I wanted to also explore more thought from that same conversation, about how hypermedia APIs can help deliver a more evolvable API contract. The conversation where these thoughts were born was focused on the differences between REST and gRPC, in which hypermedia and GraphQL also came up. Leaving me thinking about how our API design and deployment decisions can impact the API contract we are putting forth to our consumers.

In contrast to gRPC, going with a hypermedia design for your API, your client relationship can change and evolve, providing an environment for things to flex and change. Some APIs, especially internal API, and trusted partners might be better suited for gRPC performance, but when you need to manage volatility and change across a distributed client base, hypermedia might be a better approach. I'm not advocating one over the other, I am just trying to understand the different types of API contracts brought to the table with each approach, so I can better articulate in my storytelling.

I'd say that hypermedia and gRPC approaches give API providers a different type of control over API clients that are consuming resources. gRPC enables dictating a high performance tighter coupling by generating clients, and hypermedia allows for shifts in what resources are available, what schema are being applied, and changes that might occur with each version, potentially without changes to the client. The API contract can evolve (within logical boundaries), without autogeneration of clients, and interference at this level.

As I learn about this stuff and consider the API contract implications, I feel like hypermedia helps API provides navigation change, evolve and shift to deliver resources to a more unknown, and distributed client base. gRPC seems like it provides a better contract for use in your known, trusted, and higher performance environments. Next, I will be diving into what API discovery looks like in a gRPC world, and coming back to this comparison with hypermedia, and delivering a contract. I am feeling like API discovery is another area that hypermedia will make sense, further helping API providers and API consumers conduct business in a fast changing environment.
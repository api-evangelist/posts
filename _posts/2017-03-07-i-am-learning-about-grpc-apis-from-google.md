---
layout: post
title: I Am Learning About gRPC APIs From Google
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/grpc.png
atomdate: 2017-03-07T17:00:00.000Z
tags:
  - gRPC
  - APIs
  - Learning
---
[I have been processing Google's API design guide](https://apievangelist.com/2017/03/03/google-shares-their-api-design-guide/), and an unexpected part of the work has been learning more about gRPC, which Google is "converging designs of socket-based RPC APIs with HTTP-based REST APIs." -- something I have not seen in an API design guide until now. "gRPC uses [protocol buffers](https://developers.google.com/protocol-buffers/) as the Interface Definition Language (IDL) for describing both the service interface and the structure of the payload messages", and is something I'm hearing more chatter about from larger providers, which I think represents the evolving world of API design beyond the old REST days.

[According to the site](http://www.grpc.io/docs/), "gRPC is used in last mile of computing in mobile and web client since it can generate libraries for iOS and Android and uses standards based HTTP/2 as transport allowing it to easily traverse proxies and firewalls. There is also work underway to develop a JS library for use in browsers. Beyond that, it is ideal as a microservices interconnect, not just because the core protocol is very efficient but also because the framework has pluggable authentication, load balancing etc. Google itself is also transitioning to use it to connect microservices."

To help me learn anything I need an example to reverse engineer, showing me how things work--so here are the examples they provide from the site:

*   [Google Cloud BigTable Client APIs](https://github.com/GoogleCloudPlatform/cloud-bigtable-client)
*   [Google Cloud PubSub APIs](https://cloud.google.com/blog/big-data/2016/03/announcing-grpc-alpha-for-google-cloud-pubsub)
*   [Google Cloud Speech APIs](https://cloud.google.com/speech/reference/rpc/)

I'm going to add a research area for gRPC, similar to [hypermedia](http://hypermedia.apievangelist.com), as well as GraphQL. It helps me better keep track of the news about each approach to crafting APIs, and a single place I can go to reference service providers, and working examples. I've had gRPC / Protocol Buffers on my monitoring list for some time now, but seeing Google invest so heavily in this area gives me a signal that I should be paying attention to gRPC more, and gathering more examples that I can share with my readers.

I'm thinking that I will assemble some sort of toolbox area in my API design research, helping folks understand when a more RESTful approach makes sense, as well as when hypermedia, GraphQL, or maybe a gRPC approach might be more appropriate. Next, I'm going to dive into BigTable, PubSub, and Speech APIs to see gRPC in action--something I'm hoping that will help me better understand [Google's approach to API design](http://apievangelist.com/2017/03/03/google-shares-their-api-design-guide/), which something I'm struggling with grasping completely.
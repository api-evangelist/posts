---
layout: post
title: API Definitions Covering Both REST and gRPC APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/managing_grpc_apis_with_google_cloud_endpoints_3_638.jpg
atomdate: 2017-03-10T17:00:00.000Z
tags:
  - Definitions
  - gRPC
  - REST
  - Definition
  - APIs
---
I have been learning more about the way Google designs and defines their APIs after [their release of their API design guide](http://apievangelist.com/2017/03/03/google-shares-their-api-design-guide/). When I research a company's APIs I always spend time looking through their Github repositories for anything interesting, and while poking around in Google's I found a repository of "[interface definitions for a small (but growing) set of Google APIs](https://github.com/googleapis/googleapis)". I keep track of any Github repo I find containing API definitions, but Google's repo stood out because it contained a set of API definitions that covered both APIs that support both REST and gRPC.

Straight from the Github repo, they support two ways of access APIs: _"Google APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for both REST and RPC versions of the API, which can be accessed over different wire protocols."_

1.  _JSON over HTTP: You can access Google APIs directly using JSON over HTTP, using [Google API client libraries](https://developers.google.com/api-client-libraries) or third-party API client libraries._
    
2.  _Protocol Buffers over gRPC: You can access Google APIs published in this repository through [GRPC](https://github.com/grpc), which is a high-performance binary RPC protocol over HTTP/2. It offers many useful features, including request/response multiplex and full-duplex streaming._
    

This is the first example of this I've seen in the wild, and it feels like we are shifting from an HTTP to an HTTP/2 API world. I don't think regular old REST or web APIs are going anywhere, I think they'll continue to be a staple, but it looks like Google is laying the groundwork for two-speed APIs, that are defined using a common API definition--you pick the speed you need. I've been hearing tales of gRPC usage for a while and seeing more APIs defined using protocol buffers, but Google's approach signals a wider more significant shift for me.

I'm still learning about gRPC, so I can't quite visualize the overlap between gRPC and REST quite yet. I'm going through their API definitions because they provide an interesting snapshot of the surface area of these hybrid APIs. As I spend my week in San Francisco for Google Next, I'm eager to learn more about their evolving approach to designing and defining APIs--something that I think will be setting the tone for API design at scale in the near future.
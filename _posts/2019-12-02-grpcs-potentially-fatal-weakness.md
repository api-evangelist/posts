---
published: true
layout: post
title: gRPCs Potentially Fatal Weakness
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-old-broken-piano-street.jpg
author:
  name: kinlane
tags:
  - gRPC
---
I was reading [an article on Microsofts DevBlog about gRPC vs HTTP APIs](https://devblogs.microsoft.com/aspnet/grpc-vs-http-apis/). It makes the usual arguments of how gRPC compares with HTTP APIs. While the arguments for gRPC are definitely compelling, I find the weaknesses of gRPC in this moment in time even more interesting, for two reasons, 1) they are something we can overcome with the right tooling and services, and 2) they reflect our challenge between the human and machine readablity of all of this, which many of us technologists really suck at, leaving me concerned whether or not we will be able to get this right—as I think we underestimated this characteristic of HTTP APIs, and have missed the full potential of this opportunity even as we are faced with this next step.

Here is what was said the blog post, highlighting two distinct weaknesses of gRPC, but which I view as more about systemic illnesses in the wider view of the API landscape, and our inability to understand the important role that humans play in all of this:

> **Limited browser support**
> 
> gRPC has excellent cross-platform support! gRPC implementations are available for every programming language in common usage today. However one place you can’t call a gRPC service from is a browser. gRPC heavily uses HTTP/2 features and no browser provides the level of control required over web requests to support a gRPC client. For example, browsers do not allow a caller to require that HTTP/2 be used, or provide access to underlying HTTP/2 frames.
> 
> gRPC-Web is an additional technology from the gRPC team that provides limited gRPC support in the browser. gRPC-Web consists of two parts: a JavaScript client that supports all modern browsers, and a gRPC-Web proxy on the server. The gRPC-Web client calls the proxy and the proxy will forward on the gRPC requests to the gRPC server.
> 
> Not all of gRPC’s features are supported by gRPC-Web. Client and bidirectional streaming isn’t supported, and there is limited support for server streaming.
> 
> **Not human readable**
> 
> HTTP API requests using JSON are sent as text and can be read and created by humans.
> 
> gRPC messages are encoded with Protobuf by default. While Protobuf is efficient to send and receive, its binary format isn’t human readable. Protobuf requires the message’s interface description specified in the .proto file to properly deserialize. Additional tooling is required to analyze Protobuf payloads on the wire and to compose requests by hand.
> 
> Features such as server reflection and the gRPC command line tool exist to assist with binary Protobuf messages. Also, Protobuf messages support conversion to and from JSON. The built-in JSON conversion provides an efficient way to convert Protobuf messages to and from human readable form when debugging.

Both of these weaknesses reflect the importance of humans still playing such a critical role in not just developing APIs, but also consuming them. We like to focus on the machine readability, automation, orchestration, and other ways in which APIs allow us to scale, but none of this happens without a human setting it into motion. If this activity is just limited to a small subset of technological wizards, it will only take us so far. Taking us back to my first point, we can get to work on providing client tooling for working with gRPC APIs—this will alleviate a lot of friction. However, we have to ask ourselves, with each additional step we take forward with APIs, or I guess even steps sideways, why aren’t we investing more in the approaches being more human readable by default?

Like hypermedia, GraphQL, we will need to find ways to reduce the cognitive load with understanding what an API does, and minimize on-boarding friction with evolution in API tooling and services. However, this will still only get us part of the way there when it comes to on-boarding the masses of enterprise and startup developers who don’t always care about learning all the technical details, and doing the heavy lifting to understand best practice when providing and consuming APIs. I know that somehow we think eventually we will be able to automate the human out of the equation. I mean c’mon, gRPC does a whizz bang job of generating client libraries! But, in the end we are always going to need humans involved when providing and consuming APIs, and we need the APIs themselves to still be accessible to these human beings, even if everything is machine readable.

In my opinion there are two forces here: 1) business leaders and investors blind belief in technology and the faith that we will be able to automate out the human in this equation, which is the most costliest and problematic, and achieve some sort of capitalist nirvana, and 2) technologists lack of understanding of what it takes to operate business at scale, the human capital it takes, and our own lack of faith in human beings—both sides blindly believe the technology will get us out of the mess we find ourselves in. In the end, this allows us to overlook the importance of APIs being simple, human readable, and accessible to the widest possible developer and business audience as possible. Something that has been front and center with HTTP APIs, but with GraphQL, gRPC, and event-driven approaches we seem still overlook and underestimate—that humans are the essential ingredient in everything we do with APIs.
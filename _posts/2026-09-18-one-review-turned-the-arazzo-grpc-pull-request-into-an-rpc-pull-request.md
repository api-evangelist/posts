---
published: true
layout: post
title: 'One Review Turned the Arazzo gRPC Pull Request Into an RPC Pull Request'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/one-review-turned-the-arazzo-grpc-pull-request-into-an-rpc-pull-request.png
date: 2026-09-18
author: Kin Lane
tags:
  - Arazzo
  - gRPC
  - Protocol Buffers
  - RPC
  - Workflows
  - Specification
  - OpenAPI
---

The third pull request in the [Arazzo](https://spec.openapis.org/arazzo/latest.html) 1.2 queue is the one I want people to read as a story about review, not just as a feature. [PR #556](https://github.com/OAI/Arazzo-Specification/pull/556) from Naresh Jain adds Protocol Buffer RPC support to Arazzo. When it was opened on August 28 it was, in spirit, a gRPC pull request. Frank Kilcommins did a first review about two weeks ago and asked one question — the direction is good, but can this be universal rather than gRPC-specific? — and what came back covers gRPC, gRPC-Web, Twirp, and Connect. That is a better specification than the one that was submitted, and it happened because a maintainer read the whole thing and asked for more instead of less. Frank said on Wednesday's call he would finish his second review by today, so I am timing this deliberately.

Here is the shape of it. A source description gets a new type, `protobuf`, pointing at a `.proto` service definition. A step gets two new fields, and the reason there are two is the whole design. `rpcMethod` identifies the declaration — `$sourceDescriptions.rpcLibrary.org.v1.Library/GetBook`, a fully qualified service name, a slash, a method name — and it resolves against the Protocol Buffer source the same way `operationId` resolves against an OpenAPI. `rpcProtocol` is a required discriminator — `grpc`, `grpc-web`, `twirp`, or `connect` — and it decides how that method is *invoked*: the wire encoding, the routing, what status and error look like, how metadata travels, whether streaming is allowed. The method is a fact about the contract. The protocol is a fact about the deployment. Keeping them apart is what let the pull request grow from one protocol to four without the step object changing shape.

The streaming matrix is where the honesty shows. gRPC and Connect get unary, server-streaming, client-streaming and bidirectional. gRPC-Web gets unary and server-streaming, because that is what browsers can do. Twirp gets unary, because that is what Twirp is. Client-streaming and bidirectional requests are authored as ordered arrays of messages, and the pull request says plainly that interactive bidirectional sequencing — where the fifth message you send depends on the third message you received — is out of scope. A specification that knows what it does not do is one I trust more than one that claims everything.

The rest is the plumbing that makes an RPC step feel like every other Arazzo step. Messages are represented in ProtoJSON, so the payload you write in a workflow and the payload you read back through runtime expressions are both JSON-shaped, not binary. `metadata` joins `query`, `header`, `path` and `cookie` as a parameter location, which is how you pass a bearer token to a gRPC call. `$response.status#/code` gives you the status code, so a success criterion for gRPC is `$response.status#/code == 0`, and there are expressions for request metadata, response metadata and trailing metadata — the [worked examples](https://github.com/OAI/Arazzo-Specification/pull/556/files) include a trailers-only error case, which is exactly the kind of edge a reviewer who has actually run gRPC in production will recognize. There are standalone examples for each of the four protocols and a hybrid workflow that mixes REST and RPC steps, plus twenty-seven schema fixtures, twenty of them deliberately failing cases: wrong protocol casing, a missing slash in the method reference, streaming on a protocol that forbids it, `channelPath` and `rpcMethod` on the same step.

What this pull request does not do is decide whether RPC belongs in Arazzo at all. That was settled when AsyncAPI landed in 1.1: Arazzo's premise is that a workflow crosses whatever interface styles a real system has, and a system that has REST and events and gRPC needs one language for the sequence across them. The trend Frank named on the call — SOAP, RPC, GraphQL all queued for the same release — is Arazzo becoming a language for describing *capabilities* in a verifiable way, regardless of how each one is served. The next flavor he mentioned is MCP, which is waiting on servers being able to advertise their tools up front. I will get to that on Tuesday.

The state of play: the pull request has three commits and Naresh has been working through the review comments. It is waiting on Frank's second pass, and then it needs a second approver. Kevin Duffey's proposed sequencing on the call, which nobody objected to, was SOAP and RPC together in 1.2 by end of October, with GraphQL and actor in the loop following in 1.3. So this one is on the critical path.

The ask, then, is aimed at a specific reader. If you run gRPC, gRPC-Web, Connect, or Twirp services, you know things about deadlines, cancellation, trailing metadata and error details that the people who write API specifications for a living may not. Open the [protocol semantics section of the diff](https://github.com/OAI/Arazzo-Specification/pull/556/files) and check it against your production experience. If a detail is wrong, say so in the pull request. If it is right, an approval from someone who actually ships this stuff carries more weight than one from someone who does not. Either way it moves the queue, and the queue is what decides whether 1.2 ships in October or slips. The Arazzo call is every other Wednesday at 09:00 Pacific, details in [discussion #5](https://github.com/OAI/Arazzo-Specification/discussions/5); the `#arazzo` channel on the [OpenAPI Slack](https://communityinviter.com/apps/open-api/openapi) runs in between; the next call is September 30.

Monday, the GraphQL pull request, which is the one nobody has reviewed yet.

---
layout: post
title: A Tighter API Contract With gRPC
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_12_at_9.16.57_pm.png
atomdate: 2017-03-15T22:00:00.000Z
tags:
  - gRPC
  - Contract
---
I was learning more about [gRPC](http://www.grpc.io/) from the Google team last week, while at the Google Community Summit, as well as the API Craft SF Meetup. I'm still learning about gRPC, and how it contributes to the API conversation, so I am trying to share what I learn as I go, keeping a record for others to learn from along the way. One thing I wanted to better understand was something I kept hearing regarding gRPC delivering more of a tighter API contract between API provider and consumer.

In contrast to more RESTful APIs, a gRPC client has to be generated by the provider. First, you define a service in a .proto file (aka Protocol Buffer), then you generate client code using the protocol buffer compiler. Where client SDKs are up for debate in the world of RESTful APIs, and client generation might even be frowned upon in some circles, when it comes to gRPC APIs, client generation is a requirement--dictating a much tighter coupling and contract, between API provider and consumer. 

I do not have the first-hand experience with this process yet, I am just learning from my discussions last week, and trying to understand how gRPC is different from the way we've been doing APIs using a RESTful approach. So far it seems like you might want to consider gRPC if you are looking for significant levels of performance from your APIs, in situations where you have a tighter relationship with your consumers, such as internal, or partner scenarios. gRPC requires a tighter API contract between provider and consumer, something that might not always be possible, depending on the situation. 

While I'm still getting up to speed, it seems to me that the .proto file, or the protocol buffer definition acts as the language for this API contract. Similar to how [OpenAPI is quickly becoming a contract for more RESTful API](http://openapis.org)s, although it is often times much looser contract. I'll keep investing time into learning about gRP, but. I wanted to make sure and process what I've learned leading up to, and while at Google this last week. I'm not convinced yet that gRPC is the future of APIs, but I am getting more convinced [that it is another important tool in our API toolbox](http://apievangelist.com/2017/03/10/focus-on-having-a-robust-and-diverse-api-toolbox/).
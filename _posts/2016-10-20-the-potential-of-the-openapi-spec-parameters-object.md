---
layout: post
title: The Potential Of The OpenAPI Spec Parameters Object
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_19_at_9.04.05_pm.png
atomdate: 2016-10-21T00:00:00.000Z
tags:
  - OpenAPI
  - Parameters
  - Open
---
I enjoy learning from the OpenAPI Specs of the API providers I track on. Just having an OpenAPI Spec present tells a lot about an API provider in my book, but the level of detail some providers put into their API definitions adds another level to this for me. While reviewing [the OpenAPI Spec for the Oxford Dictionaries API](https://developer.oxforddictionaries.com/swagger/spec/public_doc_guest.json), I noticed their robust usage of the OpenAPI Spec parameters definitions collection, which provides an interesting overview of the surface area of the API, augmenting the benefits brought to the table by the definitions collection of an APIs underlying data schema.

When you are defining each path for an API you can either define the parameters using each paths parameters, or you can add them to the overall parameters definition object, allowing them to be reused across all paths. This object provided me with a centralized place to learn about the parameters used when making calls to the Oxford Dictionary API, and I'm assuming it helped them be more organized in how they defined the surface area of their APIs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_19_at_9.04.05_pm.png)

I can see how the processing of defining each path's parameters, and centrally organizing them for reuse can be a healthy thing. The more you lift yourself out of the individual definition of each path and consider the parameter patterns that have been used for other paths, the chances you will have a better view of the landscape will increase. I am optimistic about this OpenAPI Spec object, and curious about how it can be evolved as part of other conversation around GraphQL--something I'll work to understand better in the future.
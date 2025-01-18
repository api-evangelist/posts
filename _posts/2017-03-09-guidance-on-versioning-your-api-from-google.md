---
layout: post
title: Guidance On Versioning Your API From Google
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-version.png
atomdate: 2017-03-09T17:00:00.000Z
tags:
  - Versioning
  - Guidance
---
I always enjoy learning about how companies are versioning their APIs. The topic is always one of the most discussed areas when we do APIStrat workshops, and is an aspect of the API space that I think there is never a 100% right way of doing things. Making it an area I recommend learning as many different approaches as you can, then decide on the right solution for your particular situation.

To help you in your journey, and mine, I try to document any official versioning strategies published by API providers I research. Today I have one from Google, providing some very interesting insight into how they version their APIs. Google uses [Semantic Versioning](http://semver.org/), which follows this approach to each version number MAJOR.MINOR.PATCH, incrementing the:

1.  `MAJOR` version when you make incompatible API changes,
2.  `MINOR` version when you add functionality in a backwards-compatible manner,
3.  `PATCH` version when you make backwards-compatible bug fixes.

When it comes to their REST APIs Google puts the version in URL, and I'm still learning more about their approach to how it's applied to the proto package for gRPC APIs. They also have some good advice when it comes to what is breaking and non-breaking changes.

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-broken-gears.png)

Backwards-compatible (non-breaking) changes:

*   Adding an API interface to an API service definition
*   Adding a method to an API interface
*   Adding an HTTP binding to a method
*   Adding a field to a request message
*   Adding a field to a response message
*   Adding a value to an enum
*   Adding an output-only resource field

Backwards-incompatible (breaking) changes:

*   Removing or renaming a service, field, method or enum value
*   Changing an HTTP binding
*   Changing the type of a field
*   Changing a resource name format
*   Changing visible behavior of existing requests
*   Changing the URL format in the HTTP definition
*   Adding a read/write field to a resource message

[This Google API versioning advice comes from their API design guide](https://cloud.google.com/apis/design/versioning). I also f[ound some versioning advice from them as part of the Google Cloud Endpoints documentation](https://cloud.google.com/endpoints/docs/versioning-an-api), which provides some easier to follow advice for REST APIs. It also includes some advice for handling as part of your OpenAPI definition, something I will be investigating further.

I am just looking to add semantic versioning approach, the example of putting the version in the URL, and the advice on backwards-compatibility to my API research. It helps me keep my work full of healthy examples, and URL references to how specific API providers are documenting their own APIs, as well as offering guidance to customers who are using their services to design, deploy, and manage their APIs.
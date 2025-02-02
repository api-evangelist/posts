---
published: true
layout: post
title: The OpenAPI Specification Version 3.0 Highlights
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_spec_structural_improvements.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Open
---
[![](https://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/openapi_spec_structural_improvements.png)](https://www.openapis.org/specification/v3insights)

I am impressed with the work that the Open API Initiative (OAI) working group has accomplished with the [version 3.0 release of the OpenAPI Specification](https://www.openapis.org/specification/v3insights). I have had zero involvement in moving the specification forward (something I'm changing), and after coming back to the effort I am impressed with what they've prioritized, and accomplished for this release. 

The highlights in version 3.0 of the OpenAPI Spec for me are:

*   **Components** - The new components architecture really reflects "APIs" in my opinion, making things modular and reusable.
*   **Body** - Catching up when it comes to allowing the body to be defined separately from the headers and parameters.
*   **Content Negotiation** \- You can now define content objects to define the relationship between response objects, media types, and schema.
*   **Linking** - It isn't hypermedia, but it is definitely a nod towards hypermedia, allowing the linking of objects.
*   **Webhooks** - You can now define callbacks that can be attached to a subscription operation describing an outbound operation.
*   **Schema** - Increased investment in JSON Schema, including support of \`oneOf\`, \`anyOf\` and \`not\` support, as well allowing for alternative schema now.
*   **Hosts** - You can now have multiple hosts, allowing you to more narrowly define the host for each path.
*   **Examples** - Allows you to better describe, and provide examples of APIs responses and requests.
*   **Version Identifier** - Not a big one, but removing the swagger: "2.0" identifier--it will now just be openapi.
*   **Cookies** - I'm not a big fan of this being introduced, but it makes sense, and I'm sure is usable for many API operators.

[The OAI blog provides a five-part series covering the version 3.0 release](https://www.openapis.org/specification/v3insights). These ten areas are the highlights for me. I think they nailed it as far as what was needed, while also pushing into areas like linking and webhooks that I hadn't anticipated. I am looking forward to playing with converting some of my 2.0 specs to be 3.0 compliant--once I am a little more intimate with it, I can do better to estimate how long it will take for me to evolve my platform from 2.0 to 3.0.

I am impressed with what the OpenAPI Spec working group has gotten accomplished. I am optimistic about what is possible with OpenAPI Spec in 2017--something I'm going to be investing in heavily.
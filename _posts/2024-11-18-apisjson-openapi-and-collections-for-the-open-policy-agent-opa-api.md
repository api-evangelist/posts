---
published: true
layout: post
title: APIs.json, OpenAPI, and Collections for the Open Policy Agent (OPA) API
tags:
  - Policies
  - OpenAPI
  - Bruno Collections
  - Postman Collections
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/oakland-california-bus-station.jpeg
---
[I just finished profiling the Open Policy Agent (OPA) API for APIs.io](https://github.com/api-evangelist/open-policy-agent). I am working to profile as many different policy engines as I can to better understand how enterprises are standardizing around the notion of a business or technology policy. The language used by each standard or platform will vary, and [standards like Open Policy Agent (OPA)](https://www.openpolicyagent.org/docs/latest/rest-api/#ecosystem-projects) are important to level the playing field and introduce more interoperability across how we govern our APIs and other IT infrastructure.

As with any API I am profiling, [Open Policy Agent (OPA) has a dedicated repository, APIs.json index, as well as OpenAPI, Bruno and Postman collections for each API](https://github.com/api-evangelist/open-policy-agent). I broke the OpenAPIs and resulting collections down along the bounded context that Open Policy Agent (OPA) organized the documentation on their website, which reflects the different types of resources you will be managing as part of your policy management.

<a href="https://github.com/api-evangelist/open-policy-agent"><img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/open-policy-agent-github-repo.png" style="padding: 15px;"></a>

I am still working on the alignment between OpenAPI and the generation of collections. I am trying to break down APIs into meaningful bounded context, which is then reflected in the modularity and executability of collections. I need to get an actual Open Policy Agent (OPA) instance or sandbox setup so I can certify each of the collections, but having the OpenAPI plus collections is a good start. I also need to think more deeply about how to articulate open source APIs like Open Policy Agent (OPA), which are relative to your operations.

Once I have Open Policy Agent (OPA), AWS, Azure, and other policy engines defined in this same way I will do some more work to understand the different types of resources they manage and where they apply when governing the enterprise from inside-out or outside-in. From an API governance perspective OPA is important, but since most enterprises are seeing it more about operational governance and Spectral as about design governance, I am guessing there is some work to be done regarding alignment of these visions, or at least bringing them into better focus.
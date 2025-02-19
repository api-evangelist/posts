---
published: true
layout: post
title: >-
  Pulling the OpenAPI For Any API You Are Managing With Postman So That You Can
  Apply Across the API Lifecycle
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_11_23_at_12.22.32_pm.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Lifecycle
---
I am using Postman to do more governance on my OpenAPI definitions as part of their API lifecycle. This is a top request of customers I am talking to, so I want to get better at make these individual API lifecycle capabilities much more modular and reusable as Postman collections. In Postman, the OpenAPI is the truth for each API contract throughout the API lifecycle, but each collection has become how you automate each stop along the API lifecycle. Resulting in me needing the OpenAPI for each API I am automating, and being able to pull the OpenAPI truth using the Postman API within each collection I am defining to mock, document, test, and govern each API.

[You can find a single collection for pulling the OpenAPI for an API from the Postman API using it’s name](https://www.postman.com/apievangelist/workspace/openapi/documentation/35240-55e13485-0280-46ad-b24e-19ae293af5f6) (boy that is a mouthful). The collection is designed to abstract away three separate API calls into a single request. Ideally Postman will provide a similar API endpoint, but until that happens I have this collection to help make things easier. The documentation for the collection should provide you with everything you need to get up and running with the collection, pulling the API into a Postman environment for reuse. It is up to you to decide what you will do with the OpenAPI after that, possibly making multiple changes, and then saving back to Postman using the API.

If you have any questions on [the collection for pulling the OpenAPI as part of the API lifecycle](https://www.postman.com/apievangelist/workspace/openapi/request/35240-3512f921-d0f2-46cd-b42f-48e45fad890f), feel free to submit a comment for the collection as part of [the OpenAPI workspace](https://www.postman.com/apievangelist/workspace/openapi/overview). I’ll be centralizing the evolution of this collection, as well as other OpenAPI related collections within this workspace. You can also fork the collection and use in your workspaces, and submit back any enhancements you’d like to see as a pull request. If you have any questions that you don’t want to see in the comments for the collection, feel free to email me at [info@apievangelist.com](mailto:info@apievangelist.com).
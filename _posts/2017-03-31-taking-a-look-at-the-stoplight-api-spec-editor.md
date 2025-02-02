---
layout: post
title: Taking A Look At The Stoplight API Spec Editor
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_31_at_2.40.15_pm.png
atomdate: 2017-03-31T19:00:00.000Z
tags:
  - Editor
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_31_at_2.40.15_pm.png)](https://scenarios.stoplight.io/spec-editor)

I'm keeping an eye on the different approaches by API service providers when it comes to providing API editors within their services and tooling. [While I wish there was an open source GUI API editor out there](http://apievangelist.com/2017/03/06/please-develop-an-embeddable-open-source-visual-api-editor/), the closest thing we have is from these API service providers, and I am trying to track on what the best practices are so that when someone does step up and begin working on an open, embeddable solution, they can learn from my stories about what is working or not working across the space.

One example I think has characteristics that should be emulated is [the API Spec Editor from Stoplight](https://scenarios.stoplight.io/spec-editor). The GUI editor lets you manage all the core elements of an OpenAPI like the general info, host, paths, and even the shared responses and parameters. They even provide what they call a CRUD builder where you paste the JSON schema, and they'll generate the common paths you will need to create, read, update, and delete your resources. Along the way you can also make calls to API endpoints using their interactive interface, helping ensure your API definition is actually in alignment with your API.

The Stoplight API Spec Editor bridges the process of defining your OpenAPI for your operations, with actually documenting and engaging with an API through an interactive client interface. I like this approach to coming at API design from multiple directions. Apiary first taught us that API definitions were about more than just documentation, and I think our API editors should keeping evolving on this concept, and [allowing us to engage with any stops along the API life cycle like we are seeing from API service providers like Restlet](http://apievangelist.com/2017/03/29/helping-your-customers-operate-throughout-the-api-life-cycle/).

I'm already keeping an eye on Restlet and APIMATIC's approach to providing a GUI API design editor within their solutions and will keep an eye out on other providers as I have time. Like other areas of the API sector, I'm hoping I can develop a list of best practices that any service provider can follow when developing their tools and services.
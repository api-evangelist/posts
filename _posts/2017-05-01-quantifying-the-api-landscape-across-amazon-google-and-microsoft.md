---
layout: post
title: Quantifying The API Landscape Across Amazon, Google, and Microsoft
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/microsoft_graph_api_surface.png
atomdate: 2017-05-01T16:00:00.000Z
tags:
  - Landscape
  - Amazon
  - Micro
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/microsoft_graph_api_surface.png)](http://microsoft.stack.network/)

I work to develop OpenAPI definitions for 3rd party APIs because it helps me understand what is being offered by a company. Even when I'm able to autogenerate an OpenAPI for an API, or come across an existing one, I still spend time going through the finer details of what an API does, or doesn't do. I find the process to be one of the best ways to learn about an API, stopping short of actually integrating with it.

Over the last couple of months, I've aggregated, generated, and crafted [OpenAPI](http://openapis.org) and [APIs.json](http://apisjson.org) definitions for the top three cloud API providers out there. I wanted to be able to easily see the surface area for as many of the APIs as I could find for these three companies:

*   **[Amazon](http://amazon.web.services.stack.network/)** - 2222 paths (or methods) across 65 of the Amazon Web Services - [you can find the APIs.json, and OpenAPI behind in the Github repository](https://github.com/api-stack/amazon-web-services/tree/master/_data).
*   **[Google](http://google.stack.network/)** - 2089 paths across 75 of the Google services I'm profiling - you can find [the APIs.json, and OpenAPI behind in the Github repository](https://github.com/api-stack/google/tree/master/_data).
*   **[Microsoft](http://microsoft.stack.network/)** - 2109 paths across 41 of the Microsoft and Azure services. - you can [find the APIs.json, and OpenAPI behind in the Github repository](https://github.com/api-stack/microsoft/tree/master/_data).

I learned a lot about all three providers in the process. I filled my notebook with stories about their approaches. I also ended up with three separate Github repositories with APIs.json indexed OpenAPI definitions for as many of their APIs as I could process. They are far from complete, but I feel like they paint a pretty interesting picture of the API landscape across these three tech giants.

So far there are 6,420 paths across 181 individual services. I'm still working on the summary and tags for each path, which are the two most important elements for me. I think the list of 6,420 actions you can take via an API across three of the biggest cloud providers gives us a lot of insight into what these companies are up to. There are a lot of valuable resources in there, ranging from cloud to machine learning. These three projects are an going part of my [API stack](http://theapistack.com) research, and I will be adding to them as I have time. I'm looking to keep developing simple JavaScript and Liquid tooling on top of the repos, and YAML data behind--further helping me make sense of Amazon, Google, and Microsoft APIs.
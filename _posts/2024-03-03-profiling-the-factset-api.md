---
published: true
layout: post
title: Profiling the FactSet APIs Using APIs.json
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/yellow-journalism-old-books-rack.jpg
author:
  name: kinlane
tags:
  - Financial
  - Discovery
  - APIs.json
---
I like to take little side trips in my [API profiling work for APIs.json](https://github.com/apis-json/artisanal) and [APIs.io](https://apis.io). I am in the middle of [profiling AWS, which is 300+ APIs](https://github.com/apis-json/artisanal/blob/main/apis/amazon-web-services/apis.yml), and taking some time to make way through all the moving parts and properly profiling as APIs.json and OpenAPI. As a distraction I am now profiling the [FactSet API](https://developer.factset.com/). I came across the API in a discussion at work, and after landing on their developer portal, I allowed myself a little side journey to profile the financial set of APIs. I learn a lot when I profile these API producers across different industries, so in my headI was able to justify putting AWS on the side burner while I learned a little about Factset’s approach.

I do as I do with other API producers. I visit [FactSet's developer portal](https://developer.factset.com/) and generate a new APIs.json index. Then I begin looking around, recording the properties of their API operations, but also individual APIs. I am on the hunt for the human readable elements of operations, but also perpetually sniffing around for the machine-readable elements—this is what profiling using APIs.json is all about...reducing API producers down to transactions! Factset has a machine-readable artifact that lists all of their APIs. It is used to render the APIs via their CMS, but it provides me with a good start when it comes to converting and populating my APIs.json. I used it to spider their site and populate the properties for their APIs, and download the OpenAPI they published for their APIs.

Often times I am simply profiling the name, description, tags, documentation and OpenAPI for each API, but FactSet has a high bar for each of their that I find very interesting—-Factset has documentation, OpenAPI, SDKs, code snippets, change log, and Jupyter Notebooks available across all of their APIs. I like this raising of the bar when it comes to what is expected of APIs. There were some things that weren’t standardized like some of their OpenAPIs were YAML and some were JSON — I recommend standardizing around one, as it introduces potential friction. [Factset has 99 individual APIs, with 14 common properties across them, not counting the five they provide across all 99 APIs](https://github.com/apis-json/artisanal/blob/main/apis/factset/apis.yml). It provides a nice operational blueprint for APIs in the financial space, but also for any business sector.

I have more work to do on the [FactSet API index](https://github.com/apis-json/artisanal/blob/main/apis/factset/apis.yml). I need to go through all the summaries for the individual APIs. I have an overlay created for each one so that I do not disturb the original OpenAPI, as I need to be able to run my rating on them next. I will refine the summaries, tags, and run my API Evangelist ratings on each of the 99 APIs. This will make the APIs ready for publishing to APIs.io, but also tell me a lot more about the surface area of the FactSet APIs. The tags and rules applied to each OpenAPI yield me the most interesting insights about what is happening. I appreciate it when providers maintain their own OpenAPI, saving me the work. It is worth the work, even if I have to polish a little more to make it ready for search, as I learn a lot along the way, and further refine my ruleset—-which gets better with each profiling I complete.
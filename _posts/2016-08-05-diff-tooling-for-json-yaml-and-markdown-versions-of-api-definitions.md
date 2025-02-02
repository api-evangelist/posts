---
layout: post
title: Diff Tooling For JSON, YAML, And Markdown Versions Of API Definitions
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-diff.png
atomdate: 2016-08-05T16:00:00.000Z
tags:
  - Definitions
  - Tooling
  - Definition
  - YAML
  - JSON
  - Diff
  - Versions
---
As the number of available [API definitions](http://definitions.apievangelist.com/) out there grows, I am increasingly coming across variations of APIs that I already have included in my [API Stack](http://theapistack.com/). It can be tedious to try and sync these with existing copies, so I wanted to take a look and see if there was anything already available out there, that would help provide a diff for either OpenAPI Spec, RAML, or API Blueprint.

The most common one I found referenced was [a Ruby one for OpenAPI Spe](https://github.com/civisanalytics/swagger-diff)c from [Civis Analytics](https://github.com/civisanalytics). Next, I found a pretty [interesting web tool](https://zallek.github.io/swagger-diff/), which provides its [Node.js source code on Github](https://github.com/zallek/swagger-diff/), including a CLI edition. After these two solutions, I only found [one more for RAML](https://github.com/myexpr/raml-diff), but couldn't find anything for API Blueprint.

I wanted to think beyond just the common API definition formats and look for diff tools that would work just for JSON. I found [Diff](https://github.com/andreyvit/json-diff) which was pretty interesting, as well as [DiffSync](https://github.com/janmonschke/diffsync) which provided a real-time diff for JSON. I haven't tried any of them out, I am just trying to compile a list of what is out there before I dive into what their capabilities are.

I have a master database of API definitions where I can just import API definitions that I find, and it will add any new paths, parameters, and schemas it comes across. I would much rather have the ability to just run each version through a diff tool, and be able to select which elements I want to have merged. For now, I will just implement a custom layer to my API monitoring system, but I would like to see API diff move forward similar to we saw the conversation evolve with the introduction of [API Transformer](https://apitransformer.com/).
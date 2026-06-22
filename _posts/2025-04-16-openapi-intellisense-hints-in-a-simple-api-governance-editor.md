---
published: true
layout: post
title: OpenAPI Intellisense Hints in a Simple API Governance Editor
date: 2025-04-16T09:00:00.000Z
tags:
  - Governance
  - OpenAPI
  - JSON Schema
  - Intellisense
  - Autocomplete
  - Hints
  - Spectral
  - Editor
image: https://kinlane-images.s3.amazonaws.com/shared/eugenics-ferris-wheel-fair.jpeg
---
I wanted to encourage my customers to take advantage of a [simple API governance editor](https://apievangelist.com/2025/04/16/a-simple-api-governance-editor-for-openapi-and-spectral/) that I use in demos and workshops. [I have my own more robust version seamlessly woven into API Evangelist](https://utilities.apievangelist.com/openapi-linter/) and my processes, but I encourage my customers who are just getting started with governance to [use this simple one built by the Italian government](https://github.com/italia/api-oas-checker/blob/master/README.en.md)—-I applaud their work. However, there is one capability it has that I wanted to highlight on its own, and that is the ability to provide autocomplete or intellisense hints using JSON Schema. 

The [Monaco Editor](https://microsoft.github.io/monaco-editor/) driven simple API Governance Editor uses [an extended JSON Schema behind the editor to allow you to introduce customized hints for your team](https://github.com/api-evangelist-tools/starter/blob/main/completion-schema.json). It is the [same approach that Microsoft uses in VSCode](https://code.visualstudio.com/docs/languages/json), and provides a pretty slick way to guide your teams forward while encountering governance. And since it uses the same approach users of VSCode will encounter, it provides a pretty powerful way to decorate the OpenAPI specification with hints that are unique to your operations, or domains within your operations.

This is a pretty powerful, yet low budget approach to approaching API governance, and I am purposely building on top of what the Italian government has developed because it is simple, focused, and has the same intent behind the projects as I do—-enabling enterprises to standardize their APIs in a way that develops internal capacity around OpenAPI, JSON Schema, and Spectral rules. My approach to API governance lies in strengthening this internal capacity as opposed to relying on specific services or tooling.
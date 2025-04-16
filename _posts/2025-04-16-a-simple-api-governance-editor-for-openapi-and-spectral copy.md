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
image: https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/bf-skinner-waterfront-in-italy-mist.jpg
---
I wanted to encourage my customers to take advantage of the Simple API Governance editor that I use in demos and workshops. I have my own more robust version seamlessly woven into API Evangelist and my processes, but I encourage my customers who are just getting started with governance to use this simple one built by the Italian government—I applaud their work. However, there is one capability it has that I wanted to highlight on its own, and that is the ability to provide autocomplete or intellisense hints using JSON Schema. 

The Monaco Editor driven simple API Governance Editor uses an extend JSON Schema behind the editor to allow you to introduce customized hints for your team. It is the same approach that Microsoft uses in VSCode, and provides a pretty slick way to guide your teams forward while encountering governance. And since it uses the same approach users of VSCode will encounter, it provides a pretty powerful way to decorate the OpenAPI specification with hints that are unique to your operations, or domains within your operations.

This is a pretty powerful, yet low budget approach to approaching API governance, and I am purposely building on top of what the Italian government has developed because it is simple, focused, and has the same intent behind the projects as I do—enabling enterprises to standardize their APIs in a way that develops internal capacity around OpenAPI, JSON Schema, and Spectral rules. My approach to API governance lies in strengthening this internal capacity as opposed to relying on specific services or tooling.
---
layout: post
title: Diff And Merging Of API Definition Formats
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-diff.png
author:
  name: kinlane
tags:
  - Definition
  - Diff
---
As the number of API definitions increases out there, I'm coming across many duplicates of APIs I already have in my collection(s). In 2016, I will increasingly need to be able to execute a diff on two [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification) or [API Blueprint](https://apiblueprint.org/) files, and get back a programmatic, as well as a visual reference, which allows me to quickly understand the differences between each spec in detail.

In support of this API definition diff tooling, I can also see the potential for some sort of merging tooling, that would allow me to easily say yes or no, and merge various elements of either API definitions. I recently got sucked into using Ancestry.com, and they provide a nice way to merge discovered documents into your family tree, accepting or rejecting what you want--I would like to see this exist for API definitions.

As with every other other of the almost 1000 building blocks available across my API research, each element of the API life cycle should be available as an API, as well as lightweight, open source, micro tool. An API definition diff and merge would make to very viable API services, and if someone doesn't get around to building, I will probably get to work on a version of it for my own needs. I have a growing queue of API definitions I need to merge with my master stack, and not all of it is as straightforward as "accept all". 

In addition to [adding attribution](http://apievangelist.com/2016/01/04/api-definition-origin-validation-and-attribution/) to my [API definition research](http://definitions.apievangelist.com/building-blocks.html), I'm adding diff and merge as building blocks. They'll provide a reminder for me (and anyone else), that attribution, diff, and merging at the API definition level is an important aspect of the API life cycle.
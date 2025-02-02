---
published: true
layout: post
title: What Exactly Is APIs.json?
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

As I travel around talking to folks about APIs, I spend as much time as I can, educating folks about [APIs.json](http://apisjson.org). In the course of my evangelism, I’m constantly reminded how little people, who have even heard, and read about APIs.json, really understand about what it actually is. With this in mind, I will be regularly publishing examples of what APis.json is, to help on-board everyone to Steve ([@ngynx](https://twitter.com/njyx)), and mine vision for [APIs.json](http://apisjson.org).

APIs.json is an open format, in partnership between [3Scale](https://3scale.net) and [API Evangelist](http://apievangelist.com), to help API providers make their APIs more discoverable, assist API brokers in aggregating multiple APIs deemed valuable within specific industries, and ultimately empowering API consumers in finding exactly the APIs they need to be successful. Our mission is to make the process of API discovery as portable as we can, enabling it to live on any website, and be found in open search engines like [APIs.io](http://apis.io).

APIs.json is a machine-readable description of your company, and its associated API resources. For each API listed, you give it a name, description, and supporting properties, which may be as simple as providing a link to your documentation, or be as complex as providing a link to a machine readable API definition in the Swagger or API Blueprint format. One APIs.json detail, that I feel many technologists overlook, is that this isn’t just discovery in a hypermedia context, this could only be about the discovery of your pricing or maybe just the terms of service page (I know, a hypermedia format can descibe this, but I think you are missing an intermediary step to get the space there!)

If you need an example of APIs.json file, a good place to start is the [APIs.json for APIEvangelist.com](http://apievangelist.com/apis.json), this provides a good default example of APIs.json working within a single domain. If you want to better understand how an [API broker](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/) may use to build API collections, take a look at the [APIs.json for my utility stack](http://utility-stack.apievangelist.com/apis.json), which is a collection of APIs from various locations, brought together to serve a specific purpose. Beyond that, take a look at the [700+ APIs.json files I’ve created for top APIs as part of my API Stack](http://theapistack.com)—hopefully this will help you see it in action across hundreds of API resource.

Our goal is to encourage **EVERY** API provider to publish an APIs.json in the root of their public domain(s), but it can also be used in the same way for private APIs, so don't get hung up on the public aspect of all of this. Beyond these early implementations, I want people to also build [API collections](http://apievangelist.com/2014/10/11/exposing-dictionaries-from-my-api-collections/), and [virtual stacks of the APIs](http://apievangelist.com/2014/04/17/api-virtual-stack-composition-like-the-absolut-drinks-data-api/) for use in their own projects, beginning the process of building some valuable definitions of th emost used APIs in use today. Please join this evolution API discovery, and publish your own [APIs.json file](http://apisjson.org)—I appreciate the help.
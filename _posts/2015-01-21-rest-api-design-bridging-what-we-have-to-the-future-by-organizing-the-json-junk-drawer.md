---
layout: post
title: >-
  REST API Design: Bridging What We Have, To The Future, By Organizing The JSON
  Junk Drawer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/REST-API-Design-Avoid-future-proofing-with-the-JSON-junk-drawer-YouTube.png
author:
  name: kinlane
tags:
  - Design
  - REST
  - JSON
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/REST-API-Design-Avoid-future-proofing-with-the-JSON-junk-drawer-YouTube.png)](https://www.youtube.com/watch?v=-MBXsmSrKE8)

API storyteller J(a)son Harmon ([@jharmn](https://twitter.com/jharmn)) has a new YouTube channel up called [API Workshop](https://www.youtube.com/channel/UCKK2ir0jqCvfB-kzBGka_Lg). He's going to be publishing regular API design workshop episodes, with the latest one titled [REST API Design: Avoid future proofing with the JSON junk drawer](https://www.youtube.com/channel/UCKK2ir0jqCvfB-kzBGka_Lg). J(a)son provides a nice overview of how you should be structuring the JSON for your API, focusing on the usage of key / value stores. Ironically he uses APIs.json as an example of why you **SHOULD NOT** use custom key / values within your JSON. What is ironic about this, is that he makes the case for APIs.json properties, giving me a great starting point for helping folks better understand [APIs.json](http://apisjson.org), and why properties are key to its evolution, and flexibility.

The process J(a)son outlines in the portion of this segment that referred to APIs.json, describes the lifecycle of an APIs.json property, towards becoming more of a "first class property". There are three phases of an APIs.json property:

1.  **X-Property -** A user defined property, allowing anyone to craft exactly the properties that matter to them
2.  **Property -** An official machine readable APIs.json property element, acknowledging its wide usage, potential as common blueprint
3.  **"First Class Property or Collection"** \- Baking a property into the specification as default property of APIs collection, or establishing as sub-collection for the API

The lesson J(a)son provides, describes the journey of each APIs.json property, the difference is in that his lesson provides best practices for API providers who are designing new APIs, helping them avoid the creation of a junk drawer, and the APIs.json property format is being applied to define the junk drawer that we have (aka the public API space). This represents the fundamental separation between my approach to defining the space vs. many other technologists—I am trying to map out what we have, and get us the next step in our evolution, while others are working hard to define where we should be going.

When Steve and I originally hammered out the [APIs.json format](http://apisjson.org/), we couldn't 100% agree on what should be first class properties and collections for each API defined using an APIs.json file—what you see in version 0.14 is what we agreed to, the rest needs to be defined by the community, through actually implementations and discussion on the [APIs.json Github repo](https://github.com/api-commons/api-json/issues).

![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-recycling.jpg)

When you are crafting the JSON, for a new API, J(a)son’s lesson is very important, but when you are evaluating hundreds of APIs, and trying to define a common pattern for representing not just the tech, but the business, and politics of an API—you don’t have as much control over how things get defined. I’m not worried about the overhead involved with adding a little more complexity to my code, to bridge the well-defined aspects of API operations with the lesser-defined parts of the space.

Ideally, in one of the next iterations of APIs.json, the official properties of Swagger, RAML, Blueprint, and WADL can move up into a first class collection for each API called definitions, and maybe also consider moving API Commons up to be a first class licensing collection as well. I’m also looking to graduate some X-properties to official status, based upon [creating APIs.json for over 700+ companies](https://github.com/kinlane/api-stack/tree/gh-pages/data), and having identified almost [150 separate properties that can be used to describe API operations](https://github.com/kinlane/api-stack/blob/gh-pages/data/properties.json). All of this represents the API sector coming into focus, and I do not think all of these properties should become "first class" properties or collections—I am just trying to make sense of the "junk drawer" that we have, and help provide a blueprint for a machine readable formats that can help us evolve it towards the future we want.

I have been asked by several folks to better explain Steve and mine APIs.json vision, and J(a)son’s story gives me the opportunity to help kick off this storytelling. In an effort to keep this story short, I’m going to follow J(a)son’s lead and move the rest of this story on to YouTube, so if you want to better understand APIs.json properties, you can watch my video response to J(a)son's story, which augments this post, and hopefully provides some better examples, along with narrative.
---
layout: post
title: NPR Adds Content Permission Control to their API
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/npr-logo.jpeg
author:
  name: kinlane
tags:
  - Content
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/npr/npr-logo.jpeg)](http://www.npr.org/ "NPR")

NPR is defining new models for content distribution. One that other media providers can follow, when designing their API driven content delivery platforms.

The [NPR Story API](http://dev.npr.org/) provides digital access to NPR content and to other station content--allowing both NPR and stations to contribute and consume local and national news stories.

In an effort to provide NPR stations with more control over the content they contribute to the platform for distribution, [NPR Digital Services has introduced content permissions control via the NPR story API](http://digitalservices.npr.org/post/npr-api-content-permissions-control).

Currently content stored on the Story API’s platform can be retrieved by anyone with an API key--allowing content pushed across the network to be consumedd in 3 ways:

*   **Create Once, Publish Everywhere** - Stations and npr.org push content into the API and then pull the content onto other platforms, such as other station-owned web properties and mobile apps
*   **Station Networks** - Content is shared between multiple stations in a content network, both on web sites and mobile apps
*   **National** - Station content is featured on npr.org and NPR mobile apps with links back to station digital properties

Using the new content permissions, stations can now control who is allowed to pull their content from the API. The permissions work by allowing stations pushing content to specify whether the content should be:

*   Public to all
*   Public to the NPR station network
*   Public to a group of stations listed in a whitelist
*   Public to everyone except for stations on a blacklist

The new changes allow stations to set these permissions at the individual story level, as well as create permission groups to add multiple stories to.

NPR's approach is a great model for how APIs can facilitate content exchange across a large network of providers, allowing for the widest distribution possible-while also allowing content owners control over who has access to their valuable content in a very granular way.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/npr/NPR-Digital-Services.png)

APIs are all about providing access to valuable content and resources, but should also be designed to give the proper amount of access, so your content doesn’t end up being consumed, distributed in ways you don’t find appropriate.
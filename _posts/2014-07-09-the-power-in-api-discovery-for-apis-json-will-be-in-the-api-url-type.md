---
published: true
layout: post
title: The Power In API Discovery For APIs.json Will Be In The API URL Type
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apis-json-gears.png
author:
  name: kinlane
tags:
  - Discovery
  - Discover
  - APIs.json
  - APIs
  - Power
  - APIs.jso
---
An [APIs.json](http://apis.json) file lives in the root of any domain, or subdomain, and provides references to a collection of API resources. The APIs.json is meant to be a lightweight framework, where someone can build a collection of APIs, give it a name, description, some tags, and the APIs collection points you where you need to go, to get more information about those APIs.

For each API, you can define a list of URLs, each with a defining “type”, letting you know what to expect when you visit the URL. Right now, most of those URLs are just for humans, pointing to the developer portal, document, and terms of service (TOS). We are adding other API url types, that API search engines like [APIs.io](http://apis.io/) can expose in their search interfaces, like code samples, and application gallery, to the next version of APIs.json.

These human API URL types provide a reference, that API search engines can use to guide human users who are searching for APIs. However, where the real power of APIs.json comes in, is when an API URL type references a machine readable source, like a [Swagger definition](http://swagger.wordnik.com/), or an [API Commons manifest](http://apicommons.org/add-apis.html). When it comes to API discovery, we need as many meaningful locations, that we can point human API consumers to, but also machine readable locations, that will help make API discovery much more rich, automated, and precise.

Imagine when I can do more than just search name, description, and tags, by keyword, much like [APIs.io](http://apis.io/) works currently. Imagine when you can specify that you only want APIs that are in the [API Commons](http://apicommons.org/), and openly licensed. Imagine when I can search for APIs that allow me to use all my HTTP verbs, not just GET. Now, go even more in the future, when I can search for APIs who have a specific allowance in their terms of service, with a machine readable TOS type for APIs.json.

This is where I want to take APIs.json, and ultimately API discovery. Machine readable API definitions like API Blueprint, RAML, and Swagger are the very first API URL type that helps automate API discovery, and the API Commons manifest is the latest. My goal is to tackle terms of service, pricing, and other critical aspects of API integration, and push forward a machine readable definition, that can ultimately be baked into the API discovery process--in all API search engines.

What is important to me, is that the API URL types, in each APIs.json, remain independent, and only loosely coupled with the APIs.json format, using a simple label, and URL. I’m not directly invested in the evolution of each Swagger version, however I am with API Commons, and potentially other future APIs.json API URL type definitions. I want anyone to be able to step up and suggest API URL types for the APIs.json spec, making APIs.json URL types a community driven API discovery layer, for the API economy.
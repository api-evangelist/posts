---
layout: post
title: API Definitions Influencing API Design
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-two-arrows.png
atomdate: 2017-02-17T23:00:00.000Z
tags:
  - Design
  - Definitions
  - Definition
  - Influencing
---
I was having a conversation about whether I should be putting my API definition or my API design work first--which comes earlier in the lifecycle of an API? The conclusion was to put definition first because you need a common set of definitions to work with when designing your API(s). You need definitions like HTTP and HTTP/2. In, 2017 you should be employing definitions like OpenAPI Spec, and JSON Schema. These definitions help set the tone of your API design process.

In my opinion, one of the biggest benefits of designing, developing, and operating APIs on the web has been forcing developers to pick up their heads and pay attention to what everybody else is doing and wanting. I suffer from this. Doing web APIs, providing my own, and consuming 3rd party APIs forces me to pay attention to providers and consumers outside my bubble--this is good.

Common definitions help us elevate the design of our APIs by leveraging common concepts, standards, and schema. Every time you employ [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), you have to think about folks in another time zone. Every time you use ISO 4217, you have to think about people who buy and sell their products and services in a different currency than you. When you use [Schema.org](http://schema.org/), your [postal addresses considers the world beyond just US zip codes,](http://schema.org/PostalAddress) and consider a world wid web of commerce.

[I am placing definitions before design in my API research listing](http://apievangelist.com). In reality, I think this is just a cycle. Common definitions feed my design process, and the more experienced I get with design, the more robust my toolbox of API definitions gets. Ultimately this depends on what I'm calling a definition, but for the sake of this story [I am considering the building blocks of the web as the first line of definition](http://webconcepts.info/)[s](http://webconcepts.info/), then secondarily the definitions that are using OpenAPI Spec and JSON Schema as the next line of definitions. Definitions influence my design process, and the design process is refining the definitions that I am putting to work.
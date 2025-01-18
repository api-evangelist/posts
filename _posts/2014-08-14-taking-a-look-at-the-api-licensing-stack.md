---
layout: post
title: Taking A Look At The API Licensing Stack
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-onion.png
author:
  name: kinlane
date: 2014-08-14T03:42:52.000Z
tags:
  - Licensing
  - Stack
---
One of the byproducts of the [Oracle vs Google API copyright case](http://apievangelist.com/2014/05/10/where-will-your-api-stand-in-the-oracle-v-google-api-copyright-debate/), was a realization that many API providers and consumer do not understand the layers of the API stack, let alone the potential licensing considerations for each layer of the API onion. I wouldn't just blame API providers, and consumers, I’m still getting a grasp on all of this, which is why I'm blogging about the subject.

Let’s take a quick crack at defining the layers to the potential API licensing onion:

*   **Data** - What is the licensing for the actual data returned and collected by an API? I’m still learning about the ways to license your data, and the [Open Data Commons provides some guidance in this area](http://opendatacommons.org/faq/licenses/), while others feel that your data can just as be easily licensed using [Creative Commons](http://creativecommons.org/) licensing.
*   **Data Model** \- The separation between data and its data model can be hard to see, where in reality end-users may own their data, but the order and structure of it can be owned by the originating application. If this layer is a concern, [Creative Commons](http://creativecommons.org/), or other copyright options should be considered.
*   **Server** - Server side API code is the core of any API operations, and should be licensed accordingly using [common open source software licens](http://opensource.org/licenses)es when appropriate. However I would add that this is the one layer in the API stack where a proprietary licensing could make sense, but the rest of the stack should always be licensed as open as possible.
*   **Interface** - The separation between the API and its surface area is important, and is something that is just becoming relevant with the Oracle v Google copyright case. Understanding the importance of an openly licensed surface area, is essential to the health of any API stack, and should be kep as open as possible, even when associated with a proprietary API backend. This is why we started [API commons](http://apicommons.org), to help API providers take a stance on the license of the surface area of the API stack.
*   **Clients** - As with server side code, you should apply [common open source software licensing](http://opensource.org/licenses) to client code when appropriate, but your client code samples, libraries and SDKs should never be licensed in a proprietary way, encouraging implementation for any commercial integration.

In this scenario we are talking about a purely data API, if you are serving up some sort of programmatic resource, things might be different. My goal is to just try and understand the separation between the API layers, and apply some thoughts on how licenses can be applied to open, or possibly close access and constraint an APIs operation.

Much like other political building blocks of the API ecosystem, licensing in the aPI stack can be good, bad, or neutral. In the end, regardless of your stance I think it is important to have an open conversation about how our API stack is licensed, so that your consumers can better understand what they are in for.
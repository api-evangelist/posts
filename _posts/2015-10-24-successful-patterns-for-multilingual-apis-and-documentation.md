---
layout: post
title: Successful Patterns For Multi-Lingual APIs and Documentation
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Documentation
  - Patterns
  - APIs
---
I had a follower tweet out an interesting question about successful patterns for multi-linguarl APIs, which I thought was interesting enough to share as a story, adding to my research, and helping me tune into the topic better. 

As the API economy unfolds, and APIs make their way into more countries around the globe, the need to standardize how we internationalize different layers of our API operations is only going to increase--making these types of conversation starters very important.

Here is the Twitter thread:

> [@phillipadsmith](https://twitter.com/phillipadsmith) [@kinlane](https://twitter.com/kinlane) The Accept-Language header is a good start. [https://t.co/Gt6TuUUSB2](https://t.co/Gt6TuUUSB2)
> 
> — pete gamache (@gamache) [October 21, 2015](https://twitter.com/gamache/status/656930408785932288)

> [@gamache](https://twitter.com/gamache) [@kinlane](https://twitter.com/kinlane) Root of my Q is headers vs. endpoints, e.g., /en/ & situations where document is avail in one lang but not another
> 
> — Phillip Smith (@phillipadsmith) [October 21, 2015](https://twitter.com/phillipadsmith/status/656931500844150784)

> [@phillipadsmith](https://twitter.com/phillipadsmith) [@kinlane](https://twitter.com/kinlane) I’d advocate for a query string, e.g. ?lang=en, rather than a URL path. The server can choose a fallback language.
> 
> — pete gamache (@gamache) [October 21, 2015](https://twitter.com/gamache/status/656932949577867264)

> [@gamache](https://twitter.com/gamache) [@kinlane](https://twitter.com/kinlane) Pondering... So, /documents/?lang=ar might return documents in fallback language if not available in Arabic, for example?
> 
> — Phillip Smith (@phillipadsmith) [October 21, 2015](https://twitter.com/phillipadsmith/status/656937403148472320)

> [@phillipadsmith](https://twitter.com/phillipadsmith) [@kinlane](https://twitter.com/kinlane) More or less. I’d imagine /documents/?lang=en would return a list of docs in English (1/2)
> 
> — pete gamache (@gamache) [October 21, 2015](https://twitter.com/gamache/status/656970362186563584)

> [@phillipadsmith](https://twitter.com/phillipadsmith) [@kinlane](https://twitter.com/kinlane) And /documents/123?lang=en would return doc 123 in either English or a fallback language.
> 
> — pete gamache (@gamache) [October 21, 2015](https://twitter.com/gamache/status/656970546173878272)

> [@gamache](https://twitter.com/gamache) [@kinlane](https://twitter.com/kinlane) What if a collection of documents only exist in Arabic, and not English?
> 
> — Phillip Smith (@phillipadsmith) [October 21, 2015](https://twitter.com/phillipadsmith/status/656971844755439616)

> [@phillipadsmith](https://twitter.com/phillipadsmith) [@kinlane](https://twitter.com/kinlane) Then Arabic becomes the fallback language for that doc, and the response carries the header Content-Language: ar.
> 
> — pete gamache (@gamache) [October 21, 2015](https://twitter.com/gamache/status/656972659973095424)

I see two key building block that I can extract from this conversation. One being Accept-Language for dictating which language your API should be speaking, and two, using a query string lang= to tell your documentation what language it should be speaking. I've added both as [API design building blocks](http://design.apievangelist.com/building-blocks.html), and the documentation reference to my [API management building blocks](http://management.apievangelist.com/building-blocks.html).

I love questions like this, because it puts these topics on my radar, and after writing a post about it, and adding as some common building blocks, the chances I will explore further dramatically increases. This is the side of my research that keeps me getting up and sitting down at the pooter each day.
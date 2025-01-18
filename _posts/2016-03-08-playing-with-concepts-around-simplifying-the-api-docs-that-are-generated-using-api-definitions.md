---
layout: post
title: >-
  Playing With Concepts Around Simplifying The API Docs That Are Generated Using
  API Definitions
image: https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-butterfly-vertical.png
author:
  name: kinlane
tags:
  - Definitions
  - Definition
  - Docs
---
I am building on my conversation with Abhinav Asthana ([@a85](https://twitter.com/a85)), the Co-founder and CEO of [Postman](http://www.getpostman.com/), around [how we can simplify the API documentation we are providing to our API consumers](http://apievangelist.com/2016/03/07/it-would-be-nice-to-have-some-simpler-interactive-api-documentation-in-addition-to-what-we-have-now/). As part of my work to profile the [50+ stacks of APIs I list on my home page](http://apievangelist.com), I am playing with different ways of listing APIs, sharing the valuable endpoints available within, and other key aspects with users. All this work is being driven by [APIs.json](http://apisjson.org), and [Open API Spec](https://github.com/OAI/OpenAPI-Specification) listings.

First I've rewritten [my main API listing page using Liquid, running in Jekyll](http://sms.stack.network/apis/), which uses a \_data folder full of APIs.json, and OpenAPI Specs published as part of each of [my API life cycle, or API stack research](http://apievangelist.com). To operate, this listing just mounts the \_data folder, and loops through all APIs.json files it contains, then parses each property present, giving special attention to OpenAPI Spec, and API plan formats.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/sms-api-organization-listing.png)](http://sms.stack.network/apis/)

[Liquid](http://liquidmarkup.org/) + [Jekyll](https://jekyllrb.com/), running on [Github Pages](https://pages.github.com/) gives me a simple, static way of representing the machine readable indexes I generate for any of my research areas using APIs.json, OpenAPI Spec, and my new API plan format. Jekyll gives me the entire contents of the API definitions I'm storing in my \_data folder, as a single Liquid object which I can loop through, to generate the static HTML for my listing of APIs. Using this approach gives me a machine readable index of all the moving parts of any single, or multiple API collection. 

[The list of SMS APIs in this research is pretty verbose](http://sms.stack.network/apis/). I'm not even listing out the parameters, headers, and other details of each API, and the listings are pretty involved--further backing up Abhinav thoughts around simplifying the API documentation that we are generating. To help me push forward my Liquid skills, and the possibilities around breaking up the properties of each API defined using APIs.json, I took the same code and generated a separate, [trimmed down version which only shows the APIs overview, and the details of their API plans, leaving out the details of each API endpoint](http://sms.stack.network/plans/).

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/nexmo-api-plans.png)](http://sms.stack.network/plans/)

While the static approach to generating HTML, using Liquid, Jekyll, and APIs.json, OpenAPI Spec, and API plan, has given me a lot of control, and I will keep pushing forward a toolbox of Liquid, Jekyll + JSON modules, I wanted to also push forward a JavaScript solution as well. Using Jquery, I basically recreated what I was doing with Liquid, giving me JavaScript array containing the APIs.json index of APIs. Now I know I can loop through, and share all the API details just as I listed above, but using JS I wanted to go beyond the Liquid representation, and make smaller, more embeddable API documentation solutions, that wouldn't be bound to a Jekyll site, if you didn't want them to be.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/sms-apis-by-collection.png)](http://sms.stack.network/apisjson/bycollection/)

[In my SMS research, I am profiling nine separate APIs](http://sms.stack.network/), which each have its own APIs.json indexing each of the APIs, there is also a root APIs.json for the SMS research, which includes each of the sub API collections. I wanted to start here, and share a simple list of the API endpoints contained within each collection.

This gives me a nice, potentially human readable,  list of the API endpoints available within any single API collection. I wanted to see what else I could do, and instead of using each APIs.json collection as the anchor point, I focused on the tags that were being applied to each API, within its Open API Spec, grouping all the endpoints by tag.

This gives me to quick, alternate vantage points of my API collections. While I like browsing the entire collection in detail via the main page, I can see the potential in understanding these resources on a new level, when I break them down by provider, or tags applied. One thing this brought to the surface for me, is how poorly, and inconsistently some of the API definitions are, but once I clean up the summaries and tags across these APIs, I'm thinking it could be some pretty powerful JuJu.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/sms-api-by-tag.png)](http://sms.stack.network/apisjson/bytag/)

Ok, so WTF am I doing here? Why does it matter? I am decoupling the benefits that API definition driven, interactive documentation like Swagger UI, Apiary, and Lucybot Console have brought us. None of this is functional like Swagger UI is, I am just focusing on the decoupling of the surface area of any API, or collections of API, next I will play around with making things minimally interactive, like being able to make a simple GET call for an API, or maybe a POST as well--it will come with time.

I want to see some simple, embeddable, and easy to read and use API documentation, which could potentially have ALL the moving parts of an API, or a collection of APIs, but might also give you a sub, or cross section of the details of the API(s), and the value that is contained within. Not sure where all of this is going, I just wanted to play with Liquid and JavaScript driven APIs.json tooling, while also thinking further about what Abhinav and I talked about. Eventually I'd love to see a wealth of open, API definition driven modules, that API providers can use across their portals, but also API service providers like Abhinav can use in their API tooling, like Postman.
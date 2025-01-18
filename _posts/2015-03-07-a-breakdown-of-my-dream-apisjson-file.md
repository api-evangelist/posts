---
layout: post
title: A Breakdown Of My Dream APIs.json File
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - My
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org)

I'm continuing my work, to help people understand what APIs.json is, and the [varying ways that it can be put to use](http://apievangelist.com/2015/03/06/three-ways-i-am-putting-apisjson-to-work/). My post the other week, [breaking down Fitbits APIs.json file is a good example of where to get started](http://apievangelist.com/2015/01/31/breaking-down-the-fitbit-apisjson-file/), and as a follow-up I wanted to help further set the bar for what a [minimum viable APIs.json](http://apievangelist.com/2015/02/08/a-minimum-viable-apisjson-file-for-your-apis/) looks like, and today, I am going in the other direction--toward my dream APis.json file.

APIs.json starts with a basic set of descriptions for who you are, the API provider. Each header of an APIs.json file gives you a handful of parameters for describing who you are:

*   **name** - your individual or company name, who is managing the APIs.json file.
*   **description** - a description of your company and / or the API collection you are building.
*   **image** - an image, logo, or icon that describes yourself or your company
*   **tags** - a handful of key words and phrases that describe your API collection.
*   **created** - the first date in which an APIs.json file was created.
*   **modified** - the last date in which an APIs.json file created.
*   **url** - The url of where the APIs.json lives, allowing your file to be portable.

Those seven parameters provide details on who you are, and what the API collection is all about. Remember an API collection doesn’t always have to live under a specific company domain like Twilio.com, it could be a temporary or more permanent collection, that is part of specific project or application.

The next essential element of an APIs.json file, is the APIs collection, providing you the ability to describe one or many APIs as part of this collection. Similar to the parameters provided for the header, each API entry is allowed a handful of parameters that describe the API:

*   **name** - the name of the API.
*   **description** - a description of the value an API delivers.
*   **image** - an image, logo, or icon that describes an API.
*   **tags** - a handful of key words and phrases that describe the API itself.
*   **humanURL** - The url any human should visit to learn more about an API.
*   **baseURL** - The base url any machine should follow to start using an API.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-gears-soft-round.png)](http://apisjson.org)

Each API should have at least this information, at a minimum. I could stay here, with a [minimum viable APIs.json definition](http://apievangelist.com/2015/02/08/a-minimum-viable-apisjson-file-for-your-apis/), but I encourage you to take one more step, and put the properties collection to use for each API. You can provide any other URL you want for an APIs properties, but I recommend starting with the basic properties:

*   **TermsOfService** - where do I find your terms of service page.
*   **StatusPage** - where is the url of the status page, where I can get platform update.
*   **Pricing** - point me directly to where your pricing page is, so I can make a decision on price.
*   **Forums** - where is the community forum located for a platform, even if this is Stack Overflow.
*   **AlertsTwitterHandle** - what is the primary Twitter handle for the API itself.

These are meant to satisfy the common needs of anyone learning about API operations, however they are just URLs meant for the human API consumer. In my dream APIs.json file, there will be a robust amount of machine readable properties available for each API, beginning with the two most important:

*   **Swagger**  - a machine readable JSON or YAML file describing your API surface area
*   **Blueprint** - a machine readable markdown file describing your API surface area

Along with providing machine readable definitions of the API surface area, establishing a central truth or fingerprint for any API interface, it is just as important to provide a machine readable license for the API:

*   **InterfaceLicense** - a machine readable pointer to the licensing for the API interface

Along with making sure the interface of an API matches your application objectives, consumers need to understand the licensing restrictions, or the freedom that comes with deeply integrating an API resource into any system or app.

Since I’m talking about my dream APIs.json file, I’m going to talk about two added property formats I’m currently working on behind the scenes, adding to the stack of machine readable API definition formats.. These new areas, represent two areas I’m working hard to define and understand, right after I hand-craft Swagger definitions for my APIs:

*   **[API Pricing](http://api-pricing.apievangelist.com/)** - taking pricing to the next level and making it machine readable.
*   **[API Questions](http://api-qa.apievangelist.com/)** \- answering the important questions I need to know about each API.

Can you imagine if API pricing was machine readable by default? Think of the options for building in a broker or market layer within the index of API platforms, and API collections, or even via an IDE. These two definitions are in an [alpha stage](http://alpha.apievangelist.com), but are based upon data I've been gathering behind the scenes, so a lot of thought has gone into settling on these buckets.

After that, I’d say there are a handful custom properties I’d like to see applied to each API indexed within an APIs.json:

*   **x-blog -** where do I find your blog. (machine-readable below)
*   **x-blogrss -** where can I just get an RSS of your blog stream.
*   **b-github -** what is the primary Github account for the API.

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-circuit-paths.png)](http://apisjson.org)

That concludes my list of elements I’d like to see available in my dream APIs.json file. You can see examples of this in action, with the [700+ companies I've generated APIs.json files for, over at my API Stack Github repo](https://github.com/kinlane/api-stack/tree/gh-pages/data). There is a lot of work left to do, but this dream APIs.json file resembles a vision I have for the future of API discovery—which I see as the engine for the API economy.

My goal is to get there I need the most important aspects of API operations machine readable. We aren't there yet, but I can see it. Taste it. Imagine what we can do when you can program against:

*   **Surface Area (Swagger, Blueprint)**
*   **Blog (RSS Feed)**
*   **Status (RSS Feed)**
*   **Forum (RSS Feed)**
*   **Twitter (Twitter API)**
*   **Github (Github API)**
*   **Pricing (api-pricing)**
*   **Licensing (API Commons)**
*   **Questions (api-questions)**

I have been staying in tune with the API space using RSS feeds, and the Twitter and Github APIs for a couple years. I’m just now developing a deeper understanding of the overall API space through the generation of machine readable API definitions for popular APIs. I can’t do much on the API licensing front beyond launching [API Commons](http://apicommons.org), but I am working to define pricing with my [api-pricing](http://api-pricing.apievangelist.com) definition work, and also trying to capture the vital meta-data I need about API operations using [api-questions](http://api-qa.apievangelist.com).

This post ended up being longer than I anticipated, but it is helping me beter understand what some of the next steps are for not just APIs.json, but also my own monitoring of the space. My goal is to not just push forward the APIs.json definition, but push forward my understanding along the way. Who knows maybe I'll drag you along too! ;-)

Ok, back to work. I just needed to wrap up these two posts about APis.json that were lingering in my outgoing story and idea queue.
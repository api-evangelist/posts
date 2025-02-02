---
published: true
layout: post
title: Three Ways I Am Putting APIs.json To Work
image: https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org)

I had a conversation with some folks who are building a wikipedia of API definitions the other day, looking to employ formats like [Swagger](http://swagger.io), and [APIs.json](http://apisjson.org) to make an open, authoritative directory of machine readable API designs—something I can get behind 100%. I can even contribute the [700+ APIs.json files, and the 250+ Swagger files I have generated](https://github.com/kinlane/api-stack/tree/gh-pages/data) as part of my research.

When I have discussions about APIs.json folks, I always find it helpful to summarize the vision we have for the API discovery format, and described it in a short, concise way. This time around I was able to clarify the vision, in a way I hadn’t fully been able to articulate before. To help me remember what I said, I wanted to capture it here on the blog.Many people who have heard about APIs.json as a sitemap for your APIs, but in reality there are three distinct ways I'm putting APIs.json to work:

*   **Providing A Sitemap -** This is the simplest approach to using API.json, is to [create a simple index of the APIs that exist within a domain](http://apievangelist.com/2015/01/31/breaking-down-the-fitbit-apisjson-file/).
*   **Defining API Collection -** Defining a portable, machine readable collection of common, or disparate APIs, like I’ve done with my [SMS messaging API stack](http://apievangelist.com/2015/03/04/making-sure-my-api-roundup-stories-are-machine-readable-by-designing-them-as-apisjson-collections/).
*   **Establishing New Definitions -** A place to define the next generation of API definitions that support Swagger, Blueprint, adding licensing layer with [API Commons](http://apicommons.org), or maybe pricing, and the ability to answer service related questions.

It can be easy to call APIs.json a sitemap for APIs, but it is much more. It has a lot of potential for defining API collections while also making them portable, and machine readable by default. Where I really get excited for the potential is when it comes to defining new definitions that can work in conjunction with existing definitions, like Swagger and API Blueprint.

The last thing I want to leave you thinking about when it comes to APIs.json, is that it is designed to map out the world of public APIs we have, and the even larger layers of private APIs that exist behind the firewall, and make sense of this mess we’ve created. Then with a rough blueprint, we can all work to define some new definition formats that help us bridge where we are currently at, to the next step of where we should be.

In the near fture, I'm focused on educating API providers on how to use APIs.json as a sitemap, and help API evangelists, brokers, and tech bloggers understand the potential that arises when you define API collections using APIs.json. When it comes to establishing new definitions, I think this will take longer to play out. I’m working to help folks understand the importance of licensing their API using API Commons, and I’m also playing around with some alpha formats for identifying some of the common questions that arise around API operations, and how companies are monetizing their APIs, but there is a lot of work to be done before this bears fruit.
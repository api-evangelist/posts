---
layout: post
title: Quantifying The Data A Company Possesses Using APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/facebook_schema_feed_files.png
atomdate: 2017-05-05T22:00:00.000Z
tags:
  - Data
  - APIs
---
[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/facebook_schema_feed_files.png)](http://facebook.stack.network/)

[Profiling APIs always provides me with a nice bulleted list of what a company does or doesn't do](http://facebook.stack.network). In my work as the API Evangelist, I can read marketing and communications to find out what a company does, but [I find that profiling their APIs provides a more honest view of what is going on](http://apievangelist.com/2016/10/03/apis-can-give-an-honest-view-of-what-a-company-does/). The lack of a public API always sets the tone for how I view what a company is up to, but when there is a public API, profiling it always provides a nice distillation of what a company does, in a nice bulleted list I can share with my readers.

When I profile the APIs of companies like [Amazon](http://amazon.web.services.stack.network/), [Google](http://google.stack.network/), and [Microsoft](http://microsoft.stack.network/), I come out of it with a nice bulleted list of what is possible, but when I go even further, making sure each API profile has accompanying schema definitions, a nice list of what data company begins to emerge. When I profile an API using [OpenAPI](http://openapis.org) I always start by profiling the request layer of an API, the paths, parameters, and other elements. Next, I get to work describing the schema definitions of data used in these requests, as well as the structure of the responses--providing me with a nice bulleted list of the data that a company has. 

[You can see this in action with my Facebook API profiling work](http://facebook.stack.network/). There is a bulleted list of what is possible (API definition), as well as what data is sent, received, and stored (API schema). This work provides me with a nice look at the data Facebook gathers and stores about everyone. It is FAR from a complete picture of the data Facebook gathers, but it does provide us with a snapshot to consider, as well as a model we can ask Facebook to share more schema about the data points that they track. API and data specification formats like [JSON Schema](http://json-schema.org/), and [OpenAPI](http://openapis.org) provides us with a toolbox to help us quantify and share the details of what data a company has, and what is possible when it comes to using this data in web, mobile, and device based applications.

I fully aware of the boldness of this statement, but I feel that ALL companies should have a public API definition, including a catalog of the schema for data in use. Ideally, this schema would employ commonly used standards like [Schema.org](http://schema.org), but just having a machine-readable catalog of the schema would go a long way to helping pull back the curtain of how companies are using our data. I am not asking for companies to make data public, I am asking for companies to make the schema for this data public, showing what they track and store about us. I know many people view this as intellectual property, but in an increasingly un/insecure online world of digital privacy, we are going to have to begin pulling back the curtain a little bit, otherwise, a rich environment for exploitation and abuse will continue to develop.
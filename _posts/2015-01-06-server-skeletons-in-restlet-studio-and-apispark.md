---
layout: post
title: Server Skeletons In Restlet Studio And APISpark
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-api-server-skeletons.png
author:
  name: kinlane
tags: []
---
I was working in [APISpark](http://restlet.com/technical-resources/apispark/guide), playing around with different approaches to creating APIs for data stores i have in Amazon S3, Github, and in Google Spreadsheets. The cloud API deployment solution allows me to generate APIs from CSV, XML, JSON and spreadsheet stores in these locations, to a central API platform faster than I could even consider doing manually.

As I’m managing a simple data API I have, I see the option to generate a “server skeleton” in the toolbar, something that is also available to me when working in the [Restlet Studio](http://restlet.com/products/restlet-studio/). This is one of the benefits of creating machine readable API definitions like [Swagger](http://swagger.io) or [API blueprint](https://apiblueprint.org/) of your APIs. Restlet doesn’t generate server code for you from your file stores, it generates a machine readable definition of your file source, then lets you generate a “server skeleton” from that.

Server skeletons are not a fully functioning API for your file store, APISpark gives you that. These server skeletons are just scaffolding in Java or Node.js, that give you a starting framework for deploying an API beyond the Restlet / APISpark platform. You still have to wire things up to the file store, database, or other location of the data store—it is just the beginning.

I guess my goals with this post is to educate people that it is possible to generate server skeletons from APISpark, using common data sources, but I also just like the name. I have used the term server-side scaffolding, but I like server skeletons better. I think I will keep using it to describe what you can generate server side when you employ API definition formats like [Swagger](http://swagger.io) or [API Blueprint](/admin/blog/API blueprint).

_**Disclosure:** APISpark is an API Evangelist partner._

I was working in my APISpark interface, playing around with different approaches to creating APIs for data stores i have in Amazon S3, Github, and in Google Spreadsheets. The cloud API deployment solution allows me to generate APIs from CSV, XML, JSON and spreadsheet stores in these locations, to a central API platform faster than I could even consider doing by hand.

Anyways, as I’m managing a simple image API, I see the option to generate a “server skeleton”, something that is also available to me when working in the Restlet Studio (http://studio.restlet.com). This is one of the benefits of creating machine readable API definitions like Swagger or API blueprint of your APIs. Restlet doesn’t generate server code for you from your file stores, it generates a machine readable definition of your file source, then lets you generate a “server skeleton” from that.

Server skeletons are not a fully functioning API for your file store, APISpark gives you that. These server skeletons are just scaffolding in Java or Node.js, that give you a starting framework for deploying an API beyond the Restlet / APISpark platform. You still have to wire things up to the file store, database, or other location of the data store—it is just the beginning.

I guess my goals with this post is to educate people that it is possible to generate server skeletons from APISpark, using common data sources, but I also just like the name. I have used the term server-side scaffolding, but I like server skeletons better. I think I will keep using it to describe what you can generate server side when you employ Swagger or API Blueprint.
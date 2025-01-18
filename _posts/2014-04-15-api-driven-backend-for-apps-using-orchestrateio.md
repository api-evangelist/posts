---
layout: post
title: API Driven Backend For Apps Using Orchestrate.io
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/orchestrate-io/Orchestrate_small-logo-600x124.png
author:
  name: kinlane
tags:
  - Backend
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/orchestrate-io/Orchestrate_small-logo-600x124.png)](http://orchestrate.io/)

There is a great [post over on the Orchestrate.io blog about how they deployed a backend for the MarvelousDB app](http://orchestrate.io/blog/2014/04/08/explore-the-marvel-universe-with-orchestrate/), using data from the [Marvel API](http://developer.marvel.com/), allowing you to explore the world of Marvel comic book characters, through a simple web interface

As developers often face with valuable API resources, the Marvel API leaves a lot to be desired when it comes to available interfaces, data access, and rate limit restrictions. This is common with new APIs, where it takes time to understand [the right levers and dials to turn, that will make the API more usable](http://apievangelist.com/2014/04/10/the-levers-dials-and-switches-for-your-participation-in-the-api-economy/) by developers.

Even with these challenges, the Orchestrate team wanted to build the [MarvelousDB](http://marvelousdb.com/) so they could easily browse the world of Marvel comic book characters, putting the Marvel API to use, but also showing what is possible when using Orchestrate.io. The result is a great example of dynamically building a backend from API resources, in a way that delivers the access and performance you need.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/orchestrate-io/marvelous-db.png)](http://marvelousdb.com/)

To deliver the MarvelousDB the project employs [Node.js](http://nodejs.org/), [Express.js](http://expressjs.com/), [Orchestrate.js](https://www.npmjs.org/package/orchestrate), [Handlebars](http://handlebarsjs.com/) for templating, and [Q for async operations](https://www.npmjs.org/package/q). Using the Marvel API, they pull the data they needed to drive the app, pulling it into Orchestrate.io, giving them the data model and performance they needed, but also adding in capabilities like full text search on top of the data—something that isn’t available from the Marvel API alone.

MarvelousDB is an great example of what is possible via the API driven, [database as a service platform Orchestrate.io](http://orchestrate.io/), but is also a great model to follow when developing web or mobile applications that depend on APIs. Sometimes APIs aren’t structured exactly as we need, and we can use platforms like Orchestrate.io, to well…orchestrate exactly the backend experience we need to get the job done.
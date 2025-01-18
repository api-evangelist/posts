---
layout: post
title: I Pushed 1173 API Definitions To The API Stack
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_stack_screen.png
atomdate: 2017-05-04T19:00:00.000Z
tags:
  - Definitions
  - Definition
  - Stack
---
It has been over a year since I've pushed any API definitions to [my API Stack research](http://theapistack.com/), but I finally was able to prioritize time this week to make sure it was updated with the latest profiles I have in my API monitoring system. I pushed 1,173 companies who are doing interesting things with APIs. Not all of them have a traditional API program, but most of them do. It isn't all of the API related companies in my tracking system, but it's definitely the core group of what I'm watching.

Each API is profiled with [an APIs.json file](http://apisjson.org), providing an index of the name, description, tags, and other metadata, but also provides the URLs for documentation, Github, Twitter, and other key aspects of API operations. When there is an OpenAPI present, I publish a copy of it, with a URL for the resource, within each index. I have a bunch more OpenAPI definitions to publish, but they will take some considerable cleaning up before they are ready for prime time--look for regular updates now that I have the bulk of it updated.

[My API Stack runs 100% on Github, like the rest of my research](http://theapistack.com/). All the data behind is available in APIs.jsonÂ and OpenAPI, both as JSON and YAML--take your pick. [I prefer YAML being the core of everything and stored in the \_data folder](https://github.com/api-stack/api-stack), but I tend to also put up JSON and HTML facades on this data when it makes sense. The homepage for the project is just an HTML listing done in Liquid, driven from the YAML in the \_data folder, making it easy to play with different views of the APIs indexed as part of the collection.

At over 1000 APIs the repository is getting pretty unwieldy to commit each time, and i've begun the process of breaking up most of the larger APIs into their own repositories for individual management, projects like [AWS](http://amazon.web.services.stack.network/), [Google](http://google.stack.network/), [Microsoft](http://microsoft.stack.network/), and [Facebook](http://facebook.stack.network/). I will keep most of the lesser known APIs as part of the main API Stack collection, but will continue to slice off the APIs, as well as individual stacks of APIs like [email](http://email.stack.network/), [SMS](http://sms.stack.network/), and [news](http://news.stack.network/) into their own repositories for indepdenteÂ managment and evolution. I'm happy to finally have this updated, as I'm starting to find some really rich indexes of OpenAPI stashes on Github, and I want to start ingesting them as part of my larger index, something I didn't want to do until this was updated.
---
published: true
layout: post
title: >-
  Making My API Projects Forkable, Sharable In An IDE, Using Codenvy And
  APIs.json
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-codenvy-menu.png
author:
  name: kinlane
tags:
  - My
  - Project
  - IDE
  - APIs.json
  - Code
  - APIs
  - APIs.jso
---
[![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/api-codenvy-menu.png)](http://codenvy-api-101.apievangelist.com/)

I am playing around with making several stops along the API life cycle more accessible, and machine readable using APIs.json. To help me in my work, I am using [my own API stack](https://kin-lane.github.io/master/) as a proving ground, resulting in the [addition of Postman Collections](http://alpha.apievangelist.com/2015/04/07/including-postman-collections-in-my-apisjson-files/), [APIMATIC SDKs](http://alpha.apievangelist.com/2015/06/06/adding-apimatic-sdks-to-my-master-stack-and-including-in-each-apisjson/), and [API Science monitors](http://alpha.apievangelist.com/2015/06/06/adding-api-science-monitors-to-my-master-stack-and-including-in-each-apisjson/) over the last couple weeks. As I'm working through the 25 APIs I have, and almost 350 endpoints, making sure the Swagger definitions are complete, [the latest evolution of my API management service composition is applied](http://alpha.apievangelist.com/2015/06/08/my-api-service-composition-tiers/), APIMATIC SDKs up to date, and API Science monitors are setup, I stumbled across another critical stop along the life cycle--the IDE.

[I use Codenvy for my IDE](http://codenvy.com). It allows me to easily manage my numerous APIs, and applications that depend on my APIs, in a single cloud based development environment. The definitions for my API stack, both front and back-end lives on Github, but I use Codenvy work spaces to manage each repo, the runners to design, develop, and test out my APIs, and apps, at various stops along the life cycle. As I was doing my work, I saw how non-linear the life cycle ultimately could be, and how the IDE is a window for several stops I am concerned with along it.

While I am using Codenvy to design, develop, and deploy my own APIs, I am also using to evolve my own educational API integration projects. As part of this work, [I am currently developing what I consider an API 101 stack of APIs, a common set of APIs, anyone who is just getting started with API integration would want to learn about](http://codenvy-api-101.apievangelist.com/)\--I am starting with the classics:

*   Twitter
*   Twilio
*   Sendgrid 

I would consider these APIs to be messaging 101, and a good place to start for anyone looking to learn about APIs. While I am building this single [general API 101 project](http://codenvy-api-101.apievangelist.com/), I am looking to craft a number of these, and I don't want to have to do heavy lifting with each project, [so I'm standardizing how I define my projects using APIs.json](http://apisjson.org). Out of [my central API API (directory of APIs I track on)](https://kin-lane.github.io/api/), I am able to generate APIs.json files, [which I use in my API Stack work](http://theapistack.com), something that allows me to also aggregate APIs together into collections, or as I prefer to call them, "API menus".

Each API menu is meant to provide an aggregate view of all the APIs I wish to present as part of a project, and Github along with Codenvy allows me to turn an aggregate "API menu" into an API integration starter project--one that is forkable and sharable. So, back to my API 101 project, I am using APIs.json to aggregate Twitter, Twilio, and Sendgrid into a single project, which I am using as a map to all aspects of API integration across these very separate APIs. 

I am starting with the essential links, like to each portal, pricing, blog, Twitter, and Github pages. At this point, each project is just an aggregate API directory page, I want it to be more, so I am using APIs.json + Swagger to localize a handful of the important building blocks of any API integration process, such as:

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/codenvy/codenvy-logo.jpg)](https://codenvy.com/)

*   **Interactive Documentation -** Provide aggregate API documentation using Swagger UI, allowing developers to explore all APIs as they learn about them. [I have done this across all 25 of my APIs, something that needs some performance tuning, but provides a worthwhile aggregate API documentation experience](https://kin-lane.github.io/master/documentation/).
*   **Software Development Kits -** Using APIMATIC + SDKs.io I will be localizing relevant SDKs for each API, so if the project is a PHP project, I will include a copy of the PHP SDK.
*   **API Monitoring -** Bring in monitoring data for APIs that I include in the project using API Science. I can setup monitors, and using their API I can regularly pull data, and publish to drive JavaScript visualizations that are part of each project--keeping developers up to date.

Eventually I'd like to bring in other essential elements of API integration, like load testing, security, and other things developers will need, but I needed to start somewhere. I think I will tackle more user friendly items like an API walk-through for developers, and adding in more APIs, before I branch out into actually offering different services. My goal is to have a set of 101 projects that anyone can fork, and use to learn how to get started with API integration, in PHP, Python, Ruby, and Node.js. If I can make sure the projects are APIs.json driven, I can use the open format to provide the  backbone for each developers IDE project, in a way that keeps them connected, and in sync with any API changes.

I am sorry this post is so long, and a little rambling, but as I do with all of my work, I'm just trying to make sense of this, and bring some coherence to my work. I see the IDE playing several roles throughout the API lifecycle, from API discovery, to design, and development for the API provider, to potentially a starting point for API consumers to start their own projects, and as critical window throughout their own application development life cycle. 

Right now I am using Codenvy to manage the discovery, design, and development of my own internal APIs, but I also intend on using it as a sort of [devops version of my API broker visions](http://apievangelist.com/2014/10/10/exploring-the-possibilities-of-being-an-api-broker/), where I can easily assemble aggregate views of multiple APIs that can be used to develop a meaningful applications. Imagine assembling all the APIs that will be needed to develop a HIPAA compliant healthcare apps, or to bringing together the stack of valuable API resources a data journalist will need to be successful. My goal is to not just bring together the meta data for multiple APIs into one place, I want to localize documentation, SDKs, monitors, and other critical aspects of API operations as well.

Lots more thoughts to work through, thanks for reading.
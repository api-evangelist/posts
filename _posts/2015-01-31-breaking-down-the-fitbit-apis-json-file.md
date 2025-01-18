---
published: true
layout: post
title: Breaking Down The Fitbit APIs.json File
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/www_fitbit_com-apis_json.png
author:
  name: kinlane
tags:
  - APIs.json
  - APIs
  - APIs.jso
---
The quantified-self API [Fitbit](http://www.fitbit.com) recently added an [APIs.json for their domain](http://www.fitbit.com/apis.json). Their usage of APIs.json is a perfect, dead-simple, introductory example of how APIs can start putting APIs.json for their API platform. To help other providers understand, I wanted to take a look at the moving parts of Fitbits APIs.json, and to assist the conversation I labeled each part.

![](https://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/www_fitbit_com-apis_json.png)

> **A)** The heart of an APIs.json, providing a name, description, image, and tags for API platform and collection.  
> **B)** The technical details of where this APIs.json came from, which version it is, and when it was created and last modified.  
> **C)** Similar to the overall APIs.json collection, each API gets a name, description, image, and tags, but also as the default URL people should go to find the API, as well as the base URL actually make calls to the AP, which is used as the API identifier.  
> **D)** Properties collection for the API. This is where the flexibility in the APIs.json comes in, and you can define any type of URL you wish. Ideally we establish a core set of machine readable properties, but providing human links to blog, documentation, etc are essential too.  
> **E)** X-blog - a link to the Fitbit blog, providing a direct link that users can use to read the blog.  
> **F)** X-blog-rss-feed -a link to the RSS feed, providing a machine readable link to stories, and updates for the platform.  
> **G)** X-github - a link to the official Github account for the Fitbit platform, when you consider the Github API, this becomes a machine readable link to multiple aspects of API operations.  
> **H)** X-twitter - a link to the official Twitter account for the Fitbit platform, which again, using the Twitter API, this becomes a machine readable resources for accessing platform communications, updates, and resources.  
> **I)** Contact information for the Fitbit API team, which they route you to a forum. Some platforms put their Twitter handle here, and others put an email or phone number.  
> **J)** Maintainer for the APIs.json, which since it is Fitbit, helps provide authority, showing this APIs.json comes from the source, and is not a collection built by someone else, which includes the Fitbit API.  

The initial APIs.json from Fitbit is simple, and while there is potential for additions like a Swagger or API blueprint definition, or maybe terms of services, and client code, would be an excellent start.

So what now? What does this do for Fitbit?

It makes the definition of their API portable. It acts like a sitemap.xml for their API program, allowing search engines like [APIs.io](http://apis.io) to index Fitbit along with other APIs. You can also develop embeddable widgets, allowing the API information to be displayed on any site, and using Github and Twitter APis, and the Blog RSS, you could also pull other relevant information for display, and search within the widget, on any website or mobile application.

We are just getting going with APIs.json tooling, that will help add to the benefits of having one. I know of several projects in the works, developing internal APIs.json search engines, directories, and when you include API definitions like Swagger and API Blueprint in your APIs.json, things get even better. I’m using APIs.json for microservice discovery, navigation, and indexing, and as a way to connect API interfaces with containers that deliver on the promise an API is supposed to deliver.

I am seeing more API providers begin to deploy APIs.json for their providers, and I have two of the leading API management providers about to release APIs.json as a native part of their API management workflow, with others in the works. It is good to see APIs like Fitbit see the potential of indexing their API operations with [APIs.json](http://apisjson.org), something where the benefits are only going to grow over the coming years, as new tools, and services emerge that depend on APIs.json for engaging in the API economy.
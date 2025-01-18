---
layout: post
title: Another Strong API Implementation In Federal Government With OpenFDA
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/fda/open-fda-logo.png
author:
  name: kinlane
tags:
  - Federal Government
  - Government
  - Open
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/fda/open-fda-logo.png)](https://open.fda.gov/index.html)

I am really impressed with the quality of API deployments coming out of the federal government recently. I wrote about the [FBOpen API from 18F](http://apievangelist.com/2014/04/08/18f-shows-what-is-possible-in-government-with-fbopen-api/) a couple months ago, and the latest is the [OpenFDA API from the Food & Drug Administration](https://open.fda.gov/index.html). I’ve been watching the rollout of the API from behind the scenes for a while now, but with all my travel and speaking I haven't had time to write about or participate, but now that they've officially launch publicly, I wanted to help showcase what they've been up to at the FDA.

**Meaningful First Impression**  
When you first land on OpenFDA, you immediately understand what it does, thanks to the interactive visual on the homepage introducing OpenFDA, letting you know that it contains more than 3 million adverse drug event reports, with frequently reported indications for drug use among women, 55 to 90. This simple simple description, combined with an interactive visual that demonstrates the value contained within this government API resource, leaves a meaningful first impression upon arrival.

**Not Just Talk Of Being Open**  
We’ve misused the word open when it comes to APIs, so that I’m always skeptical when I see it use, but not in the case of OpenFDA. At the top of the home page, it gives three distinct examples of how OpenFDA embraces open, with data, code, and in community, and through making the API openly accessible, simply by requesting a key, in exchange for your email address.

**Explaining What It Is All About**  
OpenFDA explains what the OpenFDA is all about with a detailed about page, telling what the API does, who worked on the project, and how you can get involved. This type of background is often overlooked by API providers, requiring API consumers to have to piece together what the big picture is around an API—not with OpenFDA. On-boarding with the API starts with an overview of the project, and resulting API, then dropping you into what is needed to get signed up and begin using the API.

**Key Based Authentication**  
All that is required to get up and running using the OpenFDA API, is a valid email address, which in return you get an API key that you can use to make all API calls. Of course there are terms of service (TOS) and rate limit restrictions on each key, but this is standard operating procedure for APIs, especially one still in beta.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/elasticsearch/elastic-search-logo.jpg)](http://www.elasticsearch.org/)

**Deployed Using ElasticSearch**  
Where the FBOpen from 18F used [Apache Solr to deploy their API](https://lucene.apache.org/solr/), OpenFDA uses [search and analytics platform ElasticSearch](http://www.elasticsearch.org/) to deploy their API. I think both of these approaches reflect an interesting trend in government, which deploys APIs from existing, an sometimes messy data stores, allowing a more meaningful and useful layer to be added with very little effort.

**Powerful Search Capabilities**  
One of the benefit of using existing search solutions like ElasticSearch, is that you get some pretty sophisticated search tools, with very little work. OpenFDA starts with providing the basic query parameters for search, then also adds in query syntax, exact matches, grouping, dates, and ranges—providing very powerful search capabilities out of the box.

**Necessary Terminology To Get Started**  
When using the OpenFDA API, you are accessing drug events, which will require some necessary terminology to get up to speed on the world of pharmaceuticals, unless of course this is the world you already live in. OpenFDA provides the necessary, to get anyone up to speed on the terminology needed to understand what is contained the 3 million drug event reports.

**Interactive API Documentation With Visuals**  
Interactive API documentation, allowing API consumers to make live API calls while learning about an API, is fast becoming essential for any API. OpenFDA provides interactive documentation, making learning about the OpenFDA API a hands-on experience, but takes this ones step further by providing supporting data visualizations. I’ve seen a lot of interactive API documentation, and I don’t believe I've ever seen real-time visualizations to go with documentation—something I will explore further in a separate story.

**Essential Communication Channels**  
OpenFDA doesn't miss a beat in establishing the required communication channels for the API, providing updates on the platform in a blog format, available directly from the home page. Additionally OpenFDA employs Twitter, providing a real-time conversation around the valuable API resource, between the FDA and 3rd party consumers. Open, active communication channels, providing two-way communication between a platform and its consumers, is one of the [essential ingredients that make this whole API thing work](http://apievangelist.com/2014/05/06/remembering-why-this-whole-api-thing-is-working--apidays-berlin/).

[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/fda/introducing-open-fda.png)](https://open.fda.gov/index.html)

**Essential Support Framework**  
Building on top of OpenFDA platform updates, and Twitter communication channels, OpenFDA provides a multi-tiered support framework, allowing API consumers to ask questions on StackExchange, report bugs via Github, and send feedback via email. The OpenFDA support framework plus the open communication channels, establishes a robust feedback loop for the FDA around drug event report data.

**Active Github Presence**  
Github is an essential building block for all government APIs in my opinion, and OpenFDA agrees. You can find code samples for OpenFDA in a Github repository, submit bug reports via the Github issue management, and even the developer portal for the OpenFDA API runs using Github Pages, and underlying repository--nice start for your [Github account OpenFDA](https://github.com/fda).

**Realizing This Is More Than Just Tech**  
Showcasing the idea that APIs are way more than just the underlying tech is what API Evangelist is all about, and in my opinion OpenFDA gets this 100% with their API implementation. The OpenFDA technical implementation is built using existing technology, on top of valuable open government data, providing the necessary technical building blocks to be considered a modern web API. However, OpenFDA is so much more, delivering the best first impression possible, fritctionless on-boarding, and the required education you will need to put OpenFDA to work. OpenFDA also provides the necessary feedback loop to ensure an APIs success, with updates, Twitter, StackExchange, Github, and good ol email, there will be the necessary discussion around OpenFDA that is required move things forward.

The OpenFDA API is in beta, but already posses many of the essential building blocks for a successful API. I’m sure with some hacking I could find room for improvement in the API, and supporting operations. Something I will do as I have time, adding to the existing feedback I've been seeing from other beta users. For now, I’m impressed with the release, and when you bundle alongside other API initiatives like [FBOpen](http://apievangelist.com/2014/04/08/18f-shows-what-is-possible-in-government-with-fbopen-api/) and [We The People](http://apievangelist.com/2014/06/03/significance-of-the-we-the-people-api-being-first-modern-read--write-web-api-in-government/), it makes me very optimistic about what APIs are going to be able to accomplish in federal government.
---
published: true
layout: post
title: Gathering My Thoughts on API Discovery
image: https://kinlane-productions2.s3.amazonaws.com/postman-network.png
author:
  name: kinlane
tags:
  - Discovery
---
I am working to load up all my API discovery experiences into my head for some upcoming conversations. So I sat down and pulled together a summary of my API discovery research to date to help refresh my memory of what has happened and how we got here. API discovery is the one of the few layers of the API space that I am personally committed to helping move things forward and being able to see all the moving parts together helps me keep doing this. Let’s take a stroll through my memory of the evolution of API discover over the last fifteen years so that I can speak more coherently about all of this with a variety of folks.

### ProgrammableWeb

[ProgrammableWeb](https://www.programmableweb.com/) was the first source of being able to discover API, and in 2020 it is still the place you go to find APIs. Really not much has changed in the last fifteen years with ProgrammableWeb except for the owners and operators, and the look and feel of the site. It is still where you go to look for new and existing APIs, and where you find APIs when Googling.

[![](https://kinlane-productions2.s3.amazonaws.com/programmable-web.png)](https://www.programmableweb.com/)

I have fond memories of writing for ProgrammableWeb, and the site is still a great source of information for me, but I am left frustrated that PW hasn’t moved forward the API discovery conversation in any interesting ways over the years. I just think it is a missed opportunity, and reflects much about the API space that I think holds us all back.

### Mashape -> Rapid API

After ProgrammableWeb, the next evolution in the API space when it came to API discovery was Mashape, which is now known as [Rapid API](https://rapidapi.com/marketplace). The API marketplace was born out of the age of API management and provides basic management capabilities alongside with API discovery services. Providing a pretty rich set of APIs you can search and onboard with using the Rapid API marketplace.

[![](https://kinlane-productions2.s3.amazonaws.com/rapid-api.png)](https://rapidapi.com/marketplace)

Mashape and Rapid API definitely moved forward the API discovery conversation a bit, but much like ProgrammableWeb, it stopped there. RapidAPI is definitely giving ProgrammableWeb a run for their money when it comes to the SEO game, but there really hasn’t been much out of RapidAPI beyond the fundamentals of a simple API marketplace—-that is fine, but I’m always looking for forward motion.

### US Federal Government Data.json Index

Next I am going to take a little detour, but it relates to API discovery, I promise. In 2013 I went to work for the Obama administration to work on helping federal agencies publish their public data assets using APIs. I was dedicated to the Department of Veterans Affairs, but also spent time working with other agencies to follow the presidential mandate to publish what is called a data.json file in the root of the web site domains for the 15 executive agencies—-you can still find the fifteen files available today.

*   [HHS](https://healthdata.gov/data.json)
*   [Commerce](https://www.commerce.gov/sites/default/files/data.json)
*   [Veterans](https://www.data.va.gov/data.json)
*   [Interior](https://www.doi.gov/sites/doi.gov/files/data.json)
*   [Agriculture](https://www.usda.gov/sites/default/files/documents/data.json)
*   [Defense](https://www.defense.gov/data.json)
*   [Education](https://www2.ed.gov/data.json)
*   [Homeland Security](https://www.dhs.gov/sites/default/files/publications/digital-strategy/data.json)
*   [Housing and Urban Development](https://www.hud.gov/data.json)
*   [Labor](https://www.dol.gov/data.json)
*   [State](https://www.state.gov/data.json)
*   [Transportation](https://data.transportation.gov/data.json)
*   [Treasury](https://www.treasury.gov/jsonfiles/data.json)
*   [Justice](https://www.justice.gov/data.json)

[I have setup a workspace to pull all fifteen of the data.json files](https://www.postman.com/api-evangelist/workspace/us-executive-branch-data-json-indexes/overview) and I am working to process them to see what has been published, and understand the state of the work that I began back in 2013. I learned a lot about data discovery and the realities of doing it within large bureaucracies as part of this work, something that I brought home with me after my tour was done and began applying to what I wanted to see when it comes to mainstream API discovery.

### APIs.json / APIs.yaml

Shortly after leaving Washington DC I created a new API discovery format with Steve Willmott from 3Scale called [APIs.json](http://apisjson.org/). Like the data.json file, APIs.json would provide an discovery format for APIs, but I would evolve to better fit what I felt was needed to help move the API discovery conversation forward inside and outside of government. Providing a way to index individual APIs, collections of APIs, workflows, and other ways we are needing to discover and put APIs to work in automated and manual ways.

[![](https://kinlane-productions2.s3.amazonaws.com/apis-json.png)](http://apisjson.org/)

I am about to move the specification forward to the next version, and will keep working to evolve the specification. [I have over 40K APIs.json files for companies, organizations, institutions, and government agencies](https://github.com/api-network/organizations/tree/main/_data) I have identified of having an API, working with APIs, or being suspect of having an API. I will keep working to iterate upon each of the entries I have in the list as I continue to expand the ways in which I am crawling and discovering APIs.

### APIs.io

When we launched APIs.json we also launched [APIs.io](http://apis.io/), the first API search engine. We wanted an implementation of the API discovery specification to show what was possible pushing API providers to learn more about, and begin publish the specification as part of their operations. APIs.io was also beginning to poll for updates to APIs.json files it indexed, as well as beginning to consider how to search for new ones. Making it the first API search engine that allows you to search for APIs, while also looking for updates, and expanding the catalog in an automated way.

[![](https://kinlane-productions2.s3.amazonaws.com/apis-io.png)](http://apis.io/)

Sadly I know that APIs.io isn’t maintained. People are still adding APIs to it, but if the site goes down I am guessing there is nobody home to get back up and running. The site got lost in the shuffle of Red Hat acquiring 3Scale and then IBM acquiring Red Hat. While the site isn’t a living part of the API discovery conversation it still plays a role in shaping the discussion.

### API Specifications

Alongside the evolution of ProgrammableWeb, RapidAPI, and the introduction of APIs.json and APIs.io, a variety of specifications emerged to help improve the API lifecycle, which all contributed to making APIs a little more tangible and ultimately discoverable. Each of these API specifications have made it easier to find APIs, whether you are looking on the web, via Github, or somewhere on your local network.

*   [OpenAPI (Swagger)](https://www.openapis.org/) - OpenAPI provides an artifact that is discoverable and is organized by a variety of marketplaces, directories, and hubs to make them more discoverable.
*   [API Blueprint](https://apiblueprint.org/) - While API Blueprint hasn’t one the API specification war, it did significantly contribute to the API discovery conversation because .apib extensions are easy to find.
*   [RAML](https://raml.org/) - Like API Blueprint, RAML files are pretty easy to discover and find on Github and powering documentation, helping make APIs much more discoverable.
*   [Postman Collections](https://www.postman.com/collection/) - The Postman platform uses collections to define APIs, and with over 13M developers making collections, they’ve become a great way to find and share APIs.

API specifications provide a pretty critical building block when it comes to API discovery. These machine readable specifications describe the surface area of an API, while providing a title, description, and other metadata that help make an API more discoverable. Organizing API specifications into a marketplace, directory, or hub would turn out to be the next definitive step in the API discovery conversation.

### SwaggerHub

After Smartbear put Swagger into the Linux Foundation as OpenAPI, they launched [SwaggerHub](https://swagger.io/tools/swaggerhub/) to help API providers publish their OpenAPIs, making them available for discovery. The platform does as it says, provides a hub for Swagger, and now OpenAPI. Allowing developers to publish and search for different types of APIs, while also being able to edit and orchestrate using them across the API lifecycle.

[![](https://kinlane-productions2.s3.amazonaws.com/swaggerhub.png)](https://swagger.io/tools/swaggerhub/)

SwaggerHub is definitely an API discovery solution, but it focuses on it from a very different postition. It is more about editing and designing APIs, then making them available across multiple stops along the API lifecycle, including discovery. Building on top of the leading API specifications, but focusing on how it will be put to work across the API lifecycle.

### APIs.guru

Similar to SwaggerHub, another more open source approach emerged with [APIs.guru](https://apis.guru/), which also aggregates Swagger and OpenAPI definitions, but does it as a GitHub repository, with a simple search website built on top. Providing a rich catalog of OpenAPI definitions for some of the most known APIs. Providing a single place you can go to download or fork the OpenAPI for a variety of APIs, making search dead simple.

[![](https://kinlane-productions2.s3.amazonaws.com/apis-guru.png)](https://apis.guru/)

I like the APIs.guru approach. API discovery on Github makes sense to me. GitHub isn’t just for managing code and provides a wealth of features you can use to move forward different APIs using OpenAPI and other specifications. You can fork the entire APIs.guru OpenAPI catalog, making it pretty portable and forkable API discovery solution that you can run anywhere.

### Postman Network

As all of these other things were happening, Postman published their own API directory that is called the [Postman API Network](https://www.postman.com/explore). Providing a listing of different APIs which are defined by Postman’s own API specification called collections. Postman users can publish their collections to the API network, then consumers can browse APIs by category, or search for APIs by keyword.

[![](https://kinlane-productions2.s3.amazonaws.com/postman-network.png)](https://www.postman.com/explore)

With the latest release of the Postman platform you can now find APIs defined by OpenAPI, RAML, or GraphQL, as well as collections, monitors, mock servers, and other components in publish workspaces. Think Github repositories but designed for APIs. Additionally the search for the Postman network has evolved to provide a more detailed look at public APIs, but also APIs you have available privately within personal or team workspaces.

### More API Catalogs

Then we began to see more API directories and catalogs emerge. There has been a lot more than these which ultimately have gone away, but this shows a nice cross section of the types of API discovery solutions that have emerged--helping all of us find the APIs we are needing in our applications.

*   [Any API](https://any-api.com/)
*   [Smart API](https://smart-api.info/)
*   [Yappes](https://yappes.com/)
*   [API Stack](https://apistack.io/)
*   [Public APIs](https://public-apis.xyz/)

Most API directories launch, then receive waves of updates, then go dormant or disappear entirely. I’ve launched several directories myself, only to take them down once they go stale. Keeping API catalogs fresh and up to date takes a lot of work and there really isn’t much money to be made in doing--at least not yet.

### API Discovery with a Purpose

More recently we’ve begun to see a fresh wave of API discovery solutions emerge, but this crop of solutions isn’t just about simply finding APIs. It is about finding APIs so that you can meet some other more pressing needs like security or compliance. Here are handful of the new types of approaches to finding APIs, helping us make sense of our very abstract and invisible infrastructure we are increasingly dependent on that is growing exponentially around us.

*   [API Expert](https://www.api.expert)
*   [API Tracker](https://apitracker.io/)
*   [Traceable](https://www.traceable.ai/use-cases/api-discovery-and-risk-management)
*   [API Shark](https://www.cloudvector.com/api-shark/)
*   [Resurface](https://resurface.io/)
*   [Teejlabs](https://apidiscovery.teejlab.com/)
*   [Optic](https://useoptic.com/)
*   [Akita](https://www.akitasoftware.com/)
*   [Consul](https://www.consul.io/api-docs/discovery-chain)

You see a whole mix of why we need to discover APIs represented here. I feel like search to just discover an API isn’t enough to take API discovery to the next level. We are needing other reasons to discover the API infrastructure that is emerging all around us. APIs are often growing so fast that we can’t keep up with documentation and other more traditional ways in which we see and discover APIs.

### Just Google It

In reality, most APIs are discovered by a simple [Google search](https://www.google.com/). It is something that I think will always remain a reality, and something I think Google will continue to invest in to help us find the APIs we need. However, this will only help us surface the public APIs we are looking for. We will need solutions that help us find public APIs, but also the private and partner ones we depend on which aren't discoverable using a Google search.

![](https://kinlane-productions2.s3.amazonaws.com/google.png)

### The Joy of Finding New APIs

There really aren’t many ways to be introduced to new APIs on a regular basis. You can learn new ones by reading Techcrunch, tuning into the right slices of the Twitterverse or Reddit, but I’d say that [Product Hunt](https://www.producthunt.com/topics/apis?order=most-upvoted). You can also tune into ProgramambleWeb and get introduced to new APIs using their steady drip of new APIs, but I ultimately wish that there were more ways of being introduced APIs, but is probably the way that is the least likely to be monetizable.

[![](https://kinlane-productions2.s3.amazonaws.com/product-hunt.png)](https://www.producthunt.com/topics/apis?order=most-upvoted)

### The Further Semantics of Discovery

Adding another layer to this discussion, driving how APIs are discovered via Google and other search engines, are some machine readable building blocks that help us better describe the resources we are making available via APIs. There are a couple of ways we can markup, add metadata, and provide more detail that help make our APIs more discoverable by default.

*   [Schema.org](https://schema.org/)
*   [JSON-LD](https://json-ld.org/)
*   [WebAPI Discovery Group](https://www.w3.org/community/web-api-discovery/)

The challenge with all of these building blocks is that they take a lot of work to add to each of our APIs, and it is highly unlikely API providers are going to find the time to do it. So it is up to service and tooling providers to mark things up, and augment API definitions with common elements like Schema.org, JSON-LD, and other rich formats that help us make sense of the digital resources and capabilities we are making available.

### A Peak At Laneworks API Discovery

I have made several attempts to provide an API discovery solution over the years, and APIs.json only recently started to move forward again. I have a few other solutions that have come and gone, with the most recent evolution being part of my internal platform I have built which I simply call Laneworks. This latest investment is all about API discovery and finding new and interesting APIs on the web and investing them for inclusion into a directory.

*   **OpenAPI Search** - I crawl for Swagger and OpenAPI definitions to discover new APIs.
*   **Postman Collection Search** - I crawl for Postman collections to discover new APIs.
*   **Vocabulary / Dictionary** - I have a robust dictionary for seeding my searches for APIs.
*   **Domains** - I try to organize key words and phrases into different domains I can work within.
*   **GitHub Search** - I apply my dictionary to searching across Github for API artifacts.
*   **Bing Search** - I apply my dictionary to searching for APIs using the Bing search API.

I am retiring the v1 of my Laneworks approach to automating API discovery and I am reworking it to operate within a public workspace. I moved my couple thousand of OpenAPIs and resulting collection to a couple thousand public workspaces. Then I’ll be reworking this automation as Postman collections that run as monitors on a schedule, allowing me to discover, harvest, parse, rank, and organize via workspaces for discovery. When I have this on it tends to uncover a lot of interesting APIs, which can be easily catalogued, but the final touches on polishing and making available has always taken time, something I haven’t historically had--who knows what the future will hold.

### New API Discovery Tooling

I put this at the end because it just happened a couple weeks ago, but it is a very promising sign of progress in the API discovery conversation. It is a new open source discovery solution that is the most sophisticated open source approach I’ve seen to helping solve the discovery of both public and private APIs.

*   [Google API Registry](https://opensource.googleblog.com/2021/01/the-api-registry-api.html)

I always wondered why Google hand’t gotten into the API discovery game. They own the search market, and they have had a discovery solution for their own stack of APIs, but this open source approach shows the potential of something more. I still have to play with the Google API Registry to understand what it does, but I think it is significant enough to include in this API discovery narrative.

### Important Questions to Ask

The biggest challenge with API discovery to date is that there are many dimensions to grapple with. It isn’t just about search or discovery of APIs. It is about being found. It is about how well you describe what you do. It depends on who you are and what your motivations are. There are a handful of questions that I ask to help me understand the multiple dimensions of the API discovery conversation so that I can see it all.

*   Who is searching? Provider or Consumer?
*   Where are they searching? Publicly or Privately?
*   Why are they searching for APIs?
*   Is human searching, or is it a computer searching?
*   What is the popularity, quality, reliability of the API?

The answers to these questions will shift what API discovery is in any given moment. There are many other things to consider, but these areas reflect the common ways I have seen muddy the API discovery waters over the years. Making it something that is difficult to actually provide an easily solution for or explain to folks what it is all about. Honestly, I need to regular checkins on what is happening, and do regular refreshes so that I can even make some sense of things. Sometimes I feel like nothing has happened when it comes to API discovery, but once I do refreshes like this I realize just how much has been happening—-it is just more incremental.

### API Discovery Drivers

Now that I have all of this loaded up in my head I wanted to think a little bit about what drives API discovery. I want to understand the motivations behind why people are looking to discover APIs, and why those who own APIs are looking to have them discovered, and what is empowering these searches. I am looking to understand where in the lifecycle API discovery is needed most. Scanning down this post, here are the different elements I am thinking of as I try to make sense of where we stand with API discovery in 2021.

*   **Search** - Having a search box handy is central to API discovery, whether that is in application, via local network, or on the open web using a search engine.
*   **Specifications** - OpenAPI, AsyncAPI, Postman Collections, and JSON Schema will continue to play central role in the API discovery combination.
*   **Vocabulary** - Having a formal vocabulary for discovering new APIs in an automated way, while also using it to markup meta data for APIs is important.
*   **Domains** - Bounded contexts are critical for not just designing APIs, but also organizing and making them available as part of API discovery.
*   **Semantics** - APIs need to be augmented with rich semantics that help us understand the resources and capabilities being made available to users.
*   **Ease** - API discovery has to be easy no matter who you are, and something that has to consider personas, context, and much more under the hood.
*   **Security** - You can’t secure what you don’t know about, so security will continue to be one of the most important reasons why we do API discovery.
*   **Change** - Managing change across the enterprise is the biggest challenge teams face, and API discovery needs to consider how things change or not.
*   **Traceability** - We are in desperate need of the ability to trace out what is going on with the big ball of API yarn we’ve spread across our organizations.
*   **Vulnerabilities** - Finding the vulnerabilities across our infrastructure before bad people do is a top priority for the API discovery conversation.
*   **Compliance** - Being compliant when it comes to our API operations is a central concern for those in charge, especially as things keep expanding.
*   **Regulation** - When it comes to GDPR and other regulations emerging, we are increasingly going to be able to discovery exactly the resources we need.
*   **Monitoring** - Including monitoring data for all APIs as part of API discovery plays a big role in understanding the uptime and availability of resources.
*   **Testing** - Augmenting monitoring data, a range of testing data needs to be included as part of the search and discovery of each and every API.
*   **Reliability** - You want to find the APIs that are reliable when searching for 3rd party or public APIs, and find those that aren’t reliable internally.
*   **Quality** - The overall quality of each API across many dimensions has to be included in the overall API discovery index that powers what we discover.
*   **Automatic** - API discovery in all forms has to be automated. It is clear that we can’t count on humans to catalog and make APIs available for discovery.
*   **Public** - Despite concerns public APIs will continue to dominate and driver the API discovery conversation because it is the easiest to reference.
*   **Private** - Private API discovery is where we are seeing the most growth and demand for API discovery solutions in the last five years.
*   **Identity** - Who you are and what credentials possess, and the policies applied to those credentials will keep driving the API discovery conversation.
*   **Authentication** - Being able to apply or at least consider authentication at the API discovery layer will help reduce friction at the discovery layer.
*   **Editor** - Being able to edit API definitions, metadata, and other elements used in discovery seems to be a significant part of how we discover and work with APIs.
*   **Rating** - We are going to need a multi-part sophisticated approach to rating APIs so that we can focus on just what matters to use when it comes to discovery.
*   **Forkability** - The ability to fork the APIs we are discovering, and sort and rank based upon what we’ve forked and merged will continue to drive search.
*   **SEO** - The search engine optimization game will continue to drive the API discovery conversation, and keep shaping how we describe the APIs we have.
*   **Content** - The narrative for each API and it’s consumes and applications play a big role in helping us discover what is going on around each API.

I will have to simmer on these elements before writing much more. There is definitely a lot more to API discovery than organizing APIs into a catalog and providing a search mechanism, but I’m still not sure what the next evolution of API discovery will be. I definitely feel a lot better when it come to thinking nothing has happened with API discovery in the last decade-—plenty has happened. As always in the API space the trick is always about aggregating everything together and reading the tea leaves to figure out what is happening, and considering what the needs of API publishers and consumers are--which is what this blog post is all about.

I am always skeptical of my views of API discovery. I am an analyst, as well as a publisher and consumer of APIs. I am also API obsessed. Which puts me into a whole different category when it comes to wanting to find APIs. I don’t think the average business or technical person cares about APIs—-they are just trying to get work done in their worlds. I think search is central to API discovery, but there are a number of other mechanisms at work that will make that search relevant or not relevant to whole mix of different personas who have often competing motivations for why they want to find APIs, or have their APIs found. In the end, I think the default mode of API discovery is still just “Googling it”. I am not sure if this is more about web search and discovery than it is about API discovery, or there is something deeper to consider. Regardless, I think API discovery still needs to heavily consider this when it comes to API discovery for public APIs, but when it comes to private APIs I have other ideas-—more to come..
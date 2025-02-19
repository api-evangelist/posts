---
layout: post
title: What I Learned Crafting API Definitions For 66 Of The Amazon Web Services
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/amazon-aws-logo.jpg
atomdate: 2017-01-05T23:00:00.000Z
tags:
  - Definitions
  - Web
  - Definition
  - Amazon
  - Amazon Web Services
  - Services
---
[I just finished crafting API definitions for 66 of the Amazon Web Services](http://amazon.web.services.stack.network/). You can find [it all on Github](https://github.com/api-stack/amazon-web-services), indexed with [an APIs.json](https://raw.githubusercontent.com/api-stack/amazon-web-services/master/_data/apis.json). While I wish all API providers would do this hard work on their, I do enjoy the process because it forces me to learn a lot of each API, and the details of what providers are up to. I learned quite a bit about Amazon Web Services going through [the over 2000 paths that are available across the 66 services](http://amazon.web.services.stack.network/). 

**The Importance Of Consistency Across Teams**  
When you bounce from service to service within the AWS ecosystem you can tell that consistency is a challenge for Amazon. Consistency is lacking in API design, documentation, and other critical areas. This is something that is actually getting worse with some of their newer projects. While the older AWS APIs aren't the best possible design because they are: "?Action= based", at least they are consistent, and the documentation is using the same template. Some of the newer APIs are better designed, but their documentation is all over the place, and they are deviating from the consistency that seemed to exist with some of the older API efforts.  

**Clear Picture Of Essential Building Blocks**  
There are a variety of building blocks employed in support of AWS APIs, but there is a pretty clear definition of what are considered to be the essential building blocks that exist across ALL AWs APIs:

*   **Documentation** - Overall, developer, and API documentation to support the services.
*   **Getting Started** \- What you need to get up and going with any of the AWS solutions.
*   **Frequently Asked Questions** - A list of the frequently asked questions asked of each service.
*   **Pricing** - The pricing for using each service, with some providing a calculator to assist.

Amazon also provides a centralized blog, code, support, and what I'd consider to be essential building blocks, and some of the individual services do a good job linking to these resources, but these four are present across ALL of the AWS services, making them clearly considered to be essential.

**Relationship Between CLI and API**  
I think the relationship between CLI and API isn't discussed enough in the API sector but is something that is clearly strong across the AWS ecosystem. I'm seeing more API providers also offer a CLI alongside their API to support different developer tastes, but I think AWS does a good job investing equally in both approaches to putting AWS resources to work. In some cases, I'd say the CLI is better documented than the API, but this wasn't always the case--for the most part they were equally invested in.

**API First And Console Second**  
Another area I think Amazon provides an interesting case study is when it comes to the relationship between their human interface vs their API and CLI solutions. Many companies launch their human interface and secondarily provide the one for programmatic access, where Amazon delivered the API and CLI first, and their console came second. With current releases, this seems like it is in sync, but in early days they were API first. I appreciated the AWS teams that provided me a link directly to the AWS console, dropping right into the human interface for the API I'm working with. I have a ranking score of 1-3 for how coupled a company's API is with their human interface, and I'd put Amazon as a 2, with a moderate amount of coupling--with a ranking of 1 meaning that they are well linked (tightly coupled).

**Meet Other Folks Doing Interesting Things**  
One of the reasons I'm so transparent with all of my work is that it tends to alert folks to what I'm working on, and is something that attracts like-minded individuals who are headed in a similar direction. Shortly after tweeting out my work, Mike Ralphson ([@PermittedSoc](https://twitter.com/PermittedSoc)) shared his [Github repository of OpenAPI Specs](https://github.com/Mermade/openapi_specifications). This will save me a ton of work in verifying paths, making sure header, parameters, errors, and the underlying data model actually gets completed. I will be setting up scripts to keep my definitions in sync with his collection, as well as other folks collections that I'm keeping an eye on.

**Change Will Come With New Products & Services**  
I knew that AWS had released a number of new products at their annual conference this year, but I haven't had time to dive in. It was interesting to learn about their efforts in the area of machine learning, and Internet of Things. I also got a good look at their authentication, encryption, identity, access management, and other security-related efforts. I feel like this will continue to be an important offering for all the 1000lb gorilla tech giants--security. Us mere mortals will not be able to muster the resources to do at scale, and AWS scale companies will need a buffet of security solutions for API providers.

I'm going to continue refining [my Amazon Web Services Stack](http://amazon.web.services.stack.network/), but I'm going to also get to work on a similar one for Google and Microsoft. Once I have these three tech giants profiled from this API standpoint, I will step back and see what I can do to compare, and better understand where things are headed. This is tedious work, but I find it worthwhile because it is something that continues to push my understanding of the space forward. As I've said before, crafting an API definition of an API is one of the best ways to get to know an API in an intimate way, second to actually writing some code and integrating with an API for realz.
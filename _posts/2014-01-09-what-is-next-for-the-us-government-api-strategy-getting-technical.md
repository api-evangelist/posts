---
layout: post
title: What Is Next For The US Government API Strategy, Getting Technical
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Building-a-21st-century-platform-to-better-serve-the-american-people-1.png
author:
  name: kinlane
tags:
  - Strategy
  - Government
  - Technical
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/Building-a-21st-century-platform-to-better-serve-the-american-people-1.png)](http://federal-government.apievangelist.com/)

Data.gov has continued to evolve, adding data sets, agencies and features. With recent, high profile stumbles like with Healthcare.gov, it can be easy to fall prey to historical stereotypes that government can't deliver tech very well. While this may apply in some cases, I think we can confidently get behind the movement that is occurring at Data.gov, with 176 agencies working to add 54,723 data sets in the last 12 months.

I feel pretty strongly that before we look towards the future of what the roadmap looks like for Data.gov, we need to [spend a great deal of time refining and strengthening what we currently have available at Data.gov](http://apievangelist.com/2014/01/06/what-is-next-for-the-us-government-api-strategy/), and across the numerous government agency developer areas. Even with these feelings, I can't help but think about what is needed for the next couple years of Data.gov, in a more technical sense.

Maybe I'm biased, but I think the next steps for Data.gov is all API. How do we continue evolving Data.gov, and prepare to not just participate, but lead in the growing API economy?

**Management Tools for Agencies**  
We need to invest in management tools for agencies, commercial providers as well as [API Umbrella](https://github.com/NREL/api-umbrella). Agencies need to be able to focus on the best quality data sets and API designs, and not have to worry about the more mundane necessities of API management like access, security, documentation and portal management. Agencies should have consistent analytics, helping them understand how their resources are being accessed and put to use. If OSTP, OMB, GSA and the public expect consistent results when it comes to open data and APIs from agencies, we need to make sure they have the right management tools.

**Endpoint Design Tools for Data Sets**  
Agencies should be able to go from dataset to API without much additional work. Tools should be made available for easily mounting published datasets, then allow non-developers to design API endpoints for easily querying, filtering, accessing and transforming datasets. While data download will still be the preferred path for many developers, making high value datasets available via APIs will increase the number of people who access, that may not have the time to deal with the overhead of downloads.

**Common Portal Building Blocks**  
When you look through each of the [50+ federal agency /developer areas](http://www.data.gov/developers/page/developer-resources), you see 50+ different approaches to delivering the portals that developers will depend on to learn about, and integrate with each agencies APIs. A common set of building blocks is needed to help agencies standardize how they deliver their developer portals. Each individual approach might make sense within each agency, but as a consumer when you try to work across agencies it can be a confusing maze of API interactions.

**Standard Developer Registration  
**As a developer I need to establish a separate relationship with each federal agency. This quickly becomes a barrier to entry, one that will run off even the most seasoned developers. We want to incentivize developers to use as many federal APIs as possible, and by providing them with a single point of registration, and a common credential that will work across agencies will stimulate integrations and adoptions.

**Standard Application Keys**  
To accompany the standard developer registration, a standard approach to user and application keys is needed across federal agencies. As a user, I should be able to create a single application definition and receive API keys that will work across agencies. The amount of work required to develop my application and manage multiple API keys will prevent developers from adopting multiple federal agency APIs. Single registration and application keys will reduce the barriers to entry for the average developer when looking to build on top of federal API resources.

**Developer Tooling and Analytics**  
When integrating with private sector APIs, developers enjoy a wide range of tools and analytics that assist them in discovering, integrating, managing and monitoring their application's integration with various APIs. This is something that is very rare in integration with federal government APIs. Standard tooling and analytics for developers needs to become part of the standard operating procedures for federal agency /developer initiatives, helping developer be successful in all aspects of their usage of government open data and APIs.

**Swagger, API Blueprint, RAML**  
All APIs produced in government should be described using on of the common API definitions formats that have emerged like Swagger, API Blueprint and RAML. These all provide a machine readable description of an API and its interface that can be used in discovery, interactive documentation, code libraries and SDKs and many other uses. Many private sector companies are doing this, and the federal should follow the lead.

**Discoverability, Portable Interfaces and Machine Readable by Defaul**t  
As with open data, APIs need to be discoverable, portable and machine readable by default. Describing APIs in Swagger, API Blueprint and RAML will do this. Allowing APIs to be presented, distributed and reused in new ways. This will allow each agency to publish their own APIs, but aggregators can take machine readable definitions from each and publish in a single location. This approach will allow for meaningful interactions such as with budget APIs, allowing a single budget API site to exist, providing access to all federal agencies budget without having to go to each /developer area, but there are many more examples like this that will increase API usage and extend the value of government APIs. If you are familiar with data.json, think api.json.

**API Hubs**  
A new breed of API directories have emerged. API portals like [Mashape](https://www.mashape.com/) and [API Hub](http://www.apihub.com/) don’t just provide a directory of APIs, they simplify API management for providers and integration for API consumers. Federal agencies need to make their APIs friendly to these API hubs, maintaining active profiles on all platforms and keeping each API listed within the directories and actively engaging consumers via the platforms. Federal agencies shouldn’t depend on developers coming to their /developer areas to engage with their APIs, agencies need to reach out where developers are already actively using APIs.

**Consistent API Interface Definition Models**  
Within the federal government each API is born within its own agencies silo. Very little sharing of interface designs and data models occurs across agencies, resulting in APIs that may do the same thing, but can potentially do it in radically different ways. Common APIs such as budget or facility directories should be using a common API interface design and underlying data model. Agencies need to share interface designs, and work together to make sure the best patterns across the federal government are used.

**Webhooks**  
In the federal government APIs are often a one-way street allow developers to come and pull information. To increase the value of data and other API driven resources, and help reduce the load on agencies servers, APIs need to push data out to consumers, reducing the polling on APIs and making API integration much more real-time. Technologies such as the Webhook which allows API consumer to provide a web URL, in which agencies can push newly published data, changes and other real-time events to users, are being widely used to make APIs much more of a two-way street.

**Hypermedia**  
As the world of web APIs evolve there are new approaches emerging to delivering the next generation of APIs, and hypermedia is one of these trends. Hypermedia brings a wealth of value, but most importantly it provides a common framework for APIs to communicate, and provide essential business logic and direction for developers, helping them better use APIs in line with API provider goals. Hypermedia has the potential to not just make government assets and resources available, but ensure they are used in the best interest of each agency. Hypermedia is still getting traction in the private sector, but we are also seeing a handful of government groups take notice. Hypermedia holds a lot of potential for federal agencies, and the groundwork and education around this trend in APIs needs to begin.

**Evangelists Present**  
The first thing you notice when you engage with an government API, is nobody is home. There is nobody to help you understand how it works, overcome obstacles when integrating, there is no face to the blog posts, the tweets or the forum replies. Federal government APIs have no personality. Evangelists are desperately needed to bring this critical human element to federal government APIs. All successful private sector APIs have an evangelist or an army of evangelists, spreading the word, supporting developers, and making things work. We need open data and API evangelists at every federal agency, lettings us know some one is home.

**Read / Write**  
I know this is a scary one for government, but as I said above in the webhooks section—APIs need to be a two way street. There are proven ways to make APIs writeable without jeopardizing the integrity of API data. Allow for trusted access, let developers prove themselves. There is a lot of expertise, “citizen cycles”, and value available in a developer ecosystem. When a private sector company uses federal government data, improves on it, the government and the rest of the ecosystem should be able to benefit as well. The federal government needs to allow for both read and write on APIs—this will be the critical next step that makes government APIs a success.

These are just 14 of my recommendations for the next steps in the API strategy for the federal government. As I said earlier, [none of this should be done without first strengthening what we all have already done in the federal government around open data and APIs](http://apievangelist.com/2014/01/06/what-is-next-for-the-us-government-api-strategy/). However, even though we need to play catch up on whats already there, we can’t stop looking towards the future and understand what needs to be next.

None of these recommendations are bleeding edge or technology just for technology sake. This is about standardizing how APIs are designed, deployed and managed across the federal government, emulating what is already being proven to work in the private sector. If the federal government wants to add to the [OpenData500](http://www.opendata500.com/), and establish those meaningful stories needed to deliver on the promise of open data and APIs--this is whats needed.

With the right leadership, education and evangelism, open data and APIs can become part of the DNA of our federal government. We have to put aside our purely techno-solutionism view of #OpenGov and realize this is seriously hard work, with many pitfalls, challenges, politics and that in reality it won’t happen over night. However, if we dedicate the resources needed, we can not just change how government works, making it machine readable by default, we can forever alter how the private and public sector partners.
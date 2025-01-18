---
layout: post
title: App Design With An Acquire, Process, Publish API Architecture
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/seabourne-logo-2013.png
author:
  name: kinlane
tags:
  - Design
  - Process
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/seabourne-inc/seabourne-logo-2013.png)](http://seabourneinc.com/ "Seabourne")

I'm tracking on a new wave of application frameworks and API centric architecture patterns, that are not just helping deliver the next wave of web & mobile apps, but also bridging, aggregating and providing interoperability and transformations between APIs platforms.

One company I've been watching closely is [Seabourne](http://seabourneinc.com/ "Seabourne"). The Seabourne team has an approach to application development that follows a very interesting set of principles:

*   **Information Flows Instead of Pipelines -** Information operates in ‘flows’ where inputs and outputs are flexible and happen at any point. Flows are fluid and flexible, unlike structured, point-to-point pipelines
*   **Data has Multiple Owners -** Information flows are composed of multiple streams of data owned by different partners and vendors. Any process must accommodate multiple canonical sources for different information
*   **Use APIs to Move Information -** By using APIs to move information around, we decouple the data from the underlying technology and vendor, and make it possible to combine information from different technologies. APIs provide a flexible, low cost base to grow the system and meet changing needs
*   **Integrate Data Across Systems -** Information lives on multiple systems inside and outside the organization. There is tremendous value to be had from combining multiple data sources together into a single information stream
*   **Translation Rather Than Standardization -** Information is stored in multiple structures and formats. Any effort to manage information should focus on translating between structures rather than trying to develop a common schema

I think that pretty much describes the challenges we face building web and mobile apps today, and Seabourne's approach isn’t just about building apps, it is about organizing resources from multiple providers to build the best app you can. To see it in action you have to check out the project they just implemented using their approach called [GovInfo](http://govinfo.io/).

Using GovInfo, anyone can sign up to receive alerts from more than 100 different federal agency websites. GovInfo gets its information from a large number of sources ranging from RSS, APIs or scraped from HTML sources. Once acquired, the framework de-dupes, cleanses and normalizes the data as needed, then makes available for publishing or pushing out via email, SMS or other means.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/seabourne-inc/govinfo_diagram.png)](http://seabourneinc.com/ "Seabourne")

The Seabourne approach is not just [rethinking extract, transform and load (ETL)](http://seabourneinc.com/2013/02/08/rethinking-etl-for-the-api-age/), but also makes your app platform centered around acquire, process and publish, in a way that improves flexibility, centralizes processing rules for all incoming information and reduces the amount of time it takes to add new sources of data, all while providing scalability, in a very granular way.

I’ve been watching Seabourne evolve and constantly refine their approach to distributed application design ranging from their [deployment of the FCC web site](http://blog.programmableweb.com/2011/04/06/everything-should-be-an-api-says-fcc/), to the [launching of MyFCC](/2011/12/20/the-fcc-lanches-api-curation-platform-called-myfcc/ "launching of MyFCC"), and now the next iteration of their platform driving GovInfo. I’ll keep following what they are doing with their [AP2 approach](http://seabourneinc.com/2013/02/08/rethinking-etl-for-the-api-age/) and watch the [tools](http://seabourneinc.com/wp-content/uploads/2013/case-studies/Seabourne-Information-Management.pdf) and best practices that are a result of their innovative approach to application development using APIs.
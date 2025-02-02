---
published: true
layout: post
title: Why Are APIs Better Than Direct ODBC / JDBC Connections?
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/conversation_questions_318_56224.png
author:
  name: kinlane
tags:
  - Database
  - JDBC
  - ODBC
---
I had someone email me a question the other day, asking about how they should respond when someone asks them why APIs are a better choice that using a direct ODBC / JDBC database connection. Before I wrote a piece on it I wanted to tap my network of API geeks to see what other opinions might be lurking out there. My network is always a good place to start when it comes to looking for relevant, experienced answers.

> Questions from the field: Why Are APIs Better Than Direct ODBC / JDBC connections? -- I have my opinions, but I want to hear yours before I write up the story in response. [pic.twitter.com/8MogddSUcM](https://t.co/8MogddSUcM)
> 
> — API Evangelist (@apievangelist) [October 28, 2019](https://twitter.com/apievangelist/status/1188877810116517888?ref_src=twsrc%5Etfw)

> Databases store end results, static state. APIs share state plus actions.
> 
> — Matt Bishop (@MattBishopL3) [October 28, 2019](https://twitter.com/MattBishopL3/status/1188900636701556736?ref_src=twsrc%5Etfw)

> Why do I just want to turn the key and start my car as opposed to stick two hot wires together?  
>   
> Abstractions help make my life easier.
> 
> — Dan Moore (@mooreds) [October 28, 2019](https://twitter.com/mooreds/status/1188922133348438016?ref_src=twsrc%5Etfw)

> Easier instrumentation and insightful usage analytics. And also the security point mentioned above - defense in depth.
> 
> — Evan Scheessele (@evansche) [October 28, 2019](https://twitter.com/evansche/status/1188908906312945664?ref_src=twsrc%5Etfw)

> Better safeguards, tracking, and overall much easier to integrate with applications. Almost anything can make a web call (assuming http apis), that is for better, or worse (like IoT).
> 
> — Dev Odyssey (@Dev\_Odyssey) [October 29, 2019](https://twitter.com/Dev_Odyssey/status/1189003982380982272?ref_src=twsrc%5Etfw)

> APIs shift the focus from data structure implementation to message-based system interactions
> 
> — LaunchAny / James Higginbotham (@launchany) [October 28, 2019](https://twitter.com/launchany/status/1188902012764639232?ref_src=twsrc%5Etfw)

> so much yes to this. services are not about providing access to data. they are about exposing ways to interact with capabilities. these things are less similar than it initially sounds like...
> 
> — Erik Wilde (@dret) [October 28, 2019](https://twitter.com/dret/status/1188906978057183232?ref_src=twsrc%5Etfw)

> This is an absolutely necessary discussion, because the answer, strangely, is not self-evident at all.  
>   
> It is incredible how non-intuitive APIs are, even for insiders...
> 
> — stankov (@stankov) [October 28, 2019](https://twitter.com/stankov/status/1188933770470187013?ref_src=twsrc%5Etfw)

> Copying my RT Incase you missed it here.  
>   
> Only one of the nearly countless ways to use APIs is analogous to database access.  
>   
> What do you lose? Everything else.
> 
> — Ergosphere (@hibaymj) [October 28, 2019](https://twitter.com/hibaymj/status/1188935735212232710?ref_src=twsrc%5Etfw)

> Always depend on an interface, not an implementation
> 
> — Christophe Bornet (@cbornet\_) [October 28, 2019](https://twitter.com/cbornet_/status/1188923035358814209?ref_src=twsrc%5Etfw)

> Simplicity, security
> 
> — Mubashir Koul (@koulmubashir) [October 28, 2019](https://twitter.com/koulmubashir/status/1188889625953091585?ref_src=twsrc%5Etfw)

> Traversing a firewall is easier with over HTTP, especially with API Management gateways to protect (ie modern auth) and govern (ie rate limit). ODBC tightly couples to current DB schema, brittle when upgrades introduce schema changes. Should I go on?
> 
> — Adam Wyss (@AdamWyss) [October 29, 2019](https://twitter.com/AdamWyss/status/1189052238322262019?ref_src=twsrc%5Etfw)

I definitely agree with my network on this. Seeing an API as simply database access is a very limited understanding of what APIs are capable of. The key word being "capability" here. It is natural for developers to begin their journey with simple Create, Read, Update, and Delete (CRUD) APIs, but it really is the 101 of what APIs are capable of. As my network says, APIs aren't about the data being stored on the backend, it is about access to that data, sharing it, interactions with it, and the capabilities this data makes possible--this is why thoughtful API design is so critical to APIs having the impact we envision.

ODBC / JDBC is about connecting to data stores. It isn't about realizing message-based system interactions as James articulates. API interactions are much more than the data exhaust produced when putting these API capabilities to work. API requests, events, and streams are not simply database queries. Sure, they can possess many of the same characteristics as a database query, but this is a pretty limited, and unimaginative view of how API design shapes how desktop, web, mobile, and device applications do what they do--going well beyond what has been capable with ODBC / JDBC integrations.

Going neyond what many database-centered folks will see as just see as philosophical differences, until they actually spend time delivering modern APIs, I feel that I should discuss some of the more tangible benefits of APIs--exploring other areas where APIs go beyond what you can do with ODBC / JDBC.

*   **Authentication** - You have more authentication standards available for APIs.
*   **Security** - It is more secure to abstract away the database driving your apps.
*   **Entitlements** - There is more flexibility in defining who has access to which APIs.
*   **Rate Limits** - APIs allow for more fine grain rate limiting for access to APIs.
*   **Transformations** - You can more easily transform calls made to each individual API.
*   **Analysis** - There are more analysis opportunities available at the API layer.
*   **Caching** - You can improve efficiency by caching API responses using HTTP.

These are just a handful of the more tangible benefits of going API over direct ODBC / JDBC integration. APIs reflect the current web-based world we live in, and providing direct database access by applications over the web doesn't reflect this modern reality. With APIs, we have much more visibility and observability into this layer of our application, going beyond anything we've had with direct application to database integrations. The awareness that has come from this shift in how we deliver the capabilities we need in our applications has allowed us to define and deliver entirely new types of products we couldn't realize at the database connector layer.

I have over 30 years of experience as a database administrator and developer. What caught my attention between 2006 and 2010 while using web APIs wasn't just about everything listed here. It was also about bringing me out of my database silo and forcing me to be closer to the business solutions I was looking to provide on top of my databases using APIs. Forever changing how I engage with application developers and end-users, helping me be able to see entirely new ways of doing business, and establish an awareness of how business resources can be put to work--developing an awareness I never was able to establish from building applications directly on top databases.
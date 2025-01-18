---
published: true
layout: post
title: A Postman Collection for Managing the Life Cycles Of My APIs
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/udnie-IMG_2410.jpg
author:
  name: kinlane
tags:
  - Collections
  - Lifecycle
---
I had grown weary of just researching, talking, and teaching about the API lifecycle over the last ten years as the API Evangelist. This was one of the major motivators for me to join the Postman team. I want to take my knowledge of the API life cycle and work to make sure the rubber meet the road a little more when it comes to actually realizing much of what I talk about. I began investing in this vision over the holidays [by crafting a Postman collection that isn't for defining a single API, it is meant to define the life cycle of a single API](https://documenter.postman.com/view/35240/SWLb99h1?version=latest). I can manage multiple stops along the API life cycle already with Postman--I just wanted to bring it all together into a single machine readable collection that uses the Postman API, but also other APIs I use to orchestrate my world each day.

My [API life cycle collection](https://documenter.postman.com/view/35240/SWLb99h1?version=latest) is still a work in progress, but it is coming together nicely, and is the most tangle format of what I have been in my head when I think of [Postman as an API delivery platform](https://www.postman.com/). This collection centers around managing an OpenAPI truth within Postman, then moving this API definition down the life cycle, and even deploy development or production versions of each API using AWS API Gateway. Of course everythig is API-driven, and designed to work across many different APIs to define, deliver, and manage any single API, maintaning a definition of the life cycle within a single Postman environment that can be used to bridge multiple API platform via a single collection.

So far I have over a hundred individual capabilities defined as Postman requests, and organized into folders that are broken down by different stops along the API life cycle. I'm still moving them around and abstracting away the friction, while I work hard to define the most sensible workflows with each of my API life cycle capabilities.

*   **Define**
    *   **Workspaces** (Postman)
        *   GET Single Workspace
        *   GET All Workspaces
        *   POST Create Workspace
    *   **Organizations** (GItHub)
        *   GET Organizations
        *   GET Organization
    *   **Repository** (GitHub)
        *   POST Add User Repository
        *   POST Add Org Repository
        *   GET Repository
        *   GET Repositories
    *   **APIs**
        *   GET Single API
        *   GET Get all APIs
        *   GET Get All API Versions
        *   GET Get An API Version
        *   GET Get API Schema
    *   **Collections**
        *   GET All Collections
        *   GET Single Collection
        *   POST Create Collection
        *   PUT Update Collection
        *   DELETE Delete Collection
    *   POST Create Manually
    *   GET OpenAPI Using Name and Version
    *   GET Sync OpenAPI To GitHub Repository
    *   GET Sync OpenAPI From GitHub Repository
*   **Environments** (Postman)
    *   GET Environments
    *   GET Environment
    *   POST Environment
    *   PUT Environment
    *   DELETE Environment
*   **Design** (Postman)
    *   POST Add Resource
    *   POST Add Schema Property
    *   POST Add Query Parameter
    *   POST Add Header
    *   POST Add Response
*   **Documentation** (Postman)
    *   POST Sets Documentation URL
*   **Mock** (Postman)
    *   GET Mocks
    *   GET Mock
    *   POST Mock
    *   DELETE Mock
*   **Database** (AWS DynamoDB)
    *   POST List Tables
    *   POST Add Table
*   **Compute** (AWS Lambda)
    *   GET Funtions
    *   GET Function
*   **Deploy** (AWS API Gateway)
    *   GET List
    *   GET Details
    *   GET Build
    *   POST Publish
    *   POST Deploy
    *   GET Deployment
    *   GET Export OpenAPI 3.0
    *   DELETE Delete
*   **Manage** - AWS API Gateway
    *   **Usage Plans**
        *   GET All
        *   GET Single
        *   POST Add
        *   GET Get Usage
    *   **Keys**
        *   GET All
        *   GET Single
        *   POST Add
        *   POST Usage Plan Keys
*   **Logging** (AWS API CloudTrail)
    *   GET Trails
    *   GET Trails Cop
*   **Encryption**
    *   GET List CloudFlare Certificates
    *   GET AWS API Gateway Client Certificates
    *   POST Generate Client Certificate
    *   GET AWS API Gateway Client Certificate
    *   DELETE AWS API Gateway Client Certificate
*   **DNS**
    *   GET Zones (CloudFlare)
    *   GET DNS Records (CloudFlare)
    *   GET Domain Names (AWS API Gateway)
    *   GET Domain Name (AWS API Gateway)
*   **Portal** (GitHub)
    *   POST Add Org Repository
    *   POST Add User Repository
    *   POST Update README
*   **Road Map** (GitHub)
    *   GET All Road Map Items
    *   POST New Road Map Item
    *   GET Single Road Map Item
    *   PATCH Mark Complete
*   **Change Log** (GitHub)
    *   GET All Change Log Entries
    *   POST New Change Log Entry
    *   GET Single Change Log Entry
    *   PATCH Close Change Log Entry
*   **Issues** (GitHub)
    *   GET All Issues
    *   POST New Issue
    *   GET Single Issue
    *   PATCH Close Issue
*   **Support** (GitHub)
    *   GET All Tickets
    *   POST New Ticket
    *   GET Single Ticket
    *   PATCH Close Ticket
*   **Communication** (GitHub)
    *   **Blog**
        *   POST Blog Post
        *   GET Blog Posts
        *   GET Blog Post
    *   **Twitter**
        *   POST Tweet
        *   GET Twitter Tweet Search
        *   GET Twitter User Search
*   **Testing** (Postman)
*   **Monitoring** (Postman)
*   **Performance** (Postman)
*   **Security**
*   **Discovery** (GitHub)
    *   POST Update APIs.json
*   **Governance**
    *   **Design**
        *   Info
        *   Paths
        *   Methods
        *   Parameters
        *   Responses
        *   Schema
    *   **Mock**
        *   GET Check To See If Their Is A Mock Server
    *   **Develpment**
        *   GET Check To See If Their Is A Development Server
    *   **LIcense**
        *   GET Validate the License for the API
    *   **Production**
        *   GET Check To See If Their Is A Production Server
    *   **Reporting**
        *   GET Life Cycle Outline
*   **Deprecation**
    *   GET Set Sunset HTTP Header
    *   POST Add Deprecation Date To Road Map

To help me refine [this API life cycle collection](https://documenter.postman.com/view/35240/SWLb99h1?version=latest) a little more I am going to apply to around ten individual APIs I want to move forward. Three of them are for demonstration purposes, but the rest are menat for a research project I am working on. My initial goal here was to flesh out an API design first process for delivering the resources I need, but then quickly moved to being able to actulaly deliver, then rapidly evolve these resources in both development and produciton environments. They aren't resources that will ultimately see a lot of activity, or true production scale, but they will be used enough to flesh out my API life cycle in a meaningful way. 

In addition to helping me realize a more API-driven approach to the API life cycle, there are two major takeaways for me from this project so far. First, I am able to go from an OpenAPI truth within Postman, to deploying a usable API using AWS API Gateway and AWS DynamoDB within just a couple clicks. Second, I was able to start delivering a meaningful set of API governance requests that I organize as part of the governance section of this collection--helping me look for some of the most common things that go wrong with my API design. There are many other little nuggets in here for me, which I will be writing about separately. There is a lot to unpack here, and I will be digging in via stories on the blog over the next couple of weeks.
---
layout: post
title: >-
  Swagger Represents The API Value Possible, Postman Is Unit Readied As
  Transaction, And HAR Could Be Evidence Of Value Actually Having Occurred
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/gears-api-economy-swagger-postman-api-science.png
author:
  name: kinlane
tags:
  - Postman
  - Value
  - Swagger
  - Evidence
---
I am working through each of [my 25 APIs](https://kin-lane.github.io/master/index.html) right now, tackling a list of changes that include some adjustment for an [evolution in my service composition](http://apievangelist.com/2015/06/08/my-api-service-composition-tiers/), generating [Postman collections](https://www.getpostman.com/docs/collections), [APIMATIC SDKs](https://apimatic.io/), and [API Science monitors](https://www.apiscience.com/)\--for each API. I was talking through the process of setting up my API monitors, and how I will be [generating status pages for each API portal,](https://kin-lane.github.io/api/status/) with John Musser ([@johnmusser](https://twitter.com/johnmusser)), and he reminded me of the [HTTP Archive (HAR) format](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/HAR/Overview.html). 

HAR is all about providing an archival format for HTTP transactions that can be used by a web browser to export detailed performance data about web pages it loads, which got me thinking about how we can use the existing format to record and quantify the exhaust from our increasing API activity. There are some areas of the HAR specification that wouldn't apply to this, but for the most part, it provides an existing format for collecting, evaluating, and potentially understanding the value we generate (or not) via our APIs in real-time.

As I work through each of the stops along my API lifecycles (Postman Collections, SDKs, monitors, etc), I'm working to make sure the input and output from the stop is indexed as part of the APIs.json collection. [In short, you will be able to find the Postman Collections, APIMATIC SDKs, and API Science monitors via the APIs.json index for each of my 25 APIs.](https://kin-lane.github.io/api/) Right now APIMATIC SDKs and API Science monitors just link to HTML pages for getting at details, but eventually I am looking to make this detail machine readable as well--this is why John and I started discussing HAR.

To help me wrap my head around possiblities, I wanted to elevate myself and look at the the role HAR could play in the index of my APIs, and potentially the wider industries that I am building [APIs.json](http://apisjson.org) collections for. As I look at the core of each of my APIs, Swagger very much represents the value that is possible with each of my APIs, while I see each Postman Collection as a unit of this value that is ready to be executed as a transaction, and HAR has the potential to be the evidence thta this value transaction actually occurred. 

The introduction of HAR into my APIs.json index provides an import linkage for me, in preparing each API for the API economy. Steve Willmott's and mines objective with [APIs.json is to index APIs](http://apisjson.org), preparing them for a more run-time engagement in the API economy, acknowledging we need a full machine readable picutre of what an API resource delivers, ranging from the what that API does, to the cost and licensing of that resources. API definitions like [Swagger](http://swagger.io) and [API Blueprint](http://apiblueprint.org) provide an important way to quantify this value pre-transaction, Postman Collections provide the snapshot right at integration or client execution, and HAR could be used a record that this transaction occurred--think of this a trillion times over, in the context of a global API economy.

I will keep working through these thoughts, but I see API economy level potential here, and [even opportunities for evolving the patent process for at least the digital side of the patent equation](http://patents.apievangelist.com). Meaning, when you file a patent, diagrams aren't enough in the API economy, you need an API definition showing what is possible, a Postman Colleciton demonstrating it can be run, and a HAR file from a certified provider like API Science, as a timestamp showing that this value was demonstrated on this date and time. 

Ok, enough geeking out on that, back to preparing for [my Internet of Things talk at API Days San Francisco this week.](http://sf.apidays.io/)
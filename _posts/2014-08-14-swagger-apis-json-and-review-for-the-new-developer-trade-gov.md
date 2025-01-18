---
published: true
layout: post
title: Swagger, APIs.json, And Review For The New Developer.Trade.gov
image: >-
  https://s3.amazonaws.com/kinlane-productions2/federal-government/trade-gov/developer-trade-gov.png
author:
  name: kinlane
tags:
  - Review
  - APIs.json
  - Swagger
  - APIs
  - APIs.jso
---
[![](https://s3.amazonaws.com/kinlane-productions2/federal-government/trade-gov/developer-trade-gov.png)](https://developer.trade.gov/)

I got a gentle ping today, as I often do when there is a new developer hub or API launched in the federal government. This time it was located within the Department of Commerce, for the International Trade Administration, and was a new developer area, with five APIs at [Developer.Trade.Gov](https://developer.trade.gov/).

I quickly went through the new developer area, which I consider passing the test for a minimum viable developer area, possessing all the essential building blocks an API developer hub needs. The only places I feel it fell short is in the feedback loop, and providing machine readable definitions for each of the five APIs.

I submitted my feedback as Github issues, on the repository for the developer hub, but when it comes to machine readable definitions for each of the five APIs, I know how easy this is, so rather than just submit issues, I figured I'd get to work generating the machine readable API definitions for Developer.Trade.Gov, and demonstrate what was possible. As I do with all of my work, I setup a [subdomain, and Github repository](http://developer.trade.gov.apievangelist.com/), to store all of my work, and got to work on each of the five APIs:

*   [Market Research Library](https://developer.trade.gov/market-research-library.html) ([Swagger](http://developer.trade.gov.apievangelist.com/definitions/market-research-library.json))
*   [ITA Offices & Centers](https://developer.trade.gov/ita-office-locations.html) ([Swagger](http://developer.trade.gov.apievangelist.com/definitions/ita-offices-and-centers.json))
*   Trade Events
*   Trade Leads
*   Trade News & Articles

[![](https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-swagger-round.png)](https://bit.ly/1w9oKpq)

I chose to use [Swagger](https://bit.ly/1w9oKpq) for creating my machine readable API definitions, and while I was waiting for the Github commit to take for the Market Research Library API Swagger definition + Swagger UI, I got to work on the ITA Offices & Centers API. As I was finishing up, I reloaded the [interactive docs for the Market Research Library API](http://developer.trade.gov.apievangelist.com/market-research-library-api.html), and got the dreaded CORS warning:

> _Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://api.trade.gov/market\_research\_library/search?keyword=travel. This can be fixed by moving the resource to the same domain or enabling CORS._

That is where the fun ends for me. I can keep creating Swagger specs for the other three APIs, but I won’t be able to play with them until I create a proxy to make calls through, and open up CORS on my end. I will make time to do this over the weekend, but until then the fun stops. I am hoping they will also open up CORS, but I'm sure it will take a while.

[![](https://s3.amazonaws.com/kinlane-productions2/apis-json/apisdotjson.png)](http://apisjson.org/)

To wrap up my work, I also generated an [APIs.json file for the Developer.Trade.Gov domain](http://developer.trade.gov.apievangelist.com/apis.json), listing the details for both the Market Research Library API, and the ITA Offices & Centers API--opening up the APIs to discovery by API search engines like APIs.io. When Developer.Trade.Gov publishes the APIs.json + Swagger specs under their domain, it will become more authoratative and given prominence in search engine results.

In about 2 hours, I was able to review a new developer area, and five APIs, generate two swagger specs, 1 APIs.json, publish to a Github repository where I launched interactive documentation for each of the two APIs, and wrap up with this story of my work. As with all of my work, you can find all of this [work at the Github repository,](https://github.com/commerce-data/developer.trade.gov) and the best part is, when I pick the work back up, it is all in one location, [with complete notes about what I did](http://developer.trade.gov.apievangelist.com/blog/)—helping me understand where I left off, in addition to allowing anyone else to step in and learn from the process.
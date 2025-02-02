---
layout: post
title: >-
  The API Design Guide Is Just The Beginning Of The Journey - Better Get
  Started!
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-journey.png
author:
  name: kinlane
tags:
  - Design
  - Journey
---
I'm processing all of my thoughts from some travel to the big city of San Francisco. [I was providing feedback on Microsoft's API design guide, as part of the OneAPI Technical Advisory Group](http://apievangelist.com/2015/08/28/crafting-and-publishing-api-design-guide-shows-that-you-are-further-along-in-your-api-journey/). As I was thinking about the journey Microsoft is on, the role of the API design guide, and [how many other companies like Paypal, and Cisco, are on the same journey](http://design.apievangelist.com/tools.html). 

In parallel to this, [I am on my own journey with my own API stack](https://kin-lane.github.io/master/), I've been looking at everything from a slightly different perspective than many other analysts and providers in the space. When I started in 2010, it was all about API management, then after folks kept asking me about options for deploying APIs I expanded my monitoring to API deployment. Then Jakub the CEO of Apiary, moved the dial back ruth on the life-cycle, and got me paying attention to the concept of API design.

Fast-forward to 2015, [I am paying attention to almost 20 separate areas, as part of my core API research](http://apievangelist.com/). I tune into a number of other areas, but these research projects make up the heart of my API storytelling. On the trip back from San Francisco today I had a few thoughts, and needed to organize them in context of my core research. 

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/api-considerations.png)

**Define (A)**

*   **A1 - Tech**
    *   Do you use Swagger to define APIs?
    *   Do you use API Blueprint to define APIs?
    *   Are there other API definition formats you use?
    *   Do you employ NO API definitions?
*   **A2 - Business**
    *   Do you support multiple API definition formats?
    *   Do you use API definition formats to engage with other services or tools?
    *   Are your service tiers represented in your aPI definitions?
*   **A3 - Politics**
    *   Do you share your API definitions publicly?
    *   How do you license your API definitions? Are they open?

**Design (B)**

*   **B1 **- Tech****
    *   Do you use Restlet Studio's API design tools?
    *   Do you use APIMATIC  API design tools?
    *   Do you use Apigee API Studio API design tools?
    *   Do you use Gelato API design tools?
*   **B2 **- Business****
    *   Do you use a service provider for API design?
    *   Do you use a consultant(s) for API design?
    *   Do partners and other stakeholders participate in the API design process?
*   **B3 **- Politics****
    *   Do you JSON:API?
    *   Do you hypermedia?
    *   Do you JSON-LD?

**Deploy (C)**

*   **C1 **- Tech****
    *   What gateway tech do you use?
    *   What API frameworks do you use? 
    *   What cloud solutions do you use?
*   **C2 **- Business****
    
    *   Are you monetizing APIs?
    *   Are you covering costs of deployment?
    
    *   Do you hand API deployment internally?.
    *   Do you depend on outside resource to deploy APIs?
*   **C3 **- Politics****
    *   Are your API deployment solutions open source?
    *   Do Your API Deployment resources scale?

**Manage (D)**

*   **D1 **- Tech****
    *   Are you rolling your own API management solution?
    *   Which API management solution are you using?
*   **D2 **- Business****
    
    *   Do you require registration to use an API?
    *   Do you have service tiers?
    *   Do you have partner levels of access?
    
    *   Do all areas of your companies operation apply same approach?
*   **D3 **- Politics****
    *   Is your API management solution open source? 
    *   Do you provide support for your API developers?

**Secure (E)**

*   **E1 **- Tech****
    *   Do you require SSL?
    *   Do you require API keys? 
    *   Are you employing OAuth?
*   **E2 **- Business****
    *   Are you investing in security?
    *   What would a security breach cost you?
    *   Do all areas of your companies operation apply consistent template?
*   **E3 **- Politics****
    *   Are you more secure than your competition?
    *   Do you share your security practices publicly?

**Monetize**

*   **F1 **- Tech****
    *   Which management solution do you use to handle monetization?
    *   Is there an API for your API monetization layer?
    *   Is there a developer dashboard for pricing, billing, and revenue sharing?
*   **F2 **- Business****
    *   Do you apply consistent monetization strategy across all APIs?
    *   Is your billing real-time?
    *   Is API revenue, your only revenue stream?
    *   Do you have a credit based system, beyond just API call based?
*   **F3 **- Politics****
    *   Do you share your pricing publicly? 
    *   Is your partner program transparent?
    *   Do developers have dashboard for managing billing?

**Monitoring**

*   **G1 **- Tech****
    *   What services to you use for monitoring APIs? 
    *   What open source tooling do you use for your monitoring?
    *   Does your monitoring include testing, performance, and security?
*   **G2 **- Business****
    *   What do you spend on API monitoring each month?
    *   Is there a dedicated person(s) to monitoring APIs?
    *   What has outages cost you in the past?
*   **G3 **- Politics****
    *   Do you publish your monitoring reports publicly?
    *   Do you keep your ecosystem in tune with monitoring via messaging system(s)?

**Testing**

*   **H1 **- Tech****
    
    *   What services to you use for testing your APIs? 
    *   What open source tooling do you use for your testing?
    
    *   What are your benchmarks?
*   **H2 **- Business****
    *   Do you provide testing tools to your developers?
    *   Can developers request specific types of testing for APIs?
*   **H3 **- Politics****
    *   Do you publish your monitoring reports publicly?

**Performance**

*   **I1 **- Tech****
    *   What services to you use for testing your APIs? 
    *   What open source tooling do you use for your testing?
    *   What are your benchmarks?
*   **I2 **- Business****
    *   Do you have SLAs for any tiers of operation?
    *   Do you generate any revenue from SLAs in place?
*   **I3 **- Politics****
    *   Do you publish your monitoring reports publicly?
    *   Do you consistently meet your SLAs?

**Virtualization**

*   **J1 **- Tech****
    *   What services to you use for virtualizing your APIs? 
    *   What open source tooling do you use for your API virtualization?
*   **J2 **- Business****
    *   Is virtualization part of your QA process?
    *   Do you virtualized instances of your API as an added service?
    *   Do you provide a sandbox or simulators for developers by default?
*   **J3 **- Politics****
    *   Do you provide virtualization for developers?
    *   Are your virtualization images openly sourced?

**Orchestration**

*   **K1 **- Tech****
    *   What services to you use for virtualizing your APIs? 
    *   What open source tooling do you use for your API virtualization?
*   **K2 **- Business****
    *   Do you have dedicated people to managing your API architecture?
    *   Do you have dedicated services for managing your API architecture?
*   **K3 **- Politics****
    *   Can you migrate between infrastructure providers? (ie. AWS to Google)
    *   Is your server side API code open source?
    *   Are you virtualization images openly licensed and available? (ie. Docker Images)

**Embeddability**

*   **L1 **- Tech****
    *   Do you use oEmbed?
    *   Do you have bookmarklets?
    *   Do you have a JavaScript API?
*   **L2 **- Business****
    *   Do you have a standardize strategy for allowing users to embed API driven resources?
    *   Is your embeddable strategy integrated with your overall marketing and branding efforts?
    *   Do you offer embeddable tool builder?
*   **L3 **- Politics****
    *   Are your embeddable tools non-invasive? Protect privacy?

**Evangelize**

*   **M1 **- Tech****
    *   Do you have robot evangelists? Just sounded cool, and couldn't think of anything to put here.
*   **M2 **- Business****
    *   Do you have dedicated evangelist resources?
    *   Do you contract with 3rd parties for any evangelist resources?
    *   Is your evangelism coupled with your marketing?
*   **M3 **- Politics****
    *   Are there opportunities for developers to get involved with evangelism?
    *   Do you have healthy feedback loop present with your API operations?

**Discovery**

*   **N1 **- Tech****
    *   Do you have an APIs.json for your API operations?
    *   Do you employ API definitions?
    *   Are you using hypermedia?
*   **N2 **- Business****
    *   Are your APIs plug and play with other platforms?
    *   Are your APIs public or private?
*   **N3 **- Politics****
    *   Does discovery feed every other layer of API life-cycle?
    *   Does discover play into your security strategy?

Sorry, I don't mean to be a downer. But...we are just getting started with stabilizing how we do APIs. I feel like we are beginning to formalize how we manage or APIs (thanks Mashery, 3Scale, and APIgee), and we are getting a handle on API deploy (thanks Restlet, Amazon), and we are deep into understanding how we define (thanks Swagger and API Blueprint), and ultimately design (thanks Apiary, Restlet, and Apigee).

We are moving fast into testing, monitoring, performance, and virtualization (thanks Runscope, APITools, API Science, and SmartBear), but our security sucks, embeddability has stagnated, and evangelism and discovery really isn't improving. I'm working on APIs.json, and bringing together the Swagger and API Blueprint communities, but there is so much work left when it comes to discovery, and automating each of the areas listed above.

There really is no point to this post. It is my mental vomit, after a trip to San Francisco, and working on Microsoft's API design guide. Stay tuned for how any of this applies to anything.
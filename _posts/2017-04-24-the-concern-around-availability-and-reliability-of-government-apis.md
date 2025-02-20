---
layout: post
title: THe Concern Around Availability And Reliability Of Government APIs
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/epa_website_reliability.png
atomdate: 2017-04-24T19:00:00.000Z
tags:
  - Reliability
  - Government
  - APIs
  - ai
---
[There is some rumors circling about more government open data going way, this round is at the EPA.](https://twitter.com/EPA/status/856508545805758464) The EPA says the data isn't going anywhere, but understandably there are some serious concerns about the availability and reliability of environmental data from federal agencies during a Trump administration. With the looming government shutdown, I'll renew some of my old arguments around how we can make government data more accessible and making a difference--thoughts I developed during the 2013 shutdown.

**Communication And Collaboration**  
First and foremost, communication around API operations is essential for any kind of reliability. Too often the providers behind APIs, and even consumers of APIs are radio silent. Refusing to coorindate and communicate around the realities of API operations and integrations. I don't expect all government APIs to stay in operation for every, but I to expect all API providers to be honest and communicative about past, present, and future of API operations.

**Access To The Raw Data**  
Alongside every government data API, there should be a download to the raw data behind the API. This is the best way to keep data available. Allowing developers to download and put data to use directly in their local environment, bypassing or augmenting any dependence on the API. Remember that not everyone will have the resources and skills to make this happen, so it shouldn't be instead of API, but complimenting any API, providing more complete access for those who need it. 

**Use And Share A Common API Definition And Schema**  
When you define and share your API using machine readable specifications like OpenAPI it has the potential to turn an single API into a common set of federated APIs, all working together for a common goal. In addition to helping generate API documentation, and code in a variety of languages, an OpenAPI for all government APIs would make them more accessible, as well as reusable.

**Cached Or Slave API Deployment**  
When any API employs a common API definition and schema, as well as full datasets for download, it opens up the possibility for cached editions, or slave implementations of an API. The federal government APIs would always be a master version, but when there are outages, either temporary or permanent, the slave or cached versions of an API can help ensure websites, and applications continue operating.

**Government API Service Level Agreements (SLA)**  
Make the implementation of service level agreements across federal government APIs standard practice. When any government agency prepares to launch an APIs, they should make sure a service level agreement is in place, setting expectations for the availability of the service. I'm not sure what the enforcement of this would look like, but the presence of SLAs, and the conversation they stimulate would be an important first step toward ensuring better access and availability to APIs and open data. 

**Government API Deprecation Policies**  
Similar to the SLA discussion, let's put the conversation around the deprecation of government APIs front and center. Let's make it standard operating procedure to have an API deprecation policy as part of ALL API operations in the federal government. There are plenty of blueprints to follow when it comes to setting deprecation policy, but mostly it is just about having the discussion around the expectations around the availability of any API and the open data behind it.

**Everything Goes Away Eventually**  
There are many reasons why federal government goes away. [The government shutdown in 2013 frustrated me endlessly](http://apievangelist.com/2013/10/17/shutdown-of-government-open-data-and-apis-is-not-government-services-business-as-usual/), but there are many reasons why a government API can go way, including budgetary, or even administration ideology. There are many reasons why private sector APIs go away as well. We just need to keep having discussions about the realities of doing business with APIs, and ensure there are as many layers present to help minimize the pain associated with deploying web, mobile, and other applications on top of government open data and APIs.
---
layout: post
title: >-
  A Better Understanding Of Government APIs And Their Consumers Before
  Considering Charging For Use
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-stack-cash.png
author:
  name: kinlane
tags:
  - Government
  - Consumers
  - APIs
  - Consumer
---
There is an interesting conversation triggered by a [question from Mr. Gray Brooks at the GSA on the federal government API Google Group](https://groups.google.com/forum/#!topic/us-government-apis/mQlwYRK5Y_0), regarding whether there are any agencies who are charging for access to their APIs. I thoroughly enjoy the growing community of open data and API folks that are operating around city, state and federal government currently, and how we are all turning these questions into full blown conversations that can actually help move things forward.

First Luke Fretwell([@lukefretwell](https://twitter.com/lukefretwell)) from Govfresh responded with [Should government charge API fees?](http://govfresh.com/2014/03/government-charge-api-fees/) I totally agree with Luke, that we shouldn't be imposing fees on API consumers at this stage, potentially scaring users off, or stifling innovation that could occur. Government should understand that the costs of data gathering, publishing, and managing APIs should be an accepted cost of doing business as a public entity. Luke ends with potentially charging for high volume usage in the future, but for now let the resources flow!

Next Mark Head([@mheadd](https://twitter.com/mheadd)), Open Data Evangelist for City of Philadelphia chimed in with [APIs : To Charge or Not to Charge](http://civic.io/2014/03/07/apis-to-charge-or-not-to-charge/). Mark makes three excellent points that need to be considered before you charge for access to APIs 1) identifying who is using government APIs 2) APIs as a shared resource 3) sustainability of IT infrastructure. Mark nails it, in that that are more questions to be asked, and great deal of understanding needs be achieved before you can answer the question of “to charge or not to charge”.

**Getting To Know Your Resources**  
Before government agencies consider charging for their API resources, they need to make sure they have an intimate understanding of what it takes to operate and scale existing APIs. Many people feel that applying API keys to government APIs is bad, and is all about locking up or controlling public data. In reality, keying up API access, measuring how APIs are actually used, applying meaningful metrics, presenting in sensible dashboards is how you begin the process of getting intimate with your API resources and how they are used—something government agencies need to step up. There is not excuse for not doing this--there are [freemium solutions in private sector like 3Scale](http://bit.ly/13esk6Q), and you have your own [open source solution for government with API Umbrella](http://bit.ly/1g6zFJf).

**Getting To Know Your Audience**  
Before government agencies consider charging for their API resources, they need to make sure they have initiate understanding of who is using their APIs. There is no way that you can set a price for an API resource, without knowing who is going to use it, and what price point the market will bear. If the API resource you are deploying is being used by civic open data groups, the market won't take much, but if consumers of the API resource is large financial institutions, it is an entirely different conversation. Price shouldn't just be based upon covering costs, as Mark said their are other considerations with APIs being a shared resource—in short there will be numerous conversations that have to happen before pricing can be set, and a healthy understanding of who is using your APIs, and how they are putting them to use is critical.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist/federal-government/nationl-park-ranger.jpg)

My answer to whether government should charge for APIs, is yes. We have to make sure and cover the costs of operations, and make sure new API resources get funded. However I second Luke and Mark as well, we can't let pricing get in the way of API usage, and there are many variables to consider before pricing can be set. My personal opinion is that all government APIs should require keys, so that agencies can measure and understand API usage, if developers want to get full downloads of data they can, but to use APIs you need to register and key up. Entry level tiers should allow for sensible rate limits, but always cap usage, with the expectation that developers can request rate limit increases, which at some point may warrant the charging of fees. If all agencies employ this method, APIs can still be freely accessed, agencies have the data they need to better understand how APIs are use, and by whom, and heavy or specialized API usage can be dealt with on a case by case basis—leaving open the potential for fees applied to API usage in future…or not.

I still like the [city and national park example](http://apievangelist.com/2012/02/01/should-the-government-subsidize-and-profit-from-data-markets/) I pulled from a conversation with Andrew Nicklin([@technickle](https://twitter.com/technickle)) in New York a couple years ago. Some public parks are free and open, some have small usage fees, but all commercial activity on public lands requires additional levels of access, fees and even revenue sharing in some situations. We just haven't applied the same thought process to our virtual public lands, and like we had to do in the early days of governing our public lands, we have some experimentation, learning and standardization to do around the management of our virtual public resources.
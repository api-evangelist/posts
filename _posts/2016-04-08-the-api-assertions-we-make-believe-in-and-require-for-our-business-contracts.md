---
layout: post
title: The API Assertions We Make, Believe In, And Require For Our Business Contracts
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/API_Evangelist_Blog_-_DHC_by_Restlet.png
tags:
  - Business
  - Contracts
  - Assertions
  - Contract
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/restlet/dhc/dhc-logo.jpg)](https://restlet.com/products/dhc/)

I am spending time evaluating the evolution of the three applications offered by [Restlet](https://restlet.com), as they work to bring the experience across [API Spark](https://restlet.com/products/apispark/), [Restlet Studio](https://restlet.com/products/restlet-studio/), and [DHC](https://restlet.com/products/dhc/), into closer alignment. To describe what Restlet does in my API terminology, API Spark is an API deployment solution, Restlet Studio is an API design solution, and DHC is an API client solution. These are extreme simplifications, but helps me keep the fast moving API space somewhat organized (for me), and helps me share stories that (hopefully) make sense (for you). 

Every couple of weeks I spend an hour or two talking with Jerome Louvel ([@jlouvel](https://twitter.com/jlouvel)), the founder of Restlet, about their road map, and where the wider API space is going. Similar to my own work, [trying to map out the API life cycle](http://apievangelist.com), Restlet is trying evolve their own suite of API solutions, into more of a life cycle management solution. Restlet touches all of the core areas of the life cycle, including design, definitions, deployment, management, and client, while also making moves into testing, and beyond. I told Jerome I would spend more time thinking about this journey that they are on, and provide any thoughts I can.

While I was playing with DHC, making some calls to my blog API, I kept being pulled down to the bottom tab, below my API response information, where there are tabs for history, assertions, HTTP, and docs. While the API request and response is very technical, at the bottom of the DHC client, I see elements of the business and politics of APIs.

[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/API_Evangelist_Blog_-_DHC_by_Restlet.png)](https://restlet.com/products/dhc/)

For me, the features Restlet has exposed as tabs in the DHC footer, resemble how APIs are acting as business contracts. The docs represents the contract language, the HTTP tab is the details of the exchange, assertions are what is expected of the contract, and history is the recording of the contracted exchange (or lack of). What keep pulling my eyes to the bottom of the screen in DHC was the concept of assertions, which the dictionary says is:

1.  the act of stating clearly and strongly or making others aware
2.  something stated as if certain

What assertions are being made of any API? Assertions span the three tiers of API operations for me, crossing the technical, business, and politics. In theory assertions shouldn't just be API developer-centric, they should also reflect the needs of API consumers, business, and end-users as well. As I'm playing with assertions in DHC, I'm thinking how can we open up these definitions to business groups? How do we collaborate and share assertions across our API teams? Or possibly with an entire API community or industry?

While assertions are applied at the specific API level in DHC, I can't help but see the need for a library of company-wide assertions, some unique to specific APIs, with others existing more universally and applied across many APIs. This leaves me thinking that assertions need to stand on their own, independent of any single API, be portable and shareable, and always be written in as plain English as possible--something that can be agreed upon across all stakeholders involved with an APIs contract.

I feel like assertions will be a growing dimension of APIs, [similar to APIs needing to have the "skills" required for simple, meaningful implementations in bot, and voice enable applications](http://apievangelist.com/2016/03/23/exposing-the-meaningful-skills-our-apis-possess-for-use-in-the-next-gen-messaging-and-voice-apps/), assertions are just the contract level promise of what an API can do, will do, and then actually is proven to do reliably. Anyways, just thinking through my ideas, in preparation for my next conversation with Jerome. Having partners that I can brainstorm with like this helps me work through my ideas, and hopefully they can cherry pick some useful items from my ramblings for their road map.
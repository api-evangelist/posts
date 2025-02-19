---
layout: post
title: >-
  Blockspring Shifts The API Client Conversation With Their Google Spreadsheet
  API Add-On
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-logo.png
author:
  name: kinlane
tags:
  - Client
  - Spreadsheet
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-logo.png)](https://www.blockspring.com/)

The one thing I've learned in five years as the API Evangelist is that us technologists and developers don't always see the world like everyone else. We focus on the perfection of the technology, our own desires for the future, and often miss the mark on what end-users actually need. This is one of the hallmark success of APIs over SOA, is that by accident, APIs jumped out of the SOA petri dish (thanks Daniel Jacobson - [@daniel\_jacobson](https://twitter.com/daniel_jacobson)), and was use solve everyday problems that end-users face, using the technology that is readily available (aka HTTP).

While I think us API folks have done a great job of delivering valuable resources to mobile applications, and a decent enough job at delivering the same resources to web applications, and I guess we are figuring out the whole device thing? maybe? maybe not? Regardless, one area we have failed to serve a major aspect of the business world, is delivering valuable API resources to the number #2 client in the world—the spreadsheet.

We have done a decent job of providing resources to data stewards, [helping them deploy APIs using spreadsheets using services like API Spark](http://restlet.com/products/apispark/), but other than a handful of innovative implementations from companies like [Octoparts](http://apievangelist.com/2013/07/31/giving-excel-power-users-the-api-driven-resources-they-need/) and [Twilio](http://apievangelist.com/2014/08/20/route-sms-messages-to-google-spreadsheets-via-twilio-api-with-twiliosheet/), there are no solid API consumption resources that target the spreadsheet environment. Meaning there is no easy way for mainstream spreadsheet users to put common API driven resources to work for them within the spreadsheets that they live in daily--that is until today, with the launch of the [Blockspring launched their Google Spreadsheets Add-On](https://api.blockspring.com/blog/blockspring-for-google-sheets).

Yeah I know, making APIs work in spreadsheets has been done for a while, via Google Spreadsheets and Excel Spreadsheets, but nobody has standardized it like Blockspring just did. So let’s take a quick look at the implementation. [I went to the Google Chrome App Store, and downloaded the add-on](https://chrome.google.com/webstore/detail/blockspring/aihldeahgcpbpmimkdpkafaedhbmfhoh).

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-google-spreadsheets-add-on.png)

Then using a new spreadsheet, I click on add-ons > Blockspring, and logged into my account. After giving Blockspring access to the Google Spreadsheet via my Google Account oAuth, I was given an API console in the right hand sidebar of my spreadsheet interface. The API options I’m given aren't the usual geek buffet, they are everyday use scenarios that would attract the average spreadsheet users.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-google-spreadsheets-add-on-console.png)

I select the IMDB movie search, which once chosen, I’m given the option to populate my spreadsheet with results, providing me with API driven resources, right in my worksheets. The best part is it is complete with one cell as a search term, allowing me to customize my IMDB search.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-google-spreadsheets-add-on-imdb.png)

Using Blockspring, I’m given easy to use, API driven resources, that anyone can implement, like visualizing the recent news:

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-google-spreadsheets-add-on-tools.png)

Or possibly evaluate stock volatility clustering, using stock market data APIs (cause you know we all do a lot of this):

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/blockspring/blockspring-google-spreadsheets-add-on-tools-2.png)

  
Blockspring gives me over 1000 API driven functions that I can use in my Google Spreadsheet—kicking everyone’s asses when it comes to potential API client delivery. While us technologists are arguing over whether or not we can automatically generated Swagger driven SDKs, and the importance of hypermedia APIs when deploying the next generation clients, someone like Blockspring comes along and pipes in APIs to the #2 client in the world—the spreadsheet. #winning

Now the game will be about getting the attention of Google Spreadsheet users, and developing comparable Microsoft Spreadsheet tooling, and getting mainstream Excel users attention as well. The rest of you will have to get the attention of Blockspring, and make sure your API resources have simple, meaningful endpoints that can be piped in as Blockspring Google Spreadsheet functions. Spreadsheet driven business units should not have to learn about APIs and go look for them, at each individual API portal—APIs providers should find and education business users about their resources, via one of the most ubiquitous tools in business.

Nice work Blockspring, in [helping ensure the space move beyond excel as a data source for API deployment, and focusing on it as an API client](http://apievangelist.com/2015/03/13/going-beyond-excel-as-a-data-source-for-api-deployment-and-focusing-on-it-as-an-api-client/), delivering vital API resources to the business users who can potentially benefit the most, and are willing and able to pay for API access in my opinion.

P.S. As soon as I finished this I remembered this story from [last weeks API.Report](http://apievangelist.com/blog/) \- [Free Federal Energy and Economic Information Delivered Straight to Your Spreadsheet](http://www.digitalgov.gov/2015/03/25/the-api-briefing-free-federal-energy-and-economic-information-delivered-straight-to-your-spreadsheet/) - not an standardized approach, but definitely an important implementation to showcase.
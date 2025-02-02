---
layout: post
title: 'HDScores: One Potential API Driven Business Model Aggregating Public Data'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/hdscores-logo.png
author:
  name: kinlane
tags:
  - Business
  - Data
  - Public Data
  - Public
  - Scores
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/hdscores-logo.png)](http://hdscores.com/)

I came across [HDScores](http://hdscores.com/) a couple of weeks agao, but their API wasn't quite ready, something they officially released this last week. HDScores is interesting to me for a couple of reasons. It is an API that aggregates open government data, but also has what I'd consider a potentially viable API business model as well. 

The monetization of government data using APIs is something I've been discussing for a while, [exploring whether our government should subsidize and profit from open data](http://apievangelist.com/2012/02/01/should-the-government-subsidize-and-profit-from-data-markets/), and [helping agencies develop a better understanding of their open data and API consumers before they charge for anything](http://apievangelist.com/2014/03/07/a-better-understanding-of-government-apis-and-their-consumers-before-considering-charging-for-use/). HDScores takes this to the next level for me, presenting some possible models we can all follow when developing viable business on top of open data. 

HDScores aggregates restaurant inspection data, something I know other leading tech companies like [Yelp](http://www.yelp.com/healthscores), and [CityGrid](http://www.citygridmedia.com/developer/blog/new-york-city-open-data-highlight-restaurant-inspection-results/) (ha I wrote that) have wanted to solve for a while, but seems like something that an independent 3rd party could potentially accomplish better. While it is is n Yelp's interest to serve up inspection, it isn't their core competency to make it accessible for others to serve up as well, something I think is critical for the success of open data. 

I like HDScores own description of what they do:

_HDScores is creating ways for everyone to make better decisions on based on actual restaurant inspection data collected by registered/licensed health inspectors in an easy to read, search and understand format._

This is an important aspect of open data, and something the government stewards of this data do not always have the time and resources to accomplish. I feel there is a huge opportunity here for the private sector to step up and help out in an open, transparent fashion, when there is a viable business model present.

[HDScores approach to monetization is pretty straightforward](http://hdscores.com/hdscores/api-rates/), they allow you to pull up to 1K establishments, and 2.5K inspection reports daily, for free--after that they charge you .05 per piece of data. They also have partnership opportunities available, allowing access to crosswalk data as well, and I'm sure there are volume pricing opportunities if you ask--standard operating procedures. 

I know many folks who feel that you shouldn't be able to charge for access to public data. However when someone gets to know the data like HDScores has, and improves upon it, I strongly feel you should be able to cover your infrastructure costs, as well as make a fair profit. I suspect as HDScores gets to know consumers better, their pricing will evolve, and get more precise.

In addition to aggregating this data from so many sources, organizing it into a single, coherent collection that is available via an API, HDScores also provides web and mobile apps, as well as embeddable resources built on top of the data. They go well beyond just aggregation, and seem to be actively working to improve upon the open government data.

![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/hdscores-web-app.png)

While I do worry about companies profiting in extreme ways on top of public data, I think what HDScores is up to represents one layer to the future of open government data and APIs. As you will see through my work around the recent grant I received from the Knight Foundation, I strongly feel that the government opening up data is just one piece of the puzzle, and that the private sector needs to step up and complete the puzzle. 

For this vision to become a reality, there has to be a financial incentive for companies to aggregate the data, get to know it intimately, improve upon it, and craft well designed APIs, as well as web, mobile, embeddable tools and visualizations on top of the APIs. I'm not sure that HDScores model is the only way forward in this conversation, but I think it provides us with one possible blueprint of what could work, when it comes to building viable businesses on top of publicly available data.
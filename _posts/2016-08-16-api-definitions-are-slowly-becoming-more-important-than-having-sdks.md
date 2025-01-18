---
layout: post
title: API Definitions Are Slowly Becoming More Important Than Having SDKs
image: https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-icon.png
atomdate: 2016-08-16T20:00:00.000Z
tags:
  - Definitions
  - SDK
  - Definition
  - SDKs
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-icon.png)](http://definitions.apievangelist.com)

As the debate over [whether you need an SDK for your API or not](https://s3.amazonaws.com/kinlane-productions2/api-commons/api-commons-icon.png) has rumbled over the last couple of years, API specification formats like OpenAPI Spec, Postman, and API Blueprint have been gaining traction. As this has progressed, I've asked myself several times whether or not API providers even need SDKs anymore. Not just because of the complexities of developing and maintaining, but because more developers are using web clients like Postman and DHC to evolve their integrations.

Apigee Explorer and Swagger UI documentation demonstrated that many developers needed to play with an API as they were learning about what resources were available, and how to use them. I think the evolution of API clients like Postman, DHC, PAW, and others have shown that this phase of playing, exploration, and non-code integration can go well beyond just integration and should actually be neverending across stops along the API life cycle.

It is just anecdotal at the moment, but looking at the API providers who have embedded the Get Postman Button on their sites like [Clearbit](http://blog.clearbit.com/introducing-the-run-in-postman-button/), [Cronofy](https://www.cronofy.com/blog/how-adding-the-run-in-postman-button-changed-our-api/), [Best Buy](https://medium.com/best-buy-developers/building-api-lists-with-the-run-in-postman-button-53c8a22c1d9c#.r0amcganq), and [SparkPost](https://www.sparkpost.com/blog/how-to-run-sparkpost-postman/#.V7NDpJMrKuU), it seems to me that having your API definition available for your developers is growing more important than having SDKs. Developers are getting more traction by loading the Postman Collection, and other common specification format into their client, testing, and other tooling, than they are cracking open the language library of their choice.

This is something I'll further validate through my research. One critique I have on this, is I'm seeing the benefits of this approach focus around Postman, which I'm a big fan of, and a user, but represents just a handful of stops along the API life cycle (client, testing), and not the wider spectrum that OpenAPI Spec and API Blueprint would offer. I have yet to see any of these formats [follow my advice like Postman](http://apievangelist.com/2015/12/19/button-to-run-this-api-in-the-http-api-client-of-my-choice/) [did](http://apievangelist.com/2015/12/19/button-to-run-this-api-in-the-http-api-client-of-my-choice/) and get to work on an embeddable solution for OpenAPI Spec and API Blueprint--giving Postman a significant headstart.

API providers need to be openly sharing their API definitions, API service providers need to be allowing for the run in, and import using the common API specification formats, and developers need to be fluent in these formats and functionality, as they will play an important role in the evolution of the space--one that I think will be more significant than the role SDKs have played, after this plays out.
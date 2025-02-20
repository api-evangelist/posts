---
published: true
layout: post
title: The State of Simple CRUD API Creation
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/docks-docks-light-dali.jpg
author:
  name: kinlane
tags:
  - CRUD
  - Creation
---
We even have the vocabulary to describe all of the details of my API (OpenAPI), and I still can’t just push a button and get my API. I can take my complete OpenAPI definition and publish it to AWS, Azure, or Google and “generate my API”, but it doesn’t create the backend for me. There has been waves of database or spreadsheet to API solutions over the years, but there is not single API solution to plant the seeds when there is no existing data source. Over the holidays [I managed to create a Postman collection that will take my OpenAPI from a Postman-defined API and generate a AWS DynamoDB and AWS API Gateway instance of API](http://apievangelist.com/2020/01/02/deploying-my-postman-openapi-to-aws-api-gateway/), but it was the closest I could get to what is in my head across AWS, Azure, and Google. Why can’t I just hit GO on my OpenAPI, and have an API in a single click? Nio matter which cloud provider I am on!

The reasons why I can’t immediately have a CRUD API are many. Some technical. Most are business reasons. I would say it is primarily a reflection of our belief that we are all innovative special snowflakes, when in reality we are all saying pretty much the same things in similar ways—we just can’t 100% agree on the details. So we all just all continuing developing schema and APIs in isolation. I would say there is also a very narrow proprietary view of what APIs should or shouldn’t be, and the business and technical wizards don’t want it to be easy. It needs to be complex, and something that is done with specialized tooling by specialized individuals. When in reality, we’d all be better off if most of things were standardized and interoperable—then we could get down to business doing the actual unique things we are good at, not just managing technical debt.

As technologists we are really good at keeping things complicated so that we are needed and have something to sell. The state of API deployment after all of these years demonstrates that the API lifecyle is governed more by business and political decisions than they are ever by technical ones. Showing that us technologists aren't as in control over what is going on as we think we are, and that the "right" technical approach isn't the "right" answer to most API questions being asked.
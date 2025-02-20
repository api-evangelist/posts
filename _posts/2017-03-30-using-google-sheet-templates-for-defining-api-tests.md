---
layout: post
title: Using Google Sheet Templates For Defining API Tests
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2017_03_30_at_6.48.27_pm.png
atomdate: 2017-03-30T22:00:00.000Z
tags:
  - Templates
---
[The Runscope team recently published a post on a pretty cool approach to using Google Sheets for running API tests with multiple variable sets](https://blog.runscope.com/posts/using-google-sheets-and-runscope-to-run-api-tests-with-multiple-variable-sets), which I thought is valuable at a couple of levels. They provide [a template Google Sheet for anyone to follow, where you can plug in your variable, as well as your Runscope API Key, which allows you to define the dimensions of the tests you wish to push to Runscope via their own API.](https://docs.google.com/spreadsheets/d/1B8iTvriTfCbvUIe0mvc7dbNInYanaQn_00LvWHVZn8E/edit#gid=0)

The first thing that grabs me about this approach is how Runscope is allowing their customers to define and expand the dimensions of how they test their API using Runscope in a way that will speak to a wider audience, beyond just the usual API developer audience. Doing this in a spreadsheet allows Runscope customers to customize their API tests for exactly the scenarios they need, without Runscope having to customize and respond to each individual customer's needs--providing a nice balance.

The second thing that interests me about their approach is the usage of a Googe Sheet as a template for making API calls, whether you are testing your APIs, or any other scenario an API enables. This type of templating of API calls opens up the API client to a much wider audience, making integration copy and pastable, shareable, collaborative, and something anyone can reverse engineer and learn about the surface area of an API--in this scenario, it just happens to be the surface area of Runscope's API testing API.

[Runscope's approach is alignment with my previous post about sharing data validation examples](http://apievangelist.com/2017/03/23/sharing-api-data-validation-examples/). A set of assertions could be defined within a spreadsheets and any stakeholder could use the spreadsheet to execute and make sure the assertions are met. This would have huge implications for the average business user to help make sure API contracts are meeting business objectives. I'm considering using this approach to empower cities, counties, and states to test and validate human services API implementations as part of my [Open Referral](http://openreferral.org) work.

It told John Sheehan, the CEO of Runscope that their approach was pretty creative, and he said that "Google sheets scripts are underrated" and that Google Sheets is the "API client for the everyperson". I agree. I'd like to see more spreadsheet templates like this used across the API life cycle when it comes to design, deployment, management, testing, monitoring, and every other area of API operations. I'd also like to see more spreadsheet templates available for making calls to other common APIs, making APIs accessible to a much wider audience, who are familiar with spreadsheets, and more likely to be closer to the actual problems in which API solutions are designed to solve.
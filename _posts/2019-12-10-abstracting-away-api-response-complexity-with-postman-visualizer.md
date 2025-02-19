---
published: true
layout: post
title: Abstracting Away API Response Complexity With Postman Visualizer
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/test_script.png
author:
  name: kinlane
tags:
  - Visualizations
  - Complexity
---
I was creating [a Postman collection for validating the status of Twitter users](http://apievangelist.com/2019/12/09/validating-twitter-users-using-the-twitter-api-without-writing-code/), where I was looking to extract a subset of data from the very verbose Twitter API response for a Tweet Lookup. There is a lot of data contained within a single Tweet JSON response, and all I was looking for was just a handful of the fields. I thought this would be a great opportunity to show off the new Postman visualizer, where you can display the API response for each request however you want.

To get started I crafted an API request for the Twitter lookup API path, allowing me to pass in up to 100 Twitter user handles, and return a JSON response for all the Twitter users I want to check in on the status of—leveraging Postman to authorize and see the details of the API response.

![](https://kinlane-productions2.s3.amazonaws.com/postman-stories/abstracting-away-response-complexity/see-response.png)

This res\[omse has the data I need, but looking through the entire of the JSON response is a lot more than I can ask of many of the people I will be sharing the collection with. I’m going to be sharing it with mostly non-developers, hoping to provide them them with a quick way to check the status of various Twitter users, and wading through the JSON is unacceptable, so I used the new Postman visualizer to render an HTML list of only the data I wanted.

![](https://kinlane-productions2.s3.amazonaws.com/postman-stories/abstracting-away-response-complexity/see-visual-response.png)

The Postman visualizer allows me to pull only the fields I need and publish as HTML to the visualizer tab. Providing a more human readable view of the Twitter Lookup API response, making the Twitter API more accessible by developers and non-developers who are looking for a quick way to validate the status of one or many Twitter users.

To make this happen, all I did was add a test script to the API request, adding a little JavaScript which takes the JSON response, loop through each user being returned and retrieve only the fields I need, providing a quick snapshot of the status of each of the Twitter users I’m question.

![](https://kinlane-productions2.s3.amazonaws.com/postman-stories/abstracting-away-response-complexity/test-script.png)

The Postman visualizer tab combined with a little JavaScript provides a pretty sweet vehicle for making sense of API responses. Turning each API request into a little API-driven dashboard element. Allowing me to organize one or more individual API requests into a collection, providing simple HTML visuals that simplifies the data returned from any API. I can think of an endless number of interesting collections I could build on top of the Twitter API, or any other API I want to target with a Postman visualizer enabled collection.

This is a pattern I want to keep applying and evolving. It represents everything I love about APIs. Providing simple, useful API capabilities that anyone can run. Making APIs more accessible to developers, as well as non-developers. While there is still more authentication friction with some of these collections I’m producing, I am still happy with the overall ability to package up an API call in this way. Providing shareable and executable machine and human readable units of digital value which makes APIs much more accessible and usable.
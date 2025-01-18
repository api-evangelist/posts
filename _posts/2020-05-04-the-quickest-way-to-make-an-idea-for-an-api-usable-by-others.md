---
published: true
layout: post
title: The Quickest Way To Make An Idea for an API Usable By Others
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/6_request.png
author:
  name: kinlane
tags:
  - Onboarding
---
I have used Postman in a handful of webinars and takes recently to demonstrate how you can quickly go from idea to a tangible usable API. My goal is to equip myself with a way to I can quickly demonstrate an API I have in my head to someone else in five minutes or less. This is a walkthrough of that process, hopefully showing you a quick way to be more effective in how you share and collaborate around APIs. Allowing anyone, even non-developers to make their abstract ideas a little more tangible and real for others.

### Oakland Restaurants JSON

To demonstrate how you can quickly deploy an API using Postman I’ve compiled a list of some of the restaurants in Oakland (where I live) that are still open for take-out and delivery. To demonstrate what is possible I have added four restaurants to a JSON file, providing me with what I’d like to see for my API response.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/1-json.png)

This JSON will become the response for me new API, providing a list of restaurants for Oakland. However, with an eye for the future I will be looking to create separate JSON responses for Berkeley and other surrounding cities, breaking up my API into more usable chunks.

### New API Request in Postman

To launch my new restaurants API I am opening up Postman, creating a new request for the API I am wanting to share with others. Adding a path resource named restaurants with a city parameter with a value of Oakland, allowing me to break things up by city in the near future.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/2-request.png)

### Save Request as a Collection

Before I can actually put my new imaginary API to work I will need to save the request as part of a collection. Helping provide me with a way to organize my API, but also begin to make it more tangible and executable as a Postman collection. Taking the first step towards making my API idea a little more real.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/3-save.png)

This collection will make my new API much more defined, providing me with something that I can use to further bring my API to life, but more importantly it is something that I can share with others using a URL or workspace, providing them with an executable representation of what I am thinking.

### Create Example with My JSON

Now I am going to take the JSON example I create for my Oakland restaurants and I’m going to add it to Postman. For my new request I am going to add new example, and paste in my JSON, representing what I’d like to see come back for each request to my new API.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/4-example.png)

This will provide users of my new API with a response when the city is Oakland, but I can also add examples for Berkeley and other surrounding cities once I am ready. Providing several different responses fo ray different consumers allowing them to choose which restaurants they are looking for.

### Publish Mock Server for Collection

With my new request, collection, and example, I can take the next step of actually publishing a mock server for my new API. To bring to life I click on the three dots (…) action menu for my collection, and choose to mock our new collection.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/5-mock.png)

We can give out new mock server a name, and chose to make public or private. I am just going to make public for the sake of the demo. Making my API as easy for consumers to put to use as I am working to get them on-board with my new API idea. Removing as much friction from the process as possible.

### Make Call to Your New Mock API

Now using the URL I was given for my new mock server I can I can paste into the request I have defined. Completing the circle for what I am needing to actually make a call to my API. I should now be able to hit send on my request and I will get back the JSON response I’ve published for my API.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/6-request.png)

Now I have an API that I can share with others using the browser, or using Postman. Demonstrating what I mean when I am talking about my Restaurant API. However, I’d like to go one more step, helping make my API more tangible and executable by others I am talking to about my API idea.

### Publish Documentation for API

Having my Mock API makes my idea much more tangible, but there is one more step I’d like to take helping put a face to my new API—publishing documentation. Using Postman I also click on the three dots (…) action button for my new collection, and choose to publish documentation for my new API.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/quickest-way-to-make-an-api-usable-by-others/7-docs.png)

As you work your way through the wizard for publishing your API documentation you can just hit publish and leave all the settings default, or you can get to work tweaking and customizing. For purposes of this demo I am just looking for that link to my documentation, so that I can share with others to help illustrate what I am talking about.

### A Shareable Executable Example of Your API

You should now have a working API with documentation in about 5 minutes. The time on the video was a little over six minutes, but I was talking a bit more than I should have. Regardless, hopefully it shows you how you can go from idea to tangible, executable API in about five minutes. Why spend time talking about your API when you can make your API something that is tangible and real, and something people you are talking to can put to work. To help fruther flesh out this concept for you I have also published a video walk through of what I m talking about, helping provide a richer format than this story can deliver by itself.
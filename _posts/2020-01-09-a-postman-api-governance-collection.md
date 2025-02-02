---
published: true
layout: post
title: A Postman API Governance Collection
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-square-supreme-court-judgement.jpg
author:
  name: kinlane
tags:
  - Governance
---
You can use Postman to test your APIs. With each request you can include a test script which evaluates each incoming response and validates for specific elements, displaying the test results along with each response. However, you can also use the same mechanisms to evaluate the overall design of any API you are managing with Postman. One of the new beta features of Postman is being able to manage your APIs, allowing you to define each API using OpenAPI 3.0, then generate collections, mocks, docs, and tests with Postman. This got me thinking—why can’t we use the new Postman API manager, plus the Postman API, and script testing for governing the design of an API.

To explore the possibilities I created [a Postman collection for applying some basic API design governance to any API you have defined in a Postman workspace](https://documenter.postman.com/view/35240/SWLh46Dv?version=latest). The collection uses the Postman API to pull the OpenAPI for each API and store it within an environment, then there are a range of basic requests that can be made to evaluate the design of the APIs that we have defined as an OpenAPI.  The collection is a proof of concept, and is meant to be a starting point for designing many difference types of API governance rules, and thinking about how Postman collections can be used to govern the API life cycle, starting with the design of our APIs—something that is exposed as OpenAPI.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/aws-s3-square-supreme-court-judgement.jpg)

My new Postman API governance collection has a handful of folders, and the following requests:

*   **Info** - Looking at the general info for the API.
    *   Validate the Name Of The API
    *   Validate the Description for the API
*   **Paths** - Evaluating the design patterns of each API path.
    *   Ensure Words Are Used in Paths
*   **Methods** - Looking at the details of each API method.
    *   Check For GET, POST, PUT, and DELETE
    *   Check All Methods Have Summaries
    *   Check All Methods Have Descriptions
    *   Check All Methods Have Operation Ids
    *   Check All Methods Have Tags
*   **Parameters** - Ensuring there is consistency across parameters.
    *   Make Sure All Method Query Parameters Are Camel Case
    *   Make Sure All Method Query Parameters Have Descriptions
*   **Responses** - Diving into the details of each of the responses.
    *   Check For HTTP Status Success (2xx)
    *   Check For HTTP Status Failure (5xx)
*   **Schema** - Understanding what is going on with the schema.
    *   Check If Any Schema Have Properties
    *   Make Sure All Schema Properties Have Descriptions

These governance requests are pretty superficial at the moment. I’d say the ensure words are used in paths, and the check for GET, POST, PUT, and DELETE are the most ambitious. Everything else is just looking that a key or value is present in the OpenAPI, reflecting a pattern I want to see when it comes to the design of my APIs, but ultimately it has to be defined as an OpenAPI property for me to validate. It is interesting to move forward some of my APIs and think about what the most common illnesses and deficiencies are across the APIs I am developing—then write a little bit of JavaScript to bring each API governance check to life.

I am adding all my other ideas for API governance requests to the GitHub issues for the project. I have a whole lot of needs when it comes to  enforcing consistency across my APIs. I know what needs to be done I just don’t always have the discipline to make it happen—I am hoping a set of API governance checks defined as Postman requests help me police things a little better. Right now I am developing each governance check as a individual request, then organizing them into folders within a collection. I may start consolidating some of them down the road, but for now I wanted to keep them modular and individual executable. I think I will rely on running them as a monitor to aggregate all the checks and results into a single report. IDK. I am just getting going when it comes to defining how I apply API governance to my APIs using Postman.

You can find [the documentation for this collection published using Postman](https://documenter.postman.com/view/35240/SWLh46Dv?version=latest), and I have [the collection and environment published to GitHub](https://github.com/api-evangelist/api-governance-postman-collections) for easy management. If you have an additions, comments, questions, feel free to submit a [GitHub issue for the repository.](https://github.com/api-evangelist/api-governance-postman-collections/issues)
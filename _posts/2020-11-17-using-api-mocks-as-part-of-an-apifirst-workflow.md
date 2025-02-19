---
published: true
layout: post
title: Using API Mocks as Part of an API-First Workflow
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_1.png
author:
  name: kinlane
tags:
  - Mocks
---
I owe an answer on my thoughts about mocking APIs to my coworker Andy, and I don’t want to incur his wrath, so I figured I’d write it up and share wider as I was getting back to him. I don’t have the original question cause it was in a Zoom chat, but it was something to the effect of using mock APIs to move forward the design of an API versus using them to drive application development conversations as well as push testing forward. I’d say that using a mock as part of an API-first design process reflects where I am pushing mocks to work for me more often. I still use them to demo, prototype applications, and as part of API testing, but using them to actually evolve the contract for an API is really where I feel that a mock server will really shine, and can shift how we are delivering APIs. However, there is also a lot of education and awareness needed before I get all the folks I am having conversations with on board with this concept—to help in these efforts I wanted to flesh out a little about what I mean when it comes to API-first usage of mock APIs.

### Mocking From Postman Collections

The first part of this conversation involves the concept that you can generate a mock server from any Postman collection. There is a three step process involved with producing a mock API in Postman using a collection. First you create a collection with the path and parameters you would like to use as the definition of the API you are mocking.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_1.png)

Once you have your path you can select examples up near the send button and add a new example for this request. It will take your path with parameters and map to a new example where you can add a JSON example to represent what should be returned by your mock server for an example.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_2.png)

You should now have a single request, and the example that should be returned when the API request is sent. Now you can select to mock the collection, giving it a name, mapping to an environment, making private, and a handful of other settings that will help us manage the mocked representation of our API.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_3.png)

Once complete you will be given a URL for the mock server, which can be added to the environment or collection and used for any requests. This is the baseline of mocking of an API using Postman, which can be used as part of an API-first process, but there are a couple of other dimensions to this that will help truly strengthen mocking as a critical stop along an API-first lifecycle.

### Generating Mock Collections From OpenAPI

For the first part of this I am just generating a mock from a standalone collection. Using Postman you can also generate a collection from an OpenAPI definition, and identify the purpose of that collection is for mocking. If you identify it as existing for the purpose of a mock servers when generating it will link the OpenAPI, as well as generate the mock server for you upon generate.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_4.png)

This gives you the ability to derive one or many collections from an OpenAPI, using the OpenAPI as a central truth in the discussion. Then use those collections to power mock APIs, as well as a variety of other usage. Which helps define the difference between OpenAPI and Postman collections, but also demonstrates how they can be used in tandem, opening up other doors in the API-First conversation.

### Validating Mock Collections Against OpenAPI

With my mock API collection(s) derived from the OpenAPI, Postman knows that my collections are linked to the API contract and I can choose to validate them, letting me know if my mock collections, or collection used for any other purpose are in alignment with the central contract.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_5.png)

When there are issues it will show them to me, and when the collections are in alignment it will show a green checkbox letting me know each of them are in alignment, helping keep every stop along the API lifecycle in alignment with the central OpenAPI contract.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_6.png)

When issues are found between my collection(s) and the OpenAPI, I can review these issue one by one, fixing them individual, or opt to select all changes and make them all at once, forcing the changes on the collection, treating the OpenAPI as the truth and each collection as an API lifecycle endpoint that needs regular syncing.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/mock_story_7.png)

These changes are downstream from your OpenAPI, meaning you can only add or remove changes to the generated collection, and not pull changes from your collections into your OpenAPI. This allows you to keep iterating upon the OpenAPI contract, and then push those changes downstream. Next, I will be exploring using how collections can be used as part of the contract iteration process to help clarify what is possible and what is not currently.

### Iterating Upon the OpenAPI Contract

Bringing this home to a point where I can intelligently respond to Andy's question about using a mock API as part of the API-first process. **Yes**, you can use it as part of the API-first conversation. I can generate a collection(s) from my OpenAPI contract and publish a mock server, along with documentation to share with stakeholders that I am collaborating with in an API-first way. This mocked API plus documentation will help make things more tangible and real for the conversation, but it falls short of where I’d like to be with allowing these stakeholders to actually fork and submit pull requests on the collections I am using to drive the mocked API. Meaning that I can’t allow stakeholders in the API-first development process to fork and submit pull requests to iterate upon the design of the API, they can only do this with stops along the API lifecycle like docs, testing etc. If someone wants to submit a pull request on the OpenAPI contract for an API and suggest changes to the structure and design of the API they’d have to do this via Github and make sure the OpenAPI is synced with Postman, and then Postman validation would alert and potentially sync any changes with downstream collection.

Ok, I think I have this loaded up in my old brain now. My immediate answer to Andy was going to be hell yes, just use mocks to drive the API-first development of an API. But, this comes with some limitations (for the time being) that needed to also be noted. We can use the mock to drive the API-first conversation, and we can be generating mocks and docs for each iteration, but we can’t be using collections, and pull / merge requests against a collection to drive and sync with each iteration on the OpenAPI. My initial response is to push on the product team to prioritize this “upstream” sync capabilities, but my experience tells me to slow my roll and think a little more about how this works. For now, using collections to mock APIs, and even using an OpenAPI as the source of truth for these collections, to inform the API-first process. If changes to the design of an API are made, they need to be made to the OpenAPI contract via the Postman interface, API, or via Github where the OpenAPI is synced. I am thinking I am going to need another post to Zoom out on this process and include the GitHub piece, but for the moment I want to make sure I answered Andy’s question, and can think straight about this as I am going into other API-first conversations with customers.
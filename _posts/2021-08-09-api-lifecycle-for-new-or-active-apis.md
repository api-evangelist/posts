---
published: true
layout: post
title: The API Lifecycle for New or Active APIs
image: https://apievangelist.com/images/new-active-apis.jpg
tags:
  - Lifecycle
  - OpenAPI
---
One of the limitations of [the recent research I have been doing around the API lifecycle](https://apievangelist.com/2021/08/05/enabling-an-openapi-lifecycle/) is that the lifecycle begins with the import or creation of an OpenAPI. In a perfect utopian world this makes a lot of sense, but as we are all too painfully aware, we don’t live in a perfect utopian world. I’d say the current OpenAPI API lifecycle extension definition I have is robust and flexible enough to guide any OpenAPI defined API forward, but what about new and active APIs that may or may not start with an OpenAPI contract. To keep pushing my understanding, as well as definition of the API lifecycle forward I wanted to step back and consider what the beginning of the API lifecycle might look like for a new or active API-to help guide my thoughts I threw together this drawing.

![]({{ page.image }})

I would say [the OpenAPI defined API lifecycle extension I created supports the need for a new API](https://apievangelist.com/2021/08/05/the-dimensions-of-the-api-lifecycle/), and making the assumption that an API will be OpenAPI defined. I wanted to zoom out and consider five separate approaches to the API lifecycle for both new and active APIs — demonstrating how the state of the API will immediately shape how we view the API lifecycle.

1. **New API - Design Using OpenAPI -** This is the approach my process covers so far, assuming that we will be starting with a new API using an OpenAPI contract.
1. **New API - Prototype API from Scratch with Collection -**  Prototyping an API using a collection, which is then mocked and documented as part of the process.
1. **Active API - Manually Define Collection from API Documentation -**  Hand crafting a collection by reading the documentation of an existing API, defining the surface area.
1. **Active API - Generate Collection From Web Application -**  Using a web application and turning on Postman Interceptor in the browser to generate a Postman collection.
1. **Active API - Generate Collection From Mobile Application -**  Using the proxy for a mobile device and then generate the Postman collection by using the application.

I am sure there are other API states out there that will dramatically shift the API lifecycle, but these provide me with a handful of existing approaches. Of course, these approaches to prototyping, defining, and generating a collection (or OpenAPI) from a proxy are not exclusive to Postman, but I am confident that Postman collections provide a unique vehicle for prototyping, defining, and generating what an API does. It may seem odd to create a collection first, but it provides the quickest way to go from idea or existing application to a machine readable, documented, and mocked representation of what an API does.

### Multiple Ways to Arrive at an OpenAPI Contract
Ultimately my goal in this exercise is still to arrive at the point in the API lifecycle where we have a contract for an API. This OpenAPI provides what is needed to then generate documentation, mock servers, and tests in a way that can be validated using the paths and JSON Schema available in the OpenAPI. However, another potential state of the API comes into play at this point, regarding whether or not we intend to iterate upon the API. Meaning, will we be looking to work on another version of this API, or will it’s lifecycle be terminated with this current version? Resulting in something I hadn’t accounted for or thought much about when it comes to to the state of each API, versioning of an API, as well as instance of an API. Adding a little more ambiguity when it comes what the API lifecycle can mean.

Next I am looking to further stress test my API lifecycle definition by delivering APIs using all five of these approaches to the API lifecycle for new and active APIs. I am learning pretty quickly that the assumed state of an API is one of the most influential aspects of how the API lifecycle is viewed, and with it goes a whole lot of assumptions around what is implicit or explicit about any single definition of what the API lifecycle is. This stuff is fascinating. Things like assuming someone will start with an OpenAPI, or will even want to be iterating on the next version of an API—-the lifecycle might involve just documenting and testing the API, and then moving on. Anyways, to help me continue fleshing out I will be applying my approach to a handful of APIs, but I think I will also further interview some of the folks involved in my API lifecycle research, and see what they have to say about how they would deliver API across these five different states.

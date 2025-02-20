---
published: true
layout: post
title: An API Lifecycle Collection Playbook
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1_playbook.png
author:
  name: kinlane
tags:
  - Lifecycle
---
I have a single API request that is becoming the first call I make on a growing number of Postman ccollections. It is a call to the Postman API to pull the OpenAPI for any API I am managing using Postman. This gives me the OpenAPI contract for an API so that I can move forward as part of a variety of stops along the lifecycle, starting with mocking, documentation, and testing as part of an API-first approach, but then also potentially monitoring, securing, generate client code, or even deployment and management of an API. I am working with a number of API service providers to define Postman collections that go well beyond the common APIs you will find in the [Postman API Network](https://explore.postman.com/), helping develop entirely new categories of collections that are designed to deliver different stops along the API lifecycle, so I am looking to develop a playbook for how you create one of these new types of collections, baking your API services into the Postman platform.

### Publish a Team Page

Any partnership with an API service provider and the Postman platform begins with publishing of a team profile to the Postman network. Providing a logo, name, and description for your company, creating your official team profile on the Postman platform—here is my reference API implementation team page from the Postman API network. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/1_playbook.png)

You can manage your team profile under your team settings in your Postman dashboard. You can upload a logo, choose a name, and provide a description. When ready, you can choose to make your profile public, choosing a subdomain for your company on the Postman platform. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/2_playbook.png)

This is the profile for your API services on the Postman platform, accessible by 13 million developers via their desktop application and on the web. All the collections and template you publish for your services will show up here, and be discoverable via Postman and Google search, providing more exposure for the services you are making available to API providers.

### API Lifecycle Collections

Most of the Postman collections available in the API Network are from API providers like [Twitter](https://explore.postman.com/356847) and [Salesforce](https://explore.postman.com/salesforce-developers), but as we are ramping up our partnering across the API lifecycle, we are looking to get a lot more DevOps, DevSecOps, and APIOps collections available that push the API network beyond just SaaS and product APIs. As Postman is expanding to become a full lifecycle API management provider it is partnering for many of these stops along the API lifecycle. Postman’s roots as an HTTP client, debugging, and testing tool provides a base, and we’ve rolled out the builder, documentation, mocking, code generation, and other portions of the lifecycle over the years. But, we aren’t about to reinvent the wheel when it comes to API deployment, management, security, and other more established portions of the API lifecycle, and we are depending on you to deliver these capabilities for us. So, let’s walk through the anatomy of an API lifecycle collection that can help you deliver API lifecycle capabilities to our 13 million users.

### Anatomy of the API Request

When it comes to an API lifecycle collection, it can have as many API calls to your API service provider API as you desire, but there should be a certain anatomy to a request within an API lifecycle collection that focuses on improving upon the life of the API being designed, developed, or managed, leveraging the OpenAPI definition that exists within Postman, as well as the other building blocks that help bring that API to life. Here are the suggested moving parts of an API you can offer as part of an API lifecycle collection.

*   **Providing a Descriptive Resource** - Make your API request as meaningful to the API lifecycle as possible, providing a clear action like monitor, scan, secure, mock, etc. helping the user understand the value being delivered.
*   **Pulls OpenAPI from Postman API** - Include details about the name or id of the API in question as part of the API request, so that you can easily pull the OpenAPI contract using the Postman API, providing the bones of the request.
*   **Deliver the API Lifecycle Value** \- Take that OpenAPI and perform some meaningful stop along the API lifecycle, by mocking, documenting, generating tests, generating SDKs, scanning, fuzzing, securing, monitoring, or any other value to API providers.
*   **Publish Results to Environment** \- Publish all relevant data I will need from the value generated as part of this API call to a Postman environment for me to use. If you mock or deploy my API, provide me with a base URL, if you test, monitor, or secure, provide me with the results.
*   **Return Appropriate Reponse -** Then return an informative response with the appropriate status code, allowing me to easily respond to what just happened when it came to moving my API forward along an established API lifecycle.

You can use this blueprint to create any number of API calls that help move an API forward as part of your organizations well established (or not so well established) API lifecycle. Just ensure that each API request leverages the OpenAPI contract for an API, performs some magic, and then returns all actionable data to an environment so that the results are available at my fingertips within Postman. Allowing me to move forward my API in some meaningful way, then build upon that value using other services you or another API service provider offers, getting me where I want to be with the evolution of my API.

### Publish to Network

After you have published your team, and built a useful API lifecycle collection—[publish it to the Postman API network](https://learning.postman.com/docs/publishing-your-api/add-api-network/). Make sure you provide adequate documentation for your collection, explaining what it does, and how you will need to obtain any credentials, keys, or tokens to make it happen. When ready, publish it to your team profile, making it available to 13 million Postman users.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/3_playbook.png)

Repeat this for every API lifecycle capability your company brings to the table. Sure, you can make a single collection for the entire surface area of your service's API, but it is even better if you make single executable representations of each capability, publish to the Postman API network, and enable users to execute using a Run in Postman button from across all of the documentation for your API services.

### Explore API Lifecycle Collections in the Network

With all of the API lifecycle capabilities you offer as an API service provider defined as Postman collections and published to the Postman network, anyone using Postman can discover via search and browsing, then add to their own workspaces with a single click. With meaningful titles and robust, informative descriptions for all API lifecycle collections, developers can discover exactly that step they need to move forward their APIs according to the API lifecycle they have defined. Picking from a menu of full lifecycle API solutions from Postman, but also from across a diverse range of API service providers who add value—while leveraging Postman as the factory floor for moving each API from idea to production.

### Run in Postman

Once a Postman user finds your API lifecycle collection in the Postman API network, and clicks on the Run in Postman button to add to their workspace, they will need a couple of things before they can actually put to work as part of the API lifecycle. While there may be other details needed, ideally the user only needs two important keys to accomplish whatever they are looking to do as part of managing their APIs. 

*   **Adds Postman Key** \- They will need to obtain their Postman API key from their account and provide, otherwise the Postman API will not be able to be access for pulling the OpenAPI and publishing the environment as mentioned above.
*   **Adds Service Key** \- Next they will need the appropriate keys for the service being provided. Ideally, like Postman, this is just a single API key, which then provides the second half of this API lifecycle collection coin, connecting the dots.

As an API developer I should be able to onboard with a new collection with as little friction as possible. Ideally, I can add keys for all of the API service providers I use to a single or set of Postman environments, and then apply seamlessly across many different API lifecycle collections. Providing the keys to the API factory floor that turn on all stops along the API lifecycle across all APIs and services being developed, then also leveraging the same environments for storing, aggregating, and acting upon all of the results and exhaust of each stop along the way.

### Working With Postman to Deliver the Full API Lifecycle

Postman can’t deliver every stop along the API lifecycle. We are depending on our partners to deliver many of the stops we don’t offer, like deployment, management, and security. We also encourage partners to step up and build upon the services we do, and augment them with industrial grade capabilities that go beyond what we offer. This type of collection might seem like pretty lofty stuff, but it isn’t. Once you begin to realize that our APIs are just managed using APIs, this type of collection makes a lot more sense. Postman collections aren’t just for making requests to a single, or multiple APIs using a runner, monitor, or in the pipeline with Newman. Postman collections are also using APIs to mock, document, test, secure, govern, and deliver every other stop along the API lifecycle. These are the Postman collections I am looking to populate the Postman API network in coming months. Working with partners to help me deliver all of the capabilities our developers are going to need to move their APIs forward in a consistent and scalable way across their teams.

If you have questions about how all this works, feel free to reach out. When it comes to reaching developers with your API services, doing it within the tools they are already using makes a lot of sense. Postman is ubiquitous across startups all thew ay to enterprise organizations. It is how developers are making sense of the rapidly expanding API landscape around them, so it make sense for them to also use to make sense of the API lifecycle. Helping them more rapidly move forward the APIs they are developing, in a consistent way across teams, with quick access to any of the new services they will need to iterate upon the API infrastructure they are delivering. I am going to keep working on this API lifecycle collection playbook until I have a short, concise way to demonstrate how API service providers can reach Postman developers with their API services, using Postman collections that leverage OpenAPI contracts to move each API forward across the factory floor, until it is ready for production.
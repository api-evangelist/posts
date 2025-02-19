---
published: true
layout: post
title: A Dynamic Salesforce REST API Postman Collection Builder Collection
image: >-
  https://kinlane-productions2.s3.amazonaws.com/postman-collections/salesforce/salesforce-collection-builder-3.png
author:
  name: kinlane
tags:
  - Collections
  - Salesforce
---
[I have been working on developing new ways to make the Salesforce API more accessible and easier to onboard with over the last couple of months](http://apievangelist.com/2019/12/18/taming-the-salesforce-api-scope/), helping reduce friction every time I have to pick up the platform in my work. One of the next steps in this work is to develop a prototype for generating a dynamic Postman collection for the Salesforce REST API. I had created a Postman collection for the API earlier, but the Salesforce team pointed out to me that the available APIs will vary from not only version to version, but also user account to user account. With this in mind I wanted to develop a tool for dynamically generating a Postman collection for the Salesforce API, and as I got to work building it I realized that I should probably just make the tool a Postman collection itself (mind blown).

To help make on-boarding with the Salesforce API easier I created [a Postman collection that uses the Salesforce API to autogenerate the Postman collection based upon the available objects and endpoints for the Salesforce REST API](https://github.com/api-evangelist/salesforce-api-collection-builder). The Postman collection has three requests within the collection to accomplish the creation of a dynamic collection. The first request pulls all the latest versions for the Salesforce API, using the Salesforce API.

![](https://kinlane-productions2.s3.amazonaws.com/postman-collections/salesforce/salesforce-collection-builder-1.png)

Once I have the version of the Salesforce API I am targeting for a build I add it to the Postman environment I am using to define the operations of my Postman collection, and then I pull the list of available objects for this version, and for my own Salesforce account.

![](https://kinlane-productions2.s3.amazonaws.com/postman-collections/salesforce/salesforce-collection-builder-2.png)

The objects that exist will vary for each Salesforce account, as well as version, making it pretty critical that that any Postman collection is dynamic, being generated from this personalized list of objects. The next request in our Salesforce Postman collection builder is the build, which generates individual requests for all of the available objects. After you run, the response just shows the list of available objects, but the test script for the request loops through each object and generates a set of requests from the derived values.

![](https://kinlane-productions2.s3.amazonaws.com/postman-collections/salesforce/salesforce-collection-builder-3.png)

After the build request is sent, it will take 30-60 seconds for things to build, but once it does you should see a new folder called “Generated Requests” that has over a 1000 individual API requests in it organized by folders for each object. Providing a complete Postman collection for the entire surface area of the Salesforce REST API.

To use the Salesforce Postman collection builder collection you will need to [setup an OAuth application in your own Salesforce account](https://github.com/api-evangelist/oauth-apps/blob/master/salesforce.md), and add the settings to the authorization for your Postman collection.

![](https://kinlane-productions2.s3.amazonaws.com/postman-collections/salesforce/7-salesforce-authorization-settings.png)

You will also need a Postman environment with your base URL for your Salesforce instance, as well as the version you wish to use, and the API key for your Postman account, which you can find under your account settings.

[I have published the Salesforce REST API Postman collection builder to GitHub,](https://github.com/api-evangelist/salesforce-api-collection-builder) as well as the environment I use. If you have any questions feel free to submit an issue there, and I’ll see what I can do. This is all just a proof of concept, and I am still determining what the road map for this Salesforce API Postman collection builder will be. So if you have any needs, I’d love to hear them.
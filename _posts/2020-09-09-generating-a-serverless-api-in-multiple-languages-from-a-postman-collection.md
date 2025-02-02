---
published: true
layout: post
title: Generating a Serverless API in Multiple Languages From a Postman Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_09_09_at_3.55.41_pm.png
author:
  name: kinlane
tags:
  - Serverless
  - Collections
---
I am continue my storytelling around the work I am doing with Nimbella to help define what the future of API deployment looks like from within Postman, and next up on my list to do some storytelling around [the Nimbella Postman Plugin](https://nimbella.com/integrations/postman), which allows you to deploy the server-side scaffolding for an API in seven programming languages from a Postman collection. [Nimbella is a dead simple way to deploy serverless APIs and applications](https://nimbella.com/), which also possesses a plugin infrastructure that lets you extend the platform, and one of the plugins the Nimbella team has developed allows you to design your APIs using a Postman collection, then generate your serverless API project in Go, Node.js, Typescript, Python, Java, Swift, or PHP. 

Once you have signed up and logged into Nimbella, and installed the CLI for the platform, you can add the Postman plugin at the command line using:

*   _**nim plugins add postman**_

[You can find the Postman plugin for Nimbella on Github](https://github.com/nimbella/nimbella-cli-plugins/tree/main/postman) if you are looking to take things to the next level, but installing it is pretty dead simple with the one CLI statement. [You can find all the usage options available for the Nimbella Postman CLI plugin on the GitHub README](https://github.com/nimbella/nimbella-cli-plugins/tree/main/postman#usage-options), but here is a basic command that will generate an API project from any of your Postman collections.

*   _**nim project create -s postman -i Products --language js**_

This creates a new local Nimbella API project for me using a Postman collection in one of my Postman workspaces simple named “Products” in JavaScript. As soon as I want this API to be available in the cloud, I simply run this command:

*   _**nim project deploy .**_

Now I have my API. Of course I will still have to wire up the API to any actual database, functionality, or 3rd party AP or system I will be working with, but it gives me the skeleton of my serverless API in seconds—all originally defined in Postman as a collection. My API is in Node.js, but I can quickly do it in any of the other six languages, rapidly producing the most common and repetitive aspects of developing an API, while also abstracting all the complexities of delivering a serverless API that will scale as promised. What I love is the seamless interaction with Postman that Nimbella has introduced. Meaning, I can define, mock, and document my API using Postman, then once the collection is ready I can take it beyond just mock, and actually generate the server side code that will ultimately deliver the API. Nimbella brings the IAM, state management, logging, scaling, and load balancing to the table—doing the heavy lift when it comes to delivering an actual serverless API.

The Nimbella Postman plugin seamlessly works with Postman using the Postman API to automate the deployment of your APIs, augmenting an API-first approach to delivering APIs using Postman and Nimbella to:

*    Automatically generate Nimbella Project structure with stubs, unit tests, and client code.
*    Generate language-specific project configuration, package/dependency management, and .gitignore files.
*    Generate Readme using collection description.
*    Update dummy API endpoints or non-existent URLs in the collection document with Nimbella namespace URLs that you get post-deployment.
*    Augment collection document with new Postman Tests.
*    Sync the updated collection to Postman Cloud.
*    Auto-convert version 1.0 collection into version 2.0.
*    Fetch responses in the collection from deployed URLs post-deployment.
*    Sync collection document to update in the Postman App.

Nimbella is one of what I’d consider to be our first API lifecycle partners at Postman. Meaning, while Postman does service a number of different stops along the API lifecycle such as mocking, documentation, testing ,monitoring, etc, you can’t actually deploy an API using Postman. So we are looking for partners to step up and help us deliver these stops along the API lifecycle for us. What Nimbella has delivered with their Postman plugin isn't just about enabling developers to deploy the scaffolding of their APIs using a Postman collection, but they have seamlessly integrated their platform with the Postman platform, taking full advantage of collections as well as the Postman API, to make deployment a seamless experience without actually changing the Postman desktop or web applications. These are the types of partners we are looking for when it comes to delivering across all stops along the API lifecycle. 

[My storytelling around Nimbella began with just talking about what they deliver](http://apievangelist.com/2020/09/09/smoothing-the-rough-edges-off-serverless-with-nimbella/), and now their innovative Postman plugin. Next I am going to look at their OpenAPI plugin which does the same thing as the Postman plugin, but from an OpenAPI definition. In the Postman universe either of these approaches to deploying an API are acceptable. If you want the truth for your API to be a collection, it can be a collection. If you want the truth to be an OpenAPI definition, it can be an OpenAPI definition. This Swiss Army Knife approach to the API lifecycle is what Postman excels at. It isn’t about there being one way to deploy an API--it is about accommodating many different approaches to delivering your API infrastructure. I think that Nimbella’s approach to API development fits with our vision of the API lifecycle, and provides many different ways for you to bring your APIs to life. Partnering with Postman to help us deliver across the stops along a modern API lifecycle, while also delivering on the promise of a true [multi-cloud approach to delivering serverless APIs.](https://nimbella.com/)
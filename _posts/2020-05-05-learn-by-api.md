---
published: true
layout: post
title: Learn by API
image: >-
  https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/2-visualizer-experience.png
author:
  name: kinlane
tags:
  - 101
---
I was playing around with [my co-worker Sue Smith’s Learn by API project today](https://glitch.com/@sue.smith), and found it to be a pretty powerful usage of Postman for not just teaching users about Postman, but also teach them about healthy practices when it comes to API design. The [Learn by API Postman collection](https://explore.postman.com/templates/7499/learn-by-api) provides an interesting building block for development of other introductory API concepts, but also API design concepts in service of a formal API governance strategy across an organization. I recommend you just click on the Run in Postman button for the Learn by API to collection to better understand the potential, but I’d also like to break down what she did to help illustrate how it could be used as an API education and training blueprint.

### Learning Collection

The Learn by API collection is a single request wrapped in a portable Postman collection, allowing anyone ([with Postman installed](https://www.postman.com/)) download into their desktop client and execute. Teaching anyone (developers or non-developers) about the fundamentals of Postman, API design, as well as how the web works in general. To begin learning, all you do is click send in Postman once you have imported the collection, and you’ll will be introduced to the next step.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/1-collection-request.png)

The collection introduces each user to how Postman makes requests, how APIs are designed by showing the mechanics of how the web is working behind our web and mobile applications. It also really shows how Postman is all about helping you understand APIs by peeling back the layers of HTTP requests and responses in a hands on way.

### Visualizer Experience

Once you have clicked send you see the response body as JSON, however if you click on the Visualize tab. Here you are given an HTML view of the tutorial you have initiated. The collection helps you understand what you just set into motion by sending the request, fusing the tutorial with the response of the request you initiated. Immediately immersing you in the fundamentals of how the web and APIs work.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/2-visualizer-experience.png)

I really like this one because if shows off the potential for Postman visualizer reaching a new audience. I like it because it demonstrates how Postman helps people understand the API landscape that has emerged behind the web, mobile, and device applications we are all building. The Learn by API collection Is awesome because it walks you through all of this.

### Query Parameters

Next, you are introduced to a fundamental building block of the web and APIs with a hands-on approach to tweaking a query parameter to familiarize ones self with how you can begin manipulating the web around you. Demystifying an essential building block of the web that everyone sees every day, and putting it within reach of anyone who is curious enough to understand what is going on.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/3-query-parameter.png)

This tutorial could easily be customized to serve a specific type of parameter that is in alignment with an organizations wider API governance strategy. Talking about not just query parameters in general, but taking a specific query parameter that has been standardized for a common use case, upgrading this tutorial to be about API governance training as well as API design literacy.

### Path Parameters

Now the tutorial moves you into path parameters revealing that many of the paths you are navigating are actually dynamic and (hopefully) there is a larger information strategy being applied. To continue with the tutorial you just have to enter in a category value for your path parameter and click send to move on.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/4-path-parameter.png)

This is an important step in helping folks understand that not everything has to be a query parameter and that you can be more thoughtful about how you design your API resources, as well as helping API consumers understand the many dimensions that exists with each API path that is published. Again, this step could easily be co-opted and made to serve a more formal API governance strategy.

### POST Request

After parameters the Learn by API collection walk through helps us begin to understand the variety of HTTP methods that are available to use, helping us expand beyond just consumption on the web to actually creating and defining the web. To continue you have to switch from GET to POST, showing you how the web works, but also how Postman helps you navigate these layers of the web.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/5-post-request.png)

You can quickly see how this type of learning collections could be quickly expanded to introduce PUT, PATCH, and DELETE, helping further round off the vocabulary of the API curious. Opening up a whole new world for them when it comes to understanding how web and mobile applications are working, allowing you to poke around and understand it all works, and eventually Make it work for you.

### Body Data

Once you learn about POST methods you are introduced to how you can send along a JSON body with each request. Revealing one of the common workhorses involved with moving your digital bits and bites off your computer and mobile phones into the cloud, allowing you to not just consume but also help construct the web.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/6-body-data.png)

GET is the read, and POST is the write for the web. In just six short steps, users of the [Learn by API collection](https://explore.postman.com/templates/7499/learn-by-api) should have more of a grasp of how URLs work and how they can manipulate them. They are also taken beyond what they can usually see in a web browser, breakdown the building blocks of HTTP like methods and request boxes. It is quite a bit of API fundamentals in just six short steps, revealing a lot more potential when it comes to a full blown API life cycle curriculum.

### The API Behind

I really like that at the last step you are left with your next step is learning that the API behind the tutorial is available on Glitch and it is something you can easily fork on your own. Allowing you to see how the API requests for the tutorial are handled, but also providing you with a quick blueprint that you can fork, evolve, and make to serve your purposes.

![](https://kinlane-productions2.s3.amazonaws.com/postman-tutorials/learn-by-api/7-next.png)

The Learn by API collection concludes with telling you how to find the collection using your Postman client and then leaves you with the most essential ingredient—a Run in Postman button for the collection. It is kind of API collection inception to have a Run in Postman button embedded within a collection that you are running in Postman. (Mind blown)

### API Literacy

Ok, that is a quick glance at the future of API literacy folks. There is no better way to learn about how the web and APIs work than using Postman and Glitch. So why not develop all levels of API courses as Postman collections using a  Glitch backend, making learning about APIs a hands on experience that anyone can immerse themselves in. Using APIs to teach about APIs. Using API artifacts to standardize how we teach about our APIs. Using APIs and API artifacts to help us understand, interact with, troubleshoot, and define how the applications around us work. Sue’s collection opens up an entirely new classification of Postman collection for me—the learning collection.

I am going to adopt Sue’s models as [Union Fashion’s approach to teaching team members about the company’s API strategy](https://github.com/union-fashion/home), life cycle, and approach to governance. Hopefully I can help contribute to Sue's model, keep using Postman and Glitch as the underlying fabric, which will allow any of the learning blueprints that I create to be easily forked, replicated, evolved, and used by the community. It is some slick API juju that needs to be shared widely, helping us all ramp up API literacy across developer communities around the world. API education and training for individuals within your organization is one of the most important areas you can be investing in, and sadly it is one of the most deficient areas when it comes to some of the API operations I have visibility into. I’m hoping Postman + Glitch can change that. ;-)
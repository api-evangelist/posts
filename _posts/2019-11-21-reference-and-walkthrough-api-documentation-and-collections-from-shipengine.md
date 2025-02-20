---
published: true
layout: post
title: Reference And Walkthrough API Documentation And Collections From ShipEngine
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/walkthrough_screenshot_2_zoom.png
author:
  name: kinlane
tags:
  - Reference
  - Documentation
  - Collections
---
One of the things I have been thoroughly enjoying as part of my work with Postman is the many different ways in which Postman collections are being work. If you’ve followed my blog over the years you know I’ve been a big supporter of OpenAPI—it has changed how we communicate about our APIs. Until I began working with Postman I viewed Postman collections as just another API definition like OpenAPI, where you can define the surface area of your APIs. My perspective began changing once I learned about Postman environments, but my world has been completely shifted once I began learning the different ways in which Postman customers are putting collections to work as part of their API operations.

Reference Postman collections is the most common approach you will find in the wild, outlining all of the API paths that exist for an API, but over the last couple months I’ve seen entirely new types of collections emerge, including workflow, capability, maintenance, governance, and now walkthrough Postman collections. [I saw ShipEngine tweeting out about giving a live demo of their “fancy new @getpostman docs” tonight at the #AustinAPI meetup](https://twitter.com/ShipEngineAPI/status/1197656248121987072), and after landing on [the ShipEngine documentation home page](https://www.shipengine.com/docs/postman/) I found two types of Postman collections, with supporting documentation. Providing two distinct ways of communicating around the ShipEngine APIs, helping provide one set for on-boarding new users, and another for making sure every API path is documented and accessible.

First they provide **[ShipEngine Walkthrough](https://documenter.postman.com/view/305204/SW7XbA6V?version=latest)**, which provides collection is a guided tour through ShipEngine's most popular features, reducing the overhead for any developer looking to quickly understand what the ShipEngine API provides—highlight the following capabilities.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/walkthrough_screenshot_4_zoom.png)

*    Create and download shipping labels
*    Calculate shipping costs for any package
*    Compare rates across UPS, FedEx, USPS and other carriers
*    Track packages in real-time or on-demand
*    Parse and validate mailing addresses for any country on Earth!

Then ShipEngine provide with **[ShipEngine Reference](https://documenter.postman.com/view/305204/SW7W5V6o?version=latest)**, which is a collection that contains sample requests for every ShipEngine API endpoint, providing a complete set of documentation for developers to put to work. Ensuring that if you want to dive into all the nitty gritty detail of the ShipEngine API and what it can do—you have what you need.

I really like this approach to API documentation. Especially for powerful APIs that have a lot of different API paths available. It makes learning about any API much easier, providing the most common resources developers are looking for, and keeping everything else just one click away. It really shows the versatility of Postman collections over OpenAPI, and pushes back on older notions that you just have one set of API documentation for all of your APIs. In this new Postman collection driven world you can develop many different versions of your API documentation designed for different audiences—helping reduce the cognitive load for your most common use cases.

I am working hard to learn about, and document the different ways in which Postman customers are using collections to communicate about what is possible with their APIs. It is this type of innovation with API definitions that really gets me excited. It moves us beyond the boring technical details of APIs and pushes us to communicate in new ways about what is possible. Moving the API conversation closer to real world business scenarios and use cases, making it easier to tell stories about what is happening. Making all of this API storytelling much more fun, and easier to craft stories that reach beyond technical circles, driving more meaningful traffic to my blog, and the Postman API universe.
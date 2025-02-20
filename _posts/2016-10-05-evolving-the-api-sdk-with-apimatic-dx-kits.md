---
layout: post
title: Evolving The API SDK With APIMATIC DX Kits
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/apimatic_dx_kits.png
atomdate: 2016-10-05T22:00:00.000Z
tags:
  - SDK
---
[![](http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/company/logos/apimatic-logo.png)](http://apimatic.io)

I've been a big supporter of [APIMATIC](http://apimatic.io) since they started, so I'm happy to see them continuing to evolve their approach to delivering SDKs using machine readable API definitions. I got a walkthrough of their new DX Kits the other day, something that feels like an evolutionary step for SDKs, and contributing to API providers making onboarding and integration as frictionless as possible for developers.

Let's walk through what APIMATIC already does, then I'll talk more about some of the evolutionary steps they are taking when auto-generating SDKs. It helps to see the big picture of where APIMATIC fits into the larger API lifecycle to assist you in getting beyond any notion of them simply being just an SDK generation service.

**API Definitions**  
What makes APIMATIC such an important service, in my opinion, is that they just don't speak using modern API definition formats, they speak in all of the API definition formats, allowing anyone to generate SDKs from the specification of your choice: 

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_transformer.png)](http://apimatic.io)

*   API Blueprint
*   Swagger 1.0 - 1.2
*   Swagger 2.0 JSON
*   Swagger 2.0 YAML
*   WADL - W3C 2009
*   Google Discovery
*   RAML 0.8
*   I/O Docs - Mashery
*   HAR 1.2
*   Postman Collection
*   APIMATIC Format

As any serious API service provider should do be doing, [APIMATIC then opened up their API definition transformation solution as a standalone service and API](https://apitransformer.com/). This allows this type ofAPI  transformations to occur and be baked in, at every stop along a modern API lifecycle, by anyone.

**API Design**  
Being so API definition driven focused, APIMATIC needed a practical way to manage API definitions, and allow their customers to add, edit, delete, and manipulate the definitions that would be driving the SDK auto generation process. APIMATIC provides one of the best API design interfaces I've found across the API service providers that I monitor, allowing customers to manage:

*   Endpoints
*   Models
*   Test Cases
*   Errors

Because APIMATIC is so heavily invested in having a complete API definition, one that it will result in a successful SDK, they've had to bake healthy API design practices into their API design interface--helping developers craft the best API possible. #Winning

**SDK Auto Generation**  
Now we get to the valuable, and time-saving portion of what APIMATIC does best--generate SDKs in 10 separate programming language and platform environments. Once your API definition validates, you can select to generate in their preferred language.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2016_10_04_at_4.45.42_pm.png)](http://apimatic.io)

*   **Visual Studio** \- A class library project for Portable and Universal Windows Platform
*   **Eclipse** - A compatible maven project for Java 5 and above
*   **Android Studio -** A compatible Gradle project for Android Gingerbread and above
*   **XCode** - A project based on CoCoaPods for iOS 6 and above
*   **PSR-4** \- A compliant library with Composer dependency manager
*   **Python** - A package compatible with Python 2 and 3 using PIP as the dependency manager
*   **Angular** \- A lightweight SDK containing injectable wrappers for your API
*   **Node.js -** A client library project in Node.js as an NPM package
*   **Ruby** \- A project to create a gem library your API based on Ruby>=2.0.0
*   **Go** - A client library project for Go language (v1.4)

APIMATIC takes their SDKs seriously. They make sure they aren't just low-quality auto-generated code. I've seen the overtime they put into make sure the code they produce matches the styling and the reality on the ground for each language and environment being depoyed.

**Github Integration**  
Deploying your API SDKs to Github is nothing new, but being able to autogenerate your SDK from a variety of API definition languages, and then publish to Github opens up a whole new world of possibilities. This is when Github can become a sort of API definition driven engine that can be installed into not just the API life cycle, but also every web, mobile, device, bot, voice, or any other client that puts an API to use.

This is where we start moving beyond SDK for me, into the realm of what APIMATIC is calling a DX Kit. APIMATIC isn't just dumping some auto-generated code into the Github repo of your choice. They are publishing the code, and now complete documentation for the SDK to a Github README, so that any human can come along and learn about what it does, as well as any other system can also come along and put the API definition auto-generated code to work.

**Continuous Integration**  
The evolution of the SDK continues with...well, continuous integration, and orchestration. If you go under the settings for your API in APIMATIC, you now also have the option to publish configuration files for four leading CI solutions:

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/apimatic_dx_kits.png)](http://apimatic.io)

*   **Generate Appveyor** - Generate Appveyor configuration file?
*   **Generate CircleCI** \- Generate CircleCI configuration file?
*   **Generate Jenkins** - Generate Jenkins configuration file?
*   **Generate Travis -** Generate Travis CI configuration file?

APIMATIC had already opened up beyond just doing SDKs with the release of their API Transformer solution, and their introduction of detailed documentation for each kit (SDK) on Github. Now they are pushing into API testing and orchestration areas by allowing you to publish the required config files for the CI platform of your choosing.

I feel like their approach represents the expanding world of API consumption. Providing an API and SDK is not enough anymore. You have to provide and encourage healthy documentation, testing, and continuous integration practices as well. APIMATIC is aiming to "simplify API Consumption", with their DX Kits, which is a very positive thing for the API space, and worth highlighting as part of [my API SDK research](http://sdk.apievangelist.com/).
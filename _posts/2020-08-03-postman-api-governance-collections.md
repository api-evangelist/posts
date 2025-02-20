---
published: true
layout: post
title: Postman API Governance Collections
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/screen_shot_2020_08_03_at_5.16.56_pm.png
author:
  name: kinlane
tags:
  - Governance
  - Collections
---
I have been moving forward a number of new types of Postman API collections as part of [my Union Fashion reference implementation at Postman](http://union.fashion/), and one of the new types I'm using as part of different conversations are my API governance collections. I have two collections I am moving forward as a proof of concept (POC), helping map out how collections can be used to not just provide and consume APIs, but also help make sure they are more consistent in how they operate.

*   **[Governance (Design)](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest)** - This is just the governance of the design of the API, and since this is what most folks think of when they talk about API governance, it is the place most people should start this conversation.
*   **[Governance (Lifecycle)](https://documenter.getpostman.com/view/10394726/SzYUagbA?version=latest)** - This is for the governance of the entire API lifecycle from start to finish, really helping me push the boundaries of what a collection is for, but also how we provide guardrails for our APIs.

The API design governance collection is interesting for me, but pushing myself to think about what API governance looks like for the entire lifecycle has helped me see things differently, and has allowed me to realize that you can't govern what you don't have defined, and aren't measuring. 

### Some Initial Thoughts

This is all still a work in progress, so I am still working to make more self-service, and something anyone can put to use as part of their operations. Here is my brain dump of thinking going into this work, which will hopefully articulate a little more about where I am at with the work and how you can help provide feedback and thoughts on where I should go next.

*   **Why Collections? -** I am skeptical that any software should bake in "governance" features into their product as governance means different things to different folks, and while we can come up with a standard set of rules that will fit most enterprise organizations, I feel that the path to success will ultimately defined by providers as the remix with existing governance rules, and augment with their own.
*   **OpenAPI as Source of Truth** - These governance collections are focused on pulling the OpenAPI from the API builder in a particular workspace using the Postman API. We aren't going to test the API, but the contract for the API to see if it meets common API design requirements defined by this collection.  
*   **Leveraging Test Results -** These scripts use the exact same testing infrastructure as our customers use to test their APIs, but instead of pulling the response for an API, we are using the OpenAPI definition stored in API Builder. The OpenAPI is considered the central contract for each API, and can be used to accomplish a variety of design governance tasks.
*   **Governance Environment** \- This concepts rests on a new type of environment, and going beyond just developing, staging, or production environments and acknolwedging that we will need authentication tokens as part of API governance, and we'll also need somewhere to store the governance test results, allowing environments to be used as part of making sense how APIs are moving forward, or not.

There are still some serious rough edges on this approach, but I feel pretty confident that they can be smoothed out over with some work on the Postman API. Cognitively I find it is a tough shift for most to see collections used in this way, but with some work on the documentation for this collection I think we can quickly get developers over the hump, and the fact that it uses some of the same Postman features they are using for regular testing APIs will ultimately help make this relatable. Additionally, I also feel like the potential of definining governance as some standardized collections that anyone can download and reverse engineer, then be able to augment, extend, and remix as they desire will help it make governance more successful for different teams.

### Governance Collection Configuration

Most of the requests in the collection are just calling the Postman API, pulling the OpenAPI for APIs being targeted with this governance. Because of the robustness of the API for our APIs, it takes four API calls to get the latest OpenAPI, requiring the id for the API, version, and individual schema. It is something that is pretty easy to fix with a new API endpoint pulling the latest version and schema for an API by name, but until then there are two separate options for getting the ids you need to actually pull the OpenAPI and evaluate as part of design governance.

*   **Option 1 -** This is a manual series of API calls you make to pull the individual API to be governed, then the version, and schema. Each individual request has it's own instructions.
*   **Option 2 -** This is a single API call with a test script to make all of the API calls necessary, abstracting away the complextiy. You just have to provide the name of your workspace, API, and the version of the schem that you want to work with.

Ideally you'd just have to set the name of the API being targeted for governance in the environment, and each of the individual governance requests would be able to resolve the OpenAPI schema it needs. While this concept can be tough for folks just getting started with the concept of a governance API, it is minor in my mind, and something that will easily be dealt with in the near future with a new Postman API endpoint.

### Establishing a Base Set of Governance Rules

I have a master list of a couple hundred rules I'd like to see as part of governance, but I wanted to start with just a handful of governance questions that API providers will want to ask of their API designs, and are easy to answer using an OpenAPI definition. Here is the outline of questions I want to ask of Union Fashion APIs when it comes to design, each reflected as a single request.

*   [**Info  
      
    **](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#935a86a8-5902-4e07-aabc-250920b08bca)
    *   [Does the name of the API meet requirements?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#f6b82607-e55d-4e23-9627-ec66f68638d4)
    *   [Does the description of the API meet requirements?  
          
        ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#c65c50ce-821e-4470-84d8-cb67e2ca34fd)
*   [**Paths  
      
    **](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#c4d2b569-9c99-4800-95da-80988ce11207)
    *   [Are paths using words?  
          
        ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#a1dabcd5-649b-4e0b-8e72-941c552caad1)
    *   **[Methods  
          
        ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#3ac06feb-1dee-420b-9844-c502a2b3cd4f)**
        *   [**Parameters  
              
            **](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#ef280bdb-45cc-42a0-b637-e7803b686afe)
            *   [Are all parameters using camelCase?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#0b76b678-6bec-41c7-8382-adc608b8825d)
            *   [Do all parameters have descriptions?  
                  
                ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#ca5259c8-e19f-41f3-8557-f3d0c998fb15)
        *   [**Responses  
              
            **](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#ea3caaca-16ec-4e00-be63-e1fcd4784b5d)
            *   [Do all methods have an HTTP Status Success (2xx)?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#d22f7372-62af-4e19-b213-af5ac8e06c6e)
            *   [Do all methods have an HTTP Status Failure (5xx)?  
                  
                ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#e36730f0-26ef-4b6d-9e6f-8333e86673e1)
        *   [Does GET, POST, PUT, and DELETE exist for all resources?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#dba4cbad-5d3c-40c1-abe4-6c94e8a58e3f)
        *   [Do all methods have summaries?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#3dd5e8d1-764c-4b5b-846b-24ccfe6a6197)
        *   [Do all methods have descriptions?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#af5192e2-8236-4edb-9a78-99eb44d484ec)
        *   [Do all methods have operation ids?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#1fdbfbbe-96a4-408c-ac2e-087f84dfb118)
        *   [Do all methods have tags?  
              
            ](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#50e3581a-c211-4b89-b6dd-e60fe3fe20eb)
*   **[Schema](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#0e8ca664-99d3-420d-ab03-aa320bcfdad0)** [](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#0e8ca664-99d3-420d-ab03-aa320bcfdad0)
    *   [Do all schema have properties?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#f22aea80-03cf-4d1d-b568-dfb5551eaa1c)
    *   [Do all schema properties have descriptions?](https://documenter.getpostman.com/view/10394726/T1DwbZC8?version=latest#a9201e43-1f59-4c4d-a94a-1375a10f8d84)

Most of these are simply looking for the presence of something in the OpenAPI definition. I am purposefully not using JSON Schema validation as I am trying to push these script beyond what JSON Schema is good for. The test scripts for each inidividual is pretty hacky and would benefit from the development of modules to abstract away the complexity, but it gets the job done as is. I'd like to clean up before I expand to too many individual governance collection requests, and consider the role a rules engine like [Spectral](https://github.com/stoplightio/spectral) would play. I'm a big fan of Spectral, but I am purposely considering a hackier approach with scripts to help stick with what developers know--JavaScript. I have just begun moving these governance request beyond just basic OpenAPI lookups, something you can with the "Are path using words?", which uses a dictionary to validate the design of API paths, something that can't be done with JSON Schema or a rules engine--each type of questions I ask helps me learn a little bit more.

### The Benefits of API Governance Collections

After thinking long and hard about API governance, and thinking about how organizations and their teams of developers get things done within the enterprise, I settled in on using collection in this way. I am still defining the benefits of this approach, which is why I am writing this post, but here is what I have so far.

*   **Modular Requests** - Each question you want to ask is defined as a single request. Right now most of these API requests are just pulling the OpenAPI using the Postman API, but in the future it can query any API infrastructure looking for answers to the question.
*   **JavaScript Based -** While there is a lot of development to be done on cleaning up the scripts, the fact that questions are asked in JavaScript will go a long way when it comes to on-boarding developers with this concept, over teaching them a new language or vocabulary.
*   **Networked** - Individual requests and collections of requests can be published to the private or public network, allowing other developers to discovery, download, reverse engineer, and ultimately remix using API governance rules. Making for a pretty rich world of defining and sharing patterns that help organizations deliver more consistent APIs.
*   **Common Rules** \- Default sets of common questions that need asked as part of the API design process can be bundled and made available for API providers who are just beginning their journey, and there is plenty of room for more advanced sets of rules, as well as custom rules to be developed.
*   **Automation** - Postman collections can be run as manually using Runners within the web or desktop versions of Postman, and the scheduled to run from multiple regions using monitors, or directly from the pipeline using the open source Newman runner, allowing governance to be defined as collections and then execute wherever they are needed.
*   **Open Source -** Postman Collections and Newman are both open source, so API providers can define, apply, and evolve their rules without the friction of any specific vendor. Allowing API governance rules to be developed in or outside of Postman, and executed as part of any pipeline, tooling, or service provider that supports collections.

![](https://s3.amazonaws.com/kinlane-productions2/algo-rotoscope/square/C32Eg8bUEAEa_gj_square.jpg)

While I believe the scripting portion of this approach is going to quickly become pretty unwieldy, and will need much more standardization, a possible YAML or JSON rules engine, and other housekeeping support--it shows one possible future for governance. One where API developers can test the design and implementation of their APIs using the same tooling and scripting language. I don't think we can develop a one-size fits all approach to API governance, and I think there will be a solid core of common patterns we can define and apply, but I think there will be a pretty significant long tail to what is actually needed by enterprise organizations in the trenches, and they will need full control over being able to deliver API governance on their own terms.

I have a lot of work ahead of me to polish these collections, as well how I talk about these collections. In addition to the API design collection, I am looking to define API governance for other stops along the API lifecycle. If you are feeling brave, feel free to take a look at the full API life collection to get a taste of what I am talking about. Ultimately I believe that all APIs should be governed from start to finish, but as I've learned from pushing API governance beyond just API design, we are going to have to move the concept of observability beyond just monitoring and testing of APIs, and we are going to have to tune into the existing outputs from the infrastructure behind our APIs as well. API governance is going to depend on artifacts, and not just OpenAPI. We will have to be able to monitor the entire factory floor we are using to operate our APIs, then leverage and extract meaningful artifacts, and work to benchmark and measure more stops along the API lifecycle. Otherwise we'll never quite be able to get a handle on what is going on within the chaos of day to day operations.
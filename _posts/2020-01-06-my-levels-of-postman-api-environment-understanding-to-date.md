---
published: true
layout: post
title: My Levels of Postman API Environment Understanding To Date
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/la_muse_lighthouse_36679514616_o.jpg
author:
  name: kinlane
tags:
  - Environments
---
I have been a pretty hardcore Postman user since the beginning. Over the years I felt like I understood what Postman was all about, but one of the first concepts that blew up my belief around what Postman could do was the concept of the Postman environment. Like other Postman features, environments are extremely versatile, and can be used in many different ways depending on your understanding of Postman, as well as the sophistication of the APIs and the workflow you are defining using Postman. My Postman environments awakening has occurred in several phases, consistently blowing my mind about what is possible with Postman and Postman collections.

Postman environments are already one of the edges I have given Postman collections over a pure OpenAPI definition—it just provides more environmental context than you can get with OpenAPI alone. However, at each shift in my understanding of how Postman environments can be used, entirely new worlds opened up for me regarding how that context can be applied and evolved over time across many different APIs. Resulting in four distinct layers of understanding about how Postman environments works and can be applied in my world—I’m sure there will be more dimensions to this, but this is a snapshot of how I see things going into 2020.

### Environments Settings For Single API Calls

I have to start with the ground floor and express why environments matter in the first place, and provide an edge over OpenAPI all by itself. Being able to define key / value pairs for authorization and other variables across one or many different API collections helps speed up the on-boarding, orchestration, and reuse of API requests within those collections. It quickly allows you to switch users or other context, but still use the same collection of API requests, shifting how we automate and orchestrate across our API infrastructure. However, simply putting the base url for your API as a variable, and defining tokens and other secrets is just the beginning—there is so much more that you can do with an API environment.

### Using Environments To Chain APIs Together

The next most common way of using an environment is to think of it for chaining API calls together, and then deploying a runner to execute as part of a CI/CD pipeline, or as a Postman monitor. It can be effective for grabbing values from an API response and storing in an environment and then using those values in the next API call. This is a much more efficient way of "chaining" API calls together than actually mapping and binding an API response to an API request. Storing responses and then applying as part of a request helps keep things more flexible and reusable, allowing you to break the chains associated with API chaining—revealing it is a pretty narrow way to look at API orchestration. Where you really break free is when you stop seeing things as just a sequence, but about terraforming across an environment with multiple API calls.

### Evolving Environments With Multiple API Calls

Once you realize that any variable within an environment can be used as part of the request and response for any number of APIs, you stop seeing just individual APIs and the order in which they can be executed, and you begin to see, well, an environment that can be manipulated. Environments provide an API runtime storage that can be used across many manual API collection runs, automated runs within CI/CD pipelines with Newman, or on a schedule using monitors. Pulling from, and contributing to the desired environmental state, while maximizing both humans and other systems in the orchestration of the development and evolution for he environment. Once you can realize this in action across many different APIs, across many different platforms and geographic regions, the possibilities for developing more meaningful API workflows reaches entirely new heights. 

### Environmental Access & Management Via API

Going from storing my tokens and keys, to chaining APIs together, all the way to orchestrating with many different APIs shifted my view substantially, but once I figured out I can also access my environments using the Postman API, it seismically disrupted things once again. This meant I could terraform a specific Postman API environment using many different APIs across many different API providers, over a specified time frame, and then also access that environmental definition via an API and use in other applications. This meant I can use my environment for decision making within other applications. I can be manually and automatically grooming and refining an environment using Postman collections, but then I can also develop web, mobile, or other applications that interact with the data I have aggregated and made available as an API. This is difficult to understand without actually setting in motion, which is something I will work to do in a handful of prototypes, including one on the API life cycle I am currently iterating upon.

### Developing Entirely New Environments

I no longer see environments as something that powers a single API, and occasionally a series of API calls. I see them as environments that stand on their own legs and are fed by Postman collections, while also feeding Postman collections—it is a symbiotic relationship between environments and collections. Even with this enlightenment about what is possible with Postman environments I am sure that new horizons will emerge where I didn’t expect them. I don’t see environments as purely a key / value store for secrets and other request settings. I see them as something to define more strategically and use to define the environment(s) in which I execute my API infrastructure.

I realize that environments could be used to define the context of a single Postman collection, but I hadn’t fully thought through how many different collections could be used to define the context of different environments. It is a thought provoking and landscape expanding notion to think about environments and collections working together like this. It has completely changed how I design Postman collections. I still have all of my reference API collections defining all of the capabilities of each of the API platforms I’m using, but I end up using these individual lego building blocks to assemble entirely new environments as well as workflows that help evolve those environments, and move the API-defined business knobs, leavers, and gears towards a desired state of operation.
---
published: true
layout: post
title: Where Does The Exhaust For Your API Operations End Up Being Stored?
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/35201856153_61bc075e4b-nazi-invasion.jpg
author:
  name: kinlane
tags:
  - Operations
  - Data
  - Logs
  - Management
---
As part of my ongoing API [discovery](http://discovery.apievangelist.com/) and [observability](http://observability.apievangelist.com/) research, I am interested in better defining where the common places are within the enterprise that we find API signals. Those log files and other exhaust by-products from API operations that will contain hosts, paths, parameters, and other parts and pieces of the APIs that are already in operation. [API discovery is complex](http://apievangelist.com/2019/07/01/the-complexity-of-api-discovery/) and it isn’t something I think we are going to be able to solve by mandating teams to make their APIs more discoverable, I think it is something we are going to have to do for them. Augmenting their existing work with services and tooling that then defines what APIs they are producing and consuming as part of the existing tools, applications, and systems. Further expanding [the definition of API observability](http://apievangelist.com/2019/12/16/api-observability-is-more-than-just-testing-and-monitoring/) by tapping the exhaust from the outputs of existing infrastructure to help us map out the API landscape that exists within the enterprise. 

I am currently helping [the Optic folks](https://www.useoptic.com/) think beyond the personal value their proxy delivers for individual developers by proxying your desktop, web, mobile, and Postman traffic and automatically generating OpenAPI definitions for you, and consider what the more industrial grade use cases will be. As part of these conversations I am more deeply thinking about how APIs are operated within the enterprise, and being more formal in how I discuss where you can tap into the existing exhaust that is captured around API operations, building on the following list I already have.

*   **Apache Log File -** The most ubiquitous open source web server out there is the default for many API providers.
*   **NGINX Log File -** The next most ubiquitous open source web server is definitely something I should be looking for.
*   **IIS Log File -** Then of course, many Microsoft web server folks are still using IIS to serve up their API infrastructure.
*   **Amazon CloudWatch -** Looking at how the enterprise is centralizing their logs with CloudWatch on AWS.
*   **Google StackDriver -** Google’s multi-platform approach interesting and worth evaluating as part of this work.
*   **Azure Logging -** Looking at how Azure customers are logging their API infrastructure across their operations.
*   **Proxy -** Looking at what proxies are in place and considering the logging that they generate as part of their operations.
*   **API Management -** Queueing up the logging that exists for all of the major API management providers for evaluation.

I know there are more locations out there where you can find the paths and other details for APIs being consumed across the enterprise. I am not just looking for internal APIs consumed, but also external APIs consumed. Basically anything using HTTP 1.1 as a transport, and possesses an XML or JSON payload. If you have specific locations you’d like to see mined for API signals I would like to hear about it no matter how mundane or unique it might be. I am looking for all of the existing outputs that exist across the enterprise for understanding existing API traffic across desktop, web, mobile, device, network, and system integrations. Feel free to email, DM, send over a carrier pigeon with the most common sources of API exhaust at your organization.

I am pretty convinced that we aren’t going to get our schema act together anytime soon. I am also convinced we are ever going to slow down the number of APIs we are deploying to possibly get a better handle on defining, discovery, and observability. We are going to have to get better at API observability and tapping into the existing outputs that exist across our current and future infrastructure. Things just move too fast, and teams are already working too hard. We can’t always expect that they’ll be interested or have the time to define the APIs they are delivering or depending on. We are going to need more tooling and services that will help us make sense of the chaos that is already in place, and continues to expand across the enterprise, otherwise we will just keep stumbling.
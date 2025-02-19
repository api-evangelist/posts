---
layout: post
title: Github As The API Life Cycle Engine
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/undefined/bw-api-engine.png
atomdate: 2016-10-05T18:00:00.000Z
tags:
  - Github
  - Life Cycle
  - Git
---
I am playing around with some new features [from the SDK generation as a service provider APIMATIC](http://apimatic.io), including the ability to deploy my SDKs to Github. This is just many of the ways Github, and more importantly Git is being used as what I'd consider as an engine in the API economy. Deploying your SDKs is nothing new, but when your autogenerating SDKs from API definitions, deploying to Github and then using that to drive deployment, virtualization, containers, serverless, documentation, testing, and other stops along the API life cycle--it is pretty significant.

Increasingly we are publishing API definitions to Github, the server side code that serves up an API, the Docker image for deploying and scaling our APIs, the documentation that tell us what an API does, the tests that validate our continuous integration, as well as the clients and SDKs. I've been long advocating for use of Github as part of API operations, but with the growth in the number of APIs we are designing, deploying, and managing--Github definitely seems like the progressive way forward for API operations.

I will keep tracking on which service providers allow for importing from Github, as well as publishing to Github--whether its definitions, server images, configuration, or code. As these features continue to become available in these companies APIs I predict we will see the pace of continuous integration and API orchestration dramatically pick up. As we are more easily able to automate the importing and exporting of essential definitions, configurations, and the code that makes our businesses and organizations function.
---
layout: post
title: Virtual Containers, Stacks, APIs And Application Management
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/lego_docker.jpg
author:
  name: kinlane
tags:
  - Containers
  - Management
  - Stack
  - APIs
  - ai
---
I've been trying to organize my thoughts around emerging trends in using virtualized app containers, that are providing a much more modular approach to deploying and managing application backends. This is an evolution of earlier thoughts I've had around [virtual API stacks](http://apievangelist.com/2013/01/28/virtualized-api-stacks/ "virtualized API stacks").

From the last week, I'm looking at three separate approaches to application and API management using virtualized containers:

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/docker/docker-logo.gif)](http://docker.io)

**[Docker - The Linux Container Engine](http://www.docker.io/)**  
Docker is an open-source engine which automates the deployment of applications as highly portable, self-sufficient containers. Docker containers are both hardware-agnostic and platform-agnostic, allowing them to run anywhere, freeing you from having to use a particular language, framework or packaging system--making them great building blocks for deploying and scaling web apps, databases and backend services without depending on a particular stack or provider.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/heroku/heroku-logo.png)](http://heroku.com)

**[Heroku - Application Instances with Portable Features and Dependencies](https://blog.heroku.com/archives/2013/7/10/heroku-pipelines-beta)**  
Heroku fork lets you create unique, running instances of existing applications in a single command, making it fast and simple to set up homogenous development, staging and production environments. Heroku pipelines then lets you define the relationship between apps and easily promote from one app to another using what is known as a "slug". On Heroku, a slug is a bundle of your source, fetched dependencies, the language runtime, and compiled/generated output of the build system, ready for execution in development or production environments.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/stackmob/stackmob-logo.png)](http://stackmob.com)

**[StackMob - BaaS Development and Production Workflows](https://blog.stackmob.com/2013/07/ready-set-deploy-with-stackmob-apps/)**  
StackMob has its own unique approach application development workflow which includes use integrated SDKs, and custom configuration for establishing an applications separate development and production environments. Then using this separate environment, Stackmob offers multiple concurrent APIs in production through the use of API snapshots which ensures backwards compatibility of your app over time.

Docker, definitely offers the widest opportunity for what I'm talking about because it is an open source container solution. But it is interesting to see how Heroku is applying this concept to app management at the PaaS level, and how Stackmob is providing a very portable, flexible and backwards compatible API stack for use at the BaaS level.

While we have a long way to go, I think we are getting closer to being able to easily define, meaningful stacks of API resources. I envision a future where I can set out to build an app, bring together exactly the API driven resources I will need from private and public resources, into a single virtualized stack.

![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/docker/lego_docker.jpg)

[Borrowed from Docker Site](http://docker.io)

As a developer I will be able to deploy this stack in development or production environments, take advantage of single application authentication approach without having to go out to each API and get separate application tokens.

Virtualized API resource stacks will have all the monitoring, versioning, scalability I will need allowing me to run them in any environment, helping me keep track of changes and evolution not just in the stack of resources, but also my applications.

These virtualized stacks can be designed for web, mobile or tablets as well as any Internet of Things implementation providing me with instant, secure, modular backends for home, car, sensor and any Internet connected object we can dream up in the future.
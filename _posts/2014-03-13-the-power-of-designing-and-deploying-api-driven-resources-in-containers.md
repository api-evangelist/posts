---
layout: post
title: The Power Of Designing And Deploying API Driven Resources In Containers
image: >-
  https://s3.amazonaws.com/kinlane-productions2/api-evangelist/autodevbot/autodevbot-icon.png
author:
  name: kinlane
tags:
  - Design
  - Containers
  - Resources
  - ai
  - Power
---
[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/autodevbot/autodevbot-icon.png)](http://autodevbot.com/)

One of the transformative experiences of my career was when I worked for SAP, running SAP events as VP of Engineering at WebEvents Global. When I started, I was handed an architecture that was completely hosted in a hostage colocation facility, where I had no support. Long story short is, I was able to redefine my architecture using an API-centric approach, coupled with AWS EC2 and S3 APIs, I re-deployed infrastructure piece by piece into the cloud, exiting my restrictive environment, but then also giving me a newfound agility, and the ability to scale in new an exciting ways, that were very liberating.

This experience was the birth of API Evangelist. After three years doing this, I needed a change, and knew that APIs was the space I wanted to be in, so I started a research blog to study the space--four years later I’m still doing the research and publishing in real-time across the 60+ Github repos that make up API Evangelist. I evangelize APIs to not just spread the gospel of the technical benefits of APIs, I have remained passionate about APIs after four years by evangelizing the business, legal and cultural effects of an API-centric approach to business and government.

The ability to break up operations into little bite size resources, that allow these resources to be used in their current context, but also allowing them to be used in entirely new ways is very appealing. Along with a more modular approach to business, comes a flexibility, agility, and transparency that will change culture at any company, and potentially an entire industry, or [industries as we saw with Amazon](http://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/). In my opinion business operations is about 30% technical, with the other 70% being about humans, and APIs deliver across 100% of that spectrum.

As it did in 2006, the cloud is playing a transformative role in the world APIs in 2014, building on the concept that an API is a single, modular resource, with the introduction of containers. Containers are a new approach to deploying cloud compute resources from providers like [Docker](https://www.docker.io/), [Amazon Cloud Formations](http://aws.amazon.com/cloudformation/), and [Redhat Openshift](https://www.openshift.com/), that allow you to deploy small, isolated, modular compute resources from pre-defined blueprints.

This latest evolution will take one of the most important aspects of APIs and continue to taking it to the next level—modularity. APIs are about deploying simple, modular resources driven from data stores, code, and increasingly devices--containers allow you to deploy these same API resources but are:

*   **Driven From Blueprints** \- Compute definition and functional code stored in blueprints that are managed via social coding environment like Github
*   **Isolated Resources** \- Each resource is independent, allowing for isolation and bundling within meaningful groups of development, deployment and production
*   **Run Anywhere -** Local, sandbox, staging or production in the cloud, on-premise opening up operations to anywhere in the world—resource by resources
*   **API Surface Area -** Simple, well defined API surface area for operations, deployment, testing and monitoring providing a single point of interaction

Using multiple APIs is the way web and mobile apps are being built in 2014, providing a modular way to get the resources you will need for your apps. The containerization solutions available today allow you to take this further, changing the way you design, deploy, manage and scale the tens, hundreds and eventually thousands of API resources you will need for apps in the near future.

As I was exploring this new world of containerization I came across an API monitoring service called [AutoDevbot](http://autodevbot.com/), which monitors all your API endpoints, and notifies you when something goes wrong. Pretty standard feature in a new wave of API integration tools and services I’m seeing emerge, but what is interesting is their [use of Github as a central place to store the settings for the API monitoring service](http://apievangelist.com/2014/02/05/github-as-the-central-presence-definition-configuration-and-source-code-for-your-api/).

After talking with the Garland Kan ([@gargar454](https://twitter.com/gargar454)) of AutoDevBot, about this new containerization movement, and how they are using Github as a central configuration repository for their API monitoring service, I realized how this Github use was just the tip of iceberg when it came to the containerization of AutoDevBot. Everything about AutoDevBot is containerized. You need a new data pipeline? They deploy a data pipeline container. You need a new NoSQL Data Store? They deploy a data pipeline container.

[![](https://s3.amazonaws.com/kinlane-productions2/api-evangelist/autodevbot/autodevbot-data-pipeline.png)](http://autodevbot.com/)

AutoDevBot is a suite of containers, that they’ve organized into a workflow to help you monitor your API endpoints. AutoDevBot can design, develop, deploy, manage, and scale as needed, allowing them to orchestrate an experience, and resulting service that API providers need. What AutoDevbot is doing represents the future of delivering digital services, across all industries.

This isn't my first, and won’t be my last on APIs and virtualized containers. There is a lot of power in the containerization our valuable API resources, changing not just how we deploy APIs, but will evolve how developers consume APIs. APIs deployed as virtual containers, allow for the generation of valuable API blueprints that will be central to the API design process, as well as how define how APIs are deployed. Once deployed, containers will define how we scale, manage and orchestrate the valuable resources we depend on for everyday business, into agile, flexible, efficient and meaningful workflows that will drive the API economy.
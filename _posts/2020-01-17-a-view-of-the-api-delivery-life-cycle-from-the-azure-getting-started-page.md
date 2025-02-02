---
published: true
layout: post
title: A View of the API Delivery Life Cycle from the Azure Getting Started Page
image: >-
  https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-seatlle-shipping-mountain.jpg
author:
  name: kinlane
tags:
  - Lifecycle
  - Azure
  - Deployment
---
I am working my way through doing more work around the multi-cloud deployment of APIs and spending some more time on the Azure platform here in 2020, and I found [their getting started](https://docs.microsoft.com/en-us/azure/) page pretty reflective of what I'm seeing out there when it comes to delivering the next generation of software. When landing on AWS home page it can be overwelming to make sense of everything, and I thought that Azure organized things into a coherent vision of how software is being delivered in the cloud.

### Infrastructure

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-seatlle-shipping-mountain.jpg)

Providing the fundamental building blocks of compute for all of this.

*   Linux virtual machines 
*   Windows virtual machines 

I never thought I"d see Linux and Windows side by side like this.

### Languages

Acknowledging there are multiple programming languages to get the job done.

*   .NET 
*   Python 
*   Java 
*   PHP 
*   Node.js 
*   Go

Again, I never thought I'd see such strong support for anything beyond .NET.

### Application

This nails the different layes in which I see folks delivering API infrastructure.

*   Web Apps 
*   Serverless Functions 
*   Containers 
*   Microservices with Kubernetes 
*   Microservices with Service Fabric

I think its silly to put microservices there, because APIs are delivered in all.

### Database

The database layers behind the APIs we are all delivering across operations.

*   Relational Databases 
*   SQL Database as a service 
*   SQL Database for the edge 
*   SQL Server on an Azure 
*   PostgreSQL database as a service 
*   MySQL database as a service 
*   Azure Cosmos DB (NoSQL)

Again, I am blown away to see MySQL and PostgreSQL along with SQL Server.

### Storage

Where you put all of your blobs and other objects used across your APIs.

*   Blob Storage

I'd say this layer is a little anemic compared with other cloud environmetns.

### Machine Learning

Acknolwedging that machine learning is a growing area of API deployment.

*   Machine Learning 
*   Cognitive Services 
*   Azure Notebooks

This area will continue grow pretty rapidly in coming years in all industries.

### Interfaces

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/stalin-time-seattle-shipping-people-walking.jpg)

The ways in which we are interfacing with the software development life cycle.

*   Azure CLI 
*   Azure PowerShell 
*   Azure portal 
*   Azure mobile app

I am suprised that they do not have APIs as one of the interfaces to be used.

### Orchestration

How the software development life cycle is realized across teams and operations.

*   Azure DevOps 
*   Azure Pipelines 
*   Chef 
*   Jenkins 
*   Terraform
*   Ansible 

It is also interesting to see each cloud provider stake their own native claim against Jenkins.

### Management

Providing a suite of tools for being able to manage and ensure reliability across your operations.

*   Azure Backup 
*   Azure Cost Management 
*   Azure Migrate 
*   Azure Monitor 
*   Azure Policy 
*   Azure Security Center 
*   Azure Lighthouse 
*   Azure Site Recovery

Azure provides this sensible management layer as well as a suite of resources you can use to get up to speed and become an expert in any of these areas, recognizing the importance of education. Capping off a pretty robust list of how software gets delivered which includes your teams being knowledgable in what they are doing.

These building blocks of the Auzre view of the software development life cycle provides for me. It helps me see how they see things. Which reflects how they see their customers. I mine these types of building blocks to use in my API strategy development and storytelling. I'll file these away as part of my API life cycle research, combine them with other research from Google, AWS, and other places. Then use them to help paint a better picture of where things are going when it comes to API operations in the cloud.
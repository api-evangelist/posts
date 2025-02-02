---
layout: post
title: Swagger Definition Driven Sandbox And Simulation Data Templates For APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-sandbox.png
author:
  name: kinlane
tags:
  - Data
  - Definition
  - Sandbox
  - Templates
  - Swagger
  - APIs
---
This is something I’ve written about before in [API Sandbox And Simulator From Carvoyant](http://apievangelist.com/2014/11/05/api-sandbox-and-simulator-from-carvoyant/), and [Salesforce Adds Sandbox Templates](http://apievangelist.com/2013/05/24/salesforce-adds-sandbox-templates/). However it is something I’d like to formalize, and get some new API service providers helping out in this area, or encourage the development of open source solutions.

API service providers like [Apiary](http://apiary.io/) and [SmartBear](http://smartbear.com/) are providing some very interesting solutions for mocking, and virtualizing APIs from API Blueprint, Swagger, and RAML. What I would like to see is the emergence of standalone solutions, providing data sets templates, or whatever you want to call it for populating mock APIs for testing, and integration.

Think of it as [Lorem Ipsum](http://www.lipsum.com/), but structured data meant specifically for APIs, and specific API definitions, as opposed to static mock content for websites. Seems like you could easily scan a machine readable definition for an API, and see if any existing templates exist that match the definition. If there was you could easily populate the mock or virtualized API, if there wasn't maybe you could provide tools for easily building a template, in a way that it could the data could now be reused.

This idea for API sandbox and simulation templates, and for the [Swagger API definition mapper](http://apievangelist.com/2014/12/04/swagger-api-definition-mapper/), both were ideas that came up in my conversation with John Musser ([@johnmusser](https://twitter.com/johnmusser/)). They are ideas I’ve had in my Evernote for a while, but bringing them up today reminded me that both ideas needed to see the light of day, and hopefully I can move them forward at some point.
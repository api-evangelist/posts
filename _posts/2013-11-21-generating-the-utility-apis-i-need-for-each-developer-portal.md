---
layout: post
title: Generating The Utility APIs I Need For Each Developer Portal
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/bw-united-states.png
author:
  name: kinlane
tags:
  - Portal
  - APIs
---
I'm working on an [API for Free Application for Federal Student Aid (FAFSA) form](http://ed-data.github.io/fafsa-api/index.html). I'm working my way through a document from Department of Education called the [2013-2014 Application Processing System Specifications for Software Developers](http://www.ifap.ed.gov/appprocspecsswd/1314AppProcSysSoftwareDevSpecsAugust2013Update.html).

I'm isolating various datasets, and data models, trying to get a feel for all the API resources I will need for the FAFSA API. The specifications provides several tables of data and data models for me to use, including the actual fields for the FAFSA form.

One dataset that is provided in the PDF is a list of states. It makes sense that a list of states is included for any developer who is building a federal student aid application. And I have a states API available elsewhere, that I've used in several other applications, so building this API will for the project will be easy.

Next I'm thinking..how do I replicate this utility API easily for an external API project like this? One of the architectural considerations for the FAFSA API is to make an API that anyone could fork and easily setup for their own use. That includes the state API resource.

This got me thinking about APIs in general. When it comes to APIs, they are ften attached to brands, like the Twilio API or Twitter API. We do not think of single API definitions as ubiquitous, as utilities or as commodities yet. However there are a lot of common API resources like states, IP addresses, counties, cities and many more, that are essential to many web and mobile applications.

Sure these datasets are widely available, but you need to actually design and deploy the actual API. How do we make utility APIs like this deployable anywhere? Anytime? I should be able to select from a library of common API definitions and easily fork, then deploy to my AWS EC2, AWS Cloud Formation or OpenShift platform. I shouldn't have to rely on 3rd party services for all of these resources.

Of course, not all APIs should be this portable, but there are a number of very common APIs that could. I should be able to launch a new API portal for a public audience or even a private development group, and easily publish the unique, as well as the utility APIs they will need to be successful, in a single, easy to navigate API area.
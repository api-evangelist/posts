---
layout: post
title: The Emerging Need For API Key Management Solutions
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key-circle.png
author:
  name: kinlane
tags:
  - Management
  - Solutions
---
[An API key management service targeting Drupal developers came across my radar this week](https://lockr.io/). The service is very focused, in that it is a Drupal module, and is focused on helping Drupal developers manage the keys they use across a single app or installation, but I think it represents a potentially larger trend.

I think this particular solutions is just a symptom of a growing problem for developers of any type--how do you manage the number of keys you are depending on for you application(s). API consumers are in need of a plug and play way of to store, access, and manage the increasing number of API keys they put in use, otherwise we will be looking at a pretty serious security problem, adding to the existing security issues API providers and consumers face.

If you need evidence of the viability of API Key management solutions, [AWS has one](https://aws.amazon.com/kms/). Ok, why don't developer just use AWS? Well they should if it makes sense, but we also need other competing, and complimentary key management solutions, to ensure a healthy API space. Not all users are going to need full-blown IAM solutions, they just need a simple, encrypted place to put all their keys, and some utilities to help them manage them. 

Personally, I store my keys in a JSON config file stored in the private Github repo for any application I develop, and for each org, I have some crude API key management utilities to help me manage turnover. My server apps can cache the config file locally, and my client side apps run on Github Pages, using SSL, and Github OAuth to open up API key access they need.

I will be keeping an eye out for more API key management solutions, and begin the process of documenting the building blocks of these product and services, like I do with other areas. If you are looking to develop an API key management solution, feel free to reach out, as I have some feedback for your road-map along the way, and existing tools you could use to make it easier.
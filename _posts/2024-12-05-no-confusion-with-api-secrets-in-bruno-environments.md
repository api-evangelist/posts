---
published: true
layout: post
title: No Confusion With API Secrets in Bruno Environments
tags:
  - Bruno
  - Secrets
  - Environments
  - Clients
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/uncle-sam-nyc-streeet-dark-steam-1.jpeg
---
I am enjoying working with the [Bruno API client](https://bit.ly/4fpe6FO). It was a nice reset in my toolbox. I recently have downgraded multiple areas of technological toolbox including ditching Lambda and serverless for a good old Linux EC2 instance, and [replacing Postman with Bruno has helped further reduce my cognitive load and anxiety while working](https://apievangelist.com/2024/11/14/elevating-the-bruno-api-client-as-a-cornerstone-of-api-operations/). It really is the simple things that add up over time, but can contribute a lot of anxiety in the moment throughout your day-—things like managing secrets in environments for collections.

## Postman Environment Secrets
Postman environments are a powerful abstraction for the variables you use across your API collections, allowing you to define variables for base URLs, tokens, and other things you use over and over again. In Postman you have the ability to manage environments, name variables, and identify which are secrets, but there is one gotcha, how to use Initial Value or Current Value.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/postman-environments.png" style="padding: 15px;">

This one setting has caused me more anxiety than I think any other Postman feature has over the years. First, the naming sucks — do you have any clue what they do from the name? Well, in short, initial values get synced to the cloud and current values are only stored locally as part of your cookies. Something that once you understand you can work with, but I found the anxiety never goes away.

## Postman Environment Secrets
Now, in Bruno you have the same capabilities, but your environments are attached to each Bruno Collection at the hip, where you can add variables, label them as secret, but there is only one value slot for you to put those secrets in. This is a nod to the simplicity of Bruno, but also to their manifesto regarding running locally and avoiding the cloud due to the way it gets abused by API service providers.

<img src="https://kinlane-productions2.s3.us-east-1.amazonaws.com/bruno-environments.png" style="padding: 15px;">

Any environment variable you put a value in will be stored within the environment in the Git repo where you store your Bruno collections, but if you flag a variable as secret it never leaves your Bruno client and these variables are grouped differently in your Bruno collection, helping you avoid ever publishing a key to Git repository and accidentally sharing with anyone else. The cognitive load and anxiety levels with Bruno are much lower during your average day of working.

## Keeping Things Simple
This little difference between Postman and Bruno environments makes a big difference. Now there are some arguments for why you’d want to share secrets across collections in the cloud, but I’d recommend you approach this from a more holistic level and use something like Hashicorp Vault and some of the environment management for your choice of Git and local programming environment. However, ost API consumers are just making ad hoc calls to APIs locally, and just want to do so securely, and Bruno reduces anxiety significantly for the majority of users.

I am working on a more sophisticated approach to managing my secrets across all of the APIs I consume on a regular basis, but reducing the confusion with API secrets by using Bruno environments has significantly reduced my anxiety on a daily basis. It is funny how little UX capabilities can do this. I like having the option to reassess cornerstones of my development environment like I am currently doing with AWS and Postman, and I will put GitHub on the chopping block next. I am a big fan of reducing complexity, confusion, and refactoring my usage of technology to be more about the fundamentals and not slowly falling down the rabbit hole of technology vendors features.
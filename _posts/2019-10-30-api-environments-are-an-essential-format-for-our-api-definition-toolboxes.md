---
published: true
layout: post
title: API Environments Are An Essential Format For Our API Definition Toolboxes
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/environment_green.jpg
author:
  name: kinlane
tags:
  - Environments
  - Definitions
  - Specifications
---
I am a big fan of there being many versatile and competiting API definitions that describe many different dimensions of how we put APIs to work. I hear folks say that they'd prefer to have one single API definition format to rule them all, which is something I think is short-sighted, lazy, and something that accomodates the future we want, not the one we need. I'm always eager to learn about new API definition formats, and always wiling to support new ones if they help us better define, communicate, and execute the APIs in our lives.

One API definition I am increasingly using in my regular operations, and realizing the importance is the [Postman environment format](https://learning.postman.com/docs/postman/environments-and-globals/manage-environments/), which is a portable machine readable format you can use in unlimited ways. Within the Postman platform you can define one or many Postman environments, and use them across your workspace and collections. Postman environments are simply a list of key value pairs that can be use to define variables in use across the request elements of the API calls you are making. Which can then be outputted as a simple JSON definition, and then published, shared, and used in API services and tooling.

Any variable defined within an environment can be referenced as part of each request header, path, query, or body parameter, and used within pre-response scripts. Defining and standardizing the values we use across our API calls, allowing us to pre-populate values we employ, and managing the secrets we employ as part of API authentication. Allowing us to iterate upon the environments we employ, evolving and shifting how we put APIs to work with small variations and iterations in our enviornments.

Once I have my environments defined, I can apply them by placing variables within each API request. Putting [bearer_token] in headers, and {{name}}, {{title}}, and other {{variables}} within each API request. Which allows me to quickly switch environments to make different API requests without having to change each individual API request. Making environments a pretty flexible way of defining environments for API design, development, QA, and production. Making each API request dynamic, with the static data being passed in as part of a suite of well-defined and organized API environments.

Employing environments have shifted how I design my APIs, and how I define my core API reference definitions. It has also forced me to begin developing a strategy for developing, managing, and evolving my API environments. You can manage environments via the Postman platform, organizing them across workspaces and teams, as well as programmatically manipulate via the Postman API. I'm also exploring different ways of managing them purely as JSON and YAML via GitHub repositories, helping me more dynamically generate, aggregate, and manipulate outside of the Postman platform. Making environments an increasingly critical aspect of how I work with APIs, and think about my API consumption.

I see API environments as a critical API definition building block. While environments are born out of Postman, I see them as being much bigger than just existing as a Postman feature, and a construct and schema that all API providers should be investing in, helping API consumers be more successful, efficient, and flexible in what they are trying to accomplish. I'd like to see API environments used against both Postman collections and OpenAPI, and tooling and services emerge to help API consumers keep this dimension of their API definition world in order, and right at your fingertips like Postman does. You'll see me increasingly prioritize API environments in my API storytelling, not just because I'm working at Postman, but because they are essential to helping move the API definition conversation forward.
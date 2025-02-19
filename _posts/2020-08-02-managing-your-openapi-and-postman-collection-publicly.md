---
published: true
layout: post
title: Managing Your OpenAPI and Postman Collection Publicly
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_api_network_explore.png
author:
  name: kinlane
tags:
  - OpenAPI
  - Collections
---
I am having this conversation with multiple API providers right now, so I wanted to write it up, share it as part of these conversations, while also making it available for my wider audience here on API Evangelist. This is a blueprint for managing the OpenAPI and Postman collection in a very public way, ensuring the machine readable definition for an API is discoverable and easy to access, while also establishing a feedback loop for the community to participate in helping define the roadmap for each API. Leveraging both Postman and GitHub to move an API forward in a much more collaborative and observable way.

### Establishing a Postman Workspace

ssThis blueprint begins with establishing a team workspace in Postman for managing the OpenAPI, and any collections that are derived from the OpenAPI contract, as well as environments that will be used to abstract away tokens, secrets, and other key / value pairs needed for working with the API.  The Postman workspace will become the source of truth for your APIs, which can then be used to power other stops along the API lifecycle.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/workspace_image.png)

You can have a single API in a workspace, or have multiple APIs, it is up to you how you want to organize your workspaces. The goal is to just make sure there is one place you can go to find your APIs, and work with other internal stakeholders on our team to move an API forward. Leveraging the workspace, but also all the comments, history, change logs and other features, helping you get more organized about how APIs are being delivered. 

### Adding OpenAPI to Postman Builder

With a workspace you can now add your APIs using the Postman API builder. Each API allows you to publish an OpenAPI, establishing the central truth for each of your APIs, which we can then use to generate collections for powering stops along the API lifecycle, manage change with version, the change log, and history. Just click on the API tab in Postman and add an API, selecting OpenAPI as the schema format. 

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/buidl_image.png)

It is up to you to define the version for your API, and whether you are starting with the default OpenAPI, or copying and pasting an OpenAPI from another location. As you will see, we’ll be syndicating this OpenAPI, but this workspace provides the central place where OpenAPI contracts live. Providing a single place to track all of the changes that are occurring around each API contract, while still making it available externally outside of Postman for public consumption, and integration into other systems and pipelines.

### Syncing the OpenAPI with GitHub

A Postman workspace provides a private place for internal stakeholders to collaborate around the evolution of each API, but we’ll also want to be able to make the OpenAPI available to the public externally via GitHub. Postman provides you with two-way sync, allowing you to sync your APIs to a Github repository, allowing changes made in Postman to be pushed to GitHub, and changes made to the OpenAPI in the GitHub repository, then pushed back to the workspace.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/github_image.png)

This is the public face of the API. You can accept changes to the OpenAPI definitions published as pull requests via GitHub, but the OpenAPI within the Postman workspace is where the central truth for each API will live. GitHub can be used to gather feedback from the public, while also providing a machine readable artifact for each API that can be used in other systems, pipelines, and services.

### Using GitHub Issues as a Feedback Loop

In addition to leveraging Github to accept pull requests from the community, it opens up the opportunity to use GitHub issues as the feedback loop around the OpenAPI definitions. Letting users report bugs, comments, and provide other feedback around each API, and how it can be used in their applications and system integrations.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/github_issues_image.png)

GitHub issues combined with labels and milestones provides a good way to gather feedback around an OpenAPI spec, organize and discuss changes and enhancements, and build a roadmap that meets everyone’s needs. Using GitHub to open up access to the OpenAPI so that it can be used in other systems, but also be opened up for feedback and evolution out in the open with the community. 

### Generating a Collection for Documentation

Now that we’ve syndicated the OpenAPI to GitHub, we’ll want to derive a Postman collection from the OpenAPI contract we have in our workspace, providing a  generated definition that can be used to publish documentation and make the API available to consumers. To generate a collection you just need to hit the generate button in the API builder, and choose the reason you are publishing it.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/generate_image.png)

Postman will provide the ability to validate collections against the OpenAPI contract as changes occur, allowing you to keep the documentation in sync with the central truth. Allowing changes to be made to each API within the Postman workspace, or via the Github repository, while also keeping it in sync with the documentation that we are going to then publish to the Postman API Network.

### Publishing the Collection to the Public API Network

The final step of this blueprint is to make the API available via to consumers using the public Postman API network. Using the Postman collection we generated from the OpenAPI contract we can publish documentation, which provides the mechanism for publishing the documentation to the Postman public API network so that it can be discovered and used by developers within Postman.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/publish_documentation.png)

With the API published to the API network, developers can discover the APIs via the network in the desktop application or on the web, but they can also quickly put to work with the Run in Postman Button, and using the generated scripts that come with the documentation. You can even publish the Run in Postman button and a link to the documentation on the README for the GitHub repository.

### Managing Your OpenAPI and Postman Collection Publicly

All of this sets the stage for being able to manage your OpenAPI and Postman collection publicly, providing a machine readable contract that developers can use in client tools like Postman, generate SDKs, while also making things discoverable and open for feedback from the community. Leveraging Postman to manage change around each API contract, while also ensuring there is a feedback loop in place for the community to participate in the evolution of each API. Making the API roadmap a much more collaborative and public affair, giving the community a much greater stake in what the future holds for each API.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_api_network_explore.png)

This blueprint won’t be something all API providers will want to put to work. However, for API providers who are looking to ensure an API is discoverable by default, and make the roadmap a much more community affair will benefit from this approach. The goal is to effectively manage the OpenAPI contract for each API, while making it something that can be quickly put to use without friction, while involving the community throughout the process. I am looking to establish this blueprint as the base for many of the conversations I am having with API providers about how to effectively manage their API operations. Providing them with the foundation they need to develop and deliver APIs in an observable and collaborative way--stay tuned.
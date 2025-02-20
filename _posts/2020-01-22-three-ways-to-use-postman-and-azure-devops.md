---
published: true
layout: post
title: Three Ways to Use Postman and Azure DevOps
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/bf_skinner_gears_pipes_plumbing.jpg
author:
  name: kinlane
tags:
  - DevOps
  - CI/CD
  - Azure
  - Pipelines
---
I set out to understand the role that Postman can play in an [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) powered API life cycle. I was fully prepared to crash course Azure Dev Ops, and begin mapping out the role that Postman can play, but before I got started I began Googling Postman + Azure DevOps. I was happily surprised to find a number of rich walk throughs written by the passionate Postman community--surpassing anything I could have put together for a version 1.0 of my Azure DevOps Postman guidance. I will still work to pull together my own official Azure DevOps Postman walkthrough, but to prepare I wanted to publish a summary of what I have found while thinking about how Postman and Azure DevOps can work together. 

### The Postman Basics

Before we get going with what I have found, I wanted to point to a couple of key concepts readers will need to be familiar with before they set out trying to use Postman with Azure DevOps, helping set the tone for any integration. It always helps to start with the basics and not assume all of my readers will understand what Postman delivers.

*   **[Intro to collections](https://learning.postman.com/docs/postman/collections/intro-to-collections/) -** Getting familiar with what collections are, and how they work.
*   **[Intro to collection runs](https://learning.postman.com/docs/postman/collection-runs/intro-to-collection-runs/) -** Understanding the nuance of how collections can be run.
*   **[Intro to scripts](https://learning.postman.com/docs/postman/scripts/intro-to-scripts/) -** Learning about how to script within the collections being run.

It is critical that you have a decent grasp on what are possible with Postman collections, and how it can be applied as part of any CI/CD pipeline. Most developers think of Postman as simply an HTTP client for just making calls to APIs. Once you understand how collections can be run, and the many different ways that scripts can be applied, you will be much more effective at applying as part of any pipeline, including with Azure DevOps--providing a great place to start.

### Testing Azure DevOps APIs Using Postman

While mapping out this walk through I came across two interesting blog posts on using Postman and Azure DevOps together. It will take me weeks to produce a decent integration, so I figured I'd just share these excellent walk-throughs, helping you expedite your awarneeess of how you can use Postman and Azure DevOps together.

*   **[How to Configure Postman / Newman API tests in Azure DevOps or TFS and Publish HTML Results?](https://medium.com/@ganeshsirsi/how-to-configure-postman-newman-api-tests-in-azure-devops-or-tfs-and-publish-html-results-caf60a25c8b9)** \- The numbering of these steps are a little confusing, but it provides a nice walkthrough of the core functionality that Postman can deliver as part of Azure DevOps, in just a handful of steps:
    *   Export postman Tests Collection
    *   Export Environment Variables (Optional)
    *   Create a build pipeline in Azure DevOps/TFS
    *   Verifying the results after execution
    *   Adding build tasks to Azure DevOps / TFS build pipeline
*   **[Mega mash-up: API testing with Postman, Azure DevOps and randomuser.me](http://blog.tdwright.co.uk/2018/10/27/mega-mash-up-api-testing-with-postman-azure-devops-and-randomuser-me/)** - I'd say this one has slightly less detail in it, but I find it useful to have differing views of how to do it, helping me think through what I'd consider to be a healthy approach--I'll leave you to figure out your own way of doing things.

I am going to take both of these walk throughs and distill them down into my own official Postman Azure DevOps guidance and publish to the [Postman Learning Center](https://learning.postman.com/). I'll let you figure out which one works for you and the way you are using Postman and Azure DevOps. Once I have an official walk through published, I'll share here on the blog as a separate story.

### Azure Pipeline Postman Script Management

Another use of Postman as part of Azure DevOps operations that I discovered, and was intrigued by, was a project to manage and govern scripts within Postman collections as part of the Azure Pipeline. Providing a blueprint I'd like to see emerge when it comes to general Postman test script management no matter which pipeline you are using.

*   **[Azure Pipeline Get Postman Scripts](https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.getPostmanJSON)** \- TFS and Azure Pipeline task that will call the Postman API to retrieve the JSON scripts from your account and workspaces. Utilizing this task you can leverage your Postman Enterprise account to manage your scripts, and then pull them down locally so you can put them in a Git repo for better version control. AND/OR You can also utilize this in conjunction with the Postman Newman task in the Marketplace to pull the JSON files locally for use with that task to run your Postman scripts as part of your build and release pipeline.
*   **[Using Postman and Newman in your Azure DevOps Pipeline](http://blog.oneluckidev.com/post/using-postman-and-newman-in-your-azure-devops-pipeline)** - The story behind the Azure Pipeline Postman scripts, providing a little more context of how it can be used as part of your API delivery workflow.

This is a pretty critical pattern for any API provider to think about. I am working with several large enterprise groups on this very subject. Acknowledging that Postman is in heavy use across many teams, and that a more formal strategy is needed to quantify, manage, and govern scripts in place across all teams, workspaces, and collections. Allowing this community example to set a pretty important precedent for how the enterprise can approach their own Postman test governance.

### Azure DevOps Postman Collections

There is one last use of Postman in conjunction with the Azure DevOps platform that I wanted to highlight. Allowing you to orchestrate your Azure DevOps life cycle using a Postman collection for the Azure DevOps API. You can get at the collection via GitHub, but also the Postman documentation they have published to support the Azure DevOps Postman collection usage.

![](https://s3.amazonaws.com/kinlane-productions2/algorotoscope-master/bf-skinner-train-tracks-seattle-waterfront.jpg)

*   **[Azure DevOps Collection](https://github.com/hkamel/azuredevops-postman-collections)** - A Postman collection for the Azure DevOps API, for orchestrating your deployment.
*   **[Azure DevOps API Documentation](https://explore.postman.com/templates/4400/azure-devops-rest-apis-v50)** - Resulting Postman documentation published from collection.

This is what I'd consider to be a Postman life cycle collection. Sure, it is a reference of the Azure DevOps API, but it can also be used to deploy and manage the life cycle of your API. Elevating it one level up from a standard Postman reference collection, demonstrating the versatility in how Postman collections can be applied, depending on what API you are applying it to.

### Putting Postman To Work With Azure DevOps

This dive into the world of Azure DevOps has provided me with three meaningful ways in which Postman can be used with Azure DevOps. I'd say that the testing Azure DevOps APIs with Postman is the most straightforward and common example of the value Postman delivers, when it comes to CI/CD. Secondarily I would say say that the Postman collection for the Azure DevOps API reflects how API consumers and providers are putting Postman collections to work. After that the look at script management provides us with a forward thinking look at how Postman can be used, providing us with three distinct lessons on how to use Postman, but specifically with Azure DevOps.

*   **Pipeline Testing** \- Baking API contract testing into your Azure DevOps pipeline.
*   **Life Cycle Collection** \- Orchestrating the deployment and testing of your APIs.
*   **API Test Governance -** Governing the tests you have in place across all APIs.

This gives me three areas to focus on as I play around with Azure DevOps more. It also provides my readers with some insight into how they can use Postman with Azure DevOps, while I am working on more stories, and some formal tutorials. It provides me with three pretty solid arguments for how Postman can be used with not just Azure DevOps, but also potentially any other CI/CD solution. I'll make sure and begin diving into Jenkins, AWS, Google, CircleCI, and others to see how they are being used, aggregating what I find across the community--similar to what I've done here with Azure DevOps. I enjoy doing this kind of work because it helps me understand what is possible when it comes to the API life cycle, while also providing insight into how Postman can be used by my readers as part of their own CI/CD workflow. #WinWin
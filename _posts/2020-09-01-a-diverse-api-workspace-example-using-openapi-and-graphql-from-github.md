---
published: true
layout: post
title: A Diverse API Workspace Example Using OpenAPI and GraphQL From GitHub
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/github_graphql_openapi.png
author:
  name: kinlane
tags:
  - OpenAPI
  - GraphQL
  - Workspaces
---
Like other successful API patterns REST and GraphQL have been in competition for mindshare since GraphQL emerged on the landscape. GraphQL folks love to say it is a replacement for REST, and the RESTafarians love to point out GraphQL’s weaknesses. When in reality they are both very useful patterns that API providers and consumers should be aware of, and possess in their API toolboxes. In an effort to continue showcasing t[he importance of having a diverse API toolbox](http://apievangelist.com/2020/08/31/a-diverse-api-toolbox-is-the-future/), I wanted to take a walk through my GitHub API workspace, which I use personally, but wanted to take a spin through it to help polish some of the rougher edges of my approach, before I invite some other team members to use my workspace.

### An OpenAPI and GraphQL Core

While I have many orphan API collections laying around in workspaces, my more robust workspaces tend to leverage OpenAPI as the truth of each API, but with the GitHub API I have the opportunity to provide both an OpenAPI and GraphQL API side by side in a single workspace. Providing me with the base for all of the collections I am generating, evolving, and making work for me when integrating, automating, and orchestrating with the GitHub API.

*   **GitHub V3 OpenAPI** - GitHub maintains an OpenAPI definition for their web API, allowing anyone to use as the base for generating docs, mocks, tests, and integrate, automate, and orchestrate across the API lifecycle.
*   **GotJib v4 GraphQL** - I pulled the schema definition language (SDL) for the GitHub GraphQL, and published it as an API, which I can then use to generate collections—there is only a single endpoint, but still provides me with a base.

These two API contracts provide me with a machine readable description of what is possible when it comes to working with the GitHub API. However, both of these require you to be fluent in OpenAPI and / or GraphQL to be able to get what you want out of the GitHub API. It is my job to help Postman customers and partners understand what is possible when it comes to producing on-boarding, reference, workflow, and other types of collections—this is where things begin to get really good, and actually reduce friction for developers.

### GitHub API Reference Collections

The place most Postman users start when it comes to generating Postman collections from OpenAPI or GraphQL is some sort of reference collection that details everything that is going on with an API. I have that for GitHub, providing any developer within my API workspace to see the full menu of what is possible with both of the GitHub APIs.

**Web API V3**

**[Docs](https://documenter.getpostman.com/view/8854915/SzS8rjHv?version=latest)**

Generating a collection for all of the 623 API methods available in the OpenAPI, providing a complete menu of what is possible with the GitHub API.

**GraphQL API V4**

**[Docs](https://documenter.getpostman.com/view/8854915/SzS8rjHv?version=latest)**

I will be honest, this is that robust yet, as I need to understand more about how you make GraphQL SDL more tangible using docs, making it something you can see.

Upon entering my API workspaces I like having a full menu of the GitHub resources available to me. I use these reference documentation to learn about the surface area of the GitHub APIs, then use the to remix on-boarding, workflow, and other types of collections that help me integrate, automate, and orchestrate using the API. These GitHub API reference collections become the seeds for the rest of my GitHub API awareness, informing what is possible when it comes to leverae=ging GitHub as part of my underlying API infrastructure.

### GitHub API On-Boarding Collections

Once I open up my GitHub workspace to other developers I can’t expect all of them to be equipped when it comes to making sense of the vast landscape of the GitHub Web API or the GitHub GraphQL API. They may or may not haver used the API, and will likely possess different levels of experience when it comes to using GitHub. To help deal with this reality, I am always making sure there are one or more on-boarding collections that help introduce people to each of the APIs.

****Web API V3****

**[Docs](https://documenter.getpostman.com/view/35240/TVCe39ME)**

When I don’t want to overwhelm a developer (or non-developer) with all 623 API methods available with the GitHub web API I point them to a hello world collection for the API.

****GraphQL API V4****

**[Docs](https://documenter.getpostman.com/view/35240/TVCe39MD)**

When I don’t think someone will be able to get up to speed on everything GraphQL is, I will point them to a simple on-boarding collection to get them seeing how it works.

These collections help me onboard new developers to the GitHub API without overwhelming them. I want them to be able to understand how to go get their own personal access tokens from their GitHub account, configure their environment, and begin kicking the tires on either of the APIs without much of a cognitive load. I want developers to be successful, and helping minimize the amount of drowning they might have to do when it comes to learning about the API is pretty important.

### GitHub API Workflow Collections

With the foundation of my GitHub API workspace laid, I can get to work defining collections that actually help me accomplish specific tasks on any given day. These are collections that help me make single or a sequence of API calls to accomplish a specific operational level workflow. Here are just a few examples of GitHub API workflow collections that I will use independently, or as the seeds of other workflows for specific organizations, repositories, and other dimensions of the GitHub universe.

****Search Issues****

**[Docs](https://documenter.getpostman.com/view/35240/SWLZeV99)**

Helping me search for different types of GitHub issues and save as a simple request I can use via the Postman platform.

****Search Users****

**[Docs](https://documenter.getpostman.com/view/35240/SWLZeV9A)**

Helping me find GitHub users, helping me automate my discovery of different GitHub accounts associated with orgs and repos.

****Update README****

**[Docs](https://documenter.getpostman.com/view/35240/TVCe39jE)**

Allowing me to automate the publishing of README pages by manually or dynamically assembling and publishing via the API.

****Organization Members****

**[Docs](https://documenter.getpostman.com/view/35240/SWLZeV4q)**

Gives me the ability to pull a list of members from any GitHub organization, helping me map out the landscape.

****Public Events****

**[Docs](https://documenter.getpostman.com/view/35240/SWLZeV4s)**

Allows me to pull all the events that are occurring across all the repos and users I am tuned into as part of my work.

This is just a sampling of the types of workflow collections I can derive from my GitHub Web API or GitHub GraphQL API. I can provide different approaches for different developers to integrate, automate, and orchestrate using the GitHub API. Depending on their understanding and experience with REST or GraphQL APIs they can put a variety of existing GitHub API workflow collections to use, fork, duplicate, and create entirely new types of collections, allowing them to remix and work with the entire surface area of GitHub APIs.

### GitHub API Lifecycle Collections

I could stop there, but really the reason I want all of these reference, onboarding and workflow collections is so I can use the GitHub API to help improve my own API operations. GitHub is an essential piece of infrastructure for delivering my own APIs, and using Postman I want to be able to help scale how developers make sense of not just GitHub, but API operations as a whole—which GitHub is the factory floor of.

*   **Documentation** - I can publish and share documentation from any of these collections, providing portable reference documentation for the GitHub API, as well as documentation for specific API operational level workflows.
*   **Mock Servers** - I can publish mocked representations of any part of the GitHub API as well as any of the workflow collections I am delivering, potentially providing little portable sandbox representations of workflows for testing and onboarding.
*   **Testing** - I can use them to develop testing collections that don’t test the availability and reliability of the GitHub APIs, but of the expected outcomes from each of the workflow collections I am building—I might even test the progress developers make onboarding with APIs.
*   **Support** - I am using GitHub issues as the feedback loop across many of my API projects, making the GitHub issues API a perfect place to help me automate and manage the feedback loop across all of my API operations.

There are many other stops along the API lifecycle that I could be using the GitHub API to help me automate my API operations. Postman isn’t just about consuming the GitHub API, it can also be about helping me automate and orchestrate the API lifecycle behind the APIs I am delivering. Adding another entire dimension to how I use APIs to deliver APIs, leveling up the game when it comes to scaling what you can do with APIs.

### Turning It All Into a Factory Floor

The purpose of a dedicated workspace for GitHub is to provide me with a single place that I can define and put to work all of these different types of collections built on top of the GitHub API. This allows me, and anyone I invite to the workspace to leverage it all as part of an API factory floor, providing all of the tooling, but also the conveyor belts to actually move the API discussion forward across teams, using the following resources.

*   **Runners** - All workflow and lifecycle collections can be manually run by any developer who has access to the workspace, executing all requests contained in the collection, with test results outputted as part of each run.
*   **Monitors** - All workflow and lifecycle collections can be scheduled to run using monitors, executing all the requests within a collection, applying different environments and data files to further focus the outcomes of each execution.
*   **Pipelines** - All workflow and lifecycle collections can also be baked into the pipeline using the open source runner Newman, further baking GitHub API workflows into the existing pipelines that are deploying and integrating with APIs.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/api_platform.png)

Workspaces allow me to organize all of my OpenAPI and GraphQL definitions, demonstrating what is possible, but also the derivative collections that help me actually set these possibilities in motion. This is something that I can open up to other team members, allowing me to define what is possible across both GitHub APIs, while also providing a suite of workflows that anyone with access to the workspace can put into motion using their own keys, tokens, and other relevant context defined as Postman environments.

### It's Not OpenAPI vs GraphQL, it is OpenAPI and GraphQL

[I began talking about a diverse API toolbox a couple years back](https://apievangelist.com/2017/03/10/focus-on-having-a-robust-and-diverse-api-toolbox/), and it is something I’ve been working to keep top of mind by providing real world examples of what I am talking about. GitHub provides me the perfect opportunity to show how these two API patterns and work in concert. It also provides me the ability to showcase what Postman can do when it comes to defining reference collections, but more importantly it helps me make the GitHub API more useful to other developers with onboarding, workflow, and lifecycle collections. Helping abstract away much of the complexity and robustness of the GitHub API, and assisting them in finding the most meaningful workflows they need to be more successful in their jobs. I feel like this is the hard work API providers need to be doing right now. I am happy to help by fleshing this out for some of the leading API providers, but ultimately each API provider and their community is going to have to hammer out what the meaningful workflows are in their world, pushing APIs beyond just providing reference documentation and collections, and defining meaningful capabilities that can be executed manually or automated as part of regular operations, in an DevOps / APIOps way.

I am going to keep working on diverse API toolbox examples like this one. I am going to work involving some SOAP APIs, and look at doing some EDI APIs.  Postman isn’t a TCP client (yet), otherwise I’d be doing this with Websockets with Slacks two APIs, and Kafka, NATS, and other event and message driven APIs. Next I am going to apply this same approach to the Atlassian APIs, and see if I can come up a pretty DevOPs / APIOps set of workspaces that can help us leverage GitHub, JIRA, Confluence, and other infrastructure we use across our APIs in new ways. I am also working through Twitter, Twilio, Stripe, and some other leading APIs to further flesh out what my workspaces look like for these platforms. I am looking to really push my set of API workspace blueprints forward, helping me push forward not just how OpenAPI and GraphQL work together, but also what the relationship is between these two standards and Postman collections. Providing a suite of blueprints that any API provider can follow when it comes to crafting their own workspaces, helping define what the factory floor of their API operations look like. Using leading API providers like GitHub, Atlassian, and others to showcase how modern API operations can work when applying a diverse API toolbox across teams.
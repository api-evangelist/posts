---
published: true
layout: post
title: Searching GitHub (Git) Repos for Evidence of the API Truth Out There
tags:
  - Source Control
  - GitHub
  - Git
  - Source of Truth
image: >-
  https://kinlane-productions2.s3.amazonaws.com/algorotoscope-master/eugenics-los-angeles-downtown-from-afar.jpg
---
I just wired up the GitHub search for my new API Evangelist platform, alongside Google and Bing—-all designed for helping me find evidence of any public APIs, but also across my private and partner APIs. I am hyper aware of the nuance of how Bing, Google, and GitHub search all work, but also the nuance of each of these search API interfaces when it comes to looking for artifacts that contain evidence of APIs. There are pros and cons of each of these areas, and I find GitHub to be a fascinating area because of the foundational role Git and GitHub plays in the enterprise, but also on the open web. GitHub is a treasure trove of public and private API evidence, and where almost anyone should begin when it comes to monitoring the source of truth for APIs. 

GitHub has a robust REST and GraphQL API for searching across repos, code, issues, and other dimensions of GitHub. It provides a quick way to search for OpenAPI, Postman Collections, and other API artifacts. You also get a lot of garbage returned as part of these searches. You also have API rate limit constraints you will need to navigate, but since I have two primary ways that I search across GitHub, I am able to govern this part of API discovery for API operations. 

- **GitHub (REST API)** - I am regularly searching for API artifacts using the GitHub REST API, dialing in the scope at the org, repo, and file type level, but you have to have a clear strategy for what you are searching for so you don’t exhaust your API rate limits—or simply schedule it to accommodate for.
- **GitHub (Git)** - When I am doing bulk work on any of my API repositories I simply use the GitHub REST API organization repo search to get a list of repos, then I automate the cloning, indexing, and cleaning up of repos via an single server instance, allowing me to craft exactly the search index I need.

I am always fascinated by people arguing for mono repo approaches vs multiple repositories, because I simply see orgs and repos as folders. The first line of attack is always the GitHub or GitLab API, but then second line of attack is always via Git, pulling what you need to work with in any given moment. I guess I see the value of separate work streams for APIs and embrace sprawl and the realities of operations over demanding there be order in the way that makes sense to me. People are already working using Git, so this is where you should start with API discovery, governance, and guidance, indexing the existing workspaces that teams use as part of their regular day.

The search mechanisms I am wiring up are designed for me to primarily find evidence of public APIs, but I am also assembling a blueprint for how enterprises can use GitHub, but specifically Git in service of API discovery, governance, and guidance. GitHub is the lowest hanging fruit here, and I will also be developing discovery using AWS, Azure, and other relevant infrastructure to API operations. I've build my API evidence inbox and I am looking to fill it with any evidence I can find across GitHub, the cloud, and other areas we frequent when it comes to the API hustle. The API source of truth is out there, you just have to go looking for it and perpetually aggregate what matters to you and your business.
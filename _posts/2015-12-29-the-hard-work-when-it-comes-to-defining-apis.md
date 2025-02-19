---
layout: post
title: The Hard Work When It Comes To Defining APIs
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-work-in-progress.png
author:
  name: kinlane
tags:
  - APIs
---
[I am stopping and collecting some of my thoughts, as I work through my API stack.](http://stack.apievangelist.com/companies.html) I'm thinking about the more difficult aspects of defining APIs, this time it is for the APIs I depend on to operate my own company. I am working to define the APIs I depend on from over 30 companies, partly to help me better understand the APIs I use, but also partly as theater here for API Evangelist.

To profile APIs, I use OADF and APIs.json as my machine readable definition formats. Not all APIs are created equal, so it takes different approaches to crafting their OADF, from doing it by hand for the easier ones, to scrape scripts that take consistent (static) documentation, and generate an OADF version. As I do this work, here is where the hard work is (will be) in all of this.

*   **Surface** - Finding and documenting the surface area (endpoints + headers + parameters + security). There is just no way to automate this, you only know what you know.
*   **Response** - Documenting the response, and schema using Charles Proxy. The first version of my API definitions rarely have the response modeled, as I depend on Charles Proxy plus a custom API I developed for generating JSON schema from HAR files.
*   **APIs.json** \- Bring together with an APIs.json index, which is fairly automated for me from my central API monitoring system, publishing a single, machine readable index of all the APIs available, as well as the wider API operations.
*   **Menus** - As I complete around 30 of these, I realize that I will need some sort of machine readable, APIs.json driven menu, which puts a list of APIs in a certain order, and maps responses, to following request parameters, so I can daisy chain APis together for more automated tasks.
*   **Updates** - Like knowing the surface area of an API, we only know what we know, and as Rumsfeld says, there are also the known unknowns, as well as the unknown unknowns. I see updates of API definitions, that are done externally being a constantly evolving process, which will never be perfect.

The more APIs I define, the easier some of this gets. However, there will be areas that are going to always require the trained eye of an API expert, comparing definitions to live documentation, and keeping an ear to the ground for any updates. Ideally all of this work gets done by API providers themselves, but until all the benefits are evident, it just isn't going to happen. I am sure there will always be some API providers who never see the value of properly defining the valuable APIs they operate, but my mission is to reduce those numbers

Once I am in API definition mode, I find it hard to do anything else--it just takes over a dedicated portion of my brain, requiring an intense focus. Luckily there is also a certain amount of satisfaction, when you have a "complete" API definition for a popular API. When you see what is possible, once an API is properly defined, the quest to achieve a proper definition can become a little addictive. While i do enjoy doing this, there are simply too many APIs for one person to do, and I will need the help of other passionate API consumers, as well as providers to get the job done properly.
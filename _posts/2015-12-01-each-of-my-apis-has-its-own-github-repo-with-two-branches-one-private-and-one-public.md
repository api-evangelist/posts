---
layout: post
title: >-
  Each Of My APIs Has Its Own Github Repo With Two Branches, One Private And One
  Public 
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github-icon.png
author:
  name: kinlane
tags:
  - My
  - Github
  - Public
  - APIs
  - Git
---
While it will never be 100% complete or perfect, I finally have [my API stack](https://kin-lane.github.io/master/) in a way that lets me add, evolve, scale, and deprecate the endpoints as I need. I've been centralizing all of my APIs, [underneath a single Github organization](https://github.com/Kin-Lane), with each API as a single repository. 

Each API has from one to around 50 endpoints, existing in its own repo, with the master branch set to private, and the gh-pages branch existing as a public repository, and contains the public face of the API (aka portal). This approach is giving me standardized way to manage my fast growing API stack, in a way that I know how to find anything, anytime. 

While the API itself runs on a series of AWS EC2 instances, the private repository is the blueprint for its operation, with server side code, database backups, and details of its overall configuration. The public, or Github Pages branch of the API, acts as the public portal, with docs, client code, OADF file, and of course an [APIs.json file](https://kin-lane.github.io/master/apis.json).

[Within my master API Github organization I have 33 separate API repos](https://kin-lane.github.io/master/), with a single master public page, which acts as the central index of all APIs, with a single portal portal with APIs.json file. I use this page to navigate to all my APIs, and I rely on Github heavily to manage the public, and private side of my API operations (emphasis on public).

Now that I have my house somewhat in order, when I'm looking to start a new API, I simple create a new repo, add an APIs.json, and OADF file, and begin crafting the API resource that I need. Every other [stop along the API life cycle from deployment to deprecation](http://apievangelist.com/2015/11/29/the-api-lifecycle-my-talk-from-defrag-and-apistrat/) uses this central Github repo, and it's API definitions, as its central source of truth and operations. 

I still have a lot of housekeeping left to do, to get things in order, but I can't help myself, and I keep adding new APIs. I'm hoping I can keep automating my API lifeycle using this approach, allowing me to tackle a growing API stack, while staying a one person operation.
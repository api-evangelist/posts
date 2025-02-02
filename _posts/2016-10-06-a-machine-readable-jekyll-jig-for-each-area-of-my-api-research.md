---
layout: post
title: A Machine Readable Jekyll Jig For Each Area Of My API Research
image: >-
  https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-puzzle-piece-gear.png
atomdate: 2016-10-06T16:00:00.000Z
tags:
  - My
  - Jekyll
  - Research
---
[I have over 70 areas of research occurring right now as part of my API lifecycle work](http://apievangelist.com)\--these are areas that I feel directly impact how APIs are provided and consumed today. [Each of these areas lives as a Github repository](https://github.com/api-evangelist), using Github Pages as the front-end of the research. 

I use Github for managing my research because of its capabilities for managing not just code, but also machine readable data formats like JSON, CSV, and YAML. I'm not just trying to understand each area of the API lifecycle, I am working to actually map it out in a machine readable way. 

This process takes a lot of effort, and is always work in progress. To help me manage the workload I rely on Github, the Github API, and Github Pages. On top of this Github base, I leverage the data and content capabilities of Jekyll when you run it on Github Pages (or any other Jekyll enabled server or cloud service). 

Each of my research areas begins with me curating news from across space, then I profile companies and individuals who are doing interesting things with APIs, and the services, tooling, and APIs they are developing. I process all of this information on a weekly basis and publish to each of my research projects as its YAML core. 

An example of this can be seen with [my API monitoring research](http://monitoring.apievangelist.com/) (the most up to date) with the following machine-readable components:

*   **Master APIs.json**  - Each project has a [YAML APIs.json](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/apis.yaml) (I know, I know) core, with a [dynamically generated JSON version in the root of site](http://monitoring.apievangelist.com/apis.json), providing an index of all the companies and APIs included in this research. 
*   **Individual APIs.json** - In addition to the central project APIs.JSON file, there are individual APIs.JSON files for each company included in my research, which includes OpenAPI Specs for all APIs I have indexed.
*   **Blog Atom** \- There is [an atom feed for the blog](http://monitoring.apievangelist.com/data/blog-atom.xml), showing any posts I write on API monitoring.
*   **News Atom** \- There is [an atom feed for the news](http://monitoring.apievangelist.com/data/news-atom.xml), showing any items I have curated as part of my API monitoring.
*   **Blog OPML** \- I include an [OPML file of all the companies](http://monitoring.apievangelist.com/data/blog-opml.xml) who have blogs and feeds available.
*   **Github OPML -** I also started including [an OPML file of all the companies who have a Github profile,](http://monitoring.apievangelist.com/data/github-opml.xml) providing a list of feeds for their accounts.

I also have several machine readable elements available which use [Jekyll](http://jekyllrb.com/) to drive the content for each research project:

*   **Building Blocks -** There is a [YAML core listing of the building blocks](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/buildingblocks.yaml) I aggregate across my API research, as well as a [dynamic JSON one](http://monitoring.apievangelist.com/data/buildingblocks.json).
*   **Curated** - There is a [YAML core listing of the news, stories, and other content I aggregate](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/curated.yaml) across my API research, as well as a [dynamic JSON one](http://monitoring.apievangelist.com/data/curated.json).
*   **Organizations** - There is a [YAML core listing of just the organizations I aggregate](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/organizations.yaml) across my API research, as well as a [dynamic JSON one](http://monitoring.apievangelist.com/data/organizations.json).
*   **Tools** - There is a [YAML core listing the building blocks](https://raw.githubusercontent.com/api-evangelist/monitoring/gh-pages/_data/tools.yaml) I aggregate across my API research, as well as a [dynamic JSON one](http://monitoring.apievangelist.com/data/tools.json).

When I update any of my research areas I just publish the YAML to each of my research project "jigs", and everything is updated. The content is dynamically driven using Liquid, which leverages a YAML-driven core. This allows me to manage 70+ research projects as a one-person operation. The news and analysis is published automatically each day as I do my monitoring, but the organizations, APIs, and tooling is manually triggered as I get the time to dive into each area.

I am writing about this because I just locked down this machine readable core for my [API monitoring research](http://monitoring.apievangelist.com/), which will set the bar for the rest of my research occurring over the next year. I will replicate the latest definition across all 70+ areas over the next couple of weeks as I get the bandwidth to spend within in each area. I couldn't do what I do without Github, its API, Github Pages, and Jekyll--they make my world go round.
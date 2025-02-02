---
layout: post
title: 'Hacker Storytelling: Open and Machine Readable By Default'
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api-evangelist-site/blog/open-machine-readable.png
author:
  name: kinlane
tags:
  - Storytelling
  - Open
---
The primary reason I'm switching all of my [35+ research projects](http://apievangelist.com/2013/07/01/the-expanding-api-evangelist-network/) in the API space to my new [Hacker Storytelling](http://hackerstorytelling.com "Hacker Storytelling") format, is to make everything I do open and machine readable by default.

Every project I'm working on is a Github project, with the public side of the research always available via an API Evangelist subdomain and pointed at a Github page. I publish a series of static pages, wrapped in an API evangelist template, combined with a blog to help organize my curated news and analysis in a chronological way.

Along with all the pages and blog I make all data available as JSON files, which I display across the research project using JavaScript templates. My goal is to make every bit of my research machine readable by default, and ensure the widest possible re-use and distribution.

One active example of this in the wild, is my r[esearch around backend as a service](http://baas.apievangelist.com "Backend as a service"), also known as Baas. I've been monitoring all the providers in the space for the last year, and tracking on some of the common building blocks they use, much like I have been doing with APIs for last three years.

As part of my BaaS research I've published two datasets:

*   [BaaS Providers](http://baas.apievangelist.com/companies.html "BaaS Providers")
*   [Building Blocks](http://baas.apievangelist.com/building-blocks.html "Common Building Blocks of BaaS Providers")

![](https://s3.amazonaws.com/kinlane-productions2/hacker-storytelling/machine-readable-toolbar.png)

You can view the data on the website, using JavaScript templates that display the JSON data on HTML pages. When you view the page that lists the BaaS providers or the common BaaS building blocks, you can choose to get at the data behind the display as JSON, via API, as well as being able to grab the script I use to display the JSON data.

All of my research is ongoing, and I publish news, analysis and new companies and research on a regular basis. My goal with this evolving approach, is to remove machine readable from being after thought, making it default in all my work.

With data available via JSON and API, everything published publicly via Github, in lightweight formats like HTML, CSS, JavaScript and JSON, combined with a [CC BY licensing](http://creativecommons.org/licenses/by/3.0/), everything in my world is open and machine readable by default.
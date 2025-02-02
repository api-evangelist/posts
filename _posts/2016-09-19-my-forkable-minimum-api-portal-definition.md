---
layout: post
title: My Forkable Minimum API Portal Definition
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/minimum_api_portal.png
atomdate: 2016-09-19T16:00:00.000Z
tags:
  - My
  - Portal
  - Definition
---
[I am updating my minimum API portal definition](http://portal.minimum.apievangelist.com/) so I can apply to my own API infrastructure, and since I operate 100% on Github using Github Page and Jekyll, [I have made it a forkable API portal definition that anyone can put to work as their own API developer portal](https://github.com/api-evangelist/portal-minimum). This edition of my API portal definition uses Bootstrap for its UI, and Jekyll for the CMS, making it pretty extensible, and remixable once you fork it on Github.

My goal was to make a simple, forkable API portal, that could act as a checklist for API providers looking to quickly set up a presence for their API. I know many companies, institutions, and government agencies do not have the resources to host one, let alone the time to pay attention to all the details--that is my job! To help API providers out, I have included what I feel is a complete API portal in the \_config.yml for the Jekyll site.

All you have to do is scroll down the API portal definition and comment out what you don't want, and fill in the areas you do, and the Jekyll site should do the rest. I've included the most common areas I like to see from all API providers in my definition.

![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/minimum_api_portal.png)

*   Portal
*   Simple Description
*   Getting Started
*   Authentication
*   Documentation
*   Discovery
*   Code
*   Communication
*   Plans
*   Self-Service Support
*   Direct Support
*   Road Map
*   Issues
*   Change Log
*   Legal

This is just the first draft of my forkable API portal definition. I am going to apply to my Kin Lane, and API Evangelist API infrastructure, as well as a handful of independent APIs that I operate. Then I'm going to apply it to a couple of government APIs I want to simplify, [like the USGS Water Services I am working o](http://apievangelist.com/2016/09/08/defining-api-surface-area-by-converting-html-forms-to-open-api-specs/)n, to harden it a little bit. Sometimes all it takes is to better organize the information for an API, to help make it more accessible, and intuitive, reducing the friction when trying to get up and running.

I would wait a couple weeks to fork the API portal definition, until I stabilize it some more against theother APIs, unless you are feeling adventurous. If you aren't afraid of working with YAML, Jekyll, and Liquid driven HTML, the API portal is pretty fun to play with. If nothing else, [you can use the \_config.yml as a checklist to think about as you review or craft your own API portal](https://github.com/api-evangelist/portal-minimum/blob/gh-pages/_config.yml).
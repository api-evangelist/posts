---
layout: post
title: >-
  Storing API Keys In The Private Master Github Repository For Use In My Github
  Pages
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-key.png
author:
  name: kinlane
tags:
  - My
  - Github
  - Github Pages
  - Keys
  - Git
  - Repository
---
My [public websites have been running on Github Pages for almost two years now](http://kinlane.com/2013/01/02/all-side-projects-are-now-hosted-on-github/), and slowly the private management tools for my platform are moving there as well. Alongside my public websites, I’m adding administrative functions for each projects. Most of the content is API driven already, so it makes sense to put some of the management tools side by side with the content or data that I’m publishing.

These management tools are simple JavaScript, that use the Github API to manage HTML, and JSON files that I have stored either publicly or privately within repositories. I use Github oAuth to work with the Github API, but to work with other APIs I need a multitude of other API keys, including [3Scale generated API keys](http://3scale.net) I use to access my own API infrastructure.

My solution is to store a simple api-keys.json file in the root of my private master repository, and then again using Github oAuth, and the Github API, I access this file, read the content of the JSON file into a temporary array I can use wthin my management tools. If you do not have access to the Github repository, you won’t be able to read the contents of api-keys.json, rendering the management tools useless.

I will develop a centralized solution to helping manage API keys across all my projects, allowing me to re-use keys for different projects, and easily update, or remove outdated API keys. This approach to storing API keys in my private Github repository is allowing me to easily access keys in client-side apps I run on Github Pages, as well as via server-side applications and APIs—something that I’m hoping will give me more flexibility in how I put multiple APIs across my infrastructure.
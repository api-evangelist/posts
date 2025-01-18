---
layout: post
title: Github Needs Client OAuth Proxy For More Complete Client-Side Apps On Pages
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/new_personal_access_token.png
atomdate: 2016-09-28T00:00:00.000Z
tags:
  - Github
  - Client
  - Proxy
  - OAuth
  - Git
---
I'm building what I am calling "micro tools", that run 100% on Github. To push my work forward [I developed a base template I can use for deploying apps that run 100% on Github, using Github Pages, the Github API, and Github OAuth as the engine](https://kinlane.github.io/github-micro-tool/). As a next step I wanted to develop a simple YAML editor that run on Github, allowing me to edit the YAML core of each tool, that is stored in the \_data folder for each Jekyll site I host on Github Pages.

The key to all of this working securely is [Github personal access tokens](https://github.com/settings/tokens), which every Github user has in their accounts under settings. I have employed this approach to running apps on Github Pages before using [OAuth.io as the broker](http://OAuth.io), something that works very well, and I highly recommend it. I have also run using my own Github OAuth proxy, where I had server side code that would do the OAuth dance for me, when authenticating via these apps. The problem is I want them to run 100% on Github, and be forkable by anyone, leaving personal access tokens as my only option.

What would really rock, is if Github provide us with a solution to client-side authentication via the Github API. We can already accomplish the hole thing, we just need Github to offer the same functionality that OAuth.io -- heck I recommend you just buy them and implement. An increasing number of API providers are managing their API operations on Github. From API portal, to documentation and SDKS--they are using Github and Github Pages to take care of business. So having Github OAuth, plus authentication via other providers would be a huge benefit.

Additionally, it would open up Github Pages to be more than just static project pages--they could become little mini apps, or micro tools as I call them. Forking one of my micro tools, then finding your personal access tokens is not that high of a bar, but it would be much nicer if I could just provide them a Github icon, and I could route them through a secure Github OAuth proxy, all without any outside infrastructure. Just a thought Github. Some ramblings about what I'd like to see. For now, I'll rely on the personal access tokens, that is until Github decides to provide us with some sort of OAuth proxy for client-side apps to operate on Github Pages.
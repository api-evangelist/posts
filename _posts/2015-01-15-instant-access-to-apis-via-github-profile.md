---
layout: post
title: Instant Access To APIs Via Github Profile
image: https://s3.amazonaws.com/kinlane-productions2/bw-icons/bw-github.png
author:
  name: kinlane
tags:
  - Github
  - Access
  - APIs
  - Git
---
An open project for me this month, is about better understanding how API keys are provisioned, and how developers are given access to valuable resources. As the number of APIs grows, so do the number of APIs that we depend on in any single application, forcing developer to have to manage many API keys, potentially from many different platforms.

It doesn’t take an API expert to see that many [current practices by API providers requiring consumers to manually register for an account, will not scale](http://apievangelist.com/2014/12/16/with-number-of-apis-continuing-to-grow-account-automation-will-be-key/). We need more automated ways for not just discovering, but also on-boarding with APIs, allowing API consumers to begin using an API, without the current overhead required.

One idea I’m bouncing around in my own APIs, is allowing for instant account creation via an API, allowing you to programmatically generate new account, a new app, and API keys. Of course I do not want these new accounts to have full access to everything, and using my 3Scale API management I will create a specific service tier for these accounts, limiting what they can do.

I want to take this another step further though, I do not want just any spammy, Johnny come-along to be able to create new accounts, without any sort of validation. To help filter, I’m developing a Github account ranking layer, requiring you to pass along your Github user with the generation of new account, app, and keys. I will pull the profile for the Github user, and some statistics on their overall profile, and make some assumptions on the developers trustworthiness.

Immediately this approach will limit API access for a number of people, which in some scenarios may not be ideal, but for my APIs, I’m willing to allow instant account creation, and API access to people who have an active, verifiable Github presence. I’ve been a proponent of API providers providing Github login for developer accounts for some time now, and this seems like a logical next step.

We’ll see where I go with this. It is more an exercise than it is a real thing, but who knows, in addition to [using Github to manage my API keys securely](http://apievangelist.com/2015/01/14/storing-api-keys-in-the-private-master-github-repository-for-use-in-github-pages/), maybe I can actually use it to instantly access new APIs, without having the current overhead I face with each new API on-boarding experience.